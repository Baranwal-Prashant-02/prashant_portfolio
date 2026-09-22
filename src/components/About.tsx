import React from 'react';
import { Layers, Cpu, Smartphone, ShieldAlert, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Left: Profile Photo & Social Links */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 mx-auto group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-500 rounded-3xl blur-xl opacity-40 dark:opacity-60 group-hover:opacity-80 dark:group-hover:opacity-100 transition duration-700 animate-pulse-slow"></div>
              
              <div className="relative w-full h-full rounded-2xl bg-white dark:bg-[#0e1424] border-2 border-slate-200 dark:border-white/20 p-2 overflow-hidden shadow-xl">
                <img 
                  src="https://avatars.githubusercontent.com/u/221708366?v=4" 
                  alt="Prashant Kumar Baranwal" 
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-500 filter contrast-105"
                  loading="lazy"
                />
                
                {/* Live Tag Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-2.5 rounded-xl bg-white/90 dark:bg-[#090d16]/90 border border-slate-200 dark:border-white/15 backdrop-blur-md flex items-center justify-between text-xs font-mono shadow-md">
                  <span className="text-slate-900 dark:text-white font-medium">Prashant Kr. Baranwal</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Verified Dev
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row (Dedicated high-contrast icons!) */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-6 w-full">
              <a
                href="https://github.com/Baranwal-Prashant-02"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:-translate-y-0.5 shadow-sm"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/prashant-kr-baranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 shadow-sm"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:baranwalprashant2@gmail.com"
                className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:-translate-y-0.5 shadow-sm"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="tel:+918795007645"
                className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:-translate-y-0.5 shadow-sm"
                title="Call or WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Right: Story & Technical Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20">
              Engineering Philosophy
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Engineering Ideas into Scalable Solutions
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a Computer Science and Engineering graduate from <strong className="text-slate-900 dark:text-white font-semibold">Maharana Pratap Engineering College, Kanpur (affiliated with AKTU)</strong>, passionate about building scalable web applications and solving real-world problems through clean code, modern technologies, and innovative solutions.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              During my <strong className="text-cyan-700 dark:text-cyan-400 font-semibold">Full Stack Web Development Internship at Unified Mentor</strong>, I gained hands-on experience delivering user-facing web features, enforcing robust input validation, and crafting responsive interfaces. My passion lies in engineering systems with real operational complexity-such as my university capstone project, an automated timetable scheduling engine that eliminated ~70% of room and instructor scheduling conflicts.
            </p>

            {/* 4 Technical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Scalable Architecture</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">RESTful APIs, decoupled MERN layers, and relational schema designs.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Constraint Logic</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Algorithms in C++ & Python for combinatorial scheduling and optimization.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Performant UI/UX</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Responsive React 18 interfaces with Tailwind CSS & micro-interactions.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Security & RBAC</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Role-based access control, token authentication, and cybersecurity principles.</p>
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">LOCATION:</span>
                <span className="text-slate-900 dark:text-white font-medium">Noida, UP, India</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">RELOCATION:</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">Open to Remote / Onsite</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">DEGREE:</span>
                <span className="text-slate-900 dark:text-white font-medium">B.Tech CSE (2026)</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
