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
        alt="Pushkar Gangurde"
        title="Hello"
        scrollHint="Scroll down to expand"
        useWindowScroll={false}
        mediaZoom={1.04}
        objectPosition="center bottom"
        overlayScrim={0.35}
        startWidth={42}
        startHeight={56}
        startRadius={24}
        endRadius={0}
        scrollDistance={1.2}
        holdDistance={0.5}
        isLocked={isLocked}
        onComplete={onHeroComplete}
      >
        {/* Top: "I am" */}
        <div className="w-full flex justify-center pt-2 sm:pt-6 md:pt-8 pointer-events-none">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] select-none">
            I am
          </h2>
        </div>

        {/* Bottom: "Pushkar" on the left, "Gangurde" on the right */}
        <div className="w-full relative flex items-end justify-between pb-2 sm:pb-4 pointer-events-none">
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_6px_36px_rgba(0,0,0,0.95)] select-none">
            Pushkar
          </h1>

          {/* Centered Explore Button / Scroll down indicator */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-3 flex flex-col items-center pointer-events-auto">
            <button
              type="button"
              onClick={onContinueClick || onHeroComplete}
              className="group inline-flex flex-col items-center gap-1 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 text-white transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-xl"
              title="Continue to Portfolio"
            >
              <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase font-semibold text-white/90">
                Explore
              </span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-white" />
            </button>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_6px_36px_rgba(0,0,0,0.95)] select-none">
            Gangurde
          </h1>
        </div>
      </ScrollExpand>
    </section>
  );
};

export default Hero;
