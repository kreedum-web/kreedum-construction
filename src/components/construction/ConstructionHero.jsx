import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import { CONSTRUCTION_WHATSAPP_NUMBER as WHATSAPP_NUMBER } from "../../config/contact";
import { openWhatsApp } from "../../utils/whatsapp";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import HeroVideo from "./HeroVideo";

/**
 * eyebrow, title, subtitle: strings (title can include a <br/> via titleLines array)
 * image: background photo — required as the poster/fallback even when `video` is set
 * video: optional background video src (see src/config/media.js). Omit for the
 *        existing photo-only behaviour used by sub-page heroes.
 * tall: true for the /construction homepage hero (near full-screen), false for sub-page heroes
 * primaryCta / secondaryCta: { label, to } or { label, whatsappText }
 */
export default function ConstructionHero({
  eyebrow,
  titleLines,
  subtitle,
  image,
  video,
  videoMobile,
  tall = false,
  primaryCta,
  secondaryCta,
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Let the video/photo establish itself before the copy stages in.
    const t = setTimeout(() => setReady(true), tall ? 450 : 120);
    return () => clearTimeout(t);
  }, [tall]);

  const stageClass = () => `kc-hero-el ${ready ? "kc-hero-el-in" : ""}`;
  const stageStyle = (delayMs) => ({ transitionDelay: reducedMotion ? "0ms" : `${delayMs}ms` });

  return (
    <section
      className={`relative overflow-hidden ${tall ? "md:min-h-screen md:flex md:items-center" : ""}`}
      style={{ backgroundColor: CONSTRUCTION_COLORS.ink }}
    >
      {/* Video (or photo), framed with the corner-bracket signature.
          Split into two divs on purpose: the outer div owns the absolute
          full-bleed positioning (plain Tailwind, no conflicts), and the
          inner div carries `kc-corners` (which sets its own position:
          relative for the bracket pseudo-element). Combining `absolute`
          and `kc-corners` on the SAME element previously caused a CSS
          specificity collision — kc-corners's `position: relative` (in a
          later-loaded stylesheet) silently overrode Tailwind's `absolute`,
          which knocked this div out of absolute positioning entirely and
          made it lay out side-by-side (or stacked) with the text instead
          of behind it. */}
      <div className="absolute inset-0">
        <div className="w-full h-full kc-corners" style={{ "--kc-len": "32px" }}>
          {video ? (
            <HeroVideo
              // Force a full remount whenever the source actually changes —
              // e.g. navigating between vertical pages (Commercial/Prefab/
              // Sports), which reuse this same component instance rather
              // than unmounting. Without this key, the underlying <video>
              // element keeps whatever it originally loaded, since changing
              // a nested <source> via React doesn't make the browser reload
              // it on its own — only a full refresh forced a fresh mount.
              key={video}
              src={video}
              mobileSrc={videoMobile}
              poster={image}
              className="w-full h-full object-cover kc-hero-media"
              reducedMotion={reducedMotion}
            />
          ) : (
            <img src={image} alt="" className="w-full h-full object-cover kc-hero-media" />
          )}
        </div>
      </div>

      {/* Light legibility overlay — capped well below fully opaque so the video
          stays visible behind the copy everywhere, not just at the very top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.28) 35%, rgba(13,13,13,0.34) 65%, rgba(13,13,13,0.58) 100%)",
        }}
      />

      {/* Blueprint grid signature */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none kc-blueprint-grid" />

      <div
        className={`relative w-full max-w-4xl mx-auto px-6 text-center ${
          tall ? "pt-32 pb-28 md:pt-16 md:pb-16" : "pt-24 pb-20 md:pt-28 md:pb-24"
        }`}
      >
        {eyebrow && (
          <div className={`${stageClass()} flex items-center justify-center gap-2 mb-6`} style={stageStyle(0)}>
            <span className="w-2 h-2" style={{ backgroundColor: CONSTRUCTION_COLORS.orange }} aria-hidden="true" />
            <span className="kc-plate" style={{ color: "rgba(255,255,255,0.85)" }}>
              {eyebrow}
            </span>
          </div>
        )}

        <h1
          className={`${stageClass()} font-display font-bold leading-[1.08] mb-5 ${
            tall ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl md:text-5xl"
          }`}
          style={{ ...stageStyle(120), color: CONSTRUCTION_COLORS.white, textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {i === titleLines.length - 1 ? <span style={{ color: CONSTRUCTION_COLORS.orange }}>{line}</span> : line}
            </span>
          ))}
        </h1>

        {subtitle && (
          <p
            className={`${stageClass()} font-body text-base md:text-lg mb-9 max-w-xl mx-auto`}
            style={{ ...stageStyle(220), color: "rgba(255,255,255,0.85)", textShadow: "0 1px 16px rgba(0,0,0,0.45)" }}
          >
            {subtitle}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className={`${stageClass()} flex flex-wrap items-center justify-center gap-4`} style={stageStyle(320)}>
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="kc-plate kc-focus px-7 py-3.5 rounded-sm transition-transform hover:scale-105"
                style={{ backgroundColor: CONSTRUCTION_COLORS.orange, color: CONSTRUCTION_COLORS.white }}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <button
                onClick={() => openWhatsApp(WHATSAPP_NUMBER, secondaryCta.whatsappText)}
                className="kc-plate kc-focus px-7 py-3.5 rounded-sm transition-transform hover:scale-105 border"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: CONSTRUCTION_COLORS.white }}
              >
                {secondaryCta.label}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}