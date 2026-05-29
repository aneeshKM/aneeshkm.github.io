import React from 'react';
import { ProjectGrid } from '../components/ProjectGrid.jsx';

export const ProjectsIndexPage = ({ projects }) => (
  <>
    <section className="page-hero">
      <div className="section-shell narrow">
        <p className="eyebrow">Projects</p>
        <h1>Projects</h1>
      </div>
    </section>
    <section className="section">
      <div className="section-shell">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  </>
);
