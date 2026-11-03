"use client";

import React from "react";
import { Card } from "@heroui/react";

// Custom HeroUI Logo Component
const HeroUILogo = () => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-5.333c5.89 0 10.667-4.777 10.667-10.667S21.89 5.333 16 5.333 5.333 10.11 5.333 16 10.11 26.667 16 26.667z"
      fill="#fff" 
    />
    <path
      d="M11.2 11.2v9.6h2.4v-3.6h4.8v3.6h2.4v-9.6h-2.4v3.6h-4.8v-3.6H11.2z"
      fill="#fff"
    />
  </svg>
);

const skillData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", slug: "html" },
      { name: "CSS3", slug: "css" },
      { name: "JavaScript", slug: "js" },
      { name: "TypeScript", slug: "ts" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "Laravel", slug: "laravel" },
      { name: "Tailwind", slug: "tailwind" },
      { name: "HeroUI", slug: "custom-heroui", isCustom: true }, 
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "PHP", slug: "php" },
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    category: "Design & Multi-Media",
    skills: [
      { name: "After Effects", slug: "ae" },
      { name: "Photoshop", slug: "ps" },
      { name: "Premiere Pro", slug: "pr" },
    ],
  },
  {
    category: "Tools & Version Control",
    skills: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "NPM", slug: "npm" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-32 px-6 flex flex-col items-center bg-transparent scroll-mt-28">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-16 uppercase text-white">
        Skills
      </h2>

      <div className="w-full max-w-4xl flex flex-col gap-10">
        {skillData.map((section) => (
          <Card 
            key={section.category}
            className="bg-[#121212]/20 backdrop-blur-md border border-neutral-800/50 p-10 shadow-xl transition-all duration-500 hover:border-neutral-700"
          >
            <div className="flex flex-col gap-10">
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.3em] border-l-2 border-white/20 pl-4">
                {section.category}
              </h3>
              
              <div className="flex flex-wrap gap-x-12 gap-y-10 px-2 justify-start items-center">
                {section.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group flex flex-col items-center gap-4 transition-all duration-300 cursor-default"
                  >
                    <div className="relative transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      {/* Conditional rendering: Custom SVG vs CDN Slug */}
                      {skill.isCustom ? (
                        <HeroUILogo />
                      ) : (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img 
                          src={`https://skillicons.dev/icons?i=${skill.slug}`} 
                          alt={skill.name}
                          className="h-12 w-12 object-contain"
                        />
                      )}
                    </div>
                    
                    <span className="text-[10px] font-bold text-neutral-600 group-hover:text-neutral-200 uppercase tracking-widest transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}