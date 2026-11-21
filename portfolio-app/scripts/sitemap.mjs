// Writes ../docs/redesign/sitemap.xml and the redesign redirect in ../docs/404.html after `ng build`.
import { readFileSync, writeFileSync } from 'node:fs';

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
writeFileSync(new URL('../../docs/redesign/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`);
// GitHub Pages serves only docs/404.html (the old Angular 11 app). An unknown /portfolio/redesign/… address
// is sent to the redesign home instead, by a small script at the top of that file (added once, kept on rebuilds).
const notFound = new URL('../../docs/404.html', import.meta.url);
const marker = '<!-- redesign-404 -->';
let html = readFileSync(notFound, 'utf8');
if (!html.includes(marker)) {
  html = html.replace('<head>', `<head>${marker}<script>if(location.pathname.indexOf('/portfolio/redesign/')===0)location.replace('/portfolio/redesign/')</script>`);
  writeFileSync(notFound, html);
}
console.log(`redesign/sitemap.xml: ${entries.length} URLs; docs/404.html redirects unknown redesign pages`);
