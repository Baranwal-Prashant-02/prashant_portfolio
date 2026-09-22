import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Theme } from './types';
import { Check } from 'lucide-react';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('pkb_portfolio_theme') as Theme | null;
    const initialTheme: Theme = saved || 'dark';
    setTheme(initialTheme);
    applyThemeToDocument(initialTheme);
  }, []);

  const applyThemeToDocument = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  };

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('pkb_portfolio_theme', next);
    applyThemeToDocument(next);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const copyToClipboard = (text: string, label: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} copied to clipboard!`);
      }).catch(() => {
        fallbackCopy(text, label);
      });
    } else {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text: string, label: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand('copy');
      showToast(`${label} copied to clipboard!`);
    } catch (err) {
      showToast(`Copied: ${text}`);
    }
    document.body.removeChild(el);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-200 antialiased font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-black relative">
      
      {/* Ambient Glowing Background Mesh & Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="glow-blob glow-blob-1 animate-pulse-slow"></div>
        <div className="glow-blob glow-blob-2 animate-pulse-slow" style={{ animationDelay: '-1.5s' }}></div>
        <div className="glow-blob glow-blob-3 animate-pulse-slow" style={{ animationDelay: '-3s' }}></div>
        <div className="grid-pattern-overlay"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20">
        <Hero onCopyEmail={(email) => copyToClipboard(email, 'Email')} />
        <Metrics />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact onCopyText={copyToClipboard} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white border border-white/20 text-xs font-mono shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
};

export default App;
