import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://i.postimg.cc/ZR89PR6K/Blue-Vibrant-an-White-Modern-Professional-Website-Development-Services-Banner.png",
    alt: "9.9 Anniversary Sale"
  },
  {
    image: "https://img.lazcdn.com/us/domino/d9a9250b-108c-4d7a-b645-edfcd41352fd_BD-1976-688.jpg_2200x2200q80.jpg_.webp",
    alt: "9.9 Anniversary Sale"
  },
  {
    image: "https://shopbasebd.com/public/apps/sbrbanner-mob.png",
    alt: "9.9 Anniversary Sale"
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-contain" />
        </div>
      ))}
       {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'
                }`}
            />
            ))}
        </div>
       )}
    </div>
  );
};

export default HeroSlider;
