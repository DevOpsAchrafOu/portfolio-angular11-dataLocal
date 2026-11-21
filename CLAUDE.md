# portfolio-angular11-dataLocal — context for Claude Code

Owner: Achraf Ouakka (OA), full-stack developer (Java / Spring Boot / Angular), Salé, Morocco. Conversation language: French / Moroccan Darija.

## What lives where
- `portfolio-app/` — the portfolio, **Angular 22 + Tailwind CSS 4**, prerendered to static HTML (see `portfolio-app/README.md`). Needs Node 22.
- `docs/` — build output of `portfolio-app` (`cd portfolio-app && npm run build`), served by GitHub Pages (branch `main`, folder `/docs`). Never hand-edit; commit it after building.
  Live: https://devopsachrafou.github.io/portfolio-angular11-dataLocal/
- `src/` — the original Angular 11 + Bootstrap 4 portfolio, kept for reference (its build was replaced in `docs/` on 2026-11-21).

## Decisions already made (keep them)
- French by default (`/`), English under `/en/`. Every text needs both (`portfolio.json` and `UI` in `portfolio.ts`).
- Content comes only from the owner's data (old `src/assets/dataLocal`): no invented experience, dates, clients or metrics. Experiences have no dates in the data: don't add any without the owner.
- Contact: e-mail, phone, LinkedIn, GitHub, Codeforces are public; the street address is **not** shown, only "Salé, Maroc".
- The SmartClientManagement demo login shown on the old site is a demo account, not a secret.
- Design: ink #0A0F1C + indigo #5B6CF0 → sky #38BDF8 gradient (continuity with the old portfolio), Space Grotesk + Inter, "AO" monogram.

## Deploying
- Push to `main` → GitHub Pages redeploys from `docs/`. Work on a branch, open a PR, merge.
