"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (

    <footer id="contact" className="relative w-full bg-black text-white px-6 md:px-24 py-24 border-t border-white/5 overflow-visible">

      <div className="absolute top-[-300px] inset-x-0 bottom-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BAGIAN ATAS: CTA CONTACT */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8] mb-8 italic">
              Let's work <br /> together
            </h2>
            <p className="text-white/40 text-lg md:text-xl max-w-md italic leading-relaxed">
              I'm currently available for freelance work and full-time positions. 
              Have a project in mind? Let's get in touch.
            </p>
          </div>
          
          <a 
            href="mailto:ediwicoro26@gmail.com"
            className="group flex items-center gap-3 bg-white text-black px-12 py-6 rounded-full font-bold text-xs tracking-[0.2em] uppercase transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
          >
            Email Me <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* BAGIAN TENGAH: GRID NAVIGASI (Sesuaikan teks dengan Nelson Lai) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-16">
          <div className="flex flex-col gap-4">
            <FooterLink label="Home" href="/" />
            <FooterLink label="project" href="#" />
            <FooterLink label="About" href="#about" />
          </div>

          <div className="flex flex-col gap-4">
            <FooterLink label="Experience" href="#" />
            <FooterLink label="Award" href="#" />
            <FooterLink label="Contact" href="#works" />
          </div>

          <div className="flex flex-col gap-4 invisible md:visible">
            {/* Kolom kosong untuk spacing seperti referensi */}
          </div>

          <div className="flex flex-col gap-4">
            <FooterLink label="Facebook" href="#" />
            <FooterLink label="Instagram" href="#" />
            <FooterLink label="GitHub" href="#" />
          </div>
        </div>

        {/* BAGIAN BAWAH: COPYRIGHT & STAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 border-t border-white/5 gap-8">
          <div className="space-y-4">
            <div className="flex gap-6 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
            </div>
            <p className="text-sm text-white/20 font-medium tracking-tight">
              © {currentYear} Edi Wicoro 
            </p>
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
      className="text-sm font-medium text-white/30 hover:text-white transition-colors duration-300 w-fit"
    >
      {label}
    </a>
  );
}