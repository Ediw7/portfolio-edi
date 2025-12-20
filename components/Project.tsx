"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto bg-black">
      <h2 className="text-4xl font-bold italic mb-16 tracking-tighter uppercase text-white">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard title="Hotel Tonight" tech="REACT • NODE" link="hotel-tonight.com" />
        <ProjectCard title="Socials App" tech="NEXTJS • TS" link="socials-v2.dev" />
      </div>
    </section>
  );
}

function ProjectCard({ title, tech, link }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], ["-15deg", "15deg"]);

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left / rect.width - 0.5);
          y.set(e.clientY - rect.top / rect.height - 0.5);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-[350px] w-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-10 flex flex-col justify-between group cursor-pointer hover:border-white/30 transition-colors"
      >
        <div className="flex justify-between items-start">
          <div className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">{tech}</div>
          <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" />
        </div>
        
        <div style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/30 text-xs font-mono lowercase">{link}</p>
        </div>

        {/* Garis dekorasi simple di bawah card */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-white/20 w-0 group-hover:w-full transition-all duration-700" />
      </motion.div>
    </div>
  );
}