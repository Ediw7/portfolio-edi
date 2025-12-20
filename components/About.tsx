"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  MapPin, Link as LinkIcon, Zap, GraduationCap, Heart, 
  Linkedin, Instagram, Github, Atom, GitCommitHorizontal, 
  ArrowUpRight, Loader2 
} from "lucide-react";

export default function About() {
  const [contributions, setContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/Ediw7?y=last')
      .then(response => response.json())
      .then(data => {
        if (data && data.total) {
            setContributions(data.total.lastYear || 0);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal mengambil data GitHub:", err);
        setContributions(400);
        setLoading(false);
      });
  }, []);

  return (
    <section id="about" className="py-32 px-4 md:px-8 max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
      {/* HEADER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end border-b border-black/10 dark:border-white/10 pb-12">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            About <br />
            <span className="text-black/30 dark:text-white/30 italic font-serif">
              Myself<span className="text-red-600 not-italic">.</span>
            </span>
          </h2>
        </div>
        
        <div className="space-y-6 text-lg font-light leading-relaxed text-black/70 dark:text-white/70">
          <p>
            I'm <strong className="text-black dark:text-white font-medium">Edi Wicoro</strong>, a Computer Engineering Undergraduate at Universitas Diponegoro.
          </p>
          <p>
            Specializing in <span className="underline decoration-1 underline-offset-4 decoration-black/30 dark:decoration-white/30">Fullstack Development</span> & <span className="underline decoration-1 underline-offset-4 decoration-black/30 dark:decoration-white/30">Blockchain</span>. I obsess over pixel-perfect interfaces and secure decentralized systems.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-8 pl-6 border-l-2 border-red-600">
              <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">Education</h3>
                  <p className="font-medium text-black dark:text-white">Universitas Diponegoro</p>
                  <p className="text-sm text-black/50 dark:text-white/50">Computer Engineering</p>
              </div>
          </div>
        </div>
      </div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[240px]">
        
        {/* MAP CARD */}
        <div className="md:col-span-4 relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2rem] overflow-hidden group">
          <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
             <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 dark:border-white/10 flex items-center gap-2 shadow-xl">
                <MapPin size={14} className="text-red-600 fill-red-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">Semarang, ID</span>
             </div>
          </div>
      
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
             <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,1)] relative z-10" />
             <div className="absolute w-12 h-12 bg-red-600/20 rounded-full animate-ping" />
             <div className="absolute w-32 h-32 border border-red-600/10 rounded-full" />
          </div>
        
          <div className="absolute inset-0 w-full h-full pointer-events-none">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6385794719054!2d110.41738737593162!3d-7.051677692950558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708be9c2049b13%3A0x6764549ed0a0307f!2sUniversitas%20Diponegoro!5e0!3m2!1sen!2sid!4v1709230000000!5m2!1sen!2sid"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               className="w-full h-full grayscale invert-[.85] contrast-125 opacity-60"
             ></iframe>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_100%)] dark:bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,1)_100%)] pointer-events-none" />
        </div>

        {/* SOCIAL CARD */}
        <div className="md:col-span-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-black/30 dark:hover:border-white/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
                <LinkIcon size={16} className="text-black/50 dark:text-white/50" />
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50">Connect</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/10 group-hover:bg-black dark:group-hover:bg-white transition-colors" />
          </div>

          <div className="space-y-2">
             <SocialRow icon={<Github size={18}/>} label="GitHub" href="https://github.com/Ediw7" />
             <SocialRow icon={<Linkedin size={18}/>} label="LinkedIn" href="https://www.linkedin.com/in/edi-wicoro-300178371/" />
             <SocialRow icon={<Instagram size={18}/>} label="Instagram" href="https://www.instagram.com/ediwicoro07/" />
          </div>
        </div>

        <div className="md:col-span-4 bg-black dark:bg-white border border-black/10 dark:border-white/10 rounded-[2rem] p-6 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-black dark:bg-neutral-100 transition-colors duration-300" />
          
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
            <Zap size={16} className="text-white/50 dark:text-black/50" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 dark:text-black/50">Tech Stack</span>
          </div>

     
          <div className="w-full mt-12 relative z-10 flex flex-col gap-1">
            
            {/* ROW 1 */}
            <div className="flex animate-marquee gap-10 items-center w-max">
              <StackIconsRow1 />
              <StackIconsRow1 /> 
            </div>

            {/* ROW 2 */}
