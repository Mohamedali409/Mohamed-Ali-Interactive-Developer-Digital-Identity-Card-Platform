'use client';

import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Download,
  CheckCircle2,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/context/SettingsContext";

const ContactView = () => {
  const { t, settings } = useSettings();
  const isAr = settings.language === 'ar';

  useSEO({
    title: isAr 
      ? "تواصل معي | محمد علي — مطور Full-Stack ومهندس برمجيات" 
      : "Contact | Mohamed Ali — Full-Stack Developer & Backend Engineer",
    description: isAr
      ? "تواصل مع المهندس محمد علي لمناقشة المشروعات البرمجية، هندسة الأنظمة الخلفية، فرص العمل، والاستشارات التقنية."
      : "Get in touch with Mohamed Ali for software development projects, backend engineering, RESTful APIs, and technical consulting.",
    keywords: isAr
      ? "تواصل مع محمد علي, توظيف مهندس برمجيات, محمد علي, مطور ويب, Backend Developer"
      : "Contact Mohamed Ali, Mohamed Ali, Hire Backend Engineer, Software Engineering Inquiries, Full Stack Developer"
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMsg(data.error || t.contact.errorMsg);
      }
    } catch (err) {
      setErrorMsg(t.contact.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Mohamedali409", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-ali409", label: "LinkedIn" },
  ];

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeading
          as="h1"
          badge={t.contact.badge}
          title={t.contact.title}
          watermark={t.contact.watermark}
          subtitle={t.contact.subtitle}
          size="large"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Info Column */}
          <div className="space-y-8">
            <div className="glass-effect rounded-3xl p-8 border border-border/40 space-y-6">
              <h2 className="text-2xl font-bold font-display">{t.contact.detailsTitle}</h2>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/mohamed-ali409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 hover:bg-primary/10 transition-colors border border-border/30 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-foreground">linkedin.com/in/mohamed-ali409</div>
                  </div>
                </a>

                <a
                  href="https://github.com/Mohamedali409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 hover:bg-primary/10 transition-colors border border-border/30 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">GitHub Profile</div>
                    <div className="text-sm font-bold text-foreground">github.com/Mohamedali409</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 border border-border/30">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{t.contact.locationLabel}</div>
                    <div className="text-sm font-bold text-foreground">{t.contact.locationValue}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border/30">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  {isAr ? "تابع وتواصل عبر المنصات" : "Follow & Connect"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link, idx) => {
                    const IconComp = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl glass-effect border border-border/50 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
                        aria-label={link.label}
                      >
                        <IconComp className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Resume Callout */}
            <div className="glass-effect rounded-3xl p-6 border border-border/40 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold font-display">
                  {isAr ? "هل تود استعراض السيرة الذاتية؟" : "Looking for my CV?"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {isAr ? "استعرض السيرة الذاتية الرقمية المعتمدة" : "View verified digital credentials and profile"}
                </p>
              </div>
              <Button asChild className="shadow-md text-xs">
                <Link href="/cv">
                  {t.common.downloadResume} <Download className="w-3.5 h-3.5 ml-1.5 rtl:mr-1.5 rtl:ml-0" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Form Column */}
          <div className="glass-effect rounded-3xl p-8 md:p-10 border border-border/40 shadow-xl relative">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold font-display">
                  {isAr ? "شكراً لتواصلك!" : "Thank you!"}
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {t.contact.successMsg}
                </p>
                <Button variant="outline" size="sm" onClick={() => setFormSubmitted(false)} className="mt-4">
                  {isAr ? "إرسال رسالة أخرى" : "Send Another Message"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold font-display mb-6">{t.contact.formTitle}</h2>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-destructive/10 text-destructive text-xs font-semibold border border-destructive/20">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-foreground">
                    {t.contact.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? "محمد علي" : "Mohamed Ali"}
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card/60 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-foreground">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card/60 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-foreground">
                    {t.contact.subjectPlaceholder}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={isAr ? "مشروع جديد / فرصة عمل" : "Project Inquiry / Job Opportunity"}
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card/60 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-foreground">
                    {isAr ? "نص الرسالة" : "Message"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card/60 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <Button type="submit" disabled={loading} size="lg" className="w-full shadow-lg text-sm mt-2">
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> {t.contact.sendingBtn}
                    </>
                  ) : (
                    <>
                      {t.contact.sendBtn} <Send className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
