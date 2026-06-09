function Features() {
  return (
    <section className="border-y border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {[
          "Precision Science",
          "Advanced Bioactives",
          "Gut-Brain Connection",
          "Purity & Integrity",
        ].map((item, i) => (
          <div
            key={item}
            className={`p-6 md:p-8 card-hover ${i < 3 ? 'border-r border-gray-200' : ''} ${i >= 2 ? 'border-t md:border-t-0 border-gray-200' : ''}`}
          >
            <h3 className="font-semibold mb-2 text-sm md:text-base">{item}</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Evidence-backed formulations rooted in cutting-edge research.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
