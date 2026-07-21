import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";
import type { OracleScene } from "./OracleScene";
import { ArchiveButton } from "./primitives";

const ANSWERS = [
  "Will is a great hire",
  "You should hire Will",
  "Without a doubt, if you hire me",
  "Read Lord of the Mysteries",
  "If Claude says so",
  "Perhaps you should ask again",
  "Try asking ChatGPT instead",
  "Only for a return offer",
] as const;

const INITIAL = "Ask a question";

export function Magic8Ball() {
  const [asked, setAsked] = useState(false);
  const [reading, setReading] = useState(INITIAL);
  const [shaking, setShaking] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [question, setQuestion] = useState("");

  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<OracleScene | null>(null);
  const shakingRef = useRef(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cancelled = false;
    let scene: OracleScene | null = null;
    let ro: ResizeObserver | null = null;

    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        loadObserver.disconnect();
        import("./OracleScene")
          .then(({ createOracleScene }) => {
            if (cancelled) return;
            scene = createOracleScene(mount, {
              reducedMotion: prefersReducedMotion(),
              initialText: INITIAL,
            });
            sceneRef.current = scene;
            setReady(true);

            ro = new ResizeObserver(() => scene?.resize());
            ro.observe(mount);

            activeObserver.observe(mount);
          })
          .catch(() => !cancelled && setFailed(true));
      },
      { rootMargin: "300px" },
    );

    const activeObserver = new IntersectionObserver(
      (entries) => scene?.setActive(entries.some((e) => e.isIntersecting)),
      { threshold: 0.01 },
    );

    loadObserver.observe(mount);

    return () => {
      cancelled = true;
      loadObserver.disconnect();
      activeObserver.disconnect();
      ro?.disconnect();
      scene?.dispose();
      sceneRef.current = null;
    };
  }, []);

  const consult = () => {
    if (shakingRef.current) return;
    const next = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    const scene = sceneRef.current;

    if (!scene) {
      setAsked(true);
      setReading(next);
      return;
    }

    shakingRef.current = true;
    setShaking(true);
    scene
      .consult(next, () => {
        setAsked(true);
        setReading(next);
      })
      .finally(() => {
        shakingRef.current = false;
        setShaking(false);
      });
  };

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || shakingRef.current) return;
    consult();
    setQuestion("");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-sm">
        <div
          className="bg-arcane-glow absolute inset-2 rounded-full opacity-20 blur-2xl"
          aria-hidden="true"
        />
        <div className="absolute i  nset-0 rounded-full border border-brass-dim" />
        <div className="absolute inset-3 rounded-full border border-brass/40" />

        <button
          type="button"
          onClick={consult}
          disabled={shaking}
          aria-label={
            asked
              ? `The magic 8-ball. Latest reading: ${reading}. Activate to consult again.`
              : "Consult the magic 8-ball for a reading."
          }
          className="group absolute inset-6 flex touch-manipulation items-center justify-center overflow-hidden rounded-full outline-offset-4 transition-shadow duration-300 hover:shadow-[0_0_44px_-8px_var(--arcane)]"
        >
          <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />

          {(!ready || failed) && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 28%, oklch(0.34 0.03 260) 0%, oklch(0.09 0.02 260) 72%)",
              }}
            >
              <span
                className="font-display max-w-[60%] text-balance px-2 text-center text-lg leading-tight"
                style={{ color: "oklch(0.97 0.02 250)", textShadow: "0 0 14px var(--arcane)" }}
              >
                {reading}
              </span>
            </span>
          )}
        </button>
      </div>

      <form onSubmit={handleAsk} className="mt-6 flex w-full max-w-xs gap-2">
        <label htmlFor="magic8-question" className="sr-only">
          Ask the magic 8-ball a question
        </label>
        <input
          id="magic8-question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={shaking}
          placeholder="Ask it something…"
          className="w-full border border-brass-dim/70 bg-ink-deep px-3 py-2 font-plex text-sm text-parchment placeholder:text-parchment-dim/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass disabled:opacity-60"
        />
        <ArchiveButton
          type="submit"
          variant="primary"
          disabled={shaking || !question.trim()}
          className="shrink-0 px-4 py-2"
        >
          Ask
        </ArchiveButton>
      </form>

      <p className="font-mono-archive mt-4 text-center text-parchment-dim">
        {asked ? "Tap to consult again" : "Tap the orb or ask above"}
        <span className="text-parchment-dim/70"> · drag to rotate</span>
      </p>

      <span className="sr-only" aria-live="polite">
        {asked ? reading : ""}
      </span>
    </div>
  );
}
