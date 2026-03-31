import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/data';
export function AboutSection() {
  const paragraphs = portfolioData.personal.bio.split('\n\n');
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
      className="py-10">
      
      <h2 className="mb-8 font-serif text-3xl font-medium text-neutral-900 dark:text-white">
        About
      </h2>

      <div className="space-y-6">
        {paragraphs.map((paragraph, index) =>
        <div key={index} className="relative pl-6">
            <div className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {paragraph}
            </p>
          </div>
        )}
        <div className="relative pl-6">
          <div className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            At my core, I'm curious, not just about technology, but about how it
            shapes the way people think, act, and grow. That curiosity pushes me
            beyond just coding, into exploring meaning and purpose.
          </p>
        </div>
      </div>

      <div className="my-10 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
    </motion.section>);

}