"use client";
import Image from 'next/image';

export default function About()
{
    return(
        <>
            <section id="about" className="scroll-mt-30 flex flex-col items-center justify-center px-6 py-20">
                <h2 className="text-6xl font-bold mb-16 tracking-tighter">About Me</h2>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto">
                <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 relative">
                    
                    <Image
                    src="/picture_ko.jpg" 
                    alt="Fredrich Guzman"
                    width={320}  
                    height={320} 
                    className="rounded-lg object-cover object-[center_10%] w-full h-full shadow-2xl border border-zinc-800"
                    />  

                </div>

                <div className="flex flex-col gap-6 text-zinc-400">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                    Full-stack developer driven by clean architecture and user-centric design.
                    </h3>
                    
                    <p className="text-lg leading-relaxed text-justify">
                    I&apos;m a natural problem-solver with a passion for staying ahead of the 
                    curve and finding &apos;outside-the-box&apos; ways to use new tech. Whether I&apos;m 
                    scaling a web application or refining a powerbuilding split, I believe 
                    in the philosophy of Kaizen—continuous, incremental improvement.
                    </p>

                    <p className="text-lg leading-relaxed text-justify">
                    During my senior year at STI College Legazpi, I have built systems like <b>TreaSureTrack</b>. My goal is to leverage these tools to 
                    solve complex real-world problems while maintaining a clean, scalable 
                    codebase.
                    </p>
                </div>
                </div>
            </section>
        </>
    );
}