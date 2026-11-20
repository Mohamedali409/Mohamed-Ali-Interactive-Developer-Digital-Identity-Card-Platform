import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  metadataBase: new URL("https://mohamed-ali-portfolio.vercel.app"),
  title: {
    default: "Mohamed Ali | Full-Stack Developer | Backend-Focused Software Engineer",
    template: "%s | Mohamed Ali",
  },
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
    "JavaScript Developer",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "DevOps",
    "CI/CD",
    "AI Integration"
  ],
  authors: [{ name: "Mohamed Ali", url: "https://mohamed-ali-portfolio.vercel.app" }],
  creator: "Mohamed Ali",
  publisher: "Mohamed Ali",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mohamed-ali-portfolio.vercel.app",
  },
  icons: {
    icon: "/mohamed.png",
    shortcut: "/mohamed.png",
    apple: "/mohamed.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamed-ali-portfolio.vercel.app",
    siteName: "Mohamed Ali",
    title: "Mohamed Ali | Full-Stack Developer | Backend-Focused Software Engineer",
    description:
      "Mohamed Ali — Full-Stack Developer and Backend-Focused Software Engineer specializing in Node.js, Express.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, AWS, and AI integration.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohamed Ali (محمد علي) — Full-Stack Developer & Backend Software Engineer",
      },
      {
        url: "/mohamed.png",
        width: 400,
        height: 400,
        alt: "Mohamed Ali (محمد علي) Profile Avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali | Full-Stack Developer | Backend-Focused Software Engineer",
    description:
      "Mohamed Ali — Full-Stack Developer and Backend-Focused Software Engineer specializing in Node.js, Express.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, AWS, and AI integration.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mohamed-ali-portfolio.vercel.app/#person",
      "name": "Mohamed Ali",
      "alternateName": "محمد علي",
      "jobTitle": "Full-Stack Developer | Backend-Focused Software Engineer",
      "url": "https://mohamed-ali-portfolio.vercel.app/",
      "image": "https://mohamed-ali-portfolio.vercel.app/mohamed.png",
      "description": "Mohamed Ali is a Full-Stack Developer and Backend-Focused Software Engineer specializing in Node.js, Express.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, AWS, and AI integration.",
      "inLanguage": ["en", "ar"],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "El Shorouk Academy",
        "description": "Bachelor of Management Information Systems (2019 – 2023)"
      },
      "sameAs": [
        "https://github.com/Mohamedali409",
        "https://www.linkedin.com/in/mohamed-ali409"
      ],
      "knowsAbout": [
        "Backend Development",
        "Full-Stack Web Development",
        "Node.js",
        "Express.js",
        "TypeScript",
        "JavaScript",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "RESTful APIs",
        "Authentication & Authorization",
        "Docker",
        "AWS",
        "DevOps",
        "CI/CD",
        "AI Integration"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mohamed-ali-portfolio.vercel.app/#website",
      "url": "https://mohamed-ali-portfolio.vercel.app/",
      "name": "Mohamed Ali",
      "alternateName": "محمد علي",
      "description": "Mohamed Ali Developer Portfolio — Full-Stack Developer | Backend-Focused Software Engineer.",
      "inLanguage": ["en", "ar"],
      "publisher": {
        "@id": "https://mohamed-ali-portfolio.vercel.app/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mohamed-ali-portfolio.vercel.app/#profilepage",
      "url": "https://mohamed-ali-portfolio.vercel.app/",
      "name": "Mohamed Ali | Full-Stack Developer | Backend-Focused Software Engineer",
      "mainEntity": {
        "@id": "https://mohamed-ali-portfolio.vercel.app/#person"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <SiteChrome>{children}</SiteChrome>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
