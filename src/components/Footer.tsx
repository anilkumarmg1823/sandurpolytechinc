"use client";

import Link from "next/link";
import { FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1c0f05] text-[#ded0be] border-t border-brand-brown/10 pt-16 pb-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 bg-white rounded-full p-0.5 shadow-md flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Sandur Polytechnic Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base font-extrabold tracking-wider text-white block">
                  SANPOLY<span className="text-brand-gold">.</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#b3a493] block -mt-1 font-mono font-bold">
                  Sandur Polytechnic
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-[#c3b4a2] text-justify">
              Established in 1988, Sandur Polytechnic (Sanpoly) stands as Ballari's premier technical diploma college. Dedicated to developing disciplined, technically competent, and responsible global engineering professionals.
            </p>
            {/* Social link */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61559930694840"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-brown/40 border border-brand-brown/80 flex items-center justify-center text-[#ded0be] hover:text-white hover:bg-brand-gold/30 hover:border-brand-gold/40 transition-all duration-300"
              >
                <FaFacebook className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold font-mono">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs font-semibold">
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors duration-200">
                  College Legacy
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-brand-gold transition-colors duration-200">
                  Diploma Programs
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-brand-gold transition-colors duration-200">
                  Training & Placement
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-brand-gold transition-colors duration-200">
                  Admissions Portal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors duration-200">
                  Location & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold font-mono">
              Campus Info
            </h4>
            <ul className="space-y-4 text-xs font-semibold">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-brand-gold mt-1 flex-shrink-0" />
                <span>
                  Yeshwantnagar, Sandur Taluk,
                  <br />
                  Ballari District, Karnataka - 583124
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-brand-gold flex-shrink-0" />
                <span>+91 94808 38245 / +91 8395 276006</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-brand-gold flex-shrink-0" />
                <span>admissions@sanpoly.edu.in</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://maps.google.com/?q=Sandur+Polytechnic+Yeshwantnagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col space-y-2"
                >
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider flex items-center space-x-1.5 hover:text-white transition-colors">
                    <span>View Location Map</span>
                    <FaArrowRight className="text-[8px] transform group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <div className="w-full h-24 rounded-lg overflow-hidden border border-brand-brown/30 relative">
                    <iframe
                      title="Sandur Polytechnic Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.3467612781427!2d76.549219!3d15.08225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77b8555e71ba2%3A0x2a98f12c1db4ebbe!2sSandur%20Polytechnic%20Yeshwantnagar!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditations & Board Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold font-mono">
              Accreditations
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.aicte-india.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-brand-brown/40 border border-brand-brown/80 rounded-xl p-3.5 hover:border-brand-gold/45 transition-all duration-300 w-full"
              >
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center p-0.5">
                  <img
                    src="https://resources.finalsite.net/images/f_auto,q_auto/v1703055445/sgrschoolcom/jsh4bzgefi1coaa5gbih/download911.jpg"
                    alt="AICTE Logo"
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white block">AICTE Approved</span>
                  <span className="text-[8px] text-[#b3a493] block">Govt. of India</span>
                </div>
              </a>
              <a
                href="https://dtek.karnataka.gov.in/english"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-brand-brown/40 border border-brand-brown/80 rounded-xl p-3.5 hover:border-brand-gold/45 transition-all duration-300 w-full"
              >
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center p-0.5">
                  <img
                    src="https://resources.finalsite.net/images/f_auto,q_auto/v1703055612/sgrschoolcom/gnzpjvgga3l32itbva2c/download1111.jpg"
                    alt="DTE Logo"
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white block">Affiliated to DTE</span>
                  <span className="text-[8px] text-[#b3a493] block">Govt. of Karnataka</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Text Removed */}
        <div className="border-t border-brand-brown/30 pt-8 pb-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#90806d] gap-4">
            <p>© {new Date().getFullYear()} Sandur Polytechnic, Yeshwantnagar. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
