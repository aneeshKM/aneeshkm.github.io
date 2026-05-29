import React from 'react';
import { slugify } from '../lib/format.js';
import { projectUrl } from '../lib/urls.js';
import { ArrowIcon, GitHubIcon } from './icons.jsx';

export const ProjectCard = ({ project }) => {
  const tagValues = project.tags.map(slugify).join(' ');

  return (
    <article className="project-card" data-project-card="" data-project-tags={tagValues}>
      <a className="project-card-media" href={projectUrl(project)} aria-label={project.title}>
        <img src={project.image} alt="" loading="lazy" />
        <span className="status-pill">{project.status}</span>
      </a>
      <div className="project-card-body">
        <div className="project-card-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h3>
          <a href={projectUrl(project)}>{project.title}</a>
        </h3>
        <p>{project.summary}</p>
        <div className="project-card-actions">
          <a className="project-card-action" href={projectUrl(project)}>
            <ArrowIcon />
            Details
          </a>
          <a
            className="project-card-action project-card-github"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};
