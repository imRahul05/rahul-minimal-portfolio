import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/data';
export function HeroSection() {
  return (
    <section className="pt-12 pb-8">
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
        }}
        className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
        
        {/* Dotted Background */}
        <div className="absolute inset-0 bg-grid-pattern text-neutral-900/[0.03] dark:text-neutral-100/[0.03]" />

        {/* Corner Crosshairs */}
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-neutral-300 dark:text-neutral-700">
          +
        </div>
        <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-neutral-300 dark:text-neutral-700">
          +
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-neutral-300 dark:text-neutral-700">
          +
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-neutral-300 dark:text-neutral-700">
          +
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              delay: 0.2,
              duration: 0.5
            }}
            className="mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-neutral-200 shadow-lg dark:border-neutral-700">
            
            <img
              src={portfolioData.personal.avatarUrl}
              alt={portfolioData.personal.name}
              className="h-full w-full object-cover" />
            
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.3,
              duration: 0.5
            }}
            className="mb-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available · Based in {portfolioData.personal.location.split(',')[0]}
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.4,
              duration: 0.5
            }}
            className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
            
            {portfolioData.personal.name}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.5,
              duration: 0.5
            }}
            className="max-w-md text-lg text-neutral-600 dark:text-neutral-400">
            
            {portfolioData.personal.title.split(' / ').join(' • ')}
          </motion.p>
        </div>
      </motion.div>
    </section>);

}