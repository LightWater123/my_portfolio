"use client";

import Navbar from "./components/navbar";
import Intro from "./sections/intro";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import About from "./sections/about";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import ParticlesBg from "./components/particlesBg";

export default function Page() {
  return (
    <main className="relative bg-black text-white selection:bg-zinc-800 selection:text-white overflow-x-hidden">

      <ParticlesBg />

    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#161616_0%,_#000000_100%)]" />
    </div>

    <div className="relative z-10">
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
      
    </main>
  )
}