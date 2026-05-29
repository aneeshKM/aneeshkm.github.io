import React from 'react';
import { site } from '../site-data.js';
import { absoluteUrl } from '../lib/urls.js';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';

export const Page = ({ children, description = site.description, title, type = 'article', url = '/' }) => {
  const pageTitle = title === site.author.name ? title : `${title} | ${site.author.name}`;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="author" content={site.author.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={absoluteUrl(url)} />
        <link rel="canonical" href={absoluteUrl(url)} />
        <link rel="stylesheet" href="/css/site.css?v=20260528145541" />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main" data-pagefind-body="">
          {children}
        </main>
        <Footer />
        <script src="/js/site.js" defer />
      </body>
    </html>
  );
};
