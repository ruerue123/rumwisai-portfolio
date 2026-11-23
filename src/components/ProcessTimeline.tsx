"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function ProcessTimeline() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeading index="04" label="Process" id="process-title" title="From first thought to finished product." />

        <ol className="relative mt-16 md:mt-24 md:grid md:grid-cols-5 md:gap-6">
          {/* Desktop: horizontal rule that draws in. Mobile: vertical rule. */}
          <motion.span
            aria-hidden
            className="absolute left-0 top-0 hidden h-px w-full origin-left bg-teal md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-line md:hidden" />

          {processSteps.map((s, i) => (
            <motion.li
              key={s.number}
              className="relative pb-12 pl-9 last:pb-0 md:pb-0 md:pl-0 md:pt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span aria-hidden className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border border-teal bg-paper md:-top-[5px]" />
              <p className="font-display text-sm font-semibold text-teal">{s.number}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:mt-4">{s.title}</h3>
              <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-mute">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
