import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight as ArrowUpRightIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  Search as SearchIcon } from
'lucide-react';
import { useTheme } from './ThemeProvider';
interface NavbarProps {
  onOpenCommandPalette: () => void;
}
export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navLinks = [
  {
    name: 'Home',
    path: '/',
    isHashLink: false
  },
  {
    name: 'Projects',
    path: '/projects',
    isHashLink: false
  },
  {
    name: 'Contact',
    path: '/#contact',
    isHashLink: true
  }];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-white">
          
          Rahul
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) =>
            link.isHashLink ?
            <a
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-white ${location.pathname === '/' && location.hash === '#contact' ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>

                {link.name}
              </a> :
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-white ${location.pathname === link.path ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>

                {link.name}
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="group flex h-9 items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-500 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/80"
              aria-label="Search command palette">
              
              <SearchIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline-block">Search...</span>
              <kbd className="hidden items-center gap-1 rounded border border-neutral-200 bg-white px-1.5 py-0.5 font-sans text-[10px] font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
              aria-label="Toggle theme">
              
              {theme === 'dark' ?
              <SunIcon className="h-4 w-4" /> :

              <MoonIcon className="h-4 w-4" />
              }
            </button>
          </div>
        </div>
      </div>
    </header>);

}
