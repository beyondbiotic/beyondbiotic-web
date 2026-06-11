const cards = [
  { emoji: '🔬', title: 'Science-Driven Approach',     desc: 'Every concept begins with scientific research and evidence.' },
  { emoji: '🌿', title: 'Nature-Inspired Solutions',   desc: 'Harnessing bioactive compounds and natural ingredients.' },
  { emoji: '🧪', title: 'Commitment to Quality',       desc: 'Focused on purity, safety, and rigorous standards.' },
  { emoji: '🧠', title: 'Human-Centered Innovation',   desc: 'Developing solutions for real health challenges and long-term well-being.' },
];

const tags = ['Research Driven', 'Quality Focused', 'Future Ready', 'Human Centered'];

function WhyTrust() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-[#eef2eb]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10 md:mb-14">
          <h2 className="heading-section">Why Trust Beyond Biotic?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ emoji, title, desc }) => (
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

export default WhyTrust;
