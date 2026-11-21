// Writes ../docs/sitemap.xml and ../docs/404.html after `ng build`.
import { readFileSync, writeFileSync, copyFileSync } from 'node:fs';

const data = JSON.parse(readFileSync(new URL('../src/app/data/portfolio.json', import.meta.url), 'utf8'));
const ts = readFileSync(new URL('../src/app/data/portfolio.ts', import.meta.url), 'utf8');
const SITE = ts.match(/SITE_URL = '([^']+)'/)[1];
const url = (lang, path) => SITE + (lang === 'en' ? 'en/' : '') + path;
const paths = ['', 'cv/', ...[...data.experiences, ...data.projects].map((w) => `work/${w.slug}/`)];
const today = new Date().toISOString().slice(0, 10);
const entries = paths.flatMap((path) =>
  ['fr', 'en'].map((lang) => `  <url>
    <loc>${url(lang, path)}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="fr" href="${url('fr', path)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${url('en', path)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url('fr', path)}"/>
  </url>`),
);
writeFileSync(new URL('../../docs/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`);
// Unknown addresses on GitHub Pages show the home page (the app then redirects to it).
copyFileSync(new URL('../../docs/index.html', import.meta.url), new URL('../../docs/404.html', import.meta.url));
console.log(`sitemap.xml: ${entries.length} URLs, 404.html written`);
