import PrivacyView from "@/views/PrivacyView";

export const metadata = {
  title: "Privacy Policy | Mohamed Ali",
  description:
    "Privacy Policy for Mohamed Ali's developer portfolio (mohamed-ali-portfolio.vercel.app), covering contact form submissions and browser preferences.",
  alternates: {
    canonical: "https://mohamed-ali-portfolio.vercel.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Mohamed Ali",
    description:
      "Privacy Policy for Mohamed Ali's developer portfolio.",
    url: "https://mohamed-ali-portfolio.vercel.app/privacy",
    locale: "en_US",
  },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
