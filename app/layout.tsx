import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} — Portfolio`,
  description: personalInfo.bio,
  openGraph: {
    title: `${personalInfo.name} — Full Stack Software Engineer`,
    description: personalInfo.bio,
    type: "website",
    images: [{ url: "/avatar.jpg", width: 256, height: 256, alt: personalInfo.name }],
  },
  twitter: {
    card: "summary",
    title: `${personalInfo.name} — Full Stack Software Engineer`,
    description: personalInfo.bio,
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100 antialiased min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
