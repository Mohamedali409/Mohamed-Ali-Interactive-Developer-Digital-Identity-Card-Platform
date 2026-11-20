import HomeView from "@/views/HomeView";

export const metadata = {
  title: "Mohamed Ali | Full-Stack Developer | Backend-Focused Software Engineer",
  description:
    "Mohamed Ali — Full-Stack Developer and Backend-Focused Software Engineer specializing in Node.js, Express.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, AWS, and AI integration.",
  keywords: [
    "Mohamed Ali",
    "محمد علي",
    "Mohamed Ali Developer",
    "Mohamed Ali Software Engineer",
    "Mohamed Ali Full Stack Developer",
    "Mohamed Ali Backend Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "Express.js Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "AI Integration"
  ],
  alternates: {
    canonical: "https://mohamed-ali-portfolio.vercel.app",
  },
  openGraph: {
    title: "Mohamed Ali | Full-Stack Developer | Backend-Focused Software Engineer",
    description:
      "Mohamed Ali — Full-Stack Developer and Backend-Focused Software Engineer specializing in Node.js, Express.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, AWS, and AI integration.",
    url: "https://mohamed-ali-portfolio.vercel.app",
    locale: "en_US",
    images: ["/opengraph-image", "/mohamed-ali-avatar.svg"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
