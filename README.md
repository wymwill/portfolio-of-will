# Portfolio of Will

Personal portfolio site with a archive theme with mystical aspects.
A tarot-card navigation bar, stars that pulse over time, a pixel art ram scrollbar, and an interactive 8-Ball. 

## Tech stack

- React 19 + TypeScript
- TanStack Start (SSR) 
- Vite 8 for dev/bundling, Nitro for the production server
- Tailwind CSS 4 
- Three.js for the Oracle orb, GSAP (+ ScrollTrigger) for scroll reveals and the orb's shake animation

## Sections & components

- **TarotNav** — Six tarot cards that track the active section and flip until the user clicks on the section you want to navigate to.
- **HeroSection** — Landing page with my name, disciplines, and a brief description of me.
- **AboutSection** — A bio alongside the interactive Magic 8-Ball and a resume button. Also includes the current shows and books I am following or reading.
- **Magic8Ball / OracleScene** — A draggable magic 8-ball built with Three.js. Tap to shake and reveal a new reading, drag to rotate.
- **SkillsSection** — Five tarot cards that flip on tap/hover to reveal each discipline's skills.
- **ExperienceSection** — Two sided timeline with my technical and social experiences with entries revealing as the user scrolls.
- **ProjectsSection** — A grid of project cards that open a full dossier modal with project description.
- **ContactSection** — Client validated form that composes a pre-filled `mailto:` draft, so it works from a static host.
- **AtmosphericBackground** — Stars that pulse in the sky.
- **RamScrollbar** — A pixel art ram scrollbar (meant to represent Aries) that replaces the native one on desktop.
- **ArchiveSeal** — A once per session entrance animation that unseals the page through a `clip-path` iris.
- **Reveal** — Reusable GSAP + ScrollTrigger wrapper that fades and rises content into view.
- **primitives** — Shared building blocks (buttons, brass frames, section headings, ornaments).

## Design system

All colors are CSS custom properties in `src/styles.css` (gold `#D4AF37`, blue `#4D96FF`, indigo darks, in oklch). Buttons use chamfered `clip-path` frames, and every animation goes static under `prefers-reduced-motion`.

## Project structure

- `src/routes` — TanStack route entry points
- `src/components/portfolio` — portfolio sections and visual components
- `src/components/ui` — stock shadcn/Radix primitives
- `src/content` — typed profile, skills, experience, and project data
- `src/lib/gsap.ts` — GSAP + ScrollTrigger registration and reduced-motion helper
- `src/components/portfolio/OracleScene.tsx` — lazy-loaded Three.js scene for the Oracle orb
- `src/styles.css` — theme tokens, utilities, keyframes

## Running locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build (.output/)
npm run lint
npm run format
```
