import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./primitives";
import { CardBackArt } from "./CardBackArt";
import { SKILL_CARDS, type SkillCard } from "@/content/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Archive Record 02"
          title="The Five Arts"
          kicker="Draw a card to unseal each discipline of the practice."
        />

        <div className="mt-14 flex flex-wrap items-stretch justify-center gap-5 sm:gap-7">
          {SKILL_CARDS.map((card, i) => (
            <SkillTarotCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTarotCard({ card, index }: { card: SkillCard; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-pressed={flipped}
      aria-label={
        flipped
          ? `${card.title} — ${card.domain}: ${card.skills.join(", ")}. Press to turn face-down.`
          : `${card.title} — face-down card ${card.romanNumeral}. Press to reveal skills.`
      }
      className={cn("tarot-card block", flipped && "is-flipped")}
      style={{
        width: "clamp(150px, 17vw, 190px)",
        aspectRatio: "2 / 3",
        transform: hovered && !flipped ? "translateY(-10px) rotate(-1deg)" : "none",
        transition: "transform 0.35s ease, filter 0.35s ease",
        filter: flipped
          ? "drop-shadow(0 0 20px color-mix(in oklab, var(--arcane) 45%, transparent))"
          : hovered
            ? "drop-shadow(0 0 14px color-mix(in oklab, var(--brass) 45%, transparent))"
            : "drop-shadow(0 10px 20px color-mix(in oklab, black 65%, transparent))",
        animation: `card-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) ${index * 0.12}s both`,
      }}
    >
      <div className="tarot-card-inner">
        <div
          className="tarot-card-face tarot-card-back"
          style={{
            border: "1px solid color-mix(in oklab, var(--brass) 45%, transparent)",
            background:
              "linear-gradient(165deg, color-mix(in oklab, var(--arcane) 16%, var(--ink-deep)) 0%, color-mix(in oklab, var(--arcane) 8%, var(--ink-deep)) 100%)",
          }}
        >
          <CardBackArt />
        </div>

        <div
          className="tarot-card-face tarot-card-front flex flex-col items-center px-3 py-4 text-center"
          style={{
            border: "1px solid color-mix(in oklab, var(--brass-bright) 60%, transparent)",
            background:
              "radial-gradient(ellipse at 30% 12%, color-mix(in oklab, var(--brass) 14%, transparent), transparent 60%), linear-gradient(180deg, oklch(0.21 0.022 260), oklch(0.13 0.02 260))",
            boxShadow: "inset 0 0 22px color-mix(in oklab, var(--arcane) 16%, transparent)",
          }}
        >
          <span
            className="font-mono-archive"
            style={{ fontSize: 10, color: "var(--brass-bright)" }}
          >
            {card.romanNumeral}
          </span>
          <span
            aria-hidden="true"
            className="mt-1"
            style={{
              fontSize: 30,
              lineHeight: 1,
              color: "var(--arcane)",
              filter: "drop-shadow(0 0 8px color-mix(in oklab, var(--arcane) 55%, transparent))",
            }}
          >
            {card.symbol}
          </span>
          <span
            className="font-display mt-2"
            style={{ fontSize: 17, letterSpacing: "0.04em", color: "var(--brass-bright)" }}
          >
            {card.title}
          </span>
          <span
            className="font-mono-archive mt-0.5"
            style={{ fontSize: 7.5, color: "var(--parchment-dim)" }}
          >
            {card.domain}
          </span>
          <span
            aria-hidden="true"
            className="my-2.5 h-[1px] w-12"
            style={{ background: "color-mix(in oklab, var(--brass) 55%, transparent)" }}
          />
          <ul className="flex flex-col gap-1.5">
            {card.skills.map((s) => (
              <li key={s} className="text-parchment" style={{ fontSize: 12.5, lineHeight: 1.25 }}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}
