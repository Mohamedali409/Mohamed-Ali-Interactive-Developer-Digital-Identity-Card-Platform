import { knowledgeBase } from "./knowledge";
import { verifiedProjects } from "./knowledge/projects";
import { getInstantFaqAnswer } from "./faq-retrieval";

type Language = "en" | "ar";

export const rabeaAiSuggestions = [
  { id: "profile", icon: "user", question: { en: "Who is Mohamed Ali?", ar: "من هو محمد علي؟" } },
  { id: "skills", icon: "code", question: { en: "What are his technical skills?", ar: "ما أبرز مهاراته التقنية؟" } },
  { id: "projects", icon: "layers", question: { en: "Tell me about his projects.", ar: "حدثني عن مشروعاته." } },
  { id: "experience", icon: "briefcase", question: { en: "Tell me about his experience.", ar: "ما مساره وخبراته الهندسية؟" } },
  { id: "education", icon: "education", question: { en: "What is his educational background?", ar: "ما خلفيته التعليمية؟" } },
  { id: "certifications", icon: "award", question: { en: "What certifications does he hold?", ar: "ما اعتماداته ومؤهلاته؟" } },
  { id: "availability", icon: "briefcase", question: { en: "Is Mohamed available for work?", ar: "هل محمد متاح للتعاون والعمل؟" } },
  { id: "contact", icon: "mail", question: { en: "How can I contact him?", ar: "كيف أتواصل معه؟" } },
  { id: "ai", icon: "layers", question: { en: "What AI experience does he have?", ar: "ما خبرته في تكامل الذكاء الاصطناعي؟" } },
  { id: "training", icon: "education", question: { en: "What training programs has he completed?", ar: "ما البرامج التدريبية التي أتمها؟" } },
  { id: "services", icon: "briefcase", question: { en: "What services can he provide?", ar: "ما الخدمات التي يستطيع تقديمها؟" } },
] as const;

const asBullets = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

function profileAnswer(language: Language) {
  const { personal } = knowledgeBase;
  return language === "ar"
    ? `## نبذة مهنية عن ${personal.nameAr} (${personal.name})\n**${personal.nameAr}** هو مطور برمجيات Full-Stack مع تركيز عميق على **هندسة الـ Backend** وبناء النظم الموزعة والواجهات البرمجية RESTful APIs عالية الأداء.\n\n### الركائز التقنية الأساسية:\n- **Backend & APIs:** خبرة متقدمة في Node.js، Express.js، TypeScript، وتصميم واجهات RESTful آمنة وقابلة للتوسع.\n- **قواعد البيانات والتخزين المؤقت:** تصميم ونمذجة قواعد البيانات العلائقية وغير العلائقية (PostgreSQL، MongoDB، MySQL) واستخدام Redis للـ Caching.\n- **DevOps والحاويات:** تطبيق ممارسات Docker، وإعداد بيئات التشغيل، وأساسيات الحوسبة السحابية على AWS، وأتمتة الـ CI/CD.\n- **الذكاء الاصطناعي:** دمج حلول ونماذج الذكاء الاصطناعي ضمن التطبيقات العملية.\n\n### المؤهلات والتعليم:\n- حاصل على **بكالوريوس نظم معلومات إدارية (MIS)** من **أكاديمية الشروق** (2019 – 2023).\n- أتم دبلومة تخصصية مكثفة لمدة 9 أشهر في **تطوير البرمجيات بالذكاء الاصطناعي** ضمن **مبادرة رواد مصر الرقمية (Digilians)** التابعة لوزارة الاتصالات وتكنولوجيا المعلومات (MCIT).`
    : `## Professional Overview — ${personal.name}\n**${personal.name}** is a Full-Stack Developer with a specialized focus on **Backend Engineering**, scalable distributed systems, and robust RESTful API architectures.\n\n### Technical Pillars:\n- **Backend & APIs:** In-depth engineering with Node.js, Express.js, TypeScript, and architecting secure, scalable RESTful services.\n- **Databases & Caching:** Data modeling with PostgreSQL, MongoDB, MySQL, and high-performance caching with Redis.\n- **DevOps & Cloud:** Containerization with Docker, CI/CD automation pipelines, and cloud fundamentals on AWS.\n- **AI Integration:** Seamless integration of AI workflows and LLM capabilities into production-grade systems.\n\n### Education & Training:\n- **Bachelor of Management Information Systems (MIS)** — El Shorouk Academy (2019 – 2023).\n- **AI-Powered Software Development Track (9-Month Intensive Diploma)** — Digital Pioneers Initiative (Digilians) / MCIT.`;
}

