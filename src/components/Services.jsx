function Services() {
  const services = [
    { title: "Probiotics & Postbiotics", description: "Restore gut balance with clinically validated strains for digestive and immune health" },
    { title: "Vitamin Formulations", description: "Essential vitamins D3, K2, B12, and minerals in highly bioavailable forms" },
    { title: "Adaptogen Blends", description: "Stress resilience and mental clarity through traditional herbs like Ashwagandha and Brahmi" },
    { title: "Nootropic Stacks", description: "Cognitive enhancement combining Ayurvedic wisdom with modern bioscience" },
    { title: "Functional Foods", description: "Gummies, spreads, munchies, and sachets that integrate into Indian daily routines" },
    { title: "Wellness Kits", description: "Complete nutrition packages designed for families across age groups" },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-600 mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
            Daily Precision Nutrition for Real Indian Lives — science-verified, Ayurvedic-integrated products that deliver complete nutritional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 transition-all duration-300 hover:border-cyan-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center mb-5 group-hover:from-cyan-500 group-hover:to-cyan-600 transition-all duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
