import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  }, [location.hash, location.pathname]);

  return null;
}

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
          <ScrollToHash />
          <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
          <CommandPalette
            isOpen={isCommandPaletteOpen}
            setIsOpen={setIsCommandPaletteOpen} />
          

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>);

}
