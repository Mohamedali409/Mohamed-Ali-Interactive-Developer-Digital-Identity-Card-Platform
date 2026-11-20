'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";

import { useSettings } from "@/context/SettingsContext";

const Footer = () => {
  const { t, settings } = useSettings();
  const isAr = settings.language === 'ar';

  const socialLinks = [
    { icon: Github, href: "https://github.com/Mohamedali409", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohamed-ali409",
      label: "LinkedIn",
    },
    { icon: Mail, href: "/contact", label: "Contact Form" },
  ];

  const quickLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.contact, path: "/contact" },
    { name: t.nav.certificates, path: "/certificates" },
    { name: isAr ? "سياسة الخصوصية" : "Privacy Policy", path: "/privacy" },
  ];

  const techStack = [
    "Node.js & Express.js",
    "PostgreSQL & MongoDB",
    "TypeScript & REST APIs",
    "Docker & Redis",
    "AWS & CI/CD",
    "React & Next.js",
  ];

  return (
    <footer className="bg-card border-t border-border/50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-display gradient-text">
              {isAr ? "محمد علي" : "Mohamed Ali"}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              {isAr
                ? "مطور Full-Stack ومهندس برمجيات بتركيز على الأنظمة الخلفية، متخصص في بناء الأنظمة القابلة للتوسع وإدارة الحاويات بـ Docker والخدمات السحابية AWS ودمج تقنيات الذكاء الاصطناعي."
                : "Full-Stack Developer & Backend-Focused Software Engineer designing high-performance backend systems, microservices architectures, and dependable cloud deployments."}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg glass-effect border border-border/60 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="h-4.5 w-4.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-display">
              {t.common.quickLinks}
            </h3>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Tech Stack Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-display">
              {t.common.techStack}
            </h3>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {isAr ? "محمد علي" : "Mohamed Ali"}. {t.common.allRightsReserved}</p>
          <p className="font-mono">
            {t.common.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
