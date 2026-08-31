// Runs after `vite build`. Vite outputs a single dist/index.html shared by
// every route (this is a client-side-routed SPA). Link-preview crawlers
// (WhatsApp, iMessage, Slack, Facebook, etc.) don't execute JavaScript —
// they just read the <meta> tags of whatever HTML they fetch — so every
// link shared from this site showed the same "Kreedum Sports" card,
// even for Construction pages.
//
// This script copies dist/index.html once per route below, swaps in
// route-specific <title>/description/og:* tags, and writes each copy to
// dist/<route>/index.html. Hosts (Vercel/Netlify) serve an exact static
// file at a path before falling back to the SPA rewrite, so:
//   - a crawler hitting /construction/civil-construction gets a small
//     static HTML file with Construction/Civil-specific meta tags.
//   - a real visitor gets the exact same file, which loads the exact same
//     JS bundle and boots the exact same React app/router as before —
//     nothing about the app's behavior changes for people.
//
// Adding a new route: add an entry to ROUTES below (or, for a new
// construction vertical, it's picked up automatically from
// CONSTRUCTION_VERTICALS — no script changes needed).

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { CONSTRUCTION_VERTICALS } from "../src/data/constructionVerticals.js";
import { HERO_VIDEO } from "../src/config/media.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://construction.kreedum.com";

const CONSTRUCTION_APP_NAME = "Kreedum Construction";

/** Static (non-vertical) Construction pages. */
const STATIC_CONSTRUCTION_ROUTES = [
  {
    route: "/",
    title: "Kreedum Construction | Civil, Prefab & Sports Infrastructure Builders",
    description:
      "Kreedum Construction delivers civil construction, prefabricated buildings, and sports infrastructure projects across India.",
    image: HERO_VIDEO.poster,
  },
  {
    route: "/projects",
    title: "Our Projects | Kreedum Construction",
    description:
      "Explore Kreedum Construction's portfolio of civil, prefabricated, and sports infrastructure projects across India.",
    image: HERO_VIDEO.poster,
  },
  {
    route: "/about",
    title: "About Us | Kreedum Construction",
    description:
      "Learn about Kreedum Construction — building with integrity, delivering with excellence.",
    image: HERO_VIDEO.poster,
  },
  {
    route: "/contact",
    title: "Contact Us | Kreedum Construction",
    description:
      "Get in touch with Kreedum Construction for civil, prefabricated, and sports infrastructure projects.",
    image: HERO_VIDEO.poster,
  },
];

/** One route per vertical, generated from the same data the pages render from. */
const VERTICAL_ROUTES = CONSTRUCTION_VERTICALS.map((v) => ({
  route: `/${v.slug}`,
  title: `${v.heroTitle} | Kreedum Construction`,
  description: v.cardDesc,
  image: v.heroImage,
}));

const ROUTES = [...STATIC_CONSTRUCTION_ROUTES, ...VERTICAL_ROUTES];

function setTag(html, regex, replacement) {
  if (regex.test(html)) return html.replace(regex, replacement);
  // Tag wasn't found (shouldn't normally happen) — leave html untouched
  // rather than silently failing to inject something malformed.
  return html;
}

function buildHtmlForRoute(baseHtml, { route, title, description, image }) {
  const url = `${SITE_URL}${route}`;
  let html = baseHtml;

  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);

  html = setTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}"/>`
  );

  html = setTag(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`
  );

  html = setTag(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}"/>`
  );

  html = setTag(
    html,
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${image}" />`
  );

  html = setTag(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`
  );

  html = setTag(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`
  );

  html = setTag(
    html,
    /<meta\s+name="application-name"\s+content="[^"]*"\s*\/>/,
    `<meta name="application-name" content="${CONSTRUCTION_APP_NAME}" />`
  );

  html = setTag(
    html,
    /<meta\s+name="apple-mobile-web-app-title"\s+content="[^"]*"\s*\/>/,
    `<meta name="apple-mobile-web-app-title" content="${CONSTRUCTION_APP_NAME}" />`
  );

  return html;
}

async function main() {
  const indexPath = path.join(DIST, "index.html");
  if (!existsSync(indexPath)) {
    console.warn(
      "[generate-route-meta] dist/index.html not found — skipping (did `vite build` run first?)."
    );
    return;
  }

  const baseHtml = await readFile(indexPath, "utf-8");

  for (const routeConfig of ROUTES) {
    const html = buildHtmlForRoute(baseHtml, routeConfig);
    const outDir = path.join(DIST, routeConfig.route.replace(/^\//, ""));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html, "utf-8");
    console.log(`[generate-route-meta] wrote ${outDir}/index.html`);
  }
}

main().catch((err) => {
  console.error("[generate-route-meta] failed:", err);
  process.exit(1);
});
