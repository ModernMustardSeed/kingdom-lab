import { useState, useEffect } from 'react';

const navLinks: [string, string][] = [
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 pointer-events-auto">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[10px] uppercase tracking-[0.25em] text-white/30 hover:text-amber-400 transition-colors duration-300 font-sans font-semibold"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-[9px] text-white/15 tracking-[0.3em] uppercase font-mono pointer-events-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 animate-pulse" />
            Active
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden pointer-events-auto relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-white/50 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-white/50 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map(([label, href], i) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl uppercase tracking-[0.3em] text-white/70 hover:text-amber-400 font-sans font-bold transition-all duration-500 ${
                menuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
            >
              {label}
            </a>
          ))}

          <div
            className={`flex items-center gap-2 text-[10px] text-amber-500/50 tracking-[0.3em] uppercase font-mono mt-6 transition-all duration-500 ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '240ms' : '0ms' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to Opportunities
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
