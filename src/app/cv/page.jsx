import Image from "next/image";
import {
  Database,
  ExternalLink,
  Globe,
  Layers3,
  Mail,
  Monitor,
} from "lucide-react";

export const metadata = {
  title: { absolute: "Mohamed Ali | Digital CV" },
  description:
    "Explore Mohamed Ali's professional background, education, and technical profile as a Full-Stack Developer and Backend-Focused Software Engineer.",
  alternates: { canonical: "https://mohamed-ali-portfolio.vercel.app/cv" },
  openGraph: {
    title: "Mohamed Ali | Digital CV",
    description:
      "Explore Mohamed Ali's professional background, education, and technical profile as a Full-Stack Developer and Backend-Focused Software Engineer.",
    url: "https://mohamed-ali-portfolio.vercel.app/cv",
    type: "profile",
  },
};

const cvs = [
  {
    title: "Backend Engineer",
    subtitle: "Node.js · Express.js · PostgreSQL · MongoDB · Redis",
    href: "/contact",
    icon: Database,
    color: "backend",
  },
  {
    title: "Full-Stack Developer",
    subtitle: "TypeScript · React · Next.js · Node.js · REST APIs",
    href: "/contact",
    icon: Layers3,
    color: "fullstack",
  },
  {
    title: "Cloud & DevOps Integration",
    subtitle: "Docker · AWS · CI/CD · Microservices Architecture",
    href: "/contact",
    icon: Monitor,
    color: "frontend",
  },
];

const socials = [
  { label: "Personal Website", href: "https://mohamed-ali-portfolio.vercel.app", icon: Globe },
  { label: "GitHub", href: "https://github.com/Mohamedali409", icon: null },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-ali409",
    icon: null,
  },
];

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="cv-social-brand-icon">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.88 2.02 3.39 1.43.1-.73.4-1.23.71-1.51-2.48-.28-5.08-1.24-5.08-5.51 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.28-2.6 5.23-5.09 5.5.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="cv-linkedin-icon">
      <path
        fill="currentColor"
        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.99V9h2.94v9.45ZM6.46 7.71a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Zm12 10.74h-2.93v-4.59c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.67H9.3V9h2.82v1.29h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.48v5.2Z"
      />
    </svg>
  );
}

export default function CvPage() {
  return (
    <main className="cv-page">
      <div className="cv-container">
        <header className="cv-hero">
          <Image
            className="cv-portrait"
            src="/mohamed.png"
            alt="Mohamed Ali - Full-Stack Developer & Backend-Focused Software Engineer"
            width={184}
            height={184}
            priority
          />
          <h1>Mohamed Ali</h1>
          <p className="cv-title">Full-Stack Developer | Backend-Focused Software Engineer</p>
          <p className="cv-specialization">Backend Engineering · Cloud & AI Integration</p>
        </header>

        <section className="cv-personal" aria-labelledby="personal-heading">
          <h2 id="personal-heading">Professional Credentials</h2>
          <p><strong>Education:</strong> Bachelor of Management Information Systems — El Shorouk Academy (2019 – 2023)</p>
          <p><strong>Specialized Diploma:</strong> Digital Pioneers Initiative (Digilians) — AI-Powered Software Development Track (9-Month Diploma)</p>
          <p><strong>Core Focus:</strong> Node.js, Express.js, TypeScript, RESTful APIs, PostgreSQL, MongoDB, Docker, AWS</p>
        </section>

        <section className="cv-select" aria-labelledby="cv-heading">
          <div className="cv-divider" />
          <h2 id="cv-heading">Specialization Tracks</h2>
          <div className="cv-list">
            {cvs.map(({ title, subtitle, href, icon: Icon, color }) => (
              <article className="cv-card" key={title}>
                <a
                  className="cv-download"
                  href={href}
                  aria-label={`Inquire about ${title}`}
                >
                  <Mail aria-hidden="true" />
                </a>
                <a
                  className="cv-card-copy"
                  href={href}
                  aria-label={`Inquire about ${title}`}
                >
                  <span className="cv-card-title">{title}</span>
                  <span className="cv-card-subtitle">{subtitle}</span>
                </a>
                <Icon className={`cv-role-icon ${color}`} aria-hidden="true" />
              </article>
            ))}
          </div>
          <p className="cv-hint">CV document is available upon direct request. Reach out via the contact form or LinkedIn.</p>
        </section>

        <nav className="cv-socials" aria-label="Social links">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              className="cv-social"
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cv-social-icon">
                {Icon ? <Icon aria-hidden="true" /> : label === "GitHub" ? <GithubIcon /> : <LinkedInIcon />}
              </span>
              <span className="cv-social-label">{label}</span>
              <span className="cv-social-url">
                {label === "Personal Website"
                  ? "mohamed-ali-portfolio.vercel.app"
                  : label === "GitHub"
                    ? "github.com/Mohamedali409"
                    : "linkedin.com/in/mohamed-ali409"}
                <ExternalLink aria-hidden="true" />
              </span>
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
