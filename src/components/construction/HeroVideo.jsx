import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed autoplaying video with graceful degradation, a smooth crossfade
 * once the video is actually ready to play, and an optional lighter source
 * for mobile viewports.
 *
 * The poster image renders immediately and stays underneath the video at
 * all times; the video fades in on top of it only once the browser fires
 * `canplay` (enough data buffered to start playback), instead of an abrupt
 * frame-swap. On a slow connection you'll see the poster the whole time it
 * takes to load — that download time itself can only be reduced by making
 * the video file smaller (see mobileSrc below), not hidden.
 *
 * mobileSrc (optional): a separate, lighter-weight file served to viewports
 * ≤768px wide via a <source media="..."> query — the browser picks whichever
 * <source> matches first, so phones can download a much smaller file than
 * desktop without any JS-based device detection.
 *
 * Falls back to the poster image entirely if `src` is missing, the file
 * 404s, the format is unsupported, or the browser blocks autoplay — so this
 * is safe to use with placeholder paths before real footage exists.
 *
 * Used for both the hero background and the nav hover-preview dropdowns.
 */
export default function HeroVideo({ src, mobileSrc, poster, className = "", reducedMotion = false }) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(!src);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!src || failed || reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay blocked, or the source is unusable — show the poster instead.
        setFailed(true);
      });
    }
  }, [src, failed, reducedMotion]);

  if (failed || reducedMotion || !src) {
    return <img src={poster} alt="" className={className} />;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Always-visible base layer — instant, no load time */}
      <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover" />

      {/* Fades in on top only once it can actually play */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.6s ease" }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        onCanPlay={() => setReady(true)}
        onError={() => setFailed(true)}
      >
        {mobileSrc && <source src={mobileSrc} media="(max-width: 768px)" type="video/mp4" />}
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}