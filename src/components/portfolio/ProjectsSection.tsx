import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PROJECTS, type Project } from "@/content/projects";
import {
  ArchiveButton,
  ArchiveLabel,
  BrassFrame,
  SectionHeading,
  TechnicalTag,
} from "./primitives";

export function ProjectsSection() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
  const others = PROJECTS.filter((p) => p !== featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Archive Record 04"
          title="Cabinet of Inventions"
          kicker="A working catalog of engineering artifacts."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <FeaturedCard project={featured} onOpen={setOpenProject} />

          {others.map((p) => (
            <ProjectCard key={p.artifactNo} project={p} onOpen={setOpenProject} />
          ))}
        </div>
      </div>

      <ProjectDossier project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}

function FeaturedCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group relative col-span-1 text-left transition-shadow duration-300 hover:shadow-[0_0_56px_-10px_var(--brass)] focus-visible:shadow-[0_0_56px_-10px_var(--brass)] lg:col-span-2"
      aria-label={`Inspect featured project: ${project.title}`}
    >
      <BrassFrame className="h-full overflow-hidden p-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-brass-dim">
          <ProjectVisual project={project} large />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/40 to-transparent" />
          <div className="absolute left-5 top-5">
            <ArchiveLabel>Featured Artifact</ArchiveLabel>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="font-mono-archive text-brass">{project.artifactNo}</span>
            <span className="font-mono-archive text-parchment-dim">{project.role}</span>
          </div>
          <h3 className="font-display mt-2 text-3xl leading-tight text-parchment sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-lg text-parchment-dim">{project.problem}</p>
          <p className="mt-4 leading-relaxed text-parchment">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <TechnicalTag key={t}>{t}</TechnicalTag>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-mono-archive inline-flex items-center gap-2 text-brass-bright group-hover:text-brass-bright">
              Inspect Project
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </BrassFrame>
    </button>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group relative text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
      aria-label={`Inspect project: ${project.title}`}
    >
      <BrassFrame className="h-full overflow-hidden p-0 transition-shadow duration-300 group-hover:shadow-[0_0_36px_-8px_var(--brass)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-brass-dim">
          <ProjectVisual project={project} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-transparent to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-mono-archive text-brass">{project.artifactNo}</span>
          </div>
          <h3 className="font-display mt-1 text-xl leading-tight text-parchment">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-parchment-dim">
            {project.problem}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <TechnicalTag key={t}>{t}</TechnicalTag>
            ))}
          </div>
          <div className="font-mono-archive mt-4 flex items-center gap-2 text-brass-bright">
            Inspect
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </BrassFrame>
    </button>
  );
}

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const variant = parseInt(project.artifactNo.slice(-1), 10) % 5;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, oklch(0.24 0.03 260) 0%, oklch(0.10 0.02 260) 70%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <defs>
          <pattern
            id={`pv-${project.artifactNo}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--brass)" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pv-${project.artifactNo})`} />
      </svg>

      <svg
        viewBox="0 0 400 300"
        className={cn("relative h-full w-full", large ? "opacity-90" : "opacity-85")}
        aria-hidden="true"
      >
        {variant === 0 && <DiagramRobot />}
        {variant === 1 && <DiagramGraph />}
        {variant === 2 && <DiagramWeb />}
        {variant === 3 && <DiagramLens />}
        {variant === 4 && <DiagramCircuit />}
      </svg>

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, oklch(0.72 0.11 195 / 0.35) 0%, transparent 55%)",
        }}
      />
    </div>
  );
}

