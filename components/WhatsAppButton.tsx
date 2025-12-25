"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Menggunakan icon dari lucide

export default function WhatsAppButton() {
  const phoneNumber = "6282325720215"; // Gunakan format internasional tanpa '+'
  const message = "Halo Edi, saya tertarik untuk bekerja sama dengan Anda.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[9995] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow duration-300"
    >
      <MessageCircle size={30} fill="currentColor" />
      
      {/* Ping effect untuk menarik perhatian (optional) */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
    </motion.a>
  );
}