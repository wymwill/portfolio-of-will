import { PROFILE } from "@/content/profile";
import { ArchiveButton, BrassFrame, SectionHeading, TechnicalTag } from "./primitives";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Archive Record 01" title="Subject Profile" />

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <BrassFrame className="p-6 sm:p-8">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-full border border-brass-dim" />
              <div className="absolute inset-3 rounded-full border border-brass/40" />
              <div
                className="absolute inset-6 flex items-center justify-center overflow-hidden rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%, oklch(0.30 0.03 260) 0%, oklch(0.12 0.02 260) 70%)",
                }}
                >
                <img
                  src={"/babyphoto.jpg"}
                  alt={`Portrait of ${PROFILE.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2 border-t border-brass-dim pt-6">
              <MetaRow k="Institution" v={PROFILE.school} />
              <MetaRow k="Program" v={PROFILE.program} />
              <MetaRow k="Classification" v="Student" />
            </div>
          </BrassFrame>

          <div>
            <div className="space-y-5">
              {PROFILE.bio.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-parchment">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <div className="font-mono-archive mb-3 text-brass">Currently Reading/Watching</div>
              <div >
                {PROFILE.following.map((book, i) => (
                  <p key={i} className="text-md text-parchment">
                    {book}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="font-mono-archive mb-3 text-brass">Areas of Focus</div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.interests.map((i) => (
                  <TechnicalTag key={i}>{i}</TechnicalTag>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <ArchiveButton as="a" href={PROFILE.links.resume} variant="primary">
                Download Resume
              </ArchiveButton>
              <ArchiveButton as="a" href="#experience" variant="ghost">
                View Chronicle
              </ArchiveButton>
            </div>
          </div>
        </div>
      </div>
    </section>
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
