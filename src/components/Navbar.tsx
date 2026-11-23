"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, sectionToNav, site, type NavKey } from "@/data/site";
import { cn } from "@/lib/cn";

function Availability({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 text-xs text-mute", className)}>
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="pulse-ring absolute inset-0 rounded-full bg-teal" />
        <span className="relative h-2 w-2 rounded-full bg-teal" />
      </span>
      Available for opportunities
    </span>
  );
}

export function Navbar() {
  const [active, setActive] = useState<NavKey>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = Object.keys(sectionToNav);
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const line = window.innerHeight * 0.35;
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(sectionToNav[current]);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-line bg-paper/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-page items-center justify-between px-5 md:px-10">
        <a href="#home" className="font-display text-sm font-bold tracking-[0.16em]" onClick={() => setOpen(false)}>
          {site.shortName}
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <Availability className="hidden lg:flex" />
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.key}>
                <a
                  href={l.href}
                  aria-current={active === l.key ? "true" : undefined}
                  className={cn(
                    "relative block px-4 py-2 text-sm transition-colors",
                    active === l.key ? "text-ink" : "text-mute hover:text-ink",
                  )}
                >
                  {l.label}
                  {active === l.key && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-teal"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-5 pb-10 pt-8">
              <ul>
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                    className="border-b border-line"
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-5 font-display text-4xl font-semibold tracking-tight"
                    >
                      {l.label}
                      <span className="text-xs font-normal text-mute">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-3">
                <Availability />
                <p className="eyebrow">{site.location}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
