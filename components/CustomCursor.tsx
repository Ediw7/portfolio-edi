"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Spring animation untuk pergerakan halus
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Deteksi apakah perangkat adalah mobile/tablet (touchscreen)
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };

    checkMobile();

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      // Munculkan kursor hanya setelah mouse digerakkan pertama kali
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => {
      const hoveredEl = document.querySelectorAll('a, button, [role="button"], .group');
      hoveredEl.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    handleHover();

    // Gunakan observer untuk menangani elemen yang di-render secara dinamis
    const observer = new MutationObserver(handleHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  // Jangan render apa pun jika di mobile atau kursor belum bergerak
  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* 1. Titik Pusat (Dot) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-red-600 rounded-full pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 2. Lingkaran Luar (Ring) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] flex items-center justify-center transition-colors duration-300"
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? "rgba(128, 128, 128, 0.15)" : "rgba(128, 128, 128, 0)",
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Border ring yang adaptif terhadap dark/light mode */}
        <div className="w-full h-full rounded-full border border-black/20 dark:border-white/30" />
      </motion.div>
    </>
  );
}