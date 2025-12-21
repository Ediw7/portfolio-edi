"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Universitas Diponegoro",
    logo: "/undip.png", 
    role: "Mobile Programming Lab Assistant",
    period: "2025",
    points: [
      "Mentored students in mobile application development practices.",
      "Assisted in debugging and testing Android-based applications."
    ],
    tech: ["Android", "React Native", "Debugging"]
  },
  {
    id: 2,
    company: "Universitas Diponegoro",
    logo: "/undip.png", 
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
    company: "PT SUCOFINDO",
    logo: "/suco.png", 
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
    logo: "/higen.jpeg", 
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
    logo: "/higen.jpeg", 
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
    logo: "/digi.png", 
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
    <section id="experience" className="py-32 px-4 md:px-8 max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
  
      <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-black/5 dark:border-white/5 pb-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">Experience<span className="text-red-600">.</span></h2>
          <span className="text-xl md:text-2xl text-black/60 dark:text-white/60 font-light italic tracking-wide">
            & Professional Journey
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm font-mono text-black/50 dark:text-white/50 uppercase tracking-widest mt-4 md:mt-0">
          <Briefcase size={16} />
          <span>Timeline</span>
        </div>
      </div>

 
      <div className="relative border-l border-black/5 dark:border-white/5 ml-3 md:ml-6 space-y-12">
        
        {experiences.map((exp, index) => {
          const isOpen = expanded === exp.id;

          return (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-16"
            >
        
              <span className={`absolute -left-[5px] top-10 w-2.5 h-2.5 rounded-full ring-4 ring-white dark:ring-black transition-colors duration-500 ${
                  isOpen 
                  ? "bg-black dark:bg-white scale-125" 
                  : "bg-black/10 dark:bg-white/10"
              }`}></span>

  
              <div className="absolute top-0 left-8 md:left-16 text-xs font-mono font-bold text-black/40 dark:text-white/40 uppercase tracking-widest mb-2">
                 {exp.period}
              </div>

       
              <button 
                onClick={() => setExpanded(isOpen ? null : exp.id)}
                className={`w-full text-left mt-6 group relative overflow-hidden transition-all duration-500 rounded-3xl border ${
                    isOpen 
                    
                    ? "bg-white dark:bg-black border-black/40 dark:border-white/40 shadow-2xl" 
                
                    : "bg-white dark:bg-black border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20"
                }`}
              >
               
                 <div className="p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    <div className="flex items-start md:items-center gap-6 md:gap-8">
                   
                       <div className="relative w-16 h-16 bg-white p-2 rounded-2xl border border-black/5 dark:border-white/5 flex-shrink-0 overflow-hidden shadow-sm">
  
                            <Image 
                            src={exp.logo} 
                            alt={exp.company}
                            fill
                            className="object-contain" 
                            />
                        </div>

                   
                        <div>
                            <h3 className="text-xl md:text-3xl font-bold text-black dark:text-white leading-tight">
                              {exp.role}
                            </h3>
                            <p className="text-sm md:text-lg text-black/60 dark:text-white/60 font-medium mt-1">
                              {exp.company}
                            </p>
                        </div>
                    </div>

        
                    <div className={`hidden md:flex w-12 h-12 rounded-full border border-black/5 dark:border-white/5 items-center justify-center transition-all duration-500 ${
                        isOpen 
                        ? "rotate-180 bg-black text-white dark:bg-white dark:text-black border-transparent" 
                        : "bg-transparent text-black/30 dark:text-white/30 group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-black dark:group-hover:text-white"
                    }`}>
                        <ChevronDown size={20} />
                    </div>
                 </div>

                 <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                           <div className="px-6 md:px-10 pb-10 pt-0">
                      
                              <div className="h-px w-full bg-black/5 dark:bg-white/5 mb-8" />
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     
                                  <div className="md:col-span-2">
                                      <h4 className="text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-4">Key Responsibilities</h4>
                                      <ul className="space-y-3">
                                        {exp.points.map((point, idx) => (
                                          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-black/70 dark:text-white/70 leading-relaxed">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/50 dark:bg-white/50 flex-shrink-0" />
                                            {point}
                                          </li>
                                        ))}
                                      </ul>
                                  </div>

                              
                                  <div>
                                      <h4 className="text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-4">Technologies</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                     
                                          <span key={t} className="px-3 py-1.5 text-xs font-medium border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 rounded-lg">
                                            {t}
                                          </span>
                                        ))}
                                      </div>
                                  </div>
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