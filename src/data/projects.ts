export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  /** Optional: hidden when omitted. */
  year?: string;
  role: string[];
  technologies: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  /** Path under /public (e.g. "/projects/my-site.jpg"). Falls back to a placeholder visual. */
  image?: string;
  /** Featured projects render as large, full-width compositions. Consecutive non-featured projects pair up in two columns. */
  featured: boolean;
};

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT HERE to add, change or reorder projects.
 *  Ordered by design strength: best work first. Layout follows order + `featured`. Roles and years are
 *  best-guess defaults — adjust each to match your real involvement.
 *  Screenshots live in /public/projects (replace any time).
 * ─────────────────────────────────────────────────────────────
 */
const defaultRole = ["Website Design", "Frontend Development"];

export const projects: Project[] = [
  {
    id: "opportunity-drop-263",
    title: "Opportunity Drop 263",
    category: "Web Platform",
    description:
      "Remote roles open to people in Zimbabwe, alongside courses, tools and interview practice to help them win those roles. Built in Zimbabwe.",
    role: ["Product Design", "Frontend Development", "Deployment"],
    technologies: ["Next.js", "Vercel"],
    liveUrl: "https://opportunity-drop-263.vercel.app/",
    image: "/projects/opportunity-drop.jpg",
    featured: true,
  },
  {
    id: "groundwork-construction",
    title: "Groundwork Construction",
    category: "Corporate Website",
    description:
      "A Harare construction company's site presenting residential, commercial, renovation and civil works with a focus on quality and project management.",
    role: defaultRole,
    technologies: ["Next.js"],
    liveUrl: "https://www.groundwork.co.zw/",
    image: "/projects/groundwork.jpg",
    featured: true,
  },
  {
    id: "milton-kamwendo",
    title: "Milton Kamwendo",
    category: "Personal Brand Website",
    description:
      "A premium site for a workshop facilitator, strategy consultant, speaker and author, with speaking, consulting, shop and book-launch pages.",
    role: defaultRole,
    technologies: ["React", "Vite"],
    liveUrl: "https://www.miltonkamwendo.co.zw/",
    image: "/projects/milton.jpg",
    featured: true,
  },
  {
    id: "crescio-technologies",
    title: "Crescio Technologies",
    category: "Company Website",
    description:
      "The site for a Harare-based technology company building websites, custom software and practical AI and automation for organisations across Southern Africa.",
    role: defaultRole,
    technologies: ["Next.js"],
    liveUrl: "https://www.cresciotech.co.zw/",
    image: "/projects/crescio.jpg",
    featured: false,
  },
  {
    id: "vidcore-engineering",
    title: "Vidcore Engineering",
    category: "Industrial Supply Website",
    description:
      "A Bulawayo supplier of mining consumables, industrial spares and PPE, with a clear product range and quote-request flow.",
    role: defaultRole,
    technologies: ["Next.js", "Vercel"],
    liveUrl: "https://vidcore-website.vercel.app/",
    image: "/projects/vidcore.jpg",
    featured: false,
  },
  {
    id: "crystal-trust-school",
    title: "Crystal Trust School",
    category: "School Website",
    description:
      "A website for a Zimsec-registered Christian primary school in Glaudina, Harare, covering ECD to Grade 7.",
    role: defaultRole,
    technologies: ["React", "Vite"],
    liveUrl: "https://www.crystaltrustschool.co.zw/",
    image: "/projects/crystaltrust.jpg",
    featured: false,
  },
  {
    id: "nimbo",
    title: "Nimbo",
    category: "Online Marketplace",
    description:
      "A Zimbabwean multi-vendor marketplace with category browsing, product search, featured products and an installable app experience.",
    role: defaultRole,
    technologies: [],
    liveUrl: "https://www.nimbo.co.zw/",
    image: "/projects/nimbo.jpg",
    featured: false,
  },
  {
    id: "seas-driving-school",
    title: "Seas Driving School",
    category: "Service Business Website",
    description:
      "A lesson-booking focused website for a Cork driving instructor, covering automatic, manual, EDT and refresher lessons.",
    role: defaultRole,
    technologies: ["Next.js"],
    liveUrl: "https://seasdrivingschool.ie/",
    image: "/projects/seas.jpg",
    featured: false,
  },
  {
    id: "rayvall-healthcare",
    title: "Rayvall Healthcare Solutions",
    category: "Healthcare Website",
    description:
      "A calm, trustworthy site for a Surrey homecare provider, presenting personal, live-in and dementia care services clearly.",
    role: defaultRole,
    technologies: ["React", "Vite"],
    liveUrl: "https://rayvallcare.co.uk/",
    image: "/projects/rayvall.jpg",
    featured: false,
  },
];
