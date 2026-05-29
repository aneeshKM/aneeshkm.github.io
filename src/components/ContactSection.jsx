import React from 'react';
import { site } from '../site-data.js';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx';

export const ContactSection = () => {
  const links = site.author.links.filter((link) => link.label !== 'Email');

  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell">
        <div className="section-heading contact-heading">
          <h2>Contact</h2>
          <p>Open to software engineering, full-stack, backend, and ML systems roles</p>
        </div>
        <div className="contact-card">
          <div className="contact-connect">
            <h3>Connect</h3>
            <button className="contact-copy" type="button" data-copy-email={site.author.email}>
              <span className="contact-copy-icon" aria-hidden="true">
                <MailIcon />
              </span>
              <span>
                <span className="contact-copy-label" data-copy-label="">Click to copy</span>
                <span className="contact-copy-email">{site.author.email}</span>
              </span>
            </button>
            <a className="button contact-cta" href={`mailto:${site.author.email}`}>Send a message</a>
          </div>
          <div className="contact-social">
            <p>Find me on</p>
            <div className="contact-social-links">
              {links.map((link) => (
                <a
                  className="contact-social-link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  key={link.label}
                >
                  {link.label === 'GitHub' ? <GitHubIcon /> : <LinkedInIcon />}
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
