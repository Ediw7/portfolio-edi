"use client";
import React from "react";
import { 
  MapPin, Link as LinkIcon, Zap, GraduationCap, Heart, 
  Linkedin, Instagram, Mail, Github, Atom, Database, Server, Code2, Globe, Box, Cpu, Terminal, Twitter, Youtube
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-black text-white">
      
      {/* --- HEADER SECTION --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">About <span className="text-neutral-600">Me</span></h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed font-light text-lg">
            <p>
              Hi, I'm <strong className="text-red-600 font-bold">Edi Wicoro</strong>. I am an Undergraduate Computer Engineering student at <span className="text-white">Universitas Diponegoro</span>.
            </p>
            <p>
              I specialize in <span className="text-white">Fullstack Development</span> and have a growing passion for <span className="text-red-600 font-medium">Blockchain Technology</span>. I love building interfaces that are not just functional, but also visually compelling.
            </p>
          </div>
        </div>

        <div className="space-y-8 pt-2">
            {/* Education Block */}
            <div className="border-l-2 border-neutral-800 pl-6 hover:border-red-600 transition-colors duration-500">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Education</h3>
                <h4 className="text-xl font-medium text-white">Universitas Diponegoro</h4>
                <div className="flex justify-between items-center mt-1 max-w-xs">
                    <p className="text-neutral-500 text-sm">Computer Engineering</p>
                    <span className="text-xs font-mono text-red-500 bg-red-500/10 px-2 py-0.5 rounded">3.85 GPA</span>
                </div>
            </div>

            {/* Experience Block */}
            <div className="border-l-2 border-neutral-800 pl-6 hover:border-red-600 transition-colors duration-500">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Current Focus</h3>
                <p className="text-neutral-400 text-sm">
                   Exploring <span className="text-white">Hyperledger Fabric</span> for secure supply chain systems and refining my <span className="text-white">React & Next.js</span> craft.
                </p>
            </div>
        </div>
      </div>

      {/* --- BENTO GRID LAYOUT --- */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
        
        {/* 1. MAP CARD (GOOGLE MAPS DARK MODE) */}
        <div className="md:col-span-4 relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden group">
          {/* Label Lokasi */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <MapPin size={14} className="text-red-500" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-white">Semarang, ID</span>
          </div>
          
          {/* GOOGLE MAPS EMBED */}
          <div className="absolute inset-0 w-full h-full grayscale invert brightness-[0.7] contrast-[1.2]">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.79607415466!2d110.3360214041697!3d-6.990398863659426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b98923a50!2sSemarang%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1709999999999!5m2!1sen!2sid" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               className="opacity-60 hover:opacity-100 transition-opacity duration-700"
             ></iframe>
          </div>

          {/* Overlay Gradient (Biar pinggiran peta nyatu sama kartu) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />

          {/* Radar Animation (Hiasan di tengah) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
             <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,1)] z-10" />
                <div className="absolute w-12 h-12 bg-red-600/30 rounded-full animate-ping" />
             </div>
          </div>
        </div>

        {/* 2. CONNECT CARD */}
        <div className="md:col-span-2 bg-[#000000] border border-white/10 rounded-[2rem] p-6 flex flex-col justify-center group hover:border-white/20 transition-colors">
          <div className="flex items-center gap-2 text-neutral-500 mb-6">
            <LinkIcon size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Connect</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
             <SocialRow icon={<Github size={18}/>} label="GitHub" href="https://github.com/Ediw7" />
             <SocialRow icon={<Linkedin size={18}/>} label="LinkedIn" href="https://www.linkedin.com/in/edi-wicoro-300178371/" />
             <SocialRow icon={<Instagram size={18}/>} label="Instagram" href="https://www.instagram.com/ediwicoro07/" />
            </div>
        </div>

        {/* 3. STACKS CARD (MARQUEE ANIMATION) */}
      {/* STACKS CARD (MARQUEE ANIMATION) */}
<div className="md:col-span-4 bg-[#000000] border border-white/10 rounded-[2rem] p-6 flex flex-col justify-center relative overflow-hidden group hover:border-white/20 transition-colors">
  <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
    <Zap size={16} className="text-neutral-500" />
    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Stacks</span>
  </div>

  {/* Container marquee */}
  <div className="w-full mt-12 relative overflow-hidden">
    <div className="flex animate-marquee gap-12 items-center">
      {/* Hanya perlu 2 set identik untuk infinite loop sempurna */}
      <StackIcons />
      <StackIcons />
    </div>

    {/* Fade kiri-kanan supaya mulus */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
  </div>
</div>
        {/* 4. STATS CARD */}
        <div className="md:col-span-1 bg-[#000000] border border-white/10 rounded-[2rem] p-6 flex flex-col justify-between hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 text-neutral-500">
                <GraduationCap size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">GPA</span>
            </div>
            <div>
                <span className="text-4xl lg:text-5xl font-medium tracking-tighter text-white">3.85</span>
            </div>
        </div>

        {/* 5. FAV FRAMEWORK */}
        <div className="md:col-span-1 bg-[#000000] border border-white/10 rounded-[2rem] p-6 flex flex-col items-center justify-center relative group hover:border-white/20 transition-colors">
             <div className="absolute top-6 left-6 w-full text-left">
                <div className="flex items-center gap-2 text-neutral-500">
                    <Heart size={16} />
                </div>
             </div>
             <div className="mt-4 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Atom size={32} className="text-white animate-spin-slow" />
             </div>
             <p className="absolute bottom-6 text-[10px] font-bold uppercase tracking-widest text-neutral-500">React</p>
        </div>

      </div>
    </section>
  );
}

// --- SUB COMPONENTS ---

function SocialRow({ icon, label, href }: { icon: any, label: string, href: string }) {
    return (
        <a href={href} target="_blank" className="flex items-center gap-3 group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </a>
    )
}

function StackIcons() {
    return (
        <div className="flex items-center gap-12 mx-4 text-neutral-400">
            {/* Ganti dengan <img src="..."/> jika punya file SVG logo */}
            <Atom size={32} className="hover:text-white transition-colors" />
            <Globe size={32} className="hover:text-white transition-colors" />
            <Database size={32} className="hover:text-white transition-colors" />
            <Server size={32} className="hover:text-white transition-colors" />
            <Code2 size={32} className="hover:text-white transition-colors" />
            <Box size={32} className="hover:text-white transition-colors" />
            <Cpu size={32} className="hover:text-white transition-colors" />
            <Terminal size={32} className="hover:text-white transition-colors" />
        </div>
    );
}