import { Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import { CONSTRUCTION_PHONE_NUMBER_DISPLAY as PHONE_NUMBER_DISPLAY, CONSTRUCTION_PHONE_NUMBER_TEL as PHONE_NUMBER_TEL } from "../../config/contact";
import { CONSTRUCTION_VERTICALS } from "../../data/constructionVerticals";
import SocialLinks from "../common/SocialLinks";
import logo from "../../assets/logo.png";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "What We Build", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function ConstructionFooter() {
  return (
    <footer>
      {/* Caution stripe — the one place this page allows a literal site cue */}
      <div className="kc-stripe" aria-hidden="true" />

      <div style={{ backgroundColor: CONSTRUCTION_COLORS.ink }}>
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 kc-focus mb-4">
              <img src={logo} alt="Kreedum logo" className="w-7 h-7" />
              <span className="font-display font-semibold text-sm uppercase tracking-tight" style={{ color: CONSTRUCTION_COLORS.white }}>
                Kreedum <span style={{ color: CONSTRUCTION_COLORS.orange }}>Construction</span>
              </span>
            </Link>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Building with integrity. Delivering with excellence.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="kc-plate mb-4" style={{ color: CONSTRUCTION_COLORS.orange }}>
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="font-body text-sm kc-focus transition-colors hover:opacity-80" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <div className="kc-plate mb-4" style={{ color: CONSTRUCTION_COLORS.orange }}>
              Our Expertise
            </div>
            <ul className="space-y-2.5">
              {CONSTRUCTION_VERTICALS.map((v) => (
                <li key={v.slug}>
                  <Link to={`/${v.slug}`} className="font-body text-sm kc-focus transition-colors hover:opacity-80" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <span className="kc-plate mr-1" style={{ color: "rgba(255,255,255,0.35)" }}>{v.number}</span>
                    {v.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="kc-plate mb-4" style={{ color: CONSTRUCTION_COLORS.orange }}>
              Contact
            </div>
            <ul className="space-y-2.5 mb-5">
              <li>
                <a href={`tel:${PHONE_NUMBER_TEL}`} className="font-body text-sm kc-focus transition-colors hover:opacity-80" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {PHONE_NUMBER_DISPLAY}
                </a>
              </li>
              <li className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                construction@kreedum.co.in
              </li>
            </ul>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="kc-plate text-center md:text-left" style={{ color: "rgba(255,255,255,0.35)" }}>
              © {new Date().getFullYear()} Kreedum International Private Limited — Construction Division
            </p>
            <div className="flex items-center gap-5">
              <span className="kc-plate" style={{ color: "rgba(255,255,255,0.3)" }}>Privacy Policy</span>
              <span className="kc-plate" style={{ color: "rgba(255,255,255,0.3)" }}>Terms &amp; Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
