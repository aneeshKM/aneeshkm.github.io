import React from 'react';
import { ContactSection } from '../components/ContactSection.jsx';
import { ProjectGrid } from '../components/ProjectGrid.jsx';
import { SkillIcon } from '../components/SkillIcon.jsx';
import { dateRange, formatYear } from '../lib/format.js';
import { site } from '../site-data.js';

export const HomePage = ({ projects }) => {
  const { author } = site;
  const experienceGroups = ['Professional Experience', 'Academic Experience'];

  return (
    <>
      <section id="home" className="hero-section">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Hi, I&apos;m</p>
            <h1>{author.name}</h1>
            <p className="hero-role">{author.role}</p>
            <p className="hero-bio">{author.bio}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#work-experience">Work Experience</a>
              <a className="button secondary" href="#projects">View Projects</a>
              <a className="button secondary" href="/uploads/resume.pdf">Download Resume</a>
              <a className="button ghost" href={`mailto:${author.email}`}>Email</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img className="hero-photo" src={author.photo} alt={author.name} />
            <div className="hero-facts" aria-label="Focus areas">
              {author.focusAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-muted">
        <div className="section-shell">
          <div className="section-heading skills-heading">
            <h2>Skills</h2>
            <p>Core technologies across backend engineering, full-stack development, AI, data, and MLOps.</p>
          </div>
          <div className="skills-showcase">
            {site.skills.map((category) => (
              <section className="skill-category" key={category.name}>
                <h3 className="skill-category-title">
                  <span>{category.name}</span>
                </h3>
                <div className="skill-card-grid">
                  {category.items.map((skill) => (
                    <article className="skill-card" key={skill.label}>
                      <div className="skill-icon">
                        <SkillIcon icon={skill.icon} />
                      </div>
                      <span>{skill.label}</span>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-shell narrow">
          <div className="section-heading">
            <p className="eyebrow">Home</p>
            <h2>Education</h2>
          </div>
          <div className="education-list">
            {site.education.map((item) => (
              <article className="education-item" key={item.degree}>
                <h3>
                  {item.degree}, {item.institution}{' '}
                  <span>{formatYear(item.start)}-{formatYear(item.end)}</span>
                </h3>
                <p>{item.summary}</p>
              </article>
            ))}
            <p className="coursework">
              <strong>Relevant Coursework:</strong> {site.relevantCoursework.join(', ')}
            </p>
          </div>
        </div>
      </section>

      <section id="work-experience" className="section section-muted">
        <div className="section-shell">
          <div className="section-heading">
            <h2>Work Experience</h2>
          </div>
          <div className="experience-columns">
            {experienceGroups.map((category) => (
              <section className="experience-column" key={category}>
                <h3>{category}</h3>
                {site.experience
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <article className="experience-item" key={`${item.org}-${item.role}`}>
                      <div className="experience-title">
                        <div>
                          <h4>{item.role}</h4>
                          <p>{item.org}</p>
                        </div>
                        <span>{dateRange(item)}</span>
                      </div>
                      <p className="experience-location">{item.location}</p>
                      <ul>
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-shell">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>Featured GitHub repositories and selected software, AI, data, and MLOps work.</p>
          </div>
          <div className="project-filter" aria-label="Project filters">
            {site.projectFilters.map((filter) => {
              const active = filter.value === 'featured';
              return (
                <button
                  className={`project-filter-button${active ? ' is-active' : ''}`}
                  type="button"
                  data-project-filter={filter.value}
                  aria-pressed={String(active)}
                  key={filter.value}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <ContactSection />
    </>
  );
};
