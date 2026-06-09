function ScienceSection() {
  return (
    <section id="science" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <img src="/science.jpg" alt="" className="rounded-lg image-hover w-full" />
        </div>

        <div className="text-center lg:text-left">
          <p className="small-label">WHY BEYOND BIOTIC EXISTS</p>

          <h2 className="heading-section mt-4 text-3xl md:text-4xl lg:text-[3.5rem]">
            Modern life is disrupting your biology.
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Stress, poor nutrition, environmental toxins,
            and chronic inflammation are weakening our cells from within.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ScienceSection;
