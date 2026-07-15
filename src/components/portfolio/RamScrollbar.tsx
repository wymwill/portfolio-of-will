import { useEffect, useRef } from "react";

const EDGE = 10; // travel padding so the ram stays fully on screen
const RAM_SPAN = 36; // approximate rendered height of the sprite

export function RamScrollbar() {
  const ramRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const ram = ramRef.current;
    const track = trackRef.current;
    if (!ram || !track) return;
    let raf = 0;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const apply = () => {
      raf = 0;
      const max = maxScroll();
      const frac = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      const travel = window.innerHeight - RAM_SPAN - 2 * EDGE;
      ram.style.transform = `translateX(-50%) translateY(${EDGE + frac * travel}px)`;
      ram.setAttribute("aria-valuenow", String(Math.round(frac * 100)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const scrollToClientY = (clientY: number) => {
      const travel = window.innerHeight - RAM_SPAN - 2 * EDGE;
      const frac = Math.min(Math.max((clientY - EDGE - RAM_SPAN / 2) / travel, 0), 1);
      window.scrollTo({ top: frac * maxScroll(), behavior: "instant" });
    };

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      ram.style.transition = "none";
      track.setPointerCapture(e.pointerId);
      scrollToClientY(e.clientY);
      e.preventDefault();
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      scrollToClientY(e.clientY);
    };
    const endDrag = () => {
      draggingRef.current = false;
      ram.style.transition = "";
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const page = window.innerHeight;
      const steps: Record<string, number> = {
        ArrowUp: -page * 0.1,
        ArrowDown: page * 0.1,
        PageUp: -page * 0.9,
        PageDown: page * 0.9,
      };
      if (e.key in steps) {
        e.preventDefault();
        window.scrollBy({ top: steps[e.key], behavior: "smooth" });
      } else if (e.key === "Home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (e.key === "End") {
        e.preventDefault();
        window.scrollTo({ top: maxScroll(), behavior: "smooth" });
      }
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    ram.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
      ram.removeEventListener("keydown", onKeyDown);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="fixed inset-y-0 right-0 z-40 hidden w-9 cursor-pointer select-none sm:block"
      style={{ touchAction: "none" }}
    >
      <div className="absolute inset-y-3 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-brass/30 to-transparent" />
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 h-[1px] w-2.5 -translate-x-1/2 bg-brass/25"
          style={{ top: `${10 + i * 10}%` }}
        />
      ))}
      <div
        ref={ramRef}
        role="scrollbar"
        aria-controls="main"
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        aria-label="Page scrollbar"
        tabIndex={0}
        className="absolute left-1/2 cursor-grab transition-transform duration-150 ease-out active:cursor-grabbing"
        style={{
          transform: "translateX(-50%)",
          filter: "drop-shadow(0 0 5px color-mix(in oklab, var(--brass) 45%, transparent))",
        }}
      >
        <div style={{ transform: "rotate(-90deg)" }}>
          <PixelRam size={38} />
        </div>
      </div>
    </div>
  );
}

const PALETTE: Record<string, string> = {
  b: "#a67c52", // body brown
  s: "#8a6240", // shaded brown
  d: "#6e4d33", // dark / far legs
  h: "#d9b380", // horn light
  H: "#b08d5e", // horn shadow
  w: "#f2ebdd", // white rump & muzzle
  k: "#2e2620", // hooves, eye, nose
};

// one char per pixel, mapped through PALETTE
const SPRITE = [
  "........................",
  ".................hhh....",
  "................hHHHh...",
  "................hH.hHh..",
  "..www...........hH.bHh..",
  ".wwbbbbbbbbbbbbbbHHbbh..",
  ".wbbbbbbbbbbbbbbbbkbww..",
  ".wbbbbbbbbbbbbbbbbbbwk..",
  "..bbbbbbbbbbbbbbbbbw....",
  "..sbbbbbbbbbbbbbbbs.....",
  "..s.sbbb......bbbs......",
  "..d..sbb......sbb.......",
  "..d...sb......d.s.......",
  ".d....sb.....d...s......",
  ".k....ks.....k...ks.....",
  "........................",
];

function PixelRam({ size = 38 }: { size?: number }) {
  const cols = SPRITE[0].length;
  const rows = SPRITE.length;
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      width={size}
      height={(size * rows) / cols}
      style={{ imageRendering: "pixelated" }}
      shapeRendering="crispEdges"
    >
      {SPRITE.flatMap((row, y) =>
        Array.from(row).map((ch, x) =>
          PALETTE[ch] ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={PALETTE[ch]} />
          ) : null,
        ),
      )}
    </svg>
  );
}
