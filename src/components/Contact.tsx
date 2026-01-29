import { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto as fallback — can be replaced with API endpoint later
    const subject = encodeURIComponent(`Kingdom LAB Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:sarah@modernmustardseed.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
      {/* Divider */}
      <div className="flex justify-center mb-16">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div className="bg-neutral-950/60 backdrop-blur-md border border-white/[0.06] rounded-2xl p-8 md:p-14">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold mb-4 block">
            Initiate Collaboration
          </span>
          <h2 className="font-serif italic text-2xl md:text-4xl text-white leading-tight mb-4">
            Let's bring your ideas to life
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-lg mx-auto">
            Whether you need an AI product built, a platform designed, or a business automated —
            I'd love to work with you to <span className="text-amber-200">10x your vision</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-neutral-900/80 border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-neutral-900/80 border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-2 block">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-neutral-900/80 border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={submitted}
              className={`group inline-flex items-center gap-3 px-10 py-4 border rounded-full transition-all duration-500 tracking-[0.2em] uppercase text-[10px] font-bold ${
                submitted
                  ? 'border-green-500/50 bg-green-950/40 text-green-400'
                  : 'border-white/15 hover:border-amber-500/50 bg-neutral-950/80 hover:bg-amber-950/30 text-white hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]'
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

        {/* Direct email fallback */}
        <div className="text-center mt-8 pt-6 border-t border-white/[0.04]">
          <p className="text-white/30 text-xs mb-2">Or reach out directly</p>
          <a
            href="mailto:sarah@modernmustardseed.com"
            className="text-amber-500/70 hover:text-amber-400 text-sm transition-colors font-light"
          >
            sarah@modernmustardseed.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
