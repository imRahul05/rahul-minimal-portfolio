import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/data';
export function SkillsSection() {
  const skillCategories = [
  {
    name: 'Frontend',
    skills: portfolioData.skills.frontend
  },
  {
    name: 'Backend',
    skills: portfolioData.skills.backend
  },
  {
    name: 'Mobile',
    skills: portfolioData.skills.mobile
  },
  {
    name: 'Databases',
    skills: portfolioData.skills.databases
  },
  {
    name: 'Languages',
    skills: portfolioData.skills.languages
  },
  {
    name: 'Tools',
    skills: portfolioData.skills.tools
  }];

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
        Skills
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, index) =>
        <div key={index}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) =>
            <span
              key={skill}
              className="rounded-md bg-neutral-100 px-2.5 py-1 text-sm text-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-300">
              
                  {skill}
                </span>
            )}
            </div>
          </div>
        )}
      </div>
    </motion.section>);

}