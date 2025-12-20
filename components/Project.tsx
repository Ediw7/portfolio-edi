"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Layers } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { 
      title: "Medisync", 
      tech: ["Hyperledger Fabric", "React.js", "Node.js"], 
      desc: "MediSync is a blockchain-based platform for secure and transparent pharmaceutical supply chains.",
      image: "/medisync.png", 
      link: "https://github.com/Ediw7/medisync-project"
    },
    { 
      title: "ResQ", 
      tech: ["Next.js", "MongoDb"], 
      desc: "ResQ is a community-driven disaster reporting platform that enables real-time information sharing and emergency coordination.",
      image: "/resq.jpeg",
      link: "https://res-q-neon-six.vercel.app/"
    },
    { 
      title: "Taniku", 
      tech: ["React.js", "Supabase"], 
      desc: "Taniku is a digital platform connecting farmers and government agencies to support agricultural data, coordination, and services.",
      image: "/taniku.jpg",
      link: "https://taniku.vercel.app/"
    },
    { 
      title: "River Clean", 
      tech: ["React.js", "Supabase"], 
      desc: "RiverClean is a website for campaigns and education on river conservation and environmental awareness.",
      image: "/river.jpg",
      link: "https://river-clean.vercel.app/"
    },
     { 
      title: "Biofun", 
      tech: ["React.js"], 
      desc: "BIOFUN is an interactive e-learning platform designed to make biology learning engaging and accessible.",
      image: "/biofun.png",
      link: "https://biofun.vercel.app/"
    },
    { 
      title: "Kampung Kreatif", 
      tech: ["HTML", "CSS", "JS"], 
      desc: "KAMPUNG KREATIF is a promotional and information website showcasing local tourism villages and cultural experiences.",
      image: "/kampungKreatif.jpg",
      link: "https://kampungkreatif.netlify.app/e"
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 md:px-8 max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
      {/* HEADER: MEGAH & PREMIUM */}
      <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">Selected</h2>
          <span className="text-xl md:text-2xl text-black/60 dark:text-white/60 font-light italic tracking-wide">
            Projects & Innovations
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm font-mono text-black/50 dark:text-white/50 uppercase tracking-widest mt-4 md:mt-0">
          <Layers size={16} />
          <span>Portfolio</span>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      {/* --- TOMBOL SEE DESIGN PROJECT --- */}
      <div className="mt-20 flex justify-center">
        <a 
          href="https://drive.google.com/file/d/16_M-3ucgVcpepbBtYMI7neLaeBInIuJ5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 bg-transparent"
        >
          <Palette size={18} className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors" />
          <span className="text-sm font-bold uppercase tracking-widest text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors">
            See Design Projects
          </span>
          <ArrowUpRight size={16} className="text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>

    </section>
  );
}

function ProjectCard({ title, tech, desc, image, link }: any) {
  return (
    <motion.a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      className="group flex flex-col w-full h-full rounded-3xl overflow-hidden transition-all duration-500
                 bg-white dark:bg-black
                 border border-black/5 dark:border-white/5
                 hover:border-black dark:hover:border-white
                 hover:shadow-2xl"
    >
      
      {/* BAGIAN GAMBAR */}
      <div className="relative h-64 w-full bg-black/5 dark:bg-white/5 overflow-hidden border-b border-black/5 dark:border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          // PERBAIKAN LOGIKA WARNA (MOBILE VS DESKTOP)
          className="object-cover transition-all duration-700 
                     grayscale-0 md:grayscale             /* Mobile: Warna, Desktop: BW */
                     md:group-hover:grayscale-0           /* Desktop Hover: Jadi Warna */
                     scale-100 group-hover:scale-110"
        />
        
        {/* Overlay hitam tipis (Hanya muncul di Desktop saat diam, biar teks kontras kalau gambar terang) */}
        <div className="hidden md:block absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:opacity-0" />
        
        {/* Icon Panah Pojok (Selalu muncul di mobile, transparan di desktop) */}
        <div className="absolute top-4 right-4 bg-white dark:bg-black p-3 rounded-full border border-black/10 dark:border-white/10 
                        opacity-100 md:opacity-0 md:translate-y-2 
                        md:group-hover:opacity-100 md:group-hover:translate-y-0 
                        transition-all duration-500 z-10 shadow-lg">
           <ArrowUpRight className="w-4 h-4 text-black dark:text-white" />
        </div>
      </div>

      {/* BAGIAN KONTEN */}
      <div className="p-8 flex flex-col flex-grow">
        
        {/* Title & Desc */}
        <div className="mb-6">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3 tracking-tight leading-tight group-hover:underline decoration-1 underline-offset-4">
            {title}
            </h3>
            <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed line-clamp-3 font-medium">
            {desc}
            </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {tech.map((item: string, idx: number) => (
            <span 
              key={idx} 
              className="px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold 
                         text-black/70 dark:text-white/70 
                         border border-black/10 dark:border-white/10 rounded-lg
                         group-hover:border-black/30 dark:group-hover:border-white/30 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </motion.a>
  );
}