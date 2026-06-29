"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGraduationCap, 
  FaEye, 
  FaBuilding, 
  FaBook, 
  FaBed, 
  FaArrowRight 
} from "react-icons/fa";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  // Tab definitions
  const tabs = [
    {
      id: "legacy",
      title: "Our legacy",
      heading: "Our Historic Legacy",
      sub: "FOUNDER PATRON: SHRI M.Y. GHORPADE",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text panel - 7 Columns */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              <strong>Murarirao Yeshwantrao Ghorpade</strong> was born on 7 December 1931. He was the eldest son of the last ruler of the Princely State of Sandur, Maharaja Srimant Yeshwantrao Hindurao Ghorpade. He was an alumnus of the local school Shri Chatrapathi Shivaji Vidyamandir, started by his father ‘His Highness’, Yeshwantrao Ghorpade. 
            </p>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              Having completed his graduation in Bangalore and Masters in Economics Tripos from Cambridge University, he did his bit to continue the process of modernising Sandur and especially the field of education, which is a major determinant of the quality of life.
            </p>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              He was inspired by this vibrant, invigorating spirit of modern India. He was instrumental in setting up various educational institutes in and around the verdant valley of Sandur. Sandur Polytechnic remains one such institute set up in the serene environment of Yeshwantnagar Village in 1988. He believed in education for a better future and providing quality technical education at affordable cost to the rural mass.
            </p>
          </div>
          
          {/* Large Photo panel - 5 Columns with floating effect */}
          <div className="lg:col-span-5 w-full">
            <motion.div 
              whileHover={{ scale: 1.03, y: -6, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-brown/10 aspect-[4/5] bg-brand-cream/15 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/leader_my_ghorpade.png')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#fcfbfa]/90 backdrop-blur-md border border-brand-brown/10 rounded-xl p-4 shadow-md text-center">
                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider block font-mono">Founder Patron</span>
                <span className="text-sm font-black text-brand-brown block mt-0.5">Shri M.Y. Ghorpade</span>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "leadership",
      title: "Leadership and Governance",
      heading: "Governance & Leadership Council",
      sub: "SHIVAPUR SHIKSHANA SAMITI",
      content: (
        <div className="space-y-12">
          {/* Managing Body Info */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-cream/15 border border-brand-brown/10 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-3 font-mono">Managing Body</h4>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              Sandur Polytechnic is managed by the <strong>Shivapur Shikshana Samiti</strong>, Sandur which was founded in 1965 by Late Dr. M.Y. Ghorpade, former Minister for Rural Development & Panchayat Raj, Govt. of Karnataka to cater to educational needs of Sandur and the neighboring areas. The Governing Council of Shivapur Shikshana Samiti comprises representatives from Industries, educationists, and technologists in the region.
            </p>
          </motion.div>

          {/* Leaders List */}
          <div className="space-y-10">
            {/* President */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-brand-brown/5 pt-8 group/card"
            >
              {/* Larger Photo Area */}
              <div className="md:col-span-4 w-full">
                <motion.div 
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="relative rounded-2xl overflow-hidden shadow-md border border-brand-brown/10 aspect-[3/4] bg-brand-cream/15"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-105"
                    style={{ backgroundImage: `url('/images/leader_yashodhara.png')` }}
                  />
                </motion.div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <div className="inline-block px-3 py-1 rounded bg-brand-cream border border-brand-brown/5 text-[9px] font-bold text-brand-gold tracking-wider uppercase font-mono">
                  President
                </div>
                <h4 className="text-xl font-extrabold text-brand-brown font-serif">Smt. Yashodhara S Ghorpade</h4>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  She has since advised the Polytechnic and has been instrumental towards its excellence and ethics. She has done her BA in English, Psychology and Marathi from Karnataka University and B.Ed in English and Social studies from Annamalai University and MA in English from Karnataka University.
                </p>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  In 1970, she was associated with the initiation and establishment of the Deepika Nursery School and the Deepayan English School at Hospet with classes from 1 to 10 with responsibility for administrative functions and academic supervision as the President of the Association and the Principal of the School. She was the Principal for Sandur Girls’ Residential School for more than a decade from 1991 to 2013 and is currently the Director.
                </p>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  In 2019, she took over as the President of the Shivapur Shikshana Samiti and overlooks the overall functioning of the institutions including Sandur Polytechnic.
                </p>
              </div>
            </motion.div>

            {/* Director */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-brand-brown/5 pt-8 group/card"
            >
              {/* Larger Photo Area */}
              <div className="md:col-span-4 w-full">
                <motion.div 
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="relative rounded-2xl overflow-hidden shadow-md border border-brand-brown/10 aspect-[3/4] bg-brand-cream/15"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-105"
                    style={{ backgroundImage: `url('/images/leader_bahirji.png')` }}
                  />
                </motion.div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <div className="inline-block px-3 py-1 rounded bg-brand-cream border border-brand-brown/5 text-[9px] font-bold text-brand-gold tracking-wider uppercase font-mono">
                  Director
                </div>
                <h4 className="text-xl font-extrabold text-brand-brown font-serif">Bahirji. A. Ghorpade</h4>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  Bahirji. A. Ghorpade an alumni of Sandur Residential School has been Director of Shivapur Shikshana Samiti since 2020. In addition to which he holds the post of Managing Director of The Sandur Manganese & Iron Ores Limited.
                </p>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  He is a commerce graduate with specialization in finance from Christ University, Bengaluru and holds a master’s degree in Finance and Management from Cranfield University, United Kingdom. He has completed his Company Secretary Executive Program from the Institute of Company Secretaries of India.
                </p>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  He is passionate and driven by zeal to take the polytechnic to newer heights through all-round development of the students academically as well as professional practices. His emphasis is on students gaining excellent technical skills to become industry ready and entrepreneurs. His vision is to imbibe the pillars of education and provide the best teaching and infrastructure facilities for an all-around development for the students and make them good citizens of the world.
                </p>
              </div>
            </motion.div>

            {/* Principal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-brand-brown/5 pt-8 group/card"
            >
              {/* Larger Photo Area */}
              <div className="md:col-span-4 w-full">
                <motion.div 
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="relative rounded-2xl overflow-hidden shadow-md border border-brand-brown/10 aspect-[3/4] bg-brand-cream/15"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-105"
                    style={{ backgroundImage: `url('/images/leader_radhakrishna.png')` }}
                  />
                </motion.div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <div className="inline-block px-3 py-1 rounded bg-brand-cream border border-brand-brown/5 text-[9px] font-bold text-brand-gold tracking-wider uppercase font-mono">
                  Principal
                </div>
                <h4 className="text-xl font-extrabold text-brand-brown font-serif">Dr. Radhakrishna R. K</h4>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  Dr. Radhakrishna R. K. has been serving as Principal at Sandur Polytechnic since 19th May 2026. As the Principal, he oversees 5 departments with over 100 staff and 800 students. He has a dedicated team of efficient faculty, which is the motivation behind his perseverance to make the polytechnic as one of the best in the state and fulfill the dream of Late Shri M. Y. Ghorpade of giving quality education to the rural masses.
                </p>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  He worked as Dean – IQAC and Associate Professor in the Department of Robotics and Automation at RRCE since 2011. He brings 16 years of professional experience, including 15 years in academia and 1 year in industry. Also worked as a caretaker officer for NCC army wing for 2 years. He was awarded his Ph.D. in January 2024 from Visvesvaraya Technological University (VTU). He completed his Master’s degree in Machine Design from University BDT College of Engineering in 2010 and earned his Bachelor’s degree from Tontadarya College of Engineering in 2008.
                </p>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  His areas of expertise include CAD, CAE, and Natural Fiber Composites. He has published 6 research papers in Scopus-indexed journals, 4 papers in international conferences, 4 papers in national conferences, 3 papers in international journals, and 1 paper in a national journal. Additionally, he holds 3 Indian patents.
                </p>
                <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
                  Dr. Radhakrishna is a recognized Research Supervisor under VTU and is currently guiding one research scholar. He has successfully guided more than 25 undergraduate projects and has organized and conducted Faculty Development Programs (FDPs), workshops, seminars, and industrial visits. He is a life member of the Indian Society of Mechanical Engineers (ISME).
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      )
    },
    {
      id: "vision",
      title: "Vision & Mission",
      heading: "Core Purpose & Values",
      sub: "GUIDING STARS",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-brand-cream/15 border border-brand-brown/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-cream border border-brand-brown/5 flex items-center justify-center text-brand-brown shadow-sm">
              <FaEye className="text-xl" />
            </div>
            <h4 className="text-lg font-bold text-brand-brown font-serif">Our Vision</h4>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              To make every student of the Sandur Polytechnic well educated, trained and globally competitive for meaningful contribution to the socio-economic development of the Country.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-brand-cream/15 border border-brand-brown/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-cream border border-brand-brown/5 flex items-center justify-center text-brand-gold shadow-sm">
              <FaGraduationCap className="text-xl" />
            </div>
            <h4 className="text-lg font-bold text-brand-brown font-serif">Our Mission</h4>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              To provide high quality technical education and training at affordable cost to boys and girls to develop skills and enable them acquire engineering, entrepreneurial and leadership qualities.
            </p>
          </motion.div>
        </div>
      )
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      heading: "World-Class Facilities",
      sub: "CAMPUS ENVIRONMENT",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Central Library", icon: FaBook, desc: "Stocked with thousands of textbooks, journals, reference books, and e-learning resources covering all disciplines." },
            { title: "Modern Laboratories", icon: FaBuilding, desc: "Well-equipped specialized computer coding labs, electronics systems testing labs, mechanical workshops, and civil concrete labs." },
            { title: "Hostel Accommodation", icon: FaBed, desc: "Quasi-residential clean hostels for boys and girls with highly secure premises, nutritious catering, and strict academic discipline." }
          ].map((f) => {
            const Icon = f.icon;
            return (
              <motion.div 
                whileHover={{ y: -4 }}
                key={f.title} 
                className="bg-brand-cream/15 border border-brand-brown/10 rounded-2xl p-6 space-y-4 shadow-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-cream border border-brand-brown/5 flex items-center justify-center text-brand-brown shadow-sm">
                  <Icon className="text-lg" />
                </div>
                <h4 className="text-base font-bold text-brand-brown font-serif">{f.title}</h4>
                <p className="text-brand-brown-light text-xs leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      )
    },
    {
      id: "affiliations",
      title: "Affiliations",
      heading: "Accreditations & Board Recognition",
      sub: "DCTE & AICTE APPROVED",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              Sandur polytechnic is recognized by the <strong>Directorate of Collegiate & Technical Education (DCTE)</strong>, Govt. of Karnataka and <strong>All India Council for Technical Education (AICTE)</strong>, New Delhi. The Polytechnic is affiliated to the Board of Technical Examinations (BTE), Bengaluru, which is responsible for all the examination related matters.
            </p>
            <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
              The AICTE grants Extension Of Approval (EOA) to the Polytechnics every year on submission of online application with all the relevant documents of compliance of stipulated norms. The mandatory documents submitted cover all the aspects of quality technical education including social relevance and value system.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="https://dtek.karnataka.gov.in/english"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-brown hover:bg-brand-brown-light text-[#fcfbfa] font-bold text-xs tracking-wider flex items-center justify-center space-x-2 shadow-md active:scale-95 transition-all duration-200"
            >
              <span>CLICK HERE FOR DCTE</span>
              <FaArrowRight className="text-[9px]" />
            </a>
            <a
              href="https://www.aicte-india.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#fcfbfa] border border-brand-brown/15 hover:border-brand-brown hover:bg-brand-cream/35 text-brand-brown font-bold text-xs tracking-wider flex items-center justify-center space-x-2 transition-all duration-200"
            >
              <span>CLICK HERE FOR AICTE</span>
              <FaArrowRight className="text-[9px]" />
            </a>
          </div>
        </div>
      )
    },
    {
      id: "alumni",
      title: "Alumni",
      heading: "Global Career Migration",
      sub: "GRADUATE STORIES",
      content: (
        <div className="space-y-4">
          <p className="text-brand-brown-light text-xs md:text-sm leading-relaxed text-justify">
            Sanpoly Alumni have migrated to global hubs, joining companies such as JSW Steel, Toyota Kirloskar, Bosch Group, TATA Motors, and L&T. They act as active mentors for our current student batches, providing internship references and technical webinars.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Global Network", "Industry Leaders", "Webinars & Mentorship", "Career Placements"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-brand-cream text-brand-gold text-[10px] font-bold uppercase tracking-wider font-mono border border-brand-brown/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )
    }
  ];

  // Hash router triggers tab selections
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const tabIndex = tabs.findIndex(t => t.id === hash);
      if (tabIndex !== -1) {
        setActiveTab(tabIndex);
      }
    }
  }, []);

  return (
    <div className="pt-20 bg-[#fcfbfa] text-brand-brown min-h-screen">
      
      {/* Tight Combined Header + Tab Grid Container */}
      <section className="pt-2 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        
        {/* Main Section Header inside the container (Zero wasted space above) */}
        <div className="mb-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-brown tracking-tight font-serif">
            College Legacy & Leadership
          </h1>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Panel: Vertical navigation box (4/12 width on desktop) */}
          <div className="lg:col-span-4 w-full">
            <div className="border border-brand-brown/10 rounded-2xl bg-white p-6 shadow-md divide-y divide-brand-brown/5">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(index);
                      // Update location hash silently
                      if (typeof window !== "undefined") {
                        window.history.pushState(null, "", `#${tab.id}`);
                      }
                    }}
                    className={`py-4 px-3 cursor-pointer transition-all select-none first:pt-0 last:pb-0 ${
                      isActive 
                        ? "text-brand-gold font-extrabold" 
                        : "text-brand-brown hover:text-brand-gold hover:pl-4 transition-all duration-300 font-semibold"
                    }`}
                  >
                    <span className={`text-base sm:text-lg font-serif tracking-wide block ${isActive ? "underline decoration-2 underline-offset-8" : ""}`}>
                      {tab.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Expanded Content Panel (8/12 width on desktop) */}
          <div className="lg:col-span-8 w-full bg-white border border-brand-brown/10 rounded-2xl p-8 sm:p-10 shadow-md relative min-h-[450px] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-6"
              >
                <div>
                  <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-[10px] font-mono block mb-2">
                    {tabs[activeTab].sub}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-brown font-serif tracking-tight">
                    {tabs[activeTab].heading}
                  </h3>
                  <div className="h-0.5 w-16 bg-brand-gold mt-3 rounded" />
                </div>
                
                <div className="pt-2">
                  {tabs[activeTab].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
