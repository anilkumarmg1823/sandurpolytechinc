"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CollegeBuildAnimation() {
  const [phase, setPhase] = useState(0); // 0: Sketching (White bg), 1: Color Filling, 2: Complete

  useEffect(() => {
    // 5.5 seconds of sketching on a pure white background
    const fillTimer = setTimeout(() => setPhase(1), 5500);
    // Completes transition to realistic color photo at 8.5s
    const completeTimer = setTimeout(() => setPhase(2), 8500);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full select-none bg-[#ffffff] transition-colors duration-[2000ms]">
      
      {/* 1. Realistic Color Image (Reveals in Phase 1 and stays in Phase 2) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/college.png')`,
        }}
        initial={{
          opacity: 0,
          filter: "grayscale(1) contrast(1.1) brightness(0.65)",
          clipPath: "inset(100% 0% 0% 0%)" // clips bottom-to-top
        }}
        animate={
          phase >= 1
            ? {
                opacity: 1,
                filter: "grayscale(0) contrast(1) brightness(0.85)", // Realistic daylight color brightness
                clipPath: "inset(0% 0% 0% 0%)"
              }
            : {}
        }
        transition={{
          duration: 3, // 3 seconds smooth transition
          ease: [0.25, 1, 0.5, 1], // easeOutQuart
        }}
      />

      {/* 2. SVG Overlay Drawing - Golden outline sketching of building facade */}
      {phase < 2 && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none stroke-brand-brown/85"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Ground baseline (0s - 1.5s) */}
          <motion.line
            x1="5"
            y1="82"
            x2="95"
            y2="82"
            strokeWidth="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Pillars left & right (0.8s - 2.5s) */}
          <motion.line
            x1="12"
            y1="82"
            x2="12"
            y2="35"
            strokeWidth="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.7, delay: 0.8, ease: "easeInOut" }}
          />
          <motion.line
            x1="88"
            y1="82"
            x2="88"
            y2="35"
            strokeWidth="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.7, delay: 0.8, ease: "easeInOut" }}
          />

          {/* Center triangular roof facade (1.8s - 3.8s) */}
          <motion.path
            d="M8 35 L50 18 L92 35 Z"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.8, ease: "easeInOut" }}
          />
          <motion.line
            x1="12"
            y1="35"
            x2="88"
            y2="35"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 2, ease: "easeInOut" }}
          />

          {/* Mid floor partition (2.5s - 4.2s) */}
          <motion.line
            x1="12"
            y1="58"
            x2="88"
            y2="58"
            strokeWidth="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.7, delay: 2.5, ease: "easeInOut" }}
          />

          {/* Top windows drawing sequentially (3.2s - 4.8s) */}
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.rect
              key={`top-win-${i}`}
              x={20 + i * 7}
              y="42"
              width="4"
              height="8"
              strokeWidth="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 3.2 + i * 0.15, ease: "easeOut" }}
            />
          ))}

          {/* Bottom windows drawing sequentially (3.5s - 5.1s) */}
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.rect
              key={`bot-win-${i}`}
              x={20 + i * 7}
              y="66"
              width="4"
              height="8"
              strokeWidth="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 3.5 + i * 0.15, ease: "easeOut" }}
            />
          ))}

          {/* Thin technical construction alignment gridlines (fades in) */}
          <motion.path
            d="M 50 5 L 50 95 M 5 50 L 95 50"
            stroke="#4d2b12"
            strokeWidth="0.08"
            strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </svg>
      )}

      {/* Ambient shadow gradient at bottom to fade into next page sections */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fcfbfa] to-transparent pointer-events-none" />
      
      {/* Visual Status Indicator in bottom left of screen */}
      <div className="absolute bottom-8 left-8 bg-[#1c0f05]/85 backdrop-blur-md border border-[#faf6f0]/10 px-4 py-2 rounded-xl flex items-center space-x-2.5 z-10 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
        <span className="text-[10px] font-black text-[#fcfbfa] uppercase tracking-widest font-mono">
          {phase === 0 ? "Sketching Facade..." : phase === 1 ? "Coloring Textures..." : "Sanpoly Campus View"}
        </span>
      </div>
      
    </div>
  );
}
