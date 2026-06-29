"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbfa] text-brand-brown select-none"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -30,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative flex flex-col items-center justify-center">
        {/* Exact Logo Image */}
        <motion.div
          className="mb-6 w-32 h-32 rounded-full overflow-hidden shadow-lg border border-brand-brown/10 p-1 bg-white flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/logo.png"
            alt="Sandur Polytechnic Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Brand Text */}
        <div className="text-center overflow-hidden space-y-1">
          <motion.h1
            className="text-2xl md:text-3xl font-black tracking-[0.18em] text-brand-brown font-sans"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            SANDUR POLYTECHNIC
          </motion.h1>
          <motion.p
            className="text-[10px] uppercase tracking-[0.35em] text-brand-brown-light/80 font-bold font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Yeshwantnagar | Estd. 1988
          </motion.p>
        </div>

        {/* Custom Progress Bar */}
        <div className="w-48 h-[2px] bg-brand-beige/50 rounded-full mt-10 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-brown to-brand-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.3, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
