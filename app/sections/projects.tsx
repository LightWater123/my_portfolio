"use client";

import ProjectCard from "../components/projectCardHero";

export default function Projects()
{
    return(
        <>
        <section id="projects" className="scroll-mt-28 py-32 flex flex-col items-center justify-center px-6">
                <h2 className="text-6xl font-bold tracking-tighter mb-6">Projects</h2>
                <p className="text-zinc-500 mb-12 text-center max-w-lg italic">
                  A collection of projects that show how I turn ideas into actual code.
                </p>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                  <ProjectCard 
                    title="Kaizen Powerbuilding"
                    description="A high-performance web application designed for powerlifters to track progressive overload and training splits using Laravel, React, and MongoDB."
                    link="https://github.com/LightWater123/kaizen-app"
                  />
        
                  <ProjectCard 
                    title="TreaSureTrack"
                    description="A Web-Based System for Psreventive Maintenance, Inventory Management, and Real-time Monitoring in Maintenance Operations."
                    link="https://github.com/LightWater123/Capstone_BTR"
                  />
                </div>
        
              </section>
        </>
    );
}