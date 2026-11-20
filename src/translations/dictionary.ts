export interface NavTranslations {
  home: string;
  about: string;
  projects: string;
  services: string;
  contact: string;
  certificates: string;
  toggleTheme: string;
  toggleLang: string;
}

export interface CommonTranslations {
  viewProjects: string;
  downloadResume: string;
  contactMe: string;
  liveDemo: string;
  sourceCode: string;
  viewAll: string;
  allRightsReserved: string;
  builtWith: string;
  loading: string;
  quickLinks: string;
  techStack: string;
  currentlyEnrolled: string;
}

export interface HomeTranslations {
  greeting: string;
  role: string;
  pill: string;
  bio: string;
  timelineBadge: string;
  timelineTitle: string;
  timelineWatermark: string;
  timelineSubtitle: string;
  projectsBadge: string;
  projectsTitle: string;
  projectsWatermark: string;
  projectsSubtitle: string;
  viewAllProjects: string;
}

export interface AboutTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  getKnowMe: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  highlightedSkills: string;
  toolboxBadge: string;
  toolboxTitle: string;
  toolboxWatermark: string;
  toolboxSubtitle: string;
  experienceTitle: string;
  educationTitle: string;
  aiDiplomaTitle: string;
  aiDiplomaOrg: string;
  aiDiplomaLocation: string;
  aiDiplomaPeriod: string;
  aiDiplomaStatus: string;
  bachelorTitle: string;
  bachelorOrg: string;
  bachelorGrade: string;
  graduationProject: string;
  graduationProjectDesc: string;
}

export interface ProjectsTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  all: string;
  fullstack: string;
  frontend: string;
  backend: string;
  noProjects: string;
}

export interface ServicesTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  processBadge: string;
  processTitle: string;
  processWatermark: string;
  processSubtitle: string;
}

export interface CertificatesTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  viewCert: string;
  issuedBy: string;
}

export interface ContactTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  detailsTitle: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  locationValue: string;
  formTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sendBtn: string;
  sendingBtn: string;
  successMsg: string;
  errorMsg: string;
}

export interface TranslationDict {
  nav: NavTranslations;
  common: CommonTranslations;
  home: HomeTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  services: ServicesTranslations;
  certificates: CertificatesTranslations;
  contact: ContactTranslations;
}

