"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Awards from "@/components/Award";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="bg-[#000000] text-white">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Awards /> 
      <Contact />
    </main>
  );
}