<div className="flex animate-marquee-reverse gap-10 items-center w-max -mt-6">
              <StackIconsRow2 />
              <StackIconsRow2 /> 
            </div>

          </div>
          
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black dark:from-neutral-100 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black dark:from-neutral-100 to-transparent z-10" />
        </div>
          
        {/* CONTRIBUTIONS CARD */}
        <div className="md:col-span-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-[2rem] p-6 flex flex-col justify-between group hover:border-black/30 dark:hover:border-white/30 transition-all">
            <div className="flex items-center gap-2 text-black/40 dark:text-white/40">
                <GitCommitHorizontal size={16} /> 
                <span className="text-[10px] font-bold uppercase tracking-widest">Last Year</span>
            </div>
            <div className="text-right">
                {loading ? (
                    <div className="flex justify-end">
                        <Loader2 size={32} className="animate-spin text-black/20 dark:text-white/20" />
                    </div>
                ) : (
                    <span className="text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white">
                        {contributions}
                        <span className="text-red-600 text-3xl align-top">+</span>
                    </span>
                )}
                <p className="text-[10px] text-black/40 dark:text-white/40 mt-1 uppercase tracking-widest">
                    Contributions
                </p>
            </div>
        </div>

        {/* CORE CARD */}
        <div className="md:col-span-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-[2rem] p-6 flex flex-col items-center justify-center relative group hover:border-black/30 dark:hover:border-white/30 transition-all overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

             <div className="relative z-10 mt-2 w-20 h-20 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Atom size={40} className="text-black dark:text-white animate-spin-slow" />
             </div>
             
             <div className="absolute top-6 left-6">
                <Heart size={16} className="text-black/40 dark:text-white/40" />
             </div>
             <p className="absolute bottom-6 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Favorite</p>
        </div>

      </div>
    </section>
  );
}


function SocialRow({ icon, label, href }: { icon: any, label: string, href: string }) {
    return (
        <a href={href} target="_blank" className="flex items-center justify-between p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 group transition-colors">
            <div className="flex items-center gap-3 text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white">
                {icon}
                <span className="text-sm font-medium">{label}</span>
            </div>
            <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-black/40 dark:text-white/40" />
        </a>
    )
}


function StackIconsRow1() {
    return (
        <div className="flex items-center gap-12 mx-4"> 
            <TechImage src="/hyper1.png" alt="Hyperledger" />
            <TechImage src="/next1.png" alt="Next.js" />
            <TechImage src="/reactjs.png" alt="React" />
            <TechImage src="/type1.png" alt="TypeScript" />
            <TechImage src="/hyper1.png" alt="Hyperledger" />
        </div>
    );
}


function StackIconsRow2() {
    return (
        <div className="flex items-center gap-12 mx-4"> 
            <TechImage src="/mongo.png" alt="MongoDB" />
            <TechImage src="/mysql.png" alt="MySql" />
            <TechImage src="/tail.png" alt="Tailwind" />
            <TechImage src="/mongo.png" alt="MongoDB" /> 
            <TechImage src="/mysql.png" alt="MySql" />
        </div>
    );
}

function TechImage({ src, alt }: { src: string, alt: string }) {
    return (

        <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0"> 
            <Image 
                src={src}   
                alt={alt}       
                width={96}         
                height={96}        
                className="object-contain 
                           brightness-0      
                           invert            
                           dark:invert-0     
                           opacity-60 hover:opacity-100 transition-opacity duration-300" 
            />
        </div>
    )
}