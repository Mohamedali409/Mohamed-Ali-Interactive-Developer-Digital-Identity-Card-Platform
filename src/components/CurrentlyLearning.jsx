'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Layers,
  Network,
  Cpu,
  Play,
  Anchor,
  Terminal,
  Infinity,
  GitFork,
  Radio,
  Activity,
  ShieldCheck,
  Bot
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/context/SettingsContext";

const learningItems = [
  { 
    name: "Kubernetes & GitOps", 
    nameAr: "كوبرنيتس وأتمتة GitOps",
    icon: Network, 
    desc: "Production container orchestration, ingress controllers, pod horizontal autoscaling (HPA), and declarative deployments.", 
    descAr: "إدارة الحاويات الإنتاجية بكوبرنيتس، وموازنة الأحمال، والتوسع التلقائي، والنشر التوضيحي الموثوق.",
    color: "from-blue-600/20 to-sky-600/10 text-blue-400" 
  },
  { 
    name: "Distributed Event Queues", 
    nameAr: "الأنظمة الموزعة وطوابير الرسائل",
    icon: Radio, 
    desc: "Event-driven architecture with Kafka and RabbitMQ, idempotent consumer patterns, and dead-letter queue resilience.", 
    descAr: "المعمارية المعتمدة على الأحداث باستخدام Kafka وRabbitMQ، ومعالجة الرسائل المقاومة للتكرار والأعطال.",
    color: "from-amber-500/20 to-orange-500/10 text-amber-400" 
  },
  { 
    name: "Infrastructure as Code (Terraform)", 
    nameAr: "البنية التحتية كبرمجيات (Terraform)",
    icon: Cpu, 
    desc: "Modular AWS cloud provisioning, state management, security boundaries, and repeatable multi-environment setups.", 
    descAr: "بناء وإدارة الموارد السحابية في AWS برمجياً عبر Terraform مع إدارة الحالات وفصل البيئات.",
    color: "from-teal-500/20 to-emerald-600/10 text-teal-400" 
  },
  { 
    name: "DevSecOps & Policy as Code", 
    nameAr: "أمان البرمجيات وسياسات الأمان الآلية",
    icon: ShieldCheck, 
    desc: "Automated container scanning (Trivy), static analysis (CodeQL, Semgrep), secret detection, and non-root runtime environments.", 
    descAr: "الفحص الأمني المؤتمت للحاويات وفحص الكود الثابت وكشف الأسرار، وتأمين بيئات التشغيل الإنتاجية.",
    color: "from-red-500/20 to-rose-600/10 text-red-400" 
  },
  { 
    name: "Observability & Telemetry", 
    nameAr: "مراقبة الأداء والقياس عن بُعد",
    icon: Activity, 
    desc: "Distributed tracing with OpenTelemetry, Prometheus metrics collection, Grafana dashboards, and structured JSON logs.", 
    descAr: "التتبع الموزع للطلبات، وجمع المقاييس بـ Prometheus، ولوحات التحكم التفاعلية على Grafana.",
    color: "from-cyan-500/20 to-teal-600/10 text-cyan-400" 
  },
  { 
    name: "Agentic AI & Vector Search", 
    nameAr: "أنظمة الذكاء الاصطناعي والبحث المتجهي",
    icon: Bot, 
    desc: "Building production RAG pipelines, Qdrant vector databases, semantic embeddings, and LLM agent orchestration.", 
    descAr: "تطوير سلاسل RAG المتطورة، وقواعد البيانات المتجهية كـ Qdrant، وربط الوكلاء الذكية بالأنظمة البرمجية.",
    color: "from-purple-500/20 to-violet-600/10 text-purple-400" 
  },
  { 
    name: "Helm Packaging", 
    nameAr: "حزم Helm للخدمات المصغرة",
    icon: Anchor, 
    desc: "Authoring parameterized Kubernetes charts, configuration values hierarchies, and automated CI/CD release hooks.", 
    descAr: "بناء وتوزيع مخططات Helm المعيارية لتسهيل نشر الخدمات المصغرة على البيئات السحابية المختلفة.",
    color: "from-sky-500/20 to-blue-600/10 text-sky-400" 
  },
  { 
    name: "High-Throughput System Design", 
    nameAr: "تصميم الأنظمة عالية التحمل",
    icon: GitFork, 
    desc: "Multi-tier caching strategies, connection pooling, database read-replicas, rate limiting, and microservice boundaries.", 
    descAr: "استراتيجيات التخزين المؤقت متعددة المستويات، ومجموعات الاتصال، وتقييم الأحمال والخدمات المستقلة.",
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-400" 
  },
  { 
    name: "Linux Hardening & Shell Scripting", 
    nameAr: "تقوية أنظمة لينكس والبرمجة النصية",
    icon: Terminal, 
    desc: "Linux server security, systemd services, automated bash health-checks, network sockets, and container storage tuning.", 
    descAr: "إدارة الخوادم، وخدمات systemd، وبرمجة نصوص Bash الآلية لفحص الأنظمة وتأمين الشبكات.",
    color: "from-orange-500/20 to-amber-600/10 text-orange-400" 
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const CurrentlyLearning = () => {
  const { settings } = useSettings();
  const isAr = settings.language === 'ar';

  const statusBadges = isAr
    ? ["تطوير مستمر", "مختبرات عملية", "قيد التطبيق"]
    : ["Continuous Growth", "Hands-on Labs", "In Progress"];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeading
          badge={isAr ? "عقلية التطور المستمر" : "GROWTH MINDSET"}
          title={isAr ? "الاهتمامات الهندسية والتقنيات قيد التوسع" : "Engineering Focus & Continuous Learning"}
          watermark={isAr ? "تطوير" : "GROWTH"}
          subtitle={
            isAr
              ? "تقنيات ومعايير معمارية متقدمة أعمل على تعميق تطبيقها العملي وممارستها في المختبرات والمشروعات السحابية."
              : "Advanced architectural patterns, cloud-native tools, and engineering practices I actively explore and practice in production-like labs."
          }
          size="normal"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {learningItems.map((item, index) => {
            const IconComponent = item.icon;
            const title = isAr ? item.nameAr : item.name;
            const desc = isAr ? item.descAr : item.desc;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 rounded-xl glass-effect border border-border/50 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Background Gradient Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-display">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/30 flex flex-wrap gap-1.5 relative z-10">
                  {statusBadges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
