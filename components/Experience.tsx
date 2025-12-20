"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import Image from "next/image"; // IMPORT NEXT IMAGE

const experiences = [
  {
    id: 1,
    company: "Universitas Diponegoro",
    // GANTI PATH INI SESUAI NAMA FILE LOGO ANDA DI FOLDER PUBLIC/LOGOS
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
    logo: "/logos/undip.png", // Gunakan logo yang sama jika perusahaannya sama
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
    logo: "/logos/sucofindo.png", // Pastikan file ada di public/logos/
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
    logo: "/logos/higenncy.png", // Pastikan file ada di public/logos/
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
    company: "Higenncy (Ministry of Finance Project)",
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
    logo: "/logos/dii.png", // Ganti dengan nama file yang sesuai
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
    <section id="experience" className="py-24 px-4 md:px-8 max-w-5xl mx-auto bg-black text-white">
      
      {/* Header Simple */}
      <div className="mb-16 border-b border-neutral-800 pb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h2>
      </div>

      <div className="flex flex-col">
        {experiences.map((exp) => {
          const isOpen = expanded === exp.id;

          return (
            <div 
              key={exp.id} 
              className="group border-b border-neutral-800 last:border-none"
            >
              <button 
                onClick={() => setExpanded(isOpen ? null : exp.id)}
                className="w-full py-6 md:py-8 flex items-start justify-between text-left group-hover:bg-neutral-900/30 transition-colors duration-300 px-2 rounded-lg"
              >
                {/* CONTAINER UTAMA KIRI */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1">
                  
                  {/* 1. TAHUN/PERIODE */}
                  <span className="text-sm font-mono text-neutral-500 w-28 pt-1 flex-shrink-0">{exp.period}</span>
                  
                  {/* CONTAINER LOGO & TEKS */}
                  <div className="flex items-center gap-4 flex-1">
                      {/* 2. LOGO PERUSAHAAN (BARU DITAMBAHKAN) */}
                      <div className="relative w-12 h-12 flex-shrink-0 bg-white/5 p-2 rounded-lg border border-white/10 overflow-hidden">
                          <Image 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain" // Agar logo tidak gepeng
                          />
                      </div>

                      {/* 3. ROLE & COMPANY TEXT */}
                      <div>
                        <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                          {exp.role}
                        </h3>
                        <p className="text-neutral-500 text-sm mt-0.5">{exp.company}</p>
                      </div>
                  </div>

                </div>

                {/* Icon Toggle (+ / -) */}
                <div className="ml-4 mt-2 md:mt-0 text-neutral-500 group-hover:text-white transition-colors">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              {/* Content Accordion */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {/* Padding kiri disesuaikan agar sejajar dengan teks di atas (melewati logo) */}
                    <div className="pl-4 md:pl-[11.5rem] pb-8 pr-4 text-neutral-400">
                      {/* List Jobdesk */}
                      <ul className="list-disc list-outside ml-4 space-y-2 mb-6 text-sm leading-relaxed">
                        {exp.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-neutral-800 rounded text-neutral-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}