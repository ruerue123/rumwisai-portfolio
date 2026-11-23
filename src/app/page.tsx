import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ProjectShowcase />
        <Capabilities />
        <About />
        <ProcessTimeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
