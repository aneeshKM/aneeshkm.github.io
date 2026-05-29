import React from 'react';
import { ProjectCard } from './ProjectCard.jsx';

export const ProjectGrid = ({ projects }) => (
  <div className="project-grid">
    {projects.map((project) => (
      <ProjectCard key={project.slug} project={project} />
    ))}
  </div>
);
