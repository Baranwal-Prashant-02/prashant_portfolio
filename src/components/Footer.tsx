import React, { useState, useEffect } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#06090f] py-10 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[1px]">
              <div className="w-full h-full bg-white dark:bg-[#0a0f1d] rounded-[7px] flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-cyan-600 dark:text-cyan-400">PKB</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              © 2026 <strong className="text-slate-900 dark:text-slate-200">Prashant Kumar Baranwal</strong> • Engineered with React 18, Tailwind CSS & Lucide.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <a
              href="https://github.com/Baranwal-Prashant-02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/prashant-kr-baranwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white dark:bg-[#0e1424]/90 border border-slate-200 dark:border-white/20 text-cyan-600 dark:text-cyan-400 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:border-cyan-500 animate-in fade-in"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
