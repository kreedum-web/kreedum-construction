# Kreedum Construction

The Construction vertical of Kreedum International Private Limited — civil
construction, prefabricated buildings, and sports infrastructure — built
with React, Vite, Tailwind CSS, and React Router.

This app was split out of the original combined `kreedum-sports` repo so
Construction can be deployed to its **own subdomain**
(e.g. `construction.kreedum.com`) independently of the main Sports site
(`kreedum.com`). It is a standalone, deployable project on its own.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This runs `vite build`, then `scripts/generate-route-meta.mjs`, which
writes a small static `index.html` per route (with route-specific
`<title>`/`<meta>` tags) into `dist/` — see that script's comments for why.

Output goes to the `dist/` folder — upload its contents to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc.).

Because the app uses real client-side routing via React Router, your host
needs a rewrite rule so refreshing e.g. `/projects` doesn't 404. This repo
already includes:
- `public/_redirects` — for Netlify
- `vercel.json` — for Vercel

Other hosts need an equivalent "serve index.html for any unmatched route"
rule.

## Routes

All routes live at the domain root (this app is meant to be deployed as
the entire content of its subdomain, not nested under a path):

| Route | Page |
|-------|------|
| `/` | Construction homepage |
| `/civil-construction` | Civil Construction vertical page |
| `/prefabricated-buildings` | Prefabricated Buildings vertical page |
| `/sports-infrastructure` | Sports Infrastructure vertical page |
| `/projects` | Project portfolio (filterable by vertical) |
| `/about` | About page |
| `/contact` | Contact page |

## Linking to/from Kreedum Sports

Construction and Sports are separate deployments now, so any link between
them is a real cross-domain URL, not an in-app route. That URL lives in
one place:

```js
// src/config/crossSiteLinks.js
export const SPORTS_SITE_URL = "https://www.kreedum.com";
```

The "← Kreedum.com" link in the nav menu dropdown reads from this
constant. If your Sports domain is ever different, update it here — no
other file needs to change.

If your Construction subdomain ends up being something other than
`construction.kreedum.com`, also update it in:
- `vite.config.js` — sitemap `hostname`
- `index.html` — canonical link + `og:*` URLs + JSON-LD schema
- `scripts/generate-route-meta.mjs` — `SITE_URL`

## Project structure