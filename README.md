# Portfolio of Will

Personal portfolio site with a "magic archive" theme: tarot card navigation, a zodiac night sky that turns as you scroll, and a pixel-art ram for a scrollbar. Everything on the page is drawn in code (SVG and CSS), no stock images.

## Tech stack

- React 19 + TypeScript
- TanStack Start (SSR framework) with TanStack Router for file-based, type-safe routing
- Vite 8 for dev server and bundling, Nitro for the production server output
- Tailwind CSS 4 with a custom token-based design system
- Fonts: Cinzel (headings), Hanken Grotesk (body), Space Grotesk (labels)

## How the main pieces work

### Design tokens

All colors live as CSS custom properties in `src/styles.css` (gold `#D4AF37`, blue `#4D96FF`, indigo darks, expressed in oklch). Components only reference tokens, never raw colors, so retheming the whole site is a one-file change. Content (profile, experience, skills, projects) is separated into typed files under `src/content/` so copy edits never touch component code.

### Tarot card navigation (`TarotNav.tsx`)

The section nav is a row of six tarot cards that rest face-down and flip face-up on hover or when their section is active. The flip is a CSS 3D transform (`rotateY` with `backface-visibility: hidden`); active-section tracking uses an `IntersectionObserver` over the section elements. Past 60px of scroll the cards slide away, and a conventional header bar slides in when the cursor nears the top edge (with hysteresis so it doesn't flicker). Touch devices get the header whenever scrolled, since they can't hover an edge.

### Zodiac sky (`AtmosphericBackground.tsx`)

All twelve zodiac constellations are encoded as small point/edge graphs and drawn as SVG. Each sign owns an overlapping window of the page's scroll range and fades through it, so the sky rotates through the full zodiac on the way down and back; the windows are sized so at least three signs are visible at any depth. Position updates run outside React through a single `requestAnimationFrame`-throttled scroll listener that only touches `transform` and `opacity`, and everything goes static under `prefers-reduced-motion`.

### Ram scrollbar (`RamScrollbar.tsx`)

The native scrollbar is hidden on desktop and replaced with a pixel-art bighorn ram that climbs a track on the right edge. The sprite is a character grid mapped through a palette and rendered as 1×1 SVG rects, rotated to face up the page. It's a real scrollbar, not a decoration: drag it (pointer capture, instant scroll), click the track to jump, or focus it and use arrow/page keys. It exposes `role="scrollbar"` with a live `aria-valuenow`.

### Entrance seal (`ArchiveSeal.tsx`)

First visit in a session plays a short unsealing animation: counter-rotating engraved rings, a monogram that draws itself in with a `stroke-dashoffset` animation, then the page opens through a `clip-path` iris. It runs about two seconds on its own, any click skips it, it remembers via `sessionStorage`, and reduced-motion users get a quick fade instead.

### Clipped button frames (`archive-frame` in `styles.css`)

Buttons have chamfered corners cut with `clip-path`. CSS borders can't follow a clip, so the border is faked with two layers: `::before` floods the clipped shape with the border color and `::after` repaints the interior with a matching octagon inset by 1px, leaving a crisp border that traces every edge.

### Contact form (`ContactSection.tsx`)

Client-side validation, then, since there's no backend, submission composes the message into a pre-filled `mailto:` draft so the button genuinely works from a static host.

## Project structure

- `src/routes` — TanStack route entry points
- `src/components/portfolio` — the portfolio sections and visual components
- `src/components/ui` — stock shadcn/Radix primitives
- `src/content` — typed profile, skills, experience, and project data
- `src/styles.css` — theme tokens, utilities, keyframes

## Running locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build (.output/)
npm run lint
npm run format
```
