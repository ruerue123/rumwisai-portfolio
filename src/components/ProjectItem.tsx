import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type Variant = "feature" | "pair";

type Props = {
  project: Project;
  index: number;
  variant: Variant;
  /** Flips image/text order in feature layout for an alternating rhythm. */
  reversed?: boolean;
};

function Links({ project }: { project: Project }) {
  const cls = "group/link inline-flex min-h-11 items-center gap-1.5 border-b border-white/30 pb-0.5 text-sm text-white transition-colors hover:border-teal-bright hover:text-teal-bright";
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={cls}>
          Visit live site <span className="sr-only">for {project.title} (opens in a new tab)</span>
          <ArrowUpRight size={15} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      ) : (
        <span className="text-sm text-white/40">Live link coming soon</span>
      )}
      {project.caseStudyUrl && (
        <a href={project.caseStudyUrl} className={cls}>
          Case study <span className="sr-only">for {project.title}</span>
          <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 text-sm">
      <div>
        <dt className="eyebrow !text-white/40">Role</dt>
        <dd className="mt-1.5 text-white/80">{project.role.join(", ")}</dd>
      </div>
      {project.technologies.length > 0 && (
        <div>
          <dt className="eyebrow !text-white/40">Technologies</dt>
          <dd className="mt-1.5 text-white/80">{project.technologies.join(", ")}</dd>
        </div>
      )}
    </dl>
  );
}

export function ProjectItem({ project, index, variant, reversed }: Props) {
  const num = String(index + 1).padStart(2, "0");

  if (variant === "feature") {
    return (
      <Reveal as="article" className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11]">
            <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
              <ProjectVisual project={project} index={index} sizes="(min-width: 1024px) 58vw, 100vw" priority={index === 0} />
            </div>
          </div>
        </div>
        <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
          <p className="eyebrow flex items-center gap-3 !text-white/50">
            <span className="text-teal-bright">{num}</span> {[project.category, project.year].filter(Boolean).join(" · ")}
          </p>
          <h3 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h3>
          <p className="mt-5 max-w-md leading-relaxed text-white/60">{project.description}</p>
          <div className="mt-8 space-y-8">
            <Meta project={project} />
            <Links project={project} />
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal as="article" className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
          <ProjectVisual project={project} index={index} sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </div>
      <p className="eyebrow mt-6 flex items-center gap-3 !text-white/50">
        <span className="text-teal-bright">{num}</span> {[project.category, project.year].filter(Boolean).join(" · ")}
      </p>
      <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-3 max-w-md leading-relaxed text-white/60">{project.description}</p>
      <div className="mt-6 space-y-6">
        <Meta project={project} />
        <Links project={project} />
      </div>
    </Reveal>
  );
}
