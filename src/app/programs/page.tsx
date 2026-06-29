"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaMicrochip, 
  FaBolt, 
  FaTools, 
  FaHardHat, 
  FaClock, 
  FaUserPlus, 
  FaArrowRight,
  FaClipboardList,
  FaEye,
  FaRocket,
  FaInfoCircle,
  FaCode,
  FaChevronRight
} from "react-icons/fa";

interface LabDetail {
  name: string;
  desc: string;
  image: string;
}

interface FacultyDetail {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  avatar: string;
  photo: string;
  email: string;
  specialization: string[];
  subjects: string[];
}

interface BranchTheme {
  isDark: boolean;
  cardBg: string;
  titleText: string;
  descText: string;
  subText: string;
  glow: string;
  btnBg: string;
  primaryText: string;
  secondaryText: string;
  bannerClass: string;
  accentBorder: string;
  tabActive: string;
  tabInactive: string;
  iconGlow: string;
  bulletColor: string;
}

interface ProgramDetail {
  id: string;
  title: string;
  icon: any;
  intake: number;
  duration: string;
  description: string;
  image: string;
  vision: string;
  mission: string[];
  scope: string;
  concepts: string[];
  labs: LabDetail[];
  faculty: FacultyDetail[];
  theme: BranchTheme;
}

