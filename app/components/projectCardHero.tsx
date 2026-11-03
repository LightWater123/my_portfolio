"use client";

import { Card, Link } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectProps) {
  return (
    <Card.Root 
      className="
        max-w-sm p-10 mt-10
        /* Glass effect on background only */
        bg-[#121212]/10 backdrop-blur-md 
        /* Subtle border and shadow for depth */
        border border-white/10 shadow-2xl
        rounded-xl overflow-hidden
        transition-all duration-500 ease-in-out
        /* Hover: increase opacity and lift */
        hover:-translate-y-2 hover:bg-[#2C2D2D]/80 hover:border-white/20
      "
    >
      <Card.Header>
        <Card.Title className="font-bold text-2xl italic text-white">
          {title}
        </Card.Title>
        <div className="h-[2px] w-80 bg-white mt-2 rounded-full opacity-60 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
      </Card.Header>

      <Card.Content className="py-2">
        <p className="font-normal text-sm leading-relaxed text-gray-300 line-clamp-3 break-words">
          {description}
        </p>
      </Card.Content>

      <Card.Footer>
        <Link
            href={link}
            target="_blank"           
            rel="noopener noreferrer" 
            className="
              underline text-white font-medium flex items-center gap-2 
              transition-all duration-300 ease-in-out
              hover:text-gray-300 
              hover:-translate-y-0.5
            "
        >
            View Project
            <FaArrowRight className="text-xs" />
        </Link>
      </Card.Footer>
    </Card.Root>
  );
}
