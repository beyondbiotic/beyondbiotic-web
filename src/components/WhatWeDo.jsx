const areas = [
  { emoji: '🦠', title: 'Gut Health',            desc: 'Supporting microbiome balance and digestive wellness.' },
  { emoji: '🛡️', title: 'Immunity',              desc: "Strengthening the body's natural defense systems." },
  { emoji: '🧠', title: 'Cognitive Performance', desc: 'Supporting focus, clarity, and mental resilience.' },
  { emoji: '⚡', title: 'Vitality & Longevity',  desc: 'Promoting long-term health and everyday performance.' },
];

function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-[#f5f7f2]">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section">What We Do</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We develop science-driven nutraceutical solutions designed to support key pillars of human health and performance.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 md:gap-x-20 gap-y-8">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {[0, 1].map(i => (
              <div key={areas[i].title} className="flex items-start gap-4">
                <div className="w-0.5 h-12 rounded-full bg-[#0D4B3E] mt-1 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{areas[i].emoji}</span>
                    <h3 className="font-semibold text-lg text-[#0D4B3E]">{areas[i].title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{areas[i].desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            {[2, 3].map(i => (
              <div key={areas[i].title} className="flex flex-row-reverse items-start gap-4">
                <div className="w-0.5 h-12 rounded-full bg-[#0D4B3E] mt-1 shrink-0" />
                <div className="text-right">
                  <div className="flex flex-row-reverse items-center gap-2">
                    <span className="text-2xl">{areas[i].emoji}</span>
                    <h3 className="font-semibold text-lg text-[#0D4B3E]">{areas[i].title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{areas[i].desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhatWeDo;
