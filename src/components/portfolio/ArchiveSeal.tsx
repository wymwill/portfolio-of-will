import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/content/profile";

type Phase = "sealing" | "opening" | "done";

const SEAL_MS = 1500; // sigil engraves + rings align
const OPEN_MS = 800; // iris opens onto the site

export function ArchiveSeal() {
  const [phase, setPhase] = useState<Phase>("sealing");
  const phaseRef = useRef<Phase>("sealing");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  const open = () => {
    if (phaseRef.current !== "sealing") return;
    timers.current.forEach(clearTimeout);
    sessionStorage.setItem("archive-unsealed", "1");
    setPhase("opening");
    timers.current = [window.setTimeout(() => setPhase("done"), OPEN_MS)];
  };

  useEffect(() => {
    if (sessionStorage.getItem("archive-unsealed")) {
      setPhase("done");
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sealTime = reduce ? 500 : SEAL_MS;
    timers.current = [
      window.setTimeout(() => {
        sessionStorage.setItem("archive-unsealed", "1");
        setPhase("opening");
      }, sealTime),
      window.setTimeout(() => setPhase("done"), sealTime + OPEN_MS),
    ];
    return () => timers.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Unsealing the archive"
      onClick={open}
      onKeyDown={open}
      tabIndex={-1}
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep",
        phase === "opening" && "seal-iris-out",
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-7 transition-opacity duration-300",
          phase === "opening" && "opacity-0",
        )}
      >
        <div className="relative h-44 w-44 sm:h-52 sm:w-52">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full"
            style={{ animation: "ring-spin-slow 9s linear infinite" }}
            aria-hidden="true"
          >
            <circle
              cx="100"
              cy="100"
              r="96"
              fill="none"
              stroke="var(--brass)"
              strokeWidth="1"
              opacity="0.8"
            />
            {Array.from({ length: 48 }).map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="4"
                x2="100"
                y2={i % 4 === 0 ? 14 : 9}
                stroke="var(--brass)"
                strokeWidth={i % 4 === 0 ? 1.4 : 0.6}
                transform={`rotate(${(i / 48) * 360} 100 100)`}
                opacity={i % 4 === 0 ? 1 : 0.55}
              />
            ))}
          </svg>
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full"
            style={{ animation: "ring-spin-reverse 6s linear infinite" }}
            aria-hidden="true"
          >
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="var(--brass)"
              strokeWidth="0.8"
              strokeDasharray="5 9"
              opacity="0.85"
            />
            {[0, 90, 180, 270].map((a) => (
              <circle
                key={a}
                cx="100"
                cy="22"
                r="2.6"
                fill="var(--brass-bright)"
                transform={`rotate(${a} 100 100)`}
              />
            ))}
          </svg>
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle
              cx="100"
              cy="100"
              r="58"
              fill="none"
              stroke="var(--arcane)"
              strokeWidth="0.8"
              opacity="0.7"
              strokeDasharray="1000"
              style={{ animation: "engrave-draw 1.1s ease-out both" }}
            />
            <path
              d="M64 74 L82 130 L100 88 L118 130 L136 74"
              fill="none"
              stroke="var(--brass-bright)"
              strokeWidth="4"
              strokeLinejoin="miter"
              strokeDasharray="1000"
              style={{
                animation: "engrave-draw 1.2s ease-out 0.15s both",
                filter:
                  "drop-shadow(0 0 8px color-mix(in oklab, var(--brass-bright) 55%, transparent))",
              }}
            />
          </svg>
          <div className="bg-arcane-glow animate-lens absolute inset-[22%] rounded-full opacity-60" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="font-mono-archive text-brass">
            Unsealing the Archive of {PROFILE.name}
          </span>
          <span className="relative block h-[2px] w-44 overflow-hidden bg-ink" aria-hidden="true">
            <span
              className="absolute inset-y-0 left-0 bg-brass"
              style={{ animation: `seal-progress ${SEAL_MS}ms linear both` }}
            />
          </span>
          <span className="font-mono-archive text-parchment-dim opacity-60">Click to skip</span>
        </div>
      </div>
    </div>
  );
}
