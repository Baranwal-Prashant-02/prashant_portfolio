import React, { useState } from 'react';
import { Sun, Moon, Menu, X, FileBadge } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 bg-white/85 dark:bg-[#090d16]/85">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Monogram Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-white dark:bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-sm tracking-wider text-cyan-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-emerald-400">
                PKB
              </span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Prashant Baranwal
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Available for SDE Roles
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white transition-colors rounded-full hover:bg-slate-200/60 dark:hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-cyan-600" />
            )}
          </button>

          {/* Direct Resume & Credentials Button */}
          <a
            href="https://github.com/Baranwal-Prashant-02/Certifications"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <FileBadge className="w-4 h-4" />
            <span>Credentials & CV</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-2 border-b border-slate-100 dark:border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="mailto:baranwalprashant2@gmail.com"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-400 font-mono text-sm"
              >
                baranwalprashant2@gmail.com
              </a>
              <a
                href="tel:+918795007645"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-emerald-700 dark:text-emerald-400 font-mono text-sm"
              >
                +91 8795007645
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
