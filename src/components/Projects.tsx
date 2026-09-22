import React, { useState } from 'react';
import { CalendarClock, FileCheck2, MessageSquare, Briefcase, Binary, TrendingDown, ShieldCheck, Zap, Lock, CheckCircle2, ExternalLink, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ArchitectureData, ArchitectureModal } from './ArchitectureModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mern' | 'python' | 'frontend'>('all');
  const [activeModal, setActiveModal] = useState<ArchitectureData | null>(null);

  const projectsData = [
    {
      id: 'timetable',
      category: 'mern',
      categoryLabel: 'ACADEMIC AUTOMATION',
      badge: 'Capstone Major Project',
      title: 'Smart Timetable & Classroom Allocation System',
      desc: 'Engineered a full-stack automated scheduling engine that eliminates manual spreadsheets by modeling instructor time preferences, room capacity limits, and course cohort constraints.',
      metric: '~70% Conflict Reduction',
      metricIcon: TrendingDown,
      gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent dark:from-blue-900/60 dark:via-indigo-950/80 dark:to-[#0c1224]',
      icon: CalendarClock,
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      badgeColor: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Python', 'Recharts'],
      githubUrl: 'https://github.com/Baranwal-Prashant-02/Smart-Timetable-Classroom-Allocation-system',
      architecture: {
        title: 'Smart Timetable & Classroom Allocation System',
        category: 'MERN Stack & Python Constraint Scheduling Engine',
        metric: '~70% Reduction in manual scheduling conflicts across academic cohorts',
        githubUrl: 'https://github.com/Baranwal-Prashant-02/Smart-Timetable-Classroom-Allocation-system',
        overview: 'Educational institutions struggle with overlapping course slots, limited classroom capacities, and conflicting faculty schedules. This system replaces spreadsheet chaos with an automated, constraint-driven scheduling engine.',
        highlights: [
          '<strong>Hard & Soft Constraint Solving</strong>: Formulated mathematical constraints in Python ensuring zero professor overlaps, strict room capacity compliance, and balanced daily student schedules.',
          '<strong>Full-Stack MERN Architecture</strong>: React frontend with interactive calendar heatmaps and timetable exports, supported by an Express/Node API and MongoDB.',
          '<strong>Relational Integrity & Dynamic Filtering</strong>: Multi-role permission gates for Department Heads, Faculty Members, and Students.',
          '<strong>Visual Conflict Inspector</strong>: Real-time visual flags alerting administrators if room capacities are exceeded before final schedule lock.'
        ],
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Constraint Heuristics', 'Recharts', 'Bootstrap']
      }
    },
    {
      id: 'ats',
      category: 'frontend',
      categoryLabel: 'CAREER TECH & TOOLS',
      badge: 'Live on Vercel',
      title: 'ATS Resume Checker Pro',
      desc: 'A privacy-first ATS resume scoring tool built in React. Extracts text layers directly in the browser via PDF.js, computes keyword frequency, and generates targeted improvement suggestions.',
      metric: '100% In-Browser Scoring',
      metricIcon: ShieldCheck,
      gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent dark:from-emerald-950/70 dark:via-teal-950/80 dark:to-[#0c1224]',
      icon: FileCheck2,
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      badgeColor: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30',
      tags: ['React.js', 'PDF.js', 'Tailwind CSS', 'Client Scoring', 'Vercel'],
      githubUrl: 'https://github.com/Baranwal-Prashant-02/ats-resume-checker-pro',
      liveUrl: 'https://ats-resume-checker-pro-psi.vercel.app',
      architecture: {
        title: 'ATS Resume Checker Pro',
        category: 'Privacy-First Client-Side NLP & Resume Scoring Platform',
        metric: '100% In-Browser Analysis with Zero Server Telemetry',
        githubUrl: 'https://github.com/Baranwal-Prashant-02/ats-resume-checker-pro',
        liveUrl: 'https://ats-resume-checker-pro-psi.vercel.app',
        overview: 'A free developer and candidate utility that parses resume PDFs directly in the browser, calculates ATS compatibility, and offers actionable optimization feedback.',
        highlights: [
          '<strong>Client-Side Extraction (PDF.js)</strong>: Avoids privacy concerns by extracting text streams, headings, and font hierarchy directly in client memory.',
          '<strong>Weighted Keyword & Section Algorithm</strong>: Scores resume content against industry job keywords, section density, action verbs, and contact info completeness.',
          '<strong>Interactive Optimization Feedback</strong>: Highlights missing technical proficiencies and flags unreadable formatting structures in real time.',
          '<strong>Fast Vercel Deployment</strong>: Lightweight bundle with responsive Tailwind CSS layout.'
        ],
        techStack: ['React.js', 'PDF.js', 'Tailwind CSS', 'Vercel', 'JavaScript ES6+', 'Client Analytics']
      }
    },
    {
      id: 'driftline',
      category: 'mern',
      categoryLabel: 'REAL-TIME COMMUNICATIONS',
      badge: 'WebSockets Platform',
      title: 'Driftline - Real-Time Chat App',
      desc: 'Real-time messaging web app utilizing bi-directional Socket.io channels, persistent connection lifecycles, typing state indicators, online user presence, and compartmentalized rooms.',
      metric: 'Sub-100ms Latency',
      metricIcon: Zap,
      gradient: 'from-purple-600/20 via-indigo-600/10 to-transparent dark:from-purple-950/70 dark:via-indigo-950/80 dark:to-[#0c1224]',
      icon: MessageSquare,
      iconColor: 'text-purple-600 dark:text-purple-400',
      badgeColor: 'bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-500/30',
      tags: ['Node.js', 'Express', 'Socket.io', 'WebSockets', 'JavaScript'],
      githubUrl: 'https://github.com/Baranwal-Prashant-02/Driftline-Real-Time-Chat-Application',
      architecture: {
        title: 'Driftline - Real-Time Chat Application',
        category: 'Bi-Directional WebSocket & Socket.io Messaging System',
        metric: 'Sub-100ms Instant Messaging & Typing Feedback Latency',
        githubUrl: 'https://github.com/Baranwal-Prashant-02/Driftline-Real-Time-Chat-Application',
        overview: 'A low-latency communication application designed to handle instant message delivery, room broadcasts, and connection state persistence.',
        highlights: [
          '<strong>Socket.io Infrastructure</strong>: Event-driven architecture handling join/leave room events, broadcast packets, and client acknowledgment hooks.',
          '<strong>Presence & Real-Time Indicators</strong>: Live user status updates (online/offline) and real-time typing indicators with debounce controls.',
          '<strong>Modular Server Architecture</strong>: Decoupled Express.js routing alongside HTTP WebSocket server upgrades.',
          '<strong>Clean UI</strong>: Clean, mobile-friendly chat view with message timestamps and active room list.'
        ],
        techStack: ['Node.js', 'Express.js', 'Socket.io', 'WebSockets', 'JavaScript', 'HTML5/CSS3']
      }
    },
    {
      id: 'placement',
      category: 'python',
      categoryLabel: 'CAMPUS RECRUITMENT',
      badge: 'Enterprise Flask App',
      title: 'Placement Cell Web Application',
      desc: 'Full-stack campus recruitment platform built with Python & Flask. Handles job listings, student resume submission pipelines, multi-role dashboards (Admin, Recruiter, Student), and placement statistics.',
      metric: 'Role-Based Access (RBAC)',
      metricIcon: Lock,
      gradient: 'from-blue-600/20 via-slate-600/10 to-transparent dark:from-blue-950/70 dark:via-slate-900/80 dark:to-[#0c1224]',
      icon: Briefcase,
      iconColor: 'text-blue-600 dark:text-blue-400',
      badgeColor: 'bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-500/30',
      tags: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'RBAC'],
      githubUrl: 'https://github.com/Baranwal-Prashant-02/Placement-cell-web-application',
      architecture: {
        title: 'Placement Cell Web Application',
        category: 'Enterprise Campus Recruitment & Student Pipeline Portal',
        metric: 'Unified multi-role workflow for students, recruiters, and placement officers',
        githubUrl: 'https://github.com/Baranwal-Prashant-02/Placement-cell-web-application',
        overview: 'A centralized portal built to streamline campus hiring drives, student resume submissions, company job postings, and placement analytics.',
        highlights: [
          '<strong>Flask & SQLAlchemy Backend</strong>: Relational database schemas in MySQL tracking job criteria, student profiles, application status, and drive dates.',
          '<strong>Role-Based Access Control (RBAC)</strong>: Distinct authorization levels for Students (apply, track), Recruiters (post jobs, shortlist), and Placement Admins (verify, generate reports).',
          '<strong>Status Pipeline Workflow</strong>: Automated status progression: Applied → Shortlisted → Technical Assessment → Offer Extended.',
          '<strong>Reporting & Export</strong>: Statistical summaries of institutional placement percentages across academic departments.'
        ],
        techStack: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'Jinja2', 'HTML5/CSS3', 'RBAC Security']
      }
    },
    {
      id: 'cpp-dsa',
      category: 'frontend',
      categoryLabel: 'FOUNDATIONAL DSA',
      badge: 'Algorithms & DSA',
      title: 'Complete C++ & DSA Mastery',
      desc: 'A comprehensive engineering repository covering modern C++, Object-Oriented Design, memory allocation, trees, graphs, dynamic programming, and constraint problem sets.',
      metric: 'Extensive Algorithms',
      metricIcon: CheckCircle2,
      gradient: 'from-amber-600/20 via-slate-600/10 to-transparent dark:from-amber-950/60 dark:via-slate-900/80 dark:to-[#0c1224]',
      icon: Binary,
      iconColor: 'text-amber-600 dark:text-amber-400',
      badgeColor: 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/30',
      tags: ['C++', 'Data Structures', 'Algorithms', 'OOP', 'STL'],
      githubUrl: 'https://github.com/Baranwal-Prashant-02/Complete-Cpp-learning',
      architecture: {
        title: 'Complete C++ & DSA Learning Repository',
        category: 'Algorithms, Data Structures & Systems Programming',
        metric: 'Comprehensive implementations across 100+ computational patterns',
        githubUrl: 'https://github.com/Baranwal-Prashant-02/Complete-Cpp-learning',
        overview: 'In-depth study and reference codebase covering computer science algorithms, space/time complexity optimizations, memory management, and Standard Template Library (STL) paradigms.',
        highlights: [
          '<strong>Data Structures</strong>: Linked lists, binary search trees, AVL trees, graphs, heaps, and hash tables.',
          '<strong>Algorithm Paradigms</strong>: Divide & conquer, dynamic programming, greedy methods, and backtracking.',
          '<strong>Object-Oriented Architecture</strong>: Encapsulation, inheritance, polymorphism, and virtual dispatch in C++.'
        ],
        techStack: ['C++', 'STL', 'DSA', 'OOP', 'Memory Models', 'Algorithms']
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-white/5 bg-slate-50/40 dark:bg-[#080c17]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/20">
              Portfolio Showcase
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
              Real-world applications built to automate institutional processes, provide privacy tools, and scale communication.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/70 dark:bg-white/5 p-1.5 rounded-xl border border-slate-300/80 dark:border-white/10 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'mern', label: 'MERN Stack' },
              { id: 'python', label: 'Python & Flask' },
              { id: 'frontend', label: 'Frontend & React' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-900 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => {
            const Icon = p.icon;
            const MetricIcon = p.metricIcon;
            return (
              <div
                key={p.id}
                className="group rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col shadow-sm dark:shadow-none"
              >
                {/* Banner Header */}
                <div className={`h-44 bg-gradient-to-br ${p.gradient} p-5 relative overflow-hidden flex flex-col justify-between border-b border-slate-200 dark:border-white/10`}>
                  <div className="flex items-center justify-between z-10">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${p.badgeColor} font-semibold`}>
                      {p.badge}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-white/60 dark:bg-white/10 flex items-center justify-center shadow-xs">
                      <Icon className={`w-4 h-4 ${p.iconColor}`} />
                    </span>
                  </div>
                  <div className="z-10">
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block font-semibold">
                      KEY METRIC
                    </span>
                    <span className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-1.5">
                      <MetricIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      {p.metric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                      {p.categoryLabel}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mt-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10.5px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => setActiveModal(p.architecture)}
                      className="flex-1 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-500/15 hover:bg-cyan-100 dark:hover:bg-cyan-500/25 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Architecture</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      <ArchitectureModal 
        project={activeModal} 
        onClose={() => setActiveModal(null)} 
      />
    </section>
  );
};
