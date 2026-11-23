import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Providers } from "@/components/Providers";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url.replace(/\/?$/, "/")),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.linkedin }],
  keywords: [
    "website designer", "frontend developer", "UX/UI designer", "Next.js developer",
    "React developer", "Harare", "Zimbabwe", "remote web developer", "freelance web designer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Website Designer & Frontend Developer",
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Harare", addressCountry: "ZW" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Stellenbosch University" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
