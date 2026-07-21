import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { PROFILE } from "@/content/profile";
import { CardBackArt } from "./CardBackArt";

interface TarotCard {
  id: string;
  title: string;
  section: string;
  symbol: string;
  romanNumeral: string;
  target: string;
}

const CARDS: TarotCard[] = [
  {
    id: "hero",
    title: "The Fool",
    section: "Home",
    symbol: "𖨆",
    romanNumeral: "I",
    target: "#hero",
  },
  {
    id: "about",
    title: "The Hermit",
    section: "About",
    symbol: "࿊",
    romanNumeral: "II",
    target: "#about",
  },
  {
    id: "skills",
    title: "The Chariot",
    section: "Skills",
    symbol: "♞",
    romanNumeral: "III",
    target: "#skills",
  },
  {
    id: "experience",
    title: "The Hierophant",  
    section: "Experience",
    symbol: "♝",
    romanNumeral: "IV",
    target: "#experience",
  },
  {
    id: "projects",
    title: "The World",
    section: "Projects",
    symbol: "🜨",
    romanNumeral: "V",
    target: "#projects",
  },
  {
    id: "contact",
    title: "The Wheel of Fortune",
    section: "Contact",
    symbol: "𖥞",
    romanNumeral: "VI",
    target: "#contact",
  },
];

export function TarotNav() {
  const [scrolled, setScrolled] = useState(false);
  const [topHover, setTopHover] = useState(false);
  const [headerFocus, setHeaderFocus] = useState(false);
  const [finePointer, setFinePointer] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!finePointer) return;
    const onMove = (e: MouseEvent) => {
      setTopHover((prev) => (prev ? e.clientY <= 160 : e.clientY <= 80));
    };
    const onLeave = () => setTopHover(false);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [finePointer]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    CARDS.forEach((card) => {
      const el = document.getElementById(card.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const cardsVisible = !scrolled;
  const headerVisible = scrolled && (topHover || headerFocus || menuOpen || !finePointer);

  return (
    <>
      <a
        href="#main"
        className="font-mono-archive sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brass focus:px-3 focus:py-2 focus:text-ink-deep"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        onFocusCapture={() => setHeaderFocus(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setHeaderFocus(false);
            setMenuOpen(false);
          }
        }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b border-brass/20 bg-ink-deep/85 backdrop-blur-md transition-transform duration-400",
          headerVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="group flex items-center gap-3"
            aria-label={`${PROFILE.name} — home`}
            tabIndex={headerVisible ? undefined : -1}
          >
            <Monogram />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-lg text-parchment">{PROFILE.name}</span>
              <span className="font-mono-archive text-parchment-dim">Archive</span>
            </div>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {CARDS.map((card) => {
              const isActive = active === card.id;
              return (
                <a
                  key={card.id}
                  href={card.target}
                  tabIndex={headerVisible ? undefined : -1}
                  className={cn(
                    "font-mono-archive relative px-3 py-2 transition-colors",
                    isActive ? "text-brass-bright" : "text-parchment-dim hover:text-parchment",
                  )}
                >
                  {card.section}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-brass"
                    />
                  ) : null}
                </a>
              );
            })}
            <a
              href={PROFILE.links.resume}
              tabIndex={headerVisible ? undefined : -1}
              className="font-mono-plex archive-frame ml-2 inline-flex items-center gap-2 px-4 py-2 text-ink-deep transition-transform hover:-translate-y-0.5"
              style={
                {
                  "--af-border": "var(--brass-dim)",
                  "--af-bg": "var(--brass)",
                  "--af-bg-hover": "var(--brass-bright)",
                } as React.CSSProperties
              }
            >
              Résumé
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            tabIndex={headerVisible ? undefined : -1}
            className="archive-frame font-mono-plex px-3 py-2 text-parchment md:hidden"
            style={
              {
                "--af-border": "color-mix(in oklab, var(--brass) 50%, transparent)",
                "--af-bg": "color-mix(in oklab, var(--ink) 80%, var(--ink-deep))",
                "--af-bg-hover": "var(--ink)",
              } as React.CSSProperties
            }
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-brass/20 bg-ink-deep/95 backdrop-blur md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
              {CARDS.map((card) => (
                <a
                  key={card.id}
                  href={card.target}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono-archive rounded-sm px-3 py-3 text-parchment hover:bg-ink"
                >
                  {card.section}
                </a>
              ))}
              <a
                href={PROFILE.links.resume}
                className="font-mono-plex archive-frame mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-ink-deep"
                style={
                  {
                    "--af-border": "var(--brass-dim)",
                    "--af-bg": "var(--brass)",
                    "--af-bg-hover": "var(--brass-bright)",
                  } as React.CSSProperties
                }
              >
                Résumé
              </a>
            </div>
          </div>
        ) : null}
      </nav>

      <nav
        aria-label="Section cards"
        aria-hidden={!cardsVisible}
        className={cn(
          "fixed left-0 right-0 top-0 z-40 flex justify-center bg-gradient-to-b from-ink-deep/70 to-transparent py-4 transition-all duration-500",
          cardsVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-24 opacity-0",
        )}
      >
        <div className="flex items-end justify-center gap-2 sm:gap-4">
          {CARDS.map((card, i) => (
            <TarotCardLink
              key={card.id}
              card={card}
              index={i}
              isActive={active === card.id}
              tabbable={cardsVisible}
            />
          ))}
        </div>
      </nav>
    </>
  );
}

