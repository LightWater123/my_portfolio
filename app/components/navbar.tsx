"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    // hit area
    const observerOptions = { 
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0 
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 pointer-events-none">
      <nav
        className={`
          pointer-events-auto flex items-center justify-between
          transition-all duration-500 ease-in-out font-montserrat
          ${isScrolled 
            ? "w-full max-w-4xl px-8 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl mt-2" 
            : "w-full max-w-[1400px] px-6 py-6 rounded-none bg-transparent border-transparent mt-0"
          }
        `}
      >
        <h1 className="text-xl font-bold text-white tracking-tighter">Portfolio</h1>
        
        <ul className="hidden md:flex items-center space-x-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            
            return (
              <li key={link.name} className="relative px-4 py-2">
                <Link 
                  href={link.href}
                  onClick={() => setActiveSection(link.href.replace("#", ""))}
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                
                {/* 2. Changed to motion.div and added layoutId */}
                {isActive && (
                  <motion.div 
                    layoutId="nav-highlight"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-lg -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="md:hidden text-white">Menu</div>
      </nav>
    </div>
  );
}
