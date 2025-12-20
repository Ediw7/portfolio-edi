"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Link as LinkIcon, Zap, Clock, Heart, Github, Facebook, Instagram, Youtube } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto bg-[#050505] text-white">
      
      {/* HEADER SECTION (Teks Deskripsi) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-4xl font-bold mb-6 italic">About</h2>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            Hi! I'm <span className="text-white">Edi Wicoro</span>, a passionate web development student 
            creating innovative projects with HTML, CSS, and JavaScript. Explore my portfolio, skills, 
            and journey in building user-friendly apps. Let's connect!
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Who Am I</h3>
          <p className="text-gray-400 leading-relaxed">
            I'm a Full Stack Engineer in <span className="text-white">Semarang</span>. I am learning 
            TypeScript, Next.js, React.js, Node.js, and database management. Now, I have a passion for learning UI/UX.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I started learning web development on December 5, 2020. It's a big challenge because it's just 
            one of my hobbies, and I have yet to take any courses. I am self-learning on YouTube. 
            One of my favorite YouTube channels is <span className="text-white italic underline">The Net Ninja</span>. 
            I learned a lot of web development skills from him.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I love using <span className="text-white font-bold">Next.js</span> to create a website. 
            Then use <span className="text-white font-bold">GitHub</span> to host my codebase. 
            After that, I use <span className="text-white font-bold">Vercel</span> to deploy my website.
          </p>
        </div>
      </div>

      {/* BENTO GRID SECTION (Yang sudah kita buat sebelumnya) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
        
        {/* BOX 1: Lokasi & Globe */}
        <div className="md:col-span-2 md:row-span-2 relative bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-8 overflow-hidden group">
          <div className="flex items-center gap-2 mb-4 opacity-70">
            <MapPin size={18} />
            <span className="text-sm font-medium tracking-wide">Semarang, Indonesia</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center mt-10 pointer-events-none">
            <div className="w-80 h-80 rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] relative">
                <div className="absolute inset-0 rounded-full border border-white/5 scale-75 rotate-45" />
                <div className="absolute inset-0 rounded-full border border-white/5 scale-90 -rotate-12" />
                <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-[40%] right-[30%] blur-sm animate-pulse" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 z-10">
             <p className="text-2xl font-bold italic opacity-20 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">Global Developer.</p>
          </div>
        </div>

        {/* BOX 2: Connect / Socials */}
        <div className="md:row-span-2 bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-8">
          <div className="flex items-center gap-2 mb-8 opacity-70">
            <LinkIcon size={18} />
            <span className="text-sm font-medium tracking-wide">Connect</span>
          </div>
          <div className="space-y-6">
            <SocialLink icon={<Github size={20}/>} label="GitHub" />
            <SocialLink icon={<Instagram size={20}/>} label="Instagram" />
            <SocialLink icon={<Facebook size={20}/>} label="Facebook" />
            <SocialLink icon={<Youtube size={20}/>} label="YouTube" />
          </div>
        </div>

        {/* BOX 3: Stacks (Grid 2 Kolom) */}
        <div className="md:col-span-2 bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4 opacity-70">
            <Zap size={18} />
            <span className="text-sm font-medium tracking-wide">Stacks</span>
          </div>
          <div className="flex flex-wrap gap-6 items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-[10px]">React</div>
             <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-[10px]">Next</div>
             <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-[10px]">TS</div>
             <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-[10px]">Node</div>
             <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-[10px]">Tailwind</div>
          </div>
        </div>

        {/* BOX 4: Coding Hours */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-8">
          <div className="flex items-center gap-2 mb-4 opacity-70">
            <Clock size={18} />
            <span className="text-sm font-medium tracking-wide">Coding hours</span>
          </div>
          <div className="mt-2">
            <span className="text-5xl font-black tracking-tighter">5222</span>
            <span className="text-xl font-bold ml-2 opacity-50 uppercase tracking-widest text-blue-500">hrs</span>
          </div>
        </div>

        {/* BOX 5: Favorite Framework */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center group">
          <Heart size={20} className="mb-4 text-red-500 opacity-50 group-hover:scale-125 group-hover:opacity-100 transition-all" />
          <div className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
              <span className="text-2xl font-black italic">N</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function SocialLink({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <a href="#" className="flex items-center gap-4 group cursor-pointer">
      <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <span className="font-bold text-sm opacity-50 group-hover:opacity-100 transition tracking-widest uppercase">{label}</span>
    </a>
  );
}