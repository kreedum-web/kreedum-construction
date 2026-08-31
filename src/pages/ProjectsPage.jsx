import { CONSTRUCTION_COLORS } from "../config/theme";
import { HERO_VIDEO } from "../config/media";
import ConstructionStyle from "../components/construction/ConstructionStyle";
import ConstructionNavbar from "../components/construction/ConstructionNavbar";
import WhatsAppButton from "../components/construction/WhatsAppButton";
import ConstructionFooter from "../components/construction/ConstructionFooter";
import ConstructionHero from "../components/construction/ConstructionHero";
import ProjectGrid from "../components/construction/ProjectGrid";
import CTASection from "../components/construction/CTASection";

export default function ProjectsPage() {
  return (
    <div className="font-body kc-page-transition" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
      <ConstructionStyle />
      <ConstructionNavbar />
      <WhatsAppButton />

      <ConstructionHero
        eyebrow="Kreedum Construction"
        titleLines={["Our Projects"]}
        subtitle="A portfolio of civil, prefabricated and sports infrastructure work delivered across Uttar Pradesh."
        image="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1600&auto=format&fit=crop"
        video={HERO_VIDEO.src}
        videoMobile={HERO_VIDEO.mobileSrc}
      />

      <section className="py-16 md:py-24" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
        <div className="max-w-6xl mx-auto px-6">
          <ProjectGrid filterable />
        </div>
      </section>

      <CTASection
        eyebrow="Start your project"
        headline="See something close to what you need?"
        buttonLabel="Get My Quote"
      />

      <ConstructionFooter />
    </div>
  );
}