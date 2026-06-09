function Hero() {
  return (
    <section className="min-h-screen" style={{background:'linear-gradient(135deg,rgba(232,245,233,0.8) 0%,rgba(224,242,241,0.9) 100%)'}}>

      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-20">

          <div>

            <p className="small-label">
              SCIENCE • NATURE • HUMAN POTENTIAL
            </p>

            <h1 className="heading-large mt-6">
              Reprogram
              <br />
              <span className="text-[#0D4B3E]">
                Human Vitality.
              </span>
            </h1>

            <p className="text-lg mt-8 max-w-xl text-gray-600 leading-relaxed">
              Next-generation nutraceuticals engineered to restore balance,
              elevate performance and unlock your biological potential.
            </p>

            <button className="mt-10 btn-primary">
              Explore Our Protocols →
            </button>

          </div>

          <div>

            <img
              src="/hero.png"
              alt=""
              className="w-full image-hover"
              style={{mixBlendMode:'multiply', filter:'saturate(1.1) contrast(0.95)'}}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;