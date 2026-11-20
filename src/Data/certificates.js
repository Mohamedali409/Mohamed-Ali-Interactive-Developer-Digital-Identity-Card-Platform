import {
  GraduationCap,
  Code,
  Award,
  Cloud,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal
} from "lucide-react";

export const certificates = [
  // =========================================================================
  // 1. AWS CERTIFIED DEVELOPER – ASSOCIATE
  // =========================================================================
  {
    id: 1,
    title: "AWS Certified Developer – Associate",
    titleAr: "مطور معتمد من أمازون لخدمات الويب (AWS Certified Developer – Associate)",
    issuer: "Amazon Web Services (AWS)",
    issuerAr: "أمازون لخدمات الويب (AWS)",
    date: "Verified Certification",
    type: "Professional Certification",
    typeAr: "شهادة مهنية معتمدة",
    grade: "Associate Level",
    gradeAr: "مستوى مشارك معتمد",
    description:
      "Validates core technical expertise in developing, deploying, and debugging cloud-based applications using AWS services. Demonstrates proficiency in writing code for serverless applications, containerized workloads, managing APIs, and leveraging AWS storage, compute, and database services.",
    descriptionAr:
      "اعتماد مهني رسمي يثبت الكفاءة الهندسية في تطوير ونشر وتأمين التطبيقات السحابية باستخدام خدمات AWS. يغطي بناء التطبيقات بدون خوادم (Serverless)، وحاويات التطبيقات، وإدارة واجهات البرمجة، والتعامل مع قواعد البيانات والتخزين السحابي.",
    icon: Cloud,
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    category: "cloud",
    categoryAr: "الحوسبة السحابية",
    verified: true,
  },

  // =========================================================================
  // 2. AWS CERTIFIED CLOUD PRACTITIONER
  // =========================================================================
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    titleAr: "ممارس سحابي معتمد من أمازون (AWS Certified Cloud Practitioner)",
    issuer: "Amazon Web Services (AWS)",
    issuerAr: "أمازون لخدمات الويب (AWS)",
    date: "Verified Certification",
    type: "Professional Certification",
    typeAr: "شهادة مهنية معتمدة",
    grade: "Foundational Level",
    gradeAr: "المستوى التأسيسي المعتمد",
    description:
      "Validates an overall foundational understanding of AWS Cloud platform architecture, shared security responsibility model, compliance standards, cloud economic principles, and core AWS cloud services spanning compute, networking, databases, and storage.",
    descriptionAr:
      "شهادة معتمدة تثبت الفهم الأساسي الشامل لمعمارية منصة AWS السحابية، ونموذج المسؤولية الأمنية المشتركة، ومعايير الامتثال، والخدمات السحابية الأساسية في الحوسبة والشبكات والتخزين.",
    icon: Cloud,
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    category: "cloud",
    categoryAr: "الحوسبة السحابية",
    verified: true,
  },

  // =========================================================================
  // 3. ADVANCED DEVOPS TOOLS AND PRACTICES
  // =========================================================================
  {
    id: 3,
    title: "Advanced DevOps Tools and Practices",
    titleAr: "أدوات وممارسات DevOps المتقدمة (Advanced DevOps Tools and Practices)",
    issuer: "Packt",
    issuerAr: "مؤسسة باكت (Packt)",
    date: "Verified Certification",
    type: "Professional Technical Certificate",
    typeAr: "شهادة تقنية متقدمة",
    grade: "Advanced Level",
    gradeAr: "مستوى متقدم",
    description:
      "Specialized practical credential covering modern DevOps toolchains, container orchestration with Kubernetes, Docker infrastructure, Infrastructure as Code (IaC) principles, automated CI/CD deployment pipelines, and continuous observability.",
    descriptionAr:
      "اعتماد تخصصي يغطي أدوات وممارسات DevOps الحديثة، وتنسيق الحاويات السحابية باستخدام Kubernetes، والبنية ككود (IaC)، وبناء خطوط أنابيب التكامل والنشر المستمر (CI/CD)، والمراقبة اللحظية للأنظمة.",
    icon: Terminal,
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    category: "devops",
    categoryAr: "هندسة الـ DevOps",
    verified: true,
  },

  // =========================================================================
  // 4. FRONT-END DEVELOPER PROFESSIONAL CERTIFICATE
  // =========================================================================
  {
    id: 4,
    title: "Front-End Developer Professional Certificate",
    titleAr: "الشهادة المهنية في تطوير الواجهات الأمامية (Front-End Developer)",
    issuer: "Coursera (Meta)",
    issuerAr: "كورسيرا (Meta)",
    date: "Verified Certification",
    type: "Professional Certificate",
    typeAr: "شهادة مهنية متخصصة",
    grade: "Professional Specialization",
    gradeAr: "تخصص مهني معتمد",
    description:
      "Rigorous professional certification program covering client-side engineering, advanced JavaScript (ES6+), React.js component architecture, responsive design, state management, modern styling with Tailwind CSS, and UX/UI accessibility standards.",
    descriptionAr:
      "برنامج تدريبي واحترافي مكثف يغطي هندسة الواجهات الأمامية، وجافاسكريبت المتقدمة، وبناء معماريات مكونات React.js، وإدارة الحالة، وتطوير واجهات متجاوبة وفق معايير تجربة واستخدام المستخدم العالمية.",
    icon: Code,
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    category: "software",
    categoryAr: "هندسة البرمجيات",
    verified: true,
  },

  // =========================================================================
  // 5. DELIVERING QUALITY WORK WITH AGILITY
  // =========================================================================
  {
    id: 5,
    title: "Delivering Quality Work with Agility",
    titleAr: "إدارة وتسليم المشروعات البرمجية الرشيقة (Delivering Quality Work with Agility)",
    issuer: "IBM",
    issuerAr: "شركة آي بي إم (IBM)",
    date: "Verified Certification",
    type: "Professional Agile Certificate",
    typeAr: "شهادة احترافية في منهجيات Agile",
    grade: "Professional Quality",
    gradeAr: "كفاءة وجودة مهنية",
    description:
      "Professional credential from IBM focusing on Agile engineering principles, iterative sprint delivery, cross-functional collaboration, test-driven validation, and engineering quality assurance in fast-paced software environments.",
    descriptionAr:
      "شهادة مهنية من شركة IBM تركز على مبادئ هندسة البرمجيات الرشيقة (Agile)، والتسليم المرحلي السريع، والتخطيط التكراري، واختبارات الجودة وضمان استقرار المنتجات البرمجية في بيئات العمل الحديثة.",
    icon: Award,
    badgeColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    category: "software",
    categoryAr: "هندسة البرمجيات",
    verified: true,
  },

  // =========================================================================
  // 6. AI-POWERED SOFTWARE DEVELOPMENT SPECIALIZED DIPLOMA
  // =========================================================================
  {
    id: 6,
    title: "AI-Powered Software Development Specialized Track",
    titleAr: "دبلومة تطوير البرمجيات المدعومة بالذكاء الاصطناعي (9 أشهر)",
    issuer: "Digital Pioneers Initiative (Digilians) — MCIT & Egyptian Military Academy",
    issuerAr: "مبادرة رواد مصر الرقمية (Digilians) — وزارة الاتصالات وتكنولوجيا المعلومات",
    date: "Nine-Month Intensive Diploma (Completed)",
    type: "Specialized Professional Diploma",
    typeAr: "دبلومة تخصصية مكثفة",
    grade: "Completed with Distinction",
    gradeAr: "إتمام المسار التخصصي بامتياز",
    description:
      "Nine-month intensive specialized diploma organized by the Ministry of Communications & Information Technology (MCIT). Covered full-stack software engineering, layered backend architectures with Node.js/Express, Docker containerization, AWS cloud fundamentals, CI/CD pipelines, and practical AI workflow integrations.",
    descriptionAr:
      "دبلومة تخصصية مكثفة لمدة تسعة أشهر تحت إشراف وزارة الاتصالات وتكنولوجيا المعلومات (MCIT). ركزت على هندسة الأنظمة الخلفية، ومعمارية البرمجيات، وإدارة الحاويات بـ Docker، والبنية التحتية السحابية بـ AWS، ومسارات CI/CD، ودمج حلول الذكاء الاصطناعي في دورة حياة البرمجيات.",
    icon: Cpu,
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    category: "diploma",
    categoryAr: "الدبلومات التخصصية",
    verified: true,
  },

  // =========================================================================
  // 7. BACHELOR'S IN MANAGEMENT INFORMATION SYSTEMS (MIS)
  // =========================================================================
  {
    id: 7,
    title: "Bachelor's in Management Information Systems (MIS)",
    titleAr: "بكالوريوس نظم المعلومات الإدارية (MIS)",
    issuer: "El Shorouk Academy",
    issuerAr: "أكاديمية الشروق",
    date: "2019 – 2023",
    type: "Academic Degree",
    typeAr: "درجة البكالوريوس الأكاديمية",
    grade: "Bachelor's Degree",
    gradeAr: "درجة البكالوريوس",
    description:
      "Bachelor's degree in Management Information Systems (MIS) from El Shorouk Academy (2019 – 2023). Comprehensive academic study in systems analysis and design, database management, information systems architecture, business processes, and software engineering principles.",
    descriptionAr:
      "درجة البكالوريوس في نظم المعلومات الإدارية من أكاديمية الشروق (2019 – 2023). دراسة أكاديمية شاملة في تحليل وتصميم النظم، إدارة قواعد البيانات، نظم المعلومات الإدارية والمؤسسية، وأسس هندسة البرمجيات وربط متطلبات الأعمال بالحلول التقنية.",
    icon: GraduationCap,
    badgeColor: "text-teal-400 bg-teal-400/10 border-teal-400/20",
    category: "degree",
    categoryAr: "التعليم الأكاديمي",
    verified: true,
  },
];

export const certificateCategories = [
  { id: "all", name: "All Credentials", nameAr: "جميع الاعتمادات", icon: Award },
  { id: "cloud", name: "Cloud & AWS", nameAr: "الحوسبة السحابية وAWS", icon: Cloud },
  { id: "devops", name: "DevOps & Containers", nameAr: "DevOps والحاويات", icon: Terminal },
  { id: "software", name: "Software Engineering", nameAr: "هندسة البرمجيات", icon: Code },
  { id: "diploma", name: "Specialized Diplomas", nameAr: "الدبلومات التخصصية", icon: Cpu },
  { id: "degree", name: "Academic Degrees", nameAr: "التعليم الأكاديمي", icon: GraduationCap },
];
