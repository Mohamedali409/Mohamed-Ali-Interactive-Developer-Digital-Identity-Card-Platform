'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Github, Mail } from "lucide-react";
import Link from "next/link";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      name: "LinkedIn",
      label: "Connect on LinkedIn",
      color: "bg-gradient-to-br from-[#0a66c2] to-[#0077B5] shadow-[0_4px_20px_rgba(0,119,181,0.35)]",
      href: "https://www.linkedin.com/in/mohamed-ali409",
      isExternal: true,
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      label: "View GitHub Profile",
      color: "bg-gradient-to-br from-[#24292e] to-[#1b1f23] shadow-[0_4px_20px_rgba(0,0,0,0.35)]",
      href: "https://github.com/Mohamedali409",
      isExternal: true,
      icon: (
        <Github className="w-6 h-6 text-white" />
      )
    },
    {
      name: "Contact",
      label: "Send a Message",
      color: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb] shadow-[0_4px_20px_rgba(37,99,235,0.35)]",
      href: "/contact",
      isExternal: false,
      icon: (
        <Mail className="w-6 h-6 text-white" />
      )
    }
  ];

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-end gap-3.5">
      {/* Expanded Actions Stack */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3.5 mb-1.5">
            {actions.map((action, index) => (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, scale: 0.7, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: 15 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 350, 
                  damping: 22,
                  delay: (actions.length - 1 - index) * 0.04 
                }}
                className="flex items-center justify-end group pointer-events-auto"
              >
                {/* Action Text Label */}
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                  className="mr-3 px-3 py-1.5 text-xs font-bold rounded-full glass-effect border border-border/40 shadow-lg text-foreground whitespace-nowrap pointer-events-none group-hover:scale-105 transition-transform duration-200"
                >
                  {action.label}
                </motion.span>

                {/* Circular Button */}
                {action.isExternal ? (
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${action.color} border border-white/10 hover:scale-110 active:scale-95 transition-transform duration-200`}
                    aria-label={action.name}
                  >
                    {action.icon}
                  </a>
                ) : (
                  <Link
                    href={action.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${action.color} border border-white/10 hover:scale-110 active:scale-95 transition-transform duration-200`}
                    aria-label={action.name}
                  >
                    {action.icon}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold shadow-xl pointer-events-auto relative z-10 border border-white/10"
        aria-label="Toggle contact menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
