import { useState, useEffect, useCallback } from 'react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  tags: string[];
  link: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 7,
    title: "Voice Staff",
    subtitle: "Enterprise Voice Intelligence",
    description: "Enterprise-grade AI voice assistants engineered for staffing and customer engagement. Scaling human connection through conversational AI that listens, learns, and responds with precision.",
    skills: ["Natural Language Processing", "Voice Synthesis", "Conversational AI", "Real-Time Processing", "Telephony APIs"],
    tags: ["Voice AI", "Staffing", "Automation"],
    link: "",
    category: "AI Products",
    featured: true,
  },
  {
    id: 15,
    title: "Aurora Nexus",
    subtitle: "Network Visualization System",
    description: "An ethereal network visualization system. Data flows through a mesmerizing, interactive aurora borealis simulation — revealing hidden connections in real time.",
    skills: ["WebGL", "Shader Programming", "Network Graphs", "Real-Time Rendering", "Interactive Animation"],
    tags: ["Data Visualization", "WebGL", "Interactive System"],
    link: "",
    category: "Creative Tech",
  },
  {
    id: 14,
    title: "World 1-1",
    subtitle: "3D Spatial Experience",
    description: "An immersive 3D exploration of the iconic World 1-1. Reimagining classic level design through modern spatial computing and interactive 3D environments.",
    skills: ["Three.js", "3D Modeling", "Spatial Computing", "Physics Simulation", "Level Design"],
    tags: ["3D Environment", "Interactive", "Game Design"],
    link: "",
    category: "Creative Tech",
  },
  {
    id: 11,
    title: "Go Max Freedom",
    subtitle: "Enterprise Platform Architecture",
    description: "A comprehensive platform architecture engineered for maximum operational freedom. Unifying complex business processes into a seamless, high-performance ecosystem built to scale.",
    skills: ["System Architecture", "Microservices", "API Design", "Database Design", "DevOps"],
    tags: ["Platform Architecture", "Ecosystem", "High Performance"],
    link: "",
    category: "Business Tools",
  },
  {
    id: 1,
    title: "Ocean Flow Field",
    subtitle: "Generative Fluid Dynamics",
    description: "An immersive generative simulation of oceanic currents. High-performance particle flow fields visualize the mathematics of fluid dynamics in real time.",
    skills: ["Generative Algorithms", "Particle Systems", "Flow Field Math", "Canvas API", "Performance Optimization"],
    tags: ["Generative Art", "Flow Field", "Interactive Physics"],
    link: "",
    category: "Creative Tech",
  },
  {
    id: 2,
    title: "Luxe Design",
    subtitle: "AI Interior Design Engine",
    description: "High-performance virtual staging and interior design powered by generative AI. Transform empty spaces into furnished masterpieces in seconds, not weeks.",
    skills: ["Generative AI", "Image Processing", "Prompt Engineering", "Computer Vision", "UX Design"],
    tags: ["Generative AI", "Interior Design", "Virtual Staging"],
    link: "",
    category: "AI Products",
  },
  {
    id: 12,
    title: "The Daily Seed",
    subtitle: "Digital Devotional Platform",
    description: "A daily devotional application designed to nurture spiritual growth. Curated inspiration delivered through a serene, modern interface that meets you where you are.",
    skills: ["Content Systems", "Push Notifications", "Mobile-First Design", "Personalization AI", "Scripture APIs"],
    tags: ["Faith Tech", "Daily Inspiration", "Mobile App"],
    link: "",
    category: "Faith Tech",
  },
  {
    id: 10,
    title: "Chrono Navigator",
    subtitle: "Temporal Exploration Interface",
    description: "A precision temporal interface for exploring historical timelines. Navigate through eras with fluid, interactive chronological visualization that makes history tangible.",
    skills: ["Data Visualization", "Timeline Algorithms", "Interactive UI", "Historical Data APIs", "D3.js"],
    tags: ["Temporal Visualization", "EdTech", "Interactive Timeline"],
    link: "",
    category: "Creative Tech",
  },
  {
    id: 3,
    title: "Opus Lead Gen",
    subtitle: "B2B Intelligence Dashboard",
    description: "High-performance lead generation engine for identifying ideal customer profiles and generating qualified business leads through AI-powered intelligence gathering.",
    skills: ["Machine Learning", "Data Scraping", "Lead Scoring", "Dashboard Design", "CRM Integration"],
    tags: ["Lead Generation", "Dashboard", "B2B Intelligence"],
    link: "",
    category: "Business Tools",
  },
  {
    id: 4,
    title: "AS IF AI",
    subtitle: "AI Fashion Atelier",
    description: "A professional AI styling atelier and wardrobe curator powered by Gemini. Inspired by the iconic closet of Cher Horowitz — reimagined for the AI era.",
    skills: ["Gemini API", "Fashion Classification", "Image Generation", "Style Matching", "Recommendation Engine"],
    tags: ["AI Styling", "Fashion Tech", "Gemini"],
    link: "",
    category: "AI Products",
  },
  {
    id: 5,
    title: "The Ledger",
    subtitle: "Agentic CRM & Sales System",
    description: "An Agentic CRM and Sales System designed for automated pipeline management. AI agents handle customer interactions, follow-ups, and deal progression autonomously.",
    skills: ["Agentic AI", "Pipeline Automation", "Multi-Agent Systems", "Sales Analytics", "Workflow Orchestration"],
    tags: ["Agentic AI", "CRM", "Sales Automation"],
    link: "",
    category: "Business Tools",
  },
  {
    id: 6,
    title: "Dreamscape Ribbons",
    subtitle: "Immersive Digital Art",
    description: "An immersive digital art experience. Fluid, ethereal ribbon forms dance through space — responding to your presence with beauty that feels alive.",
    skills: ["WebGL Shaders", "GPU Computing", "Procedural Animation", "Creative Coding", "Interaction Design"],
    tags: ["Generative Art", "WebGL", "Interactive Design"],
    link: "",
    category: "Creative Tech",
  },
  {
    id: 8,
    title: "Vortex AI",
    subtitle: "Real-Time Intelligence System",
    description: "A dynamic intelligence system visualizing complex data streams through an immersive, high-performance interface. Where raw data becomes strategic insight.",
    skills: ["Real-Time Analytics", "Stream Processing", "Data Pipelines", "AI Inference", "Dashboard Architecture"],
    tags: ["Data Visualization", "AI Core", "Real-time Analytics"],
    link: "",
    category: "AI Products",
  },
  {
    id: 9,
    title: "PAC Maze",
    subtitle: "Gamified Portfolio Experience",
    description: "A gamified exploration of professional works. Navigate a digital labyrinth to uncover milestones — turning the portfolio experience into an interactive adventure.",
    skills: ["Game Development", "Pathfinding Algorithms", "Sprite Animation", "State Machines", "Level Design"],
    tags: ["Interactive Experience", "Gamification", "Web Design"],
    link: "",
    category: "Creative Tech",
  },
];

