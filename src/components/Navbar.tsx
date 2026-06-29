"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaChevronRight, FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavSubItem[];
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { label: "Our Legacy", href: "/about#legacy" },
      { label: "Leadership & Governance", href: "/about#leadership" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Infrastructure", href: "/about#infrastructure" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "Computer Science & Engg", href: "/programs#cse" },
      { label: "Electronics & Comm Engg", href: "/programs#ece" },
      { label: "Electrical & Electronics Engg", href: "/programs#eee" },
      { label: "Mechanical Engineering", href: "/programs#mech" },
      { label: "Civil Engineering", href: "/programs#civil" },
    ],
  },
  {
    label: "Training & Placement",
    children: [
      { label: "Placements Overview", href: "/placements" },
      { label: "Apprenticeship & Visits", href: "/placements#industrial" },
      { label: "IIIC Network", href: "/placements#iiic" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Fee Structures", href: "/admissions#fees" },
      { label: "Scholarship Scheme", href: "/admissions#scholarships" },
      { label: "Enquire & Visit", href: "/admissions#enquiry" },
    ],
  },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("About Us");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [portalType, setPortalType] = useState<"student" | "parent" | "faculty">("student");
  const pathname = usePathname();

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Find sub-items for active tab
  const activeSubItems = navItems.find((item) => item.label === activeTab)?.children || [];

  return (
    <>
      {/* 1. FIXED VERTICAL SIDEBAR TRIGGER (DESKTOP) */}
      <div className="hidden lg:flex fixed top-0 left-0 h-screen w-20 z-40 bg-brand-brown text-white border-r border-brand-brown-light/10 flex-col justify-between items-center py-8 shadow-2xl">
        {/* Top: Brand Logo & Hamburger Menu Button */}
        <div className="flex flex-col items-center space-y-4">
          <Link 
            href="/" 
            className="w-11 h-11 bg-white rounded-full p-0.5 shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-200"
            aria-label="Back to home"
          >
            <img
              src="/images/logo.png"
              alt="Sandur Polytechnic Logo"
              className="w-full h-full object-contain"
            />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 rounded-xl bg-brand-brown-light/20 flex items-center justify-center text-brand-gold hover:text-white hover:bg-brand-gold/20 transition-all duration-300 cursor-pointer"
            aria-label="Open navigation menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* Center: Vertical Brand Letters */}
        <span
          className="text-[11px] sm:text-xs font-black uppercase tracking-[0.45em] text-brand-gold/95 font-mono select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          SANDUR POLYTECHNIC
        </span>

        {/* Bottom: Home Button */}
        <Link
          href="/"
          className="w-12 h-12 rounded-full bg-[#fcfbfa] flex items-center justify-center text-brand-brown hover:bg-brand-cream shadow-md transition-all duration-300"
          aria-label="Back to home page"
        >
          <FaHome className="text-lg" />
        </Link>
      </div>

      {/* 2. STANDARD TOP NAVIGATION BAR (MOBILE / TABLET) */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-40 bg-[#fcfbfa]/90 backdrop-blur-md border-b border-brand-brown/10 py-3.5 px-4 shadow-sm flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2.5">
          <div className="w-9 h-9 bg-white rounded-full p-0.5 shadow-sm flex items-center justify-center">
            <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="text-sm font-black tracking-wider text-brand-brown">
              SANPOLY<span className="text-brand-gold">.</span>
            </span>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg text-brand-brown hover:bg-brand-cream/40 border border-transparent hover:border-brand-brown/10 transition-all cursor-pointer"
        >
          <FaBars className="text-xl" />
        </button>
      </header>

      {/* 3. FULLSCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#1c0f05] text-[#ded0be] overflow-y-auto flex flex-col justify-between"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Header / Brand in Menu */}
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 py-6 flex items-center justify-between border-b border-brand-brown/20 flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                <div className="w-10 h-10 bg-white rounded-full p-0.5 shadow-md flex items-center justify-center">
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-base font-black tracking-widest text-[#fcfbfa]">
                    SANDUR POLYTECHNIC
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-xl bg-brand-brown-light/20 flex items-center justify-center text-brand-gold hover:text-white hover:bg-brand-gold/25 transition-all cursor-pointer"
                aria-label="Close navigation menu"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Main Navigation Grid Column decks */}
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 py-10 flex-grow flex flex-col lg:flex-row gap-10 items-stretch justify-center">
              
              {/* Left Column: Category Tabs */}
              <div className="w-full lg:w-1/3 flex flex-col space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold font-mono mb-2 block">
                  Navigate Categories
                </span>
                
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <button
                        onClick={() => setActiveTab(item.label)}
                        className={`w-full text-left px-5 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wide flex items-center justify-between border transition-all cursor-pointer ${
                          activeTab === item.label
                            ? "bg-brand-gold text-brand-brown border-brand-gold shadow-lg shadow-brand-gold/10"
                            : "bg-brand-brown/20 border-brand-brown/40 text-[#c3b4a2] hover:bg-brand-brown/30 hover:border-brand-brown/65"
                        }`}
                      >
                        <span>{item.label}</span>
                        <FaChevronRight className={`text-xs transition-transform duration-200 ${
                          activeTab === item.label ? "translate-x-1" : ""
                        }`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href || "/"}
                        onClick={() => setIsOpen(false)}
                        className="block px-5 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wide border bg-brand-brown/20 border-brand-brown/40 text-[#c3b4a2] hover:text-white hover:bg-brand-brown/30 hover:border-brand-brown/65 transition-all"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Vertical Separator Line (Desktop only) */}
              <div className="hidden lg:block w-[1px] h-96 bg-brand-brown/20 flex-shrink-0" />

              {/* Middle Column: Dynamic Subpages Panel */}
              <div className="w-full lg:w-1/3 flex flex-col space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold font-mono mb-2 block">
                  {activeTab} Overview
                </span>

                {activeSubItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeSubItems.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 rounded-xl bg-brand-brown/20 border border-brand-brown/50 text-xs font-bold text-[#c3b4a2] hover:text-white hover:border-brand-gold/30 transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[#a0907d] italic">Select a category to view subpages.</p>
                )}
              </div>

              {/* Right Column: Portal Login Links */}
              <div className="w-full lg:w-1/4 flex flex-col space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold font-mono mb-2 block">
                  Direct Student Portals
                </span>
                
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      setPortalType("student");
                      setIsLoginModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="block w-full px-5 py-3.5 rounded-xl bg-brand-brown/60 border border-brand-brown/80 text-xs font-extrabold text-white text-center hover:brightness-115 transition-all cursor-pointer"
                  >
                    Student Login
                  </button>
                  <button
                    onClick={() => {
                      setPortalType("parent");
                      setIsLoginModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="block w-full px-5 py-3.5 rounded-xl bg-brand-brown/60 border border-brand-brown/80 text-xs font-extrabold text-white text-center hover:brightness-115 transition-all cursor-pointer"
                  >
                    Parent Portal
                  </button>
                  <button
                    onClick={() => {
                      setPortalType("faculty");
                      setIsLoginModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="block w-full px-5 py-3.5 rounded-xl bg-brand-brown/60 border border-brand-brown/80 text-xs font-extrabold text-white text-center hover:brightness-115 transition-all cursor-pointer"
                  >
                    Faculty Portal
                  </button>
                </div>
              </div>

            </div>

            {/* Menu Footer */}
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 py-6 border-t border-brand-brown/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#90806d] gap-4 flex-shrink-0">
              <div className="flex items-center space-x-6">
                <a href="/disclosure/aicte" className="hover:text-white font-semibold">Mandatory AICTE Disclosure</a>
                <a href="/student-life/calendar" className="hover:text-white font-semibold">Academic Calendar</a>
              </div>
              <p>© {new Date().getFullYear()} Sandur Polytechnic. Crafted beautifully.</p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MODAL LOGIN PORTAL */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLoginModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white border border-brand-brown/10 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 text-brand-brown cursor-default text-left relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl hover:bg-brand-cream/40 text-brand-brown hover:text-brand-gold transition-colors cursor-pointer"
                aria-label="Close login modal"
              >
                <FaTimes className="text-sm" />
              </button>

              {/* Logo / Badge */}
              <div className="flex flex-col items-center space-y-2.5 pb-4 border-b border-brand-brown/10">
                <div className="w-14 h-14 bg-brand-cream/35 rounded-full p-1 shadow-inner flex items-center justify-center">
                  <img src="/images/logo.png" alt="Sandur Polytechnic Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-brown font-mono">
                    {portalType} Login
                  </h3>
                  <span className="text-[10px] text-brand-brown-light tracking-wide block mt-0.5 font-medium">
                    Sandur Polytechnic College Management System
                  </span>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-2">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-brand-brown-light block font-extrabold">
                    {portalType === "student" ? "Admission / Register No." : portalType === "faculty" ? "Employee Code / Email" : "Registered Mobile / Email"}
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-brand-brown/60 text-xs">
                      <FaEnvelope />
                    </span>
                    <input
                      type="text"
                      placeholder={portalType === "student" ? "e.g. 504CS22010" : portalType === "faculty" ? "e.g. FACULTY-982" : "e.g. parent@domain.com"}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-cream/15 border border-brand-brown/25 text-xs font-semibold text-brand-brown focus:outline-none focus:border-brand-brown focus:bg-white placeholder-brand-brown-light/45 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-brand-brown-light block font-extrabold">
                    Password / Passcode
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-brand-brown/60 text-xs">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-5c1.66 0 3 1.34 3 3v2H9V6c0-1.66 1.34-3 3-3z"/>
                      </svg>
                    </span>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-cream/15 border border-brand-brown/25 text-xs font-semibold text-brand-brown focus:outline-none focus:border-brand-brown focus:bg-white placeholder-brand-brown-light/45 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Auxiliary options */}
                <div className="flex items-center justify-between text-[10px] pt-1">
                  <label className="flex items-center space-x-1.5 cursor-pointer text-brand-brown-light hover:text-brand-brown transition-colors">
                    <input type="checkbox" className="accent-brand-brown rounded border-brand-brown/30 bg-white" />
                    <span>Keep me signed in</span>
                  </label>
                  <a href="#forgot" className="text-brand-brown hover:text-brand-gold font-bold transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Sign In Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-brown hover:bg-brand-gold hover:text-brand-brown text-center text-xs font-black tracking-wider uppercase text-white shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    Sign In to Portal
                  </button>
                </div>
              </form>

              {/* IT Helpline */}
              <div className="text-[10px] text-[#90806d] text-center pt-3 border-t border-brand-brown/10 leading-relaxed font-medium">
                Need help logging in? Please contact the college IT coordinator at <span className="text-brand-brown underline font-bold">sysadmin@sanpoly.edu.in</span>.
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
