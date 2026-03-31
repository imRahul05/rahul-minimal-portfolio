import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search as SearchIcon,
  Home as HomeIcon,
  Folder as FolderIcon,
  MessageCircle as MessageCircleIcon,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  X as XIcon } from
'lucide-react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/data';
interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export function CommandPalette({ isOpen, setIsOpen }: CommandPaletteProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);
  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  const commands = [
  {
    id: 'home',
    title: 'Home',
    icon: HomeIcon,
    action: () => navigate('/')
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: FolderIcon,
    action: () => navigate('/projects')
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: MessageCircleIcon,
    action: () => navigate('/#contact')
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: GithubIcon,
    action: () => window.open(portfolioData.personal.githubUrl, '_blank')
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: LinkedinIcon,
    action: () => window.open(portfolioData.personal.linkedinUrl, '_blank')
  },
  {
    id: 'email',
    title: 'Email',
    icon: MailIcon,
    action: () =>
    window.location.href = `mailto:${portfolioData.personal.email}`
  }];

  const filteredCommands = commands.filter((cmd) =>
  cmd.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSelect = (action: () => void) => {
    action();
    setIsOpen(false);
    setSearchQuery('');
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)} />
        
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: -20
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -20
            }}
            transition={{
              duration: 0.15
            }}
            className="w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}>

            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-center border-b border-neutral-200 px-4 dark:border-neutral-800">
                <SearchIcon className="h-5 w-5 text-neutral-500" />
                <input
                type="text"
                autoFocus
                placeholder="Type a command or search..."
                className="w-full bg-transparent px-4 py-4 text-sm outline-none placeholder:text-neutral-500 dark:text-neutral-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
              
                <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredCommands.length === 0 ?
              <div className="py-6 text-center text-sm text-neutral-500">
                    No results found.
                  </div> :

              <div className="space-y-1">
                    {filteredCommands.map((cmd) =>
                <button
                  key={cmd.id}
                  onClick={() => handleSelect(cmd.action)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
                  
                        <cmd.icon className="h-4 w-4" />
                        {cmd.title}
                      </button>
                )}
                  </div>
              }
              </div>
            </div>
            </motion.div>
          </div>
        </>
      }
    </AnimatePresence>);

}
