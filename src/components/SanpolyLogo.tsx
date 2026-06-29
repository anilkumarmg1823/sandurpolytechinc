"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  animate?: boolean;
}

export default function SanpolyLogo({ className = "w-16 h-16", animate = false }: LogoProps) {
  const circleTransition = { duration: 1.5, ease: "easeInOut" } as const;
  const starTransition = { duration: 1.5, delay: 0.5, ease: "easeInOut" } as const;
  
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle (Blue/Violet border in original, we can use theme brown/gold or original blue) */}
      <motion.circle
        cx="50"
        cy="50"
        r="47"
        className="stroke-brand-brown"
        strokeWidth="2.5"
        initial={animate ? { strokeDasharray: "0 300" } : undefined}
        animate={animate ? { strokeDasharray: "295 300" } : undefined}
        transition={circleTransition}
      />

      {/* Inner Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="38"
        className="stroke-brand-brown/80"
        strokeWidth="1.5"
        initial={animate ? { strokeDasharray: "0 250" } : undefined}
        animate={animate ? { strokeDasharray: "239 250" } : undefined}
        transition={{ ...circleTransition, delay: 0.2 }}
      />

      {/* Path for Top Text "SANDUR POLYTECHNIC" */}
      <path
        id="logoTopTextPath"
        d="M16 50 A34 34 0 0 1 84 50"
        fill="none"
      />

      {/* Top Text */}
      <motion.text
        className="fill-brand-brown font-extrabold text-[7px] tracking-[0.06em] font-sans select-none"
        initial={animate ? { opacity: 0 } : undefined}
        animate={animate ? { opacity: 1 } : undefined}
        transition={{ delay: 0.8 }}
      >
        <textPath href="#logoTopTextPath" startOffset="50%" textAnchor="middle">
          SANDUR POLYTECHNIC
        </textPath>
      </motion.text>

      {/* Path for Bottom Text "YESHWANTNAGAR" */}
      <path
        id="logoBottomTextPath"
        d="M84 50 A34 34 0 0 1 16 50"
        fill="none"
      />

      {/* Bottom Text */}
      <motion.text
        className="fill-brand-brown font-extrabold text-[7.2px] tracking-[0.06em] font-sans select-none"
        initial={animate ? { opacity: 0 } : undefined}
        animate={animate ? { opacity: 1 } : undefined}
        transition={{ delay: 0.8 }}
      >
        <textPath href="#logoBottomTextPath" startOffset="50%" textAnchor="middle">
          YESHWANTNAGAR
        </textPath>
      </motion.text>

      {/* Separator dots */}
      <motion.circle
        cx="14"
        cy="50"
        r="1.5"
        className="fill-brand-brown"
        initial={animate ? { scale: 0 } : undefined}
        animate={animate ? { scale: 1 } : undefined}
        transition={{ delay: 1 }}
      />
      <motion.circle
        cx="86"
        cy="50"
        r="1.5"
        className="fill-brand-brown"
        initial={animate ? { scale: 0 } : undefined}
        animate={animate ? { scale: 1 } : undefined}
        transition={{ delay: 1 }}
      />

      {/* 6-Pointed Star (Dual overlapping triangles) */}
      <g>
        {/* Triangle 1 pointing UP */}
        <motion.polygon
          points="50,23 73.5,63.5 26.5,63.5"
          className="stroke-brand-gold/60"
          strokeWidth="1"
          fill="none"
          initial={animate ? { strokeDasharray: "0 200" } : undefined}
          animate={animate ? { strokeDasharray: "150 200" } : undefined}
          transition={starTransition}
        />
        {/* Triangle 2 pointing DOWN */}
        <motion.polygon
          points="50,77 73.5,36.5 26.5,36.5"
          className="stroke-brand-gold/60"
          strokeWidth="1"
          fill="none"
          initial={animate ? { strokeDasharray: "0 200" } : undefined}
          animate={animate ? { strokeDasharray: "150 200" } : undefined}
          transition={starTransition}
        />
      </g>

      {/* Cogwheel (Gear) */}
      <motion.g
        initial={animate ? { rotate: -180 } : undefined}
        animate={animate ? { rotate: 0 } : undefined}
        transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "50px 50px" }}
      >
        {/* Cog Core */}
        <circle
          cx="50"
          cy="50"
          r="10"
          className="stroke-brand-brown/40"
          strokeWidth="1"
          fill="none"
        />
        {/* Cog Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="12.5"
          className="stroke-brand-brown/70"
          strokeWidth="2"
          strokeDasharray="3.2 2"
          fill="none"
        />
      </motion.g>

      {/* Burning Diya (Oil Lamp) inside Cog */}
      <g>
        {/* Diya Base */}
        <motion.path
          d="M42 51 C42 56.5, 58 56.5, 58 51 Z"
          className="fill-brand-brown"
          initial={animate ? { y: 10, opacity: 0 } : undefined}
          animate={animate ? { y: 0, opacity: 1 } : undefined}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        
        {/* Flickering Flame */}
        <motion.path
          d="M50 49.5 C47 45.5, 50 38, 50 38 C50 38, 53 45.5, 50 49.5 Z"
          fill="#d97706" /* Orange/Amber flame */
          initial={animate ? { scale: 0, opacity: 0 } : undefined}
          animate={
            animate
              ? {
                  scale: [1, 1.15, 0.95, 1.1, 1],
                  opacity: [0.9, 1, 0.85, 1, 0.9],
                  x: [0, 0.5, -0.5, 0.5, 0],
                  y: [0, -0.5, 0.5, -0.5, 0]
                }
              : {
                  scale: [1, 1.15, 0.95, 1.1, 1],
                  opacity: [0.9, 1, 0.85, 1, 0.9],
                  x: [0, 0.5, -0.5, 0.5, 0]
                }
          }
          transition={{
            scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
            opacity: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
            x: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            y: { repeat: Infinity, duration: 1.7, ease: "easeInOut" },
            delay: animate ? 1.6 : 0
          }}
          style={{ transformOrigin: "50px 48px" }}
        />
      </g>
    </svg>
  );
}
