import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/data';
import { ProjectCard } from '../components/ProjectCard';
export function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = [
  'All',
  ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];

  const filteredProjects =
  filter === 'All' ?
  portfolioData.projects :
  portfolioData.projects.filter((p) => p.category === filter);
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5
        }}>
        
        <h1 className="mb-4 font-serif text-4xl font-bold text-neutral-900 dark:text-white">
          Projects
        </h1>
        <p className="mb-10 text-lg text-neutral-600 dark:text-neutral-400">
          A collection of things I've built, ranging from web apps to mobile
          applications.
        </p>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filter === category ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700'}`}>
            
              {category}
            </button>
          )}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) =>
            <motion.div
              key={project.title}
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.2
              }}>
              
                <ProjectCard {...project} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>);

}