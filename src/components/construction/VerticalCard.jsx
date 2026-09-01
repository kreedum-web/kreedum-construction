import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import { VERTICAL_VIDEOS } from "../../config/media";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/**
 * Homepage-only card (Civil / Prefab / Sports). Not used anywhere else in
 * the app, so anything here — including the video — only affects these
 * three cards on the homepage.
 */
export default function VerticalCard({ vertical }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [active, setActive] = useState(false); // true = should be loading/playing right now
  const reducedMotion = usePrefersReducedMotion();
  const media = VERTICAL_VIDEOS[vertical.slug];
  const hasVideo = Boolean(media?.src) && !reducedMotion;

  // Touch devices (no hover at all): play only while the card is actually
  // on screen, not the instant the page loads — otherwise all 3 cards'
  // videos would start downloading/playing at once. Gated to devices with
  // NO hover-capable input (phones, most tablets); wherever a mouse or
  // trackpad exists, this does nothing and `active` is driven purely by
  // hover/focus below, so scrolling past a card on desktop never starts it
  // — only actually hovering it does.
  useEffect(() => {
    if (!hasVideo) return;
    if (typeof window === "undefined" || window.matchMedia("(any-hover: hover)").matches) return;
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setActive(entry.isIntersecting)),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasVideo]);

  const onEnter = () => setActive(true);
  const onLeave = () => setActive(false);

  // Only load and play the <video> while `active` — nothing downloads
  // before that, and playback is released again once inactive.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) {
      const playPromise = v.play();
      if (playPromise?.catch) playPromise.catch(() => {});
    } else {
      v.pause();
    }
  }, [active]);

  return (
    <Link
      ref={cardRef}
      to={`/${vertical.slug}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="group relative overflow-hidden rounded-2xl h-56 sm:h-72 md:h-96 flex flex-col justify-end p-5 sm:p-7 md:p-9 kc-focus transition-transform hover:-translate-y-1 kc-corners"
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <img
          src={media?.poster || vertical.cardImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {hasVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: active ? 1 : 0 }}
            muted
            loop
            playsInline
            preload="none"
            poster={media.poster}
          >
            {media.mobileSrc && <source src={media.mobileSrc} media="(max-width: 768px)" type="video/mp4" />}
            <source src={media.src} type="video/mp4" />
          </video>
        )}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(13,13,13,0.94) 0%, rgba(23,23,23,0.65) 48%, rgba(23,23,23,0.15) 100%)",
        }}
      />

      <div className="relative z-10">
        <div className="kc-plate mb-2 sm:mb-3 text-white/55">{vertical.number}</div>
        <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl mb-1.5 sm:mb-2 text-white">
          {vertical.cardTitle}
        </h3>
        <p className="font-body text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 text-white/80 max-w-sm">
          {vertical.cardDesc}
        </p>
        <span className="inline-flex items-center gap-2 kc-plate" style={{ color: CONSTRUCTION_COLORS.orange }}>
          {vertical.cardCta}
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}