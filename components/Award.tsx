"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowUpRight } from "lucide-react";

const awards = [
  {
    title: "Best Blockchain Innovation",
    org: "ETH Global - Hackathon",
    year: "2024",
    link: "#"
  },
  {
    title: "Outstanding Frontend Developer",
    org: "Web Excellence Awards",
    year: "2023",
    link: "#"
  },
  {
    title: "Top 10 Fullstack Contributors",
    org: "Open Source Fest",
    year: "2022",
    link: "#"
  },
  {
    title: "UI/UX Design Honorable Mention",
    org: "Awwwards Nominee",
    year: "2021",
    link: "#"
  }
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 max-w-4xl mx-auto bg-black text-white">
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
          <Trophy size={20} className="text-white/60" />
        </div>
        <h2 className="text-4xl font-bold italic uppercase tracking-tighter">Awards</h2>
      </div>

      <div className="border-t border-white/10">
        {awards.map((award, index) => (
          <motion.a
            key={index}
            href={award.link}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/[0.02] transition-all px-4"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase italic">
                {award.org}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {award.title}
              </h3>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-10 mt-4 md:mt-0">
              <span className="font-mono text-sm text-white/20 group-hover:text-white transition-colors">
                {award.year}
              </span>
              <div className="p-2 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Teks dekorasi di bawah */}
      <div className="mt-12 text-center opacity-10">
        <p className="text-[8vw] font-black uppercase leading-none tracking-tighter select-none">
          Recognition
        </p>
      </div>
    </section>
  );
}