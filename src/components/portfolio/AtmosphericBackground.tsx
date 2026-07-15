import { useEffect, useRef, type ReactNode } from "react";

export function AtmosphericBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, oklch(0.2 0.045 290) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, oklch(0.18 0.05 265) 0%, transparent 60%), oklch(0.12 0.025 285)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--brass)" strokeWidth="0.5" />
          </pattern>
          <pattern id="grid-major" width="240" height="240" patternUnits="userSpaceOnUse">
            <path d="M 240 0 L 0 0 0 240" fill="none" stroke="var(--brass)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid-major)" />
      </svg>

      <Starfield />

      <svg
        className="absolute -right-40 -top-40 h-[500px] w-[500px] opacity-[0.06]"
        viewBox="0 0 400 400"
      >
        <g fill="none" stroke="var(--brass)" strokeWidth="0.7">
          <circle cx="200" cy="200" r="180" />
          <circle cx="200" cy="200" r="140" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="100" />
          <circle cx="200" cy="200" r="60" strokeDasharray="1 4" />
        </g>
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.07 0.018 260 / 0.85) 100%)",
        }}
      />
    </div>
  );
}

function Starfield() {
  const stars: Array<{ x: number; y: number; r: number; d: number }> = [];
  const seed = 1337;
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < 50; i++) {
    stars.push({
      x: rand() * 100,
      y: rand() * 100,
      r: rand() > 0.8 ? (rand() * 2 + 1.0) : (rand() * 0.8 + 0.4),
      d: rand() * 5,
    });
  }
  return (
    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
      {stars.map((st, i) => (
        <circle
          key={i}
          cx={`${st.x}%`}
          cy={`${st.y}%`}
          r={st.r}
          fill="var(--parchment)"
          opacity={0.5}
          className="animate-twinkle"
          style={{ animationDelay: `${st.d}s` }}
        />
      ))}
    </svg>
  );
}

export function ArchiveSurface({ children }: { children: ReactNode }) {
  return <div className="relative z-10">{children}</div>;
}
