import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="text-blue-400 font-mono text-sm mb-2">// about me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Who I Am
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <FadeIn direction="right" className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-blue-500/20">
                <Image
                  src="/avatar.jpg"
                  alt={personalInfo.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-2xl border border-blue-500/20 -z-10" />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="left" delay={0.1} className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-500 leading-relaxed">
              When I&apos;m not coding, I enjoy exploring new technologies,
              contributing to open source, and continuously leveling up my
              skills. I&apos;m always open to new opportunities and exciting
              projects.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-blue-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <GithubIcon size={16} className="text-blue-400 shrink-0" />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <LinkedinIcon size={16} className="text-blue-400 shrink-0" />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get In Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
