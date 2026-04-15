"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Lock, Zap } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-mono text-sm mb-2">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-gray-500 max-w-xl">
            A selection of my projects — each one built to solve a real problem.
            Click the links to explore.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-gray-950 border border-gray-800 rounded-2xl p-7 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Star size={16} className="text-blue-400" />
                  </div>
                  <span className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded-md">
                    Featured
                  </span>
                  {project.production && (
                    <span className="flex items-center gap-1 text-xs text-green-400 font-mono bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-md">
                      <Zap size={10} />
                      Production
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm text-gray-600 font-medium cursor-default" title="Internal application — no public demo available">
                    <Lock size={14} />
                    Internal App
                  </span>
                )}
                {project.githubUrl && (
                  project.privateRepo ? (
                    <span className="flex items-center gap-1.5 text-sm text-yellow-600 font-medium cursor-default" title="This repository is private">
                      <Lock size={14} />
                      Private Repo
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 font-medium transition-colors"
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </a>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-gray-950 border border-gray-800 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 items-center">
                    {project.githubUrl && (
                      project.privateRepo ? (
                        <span className="flex items-center gap-1 text-xs text-yellow-600 font-medium cursor-default" title="This repository is private">
                          <Lock size={13} />
                          Private
                        </span>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-400 transition-colors"
                        >
                          <GithubIcon size={16} />
                        </a>
                      )
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
