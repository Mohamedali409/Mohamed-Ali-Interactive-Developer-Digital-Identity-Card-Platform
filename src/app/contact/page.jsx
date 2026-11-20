import ContactView from "@/views/ContactView";

export const metadata = {
  title: "Contact | Mohamed Ali — Full-Stack Developer & Backend Engineer",
  description:
    "Get in touch with Mohamed Ali for software development projects, backend engineering, RESTful APIs, and technical consulting.",
  keywords: [
    "Contact Mohamed Ali",
    "Mohamed Ali",
    "محمد علي",
    "Hire Backend Developer",
    "Full Stack Software Engineer",
    "Software Engineering Inquiries"
  ],
  alternates: {
    canonical: "https://mohamed-ali-portfolio.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Mohamed Ali — Full-Stack Developer & Backend Engineer",
    description:
      "Get in touch with Mohamed Ali for software development projects, backend engineering, RESTful APIs, and technical consulting.",
    url: "https://mohamed-ali-portfolio.vercel.app/contact",
    locale: "en_US",
    images: ["/opengraph-image", "/mohamed.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
