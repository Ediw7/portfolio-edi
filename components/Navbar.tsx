"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
  name: string;
  href: string;
  id: string;
};

const links: NavLink[] = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Awards", href: "#awards", id: "awards" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -50% 0px", 
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-3 px-4 md:px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl w-full pointer-events-auto relative">
        
        {/* --- MAIN BAR: ADAPTIVE GLASSMORPHISM --- */}
        <div className="flex items-center justify-between bg-white/70 dark:bg-black/20 backdrop-blur-xl border border-black/5 dark:border-white/[0.08] px-6 py-2.5 rounded-full shadow-lg transition-all duration-300">
          
          {/* LOGO: E + Edi Wicoro */}
          <a 
            href="#home" 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 group transition-opacity hover:opacity-70"
          >
            <div className="w-5 h-5 rounded-full bg-black dark:bg-white flex items-center justify-center">
              <span className="text-[10px] font-black text-white dark:text-black leading-none">E</span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-black dark:text-white transition-colors">
              Edi Wicoro
            </span>
          </a>

          {/* DESKTOP LINKS: Adaptif Light/Dark */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
                    isActive 
                      ? "text-black dark:text-white" 
                      : "text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeSectionGlow"
                      className="absolute -bottom-1 left-0 right-0 mx-auto w-[40%] h-[1px] bg-red-600"
                      style={{ boxShadow: "0 2px 8px rgba(220, 38, 38, 0.5)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* KANAN: CV & HAMBURGER */}
          <div className="flex items-center gap-3">
            <a 
              href="https://drive.google.com/drive/folders/17-CuYQHDdHo6lf9ZjQv8CMtEcvTVXorT?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-[9px] font-bold text-white dark:text-black bg-black dark:bg-white px-5 py-1.5 rounded-full hover:opacity-80 transition-all duration-300 tracking-widest uppercase"
            >
              Resume
            </a>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black dark:text-white p-1"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU: ADAPTIVE CRYSTAL DRAWER --- */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm md:hidden z-[60]"
              />
              
              {/* Drawer */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 35 }}
                className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-l border-black/5 dark:border-white/5 p-8 md:hidden z-[70] flex flex-col justify-between shadow-2xl"
              >
                {/* Menu Links */}
                <div className="mt-12 flex flex-col gap-6">
                  <span className="text-[10px] font-bold text-black/30 dark:text-white/20 uppercase tracking-[0.5em] mb-2">Navigation</span>
                  {links.map((link, i) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => handleNavClick(link.id)}
                        className={`group flex items-center justify-between text-xl font-black uppercase tracking-tighter transition-all ${
                          isActive ? "text-black dark:text-white" : "text-black/30 dark:text-white/20 hover:text-black/60 dark:hover:text-white/50"
                        }`}
                      >
                        <div className="flex items-center gap-4 italic">
                          <span className="text-[10px] font-mono not-italic opacity-30">0{i + 1}</span>
                          {link.name}
                        </div>
                        {isActive && <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.4)]" />}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Bottom Section */}
                <div className="mb-6 space-y-6">
                  <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />
                  <a 
                    href="https://drive.google.com/drive/folders/17-CuYQHDdHo6lf9ZjQv8CMtEcvTVXorT?usp=sharing" 
                    target="_blank"
                    className="flex flex-col gap-3 group"
                  >
                    <span className="text-[10px] font-bold text-black/30 dark:text-white/20 uppercase tracking-[0.3em]">Curriculum Vitae</span>
                    <div className="flex items-center justify-between bg-black dark:bg-white px-6 py-4 rounded-2xl text-white dark:text-black transition-transform active:scale-95 shadow-xl">
                      <span className="text-xs font-black uppercase tracking-widest">Download CV</span>
                      <ArrowUpRight size={18} strokeWidth={3} />
                    </div>
                  </a>
                  <p className="text-[8px] text-black/20 dark:text-white/10 uppercase tracking-[0.4em] text-center pt-2">© 2025 Edi Wicoro</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}