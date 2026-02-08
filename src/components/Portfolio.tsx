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
    id: 0,
    title: "Modern Mustard Seed",
    subtitle: "The Mission & The Machine",
    description: "The flagship. Modern Mustard Seed is the studio, the brand, and the mission behind every product in this portfolio. Faith-driven AI engineering — building tools that serve people, scale businesses, and plant seeds that outlast the algorithm.",
    skills: ["Next.js", "AI Engineering", "Brand Strategy", "Product Studio", "Full-Stack Platform"],
    tags: ["Flagship", "Studio", "Mission"],
    link: "https://modernmustardseed.com/",
    category: "AI Products",
    featured: true,
  },
  {
    id: 1,
    title: "Make Me Studio",
    subtitle: "10K Agency in a Box",
    description: "A full-service AI creative studio that puts an entire agency at your fingertips. Generate professional video, imagery, and brand content powered by Gemini, Veo, and Imagen — from concept to delivery.",
    skills: ["Next.js 15", "Supabase", "Stripe", "Gemini API", "Veo / Imagen"],
    tags: ["AI Studio", "Content Creation", "SaaS"],
    link: "https://make-me-studio-v2.vercel.app/",
    category: "AI Products",
  },
  {
    id: 2,
    title: "Voice Staff",
    subtitle: "Enterprise Voice Intelligence",
    description: "Enterprise-grade AI voice assistants engineered for staffing and customer engagement. Scaling human connection through conversational AI that listens, learns, and responds with precision.",
    skills: ["Voice Synthesis", "Conversational AI", "Real-Time Processing", "Telephony APIs", "HubSpot"],
    tags: ["Voice AI", "Staffing", "Automation"],
    link: "https://voicekitmodernmustardseedcom.vercel.app/",
    category: "AI Products",
  },
  {
    id: 3,
    title: "Luxe Design",
    subtitle: "AI Interior Design Engine",
    description: "High-performance virtual staging and interior design powered by generative AI. Transform empty spaces into furnished masterpieces in seconds, not weeks.",
    skills: ["Generative AI", "Image Processing", "Prompt Engineering", "Computer Vision", "UX Design"],
    tags: ["Generative AI", "Interior Design", "Virtual Staging"],
    link: "https://luxedesign-five.vercel.app/",
    category: "AI Products",
  },
  {
    id: 4,
    title: "UGC Studio",
    subtitle: "AI Creative Strategist",
    description: "An AI-powered creative strategist that transforms raw ideas into scroll-stopping UGC content. Built to think like a creative director and execute like a production team.",
    skills: ["Next.js", "AI Strategy", "Content Intelligence", "Creative Automation", "Brand Analysis"],
    tags: ["Creative AI", "UGC", "Strategy"],
    link: "https://studio-secret.vercel.app/",
    category: "Creative Tech",
  },
  {
    id: 5,
    title: "Elite Opportunity Finder",
    subtitle: "Lead & Opportunity Discovery",
    description: "An intelligent lead discovery engine that surfaces high-value opportunities from noise. AI-powered filtering and scoring to find the deals that actually matter.",
    skills: ["React", "Supabase", "Lead Scoring", "Data Pipelines", "Search Algorithms"],
    tags: ["Lead Gen", "Discovery", "B2B Intelligence"],
    link: "https://elite-opportunity-finder.vercel.app/",
    category: "Business Tools",
  },
  {
    id: 6,
    title: "What Next",
    subtitle: "Decision Engine",
    description: "A decision intelligence platform that cuts through analysis paralysis. Input your context, constraints, and goals — and let AI map the clearest path forward.",
    skills: ["Supabase", "Decision Trees", "AI Reasoning", "Data Modeling", "Responsive UI"],
    tags: ["Decision AI", "Productivity", "Intelligence"],
    link: "https://what-next-ruddy.vercel.app/",
    category: "Business Tools",
  },
  {
    id: 7,
    title: "Cross Covenant",
    subtitle: "Ethereal UI Experience",
    description: "An immersive, ethereal web experience exploring the intersection of faith and technology. Where sacred narrative meets modern design in a transcendent digital space.",
    skills: ["Next.js", "Creative Coding", "Animation Design", "Immersive UI", "Storytelling"],
    tags: ["Faith Tech", "Immersive", "Creative"],
    link: "https://cross-covenant-mnep253ut-sarah-7990s-projects.vercel.app/",
    category: "Faith Tech",
  },
  {
    id: 8,
    title: "Ignition",
    subtitle: "Idea-to-Income Agentic Swarm",
    description: "A multi-agent AI system that takes a raw idea and autonomously builds the business plan, landing page, and go-to-market strategy. From spark to launch — orchestrated by agents, powered by AI.",
    skills: ["Next.js 14", "Prisma", "Trigger.dev", "Gemini API", "Multi-Agent Systems"],
    tags: ["Agentic AI", "Automation", "SaaS"],
    link: "https://ignition-kappa.vercel.app/",
    category: "AI Products",
  },
  {
    id: 9,
    title: "Miracle Witness Network",
    subtitle: "Faith Community Platform",
    description: "A living testimony platform where miracles are witnessed, shared, and preserved. Connecting a global community through stories of faith that inspire and encourage.",
    skills: ["Next.js", "Community Systems", "Real-Time Data", "Content Moderation", "Social Features"],
    tags: ["Faith Tech", "Community", "Testimony"],
    link: "https://miracle-witness-network.vercel.app/",
    category: "Faith Tech",
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

        <div className="bg-neutral-950/50 backdrop-blur-md rounded-2xl border border-white/[0.04] p-8 md:p-14 shadow-xl">
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
        </div>
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
