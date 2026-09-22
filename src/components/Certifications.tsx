import React from 'react';
import { ShieldCheck, Award, Sparkles, FolderCheck, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certs = [
    {
      id: 'c1',
      issuer: 'IIT KANPUR',
      icon: ShieldCheck,
      color: 'text-cyan-600 dark:text-cyan-400',
      badgeBg: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/20',
      title: 'Cybersecurity & Network Security',
      desc: 'E & ICT Academy, IIT Kanpur. Foundational principles in application security, network protection, and vulnerabilities.',
      type: 'Verified Certificate',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/IITK_Cybersecurity_Certificate.png'
    },
    {
      id: 'c2',
      issuer: 'UDEMY',
      icon: Award,
      color: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-500/20',
      title: 'React.js Complete Developer Course',
      desc: 'Component architecture, custom hooks, context management, asynchronous rendering, and single-page apps.',
      type: 'Verified PDF',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/react_js%20from%20udemy.pdf'
    },
    {
      id: 'c3',
      issuer: 'UDEMY',
      icon: Award,
      color: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20',
      title: 'Python Complete & Flask Framework',
      desc: 'Full backend course covering Python programming, Flask routing, templates, and SQLAlchemy ORM.',
      type: 'Verified PDF',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/Python%20Complete%20Course%20and%20Flask%20Framework%20certificate%20from%20udemy.pdf'
    },
    {
      id: 'c4',
      issuer: 'FORAGE',
      icon: Award,
      color: 'text-purple-600 dark:text-purple-400',
      badgeBg: 'bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-500/20',
      title: 'Software Engineering Simulation',
      desc: 'Realistic software engineering tasks including system architecture, bug resolution, and financial feeds.',
      type: 'Verified PDF',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/Forage%20software%20Engineering%20Job%20simulation%20certificate.pdf'
    },
    {
      id: 'c5',
      issuer: 'UNIFIED MENTOR',
      icon: Award,
      color: 'text-teal-600 dark:text-teal-400',
      badgeBg: 'bg-teal-50 dark:bg-teal-500/10 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-500/20',
      title: 'Full Stack Web Development',
      desc: 'Official internship completion certificate verifying hands-on web engineering delivery.',
      type: 'Verified PDF',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/unified%20mentor%20certificate.pdf'
    },
    {
      id: 'c6',
      issuer: 'APNA COLLEGE',
      icon: Award,
      color: 'text-pink-600 dark:text-pink-400',
      badgeBg: 'bg-pink-50 dark:bg-pink-500/10 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-500/20',
      title: 'Sigma Full Stack Web & DSA',
      desc: 'End-to-end full stack development combined with comprehensive Data Structures & Algorithms training.',
      type: 'Verified PDF',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/sigma%20apna%20college.pdf'
    },
    {
      id: 'c7',
      issuer: 'GENERATIVE AI',
      icon: Sparkles,
      color: 'text-indigo-600 dark:text-indigo-400',
      badgeBg: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/20',
      title: 'Programming with Generative AI',
      desc: 'Integrating Generative AI models, prompt engineering, and LLM automation into modern applications.',
      type: 'Verified PDF',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/Programming%20with%20Generative%20AI.pdf'
    },
    {
      id: 'c8',
      issuer: 'NPTEL',
      icon: Award,
      color: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/20',
      title: 'Digital Marketing & Analytics',
      desc: 'National Programme on Technology Enhanced Learning. Digital user engagement metrics and conversion strategies.',
      type: 'Verified PDF',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/NPTEL%20Digital%20Marketing.pdf'
    },
    {
      id: 'c9',
      issuer: 'NISM',
      icon: Award,
      color: 'text-red-600 dark:text-red-400',
      badgeBg: 'bg-red-50 dark:bg-red-500/10 text-red-800 dark:text-red-300 border-red-200 dark:border-red-500/20',
      title: 'Certificate NISM',
      desc: 'National Institute of Securities Markets financial instruments and compliance principles certification.',
      type: 'Verified PDF',
      link: 'https://raw.githubusercontent.com/Baranwal-Prashant-02/Certifications/main/Certificate%20NISM.pdf'
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-500/20">
              Verified Credentials
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3">
              Industry Certifications & Training
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
              Verified certificates from leading academic and corporate institutions uploaded in Prashant's repository.
            </p>
          </div>
          <a
            href="https://github.com/Baranwal-Prashant-02/Certifications"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium transition-colors"
          >
            <FolderCheck className="w-4 h-4" />
            <span>View Certifications Repo</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="p-5 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${c.badgeBg}`}>
                      {c.issuer}
                    </span>
                    <Icon className={`w-4 h-4 ${c.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mt-3">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {c.type}
                  </span>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-700 dark:text-cyan-400 hover:underline font-mono flex items-center gap-1 font-semibold"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
