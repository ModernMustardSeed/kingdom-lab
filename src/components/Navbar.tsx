const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
        <a href="#" className="pointer-events-auto group flex items-center gap-3">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-white/40 uppercase font-semibold group-hover:text-white/70 transition-colors duration-500">
            Modern Mustard Seed
          </span>
          <span className="text-amber-500/40 text-[10px]">/</span>
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-amber-500/50 uppercase font-bold group-hover:text-amber-400 transition-colors duration-500">
            LAB
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          {[
            ['Projects', '#projects'],
            ['About', '#about'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[10px] uppercase tracking-[0.25em] text-white/30 hover:text-amber-400 transition-colors duration-300 font-sans font-semibold"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 text-[9px] text-white/15 tracking-[0.3em] uppercase font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 animate-pulse" />
          Active
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
