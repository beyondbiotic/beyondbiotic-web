const areas = [
  { emoji: '🦠', title: 'Microbiome Science',    desc: 'Understanding the relationship between gut health and overall well-being.' },
  { emoji: '🧠', title: 'Gut-Brain Axis',         desc: 'Exploring the connection between digestive health, cognition, and mental resilience.' },
  { emoji: '🔬', title: 'Bioactive Innovation',   desc: 'Evaluating natural compounds with potential health benefits through scientific literature and emerging research.' },
];

const tags = ['Gut Health', 'Human Performance', 'Immune Resilience', 'Evidence-Based Wellness'];

function ScienceCore() {
  return (
    <section id="science" className="py-16 md:py-24 px-6 md:px-8 bg-[#eef2eb]">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="heading-section">Science at the Core</h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            Every concept at Beyond Biotic is rooted in scientific inquiry, emerging research, and a commitment to evidence-based wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {areas.map(({ emoji, title, desc }) => (
            <div key={title} className="group p-6 md:p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="font-semibold text-slate-800 text-lg mb-2 group-hover:text-[#0D4B3E] transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {tags.map(tag => (
            <span key={tag} className="px-6 py-2 rounded-full border border-[#0D4B3E] text-[#0D4B3E] text-sm font-medium tracking-wide">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ScienceCore;
