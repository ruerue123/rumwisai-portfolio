import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectItem } from "./ProjectItem";

type Block =
  | { kind: "feature"; project: Project; index: number; reversed: boolean }
  | { kind: "pair"; items: { project: Project; index: number }[] };

/** Turns the flat project list into layout blocks: featured → full-width, others → pairs. */
function toBlocks(list: Project[]): Block[] {
  const blocks: Block[] = [];
  let featuredCount = 0;
  let pending: { project: Project; index: number }[] = [];
  const flush = () => {
    if (pending.length) blocks.push({ kind: "pair", items: pending });
    pending = [];
  };
  list.forEach((project, index) => {
    if (project.featured) {
      flush();
      blocks.push({ kind: "feature", project, index, reversed: featuredCount++ % 2 === 1 });
    } else {
      pending.push({ project, index });
      if (pending.length === 2) flush();
    }
  });
  flush();
  return blocks;
}

export function ProjectShowcase() {
  const blocks = toBlocks(projects);
  return (
    <section id="work" aria-labelledby="work-title" className="on-dark bg-ink py-24 text-paper md:py-36">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeading
          tone="dark"
          index="01"
          label="Work"
          id="work-title"
          title="Selected work."
          text="A selection of digital experiences I've designed, developed and brought to life."
        />

        <nav aria-label="Project index" className="mt-14 border-y border-white/10 py-4">
          <ol className="flex flex-wrap gap-x-8 gap-y-1">
            {projects.map((p, i) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="link-underline inline-flex min-h-11 items-center gap-2 text-sm text-white/60 hover:text-white">
                  <span className="text-teal-bright">{String(i + 1).padStart(2, "0")}</span>
                  {p.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
          {blocks.map((b) =>
            b.kind === "feature" ? (
              <div key={b.project.id} id={b.project.id} className="scroll-mt-24">
                <ProjectItem project={b.project} index={b.index} variant="feature" reversed={b.reversed} />
              </div>
            ) : (
              <div key={b.items[0].project.id} className="grid gap-16 md:grid-cols-2 md:gap-10 lg:gap-16">
                {b.items.map((it, k) => (
                  <div key={it.project.id} id={it.project.id} className={`scroll-mt-24 ${k === 1 ? "md:mt-24" : ""}`}>
                    <ProjectItem project={it.project} index={it.index} variant="pair" />
                  </div>
                ))}
              </div>
            ),
          )}
        </div>

        <p className="mt-24 border-t border-white/10 pt-6 text-sm text-white/40">
          More work and case studies available on request.
        </p>
      </div>
    </section>
  );
}
