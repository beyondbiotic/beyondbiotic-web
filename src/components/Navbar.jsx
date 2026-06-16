import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Home',       href: '/',               external: false },
  { label: 'About',      href: '/about',           external: false },
  { label: 'Vision', href: '/#philosophy',     external: false },
  { label: 'Contact',    href: '/#contact',        external: false },
];

function BBLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D4B3E" />
          <stop offset="100%" stopColor="#1a6656" />
        </linearGradient>
        <linearGradient id="letterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="42" height="42" rx="11" fill="url(#bgGrad)" />

      {/* Thin gold accent line */}
      <rect x="4" y="4" width="34" height="34" rx="8" fill="none" stroke="#a7f3d0" strokeWidth="0.5" strokeOpacity="0.4" />

      {/* B — left */}
      <text
        x="4"
        y="30"
        fontFamily="Georgia, serif"
        fontSize="26"
        fontWeight="700"
        fill="url(#letterGrad)"
        letterSpacing="-2"
      >B</text>

      {/* B — right, slightly offset for layered premium feel */}
      <text
        x="18"
        y="30"
        fontFamily="Georgia, serif"
        fontSize="26"
        fontWeight="700"
        fill="url(#letterGrad)"
        fillOpacity="0.6"
        letterSpacing="-2"
      >B</text>
    </svg>
  );
}

function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'backdrop-blur-md bg-white/75 shadow-sm border-b border-white/40'
        : 'bg-[#f8f7f2] border-b border-gray-200'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <BBLogo />
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold tracking-[0.12em] text-[#0D4B3E] uppercase">Beyond</span>
            <span className="text-[11px] font-medium tracking-[0.3em] text-[#1a6656] uppercase">Biotic</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-10 text-sm uppercase tracking-wider">
          {links.map(({ label, href }) => (
            <li key={label} className="group navbar-link">
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0D4B3E] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#0D4B3E] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#0D4B3E] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4 bg-white/90 backdrop-blur-md border-t border-gray-100">
          {links.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-wider text-gray-600 hover:text-[#0D4B3E] py-1">{label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
