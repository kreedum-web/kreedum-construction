import { useEffect, useRef, useState } from "react";

/**
 * Wraps children in a fade + rise reveal that plays once, the first time the
 * element scrolls into view. Construction-only (`kc-reveal` styles live in
 * ConstructionStyle.jsx) — Sports is untouched.
 *
 * delay: stagger in ms, handy for animating a grid item-by-item.
 * as: element type for the wrapper (defaults to div).
 */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div", style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser can't observe intersections, just show the content.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`kc-reveal ${visible ? "kc-reveal-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
