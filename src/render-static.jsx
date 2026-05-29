import React from 'react';
import path from 'node:path';
import { Page } from './components/Page.jsx';
import { loadProjects } from './lib/projects.js';
import { root } from './lib/paths.js';
import { renderDocument, writePage } from './lib/static-pages.js';
import { projectUrl } from './lib/urls.js';
import { HomePage } from './pages/HomePage.jsx';
import { ProjectPage } from './pages/ProjectPage.jsx';
import { ProjectsIndexPage } from './pages/ProjectsIndexPage.jsx';
import { site } from './site-data.js';

const checkOnly = process.argv.includes('--check');
const outArg = process.argv.find((arg) => arg.startsWith('--out='));
const outputRoot = path.resolve(root, outArg ? outArg.slice('--out='.length) : 'dist');

const createPages = (projects) => [
  {
    file: 'index.html',
    html: renderDocument(
      <Page title={site.author.name} type="website" url="/">
        <HomePage projects={projects} />
      </Page>,
    ),
  },
  {
    file: 'projects/index.html',
    html: renderDocument(
      <Page title="Projects" url="/projects/">
        <ProjectsIndexPage projects={projects} />
      </Page>,
    ),
  },
  ...projects.map((project) => ({
    file: `projects/${project.slug}/index.html`,
    html: renderDocument(
      <Page title={project.title} url={projectUrl(project)}>
        <ProjectPage project={project} />
      </Page>,
    ),
  })),
];

const main = async () => {
  const projects = await loadProjects();
  const pages = createPages(projects);

  for (const page of pages) {
    await writePage({
      checkOnly,
      contents: page.html,
      filePath: page.file,
      outputRoot,
    });
  }
  const outputLabel = path.relative(root, outputRoot) || '.';
  console.log(
    checkOnly
      ? `Generated React static pages are current in ${outputLabel}/.`
      : `Generated React static pages in ${outputLabel}/.`,
  );
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
