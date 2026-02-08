const stack = [
  {
    layer: 'Frontend',
    label: 'Pixel-Perfect Taste',
    tools: 'React, Next.js 14/15, TypeScript, Tailwind, Framer Motion, p5.js, Three.js, WebGL',
    description: 'Interfaces that feel alive. The kind of frontend craft where every animation is intentional, every layout breathes, and users don\'t just navigate — they experience.',
  },
  {
    layer: 'Backend',
    label: 'Production Architecture',
    tools: 'Node.js, Supabase, Prisma, PostgreSQL, REST / tRPC, Stripe, Auth Systems, Edge Functions, Serverless, Railway',
    description: 'Databases that scale. APIs that don\'t break. Payment systems, auth flows, and real-time infrastructure — engineered for production from day one, not day ninety.',
  },
  {
    layer: 'AI Systems',
    label: 'Intelligence Layer',
    tools: 'Gemini, GPT-4, Claude, Veo, Imagen, Voice AI, NLP, Computer Vision, RAG Pipelines, Prompt Engineering',
    description: 'Not just calling APIs — building systems that reason, generate, and adapt. From AI video production to voice agents handling live phone calls to intelligent content engines.',
  },
  {
    layer: 'Agentic',
    label: 'Autonomous Orchestration',
    tools: 'Multi-Agent Systems, Trigger.dev, Claude Code, MCP Protocol, Tool Use, Memory Systems, Knowledge Graphs, Event-Driven Architecture',
    description: 'The frontier. AI agents that don\'t just respond — they plan, execute, and iterate autonomously. CRM agents that close deals. Creative agents that produce campaigns. Operations that run themselves.',
  },
];

