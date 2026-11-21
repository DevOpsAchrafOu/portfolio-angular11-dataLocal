# portfolio — context for Claude Code

Owner: Achraf Ouakka (OA), full-stack developer (Java / Spring Boot / Angular), Salé, Morocco. Conversation language: French / Moroccan Darija.

The GitHub repo is **`DevOpsAchrafOu/portfolio`** (renamed from `portfolio-angular11-dataLocal` on 2026-11-21; the old Pages address no longer works).

## What lives where (same layout as nexProMa and FOCAL)
- `docs/` (root) — the **original Angular 11 + Bootstrap 4 portfolio build**, kept online as the "before" version: https://devopsachrafou.github.io/portfolio/
  Its source is `src/`. Its build was restored from git and its links updated to the new address; don't rebuild it unless asked.
- `docs/redesign/` — the **new portfolio**, build output of `portfolio-app/` (`cd portfolio-app && npm run build`): https://devopsachrafou.github.io/portfolio/redesign/
  Never hand-edit; commit it after building.
- `portfolio-app/` — Angular 22 + Tailwind CSS 4, prerendered to static HTML (see `portfolio-app/README.md`). Needs Node 22. `baseHref` `/portfolio/redesign/`, `SITE_URL` in `src/app/data/portfolio.ts`.
- `docs/404.html` is the old app's fallback; a small script at its top sends unknown `/portfolio/redesign/…` addresses to the redesign home (added by `portfolio-app/scripts/sitemap.mjs`).

## Decisions already made (keep them)
- New portfolio: French by default, English under `/en/`. Every text needs both (`portfolio.json` and `UI` in `portfolio.ts`).
- Content comes only from the owner's data (old `src/assets/dataLocal`): no invented experience, dates, clients or metrics. Experiences have no dates in the data: don't add any without the owner.
- Contact: e-mail, phone, LinkedIn, GitHub, Codeforces are public; the street address is **not** shown in the new portfolio, only "Salé, Maroc".
- The SmartClientManagement demo login shown on the old site is a demo account, not a secret.
- Design: ink #0A0F1C + indigo #5B6CF0 → sky #38BDF8 gradient, Space Grotesk + Inter, "AO" monogram. Tailwind CSS 4, View Transitions, CSS scroll-driven animations (owner asked for modern styling tech instead of Bootstrap).

## Deploying
- Push to `main` → GitHub Pages redeploys from `docs/`. Work on a branch, open a PR, merge.
