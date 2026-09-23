import React from 'react';
import { ArrowDown } from 'lucide-react';
import ScrollExpand from './ScrollExpand';

interface HeroProps {
  onHeroComplete: () => void;
  onContinueClick?: () => void;
  isLocked?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onHeroComplete, onContinueClick, isLocked = false }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 select-none transition-colors duration-200"
    >
      <ScrollExpand
        src="/hero.jpeg"
        alt="Developer Wallpaper"
        title="Hello"
        scrollHint="Scroll down to expand"
        useWindowScroll={false}
        mediaZoom={1.04}
        objectPosition="center 38%"
        overlayScrim={0.65}
        startWidth={42}
        startHeight={56}
        startRadius={24}
        endRadius={0}
        scrollDistance={1.2}
        holdDistance={0.5}
        isLocked={isLocked}
        onComplete={onHeroComplete}
      >
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
            I am Pushkar Gangurde
          </h1>

          <p className="text-base sm:text-xl text-white leading-relaxed font-normal mb-8 drop-shadow-md max-w-xl">
            Computer Science Engineering Student. Building practical solutions with AI, software and web technologies.
          </p>

          <button
            type="button"
            onClick={onContinueClick || onHeroComplete}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-stone-950 bg-white hover:bg-stone-100 rounded-lg transition-all duration-150 shadow-xl cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Continue to Portfolio</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </ScrollExpand>
    </section>
  );
};

export default Hero;
