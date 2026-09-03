# Hung Nguyen · Portfolio

React 19 + TypeScript + Vite. Static output, no backend.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + build to dist/
npm run preview   # serve dist/ locally
```

## Edit content

All copy lives in `src/data.ts`: profile, hero facts, projects, skill groups, experience, contact links. Components in `src/components/` only render that data.

Two placeholders to replace before publishing:

1. `profile.linkedin` in `src/data.ts`.
2. The `placeholder: true` entry at the end of `experience` in `src/data.ts`.

## Deploy to Railway

`railway.json` tells Railway how to build and run the site:

- Build: Nixpacks runs `npm ci`, then `npm run build` produces `dist/`.
- Start: `npm start` serves `dist/` with [`serve`](https://github.com/vercel/serve) on Railway's `$PORT`, with SPA fallback.

Setup, once:

1. Railway dashboard → New Project → Deploy from GitHub repo → pick this repo.
2. Every push to `main` redeploys.
3. Settings → Networking → Generate Domain (or attach a custom one).

Run the production build locally the same way Railway does:

```bash
npm run build && PORT=3000 npm start
```
