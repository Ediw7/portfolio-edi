"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inisialisasi mesin Lenis
    const lenis = new Lenis({
      duration: 1.5,      // Durasi gulir (makin besar makin lambat/mewah)
      lerp: 0.07,         // Kehalusan (0.01 - 0.1). 0.07 sangat "smooth"
      wheelMultiplier: 1, // Sensitivitas mouse wheel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}