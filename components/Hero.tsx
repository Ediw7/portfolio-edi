"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
   
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden bg-black pt-32 md:pt-0">
      
      {/* GRADASI BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute top-[10%] right-[-5%] w-[50%] h-[60%] rounded-full bg-red-900/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-orange-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* BAGIAN TEKS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-white"
          >
            Hi, I am <span className="text-white">Edi Wicoro</span>, a <br className="hidden md:block" />
            
           
            <div className="grid grid-cols-1 place-items-center md:place-items-start h-[1.3em] w-full md:w-fit overflow-hidden my-1">
     =
              <AnimatePresence> 
                <motion.span
                  key={words[index]}
                  initial={{ y: 30, opacity: 0 }}   
                  animate={{ y: 0, opacity: 1 }}    
                  exit={{ y: -30, opacity: 0 }}   
                  transition={{ duration: 0.5, ease: "circOut" }}
                
                  className="col-start-1 row-start-1 block italic whitespace-nowrap bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent font-black pr-2"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            <span className="block mt-1">
              dedicated to building <br className="block md:hidden"/>
              innovative tech solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-gray-500 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs"
          >
            Semarang, Indonesia • UTC/GMT +7
          </motion.p>
        </div>

        {/* BAGIAN FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end order-2 mb-2 md:mb-0"
        >

          <div className="relative group w-52 h-52 sm:w-60 sm:h-60 md:w-[320px] md:h-[320px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-orange-600/20 to-purple-600/20 rounded-full blur-3xl group-hover:opacity-80 transition-opacity duration-700" />

            <div className="relative w-full h-full rounded-full bg-neutral-900 border border-white/10 p-2 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-neutral-800">
                    <Image 
                      src="/ediC.png" 
                      alt="Edi Wicoro"
                      fill
                      className="object-cover translate-y-4 md:translate-y-6 grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-105"
                    />
                </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}