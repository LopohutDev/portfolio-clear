import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="text-blue-400 font-mono text-sm mb-2">// experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Where I&apos;ve Worked
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <FadeIn
                key={job.id}
                direction="right"
                delay={idx * 0.1}
                duration={0.5}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gray-900 border border-blue-500/30 items-center justify-center hidden md:flex">
                  <Briefcase size={16} className="text-blue-400" />
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {job.role}
                      </h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                      {job.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {job.description.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="text-blue-500 mt-1.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
