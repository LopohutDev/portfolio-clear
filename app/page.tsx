import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { personalInfo, skills } from "@/data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://louiejaysarraga.online/#person",
      name: personalInfo.name,
      url: "https://louiejaysarraga.online",
      jobTitle: personalInfo.title,
      description: personalInfo.bio,
      email: personalInfo.email,
      image: "https://louiejaysarraga.online/avatar.jpg",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PH",
        addressLocality: "Philippines",
      },
      sameAs: [
        personalInfo.github,
        personalInfo.linkedin,
      ],
      knowsAbout: skills.flatMap((s) => s.items),
    },
    {
      "@type": "WebSite",
      "@id": "https://louiejaysarraga.online/#website",
      url: "https://louiejaysarraga.online",
      name: `${personalInfo.name} — Portfolio`,
      description: personalInfo.bio,
      author: { "@id": "https://louiejaysarraga.online/#person" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-gray-900 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
