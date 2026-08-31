import { useState } from "react";
import { Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../config/theme";
import { CONSTRUCTION_VERTICALS } from "../data/constructionVerticals";
import { HERO_VIDEO } from "../config/media";
import ConstructionStyle from "../components/construction/ConstructionStyle";
import ConstructionNavbar from "../components/construction/ConstructionNavbar";
import WhatsAppButton from "../components/construction/WhatsAppButton";
import ConstructionFooter from "../components/construction/ConstructionFooter";
import ConstructionHero from "../components/construction/ConstructionHero";
import IntroSequence from "../components/construction/IntroSequence";
import StatsSection from "../components/construction/StatsSection";
import VerticalCard from "../components/construction/VerticalCard";
import ProjectGrid from "../components/construction/ProjectGrid";
import CTASection from "../components/construction/CTASection";
import Reveal from "../components/construction/Reveal";

export default function ConstructionHomePage() {
  // The site (nav + hero, video already playing) is mounted immediately;
  // the intro is a fixed overlay on top of it, so the exit is a continuous
  // slide-up reveal rather than a swap-in of unrendered content.
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="font-body kc-page-transition" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
      <ConstructionStyle />
      {!introDone && <IntroSequence onDone={() => setIntroDone(true)} />}
      <ConstructionNavbar />
      <WhatsAppButton />

      <ConstructionHero
        tall
        eyebrow="Kreedum Construction"
        titleLines={["Built On Trust.", "Driven By Excellence."]}
        subtitle="Kreedum Construction delivers world-class solutions across Civil Construction, Prefabricated Buildings and Sports Infrastructure."
        image={HERO_VIDEO.poster}
        video={HERO_VIDEO.src}
        videoMobile={HERO_VIDEO.mobileSrc}
        primaryCta={{ label: "Explore Our Work", to: "/projects" }}
      />

      <StatsSection />

      {/* Three verticals */}
      <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <Reveal className="max-w-xl mb-10 md:mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2" style={{ backgroundColor: CONSTRUCTION_COLORS.orange }} aria-hidden="true" />
              <span className="kc-plate" style={{ color: CONSTRUCTION_COLORS.orangeDark }}>What We Build</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: CONSTRUCTION_COLORS.ink }}>
              Three specializations.
              <br />
              One commitment.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {CONSTRUCTION_VERTICALS.map((v, i) => (
              <Reveal key={v.slug} delay={i * 100}>
                <VerticalCard vertical={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects preview */}
      <section className="py-16 md:py-24" style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2" style={{ backgroundColor: CONSTRUCTION_COLORS.orange }} aria-hidden="true" />
                <span className="kc-plate" style={{ color: CONSTRUCTION_COLORS.orangeDark }}>Our Work</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: CONSTRUCTION_COLORS.ink }}>
                Recent projects.
              </h2>
            </div>
            <Link
              to="/projects"
              className="kc-plate kc-focus"
              style={{ color: CONSTRUCTION_COLORS.orangeDark }}
            >
              View all projects →
            </Link>
          </Reveal>
          <ProjectGrid limit={6} />
        </div>
      </section>

      <CTASection
        eyebrow="Let's get started"
        headline="Have a project in mind?"
        buttonLabel="Get My Quote"
      />

      <ConstructionFooter />
    </div>
  );
}