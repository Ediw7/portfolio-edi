"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowUpRight } from "lucide-react";

const awards = [
  {
    id: 1,
    year: "2025",
    title: "PPK ORMAWA Funding Grant",
    organization: "Ministry of Education (Kemdikbud)",
    description: "Secured funding for village digitalization: Developed a village website and created branding/packaging for local MSMEs."
  },
  {
    id: 2,
    year: "2025",
    title: "3rd Place Web Development",
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
  return (
    <section id="awards" className="py-24 px-4 md:px-8 max-w-5xl mx-auto bg-black text-white">
      
      {/* Header Minimalist */}
      <div className="mb-12 border-b border-neutral-800 pb-4 flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Awards & Achievements</h2>
        <Trophy size={24} className="text-neutral-600" />
      </div>

      {/* List Layout */}
      <div className="flex flex-col">
        {awards.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group border-b border-neutral-800 last:border-none py-8 flex flex-col md:flex-row gap-4 md:gap-12 hover:bg-neutral-900/20 transition-colors px-2 rounded-lg"
          >
            
            {/* Kolom Tahun */}
            <div className="md:w-32 flex-shrink-0">
               <span className="text-sm font-mono text-neutral-500 font-bold tracking-widest border border-neutral-800 px-2 py-1 rounded">
                 {item.year}
               </span>
            </div>

            {/* Kolom Konten */}
            <div className="flex-grow">
               <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight size={18} className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
               </div>
               
               <p className="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-3">
                 {item.organization}
               </p>
               
               <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
                 {item.description}
               </p>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}