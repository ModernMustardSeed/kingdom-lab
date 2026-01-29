const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
        <a href="#" className="pointer-events-auto group flex items-center gap-2">
          <span className="font-sans text-xs md:text-sm tracking-[0.2em] text-white/50 uppercase font-light group-hover:text-white/80 transition-colors duration-500">
            Modern Mustard Seed
          </span>
          <span className="text-amber-500 opacity-80">+</span>
          <span className="font-sans text-xs md:text-sm tracking-[0.2em] text-amber-500/70 uppercase font-light group-hover:text-amber-400 transition-colors duration-500">
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
              className="text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:block text-[10px] text-white/20 tracking-[0.3em] uppercase font-mono">
          System Online
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
