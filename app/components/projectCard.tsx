import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";

interface ProjectProps{
    title: string;
    description: string;
    link: string;
}

export default function ProjectCard({title, description, link}:ProjectProps){
    return(
        <div className="
        bg-neutral-primary-soft block max-w-sm p-6 border border-default shadow-xs 
        /* 1. Curved Corners (12px) */
        rounded-xl 
        /* 2. Hover Transitions */
        transition-all duration-300 ease-in-out
        /* 3. Hover Effects: Lift, Darken Bg, and stronger shadow */
        hover:-translate-y-2 hover:bg-neutral-secondary-medium hover:shadow-lg
        mt-10">
      <h3 className="font-bold text-2xl mb-2 italic">
        {title}
      </h3>
      
      <p className="font-normal text-sm mb-4 leading-relaxed opacity-90 line-clamp-3 break-words">
        {description}
      </p>

      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
      >
        View Project
        <FaArrowRight className="text-xs" />
      </a>
    </div>
    );
}