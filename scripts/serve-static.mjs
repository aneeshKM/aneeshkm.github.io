import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const root = path.resolve(repoRoot, process.argv[2] || '.');
const host = process.env.HOST || '127.0.0.1';
const preferredPort = Number(process.env.PORT || 1313);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

async function getFilePath(requestUrl) {
  const url = new URL(requestUrl || '/', `http://${host}`);
  let pathname = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  let filePath = path.resolve(root, pathname);

  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    return null;
  }

  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      return path.join(filePath, 'index.html');
    }
    return filePath;
  } catch {
    if (!path.extname(filePath)) {
      return path.join(filePath, 'index.html');
    }
    return filePath;
  }
}

async function handleRequest(request, response) {
  const filePath = await getFilePath(request.url);

  if (!filePath) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) {
      throw new Error('Not a file');
    }
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  response.writeHead(200, {
    'cache-control': 'no-store',
    'content-type': mimeTypes[ext] || 'application/octet-stream',
  });
  createReadStream(filePath).pipe(response);
}

function listen(port) {
  const server = createServer(handleRequest);

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE' && port < preferredPort + 20) {
      listen(port + 1);
      return;
    }
    throw error;
  });

  server.listen(port, host, () => {
    console.log(`Static portfolio running at http://${host}:${port}/`);
  });
}

listen(preferredPort);
