"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { 
      title: "ResQ Platform", 
      tech: ["React", "Node.js"], 
      desc: "A digital platform for disaster management and mutual cooperation relief distribution.",
      image: "/biofun.png", 
      link: "https://resq.id"
    },
    { 
      title: "Medisync Chain", 
      tech: ["Blockchain", "Fabric"], 
      desc: "Blockchain-based pharmaceutical supply chain tracking system ensuring data integrity.",
      image: "/biofun.png",
      link: "https://medisync.io"
    },
    { 
      title: "Hotel Tonight", 
      tech: ["Next.js", "Supabase"], 
      desc: "Hotel booking application with real-time availability and secure payment gateway.",
      image: "/biofun.png",
      link: "https://hoteltonight.com"
    },
    { 
      title: "Biofun App", 
      tech: ["Flutter", "Firebase"], 
      desc: "Modern social media app focusing on privacy and community-driven content.",
      image: "/biofun.png",
      link: "https://biofun.app"
    },
    { 
      title: "Crypto DEX", 
      tech: ["Solidity", "Web3"], 
      desc: "Decentralized exchange interface allowing seamless token swaps on Ethereum network.",
      image: "/biofun.png",
      link: "https://dex.finance"
    },
    { 
      title: "E-Commerce API", 
      tech: ["MERN", "Redis"], 
      desc: "Robust backend API handling inventory, user auth, and transaction processing.",
      image: "/biofun.png",
      link: "https://shop-api.store"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 max-w-7xl mx-auto bg-black">
      
      {/* HEADER SECTION */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Selected <span className="text-neutral-600">Projects</span></h2>
        <p className="text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed">
          A showcase of technical explorations and deployed applications.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
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
      className="group flex flex-col w-full bg-[#00000] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      
      {/* BAGIAN GAMBAR */}
      <div className="relative h-48 w-full bg-neutral-900 overflow-hidden border-b border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          // LOGIKA VISUAL BARU:
          // Mobile (Default): Opacity 100 (Jelas), Grayscale 0 (Berwarna).
          // Desktop (md:): Opacity 60 (Agak gelap), Grayscale (Hitam putih). Pas hover baru berwarna.
          className="object-cover transition-all duration-500 
                     opacity-100 grayscale-0 
                     md:opacity-60 md:grayscale 
                     md:group-hover:opacity-100 md:group-hover:grayscale-0 
                     md:group-hover:scale-105"
        />
        
        {/* Overlay hitam tipis (hanya di Desktop biar text kebaca kalau gambar terang banget) */}
        <div className="absolute inset-0 bg-black/10 md:bg-black/20" />
        
        {/* Icon Panah (Selalu muncul di mobile, transparan di desktop) */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 
                        opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
           <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* BAGIAN KONTEN */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight md:group-hover:underline decoration-white/30 underline-offset-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
          {desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {tech.map((item: string, idx: number) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-[10px] md:text-xs font-medium text-neutral-300 bg-neutral-900 border border-white/10 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </motion.a>
  );
}