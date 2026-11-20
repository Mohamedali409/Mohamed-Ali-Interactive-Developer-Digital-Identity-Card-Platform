'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Calendar, 
  CheckCircle2,
  Search,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { certificates, certificateCategories } from "@/Data/certificates";
import { useSEO } from "@/hooks/useSEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/context/SettingsContext";

const CertificatesView = () => {
  const { t, settings, isRtl } = useSettings();
  const isAr = settings.language === 'ar';

  useSEO({
    title: isAr 
      ? "الاعتمادات والتعليم | محمد علي — مطور Full-Stack ومهندس برمجيات" 
      : "Credentials & Education | Mohamed Ali — Full-Stack Developer",
    description: isAr
      ? "الشهادات التخصصية والدرجات الأكاديمية الرسمية المعتمدة للمهندس محمد علي: دبلومة تطوير البرمجيات بالذكاء الاصطناعي من مبادرة Digilians، وبكالوريوس نظم المعلومات الإدارية بأكاديمية الشروق."
      : "Verified specialized diplomas and academic qualifications earned by Mohamed Ali, including the Digilians AI-Powered Software Development Diploma and an MIS degree from El Shorouk Academy.",
    keywords: isAr
      ? "اعتمادات محمد علي, مبادرة الرواد الرقميون, Digilians, أكاديمية الشروق, نظم المعلومات الإدارية"
      : "Mohamed Ali Credentials, Digilians Diploma, El Shorouk Academy, Management Information Systems, Software Engineering Credentials"
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCertificate, setActiveCertificate] = useState(null);

  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory = selectedCategory === "all" || cert.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      (cert.title && cert.title.toLowerCase().includes(query)) ||
      (cert.titleAr && cert.titleAr.toLowerCase().includes(query)) ||
      (cert.issuer && cert.issuer.toLowerCase().includes(query)) ||
      (cert.issuerAr && cert.issuerAr.toLowerCase().includes(query)) ||
      (cert.description && cert.description.toLowerCase().includes(query)) ||
      (cert.descriptionAr && cert.descriptionAr.toLowerCase().includes(query)) ||
      (cert.category && cert.category.toLowerCase().includes(query)) ||
      (cert.categoryAr && cert.categoryAr.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeading
          as="h1"
          badge={t.certificates.badge}
          title={t.certificates.title}
          watermark={t.certificates.watermark}
          subtitle={t.certificates.subtitle}
          size="large"
        />

        {/* Filter Controls & Search */}
        <div className="mb-12 space-y-6">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className={`w-5 h-5 absolute top-1/2 -translate-y-1/2 text-muted-foreground ${isRtl ? 'right-3.5' : 'left-3.5'}`} />
            <input
              type="text"
              placeholder={isAr ? "ابحث عن اعتماد بالاسم أو الجهة..." : "Search credentials by title or issuer..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-3 rounded-full border border-border/50 bg-card/60 glass-effect focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm ${
                isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={`absolute top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground ${isRtl ? 'left-3.5' : 'right-3.5'}`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {certificateCategories.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = selectedCategory === cat.id;
              const catName = isAr && cat.nameAr ? cat.nameAr : cat.name;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-white shadow-[0_4px_15px_rgba(var(--primary-rgb),0.35)] scale-105"
                      : "glass-effect border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{catName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-16 glass-effect rounded-2xl border border-border/40 max-w-md mx-auto">
            <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-bold">{isAr ? "لم يتم العثور على نتائج" : "No credentials found"}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {isAr ? "جرب تعديل كلمة البحث أو اختيار تصنيف آخر." : "Try adjusting your search query or filter selection."}
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <AnimatePresence>
              {filteredCertificates.map((cert) => {
                const IconComponent = cert.icon || Award;
                const title = isAr && cert.titleAr ? cert.titleAr : cert.title;
                const issuer = isAr && cert.issuerAr ? cert.issuerAr : cert.issuer;
                const description = isAr && cert.descriptionAr ? cert.descriptionAr : cert.description;
                const category = isAr && cert.categoryAr ? cert.categoryAr : cert.category;
                const grade = isAr && cert.gradeAr ? cert.gradeAr : cert.grade;

                return (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className="glass-effect rounded-2xl border border-border/40 overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all flex flex-col justify-between group p-6"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {cert.verified && (
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold flex items-center gap-1.5 border border-emerald-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {isAr ? "معتمد وموثق" : "Verified Credential"}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-2 text-xs text-primary font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{cert.date}</span>
                      </div>

                      <h3 className="text-xl font-bold font-display leading-snug mb-2 group-hover:text-primary transition-colors">
                        {title}
                      </h3>

                      <p className="text-xs font-semibold text-muted-foreground mb-3">
                        {issuer}
                      </p>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {description}
                      </p>

                      {grade && (
                        <div className="mb-4">
                          <span className="text-[11px] font-medium text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                            {grade}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-border/20 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CertificatesView;
