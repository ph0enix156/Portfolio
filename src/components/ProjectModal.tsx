import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Compass } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 shadow-2xl text-stone-900 dark:text-stone-100 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Unboxed Category and Status */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
          <span>{project.category}</span>
          <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-medium">{project.status}</span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-stone-600 dark:text-stone-400 mb-6">
          {project.subtitle}
        </p>

        {/* Problem Solved */}
        <div className="mb-6 p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/60">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
            <span>Problem &amp; Motivation</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>

        {/* In-depth Overview */}
        <div className="mb-6 space-y-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            System Architecture &amp; Implementation
          </div>
          <p>{project.fullDescription}</p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
            Key Engineering Highlights
          </div>
          <div className="space-y-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Unboxed Text with Separators */}
        <div className="mb-8 pt-4 border-t border-stone-100 dark:border-stone-800">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
            Technology Stack
          </div>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-stone-800 dark:text-stone-200">
            {project.techStack.map((tech, i) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {i < project.techStack.length - 1 && (
                  <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
          <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">
            Role: <span className="text-stone-800 dark:text-stone-200 font-semibold">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            {project.demoUrl && !project.demoUrl.includes('github.com') && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white dark:text-stone-950 bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-stone-200 rounded-lg transition-colors"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
