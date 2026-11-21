# Portfolio — Achraf Ouakka (Angular 22)

Published at https://devopsachrafou.github.io/portfolio/redesign/ (the original Angular 11 version stays at https://devopsachrafou.github.io/portfolio/)

Angular 22 (standalone components, signals, zoneless), **Tailwind CSS 4**, static prerendering (SSG),
View Transitions between pages and CSS scroll-driven animations. French by default, English under `/en/`.

Needs Node 22.22+ (or 24.15+). The original Angular 11 version is still in `../src` for reference.

```bash
cd portfolio-app
npm install
npm start        # http://localhost:4200/portfolio/redesign/
npm run build    # writes the static site and sitemap.xml to ../docs/redesign/ (commit it)
```

## Pages

| URL | Page |
| --- | --- |
| `/`, `/en/` | Home: intro, skills, experience, side projects, education, contact |
| `/work/{slug}/`, `/en/work/{slug}/` | One page per experience or project: tasks, tech, screenshots, links |
| `/cv/`, `/en/cv/` | Resume |

## Where things are

| Path | What it holds |
| --- | --- |
| `src/app/data/portfolio.json` | All content (FR / EN): person, experiences, projects, education, training. Generated once from the old `src/assets/dataLocal/*.json` (typos fixed, English added), now edited here directly |
| `src/app/data/portfolio.ts` | Types, interface texts (`UI`), skill groups, `SITE_URL` |
| `src/app/i18n.ts`, `src/app/seo.ts` | Language from the URL, links; title, meta, Open Graph, canonical, hreflang, JSON-LD |
| `src/app/pages/` | Home, work detail, CV |
| `src/styles.css` | Tailwind import, theme tokens (`@theme`), shared component classes, animations |
| `public/img/` | Photo, illustrations, project screenshots (`img/projects/`) |
