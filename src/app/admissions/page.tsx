"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaClipboardList, FaFileInvoiceDollar, FaAward, FaCalendarCheck, FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "cse",
    percentage: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and Phone fields are required.");
      return;
    }
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "cse",
        percentage: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <div className="pt-20 bg-[#fcfbfa] text-brand-brown min-h-screen">
      
      {/* Main Grid: Info Cards on Left, Enquiry Form on Right */}
      <section className="pt-2 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-brown tracking-tight font-serif">
            Admissions 2026-27
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Requirements & Info */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Eligibility Requirements */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-brand-brown flex items-center gap-3">
                <FaGraduationCap className="text-brand-gold" />
                <span>Eligibility Standards</span>
              </h2>
              
              <div className="glass-card rounded-2xl p-6 border border-brand-brown/10 space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-brand-gold font-bold font-mono mb-1">
                    First Year Admission
                  </h4>
                  <p className="text-brand-brown-light text-xs leading-relaxed text-justify">
                    Candidates must have completed their Class 10/SSLC board examination with science and mathematics subjects from a recognized educational board in India.
                  </p>
                </div>
                
                <div className="border-t border-brand-brown/5 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-brand-brown-light font-bold font-mono mb-1">
                    Lateral Entry Admission (Direct to 3rd Sem)
                  </h4>
                  <p className="text-brand-brown-light text-xs leading-relaxed text-justify">
                    Direct admission into the 2nd year (3rd semester) is available for students who have passed their ITI courses or 12th standard (Science/Technical stream) examinations.
                  </p>
                </div>
              </div>
            </div>

            {/* Fee Structure */}
            <div id="fees" className="space-y-6 scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-extrabold text-brand-brown flex items-center gap-3">
                <FaFileInvoiceDollar className="text-brand-gold" />
                <span>Fees & Government Orders</span>
              </h2>
              <div className="glass-card rounded-2xl p-6 border border-brand-brown/10 space-y-3">
                <p className="text-brand-brown-light text-xs leading-relaxed text-justify">
                  Fee structures are strictly regulated in accordance with standard orders from the Directorate of Technical Education (DTE), Govt. of Karnataka.
                </p>
                <ul className="text-xs text-brand-brown/85 font-semibold space-y-2.5 pt-2">
                  <li className="flex justify-between border-b border-brand-brown/5 pb-2">
                    <span>Government Quota Seats Fee</span>
                    <span className="font-extrabold text-brand-brown">As per DTE Norms</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-brown/5 pb-2">
                    <span>Management Quota Seats Fee</span>
                    <span className="font-extrabold text-brand-brown">Contact Administration</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hostel Accomodation Charges</span>
                    <span className="font-extrabold text-brand-brown">Nominal Boarding Cost</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Scholarships */}
            <div id="scholarships" className="space-y-6 scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-extrabold text-brand-brown flex items-center gap-3">
                <FaAward className="text-brand-gold" />
                <span>Scholarship Programme</span>
              </h2>
              <p className="text-brand-brown-light text-xs leading-relaxed text-justify">
                To guarantee equal educational opportunities, Sandur Polytechnic supports eligible candidates in applying for government scholarship schemes, including post-metric, minority welfare, SC/ST social welfare grants, and specialized Merit scholarships.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div id="enquiry" className="lg:col-span-5 glass-card rounded-2xl p-8 border border-brand-brown/15 sticky top-28 scroll-mt-28 shadow-md bg-[#fcfbfa]/80">
            <div className="space-y-2 mb-8">
              <h3 className="text-lg font-bold text-brand-brown flex items-center gap-2">
                <FaCalendarCheck className="text-brand-gold" />
                <span>Online Admission Enquiry</span>
              </h3>
              <p className="text-brand-brown-light text-xs">
                Fill this quick form and our admissions cell will get in touch with you shortly.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  className="py-12 text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FaCheckCircle className="text-5xl text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-brand-brown">Enquiry Submitted!</h4>
                  <p className="text-xs text-brand-brown-light max-w-xs mx-auto leading-relaxed font-semibold">
                    Thank you for your interest in Sandur Polytechnic. Our representative will contact you via email or phone within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2.5 rounded-lg bg-brand-cream border border-brand-brown/10 text-xs font-bold text-brand-brown hover:bg-brand-beige transition-all"
                  >
                    Send Another Enquiry
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
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter student full name"
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Enter mobile number"
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email address"
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Course Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="course" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Preferred Diploma Stream
                    </label>
                    <select
                      id="course"
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all cursor-pointer font-bold"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    >
                      <option value="cse">Computer Science & Engineering</option>
                      <option value="ece">Electronics & Communication</option>
                      <option value="eee">Electrical & Electronics</option>
                      <option value="mech">Mechanical Engineering</option>
                      <option value="civil">Civil Engineering</option>
                    </select>
                  </div>

                  {/* Marks percentage */}
                  <div className="space-y-1.5">
                    <label htmlFor="percentage" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Class 10th / SSLC Marks (%)
                    </label>
                    <input
                      type="text"
                      id="percentage"
                      placeholder="Example: 82%"
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all"
                      value={formData.percentage}
                      onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold text-brand-brown-light uppercase tracking-wider font-mono">
                      Specific Questions or Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Any question regarding fees, hostel, etc."
                      className="w-full bg-[#fcfbfa] border border-brand-brown/10 rounded-xl px-4 py-3 text-xs text-brand-brown placeholder-brand-brown/30 focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-brown to-brand-brown-light text-[#fcfbfa] text-center font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-brand-brown/10"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <FaSpinner className="animate-spin text-sm" />
                        <span>SUBMITTING ENQUIRY...</span>
                      </>
                    ) : (
                      <span>SUBMIT ENQUIRY</span>
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
