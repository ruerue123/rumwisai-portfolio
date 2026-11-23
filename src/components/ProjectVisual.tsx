"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

/** Tasteful abstract placeholder, one variant per index, used when no image exists (or it fails to load). */
function Placeholder({ project, index }: { project: Project; index: number }) {
  const v = index % 4;
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#202326]" role="img" aria-label={`Placeholder visual for ${project.title}`}>
      <svg aria-hidden viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id={`g${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#ffffff" strokeOpacity="0.06" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#g${index})`} />
        {v === 0 && (<>
          <rect x="60" y="60" width="280" height="180" fill="none" stroke="#35B5C8" strokeOpacity="0.6" />
          <rect x="60" y="60" width="280" height="28" fill="#ffffff" fillOpacity="0.05" />
          <rect x="84" y="120" width="140" height="10" fill="#ffffff" fillOpacity="0.25" />
          <rect x="84" y="140" width="100" height="10" fill="#ffffff" fillOpacity="0.12" />
          <rect x="250" y="116" width="66" height="84" fill="#007487" fillOpacity="0.55" />
        </>)}
        {v === 1 && (<>
          <circle cx="200" cy="150" r="90" fill="none" stroke="#35B5C8" strokeOpacity="0.55" />
          <circle cx="200" cy="150" r="52" fill="none" stroke="#ffffff" strokeOpacity="0.18" />
          <circle cx="262" cy="104" r="9" fill="#007487" />
        </>)}
        {v === 2 && (<>
          <path d="M40 240 L160 80 L240 190 L360 50" fill="none" stroke="#35B5C8" strokeOpacity="0.7" strokeWidth="1.2" />
          <circle cx="160" cy="80" r="5" fill="#007487" />
          <circle cx="240" cy="190" r="5" fill="#ffffff" fillOpacity="0.5" />
          <circle cx="360" cy="50" r="5" fill="#ffffff" fillOpacity="0.5" />
        </>)}
        {v === 3 && (<>
          <rect x="70" y="50" width="100" height="200" fill="none" stroke="#ffffff" strokeOpacity="0.25" />
          <rect x="190" y="50" width="140" height="92" fill="#007487" fillOpacity="0.5" />
          <rect x="190" y="158" width="140" height="92" fill="none" stroke="#35B5C8" strokeOpacity="0.55" />
        </>)}
      </svg>
      <span className="absolute bottom-4 left-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/45">
        Placeholder · replace with screenshot
      </span>
    </div>
  );
}

export function ProjectVisual({
  project, index, sizes, priority = false,
}: { project: Project; index: number; sizes: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!project.image || failed) return <Placeholder project={project} index={index} />;
  return (
    <Image
      src={asset(project.image)}
      alt={`Screenshot of ${project.title}, ${project.category.toLowerCase()}`}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className="object-cover object-top"
    />
  );
}
