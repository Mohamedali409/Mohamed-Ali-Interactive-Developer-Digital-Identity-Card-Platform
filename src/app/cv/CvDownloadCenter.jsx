'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Eye,
  FileText,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Globe,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Terminal,
  Layers,
  Database,
  Award,
  GraduationCap,
  Briefcase,
  Copy,
  Check,
  Mail,
  Linkedin,
  Github,
  Cloud,
  Cpu
} from 'lucide-react';

const cvDocuments = [
  {
    id: 'fullstack-ai',
    file: '/cv/Mohamed_Ali_CV_.pdf',
    downloadName: 'Mohamed_Ali_CV_FullStack_AI.pdf',
    size: '68 KB',
    updated: '2026',
    icon: Layers,
    colorTheme: 'from-sky-500/20 via-primary/10 to-transparent border-sky-500/30 hover:border-sky-400',
    iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    accentColor: 'text-sky-400',
    badgeEn: 'Full-Stack & AI Systems',
    badgeAr: 'تطوير شامل وأنظمة ذكاء اصطناعي',
    titleEn: 'Software Developer | Backend-Focused Full Stack & AI Systems',
    titleAr: 'مطور برمجيات | تطوير شامل، سحابي وأنظمة ذكاء اصطناعي',
    summaryEn:
      'Comprehensive resume showcasing end-to-end multi-tier web architectures, scalable RESTful APIs, and GenAI integrations (RAG pipelines, OpenAI, LangChain, Qdrant). Features real-world production projects including Avicena (telehealth with real-time WebSockets), FitMate AI, ImpersonaGuard, Restaurant POS, and Shortify.',
    summaryAr:
      'سيرة ذاتية شاملة تركز على بناء معمارية ويب متعددة الطبقات، واجهات برمجة تطبيقات RESTful فائقة الأداء، وتكاملات الذكاء الاصطناعي التوليدي (سلاسل RAG ومحركات OpenAI وLangChain) بمشروعات واقعية تشمل منصة Avicena الطبية وFitMate AI وImpersonaGuard ونظام Restaurant POS وShortify.',
    highlightsEn: [
      'Full-Stack Web Architectures & Scalable REST APIs',
      'Generative AI Integration & Vector RAG (Qdrant, LangChain, OpenAI)',
      'Verified platforms: Avicena, FitMate AI, ImpersonaGuard, Restaurant POS',
      'Node.js, Express, TypeScript, React, Next.js, PostgreSQL, MongoDB, Docker, AWS'
    ],
    highlightsAr: [
      'معمارية ويب متكاملة وواجهات برمجية RESTful قابلة للتوسع',
      'تطبيقات الذكاء الاصطناعي وخطوط RAG المتجهية (Qdrant, LangChain, OpenAI)',
      'مشروعات معتمدة: منصة Avicena الطبية، FitMate AI، وImpersonaGuard',
      'Node.js, Express, TypeScript, React, Next.js, PostgreSQL, MongoDB, Docker, AWS'
    ],
    tags: ['Full Stack', 'Node.js', 'TypeScript', 'REST APIs', 'AI / RAG', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 'devops-cloud',
    file: '/cv/Mohamed_Ali_CV_DevOps.pdf',
    downloadName: 'Mohamed_Ali_CV_DevOps_Cloud.pdf',
    size: '60 KB',
    updated: '2026',
    icon: Terminal,
    colorTheme: 'from-emerald-500/20 via-accent/10 to-transparent border-emerald-500/30 hover:border-emerald-400',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    accentColor: 'text-emerald-400',
    badgeEn: 'DevOps & Cloud Infrastructure',
    badgeAr: 'هندسة ديف أوبس والبنية السحابية',
    titleEn: 'DevOps & Cloud Engineer | CI/CD, Containers & Infrastructure',
    titleAr: 'مهندس ديف أوبس وحوسبة سحابية | حاويات وأتمتة CI/CD',
    summaryEn:
      'Specialized engineering resume focused on containerization (Docker, Compose), CI/CD workflow automation (GitHub Actions), cloud deployment (AWS EC2, S3, RDS), and automated DevSecOps security scanning (Trivy container scanning, CodeQL SAST, Gitleaks secrets audit).',
    summaryAr:
      'سيرة ذاتية هندسية متخصصة تركز على إدارة الحاويات عبر Docker، أتمتة مسارات النشر والتكامل المستمر عبر GitHub Actions، البنية السحابية على AWS، وفحص الثغرات الأمنية الآلي عبر Trivy وCodeQL وGitleaks.',
    highlightsEn: [
      'Automated CI/CD Pipelines with GitHub Actions & Quality Gates',
      'Production Containerization (Docker, Multi-stage builds, Non-root hardening)',
      'AWS Cloud Infrastructure (EC2, S3, RDS, IAM Security Policies)',
      'DevSecOps Static & Container Analysis (Trivy, CodeQL, Gitleaks, SCA)'
    ],
    highlightsAr: [
      'مسارات تكامل ونشر مستمر مؤتمتة بـ GitHub Actions وبوابات جودة دقيقة',
      'حاويات إنتاجية مقواة (Docker, بناء متعدد المراحل، بيئات Non-root آمنة)',
      'البنية السحابية بـ AWS (EC2, S3, RDS, سياسات أمان IAM)',
      'فحص أمني استباقي DevSecOps (Trivy, CodeQL, Gitleaks)'
    ],
    tags: ['DevOps', 'Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'DevSecOps', 'Linux', 'Trivy']
  },
  {
    id: 'software-backend',
    file: '/cv/Mohamed_Ali_CV_SoftwareEngineer.pdf',
    downloadName: 'Mohamed_Ali_CV_SoftwareEngineer_Backend.pdf',
    size: '63 KB',
    updated: '2026',
    icon: Database,
    colorTheme: 'from-amber-500/20 via-primary/10 to-transparent border-amber-500/30 hover:border-amber-400',
    iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    accentColor: 'text-amber-400',
    badgeEn: 'Backend Architecture',
    badgeAr: 'معمارية الأنظمة الخلفية',
    titleEn: 'Software Engineer | Backend Architecture & Scalable Systems',
    titleAr: 'مهندس برمجيات | بنية تحتية خلفية، قواعد بيانات وأنظمة متقدمة',
    summaryEn:
      'Engineering-centric resume focused on Clean Architecture (Controller-Service-Repository), high-throughput REST APIs, relational and NoSQL database modeling (PostgreSQL, MongoDB), Redis high-speed caching, and robust security (JWT, Refresh Tokens, RBAC authorization).',
    summaryAr:
      'سيرة ذاتية هندسية مركزة على هيكلية Clean Architecture (المتحكم - الخدمة - المستودع)، واجهات برمجة التطبيقات عالية الأداء، نمذجة قواعد البيانات (PostgreSQL, MongoDB)، والتخزين المؤقت بريديس، وتأمين المصادقة بـ JWT وRBAC.',
    highlightsEn: [
      'Clean Architecture & Layered Domain Design (Repository Pattern)',
      'Relational & NoSQL Database Optimization (PostgreSQL, MongoDB, Indexing)',
      'High-Speed In-Memory Caching & Session Management with Redis',
      'Robust Authentication & Authorization (JWT, Refresh Tokens, RBAC Middleware)'
    ],
    highlightsAr: [
      'معمارية برمجية منظمة وفق نمط (Controller - Service - Repository)',
      'تحسين قواعد البيانات العلائقية والمستندية (PostgreSQL, MongoDB, الفهرسة)',
      'تخزين مؤقت فائق السرعة وإدارة الجلسات عبر Redis',
      'تأمين شامل للمصادقة وتفويض الصلاحيات (JWT, Refresh Tokens, RBAC)'
    ],
    tags: ['Backend', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Clean Architecture']
  }
];

const credentials = [
  {
    titleEn: 'Bachelor of Management Information Systems (MIS)',
    titleAr: 'بكالوريوس نظم المعلومات الإدارية (MIS)',
    issuerEn: 'El Shorouk Academy (2019 – 2023)',
    issuerAr: 'أكاديمية الشروق (2019 – 2023)',
    icon: GraduationCap,
    categoryEn: 'Academic Degree',
    categoryAr: 'درجة أكاديمية معتمدة'
  },
  {
    titleEn: 'AI-Powered Software Development Diploma (9 Months)',
    titleAr: 'دبلومة تطوير البرمجيات بالذكاء الاصطناعي (9 أشهر)',
    issuerEn: 'Digital Pioneers Initiative (Digilians) — MCIT',
    issuerAr: 'مبادرة الرواد الرقميون (Digilians) — وزارة الاتصالات',
    icon: Award,
    categoryEn: 'Professional Diploma',
    categoryAr: 'دبلومة تخصصية مكثفة'
  },
  {
    titleEn: 'AWS Certified Developer – Associate',
    titleAr: 'شهادة مطور معتمد من أمازون — المستوى المشارك',
    issuerEn: 'Amazon Web Services (AWS)',
    issuerAr: 'أمازون لخدمات الويب (AWS)',
    icon: Cloud,
    categoryEn: 'Cloud Certification',
    categoryAr: 'اعتماد سحابي رسمي'
  },
  {
    titleEn: 'AWS Certified Cloud Practitioner',
    titleAr: 'شهادة ممارس سحابي معتمد من أمازون',
    issuerEn: 'Amazon Web Services (AWS)',
    issuerAr: 'أمازون لخدمات الويب (AWS)',
    icon: Cloud,
    categoryEn: 'Cloud Certification',
    categoryAr: 'اعتماد سحابي رسمي'
  }
];

export default function CvDownloadCenter() {
  const [lang, setLang] = useState('en');
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);

  const isAr = lang === 'ar';

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadClick = (id) => {
    setDownloadingId(id);
    setTimeout(() => setDownloadingId(null), 2500);
  };

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100 selection:bg-primary/30 selection:text-white"
    >
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-20 -right-40 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Navigation Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800/80">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-primary/50 transition-all shadow-sm"
          >
            {isAr ? (
              <>
                <ArrowRight className="w-4 h-4" />
                <span>العودة للمعرض والموقع الرئيسي</span>
              </>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </>
            )}
          </Link>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 hover:border-primary/50 transition-all"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>{isAr ? 'English (LTR)' : 'العربية (RTL)'}</span>
            </button>

            {/* Share / Copy link */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
              aria-label="Copy page link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{isAr ? 'تم النسخ!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{isAr ? 'نسخ الرابط' : 'Copy Link'}</span>
                </>
              )}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{isAr ? 'تواصل معي' : 'Contact Me'}</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-2 pb-12">
          {/* Avatar with glowing ring & verified badge */}
          <div className="relative inline-block mx-auto">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-sky-400 to-emerald-400 blur-md opacity-70" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900 shadow-2xl">
              <Image
                src="/mohamed.png"
                alt="Mohamed Ali - Full-Stack Developer & Backend Software Engineer"
                width={128}
                height={128}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute bottom-1 ${isAr ? 'left-1' : 'right-1'} p-1.5 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-md`}
              title="Verified & Available for Engineering Roles"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isAr
                  ? 'مركز السير الذاتية الرسمية المعتمدة'
                  : 'Official Verified CV Download Center'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {isAr ? 'محمد علي' : 'Mohamed Ali'}
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-slate-300">
              {isAr
                ? 'مطور Full-Stack | مهندس برمجيات بتركيز على الأنظمة الخلفية'
                : 'Full-Stack Developer | Backend-Focused Software Engineer'}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'اختر النسخة التخصصية التي تلائم متطلبات الدور الهندسي المطلوب؛ كل نسخة مجهزة بروابط تحميل مباشرة بصيغة PDF وأدوات معاينة فورية بدون أي خطوات إضافية.'
              : 'Choose the specialized resume version that aligns with your engineering role. Each document is available for immediate one-click PDF download and direct in-browser preview.'}
          </p>
        </section>

        {/* 3 Real CV Documents Section */}
        <section aria-labelledby="cv-documents-heading" className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <h2 id="cv-documents-heading" className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>{isAr ? 'ملفات السيرة الذاتية التخصصية' : 'Specialized Curriculum Vitae Tracks'}</span>
            </h2>
            <span className="text-xs font-medium text-slate-400">
              {isAr ? '3 نسخ رسمية جاهزة للتحميل الفوري' : '3 Verified Editions Available'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cvDocuments.map((doc) => {
              const IconComponent = doc.icon;
              const isDownloading = downloadingId === doc.id;

              return (
                <article
                  key={doc.id}
                  className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b ${doc.colorTheme} bg-slate-900/90 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                >
                  <div className="space-y-4">
                    {/* Header Row: Track Badge + File Specs */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${doc.iconBg}`}>
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>{isAr ? doc.badgeAr : doc.badgeEn}</span>
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">PDF</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                        {isAr ? doc.titleAr : doc.titleEn}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        {doc.downloadName}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                      {isAr ? doc.summaryAr : doc.summaryEn}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {isAr ? 'أبرز النقاط والمشروعات:' : 'Key Strengths & Focus:'}
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {(isAr ? doc.highlightsAr : doc.highlightsEn).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${doc.accentColor}`} />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {doc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/90 text-slate-300 border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
                    {/* Direct Download Button */}
                    <a
                      href={doc.file}
                      download={doc.downloadName}
                      onClick={() => handleDownloadClick(doc.id)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-primary text-primary-foreground hover:opacity-95 shadow-lg shadow-primary/20 transition-all text-center"
                    >
                      {isDownloading ? (
                        <>
                          <Check className="w-4 h-4 text-primary-foreground animate-bounce" />
                          <span>{isAr ? 'جاري بدء التحميل...' : 'Downloading...'}</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>{isAr ? 'تحميل السيرة الذاتية (PDF)' : 'Download PDF'}</span>
                        </>
                      )}
                    </a>

                    {/* In-browser Preview Button */}
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/80 hover:border-slate-500 transition-all text-center"
                      title={isAr ? 'معاينة في تبويب جديد' : 'Preview PDF in new tab'}
                    >
                      <Eye className="w-4 h-4" />
                      <span>{isAr ? 'معاينة' : 'Preview'}</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Verified Credentials & Academic Background Section */}
        <section aria-labelledby="credentials-heading" className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 mb-12">
          <div className="max-w-2xl mb-6">
            <h2 id="credentials-heading" className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>{isAr ? 'الاعتمادات والمؤهلات المعتمدة' : 'Verified Academic & Professional Credentials'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {isAr
                ? 'مؤهلات رسمية موثقة تدعم الخبرة الهندسية العملية لمحمد علي.'
                : 'Accredited qualifications and verified certifications backing Mohamed Ali’s technical profile.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((cred, idx) => {
              const CredIcon = cred.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/60 border border-slate-800/90 hover:border-slate-700 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                    <CredIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                      {isAr ? cred.categoryAr : cred.categoryEn}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight mt-0.5">
                      {isAr ? cred.titleAr : cred.titleEn}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isAr ? cred.issuerAr : cred.issuerEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer & Direct Connect Bar */}
        <footer className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Mohamed Ali.</span>
            <span>·</span>
            <span>
              {isAr
                ? 'مطور Full-Stack | مهندس برمجيات بتركيز على الأنظمة الخلفية'
                : 'Full-Stack Developer | Backend-Focused Software Engineer'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Mohamedali409"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/mohamed-ali409"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0a66c2]" />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{isAr ? 'نموذج التواصل' : 'Contact Form'}</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

