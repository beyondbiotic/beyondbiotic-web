import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function WhoWeAre() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-section">Who We Are</h2>
        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
          We are Beyond Biotic — a preventive wellness brand dedicated to helping people take charge of their health before illness begins. Rooted in Indian wellness traditions and powered by modern scientific research, we create solutions designed to support long-term health, vitality, and well-being.
        </p>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <Navbar />

      {/* 1. Hero */}
      <section className="py-16 md:py-28 px-6 md:px-8 bg-[#e8f0e5]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-large">About Us</h1>
          <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Beyond Biotic is a science-driven wellness company focused on helping people live healthier lives through preventive healthcare. By combining scientific research, natural ingredients, and evidence-based innovation, we aim to make everyday wellness more accessible, effective, and sustainable.
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. Why Beyond Biotic Was Created */}
      <section className="py-12 md:py-24 px-6 md:px-8 bg-[#eef2eb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section">Why Beyond Biotic Was Created</h2>

          <div className="mt-10 md:mt-14 flex flex-col gap-0">

            {[
              { label: 'A Growing Challenge', text: 'Lifestyle-related health conditions are increasing across all age groups, despite remarkable advances in modern healthcare.' },
              { label: 'A Simple Realization', text: 'Treating illness is important, but helping people stay healthy before illness begins is equally important.' },
              { label: 'Our Purpose', text: 'To bridge the gap between science and everyday wellness through preventive, evidence-based solutions that support long-term health.' },
            ].map(({ label, text }, i) => (
              <div key={label} className="flex flex-col items-start">
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#0D4B3E] flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                    {i < 2 && <div className="w-0.5 h-12 bg-[#0D4B3E] opacity-20 mt-1" />}
                  </div>
                  <div className="pb-10">
                    <h4 className="font-semibold text-[#0D4B3E] text-base md:text-lg mb-2">{label}</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">{text}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. People Beyond Biotic */}
      <section className="py-12 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section">The People Shaping Beyond Biotic</h2>

          {/* Two founders */}
          <div className="mt-10 grid grid-cols-2 gap-8 sm:gap-16 max-w-xl mx-auto">
            {[
              { src: '/founder.png', name: 'Jaydeep Singh Rathore', role: 'Founder' },
              { src: '/founder 1.png', name: 'Dr. Vibha S Gupta', role: 'Founder' },
              
            ].map(({ src, name, role }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div className="w-full h-52 md:h-64 rounded-2xl overflow-hidden border border-[#dde5d8] bg-[#eef2eb] flex items-center justify-center">
                  {src
                    ? <img src={src} alt={name} className="w-full h-full object-cover object-top" />
                    : <span className="text-gray-400 text-sm">Photo</span>}
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#0D4B3E] text-sm md:text-base">{name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-[#dde5d8]" />

          {/* Founder Message */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D4B3E] mb-6">Building the Future of Preventive Wellness</h3>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            <p>Beyond Biotic was founded on a simple belief: healthcare should not begin after illness — it should begin before it.</p>
            <p>As founders, we share a vision of bridging modern science and natural wellness through evidence-based nutraceutical innovation. Inspired by advances in microbiome science, cognitive wellness, immune resilience, and preventive healthcare, we are committed to exploring solutions that support long-term health and well-being.</p>
            <p>Our mission is to build Beyond Biotic with scientific integrity, continuous learning, and meaningful innovation — always placing people at the center of everything we do.</p>
            <p>We believe the future of healthcare lies not only in treating disease, but in empowering individuals to live healthier, stronger, and more resilient lives every day.</p>
          </div>
          <p className="mt-8 text-sm md:text-base font-semibold text-[#0D4B3E]">— Jaydeep Singh Rathore & Vibha S Gupta</p>
          <p className="text-sm text-gray-500">Founders, Beyond Biotic</p>

          {/* Divider */}
          <div className="my-10 border-t border-[#dde5d8]" />

          {/* Technical Member */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-40 h-48 rounded-2xl overflow-hidden border border-[#dde5d8] bg-[#eef2eb] shadow-sm shrink-0">
  <img
    src="/technical-lead.png"
    alt="Vindhya S"
    className="w-full h-full object-cover object-top"
  />
</div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-[#0D4B3E] text-sm md:text-base">Vindhya S</p>
              <p className="text-xs md:text-sm text-gray-500 mb-3">Technical Lead</p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg">
                Driving technology, research support, and digital innovation to strengthen the future of preventive wellness.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. The Question That Started It All */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-[#e8f0e5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="small-label mb-6">The Question That Started It All</p>
          <h2 className="font-serif font-semibold text-gray-700 leading-tight" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
            We are living longer...
          </h2>
          <h2 className="font-serif font-semibold text-[#0D4B3E] leading-tight mt-2" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
            But are we really living healthier?
          </h2>
        </div>
      </section>

      {/* 6. The Future of Beyond Biotic */}
      <section className="py-12 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-section">The Future of Beyond Biotic</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#dde5d8] border border-[#dde5d8] rounded-2xl overflow-hidden">
            {[
              { title: 'PREVENTION', desc: 'Health before disease begins.' },
              { title: 'SCIENCE',    desc: 'Research-driven wellness.' },
              { title: 'THRIVE',     desc: 'Better lives every day.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white px-8 py-10">
                <p className="text-xs font-bold tracking-[0.2em] text-[#0D4B3E] mb-3">{title}</p>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base md:text-lg font-semibold text-[#0D4B3E]">
            That is the future we are working towards.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;
