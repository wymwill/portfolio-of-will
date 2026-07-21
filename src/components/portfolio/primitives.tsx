import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function ArchiveLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono-archive inline-flex items-center gap-2 text-brass", className)}>
      <span aria-hidden="true" className="inline-block h-[1px] w-6 bg-current opacity-70" />
      {children}
      <span aria-hidden="true" className="inline-block h-[1px] w-6 bg-current opacity-70" />
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  kicker,
  align = "left",
}: {
  label: string;
  title: string;
  kicker?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      as="header"
      stagger
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      <ArchiveLabel>{label}</ArchiveLabel>
      <h2 className="font-display text-4xl leading-[1.05] text-parchment sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {kicker ? <p className="max-w-2xl text-parchment-dim">{kicker}</p> : null}
      <EngravedDivider className={align === "center" ? "mx-auto" : ""} />
    </Reveal>
  );
}

export function EngravedDivider({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 8"
      className={cn("h-2 w-40 text-brass opacity-80", className)}
      fill="none"
    >
      <line x1="0" y1="4" x2="90" y2="4" stroke="currentColor" strokeWidth="0.75" />
      <line x1="150" y1="4" x2="240" y2="4" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="120" cy="4" r="3" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="120" cy="4" r="1" fill="currentColor" />
      <circle cx="100" cy="4" r="0.8" fill="currentColor" />
      <circle cx="140" cy="4" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotation = {
    tl: "rotate-0",
    tr: "rotate-90",
    br: "rotate-180",
    bl: "-rotate-90",
  }[position];
  const pos = {
    tl: "top-0 left-0",
    tr: "top-0 right-0",
    br: "bottom-0 right-0",
    bl: "bottom-0 left-0",
  }[position];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className={cn("pointer-events-none absolute h-10 w-10 text-brass", pos, rotation)}
      fill="none"
    >
      <path
        d="M7 7 L19 11 L23 23 L11 19 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path d="M9.5 9.5 L19 19" stroke="currentColor" strokeWidth="0.7" opacity="0.8" />
      <path
        d="M19 11 C 28 7, 33 13, 40 9 C 45 6.5, 49 8, 50 11 C 50.6 13, 48.6 14.4, 47 13.4 C 45.8 12.6, 46.2 10.8, 47.8 10.6"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M11 19 C 7 28, 13 33, 9 40 C 6.5 45, 8 49, 11 50 C 13 50.6, 14.4 48.6, 13.4 47 C 12.6 45.8, 10.8 46.2, 10.6 47.8"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M27 12.5 C 29 15.5, 27.5 18.5, 24.5 19" stroke="currentColor" strokeWidth="0.7" />
      <path d="M12.5 27 C 15.5 29, 18.5 27.5, 19 24.5" stroke="currentColor" strokeWidth="0.7" />
      <path d="M52 8.5 L63 8.5" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
      <path d="M8.5 52 L8.5 63" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
      <path d="M4.5 4.5 L8 6.2 L6.2 8 Z" fill="currentColor" opacity="0.9" />
      <circle cx="34" cy="9" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="9" cy="34" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="24.5" cy="24.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function BrassFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative bg-parchment-plate engraved", className)}>
      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />
      <CornerOrnament position="bl" />
      <CornerOrnament position="br" />
      {children}
    </div>
  );
}

export function TechnicalTag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono-archive inline-flex items-center gap-1.5 rounded-sm border border-brass-dim bg-ink/60 px-2 py-1 text-parchment-dim">
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brass" />
      {children}
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "arcane";
  className?: string;
};

export function ArchiveButton(
  props: ButtonProps &
    (
      | ({ as: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
      | ({ as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    ),
) {
  const { children, variant = "primary", className, as, ...rest } = props;
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono-plex transition-all duration-200 archive-frame hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";
  const styles = {
    primary: "text-ink-deep",
    ghost: "text-parchment hover:text-brass-bright",
    arcane: "text-arcane hover:text-arcane-bright",
  }[variant];
  const frame = {
    "--af-border":
      variant === "primary"
        ? "var(--brass-dim)"
        : variant === "arcane"
          ? "color-mix(in oklab, var(--arcane) 45%, transparent)"
          : "color-mix(in oklab, var(--brass) 50%, transparent)",
    "--af-bg":
      variant === "primary"
        ? "var(--brass)"
        : "color-mix(in oklab, var(--ink) 80%, var(--ink-deep))",
    "--af-bg-hover": variant === "primary" ? "var(--brass-bright)" : "var(--ink)",
  } as React.CSSProperties;

  if (as === "a") {
    return (
      <a
        style={frame}
        className={cn(base, styles, className)}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  const { type = "button", ...buttonRest } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} style={frame} className={cn(base, styles, className)} {...buttonRest}>
      {children}
    </button>
  );
}
