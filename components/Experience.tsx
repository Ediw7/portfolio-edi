"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Universitas Diponegoro",
    logo: "/logos/undip.png", 
    role: "Mobile Programming Lab Assistant",
    period: "2025",
    points: [
      "Mentored students in mobile application development practices.",
      "Assisted in debugging and testing Android-based applications."
    ],
    tech: ["Android", "Kotlin", "Debugging"]
  },
  {
    id: 2,
    company: "Universitas Diponegoro",
    logo: "/logos/undip.png", 
    role: "Digital Systems Lab Assistant",
    period: "2024 - 2025",
    points: [
      "Assisted lecturers in conducting digital systems practicums.",
      "Guided students in using logic devices and circuit analysis."
    ],
    tech: ["Logic Gates", "Circuit Analysis", "Teaching"]
  },
  {
    id: 3,
    company: "PT SUCOFINDO (Semarang)",
    logo: "/logos/sucofindo.png", 
    role: "Web Developer Intern",
    period: "2024",
    points: [
      "Designed the TOR monitoring website UI using Figma.",
      "Developed the Front-End architecture for the monitoring system.",
      "Created backend Controllers to manage system logic."
    ],
    tech: ["Figma", "Front-End", "Backend Controller"]
  },
  {
    id: 4,
    company: "Higenncy",
    logo: "/logos/higenncy.png", 
    role: "Graphic Design Intern",
    period: "2023", 
    points: [
      "Created professional designs for LinkedIn content.",
      "Designed engaging visual content for Instagram feeds."
    ],
    tech: ["Social Media Design", "LinkedIn", "Instagram"]
  },
  {
    id: 5,
    company: "Higenncy (Kemenkeu Project)",
    logo: "/logos/higenncy.png", 
    role: "Email Marketing Design Intern",
    period: "2023",
    points: [
      "Designed email marketing layouts for the Ministry of Finance project.",
      "Converted visual designs into responsive email content."
    ],
    tech: ["Email Marketing", "UI Design", "Content Creation"]
  },
  {
    id: 6,
    company: "PT Digital Investa Indonesia",
    logo: "/logos/dii.png", 
    role: "Graphic Design Intern",
    period: "2022",
    points: [
      "Created illustrator content for social media feeds and stories.",
      "Conducted research and analysis on brand content strategies."
    ],
    tech: ["Adobe Illustrator", "Brand Analysis", "Content Strategy"]
  }
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-5xl mx-auto bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Work <span className="text-neutral-500 dark:text-neutral-600">Experience</span></h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          My professional journey and career milestones.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-8">
        
        {experiences.map((exp, index) => {
          const isOpen = expanded === exp.id;

          return (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* TIMELINE DOT */}
              <span className={`absolute -left-[9px] top-8 w-4 h-4 rounded-full border-4 border-white dark:border-black ring-1 transition-colors duration-300 ${
                  isOpen 
                  ? "bg-black dark:bg-white ring-black dark:ring-white" 
                  : "bg-neutral-200 dark:bg-neutral-800 ring-neutral-300 dark:ring-neutral-700"
              }`}></span>

              {/* 1. PERIODE */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2">
                 <Calendar size={12} />
                 {exp.period}
              </div>

              {/* 2. CARD INTERAKTIF (BUTTON) */}
              <button 
                onClick={() => setExpanded(isOpen ? null : exp.id)}
                // PERUBAHAN DISINI: dark:bg-black (Hitam Pekat)
                className="w-full text-left bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-white/10 rounded-2xl hover:border-neutral-300 dark:hover:border-white/30 transition-all duration-300 overflow-hidden group"
              >
                 
                 {/* HEADER CARD */}
                 <div className="p-6 md:p-8 flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Logo Container */}
                        <div className="relative w-12 h-12 bg-white dark:bg-neutral-900 p-2 rounded-xl border border-neutral-200 dark:border-white/10 flex-shrink-0">
                            <Image 
                              src={exp.logo} 
                              alt={exp.company}
                              fill
                              className="object-contain"
                            />
                        </div>
                        {/* Teks */}
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white group-hover:underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">
                              {exp.role}
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium mt-1">
                              {exp.company}
                            </p>
                        </div>
                    </div>

                    {/* Chevron Icon */}
                    <div className={`p-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 transition-transform duration-300 ${isOpen ? "rotate-180 bg-neutral-200 dark:bg-white/20" : ""}`}>
                        <ChevronDown size={20} className="text-neutral-500 dark:text-white" />
                    </div>
                 </div>

                 {/* BODY CARD */}
                 <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                           <div className="px-6 md:px-8 pb-8 pt-0 border-t border-neutral-200 dark:border-white/10 mt-2">
                              {/* Points */}
                              <ul className="list-disc list-outside ml-4 space-y-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 mt-6">
                                {exp.points.map((point, idx) => (
                                  <li key={idx}>{point}</li>
                                ))}
                              </ul>

                              {/* Tech Stack */}
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                  <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md">
                                    {t}
                                  </span>
                                ))}
                              </div>
                           </div>
                        </motion.div>
                    )}
                 </AnimatePresence>

              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}