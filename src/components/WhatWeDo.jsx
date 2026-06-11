const areas = [
  { emoji: '🦠', title: 'Gut Health',              desc: 'Supporting microbiome balance and digestive wellness.' },
  { emoji: '🛡️', title: 'Immunity',                desc: "Strengthening the body's natural defense systems." },
  { emoji: '🧠', title: 'Cognitive Performance',   desc: 'Supporting focus, clarity, and mental resilience.' },
  { emoji: '⚡', title: 'Vitality & Longevity',    desc: 'Promoting long-term health and everyday performance.' },
];

function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-[#f5f7f2]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10 md:mb-14">
          <h2 className="heading-section">What We Do</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We develop science-driven nutraceutical solutions designed to support key pillars of human health and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map(({ emoji, title, desc }) => (
            <div key={title} className="group p-6 md:p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="font-semibold text-slate-800 text-lg mb-2 group-hover:text-[#0D4B3E] transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatWeDo;
