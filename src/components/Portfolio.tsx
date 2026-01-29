import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 7,
    title: "Voice Staff",
    description: "Enterprise-grade AI voice assistants for staffing and customer engagement. Scaling human connection with artificial intelligence.",
    tags: ["Voice AI", "Staffing", "Automation"],
    link: "https://voicestaff.pro/",
    category: "AI Products",
    featured: true,
  },
  {
    id: 15,
    title: "Aurora Nexus",
    description: "An ethereal network visualization system. Watch data flow through a mesmerizing, interactive aurora borealis simulation.",
    tags: ["Data Visualization", "WebGL", "Interactive System"],
    link: "https://copy-of-aurora-nexus-1086061899824.us-west1.run.app",
    category: "Creative Tech",
  },
  {
    id: 14,
    title: "World 1-1",
    description: "An immersive 3D exploration of the iconic World 1-1. Reimagining classic level design through a modern, interactive spatial interface.",
    tags: ["3D Environment", "Interactive", "Game Design"],
    link: "https://world-1-1-1086061899824.us-west1.run.app",
    category: "Creative Tech",
  },
  {
    id: 11,
    title: "Go Max Freedom Ecosystem",
    description: "A comprehensive platform architecture engineered for maximum operational freedom. Unifying complex business processes into a seamless, high-performance ecosystem.",
    tags: ["Platform Architecture", "Ecosystem", "High Performance"],
    link: "https://go-max-freedom-ecosystem-1086061899824.us-west1.run.app",
    category: "Business Tools",
  },
  {
    id: 1,
    title: "Ocean Flow Field",
    description: "An immersive generative simulation of oceanic currents. Visualizing fluid dynamics through high-performance particle flow fields.",
    tags: ["Generative Art", "Flow Field", "Interactive Physics"],
    link: "https://ocean-flow-field-1086061899824.us-west1.run.app",
    category: "Creative Tech",
  },
  {
    id: 2,
    title: "Luxe Design",
    description: "High-performance virtual staging and interior design AI. Transform empty spaces into furnished masterpieces instantly.",
    tags: ["Generative AI", "Interior Design", "Virtual Staging"],
    link: "https://luxe-design-1086061899824.us-west1.run.app",
    category: "AI Products",
  },
  {
    id: 12,
    title: "The Daily Seed",
    description: "A daily devotional application designed to nurture spiritual growth. Delivering curated inspiration through a serene and modern digital interface.",
    tags: ["Faith Tech", "Daily Inspiration", "Mobile App"],
    link: "https://the-daily-seed-1086061899824.us-west1.run.app",
    category: "Faith Tech",
  },
  {
    id: 10,
    title: "Chrono Navigator",
    description: "A precision temporal interface for exploring historical timelines. Navigate through eras with fluid, interactive chronological visualization.",
    tags: ["Temporal Visualization", "EdTech", "Interactive Timeline"],
    link: "https://chrono-navigator-1086061899824.us-west1.run.app",
    category: "Creative Tech",
  },
  {
    id: 3,
    title: "Opus Lead Gen Engine",
    description: "High-performance lead generation dashboard for identifying ICPs and generating business leads.",
    tags: ["Lead Generation", "Dashboard", "B2B Intelligence"],
    link: "https://opus-leadgen-engine-1086061899824.us-west1.run.app",
    category: "Business Tools",
  },
  {
    id: 4,
    title: "AS IF AI",
    description: "A professional AI styling atelier and wardrobe curator powered by Gemini. App design inspired by the movie Clueless and the closet of Cher Horowitz.",
    tags: ["AI Styling", "Fashion Tech", "Gemini"],
    link: "https://as-if-ai-1086061899824.us-west1.run.app",
    category: "AI Products",
  },
  {
    id: 5,
    title: "The Ledger",
    description: "An Agentic CRM and Sales System designed for automated pipeline management and intelligent customer interactions.",
    tags: ["Agentic AI", "CRM", "Sales Automation"],
    link: "https://the-ledger-agentic-crm-1086061899824.us-west1.run.app/",
    category: "Business Tools",
  },
  {
    id: 6,
    title: "Dreamscape Ribbons",
    description: "Beautiful & ethereal design. An immersive digital art experience featuring fluid, interactive visual elements.",
    tags: ["Generative Art", "WebGL", "Interactive Design"],
    link: "https://dreamscape-ribbons-1086061899824.us-west1.run.app",
    category: "Creative Tech",
  },
  {
    id: 8,
    title: "Vortex AI",
    description: "A dynamic intelligence system visualizing complex data streams through an immersive, high-performance interface.",
    tags: ["Data Visualization", "AI Core", "Real-time Analytics"],
    link: "https://vortex-ai-1086061899824.us-west1.run.app",
    category: "AI Products",
  },
  {
    id: 9,
    title: "PAC Maze",
    description: "A gamified exploration of professional works. Navigate a digital labyrinth to uncover milestones in an interactive environment.",
    tags: ["Interactive Experience", "Gamification", "Web Design"],
    link: "https://pac-sarah-portfolio-maze-1086061899824.us-west1.run.app",
    category: "Creative Tech",
  },
];

