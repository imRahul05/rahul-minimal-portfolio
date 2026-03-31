import React from 'react';
import { motion } from 'framer-motion';
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  Globe as GlobeIcon } from
'lucide-react';
import { portfolioData } from '../data/data';
export function ConnectSection() {
  const links = [
  {
    name: 'GitHub',
    url: portfolioData.personal.githubUrl,
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    url: portfolioData.personal.linkedinUrl,
    icon: LinkedinIcon
  },
  {
    name: 'Email',
    url: `mailto:${portfolioData.personal.email}`,
    icon: MailIcon
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
      
      <h2 className="mb-6 font-serif text-3xl font-medium text-neutral-900 dark:text-white">
        Connect
      </h2>

      <div className="flex flex-wrap gap-3">
        {links.map((link, index) =>
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
          className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800/80">
          
            <link.icon className="h-4 w-4" />
            {link.name}
          </motion.a>
        )}
      </div>

      <div className="my-10 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
    </motion.section>);

}