const categories = ['All', 'AI Products', 'Business Tools', 'Creative Tech', 'Faith Tech'];

const ProjectCard: React.FC<{ project: Project; className?: string }> = ({ project, className = '' }) => {
  const isLive = project.link !== '';

  const Wrapper = isLive ? 'a' : 'div';
  const wrapperProps = isLive
    ? { href: project.link, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative block p-10 md:p-14 transition-all duration-500 hover:bg-white/[0.02] overflow-hidden ${
        isLive ? 'cursor-pointer' : 'cursor-default'
      } ${className}`}
    >
      {/* Hover ambient glow */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full blur-[100px] bg-amber-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full min-h-[420px]">
        {/* Top: Category + Issue marker */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-[9px] uppercase tracking-[0.3em] text-amber-500/50 font-mono font-bold">
            {project.category}
          </span>
          <div className="flex items-center gap-3">
            {!isLive && (
              <span className="text-[8px] uppercase tracking-[0.2em] text-amber-500/40 font-mono font-bold px-2.5 py-1 rounded-full border border-amber-500/15 bg-amber-500/[0.04]">
                Coming Soon
              </span>
            )}
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/15 font-mono">
              No. {String(project.id).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Title Block */}
        <div className="mb-8">
          <h3 className={`font-serif italic text-4xl md:text-5xl transition-colors duration-500 mb-2 leading-[1.1] ${
            isLive ? 'text-white group-hover:text-amber-100' : 'text-white/70'
          }`}>
            {project.title}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/25 font-sans font-medium mt-3">
            {project.subtitle}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-amber-500/20 via-white/[0.06] to-transparent mb-8" />

        {/* Description */}
        <p className="text-neutral-400 text-sm md:text-[15px] leading-7 mb-8 flex-grow font-light">
          {project.description}
        </p>

        {/* Skills */}
        <div className="mb-6">
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/20 font-mono block mb-3">Technical Stack</span>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="skill-pill border-amber-500/15 text-amber-400/60 bg-amber-500/[0.04] group-hover:border-amber-500/30 group-hover:text-amber-300/80 group-hover:bg-amber-500/[0.08]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-6 border-t border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[9px] uppercase tracking-[0.15em] text-white/20 group-hover:text-white/35 transition-colors font-medium">
                {tag}
              </span>
            ))}
          </div>
          {isLive ? (
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20 group-hover:text-amber-400 transition-all duration-500 font-sans font-bold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
              Explore
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          ) : (
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/15 font-mono">
              Deploying
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const ITEMS_PER_PAGE = 2;

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentProjects = filtered.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(0);
    setIsFlipping(false);
  }, [activeFilter]);

  const flipTo = useCallback((direction: 'next' | 'prev') => {
    if (isFlipping) return;
    const target = direction === 'next' ? currentPage + 1 : currentPage - 1;
    if (target < 0 || target >= totalPages) return;
    setFlipDirection(direction);
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(target);
      setTimeout(() => setIsFlipping(false), 50);
    }, 300);
  }, [isFlipping, currentPage, totalPages]);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Hero */}
      <header className="mb-20 md:mb-28 text-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-5 mb-20 bg-neutral-950/50 backdrop-blur-md p-8 md:p-14 rounded-2xl border border-white/[0.04] shadow-2xl mx-auto max-w-3xl">
          <span className="text-[10px] md:text-xs text-amber-500 font-bold tracking-[0.4em] uppercase font-mono drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            Matthew 6:33
          </span>
          <p className="text-white font-serif italic text-xl md:text-3xl font-light tracking-wide opacity-90 max-w-2xl leading-relaxed">
            "But seek first the kingdom of God and his righteousness, and all these things will be added to you."
          </p>
        </div>

        <div className="mb-8">
          <span className="text-[10px] tracking-[0.5em] uppercase text-amber-500/60 font-mono font-bold">Modern Mustard Seed Presents</span>
        </div>
        <h1 className="font-sans text-6xl md:text-8xl font-extrabold tracking-tight text-white uppercase mb-4">
          <span className="text-gradient-gold">Kingdom</span>{' '}
          <span className="font-extralight text-white/80">LAB</span>
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mb-6" />
        <p className="text-white/35 text-sm md:text-base font-light tracking-wider max-w-2xl mx-auto leading-relaxed">
          A curated portfolio of AI-powered products, immersive experiences, and business systems — each one built with faith, precision, and the audacity to ship what others only dream about.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14 md:mb-20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans font-semibold rounded-full border transition-all duration-300 ${
              activeFilter === cat
                ? 'border-amber-500/50 bg-amber-500/10 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.08)]'
                : 'border-white/[0.06] bg-transparent text-white/35 hover:border-white/15 hover:text-white/55'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Magazine Spread */}
      <div className="magazine-spread">
        {/* Page Counter */}
        <div className="flex items-center justify-between mb-8 px-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-mono">
            Issue No. {String(currentPage + 1).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/25 font-mono">
              {currentPage + 1} / {totalPages}
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-mono">
            {activeFilter === 'All' ? 'Full Collection' : activeFilter}
          </span>
        </div>

        {/* The Spread */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.04] bg-neutral-950/40 backdrop-blur-sm shadow-2xl transition-all duration-500 ${
            isFlipping
              ? flipDirection === 'next'
                ? 'opacity-0 translate-x-[-40px] scale-[0.98]'
                : 'opacity-0 translate-x-[40px] scale-[0.98]'
              : 'opacity-100 translate-x-0 scale-100'
          }`}
        >
          {currentProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={idx === 0 && currentProjects.length > 1 ? 'lg:border-r border-white/[0.04]' : ''}
            />
          ))}
        </div>

        {/* Page Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => flipTo('prev')}
            disabled={currentPage === 0}
            className={`group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
              currentPage === 0
                ? 'border-white/[0.03] text-white/10 cursor-not-allowed'
                : 'border-white/10 text-white/40 hover:border-amber-500/30 hover:text-amber-400'
            }`}
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold">Prev</span>
          </button>

          {/* Page dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === currentPage) return;
                  setFlipDirection(i > currentPage ? 'next' : 'prev');
                  setIsFlipping(true);
                  setTimeout(() => {
                    setCurrentPage(i);
                    setTimeout(() => setIsFlipping(false), 50);
                  }, 300);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? 'bg-amber-500/60 w-6'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => flipTo('next')}
            disabled={currentPage >= totalPages - 1}
            className={`group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
              currentPage >= totalPages - 1
                ? 'border-white/[0.03] text-white/10 cursor-not-allowed'
                : 'border-white/10 text-white/40 hover:border-amber-500/30 hover:text-amber-400'
            }`}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold">Next</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
