import { CONSTRUCTION_COLORS } from "../../config/theme";
import Glyph from "./ConstructionIcons";
import Reveal from "./Reveal";

export default function WhyKreedum({ title, items }) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: CONSTRUCTION_COLORS.ink }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2" style={{ backgroundColor: CONSTRUCTION_COLORS.orange }} aria-hidden="true" />
            <span className="kc-plate" style={{ color: CONSTRUCTION_COLORS.orange }}>Why Kreedum</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: CONSTRUCTION_COLORS.white }}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 80} className="flex flex-col gap-3">
              <div className="kc-dim" style={{ color: "rgba(255,255,255,0.4)" }} />
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mt-2"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: CONSTRUCTION_COLORS.orange }}
              >
                <Glyph name={item.icon} size={19} />
              </div>
              <h3 className="font-display font-semibold text-sm" style={{ color: CONSTRUCTION_COLORS.white }}>
                {item.title}
              </h3>
              <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