function skillsAnswer(language: Language, category?: string) {
  const groups = knowledgeBase.skills.filter((group) => !category || group.category.toLowerCase() === category.toLowerCase());
  const lines = groups.map((group) => `**${group.category}:** ${group.skills.join(", ")}`);
  return language === "ar"
    ? `## المهارات والتقنيات الهندسية\n${lines.join("\n\n")}\n\nيعتمد محمد علي في هندسته على الكود النظيف (Clean Architecture)، والأنماط المعمارية الموثوقة، وتأمين نقاط النهاية (JWT, Role-Based Access Control)، وحفظ واسترجاع البيانات بكفاءة عالية.`
    : `## Engineering Skills & Technologies\n${lines.join("\n\n")}\n\nMohamed Ali prioritizes Clean Architecture, maintainable design patterns, robust API security (JWT, RBAC), and optimized database access patterns.`;
}

function experienceAnswer(language: Language) {
  const items = knowledgeBase.experience.map((item) =>
    `**${item.title} (${item.period})**\n${item.description}\n${item.skills?.length ? `Technologies: ${item.skills.join(", ")}.` : ""}`,
  );
  const arabicItems = knowledgeBase.experience.map((item) =>
    `**${item.title} (${item.period})**\n${item.descriptionAr || item.description}\n${item.skills?.length ? `تقنيات: ${item.skills.join("، ")}.` : ""}`,
  );
  return language === "ar"
    ? `## المسار المهني والخبرة الهندسية\n${arabicItems.join("\n\n")}\n\nترتكز خبرة محمد على بناء تطبيقات عملية متكاملة، والمشاركة في الدبلومة التخصصية المكثفة (Digilians)، وإنجاز مشاريع واقعية مفتوحة المصدر.`
    : `## Professional Engineering Journey\n${items.join("\n\n")}\n\nMohamed's experience is built around end-to-end full-stack projects, intensive 9-month professional diploma training (Digilians), and verified open-source software engineering.`;
}

function educationAnswer(language: Language) {
  return language === "ar"
    ? `## المؤهلات الأكاديمية والتدريبية\n\n### 1. بكالوريوس نظم معلومات إدارية (MIS)\n- **المؤسسة:** أكاديمية الشروق (El Shorouk Academy)\n- **الفترة:** 2019 – 2023\n- **التخصص:** نظم معلومات إدارية، تحليل وتصميم النظم، وقواعد البيانات.\n\n### 2. دبلومة تطوير البرمجيات بالذكاء الاصطناعي (9 أشهر)\n- **الجهة:** مبادرة رواد مصر الرقمية (Digilians) / وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)\n- **المسار:** AI-Powered Software Development Track\n- **المحتوى:** هندسة الـ Backend، ودمج تقنيات الذكاء الاصطناعي، والحاويات (Docker)، والـ Cloud مع AWS، ومنهجيات CI/CD.`
    : `## Education & Formal Credentials\n\n### 1. Bachelor of Management Information Systems (MIS)\n- **Institution:** El Shorouk Academy\n- **Period:** 2019 – 2023\n- **Specialization:** Management Information Systems, System Analysis & Design, Database Architecture.\n\n### 2. AI-Powered Software Development Track (9-Month Diploma)\n- **Provider:** Digital Pioneers Initiative (Digilians) / MCIT\n- **Curriculum:** Intensive full-stack & backend engineering, AI integrations, Docker containerization, AWS cloud fundamentals, and CI/CD automation.`;
}

