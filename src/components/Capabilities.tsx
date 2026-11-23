import { capabilities, developing } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="cap-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeading index="02" label="Capabilities" id="cap-title" title="Where design meets development." />

        <div className="mt-16 border-t border-ink md:mt-24">
          {capabilities.map((c, i) => (
            <Reveal key={c.number} delay={i * 0.05} className="group grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <p className="font-display text-sm font-semibold text-teal md:col-span-1">{c.number}</p>
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl font-semibold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-4 max-w-xs text-mute">{c.blurb}</p>
              </div>
              <ul className="grid gap-x-8 sm:grid-cols-2 md:col-span-6">
                {c.items.map((item) => (
                  <li key={item} className="border-b border-line py-3 text-[0.95rem] last:border-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-mute">{developing}</p>
        </Reveal>
      </div>
    </section>
  );
}
