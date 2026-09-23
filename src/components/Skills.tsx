import React, { useState, useMemo } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem, SkillCategory } from '../types';
import { Terminal, Globe, Cpu, Database, Wrench, Search, X, CheckCircle2, LayoutGrid, List } from 'lucide-react';

interface SkillsProps {
  onNavigate?: (page: 'projects' | 'contact') => void;
}

export const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'detailed' | 'compact'>('detailed');

  const categories: Array<{ id: string; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'All', label: 'All', icon: LayoutGrid },
    { id: 'Programming', label: 'Programming', icon: Terminal },
    { id: 'Web Development', label: 'Web Development', icon: Globe },
    { id: 'AI & ML', label: 'AI & ML', icon: Cpu },
    { id: 'Database & Cloud', label: 'Database & Cloud', icon: Database },
    { id: 'Tools & Platforms', label: 'Tools & Platforms', icon: Wrench },
  ];

  // Category counts
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: SKILLS_DATA.length };
    SKILLS_DATA.forEach((s) => {
      map[s.category] = (map[s.category] || 0) + 1;
    });
    return map;
  }, []);

  // Filter skills by category and search query
  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      return (
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.level.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  const getCategoryIcon = (cat: SkillCategory) => {
    const iconClass = "w-4 h-4 text-stone-700 dark:text-stone-300";
    switch (cat) {
      case 'Programming':
        return <Terminal className={iconClass} />;
      case 'Web Development':
        return <Globe className={iconClass} />;
      case 'AI & ML':
        return <Cpu className={iconClass} />;
      case 'Database & Cloud':
        return <Database className={iconClass} />;
      case 'Tools & Platforms':
        return <Wrench className={iconClass} />;
      default:
        return <Terminal className={iconClass} />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="max-w-2xl mb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
          Technical Capabilities &amp; Stack
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-3 text-balance">
          Skills &amp; Technologies
        </h1>
        <p className="text-base sm:text-lg text-stone-700 dark:text-stone-200 font-normal leading-relaxed text-balance">
          Comprehensive technical skillset spanning core algorithmic programming, modern full-stack
          web systems, applied AI &amp; LLM architectures, cloud databases, and developer automation.
        </p>
      </div>

      {/* Interactive Controls Bar: Search + Category Tabs + View Toggle */}
      <div className="space-y-4 mb-10">
        {/* Row 1: Search and View Mode */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. RAG, Next.js, Docker, Pinecone, C++)..."
              className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600 focus:ring-1 focus:ring-stone-400 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-900 rounded-lg border border-stone-200/70 dark:border-stone-800 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('detailed')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                viewMode === 'detailed'
                  ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-stone-100 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'
              }`}
              title="Detailed Cards with Descriptions"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('compact')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                viewMode === 'compact'
                  ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-stone-100 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'
              }`}
              title="Compact Matrix View"
            >
              <List className="w-3.5 h-3.5" />
              <span>Compact</span>
            </button>
          </div>
        </div>

        {/* Row 2: Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100/90 dark:bg-stone-900/90 rounded-lg border border-stone-200/70 dark:border-stone-800 overflow-x-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            const count = counts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-stone-100 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded font-mono ${
                    isSelected
                      ? 'bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200'
                      : 'text-stone-400 dark:text-stone-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Result Count Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-200/80 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400 font-mono">
        <span>
          Showing {filteredSkills.length} of {SKILLS_DATA.length} skills
          {searchQuery && ` matching "${searchQuery}"`}
          {activeCategory !== 'All' && ` in ${activeCategory}`}
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white font-medium underline cursor-pointer"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-16 px-4 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 my-4">
          <Search className="w-8 h-8 text-stone-400 dark:text-stone-500 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100 mb-1">No skills match your search</h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">Try searching for another technology or clearing your filter.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="px-4 py-2 text-xs font-semibold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
          >
            Show All {SKILLS_DATA.length} Skills
          </button>
        </div>
      )}

      {/* View 1: Detailed Cards View */}
      {viewMode === 'detailed' && filteredSkills.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 transition-all duration-150 hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon, Name, and Proficiency Level */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200/70 dark:group-hover:bg-stone-700 transition-colors shrink-0">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="text-base font-semibold text-stone-950 dark:text-stone-100 group-hover:text-stone-800 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium shrink-0 border border-transparent dark:border-stone-700/50">
                    {skill.category}
                  </span>
                </div>

                {/* Category & Status */}
                <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-3 font-mono">
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Hands-On Experience
                  </span>
                </div>

                {/* Short Application Context */}
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View 2: Compact Matrix View */}
      {viewMode === 'compact' && filteredSkills.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div className="flex items-start gap-2 mb-1.5">
                <div className="p-1 rounded bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200/60 dark:group-hover:bg-stone-700 shrink-0 mt-0.5">
                  {getCategoryIcon(skill.category)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-stone-950 dark:text-stone-100 truncate group-hover:text-stone-800 dark:group-hover:text-white">
                    {skill.name}
                  </h4>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono truncate">
                    {skill.category}
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-500 dark:text-stone-400">
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">Hands-on</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Practical Experience Footer Note */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
            Practical Application
          </span>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            Hands-on work across projects, coursework, and hackathons: from problem solving in Python and C++, to responsive web applications in React, computer vision and machine learning models, and practical deployments.
          </p>
        </div>
        
        {onNavigate && (
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white dark:text-stone-950 bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-stone-200 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <span>See Applied in Projects</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
