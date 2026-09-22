/**
 * PRASHANT KUMAR BARANWAL - HIGH-CONVERSION PORTFOLIO CONTROLLER
 * React 18 / Modern Frontend Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initTypewriter();
  initMobileNav();
  initScrollSpy();
  initScrollToTop();
  initInteractiveWidget();
  initProjectFiltering();
  initCopyHandlers();
  initArchitectureModal();
  initContactForm();

  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
});

/* ==========================================================================
   1. Theme Toggle (Dark & Light Mesh Gradient Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const sunIcon = document.getElementById('themeSunIcon');
  const moonIcon = document.getElementById('themeMoonIcon');
  const htmlEl = document.documentElement;

  // Retrieve saved theme or prefer system preference
  const savedTheme = localStorage.getItem('pkb_portfolio_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // default modern dark

  applyTheme(initialTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = htmlEl.classList.contains('dark');
      const nextTheme = isDark ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('pkb_portfolio_theme', nextTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    } else {
      htmlEl.classList.remove('light');
      htmlEl.classList.add('dark');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    }
    if (window.lucide) {
      lucide.createIcons();
    }
  }
}

/* ==========================================================================
   2. Dynamic Typewriter Subtitle
   ========================================================================== */
function initTypewriter() {
  const element = document.getElementById('typewriter');
  if (!element) return;

  const roles = [
    'Full Stack Developer',
    'MERN Stack Specialist',
    'Python & Flask Architect',
    'Constraint Logic & Systems Builder',
    'Pre-Final B.Tech CSE (AKTU)'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 90;

  function tick() {
    const current = roles[roleIdx];

    if (isDeleting) {
      element.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      speed = 35;
    } else {
      element.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      speed = 80;
    }

    if (!isDeleting && charIdx === current.length) {
      speed = 2000; // Pause at finished word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400; // Pause before typing next
    }

    setTimeout(tick, speed);
  }

  tick();
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const openIcon = document.getElementById('menuOpenIcon');
  const closeIcon = document.getElementById('menuCloseIcon');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!mobileBtn || !drawer) return;

  mobileBtn.addEventListener('click', () => {
    const isClosed = drawer.classList.contains('hidden');
    if (isClosed) {
      drawer.classList.remove('hidden');
      if (openIcon) openIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    } else {
      drawer.classList.add('hidden');
      if (openIcon) openIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
      if (openIcon) openIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   4. ScrollSpy & Navigation Tracking
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateSpy() {
    const scrollPos = (window.pageYOffset || document.documentElement.scrollTop) + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateSpy, { passive: true });
  updateSpy();
}

/* ==========================================================================
   5. Floating Scroll To Top Button
   ========================================================================== */
function initScrollToTop() {
  const btn = document.getElementById('scrollToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   6. Interactive Terminal / API Simulator Widget
   ========================================================================== */
function initInteractiveWidget() {
  const tabBtns = document.querySelectorAll('.preview-tab-btn');
  const tabTerminal = document.getElementById('tabContentTerminal');
  const tabApi = document.getElementById('tabContentApi');
  const tabMetrics = document.getElementById('tabContentMetrics');

  const tabMap = {
    terminal: tabTerminal,
    api: tabApi,
    metrics: tabMetrics
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.classList.remove('text-cyan-400', 'font-semibold');
        b.classList.add('text-slate-400');
      });

      btn.classList.add('active', 'text-cyan-400', 'font-semibold');
      btn.classList.remove('text-slate-400');

      Object.keys(tabMap).forEach(key => {
        if (tabMap[key]) {
          if (key === targetTab) {
            tabMap[key].classList.remove('hidden');
          } else {
            tabMap[key].classList.add('hidden');
          }
        }
      });

      if (window.lucide) {
        lucide.createIcons();
      }
    });
  });

  // Interactive quick commands inside the Terminal tab
  const cmdBtns = document.querySelectorAll('.term-quick-cmd');
  const termOutput = document.getElementById('termOutput');

  if (cmdBtns.length > 0 && termOutput) {
    cmdBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        termOutput.classList.remove('hidden');

        if (cmd === 'status') {
          termOutput.innerHTML = `
            <span class="text-emerald-400">✓ System Status:</span> SDE Candidate Ready<br>
            • CGPA / Status: B.Tech CSE (2022-2026), AKTU<br>
            • Internship: Unified Mentor (Completed)<br>
            • Availability: Open to SDE & Full Stack Intern/FTE roles
          `;
        } else if (cmd === 'projects') {
          termOutput.innerHTML = `
            <span class="text-cyan-400">★ 5 Core Architectures:</span><br>
            1. Smart Timetable & Classroom Allocation (MERN + Python)<br>
            2. ATS Resume Checker Pro (React + PDF.js, Live on Vercel)<br>
            3. Driftline Chat App (Node + Socket.io)<br>
            4. Placement Cell Platform (Flask + MySQL)<br>
            5. Complete C++ & DSA Learning Repository
          `;
        } else if (cmd === 'skills') {
          termOutput.innerHTML = `
            <span class="text-purple-400">⚡ Stack Spectrum:</span><br>
            • Frontend: React 18, Tailwind CSS, Responsive UI<br>
            • Backend: Node.js, Express, Python Flask, REST APIs<br>
            • DBs: MongoDB, MySQL, SQLAlchemy, Mongoose<br>
            • CS Core: DSA in C++, OOP, DBMS, OS, Networks
          `;
        }
      });
    });
  }
}

