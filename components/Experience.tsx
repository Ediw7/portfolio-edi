"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Tech Innovators Co.",
    role: "Full Stack Engineer",
    period: "JAN 2024 - PRESENT",
    description: "Memimpin pengembangan aplikasi berbasis blockchain dan mengoptimalkan performa frontend menggunakan Next.js.",
    skills: ["NEXT.JS", "SOLIDITY", "TYPESCRIPT"]
  },
  {
    id: 2,
    company: "Creative Digital Agency",
    role: "Frontend Developer",
    period: "JUN 2022 - DEC 2023",
    description: "Membangun antarmuka pengguna yang responsif dan performan tinggi untuk berbagai klien digital.",
    skills: ["REACT", "TAILWIND CSS", "GSAP"]
  }
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto bg-black text-white">
      <h2 className="text-4xl font-bold italic mb-16 tracking-tighter uppercase">Experience</h2>
      
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden">
            <button 
              onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-lg">
                  {exp.company[0]}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-white/40 text-sm font-medium uppercase tracking-widest">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden md:block text-[10px] font-bold text-white/30 tracking-[0.2em]">{exp.period}</span>
                <ChevronDown className={`transition-transform duration-300 ${expanded === exp.id ? 'rotate-180' : ''}`} size={18} />
              </div>
            </button>

            <AnimatePresence>
              {expanded === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="px-8 pb-8 pt-2 border-t border-white/5 md:ml-20">
                    <p className="text-white/60 leading-relaxed mb-6 italic">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(s => (
                        <span key={s} className="px-3 py-1 bg-white/5 rounded-md text-[9px] font-bold tracking-widest text-white/40 border border-white/10 italic">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}