const disciplines = [
  { name: 'Full-Stack Product Engineering', detail: 'Concept → Architecture → Ship' },
  { name: 'AI & LLM Integration', detail: 'Gemini, GPT-4, Claude, Prompt Engineering' },
  { name: 'Agentic System Design', detail: 'Claude Code, MCP, Tool Use, Memory' },
  { name: 'AI-Native Development', detail: 'Claude Code, Antigravity, Google AI Studio' },
  { name: 'Voice & Conversational AI', detail: 'Telephony, NLU, Real-Time Processing' },
  { name: 'Creative Engineering', detail: 'WebGL, Generative Art, Immersive UI' },
  { name: 'Platform & SaaS Architecture', detail: 'Auth, Billing, Multi-Tenant, Edge' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-28 md:py-40">
      {/* Divider */}
      <div className="flex justify-center mb-20">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
      </div>

      {/* Opening Statement */}
      <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32 bg-neutral-950/50 backdrop-blur-md rounded-3xl border border-white/[0.04] p-6 sm:p-10 md:p-16 shadow-2xl">
        {/* Photo */}
        <div className="mb-10">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-amber-500/20 shadow-[0_0_40px_rgba(245,166,35,0.08)]">
            <img src="/sarah.png" alt="Sarah Scarano" className="w-full h-full object-cover" />
          </div>
        </div>

        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-mono font-bold mb-8 block">
          Sarah Scarano
        </span>
        <h2 className="font-serif italic text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] mb-8 md:mb-10">
          I build <span className="text-gradient-gold">entire products</span> —{' '}
          <br className="hidden md:block" />
          from the pixel to the{' '}
          <span className="text-gradient-gold">autonomous agent</span>.
        </h2>
        <p className="text-neutral-400 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Fullstack engineer. AI systems architect. AI-native builder. 10 live products shipped solo — from pixel-perfect frontends to production backends to autonomous agents. I build with Claude Code, Antigravity, and Google AI Studio, configure MCP infrastructure, and ship what others only prototype.
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-10" />
      </div>

      {/* The Full Stack — Visual Breakdown */}
      <div className="mb-28 md:mb-36">
        <div className="text-center mb-14">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono font-bold">
            The Full Stack
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.03] rounded-2xl overflow-hidden">
          {stack.map((s, i) => (
            <div
              key={s.layer}
              className="group relative p-8 md:p-10 bg-neutral-950/60 backdrop-blur-sm hover:bg-neutral-950/40 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/0 group-hover:via-amber-500/20 group-hover:to-amber-500/0 transition-all duration-700" />

              <div className="flex items-baseline justify-between mb-4">
                <span className="text-[9px] uppercase tracking-[0.3em] text-amber-500/60 font-mono font-bold">
                  {String(i + 1).padStart(2, '0')} — {s.layer}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/15 font-mono">
                  {s.label}
                </span>
              </div>

              <p className="text-neutral-300 text-sm md:text-[15px] leading-7 mb-5 font-light">
                {s.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {s.tools.split(', ').map((tool) => (
                  <span
                    key={tool}
                    className="text-[8px] uppercase tracking-[0.1em] text-amber-400/40 group-hover:text-amber-400/70 font-mono px-2 py-0.5 rounded border border-amber-500/10 group-hover:border-amber-500/20 bg-amber-500/[0.02] transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two-Column: Story + Disciplines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-28 md:mb-36">
        {/* Left Column — The Story */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 bg-neutral-950/50 backdrop-blur-md rounded-2xl border border-white/[0.04] p-5 sm:p-8 md:p-12 shadow-xl">
          <p className="text-neutral-200 text-lg md:text-xl leading-9 font-serif font-light">
            I'm Sarah — founder of <span className="text-white font-medium">Modern Mustard Seed</span>.
            I love building things that actually work — the whole thing, not just one slice. Frontend
            that feels right, backend that holds up, AI that genuinely helps. I care about every layer
            because users experience every layer, and the details matter.
          </p>

          <p className="text-neutral-400 text-base md:text-lg leading-8 font-light">
            What drives me is solving real problems end-to-end. Voice AI that handles actual phone calls
            for businesses. Creative tools that help people produce professional content with AI. Agentic
            systems that take tedious operations off someone's plate. Every product here started with a
            real need — and I stayed with it from first idea through production deployment.
          </p>

          <p className="text-neutral-400 text-base md:text-lg leading-8 font-light">
            I build with <em className="text-amber-200/80 not-italic font-medium">taste</em> at the frontend,{' '}
            <em className="text-amber-200/80 not-italic font-medium">rigor</em> at the backend, and{' '}
            <em className="text-amber-200/80 not-italic font-medium">vision</em> at the AI layer. I think in
            systems, I design for humans, and I engineer for scale. When you bring me onto a team, you're not
            filling a role — you're adding a force multiplier who can operate anywhere in the stack and ship
            production-grade work at every layer.
          </p>

          <div className="pt-6">
            <blockquote className="border-l-2 border-amber-500/30 pl-6">
              <p className="text-amber-200/70 font-serif italic text-lg md:text-xl leading-relaxed">
                "Whatever you do, work at it with all your heart, as working for the Lord."
              </p>
              <cite className="text-[10px] uppercase tracking-[0.3em] text-amber-500/50 font-mono font-bold mt-3 block not-italic">
                Colossians 3:23
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Right Column — Disciplines & Signal */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 bg-neutral-950/50 backdrop-blur-md rounded-2xl border border-white/[0.04] p-5 sm:p-8 md:p-10 shadow-xl">
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono font-bold mb-6 block">
              Core Disciplines
            </span>

            <div className="space-y-0">
              {disciplines.map((d, i) => (
                <div
                  key={d.name}
                  className="group py-5 border-b border-white/[0.04] hover:border-amber-500/20 transition-colors duration-300"
                >
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-white/80 group-hover:text-white text-sm md:text-base font-sans font-semibold tracking-wide transition-colors">
                      {d.name}
                    </h4>
                    <span className="text-[9px] text-white/15 font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/25 group-hover:text-amber-400/50 mt-1.5 font-mono tracking-wide transition-colors">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Signal */}
            <div className="mt-10 p-6 rounded-xl border border-white/[0.04] bg-neutral-950/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-mono font-bold">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-white/40 text-xs leading-5 font-light">
                Looking for teams building at scale — AI products, complex platforms, and
                ambitious technical challenges. If you're doing big things and need a fullstack
                engineer who can own the entire surface area, let's talk.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.03] rounded-2xl overflow-hidden">
        {[
          { value: '10', label: 'Products Live', sublabel: 'Solo — built & deployed' },
          { value: '4 Layers', label: 'Deep', sublabel: 'Frontend → Backend → AI → Agentic' },
          { value: 'Solo', label: 'Shipped', sublabel: 'Full product ownership' },
          { value: '0 → Prod', label: 'Velocity', sublabel: 'Idea to deployed product' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-5 sm:p-8 md:p-10 bg-neutral-950/60 backdrop-blur-sm"
          >
            <div className="text-2xl md:text-3xl font-sans font-extrabold text-gradient-gold mb-2">
              {stat.value}
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-sans font-semibold mb-1">
              {stat.label}
            </div>
            <div className="text-[9px] text-white/20 font-mono tracking-wider">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
