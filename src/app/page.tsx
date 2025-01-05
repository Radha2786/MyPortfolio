import {HeroSection} from "@/components/HeroSection";
import { About } from "@/components/About";
import SkillPage from "./skills/page";
import { ExperiencePage } from "./experience/page";
// import { ProjectPage } from "./projects/page";
import { Projects } from "@/components/Projects";
// import {Certifications} from "./certifications/page";
import {Certifications} from "@/components/Certifications";
// import AboutPage from "./about/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]  md:py-0 overflow-hidden">
      {/* py-10 */}

    <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <SkillPage />
      </section>
      <section id="experience">
        <ExperiencePage />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>

    </main>
  );
}