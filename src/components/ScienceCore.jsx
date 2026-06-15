const areas = [
  { emoji: '🦠', title: 'Microbiome Science',  desc: 'Understanding the relationship between gut health and overall well-being.' },
  { emoji: '🧠', title: 'Gut-Brain Axis',       desc: 'Exploring the connection between digestive health, cognition, and mental resilience.' },
  { emoji: '🔬', title: 'Bioactive Innovation', desc: 'Evaluating natural compounds with potential health benefits through scientific literature and emerging research.' },
  { emoji: '🧪', title: 'Evidence-Based R&D',   desc: 'Every formulation concept is grounded in peer-reviewed science and clinical insight.' },
];

function ScienceCore() {
  return (
    <section id="science" className="py-16 md:py-24 px-6 md:px-8 bg-[#eef2eb]">
      <div className="max-w-4xl mx-auto">

        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="heading-section">Science at the Core</h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            Every concept at Beyond Biotic is rooted in scientific inquiry, emerging research, and a commitment to evidence-based wellness.
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

export default ScienceCore;
