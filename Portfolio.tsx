import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 7,
    title: "Voice Staff",
    description: "Enterprise-grade AI voice assistants for staffing and customer engagement. Scaling human connection with artificial intelligence.",
    tags: ["Voice AI", "Staffing", "Automation"],
    link: "https://voicestaff.pro/"
  },
  {
    id: 15,
    title: "Aurora Nexus",
    description: "An ethereal network visualization system. Watch data flow through a mesmerizing, interactive aurora borealis simulation.",
    tags: ["Data Visualization", "WebGL", "Interactive System"],
    link: "https://copy-of-aurora-nexus-1086061899824.us-west1.run.app"
  },
  {
    id: 14,
    title: "World 1-1",
    description: "An immersive 3D exploration of the iconic World 1-1. Reimagining classic level design through a modern, interactive spatial interface.",
    tags: ["3D Environment", "Interactive", "Game Design"],
    link: "https://world-1-1-1086061899824.us-west1.run.app"
  },
  {
    id: 11,
    title: "Go Max Freedom Ecosystem",
    description: "A comprehensive platform architecture engineered for maximum operational freedom. Unifying complex business processes into a seamless, high-performance ecosystem.",
    tags: ["Platform Architecture", "Ecosystem", "High Performance"],
    link: "https://go-max-freedom-ecosystem-1086061899824.us-west1.run.app"
  },
  {
    id: 1,
    title: "Ocean Flow Field",
    description: "An immersive generative simulation of oceanic currents. Visualizing fluid dynamics through high-performance particle flow fields.",
    tags: ["Generative Art", "Flow Field", "Interactive Physics"],
    link: "https://ocean-flow-field-1086061899824.us-west1.run.app"
  },
  {
    id: 2,
    title: "Luxe Design",
    description: "High-performance virtual staging and interior design AI. Transform empty spaces into furnished masterpieces instantly.",
    tags: ["Generative AI", "Interior Design", "Virtual Staging"],
    link: "https://luxe-design-1086061899824.us-west1.run.app"
  },
  {
    id: 12,
    title: "The Daily Seed",
    description: "A daily devotional application designed to nurture spiritual growth. Delivering curated inspiration through a serene and modern digital interface.",
    tags: ["Faith Tech", "Daily Inspiration", "Mobile App"],
    link: "https://the-daily-seed-1086061899824.us-west1.run.app"
  },
  {
    id: 10,
    title: "Chrono Navigator",
    description: "A precision temporal interface for exploring historical timelines. Navigate through eras with fluid, interactive chronological visualization.",
    tags: ["Temporal Visualization", "EdTech", "Interactive Timeline"],
    link: "https://chrono-navigator-1086061899824.us-west1.run.app"
  },
  {
    id: 3,
    title: "Opus Lead Gen Engine",
    description: "High-performance lead generation dashboard for identifying ICPs and generating business leads.",
    tags: ["Lead Generation", "Dashboard", "B2B Intelligence"],
    link: "https://opus-leadgen-engine-1086061899824.us-west1.run.app"
  },
  {
    id: 4,
    title: "AS IF AI",
    description: "A professional AI styling atelier and wardrobe curator powered by Gemini 3 Pro. App design inspired by the movie Clueless and the closet of Cher Horowitz.",
    tags: ["AI Styling", "Fashion Tech", "Gemini 3 Pro"],
    link: "https://as-if-ai-1086061899824.us-west1.run.app"
  },
  {
    id: 5,
    title: "The Ledger",
    description: "An Agentic CRM and Sales System designed for automated pipeline management and intelligent customer interactions.",
    tags: ["Agentic AI", "CRM", "Sales Automation"],
    link: "https://the-ledger-agentic-crm-1086061899824.us-west1.run.app/"
  },
  {
    id: 6,
    title: "Dreamscape Ribbons",
    description: "Beautiful & Ethereal Design. An immersive digital art experience featuring fluid, interactive visual elements.",
    tags: ["Generative Art", "WebGL", "Interactive Design"],
    link: "https://dreamscape-ribbons-1086061899824.us-west1.run.app"
  },
  {
    id: 8,
    title: "Vortex AI",
    description: "A dynamic intelligence system visualizing complex data streams through an immersive, high-performance interface.",
    tags: ["Data Visualization", "AI Core", "Real-time Analytics"],
    link: "https://vortex-ai-1086061899824.us-west1.run.app"
  },
  {
    id: 9,
    title: "PAC Maze",
    description: "A gamified exploration of professional works. Navigate a digital labyrinth to uncover milestones in an interactive environment.",
    tags: ["Interactive Experience", "Gamification", "Web Design"],
    link: "https://pac-sarah-portfolio-maze-1086061899824.us-west1.run.app"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
      {/* Header Section */}
      <header className="mb-24 text-center max-w-4xl mx-auto relative">
        
        {/* Scripture - The "Whisper" Top Element */}
        <div className="flex flex-col items-center gap-4 mb-24 bg-neutral-900/60 backdrop-blur-md p-8 md:p-12 rounded-lg border border-white/5 shadow-2xl mx-auto max-w-3xl">
          <span className="text-[10px] md:text-xs text-amber-500 font-bold tracking-[0.4em] uppercase shadow-amber-500/20 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            Matthew 6:33
          </span>
          <p className="text-white font-serif italic text-lg md:text-2xl font-light tracking-wide opacity-90 max-w-2xl leading-relaxed drop-shadow-md">
            "But seek first the kingdom of God and his righteousness, and all these things will be added to you."
          </p>
        </div>

        {/* Main Title - Replaced with minimal LAB */}
        <h1 className="font-sans text-4xl md:text-6xl font-extralight tracking-[0.3em] md:tracking-[0.4em] text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          LAB
        </h1>

      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block p-8 md:p-12 rounded-sm border bg-neutral-900/80 hover:bg-neutral-800/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 shadow-lg shadow-black/50 overflow-hidden
              ${project.featured 
                ? 'md:col-span-2 border-amber-500/40 hover:border-amber-400/70 shadow-amber-900/10' 
                : 'border-white/10 hover:border-amber-500/40'
              }
            `}
          >
            {/* Subtle Gradient Glow on Hover */}
            <div className={`absolute top-0 right-0 -mr-32 -mt-32 w-80 h-80 rounded-full blur-[80px] transition-opacity duration-1000 pointer-events-none ${project.featured ? 'bg-amber-500/20 opacity-30 group-hover:opacity-100' : 'bg-amber-500/10 opacity-0 group-hover:opacity-100'}`} />
            
            {/* Featured Highlight Gradient Line */}
            {project.featured && (
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col gap-1">
                    {project.featured && (
                      <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold mb-1 shadow-amber-500/20 drop-shadow-sm">Flagship Venture</span>
                    )}
                    {/* Increased text brightness */}
                    <h3 className={`font-serif italic text-white group-hover:text-amber-100 transition-colors duration-500 drop-shadow-md ${project.featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                      {project.title}
                    </h3>
                </div>
                <span className="text-white/40 group-hover:text-amber-500 transition-colors text-sm opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-500 font-bold tracking-widest mt-2">OPEN</span>
              </div>
              
              {/* Increased text brightness */}
              <p className={`text-neutral-300 leading-7 mb-8 flex-grow font-light border-l border-white/10 pl-4 ${project.featured ? 'text-base md:text-xl max-w-3xl' : 'text-sm md:text-base'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-500">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`uppercase tracking-widest text-neutral-400 group-hover:text-amber-200 transition-colors duration-300 font-medium ${project.featured ? 'text-xs' : 'text-[10px]'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Partnership Inquiry Section */}
      <section className="mt-40 max-w-3xl mx-auto text-center px-6 relative z-10 bg-neutral-900/60 p-12 rounded-lg border border-white/5 backdrop-blur-sm">
        <div className="mb-12 flex justify-center">
           <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-500/40 to-transparent"></div>
        </div>
        
        <h2 className="text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-8 shadow-amber-500/10 drop-shadow-sm">
          Initiate Collaboration
        </h2>
        
        <p className="text-white text-xl md:text-3xl font-serif italic mb-12 leading-normal drop-shadow-md">
          "I would love to bring your ideas to life—working with you to <span className="text-amber-200">10x your business</span> while lightening your load."
        </p>
        
        <a 
          href="mailto:sarah@modernmustardseed.com" 
          className="group inline-flex items-center gap-4 px-10 py-5 border border-white/20 hover:border-amber-500/50 bg-neutral-950/80 hover:bg-amber-950/40 text-white rounded-sm transition-all duration-500 tracking-[0.2em] uppercase text-[10px] font-bold shadow-2xl hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]"
        >
          <span>sarah@modernmustardseed.com</span>
          <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 text-amber-400">→</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-40 text-center pb-12 opacity-80 hover:opacity-100 transition-opacity duration-700">
        
        {/* Footer Scripture */}
        <div className="mb-16 max-w-2xl mx-auto px-6">
           <p className="text-neutral-200 font-serif italic text-2xl md:text-3xl mb-6 leading-relaxed drop-shadow-lg">
             "Commit to the Lord whatever you do, and he will establish your plans."
           </p>
           <span className="text-xs md:text-sm text-amber-500 uppercase tracking-[0.3em] font-bold shadow-amber-500/20 drop-shadow-sm">
             Proverbs 16:3
           </span>
        </div>

        <div className="w-12 h-px bg-white/10 mx-auto mb-8"></div>

        <p className="font-light text-[10px] tracking-[0.3em] uppercase text-white/50">
          Powered by <a href="https://modernmustardseed.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors border-b border-white/20 hover:border-amber-400 pb-0.5">Modern Mustard Seed</a>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;