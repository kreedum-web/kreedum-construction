import { useState, useMemo } from "react";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import { CONSTRUCTION_PROJECTS, PROJECT_FILTERS } from "../../data/constructionProjects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

/**
 * filterable: true renders the ALL/CIVIL/PREFAB/SPORTS tabs (used on /construction/projects).
 * category + limit: used for a static "Featured Projects" preview on a single vertical page.
 */
export default function ProjectGrid({ filterable = false, category, limit }) {
  const [active, setActive] = useState(category || "all");

  const projects = useMemo(() => {
    const base =
      active === "all" ? CONSTRUCTION_PROJECTS : CONSTRUCTION_PROJECTS.filter((p) => p.category === active);
    return limit ? base.slice(0, limit) : base;
  }, [active, limit]);

  return (
    <div>
      {filterable && (
        <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className="kc-plate kc-focus px-4 py-2 rounded-sm border transition-colors"
              style={
                active === f.id
                  ? { backgroundColor: CONSTRUCTION_COLORS.orange, color: CONSTRUCTION_COLORS.white, borderColor: CONSTRUCTION_COLORS.orange }
                  : { backgroundColor: "transparent", color: CONSTRUCTION_COLORS.steel, borderColor: CONSTRUCTION_COLORS.concrete }
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 90}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
