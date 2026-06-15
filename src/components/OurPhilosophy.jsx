const pillars = [
  { emoji: '🧬', title: 'Science First',   desc: 'Evidence-driven thinking guides every decision.' },
  { emoji: '🌿', title: 'Nature Inspired', desc: 'Harnessing the potential of natural bioactives.' },
  { emoji: '🚀', title: 'Future Focused',  desc: 'Building solutions for the next generation of health and wellness.' },
];

function OurPhilosophy() {
  return (
    <section id="philosophy" className="py-16 md:py-24 px-6 md:px-8 bg-[#f5f7f2]">
      <div className="max-w-4xl mx-auto">

        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="heading-section">Our Philosophy</h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            We believe the future of health lies at the intersection of science, nature, and human potential. Beyond Biotic was founded to explore evidence-based nutraceutical innovations that help people achieve better health, resilience, and vitality.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 md:gap-x-20 gap-y-8">

          {/* Left column — Science First, Nature Inspired */}
          <div className="flex flex-col gap-8">
            {[0, 1].map(i => (
              <div key={pillars[i].title} className="flex items-start gap-4">
                <div className="w-0.5 h-12 rounded-full bg-[#0D4B3E] mt-1 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{pillars[i].emoji}</span>
                    <h3 className="font-semibold text-lg text-[#0D4B3E]">{pillars[i].title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{pillars[i].desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — Future Focused */}
          <div className="flex flex-col gap-8">
            {[2].map(i => (
              <div key={pillars[i].title} className="flex flex-row-reverse items-start gap-4">
                <div className="w-0.5 h-12 rounded-full bg-[#0D4B3E] mt-1 shrink-0" />
                <div className="text-right">
                  <div className="flex flex-row-reverse items-center gap-2">
                    <span className="text-2xl">{pillars[i].emoji}</span>
                    <h3 className="font-semibold text-lg text-[#0D4B3E]">{pillars[i].title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{pillars[i].desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default OurPhilosophy;
