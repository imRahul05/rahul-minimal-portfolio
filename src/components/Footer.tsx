import React from 'react';
import { Heart as HeartIcon, Coffee as CoffeeIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 py-12 dark:border-neutral-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="font-serif text-lg italic text-neutral-600 dark:text-neutral-400">
          "The only way to do great work is to love what you do."
        </p>

        <div className="flex flex-col items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
          <p className="flex items-center gap-1.5">
            Built with <HeartIcon className="h-3.5 w-3.5 text-red-500" /> +{' '}
            <CoffeeIcon className="h-3.5 w-3.5 text-amber-600" /> + LLMs
          </p>
          <p>© {new Date().getFullYear()} Rahul Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>);

}