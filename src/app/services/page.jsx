import ServicesView from "@/views/ServicesView";

export const metadata = {
  title: "Services & Solutions | Mohamed Ali — Full-Stack Developer",
  description:
    "Professional software engineering services by Mohamed Ali: Backend Development & REST APIs, Full-Stack Web Development, Database Architecture & Redis Caching, Docker Containerization, AWS Deployment, and AI Integration.",
  keywords: [
    "Services Mohamed Ali",
    "Mohamed Ali",
    "محمد علي",
    "Backend Development Services",
    "RESTful API Development",
    "Full Stack Web Development",
    "Docker Containerization",
    "AWS Deployment",
    "AI Integration"
  ],
  alternates: {
    canonical: "https://mohamed-ali-portfolio.vercel.app/services",
  },
  openGraph: {
    title: "Services & Solutions | Mohamed Ali — Full-Stack Developer",
    description:
      "Professional software engineering services by Mohamed Ali: Backend Development, Full-Stack Apps, Database Modeling, Docker, and AI Integration.",
    url: "https://mohamed-ali-portfolio.vercel.app/services",
    locale: "en_US",
    images: ["/opengraph-image", "/mohamed-ali-avatar.svg"],
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
