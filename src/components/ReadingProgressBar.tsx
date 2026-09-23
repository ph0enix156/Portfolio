import React, { useEffect, useState } from 'react';

interface ReadingProgressBarProps {
  visible?: boolean;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({ visible = true }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const currentProgress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        setProgress(currentProgress);
      } else {
        setProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial measurement
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-stone-200/40 dark:bg-stone-800/60 pointer-events-none transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      <div
        className="h-full bg-stone-900 dark:bg-stone-100 will-change-transform"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: '0% 50%',
          transition: 'transform 75ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
};
