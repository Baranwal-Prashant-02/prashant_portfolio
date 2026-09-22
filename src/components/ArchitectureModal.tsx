import React, { useEffect } from 'react';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export interface ArchitectureData {
  title: string;
  category: string;
  metric: string;
  githubUrl: string;
  liveUrl?: string;
  overview: string;
  highlights: string[];
  techStack: string[];
}

interface ArchitectureModalProps {
  project: ArchitectureData | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold">
            {project.category}
          </div>
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto py-4 space-y-4 flex-1 text-sm leading-relaxed">
          <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{project.metric}</span>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
            {project.overview}
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase text-cyan-700 dark:text-cyan-400">
              Architectural Highlights & Engineering Decisions:
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                  <span dangerouslySetInnerHTML={{ __html: h }} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              Technologies & Libraries:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((t) => (
                <span 
                  key={t}
                  className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.liveUrl && (
            <div className="pt-2">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Application</span>
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white text-xs font-mono flex items-center gap-2 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source Code</span>
          </a>
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-cyan-500/20 hover:bg-slate-200 dark:hover:bg-cyan-500/30 text-slate-800 dark:text-cyan-300 text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
