import { Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const link = "flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-teal-bright hover:text-teal-bright";
  return (
    <footer className="on-dark border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.16em]">{site.shortName}</p>
          <p className="mt-3 text-sm text-white/60">{site.roles.join(" · ")}</p>
          <p className="mt-1 text-sm text-white/40">{site.location}</p>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex gap-3">
            <a href={`mailto:${site.email}`} className={link} aria-label="Email Rumwisai"><Mail size={16} /></a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={link} aria-label="LinkedIn (opens in a new tab)"><Linkedin size={16} /></a>
          </div>
          <p className="text-xs text-white/40">© {year} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
