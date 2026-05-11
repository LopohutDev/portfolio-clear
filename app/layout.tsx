import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://louiejaysarraga.online"),
  title: `${personalInfo.name} | Senior Full Stack Developer — React, Next.js, Node.js`,
  description: personalInfo.bio,
  keywords: [
    "Full Stack Developer Philippines",
    "Senior Full Stack Developer",
    "React Developer Philippines",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "Remote Full Stack Developer",
    "Louie Sarraga",
    "Louie Jay Sarraga",
    "Web Developer Philippines",
  ],
  authors: [{ name: personalInfo.name, url: "https://louiejaysarraga.online" }],
  creator: personalInfo.name,
  alternates: {
    canonical: "https://louiejaysarraga.online",
  },
  openGraph: {
    title: `${personalInfo.name} | Senior Full Stack Developer — React, Next.js, Node.js`,
    description: personalInfo.bio,
    url: "https://louiejaysarraga.online",
    siteName: `${personalInfo.name} — Portfolio`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — Senior Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Senior Full Stack Developer — React, Next.js, Node.js`,
    description: personalInfo.bio,
    images: ["/og-image.jpg"],
    creator: "@louiejaysarraga",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "SAgy_qhx0R2mgPUEar2aOKKetmGe_sN72BNLoT3Ezv4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 antialiased min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
