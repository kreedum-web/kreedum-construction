# Construction video assets

Drop real footage here using these exact filenames — every component reads
paths from `src/config/media.js`, so nothing else needs to change:

- `construction-hero.mp4` — full-screen hero background on `/construction`
- `civil-construction.mp4` — nav hover-preview for Commercial/Civil
- `prefabricated-buildings.mp4` — nav hover-preview for Prefab
- `sports-infrastructure.mp4` — nav hover-preview for Sports

Until a file exists (or if it fails to load/autoplay is blocked), the
matching poster image in `src/config/media.js` is shown instead — the site
works correctly with this folder empty.

Recommended: muted, silent-safe, H.264 MP4, ~8–15s loop, under ~6MB for the
hero and under ~2MB for each preview clip.
