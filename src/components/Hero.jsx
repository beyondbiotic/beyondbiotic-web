function Hero() {
  return (
    <section className="min-h-screen" style={{background:'#e8f0e5'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-10 py-20 lg:py-0">

          <div className="text-center lg:text-left">
            <p className="small-label">SCIENCE • NATURE • HUMAN POTENTIAL</p>

            <h1 className="heading-large mt-6">
              Reimagining Human Health
              <br />
              <span className="text-[#0D4B3E]">Through Science and Nature.</span>
            </h1>

            <p className="text-base md:text-lg mt-6 max-w-xl mx-auto lg:mx-0 text-gray-600 leading-relaxed">
              Beyond Biotic is a science-driven nutraceutical company developing evidence-based solutions to support gut health, immunity, cognitive performance, and long-term vitality.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#philosophy"><button className="btn-primary">Explore Our Philosophy →</button></a>
              <a href="#science"><button className="btn-secondary">Discover the Science</button></a>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <img
              src="/hero.png"
              alt=""
              className="w-full max-w-sm mx-auto lg:max-w-full image-hover"
              style={{mixBlendMode:'multiply', filter:'saturate(1.1) contrast(0.95)'}}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
