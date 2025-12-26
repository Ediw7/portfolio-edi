"use client";
import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { 
  MapPin, Link as LinkIcon, Zap, Heart, 
  Linkedin, Instagram, Github, Atom, GitCommitHorizontal, 
  ArrowUpRight, Loader2 
} from "lucide-react";


const StackIconsRow1 = memo(() => (
  <div className="flex items-center gap-12 mx-4"> 
      <TechImage src="/hyper1.png" alt="Hyperledger" />
      <TechImage src="/next1.png" alt="Next.js" />
      <TechImage src="/reactjs.png" alt="React" />
      <TechImage src="/type1.png" alt="TypeScript" />
      <TechImage src="/node.png" alt="Node.js" />
      <TechImage src="/java.png" alt="Java" />
  </div>
));

const StackIconsRow2 = memo(() => (
  <div className="flex items-center gap-12 mx-4"> 
      <TechImage src="/mongo.png" alt="MongoDB" />
      <TechImage src="/mysql.png" alt="MySql" />
      <TechImage src="/tail.png" alt="Tailwind" />
      <TechImage src="/ci.png" alt="Codeigniter" />
      <TechImage src="/laravel.png" alt="Laravel" />
      <TechImage src="/figma.png" alt="Figma" />
  </div>
));

export default function About() {
  const [contributions, setContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const controller = new AbortController();
    
    fetch('https://github-contributions-api.jogruber.de/v4/Ediw7?y=last', { signal: controller.signal })
      .then(response => response.json())
      .then(data => {
        if (data?.total) {
            setContributions(data.total.lastYear || 0);
        }
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setContributions(400);
          setLoading(false);
        }
      });
      
    return () => controller.abort();
  }, []);

  return (
    <section id="about" className="w-full bg-white dark:bg-black transition-colors duration-300">
      <div className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto text-black dark:text-white">
          
          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24 items-end border-b border-black/10 dark:border-white/10 pb-12">
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
                I&apos;m <strong className="text-black dark:text-white font-medium">Edi Wicoro</strong>, a Computer Engineering Undergraduate at Universitas Diponegoro.
              </p>
              <p>
                Specializing in <span className="underline decoration-1 underline-offset-4">Fullstack Development</span> & <span className="underline decoration-1 underline-offset-4">Blockchain</span>.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-8 pl-6 border-l-2 border-red-600">
                  <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">University</h3>
                      <p className="font-medium text-sm md:text-base">Universitas Diponegoro</p>
                  </div>
                  <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">High School</h3>
                      <p className="font-medium text-sm md:text-base">SMK N 1 Batang</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[auto] md:auto-rows-[240px]">
           
           
            <div className="md:col-span-4 min-h-[300px] md:min-h-0 relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2rem] overflow-hidden group">
              <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
                 <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 dark:border-white/10 flex items-center gap-2">
                    <MapPin size={14} className="text-red-600 fill-red-600" />
                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Semarang, Central Java</span>
                 </div>
              </div>
          
              <div className="absolute inset-0 w-full h-full">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d110.3470241!3d-7.0157404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b494639e31d%3A0xc3f8376d4705572e!2sSemarang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale dark:invert-[.9] contrast-125 opacity-50 dark:opacity-40"
                 ></iframe>
              </div>
            </div>

            {/* SOCIAL CARD */}
            <div className="md:col-span-2 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:border-black/30 dark:hover:border-white/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <LinkIcon size={16} className="text-black/50 dark:text-white/50" />
                    <span className="text-xs font-bold uppercase tracking-widest">Connect</span>
                </div>
              </div>
              <div className="space-y-2">
                 <SocialRow icon={<Github size={18}/>} label="GitHub" href="https://github.com/Ediw7" />
                 <SocialRow icon={<Linkedin size={18}/>} label="LinkedIn" href="https://www.linkedin.com/in/edi-wicoro-300178371/" />
                 <SocialRow icon={<Instagram size={18}/>} label="Instagram" href="https://www.instagram.com/ediwicoro07/" />
              </div>
            </div>

           
            <div className="md:col-span-4 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-[2rem] p-6 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                <Zap size={16} className="text-black/50 dark:text-white/50" />
                <span className="text-xs font-bold uppercase tracking-widest">Tech Stack</span>
              </div>
              <div className="w-full mt-12 relative z-10 flex flex-col gap-1">
                <div className="flex animate-marquee gap-10 items-center w-max will-change-transform">
                  <StackIconsRow1 />
                  <StackIconsRow1 /> 
                </div>
                <div className="flex animate-marquee-reverse gap-10 items-center w-max -mt-6 will-change-transform">
                  <StackIconsRow2 />
                  <StackIconsRow2 /> 
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />
            </div>
              
            {/* CONTRIBUTIONS CARD */}
            <div className="md:col-span-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-[2rem] p-6 flex flex-col justify-between transition-all">
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
                        <span className="text-4xl lg:text-6xl font-bold tracking-tighter">
                            {contributions}<span className="text-red-600 text-2xl align-top">+</span>
                        </span>
                    )}
                    <p className="text-[10px] text-black/40 dark:text-white/40 mt-1 uppercase tracking-widest">Contributions</p>
                </div>
            </div>

            {/* CORE CARD */}
            <div className="md:col-span-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-[2rem] p-6 flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="relative z-10 w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center transition-transform duration-500">
                    <Atom size={32} className="text-black dark:text-white animate-spin-slow" />
                 </div>
                 <p className="absolute bottom-6 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Favorite</p>
            </div>
          </div>
      </div>
    </section>
  );
}


function SocialRow({ icon, label, href }: { icon: any, label: string, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3 text-black/70 dark:text-white/70">
                {icon}
                <span className="text-sm font-medium">{label}</span>
            </div>
            <ArrowUpRight size={14} className="text-black/40 dark:text-white/40" />
        </a>
    )
}

function TechImage({ src, alt }: { src: string, alt: string }) {
    return (
        <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center flex-shrink-0"> 
            <Image 
                src={src}   
                alt={alt}       
                width={64}         
                height={64}        
                className="object-contain brightness-0 dark:invert opacity-60 dark:opacity-80 transition-opacity" 
                loading="lazy"
            />
        </div>
    )
}