import { CONSTRUCTION_COLORS } from "../../config/theme";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Years Building" },
  { value: 3, suffix: "", label: "Specialized Verticals" },
  { value: 8, suffix: "", label: "States Served" },
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-14"
     style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-[#E5DED1] px-4 sm:px-6 md:grid-cols-4 md:divide-y-0">
        {STATS.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 50}
            className="flex min-w-0 flex-col items-center justify-center px-2 py-3 text-center sm:px-4 sm:py-4 md:px-6 md:py-0"
          >
            <CountUp
              end={stat.value}
              suffix={stat.suffix}
              className="block font-mono text-2xl font-medium leading-none sm:text-3xl md:text-4xl"
              style={{ color: CONSTRUCTION_COLORS.ink }}
            />

            <div
              className="kc-plate mt-2 text-[9px] leading-snug tracking-[0.1em] sm:text-[10px] md:text-xs"
              style={{ color: CONSTRUCTION_COLORS.steel }}
            >
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}