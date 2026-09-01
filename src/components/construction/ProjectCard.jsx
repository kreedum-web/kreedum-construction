import { CONSTRUCTION_COLORS } from "../../config/theme";

const CATEGORY_LABEL = { civil: "Civil", prefab: "Prefab", sports: "Sports" };

export default function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl h-44 sm:h-56 md:h-64 flex flex-col justify-end p-4 sm:p-5 md:p-6 transition-transform hover:-translate-y-1 kc-corners">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(23,23,23,0.55) 50%, rgba(23,23,23,0.10) 100%)",
        }}
      />

      <div className="relative z-10">
        <div
          className="kc-plate mb-2 sm:mb-2.5 inline-block px-2 sm:px-2.5 py-0.5 sm:py-1"
          style={{ color: CONSTRUCTION_COLORS.white, backgroundColor: "rgba(232,111,0,0.85)" }}
        >
          {CATEGORY_LABEL[project.category]}
        </div>
        <h3 className="font-display font-semibold text-sm sm:text-base mb-1 text-white">{project.name}</h3>
        <p className="kc-plate text-white/65" style={{ letterSpacing: "0.08em" }}>{project.location}</p>
      </div>
    </div>
  );
}