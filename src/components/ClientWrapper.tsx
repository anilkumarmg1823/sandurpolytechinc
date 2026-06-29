"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaTimes, 
  FaPaperPlane, 
  FaArrowRight, 
  FaCommentDots 
} from "react-icons/fa";
import Link from "next/link";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  isWhatsAppLink?: boolean;
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  // Chat States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! 👋 Welcome to Sandur Polytechnic. How can we assist you today? You can type a question below or choose one of our quick topics:",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setUnreadCount(0);
  };

  const getBotResponse = (userText: string): { text: string; isLink?: boolean } => {
    const text = userText.toLowerCase();
    
    if (text.includes("course") || text.includes("program") || text.includes("branch") || text.includes("cse")) {
      return {
        text: "We offer five high-demand 3-year Engineering Diploma programs:\n\n• Computer Science & Engg.\n• Electronics & Comm. Engg.\n• Electrical & Electronics Engg.\n• Mechanical Engg.\n• Civil Engg.\n\nAll programs are AICTE approved and affiliated with DCTE, Karnataka."
      };
    }
    if (text.includes("admission") || text.includes("eligibility") || text.includes("seat") || text.includes("criteria")) {
      return {
        text: "First-year admission requires a pass in Class 10/SSLC (or equivalent) with maths and science. Direct lateral entry into the 3rd semester is open to ITI passed candidates or 12th standard graduates."
      };
    }
    if (text.includes("placement") || text.includes("recruit") || text.includes("job") || text.includes("salary")) {
      return {
        text: "Our college boasts an outstanding 95%+ placement rate. Major corporate partners include JSW Steel, Toyota Kirloskar, TVS Motors, L&T, and Wipro Infrastructure."
      };
    }
    if (text.includes("whatsapp") || text.includes("representative") || text.includes("speak") || text.includes("human") || text.includes("call")) {
      return {
        text: "Connecting you directly to our official admissions cell on WhatsApp...",
        isLink: true
      };
    }
    
    return {
      text: "Thank you for reaching out! To get direct support or detailed assistance, click the button below to message our admissions coordinator on WhatsApp."
    };
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = { sender: "user", text, timestamp };
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      setIsTyping(false);
      const botAns = getBotResponse(text);
      const botMsg: Message = {
        sender: "bot",
        text: botAns.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isWhatsAppLink: botAns.isLink
      };
      
      setMessages(prev => [...prev, botMsg]);

      // If it requested whatsapp redirection, trigger link open after delay
      if (botAns.isLink) {
        setTimeout(() => {
          window.open("https://wa.me/919480838245?text=Hi%2C+I+have+a+query+about+admissions.", "_blank");
        }, 1200);
      }
    }, 1000);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-[#fcfbfa] text-brand-brown selection:bg-brand-gold selection:text-white scroll-smooth">
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <div className="flex flex-col flex-grow lg:pl-20 relative">
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>

            {/* FLOATING ACTION WIDGETS PANEL (Bottom Right) */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-none">
              
              {/* 1. FLOATING APPLY NOW BUTTON */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="pointer-events-auto shadow-xl"
              >
                <Link
                  href="/admissions#enquiry"
                  className="px-5 py-3 rounded-full bg-brand-gold hover:bg-brand-brown hover:text-[#fcfbfa] text-brand-brown font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 active:scale-95 shadow-md border border-brand-gold/20"
                >
                  <span>Apply Now</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </motion.div>

              {/* 2. WHATSAPP CHAT BOT BUTTON */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="pointer-events-auto relative shadow-xl"
              >
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-black animate-bounce z-10">
                    {unreadCount}
                  </span>
                )}
                <button
                  onClick={() => isChatOpen ? setIsChatOpen(false) : handleOpenChat()}
                  className={`w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg border border-white/20`}
                  aria-label="Open support chat"
                >
                  <FaWhatsapp className="text-3xl" />
                </button>
              </motion.div>

              {/* 3. INTERACTIVE CHAT DIALOG CONTAINER */}
              <AnimatePresence>
                {isChatOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                    className="pointer-events-auto w-[calc(100vw-32px)] sm:w-[360px] h-[450px] bg-white border border-brand-brown/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                  >
                    {/* Chat Header */}
                    <div className="bg-[#1c0f05] text-[#ded0be] px-5 py-4 border-b border-brand-brown/10 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black tracking-wider text-white">Sandur Polytechnic Support</h4>
                          <span className="text-[10px] text-brand-gold flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse" />
                            <span>Online • Replies Instantly</span>
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => setIsChatOpen(false)}
                        className="text-[#a0907d] hover:text-white transition-colors"
                      >
                        <FaTimes className="text-base" />
                      </button>
                    </div>

                    {/* Messages List Area */}
                    <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-brand-cream/10 select-text">
                      {messages.map((msg, i) => {
                        const isBot = msg.sender === "bot";
                        return (
                          <div 
                            key={i} 
                            className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                          >
                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs shadow-sm ${
                              isBot 
                                ? "bg-white text-brand-brown border border-brand-brown/5 rounded-tl-none leading-relaxed" 
                                : "bg-brand-brown text-[#fcfbfa] rounded-tr-none leading-relaxed"
                            }`}>
                              <p className="whitespace-pre-line">{msg.text}</p>
                              
                              {isBot && msg.isWhatsAppLink && (
                                <a
                                  href="https://wa.me/919480838245?text=Hi%2C+I+have+a+query+about+admissions."
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-3.5 px-4 py-2 rounded-xl bg-[#25D366] hover:brightness-105 text-white font-bold flex items-center justify-center space-x-1.5 shadow-sm transition-all"
                                >
                                  <FaWhatsapp className="text-sm" />
                                  <span>Message on WhatsApp</span>
                                </a>
                              )}
                              
                              <span className={`text-[8px] mt-1 block text-right ${isBot ? "text-brand-brown-light" : "text-[#ded0be]/70"}`}>
                                {msg.timestamp}
                              </span>
                            </div>
                          </div>
                        );
                      })}

                      {/* Typing indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-white text-brand-brown border border-brand-brown/5 rounded-2xl rounded-tl-none px-4 py-3 text-xs flex items-center space-x-1.5">
                            <FaCommentDots className="text-brand-gold animate-bounce" />
                            <span className="text-[10px] text-brand-brown-light font-medium italic">Admissions Bot is typing...</span>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Topics Triggers */}
                    <div className="p-3 bg-white border-t border-brand-brown/5 flex flex-wrap gap-1.5 flex-shrink-0">
                      {[
                        "What courses are offered?",
                        "Admissions & Eligibility?",
                        "What are placements stats?",
                        "Chat on WhatsApp"
                      ].map((topic) => (
                        <button
                          key={topic}
                          onClick={() => sendMessage(topic)}
                          className="px-3 py-1.5 rounded-full border border-brand-brown/10 hover:border-brand-gold hover:bg-brand-cream/20 text-[10px] font-bold text-brand-brown transition-all duration-200"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>

                    {/* Chat Input Footer */}
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        sendMessage(chatInput);
                      }}
                      className="p-3 bg-white border-t border-brand-brown/10 flex items-center space-x-2 flex-shrink-0"
                    >
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Type your question here..."
                        className="flex-grow px-4 py-2 border border-brand-brown/10 rounded-xl text-xs focus:outline-none focus:border-brand-gold bg-brand-cream/5"
                      />
                      <button
                        type="submit"
                        className="p-2.5 rounded-xl bg-brand-brown hover:bg-brand-gold text-[#fcfbfa] transition-colors"
                        aria-label="Send message"
                      >
                        <FaPaperPlane className="text-xs" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
