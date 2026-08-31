import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import { CONSTRUCTION_VERTICALS } from "../../data/constructionVerticals";
import { VERTICAL_VIDEOS } from "../../config/media";
import { useScrolled } from "../../hooks/useScrolled";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import HeroVideo from "./HeroVideo";
import NavMenuDropdown from "./NavMenuDropdown";
import logo from "../../assets/logo.png";

// Short pill labels per the redesign brief (PREFAB / COMMERCIAL / SPORTS),
// kept separate from the longer `navLabel` used in the menu dropdown and
// existing footers, so no existing copy has to be renamed.
const PILL_LABEL = {
  "civil-construction": "Commercial",
  "prefabricated-buildings": "Prefab",
  "sports-infrastructure": "Sports",
};

export default function ConstructionNavbar() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${scrolled ? "kc-nav-scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-5 flex items-center justify-between gap-2 md:gap-3">
        {/* Logo segment */}
        <Link
          to="/"
          className="kc-nav-pill kc-focus shrink-0"
          aria-label="Kreedum Construction — home"
        >
          <img src={logo} alt="" className="w-5 h-5 md:w-6 md:h-6 rounded-full" aria-hidden="true" />
          <span className="kc-logo-text flex flex-col md:flex-row md:items-baseline md:gap-1.5 leading-tight">
            <span className="font-display font-bold text-[11px] md:text-xs tracking-wide" style={{ color: CONSTRUCTION_COLORS.white }}>
              KREEDUM
            </span>
            <span
              className="font-display font-semibold text-[8px] md:text-[10px] tracking-wide"
              style={{ color: CONSTRUCTION_COLORS.orange }}
            >
              CONSTRUCTION
            </span>
          </span>
        </Link>

        {/* Vertical pills — desktop only, video-preview dropdowns */}
        <nav className="hidden lg:flex items-center gap-3" aria-label="Construction verticals">
          {CONSTRUCTION_VERTICALS.map((v) => (
            <NavVerticalPill key={v.slug} vertical={v} />
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="relative">
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="kc-nav-pill kc-focus"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="Open menu"
            >
              <span aria-hidden="true" className="text-sm leading-none">☰</span>
              <span className="hidden sm:inline kc-plate">Menu</span>
            </button>

            <NavMenuDropdown open={menuOpen} onClose={() => setMenuOpen(false)} anchorRef={menuBtnRef} />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavVerticalPill({ vertical }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const media = VERTICAL_VIDEOS[vertical.slug];
  const to = `/${vertical.slug}`;

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <Link
        to={to}
        className="kc-nav-pill kc-focus kc-plate"
        onFocus={openNow}
        onBlur={closeSoon}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {PILL_LABEL[vertical.slug] || vertical.navLabel}
      </Link>

      <div className={`kc-nav-dropdown ${open ? "kc-nav-dropdown-open" : ""}`}>
        {/* Mounted only while open: the video plays exactly while visible,
            and unmounting on close stops it — no manual pause bookkeeping. */}
        {open && (
          <Link
            to={to}
            onClick={() => setOpen(false)}
            className="kc-nav-preview-card kc-focus"
            style={{ backgroundColor: CONSTRUCTION_COLORS.black }}
          >
            <div className="kc-nav-preview-media">
              <HeroVideo
                src={media?.src}
                mobileSrc={media?.mobileSrc}
                poster={media?.poster || vertical.cardImage}
                className="w-full h-full object-cover"
                reducedMotion={reducedMotion}
              />
              <div className="kc-nav-preview-overlay" aria-hidden="true" />
            </div>
            <div className="kc-nav-preview-label">
              <span className="kc-plate" style={{ color: CONSTRUCTION_COLORS.orange }}>
                {vertical.number}
              </span>
              <span className="font-display font-bold text-sm" style={{ color: CONSTRUCTION_COLORS.white }}>
                {vertical.navLabel}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}