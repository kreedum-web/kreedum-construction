
import { useEffect, useRef, useState } from "react";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import Reveal from "./Reveal";
import constructionClients from "../../data/constructionClients";

export default function ClientsSection() {
  const trackRef = useRef(null);
  const lastTimeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let frameId;
    const speed = 32;

    const animate = (time) => {
      if (lastTimeRef.current !== null && !isPaused) {
        const delta = time - lastTimeRef.current;
        track.scrollLeft += (speed * delta) / 1000;

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
      className="overflow-hidden border-y py-7 sm:py-11 md:py-16"
      style={{
        backgroundColor: CONSTRUCTION_COLORS.black,
        borderColor: "#343434",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-5 max-w-2xl sm:mb-8 md:mb-10">
          <div className="mb-2 flex items-center gap-2 sm:mb-3">
            <span
              className="h-1.5 w-1.5 sm:h-2 sm:w-2"
              style={{ backgroundColor: CONSTRUCTION_COLORS.orange }}
              aria-hidden="true"
            />
            <span
              className="kc-plate text-[10px] sm:text-xs"
              style={{ color: CONSTRUCTION_COLORS.orange }}
            >
              Trusted Relationships
            </span>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
            <h2
              id="construction-clients-heading"
              className="font-display text-xl font-bold leading-tight sm:text-2xl md:text-4xl"
              style={{ color: CONSTRUCTION_COLORS.white }}
            >
              Trusted by our clients.
            </h2>

            <p
              className="max-w-md text-xs leading-5 sm:text-sm sm:leading-6 md:text-base"
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
        className="kc-clients-track flex items-center gap-3 overflow-x-auto px-4 pb-1 sm:gap-5 sm:px-6 sm:pb-2"
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
            className="flex h-[68px] w-[108px] shrink-0 items-center justify-center rounded-sm border px-3 py-3 transition duration-300 hover:-translate-y-1 hover:border-[#E86F00] sm:h-24 sm:w-36 sm:px-5 sm:py-4 md:h-28 md:w-44"
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
