import CvDownloadCenter from './CvDownloadCenter';

export const metadata = {
  title: 'Download My CV | Mohamed Ali — Full-Stack Developer & Backend Software Engineer',
  description:
    'Download official, verified curriculum vitae documents for Mohamed Ali. Specialized tracks available in Full-Stack & AI Systems, DevOps & Cloud Infrastructure, and Backend Software Engineering. Direct one-click PDF downloads and preview.',
  alternates: { canonical: 'https://mohamed-ali-portfolio.vercel.app/cv' },
  openGraph: {
    title: 'Download My CV | Mohamed Ali — Software Engineer & Full-Stack Developer',
    description:
      'Official verified CV download center for Mohamed Ali. Download specialized resumes: Full-Stack & AI Systems, DevOps & Cloud, and Backend Engineering.',
    url: 'https://mohamed-ali-portfolio.vercel.app/cv',
    type: 'profile',
    images: [
      {
        url: '/mohamed.png',
        width: 400,
        height: 400,
        alt: 'Mohamed Ali - Full-Stack Developer & Backend-Focused Software Engineer',
      },
    ],
  },
};

export default function CvPage() {
  return <CvDownloadCenter />;
}
