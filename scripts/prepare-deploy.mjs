import { cp, mkdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = path.join(root, 'dist');

const deployEntries = [
  '.nojekyll',
  'css',
  'js',
  'media',
  'projects',
  'robots.txt',
  'sitemap.xml',
  'uploads',
];

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

await rm(dist, { force: true, recursive: true });
await mkdir(dist, { recursive: true });

for (const entry of deployEntries) {
  const source = path.join(root, entry);
  if (!(await exists(source))) {
    continue;
  }

  await cp(source, path.join(dist, entry), {
    force: true,
    recursive: true,
    filter: (sourcePath) => {
      const basename = path.basename(sourcePath);
      if (basename === '.DS_Store') {
        return false;
      }
      if (entry === 'projects' && (basename.endsWith('.html') || basename.endsWith('.xml'))) {
        return false;
      }
      return true;
    },
  });
}

console.log(`Prepared static site in ${path.relative(root, dist)}/`);
