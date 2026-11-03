"use client";

import { Button } from "@heroui/react";
import { HiDocumentText, HiMail } from "react-icons/hi"; // Using Hero Icons set

export default function Intro() {
  // Reusable styling for both buttons
  const glassButtonStyle = `
    px-8 py-3 
    bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    text-white 
    font-bold 
    rounded-xl 
    flex items-center gap-2
    transition-all 
    duration-300 
    ease-in-out 
    hover:bg-white/20 
    hover:-translate-y-1.5 
    hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)] 
    hover:border-white/40
    active:translate-y-0
  `;

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
    >
      <h3 className="text-xl text-zinc-400 font-montserrat font-medium mb-5 tracking-widest uppercase mt-10">
        Hello, I&apos;m
      </h3>

      <h2 className="text-5xl md:text-7xl font-bold mt-4 font-montserrat tracking-tighter text-white">
        Fredrich Andre V. Guzman
      </h2>

      <p className="text-lg mt-8 font-montserrat leading-relaxed max-w-2xl">
        <span className="font-bold border-b-2 border-white pb-1">
          The Creative Strategist:
        </span>
        <span className="font-normal text-zinc-500 ml-3">
          Transforming abstract ideas into functional digital reality.
        </span>
      </p>

      <p className="text-md text-zinc-600 mt-4 font-montserrat italic uppercase tracking-wider">
        Full-Stack Developer & Creative Thinker
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-6">
        {/* Resume Button */}
        <a 
          href="/Guzman_CV2 - A4.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className={glassButtonStyle}>
            <HiDocumentText className="text-xl" />
            View Resume
          </Button>
        </a>

        {/* Contact Button */}
        <a href="#contact">
          <Button className={glassButtonStyle}>
            <HiMail className="text-xl" />
            Get In Touch
          </Button>
        </a>
      </div>
    </section>
  );
}
