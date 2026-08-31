import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/**
 * Renders a number that animates upward from 0 to `end`, starting the very
 * first time it scrolls into view (and only that once — re-scrolling past
 * it later does nothing, same "plays once" behavior as Reveal.jsx).
 *
 * end: the target number (e.g. 150)
 * suffix: appended after the number as plain text, unanimated (e.g. "+")
 * duration: animation length in ms
 */
export default function CountUp({ end, suffix = "", duration = 1600, className = "", style = {} }) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No motion preference or no observer support: just show the final value.
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      setDisplay(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    function runAnimation() {
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic — fast start, gentle settle at the target.
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration, reducedMotion]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
      {suffix}
    </span>
  );
}