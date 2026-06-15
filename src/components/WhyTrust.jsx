import { useEffect, useRef, useState } from 'react';

const steps = [
  { key: 'past',    label: 'PAST',    points: ['Wisdom', 'Resilience', 'Discipline'] },
  { key: 'present', label: 'PRESENT', points: ['Innovation', 'Curiosity', 'Scientific Thinking'] },
  { key: 'future',  label: 'FUTURE',  points: ['Healthier Generations', 'Better Choices', 'Sustainable Well-being'] },
];

export default function WhyTrust() {
  const ref             = useRef(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setPhase(1), 500);   // PAST lights up
          setTimeout(() => setPhase(2), 1000);  // line1 grows
          setTimeout(() => setPhase(3), 2000);  // PRESENT lights up
          setTimeout(() => setPhase(4), 2500);  // line2 grows
          setTimeout(() => setPhase(5), 3500);  // FUTURE lights up
          setTimeout(() => setPhase(6), 4200);  // final statement
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const nodeActive = (key) =>
    (key === 'past' && phase >= 1) ||
    (key === 'present' && phase >= 3) ||
    (key === 'future' && phase >= 5);

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-8 bg-[#eef2eb]">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="heading-section mb-20">Why Trust Beyond Biotic?</h2>

        {/* Timeline Row */}
        <div className="flex items-start justify-center gap-0">

          {steps.map(({ key, label, points }, i) => (
            <div key={key} className="flex items-start">

              {/* Node + Points */}
              <div className="flex flex-col items-center w-36 md:w-48">

                {/* Circle */}
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
                  nodeActive(key)
                    ? 'border-[#0D4B3E] bg-[#0D4B3E] shadow-xl shadow-[#0D4B3E]/30'
                    : 'border-gray-300 bg-white'
                }`}>
                  <span className={`text-sm md:text-base font-bold tracking-wider transition-colors duration-700 ${
                    nodeActive(key) ? 'text-white' : 'text-gray-300'
                  }`}>
                    {label}
                  </span>
                </div>

                {/* Points */}
                <div className={`mt-5 space-y-1.5 transition-all duration-700 ${
                  nodeActive(key) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {points.map(p => (
                    <p key={p} className="text-sm md:text-base text-[#0D4B3E] font-medium">{p}</p>
                  ))}
                </div>

              </div>

              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="relative w-16 md:w-24 h-0.5 bg-gray-200 mt-10 mx-1 overflow-hidden">
                  <div className={`absolute top-0 left-0 h-full bg-[#0D4B3E] transition-all duration-1000 ease-in-out ${
                    (i === 0 && phase >= 2) || (i === 1 && phase >= 4) ? 'w-full' : 'w-0'
                  }`} />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Final Statement */}
        <div className={`mt-20 transition-all duration-1000 ${phase >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12">
            {[
              ['Built by the', 'Present.'],
              ['Inspired by the', 'Past.'],
              ['Designed for the', 'Future.'],
            ].map(([line1, line2]) => (
              <p key={line2} className="text-base md:text-lg text-gray-500">
                {line1} <span className="text-[#0D4B3E] font-semibold">{line2}</span>
              </p>
            ))}
          </div>
          <p className="mt-8 text-2xl md:text-3xl font-bold tracking-[0.3em] text-[#0D4B3E]">
            BEYOND BIOTIC
          </p>
        </div>

      </div>
    </section>
  );
}