const programsData: ProgramDetail[] = [
  {
    id: "cse",
    title: "Computer Science & Engg.",
    icon: FaLaptopCode,
    intake: 60,
    duration: "3 Years (6 Semesters)",
    description: "The program covers various learning outcomes in the field of Computer science and Information technology. The curriculum contains several courses like Basic Engg skills, Core IT skills, Programming skills, Project Management skills etc.",
    image: "/images/branch_cse.png",
    vision: "To offer quality technical education embedded with leadership qualities and social responsibilities to enable students to develop into globally competitive professionals with enhanced skills in the field of information technology.",
    mission: [
      "M1: To impart knowledge with relevant theoretical and practical aspects of Computer Engineering through effective teaching learning process.",
      "M2: To build confidence, technical skills and competitiveness by enhancing leadership qualities and teamwork.",
      "M3: To create a conducive environment to attain professionalism and pursue higher education with moral values and become useful to employer as well as to the society."
    ],
    scope: "Placements in the field of Information Technology, Automation, E-Commerce, E-Governance, Networking etc.",
    concepts: [
      "Programming in C, C++, Java, SQL, ASP and .NET and Python",
      "Web Designing & Frontend/Backend Systems",
      "PC Hardware and Networking Troubleshooting",
      "Database Designing using Oracle / MS Access",
      "Internetworking and Network Security",
      "Artificial Intelligence with Internet of Things (IoT)",
      "Cloud computing architecture"
    ],
    labs: [
      { name: "PC HARDWARE & NETWORKING LAB", desc: "This Lab helps students acquire practical knowledge of computer hardware, networking and more specifically trouble shooting hardware and networking issues.", image: "/images/lab_hardware.png" },
      { name: "SOFTWARE CENTRE", desc: "It has computers with industry standard configurations and latest software to help the students master skills such as building websites, mobile apps with multimedia features, data analysis.", image: "/images/lab_software.png" },
      { name: "IT SKILLS LAB", desc: "This computer lab has the resources to impart knowledge of MS Office, Programming in Python and Java. It is also used for analysing and developing optimised programs using data structure and algorithms.", image: "/images/lab_it.png" }
    ],
    faculty: [
      { 
        name: "Mr. Anil Kumar M. G.", 
        designation: "Head of Department", 
        qualification: "M.Tech (CSE)", 
        experience: "12+ Years",
        avatar: "AK",
        photo: "/images/avatar_male.png",
        email: "anilkumar.cs@sanpoly.edu.in",
        specialization: ["Cloud Computing", "Enterprise Architectures", "Database Scaling"],
        subjects: ["Web Designing", "Database Management Systems", "IT Skills"]
      },
      { 
        name: "Mrs. Deepa K. R.", 
        designation: "Senior Lecturer", 
        qualification: "B.E. (CS)", 
        experience: "7+ Years",
        avatar: "DK",
        photo: "/images/avatar_female.png",
        email: "deepa.cs@sanpoly.edu.in",
        specialization: ["Software Engineering", "Web UX/UI Systems", "Object Oriented Designs"],
        subjects: ["Java Programming", "C++ Object Oriented Programming", "PC Troubleshooting"]
      },
      { 
        name: "Mr. Ravishankar S.", 
        designation: "Lecturer", 
        qualification: "M.Tech (IT)", 
        experience: "9+ Years",
        avatar: "RS",
        photo: "/images/avatar_male.png",
        email: "ravishankar.cs@sanpoly.edu.in",
        specialization: ["Cyber Security", "Network Protocols", "Python & Automation"],
        subjects: ["Computer Networks", "Programming in C", "Data Structures with Algorithms"]
      }
    ],
    theme: {
      isDark: true,
      cardBg: "bg-[#090d14]/95 border-emerald-500/25 text-[#00ff66] shadow-md",
      titleText: "text-emerald-400 font-mono tracking-tight",
      descText: "text-emerald-100/90 font-mono",
      subText: "text-emerald-400 font-mono",
      glow: "shadow-lg shadow-emerald-500/10",
      btnBg: "bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-500/20",
      primaryText: "text-emerald-50 font-mono",
      secondaryText: "text-emerald-400",
      bannerClass: "brightness-[0.6] contrast-[1.05]",
      accentBorder: "border-emerald-500/25",
      tabActive: "bg-gradient-to-r from-emerald-500 to-teal-500 text-black border-emerald-500 shadow-md shadow-emerald-500/20",
      tabInactive: "bg-brand-cream/35 border-brand-brown/10 text-brand-brown/70 hover:text-emerald-600 hover:border-brand-brown/20",
      iconGlow: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      bulletColor: "bg-emerald-400"
    }
  },
  {
    id: "ece",
    title: "Electronics & Comm. Engg.",
    icon: FaMicrochip,
    intake: 60,
    duration: "3 Years (6 Semesters)",
    description: "Equips students with comprehensive skill sets in telecom devices, embedded circuits, VLSI, and automation boards, preparing them for telecommunications and hardware industries.",
    image: "/images/branch_ece.jpg",
    vision: "To provide state-of-the-art technical education in electronics and communications, fostering leadership, research aptitude, and ethical values for global career readiness.",
    mission: [
      "M1: To deliver high-quality academic training in analog, digital, and embedded communication systems.",
      "M2: To enable students to design hardware prototypes for industrial automation and IoT applications.",
      "M3: To bridge academia and industry with active internship cycles, ensuring professional competency."
    ],
    scope: "Design and testing in Telecom, Embedded Systems, Semiconductor fabrication, Consumer Electronics, and IoT industries.",
    concepts: [
      "Microcontroller & Microprocessor Coding",
      "Analog & Digital Communication Systems",
      "VLSI Circuit Design & Hardware PCB Fabrication",
      "Internet of Things (IoT) & Smart Sensors",
      "Fiber Optic & Satellite Communication Systems"
    ],
    labs: [
      { name: "MICROCONTROLLER & EMBEDDED SYSTEMS LAB", desc: "Allows students to interface sensors, motors, and displays with 8051 and AVR microcontrollers for real-world projects.", image: "/images/quick_facts.png" },
      { name: "DIGITAL ELECTRONICS & VLSI LAB", desc: "Provides hands-on simulation tools for FPGA coding, IC systems verification, and logic gate testing operations.", image: "/images/bg_ece.png" },
      { name: "COMMUNICATION SYSTEMS LAB", desc: "Facilitates practical tuning, modulation, and testing of signals using high-frequency digital storage oscilloscopes.", image: "/images/overall_development.png" }
    ],
    faculty: [
      { 
        name: "Mrs. Shruthi B. V.", 
        designation: "Head of Department", 
        qualification: "M.Tech (VLSI)", 
        experience: "14+ Years",
        avatar: "SB",
        photo: "/images/avatar_female.png",
        email: "shruthi.ec@sanpoly.edu.in",
        specialization: ["VLSI Architectures", "Microchip Design", "Analog Synthesis"],
        subjects: ["VLSI Design", "Microcontrollers", "Analog Circuits"]
      },
      { 
        name: "Mr. Madhusudhan T.", 
        designation: "Senior Lecturer", 
        qualification: "M.Tech (Embedded)", 
        experience: "8+ Years",
        avatar: "MT",
        photo: "/images/avatar_male.png",
        email: "madhusudhan.ec@sanpoly.edu.in",
        specialization: ["Embedded RTOS", "IoT Automation Systems", "PCB Design"],
        subjects: ["Digital Electronics", "Embedded Systems Lab", "Signals & Systems"]
      },
      { 
        name: "Mrs. Kavitha R.", 
        designation: "Lecturer", 
        qualification: "B.E. (E&C)", 
        experience: "6+ Years",
        avatar: "KR",
        photo: "/images/avatar_female.png",
        email: "kavitha.ec@sanpoly.edu.in",
        specialization: ["Satellite Telecoms", "Optical Transmission", "Microwave Waveguides"],
        subjects: ["Communication Systems", "Basic Electronics", "Fiber Optic Lab"]
      }
    ],
    theme: {
      isDark: false,
      cardBg: "bg-white border-brand-brown/10 text-brand-brown shadow-sm",
      titleText: "text-brand-brown font-serif",
      descText: "text-brand-brown-light",
      subText: "text-cyan-600 font-bold",
      glow: "shadow-sm hover:shadow-md",
      btnBg: "bg-cyan-600 hover:bg-cyan-750 text-[#fcfbfa] shadow-cyan-600/10",
      primaryText: "text-brand-brown",
      secondaryText: "text-cyan-600",
      bannerClass: "brightness-[0.7] contrast-[1.0]",
      accentBorder: "border-brand-brown/10 hover:border-cyan-500/20",
      tabActive: "bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-600/10",
      tabInactive: "bg-brand-cream/35 border-brand-brown/10 text-brand-brown/70 hover:text-cyan-600 hover:border-brand-brown/20",
      iconGlow: "bg-cyan-50 text-cyan-600 border border-cyan-200/50",
      bulletColor: "bg-cyan-500"
    }
  },
  {
    id: "eee",
    title: "Electrical & Electronics Engg.",
    icon: FaBolt,
    intake: 60,
    duration: "3 Years (6 Semesters)",
    description: "Focuses on providing robust skills in circuit installation, electrical motor handling, grid design, power distribution, and digital PLCs for industrial applications.",
    image: "/images/branch_eee.png",
    vision: "To develop technically proficient, socially responsible, and innovative electrical engineers capable of addressing global energy and smart grid challenges.",
    mission: [
      "M1: To provide comprehensive practical knowledge of heavy electrical machinery and power transmissions.",
      "M2: To foster skills in renewable energy integration, solar power grids, and battery management systems.",
      "M3: To nurture professional ethics and safety codes essential for power plant operations."
    ],
    scope: "Placements in Power Plants, Smart Grids, EV Manufacturing, Industrial Automation, and Energy Consultancies.",
    concepts: [
      "AC/DC Motor Controls & Power Generators",
      "Renewable Energy Systems & Solar Grid Integrations",
      "Power Electronics Converters & Battery Chargers",
      "Programmable Logic Controllers (PLCs) & SCADA",
      "High-Voltage Transmission & Electrical Estimating"
    ],
    labs: [
      { name: "ELECTRICAL MACHINES LAB", desc: "Equipped with industrial-grade generators, dynamos, alternators, and synchronous motors for load characteristics testing.", image: "/images/quick_facts.png" },
      { name: "POWER ELECTRONICS LAB", desc: "Focuses on triggering circuits, rectifiers, choppers, and inverters used in modern electric vehicle drivetrains.", image: "/images/bg_eee.png" },
      { name: "PLC & INDUSTRIAL CONTROLS LAB", desc: "Features logic trainers and programmable controls to simulate automated factory assembly lines and energy monitoring.", image: "/images/overall_development.png" }
    ],
    faculty: [
      { 
        name: "Mr. Nagaraj G. M.", 
        designation: "Head of Department", 
        qualification: "B.E., M.Tech", 
        experience: "15+ Years",
        avatar: "NM",
        photo: "/images/avatar_male.png",
        email: "nagaraj.ee@sanpoly.edu.in",
        specialization: ["High Voltage Transmissions", "Grid Stability", "Generator Protections"],
        subjects: ["Electrical Machines", "Power Transmission & Distribution", "High Voltage Lab"]
      },
      { 
        name: "Mrs. Sunitha K.", 
        designation: "Senior Lecturer", 
        qualification: "M.Tech (Power Elec)", 
        experience: "9+ Years",
        avatar: "SK",
        photo: "/images/avatar_female.png",
        email: "sunitha.ee@sanpoly.edu.in",
        specialization: ["EV Power Drivetrains", "Battery Management", "Chopper Inverters"],
        subjects: ["Power Electronics", "Renewable Energy Sources", "Drivetrains Lab"]
      },
      { 
        name: "Mr. Chandrashekar P.", 
        designation: "Lecturer", 
        qualification: "B.E. (EEE)", 
        experience: "7+ Years",
        avatar: "CP",
        photo: "/images/avatar_male.png",
        email: "chandrashekar.ee@sanpoly.edu.in",
        specialization: ["PLC Programming", "SCADA Visualizations", "Estimating & Costing"],
        subjects: ["Industrial Automation", "SCADA Systems Lab", "Electrical Design"]
      }
    ],
    theme: {
      isDark: false,
      cardBg: "bg-white border-brand-brown/10 text-brand-brown shadow-sm",
      titleText: "text-brand-brown font-serif",
      descText: "text-brand-brown-light",
      subText: "text-brand-gold font-bold",
      glow: "shadow-sm hover:shadow-md",
      btnBg: "bg-brand-gold hover:bg-brand-brown text-brand-brown hover:text-white shadow-brand-gold/10",
      primaryText: "text-brand-brown",
      secondaryText: "text-brand-gold",
      bannerClass: "brightness-[0.7] contrast-[1.0]",
      accentBorder: "border-brand-brown/10 hover:border-brand-gold/20",
      tabActive: "bg-brand-gold text-brand-brown border-brand-gold shadow-md shadow-brand-gold/10",
      tabInactive: "bg-brand-cream/35 border-brand-brown/10 text-brand-brown/70 hover:text-brand-gold hover:border-brand-brown/20",
      iconGlow: "bg-brand-cream text-brand-gold border border-brand-gold/20",
      bulletColor: "bg-brand-gold"
    }
  },
  {
    id: "mech",
    title: "Mechanical Engg.",
    icon: FaTools,
    intake: 60,
    duration: "3 Years (6 Semesters)",
    description: "A combination of solid engineering theory and rigorous shop-floor training. Learn assembly operations, thermal engines, hydraulics, CAD designs, and manufacturing tools.",
    image: "/images/branch_mech.png",
    vision: "To prepare students for professional mechanical engineering careers through rigorous hands-on shop floor practice and technical CAD designs.",
    mission: [
      "M1: To build solid understanding of thermodynamics, machine tools, and metallurgy engineering concepts.",
      "M2: To train students on advanced CNC machining, tooling codes, and computer-aided manufacturing.",
      "M3: To cultivate teamwork and manufacturing safety protocols matching industrial compliance guidelines."
    ],
    scope: "Careers in Automobile Manufacturing, Aerospace Systems, HVAC, Power Generation, and Robotics Automation.",
    concepts: [
      "CAD/CAM Modelling (SolidWorks / AutoCAD)",
      "CNC G-Code / M-Code Programming",
      "Thermodynamics & IC Engine Troubleshooting",
      "Hydraulics, Pneumatics & Fluid Machinery",
      "Industrial Safety, Lathe Operations & Welding Specs"
    ],
    labs: [
      { name: "MACHINE SHOP / CNC WORKSHOP", desc: "Features heavy lathe machines, shaper machines, and a digital CNC mill to execute precise metal cutting designs.", image: "/images/quick_facts.png" },
      { name: "CAD/CAM DESIGN LAB", desc: "A computational lab hosting design tools to model complex mechanical parts and generate CNC manufacturing paths.", image: "/images/bg_mech.png" },
      { name: "THERMAL & FLUID MACHINERY LAB", desc: "Equipped with test rigs for diesel engines, petrol engines, and pumps to measure mechanical efficiencies.", image: "/images/overall_development.png" }
    ],
    faculty: [
      { 
        name: "Mr. Raghavendra R.", 
        designation: "Head of Department", 
        qualification: "M.Tech (Machine Design)", 
        experience: "16+ Years",
        avatar: "RR",
        photo: "/images/avatar_male.png",
        email: "raghavendra.me@sanpoly.edu.in",
        specialization: ["Static/Dynamic Machinery Design", "Vibration analysis", "Metallurgy"],
        subjects: ["Machine Design", "Materials Science", "Vibration Lab"]
      },
      { 
        name: "Mr. Basavaraj S.", 
        designation: "Senior Lecturer", 
        qualification: "B.E. (Mechanical)", 
        experience: "10+ Years",
        avatar: "BS",
        photo: "/images/avatar_male.png",
        email: "basavaraj.me@sanpoly.edu.in",
        specialization: ["Thermodynamics", "IC Engine Tuning", "Pneumatics Controls"],
        subjects: ["Thermal Engineering", "Fluid Mechanics Lab", "Lathe Operations"]
      },
      { 
        name: "Mr. Pavan Kumar D.", 
        designation: "Lecturer", 
        qualification: "M.Tech (CAD/CAM)", 
        experience: "8+ Years",
        avatar: "PK",
        photo: "/images/avatar_male.png",
        email: "pavan.me@sanpoly.edu.in",
        specialization: ["SolidWorks modeling", "CNC milling codes", "Robotic kinematics"],
        subjects: ["CAD/CAM Design", "CNC Programming Lab", "Workshop Practice"]
      }
    ],
    theme: {
      isDark: false,
      cardBg: "bg-white border-brand-brown/10 text-brand-brown shadow-sm",
      titleText: "text-brand-brown font-serif",
      descText: "text-brand-brown-light",
      subText: "text-orange-600 font-bold",
      glow: "shadow-sm hover:shadow-md",
      btnBg: "bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/10",
      primaryText: "text-brand-brown",
      secondaryText: "text-orange-600",
      bannerClass: "brightness-[0.7] contrast-[1.0]",
      accentBorder: "border-brand-brown/10 hover:border-orange-500/20",
      tabActive: "bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-600/10",
      tabInactive: "bg-brand-cream/35 border-brand-brown/10 text-brand-brown/70 hover:text-orange-600 hover:border-brand-brown/20",
      iconGlow: "bg-orange-50 text-orange-600 border border-orange-200/50",
      bulletColor: "bg-orange-500"
    }
  },
  {
    id: "civil",
    title: "Civil Engg.",
    icon: FaHardHat,
    intake: 60,
    duration: "3 Years (6 Semesters)",
    description: "Provides foundation skills in land surveying, drawing plans, concrete mixing standards, soil testing, and construction site management for modern infrastructure.",
    image: "/images/branch_civil.jpg",
    vision: "To cultivate high-fidelity structural planners, surveyors, and infrastructure construction managers committed to sustainable community development.",
    mission: [
      "M1: To impart precision training in geographic land surveying using state-of-the-art Total Stations.",
      "M2: To build expertise in concrete mix technology, soil quality tests, and materials structural checking.",
      "M3: To promote green building norms and cost estimation efficiency in modern city construction projects."
    ],
    scope: "Placements in Real Estate, Urban Planning, Highway Engineering, Surveying firms, and Municipal Departments.",
    concepts: [
      "Geographic Land Surveying (Total Station / GPS)",
      "Structural Drafting & AutoCAD Plan Designs",
      "Concrete Mix Proportioning & Quality Testing",
      "Soil Mechanics & Foundation Bearing Capacity",
      "Project Costing, Estimating & Construction Safety"
    ],
    labs: [
      { name: "SURVEYING & TOTAL STATION LAB", desc: "Hosts advanced electronic total stations, theodolites, and leveling instruments for physical mapping layouts.", image: "/images/quick_facts.png" },
      { name: "CONCRETE & MATERIAL TESTING LAB", desc: "Equipped with compression testing machines, sieve shakers, and cement testing apparatus for stress checks.", image: "/images/bg_civil.jpg" },
      { name: "GEOTECHNICAL & HYDRAULICS LAB", desc: "Enables direct analysis of soil bearing capacity, soil quality tests, and fluid dynamics tests on channel flows.", image: "/images/overall_development.png" }
    ],
    faculty: [
      { 
        name: "Mr. Siddeshwar H.", 
        designation: "Head of Department", 
        qualification: "M.Tech (Structures)", 
        experience: "13+ Years",
        avatar: "SH",
        photo: "/images/avatar_male.png",
        email: "siddeshwar.ce@sanpoly.edu.in",
        specialization: ["Reinforced Concrete Designs", "Steel Structural Plannings", "Seismic analysis"],
        subjects: ["Structural Drafting", "Concrete Mix Technology", "Stress Lab"]
      },
      { 
        name: "Mrs. Rashmi M. G.", 
        designation: "Senior Lecturer", 
        qualification: "B.E. (Civil)", 
        experience: "8+ Years",
        avatar: "RM",
        photo: "/images/avatar_female.png",
        email: "rashmi.ce@sanpoly.edu.in",
        specialization: ["Total Station Surveyings", "GIS Physical Mappings", "Green building codes"],
        subjects: ["Surveying Lab", "GPS Layout Mapping", "Cost Estimations"]
      },
      { 
        name: "Mr. Kumaraswamy T.", 
        designation: "Lecturer", 
        qualification: "M.Tech (Geotech)", 
        experience: "6+ Years",
        avatar: "KT",
        photo: "/images/avatar_male.png",
        email: "kumaraswamy.ce@sanpoly.edu.in",
        specialization: ["Soil Bearing Capacities", "Shear Strength mechanics", "Fluid dynamics"],
        subjects: ["Geotechnical Lab", "Hydraulics Channel Flows", "Construction Safety"]
      }
    ],
    theme: {
      isDark: false,
      cardBg: "bg-white border-brand-brown/10 text-brand-brown shadow-sm",
      titleText: "text-brand-brown font-serif",
      descText: "text-brand-brown-light",
      subText: "text-sky-600 font-bold",
      glow: "shadow-sm hover:shadow-md",
      btnBg: "bg-sky-600 hover:bg-sky-750 text-white shadow-sky-600/10",
      primaryText: "text-brand-brown",
      secondaryText: "text-sky-600",
      bannerClass: "brightness-[0.7] contrast-[1.0]",
      accentBorder: "border-brand-brown/10 hover:border-sky-500/20",
      tabActive: "bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/10",
      tabInactive: "bg-brand-cream/35 border-brand-brown/10 text-brand-brown/70 hover:text-sky-600 hover:border-brand-brown/20",
      iconGlow: "bg-sky-50 text-sky-600 border border-sky-200/50",
      bulletColor: "bg-sky-500"
    }
  }
];

