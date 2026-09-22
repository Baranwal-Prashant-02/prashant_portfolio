import React from 'react';
import { CalendarCheck, GitBranch, ShieldCheck, Award, Zap, GraduationCap } from 'lucide-react';

export const Metrics: React.FC = () => {
  const metrics = [
    {
      id: 'm1',
      category: 'CAPSTONE ENGINE',
      value: '~70%',
      title: 'Conflict Elimination',
      desc: 'Automated constraint engine resolving multi-department instructor overlaps and room sizing.',
      icon: CalendarCheck,
      badgeStyle: 'text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800/60',
      iconBoxStyle: 'bg-cyan-50 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/40',
      hoverBorder: 'hover:border-cyan-500/60 dark:hover:border-cyan-400/60',
      accentColor: 'text-cyan-600 dark:text-cyan-400',
    },
    {
      id: 'm2',
      category: 'OPEN SOURCE',
      value: '12+',
      title: 'Public Repositories',
      desc: 'Covering MERN web apps, Flask backends, real-time WebSockets, and deep C++ DSA problem implementations.',
      icon: GitBranch,
      badgeStyle: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60',
      iconBoxStyle: 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/40',
      hoverBorder: 'hover:border-emerald-500/60 dark:hover:border-emerald-400/60',
      accentColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'm3',
      category: 'PRIVACY FIRST',
      value: '100%',
      title: 'Client-Side ATS Engine',
      desc: 'PDF parsing and ATS keyword match algorithms execute directly in the browser with 0 server uploads.',
      icon: ShieldCheck,
      badgeStyle: 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800/60',
      iconBoxStyle: 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/40',
      hoverBorder: 'hover:border-blue-500/60 dark:hover:border-blue-400/60',
      accentColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'm4',
      category: 'INDUSTRY CREDENTIALS',
      value: '9+',
      title: 'Verified Certifications',
      desc: 'IIT Kanpur (Cybersecurity), Udemy (React & Flask), Forage SWE simulation, Unified Mentor, and NPTEL.',
      icon: Award,
      badgeStyle: 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800/60',
      iconBoxStyle: 'bg-purple-50 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/40',
      hoverBorder: 'hover:border-purple-500/60 dark:hover:border-purple-400/60',
      accentColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      id: 'm5',
      category: 'REAL-TIME MESSAGING',
      value: '<100ms',
      title: 'WebSocket Latency',
      desc: 'Driftline Chat messaging pipeline built with Socket.io, real-time typing listeners, and room channels.',
      icon: Zap,
      badgeStyle: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/60',
      iconBoxStyle: 'bg-amber-50 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/40',
      hoverBorder: 'hover:border-amber-500/60 dark:hover:border-amber-400/60',
      accentColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      id: 'm6',
      category: 'ACADEMIC PEDIGREE',
      value: '2022–26',
      title: 'B.Tech in CSE (AKTU)',
      desc: 'Maharana Pratap Engineering College. Rigorous computer science coursework in DSA, OS, DBMS, and Networks.',
      icon: GraduationCap,
      badgeStyle: 'text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/60 border-pink-200 dark:border-pink-800/60',
      iconBoxStyle: 'bg-pink-50 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-500/40',
      hoverBorder: 'hover:border-pink-500/60 dark:hover:border-pink-400/60',
      accentColor: 'text-pink-600 dark:text-pink-400',
    },
  ];

  return (
    <section id="metrics" className="py-20 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-[#070b14] relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-cyan-700 dark:text-cyan-400 bg-cyan-100/80 dark:bg-cyan-500/15 px-3.5 py-1.5 rounded-full border border-cyan-300 dark:border-cyan-500/30 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            Measurable Impact
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-3 tracking-tight">
            Proof in Numbers & Architecture
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2.5 leading-relaxed">
            Verifiable engineering milestones across open-source tools, capstone systems, and academic performance.
          </p>
        </div>

        {/* Bento Grid with World-Class Contrast & Visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className={`relative rounded-2xl bg-white dark:bg-[#0e1626] border border-slate-200/90 dark:border-slate-800 ${m.hoverBorder} p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-sm dark:shadow-md hover:shadow-xl dark:hover:shadow-cyan-500/5 group flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle top card highlight border */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 dark:via-cyan-400/30 to-transparent"></div>

                <div>
                  {/* Card Top Row: Badge & Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider border ${m.badgeStyle}`}>
                      {m.category}
                    </span>
                    <div className={`w-11 h-11 rounded-xl border ${m.iconBoxStyle} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Big Impact Value */}
                  <div className="mt-5">
                    <div className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight group-hover:scale-[1.02] transition-transform origin-left">
                      {m.value}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 mt-2">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom micro-bar */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>Verified Production Spec</span>
                  <span className={`font-semibold ${m.accentColor}`}>Active ↗</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