function trainingAnswer(language: Language) {
  return language === "ar"
    ? `## التدريب المتخصص والبرامج التنموية\n- **دبلومة مبادرة رواد مصر الرقمية (Digilians):** برنامج مكثف لمدة 9 أشهر في مسار تطوير البرمجيات المدعومة بالذكاء الاصطناعي (AI-Powered Software Development Track) بالتعاون مع وزارة الاتصالات وتكنولوجيا المعلومات (MCIT).\n- شمل التدريب: هندسة البرمجيات المتقدمة، بناء RESTful APIs، نمذجة قواعد البيانات (PostgreSQL, MongoDB, MySQL)، التخزين المؤقت مع Redis، إدارة الحاويات عبر Docker، واستضافة الأنظمة السحابية على AWS، ودمج أدوات ونماذج الذكاء الاصطناعي.`
    : `## Professional Training Programs\n- **Digital Pioneers Initiative (Digilians) — 9-Month Intensive Diploma:** AI-Powered Software Development Track under the Ministry of Communications and Information Technology (MCIT).\n- Covered: Advanced software engineering, robust REST API design, relational & NoSQL databases, Redis caching, Docker containerization, AWS cloud infrastructure, and practical AI workflow integrations.`;
}

function certificationsAnswer(language: Language) {
  return language === "ar"
    ? `## الاعتمادات والمؤهلات الموثقة\n- **دبلومة تطوير البرمجيات بالذكاء الاصطناعي (9 أشهر):** مبادرة رواد مصر الرقمية (Digilians) / وزارة الاتصالات وتكنولوجيا المعلومات.\n- **بكالوريوس نظم معلومات إدارية (MIS):** أكاديمية الشروق (2019 – 2023).\n\nجميع المؤهلات موثقة رسمياً وتعكس خلفية تجمع بين فهم متطلبات الأعمال وتطوير النظم البرمجية الحديثة.`
    : `## Verified Credentials\n- **AI-Powered Software Development 9-Month Diploma:** Digital Pioneers Initiative (Digilians) / MCIT.\n- **Bachelor of Management Information Systems (MIS):** El Shorouk Academy (2019 – 2023).\n\nAll credentials are verified and represent a balanced combination of business information systems analysis and modern software engineering.`;
}

function projectAnswer(project: (typeof verifiedProjects)[number], language: Language) {
  const name = language === "ar" ? project.nameAr || project.name : project.name;
  const description = language === "ar" ? project.descriptionAr || project.description : project.description;
  const type = language === "ar" ? project.typeAr || project.type : project.type;
  const features = language === "ar" && project.featuresAr?.length ? project.featuresAr : project.features;
  const lines = [
    `## ${name}`,
    type ? `**${language === "ar" ? "النوع" : "Type"}:** ${type}` : "",
    description || "",
    features?.length ? `**${language === "ar" ? "أبرز الخصائص والوظائف" : "Key Features"}:\n${asBullets(features)}` : "",
    project.technologies?.length ? `**${language === "ar" ? "التقنيات المستخدمة" : "Technologies"}:** ${project.technologies.join(", ")}` : "",
    `**${language === "ar" ? "مستودع المشروع" : "Repository"}:** ${project.source !== "Unavailable" ? `[GitHub Repository](${project.source})` : "Available on GitHub"}`,
    language === "ar"
      ? `**دور محمد في المشروع:** مهندس برمجيات ومسؤول عن البنية الخلفية (Backend Architecture) وتصميم واجهات REST APIs وقواعد البيانات.`
      : `**Mohamed’s Role:** Software Engineer responsible for backend architecture, REST API design, database modeling, and system integration.`,
  ].filter(Boolean);
  return lines.join("\n\n");
}

