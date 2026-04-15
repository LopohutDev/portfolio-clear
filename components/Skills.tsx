"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-mono text-sm mb-2">// skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors duration-300"
            >
              <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIdx * 0.1 + skillIdx * 0.05 }}
                    className="bg-gray-800 hover:bg-blue-500/10 hover:text-blue-400 border border-gray-700 hover:border-blue-500/30 text-gray-300 text-sm px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
