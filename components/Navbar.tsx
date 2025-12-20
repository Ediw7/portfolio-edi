"use client";

import { Moon, Sun } from "lucide-react"; // Tambah import Sun
import { useState, useEffect } from "react";

export default function Navbar() {
  // State untuk Dark Mode
  const [isDark, setIsDark] = useState(true);

  // Efek untuk cek preferensi awal / set class html
  useEffect(() => {
    // Cek apakah html punya class 'dark'
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  // Fungsi ganti tema
  const toggleTheme = () => {
    const newStatus = !isDark;
    setIsDark(newStatus);
    
    if (newStatus) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-6 px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl w-full pointer-events-auto">
        <div className="flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl">
          
          {/* 1. LOGO NAMA */}
          <a href="#home" className="text-sm font-bold tracking-widest uppercase text-white hover:opacity-70 transition-opacity">
            Edi Wicoro
          </a>

          {/* Links (Hidden di mobile, visible di desktop) */}
          <div className="hidden md:flex items-center gap-6 text-[12px] font-medium text-white/60">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* KANAN: CV & THEME TOGGLE */}
          <div className="flex items-center gap-4">
            
            {/* 2. TOMBOL MY CV */}
            {/* GANTI 'https://drive.google.com/...' dengan link CV asli Mas Edi */}
            <a 
              href="https://drive.google.com/your-cv-link" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-bold text-white bg-white/10 px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              My CV
            </a>

           
          </div>

        </div>
      </div>
    </nav>
  );
}