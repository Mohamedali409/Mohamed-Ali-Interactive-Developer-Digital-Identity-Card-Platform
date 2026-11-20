import ProjectsView from "@/views/ProjectsView";

export const metadata = {
  title: "Projects | Mohamed Ali — Full-Stack Developer & Backend Engineer",
  description:
    "Explore real-world software engineering projects built by Mohamed Ali: Avicena (Healthcare Platform with WebSockets), FitMate AI (Fitness & Nutrition AI App), and ImpersonaGuard (Cybersecurity Engine).",
  keywords: [
    "Projects Mohamed Ali",
    "Mohamed Ali",
    "محمد علي",
    "Avicena",
    "FitMate AI",
    "ImpersonaGuard",
    "Backend Projects",
    "Full Stack Software Engineer",
    "Node.js Projects",
    "Docker Projects"
  ],
  alternates: {
    canonical: "https://mohamed-ali-portfolio.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Mohamed Ali — Full-Stack Developer & Backend Engineer",
    description:
      "Explore real-world software engineering projects built by Mohamed Ali: Avicena, FitMate AI, and ImpersonaGuard.",
    url: "https://mohamed-ali-portfolio.vercel.app/projects",
    locale: "en_US",
    images: ["/opengraph-image", "/mohamed.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
