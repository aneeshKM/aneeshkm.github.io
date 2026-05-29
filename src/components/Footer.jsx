import React from 'react';
import { site } from '../site-data.js';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx';

const year = new Date().getFullYear();

const FooterIcon = ({ label }) => {
  if (label === 'GitHub') {
    return <GitHubIcon />;
  }

  if (label === 'LinkedIn') {
    return <LinkedInIcon />;
  }

  return null;
};

export const Footer = () => {
  const links = site.author.links.filter((link) => link.label !== 'Email');

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <p>&copy; {year} {site.author.name}</p>
        <div className="footer-links">
          <a className="footer-link footer-link-email" href={`mailto:${site.author.email}`}>
            <MailIcon />
            <span>Email</span>
          </a>
          {links.map((link) => (
            <a className="footer-link" key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
              <FooterIcon label={link.label} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
