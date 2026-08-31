import { Link } from "react-router-dom";
import { CONSTRUCTION_COLORS } from "../../config/theme";

export default function VerticalCard({ vertical }) {
  return (
    <Link
      to={`/${vertical.slug}`}
      className="group relative overflow-hidden rounded-sm h-72 md:h-96 flex flex-col justify-end p-7 md:p-9 kc-focus transition-transform hover:-translate-y-1 kc-corners"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${vertical.cardImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(13,13,13,0.94) 0%, rgba(23,23,23,0.65) 48%, rgba(23,23,23,0.15) 100%)",
        }}
      />

      <div className="relative z-10">
        <div className="kc-plate mb-3 text-white/55">{vertical.number}</div>
        <h3 className="font-display font-bold text-xl md:text-2xl mb-2 text-white">{vertical.cardTitle}</h3>
        <p className="font-body text-sm leading-relaxed mb-5 text-white/80 max-w-sm">{vertical.cardDesc}</p>
        <span className="inline-flex items-center gap-2 kc-plate" style={{ color: CONSTRUCTION_COLORS.orange }}>
          {vertical.cardCta}
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
