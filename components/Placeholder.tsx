type Props = {
  label?: string;
  className?: string;
  tone?: "stone" | "forest" | "accent" | "sky";
};

const tones = {
  stone: "from-[#d8d2c6] to-[#c4bcab] text-[#6b6252]",
  forest: "from-[#8a7f66] via-[#726550] to-[#5f5640] text-white/70",
  accent: "from-accent to-accent-dark text-white/80",
  sky: "from-[#a8c4d4] via-[#8fb0c4] to-[#6e94ab] text-white/80",
};

export default function Placeholder({ label, className = "", tone = "stone" }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
      role="img"
      aria-label={label || "Platzhalterbild"}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="arches" width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M0 56 V28 A28 28 0 0 1 56 28 V56"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arches)" />
      </svg>
      {label && (
        <span className="relative px-4 text-center text-xs font-medium tracking-widest uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
