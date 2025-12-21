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
      link: "https://kampungkreatif.netlify.app/"
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 md:px-8 max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
    
      <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">Selected<span className="text-red-600">.</span></h2>
          <span className="text-xl md:text-2xl text-black/60 dark:text-white/60 font-light italic tracking-wide">
            Projects & Innovations
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm font-mono text-black/50 dark:text-white/50 uppercase tracking-widest mt-4 md:mt-0">
          <Layers size={16} />
          <span>Portfolio</span>
        </div>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

     {/* --- TOMBOL SEE DESIGN PROJECT (RED EDITION) --- */}
      <div className="mt-20 flex justify-center">
        <a 
          href="https://drive.google.com/file/d/16_M-3ucgVcpepbBtYMI7neLaeBInIuJ5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full 
                     bg-red-600 text-white border border-red-600
                     hover:bg-red-700 hover:scale-105 
                     shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]
                     transition-all duration-300"
        >
          {/* Icon Palette */}
          <Palette size={18} className="text-white group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Teks */}
          <span className="text-sm font-bold uppercase tracking-widest text-white">
            See Design Projects
          </span>
          
          {/* Panah */}
          <ArrowUpRight size={16} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
          // HAPUS LOGIKA GRAYSCALE
          // Gambar selalu berwarna (grayscale-0) dan hanya ada efek zoom saat hover
          className="object-cover transition-all duration-700 
                     scale-100 group-hover:scale-110"
        />
        
        {/* Overlay hitam tipis dihapus saja karena gambar sudah berwarna & jelas */}
        {/* <div className="hidden md:block absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:opacity-0" /> */}
        
        {/* Icon Panah Pojok (Tetap muncul saat hover di desktop agar interaktif) */}
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
