import React from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from './Navbar';

interface ExperienceProps {
  onNavigate?: (page: PageId) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-xs font-mono font-medium uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Professional History</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-4">
          Experience
        </h1>
        <p className="text-base sm:text-lg text-stone-700 dark:text-stone-200 font-normal leading-relaxed max-w-2xl">
          Client engagements and hands-on freelance web engineering delivering responsive interfaces,
          user-focused web applications, and search engine optimization.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-10">
        {/* Continuous Vertical Timeline Spine */}
        <div 
          className="absolute left-2.5 sm:left-4 top-3 bottom-6 w-0.5 bg-gradient-to-b from-stone-400 via-stone-300 to-stone-200 dark:from-stone-600 dark:via-stone-800 dark:to-stone-900" 
          aria-hidden="true"
        />

        <div className="space-y-12 sm:space-y-16">
          {EXPERIENCES_DATA.map((exp, idx) => {
            const isFirst = idx === 0;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Node Indicator */}
                <div 
                  className={`absolute -left-6 sm:-left-10 top-1.5 flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full transition-transform duration-300 group-hover:scale-110 ${
                    isFirst 
                      ? 'bg-stone-900 dark:bg-white text-stone-50 dark:text-stone-900 shadow-md ring-4 ring-stone-200/70 dark:ring-stone-800/80' 
                      : 'bg-white dark:bg-stone-900 border-2 border-stone-400 dark:border-stone-600 text-stone-600 dark:text-stone-300'
                  }`}
                  aria-hidden="true"
                >
                  <Briefcase className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                </div>

                {/* Timeline Card */}
                <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-stone-900/90 border border-stone-200/80 dark:border-stone-800 shadow-xs hover:border-stone-400/80 dark:hover:border-stone-700 transition-all duration-300">
                  
                  {/* Top Bar: Role & Company + Date Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-4 border-b border-stone-100 dark:border-stone-800/70">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
                        {exp.company}
                      </h2>
                      <span className="text-stone-300 dark:text-stone-700 font-light">·</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium font-mono border border-stone-200/60 dark:border-stone-700/50">
                        {exp.role}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/50">
                        <Calendar className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                        <span>{exp.period}</span>
                        {exp.period.toLowerCase().includes('present') && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" title="Currently Active" />
                        )}
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-3 mb-6">
                    {exp.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base text-stone-700 dark:text-stone-200 leading-relaxed font-normal">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills / Technology Tags */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-stone-100 dark:border-stone-800/60">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-stone-100/80 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border border-stone-200/40 dark:border-stone-700/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation Link */}
      {onNavigate && (
        <div className="mt-16 pt-8 border-t border-stone-200/70 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
            Have an open engineering opportunity or project in mind?
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-400 transition-colors cursor-pointer group"
          >
            <span>Initiate Contact</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
