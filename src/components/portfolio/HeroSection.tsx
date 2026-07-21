import { ArchiveButton, ArchiveLabel, EngravedDivider, CornerOrnament } from "./primitives";
import { PROFILE } from "@/content/profile";

const HERO_PORTRAIT_SRC: string | null = "/headshot-will.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-40 pt-28 sm:pt-44"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="relative z-10">
          <div className="animate-drift" style={{ animationDelay: "0.05s" }}>
            <ArchiveLabel>Archive Activated</ArchiveLabel>
          </div>

          <h1
            className="font-display animate-drift mt-6 text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-parchment"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="block">WILL</span>
            <span className="block text-brass">WANDS</span>
          </h1>

          <div
            className="animate-drift mt-6 flex flex-wrap items-center gap-x-3 gap-y-1"
            style={{ animationDelay: "0.35s" }}
          >
            {PROFILE.disciplines.map((d, i) => (
              <span key={d} className="font-mono-archive text-brass-bright">
                {d}
                {i < PROFILE.disciplines.length - 1 ? (
                  <span aria-hidden="true" className="ml-3 text-brass-dim">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </div>

          <p
            className="animate-drift mt-8 max-w-xl text-lg leading-relaxed text-parchment-dim sm:text-xl"
            style={{ animationDelay: "0.5s" }}
          >
            {PROFILE.tagline}
          </p>

          <EngravedDivider className="animate-drift mt-8" />

          <div
            className="animate-drift mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.7s" }}
          >
            <ArchiveButton as="a" href="#projects" variant="primary">
              Inspect My Work
              <span aria-hidden="true">→</span>
            </ArchiveButton>
            <ArchiveButton as="a" href="#contact" variant="ghost">
              Contact Me
            </ArchiveButton>
            <ArchiveButton
              as="a"
              href={PROFILE.links.resume}
              variant="arcane"
              aria-label="Download résumé"
            >
              Resume
            </ArchiveButton>
          </div>

          <a
            href="#about"
            className="font-mono-archive group animate-drift mt-14 inline-flex items-center gap-3 text-parchment-dim hover:text-brass-bright"
            style={{ animationDelay: "1s" }}
          >
            <span
              aria-hidden="true"
              className="animate-scroll-hint inline-block h-8 w-[1px] bg-current"
            />
            Scroll to unseal the archive
          </a>
        </div>

        <div className="relative hidden items-center justify-center md:flex">
          <div className="animate-drift w-full max-w-sm" style={{ animationDelay: "0.6s" }}>
            <HeroPortraitPlate />
            <div className="mt-6 space-y-2 border-t border-brass-dim pt-6">
              <MetaRow k="Institution" v={PROFILE.school} />
              <MetaRow k="Program" v={PROFILE.program} />
              <MetaRow k="Classification" v="Student" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPortraitPlate() {
  return (
    <figure className="engraved relative aspect-3/4 w-full overflow-hidden bg-parchment-plate">
      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />
      <CornerOrnament position="bl" />
      <CornerOrnament position="br" />

      {HERO_PORTRAIT_SRC ? (
        <img
          src={HERO_PORTRAIT_SRC}
          alt={`Portrait of ${PROFILE.name}`}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
          <svg viewBox="0 0 120 120" className="h-24 w-24 text-brass opacity-70" aria-hidden="true">
            <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle
              cx="60"
              cy="60"
              r="44"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
            <circle cx="60" cy="44" r="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M34 92 C 38 70, 52 64, 60 64 C 68 64, 82 70, 86 92"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          <figcaption className="font-mono-archive text-parchment-dim">
            Awaiting Portrait
          </figcaption>
        </div>
      )}
    </figure>
  );
}

function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="font-mono-archive text-parchment-dim">{k}</span>
      <span className="text-right text-sm text-parchment">{v}</span>
    </div>
  );
}
