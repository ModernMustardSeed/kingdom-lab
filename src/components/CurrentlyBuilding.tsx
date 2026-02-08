const activeProjects = [
  {
    name: 'Ignition',
    description: 'Idea-to-Income Agentic Swarm — a multi-agent system that takes a raw idea and autonomously builds the business plan, landing page, and go-to-market strategy.',
    tech: 'Next.js 14, Prisma, Trigger.dev, Gemini',
    status: 'In Development',
  },
  {
    name: 'Wild Daisy Command Center',
    description: 'Agentic operations hub — a centralized dashboard for orchestrating AI agents across all Modern Mustard Seed products, with scheduled tasks and real-time monitoring.',
    tech: 'Next.js 16, Trigger.dev, Multi-Agent',
    status: 'In Development',
  },
  {
    name: 'Video Pipeline',
    description: 'Evaluating Higgsfield and VideoGen APIs for an automated AI video production pipeline — from script to rendered video with zero manual editing.',
    tech: 'Video AI APIs, Automation',
    status: 'Research',
  },
];

const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 md:py-28">
      {/* Divider */}
      <div className="flex justify-center mb-16">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div className="text-center mb-12 bg-neutral-950/50 backdrop-blur-md rounded-2xl border border-white/[0.04] p-8 md:p-10 shadow-xl max-w-xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-mono font-bold mb-4 block">
          What I'm Building Now
        </span>
        <p className="text-white/30 text-sm font-light max-w-lg mx-auto">
          Always shipping. Here's what's on the workbench right now.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.03] rounded-2xl overflow-hidden">
        {activeProjects.map((project) => (
          <div
            key={project.name}
            className="group p-7 md:p-8 bg-neutral-950/60 backdrop-blur-sm hover:bg-neutral-950/40 transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/80 group-hover:text-white text-sm font-sans font-bold tracking-wide transition-colors">
                {project.name}
              </h3>
              <span className={`text-[7px] uppercase tracking-[0.2em] font-mono font-bold px-2 py-0.5 rounded-full border ${
                project.status === 'Research'
                  ? 'text-blue-400/60 border-blue-500/20 bg-blue-500/[0.05]'
                  : 'text-amber-400/60 border-amber-500/20 bg-amber-500/[0.05]'
              }`}>
                {project.status}
              </span>
            </div>

            <p className="text-white/30 text-xs leading-5 font-light mb-4">
              {project.description}
            </p>

            <span className="text-[8px] uppercase tracking-[0.15em] text-amber-500/30 group-hover:text-amber-500/50 font-mono transition-colors">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
