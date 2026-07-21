import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { EXPERIENCE, type ExperienceEntry } from "@/content/experience";
import { BrassFrame, SectionHeading, TechnicalTag } from "./primitives";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Archive Record 03"
          title="Chronicle of Expeditions"
          kicker="One chronicle, two paths."
        />

        <div className="mt-14 hidden grid-cols-2 gap-14 md:grid">
          <RailLegend side="technical" />
          <RailLegend side="cultural" />
        </div>

        <div className="relative mt-6 md:mt-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-4 hidden w-[2px] md:left-1/2 md:block md:-translate-x-1/2"
          >
            <div className="h-full w-full bg-gradient-to-b from-transparent via-brass/50 to-transparent" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-4 w-[2px] bg-gradient-to-b from-transparent via-brass/40 to-transparent md:hidden"
          />

          <ol className="space-y-14">
            {EXPERIENCE.map((entry) => (
              <TimelineItem key={entry.archiveNo} entry={entry} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const SIDE_LABEL: Record<ExperienceEntry["side"], string> = {
  technical: "Technical",
  cultural: "Social & Cultural",
};

function RailLegend({ side }: { side: ExperienceEntry["side"] }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        side === "technical" ? "justify-start" : "justify-end",
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-[1px] w-10", side === "technical" ? "bg-brass" : "bg-arcane")}
      />
      <span
        className={cn("font-mono-archive", side === "technical" ? "text-brass" : "text-arcane")}
      >
        {SIDE_LABEL[side]}
      </span>
    </div>
  );
}

function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);
  const isCultural = entry.side === "cultural";

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={cn(
        "relative grid grid-cols-1 gap-6 transition-all duration-700 md:grid-cols-2 md:gap-14",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
    >
      <YearSeal
        year={entry.year}
        cultural={isCultural}
        className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2"
        visible={visible}
      />

      <div className={cn("pl-14 md:pl-0", isCultural ? "md:col-start-2" : "md:col-start-1")}>
        <BrassFrame className="p-6 sm:p-7">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className={cn("font-mono-archive", isCultural ? "text-arcane" : "text-brass")}>
              {SIDE_LABEL[entry.side]}
            </span>
            <span className="font-mono-archive text-parchment-dim">{entry.dateLabel}</span>
          </div>
          <h3 className="font-display text-2xl leading-tight text-parchment">
            {entry.organization}
          </h3>
          <div className={cn("text-arcane", isCultural ? "text-arcane" : "text-brass")}>
            {entry.role}
          </div>
          <p className="mt-4 leading-relaxed text-parchment-dim">{entry.summary}</p>
          <ul className="mt-4 space-y-2 border-t border-brass-dim pt-4">
            {entry.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-parchment">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brass"
                />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.tags.map((t) => (
              <TechnicalTag key={t}>{t}</TechnicalTag>
            ))}
          </div>
        </BrassFrame>
      </div>
    </li>
  );
}

function YearSeal({
  year,
  cultural,
  className,
  visible,
}: {
  year: string;
  cultural: boolean;
  className?: string;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        "z-10 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-700",
        visible ? "rotate-0" : "-rotate-45",
        className,
      )}
      style={{
        background: "var(--brass)",
        boxShadow: `0 0 0 2px var(--ink-deep), 0 0 0 3px ${
          cultural ? "var(--arcane)" : "var(--brass-dim)"
        }, 0 6px 18px oklch(0.06 0.02 260 / 0.6)`,
      }}
    >
      <span
        className="font-mono-archive text-ink-deep"
        style={{ fontSize: 11, letterSpacing: "0.02em", fontWeight: 700 }}
      >
        {year}
      </span>
    </div>
  );
}
