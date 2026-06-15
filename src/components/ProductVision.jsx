import { useState } from 'react';

const products = [
  { name: 'Gut Support+ Capsules',   description: 'Precision gut support powered by science and inspired by nature.', image: '/product 1.png' },
  { name: 'Gummies',   description: 'Making daily digestive wellness simple, enjoyable, and accessible.', image: '/product 2.png' },
  { name: 'Gut Wellness Drink Mix', description: 'Reimagining gut health through convenient, science-backed nutrition.', image: '/product 3.png' },
  { name: 'Effervescent Tablet',  description: 'Effortless wellness with every refreshing sip.', image: '/product 4.png' },
];

function ProductVision() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('right');

  const navigate = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(i =>
        dir === 'right'
          ? (i === products.length - 1 ? 0 : i + 1)
          : (i === 0 ? products.length - 1 : i - 1)
      );
      setAnimating(false);
    }, 300);
  };

  const { name, description, image } = products[current];

  const slideClass = animating
    ? 'opacity-0 blur-sm scale-95'
    : 'opacity-100 blur-0 scale-100';

  return (
    <section id="products" className="py-16 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold text-[#0D4B3E] text-center mb-10">Our Product Vision</h2>

        {/* Image + Arrows */}
        <div className="flex items-center gap-3 md:gap-6">

          {/* Prev Button */}
          <button
            onClick={() => navigate('left')}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#0D4B3E] text-[#0D4B3E] text-sm font-medium hover:bg-[#0D4B3E] hover:text-white transition-all duration-200"
          >
            ← <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Product Image */}
          <div className="flex-1 rounded-2xl bg-[#eef2eb] border border-[#dde5d8] overflow-hidden">
            <img
              src={image}
              alt={name}
              className={`w-full h-auto block transition-all duration-300 ease-in-out ${slideClass}`}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={() => navigate('right')}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#0D4B3E] text-[#0D4B3E] text-sm font-medium hover:bg-[#0D4B3E] hover:text-white transition-all duration-200"
          >
            <span className="hidden sm:inline">Next</span> →
          </button>

        </div>

        {/* Product Info */}
        <div className={`mt-6 text-center transition-all duration-300 ease-in-out ${slideClass}`}>
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D4B3E]">{name}</h3>
          <p className="mt-2 text-sm md:text-base text-gray-500 max-w-md mx-auto">{description}</p>
        </div>

        {/* Dots */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 'right' : 'left'); navigate(i > current ? 'right' : 'left'); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#0D4B3E] w-5' : 'bg-[#dde5d8] w-2'}`}
              />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto border-t border-[#dde5d8] pt-6">
          <span className="font-medium">ⓘ Concept Product Disclaimer:</span> The visuals presented on this website are conceptual product renderings intended to showcase the brand vision and product experience. Final packaging, product appearance, labeling, formulations, and design elements may be modified prior to market launch in accordance with regulatory and commercial requirements.
        </p>

      </div>
    </section>
  );
}

export default ProductVision;
