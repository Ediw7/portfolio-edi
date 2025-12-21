"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const awards = [
  {
    id: 1,
    year: "2025",
    title: "PPK ORMAWA Program Grant",
    organization: "Ministry of Education",
    description: "Secured funding for village digitalization and branding development."
  },
  {
    id: 2,
    year: "2025",
    title: "3rd Place Web Dev",
    organization: "Silogy Expo",
    description: "National level web development competition creating innovative solutions."
  },
  {
    id: 3,
    year: "2025",
    title: "Finalist Web Design",
    organization: "Techomfest",
    description: "Competed in UI/UX design challenges focusing on user-centric interfaces."
  },
  {
    id: 4,
    year: "2024",
    title: "Finalist Web Design",
    organization: "Techomfest",
    description: "Selected as a finalist in a national web design competition."
  }
];

export default function Awards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    /* 1. LAYER WARNA: Full width ke samping agar background putih/hitam tidak terputus */
    <section id="awards" className="w-full bg-white dark:bg-black transition-colors duration-300">
      
      {/* 2. LAYER KONTEN: Menjaga isi tetap di tengah (Max Width) */}
      <div className="py-32 px-4 md:px-8 max-w-7xl mx-auto text-neutral-900 dark:text-white">

        {/* HEADER */}
        <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-neutral-200 dark:border-white/10 pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">Awards<span className="text-red-600">.</span></h2>
            <span className="text-xl md:text-2xl text-neutral-400 dark:text-neutral-500 font-light italic tracking-wide">
              & Achievements
            </span>
          </div>
        </div>

        {/* LIST AWARDS */}
        <div className="flex flex-col">
          {awards.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-b border-neutral-200 dark:border-white/10 py-10 md:py-12 cursor-default transition-colors duration-500 hover:bg-neutral-50 dark:hover:bg-neutral-900/20"
            >
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12 relative z-10 px-2">
                
                {/* Organisasi & Tahun */}
                <div className="md:w-1/4 flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    {item.organization}
                  </span>
                  <span className="text-sm font-mono text-neutral-500">
                    {item.year}
                  </span>
                </div>

                {/* Judul & Deskripsi */}
                <div className="md:w-2/4">
                   <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 leading-tight">
                     {item.title}
                   </h3>
    
                   <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hovered === item.id ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                      <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                   </div>
                </div>

                {/* Arrow Icon */}
                <div className="md:w-1/4 flex justify-start md:justify-end items-center">
                   <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:border-transparent transition-all duration-300">
                      <ArrowUpRight 
                        size={20} 
                        className="text-neutral-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300" 
                      />
                   </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}