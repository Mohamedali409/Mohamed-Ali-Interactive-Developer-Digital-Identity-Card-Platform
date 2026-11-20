export const projects = [
  // =========================================================================
  // 1. AVICENA PLATFORM — HEALTHCARE & CLINICAL INTELLIGENCE
  // =========================================================================
  {
    title: "Avicena Platform",
    titleAr: "منصة أفيسينا الطبية (Avicena Platform)",
    projectType: "Full-Stack Healthcare & Clinical Intelligence Platform",
    projectTypeAr: "منصة رعاية صحية وذكاء سريري متكاملة",
    description: "A comprehensive healthcare SaaS platform connecting patients, doctors, labs, and admins. Features real-time WebSockets & WebRTC, BullMQ background queues, Qdrant medical report RAG AI, and containerized Kubernetes deployment.",
    descriptionAr: "منصة رعاية صحية متكاملة تربط المرضى والأطباء والمختبرات والإدارة، مع تواصل لحظي عبر WebSockets وWebRTC، وجدولة مهام خلفية بـ BullMQ، ومساعد ذكاء سريري بتقنية RAG وقاعدة Qdrant، ونشر مؤتمت عبر Kubernetes.",
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Qdrant",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Socket.IO",
      "WebRTC",
      "Prometheus",
      "Grafana"
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Socket.IO",
      "Qdrant"
    ],
    category: ["Full Stack", "Backend", "web-app", "Cloud & DevOps"],
    demo: "https://lucky-rebirth-production-b220.up.railway.app",
    github: "https://github.com/Mohamedali409/avicena-platform",
    featured: true,
    img: "/projects/avicena.svg",
    alt: "Avicena Healthcare Platform Architecture & Dashboard",
    features: [
      "Multi-role platform connecting patients, doctors, laboratories, and clinic administrators.",
      "Controller-Service-Repository backend architecture with secure JWT, Google OAuth, and RBAC.",
      "Real-time chat and video consultation modules using Socket.IO and WebRTC.",
      "Medical report intelligence and symptom search via a self-hosted Qdrant vector database and RAG pipeline.",
      "Asynchronous background processing with BullMQ and Redis for automated medication and appointment reminders.",
      "Containerized deployment with Docker and Kubernetes using Terraform, with Prometheus and Grafana monitoring."
    ],
    featuresAr: [
      "منصة متعددة الأدوار تربط بين المرضى والأطباء والمختبرات وإدارات العيادات.",
      "معمارية خلفية مبنية على نمط Controller-Service-Repository مع توثيق JWT ومصادقة Google OAuth وصلاحيات RBAC.",
      "تواصل فوري ومكالمات فيديو طبية باستخدام Socket.IO وWebRTC.",
      "استخراج وتحليل تقارير الفحوصات الطبية عبر خط أنابيب RAG وقاعدة بيانات المتجهات Qdrant.",
      "معالجة غير متزامنة للمهام بالخلفية عبر BullMQ وRedis لإرسال تنبيهات المواعيد وجرعات الأدوية.",
      "نشر وتوزيع بالحاويات مع Docker وKubernetes بإدارة Terraform ومراقبة فورية بـ Prometheus وGrafana."
    ]
  },

  // =========================================================================
  // 2. FITMATE AI — INTELLIGENT FITNESS & NUTRITION PLATFORM
  // =========================================================================
  {
    title: "FitMate AI",
    titleAr: "تطبيق فيت ميت الذكي (FitMate AI)",
    projectType: "AI-Powered Fitness & Nutrition Application",
    projectTypeAr: "تطبيق لياقة وتغذية مدعوم بالذكاء الاصطناعي",
    description: "An AI-powered fitness application featuring intelligent nutrition tracking, dynamic workout routine generation, progress analytics, and interactive AI coaching with full Arabic RTL and English LTR support.",
    descriptionAr: "تطبيق لياقة بدنية وتغذية مدعوم بالذكاء الاصطناعي لتتبع التغذية والتمارين الرياضية ومتابعة مؤشرات التقدم مع مدرب ذكي تفاعلي، يدعم كلاً من العربية (RTL) والإنجليزية (LTR).",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Zod",
      "Vitest",
      "AI Coach Adapter",
      "Tailwind CSS",
      "REST APIs"
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Zod",
      "Vitest"
    ],
    category: ["Full Stack", "Backend", "web-app"],
    demo: "",
    github: "https://github.com/Mohamedali409/FitMate-AI",
    featured: true,
    img: "/projects/fitmate.svg",
    alt: "FitMate AI Fitness & Nutrition Application",
    features: [
      "Personalized AI-driven workout recommendations and dynamic exercise plan generation based on individual fitness goals.",
      "Comprehensive nutrition and macronutrient tracking with intelligent dietary feedback.",
      "Node.js and TypeScript modular monolith on MongoDB (replica set with multi-document transactions) and Redis.",
      "Strict schema validation with Zod, structured logging, and thorough Vitest/Supertest test coverage.",
      "Fully responsive bilingual interface supporting both Arabic (RTL) and English (LTR)."
    ],
    featuresAr: [
      "خطط تمارين مخصصة ومولدة ديناميكياً باستخدام الذكاء الاصطناعي وفق أهداف ومستوى المستخدم الرياضي.",
      "تتبع دقيق للسعرات والمغذيات الكبرى (Macros) مع إرشادات غذائية ذكية وملاحظات يومية.",
      "معمارية Modular Monolith باستخدام Node.js وTypeScript مع MongoDB (Replica Set لمعاملات متسقة) وRedis.",
      "تحقق صارم من صحة البيانات باستخدام Zod، وسجلات هيكلية منظمة، واختبارات شاملة عبر Vitest وSupertest.",
      "واجهة مستخدم متجاوبة بالكامل تدعم اللغتين العربية بالاتجاه من اليمين (RTL) والإنجليزية (LTR)."
    ]
  },

  // =========================================================================
  // 3. IMPERSONAGUARD — CYBERSECURITY & BRAND PROTECTION ENGINE
  // =========================================================================
  {
    title: "ImpersonaGuard",
    titleAr: "نظام إمبرسونا جارد الأمني (ImpersonaGuard)",
    projectType: "Automated Cybersecurity & Brand Impersonation Detection Engine",
    projectTypeAr: "محرك أمني لكشف انتحال العلامات التجارية والتصيد الاحتيالي",
    description: "A specialized security engine built for automated brand impersonation detection, heuristic threat scoring, and adversarial phishing detection with hardened Express backend APIs.",
    descriptionAr: "محرك أمني متخصص لكشف انتحال الهوية والعلامات التجارية، وتحليل التهديدات السلوكية، والحماية من هجمات التصيد الاحتيالي عبر واجهات خلفية مشددة الحماية.",
    tech: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "JWT",
      "Vitest",
      "Heuristic Algorithms",
      "Helmet",
      "CORS",
      "Rate Limiter"
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "JWT",
      "Vitest",
      "Helmet",
      "Security Hardening"
    ],
    category: ["Backend", "web-app"],
    demo: "",
    github: "https://github.com/Madoo2414/ImpersonaGuard-",
    featured: true,
    img: "/projects/impersonaguard.svg",
    alt: "ImpersonaGuard Security Detection Engine",
    features: [
      "Automated brand impersonation and adversarial phishing detection engine.",
      "Intelligent threat scoring, heuristic analysis, and domain/profile verification algorithms.",
      "Express modular monolith with MongoDB, JWT authentication, and secure HttpOnly cookie & session handling.",
      "Comprehensive defense-in-depth security middleware with Helmet, CORS policies, and IP rate limiting.",
      "Automated unit and endpoint testing pipeline powered by Vitest."
    ],
    featuresAr: [
      "محرك مؤتمت لكشف انتحال العلامات التجارية ومواقع التصيد الاحتيالي المتقدمة.",
      "خوارزميات تحليل سلوكي وتقييم مستوى التهديد (Threat Scoring) والتحقق من النطاقات المشبوهة.",
      "بنية Express معيارية مع MongoDB، ومصادقة JWT مشفرة، والتعامل الآمن مع ملفات تعريف الارتباط والجلسات.",
      "طبقات حماية أمنية متعددة تشمل Helmet وCORS وتحديد معدل الطلبات لحظر الهجمات البرمجية.",
      "مسار اختبارات آلية للواجهات والوظائف الأمنية باستخدام Vitest."
    ]
  },

  // =========================================================================
  // 4. RESTAURANT POS & MULTI-BRANCH INVENTORY SYSTEM
  // =========================================================================
  {
    title: "Restaurant POS & Multi-Branch Inventory",
    titleAr: "نظام إدارة المطاعم والمخزون متعدد الفروع (Restaurant POS)",
    projectType: "Full-Stack Point of Sale & Supply Chain Management System",
    projectTypeAr: "نظام نقاط بيع وإدارة سلاسل الإمداد والمخزون للمطاعم",
    description: "A comprehensive MERN platform for sales, branch ordering, ingredient stock tracking, and daily financial reporting. Features layered architecture, automated Jest/Supertest suites, and 4 automated GitHub Actions CI/CD workflows.",
    descriptionAr: "نظام MERN متكامل لإدارة المبيعات ونقاط البيع، وتتبع مخزون المكونات والموردين، وإصدار التقارير المالية اليومية. يتميز بهندسة معمارية طبقية، واختبارات آلية بـ Jest وSupertest، و4 مسارات CI/CD على GitHub Actions.",
    tech: [
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "JWT",
      "RBAC",
      "Jest",
      "Supertest",
      "GitHub Actions",
      "Cloudinary",
      "RESTful APIs"
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "JWT",
      "Jest",
      "GitHub Actions"
    ],
    category: ["Full Stack", "Backend", "web-app"],
    demo: "",
    github: "https://github.com/Mohamedali409/restaurant-pos-inventory-system",
    featured: true,
    img: "/projects/restaurant-pos.svg",
    alt: "Restaurant POS and Inventory Platform Dashboard",
    features: [
      "Multi-branch order checkout terminal, table status management, and automated kitchen ticket dispatch.",
      "Real-time ingredient-level stock tracking with low-inventory threshold triggers and supplier management.",
      "Audited codebase and fixed 11 critical backend bugs spanning auth edge-cases, validation, and database operations.",
      "Implemented comprehensive Jest & Supertest automated testing suites for authentication, products, and order endpoints.",
      "Configured 4 GitHub Actions workflows: CI test automation, CD to Vercel, pull-request secret scanning with Gitleaks, and weekly dependency maintenance."
    ],
    featuresAr: [
      "شاشة كاشير ونقاط بيع متعددة الفروع، مع إدارة حالة الطاولات وتوزيع طلبات المطبخ الفورية.",
      "تتبع دقيق لمخزون المكونات والمواد الخام، مع تنبيهات تلقائية عند انخفاض الكميات عن الحد الأدنى.",
      "تدقيق ومراجعة الكود البرمجي وحل 11 ثغرة وخطأ برمجي حرج شملت المصادقة وقواعد البيانات والتحقق.",
      "بناء منظومة اختبارات آلية متكاملة باستخدام Jest وSupertest لتغطية نقاط نهاية المستخدمين والمنتجات والطلبات.",
      "إعداد 4 مسارات عمل مؤتمتة على GitHub Actions: الاختبار المستمر CI، والنشر المستمر CD إلى Vercel، وفحص التسريبات الأمنية عبر Gitleaks، وتحديث المكتبات أسبوعياً."
    ]
  },

  // =========================================================================
  // 5. SHORTIFY — ENTERPRISE URL SHORTENER & ANALYTICS API
  // =========================================================================
  {
    title: "Shortify",
    titleAr: "شورتيفاي (Shortify) — منصة اختصار الروابط وتحليلات الزيارات",
    projectType: "Enterprise URL Shortening & High-Performance Analytics Service",
    projectTypeAr: "خدمة اختصار الروابط وتحليلات الزيارات عالية الأداء",
    description: "A production-ready URL shortener built with Node.js, Express, TypeScript, and MongoDB. Follows Clean Architecture and SOLID principles with Controller-Service-Repository separation, sub-millisecond redirection, and tracking analytics.",
    descriptionAr: "منصة جاهزة للإنتاج لاختصار الروابط مبنية بـ Node.js وExpress وTypeScript وMongoDB. تتبع مبادئ Clean Architecture وSOLID مع فصل كامل بين الطبقات، وتوجيه سريع، وتحليلات زيارات تفاعلية.",
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Clean Architecture",
      "SOLID Principles",
      "Rate Limiting",
      "RESTful APIs"
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Clean Architecture",
      "REST APIs"
    ],
    category: ["Backend", "web-app"],
    demo: "",
    github: "https://github.com/Mohamedali409/shortify",
    featured: false,
    img: "/projects/shortify.svg",
    alt: "Shortify Clean Architecture & Redirection Engine",
    features: [
      "Built with Clean Architecture and SOLID principles, structured into Controllers, Services, and Repositories.",
      "Collision-resistant short URL generation algorithm with custom alias support and compound MongoDB indexes.",
      "Real-time click telemetry: tracks referral origins, geographic location, user agents, and timestamp distribution.",
      "IP-based and token-based rate limiting to protect endpoints against automated scraping and abuse.",
      "Strict TypeScript type safety, custom asynchronous error middlewares, and standardized REST API response payloads."
    ],
    featuresAr: [
      "مبني باتباع معمارية الكود النظيف (Clean Architecture) ومبادئ SOLID، مع فصل تام بين وحدات التحكم والخدمات والمستودعات.",
      "خوارزمية توليد روابط مختصرة مقاومة للتصادم، مع دعم الروابط المخصصة والفهارس المركبة في MongoDB.",
      "تتبع فوري لإحصائيات الزيارات: تحليل مصادر الإحالة، التوزيع الجغرافي، متصفحات الزوار، وسجلات التوقيت.",
      "تحديد معدل الطلبات (Rate Limiting) على مستوى عنوان IP لحماية الخوادم من الاستخدام العشوائي والمسيء.",
      "أمان نمطي صارم بفضل TypeScript، مع معالجات أخطاء غير متزامنة موحدة، وهياكل استجابة RESTful قياسية."
    ]
  },

  // =========================================================================
  // 6. DEVSECOPS AUTOMATED PIPELINE & HARDENED CONTAINER ARCHITECTURE
  // =========================================================================
  {
    title: "DevSecOps Pipeline & Hardened Container",
    titleAr: "خط أنابيب DevSecOps المؤتمت وهندسة الحاويات الآمنة",
    projectType: "Automated Continuous Security & Container Hardening Infrastructure",
    projectTypeAr: "بنية تحتية مؤتمتة للأمان المستمر وتأمين الحاويات السحابية",
    description: "An automated DevSecOps security pipeline demonstrating continuous security gates with SCA (npm audit), SAST (CodeQL), secret detection (Gitleaks), container vulnerability scanning (Trivy), and a multi-stage non-root Dockerfile.",
    descriptionAr: "خط أنابيب DevSecOps مؤتمت بالكامل يطبق بوابات فحص الأمان المستمر: فحص التبعيات (SCA)، التحليل الثابت للكود (CodeQL SAST)، كشف تسريبات الأسرار (Gitleaks)، فحص صور الحاويات (Trivy)، وبناء حاويات Docker متعددة المراحل بصلاحيات محدودة.",
    tech: [
      "Docker",
      "GitHub Actions",
      "CodeQL",
      "Trivy",
      "Gitleaks",
      "npm audit",
      "Linux",
      "Node.js",
      "Security Auditing"
    ],
    technologies: [
      "Docker",
      "GitHub Actions",
      "CodeQL",
      "Trivy",
      "Gitleaks",
      "Linux"
    ],
    category: ["Cloud & DevOps", "Backend"],
    demo: "",
    github: "https://github.com/Mohamedali409",
    featured: false,
    img: "/projects/devsecops.svg",
    alt: "DevSecOps Automated Pipeline & Container Hardening Architecture",
    features: [
      "Automated continuous security gates integrated into GitHub Actions CI pipeline.",
      "Static Application Security Testing (SAST) via CodeQL and eslint-plugin-security rules to catch injection flaws.",
      "Secret scanning enforcement with Gitleaks to prevent API key and credential leaks in commits.",
      "Container image vulnerability analysis using Trivy scanning against alpine base images.",
      "Hardened multi-stage Dockerfile running on node:20-alpine with an unprivileged non-root user (USER node)."
    ],
    featuresAr: [
      "بوابات أمان مؤتمتة ومدمجة في مسار التكامل المستمر (CI) عبر GitHub Actions.",
      "فحص الكود الثابت (SAST) باستخدام محرك CodeQL وقواعد eslint-plugin-security لاكتشاف ثغرات الحقن قبل الدمج.",
      "كشف ومنع تسريب المفاتيح والأسرار البرمجية تلقائياً باستخدام Gitleaks قبل قبول طلبات السحب (PRs).",
      "فحص ثغرات صور الحاويات باستخدام أداة Trivy وتتبع قواعد بيانات CVE العالمية لصور Alpine.",
      "تصميم ملف Dockerfile متعدد المراحل فائق الأمان ومبني على node:20-alpine يعمل بمستخدم غير جذري (USER node)."
    ]
  },

  // =========================================================================
  // 7. INTERACTIVE DEVELOPER DIGITAL IDENTITY PLATFORM
  // =========================================================================
  {
    title: "Interactive Developer Digital Identity Card",
    titleAr: "منصة بطاقة الهوية الرقمية التفاعلية للمطور",
    projectType: "Full-Stack Developer Identity & Conversational AI Portfolio Platform",
    projectTypeAr: "منصة بطاقة الهوية الرقمية ومساعد الذكاء الاصطناعي للمطور",
    description: "An interactive digital identity and developer portfolio platform featuring dynamic bilingual (Arabic/English) layout, real-time AI assistant integration via Server-Sent Events, custom theme engine, and a verified CV download center.",
    descriptionAr: "منصة بطاقة هوية رقمية تفاعلية للمطور مع دعم كامل للغتين (العربية والإنجليزية)، ومساعد ذكاء اصطناعي تفاعلي بتقنية البث المباشر (SSE)، ومحرك تخصيص السمات والمظهر، ومركز تحميل السير الذاتية المعتمد.",
    tech: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Google GenAI",
      "Server-Sent Events",
      "Zod",
      "Upstash Redis"
    ],
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Google GenAI"
    ],
    category: ["Full Stack", "web-app"],
    demo: "https://mohamed-ali-portfolio.vercel.app",
    github: "https://github.com/Mohamedali409/Mohamed-Ali-Interactive-Developer-Digital-Identity-Card-Platform",
    featured: false,
    img: "/projects/avicena.svg",
    alt: "Interactive Developer Digital Identity Platform",
    features: [
      "Full-stack Next.js application with React 19, TypeScript, and responsive Tailwind CSS architecture.",
      "Integrated 'Mohamed AI' conversational assistant with streaming Server-Sent Events (SSE) and fast client retrieval.",
      "Bilingual support with natural Arabic (RTL) and English (LTR) transitions and localized metadata.",
      "Comprehensive CV Download Center with real specialization tracks and direct one-click PDF downloads.",
      "Custom theme engine with dark/light mode, custom color accents, font scaling, and accessible motion controls."
    ],
    featuresAr: [
      "تطبيق Full-Stack مبني بـ Next.js وReact 19 وTypeScript وهندسة Tailwind CSS فائقة الاستجابة.",
      "مساعد ذكاء اصطناعي مدمج 'محمد AI' مع تدفق الإجابات المباشر (SSE) ونظام استرجاع محلي سريع للأسئلة الشائعة.",
      "دعم ثنائي اللغة سلس بالاتجاهين: العربية (RTL) والإنجليزية (LTR) مع بيانات وصفية مهيأة لمحركات البحث.",
      "مركز متكامل لتحميل السير الذاتية يتيح اختيار التخصص الهندسي والتحميل المباشر للـ PDF بنقرة واحدة.",
      "محرك تخصيص متطور يدعم الوضعين المظلم والفاتح، وتبديل لوحات الألوان، والتحكم في سرعة التأثيرات الحركية."
    ]
  }
];
