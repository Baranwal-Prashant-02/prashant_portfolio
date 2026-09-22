import React, { useState, useEffect } from 'react';
import { Layers, Send, Copy, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCopyEmail: (email: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail }) => {
  // Dynamic Typewriter state
  const roles = [
    'Full Stack Developer',
    'MERN Stack Specialist',
    'Python & Flask Architect',
    'Constraint Logic & Systems Builder',
    'Pre-Final B.Tech CSE (AKTU)',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Widget preview tab state
  const [activeTab, setActiveTab] = useState<'terminal' | 'api' | 'metrics'>('terminal');
  const [termOutput, setTermOutput] = useState<string | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length <= 1) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 40);
    } else {
      timer = window.setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length) {
          window.setTimeout(() => setIsDeleting(true), 1800);
        }
      }, 80);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const runCommand = (cmd: string) => {
    if (cmd === 'status') {
      setTermOutput('✓ SDE Candidate Ready • B.Tech CSE (2022-26), AKTU • Open to Immediate Joining');
    } else if (cmd === 'projects') {
      setTermOutput('★ Smart Timetable (MERN+Python) • ATS Resume Checker (React) • Driftline Chat (Sockets) • Placement Portal');
    } else if (cmd === 'skills') {
      setTermOutput('⚡ React 18, Node.js, Express, Python Flask, MongoDB, MySQL, C++ (DSA & OOP)');
    }
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs sm:text-sm font-mono tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span>Available for Software Engineer & Full Stack Roles</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 dark:from-cyan-400 dark:via-blue-500 dark:to-emerald-400">
                Prashant Kumar Baranwal
              </span>
            </h1>

            {/* Dynamic Typewriter Subtitle */}
            <div className="text-xl sm:text-2xl font-mono text-slate-800 dark:text-slate-200 font-medium flex items-center min-h-[2.5rem]">
              <span className="text-slate-400 mr-2">&gt;</span>
              <span className="text-cyan-700 dark:text-cyan-400 font-semibold border-r-2 border-cyan-600 dark:border-cyan-400 pr-1 animate-pulse">
                {displayText}
              </span>
            </div>

            {/* Elevator Pitch with high contrast */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Computer Science Engineer (B.Tech 2022–2026, AKTU) specializing in the{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">MERN stack</strong> and{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Python / Flask</strong>. 
              I engineer high-performance web systems, privacy-first client applications, and algorithmic constraint solvers that eliminate operational friction.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 hover:border-cyan-500/40 text-slate-800 dark:text-slate-200 font-semibold text-sm backdrop-blur-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Get In Touch</span>
              </a>
              <button
                onClick={() => onCopyEmail('baranwalprashant2@gmail.com')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-xs hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Copy className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Copy Email</span>
              </button>
            </div>

            {/* Key Tech Stack Pill Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-slate-200 dark:border-white/10 w-full">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">CORE STACK:</span>
              {['React 18', 'Node.js', 'Express.js', 'Python Flask', 'MongoDB', 'C++ (DSA)', 'Tailwind CSS'].map((stack) => (
                <span
                  key={stack}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-xs"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Right Column: Interactive Code & Simulator Widget */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 rounded-2xl blur-lg opacity-25 dark:opacity-40 group-hover:opacity-50 dark:group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative rounded-2xl bg-white dark:bg-[#0e1424]/95 border border-slate-200 dark:border-white/15 backdrop-blur-xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-[#090d16]/90 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>

                  <div className="flex items-center gap-1 bg-white dark:bg-white/5 p-1 rounded-lg border border-slate-200 dark:border-white/10 text-[11px] font-mono shadow-xs">
                    {(['terminal', 'api', 'metrics'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2 py-0.5 rounded transition-colors uppercase font-medium ${
                          activeTab === tab
                            ? 'bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-semibold'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab: Terminal */}
                {activeTab === 'terminal' && (
                  <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3 min-h-[320px]">
                    <div className="text-slate-600 dark:text-slate-400">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">prashant@engineer</span>:
                      <span className="text-cyan-600 dark:text-cyan-400 font-semibold">~/portfolio</span>${' '}
                      <span className="text-slate-900 dark:text-white font-medium">cat developer.json</span>
                    </div>

                    <div className="text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-[#090d16]/70 p-3.5 rounded-lg border border-slate-200 dark:border-white/5 overflow-x-auto text-[11.5px] leading-snug">
                      <p><span className="text-purple-600 dark:text-purple-400">"name"</span>: <span className="text-emerald-700 dark:text-emerald-300">"Prashant Kumar Baranwal"</span>,</p>
                      <p><span className="text-purple-600 dark:text-purple-400">"role"</span>: <span className="text-emerald-700 dark:text-emerald-300">"Full Stack Developer & SDE"</span>,</p>
                      <p><span className="text-purple-600 dark:text-purple-400">"education"</span>: <span className="text-emerald-700 dark:text-emerald-300">"B.Tech CSE (2022-2026), AKTU"</span>,</p>
                      <p><span className="text-purple-600 dark:text-purple-400">"primaryStack"</span>: [<span className="text-cyan-700 dark:text-cyan-300">"React"</span>, <span className="text-cyan-700 dark:text-cyan-300">"Node.js"</span>, <span className="text-cyan-700 dark:text-cyan-300">"Flask"</span>, <span className="text-cyan-700 dark:text-cyan-300">"MongoDB"</span>],</p>
                      <p><span className="text-purple-600 dark:text-purple-400">"verifiedCerts"</span>: <span className="text-amber-600 dark:text-amber-300">9</span>,</p>
                      <p><span className="text-purple-600 dark:text-purple-400">"openSourceRepos"</span>: <span className="text-amber-600 dark:text-amber-300">12</span>,</p>
                      <p><span className="text-purple-600 dark:text-purple-400">"status"</span>: <span className="text-emerald-600 dark:text-emerald-400">"Available for Immediate Joining"</span></p>
                    </div>

                    <div className="pt-2">
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Interactive quick commands:</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <button
                          onClick={() => runCommand('status')}
                          className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 text-[11px] font-semibold"
                        >
                          check-status
                        </button>
                        <button
                          onClick={() => runCommand('projects')}
                          className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 hover:bg-emerald-50 dark:hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 text-[11px] font-semibold"
                        >
                          list-projects
                        </button>
                        <button
                          onClick={() => runCommand('skills')}
                          className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 hover:bg-purple-50 dark:hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-slate-200 dark:border-white/10 hover:border-purple-500/40 text-[11px] font-semibold"
                        >
                          view-skills
                        </button>
                      </div>

                      {termOutput && (
                        <div className="mt-2 text-[11.5px] text-cyan-800 dark:text-cyan-300 font-mono bg-cyan-50 dark:bg-cyan-950/40 p-2.5 rounded border border-cyan-200 dark:border-cyan-500/20">
                          {termOutput}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Tab: API Mock */}
                {activeTab === 'api' && (
                  <div className="p-5 font-mono text-xs min-h-[320px] space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-[11px]">POST /api/v1/schedule/optimize</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px]">200 OK (14ms)</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-[#090d16]/70 p-3 rounded-lg border border-slate-200 dark:border-white/5 text-[11px] text-slate-800 dark:text-slate-300 space-y-1">
                      <p><span className="text-blue-600 dark:text-blue-400">// Algorithm:</span> Constraint Satisfaction Heuristic</p>
                      <p><span className="text-purple-600 dark:text-purple-400">hardConstraintsSatisfied</span>: <span className="text-emerald-600 dark:text-emerald-400 font-bold">100%</span></p>
                      <p><span className="text-purple-600 dark:text-purple-400">facultyOverlapConflicts</span>: <span className="text-emerald-600 dark:text-emerald-400 font-bold">0</span></p>
                      <p><span className="text-purple-600 dark:text-purple-400">classroomCapacityViolations</span>: <span className="text-emerald-600 dark:text-emerald-400 font-bold">0</span></p>
                      <p><span className="text-purple-600 dark:text-purple-400">overallEfficiencyScore</span>: <span className="text-cyan-700 dark:text-cyan-400 font-bold">"99.4%"</span></p>
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-[11px] pt-1">
                      Live prototype logic from Prashant's major B.Tech capstone project.
                    </div>
                    <a href="#projects" className="inline-flex items-center gap-1.5 text-xs text-cyan-700 dark:text-cyan-400 hover:underline pt-2 font-medium">
                      <span>Inspect Capstone System Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Tab: Engine */}
                {activeTab === 'metrics' && (
                  <div className="p-5 min-h-[320px] space-y-3">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Live System Health & Quality</span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">CONFLICT REDUCTION</span>
                        <p className="font-heading text-lg font-bold text-emerald-600 dark:text-emerald-400">~70%</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">RESUME PARSE TIME</span>
                        <p className="font-heading text-lg font-bold text-cyan-600 dark:text-cyan-400">&lt; 350ms</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">CHAT WEBSOCKET LATENCY</span>
                        <p className="font-heading text-lg font-bold text-blue-600 dark:text-blue-400">&lt; 80ms</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">VERIFIED CERTIFICATES</span>
                        <p className="font-heading text-lg font-bold text-purple-600 dark:text-purple-400">9 Badges</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Clean modular code with zero external telemetry or tracking</span>
                    </div>
                  </div>
                )}

                {/* Status Bar */}
                <div className="px-4 py-2.5 bg-slate-100/90 dark:bg-[#090d16]/95 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    All systems online
                  </span>
                  <span>UTF-8 • React 18</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
