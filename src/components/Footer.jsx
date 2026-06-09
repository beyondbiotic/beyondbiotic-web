function Footer() {
  return (
    <footer className="bg-slate-900 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">BB</span>
              </div>
              <h3 className="text-cyan-400 font-bold text-xl">Beyond Biotic</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Preventive Wellness • Science + Tradition • Daily Nutrition
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about"   className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About</a></li>
              <li><a href="#vision"  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Vision</a></li>
              <li><a href="#mission" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Mission</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Products</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://mail.google.com/mail/?view=cm&to=beyondbiotic@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm break-all">
                  beyondbiotic@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918209000105" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  +91 82090 00105
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-500 text-xs">© 2026 Beyond Biotic. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
