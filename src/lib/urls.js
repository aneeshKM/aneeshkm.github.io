import { site } from '../site-data.js';

export const projectUrl = (project) => `/projects/${project.slug}/`;

export const absoluteUrl = (pathname = '/') => `${site.baseUrl}${pathname === '/' ? '/' : pathname}`;
