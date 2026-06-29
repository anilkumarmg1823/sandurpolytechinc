"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheckCircle, FaMap } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Name and Message fields are required.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <div className="pt-20 bg-[#fcfbfa] text-brand-brown min-h-screen">
      
      {/* Main Grid: Details on Left, Contact Form on Right */}
      <section className="pt-2 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-brown tracking-tight font-serif">
            Contact Administration
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Info & Map Mock */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Info Cards */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-brand-brown">
                Direct Contact Details
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phones */}
                <div className="glass-card rounded-2xl p-6 border border-brand-brown/10 space-y-3">
                  <FaPhoneAlt className="text-brand-gold text-lg" />
                  <h4 className="text-xs font-bold text-brand-brown uppercase tracking-wider font-mono">
                    Call Campus Office
                  </h4>
                  <p className="text-brand-brown-light text-xs leading-relaxed font-mono font-semibold">
                    +91 94808 38245
                    <br />
                    +91 8395 276006
                  </p>
                </div>

                {/* Emails */}
                <div className="glass-card rounded-2xl p-6 border border-brand-brown/10 space-y-3">
                  <FaEnvelope className="text-brand-gold text-lg" />
                  <h4 className="text-xs font-bold text-brand-brown uppercase tracking-wider font-mono">
                    Email Correspondence
                  </h4>
                  <p className="text-brand-brown-light text-xs leading-relaxed font-mono font-semibold">
                    office@sanpoly.edu.in
                    <br />
                    admissions@sanpoly.edu.in
                  </p>
                </div>

              </div>
            </div>

            {/* Map Placement */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-brand-brown flex items-center gap-3">
                <FaMapMarkerAlt className="text-brand-gold" />
                <span>Campus Location & Maps</span>
              </h2>
              
              <div className="glass-card rounded-2xl p-6 border border-brand-brown/10 space-y-4">
                <div className="flex items-start space-x-3 text-xs font-semibold text-brand-brown/85">
                  <FaMapMarkerAlt className="text-brand-gold mt-1 flex-shrink-0" />
                  <span>
                    Sandur Polytechnic (Sanpoly)
                    <br />
                    Yeshwantnagar - 583124, Sandur Taluk, Ballari District, Karnataka, India
                  </span>
                </div>

                {/* Styled Visual Iframe Map Mockup */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-brand-cream border border-brand-brown/10 flex flex-col items-center justify-center text-center p-6 group">
                  <div className="absolute inset-0 bg-[radial-gradient(#c38c4c_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  <FaMap className="text-3xl text-brand-gold/60 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="text-xs font-bold text-brand-brown relative z-10 mt-3 block">
                    Google Maps Navigation
                  </span>
                  <span className="text-[10px] text-brand-brown-light relative z-10 font-mono mt-1 font-semibold">
                    Latitude: 15.0863° N, Longitude: 76.5594° E
                  </span>
                  <a
                    href="https://maps.google.com/?q=Sandur+Polytechnic+Yeshwantnagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center bg-brand-brown/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-brand-cream tracking-widest uppercase cursor-pointer"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-8 border border-brand-brown/15 sticky top-28 bg-[#fcfbfa]/80 shadow-md">
            <div className="space-y-2 mb-8">
              <h3 className="text-lg font-bold text-brand-brown flex items-center gap-2">
                <FaPaperPlane className="text-brand-gold" />
                <span>Send Us a Message</span>
              </h3>
              <p className="text-brand-brown-light text-xs">
                Have direct inquiries or feedback? Fill up the details below to mail us.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  className="py-16 text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FaCheckCircle className="text-5xl text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-brand-brown">Message Dispatched!</h4>
                  <p className="text-xs text-brand-brown-light max-w-xs mx-auto leading-relaxed font-semibold">
                    Your message has been logged. Our office desk will review your submission and email you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-lg bg-brand-cream border border-brand-brown/10 text-xs font-bold text-brand-brown hover:bg-brand-beige transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="Enter full name"
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="Enter email address"
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      placeholder="General inquiry, Recruitment, admissions..."
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Write Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Type details of your message..."
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-brown to-brand-brown-light text-[#fcfbfa] text-center font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-brand-brown/10"
                  >
                    {status === "submitting" ? (
                      <>
                        <FaSpinner className="animate-spin text-sm" />
                        <span>DISPATCHING MESSAGE...</span>
                      </>
                    ) : (
                      <span>SEND MESSAGE</span>
                    )}
                  </button>

                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
