'use client';

import React from "react";
import { ShieldCheck, Mail, Trash2, Database, SlidersHorizontal, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSEO } from "@/hooks/useSEO";
import { useSettings } from "@/context/SettingsContext";

const PrivacyView = () => {
  const { settings } = useSettings();
  const isAr = settings.language === "ar";
  const lastUpdated = isAr ? "نوفمبر 2026" : "November 2026";

  useSEO({
    title: isAr
      ? "سياسة الخصوصية | محمد علي"
      : "Privacy Policy | Mohamed Ali",
    description: isAr
      ? "سياسة الخصوصية الخاصة بموقع محمد علي، بما يشمل نموذج التواصل وتفضيلات المتصفح وتعليمات حذف البيانات."
      : "Privacy Policy for Mohamed Ali's developer portfolio, covering contact form submissions, browser preferences, and data deletion instructions.",
  });

  const sections = isAr
    ? [
        {
          icon: ShieldCheck,
          title: "1. نظرة عامة والجهة المسؤولة",
          paragraphs: [
            "توضح سياسة الخصوصية هذه كيفية التعامل مع المعلومات عند زيارتك لموقع المهندس محمد علي أو تواصلك معه عبر نموذج المراسلة المباشرة.",
            "نلتزم بالحد الأدنى اللازم من البيانات للرد على استفساراتك التقنية أو مناقشة المشروعات وفرص العمل، ولا نقوم ببيع بياناتك أو مشاركتها مع أطراف إعلانية."
          ],
        },
        {
          icon: Mail,
          title: "2. البيانات التي يجمعها نموذج التواصل",
          paragraphs: [
            "عند استخدامك نموذج المراسلة في الموقع (/contact)، يتم إرسال البيانات التي تدخلها طوعًا وتشمل:",
          ],
          bullets: [
            "الاسم (Name)",
            "البريد الإلكتروني (Email)",
            "موضوع الرسالة (Subject)",
            "نص الرسالة (Message)"
          ],
          note: "تُستخدم هذه البيانات فقط لمراجعة استفسارك والرد عليك عبر القنوات المهنية، ولا تُخزَّن في قوائم تسويقية.",
        },
        {
          icon: SlidersHorizontal,
          title: "3. تفضيلات المتصفح والتخزين المحلي",
          paragraphs: [
            "يحفظ الموقع تفضيلات العرض الخاصة بك محليًا داخل متصفحك (localStorage تحت المفتاح mohamed_portfolio_settings) لتذكر اختياراتك في الزيارات التالية، وتشمل:",
          ],
          bullets: [
            "الوضع الليلي/النهاري (Theme)",
            "اللون المميّز (Accent Color) ونمط الأزرار وحجم الخط",
            "اللغة المختارة (العربية أو الإنجليزية) وتفضيلات الحركات"
          ],
          note: "تبقى هذه التفضيلات على جهازك الشخصي فقط ولا تُستخدم لتتبعك عبر مواقع أخرى، ويمكنك مسحها في أي وقت من إعدادات المتصفح.",
        },
        {
          icon: Database,
          title: "4. الأطراف الثالثة والاستضافة",
          paragraphs: [
            "يعتمد تشغيل الموقع على منصة استضافة موثوقة (Vercel) لمعالجة الطلبات وتقديم تجربة تصفح سريعة ومحمية عبر بروتوكول HTTPS.",
          ],
        },
        {
          icon: Clock,
          title: "5. الاحتفاظ بالبيانات والأمان",
          paragraphs: [
            "تُحفظ الرسائل فقط للمدة اللازمة لمتابعة استفسارك أو تنفيذ العمل المطلوب، وتُدار كافة الاتصالات عبر بروتوكول HTTPS المشفّر.",
          ],
        },
        {
          icon: Trash2,
          title: "6. حقوقك وطلب حذف البيانات",
          paragraphs: [
            "يحق لك في أي وقت طلب حذف أي رسائل تواصل أرسلتها عبر الموقع من خلال التواصل مباشرة عبر LinkedIn.",
          ],
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: "1. Overview & Controller",
          paragraphs: [
            "This Privacy Policy explains how information is handled when you visit Mohamed Ali's portfolio or send a message through the contact form.",
            "We collect only minimal information necessary to respond to technical inquiries and discuss professional opportunities. We never sell, rent, or trade your personal data."
          ],
        },
        {
          icon: Mail,
          title: "2. Information Collected via the Contact Form",
          paragraphs: [
            "When you voluntarily submit the contact form (/contact), the data includes:",
          ],
          bullets: [
            "Name",
            "Email address",
            "Subject",
            "Message content"
          ],
          note: "This information is used solely to review and respond to your inquiry and is never shared with third-party advertisers.",
        },
        {
          icon: SlidersHorizontal,
          title: "3. Browser Preferences (Local Storage)",
          paragraphs: [
            "The website stores display preferences locally in your browser (localStorage under the key mohamed_portfolio_settings) to remember your UI choices across visits:",
          ],
          bullets: [
            "Theme mode (light or dark)",
            "Accent color, button style, and font size",
            "Selected language (English or Arabic) and motion preferences"
          ],
          note: "These preferences stay on your device, are not used for tracking, and can be cleared anytime via browser settings.",
        },
        {
          icon: Database,
          title: "4. Infrastructure & Hosting",
          paragraphs: [
            "The website is hosted on modern infrastructure (Vercel) ensuring high availability, performance, and HTTPS encryption.",
          ],
        },
        {
          icon: Clock,
          title: "5. Data Retention & Security",
          paragraphs: [
            "Messages are retained only as long as reasonably needed to address your inquiry. All communications are served over encrypted HTTPS.",
          ],
        },
        {
          icon: Trash2,
          title: "6. Your Rights & Data Deletion",
          paragraphs: [
            "You may request the removal of any messages sent through the site at any time by connecting directly on LinkedIn.",
          ],
        },
      ];

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="pt-28 pb-24 relative bg-background overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionHeading
          as="h1"
          badge={isAr ? "الخصوصية وحماية البيانات" : "Privacy & Data Protection"}
          title={isAr ? "سياسة الخصوصية" : "Privacy Policy"}
          watermark={isAr ? "الخصوصية" : "PRIVACY"}
          subtitle={
            isAr
              ? `آخر تحديث: ${lastUpdated} — سياسة الخصوصية الخاصة بموقع محمد علي`
              : `Last updated: ${lastUpdated} — Covers Mohamed Ali's developer portfolio`
          }
        />

        <div className="space-y-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section
                key={idx}
                className="p-6 sm:p-8 rounded-2xl glass-effect border border-border/60 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold font-display text-foreground">
                    {section.title}
                  </h2>
                </div>

                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-muted-foreground">
                    {section.bullets.map((item, bIdx) => (
                      <li key={bIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <p className="text-sm leading-relaxed text-foreground/90 bg-primary/5 border border-primary/15 rounded-xl p-4">
                    {section.note}
                  </p>
                )}
              </section>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl border border-border/60 bg-card/70 text-center space-y-2">
          <p className="text-sm font-medium text-foreground">
            {isAr ? "للتواصل المهني المباشر:" : "For professional inquiries:"}
          </p>
          <a
            href="https://www.linkedin.com/in/mohamed-ali409"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-mono text-sm inline-block"
          >
            linkedin.com/in/mohamed-ali409
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyView;
