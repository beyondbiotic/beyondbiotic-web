import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: 'Who We Are',
    body: 'Beyond Biotic is a science-driven nutraceutical company committed to advancing preventive wellness through evidence-based innovation. By combining modern research with nature-inspired solutions, we aim to support key pillars of human health, including gut wellness, immune resilience, cognitive performance, and long-term vitality. Our mission is to make scientifically informed wellness accessible, effective, and future-focused.',
  },
  {
    title: 'Why Beyond Biotic Was Created',
    body: 'Beyond Biotic was founded with a simple belief: the future of health should be proactive, science-driven, and accessible to everyone. Inspired by the growing need for evidence-based wellness solutions, the company was created to bridge the gap between scientific research and everyday health. Through a commitment to innovation, quality, and continuous learning, Beyond Biotic aims to contribute to a healthier future by developing nutraceutical solutions that support long-term well-being and human potential.',
  },
  {
    title: 'The Future of Beyond Biotic',
    body: 'At Beyond Biotic, we are committed to exploring the future of science-driven wellness. As we grow, our focus remains on developing innovative, evidence-based nutraceutical solutions that support healthier, stronger, and more resilient lives.',
  },
];

function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 md:py-36 px-6 md:px-8 bg-[#f5f7f2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-large">About Us</h1>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Beyond Biotic is a science-driven nutraceutical company dedicated to advancing human health through evidence-based wellness innovation. We combine scientific research, natural bioactives, and a long-term vision for preventive healthcare.
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map(({ title, body }, i) => (
        <section key={title} className={`py-16 md:py-24 px-6 md:px-8 ${i % 2 === 0 ? 'bg-white' : 'bg-[#eef2eb]'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section">{title}</h2>
            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">{body}</p>
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}

export default AboutPage;
