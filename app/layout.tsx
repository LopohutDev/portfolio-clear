import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} — Portfolio`,
  description: personalInfo.bio,
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
