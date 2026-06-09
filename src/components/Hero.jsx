function Hero() {
  return (
    <section className="min-h-screen" style={{background:'linear-gradient(135deg,rgba(232,245,233,0.8) 0%,rgba(224,242,241,0.9) 100%)'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-10 py-20 lg:py-0">

          <div className="text-center lg:text-left">
            <p className="small-label">SCIENCE • NATURE • HUMAN POTENTIAL</p>

            <h1 className="heading-large mt-6 text-4xl sm:text-5xl lg:text-[5rem]">
              Reprogram
              <br />
              <span className="text-[#0D4B3E]">Human Vitality.</span>
            </h1>

            <p className="text-base md:text-lg mt-6 max-w-xl mx-auto lg:mx-0 text-gray-600 leading-relaxed">
              Next-generation nutraceuticals engineered to restore balance,
              elevate performance and unlock your biological potential.
            </p>

            <button className="mt-8 btn-primary">
              Explore Our Protocols →
            </button>
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
