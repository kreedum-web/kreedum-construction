/**
 * Project portfolio. `category` must match a CONSTRUCTION_VERTICALS[].category
 * value ("civil" | "prefab" | "sports") so pages can filter this one array
 * instead of keeping separate lists per vertical.
 */

export const CONSTRUCTION_PROJECTS = [
  {
    id: "civil-riverside-complex",
    name: "Riverside Commercial Complex",
    location: "Lucknow, Uttar Pradesh",
    category: "civil",
    desc: "A five-storey mixed-use commercial development with basement parking and full MEP works.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "civil-highway-bridge",
    name: "NH Bridge Widening Works",
    location: "Kanpur, Uttar Pradesh",
    category: "civil",
    desc: "Structural widening and reinforcement of a state highway bridge under live traffic.",
    image:
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "civil-institutional-block",
    name: "District Institutional Block",
    location: "Unnao, Uttar Pradesh",
    category: "civil",
    desc: "A three-block academic and administrative facility built to institutional load standards.",
    image:
      "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "civil-logistics-hub",
    name: "Logistics & Distribution Hub",
    location: "Lucknow, Uttar Pradesh",
    category: "civil",
    desc: "Site development and civil works for a multi-dock logistics facility.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "prefab-peb-warehouse",
    name: "PEB Warehouse — Industrial Area",
    location: "Kanpur, Uttar Pradesh",
    category: "prefab",
    desc: "A 60,000 sq. ft. pre-engineered steel warehouse with clear-span racking bays.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "prefab-industrial-shed",
    name: "Industrial Shed",
    location: "Lucknow, Uttar Pradesh",
    category: "prefab",
    desc: "Clear-span industrial shed engineered around a heavy-machinery production line.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "prefab-office",
    name: "Prefab Corporate Office",
    location: "Noida, Uttar Pradesh",
    category: "prefab",
    desc: "A modular two-storey office building delivered in a fraction of conventional timelines.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "prefab-cold-storage",
    name: "Cold Storage Facility",
    location: "Unnao, Uttar Pradesh",
    category: "prefab",
    desc: "An insulated pre-engineered facility built for temperature-controlled storage.",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sports-indoor-stadium",
    name: "Indoor Multi-Sport Stadium",
    location: "Lucknow, Uttar Pradesh",
    category: "sports",
    desc: "A clear-span indoor arena for basketball, badminton and volleyball with tiered seating.",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sports-athletic-track",
    name: "400m Synthetic Athletic Track",
    location: "Kanpur, Uttar Pradesh",
    category: "sports",
    desc: "A competition-spec synthetic track and field facility built to federation tolerances.",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sports-district-complex",
    name: "District Sports Complex",
    location: "Unnao, Uttar Pradesh",
    category: "sports",
    desc: "A multi-facility public sports campus with courts, a track and a fitness zone.",
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sports-football-ground",
    name: "Community Football Ground",
    location: "Lucknow, Uttar Pradesh",
    category: "sports",
    desc: "A full-size natural turf ground with drainage works and boundary infrastructure.",
    image:
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1200&auto=format&fit=crop",
  },
];

export const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "civil", label: "Civil" },
  { id: "prefab", label: "Prefab" },
  { id: "sports", label: "Sports" },
];
