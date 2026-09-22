import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Send, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onCopyText: (text: string, label: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyText }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({ msg: 'Please complete all required fields.', type: 'error' });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setFeedback({
        msg: '✓ Message prepared! Opening your default email client to send to Prashant...',
        type: 'success',
      });

      const mailtoUrl = `mailto:baranwalprashant2@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Technical Inquiry'
      )}&body=${encodeURIComponent(
        `Hi Prashant,\n\nSender: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from Prashant's Developer Portfolio`
      )}`;

      window.location.href = mailtoUrl;

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitting(false);
      }, 3500);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-gradient-to-b dark:from-[#080c17]/50 dark:via-[#0c1224] dark:to-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/20">
            Direct Channel
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3">
            Let's Connect & Build
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Available for SDE, Full Stack, and Frontend Engineer positions. Send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Cards (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-between backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-semibold">DIRECT EMAIL</span>
                  <a href="mailto:baranwalprashant2@gmail.com" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    baranwalprashant2@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => onCopyText('baranwalprashant2@gmail.com', 'Email')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 border border-slate-200 dark:border-white/10 transition-colors"
                title="Copy Email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-between backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-semibold">PHONE & WHATSAPP</span>
                  <a href="tel:+918795007645" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    +91 8795007645
                  </a>
                </div>
              </div>
              <button
                onClick={() => onCopyText('+918795007645', 'Phone')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-emerald-50 dark:hover:bg-emerald-500/20 text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200 dark:border-white/10 transition-colors"
                title="Copy Phone"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-semibold">LOCATION & AVAILABILITY</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Kanpur, Uttar Pradesh, India</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Timezone: IST (UTC +5:30) • Open to Remote & Relocation</p>
                </div>
              </div>
            </div>

            {/* Networks Panel */}
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none space-y-3">
              <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Professional Networks
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/prashant-kr-baranwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-600/20 border border-slate-200 dark:border-white/5 text-xs font-mono text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    linkedin.com/in/prashant-kr-baranwal
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Baranwal-Prashant-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 text-xs font-mono text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    github.com/Baranwal-Prashant-02
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none">
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Submit your details below to compose an inquiry directly to Prashant.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cName" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="cName"
                      required
                      placeholder="Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="cEmail" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="cEmail"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cSubject" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="cSubject"
                    placeholder="SDE Role / Capstone Architecture Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="cMsg" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="cMsg"
                    rows={4}
                    required
                    placeholder="Hi Prashant, I reviewed your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Composing Message...' : 'Send Message to Prashant'}</span>
                </button>

                {feedback && (
                  <div className={`p-3 rounded-xl text-xs font-mono ${
                    feedback.type === 'error'
                      ? 'bg-red-50 dark:bg-red-500/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-500/30'
                      : 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30'
                  }`}>
                    {feedback.msg}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
