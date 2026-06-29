"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaLaptopCode,
  FaHardHat,
  FaBolt,
  FaMicrochip,
  FaTools,
  FaCheckCircle,
  FaGraduationCap,
  FaVolumeMute,
  FaVolumeUp,
  FaBell,
  FaQuoteLeft
} from "react-icons/fa";
import CollegeBuildAnimation from "@/components/CollegeBuildAnimation";

// 5 core disciplines details
const disciplines = [
  {
    id: "cse",
    title: "Computer Science & Engg.",
    icon: FaLaptopCode,
    description: "Explore programming architectures, database management systems, web technologies, and software engineering. Learn inside state-of-the-art laboratory environments with advanced system networks, and engage in full-stack programming, networking simulations, and cloud engineering projects designed for technical expertise.",
    image: "/images/branch_cse.png"
  },
  {
    id: "ece",
    title: "Electronics & Comm. Engg.",
    icon: FaMicrochip,
    description: "Design advanced embedded systems, microcontrollers, VLSI circuits, and digital communication devices. Gain extensive hands-on expertise with high-frequency oscilloscopes, signal generators, logic analyzers, and IoT training modules, preparing you for modern telecommunications and automation sectors.",
    image: "/images/branch_ece.jpg"
  },
  {
    id: "eee",
    title: "Electrical & Electronics Engg.",
    icon: FaBolt,
    description: "Master power grid generation, smart grids, electrical machines, control circuits, and power electronics. Work directly with electrical dynamos, transmission line simulators, industrial motors, and protective switchgear in high-voltage laboratory installations.",
    image: "/images/branch_eee.png"
  },
  {
    id: "mech",
    title: "Mechanical Engineering",
    icon: FaTools,
    description: "Study CAD/CAM modeling, mechanical design principles, thermodynamics, fluid machinery, and CNC machining operations. Gain practical experience operating heavy machinery, lathes, hydraulic presses, and automated robotics in our extensive workshops.",
    image: "/images/branch_mech.png"
  },
  {
    id: "civil",
    title: "Civil Engineering",
    icon: FaHardHat,
    description: "Understand structural mechanics, concrete technology, highway designing, and modern land surveying techniques. Work with concrete testing equipment, civil CAD design software, and high-precision total stations in surveying yards to engineer tomorrow's infrastructure.",
    image: "/images/branch_civil.jpg"
  }
];

// Notifications list
const notifications = [
  { text: "Admissions Open for Academic Year 2026-27 - Apply Online Today!", link: "/admissions" },
  { text: "Technology for Sustainable Solutions - CSITSS 2026", link: "/about#legacy" },
  { text: "Certification program in Applied AI / ML in Renewable Energy & Sustainability, March 16 to June 1", link: "/programs" },
  { text: "36th Annual College Day Celebrations and Student Project Exhibition held successfully.", link: "/about#legacy" }
];

// News board details
const newsItems = [
  {
    tag: "Admissions",
    title: "Admissions Open for Academic Year 2026-27",
    summary: "Applications are invited for first-year and lateral entry admissions to all 5 diploma streams. Enquire today for scholarship programs.",
    date: "June 2026",
    link: "/admissions"
  },
  {
    tag: "Celebration",
    title: "36th Annual College Day Celebrations",
    summary: "Sandur Polytechnic celebrated its 36th Annual Day, highlighting outstanding academic accomplishments, student innovations, and cultural activities.",
    date: "March 2026",
    link: "/about#legacy"
  }
];

// Recruiters list with short logo initials and optional image paths
const recruiters = [
  { name: "JSW Steel", logo: "JSW", logoImg: "/images/logo_jsw.png" },
  { name: "TATA Motors", logo: "TATA", logoImg: "/images/logo_tata.png" },
  { name: "L&T Construction", logo: "L&T", logoImg: "/images/logo_lt.png" },
  { name: "Wipro Infrastructure", logo: "WIPRO", logoImg: "/images/logo_wipro.png" },
  { name: "Toyota Kirloskar", logo: "TOYOTA", logoImg: "/images/logo_toyota.png" },
  { name: "Bosch India", logo: "BOSCH", logoImg: "/images/logo_bosch.png" },
  { name: "TVS Motors", logo: "TVS", logoImg: "/images/logo_tvs.png" },
  { name: "HAL India", logo: "HAL", logoImg: "/images/logo_hal.png" },
  { name: "BHEL India", logo: "BHEL", logoImg: "/images/logo_bhel.png" },
  { name: "ACC Cement", logo: "ACC", logoImg: "/images/logo_acc.png" }
];

