import AboutView from "@/views/AboutView";

export const metadata = {
  title: "About Me | Mohamed Ali — Full-Stack Developer & Backend Engineer",
  description:
    "Mohamed Ali (محمد علي) is a Full-Stack Developer and Backend-Focused Software Engineer with a Bachelor's in Management Information Systems from El Shorouk Academy and a specialized AI-powered software development diploma from the Digilians Initiative.",
  keywords: [
    "About Mohamed Ali",
    "Mohamed Ali",
    "محمد علي",
    "Mohamed Ali Developer",
    "Mohamed Ali Software Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Digilians Initiative",
    "El Shorouk Academy",
    "MIS Graduate"
  ],
  alternates: {
    canonical: "https://mohamed-ali-portfolio.vercel.app/about",
  },
  openGraph: {
    title: "About Mohamed Ali | Full-Stack Developer & Backend Engineer",
    description:
      "Mohamed Ali (محمد علي) is a Full-Stack Developer and Backend-Focused Software Engineer with an MIS degree from El Shorouk Academy and specialized diploma from Digilians.",
    url: "https://mohamed-ali-portfolio.vercel.app/about",
    locale: "en_US",
    images: ["/opengraph-image", "/mohamed-ali-avatar.svg"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
