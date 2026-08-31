/**
 * Centralized Construction video configuration.
 *
 * `src` can be either:
 *   - a local path served from /public/videos/  (e.g. "/videos/hero.mp4"), or
 *   - a direct hosted URL to an .mp4 file        (e.g. "https://cdn.example.com/hero.mp4")
 * Both work exactly the same way — HeroVideo.jsx just points a <video> tag's
 * <source> at whatever string is here. No code changes needed either way.
 *
 * Every entry is optional: if `src` 404s, fails to load, or the browser
 * blocks autoplay, consumers fall back to the paired `poster` image
 * automatically (see HeroVideo.jsx). Note: a hosted URL must serve the file
 * with CORS allowed and support range requests (most CDNs/S3/Cloudinary do)
 * or the browser may refuse to play it.
 */

export const HERO_VIDEO = {
  src: "/videos/construction-hero.mp4",
  poster:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1800&auto=format&fit=crop",
};

/** Keyed by CONSTRUCTION_VERTICALS[].slug */
export const VERTICAL_VIDEOS = {
  "civil-construction": {
    src: "/videos/civil-construction.mp4",
    poster:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop",
  },
  "prefabricated-buildings": {
    src: "/videos/prefabricated-buildings.mp4",
    poster:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=900&auto=format&fit=crop",
  },
  "sports-infrastructure": {
    src: "/videos/sports-infrastructure.mp4",
    poster:
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=900&auto=format&fit=crop",
  },
};
