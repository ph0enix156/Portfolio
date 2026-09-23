import React from 'react';
import {
  ArrowUp,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationSections = [
    { label: 'Home Overview', id: 'home' as PageId },
    { label: 'About & Journey', id: 'about' as PageId },
    { label: 'Technical Stack', id: 'skills' as PageId },
    { label: 'Featured Projects', id: 'projects' as PageId },
    { label: 'Experience & Leadership', id: 'experience' as PageId },
    { label: 'Contact & Inquiries', id: 'contact' as PageId },
  ];

  return (
    <footer className="border-t border-stone-200/90 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/80 text-stone-600 dark:text-stone-400 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          
          {/* NAVIGATION */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 font-mono">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationSections.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(item.id);
                      scrollToTop();
                    }}
                    className="text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 font-mono">
              CONNECT
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0a66c2] dark:text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-stone-800 dark:text-stone-200" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X (Twitter)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#e1306c] dark:text-pink-400" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00875a] dark:text-emerald-400" />
                  <span>Email Direct</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Subtle minimal bottom bar */}
      <div className="border-t border-stone-200/80 dark:border-stone-800/80">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400">
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