const categories = ['All', 'AI Products', 'Business Tools', 'Creative Tech', 'Faith Tech'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Hero Scripture */}
      <header className="mb-20 md:mb-28 text-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-20 bg-neutral-900/60 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/[0.06] shadow-2xl mx-auto max-w-3xl">
          <span className="text-[10px] md:text-xs text-amber-500 font-bold tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            Matthew 6:33
          </span>
          <p className="text-white font-serif italic text-lg md:text-2xl font-light tracking-wide opacity-90 max-w-2xl leading-relaxed">
            "But seek first the kingdom of God and his righteousness, and all these things will be added to you."
          </p>
        </div>

        <h1 className="font-sans text-5xl md:text-7xl font-extralight tracking-[0.3em] md:tracking-[0.4em] text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-6">
          LAB
        </h1>
        <p className="text-white/40 text-sm md:text-base font-light tracking-wider max-w-xl mx-auto">
          A curated collection of AI-powered products, immersive experiences, and business tools — built with faith and precision.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium rounded-full border transition-all duration-300 ${
              activeFilter === cat
                ? 'border-amber-500/60 bg-amber-500/10 text-amber-400'
                : 'border-white/10 bg-transparent text-white/40 hover:border-white/20 hover:text-white/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
        {filtered.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block p-8 md:p-10 rounded-xl border bg-neutral-950/70 hover:bg-neutral-900/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 shadow-lg shadow-black/40 overflow-hidden
              ${project.featured
                ? 'md:col-span-2 border-amber-500/30 hover:border-amber-400/60 shadow-amber-900/10'
                : 'border-white/[0.06] hover:border-amber-500/30'
              }
            `}
          >
            {/* Hover glow */}
            <div className={`absolute top-0 right-0 -mr-32 -mt-32 w-80 h-80 rounded-full blur-[80px] transition-opacity duration-1000 pointer-events-none ${
              project.featured ? 'bg-amber-500/20 opacity-30 group-hover:opacity-100' : 'bg-amber-500/10 opacity-0 group-hover:opacity-60'
            }`} />

            {project.featured && (
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-5">
                <div className="flex flex-col gap-1.5">
                  {project.featured && (
                    <span className="text-[9px] uppercase tracking-[0.35em] text-amber-500 font-bold">
                      Flagship Venture
                    </span>
                  )}
                  <h3 className={`font-serif italic text-white group-hover:text-amber-100 transition-colors duration-500 ${
                    project.featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
                  }`}>
                    {project.title}
                  </h3>
                </div>
                <span className="text-white/30 group-hover:text-amber-500 transition-all text-xs opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-500 font-bold tracking-[0.2em] mt-2 flex items-center gap-1">
                  OPEN
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </div>

              <p className={`text-neutral-400 leading-7 mb-8 flex-grow font-light border-l border-white/[0.06] pl-4 ${
                project.featured ? 'text-base md:text-lg max-w-3xl' : 'text-sm md:text-base'
              }`}>
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-auto pt-5 border-t border-white/[0.06] group-hover:border-white/10 transition-colors duration-500">
                <span className="text-[9px] uppercase tracking-[0.2em] text-amber-500/60 font-medium">
                  {project.category}
                </span>
                <span className="text-white/10">|</span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`uppercase tracking-[0.15em] text-neutral-500 group-hover:text-amber-200/60 transition-colors duration-300 font-medium ${
                      project.featured ? 'text-[10px]' : 'text-[9px]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
