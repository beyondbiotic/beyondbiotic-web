function Navbar() {
  return (
    <nav className="bg-[#f8f7f2] border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-2xl font-semibold tracking-wide text-[#0D4B3E]">
          Beyond Biotic
        </h2>

        {/* Navigation Links */}
        <ul className="hidden lg:flex gap-12 text-sm uppercase tracking-wider">

          <li className="group navbar-link">
            <a href="#about">About</a>
          </li>

          <li className="group navbar-link">
            <a href="#science">Science</a>
          </li>

          <li className="group navbar-link">
            <a href="#vision">Vision</a>
          </li>

          <li className="group navbar-link">
            <a href="#mission">Mission</a>
          </li>

          <li className="group navbar-link">
            <a href="#protocols">Protocols</a>
          </li>

          <li className="group navbar-link">
            <a href="#contact">Contact</a>
          </li>

        </ul>

        {/* CTA Button */}
        <a href="#protocols">
          <button className="btn-primary">
            Explore Protocols
          </button>
        </a>

      </div>

    </nav>
  );
}

export default Navbar;