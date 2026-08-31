import { CONSTRUCTION_COLORS } from "../../config/theme";
import Glyph from "./ConstructionIcons";
import Reveal from "./Reveal";

export default function ExpertiseGrid({ eyebrow = "What We Do", title, items }) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2" style={{ backgroundColor: CONSTRUCTION_COLORS.orange }} aria-hidden="true" />
            <span className="kc-plate" style={{ color: CONSTRUCTION_COLORS.orangeDark }}>{eyebrow}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: CONSTRUCTION_COLORS.ink }}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div
                className="p-6 md:p-7 rounded-sm bg-white transition-transform hover:-translate-y-1"
                style={{ border: `1px solid ${CONSTRUCTION_COLORS.concrete}` }}
              >
                <div
                  className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                  style={{ backgroundColor: CONSTRUCTION_COLORS.concrete, color: CONSTRUCTION_COLORS.orangeDark }}
                >
                  <Glyph name={item.icon} />
                </div>
                <h3 className="font-display font-semibold text-base mb-1.5" style={{ color: CONSTRUCTION_COLORS.ink }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: CONSTRUCTION_COLORS.steel }}>
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
