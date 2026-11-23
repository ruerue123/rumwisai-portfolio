import { aboutFacts } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line bg-[#EFEEE8] py-24 md:py-36">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeading
          index="03"
          label="About"
          id="about-title"
          title="Design-minded. Technically curious. Always building."
        />

        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-10">
          <Reveal className="space-y-6 text-lg leading-relaxed md:col-span-7 md:text-xl">
            <p>
              I&rsquo;m a website designer and frontend developer with a background in Mathematical Sciences and a
              passion for building useful digital products.
            </p>
            <p className="text-mute">
              Through my work at Crescio Technologies and independent projects, I&rsquo;ve developed experience across the
              full website development process, from understanding requirements and designing interfaces to writing
              code, integrating functionality and deploying websites.
            </p>
            <p className="text-mute">
              I enjoy working at the intersection of design and technology, where thoughtful user experiences meet
              practical engineering.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <dl className="border-t border-ink">
              {aboutFacts.map((f) => (
                <div key={f.label} className="border-b border-line py-4">
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-1.5 font-display text-lg font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