function projectsAnswer(language: Language) {
  const lines = verifiedProjects.map((project) => {
    const name = language === "ar" ? project.nameAr || project.name : project.name;
    const description = language === "ar" ? project.descriptionAr || project.description : project.description;
    const tech = project.technologies?.length ? ` (${project.technologies.slice(0, 5).join(", ")})` : "";
    return `**${name}:** ${description}${tech} — [${language === "ar" ? "مستودع GitHub" : "GitHub"}](${project.source})`;
  });
  return language === "ar"
    ? `## مشاريع محمد علي المعتمدة\n${asBullets(lines)}\n\n### المشاريع الرئيسية:\n1. **منصة Avicena (Avicena Platform):** منصة متكاملة للرعاية الصحية، تشمل هندسة Backend متقدمة، واتصال فوري عبر WebSockets، ودمج للذكاء الاصطناعي، وتشغيل بالحاويات عبر Docker.\n2. **FitMate AI:** تطبيق لياقة وتغذية ذكي يقدم خطط تمارين وتتبع وجبات ونصائح مخصصة بالذكاء الاصطناعي.\n3. **ImpersonaGuard:** محرك حماية وأمن معلومات لكشف محاولات انتحال العلامات التجارية والتصيد الاحتيالي بدقة.\n\nيمكنك السؤال عن أي مشروع بالاسم لمعرفة تفاصيله المعمارية والتقنية!`
    : `## Mohamed Ali's Verified Projects\n${asBullets(lines)}\n\n### Key Featured Projects:\n1. **Avicena Platform:** A comprehensive healthcare platform featuring advanced backend engineering, real-time WebSockets, AI features, and Dockerized deployment.\n2. **FitMate AI:** An intelligent fitness and nutrition tracking application powered by AI coaching.\n3. **ImpersonaGuard:** A security-focused engine for detecting domain spoofing, phishing, and brand impersonation attacks.\n\nAsk about any project by name for detailed technical architecture, features, and repository info!`;
}

const details = {
  en: {
    availability: "Mohamed Ali is open to professional software engineering opportunities, backend development roles, and technical collaborations. To discuss a project or role, reach out via LinkedIn or his portfolio contact form.",
    contact: `## Public Contact Channels\n- LinkedIn: [Mohamed Ali](${knowledgeBase.contact.linkedin})\n- GitHub: [Mohamedali409](${knowledgeBase.contact.github})\n- Portfolio: [mohamed-ali-portfolio](${knowledgeBase.contact.portfolio})\n- Direct Contact: Available through the portfolio contact form.`,
    ai: "Mohamed completed the 9-month specialized AI-Powered Software Development diploma at Digilians (MCIT). His practical experience includes developing FitMate AI (AI fitness and coaching application), incorporating AI-driven diagnostics/workflows into the Avicena platform, and leveraging modern LLM and heuristic models in production architectures.",
    services: "Mohamed provides professional software engineering services including: Scalable RESTful API development (Node.js/Express/TypeScript), Database design and query optimization (PostgreSQL, MongoDB, MySQL, Redis), Containerization and deployment (Docker, AWS, CI/CD), AI workflow integration, and Full-Stack web development.",
    career: "Mohamed positions himself as a Full-Stack Developer with a deep focus on Backend Engineering. He is well-suited for Backend Engineer, Node.js Developer, and Full-Stack Software Engineer positions.",
    graduationProject: `## Management Information Systems Graduation Project\nMohamed graduated with a Bachelor's degree in Management Information Systems (MIS) from El Shorouk Academy in 2023, where his graduation project integrated system analysis, database architecture, and software design.`,
  },
  ar: {
    availability: "محمد علي منفتح على فرص العمل الهندسية ووظائف تطوير الـ Backend ومشاريع الـ Full-Stack والتعاون التقني. يمكنك التواصل معه مباشرة عبر LinkedIn أو من خلال نموذج التواصل في الموقع.",
    contact: `## قنوات التواصل العامة\n- LinkedIn: [Mohamed Ali](${knowledgeBase.contact.linkedin})\n- GitHub: [Mohamedali409](${knowledgeBase.contact.github})\n- الموقع الشخصي: [mohamed-ali-portfolio](${knowledgeBase.contact.portfolio})\n- نموذج التواصل: متاح مباشرة من صفحة Contact داخل الموقع.`,
    ai: "أتم محمد دبلومة تطوير البرمجيات بالذكاء الاصطناعي (Digilians) لمدة 9 أشهر. تشمل خبرته العملية تطبيق FitMate AI (تطبيق لياقة وتغذية مدعوم بالذكاء الاصطناعي)، ودمج مزايا الذكاء الاصطناعي في منصة Avicena للرعاية الصحية، وبناء أدوات فحص أمنية ذكية في ImpersonaGuard.",
    services: "يقدم محمد خدمات هندسة البرمجيات المتكاملة: بناء وتصميم واجهات RESTful APIs عالية الأداء (Node.js, Express, TypeScript)، وتصميم قواعد البيانات وتحسين الاستعلامات (PostgreSQL, MongoDB, MySQL, Redis)، وتجهيز بيئات الحاويات عبر Docker، والربط مع الحوسبة السحابية AWS، ودمج حلول الذكاء الاصطناعي.",
    career: "يتمتع محمد بجاهزية عالية لأدوار مهندس Backend ومطور Node.js ومطور Full-Stack، مع قدرة قوية على فهم متطلبات الأعمال التقنية بفضل دراسته لنظم المعلومات الإدارية (MIS).",
    graduationProject: `## مشروع تخرج نظم المعلومات الإدارية\nتخرج محمد في أكاديمية الشروق (2019 – 2023) بدرجة بكالوريوس نظم معلومات إدارية (MIS)، واشتمل مشروعه على تحليل النظم وتصميم قواعد البيانات وبناء النظم البرمجية الإدارية.`,
  },
} as const;

