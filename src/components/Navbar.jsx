import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ['about', 'science', 'vision', 'mission', 'protocols', 'contact'];

  return (
    <nav className="bg-[#f8f7f2] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-[#0D4B3E]">
          Beyond Biotic
        </h2>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-12 text-sm uppercase tracking-wider">
          {links.map(l => (
            <li key={l} className="group navbar-link">
              <a href={`#${l}`}>{l}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#protocols" className="hidden lg:block">
          <button className="btn-primary">Explore Protocols</button>
        </a>

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
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4 bg-[#f8f7f2] border-t border-gray-100">
          {links.map(l => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-wider text-gray-600 hover:text-[#0D4B3E] py-1"
            >
              {l}
            </a>
          ))}
          <a href="#protocols" onClick={() => setOpen(false)}>
            <button className="btn-primary w-full mt-2">Explore Protocols</button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