/* ==========================================================================
   7. Project Category Filtering
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. One-Click Copy Handlers & Toast Notifications
   ========================================================================== */
function initCopyHandlers() {
  const heroCopyBtn = document.getElementById('copyEmailHero');
  const copyActionBtns = document.querySelectorAll('.copy-action-btn');

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (e) {
      showToast('Copied: ' + text);
    }
    document.body.removeChild(el);
  }

  if (heroCopyBtn) {
    heroCopyBtn.addEventListener('click', () => {
      const email = heroCopyBtn.getAttribute('data-email');
      copyTextToClipboard(email, 'Email copied to clipboard!');
      const textSpan = document.getElementById('copyEmailHeroText');
      if (textSpan) {
        textSpan.textContent = 'Copied!';
        setTimeout(() => {
          textSpan.textContent = 'Copy Email';
        }, 2000);
      }
    });
  }

  copyActionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      copyTextToClipboard(val, `Copied: ${val}`);
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   9. Architecture Deep Dive Modal
   ========================================================================== */
const projectArchitectureData = {
  timetable: {
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
  },
  ats: {
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
  },
  driftline: {
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
  },
  placement: {
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
};

function initArchitectureModal() {
  const modal = document.getElementById('archModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const dismissBtn = document.getElementById('modalDismissBtn');
  const modalContent = document.getElementById('modalContent');
  const modalGithubBtn = document.getElementById('modalGithubBtn');
  const modalHeaderBadge = document.getElementById('modalHeaderBadge');
  const openBtns = document.querySelectorAll('.open-arch-modal');

  if (!modal || !modalContent) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projKey = btn.getAttribute('data-project');
      const data = projectArchitectureData[projKey];
      if (!data) return;

      if (modalHeaderBadge) {
        modalHeaderBadge.textContent = data.category;
      }

      if (modalGithubBtn) {
        modalGithubBtn.href = data.githubUrl;
      }

      modalContent.innerHTML = `
        <h3 class="font-heading font-bold text-2xl text-white">${data.title}</h3>
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
          <span>${data.metric}</span>
        </div>

        <p class="text-sm text-slate-300 mt-3 leading-relaxed">
          ${data.overview}
        </p>

        <div class="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 mt-4">
          <h4 class="text-xs font-mono font-semibold uppercase text-cyan-400">Architectural Highlights & Engineering Decisions:</h4>
          <ul class="space-y-2 text-xs text-slate-300">
            ${data.highlights.map(h => `<li class="flex items-start gap-2"><span class="text-cyan-400 font-bold">•</span><span>${h}</span></li>`).join('')}
          </ul>
        </div>

        <div class="mt-4">
          <h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies & Libraries:</h4>
          <div class="flex flex-wrap gap-1.5">
            ${data.techStack.map(t => `<span class="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-mono text-xs">${t}</span>`).join('')}
          </div>
        </div>

        ${data.liveUrl ? `
          <div class="pt-3">
            <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <i data-lucide="external-link" class="w-4 h-4"></i>
              <span>Launch Live Deployed App</span>
            </a>
          </div>
        ` : ''}
      `;

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';

      if (window.lucide) {
        lucide.createIcons();
      }
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   10. Contact Form Submission with Mailto Fallback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const submitText = document.getElementById('contactSubmitText');
  const feedback = document.getElementById('contactFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim() || 'Portfolio Technical Inquiry';
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showFeedback('Please fill out all required fields.', 'error');
      return;
    }

    // UI Loading state
    if (submitBtn && submitText) {
      submitBtn.disabled = true;
      submitText.textContent = 'Composing Message...';
    }

    setTimeout(() => {
      showFeedback('✓ Message prepared! Opening your default email client to send to Prashant...', 'success');
      if (submitText) submitText.textContent = 'Message Prepared ✓';

      const mailtoUrl = `mailto:baranwalprashant2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Hi Prashant,\n\nSender: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Prashant's Developer Portfolio`
      )}`;

      window.location.href = mailtoUrl;

      setTimeout(() => {
        form.reset();
        if (submitBtn) submitBtn.disabled = false;
        if (submitText) submitText.textContent = 'Send Message to Prashant';
      }, 3500);
    }, 600);
  });

  function showFeedback(msg, type) {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.classList.remove('hidden', 'bg-red-500/20', 'text-red-300', 'bg-emerald-500/20', 'text-emerald-300', 'border-red-500/30', 'border-emerald-500/30');

    if (type === 'error') {
      feedback.classList.add('bg-red-500/20', 'text-red-300', 'border', 'border-red-500/30');
    } else {
      feedback.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border', 'border-emerald-500/30');
    }

    setTimeout(() => {
      feedback.classList.add('hidden');
    }, 7000);
  }
}
