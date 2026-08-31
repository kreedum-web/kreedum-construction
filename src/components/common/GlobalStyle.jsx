import { COLORS } from "../../config/theme";

/** Site-wide fonts, clip-path utility classes, and focus/reduced-motion rules. Mounted once in App. */
export default function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

      .font-display { font-family: 'Space Grotesk', sans-serif; }
      .font-body { font-family: 'Inter', sans-serif; }
      .font-mono { font-family: 'IBM Plex Mono', monospace; }

      .diag-bottom {
        clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
      }
      .diag-top {
  clip-path: polygon(0 12%, 100% 0, 100% 100%, 0 100%);
}

@media (max-width: 768px) {
  .diag-top,
  .diag-bottom {
    clip-path: none;
  }
}
      .diag-card {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
      .diag-photo {
        clip-path: polygon(6% 0, 100% 0, 94% 100%, 0% 100%);
      }
      .kr-focus:focus-visible {
        outline: 3px solid ${COLORS.blue};
        outline-offset: 3px;
      }
        .kr-scroll-hide::-webkit-scrollbar {
        display: none;
      }
      .kr-whatsapp-wrap {
        position: fixed;
        right: max(20px, env(safe-area-inset-right));
        bottom: max(20px, env(safe-area-inset-bottom));
        z-index: 70;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .kr-whatsapp-btn {
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
        animation: kr-whatsapp-pulse 2.4s ease-in-out infinite;
      }
      .kr-whatsapp-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 14px 36px rgba(0,0,0,0.42);
      }
      @keyframes kr-whatsapp-pulse {
        0%, 100% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 0 0 rgba(37,211,102,0.45); }
        50% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 0 10px rgba(37,211,102,0); }
      }

      /* "Contact us" speech bubble that appears next to the WhatsApp button */
      .kr-whatsapp-bubble {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 10px 10px 16px;
        border-radius: 999px;
        background: ${COLORS.white};
        color: ${COLORS.navy};
        font-family: 'Inter', sans-serif;
        font-size: 0.8rem;
        font-weight: 500;
        white-space: nowrap;
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 24px rgba(0,0,0,0.22);
        animation: kr-whatsapp-bubble-in 0.3s ease both;
      }
      .kr-whatsapp-bubble-close {
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
      .kr-whatsapp-bubble-close:hover {
        background: rgba(0,0,0,0.12);
      }
      @keyframes kr-whatsapp-bubble-in {
        from { opacity: 0; transform: translateY(6px) scale(0.96); }
        to { opacity: 1; transform: none; }
      }

      @media (max-width: 640px) {
        .kr-whatsapp-wrap {
          right: max(14px, env(safe-area-inset-right));
          bottom: max(14px, env(safe-area-inset-bottom));
          gap: 8px;
        }
        .kr-whatsapp-btn {
          width: 50px;
          height: 50px;
        }
        .kr-whatsapp-bubble {
          font-size: 0.72rem;
          padding: 8px 8px 8px 12px;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
        .kr-whatsapp-btn, .kr-whatsapp-bubble { animation: none; }
      }
    `}</style>
  );
}