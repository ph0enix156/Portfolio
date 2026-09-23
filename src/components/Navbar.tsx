import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

export type PageId = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
  visible?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenResume,
  visible = true,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: PageId }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled
          ? 'bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 py-3 shadow-[0_1px_8px_rgba(0,0,0,0.03)]'
          : 'bg-stone-50/85 dark:bg-stone-950/85 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors cursor-pointer text-left"
        >
          {PERSONAL_INFO.name}
        </button>

        {/* Zone 2: Dedicated Page Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600 dark:text-stone-400">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-stone-950 dark:text-stone-100 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-stone-950 dark:after:bg-stone-100 after:scale-x-100'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-stone-800 dark:after:bg-stone-200 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Theme Toggle & Resume) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher Segmented Control */}
          <ThemeToggle />

          {/* Resume Modal Trigger */}
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-850 hover:bg-stone-200/80 dark:hover:bg-stone-800 border border-stone-200/60 dark:border-stone-700/60 rounded-md transition-colors cursor-pointer"
            title="View Pushkar Gangurde Resume (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
            <span>Resume (PDF)</span>
          </button>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-50/98 dark:bg-stone-950/98 backdrop-blur-lg px-6 py-4 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col gap-2 py-2 text-base font-medium text-stone-800 dark:text-stone-200">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2 text-left transition-colors border-b border-stone-100 dark:border-stone-800/80 flex items-center justify-between cursor-pointer ${
                    isActive ? 'text-stone-950 dark:text-stone-100 font-bold' : 'hover:text-stone-950 dark:hover:text-stone-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-stone-100" />}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 pb-1 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold border border-stone-200 dark:border-stone-800 rounded-md text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
