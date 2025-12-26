"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react"; 

export default function Hero() {
  const words = ["Fullstack Developer", "Blockchain Enthusiast", "Graphic Designer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden bg-white dark:bg-black pt-22 md:pt-0 transition-colors duration-300">
      
      {/* --- BACKGROUND GRADIENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-500/20 dark:bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[10%] right-[-5%] w-[50%] h-[60%] rounded-full bg-red-500/20 dark:bg-red-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-orange-500/20 dark:bg-orange-900/20 blur-[120px]" />
      </div>

      {/* --- GRADASI POJOK KIRI ATAS --- */}

<div className="absolute -top-[40px] -left-[40px] md:-top-[80px] md:-left-[80px] w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-blue-600/35 dark:bg-blue-900/50 rounded-full blur-[70px] md:blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-auto">
        
        {/* BAGIAN KIRI: TEKS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 z-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 py-1"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60">
            👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-black dark:text-white mb-6"
          >
            Hi, I am <br />
            <span className="text-black dark:text-white">Edi Wicoro</span>
            <span className="text-red-600">.</span>
          </motion.h1>

          <div className="h-[2em] w-full flex justify-center md:justify-start overflow-hidden mb-6">
             <div className="text-xl md:text-2xl font-light italic text-black/60 dark:text-white/60 mr-3">
               I am a
             </div>
             <div className="relative w-fit">
                <AnimatePresence mode="wait"> 
                  <motion.span
                    key={words[index]}
                    initial={{ y: 40, opacity: 0 }}   
                    animate={{ y: 0, opacity: 1 }}    
                    exit={{ y: -40, opacity: 0 }}   
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="block font-bold text-xl md:text-2xl whitespace-nowrap bg-gradient-to-r from-orange-500 via-red-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
             </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-black/40 dark:text-white/40 font-mono font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-10"
          >
            Semarang, Indonesia • UTC/GMT +7
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects"
              className="group relative px-8 py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span className="relative z-10">Explore Work</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
            </a>

            <a 
              href="#contact"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white bg-transparent text-black dark:text-white font-bold uppercase tracking-widest text-xs transition-all w-full sm:w-auto"
            >
              <span>Let's Talk</span>
              <MoveRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>

        {/* BAGIAN KANAN: FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center order-2 mb-10 md:mb-0 relative mx-auto md:mx-0"
        >
          {/* --- PERBAIKAN: DECORATION CIRCLE BEHIND (VISIBLE ON MOBILE) --- */}
          <div className="absolute inset-0 
              bg-gradient-to-tr 
              from-red-600/40 via-orange-500/40 to-purple-600/40 md:from-red-500/10 md:via-orange-500/10 md:to-purple-500/10 
              rounded-full 
              blur-2xl md:blur-3xl 
              scale-125 md:scale-110" 
          />

          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="w-full h-full rounded-full border-2 border-black/10 dark:border-white/10 shadow-xl overflow-hidden relative bg-neutral-100 dark:bg-neutral-900">
                <Image 
                  src="/ediC.png" 
                  alt="Edi Wicoro"
                  fill
                  priority // Memastikan dimuat lebih awal
                  sizes="(max-width: 768px) 224px, 320px" // Sangat penting untuk performa mobile
                  className="object-cover"
                />
            </div>

            <div className="absolute bottom-2 right-0 md:bottom-4 md:-right-2
                            bg-white/90 dark:bg-black/90 backdrop-blur-md 
                            border border-black/10 dark:border-white/10 
                            px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-black dark:text-white">
                  Available
                </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}