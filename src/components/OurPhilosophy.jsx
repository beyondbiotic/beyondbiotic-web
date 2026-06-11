const pillars = [
  { emoji: '🧬', title: 'Science First',    desc: 'Evidence-driven thinking guides every decision.' },
  { emoji: '🌿', title: 'Nature Inspired',  desc: 'Harnessing the potential of natural bioactives.' },
  { emoji: '🚀', title: 'Future Focused',   desc: 'Building solutions for the next generation of health and wellness.' },
];

function OurPhilosophy() {
  return (
    <section id="philosophy" className="py-16 md:py-24 px-6 md:px-8 bg-[#f5f7f2]">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="heading-section">Our Philosophy</h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            We believe the future of health lies at the intersection of science, nature, and human potential. Beyond Biotic was founded to explore evidence-based nutraceutical innovations that help people achieve better health, resilience, and vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map(({ emoji, title, desc }) => (
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

export default OurPhilosophy;
