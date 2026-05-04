'use client';

import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    image:
      'https://transformationalsports.org/wp-content/uploads/2022/02/slide-1.jpg',
    heading:
      'When we play the game differently, we view the world differently',
    overlay:
      'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.25))',
  },
  {
    image:
      'https://transformationalsports.org/wp-content/uploads/2022/02/slide2.jpg',
    heading:
      'Advancing gender equity through mixed-gender sports',
    overlay:
      'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.39))',
  },
  {
    image:
      'https://transformationalsports.org/wp-content/uploads/2022/02/slide-3.jpg',
    heading:
      'Stepping on to new fields, physically and virtually',
    overlay:
      'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.25))',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Trigger entrance after mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === index ? 1 : 0 }}
          aria-hidden={current !== index}
        >
          {/* Parallax background */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundAttachment: 'fixed',
            }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: slide.overlay }}
          />
        </div>
      ))}

      {/* Centered text */}
      <div className="relative z-10 flex min-h-[70vh] md:min-h-screen items-center justify-center px-6">
        <h1
          className={`text-center font-normal text-white transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            fontSize: 'clamp(33px, 5.5vw, 69px)',
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {slides[current].heading}
        </h1>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full border-2 border-white transition-all duration-300 ${
              current === index
                ? 'bg-white scale-110'
                : 'bg-transparent hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
