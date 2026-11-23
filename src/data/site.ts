export const site = {
  name: "Rumwisai Chivasa",
  shortName: "RUMWISAI CHIVASA",
  roles: ["Website Designer", "Frontend Developer", "UX/UI Designer"],
  location: "Harare, Zimbabwe",
  email: "rumwisaichivasa@gmail.com",
  linkedin: "https://linkedin.com/in/rumwisai-tinotenda-chivasa",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once the real domain is known.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rumwisai-chivasa.vercel.app",
  title: "Rumwisai Chivasa | Website Designer & Frontend Developer",
  description:
    "Rumwisai Chivasa is a website designer, frontend developer and UX/UI designer based in Harare, Zimbabwe, building thoughtful, responsive digital experiences from concept to deployment.",
  /**
   * OPTIONAL portrait. Drop a file into /public (e.g. /public/portrait.jpg)
   * and set this to "/portrait.jpg". While undefined, a typographic
   * placeholder is shown instead.
   */
  portrait: undefined as string | undefined,
} as const;

export const navLinks = [
  { key: "home", label: "Home", href: "#home" },
  { key: "work", label: "Work", href: "#work" },
  { key: "about", label: "About", href: "#about" },
  { key: "contact", label: "Contact", href: "#contact" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"];

/** Maps every page section id to the nav item that should highlight. */
export const sectionToNav: Record<string, NavKey> = {
  home: "home",
  work: "work",
  capabilities: "about",
  about: "about",
  process: "about",
  contact: "contact",
};

export const capabilities = [
  {
    number: "01",
    title: "UX/UI Design",
    blurb: "Interfaces shaped around how people actually use them.",
    items: [
      "User experience design",
      "User flows and wireframes",
      "Interface design",
      "Responsive design",
      "Design systems",
      "Figma prototyping",
    ],
  },
  {
    number: "02",
    title: "Web Development",
    blurb: "Clean, typed, responsive builds that hold up in production.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML and CSS",
      "API integration",
    ],
  },
  {
    number: "03",
    title: "Digital Delivery",
    blurb: "The unglamorous part that gets a site live and keeps it there.",
    items: [
      "Website deployment",
      "Domain configuration",
      "DNS fundamentals",
      "Hosting configuration",
      "Technical troubleshooting",
      "Client communication and project coordination",
    ],
  },
] as const;

export const developing =
  "Currently developing: WordPress (basic experience, familiar with Elementor and Divi).";

export const processSteps = [
  { number: "01", title: "Discover", text: "Understanding the business, audience, requirements and objectives." },
  { number: "02", title: "Define", text: "Planning the structure, user flows and overall experience." },
  { number: "03", title: "Design", text: "Creating wireframes, visual direction and responsive interfaces." },
  { number: "04", title: "Develop", text: "Building, integrating and testing the experience." },
  { number: "05", title: "Deliver", text: "Deployment, launch support and ongoing improvements." },
] as const;

export const aboutFacts = [
  { label: "Location", value: "Harare, Zimbabwe" },
  { label: "Education", value: "BSc Mathematical Sciences, Stellenbosch University" },
  { label: "Certificate", value: "Google UX Design Certificate" },
  { label: "Training", value: "Applied Data Science (Python)" },
] as const;