// Stagger entry animation presets for lists
const listContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring" as const, 
      stiffness: 260, 
      damping: 22 
    } 
  }
};


export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState("cse");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyDetail | null>(null);

  const currentProgram = programsData.find((p) => p.id === activeTab) || programsData[0];
  const theme = currentProgram.theme;

  // Hash router triggers tab selections
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const programIds = ["cse", "ece", "eee", "mech", "civil"];
      if (programIds.includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  // Return the appropriate welcome text and styling class matching the branch's theme
  const getBranchWelcomeData = (progId: string) => {
    switch (progId) {
      case "cse":
        return {
          text: ">>> WELCOME TO COMPUTER SCIENCE DEPARTMENT",
          className: "font-pixel text-[10px] sm:text-xs text-emerald-400/95 tracking-widest mb-2 uppercase flex flex-wrap"
        };
      case "ece":
        return {
          text: ">>> WELCOME TO ELECTRONICS & COMM. DEPARTMENT",
          className: "font-mono text-[10px] sm:text-xs text-cyan-400/95 tracking-wider mb-2 uppercase flex flex-wrap"
        };
      case "eee":
        return {
          text: ">>> WELCOME TO ELECTRICAL & ELECTRONICS DEPARTMENT",
          className: "font-mono font-bold text-[10px] sm:text-xs text-brand-gold/95 tracking-widest mb-2 uppercase flex flex-wrap"
        };
      case "mech":
        return {
          text: ">>> WELCOME TO MECHANICAL ENGINEERING DEPARTMENT",
          className: "font-sans font-black text-[10px] sm:text-xs text-orange-400/95 tracking-[0.2em] mb-2 uppercase flex flex-wrap"
        };
      case "civil":
        return {
          text: ">>> WELCOME TO CIVIL ENGINEERING DEPARTMENT",
          className: "font-serif italic text-[10px] sm:text-xs text-sky-400/95 tracking-wide mb-2 uppercase flex flex-wrap"
        };
      default:
        return {
          text: ">>> WELCOME TO ACADEMIC DEPARTMENTS",
          className: "font-mono text-[10px] sm:text-xs text-white/90 tracking-widest mb-2 uppercase flex flex-wrap"
        };
    }
  };

  const welcomeData = getBranchWelcomeData(currentProgram.id);
  const welcomeLetters = Array.from(welcomeData.text);

  // Return the appropriate React icon for each syllabus concept card based on the branch ID
  const getConceptIcon = (progId: string) => {
    switch (progId) {
      case "cse": return FaCode;
      case "ece": return FaMicrochip;
      case "eee": return FaBolt;
      case "mech": return FaTools;
      case "civil": return FaHardHat;
      default: return FaGraduationCap;
    }
  };

  const ConceptIcon = getConceptIcon(currentProgram.id);

  return (
    <div className="pt-12 bg-[#fcfbfa] text-brand-brown min-h-screen relative overflow-hidden transition-colors duration-500">
      
      {/* Dynamic Background Ambience Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence mode="wait">
          {activeTab === "cse" && (
            <motion.div
              key="cse-ambience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {/* Matrix code syntax lines */}
              {[
                "const sanpoly = new College();",
                "import { cse, ece, eee } from 'sanpoly';",
                "function buildFuture() { return Success; }",
                "01011001 01010011 01100001",
                "git commit -m 'Release Success'",
                "npm run dev --host 0.0.0.0",
                "Object.assign(student, { skills: 100 })",
                "class Engineer extends Student {}"
              ].map((codeLine, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    opacity: [0.03, 0.09, 0.03], 
                    x: i % 2 === 0 ? [-35, 20, -35] : [35, -20, 35],
                    y: [100 + i * 90, (100 + i * 90) - 25, 100 + i * 90] 
                  }}
                  transition={{ 
                    duration: 14 + i * 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute text-emerald-600/35 text-[9px] sm:text-xs font-mono font-bold whitespace-nowrap"
                  style={{ left: i % 2 === 0 ? "4%" : "auto", right: i % 2 !== 0 ? "4%" : "auto" }}
                >
                  {codeLine}
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "ece" && (
            <motion.div
              key="ece-ambience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {/* Circuit tracks overlay */}
              <svg className="absolute inset-0 w-full h-full stroke-cyan-600/[0.04] stroke-[1.2] fill-none">
                <path d="M 40 120 L 160 120 L 220 180 L 220 280 L 120 380 L 40 380" />
                <path d="M 850 180 L 730 240 L 730 360 L 780 410 L 880 410" />
                <circle cx="220" cy="180" r="3" fill="#0891b2" className="opacity-20" />
                <circle cx="730" cy="240" r="3" fill="#0891b2" className="opacity-20" />
              </svg>
              {/* Blinking silicon LEDs */}
              {[
                { top: "18%", left: "6%" },
                { top: "42%", right: "10%" },
                { top: "68%", left: "12%" },
                { top: "52%", right: "6%" }
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.25, 1], 
                    opacity: [0.08, 0.28, 0.08],
                    boxShadow: ["0 0 3px rgba(8,145,178,0.03)", "0 0 8px rgba(8,145,178,0.2)", "0 0 3px rgba(8,145,178,0.03)"]
                  }}
                  transition={{ 
                    duration: 2.5 + i, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute w-2.5 h-2.5 rounded-full bg-cyan-500"
                  style={{ ...pos }}
                />
              ))}
            </motion.div>
          )}

          {activeTab === "eee" && (
            <motion.div
              key="eee-ambience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {/* Electric charge waves */}
              {[1, 2, 3, 4].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    opacity: [0.015, 0.05, 0.015], 
                    scale: [0.95, 1.15, 0.95],
                    y: [120 + i * 110, 100 + i * 110, 120 + i * 110]
                  }}
                  transition={{ 
                    duration: 9 + i * 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute text-brand-gold/15 text-[100px] sm:text-[150px] font-black"
                  style={{ 
                    left: i % 2 === 0 ? "5%" : "auto", 
                    right: i % 2 !== 0 ? "5%" : "auto",
                    top: `${15 + i * 20}%` 
                  }}
                >
                  <FaBolt />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "mech" && (
            <motion.div
              key="mech-ambience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {/* Spinning structural mechanical gears */}
              {[
                { size: "text-[180px] sm:text-[250px]", top: "18%", left: "-4%", dir: 1 },
                { size: "text-[220px] sm:text-[300px]", top: "48%", right: "-6%", dir: -1 },
                { size: "text-[140px] sm:text-[200px]", top: "72%", left: "1%", dir: 1 }
              ].map((gear, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: gear.dir * 360 
                  }}
                  transition={{ 
                    duration: 32 + i * 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className={`absolute text-brand-brown/[0.025] ${gear.size}`}
                  style={{ top: gear.top, left: gear.left, right: gear.right }}
                >
                  <FaTools />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "civil" && (
            <motion.div
              key="civil-ambience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-[linear-gradient(rgba(195,140,76,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(195,140,76,0.012)_1px,transparent_1px)] bg-[size:36px_36px]"
            >
              {/* Draft Blueprint drawing shapes */}
              <svg className="absolute inset-0 w-full h-full stroke-brand-gold/[0.04] stroke-[1.2] fill-none">
                <circle cx="150" cy="250" r="100" strokeDasharray="4 4" />
                <circle cx="780" cy="380" r="140" strokeDasharray="8 4" />
                <line x1="0" y1="250" x2="350" y2="250" />
                <line x1="780" y1="100" x2="780" y2="700" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Animated Header Watermarks (Drifting/pulsing/moving logs matching active tab in brand-brown-light) */}
      <div className="absolute top-0 left-0 right-0 h-[220px] pointer-events-none overflow-hidden select-none">
        <AnimatePresence mode="wait">
          
          {/* CSE Watermark (Tmux, neovim configurations, scrolling build logs) */}
          {activeTab === "cse" && (
            <motion.div
              key="cse-header-watermark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.48, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative font-mono text-[9px] sm:text-xs text-brand-brown-light"
            >
              <div className="absolute top-4 left-6 right-6 border-b border-brand-brown/10 pb-1 flex justify-between items-center text-[9px] uppercase tracking-wider opacity-75 font-mono">
                <span>[session: sanpoly-cse] 1:nvim* 2:zsh- 3:vtop</span>
                <span>home Oct 17 3:20 PM</span>
              </div>

              <motion.pre 
                animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-9 left-10 leading-[1.05] text-[7.5px] opacity-75 font-mono text-brand-brown hidden md:block"
              >
{`      Help me,
  Obi-Wan Kenobi!
      /\\_/\\
     ( o.o )
      > ^ <
     [  _  ]
`}
              </motion.pre>

              <motion.div
                initial={{ y: 220 }}
                animate={{ y: -150 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -ml-28 space-y-1.5 font-mono text-[9px] opacity-70 text-brand-brown-light/80 hidden sm:block text-left"
              >
                <div>&gt; webpack compiled in 1430ms</div>
                <div>[HMR] update complete successfully</div>
                <div>GET /programs/cse 200 OK - 85ms</div>
                <div>Compiled 45 local modules successfully</div>
                <div>Ready on http://localhost:3000</div>
                <div>&gt; dev server listening on host: 0.0.0.0</div>
                <div>[INFO] initialising browser agent tests...</div>
                <div>[SUCCESS] sandbox compiles verified clean</div>
                <div>&gt; git commit -m "update programs layout"</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-9 right-10 space-y-0.5 text-right opacity-80 font-mono"
              >
                <div>+ scriptencoding utf-8</div>
                <div>source ~/.config/nvim/plugins.vim</div>
                <div>set number relativenumber</div>
                <div>set cursorline cursorcolumn</div>
                <div>
                  jarvis on 🌿 master [!]
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                    className="inline-block w-1.5 h-3 bg-brand-brown ml-1 align-middle"
                  />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -5, 0], x: [0, -2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 left-[28%] space-y-0.5 opacity-70 hidden lg:block font-mono"
              >
                <div>vtop for APY4HV2R982405 - Load: 6.93 6.68</div>
                <div>- iTerm2       13.2% CPU  2:Memory</div>
                <div>- WindowServer  8.1% CPU  1:Memory</div>
                <div>- Slack Helper  4.1% CPU  3:Memory</div>
              </motion.div>
            </motion.div>
          )}

          {/* ECE Watermark (Oscilloscope scrolling sine/square wave FULL WIDTH) */}
          {activeTab === "ece" && (
            <motion.div
              key="ece-header-watermark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.48, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative font-mono text-[9px] sm:text-xs text-brand-brown-light"
            >
              <div className="absolute top-4 left-6 right-6 border-b border-brand-brown/10 pb-1 flex justify-between items-center text-[9px] uppercase tracking-wider opacity-75 font-mono">
                <span>[rigol ds1054z: digital oscilloscope]</span>
                <span>freq: 50.00Hz | Vpp: 5.00V | full width display</span>
              </div>

              {/* Full Width Oscilloscope Waveform Screen */}
              <svg className="absolute top-8 left-6 right-6 w-[calc(100%-48px)] h-[130px] opacity-85 stroke-brand-brown-light stroke-[1.5] fill-none">
                {/* Scope grid lines stretching fully */}
                <line x1="0" y1="65" x2="2000" y2="65" strokeDasharray="3 3" className="stroke-brand-brown-light/15" />
                <line x1="100" y1="0" x2="100" y2="130" strokeDasharray="3 3" className="stroke-brand-brown-light/15" />
                <line x1="300" y1="0" x2="300" y2="130" strokeDasharray="3 3" className="stroke-brand-brown-light/15" />
                <line x1="500" y1="0" x2="500" y2="130" strokeDasharray="3 3" className="stroke-brand-brown-light/15" />
                <line x1="700" y1="0" x2="700" y2="130" strokeDasharray="3 3" className="stroke-brand-brown-light/15" />
                <line x1="900" y1="0" x2="900" y2="130" strokeDasharray="3 3" className="stroke-brand-brown-light/15" />
                <line x1="1100" y1="0" x2="1100" y2="130" strokeDasharray="3 3" className="stroke-brand-brown-light/15" />
                <line x1="1300" y1="0" x2="1300" y2="130" strokeDasharray="3 3" className="stroke-brand-brown-light/15" />
                
                {/* Scrolling full width sine wave */}
                <motion.path
                  d="M 0 65 Q 40 10, 80 65 T 160 65 T 240 65 T 320 65 T 400 65 T 480 65 T 560 65 T 640 65 T 720 65 T 800 65 T 880 65 T 960 65 T 1040 65 T 1120 65 T 1200 65 T 1280 65 T 1360 65"
                  animate={{ x: [-80, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="stroke-brand-brown"
                />
                
                {/* Scrolling full width square wave */}
                <motion.path
                  d="M 0 95 L 35 95 L 35 115 L 70 115 L 70 95 L 105 95 L 105 115 L 140 115 L 140 95 L 175 95 L 175 115 L 210 115 L 210 95 L 245 95"
                  animate={{ x: [-70, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                  className="stroke-brand-brown-light/45"
                />
              </svg>
            </motion.div>
          )}

          {/* EEE Watermark (Pulsing glowing LED bulb art, radiating electromagnetic circles, 3-phase Delta parameters) */}
          {activeTab === "eee" && (
            <motion.div
              key="eee-header-watermark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.48, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative font-mono text-[9px] sm:text-xs text-brand-brown-light"
            >
              <div className="absolute top-4 left-6 right-6 border-b border-brand-brown/10 pb-1 flex justify-between items-center text-[9px] uppercase tracking-wider opacity-75 font-mono">
                <span>[electrical smart grid: bus coupler active]</span>
                <span>power_factor: 0.98 | active_load: 450kW</span>
              </div>

              {/* Glowing LED Bulb ASCII (Pulsing state brightness) */}
              <motion.pre
                animate={{ opacity: [0.45, 0.9, 0.45], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-10 leading-[1.05] text-[8px] sm:text-[9px] opacity-80 font-mono text-brand-brown text-left"
              >
{`       ,---.       * LED BULB GLOW *
      /  #  \\      status: [ACTIVE / ON]
     |  (o)  |     voltage: 230V AC
      \\  |  /      current: 45mA
       \`---'       luminance: 850lm
       |||||       temp: 42°C
`}
              </motion.pre>

              {/* Radiating electromagnetic flux ripples (SVG circles) */}
              <svg className="absolute top-8 left-[220px] w-[180px] h-[130px] stroke-brand-brown/20 stroke-[1.2] fill-none hidden sm:block">
                {[30, 55, 80].map((radius, idx) => (
                  <motion.circle
                    key={idx}
                    cx="40"
                    cy="65"
                    r={radius}
                    animate={{ 
                      scale: [1, 1.25, 1],
                      opacity: [0.15, 0.55, 0.15]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: idx * 0.5, 
                      ease: "easeInOut" 
                    }}
                  />
                ))}
              </svg>

              {/* 3-Phase parameters status panel */}
              <motion.pre
                animate={{ x: [0, -4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-9 right-10 leading-[1.15] text-[8px] sm:text-[9px] opacity-75 font-mono text-brand-brown text-right"
              >
{`   [ 3-Phase Power Feed ]
   Line 1: 230.4V ~~ 50.01Hz
   Line 2: 229.8V ~~ 49.98Hz
   Line 3: 231.1V ~~ 50.02Hz
   
   Delta Delta Wye Configuration (Δ-Δ-Y)
`}
              </motion.pre>
            </motion.div>
          )}

          {/* Mechanical Watermark (Rotating gears train, Piston crankshaft assembly moving) */}
          {activeTab === "mech" && (
            <motion.div
              key="mech-header-watermark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.48, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative font-mono text-[9px] sm:text-xs text-brand-brown-light"
            >
              <div className="absolute top-4 left-6 right-6 border-b border-brand-brown/10 pb-1 flex justify-between items-center text-[9px] uppercase tracking-wider opacity-75 font-mono">
                <span>[catia v5 engine assembly simulation]</span>
                <span>rpm: 2400 | temp: 85°C | stroke: 4</span>
              </div>

              {/* Finite Element Stress limits shifted to the LEFT side */}
              <motion.pre
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-9 left-10 leading-[1.1] text-[8px] sm:text-[9px] opacity-75 font-mono text-brand-brown text-left"
              >
{`   [ Stress FEA Analysis ]
   Max Stress limit: 240 MPa
   Yield threshold:  350 MPa
   Factor of Safety: 1.45
   
   Convergence: SUCCESSFUL
`}
              </motion.pre>

              {/* Running mechanical piston crankshaft assembly (Moving rod in the middle) */}
              <div className="absolute top-9 left-1/3 flex items-start space-x-8">
                <pre className="leading-none text-[7.5px] opacity-45 font-mono text-brand-brown hidden md:block">
{`   [ Cylinder Block ]
     +---------+
     |  Comb.  |
     +---------+
`}
                </pre>
                <motion.pre
                  animate={{ y: [-6, 7, -6] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="leading-[1.02] text-[8px] sm:text-[9px] opacity-80 font-mono text-brand-brown text-left"
                >
{`     |===|====|   <- Piston Head
     |   |    |
     |  [P]   |
     |   |    |
     |   /    |   <- Connecting Rod
     |  /     |
     | O      |   <- Crankshaft Pin
`}
                </motion.pre>
              </div>

              {/* Rotating gear icon train shifted to the RIGHT side */}
              <div className="absolute top-8 right-10 flex items-center space-x-3 flex-row-reverse space-x-reverse hidden sm:flex">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="text-5xl opacity-45 text-brand-brown"
                >
                  <FaTools />
                </motion.div>
                <div className="text-[8px] leading-tight font-mono text-brand-brown/60 text-right">
                  <div>GEAR TRAIN</div>
                  <div>ratio: 1:1.5</div>
                  <div>status: RUNNING</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Civil Watermark (AutoCAD blueprints building frame drawing on the RIGHT side, GIS specs on the LEFT side) */}
          {activeTab === "civil" && (
            <motion.div
              key="civil-header-watermark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.48, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative font-mono text-[9px] sm:text-xs text-brand-brown-light"
            >
              <div className="absolute top-4 left-6 right-6 border-b border-brand-brown/10 pb-1 flex justify-between items-center text-[9px] uppercase tracking-wider opacity-75 font-mono">
                <span>[autodesk revit: structural drafting layout]</span>
                <span>elevation: +120.35m | level: l12</span>
              </div>

              {/* Geographic Total Station GPS Coordinates details shifted to the LEFT side */}
              <motion.pre
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-9 left-10 leading-[1.1] text-[8px] sm:text-[9px] opacity-75 font-mono text-brand-brown text-left"
              >
{`   [ GIS Coordinates ]
   Northing: 14205.432m
   Easting:  5690.128m
   Elevation: 120.354m
   
   Satelites: 12 (FIXED 3D)
   Precision: +/-0.005m
`}
              </motion.pre>

              {/* Growing Building Blueprint Wireframe shifted to the RIGHT side */}
              <svg className="absolute top-7 right-10 w-[280px] h-[135px] opacity-75 stroke-brand-brown stroke-[1.2] fill-none hidden sm:block">
                {/* Baseline foundation */}
                <line x1="10" y1="120" x2="260" y2="120" className="stroke-brand-brown/40 stroke-[2]" />
                
                {/* Structural columns growing */}
                <motion.line 
                  x1="30" y1="120" x2="30" y2="40" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.line 
                  x1="90" y1="120" x2="90" y2="40" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 }}
                />
                <motion.line 
                  x1="150" y1="120" x2="150" y2="40" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.4 }}
                />
                <motion.line 
                  x1="210" y1="120" x2="210" y2="40" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 }}
                />

                {/* horizontal beams drawing */}
                <motion.line 
                  x1="30" y1="80" x2="210" y2="80" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.0 }}
                />
                <motion.line 
                  x1="30" y1="40" x2="210" y2="40" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 }}
                />
              </svg>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Floating blur patterns */}
      <div className="absolute top-40 right-[-100px] w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-20 left-[-150px] w-[500px] h-[500px] bg-brand-brown/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Main Grid Container */}
      <section className="pt-2 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none relative z-10">
        
        {/* Main Section Header */}
        <div className="mb-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-brand-brown">
            Academic Programs (Courses)
          </h1>
        </div>

        {/* Navigation Tab Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2.5 mb-8 border-b border-brand-brown/5 pb-6">
          {programsData.map((prog) => {
            const Icon = prog.icon;
            const isActive = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => {
                  setActiveTab(prog.id);
                  if (typeof window !== "undefined") {
                    window.history.pushState(null, "", `#${prog.id}`);
                  }
                }}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase border transition-all duration-300 transform active:scale-95 ${
                  isActive ? prog.theme.tabActive : prog.theme.tabInactive
                }`}
              >
                <Icon className={`text-sm flex-shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                <span>{prog.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="space-y-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            
            {/* DEPARTMENT LANDING BANNER (Full-width widescreen deck at the top) */}
            <div className={`relative w-full h-[260px] sm:h-[350px] rounded-3xl overflow-hidden shadow-2xl border flex flex-col justify-end p-6 sm:p-10 z-10 ${theme.accentBorder}`}>
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${theme.bannerClass}`}
                style={{ backgroundImage: `url('${currentProgram.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-0" />
              
              {/* Overlay Details */}
              <div className="relative z-10 space-y-4">
                <motion.div 
                  className={welcomeData.className}
                  initial="hidden"
                  animate="visible"
                >
                  {welcomeLetters.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: index * 0.03,
                        duration: 0.1
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="flex items-center space-x-3">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${theme.iconGlow}`}>
                    <currentProgram.icon className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-white text-2xl sm:text-4xl font-extrabold font-serif tracking-tight leading-none flex items-center">
                      {theme.isDark && currentProgram.id === "cse" ? (
                        <>
                          <span className="font-mono text-emerald-500/80 mr-2.5 text-base sm:text-2xl font-bold">guest@sanpoly:~$</span>
                          <span className="font-mono">Computer Science & Engg.</span>
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="inline-block w-2.5 h-6 bg-emerald-400 ml-1.5 align-middle shadow-md"
                          />
                        </>
                      ) : (
                        <span>{currentProgram.title}</span>
                      )}
                    </h2>
                  </div>
                </div>
                
                {/* Course specs list */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <FaClock className="text-[9px]" />
                    <span>{currentProgram.duration}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <FaUserPlus className="text-[9px]" />
                    <span>Intake: {currentProgram.intake} Seats</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-gold/25 border border-brand-gold/30 text-brand-gold font-mono text-[10px] font-bold uppercase tracking-wider">
                    AICTE Approved
                  </span>
                </div>
              </div>

              {/* Watermark in corner */}
              <div className="absolute top-6 right-8 text-white/5 text-8xl font-black font-mono select-none uppercase pointer-events-none hidden sm:block">
                {currentProgram.id}
              </div>
            </div>

            {/* Department Body Grid Layout (Split-screen) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Panel: Description, Vision & Mission, Syllabus & Labs */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Description Card */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <FaInfoCircle className={`text-base ${theme.secondaryText}`} />
                    <h3 className={`text-xs uppercase tracking-[0.2em] font-bold font-mono ${theme.secondaryText}`}>
                      About the Department
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-justify text-brand-brown-light transition-colors">
                    {currentProgram.description}
                  </p>
                </div>

                {/* Vision & Mission of the Department */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vision Box */}
                  <div className={`border rounded-2xl p-6 space-y-3 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${theme.cardBg} ${theme.accentBorder}`}>
                    <div className={`absolute left-0 top-6 bottom-6 w-0.5 ${
                      theme.isDark ? "bg-emerald-400" : theme.bulletColor
                    }`} />
                    <div className="flex items-center space-x-2">
                      <FaEye className={`text-base ${theme.secondaryText}`} />
                      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] font-mono block ${theme.secondaryText}`}>Vision statement</span>
                    </div>
                    <p className={`text-[11px] sm:text-xs leading-relaxed text-justify pl-1 relative z-10 ${theme.primaryText}`}>
                      {currentProgram.vision}
                    </p>
                    <FaEye className={`absolute right-4 bottom-2 text-6xl opacity-[0.03] pointer-events-none ${theme.secondaryText}`} />
                  </div>

                  {/* Mission Box */}
                  <div className={`border rounded-2xl p-6 space-y-3 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${theme.cardBg} ${theme.accentBorder}`}>
                    <div className={`absolute left-0 top-6 bottom-6 w-0.5 ${
                      theme.isDark ? "bg-emerald-500" : theme.bulletColor
                    }`} />
                    <div className="flex items-center space-x-2">
                      <FaRocket className={`text-base ${theme.secondaryText}`} />
                      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] font-mono block ${theme.secondaryText}`}>Mission objectives</span>
                    </div>
                    <ul className={`space-y-2.5 text-[11px] sm:text-xs leading-relaxed text-justify pl-1 relative z-10 ${theme.primaryText}`}>
                      {currentProgram.mission.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FaChevronRight className={`text-[9px] flex-shrink-0 mt-1 mr-2 ${theme.bulletColor}`} />
                          <span>{item.substring(4)}</span>
                        </li>
                      ))}
                    </ul>
                    <FaRocket className={`absolute right-4 bottom-2 text-6xl opacity-[0.03] pointer-events-none ${theme.secondaryText}`} />
                  </div>
                </div>

                {/* Concepts List */}
                <div className="space-y-4">
                  <h3 className={`text-xs uppercase tracking-[0.2em] font-bold font-mono ${theme.secondaryText}`}>
                    Important Concepts & Syllabus
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentProgram.concepts.map((concept) => (
                      <motion.div
                        whileHover={{ y: -3, scale: 1.015 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        key={concept}
                        className={`border rounded-xl p-3.5 flex items-center space-x-3 shadow-sm hover:shadow transition-colors ${theme.cardBg} ${theme.accentBorder}`}
                      >
                        <ConceptIcon className={`text-sm flex-shrink-0 ${theme.secondaryText}`} />
                        <span className={`text-[11px] sm:text-xs font-semibold ${theme.primaryText}`}>{concept}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Specific Lab Cards (Unified grid for all branches) */}
                <div className="space-y-5">
                  <h3 className={`text-xs uppercase tracking-[0.2em] font-bold font-mono ${theme.secondaryText}`}>
                    Laboratory Facilities & Centres
                  </h3>
                  <motion.div 
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-3 gap-5"
                  >
                    {currentProgram.labs.map((lab, idx) => (
                      <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        key={lab.name}
                        className={`border rounded-2xl overflow-hidden shadow-md flex flex-col justify-between h-full ${theme.cardBg} ${theme.accentBorder}`}
                      >
                        {/* 1. Above Image */}
                        <div 
                          className="w-full h-40 bg-cover bg-center border-b border-brand-brown/5 flex-shrink-0"
                          style={{ backgroundImage: `url('${lab.image}')` }}
                        />

                        {/* 2. Below Content */}
                        <div className="p-5 space-y-2 flex-grow flex flex-col justify-between text-left">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className={`text-[10px] font-mono font-bold tracking-widest ${theme.secondaryText}`}>
                                LAB 0{idx + 1}
                              </span>
                            </div>
                            <h4 className={`text-xs sm:text-sm font-extrabold font-serif leading-tight tracking-wide min-h-[36px] ${theme.primaryText}`}>
                                {lab.name}
                            </h4>
                          </div>
                          <p className={`text-[11px] leading-relaxed text-justify opacity-90 pt-2 border-t border-brand-brown/5 ${theme.descText}`}>
                            {lab.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Department Faculty Section (Unified grid for all branches) */}
                <div className="space-y-5">
                  <h3 className={`text-xs uppercase tracking-[0.2em] font-bold font-mono ${theme.secondaryText}`}>
                    Department Faculty & Leadership
                  </h3>
                  <motion.div 
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-3 gap-5"
                  >
                    {currentProgram.faculty.map((member) => (
                      <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        key={member.name}
                        onClick={() => setSelectedFaculty(member)}
                        className={`border rounded-2xl overflow-hidden shadow-md flex flex-col justify-between h-full cursor-pointer ${theme.cardBg} ${theme.accentBorder}`}
                      >
                        {/* 1. Above Image */}
                        <div 
                          className="w-full h-48 bg-cover bg-top border-b border-brand-brown/5 flex-shrink-0"
                          style={{ backgroundImage: `url('${member.photo}')` }}
                        />

                        {/* 2. Below Content */}
                        <div className="p-5 space-y-3 flex-grow flex flex-col justify-between text-left">
                          <div className="space-y-1">
                            <h4 className={`text-xs sm:text-sm font-extrabold font-serif leading-tight ${theme.primaryText}`}>
                              {member.name}
                            </h4>
                            <span className={`text-[9px] uppercase font-bold tracking-wider block ${theme.secondaryText}`}>
                              {member.designation}
                            </span>
                          </div>
                          
                          <div className="space-y-1 pt-2.5 border-t border-brand-brown/5 text-[10px]">
                            <span className={`block opacity-95 ${theme.descText}`}>
                              <strong>Qual:</strong> {member.qualification}
                            </span>
                            <span className={`block opacity-95 ${theme.descText}`}>
                              <strong>Exp:</strong> {member.experience}
                            </span>
                            <span className={`block mt-2 font-bold text-[8px] uppercase tracking-widest text-right ${theme.secondaryText}`}>
                              Click to View Profile →
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

              </div>

              {/* Right Panel: Scope & Placements, Eligibility specs, and Enquiry form */}
              <div className="lg:col-span-4 space-y-8 sticky top-24">
                
                {/* Placement & Scope block */}
                <div className={`border rounded-2xl p-6 space-y-3.5 shadow-md relative overflow-hidden ${theme.cardBg} ${theme.accentBorder}`}>
                  <div className={`flex items-center space-x-2 ${theme.secondaryText}`}>
                    <FaGraduationCap className="text-xl" />
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] font-mono">Scope & Placements</h4>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed text-justify ${theme.descText}`}>
                    {currentProgram.scope}
                  </p>
                </div>

                {/* Eligibility specs and direct link action */}
                <div className={`border rounded-2xl p-0 overflow-hidden shadow-lg ${theme.cardBg} ${theme.accentBorder}`}>
                  <div className={`p-5 border-b flex items-center space-x-2 ${
                    theme.isDark ? "bg-black/35 border-white/5" : "bg-brand-cream/20 border-brand-brown/5"
                  }`}>
                    <FaClipboardList className={`text-lg ${theme.secondaryText}`} />
                    <h3 className={`text-sm font-bold font-serif ${theme.isDark ? "text-white" : "text-brand-brown"}`}>Quick Summary</h3>
                  </div>
                  <div className="p-6 space-y-5 text-xs font-semibold">
                    <div className="space-y-3.5">
                      <div className={`flex items-center justify-between border-b pb-2 ${theme.isDark ? "border-white/5" : "border-brand-brown/5"}`}>
                        <span className={`${theme.descText}`}>Intake</span>
                        <span className={`font-extrabold ${theme.primaryText}`}>{currentProgram.intake} Seats</span>
                      </div>
                      <div className={`flex items-center justify-between border-b pb-2 ${theme.isDark ? "border-white/5" : "border-brand-brown/5"}`}>
                        <span className={`${theme.descText}`}>Duration</span>
                        <span className={`font-extrabold ${theme.primaryText}`}>{currentProgram.duration.split(" ")[0]} Years</span>
                      </div>
                      <div className="space-y-1 text-left pt-1">
                        <span className={`font-bold block ${theme.primaryText}`}>Eligibility</span>
                        <p className={`leading-relaxed text-[11px] font-medium text-justify ${theme.descText}`}>
                          Successful completion of 10th standard board exam (SSLC) with science and mathematics. Direct 2nd-year entry is valid for ITI graduates.
                        </p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <a
                        href="/admissions#enquiry"
                        className={`w-full py-4 rounded-xl text-center font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 shadow-md transition-all duration-300 ${theme.btnBg}`}
                      >
                        <span>Enquire Admissions</span>
                        <FaArrowRight className="text-[9px]" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </section>

      {/* Faculty Details Modal Overlay */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFaculty(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-md rounded-3xl border overflow-hidden shadow-2xl cursor-default p-6 sm:p-8 space-y-6 ${theme.cardBg} ${theme.accentBorder}`}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  {/* Styled Avatar Circle */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold font-mono border ${theme.iconGlow}`}>
                    {selectedFaculty.avatar}
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-lg font-extrabold font-serif leading-tight ${theme.primaryText}`}>
                      {selectedFaculty.name}
                    </h3>
                    <span className={`text-xs uppercase font-bold tracking-wider block ${theme.secondaryText}`}>
                      {selectedFaculty.designation}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className={`p-2 rounded-xl transition-colors hover:bg-white/10 ${theme.secondaryText}`}
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content Info */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm leading-relaxed">
                
                {/* Qual & Exp */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase font-mono block ${theme.secondaryText}`}>Qualification</span>
                    <span className={`font-semibold ${theme.primaryText}`}>{selectedFaculty.qualification}</span>
                  </div>
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase font-mono block ${theme.secondaryText}`}>Experience</span>
                    <span className={`font-semibold ${theme.primaryText}`}>{selectedFaculty.experience}</span>
                  </div>
                </div>

                {/* Contact Email */}
                <div className="space-y-1">
                  <span className={`text-[10px] uppercase font-mono block ${theme.secondaryText}`}>Official Email</span>
                  <span className={`font-semibold underline ${theme.primaryText}`}>{selectedFaculty.email}</span>
                </div>

                {/* Specializations */}
                <div className="space-y-1.5">
                  <span className={`text-[10px] uppercase font-mono block ${theme.secondaryText}`}>Specialization</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFaculty.specialization.map((spec) => (
                      <span 
                        key={spec} 
                        className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold ${
                          theme.isDark 
                            ? "bg-white/5 border-white/10 text-emerald-400" 
                            : "bg-brand-cream/35 border-brand-brown/10 text-brand-brown-light"
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Courses Handled */}
                <div className="space-y-1.5">
                  <span className={`text-[10px] uppercase font-mono block ${theme.secondaryText}`}>Courses Handled</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFaculty.subjects.map((sub) => (
                      <span 
                        key={sub} 
                        className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold ${
                          theme.isDark 
                            ? "bg-white/5 border-white/10 text-emerald-400" 
                            : "bg-brand-cream/35 border-brand-brown/10 text-brand-brown-light"
                        }`}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
