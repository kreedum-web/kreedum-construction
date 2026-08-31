import { CONSTRUCTION_COLORS } from "../config/theme";
import { HERO_VIDEO } from "../config/media";
import ConstructionStyle from "../components/construction/ConstructionStyle";
import ConstructionNavbar from "../components/construction/ConstructionNavbar";
import WhatsAppButton from "../components/construction/WhatsAppButton";
import ConstructionFooter from "../components/construction/ConstructionFooter";
import ConstructionHero from "../components/construction/ConstructionHero";
import StatsSection from "../components/construction/StatsSection";
import CTASection from "../components/construction/CTASection";
import Glyph from "../components/construction/ConstructionIcons";
import Reveal from "../components/construction/Reveal";

const VALUES = [
  { icon: "shield", title: "Safety First", desc: "Every site runs on documented protocol — no exceptions for schedule pressure." },
  { icon: "target", title: "Engineering Rigour", desc: "Specifications are followed to the letter, from foundation to finish." },
  { icon: "chat", title: "Transparency", desc: "Clients see real progress, real numbers, and real timelines at every milestone." },
  { icon: "community", title: "Community Minded", desc: "We build facilities meant to serve people well past the day we hand over keys." },
];

export default function AboutPage() {
  return (
    <div className="font-body kc-page-transition" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
      <ConstructionStyle />
      <ConstructionNavbar />
      <WhatsAppButton />

      <ConstructionHero
        eyebrow="Kreedum Construction"
        titleLines={["One Brand.", "Three Specializations."]}
        subtitle="Kreedum Construction is the infrastructure arm of Kreedum International Private Limited — the same standard of excellence, applied to civil, prefabricated and sports infrastructure work."
        image="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1600&auto=format&fit=crop"
        video={HERO_VIDEO.src}
        videoMobile={HERO_VIDEO.mobileSrc}
      />

      <StatsSection />

      <section className="py-16 md:py-24" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
        <Reveal className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2" style={{ backgroundColor: CONSTRUCTION_COLORS.orange }} aria-hidden="true" />
            <span className="kc-plate" style={{ color: CONSTRUCTION_COLORS.orangeDark }}>Who We Are</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-6" style={{ color: CONSTRUCTION_COLORS.ink }}>
            Part of the Kreedum family, built for construction.
          </h2>
          <p className="font-body text-base leading-relaxed mb-4" style={{ color: CONSTRUCTION_COLORS.steel }}>
            Kreedum began as a trusted name in sporting goods and equipment across Lucknow. Kreedum Construction
            extends that same commitment to reliability and craftsmanship into the built environment — delivering
            civil construction, pre-engineered buildings, and sports infrastructure under one roof.
          </p>
          <p className="font-body text-base leading-relaxed" style={{ color: CONSTRUCTION_COLORS.steel }}>
            Whether it's a commercial building, an industrial shed, or the athletic track a school has been waiting
            for, our engineers and site teams bring the same standard of excellence to every project — regardless
            of which vertical it falls under.
          </p>
        </Reveal>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="max-w-xl mb-10 md:mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2" style={{ backgroundColor: CONSTRUCTION_COLORS.orange }} aria-hidden="true" />
              <span className="kc-plate" style={{ color: CONSTRUCTION_COLORS.orangeDark }}>How We Work</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: CONSTRUCTION_COLORS.ink }}>
              Our Values
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 90}>
                <div
                  className="p-6 rounded-sm bg-white"
                  style={{ border: `1px solid ${CONSTRUCTION_COLORS.concrete}` }}
                >
                  <div
                    className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                    style={{ backgroundColor: CONSTRUCTION_COLORS.concrete, color: CONSTRUCTION_COLORS.orangeDark }}
                  >
                    <Glyph name={v.icon} />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-1.5" style={{ color: CONSTRUCTION_COLORS.ink }}>
                    {v.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: CONSTRUCTION_COLORS.steel }}>
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Work with us" headline="Ready to build with Kreedum?" buttonLabel="Get My Quote" />

      <ConstructionFooter />
    </div>
  );
}