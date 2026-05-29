import React from 'react';
import { ArticleBlocks } from '../components/ArticleBlocks.jsx';
import { GitHubIcon } from '../components/icons.jsx';

export const ProjectPage = ({ project }) => (
  <article className="project-page">
    <header className="page-hero project-hero">
      <div className="section-shell project-hero-grid">
        <div>
          <p className="eyebrow">Project</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="project-meta">
            <span>{project.status}</span>
            <span>{project.duration}</span>
            <span>{project.role}</span>
          </div>
          <div className="hero-actions">
            <a
              className="button secondary project-github-button"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </div>
        <img className="project-hero-image" src={project.image} alt="" />
      </div>
    </header>

    <div className="section-shell project-detail-grid">
      <aside className="project-aside">
        <h2>Tech Stack</h2>
        <div className="tag-cloud">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <h2>Highlights</h2>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </aside>
      <ArticleBlocks blocks={project.content} />
    </div>
  </article>
);
