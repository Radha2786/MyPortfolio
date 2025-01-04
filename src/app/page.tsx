import Image from "next/image";
// import Navbar from "./components/Navbar";
import {HeroSection} from "@/components/HeroSection";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "./experience.tsx/page";
import { Projects } from "./Projects/page";
import {Certifications} from "./Certifications/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] py-10 md:py-0 overflow-hidden">
    <HeroSection/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Certifications/>
    {/* <FeaturedCourses/> */}
    {/* <WhyChooseUs/> */}
    </main>
  );
}



// https://github.com/judygab/nextjs-portfolio/tree/main
// https://www.youtube.com/watch?v=Kb1f5bvF6f4&t=2577s
// https://github.com/adrianhajdin/portfolio/tree/main
// https://www.youtube.com/watch?v=FTH6Dn3AyIQ&t=2s