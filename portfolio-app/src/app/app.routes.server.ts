import { RenderMode, ServerRoute } from '@angular/ssr';
import { ALL_WORK } from './data/portfolio';

const slugs = async () => ALL_WORK.map((w) => ({ slug: w.slug }));

/** Every page is generated as static HTML at build time (GitHub Pages, no server). */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'en', renderMode: RenderMode.Prerender },
  { path: 'work/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs },
  { path: 'en/work/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs },
  { path: 'cv', renderMode: RenderMode.Prerender },
  { path: 'en/cv', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];
