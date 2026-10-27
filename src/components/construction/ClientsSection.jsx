import { useEffect, useRef, useState } from "react";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import Reveal from "./Reveal";
import constructionClients from "../../data/constructionClients";

/**
 * Scrolling client-logo strip for the construction homepage.
 * The list is duplicated for a seamless loop and pauses on hover/touch.
 */
export default function ClientsSection() {
  const trackRef = useRef(null);
  const lastTimeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frameId;
    const speed = 32;

    const animate = (time) => {
      if (lastTimeRef.current !== null && !isPaused) {
        const delta = time - lastTimeRef.current;
        track.scrollLeft += (speed * delta) / 1000;

        // Reset at the halfway point because the logo list is duplicated.
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft -= track.scrollWidth / 2;
        }
      }

      lastTimeRef.current = time;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      lastTimeRef.current = null;
    };
  }, [isPaused]);

  const clients = [...constructionClients, ...constructionClients];

  return (
    <section
      aria-labelledby="construction-clients-heading"
      className="overflow-hidden border-y py-16 md:py-20"
      style={{
  backgroundColor: CONSTRUCTION_COLORS.black,
  borderColor: "#343434",
}}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-8 max-w-2xl md:mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span
              className="h-2 w-2"
              style={{ backgroundColor: CONSTRUCTION_COLORS.orange }}
              aria-hidden="true"
            />
            <span
              className="kc-plate"
              style={{ color: CONSTRUCTION_COLORS.orangeDark }}
            >
              Trusted Relationships
            </span>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              id="construction-clients-heading"
              className="font-display text-2xl font-bold sm:text-3xl md:text-4xl"
              style={{ color: CONSTRUCTION_COLORS.white }}
            >
              Trusted by our clients.
            </h2>
            <p
              className="max-w-md text-sm leading-6 md:text-base"
              style={{ color: "#B7B2AA" }}
            >
              Building lasting partnerships with institutions and organisations
              across sports, education and public infrastructure.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="kc-clients-track flex items-center gap-4 overflow-x-auto px-5 pb-2 sm:gap-5 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onWheel={() => setIsPaused(true)}
        aria-label="Kreedum client organisations"
      >
        {clients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex h-24 w-36 shrink-0 items-center justify-center rounded-sm border px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#E86F00] sm:h-28 sm:w-44"
            style={{
              backgroundColor: CONSTRUCTION_COLORS.white,
              borderColor: "#343434",
            }}
          >
            <img
              src={client.image}
              alt={index < constructionClients.length ? client.name : ""}
              aria-hidden={index >= constructionClients.length}
              loading="lazy"
              decoding="async"
              draggable="false"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        .kc-clients-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .kc-clients-track::-webkit-scrollbar {
          display: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .kc-clients-track {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}
