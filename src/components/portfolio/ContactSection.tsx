import { useState } from "react";
import { PROFILE } from "@/content/profile";
import { ArchiveButton, CornerOrnament, SectionHeading } from "./primitives";

type FormState = "idle" | "validating" | "submitting" | "success" | "error";

const REASONS = [
  "Internship Inquiry",
  "Research Collaboration",
  "Engineering Project",
  "Startup Opportunity",
  "General Message",
];

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    reason: REASONS[0],
    message: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((prev) => ({ ...prev, [k]: v }));

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "A valid email is required.";
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = "Please share a bit more (at least 10 characters).";
    return errs;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "submitting") return; // prevent duplicate
    setState("validating");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) {
      setState("error");
      return;
    }
    setState("submitting");
    // no backend yet, so open a pre-filled draft in the visitor's mail client
    const subject = `[${form.reason}] Portfolio contact from ${form.name}`;
    const body = [
      form.message,
      "",
      `— ${form.name}${form.organization ? ` · ${form.organization}` : ""}`,
      form.email,
    ].join("\n");
    window.location.href = `${PROFILE.links.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setState("success");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Archive Record 05" title="Open a Channel" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)]">
          <div className="flex flex-col">
            <blockquote className="border-l-2 border-brass pl-5 text-lg italic leading-relaxed text-parchment">
              Contact me if you want to work together or just want to have a talk. I am interested in any opportunities to discuss new ideas and collaborate.
            </blockquote>

            <ul className="mt-10 space-y-4">
              <UplinkRow
                glyph="@"
                label="Email Address"
                display="willwands@gmail.com"
                href={PROFILE.links.email}
              />
              <UplinkRow
                glyph="<>"
                label="Github Repositories"
                display="github.com/wymwill"
                href={PROFILE.links.github}
              />
              <UplinkRow
                glyph=">_"
                label="LinkedIn Profile"
                display="linkedin.com/in/wowands"
                href={PROFILE.links.linkedin}
              />
            </ul>

            <div className="mt-auto hidden pt-12 lg:block">
              <div
                aria-hidden="true"
                className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-brass-dim text-brass-dim"
              >
                <span style={{ fontSize: 22 }}>⚙</span>
              </div>
            </div>
          </div>

          <div className="relative border border-brass-dim/60 bg-ink/70 p-6 sm:p-8">
            <CornerOrnament position="tl" />
            <CornerOrnament position="tr" />
            <CornerOrnament position="bl" />
            <CornerOrnament position="br" />
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <ConsoleField
                  label="Operator Designation"
                  id="c-name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(v) => update("name", v)}
                  error={errors.name}
                />
                <ConsoleField
                  label="Uplink Address"
                  id="c-email"
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  error={errors.email}
                />
                <ConsoleField
                  label="Organization [Optional]"
                  id="c-org"
                  placeholder="Entity"
                  value={form.organization}
                  onChange={(v) => update("organization", v)}
                />
                <div>
                  <label
                    htmlFor="c-reason"
                    className="font-mono-archive mb-2 block text-parchment-dim"
                  >
                    Transmission Type
                  </label>
                  <select
                    id="c-reason"
                    value={form.reason}
                    onChange={(e) => update("reason", e.target.value)}
                    className="w-full border border-brass-dim/70 bg-ink-deep px-3 py-3 font-plex text-sm text-parchment focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                  >
                    {REASONS.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="c-message"
                  className="font-mono-archive mb-2 block text-parchment-dim"
                >
                  Detailed Payload <span className="text-blood">*</span>
                </label>
                <textarea
                  id="c-message"
                  rows={7}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "c-message-err" : undefined}
                  className="w-full resize-y border border-brass-dim/70 bg-ink-deep px-4 py-3 font-plex text-sm text-parchment placeholder:text-parchment-dim/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                  placeholder="Message content..."
                />
                {errors.message ? (
                  <p id="c-message-err" className="font-mono-archive mt-1 text-blood">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div aria-live="polite" role="status" className="min-h-6">
                {state === "submitting" ? (
                  <span className="font-mono-archive text-brass">Transmitting…</span>
                ) : null}
                {state === "success" ? (
                  <span className="font-mono-archive text-brass-bright">
                    Draft opened in your mail client — send it to complete the transmission.
                  </span>
                ) : null}
                {state === "error" && errors.form ? (
                  <span className="font-mono-archive text-blood">{errors.form}</span>
                ) : null}
              </div>

              <ArchiveButton
                type="submit"
                variant="primary"
                className="w-full py-3.5"
                disabled={state === "submitting"}
              >
                {state === "submitting" ? "Transmitting…" : "Transmit Signal"}
                <span aria-hidden="true">▷</span>
              </ArchiveButton>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <span className="font-mono-archive text-brass/80" style={{ fontSize: "0.62rem" }}>
                  Status: relays via your mail client
                </span>
                <span
                  className="font-mono-archive text-parchment-dim/70"
                  style={{ fontSize: "0.62rem" }}
                >
                  Format: encrypted mechanical packet
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function UplinkRow({
  glyph,
  label,
  display,
  href,
}: {
  glyph: string;
  label: string;
  display: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex items-center gap-5 border border-brass-dim/40 bg-ink/60 px-5 py-4 transition-colors hover:border-brass/60"
      >
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass-dim/60 bg-ink-deep font-plex text-sm text-brass"
        >
          {glyph}
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="font-mono-archive text-parchment-dim">{label}</span>
          <span className="font-plex text-sm text-parchment group-hover:text-brass-bright">
            {display}
          </span>
        </span>
      </a>
    </li>
  );
}

function ConsoleField({
  label,
  id,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  error,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-mono-archive mb-2 block text-parchment-dim">
        {label} {required ? <span className="text-blood">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className="w-full border border-brass-dim/70 bg-ink-deep px-3 py-3 font-plex text-sm text-parchment placeholder:text-parchment-dim/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
      />
      {error ? (
        <p id={`${id}-err`} className="font-mono-archive mt-1 text-blood">
          {error}
        </p>
      ) : null}
    </div>
  );
}