export const translations: Record<'en' | 'ar', TranslationDict> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      certificates: "Credentials",
      toggleTheme: "Toggle theme",
      toggleLang: "عربي",
    },
    common: {
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      contactMe: "Contact Me",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      viewAll: "View All",
      allRightsReserved: "All rights reserved.",
      builtWith: "Built with Next.js, Tailwind CSS & Framer Motion",
      loading: "Loading...",
      quickLinks: "Quick Links",
      techStack: "Tech Stack",
      currentlyEnrolled: "Specialized Track",
    },
    home: {
      greeting: "Hi, I'm",
      role: "Full-Stack Developer | Backend-Focused Software Engineer",
      pill: "Backend Architecture • Cloud & DevOps • AI Integration",
      bio: "I engineer scalable, production-ready backend systems and full-stack web applications. Specialized in Node.js, Express.js, TypeScript, PostgreSQL, MongoDB, Redis, containerization with Docker, AWS cloud deployments, and AI integration. Completed the Digilians 9-month AI-Powered Software Development diploma.",
      timelineBadge: "TIMELINE",
      timelineTitle: "Professional & Academic Journey",
      timelineWatermark: "JOURNEY",
      timelineSubtitle: "Software engineering projects, the Digilians specialized diploma, and academic foundations in Management Information Systems.",
      projectsBadge: "PORTFOLIO",
      projectsTitle: "Featured Real Projects",
      projectsWatermark: "PROJECTS",
      projectsSubtitle: "A curated showcase of real-world platforms including Avicena, FitMate AI, and ImpersonaGuard with verified GitHub repositories.",
      viewAllProjects: "View All Projects",
    },
    about: {
      badge: "INTRODUCTION",
      title: "About Me",
      watermark: "About Me",
      subtitle: "Mohamed Ali is a Full-Stack Developer and Backend-Focused Software Engineer specializing in Node.js, Express.js, TypeScript, database modeling (PostgreSQL, MongoDB, MySQL, Redis), Docker, AWS cloud deployments, and AI integration.",
      getKnowMe: "Get to Know Me",
      p1: "I'm Mohamed Ali (محمد علي), a Full-Stack Developer and Backend-Focused Software Engineer based in Egypt. I graduated from El Shorouk Academy (2019 – 2023) with a Bachelor's degree in Management Information Systems (MIS).",
      p2: "I specialize in backend engineering, scalable RESTful API design, database modeling, and authentication & authorization pipelines using Node.js, Express.js, TypeScript, JavaScript, PostgreSQL, MongoDB, MySQL, and Redis.",
      p3: "Alongside backend architecture, I apply modern DevOps and cloud practices using Docker for containerization, GitHub Actions for CI/CD automation, and AWS for cloud infrastructure deployment.",
      p4: "I completed the Digital Pioneers Initiative (Digilians) AI-Powered Software Development Track—an intensive nine-month diploma under the Ministry of Communications & Information Technology (MCIT), deepening my software engineering, cloud, and AI integration capabilities.",
      p5: "My engineering work is demonstrated in real projects: Avicena (a healthcare platform featuring real-time WebSockets and AI clinical assistance), FitMate AI (an intelligent fitness and nutrition tracking platform), and ImpersonaGuard (an automated brand impersonation detection engine).",
      p6: "I am dedicated to writing clean, maintainable, and high-performance code, building dependable software that adheres to robust architectural standards.",
      highlightedSkills: "HIGHLIGHTED SKILLS:",
      toolboxBadge: "TECH STACK",
      toolboxTitle: "Technical Toolbox",
      toolboxWatermark: "TOOLBOX",
      toolboxSubtitle: "The core backend languages, frameworks, databases, DevOps, and cloud tools I use.",
      experienceTitle: "Experience & Journey",
      educationTitle: "Education & Diplomas",
      aiDiplomaTitle: "AI-Powered Software Development Specialized Diploma",
      aiDiplomaOrg: "Digital Pioneers Initiative (Digilians) – Ministry of Communications & IT (MCIT)",
      aiDiplomaLocation: "Digital Pioneers Initiative (Digilians) • MCIT",
      aiDiplomaPeriod: "Nine-Month Intensive Diploma",
      aiDiplomaStatus: "Completed Specialized Track",
      bachelorTitle: "Bachelor of Management Information Systems (MIS)",
      bachelorOrg: "El Shorouk Academy",
      bachelorGrade: "Graduated: 2019 – 2023",
      graduationProject: "ACADEMIC BACKGROUND",
      graduationProjectDesc: "Bachelor of Management Information Systems — El Shorouk Academy (2019 – 2023). Focused on systems analysis, database management, and information systems.",
    },
    projects: {
      badge: "MY WORK",
      title: "Projects Showcase",
      watermark: "PROJECTS",
      subtitle: "Explore real-world software engineering projects, backend microservices, real-time platforms, and AI integrations.",
      all: "All",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      noProjects: "No projects found in this category.",
    },
    services: {
      badge: "WHAT I OFFER",
      title: "Services & Solutions",
      watermark: "SERVICES",
      subtitle: "Backend engineering, scalable REST APIs, database architecture, containerization, and AI integration tailored to your product needs.",
      processBadge: "METHODOLOGY",
      processTitle: "How I Work",
      processWatermark: "PROCESS",
      processSubtitle: "From architectural planning and database modeling to containerized deployment and scaling.",
    },
    certificates: {
      badge: "CREDENTIALS",
      title: "Credentials & Education",
      watermark: "CREDENTIALS",
      subtitle: "Verified specialized diplomas and academic qualifications in software engineering and management information systems.",
      viewCert: "View Credential",
      issuedBy: "Issued by",
    },
    contact: {
      badge: "LET'S CONNECT",
      title: "Get In Touch",
      watermark: "CONTACT",
      subtitle: "Have a technical inquiry, software development project, or professional opportunity? Reach out via LinkedIn, GitHub, or send a message directly below.",
      detailsTitle: "Professional Channels",
      emailLabel: "Direct Message",
      phoneLabel: "LinkedIn",
      locationLabel: "Location",
      locationValue: "Egypt",
      formTitle: "Send a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "How can I help with your project?",
      sendBtn: "Send Message",
      sendingBtn: "Sending Message...",
      successMsg: "Thank you! Your message has been received. I will get back to you soon.",
      errorMsg: "Failed to send message. Please try again or reach out directly via LinkedIn.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      projects: "المشروعات",
      services: "الخدمات",
      contact: "تواصل معي",
      certificates: "الاعتمادات",
      toggleTheme: "تبديل المظهر",
      toggleLang: "EN",
    },
    common: {
      viewProjects: "استعراض المشروعات",
      downloadResume: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي",
      liveDemo: "معاينة حية",
      sourceCode: "كود المصدر",
      viewAll: "عرض الكل",
      allRightsReserved: "جميع الحقوق محفوظة.",
      builtWith: "تم التطوير بواسطة Next.js و Tailwind CSS و Framer Motion",
      loading: "جاري التحميل...",
      quickLinks: "روابط سريعة",
      techStack: "التقنيات المستخدمة",
      currentlyEnrolled: "المسار التخصصي",
    },
    home: {
      greeting: "أهلاً، أنا",
      role: "مطور Full-Stack | مهندس برمجيات بتركيز على الأنظمة الخلفية",
      pill: "هندسة الأنظمة الخلفية • سحابة وDevOps • دمج الذكاء الاصطناعي",
      bio: "أصمم وأبني أنظمة خلفية وتطبيقات ويب متكاملة وقابلة للتوسع. متخصص في Node.js و Express.js و TypeScript وقواعد البيانات (PostgreSQL و MongoDB و MySQL و Redis) وحاويات Docker وسحابة AWS وحلول الذكاء الاصطناعي. أتممت دبلومة تطوير البرمجيات المدعومة بالذكاء الاصطناعي من مبادرة Digilians لمدة 9 أشهر.",
      timelineBadge: "مسيرتي",
      timelineTitle: "المسيرة المهنية والتعليمية",
      timelineWatermark: "مسيرتي",
      timelineSubtitle: "مشروعات برمجية واقعية، دبلومة مبادرة Digilians التخصصية، والأساس الأكاديمي في نظم المعلومات الإدارية.",
      projectsBadge: "معرض الأعمال",
      projectsTitle: "مشروعات حقيقية مميزة",
      projectsWatermark: "المشروعات",
      projectsSubtitle: "مجموعة مختارة من المشروعات والمنصات الواقعية تشمل Avicena و FitMate AI و ImpersonaGuard مع روابط GitHub المعتمدة.",
      viewAllProjects: "عرض جميع المشروعات",
    },
    about: {
      badge: "مقدمة",
      title: "من أنا",
      watermark: "من أنا",
      subtitle: "محمد علي هو مطور Full-Stack ومهندس برمجيات بتركيز أساسي على الأنظمة الخلفية (Backend) وتصميم المعماريات البرمجية، متخصص في Node.js و Express.js و TypeScript وقواعد البيانات وحاويات Docker والخدمات السحابية AWS ودمج تقنيات الذكاء الاصطناعي.",
      getKnowMe: "نبذة عني وعن مسيرتي",
      p1: "أنا محمد علي، مطور Full-Stack ومهندس برمجيات بتركيز على الأنظمة الخلفية (Backend) مقيم في مصر. تخرجت من أكاديمية الشروق (2019 – 2023) بدرجة البكالوريوس في نظم المعلومات الإدارية (MIS).",
      p2: "أتخصص في هندسة الأنظمة الخلفية، وتصميم وبناء واجهات برمجة التطبيقات RESTful APIs، ونمذجة قواعد البيانات، وتطبيق منظومات المصادقة والتحكم بالصلاحيات باستخدام Node.js و Express.js و TypeScript و JavaScript و PostgreSQL و MongoDB و MySQL و Redis.",
      p3: "إلى جانب معمارية الأنظمة الخلفية، أعتمد ممارسات DevOps الحديثة والحوسبة السحابية؛ حيث أستخدم Docker لإدارة الحاويات البرمجية، و GitHub Actions لأتمتة مسارات CI/CD، و AWS لنشر البنية التحتية السحابية.",
      p4: "أتممت مسار تطوير البرمجيات المدعومة بالذكاء الاصطناعي ضمن مبادرة الرواد الرقميون (Digilians) التابعة لوزارة الاتصالات وتكنولوجيا المعلومات (MCIT) من خلال دبلومة تخصصية مكثفة استمرت تسعة أشهر، عززت مهاراتي في هندسة البرمجيات والسحابة وحلول الذكاء الاصطناعي.",
      p5: "تتجسد خبرتي العملية في مشروعات واقعية متقدمة: منصة Avicena الطبية (تواصل فوري عبر WebSockets ومساعد سريري ذكي)، وتطبيق FitMate AI (تطبيق لياقة وتغذية ذكي بالذكاء الاصطناعي)، ومحرك ImpersonaGuard الأمني (لكشف انتحال العلامات التجارية والتصيد الاحتيالي).",
      p6: "ألتزم بكتابة كود نظيف وقابل للصيانة وعالي الأداء، وبناء برمجيات قوية وجاهزة للإنتاج تتبع أفضل المعايير المعمارية الحديثة.",
      highlightedSkills: "أبرز المهارات والتقنيات:",
      toolboxBadge: "المهارات",
      toolboxTitle: "الأدوات والتقنيات",
      toolboxWatermark: "التقنيات",
      toolboxSubtitle: "اللغات، أطر العمل، قواعد البيانات، وأدوات DevOps والسحابة التي أعتمد عليها.",
      experienceTitle: "المسيرة والخبرات",
      educationTitle: "التعليم والدبلومات",
      aiDiplomaTitle: "دبلومة تطوير البرمجيات المدعومة بالذكاء الاصطناعي (التخصصية)",
      aiDiplomaOrg: "مبادرة الرواد الرقميون (Digilians) – وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)",
      aiDiplomaLocation: "مبادرة الرواد الرقميون (Digilians) • وزارة الاتصالات",
      aiDiplomaPeriod: "دبلومة مكثفة لمدة تسعة أشهر",
      aiDiplomaStatus: "إتمام المسار التخصصي بنجاح",
      bachelorTitle: "بكالوريوس نظم المعلومات الإدارية (MIS)",
      bachelorOrg: "أكاديمية الشروق",
      bachelorGrade: "دفعة 2019 – 2023",
      graduationProject: "الخلفية الأكاديمية",
      graduationProjectDesc: "بكالوريوس نظم المعلومات الإدارية — أكاديمية الشروق (2019 – 2023). ركزت الدراسة على تحليل وتصميم النظم، إدارة قواعد البيانات، ونظم المعلومات.",
    },
    projects: {
      badge: "أعمالي",
      title: "معرض المشروعات",
      watermark: "المشروعات",
      subtitle: "استكشف مشروعات واقعية تشمل خدمات الأنظمة الخلفية، منصات التواصل اللحظي، وحلول الذكاء الاصطناعي.",
      all: "الكل",
      fullstack: "تطوير شامل",
      frontend: "واجهات أمامية",
      backend: "أنظمة خلفية",
      noProjects: "لم يتم العثور على مشروعات في هذا التصنيف.",
    },
    services: {
      badge: "ماذا أقدم",
      title: "الخدمات والحلول",
      watermark: "الخدمات",
      subtitle: "هندسة الأنظمة الخلفية، بناء REST APIs قابلة للتوسع، معمارية قواعد البيانات، الحاويات البرمجية، ودمج الذكاء الاصطناعي.",
      processBadge: "منهجية العمل",
      processTitle: "كيف أعمل",
      processWatermark: "الخطوات",
      processSubtitle: "من التخطيط المعماري وتصميم قواعد البيانات وحتى النشر بالحاويات والتوسع المستمر.",
    },
    certificates: {
      badge: "الاعتمادات",
      title: "الاعتمادات والتعليم",
      watermark: "الاعتمادات",
      subtitle: "الشهادات التخصصية والدرجات الأكاديمية المعتمدة في تطوير البرمجيات ونظم المعلومات الإدارية.",
      viewCert: "عرض الاعتماد",
      issuedBy: "جهة الإصدار",
    },
    contact: {
      badge: "تواصل معي",
      title: "اترك رسالة",
      watermark: "تواصل",
      subtitle: "هل لديك استفسار تقني، مشروع تطوير برمجي، أو فرصة عمل؟ تواصل عبر LinkedIn أو GitHub أو أرسل رسالة مباشرة عبر النموذج.",
      detailsTitle: "قنوات التواصل المهنية",
      emailLabel: "رسالة مباشرة",
      phoneLabel: "LinkedIn",
      locationLabel: "الموقع الجغرافي",
      locationValue: "مصر",
      formTitle: "أرسل رسالة سريعة",
      namePlaceholder: "الاسم بالكامل",
      emailPlaceholder: "بريدك الإلكتروني",
      subjectPlaceholder: "موضوع الرسالة",
      messagePlaceholder: "كيف يمكنني مساعدتك في مشروعك؟",
      sendBtn: "إرسال الرسالة الآن",
      sendingBtn: "جاري إرسال الرسالة...",
      successMsg: "شكراً لتواصلك! تم استلام رسالتك وسأقوم بالرد عليك قريباً.",
      errorMsg: "عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل مباشرة عبر LinkedIn.",
    },
  },
};
