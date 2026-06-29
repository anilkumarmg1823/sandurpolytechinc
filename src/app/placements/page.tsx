"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaRoute, FaAward, FaIndustry, FaUserCheck } from "react-icons/fa";

const recruitmentSteps = [
  { step: "01", title: "Technical Bootcamps", desc: "Special classes on CAD design, embedded programming, and network routing led by industrial experts before final placement drives." },
  { step: "02", title: "Mock Interview & Soft Skills", desc: "Group discussions, English speaking skills, resume building workshops, and HR panels mock interviews." },
  { step: "03", title: "Apprenticeship Program", desc: "One-year paid industrial training under Board of Apprenticeship Training (BOAT), Govt. of India upon graduation." }
];

const recruiterPartners = [
  { name: "JSW Steel Ltd.", location: "Toranagallu, Ballari", image: "/images/logo_jsw.png" },
  { name: "TATA Motors Ltd.", location: "Pune / Dharwad", image: "/images/logo_tata.png" },
  { name: "L&T Construction", location: "Bengaluru / Chennai", image: "/images/logo_lt.png" },
  { name: "Toyota Kirloskar Motor", location: "Bidadi, Bengaluru", image: "/images/logo_toyota.png" },
  { name: "Wipro Infrastructure", location: "Bengaluru", image: "/images/logo_wipro.png" },
  { name: "Bosch India Ltd.", location: "Bengaluru", image: "/images/logo_bosch.png" },
  { name: "TVS Motor Company", location: "Hosur", image: "/images/logo_tvs.png" },
  { name: "ACC Cement Ltd.", location: "Wadi, Kalaburagi", image: "/images/logo_acc.png" }
];

export default function PlacementsPage() {
  return (
    <div className="pt-20 bg-[#fcfbfa] text-brand-brown min-h-screen">
      
      {/* Stats Quick Grid */}
      <section className="pt-2 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-brown tracking-tight font-serif">
            Training & Placement Cell
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-6 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cream border border-brand-brown/5 flex items-center justify-center text-brand-gold shadow-sm">
              <FaAward className="text-xl" />
            </div>
            <div>
              <span className="text-2xl font-black text-brand-brown block">95%+</span>
              <span className="text-[10px] text-brand-brown-light uppercase tracking-widest block font-mono font-bold">Consistent Placements</span>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cream border border-brand-brown/5 flex items-center justify-center text-brand-brown shadow-sm">
              <FaIndustry className="text-xl" />
            </div>
            <div>
              <span className="text-2xl font-black text-brand-brown block">15+</span>
              <span className="text-[10px] text-brand-brown-light uppercase tracking-widest block font-mono font-bold">Active Industry MoUs</span>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cream border border-brand-brown/5 flex items-center justify-center text-brand-brown shadow-sm">
              <FaUserCheck className="text-xl" />
            </div>
            <div>
              <span className="text-2xl font-black text-brand-brown block">100%</span>
              <span className="text-[10px] text-brand-brown-light uppercase tracking-widest block font-mono font-bold">Apprenticeship Offers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Flow */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-brown/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs font-mono block mb-3">
            PREPARATION ROADMAP
          </span>
          <h2 className="text-3xl font-extrabold text-brand-brown leading-tight">
            How We Get Our Students Placed
          </h2>
          <p className="text-brand-brown-light text-xs md:text-sm mt-3">
            Our multi-stage training module begins from the 4th semester, preparing students to confidently crack industrial testing processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {recruitmentSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="glass-card rounded-2xl p-8 hover:border-brand-brown/15 relative transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl font-black text-brand-gold/15 font-mono mb-4 block">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-brand-brown mb-2">{step.title}</h3>
              <p className="text-brand-brown-light text-xs leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recruiters Wall */}
      <section className="py-24 bg-brand-cream/15 border-y border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs font-mono block mb-3">
              PARTNERS NETWORK
            </span>
            <h2 className="text-3xl font-extrabold text-brand-brown leading-tight">
              Our Prime Recruiters
            </h2>
            <p className="text-brand-brown-light text-xs md:text-sm mt-3">
              These leading manufacturing, infrastructure, and technology brands consistently recruit engineers directly from our campus.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recruiterPartners.map((recruiter, i) => (
              <motion.div
                key={recruiter.name}
                className="glass-card rounded-2xl p-6 border border-brand-brown/5 hover:border-brand-gold/30 text-center transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="w-28 h-12 bg-white rounded-xl flex items-center justify-center p-2 mx-auto mb-4 border border-brand-brown/10 shadow-sm overflow-hidden">
                  <img
                    src={recruiter.image}
                    alt={`${recruiter.name} Logo`}
                    className="w-full h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  />
                </div>
                <h4 className="text-sm font-bold text-brand-brown group-hover:text-brand-gold transition-colors">
                  {recruiter.name}
                </h4>
                <p className="text-[10px] text-brand-brown-light font-bold font-mono uppercase tracking-wider mt-1">
                  {recruiter.location}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Industrial Interaction Cell & Visits */}
      <section id="industrial" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs font-mono block">
              IIIC NETWORK
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-brown">
              Industry-Institute Interaction Cell (IIIC)
            </h2>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              Sandur Polytechnic is strategically located next to heavy steel manufacturing complexes like JSW Steel. Our Industry-Institute Interaction Cell bridges theoretical knowledge with industrial production. We organize routine field trips, guest lectures from industrial heads, and practical research on energy distribution, CAD drafting, and mechanical systems.
            </p>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              This practical immersion guarantees that our diploma holders are equipped with immediate shop-floor operations skills and are ready to contribute from day one of their jobs.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8 border border-brand-brown/5 space-y-4">
              <h3 className="text-base font-bold text-brand-brown flex items-center space-x-2">
                <FaRoute className="text-brand-gold" />
                <span>Industrial Visits Program</span>
              </h3>
              <p className="text-brand-brown-light text-xs leading-relaxed">
                Every semester, students visit high-power generation grids, steel production furnaces, and electronics fabrication facilities to observe engineers performing diagnostics on live assemblies.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 border border-brand-brown/5 space-y-4">
              <h3 className="text-base font-bold text-brand-brown flex items-center space-x-2">
                <FaHandshake className="text-brand-brown-light" />
                <span>State MoUs & Training Agreements</span>
              </h3>
              <p className="text-brand-brown-light text-xs leading-relaxed">
                Sanpoly maintains formal MoUs with industry partners that guarantee internship reservations, curriculum vetting, and final campus recruitment priority options for our top-tier students.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
