import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/80 dark:border-white/5 bg-slate-50/40 dark:bg-[#080c17]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20">
            Trajectory
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3">
            Work Experience & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Direct industry internship delivery paired with formal computer science academics.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-10 space-y-10 border-l-2 border-slate-200 dark:border-white/10 ml-2 sm:ml-4">
          
          {/* Experience 1: Unified Mentor */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#090d16] border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-md group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 backdrop-blur-md transition-all shadow-sm dark:shadow-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Full Stack Web Development Intern
                  </h3>
                  <h4 className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm sm:text-base">
                    Unified Mentor
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-medium">
                    July 2025 – August 2025
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-mono text-xs">
                    Remote
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-4 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Engineered responsive, dynamic web interfaces with HTML, CSS, and modern JavaScript, resulting in fluid mobile and desktop usability.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Implemented structured client-side form validation and interactive UI state transitions that reduced client submission errors.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Participated in team code reviews, Git version control branching workflows, and documentation of reusable frontend modules.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-200 dark:border-white/10 mt-5">
                {['JavaScript', 'HTML5 / CSS3', 'Responsive Design', 'Git', 'Form Validation'].map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education 1: B.Tech CSE AKTU */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#090d16] border-2 border-cyan-500 flex items-center justify-center text-cyan-500 shadow-md group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all shadow-sm dark:shadow-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <h4 className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm sm:text-base">
                    Maharana Pratap Engineering College, Kanpur (AKTU)
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-mono text-xs font-medium">
                  2022 – 2026 (Pre-Final / Final Year)
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-4 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>Rigorous curriculum focused on Data Structures, Analysis & Design of Algorithms, Database Systems (DBMS), Operating Systems, and Object-Oriented Software Design.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>Spearheaded the major B.Tech capstone project: Smart Timetable & Classroom Allocation System using MERN and Python constraint algorithms.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-200 dark:border-white/10 mt-5">
                {['Computer Science', 'Algorithms & DSA', 'DBMS', 'Operating Systems', 'Kanpur, UP'].map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
