import React from 'react';
import { ArrowRight, User, Code2, FolderGit2, Briefcase, Mail, Sparkles } from 'lucide-react';
import { PageId } from './Navbar';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolioData';

interface HomeOverviewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({ onNavigate }) => {
  const sections = [
    {
      id: 'about' as PageId,
      title: 'About Me',
      category: '01. Background & Philosophy',
      description: 'Computer Science Engineering student at MIT-WPU Pune who enjoys turning ideas into practical software, from applied AI to full-stack web applications.',
      icon: User,
      action: 'Read Story',
      meta: 'B.Tech CSE · MIT-WPU Pune',
    },
    {
      id: 'skills' as PageId,
      title: 'Technical Capabilities',
      category: '02. Core Stack',
      description: 'Comprehensive stack across Programming, Web Development, AI & ML, Database & Cloud, and Tools & Platforms.',
      icon: Code2,
      action: 'View All 52 Skills',
      meta: '52 Skills · 5 Categories',
    },
    {
      id: 'projects' as PageId,
      title: 'Featured Projects',
      category: '03. Practical Systems',
      description: `${PROJECTS_DATA.length} open-source codebases including SignBridge India (Sign Language AI), FasalMitr AI, Vistara, The Morrigan, ASL CNN in C++, and CampusRoute.`,
      icon: FolderGit2,
      action: `Explore All ${PROJECTS_DATA.length} Projects`,
      meta: `${PROJECTS_DATA.length} Repositories · Live Vercel Demos`,
    },
    {
      id: 'experience' as PageId,
      title: 'Experience',
      category: '04. Track Record',
      description: 'AI web development and freelance client delivery, building dual-ended portals, responsive web apps, and machine learning features.',
      icon: Briefcase,
      action: 'View Timeline',
      meta: 'InAmigos · Morrigan · Aura · AKIS',
    },
    {
      id: 'contact' as PageId,
      title: 'Contact Details',
      category: '05. Direct Channels',
      description: 'Verified direct contact channels for software engineering and AI/ML internship opportunities or technical discussions.',
      icon: Mail,
      action: 'View Details',
      meta: `${PERSONAL_INFO.email}`,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
      {/* Overview Intro */}
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
          Portfolio Overview
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-4 text-balance">
          Explore Dedicated Sections
        </h2>
        <p className="text-base sm:text-lg text-stone-700 dark:text-stone-200 font-normal leading-relaxed text-balance">
          Select any section below or use the top navigation bar to explore detailed write-ups, codebases, and technical documentation.
        </p>
      </div>

      {/* Gateway Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-sm transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 group-hover:bg-stone-900 dark:group-hover:bg-stone-100 group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
                    {sec.meta}
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
                  {sec.category}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-stone-950 dark:text-stone-100 mb-2 group-hover:text-stone-800 dark:group-hover:text-white transition-colors">
                  {sec.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                  {sec.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-stone-700 dark:group-hover:text-stone-300">
                <span>{sec.action}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Engineering Focus & Interactive Showcase Banner */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-stone-200/90 dark:border-stone-800/90 bg-linear-to-b from-stone-900 via-stone-950 to-black text-stone-100 shadow-xl relative p-8 sm:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-800/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-mono font-medium tracking-wider uppercase text-stone-300 bg-stone-800/80 border border-stone-700/60 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Interactive Kinetic Swarm Active · Move, Click &amp; Scroll
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Pushkar Gangurde
          </h3>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
            Computer Science &amp; Engineering student at MIT-WPU Pune crafting performant software, applied AI architectures, and interactive digital interfaces.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-stone-950 font-semibold text-xs hover:bg-stone-100 transition-transform active:scale-95 shadow-md cursor-pointer"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-800/90 text-stone-100 border border-stone-700 font-semibold text-xs hover:bg-stone-700 hover:text-white transition-colors cursor-pointer"
            >
              <span>Connect With Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* Direct Contact Banner on Home Overview */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 dark:bg-stone-900/90 text-stone-50 border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
            Immediate Inquiries &amp; Opportunities
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            Open to Engineering Internships
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
            Directly reachable at <span className="font-mono text-white font-medium">{PERSONAL_INFO.email}</span>. Based in Pune, Maharashtra, India.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-950 bg-white hover:bg-stone-100 rounded-lg transition-colors cursor-pointer shrink-0"
        >
          <span>View Contact Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default HomeOverview;
