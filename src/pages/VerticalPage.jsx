import { Navigate, Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../config/theme";
import { getVerticalBySlug } from "../data/constructionVerticals";
import { VERTICAL_VIDEOS } from "../config/media";
import ConstructionStyle from "../components/construction/ConstructionStyle";
import ConstructionNavbar from "../components/construction/ConstructionNavbar";
import WhatsAppButton from "../components/construction/WhatsAppButton";
import ConstructionFooter from "../components/construction/ConstructionFooter";
import ConstructionHero from "../components/construction/ConstructionHero";
import ExpertiseGrid from "../components/construction/ExpertiseGrid";
import WhyKreedum from "../components/construction/WhyKreedum";
import ProjectGrid from "../components/construction/ProjectGrid";
import CTASection from "../components/construction/CTASection";
import Reveal from "../components/construction/Reveal";

export default function VerticalPage({ slug }) {
  const vertical = getVerticalBySlug(slug);
  if (!vertical) return <Navigate to="/" replace />;

  return (
    <div className="font-body kc-page-transition" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
      <ConstructionStyle />
      <ConstructionNavbar />
      <WhatsAppButton />

      <ConstructionHero
        eyebrow={vertical.eyebrow}
        titleLines={[vertical.heroTitle]}
        subtitle={vertical.heroSubtitle}
        image={vertical.heroImage}
        video={VERTICAL_VIDEOS[vertical.slug]?.src}
        videoMobile={VERTICAL_VIDEOS[vertical.slug]?.mobileSrc}
      />

      <ExpertiseGrid eyebrow={vertical.navLabel} title={vertical.expertiseTitle} items={vertical.expertise} />

      {/* Featured projects for this vertical */}
      <section className="py-16 md:py-24" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2" style={{ backgroundColor: CONSTRUCTION_COLORS.orange }} aria-hidden="true" />
                <span className="kc-plate" style={{ color: CONSTRUCTION_COLORS.orangeDark }}>Our Work</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: CONSTRUCTION_COLORS.ink }}>
                Featured Projects
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
          <ProjectGrid category={vertical.category} limit={3} />
        </div>
      </section>

      <WhyKreedum title={vertical.whyTitle} items={vertical.why} />

      <CTASection eyebrow={vertical.ctaEyebrow} headline={vertical.ctaHeadline} buttonLabel={vertical.ctaButton} />

      <ConstructionFooter />
    </div>
  );
}