import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { renderToStaticMarkup } from 'react-dom/server';

export const renderDocument = (element) => `<!doctype html>${renderToStaticMarkup(element)}\n`;

export const writePage = async ({ checkOnly, contents, filePath, outputRoot }) => {
  const target = path.join(outputRoot, filePath);

  if (checkOnly) {
    const current = await readFile(target, 'utf8');
    if (current !== contents) {
      throw new Error(`${filePath} is out of date. Run corepack pnpm run generate.`);
    }
    return;
  }

  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, contents);
};
