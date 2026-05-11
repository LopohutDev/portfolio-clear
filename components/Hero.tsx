"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <FadeIn mode="mount" delay={0} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Available for work
          </div>
        </FadeIn>

        {/* Name */}
        <FadeIn mode="mount" delay={0.1} className="mb-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-blue-400">
              {personalInfo.name.split(" ")[0]}
            </span>
          </h1>
        </FadeIn>

        {/* Title */}
        <FadeIn mode="mount" delay={0.2} className="mb-6">
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            {personalInfo.title}
          </p>
        </FadeIn>

        {/* Bio */}
        <FadeIn mode="mount" delay={0.3} className="mb-10">
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn
          mode="mount"
          delay={0.4}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-7 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Contact Me
          </a>
        </FadeIn>

        {/* Social Links */}
        <FadeIn
          mode="mount"
          delay={0.5}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-500 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
