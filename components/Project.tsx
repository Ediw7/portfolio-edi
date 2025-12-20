"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette } from "lucide-react"; // Saya tambah icon Palette biar keren
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
    // SECTION: Support Light (Putih) & Dark (Hitam)
    <section id="projects" className="py-20 px-4 md:px-6 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-300">
      
      {/* HEADER SECTION */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
          Selected <span className="text-neutral-500 dark:text-neutral-600">Projects</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed">
          A showcase of technical explorations and deployed applications.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      {/* --- TOMBOL SEE DESIGN PROJECT (BARU) --- */}
      <div className="mt-16 flex justify-center">
        <a 
          href="https://drive.google.com/file/d/16_M-3ucgVcpepbBtYMI7neLaeBInIuJ5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300"
        >
          <Palette size={18} className="text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
          <span className="text-sm font-bold text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
            See Design Projects
          </span>
          <ArrowUpRight size={16} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
      whileHover={{ y: -4 }}
      // CARD STYLE: Support Light & Dark
      className="group flex flex-col w-full bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300"
    >
      
      {/* BAGIAN GAMBAR */}
      <div className="relative h-48 w-full bg-neutral-200 dark:bg-neutral-900 overflow-hidden border-b border-neutral-200 dark:border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 
                     opacity-100 grayscale-0 
                     md:opacity-60 md:grayscale 
                     md:group-hover:opacity-100 md:group-hover:grayscale-0 
                     md:group-hover:scale-105"
        />
        
        {/* Overlay hitam tipis (Desktop Dark Mode) */}
        <div className="absolute inset-0 bg-black/5 md:bg-black/10 dark:md:bg-black/20" />
        
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 
                        opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
           <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* BAGIAN KONTEN */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        
        <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight md:group-hover:underline decoration-neutral-400 dark:decoration-white/30 underline-offset-4">
          {title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
          {desc}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {tech.map((item: string, idx: number) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-[10px] md:text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </motion.a>
  );
}