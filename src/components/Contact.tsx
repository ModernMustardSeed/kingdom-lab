import { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Kingdom LAB Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:sarah@modernmustardseed.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-6 py-28 md:py-36">
      {/* Divider */}
      <div className="flex justify-center mb-20">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div className="bg-neutral-950/50 backdrop-blur-md border border-white/[0.04] rounded-2xl p-10 md:p-16">
        <div className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-mono font-bold mb-6 block">
            Initiate Collaboration
          </span>
          <h2 className="font-serif italic text-3xl md:text-5xl text-white leading-tight mb-5">
            Let's build something<br className="hidden md:block" /> that matters
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
            Whether it's an AI product, a platform, or a vision that needs engineering —
            the best things get built when the right people connect.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-mono font-bold mb-2.5 block">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3.5 text-white text-sm font-light placeholder:text-white/15 focus:outline-none focus:border-amber-500/30 focus:bg-white/[0.04] transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-mono font-bold mb-2.5 block">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3.5 text-white text-sm font-light placeholder:text-white/15 focus:outline-none focus:border-amber-500/30 focus:bg-white/[0.04] transition-all"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-mono font-bold mb-2.5 block">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3.5 text-white text-sm font-light placeholder:text-white/15 focus:outline-none focus:border-amber-500/30 focus:bg-white/[0.04] transition-all resize-none"
              placeholder="Tell me about what you're building..."
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={submitted}
              className={`group inline-flex items-center gap-3 px-10 py-4 border rounded-full transition-all duration-500 tracking-[0.2em] uppercase text-[10px] font-sans font-bold ${
                submitted
                  ? 'border-green-500/40 bg-green-950/30 text-green-400'
                  : 'border-white/10 hover:border-amber-500/40 bg-transparent hover:bg-amber-950/20 text-white/70 hover:text-white hover:shadow-[0_0_40px_rgba(251,191,36,0.06)]'
              }`}
            >
              <span>{submitted ? 'Opening email client...' : 'Send Message'}</span>
              {!submitted && (
                <svg className="w-3.5 h-3.5 text-amber-400 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-10 pt-8 border-t border-white/[0.03]">
          <p className="text-white/20 text-[10px] font-mono tracking-wider mb-2">Or reach out directly</p>
          <a
            href="mailto:sarah@modernmustardseed.com"
            className="text-amber-500/50 hover:text-amber-400 text-sm transition-colors font-serif italic"
          >
            sarah@modernmustardseed.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
