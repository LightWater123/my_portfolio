"use client";
import SocialButton from "../components/socialButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Contact()
{
    return(
        <>
            <section id="contact" className="min-h-screen min-h-[60vh] flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold mb-6 tracking-tighter">Get in touch</h2>
            <p className="mb-10 text-zinc-500 tracking-wide uppercase text-sm">Your Vision, My Execution—Let’s Innovate</p>

            <div className="flex flex-wrap justify-center gap-4">
            <SocialButton 
                href="https://github.com/LightWater123" 
                icon={<FaGithub />} 
                label="GitHub"
                brandClass="text-black"
                hoverBgClass="hover:bg-black"
            />
            
            <SocialButton 
                href="https://www.linkedin.com/in/fredrich-andre-guzman-589937210/" 
                icon={<FaLinkedin />} 
                label="LinkedIn"
                brandClass="text-[#0077B5]"
                hoverBgClass="hover:bg-[#0077B5]" 
            />
            
            <SocialButton 
                href="https://www.instagram.com/_reddgzn/" 
                icon={<FaInstagram />} 
                label="Instagram"
                brandClass="text-[#E4405F]"
                hoverBgClass="hover:bg-[#E4405F]" 
            />
            </div>
        </section>
        </>
    );
}