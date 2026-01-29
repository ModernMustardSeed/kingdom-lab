const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
      {/* Divider */}
      <div className="flex justify-center mb-16">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left — Label + Title */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold mb-6 block">
            The Builder
          </span>
          <h2 className="font-serif italic text-3xl md:text-5xl text-white leading-tight mb-6">
            Building the future,{' '}
            <span className="text-gradient-gold">one seed</span> at a time.
          </h2>
          <div className="w-12 h-px bg-amber-500/30 mb-8" />
        </div>

        {/* Right — Bio */}
        <div className="space-y-6">
          <p className="text-neutral-300 text-base md:text-lg leading-8 font-light">
            I'm Sarah — founder of <span className="text-white font-medium">Modern Mustard Seed</span>,
            an AI-powered innovation studio where faith meets cutting-edge technology. I build
            products that transform how creators work, businesses grow, and people connect with purpose.
          </p>
          <p className="text-neutral-400 text-sm md:text-base leading-7 font-light">
            From enterprise voice AI to immersive generative art, every project in this lab is
            designed to 10x what's possible. I specialize in taking ideas from zero to deployed —
            blending AI, elegant design, and relentless execution.
          </p>
          <p className="text-neutral-400 text-sm md:text-base leading-7 font-light">
            My mission is simple: use the gifts I've been given to build Kingdom-level impact,
            one line of code at a time.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-28">
        {[
          { value: '14+', label: 'Projects Shipped' },
          { value: 'AI', label: 'First Approach' },
          { value: '10x', label: 'Business Impact' },
          { value: 'Faith', label: 'Driven Purpose' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-xl border border-white/[0.04] bg-neutral-950/50 backdrop-blur-sm"
          >
            <div className="text-2xl md:text-3xl font-serif italic text-amber-400 mb-2">
              {stat.value}
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
