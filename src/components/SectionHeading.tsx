import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  text?: string;
  tone?: "light" | "dark";
  id?: string;
};

export function SectionHeading({ index, label, title, text, tone = "light", id }: Props) {
  const dark = tone === "dark";
  return (
    <header className="grid gap-8 md:grid-cols-12 md:gap-10">
      <Reveal className="md:col-span-3">
        <p className={cn("eyebrow flex items-center gap-3", dark && "!text-white/50")}>
          <span className="text-teal-bright" aria-hidden>{index}</span>
          <span className={cn("h-px w-8", dark ? "bg-white/20" : "bg-line")} aria-hidden />
          {label}
        </p>
      </Reveal>
      <div className="md:col-span-9">
        <Reveal delay={0.05}>
          <h2 id={id} className="font-display text-h2 font-semibold text-balance">{title}</h2>
        </Reveal>
        {text && (
          <Reveal delay={0.12}>
            <p className={cn("mt-6 max-w-xl text-lg leading-relaxed", dark ? "text-white/60" : "text-mute")}>{text}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
