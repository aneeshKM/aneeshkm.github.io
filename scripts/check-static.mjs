import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

const requiredPaths = [
  'css/site.css',
  'js/site.js',
  'media/authors/me.png',
  'uploads/resume.pdf',
  'src/site-data.js',
  'src/render-static.jsx',
  'src/data/projects/01-jitsi-recap-mlops.yml',
  'dist/index.html',
  'dist/css/site.css',
  'dist/js/site.js',
  'dist/projects/index.html',
  'dist/projects/transformer-forecasting/index.html',
  'dist/media/authors/me.png',
  'dist/uploads/resume.pdf',
  '.github/workflows/deploy.yml',
];

const skippedDirectories = new Set(['.git', '.vscode', 'node_modules']);
const skippedFiles = new Set(['.env', '.env.local', 'Thumbnail.png']);
const textExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.mjs',
  '.txt',
  '.yaml',
  '.yml',
  '.xml',
]);

const forbiddenStrings = [
  { label: 'old generator reference', value: 'hu' + 'go' },
  { label: 'old template reference', value: 'hu' + 'goblox' },
  { label: 'old NYU email', value: 'akm' + '9999' },
  { label: 'old Accenture email', value: 'aneeshkhushal' + '.mokashi' },
  { label: 'mobile number', value: '917' + '436' + '6620' },
  { label: 'mobile number', value: '+191' + '743' + '66620' },
];

async function pathExists(relativePath) {
  try {
    await stat(path.join(root, relativePath));
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && skippedDirectories.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }

    if (skippedFiles.has(entry.name) || !textExtensions.has(path.extname(entry.name))) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

const missing = [];
for (const requiredPath of requiredPaths) {
  if (!(await pathExists(requiredPath))) {
    missing.push(requiredPath);
  }
}

const violations = [];
const files = await collectFiles(root);

for (const file of files) {
  const text = (await readFile(file, 'utf8')).toLowerCase();
  for (const forbidden of forbiddenStrings) {
    if (text.includes(forbidden.value)) {
      violations.push(`${path.relative(root, file)} contains ${forbidden.label}`);
    }
  }
}

if (missing.length || violations.length) {
  for (const item of missing) {
    console.error(`Missing required file: ${item}`);
  }
  for (const item of violations) {
    console.error(item);
  }
  process.exit(1);
}

console.log('Static site check passed.');
