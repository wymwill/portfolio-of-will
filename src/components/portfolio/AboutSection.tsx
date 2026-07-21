import { PROFILE } from "@/content/profile";
import { ArchiveButton, BrassFrame, SectionHeading, TechnicalTag } from "./primitives";
import { Magic8Ball } from "./Magic8Ball";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Archive Record 01" title="Subject Profile" />

        <div className="mt-12 grid grid-cols-1 items-start gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <BrassFrame className="p-6 sm:p-8">
              <Magic8Ball />
            </BrassFrame>
          </Reveal>

          <Reveal stagger>
            <div className="space-y-5">
              {PROFILE.bio.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-parchment">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <div className="font-mono-archive mb-3 text-brass">Currently Reading/Watching</div>
              <div>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