// Campus Highlights Slides for Campus Life GIF-like carousel
const campusLifeSlides = [
  "/images/campus_life.png",
  "/images/overall_development.png",
  "/images/quick_facts.png",
  "/images/college.png"
];

// Campus Highlights for Flex Accordion Slider
const campusHighlights = [
  {
    title: "Campus life",
    description: "Sanpoly is situated at Yeshwantnagar which is 8 kilometres from the town of Sandur in Ballari District of Karnataka. It has a hostel for both boys and girls.",
    image: "/images/campus_life.png",
    href: "/about#infrastructure",
    actionText: "Explore Facilities",
    num: "01"
  },
  {
    title: "Overall development",
    description: "Sandur Polytechnic, excels not only in academics but also caters to the overall development of a student by focusing on Industry-Institute interaction, personality development, soft skills, sports and cultural activities.",
    image: "/images/overall_development.png",
    href: "/placements",
    actionText: "View Placements & Training",
    num: "02"
  },
  {
    title: "Quick facts",
    description: "We offer 3-year, semester-based five Diploma courses with a curriculum that emphasises on making students industry ready.",
    image: "/images/college.png",
    href: "/programs",
    actionText: "Explore Programs",
    num: "03"
  },
  {
    title: "Explore our legacy",
    description: "Look into the section of 'Our Legacy' to read about Sanpoly Legacy, with roots dating back to the foundation stone laid in 1945.",
    image: "/images/explore_legacy.png",
    href: "/about#legacy",
    actionText: "Read Our History",
    num: "04"
  }
];

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeHighlight === 0) {
      interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % campusLifeSlides.length);
      }, 2500);
    } else {
      setSlideIndex(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeHighlight]);

  return (
    <div className="relative bg-[#fcfbfa] text-brand-brown">
      
      {/* 1. FULLSCREEN HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1c0f05]">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          src="/SANDURPOLYTECHNICADMISSIONS2024-25-Trim.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        {/* Dark-brown visual overlay to enhance cinematic depth */}
        <div className="absolute inset-0 bg-brand-brown/15 pointer-events-none" />



        {/* Audio control button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 w-11 h-11 rounded-xl bg-[#1c0f05]/80 backdrop-blur-md border border-[#faf6f0]/10 flex items-center justify-center text-brand-gold shadow-lg hover:bg-brand-brown hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <FaVolumeMute className="text-base" /> : <FaVolumeUp className="text-base" />}
        </button>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 pointer-events-none">
          <span className="text-[9px] font-black tracking-[0.25em] text-[#faf6f0]/70 uppercase font-mono">
            Scroll Down
          </span>
          <div className="w-[18px] h-7 rounded-full border border-[#faf6f0]/30 p-1 flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-brand-gold"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>

      {/* 2. NOTIFICATIONS CAROUSEL / TICKER SECTION */}
      <section className="relative z-10 w-full py-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full relative flex items-center bg-brand-brown text-white rounded-full p-1 sm:p-1.5 shadow-lg border border-brand-brown-light/25 overflow-hidden">
          
          {/* Notifications Badge (Sticky on Left) */}
          <div className="relative z-20 flex items-center space-x-1.5 sm:space-x-2 bg-brand-brown-light/35 border border-brand-gold/30 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm flex-shrink-0 select-none">
            <FaBell className="text-brand-gold text-xs sm:text-sm animate-bounce" />
            <span className="font-serif italic font-extrabold text-xs sm:text-sm text-white tracking-wide">
              Notifications
            </span>
          </div>

          {/* Marquee Content */}
          <div className="relative flex-grow overflow-hidden flex items-center h-8 select-none ml-4 sm:ml-6 mr-4">
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-brand-brown to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-brand-brown to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee flex items-center whitespace-nowrap gap-16 text-xs sm:text-sm font-semibold">
              {/* Loop the items multiple times to ensure continuous flow */}
              {[...notifications, ...notifications, ...notifications].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3.5 flex-shrink-0">
                  <span className="hover:text-brand-gold transition-colors">{item.text}</span>
                  {item.link && (
                    <Link href={item.link} className="text-[10px] bg-brand-brown-light/65 hover:bg-brand-gold/30 border border-brand-gold/20 px-2 py-0.5 rounded-full font-bold transition-all text-white">
                      View
                    </Link>
                  )}
                  <span className="text-brand-brown-light/30 font-light select-none">|</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. KNOWING SANPOLY SECTION */}
      <section className="relative w-full bg-[#fcfbfa] overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full min-h-[620px] lg:h-[650px]">
          
          {/* Left Panel: Dynamic Visual Slideshow (GIF-like) or Image (60% Width on Desktop) */}
          <div className="relative lg:w-3/5 w-full h-[320px] lg:h-full overflow-hidden bg-brand-brown">
            <AnimatePresence mode="wait">
              {activeHighlight === 0 ? (
                <motion.div
                  key={`slide-${slideIndex}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${campusLifeSlides[slideIndex]}')` }}
                />
              ) : (
                <motion.div
                  key={`img-${activeHighlight}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${campusHighlights[activeHighlight].image}')` }}
                />
              )}
            </AnimatePresence>
            {/* Cinematic dark shading gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#fcfbfa]/30 pointer-events-none" />
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
          </div>

          {/* Right Panel: Accordion Content Controls (40% Width on Desktop) */}
          <div className="lg:w-2/5 w-full bg-[#fcfbfa] text-brand-brown p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10 border-t lg:border-t-0 lg:border-l border-brand-brown/10">
            
            {/* Header Content */}
            <div className="mb-10">
              <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs font-mono block mb-2">
                EXPLORE CAMPUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-brown tracking-tight leading-tight font-serif">
                Knowing Sanpoly
              </h2>
              <p className="text-brand-brown-light text-xs sm:text-sm leading-relaxed mt-2.5">
                Discover our college by navigating through our posts, blogs and news.
              </p>
              <div className="h-0.5 w-16 bg-brand-gold mt-5 rounded" />
            </div>

            {/* Accordion List Triggers */}
            <div className="space-y-4">
              {campusHighlights.map((item, index) => {
                const isActive = activeHighlight === index;
                return (
                  <div
                    key={item.title}
                    onMouseEnter={() => setActiveHighlight(index)}
                    onClick={() => setActiveHighlight(index)}
                    className={`py-4 border-b border-brand-brown/10 last:border-0 cursor-pointer select-none group/item`}
                  >
                    {/* Header Row */}
                    <div className="flex items-center space-x-4">
                      <span className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-brand-gold" : "text-brand-brown-light"
                      }`}>
                        {item.num}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-bold font-serif transition-colors ${
                        isActive ? "text-brand-gold" : "text-brand-brown group-hover/item:text-brand-gold"
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Collapsible details using Framer Motion */}
                    <div className="overflow-hidden">
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <p className="text-xs sm:text-sm text-brand-brown-light leading-relaxed text-justify mt-3 font-sans">
                              {item.description}
                            </p>
                            <div className="mt-4">
                              <Link
                                href={item.href}
                                className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-gold hover:text-brand-brown transition-colors"
                              >
                                <span>{item.actionText}</span>
                                <FaArrowRight className="text-[10px]" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. DISCIPLINARY STREAMS GRID */}
      <section className="py-24 bg-[#1c0f05] border-y border-brand-brown/10 relative overflow-hidden">
        
        {/* Decorative Technical Background Elements (Authentic Subject Watermarks) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          
          {/* CSE Watermark (TypeScript Architecture Code) */}
          <div className="absolute top-10 left-[4%] font-mono text-[10px] md:text-xs text-brand-gold/[0.12] leading-relaxed hidden lg:block">
            <pre>
{`// TS System Architecture
interface Student {
  id: string;
  branch: "CSE";
  skills: string[];
  gpa: number;
}
const enroll = (s: Student) => {
  return s.skills.push("AI_ML");
};`}
            </pre>
          </div>

          {/* ECE Watermark (AVR C++ Register Configurations) */}
          <div className="absolute top-[26%] right-[4%] font-mono text-[10px] md:text-xs text-brand-gold/[0.12] leading-relaxed hidden lg:block text-right">
            <pre>
{`// AVR Register Setup
#include <avr/io.h>
#include <util/delay.h>
void init() {
  DDRB |= (1 << PB5); // Led pin Output
  TCCR1B |= (1 << CS12); // Prescaler 256
}`}
            </pre>
          </div>

          {/* EEE Watermark (AC Power Calculations & Impedance Math) */}
          <div className="absolute top-[48%] left-[5%] font-mono text-[10px] md:text-xs text-brand-gold/[0.12] leading-relaxed hidden lg:block">
            <pre>
{`// AC Power Calculations
Active Power   : P = V * I * cos(θ) [W]
Reactive Power : Q = V * I * sin(θ) [VAR]
Apparent Power : S = V * I [VA]
Impedance      : Z = R + j(XL - XC)`}
            </pre>
          </div>

          {/* Mechanical Watermark (Thermodynamics & Structural Stress) */}
          <div className="absolute top-[70%] right-[5%] font-mono text-[10px] md:text-xs text-brand-gold/[0.12] leading-relaxed hidden lg:block text-right">
            <pre>
{`// Thermodynamic Systems
Carnot Eff : η = 1 - (Tc / Th)
Stress     : σ = Force / Area (N/mm²)
Bending    : M/I = σ/y = E/R
Torque     : T = F * r = I * α`}
            </pre>
          </div>

          {/* Civil Watermark (Concrete mix ratio & Surveying Moment Equations) */}
          <div className="absolute bottom-10 left-[4%] font-mono text-[10px] md:text-xs text-brand-gold/[0.12] leading-relaxed hidden lg:block">
            <pre>
{`// Concrete Mix & Moments
Bending Moment : M_max = w * L² / 8 (UDL)
Concrete M20   : Ratio = 1 : 1.5 : 3
Total Station  : ΔX = D * sin(H) * cos(V)
Bearing Cap    : q_u = c*Nc + q*Nq + ½*γ*B*Nγ`}
            </pre>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs font-mono block mb-3 animate-pulse">
              ACADEMIC OFFERINGS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#fcfbfa] tracking-tight font-serif mb-4 lg:whitespace-nowrap">
              Diploma Programs Designed for Industry Needs
            </h2>
            <p className="text-[#fcfbfa]/85 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto text-center">
              We offer five AICTE-approved, 3-year (6 semesters) diploma courses designed to make students industry ready.
            </p>
          </div>

          {/* Alternating Split Rows with Center Timeline (13-Column Grid) */}
          <div className="space-y-16 lg:space-y-0 relative">
            {disciplines.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-13 gap-8 lg:gap-16 items-center relative py-12"
                >
                  {/* Vertical line segments forming a seamless line in the background */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-brand-gold/15 hidden lg:block pointer-events-none z-0"
                    style={{
                      top: index === 0 ? "50%" : "0%",
                      bottom: index === disciplines.length - 1 ? "50%" : "0%",
                      height: index === 0 || index === disciplines.length - 1 ? "50%" : "100%"
                    }}
                  />

                  {/* Image Column (6 Columns) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                    className={`lg:col-span-6 w-full h-[280px] sm:h-[360px] lg:h-[440px] relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 group z-10 ${
                      isEven ? "lg:order-1" : "lg:order-3"
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </motion.div>
 
                  {/* Center Timeline Column (1 Column) */}
                  <div className="lg:col-span-1 hidden lg:flex justify-center items-center h-full relative z-20 lg:order-2">
                    <motion.div
                      initial={{ scale: 0.85, borderColor: "rgba(204,164,112,0.25)", backgroundColor: "#1c0f05", color: "#cca470" }}
                      whileInView={{ scale: 1.15, borderColor: "#cca470", backgroundColor: "#cca470", color: "#1c0f05" }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      className="w-12 h-12 rounded-full border-[3px] flex items-center justify-center font-serif font-bold text-sm shadow-xl transition-all duration-300 z-30"
                    >
                      0{index + 1}
                    </motion.div>
                  </div>
 
                  {/* Content Column (6 Columns) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                    className={`lg:col-span-6 space-y-6 z-10 relative ${
                      isEven ? "lg:order-3 text-left" : "lg:order-1 lg:text-right text-left"
                    }`}
                  >
                    {/* Animated Subtle Subject Watermark Symbol behind text */}
                    {item.id === "cse" && (
                      <motion.div
                        animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute text-brand-gold/[0.15] pointer-events-none select-none z-0 ${
                          isEven ? "right-4" : "left-4"
                        }`}
                        style={{ top: "10%" }}
                      >
                        <span className="font-mono font-bold text-[180px] lg:text-[240px]">{"{ }"}</span>
                      </motion.div>
                    )}
                    {item.id === "ece" && (
                      <motion.div
                        animate={{ opacity: [0.7, 0.9, 0.7], scale: [0.98, 1.02, 0.98], y: [0, -6, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute pointer-events-none select-none z-0 ${
                          isEven ? "right-4" : "left-4"
                        }`}
                        style={{ top: "10%" }}
                      >
                        {/* Custom SVG Diode Schematic Symbol */}
                        <svg viewBox="0 0 100 100" stroke="#cca470" strokeOpacity={0.16} strokeWidth={2.5} className="w-[180px] lg:w-[240px] h-auto fill-none" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="10" y1="50" x2="35" y2="50" />
                          <line x1="65" y1="50" x2="90" y2="50" />
                          <polygon points="35,30 65,50 35,70" />
                          <line x1="65" y1="30" x2="65" y2="70" />
                        </svg>
                      </motion.div>
                    )}
                    {item.id === "eee" && (
                      <motion.div
                        animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.04, 1], y: [0, 6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute pointer-events-none select-none z-0 ${
                          isEven ? "right-4" : "left-4"
                        }`}
                        style={{ top: "10%" }}
                      >
                        {/* Custom SVG LED (Light Emitting Diode) Schematic Symbol */}
                        <svg viewBox="0 0 100 100" stroke="#cca470" strokeOpacity={0.16} strokeWidth={2.5} className="w-[180px] lg:w-[240px] h-auto fill-none" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="10" y1="50" x2="35" y2="50" />
                          <line x1="65" y1="50" x2="90" y2="50" />
                          <polygon points="35,30 65,50 35,70" />
                          <line x1="65" y1="30" x2="65" y2="70" />
                          {/* Light Rays */}
                          <line x1="42" y1="22" x2="28" y2="8" />
                          <polygon points="28,12 28,8 32,8" fill="#cca470" fillOpacity={0.16} stroke="none" />
                          <line x1="56" y1="18" x2="42" y2="4" />
                          <polygon points="42,8 42,4 46,4" fill="#cca470" fillOpacity={0.16} stroke="none" />
                        </svg>
                      </motion.div>
                    )}
                    {item.id === "mech" && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className={`absolute text-brand-gold/[0.15] pointer-events-none select-none z-0 ${
                          isEven ? "right-4" : "left-4"
                        }`}
                        style={{ top: "10%" }}
                      >
                        <FaTools className="text-[160px] lg:text-[220px]" />
                      </motion.div>
                    )}
                    {item.id === "civil" && (
                      <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute text-brand-gold/[0.15] pointer-events-none select-none z-0 ${
                          isEven ? "right-4" : "left-4"
                        }`}
                        style={{ top: "10%" }}
                      >
                        <FaHardHat className="text-[160px] lg:text-[220px]" />
                      </motion.div>
                    )}
                    <div className={`flex items-center space-x-3 ${isEven ? "justify-start" : "justify-start lg:justify-end"}`}>
                      <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] font-mono">
                        6-Semester course
                      </span>
                    </div>

                    <h3 className={`text-2xl sm:text-3xl font-extrabold text-[#fcfbfa] font-serif tracking-tight leading-tight flex items-center space-x-3 ${isEven ? "justify-start" : "justify-start lg:justify-end lg:space-x-reverse"}`}>
                      <Icon className="text-brand-gold text-2xl flex-shrink-0 lg:hidden" />
                      <span>{item.title}</span>
                    </h3>

                    <p className="text-[#ded0be]/90 text-xs sm:text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/programs#${item.id}`}
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-gold hover:bg-[#cca470] text-[#1c0f05] transition-all text-xs font-bold tracking-wider shadow-md hover:shadow-lg active:scale-95 duration-200"
                      >
                        <span>EXPLORE CURRICULUM</span>
                        <FaArrowRight className="text-[10px]" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. NEWS & HIGHLIGHTS SECTION is commented out for now as requested
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs font-mono block">
              CAMPUS EVENTS
            </span>
            <h2 className="text-3xl font-extrabold text-brand-brown leading-tight">
              News & Announcements
            </h2>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed">
              Stay connected with what is happening inside the Sandur Polytechnic campus. Read about recent celebrations, academic bulletins, and upcoming admission programs.
            </p>
            <div className="pt-4">
              <Link
                href="/about#legacy"
                className="text-xs font-bold text-brand-gold hover:text-brand-brown tracking-wider flex items-center space-x-2 transition-colors"
              >
                <span>VIEW RECENT POSTS GALLERY</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((news, index) => (
              <motion.div
                key={news.title}
                className="glass-card rounded-2xl p-8 hover:border-brand-brown/15 flex flex-col md:flex-row gap-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex-shrink-0 flex md:flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-xl bg-brand-cream/80 border border-brand-brown/5 p-4 text-center">
                  <span className="text-xs font-bold text-brand-brown uppercase tracking-widest block mb-1">
                    {news.tag}
                  </span>
                  <span className="text-[10px] text-brand-brown-light/75 block uppercase tracking-wider font-mono">
                    {news.date}
                  </span>
                </div>

                <div className="space-y-3 flex-grow">
                  <h3 className="text-lg font-bold text-brand-brown hover:text-brand-gold transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-brand-brown-light text-xs leading-relaxed text-justify">
                    {news.summary}
                  </p>
                  <Link
                    href={news.link}
                    className="text-xs font-bold text-brand-brown hover:text-brand-gold flex items-center space-x-1.5 transition-colors pt-2"
                  >
                    <span>Read Full Details</span>
                    <FaArrowRight className="text-[9px]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      */}

      {/* 6. PLACEMENT PARTNERS MARQUEE */}
      <section className="pt-16 pb-8 bg-brand-cream/20 border-t border-brand-brown/5 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-brown-light block mb-2 font-mono">
            TRUSTED BY LEADING BRANDS
          </span>
          <h3 className="text-lg font-bold text-brand-brown">
            Our Placement & Training Partners
          </h3>
        </div>

        {/* Marquee Animation */}
        <div className="relative w-full flex items-center overflow-hidden py-4">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#fcfbfa] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#fcfbfa] to-transparent z-10" />
          
          <div className="animate-marquee flex items-center space-x-8">
            {/* Double the list to loop seamlessly */}
            {[...recruiters, ...recruiters].map((recruiter, index) => (
              <div
                key={`${recruiter.name}-${index}`}
                className="flex items-center justify-center px-6 py-4 rounded-full bg-[#fcfbfa] border border-brand-brown/5 hover:border-brand-gold/30 transition-all duration-300 shadow-sm whitespace-nowrap w-[150px] h-[64px]"
              >
                <img 
                  src={recruiter.logoImg} 
                  className="max-h-8 max-w-full object-contain" 
                  alt={recruiter.name} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GLOBAL ALUMNI NETWORK */}
      <section className="pt-12 pb-24 bg-[#1c0f05] border-t border-white/5 relative overflow-hidden select-none">
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cca47005_1px,transparent_1px),linear-gradient(to_bottom,#cca47005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs font-mono block mb-3 animate-pulse">
              GLOBAL FOOTPRINT
            </span>
            <h2 className="text-3xl font-extrabold text-[#fcfbfa] leading-tight font-serif">
              Where Our Alumni Build Careers
            </h2>
            <p className="text-[#ded0be]/80 text-xs md:text-sm mt-3">
              Our graduates are building successful careers and leading operations at world-class organizations across the globe.
            </p>
          </div>

          {/* Curved World Map Container */}
          <div className="h-[480px] max-w-4xl mx-auto relative flex items-center justify-center border border-white/5 rounded-3xl bg-[#130a03]/50 shadow-2xl overflow-hidden">
            
            {/* World Map Image Background (Inverted for dark brown background) */}
            <div 
              className="absolute inset-0 bg-[url('/images/world_map.png')] bg-contain bg-no-repeat bg-center opacity-[0.20] invert mix-blend-screen pointer-events-none z-0 scale-[1.08] lg:scale-[1.12]"
            />

            {/* SVG radiating connections starting from Sandur Polytechnic, India (~ x: 576, y: 225 at 800px width) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 1 }}>
              {/* India -> North America (Toyota Kirloskar) */}
              <motion.path
                d="M 576 225 Q 350 150 180 140"
                fill="none"
                stroke="#cca470"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              {/* India -> Europe (Bosch Group) */}
              <motion.path
                d="M 576 225 Q 530 150 490 120"
                fill="none"
                stroke="#cca470"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              {/* India -> Middle East (L&T Construction) */}
              <motion.path
                d="M 576 225 Q 510 240 450 250"
                fill="none"
                stroke="#cca470"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              {/* India -> South America (Wipro) */}
              <motion.path
                d="M 576 225 Q 380 320 230 330"
                fill="none"
                stroke="#cca470"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              {/* India -> Japan/East Asia (TATA Motors) */}
              <motion.path
                d="M 576 225 Q 670 180 720 180"
                fill="none"
                stroke="#cca470"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              {/* India -> Australia (TVS Motors) */}
              <motion.path
                d="M 576 225 Q 680 320 760 340"
                fill="none"
                stroke="#cca470"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>

            {/* 1. Origin: Sandur Polytechnic (Karnataka, India) */}
            <div className="absolute left-[67%] top-[45%] flex flex-col items-center z-20">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-[#cca470]/30 animate-ping" />
                <span className="w-3.5 h-3.5 rounded-full bg-brand-gold shadow-md border-2 border-white z-10" />
              </div>
              <div className="mt-1.5 bg-[#cca470] border border-white/10 rounded-md px-2.5 py-0.5 shadow-lg whitespace-nowrap text-[9px] font-bold text-[#1c0f05] tracking-wider uppercase font-mono">
                Sanpoly Origin
              </div>
            </div>

            {/* 2. JSW Steel (India Operations / Global Exports) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[62%] top-[35%] flex flex-col items-center z-10"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#cca470]/30 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm border border-white" />
              </div>
              <div className="mt-1.5 bg-[#1c0f05]/95 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-sm">
                <div className="w-14 h-7 flex items-center justify-center bg-white rounded p-1 flex-shrink-0">
                  <img src="/images/logo_jsw.png" className="max-h-full max-w-full object-contain" alt="JSW" />
                </div>
              </div>
            </motion.div>

            {/* 3. Toyota Kirloskar (North America / Global) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[15%] top-[25%] flex flex-col items-center z-10"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#cca470]/30 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm border border-white" />
              </div>
              <div className="mt-1.5 bg-[#1c0f05]/95 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-sm">
                <div className="w-14 h-7 flex items-center justify-center bg-white rounded p-1 flex-shrink-0">
                  <img src="/images/logo_toyota.png" className="max-h-full max-w-full object-contain" alt="Toyota" />
                </div>
              </div>
            </motion.div>

            {/* 4. Bosch Group (Europe / Germany) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[48%] top-[22%] flex flex-col items-center z-10"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#cca470]/30 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm border border-white" />
              </div>
              <div className="mt-1.5 bg-[#1c0f05]/95 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-sm">
                <div className="w-14 h-7 flex items-center justify-center bg-white rounded p-1 flex-shrink-0">
                  <img src="/images/logo_bosch.png" className="max-h-full max-w-full object-contain" alt="Bosch" />
                </div>
              </div>
            </motion.div>

            {/* 5. TATA Motors (East Asia / UK / Global) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[78%] top-[34%] flex flex-col items-center z-10"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#cca470]/30 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm border border-white" />
              </div>
              <div className="mt-1.5 bg-[#1c0f05]/95 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-sm">
                <div className="w-14 h-7 flex items-center justify-center bg-white rounded p-1 flex-shrink-0">
                  <img src="/images/logo_tata.png" className="max-h-full max-w-full object-contain" alt="TATA" />
                </div>
              </div>
            </motion.div>

            {/* 6. L&T Construction (Middle East / India Projects) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[44%] top-[48%] flex flex-col items-center z-10"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#cca470]/30 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm border border-white" />
              </div>
              <div className="mt-1.5 bg-[#1c0f05]/95 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-sm">
                <div className="w-14 h-7 flex items-center justify-center bg-white rounded p-1 flex-shrink-0">
                  <img src="/images/logo_lt.png" className="max-h-full max-w-full object-contain" alt="L&T" />
                </div>
              </div>
            </motion.div>

            {/* 7. Wipro Infrastructure (South America / Global Centers) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[22%] bottom-[20%] flex flex-col items-center z-10"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#cca470]/30 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm border border-white" />
              </div>
              <div className="mt-1.5 bg-[#1c0f05]/95 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-sm">
                <div className="w-14 h-7 flex items-center justify-center bg-white rounded p-1 flex-shrink-0">
                  <img src="/images/logo_wipro.png" className="max-h-full max-w-full object-contain" alt="Wipro" />
                </div>
              </div>
            </motion.div>

            {/* 8. TVS Motors (Oceania Operations) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[8%] bottom-[16%] flex flex-col items-center z-10"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#cca470]/30 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm border border-white" />
              </div>
              <div className="mt-1.5 bg-[#1c0f05]/95 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-sm">
                <div className="w-14 h-7 flex items-center justify-center bg-white rounded p-1 flex-shrink-0">
                  <img src="/images/logo_tvs.png" className="max-h-full max-w-full object-contain" alt="TVS" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. ALUMNI TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-b from-[#fcfbfa] to-brand-cream/35 border-t border-brand-brown/5 relative select-none">
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b6f4e03_1px,transparent_1px),linear-gradient(to_bottom,#8b6f4e03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs font-mono block mb-3 animate-pulse">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl font-extrabold text-brand-brown leading-tight font-serif">
              Voices of Our Successful Alumni
            </h2>
            <p className="text-brand-brown-light text-xs md:text-sm mt-3">
              Hear from our proud graduates who are shaping careers and leading technical innovations across global organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aniketh Sharma",
                role: "Automation Engineer, Toyota Kirloskar",
                branch: "Mechanical Engineering (Class of 2020)",
                logo: "/images/logo_toyota.png",
                quote: "The rigorous practical training and emphasis on shop-floor discipline at Sandur Polytechnic gave me a massive headstart. I was able to transition into Toyota's manufacturing system with absolute ease.",
                initials: "AS"
              },
              {
                name: "Meghana Gowda",
                role: "Systems Developer, Bosch Group",
                branch: "Electronics & Communication (Class of 2022)",
                logo: "/images/logo_bosch.png",
                quote: "Our labs were equipped with industry-standard microcontroller kits and testing rigs. The faculty pushed us to write efficient firmware from day one, which is exactly what I do now at Bosch.",
                initials: "MG"
              },
              {
                name: "Rakesh Kumar",
                role: "Infrastructure Designer, L&T Construction",
                branch: "Civil Engineering (Class of 2019)",
                logo: "/images/logo_lt.png",
                quote: "Being a residential campus, we lived and learned collaboration daily. Sandur Polytechnic's focus on surveying, structural detailing, and site visits shaped my engineering foundation.",
                initials: "RK"
              }
            ].map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#fcfbfa] border border-brand-brown/5 rounded-3xl p-8 shadow-md hover:shadow-xl hover:border-brand-gold/20 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <FaQuoteLeft className="text-2xl text-brand-gold/20 mb-4 transition-colors group-hover:text-brand-gold/40" />
                  <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify italic mb-6">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="border-t border-brand-brown/5 pt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-cream/80 text-brand-gold flex items-center justify-center font-bold font-serif shadow-inner border border-brand-brown/5">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-black text-brand-brown leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-[10px] text-brand-brown-light mt-0.5">
                        {t.branch}
                      </p>
                    </div>
                  </div>
                  
                  {/* Company Logo */}
                  <div className="w-12 h-6 flex items-center justify-center bg-white rounded border border-brand-brown/5 p-0.5 shadow-sm">
                    <img src={t.logo} className="max-h-full max-w-full object-contain" alt="" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
