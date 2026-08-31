import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import { CONSTRUCTION_VERTICALS } from "../../data/constructionVerticals";
import { SPORTS_SITE_URL } from "../../config/crossSiteLinks";

/**
 * Compact dropdown menu anchored under the navbar's ☰ control — a small box,
 * not a full-screen takeover. Closes on outside click, Escape, or picking a link.
 */
export default function NavMenuDropdown({ open, onClose, anchorRef }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function onDocPointerDown(e) {
      if (panelRef.current?.contains(e.target)) return;
      if (anchorRef.current?.contains(e.target)) return;
      onClose();
    }
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", onDocPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, anchorRef]);

  return (
    <div
      ref={panelRef}
      className={`kc-menu-dropdown ${open ? "kc-menu-dropdown-open" : ""}`}
      role="menu"
      aria-hidden={!open}
    >
      <MenuLink to="/" onClick={onClose} tabIndex={open ? 0 : -1}>
        Home
      </MenuLink>
      <MenuLink to="/about" onClick={onClose} tabIndex={open ? 0 : -1}>
        About
      </MenuLink>
      <MenuLink to="/projects" onClick={onClose} tabIndex={open ? 0 : -1}>
        Projects
      </MenuLink>

      <div className="kc-menu-dropdown-label">Explore</div>
      {CONSTRUCTION_VERTICALS.map((v) => (
        <MenuLink key={v.slug} to={`/${v.slug}`} onClick={onClose} tabIndex={open ? 0 : -1} small>
          <span className="mr-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>
            {v.number}
          </span>
          {v.navLabel}
        </MenuLink>
      ))}

      <div className="kc-menu-dropdown-divider" />

      <a
        href={SPORTS_SITE_URL}
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        role="menuitem"
        className="kc-menu-dropdown-link kc-focus"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        ← Kreedum.com
      </a>
    </div>
  );
}

function MenuLink({ to, children, onClick, tabIndex, small = false, accent = false, muted = false }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      tabIndex={tabIndex}
      role="menuitem"
      className="kc-menu-dropdown-link kc-focus"
      style={{
        color: accent ? CONSTRUCTION_COLORS.orange : muted ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.9)",
        fontSize: small ? "0.78rem" : undefined,
      }}
    >
      {children}
    </Link>
  );
}