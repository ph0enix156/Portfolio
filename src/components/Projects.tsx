import React, { useState, useMemo } from 'react';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Eye,
  Code,
  Activity,
  Hand,
  Sprout,
  Bot,
  Search,
  X,
  Compass,
  Layers,
  Terminal,
  Cpu,
  Globe,
  Radio
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onNavigate?: (page: 'experience' | 'contact') => void;
}

type CategoryFilter = 'all' | 'ai' | 'web' | 'systems' | 'productivity';

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Domain visual icons for each project card header
  const getProjectIcon = (id: string, category: string) => {
    const iconClass = "w-4 h-4 text-stone-800 dark:text-stone-200";
    if (id === 'signbridge') return <Hand className={iconClass} />;
    if (id === 'fasalmitra') return <Sprout className={iconClass} />;
    if (id === 'ai-scout') return <Activity className={iconClass} />;
    if (id === 'ovi') return <Bot className={iconClass} />;
    if (id === 'asl-cpp') return <Cpu className={iconClass} />;
    if (id === 'campus-route') return <Compass className={iconClass} />;
    if (id === 'optitrack') return <Terminal className={iconClass} />;
    if (id === 'yi-shubharambh') return <Radio className={iconClass} />;
    if (id === 'morrigan' || id === 'ledger') return <Layers className={iconClass} />;
    if (category.toLowerCase().includes('web') || category.toLowerCase().includes('client')) return <Globe className={iconClass} />;
    return <Code className={iconClass} />;
  };

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category match
      let matchesCategory = true;
      if (activeCategory === 'ai') {
        matchesCategory =
          project.category.toLowerCase().includes('ai') ||
          project.category.toLowerCase().includes('vision') ||
          project.category.toLowerCase().includes('ml') ||
          project.techStack.some((t) => ['PyTorch', 'OpenCV', 'MediaPipe', 'Deep Learning'].includes(t));
      } else if (activeCategory === 'web') {
        matchesCategory =
          project.category.toLowerCase().includes('web') ||
          project.category.toLowerCase().includes('full-stack') ||
          project.category.toLowerCase().includes('fintech') ||
          project.category.toLowerCase().includes('client') ||
          project.techStack.some((t) => ['React', 'Next.js', 'Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS'].includes(t));
      } else if (activeCategory === 'systems') {
        matchesCategory =
          project.category.toLowerCase().includes('systems') ||
          project.category.toLowerCase().includes('c++') ||
          project.category.toLowerCase().includes('dbms') ||
          project.techStack.some((t) => t.includes('C++') || t === 'CMake' || t.includes('Graph'));
      } else if (activeCategory === 'productivity') {
        matchesCategory =
          project.category.toLowerCase().includes('productivity') ||
          project.category.toLowerCase().includes('campus') ||
          project.category.toLowerCase().includes('tools') ||
          project.category.toLowerCase().includes('browser');
      }

      // Search match
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = project.title.toLowerCase().includes(query);
        const inSub = project.subtitle.toLowerCase().includes(query);
        const inDesc = project.shortDescription.toLowerCase().includes(query);
        const inTech = project.techStack.some((t) => t.toLowerCase().includes(query));
        matchesSearch = inTitle || inSub || inDesc || inTech;
      }

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories = [
    { id: 'all' as CategoryFilter, label: 'All Repositories', count: PROJECTS_DATA.length },
    {
      id: 'ai' as CategoryFilter,
      label: 'AI & Computer Vision',
      count: PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('vision') || p.category.toLowerCase().includes('ml')).length,
    },
    {
      id: 'web' as CategoryFilter,
      label: 'Full-Stack & Web',
      count: PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('full-stack') || p.category.toLowerCase().includes('fintech') || p.category.toLowerCase().includes('client')).length,
    },
    {
      id: 'systems' as CategoryFilter,
      label: 'Systems & C++',
      count: PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes('systems') || p.category.toLowerCase().includes('c++') || p.techStack.some((t) => t.includes('C++'))).length,
    },
    {
      id: 'productivity' as CategoryFilter,
      label: 'Campus & Tools',
      count: PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes('productivity') || p.category.toLowerCase().includes('campus') || p.category.toLowerCase().includes('tools') || p.category.toLowerCase().includes('browser')).length,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      
      {/* GitHub Source Verification Banner */}
      <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shrink-0">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-stone-950 dark:text-stone-100">
                GitHub: {PERSONAL_INFO.githubDisplay}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                {PROJECTS_DATA.length} Public Projects
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Directly fetched from @pushkar156 with verified live deployments on Vercel and custom domains.
            </p>
          </div>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors cursor-pointer shrink-0"
        >
          <span>View GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Section Header */}
      <div className="max-w-2xl mb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2 font-mono">
          Engineering Portfolio &amp; Codebases
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-3 text-balance">
          Projects &amp; Systems
        </h1>
        <p className="text-sm sm:text-base text-stone-700 dark:text-stone-200 font-normal leading-relaxed text-balance">
          Practical software systems engineered to solve real challenges in assistive communication,
          agricultural intelligence, financial telemetry, systems programming, and campus logistics.
        </p>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-xl border border-stone-200/80 dark:border-stone-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-stone-100 shadow-2xs font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-stone-200/60 dark:bg-stone-700/60 text-stone-600 dark:text-stone-300">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, stack, name..."
              className="w-full pl-8 pr-8 py-2 text-xs rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 dark:focus:ring-stone-600 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-0.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Results summary counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
          <span>
            Showing {filteredProjects.length} of {PROJECTS_DATA.length} projects
          </span>
          {searchQuery && (
            <span className="text-stone-600 dark:text-stone-300">
              Filtering by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>
      </div>

      {/* Grid of Project Cards */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-stone-300 dark:border-stone-800">
          <p className="text-sm text-stone-600 dark:text-stone-400">
            No projects matched your filter &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => {
            const isLive = project.status.toLowerCase().includes('live');
            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 transition-all duration-200 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-xs group"
              >
                <div>
                  {/* Top: Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-500 dark:text-stone-400 truncate">
                      <span className="truncate">{project.category.split('·')[0].trim()}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isLive && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                          isLive
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-stone-700/60'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h2 className="text-lg font-bold tracking-tight text-stone-950 dark:text-stone-50 group-hover:text-stone-800 dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h2>
                    <div className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200/70 dark:group-hover:bg-stone-700 transition-colors shrink-0">
                      {getProjectIcon(project.id, project.category)}
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs font-medium text-stone-600 dark:text-stone-300 mb-3 line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4 font-normal line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200/40 dark:border-stone-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors cursor-pointer py-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-stone-950 dark:hover:text-white rounded-lg transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    {project.demoUrl && project.demoUrl.startsWith('http') && !project.demoUrl.includes('github.com') && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200/60 dark:border-emerald-800/60 rounded-lg transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Navigation Footer */}
      {onNavigate && (
        <div className="mt-14 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
            All codebases open-source at github.com/pushkar156
          </span>
          <button
            type="button"
            onClick={() => onNavigate('experience')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors cursor-pointer"
          >
            <span>Explore Experience &amp; Milestones</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
