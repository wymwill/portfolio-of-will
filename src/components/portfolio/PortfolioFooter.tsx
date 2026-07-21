import { PROFILE } from "@/content/profile";
import { EngravedDivider } from "./primitives";

export function PortfolioFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-brass/20 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <EngravedDivider />
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left w-full">
          <div>
            <div className="font-display text-lg text-parchment">{PROFILE.name}</div>
            <div className="font-mono-archive text-parchment-dim">Archive sealed © {year}</div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PROFILE.links.github}
              className="font-mono-archive text-parchment-dim hover:text-brass-bright"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={PROFILE.links.linkedin}
              className="font-mono-archive text-parchment-dim hover:text-brass-bright"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.links.resume}
              className="font-mono-archive text-parchment-dim hover:text-brass-bright"
            >
              Resume
            </a>
            <a
              href="#hero"
              className="font-mono-plex archive-frame px-3 py-2 text-parchment hover:text-brass-bright"
              style={
                {
                  "--af-border": "color-mix(in oklab, var(--brass) 50%, transparent)",
                  "--af-bg": "color-mix(in oklab, var(--ink) 80%, var(--ink-deep))",
                  "--af-bg-hover": "var(--ink)",
                } as React.CSSProperties
              }
            >
              Return to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
