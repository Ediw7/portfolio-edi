"use client";

import { Moon, Command } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-8 px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl w-full pointer-events-auto">
        {/* PERBAIKAN: 
            1. bg-black/10 atau bg-white/5 untuk transparansi yang sangat tipis.
            2. border-white/10 agar garis pemisah tidak terlalu kontras.
            3. backdrop-blur-md agar efek kaca terlihat jernih.
        */}
        <div className="flex items-center justify-between bg-white/[0.03] backdrop-blur-md border border-white/10 px-8 py-3 rounded-full shadow-2xl shadow-black/50">
          
          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-tighter hover:opacity-50 transition-all duration-300">
            n
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/50">
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

          {/* Icons */}
          <div className="flex items-center gap-5 text-white/40">
            <Moon size={18} className="cursor-pointer hover:text-white transition-all duration-300" />
            <div className="h-4 w-[1px] bg-white/10" /> {/* Divider kecil tambahan */}
            <Command size={18} className="cursor-pointer hover:text-white transition-all duration-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}