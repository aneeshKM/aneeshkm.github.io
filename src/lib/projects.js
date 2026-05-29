import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import YAML from 'yaml';
import { projectDataDir } from './paths.js';

export const loadProjects = async () => {
  const entries = await readdir(projectDataDir, { withFileTypes: true });
  const projects = [];

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.yml')) {
      continue;
    }

    const filePath = path.join(projectDataDir, entry.name);
    const project = YAML.parse(await readFile(filePath, 'utf8'));
    projects.push(project);
  }

  return projects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
};
