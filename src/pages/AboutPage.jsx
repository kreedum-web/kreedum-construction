
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
  {
    icon: "shield",
    title: "Safety First",
    desc: "Every site runs on documented protocol — no exceptions for schedule pressure.",
  },
  {
    icon: "target",
    title: "Engineering Rigour",
    desc: "Specifications are followed to the letter, from foundation to finish.",
  },
  {
    icon: "chat",
    title: "Transparency",
    desc: "Clients see real progress, real numbers, and real timelines at every milestone.",
  },
  {
    icon: "community",
    title: "Community Minded",
    desc: "We build facilities meant to serve people well past the day we hand over keys.",
  },
];

function SectionLabel({ children, dark = false }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        className="h-2 w-2 shrink-0"
        style={{ backgroundColor: CONSTRUCTION_COLORS.orange }}
        aria-hidden="true"
      />
      <span
        className="kc-plate"
        style={{
          color: dark
            ? CONSTRUCTION_COLORS.orange
            : CONSTRUCTION_COLORS.orangeDark,
        }}
      >
        {children}
      </span>
    </div>
  );
}


function LeadershipSection() {
  return (
    <section
      className="overflow-hidden py-7 sm:py-12 md:py-24"
      style={{ backgroundColor: CONSTRUCTION_COLORS.black }}
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-8 md:px-6">
        <div className="grid grid-cols-[104px_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-20">
          {/* Compact portrait on mobile; larger on desktop */}
          <Reveal>
            <div
              className="relative p-1 sm:p-2"
              style={{
                border: `1px solid ${CONSTRUCTION_COLORS.orange}`,
              }}
            >
              <img
                src="/Images/leader-image/shivam-gupta.png"
                alt="Shivam Gupta, Kreedum Construction"
                className="aspect-[3/4] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          {/* Text beside the image on mobile */}
          <Reveal>
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2 sm:mb-3">
                <span
                  className="h-1.5 w-1.5 shrink-0"
                  style={{ backgroundColor: CONSTRUCTION_COLORS.orange }}
                  aria-hidden="true"
                />
                <span
                  className="kc-plate text-[9px] sm:text-xs"
                  style={{ color: CONSTRUCTION_COLORS.orange }}
                >
                  Leadership
                </span>
              </div>

              <h2
                className="break-words font-display text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
                style={{ color: CONSTRUCTION_COLORS.white }}
              >
                Shivam Gupta
              </h2>

              <p
                className="mt-1.5 text-[9px] font-semibold uppercase leading-relaxed tracking-wider sm:mt-3 sm:text-xs md:text-sm"
                style={{ color: CONSTRUCTION_COLORS.orange }}
              >
                Kreedum Construction
              </p>

              <div
                className="my-3 h-px w-8 sm:my-5 sm:w-12"
                style={{ backgroundColor: CONSTRUCTION_COLORS.orange }}
                aria-hidden="true"
              />

              <p
                className="text-[11px] leading-[1.65] sm:text-sm sm:leading-7 md:text-base"
                style={{ color: "#D0CBC3" }}
              >
                We believe lasting infrastructure begins with a clear vision,
                dependable execution, and a commitment to quality.
              </p>

              {/* Additional copy appears on larger screens */}
              <p
                className="mt-3 hidden text-sm leading-7 sm:block md:mt-4 md:text-base"
                style={{ color: "#D0CBC3" }}
              >
                Every project is an opportunity to build trust through
                thoughtful planning, transparent communication, and attention
                to detail.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


export default function AboutPage() {
  return (
    <div
      className="kc-page-transition font-body"
      style={{ backgroundColor: CONSTRUCTION_COLORS.white }}
    >
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

      {/* About the company */}
      <section
        className="py-14 sm:py-18 md:py-24"
        style={{ backgroundColor: CONSTRUCTION_COLORS.white }}
      >
        <Reveal className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionLabel>Who We Are</SectionLabel>

          <h2
            className="mb-5 max-w-3xl font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl"
            style={{ color: CONSTRUCTION_COLORS.ink }}
          >
            Part of the Kreedum family, built for construction.
          </h2>

          <p
            className="mb-4 text-sm leading-7 sm:text-base sm:leading-8"
            style={{ color: CONSTRUCTION_COLORS.steel }}
          >
            Kreedum began as a trusted name in sporting goods and equipment
            across Lucknow. Kreedum Construction extends that same commitment
            to reliability and craftsmanship into the built environment —
            delivering civil construction, pre-engineered buildings, and
            sports infrastructure under one roof.
          </p>

          <p
            className="text-sm leading-7 sm:text-base sm:leading-8"
            style={{ color: CONSTRUCTION_COLORS.steel }}
          >
            Whether it is a commercial building, an industrial shed, or the
            athletic track a school has been waiting for, our engineers and
            site teams bring the same standard of excellence to every project.
          </p>
        </Reveal>
      </section>

      {/* Leadership is now a separate, correctly placed section */}
      <LeadershipSection />

      {/* Values */}
      <section
        className="py-14 sm:py-18 md:py-24"
        style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mb-8 max-w-2xl sm:mb-12">
            <SectionLabel>How We Work</SectionLabel>

            <h2
              className="font-display text-2xl font-bold sm:text-3xl md:text-4xl"
              style={{ color: CONSTRUCTION_COLORS.ink }}
            >
              Our Values
            </h2>

            <p
              className="mt-3 max-w-xl text-sm leading-7 sm:text-base"
              style={{ color: CONSTRUCTION_COLORS.steel }}
            >
              The principles behind every decision, every site, and every
              project we deliver.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={(index % 4) * 90}>
                <div
                  className="h-full p-5 sm:p-6"
                  style={{
                    backgroundColor: CONSTRUCTION_COLORS.white,
                    border: `1px solid ${CONSTRUCTION_COLORS.concrete}`,
                  }}
                >
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center"
                    style={{
                      backgroundColor: CONSTRUCTION_COLORS.concrete,
                      color: CONSTRUCTION_COLORS.orangeDark,
                    }}
                  >
                    <Glyph name={value.icon} />
                  </div>

                  <h3
                    className="mb-2 font-display text-base font-semibold"
                    style={{ color: CONSTRUCTION_COLORS.ink }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="text-sm leading-6"
                    style={{ color: CONSTRUCTION_COLORS.steel }}
                  >
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        headline="Ready to build with Kreedum?"
        buttonLabel="Get My Quote"
      />

      <ConstructionFooter />
    </div>
  );
}
