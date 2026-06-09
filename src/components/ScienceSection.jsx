function ScienceSection() {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20">

        <div>
          <img
            src="/science.jpg"
            alt=""
            className="rounded-lg image-hover"
          />
        </div>

        <div>

          <p className="small-label">
            WHY BEYOND BIOTIC EXISTS
          </p>

          <h2 className="heading-section mt-4">
            Modern life is disrupting
            your biology.
          </h2>

          <p className="mt-8 text-gray-600 text-lg">
            Stress, poor nutrition, environmental toxins,
            and chronic inflammation are weakening our cells
            from within.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ScienceSection;