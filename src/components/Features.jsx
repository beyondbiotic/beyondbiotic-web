function Features() {
  return (
    <section className="border-y border-gray-200">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4">

        {[
          "Precision Science",
          "Advanced Bioactives",
          "Gut-Brain Connection",
          "Purity & Integrity",
        ].map((item) => (
          <div
            key={item}
            className="p-8 border-r last:border-r-0 card-hover"
          >
            <h3 className="font-semibold mb-3">
              {item}
            </h3>

            <p className="text-gray-600 text-sm">
              Evidence-backed formulations rooted in cutting-edge research.
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;