import React from 'react';
import { motion } from 'framer-motion';
import {
  Github as GithubIcon,
  ExternalLink as ExternalLinkIcon,
  Folder as FolderIcon } from
'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  liveUrl: string | null;
  category: string;
}
export function ProjectCard({
  title,
  description,
  technologies,
  github,
  liveUrl,
  category
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4
      }}
      className="group relative flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            <FolderIcon className="h-5 w-5" />
          </div>
          <div className="flex gap-3">
            {github &&
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
              aria-label="GitHub Repository">
              
                <GithubIcon className="h-5 w-5" />
              </a>
            }
            {liveUrl &&
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
              aria-label="Live Demo">
              
                <ExternalLinkIcon className="h-5 w-5" />
              </a>
            }
          </div>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {technologies.map((tech) =>
        <span
          key={tech}
          className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
          
            {tech}
          </span>
        )}
      </div>
    </motion.div>);

}