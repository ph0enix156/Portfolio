/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeOverview } from './components/HomeOverview';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import SwarmCursor from './components/SwarmCursor';

import { useLenis } from 'lenis/react';

export default function App() {
  const lenis = useLenis();
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [heroFinished, setHeroFinished] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Sync state with URL hash on mount and on popstate/hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const validPages: PageId[] = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
        // If navigating to a dedicated page via URL, immediately unlock scroll
        if (hash !== 'home') {
          setHeroFinished(true);
        }
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Prevent main page scrolling when on home page and hero hasn't finished
  useEffect(() => {
    if (currentPage === 'home' && !heroFinished) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [currentPage, heroFinished, lenis]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    if (page !== 'home') {
      setHeroFinished(true);
      window.location.hash = page;
    } else {
      window.location.hash = '';
    }
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHeroComplete = () => {
    // Reached bottom of hero expansion: unlock page and reveal Navbar
    setHeroFinished(true);
    lenis?.start();
  };

  const handleHeroContinue = () => {
    // User clicked "Continue to Portfolio" button
    setHeroFinished(true);
    lenis?.start();
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo('#home-overview', { duration: 1.2 });
      } else {
        const overviewEl = document.getElementById('home-overview');
        if (overviewEl) {
          overviewEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  };

  return (
    <div className="relative min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-stone-900 selection:text-stone-50 dark:selection:bg-stone-100 dark:selection:text-stone-900 transition-colors duration-200">
      {/* Ambient Interactive Swarm Cursor in Main Layout */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden mix-blend-difference opacity-80 dark:opacity-95">
        <SwarmCursor
          color="#ffffff"
          accentColor="#ffffff"
          count={10}
          size={10}
          speed={2.5}
          spread={100}
          wander={0.25}
          trail={0.75}
          scatterOnClick
          scatterOnScroll
          globalPointer
          className="w-full h-full"
        />
      </div>

      {/* Reading Progress Indicator */}
      <ReadingProgressBar visible={currentPage !== 'home' || heroFinished} />

      {/* Global Navigation Header (supports dedicated pages, NO Contact Me button) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeOpen(true)}
        visible={currentPage !== 'home' || heroFinished}
      />

      {/* Main Content Router with Subtle SPA Fade-In Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <div>
                {/* Internally Scrollable Hero Section */}
                <Hero
                  onHeroComplete={handleHeroComplete}
                  onContinueClick={handleHeroContinue}
                  isLocked={heroFinished}
                />

                {/* Gateway Overview Section (unlocked upon hero scroll completion) */}
                <div
                  id="home-overview"
                  className={`transition-opacity duration-500 ${
                    heroFinished ? 'opacity-100' : 'opacity-80 pointer-events-none'
                  }`}
                >
                  <HomeOverview onNavigate={handleNavigate} />
                </div>
              </div>
            )}

            {currentPage === 'about' && (
              <div className="pt-16 sm:pt-20">
                <About onNavigate={handleNavigate} />
              </div>
            )}

            {currentPage === 'skills' && (
              <div className="pt-16 sm:pt-20">
                <Skills onNavigate={handleNavigate} />
              </div>
            )}

            {currentPage === 'projects' && (
              <div className="pt-16 sm:pt-20">
                <Projects onNavigate={handleNavigate} />
              </div>
            )}

            {currentPage === 'experience' && (
              <div className="pt-16 sm:pt-20">
                <Experience onNavigate={handleNavigate} />
              </div>
            )}

            {currentPage === 'contact' && (
              <div className="pt-16 sm:pt-20">
                <Contact />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer with Dedicated Page Navigation Links */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
