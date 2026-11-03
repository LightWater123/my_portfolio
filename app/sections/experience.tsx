"use client";

import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";

export default function Experience(){
    return(
        <>
            <section id="experience" className=" scroll-mt-20 py-20 flex flex-col items-center justify-center bg-transparent ">
                <h2 className="text-6xl font-bold mb-16 tracking-tighter">Experience</h2>
        
                <div className="flex flex-col items-start max-w-3xl w-full px-6">
                  <h3 className="text-3xl font-bold mb-4 text-white">PTV-4 IT Intern</h3>
                  
                  <div className="flex flex-wrap items-center gap-6 mt-2 text-zinc-400">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-white" />
                      <p>February 2026 - April 2026</p>
                    </div>
        
                    <div className="flex items-center gap-2">
                      <FaLocationDot className="text-white" />
                      <span>Broadcast Complex, Diliman, Quezon City, Philippines</span>
                    </div>
        
                    <div className="flex items-center gap-2">
                      <IoBriefcase className="text-white" />
                      <span>Onsite</span>
                    </div>
                  </div>
        
                  <ul className="list-disc list-inside mt-8 space-y-4 text-lg text-zinc-300">
                    <li>Collaborating with every department at People&apos;s Television Network Inc.</li>
                    <li>Applying Full-Stack solutions to streamline internal digital workflows.</li>
                    <li>Contributing to the digital transformation of public broadcasting services.</li>
                    <li>Maintaining high-quality code standards in a professional environment.</li>
                  </ul>
                </div>
              </section>
        
              
        </>
        
    );
}