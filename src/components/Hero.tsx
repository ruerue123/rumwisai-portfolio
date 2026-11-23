"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { asset } from "@/lib/asset";

const ease = [0.22, 1, 0.36, 1] as const;

const lines = [
  <>I design and build</>,
  <>digital experiences</>,
  <>that make <span className="text-teal">ideas work.</span></>,
];

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      {/* Abstract detail: slow-rotating dashed orbit + fixed ring */}
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="spin-slow pointer-events-none absolute -right-10 -top-10 h-[120%] w-[120%] max-w-none opacity-70"
      >
        <circle cx="200" cy="200" r="190" fill="none" stroke="#007487" strokeWidth="0.8" strokeDasharray="2 9" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#E4E3DE" strokeWidth="1" />
        <circle cx="200" cy="10" r="4" fill="#007487" />
      </svg>

      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-[#EFEEE8]">
        {site.portrait ? (
          <Image
            src={asset(site.portrait)}
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 34vw, 80vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-5" role="img" aria-label="Portrait placeholder">
            <div className="absolute inset-x-0 top-1/2 h-px bg-line" aria-hidden />
            <div className="absolute inset-y-0 left-1/2 w-px bg-line" aria-hidden />
            <span className="eyebrow relative">Portrait · optional</span>
            <span className="relative font-display text-[7rem] font-bold leading-none tracking-tighter text-ink/10 sm:text-[9rem]">
              RC
            </span>
            <span className="eyebrow relative self-end text-right">
              Replace via
              <br />
              <code className="normal-case tracking-normal">site.portrait</code>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto grid max-w-page gap-14 px-5 pb-20 md:px-10 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow mb-8 max-w-sm leading-relaxed text-ink md:mb-10 md:max-w-none"
          >
            Website Designer · Frontend Developer · UX/UI Designer
          </motion.p>

          <h1 id="hero-title" className="font-display text-hero font-semibold">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.12, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1fr_auto] md:items-end"
          >
            <p className="max-w-xl text-lg leading-relaxed text-mute">
              I&rsquo;m Rumwisai, a designer and frontend developer passionate about creating thoughtful digital
              experiences. I bring together design thinking, technical execution and a practical understanding of how
              businesses use the web.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-7 text-sm font-medium text-paper transition-colors hover:bg-teal"
              >
                Explore my work
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center border border-ink px-7 text-sm font-medium transition-colors hover:border-teal hover:text-teal"
              >
                Let&rsquo;s talk
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="lg:col-span-4 lg:pt-6"
        >
          <Portrait />
          <p className="eyebrow mt-5 flex items-center gap-2">
            <MapPin size={13} aria-hidden /> {site.location}
          </p>
        </motion.div>
      </div>
      <div className="border-t border-line" />
    </section>
  );
}
