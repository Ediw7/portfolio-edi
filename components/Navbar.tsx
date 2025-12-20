"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. PINDAHKAN TIPE DATA & LINKS KE LUAR COMPONENT (SOLUSI ERROR)
type NavLink = {
  name: string;
  href: string;
  id: string;
};

// Array ini statis, jadi aman ditaruh di luar agar tidak re-render
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

  // --- SCROLL SPY LOGIC ---
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
  }, []); // Dependency kosong karena 'links' sekarang statis di luar

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    // 2. Padding atas dikurangi drastis (pt-6 -> pt-3) agar tidak menutupi teks Hero
    <nav className="fixed top-0 left-0 w-full z-50 pt-3 px-4 md:px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl w-full pointer-events-auto relative">
        
        {/* --- MAIN BAR: ULTRA THIN LUXURY --- */}
        {/* Perubahan: py-4 -> py-2.5 (Lebih tipis/gepeng) */}
        <div className="flex items-center justify-between bg-[#080808]/80 backdrop-blur-2xl border border-white/5 px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative z-50 transition-all duration-300">
          
          {/* LOGO: Ukuran disesuaikan */}
          <a 
            href="#home" 
            onClick={() => handleNavClick('home')} 
            className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white hover:text-neutral-400 transition-colors"
          >
            Edi Wicoro
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  // Padding link juga dikecilkan (py-2 -> py-1.5)
                  className={`relative px-4 py-1.5 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
                    isActive ? "text-white" : "text-neutral-500 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* EFEK LASER (Disesuaikan posisinya) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeSectionGlow"
                      className="absolute -bottom-1 left-0 right-0 mx-auto w-[40%] h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
                      style={{
                        boxShadow: "0 2px 8px rgba(220, 38, 38, 1), 0 0 15px rgba(220, 38, 38, 0.5)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* KANAN: CV & HAMBURGER */}
          <div className="flex items-center gap-3">
            {/* CV Button: Lebih kecil & compact */}
            <a 
              href="https://drive.google.com/your-cv-link" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-[9px] font-bold text-black bg-white px-5 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 tracking-widest uppercase"
            >
              Resume
            </a>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-neutral-400 transition-colors p-1"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              // Menu turun sedikit lebih dekat karena navbar menipis (mt-2)
              className="absolute top-full left-0 w-full mt-2 p-2 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/5 rounded-3xl md:hidden z-40 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col">
                {links.map((link) => {
                   const isActive = activeSection === link.id;
                   return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative block px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] rounded-2xl transition-all border-b border-white/5 last:border-none ${
                        isActive ? "text-white bg-white/5" : "text-neutral-500 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                     
                     {/* Mobile Laser Accent */}
                     {isActive && (
                        <motion.div
                        layoutId="activeSectionGlowMobile"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[40%] bg-red-600 rounded-r-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                        />
                    )}
                  </a>
                )})}
                
                <div className="p-2 mt-2">
                    <a href="https://drive.google.com/your-cv-link" className="flex items-center justify-center w-full py-3 bg-white text-black rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-200">
                        Resume
                    </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}