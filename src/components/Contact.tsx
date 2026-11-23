"use client";

import { useState } from "react";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const field =
  "w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-base text-paper placeholder:text-white/30 focus:border-teal-bright focus:outline-none focus:ring-0";

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: build a mailto link so the message goes via the visitor's own email client.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "");
    const from = String(d.get("email") ?? "");
    const message = String(d.get("message") ?? "");
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n—\n${name}\n${from}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-ink py-24 text-paper md:py-36">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeading
          tone="dark"
          index="05"
          label="Contact"
          id="contact-title"
          title="Have something worth building?"
          text="I'm always interested in thoughtful projects, interesting collaborations and opportunities to create better digital experiences."
        />

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12 md:gap-10">
          <Reveal className="space-y-10 md:col-span-5">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex min-h-12 items-center gap-3 bg-paper px-7 text-sm font-medium text-ink transition-colors hover:bg-teal-bright"
            >
              <Mail size={16} aria-hidden /> Email me
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>

            <ul className="space-y-1 border-t border-white/10">
              <li className="border-b border-white/10">
                <a href={`mailto:${site.email}`} className="flex min-h-14 items-center gap-4 text-white/80 transition-colors hover:text-teal-bright">
                  <Mail size={16} aria-hidden /> {site.email}
                </a>
              </li>
              <li className="border-b border-white/10">
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center gap-4 text-white/80 transition-colors hover:text-teal-bright">
                  <Linkedin size={16} aria-hidden /> LinkedIn <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li className="flex min-h-14 items-center gap-4 border-b border-white/10 text-white/80">
                <MapPin size={16} aria-hidden /> {site.location}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <form onSubmit={onSubmit} className="space-y-8" aria-describedby="form-note">
              <div>
                <label htmlFor="name" className="eyebrow !text-white/50">Name</label>
                <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow !text-white/50">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow !text-white/50">Message</label>
                <textarea id="message" name="message" required rows={4} className={`${field} resize-none`} placeholder="Tell me about your project or opportunity" />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-teal px-7 text-sm font-medium text-paper transition-colors hover:bg-teal-bright hover:text-ink"
                >
                  Compose email <ArrowUpRight size={16} aria-hidden />
                </button>
                <p id="form-note" className="text-xs leading-relaxed text-white/40" role="status">
                  {sent
                    ? "Your email app should have opened. If not, write to the address on the left."
                    : "This opens your email app with the message pre-filled. Nothing is sent from this page."}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
