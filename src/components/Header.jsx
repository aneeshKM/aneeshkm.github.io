import React from 'react';
import { site } from '../site-data.js';

export const Header = () => {
  const { author } = site;

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="/#home" aria-label={`${author.name} home`}>
          <span className="brand-mark">{author.initials}</span>
          <span>{author.name}</span>
        </a>
        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="sr-only">Menu</span>
        </button>
        <div id="site-menu" className="nav-links">
          {site.navigation.map((item) => (
            <a key={item.url} href={item.url}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
