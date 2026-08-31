import { CONSTRUCTION_COLORS } from "../../config/theme";

/**
 * Construction-only scoped styles. Mounted once per Construction page (see
 * each page in src/pages/construction/). Everything here is namespaced with
 * a `kc-` prefix so it never touches Sports' `kr-*` classes or global styles.
 */
export default function ConstructionStyle() {
  return (
    <style>{`
      /* Signature motif: corner "survey marks" — evokes blueprint / site-survey
         annotation. One background-gradient trick, no extra DOM per corner. */
      .kc-corners {
        --kc-mark: ${CONSTRUCTION_COLORS.orange};
        --kc-len: 20px;
        --kc-thick: 2px;
        position: relative;
      }
      .kc-corners::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          linear-gradient(to right, var(--kc-mark) var(--kc-thick), transparent var(--kc-thick)) 0 0 / var(--kc-len) var(--kc-thick) no-repeat,
          linear-gradient(to right, var(--kc-mark) var(--kc-thick), transparent var(--kc-thick)) 0 100% / var(--kc-len) var(--kc-thick) no-repeat,
          linear-gradient(to left, var(--kc-mark) var(--kc-thick), transparent var(--kc-thick)) 100% 0 / var(--kc-len) var(--kc-thick) no-repeat,
          linear-gradient(to left, var(--kc-mark) var(--kc-thick), transparent var(--kc-thick)) 100% 100% / var(--kc-len) var(--kc-thick) no-repeat,
          linear-gradient(to bottom, var(--kc-mark) var(--kc-thick), transparent var(--kc-thick)) 0 0 / var(--kc-thick) var(--kc-len) no-repeat,
          linear-gradient(to bottom, var(--kc-mark) var(--kc-thick), transparent var(--kc-thick)) 100% 0 / var(--kc-thick) var(--kc-len) no-repeat,
          linear-gradient(to top, var(--kc-mark) var(--kc-thick), transparent var(--kc-thick)) 0 100% / var(--kc-thick) var(--kc-len) no-repeat,
          linear-gradient(to top, var(--kc-mark) var(--kc-thick), transparent var(--kc-thick)) 100% 100% / var(--kc-thick) var(--kc-len) no-repeat;
      }

      /* Dimension-line divider: a hairline with tick marks at each end, like
         a measurement line on a technical drawing. */
      .kc-dim {
        position: relative;
        height: 1px;
        background: currentColor;
        opacity: 0.22;
      }
      .kc-dim::before, .kc-dim::after {
        content: "";
        position: absolute;
        top: -4px;
        width: 1px;
        height: 9px;
        background: currentColor;
        opacity: 0.5;
      }
      .kc-dim::before { left: 0; }
      .kc-dim::after { right: 0; }

      /* Data-plate label: uppercase mono, tracked, like an engineering nameplate. */
      .kc-plate {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.6875rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      /* Caution stripe — used exactly once (above the footer). Literal
         construction-site cue, kept slim and low-opacity so it reads as a
         material detail, not a banner. */
      .kc-stripe {
        height: 6px;
        background: repeating-linear-gradient(
          135deg,
          ${CONSTRUCTION_COLORS.orange} 0px,
          ${CONSTRUCTION_COLORS.orange} 10px,
          ${CONSTRUCTION_COLORS.ink} 10px,
          ${CONSTRUCTION_COLORS.ink} 20px
        );
      }

      /* Construction-scoped focus ring — orange, not the shared kr-focus blue. */
      .kc-focus:focus-visible {
        outline: 3px solid ${CONSTRUCTION_COLORS.orange};
        outline-offset: 2px;
      }

      .kc-blueprint-grid {
        background-image:
          linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px);
        background-size: 44px 44px;
      }

      /* Page transition — fade + rise, plays once per route mount since React
         Router unmounts the outgoing page and mounts the incoming one.
         Opacity-only on purpose: a transform here (even the animation's
         resting translateY(0) state) creates a new CSS containing block on
         this wrapper, which would trap every position:fixed descendant —
         including ConstructionNavbar — making it scroll away with the page
         instead of staying pinned to the viewport. */
      @keyframes kc-page-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .kc-page-transition {
        animation: kc-page-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      /* Scroll-triggered reveal — toggled by the Reveal component via
         IntersectionObserver. Starts hidden, animates in once. */
      .kc-reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: opacity, transform;
      }
      .kc-reveal.kc-reveal-visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* ==================================================
         Opening brand intro — full-screen statement that
         slides up to reveal the site already mounted beneath it.
         ================================================== */
      .kc-intro {
        position: fixed;
        inset: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.75s cubic-bezier(0.76, 0, 0.24, 1);
        will-change: transform;
      }
      .kc-intro-exit {
        transform: translateY(-100%);
      }
      .kc-intro-inner {
        overflow: hidden;
        padding: 0 1.5rem;
        text-align: center;
      }
      .kc-intro-word {
        display: inline-block;
        font-weight: 700;
        font-size: clamp(1.75rem, 6vw, 3.75rem);
        letter-spacing: 0.01em;
        text-transform: uppercase;
      }
      .kc-intro-word-in {
        animation: kc-intro-word-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
      }
      @keyframes kc-intro-word-in {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .kc-intro-hint {
        position: absolute;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.5;
        background: none;
        border: none;
        cursor: pointer;
        transition: opacity 0.2s ease;
      }
      .kc-intro-hint:hover {
        opacity: 0.9;
      }

      /* ==================================================
         Hero content — staged entrance (not scroll-triggered,
         since it's above the fold). Used by ConstructionHero.
         ================================================== */
      .kc-hero-media {
        filter: brightness(1.2) contrast(1.06) saturate(1.1);
      }
      .kc-hero-el {
        opacity: 0;
        transform: translateY(18px);
        transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: opacity, transform;
      }
      .kc-hero-el-in {
        opacity: 1;
        transform: translateY(0);
      }

      /* ==================================================
         Segmented floating navbar
         ================================================== */
      .kc-nav-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        min-height: 42px;
        padding: 6px 18px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.18);
        background: rgba(13,13,13,0.35);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        color: rgba(255,255,255,0.85);
        white-space: nowrap;
        transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
      }
      .kc-nav-pill:hover {
        border-color: rgba(255,255,255,0.4);
        transform: translateY(-1px);
      }
      .kc-nav-scrolled .kc-nav-pill {
        background: rgba(13,13,13,0.78);
        border-color: rgba(255,255,255,0.1);
      }

      .kc-nav-dropdown {
        position: absolute;
        top: calc(100% + 12px);
        left: 50%;
        transform: translate(-50%, -8px);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease, transform 0.25s ease;
        z-index: 10;
      }
      .kc-nav-dropdown-open {
        opacity: 1;
        transform: translate(-50%, 0);
        pointer-events: auto;
      }
      .kc-nav-preview-card {
        display: block;
        width: 232px;
        border-radius: 10px;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.15);
        box-shadow: 0 24px 60px rgba(0,0,0,0.45);
        transition: transform 0.2s ease;
      }
      .kc-nav-preview-card:hover {
        transform: translateY(-2px);
      }
      .kc-nav-preview-media {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
      }
      .kc-nav-preview-media video,
      .kc-nav-preview-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .kc-nav-preview-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.8) 100%);
      }
      .kc-nav-preview-label {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 14px;
      }

      /* Compact menu dropdown (☰) — small anchored box, not full-screen */
      .kc-menu-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        width: 230px;
        max-width: calc(100vw - 32px);
        max-height: min(70vh, 480px);
        overflow-y: auto;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(13,13,13,0.94);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        box-shadow: 0 24px 60px rgba(0,0,0,0.5);
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        opacity: 0;
        transform: translateY(-8px) scale(0.97);
        transform-origin: top right;
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
        z-index: 20;
      }
      .kc-menu-dropdown-open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .kc-menu-dropdown-link {
        display: block;
        padding: 9px 10px;
        border-radius: 8px;
        font-family: "IBM Plex Mono", monospace;
        font-size: 0.85rem;
        letter-spacing: 0.02em;
        transition: background-color 0.15s ease;
      }
      .kc-menu-dropdown-link:hover,
      .kc-menu-dropdown-link:focus-visible {
        background: rgba(255,255,255,0.08);
      }
      .kc-menu-dropdown-label {
        padding: 12px 10px 4px;
        font-family: "IBM Plex Mono", monospace;
        font-size: 0.68rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.4);
      }
      .kc-menu-dropdown-divider {
        height: 1px;
        background: rgba(255,255,255,0.1);
        margin: 8px 4px;
      }

      /* Mobile safety: keep the floating pills from crowding on narrow screens */
      @media (max-width: 420px) {
        .kc-nav-pill {
          min-height: 38px;
          padding: 5px 12px;
          gap: 0.35rem;
        }
        .kc-nav-preview-card {
          width: 190px;
        }
      }
      @media (max-width: 360px) {
        /* Logo text now stacks vertically (see ConstructionNavbar.jsx), so
           it stays compact horizontally even on the narrowest phones —
           no need to hide it here anymore. */
      }

            /* Floating WhatsApp button — fixed bottom-right on every construction page.
         bottom/right use max() with env(safe-area-inset-*) so the button
         clears the home-indicator/gesture-bar area on iPhones instead of
         sitting partially underneath it. The fixed positioning lives on the
         wrapping row (kc-whatsapp-wrap) so the "Contact us" bubble can sit
         next to the button as a normal flex sibling instead of needing its
         own separately-computed fixed coordinates. */
      .kc-whatsapp-wrap {
        position: fixed;
        right: max(20px, env(safe-area-inset-right));
        bottom: max(20px, env(safe-area-inset-bottom));
        z-index: 70;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .kc-whatsapp-btn {
        width: 56px;
        height: 56px;
        border-radius: 999px;
        border: none;
        background: #25D366;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        animation: kc-whatsapp-pulse 2.4s ease-in-out infinite;
      }
      .kc-whatsapp-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 14px 36px rgba(0,0,0,0.42);
      }
      @keyframes kc-whatsapp-pulse {
        0%, 100% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 0 0 rgba(37,211,102,0.45); }
        50% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 0 10px rgba(37,211,102,0); }
      }

      /* "Contact us" speech bubble that appears next to the WhatsApp button */
      .kc-whatsapp-bubble {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 10px 10px 16px;
        border-radius: 999px;
        background: ${CONSTRUCTION_COLORS.white};
        color: ${CONSTRUCTION_COLORS.ink};
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.8rem;
        font-weight: 500;
        white-space: nowrap;
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 24px rgba(0,0,0,0.22);
        animation: kc-whatsapp-bubble-in 0.3s ease both;
      }
      .kc-whatsapp-bubble-close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 999px;
        background: rgba(0,0,0,0.06);
        font-size: 0.85rem;
        line-height: 1;
        flex-shrink: 0;
      }
      .kc-whatsapp-bubble-close:hover {
        background: rgba(0,0,0,0.12);
      }
      @keyframes kc-whatsapp-bubble-in {
        from { opacity: 0; transform: translateY(6px) scale(0.96); }
        to { opacity: 1; transform: none; }
      }

      @media (max-width: 640px) {
        .kc-whatsapp-wrap {
          right: max(14px, env(safe-area-inset-right));
          bottom: max(14px, env(safe-area-inset-bottom));
          gap: 8px;
        }
        .kc-whatsapp-btn {
          width: 50px;
          height: 50px;
        }
        .kc-whatsapp-bubble {
          font-size: 0.72rem;
          padding: 8px 8px 8px 12px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .kc-page-transition { animation: none; }
        .kc-reveal { opacity: 1; transform: none; transition: none; }
        .kc-intro, .kc-intro-word-in, .kc-hero-el,
        .kc-nav-pill, .kc-nav-dropdown, .kc-nav-preview-card,
        .kc-menu-dropdown, .kc-whatsapp-btn, .kc-whatsapp-bubble {
          transition: none !important;
          animation: none !important;
        }
        .kc-hero-el { opacity: 1; transform: none; }
      }
    `}</style>
  );
}