function DiagramRobot() {
  return (
    <g fill="none" stroke="var(--brass-bright)" strokeWidth="1">
      <rect x="140" y="120" width="120" height="80" rx="4" />
      <circle cx="160" cy="220" r="18" />
      <circle cx="240" cy="220" r="18" />
      <path d="M170 120 L170 90 L230 90 L230 120" />
      <circle cx="200" cy="80" r="8" fill="var(--arcane)" stroke="var(--arcane-bright)" />
      <path d="M100 160 L140 160 M260 160 L300 160" strokeDasharray="2 4" />
      <circle cx="200" cy="160" r="6" fill="var(--arcane-bright)" opacity="0.8" />
      <path d="M200 40 L200 70" strokeWidth="0.6" />
      <text
        x="200"
        y="30"
        textAnchor="middle"
        fill="var(--brass)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="2"
      >
        AUTONOMY
      </text>
    </g>
  );
}
function DiagramGraph() {
  return (
    <g fill="none" stroke="var(--brass-bright)" strokeWidth="1">
      <circle cx="80" cy="200" r="8" fill="var(--brass)" />
      <circle cx="180" cy="120" r="8" fill="var(--brass)" />
      <circle cx="280" cy="80" r="8" fill="var(--arcane)" />
      <circle cx="320" cy="200" r="8" fill="var(--brass)" />
      <circle cx="200" cy="240" r="8" fill="var(--brass)" />
      <path d="M80 200 L180 120 L280 80 L320 200 L200 240 L80 200" opacity="0.5" />
      <path d="M180 120 L320 200" strokeDasharray="3 5" stroke="var(--arcane)" />
      <path
        d="M180 120 L200 240"
        strokeDasharray="3 5"
        stroke="var(--arcane-bright)"
        strokeWidth="1.4"
      />
      <text
        x="200"
        y="40"
        textAnchor="middle"
        fill="var(--brass)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="2"
      >
        PATH · A* / RRT*
      </text>
    </g>
  );
}
function DiagramWeb() {
  return (
    <g fill="none" stroke="var(--brass-bright)" strokeWidth="1">
      <rect x="80" y="70" width="240" height="160" rx="6" />
      <rect x="80" y="70" width="240" height="26" fill="var(--brass-dim)" opacity="0.4" />
      <circle cx="96" cy="83" r="3" fill="var(--brass)" />
      <circle cx="108" cy="83" r="3" fill="var(--copper)" />
      <circle cx="120" cy="83" r="3" fill="var(--arcane)" />
      <rect x="100" y="115" width="90" height="90" rx="3" opacity="0.7" />
      <rect x="210" y="115" width="90" height="40" rx="3" opacity="0.7" />
      <rect x="210" y="165" width="90" height="40" rx="3" opacity="0.7" />
      <text
        x="200"
        y="260"
        textAnchor="middle"
        fill="var(--brass)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="2"
      >
        FULL-STACK
      </text>
    </g>
  );
}
function DiagramLens() {
  return (
    <g fill="none" stroke="var(--brass-bright)" strokeWidth="1">
      <rect x="60" y="90" width="280" height="120" rx="6" />
      <circle cx="200" cy="150" r="50" />
      <circle cx="200" cy="150" r="34" stroke="var(--arcane)" />
      <circle cx="200" cy="150" r="16" fill="var(--arcane-bright)" opacity="0.4" />
      <path d="M60 150 L150 150 M250 150 L340 150" strokeDasharray="2 4" />
      <path d="M200 90 L200 100 M200 200 L200 210" />
      <rect x="140" y="72" width="120" height="8" rx="2" opacity="0.6" />
      <text
        x="200"
        y="240"
        textAnchor="middle"
        fill="var(--brass)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="2"
      >
        VISION
      </text>
    </g>
  );
}
function DiagramCircuit() {
  return (
    <g fill="none" stroke="var(--brass-bright)" strokeWidth="1">
      <rect x="80" y="80" width="240" height="140" rx="4" />
      <path d="M120 80 L120 60 M180 80 L180 60 M240 80 L240 60 M300 80 L300 60" />
      <path d="M120 220 L120 240 M180 220 L180 240 M240 220 L240 240 M300 220 L300 240" />
      <circle cx="160" cy="130" r="14" fill="var(--brass-dim)" opacity="0.5" />
      <rect x="200" y="120" width="80" height="20" opacity="0.5" />
      <rect x="120" y="170" width="60" height="20" opacity="0.4" />
      <rect x="200" y="170" width="90" height="30" opacity="0.5" />
      <circle cx="160" cy="130" r="4" fill="var(--arcane-bright)" />
      <text
        x="200"
        y="270"
        textAnchor="middle"
        fill="var(--brass)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="2"
      >
        AUTOMATION
      </text>
    </g>
  );
}

function ProjectDossier({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]");
    focusable?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink-deep/85 px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="animate-iris relative w-full max-w-3xl"
      >
        <BrassFrame className="p-6 sm:p-10">
          <button
            data-autofocus
            onClick={onClose}
            aria-label="Close dossier"
            className="engraved font-mono-archive absolute right-4 top-4 rounded-sm bg-ink/70 px-3 py-1.5 text-parchment hover:text-brass-bright"
          >
            Close ✕
          </button>

          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="font-mono-archive text-brass">{project.artifactNo}</span>
            <span className="font-mono-archive text-parchment-dim">Dossier · Unsealed</span>
          </div>
          <h3
            id="dossier-title"
            className="font-display text-3xl leading-tight text-parchment sm:text-4xl"
          >
            {project.title}
          </h3>
          <div className="font-mono-archive mt-2 text-arcane">{project.role}</div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <TechnicalTag key={t}>{t}</TechnicalTag>
            ))}
          </div>

          <div className="mt-8 space-y-6 border-t border-brass-dim pt-6">
            <DossierField label="Problem" value={project.problem} />
            <DossierField label="Context" value={project.dossier.context} />
            <DossierField label="Contribution" value={project.dossier.contribution} />
            <DossierField label="Architecture" value={project.dossier.architecture} />
            <DossierField label="Engineering Challenges" value={project.dossier.challenges} />
            <DossierField label="Result" value={project.dossier.result} />
            <DossierField label="Lessons & Next Steps" value={project.dossier.lessons} />
          </div>

          {project.githubUrl || project.demoUrl ? (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-brass-dim pt-6">
              {project.githubUrl ? (
                <ArchiveButton
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                >
                  GitHub ↗
                </ArchiveButton>
              ) : null}
              {project.demoUrl ? (
                <ArchiveButton
                  as="a"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="arcane"
                >
                  Live Demo ↗
                </ArchiveButton>
              ) : null}
            </div>
          ) : null}
        </BrassFrame>
      </div>
    </div>
  );
}

function DossierField({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <div className="font-mono-archive mb-1 text-brass">{label}</div>
      <p className="leading-relaxed text-parchment">{value}</p>
    </div>
  );
}
