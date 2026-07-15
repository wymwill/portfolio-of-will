import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

const SITE_TITLE = "Will Wands";
const SITE_DESC =
  "Portfolio of Will Wands, a Rutgers Computer Engineering and Computer Science student building robotics, autonomous systems, and full stack software.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-brass">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-parchment">Archive entry not found</h2>
        <p className="mt-2 text-sm text-parchment-dim">
          The record you're searching for has been sealed or never existed.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="font-mono-archive archive-frame inline-flex items-center justify-center px-4 py-2 text-ink-deep"
            style={
              {
                "--af-border": "var(--brass-dim)",
                "--af-bg": "var(--brass)",
                "--af-bg-hover": "var(--brass-bright)",
              } as React.CSSProperties
            }
          >
            Return to the Archive
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-parchment">The mechanism jammed</h1>
        <p className="mt-2 text-sm text-parchment-dim">
          Something went wrong on our end. Try again, or return to the archive.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="font-mono-archive archive-frame px-4 py-2 text-ink-deep"
            style={
              {
                "--af-border": "var(--brass-dim)",
                "--af-bg": "var(--brass)",
                "--af-bg-hover": "var(--brass-bright)",
              } as React.CSSProperties
            }
          >
            Try again
          </button>
          <a
            href="/"
            className="font-mono-archive archive-frame px-4 py-2 text-parchment"
            style={
              {
                "--af-border": "color-mix(in oklab, var(--brass) 50%, transparent)",
                "--af-bg": "color-mix(in oklab, var(--ink) 80%, var(--ink-deep))",
                "--af-bg-hover": "var(--ink)",
              } as React.CSSProperties
            }
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Will Wands" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "theme-color", content: "#0d0e14" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/thefool.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Hanken+Grotesk:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
