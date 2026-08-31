/**
 * One entry per Construction vertical. The homepage's VerticalCard grid and the
 * shared VerticalPage (src/pages/construction/VerticalPage.jsx) both read from
 * this file — add a fourth vertical here and it appears everywhere with no
 * component changes.
 */

export const CONSTRUCTION_VERTICALS = [
  {
    slug: "civil-construction",
    number: "01",
    navLabel: "Civil Construction",
    cardTitle: "Civil Construction",
    cardDesc:
      "End-to-end construction solutions for infrastructure, commercial, industrial and institutional projects.",
    cardCta: "Explore Civil",
    cardImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    heroTitle: "Civil Construction",
    heroSubtitle: "Building strong foundations for a stronger tomorrow.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Kreedum Construction / Civil",
    expertiseTitle: "Our Expertise",
    expertise: [
      { icon: "bridge", title: "Infrastructure Development", desc: "Roads, bridges and public works engineered for decades of load." },
      { icon: "building", title: "Commercial Buildings", desc: "Offices, retail and mixed-use developments built to spec and schedule." },
      { icon: "factory", title: "Industrial Construction", desc: "Plants and facilities engineered around real production workflows." },
      { icon: "team", title: "Institutional Projects", desc: "Schools, hospitals and civic buildings built for daily, heavy use." },
      { icon: "crane", title: "Structural Works", desc: "Foundations, framing and structural systems that carry everything above them." },
    ],
    whyTitle: "Why Choose Kreedum?",
    why: [
      { icon: "shield", title: "Quality & Safety First", desc: "Every site runs on documented safety protocol, not shortcuts." },
      { icon: "clock", title: "Timely Project Delivery", desc: "Schedules are built with contingency, not optimism." },
      { icon: "bolt", title: "Advanced Technology", desc: "Modern survey, modelling and site-management tools throughout." },
      { icon: "team", title: "Experienced Team", desc: "Engineers and site teams who've delivered this scale before." },
      { icon: "chat", title: "Transparent Communication", desc: "Clear reporting at every milestone — no surprises at handover." },
    ],
    category: "civil",
    ctaEyebrow: "Start a civil project",
    ctaHeadline: "Have a Civil Project in Mind?",
    ctaButton: "Get My Quote",
  },
  {
    slug: "prefabricated-buildings",
    number: "02",
    navLabel: "Prefabricated Buildings",
    cardTitle: "Prefabricated Buildings",
    cardDesc:
      "Faster construction. Stronger solutions. Sustainable and efficient building systems.",
    cardCta: "Explore Prefab",
    cardImage:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop",
    heroTitle: "Prefabricated Buildings",
    heroSubtitle: "Faster construction. Stronger solutions.",
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Kreedum Construction / Prefab",
    expertiseTitle: "Our Solutions",
    expertise: [
      { icon: "factory", title: "Pre-Engineered Buildings", desc: "Steel PEB structures engineered off-site, assembled fast on-site." },
      { icon: "building", title: "Industrial Sheds", desc: "Clear-span sheds sized for machinery, storage and production lines." },
      { icon: "grid", title: "Warehouses", desc: "High-bay warehousing built for racking density and vehicle movement." },
      { icon: "tools", title: "Modular Buildings", desc: "Repeatable modular units for sites that need to scale in phases." },
      { icon: "bolt", title: "Custom Solutions", desc: "Non-standard spans and layouts engineered to the brief, not a catalogue." },
    ],
    whyTitle: "Why Prefab?",
    why: [
      { icon: "clock", title: "Faster Construction", desc: "Off-site fabrication runs in parallel with on-site groundwork." },
      { icon: "scale", title: "Cost Effective", desc: "Predictable material and labour costs, with less on-site waste." },
      { icon: "shield", title: "High Durability", desc: "Engineered steel systems built for decades of industrial use." },
      { icon: "leaf", title: "Sustainable Solution", desc: "Less on-site waste and material use than conventional construction." },
      { icon: "tools", title: "Low Maintenance", desc: "Coated steel systems designed to hold up with minimal upkeep." },
    ],
    category: "prefab",
    ctaEyebrow: "Start a prefab project",
    ctaHeadline: "Need a Prefab Solution?",
    ctaButton: "Let's Make It Possible",
  },
  {
    slug: "sports-infrastructure",
    number: "03",
    navLabel: "Sports Infrastructure",
    cardTitle: "Sports Infrastructure",
    cardDesc: "Building arenas and facilities that inspire performance and community.",
    cardCta: "Explore Sports",
    cardImage:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    heroTitle: "Sports Infrastructure",
    heroSubtitle: "Building arenas that inspire greatness.",
    heroImage:
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Kreedum Construction / Sports",
    expertiseTitle: "Our Expertise",
    expertise: [
      { icon: "medal", title: "Sports Complexes", desc: "Multi-facility campuses covering courts, tracks and support buildings." },
      { icon: "building", title: "Indoor Stadiums", desc: "Clear-span indoor arenas engineered for spectators and events." },
      { icon: "track", title: "Athletic Tracks", desc: "Certified-spec synthetic tracks built to competition tolerances." },
      { icon: "grid", title: "Courts & Playgrounds", desc: "Basketball, tennis and multi-sport courts finished to play-quality standard." },
      { icon: "target", title: "Fitness Infrastructure", desc: "Outdoor gyms and training zones built alongside Kreedum's own equipment expertise." },
    ],
    whyTitle: "Why Kreedum?",
    why: [
      { icon: "target", title: "Specialized Expertise", desc: "Sports-build experience most general contractors don't carry." },
      { icon: "medal", title: "High Performance Design", desc: "Surfaces and structures engineered around how athletes actually move." },
      { icon: "shield", title: "International Standards", desc: "Specifications built to recognised sporting-federation benchmarks." },
      { icon: "scale", title: "Safe & Durable", desc: "Materials selected for player safety over the full life of the facility." },
      { icon: "community", title: "Community Impact", desc: "Facilities designed to serve athletes and the public long after handover." },
    ],
    category: "sports",
    ctaEyebrow: "Start a sports build",
    ctaHeadline: "Let's Build Great Infrastructure for Sports.",
    ctaButton: "Get My Quote",
  },
];

export function getVerticalBySlug(slug) {
  return CONSTRUCTION_VERTICALS.find((v) => v.slug === slug);
}
