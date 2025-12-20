"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit", 
        hour12: false, 
        timeZoneName: "short" 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full bg-black text-white px-6 md:px-12 py-20 md:py-32 border-t border-white/5 overflow-hidden">

      {/* --- BACKGROUND LUXURY GRADIENT (RESPONSIVE FIX) --- */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* 1. Deep Crimson Glow (Kiri Bawah) */}
        {/* FIX: 
            - Mobile: w-80 h-80 (kecil), blur-3xl, opacity-50 (tebal biar kelihatan)
            - Desktop: w-[1000px], blur-[180px], opacity-40 (lebar & halus) 
        */}
        <div className="absolute -bottom-20 -left-20 md:-bottom-[10%] md:-left-[10%] 
                        w-80 h-80 md:w-[1000px] md:h-[1000px] 
                        bg-red-900/50 md:bg-red-900/20 
                        rounded-full blur-3xl md:blur-[180px] mix-blend-screen" />
        
        {/* 2. Royal Indigo Glow (Kanan Atas) */}
        {/* FIX: Ukuran disesuaikan untuk mobile */}
        <div className="absolute -top-20 -right-20 md:-top-[10%] md:-right-[10%] 
                        w-64 h-64 md:w-[800px] md:h-[800px] 
                        bg-indigo-900/50 md:bg-indigo-900/15 
                        rounded-full blur-3xl md:blur-[180px] mix-blend-screen" />

        {/* 3. Center Subtle Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-40 h-40 md:w-[600px] md:h-[600px] 
                        bg-white/5 rounded-full blur-2xl md:blur-[200px] opacity-20" />

        {/* 4. Noise Texture (Matte Finish) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION 1: BIG CTA --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12 border-b border-white/5 pb-24">
          <div className="max-w-4xl">
            {/* Font size disesuaikan di mobile (text-5xl) biar ga kepotong */}
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Let's work <br /> 
              <span className="text-white/40 italic font-serif">Together</span>
              <span className="text-red-600 not-italic">.</span>
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Currently available for freelance projects and open to full-time opportunities. 
              Let’s build something strictly <span className="text-white font-medium">premium</span>.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <a 
              href="mailto:ediwicoro26@gmail.com"
              className="group relative flex items-center justify-between md:justify-start gap-4 bg-white text-black px-8 py-5 md:px-10 rounded-full font-bold text-xs tracking-[0.2em] uppercase transition-all hover:bg-neutral-200 shadow-[0_0_40px_rgba(255,255,255,0.1)] w-full md:w-auto"
            >
              <span>Send an Email</span>
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                 <ArrowUpRight size={14} />
              </div>
            </a>
            <div className="text-left md:text-right">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Local Time</p>
                <p className="text-sm font-mono text-white/70">{time}</p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Sitemap</h4>
            <FooterLink label="Home" href="#home" />
            <FooterLink label="About" href="#about" />
            <FooterLink label="Projects" href="#projects" />
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Socials</h4>
            <FooterLink label="LinkedIn" href="https://linkedin.com/in/ediwicoro" />
            <FooterLink label="GitHub" href="https://github.com/ediwicoro" />
            <FooterLink label="Instagram" href="https://instagram.com/ediwicoro" />
          </div>

          <div className="hidden md:block"></div>

          <div className="flex flex-col justify-end items-start md:items-end">
             <button 
               onClick={scrollToTop}
               className="group flex flex-col items-center gap-2 text-white/30 hover:text-white transition-colors"
             >
                <span className="text-[10px] uppercase tracking-widest font-bold">Back to Top</span>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white group-hover:-translate-y-2 transition-all duration-300">
                    <ArrowUp size={16} />
                </div>
             </button>
          </div>
        </div>

        {/* --- SECTION 3: BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 text-center md:text-left">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
            © {currentYear} Edi Wicoro. All Rights Reserved.
          </p>
          
          <div className="flex gap-6 justify-center md:justify-start">
            <a href="#" className="text-[10px] text-white/20 font-bold uppercase tracking-widest hover:text-white transition-colors">
                Privacy Policy
            </a>
            <a href="#" className="text-[10px] text-white/20 font-bold uppercase tracking-widest hover:text-white transition-colors">
                Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterLink({ label, href }: { label: string, href: string }) {
  return (
    <a 
      href={href} 
      target={href.startsWith("http") ? "_blank" : "_self"}
      className="group flex items-center gap-2 w-fit"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
      <ArrowUpRight 
        size={12} 
        className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
      />
    </a>
  );
}