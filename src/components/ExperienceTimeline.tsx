import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/data';
export function ExperienceTimeline() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.5
      }}
      className="py-6">
      
      <h2 className="mb-8 font-serif text-3xl font-medium text-neutral-900 dark:text-white">
        Experience
      </h2>

      <div className="space-y-12">
        {portfolioData.experience.map((exp, index) =>
        <div key={index} className="relative pl-8 sm:pl-0">
            {/* Timeline line for mobile */}
            <div className="absolute bottom-0 left-[5px] top-[11px] w-px bg-neutral-200 dark:bg-neutral-800 sm:hidden" />

            <div className="flex flex-col sm:flex-row sm:gap-8">
              {/* Date column (desktop) */}
              <div className="mb-2 hidden w-32 shrink-0 pt-1 text-sm text-neutral-500 dark:text-neutral-400 sm:block">
                {exp.duration}
              </div>

              {/* Content column */}
              <div className="relative flex-1">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-neutral-400 dark:border-neutral-950 dark:bg-neutral-600 sm:-left-[41px] sm:hidden" />

                <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 sm:hidden">
                    {exp.duration}
                  </span>
                </div>

                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  <span>{exp.company}</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <span>{exp.type}</span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) =>
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="my-10 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
    </motion.section>);

}