export const rabeaAiQuickAnswers = {
  en: {
    profile: profileAnswer("en"),
    skills: skillsAnswer("en"),
    frontend: skillsAnswer("en", "Frontend"),
    backend: skillsAnswer("en", "Backend"),
    cloud: skillsAnswer("en", "Cloud & DevOps"),
    projects: projectsAnswer("en"),
    experience: experienceAnswer("en"),
    education: educationAnswer("en"),
    training: trainingAnswer("en"),
    certifications: certificationsAnswer("en"),
    availability: details.en.availability,
    contact: details.en.contact,
    ai: details.en.ai,
    services: details.en.services,
    career: details.en.career,
    graduationProject: details.en.graduationProject,
  },
  ar: {
    profile: profileAnswer("ar"),
    skills: skillsAnswer("ar"),
    frontend: skillsAnswer("ar", "Frontend"),
    backend: skillsAnswer("ar", "Backend"),
    cloud: skillsAnswer("ar", "Cloud & DevOps"),
    projects: projectsAnswer("ar"),
    experience: experienceAnswer("ar"),
    education: educationAnswer("ar"),
    training: trainingAnswer("ar"),
    certifications: certificationsAnswer("ar"),
    availability: details.ar.availability,
    contact: details.ar.contact,
    ai: details.ar.ai,
    services: details.ar.services,
    career: details.ar.career,
    graduationProject: details.ar.graduationProject,
  },
} as const;

