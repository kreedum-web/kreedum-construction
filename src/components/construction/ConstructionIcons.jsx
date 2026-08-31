// Small inline icon set for the Construction vertical.
// One shared component keyed by name, in the same spirit as components/common/Icons.jsx —
// keeps the expertise/why-choose grids from needing a new file per icon.

const PATHS = {
  building: "M4 21V7l8-4 8 4v14M4 21h16M9 21v-6h6v6M9 10h.01M15 10h.01M9 14h.01M15 14h.01",
  factory: "M3 21V11l5 3v-3l5 3V8l6-4v17H3zM7 21v-4M12 21v-4M17 21v-4",
  bridge: "M2 17h20M4 17V9M20 17V9M8 17v-5.5a4 4 0 018 0V17M2 9c4-3 16-3 20 0",
  crane: "M5 21V4M5 4h11M13 4l4 4M17 8v13M9 21h12M9 13h5",
  shield: "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 3",
  team: "M8 11a3 3 0 100-6 3 3 0 000 6zM17 11a3 3 0 100-6 3 3 0 000 6zM2 21v-1a5 5 0 015-5h2a5 5 0 015 5v1M14 15h1a5 5 0 015 5v1",
  chat: "M4 5h16v11H8l-4 4V5z",
  leaf: "M5 21c0-9 6-15 15-15-1 9-6 14-15 15zM5 21c2-3 5-6 9-8",
  bolt: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  tools: "M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-3-3-3 3z",
  medal: "M12 15a6 6 0 100-12 6 6 0 000 12zM8.5 14L6 22l6-3 6 3-2.5-8",
  grid: "M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6z",
  scale: "M12 3v18M7 7L4 13a3 3 0 006 0L7 7zM17 7l-3 6a3 3 0 006 0l-3-6zM4 21h16M7 7h10",
  track: "M4 20c0-6 3-10 8-10s8 4 8 10M4 20h16M9 10c0-4 1-7 3-7s3 3 3 7",
  target: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8zM12 13a1 1 0 100-2 1 1 0 000 2z",
  community: "M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
};

export default function Glyph({ name, size = 22, color = "currentColor", strokeWidth = 1.6 }) {
  const d = PATHS[name] || PATHS.building;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
