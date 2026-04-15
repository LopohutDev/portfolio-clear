"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm mb-2">// contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always
            open — I&apos;ll do my best to get back to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 group"
          >
            <Mail size={20} />
            Say Hello
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-8 mb-20"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors group"
          >
            <GithubIcon size={20} />
            <span className="text-sm font-medium group-hover:underline">GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors group"
          >
            <LinkedinIcon size={20} />
            <span className="text-sm font-medium group-hover:underline">LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors group"
          >
            <Mail size={20} />
            <span className="text-sm font-medium group-hover:underline">Email</span>
          </a>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-600 text-sm">
            Designed & Built by{" "}
            <span className="text-blue-400">{personalInfo.name}</span> · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