const phraseSignals: Record<string, { en: string[]; ar: string[] }> = {
  profile: {
    en: ["who is mohamed", "about mohamed", "tell me about him", "introduce mohamed", "professional summary", "who are you", "who is mohamed ali"],
    ar: ["من هو محمد", "مين محمد", "من هو محمد علي", "عرفني على محمد", "نبذة عن محمد", "احكيلي عن محمد", "عرفني بنفسك"],
  },
  skills: {
    en: ["technical skills", "his skills", "his tech stack", "technologies does he use", "technologies does he work with", "what can he build with", "list his skills"],
    ar: ["مهاراته التقنية", "مهارات محمد", "تقنيات محمد", "تقنياته", "بيشتغل بايه", "بيعرف تقنيات ايه", "الستاك بتاعه", "بيستخدم تقنيات ايه"],
  },
  frontend: {
    en: ["frontend skills", "front-end skills", "react experience", "next.js experience", "react and next", "frontend technologies"],
    ar: ["خبرته في الواجهات", "خبرة رياكت", "خبرته في رياكت", "خبرته في next", "مهارات الفرونت", "مهارات الواجهة الامامية"],
  },
  backend: {
    en: ["backend skills", "back-end skills", "node.js experience", "express experience", "database experience", "backend technologies", "rest api"],
    ar: ["خبرته في الباك", "خبرة الباك اند", "خبرته في نود", "مهارات الباك", "خبرة قواعد البيانات", "تقنيات الباك اند", "واجهات برمجة التطبيقات"],
  },
  cloud: {
    en: ["cloud skills", "devops skills", "aws experience", "docker experience", "his aws experience", "cloud technologies"],
    ar: ["خبرته في aws", "خبرته في الكلاود", "مهارات devops", "خبرة الحوسبة السحابية", "تقنيات السحابة", "خبرة دوكر"],
  },
  projects: {
    en: ["his projects", "mohamed projects", "portfolio projects", "projects has he built", "what has mohamed built", "show me his work", "project portfolio", "avicena", "fitmate", "impersonaguard"],
    ar: ["مشروعاته", "مشاريع محمد", "مشروعات محمد", "اعمال محمد", "المشاريع بتاعته", "وريني شغله", "مشاريعه البرمجية", "بنى ايه", "افيسينا", "فيت ميت", "امبيرسونا"],
  },
  experience: {
    en: ["his experience", "what experience does mohamed have", "work experience", "professional background", "career history", "employment history", "his previous work", "his professional work"],
    ar: ["خبراته المهنية", "خبرة محمد", "الخبرة العملية", "تاريخه المهني", "اشتغل فين", "خبرته في الشغل", "خبراته السابقة", "ايه خبرة محمد"],
  },
  education: {
    en: ["educational background", "his degree", "university degree", "what did he study", "what did mohamed study", "his education", "el shorouk academy", "mis degree"],
    ar: ["خلفيته التعليمية", "مؤهله الدراسي", "مؤهله الجامعي", "درس ايه", "محمد درس ايه", "دراسته الجامعية", "اكاديمية الشروق", "نظم معلومات ادارية"],
  },
  training: {
    en: ["training programs", "courses has he completed", "what training has mohamed done", "his diplomas", "professional training", "digilians"],
    ar: ["البرامج التدريبية", "دوراته", "كورسات محمد", "دبلوماته", "تدريباته", "ما الدورات", "تدريبات محمد", "رواد مصر الرقمية", "ديجيليانز", "دبلومة"],
  },
  certifications: {
    en: ["his certifications", "his certificates", "certificates does he have", "what certifications", "list his certificates", "credentials"],
    ar: ["شهاداته", "شهادات محمد", "ايه شهاداته", "ايه شهادات محمد", "اعتماداته المهنية", "الشهادات التي حصل عليها"],
  },
  availability: {
    en: ["available for work", "is he hiring", "open to work", "availability", "looking for a job"],
    ar: ["متاح للعمل", "متاح لوظيفة", "يدور على شغل", "متاح للتوظيف", "هل يبحث عن عمل"],
  },
  contact: {
    en: ["contact him", "his email", "his linkedin", "his github", "mohamed linkedin", "mohamed github", "contact details", "how can i reach"],
    ar: ["اتواصل معه", "اتواصل مع محمد", "بريده الالكتروني", "لينكدان محمد", "لينكد ان محمد", "حساب github", "طرق التواصل"],
  },
  ai: {
    en: ["ai experience", "artificial intelligence experience", "generative ai", "llm experience", "ai projects", "fitmate ai"],
    ar: ["خبرته في الذكاء الاصطناعي", "خبرة الذكاء الاصطناعي", "خبرة generative ai", "مشاريع الذكاء الاصطناعي", "تكامل ai"],
  },
  services: {
    en: ["services can he provide", "what can he build", "hire him for", "freelance services", "what services"],
    ar: ["الخدمات التي يقدمها", "يقدر يبني ايه", "اقدر اوظفه في ايه", "خدمات العمل الحر", "ماذا يستطيع ان يقدم"],
  },
  career: {
    en: ["what role is he looking", "career goals", "which roles", "job preferences", "what roles can he apply"],
    ar: ["الوظائف المناسبة له", "الوظائف التي يستهدفها", "مجال عمله", "تفضيلاته الوظيفية", "يشتغل ايه"],
  },
  graduationProject: {
    en: ["graduation project", "his capstone", "el shorouk graduation"],
    ar: ["مشروع تخرجه", "مشروع التخرج", "تخرج اكاديمية الشروق"],
  },
};

