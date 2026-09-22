import React from 'react';
import { Code2, Layout, Server, Database, Terminal, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      meta: 'Core syntax & logic',
      icon: Code2,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-500/10',
      skills: ['JavaScript (ES6+)', 'Python', 'C++', 'SQL', 'HTML5', 'CSS3']
    },
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      meta: 'Stateful client UI',
      icon: Layout,
      color: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-50 dark:bg-cyan-500/10',
      skills: ['React.js (18+)', 'Tailwind CSS', 'Responsive Design', 'Hooks & State', 'Lucide Icons', 'DOM APIs']
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      meta: 'Server architectures',
      icon: Server,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-500/10',
      skills: ['Node.js', 'Express.js', 'Python Flask', 'RESTful APIs', 'Socket.io (WebSockets)', 'JWT & RBAC Auth']
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      meta: 'Relational & NoSQL',
      icon: Database,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-500/10',
      skills: ['MongoDB (NoSQL)', 'MySQL (Relational)', 'Mongoose ORM', 'SQLAlchemy', 'Schema Normalization']
    },
    {
      id: 'tools',
      title: 'Tools & Workflows',
      meta: 'DevOps & productivity',
      icon: Terminal,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-500/10',
      skills: ['Git & GitHub', 'Postman API Testing', 'VS Code', 'Vercel Deployment', 'PDF.js']
    },
    {
      id: 'cs',
      title: 'CS Foundations',
      meta: 'Core theoretical pillars',
      icon: Cpu,
      color: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-50 dark:bg-cyan-500/10',
      highlight: true,
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'DBMS & Relational Queries', 'Operating Systems', 'Computer Networks']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/20">
            Skill Architecture
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3">
            Technical Competency Matrix
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Grouped engineering domains reflecting production tools, languages, and core computer science fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`p-6 rounded-2xl bg-white dark:bg-white/[0.04] border ${
                  cat.highlight 
                    ? 'border-cyan-300 dark:border-cyan-500/30 ring-1 ring-cyan-400/20' 
                    : 'border-slate-200 dark:border-white/10'
                } backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-200 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {cat.meta}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                        cat.highlight
                          ? 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-medium'
                          : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-cyan-500/40 hover:text-cyan-700 dark:hover:text-cyan-300'
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
