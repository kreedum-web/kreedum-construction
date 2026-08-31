import { Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import Reveal from "./Reveal";

export default function CTASection({ eyebrow, headline, buttonLabel = "Get My Quote" }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: CONSTRUCTION_COLORS.black }}>
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none kc-blueprint-grid" />
      <Reveal className="relative max-w-3xl mx-auto px-6 text-center">
        {eyebrow && (
          <div className="kc-plate mb-4" style={{ color: CONSTRUCTION_COLORS.orange }}>
            {eyebrow}
          </div>
        )}
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-8" style={{ color: CONSTRUCTION_COLORS.white }}>
          {headline}
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 kc-plate kc-focus px-7 py-3.5 rounded-sm transition-transform hover:scale-105"
          style={{ backgroundColor: CONSTRUCTION_COLORS.orange, color: CONSTRUCTION_COLORS.white }}
        >
          {buttonLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </Reveal>
    </section>
  );
}