function normalize(value: string) {
  return value
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function getPreparedRabeaAnswer(question: string, preferredLanguage: Language) {
  const query = normalize(question);
  const language: Language = /[\u0600-\u06FF]/.test(question) ? "ar" : preferredLanguage;

  const answerFromFaq = getInstantFaqAnswer(question);
  if (answerFromFaq) return answerFromFaq;

  const project = verifiedProjects.find((item) =>
    [item.name, item.nameAr].some((name) => name && normalize(name).length >= 3 && query.includes(normalize(name))),
  );
  if (project) return projectAnswer(project, language);

  const selected = Object.entries(phraseSignals)
    .filter(([, signals]) => signals[language].some((phrase) => query.includes(normalize(phrase))))
    .map(([id]) => id)
    .slice(0, 2);
  if (!selected.length) {
    const subjectTerms = language === "ar"
      ? ["محمد", "علي", "هو", "عنده", "له", "بتاعه", "انت", "بتشتغل"]
      : ["mohamed", "ali", "he", "his", "him", "you", "your"];
    const aboutMohamed = subjectTerms.some((term) => query.split(" ").includes(normalize(term)));
    if (!aboutMohamed) return undefined;

    const hasAny = (terms: string[]) => terms.some((term) => query.includes(normalize(term)));
    if (hasAny(["certificate", "certification", "certified", "شهادة", "شهادات", "اعتماد"])) selected.push("certifications");
    if (hasAny(["contact", "email", "linkedin", "github", "reach", "تواصل", "بريد", "لينكد", "حساب"])) selected.push("contact");
    if (hasAny(["available", "availability", "hiring", "job", "وظيفة", "متاح", "عمل"])) selected.push("availability");
    if (hasAny(["education", "degree", "university", "study", "mis", "shorouk", "تعليم", "دراسة", "مؤهل", "جامعة", "الشروق"])) selected.push("education");
    if (hasAny(["training", "course", "diploma", "digilians", "تدريب", "دورة", "كورسات", "دبلوم", "ديجيليانز", "رواد"])) selected.push("training");
    if (hasAny(["experience", "career", "years", "worked", "خبرة", "خبرات", "سنين", "سنوات", "اشتغل"])) selected.push("experience");
    if (hasAny(["artificial intelligence", "generative ai", "llm", "ai", "ذكاء اصطناعي", "ذكاء"])) selected.push("ai");
    if (hasAny(["cloud", "devops", "aws", "docker", "سحابة", "كلاود", "ديف اوبس", "دوكر"])) selected.push("cloud");
    if (hasAny(["frontend", "front end", "react", "next.js", "nextjs", "tailwind", "واجهة امامية", "فرونت"])) selected.push("frontend");
    if (hasAny(["backend", "back end", "node.js", "nodejs", "express", "mongodb", "postgresql", "mysql", "redis", "باك اند", "قواعد بيانات"])) selected.push("backend");
    if (hasAny(["skill", "technology", "technologies", "tech stack", "tools", "مهارة", "مهارات", "تقنيات", "ستاك"])) selected.push("skills");
    if (hasAny(["project", "projects", "built", "portfolio", "avicena", "fitmate", "impersonaguard", "مشروع", "مشاريع", "مشروعات", "اعمال"])) selected.push("projects");
    if (hasAny(["services", "hire", "freelance", "build for me", "خدمات", "توظيف", "العمل الحر"])) selected.push("services");
  }
  const uniqueSelected = [...new Set(selected)].slice(0, 2);
  if (!uniqueSelected.length) return undefined;

  return uniqueSelected
    .map((id) => rabeaAiQuickAnswers[language][id as keyof (typeof rabeaAiQuickAnswers)[typeof language]])
    .filter(Boolean)
    .join("\n\n---\n\n");
}