function Monogram() {
  return (
    <svg
      viewBox="0 0 44 44"
      className="h-9 w-9 text-brass transition-transform duration-500 group-hover:rotate-90"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle
        cx="22"
        cy="22"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 3"
      />
      <path
        d="M13 16 L17 30 L22 20 L27 30 L31 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="miter"
      />
      <circle cx="22" cy="22" r="1.6" fill="currentColor" />
    </svg>
  );
}

function TarotCardLink({
  card,
  index,
  isActive,
  tabbable,
}: {
  card: TarotCard;
  index: number;
  isActive: boolean;
  tabbable: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  const isMobile = useIsMobile();
  const flipped = revealed || isActive;

  const w = isMobile ? 46 : 78;
  const h = Math.round(w * 1.5);

  return (
    <a
      href={card.target}
      aria-label={`${card.title} — go to ${card.section}`}
      aria-current={isActive ? "true" : undefined}
      tabIndex={tabbable ? undefined : -1}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onFocus={() => setRevealed(true)}
      onBlur={() => setRevealed(false)}
      className={cn("tarot-card block", flipped && "is-flipped")}
      style={{
        width: w,
        height: h,
        transform: revealed ? "translateY(-6px)" : isActive ? "translateY(-3px)" : "none",
        transition: "transform 0.3s ease, filter 0.3s ease",
        filter: isActive
          ? "drop-shadow(0 0 14px color-mix(in oklab, var(--arcane) 55%, transparent))"
          : revealed
            ? "drop-shadow(0 0 10px color-mix(in oklab, var(--brass) 40%, transparent))"
            : "drop-shadow(0 6px 12px color-mix(in oklab, black 60%, transparent))",
        animation: `card-rise 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) ${index * 0.1}s both`,
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
          className="tarot-card-face tarot-card-front flex flex-col items-center justify-between px-1 py-2"
          style={{
            border: `1px solid ${
              isActive
                ? "color-mix(in oklab, var(--brass-bright) 75%, transparent)"
                : "color-mix(in oklab, var(--brass) 40%, transparent)"
            }`,
            background:
              "radial-gradient(ellipse at 30% 15%, color-mix(in oklab, var(--brass) 12%, transparent), transparent 60%), linear-gradient(180deg, oklch(0.20 0.022 260), oklch(0.13 0.02 260))",
            boxShadow: isActive
              ? "inset 0 0 16px color-mix(in oklab, var(--arcane) 20%, transparent)"
              : "inset 0 0 12px color-mix(in oklab, black 40%, transparent)",
          }}
        >
          <span
            className="font-mono-archive"
            style={{
              fontSize: 9,
              letterSpacing: "0.1em",
              color: isActive ? "var(--brass-bright)" : "var(--parchment-dim)",
            }}
          >
            {card.romanNumeral}
          </span>
          <span
            aria-hidden="true"
            style={{
              fontSize: isMobile ? 16 : 24,
              lineHeight: 1,
              color: isActive ? "var(--brass-bright)" : "var(--arcane)",
              filter: isActive
                ? "drop-shadow(0 0 6px color-mix(in oklab, var(--brass-bright) 60%, transparent))"
                : "none",
              transition: "color 0.3s ease",
            }}
          >
            {card.symbol}
          </span>
          <span className="flex flex-col items-center gap-0.5 text-center">
            <span
              className="font-display"
              style={{
                fontSize: isMobile ? 7 : 9.5,
                lineHeight: 1.15,
                letterSpacing: "0.05em",
                color: isActive ? "var(--brass-bright)" : "var(--parchment)",
              }}
            >
              {card.title}
            </span>
            {!isMobile ? (
              <span
                className="font-mono-archive"
                style={{
                  fontSize: 6,
                  letterSpacing: "0.14em",
                  color: "var(--parchment-dim)",
                }}
              >
                {card.section}
              </span>
            ) : null}
          </span>
        </div>
      </div>
    </a>
  );
}
