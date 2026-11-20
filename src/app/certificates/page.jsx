import CertificatesView from "@/views/CertificatesView";

export const metadata = {
  title: "Credentials & Education | Mohamed Ali — Full-Stack Developer",
  description:
    "Verified specialized diplomas and academic qualifications earned by Mohamed Ali: AI-Powered Software Development Diploma (Digilians Initiative / MCIT) and Bachelor's in Management Information Systems (El Shorouk Academy).",
  keywords: [
    "Credentials Mohamed Ali",
    "Mohamed Ali",
    "محمد علي",
    "Digilians Initiative",
    "AI-Powered Software Development",
    "El Shorouk Academy",
    "Management Information Systems",
    "Software Engineering Credentials"
  ],
  alternates: {
    canonical: "https://mohamed-ali-portfolio.vercel.app/certificates",
  },
  openGraph: {
    title: "Credentials & Education | Mohamed Ali — Full-Stack Developer",
    description:
      "Verified specialized diplomas and academic qualifications earned by Mohamed Ali: Digilians AI Diploma and El Shorouk Academy MIS degree.",
    url: "https://mohamed-ali-portfolio.vercel.app/certificates",
    locale: "en_US",
    images: ["/opengraph-image", "/mohamed.png"],
  },
};

export default function CertificatesPage() {
  return <CertificatesView />;
}
