import {
  GraduationCap,
  Code,
  Award,
  BookOpen,
  Cloud,
  Database
} from "lucide-react";

export const certificates = [
  {
    id: 1,
    title: "AI-Powered Software Development Specialized Diploma",
    titleAr: "دبلومة تطوير البرمجيات المدعومة بالذكاء الاصطناعي (التخصصية)",
    issuer: "Digital Pioneers Initiative (Digilians) – Ministry of Communications & IT (MCIT)",
    issuerAr: "مبادرة الرواد الرقميون (Digilians) – وزارة الاتصالات وتكنولوجيا المعلومات",
    date: "Nine-Month Intensive Diploma",
    type: "diploma",
    grade: "Completed Specialized Track",
    gradeAr: "إتمام المسار التخصصي",
    description:
      "Nine-month intensive specialized diploma organized by the Ministry of Communications & Information Technology (MCIT). Covered backend engineering, software architecture, containerization with Docker, cloud fundamentals with AWS, CI/CD pipelines, and AI workflow integration.",
    descriptionAr:
      "دبلومة تخصصية مكثفة لمدة تسعة أشهر تحت إشراف وزارة الاتصالات وتكنولوجيا المعلومات (MCIT). ركزت على هندسة الأنظمة الخلفية، معمارية البرمجيات، إدارة الحاويات بـ Docker، البنية التحتية السحابية بـ AWS، مسارات CI/CD، ودمج حلول الذكاء الاصطناعي في دورة حياة البرمجيات.",
    icon: Code,
    category: "Programming",
    categoryAr: "البرمجة والذكاء الاصطناعي",
    verified: true,
  },
  {
    id: 2,
    title: "Bachelor's in Management Information Systems (MIS)",
    titleAr: "بكالوريوس نظم المعلومات الإدارية (MIS)",
    issuer: "El Shorouk Academy",
    issuerAr: "أكاديمية الشروق",
    date: "2019 – 2023",
    type: "degree",
    grade: "Bachelor's Degree",
    gradeAr: "درجة البكالوريوس",
    description:
      "Bachelor's degree in Management Information Systems from El Shorouk Academy (2019 – 2023). Comprehensive academic study in systems analysis and design, database management, information systems, and software engineering principles.",
    descriptionAr:
      "درجة البكالوريوس في نظم المعلومات الإدارية من أكاديمية الشروق (2019 – 2023). دراسة أكاديمية شاملة في تحليل وتصميم النظم، إدارة قواعد البيانات، نظم المعلومات الإدارية والمؤسسية، وأسس هندسة البرمجيات.",
    icon: GraduationCap,
    category: "Education",
    categoryAr: "التعليم الأكاديمي",
    verified: true,
  },
];

export const certificateCategories = [
  { id: "all", name: "All Credentials", nameAr: "جميع الاعتمادات", icon: Award },
  { id: "Programming", name: "Training & Diplomas", nameAr: "الدبلومات والتدريب", icon: Code },
  { id: "Education", name: "Academic Education", nameAr: "التعليم الأكاديمي", icon: GraduationCap },
];
