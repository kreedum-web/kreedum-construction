import { CONSTRUCTION_COLORS } from "../config/theme";
import { CONSTRUCTION_PHONE_NUMBER_DISPLAY as PHONE_NUMBER_DISPLAY, CONSTRUCTION_PHONE_NUMBER_TEL as PHONE_NUMBER_TEL } from "../config/contact";
import { HERO_VIDEO } from "../config/media";
import ConstructionStyle from "../components/construction/ConstructionStyle";
import ConstructionNavbar from "../components/construction/ConstructionNavbar";
import WhatsAppButton from "../components/construction/WhatsAppButton";
import ConstructionFooter from "../components/construction/ConstructionFooter";
import ConstructionHero from "../components/construction/ConstructionHero";
import ContactForm from "../components/construction/ContactForm";
import Glyph from "../components/construction/ConstructionIcons";
import Reveal from "../components/construction/Reveal";

export default function ContactPage() {
  return (
    <div className="font-body kc-page-transition" style={{ backgroundColor: CONSTRUCTION_COLORS.white }}>
      <ConstructionStyle />
      <ConstructionNavbar />
      <WhatsAppButton />

      <ConstructionHero
        eyebrow="Contact"
        titleLines={["Let's Build Something", "Great Together."]}
        subtitle="Tell us about your civil, prefab or sports infrastructure project — an expert will get back to you with a costed, no-obligation quote."
        image={HERO_VIDEO.poster}
        video={HERO_VIDEO.src}
        videoMobile={HERO_VIDEO.mobileSrc}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <Reveal delay={80} className="p-6 rounded-sm" style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                style={{ backgroundColor: CONSTRUCTION_COLORS.concrete, color: CONSTRUCTION_COLORS.orangeDark }}
              >
                <Glyph name="chat" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1.5" style={{ color: CONSTRUCTION_COLORS.ink }}>
                Call or WhatsApp
              </h3>
              <a href={`tel:${PHONE_NUMBER_TEL}`} className="font-body text-sm kc-focus" style={{ color: CONSTRUCTION_COLORS.steel }}>
                {PHONE_NUMBER_DISPLAY}
              </a>
            </Reveal>

            <Reveal delay={160} className="p-6 rounded-sm" style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                style={{ backgroundColor: CONSTRUCTION_COLORS.concrete, color: CONSTRUCTION_COLORS.orangeDark }}
              >
                <Glyph name="building" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1.5" style={{ color: CONSTRUCTION_COLORS.ink }}>
                Kreedum Construction
              </h3>
              <p className="font-body text-sm" style={{ color: CONSTRUCTION_COLORS.steel }}>
                A division of Kreedum International Private Limited
                <br />
                Lucknow, Uttar Pradesh
              </p>
            </Reveal>

            <Reveal delay={240} className="p-6 rounded-sm" style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                style={{ backgroundColor: CONSTRUCTION_COLORS.concrete, color: CONSTRUCTION_COLORS.orangeDark }}
              >
                <Glyph name="clock" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1.5" style={{ color: CONSTRUCTION_COLORS.ink }}>
                Response Time
              </h3>
              <p className="font-body text-sm" style={{ color: CONSTRUCTION_COLORS.steel }}>
                We typically respond within a few working hours, Mon–Sat.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ConstructionFooter />
    </div>
  );
}