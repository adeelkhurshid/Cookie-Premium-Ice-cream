import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIdx]);

  const handlePrev = () => {
    setDirection('left');
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 100, damping: 15 }
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 }
    })
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-24 bg-sky-blue/10 relative overflow-hidden">
      {/* Decorative SVG background shapes */}
      <div className="absolute top-1/4 left-[-10%] w-80 h-80 rounded-full bg-strawberry-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-80 h-80 rounded-full bg-cookie-gold/5 blur-3xl pointer-events-none" />

      {/* SVG Waves */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-cream-white pointer-events-none z-10 overflow-visible">
        <svg
          viewBox="0 0 1440 120"
          className="absolute top-0 left-0 w-full text-cream-white fill-current transform rotate-180"
          preserveAspectRatio="none"
        >
          <path d="M0,120 C240,60 480,180 720,120 C960,60 1200,160 1440,100 L1440,200 L0,200 Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blueberry-purple font-display font-extrabold text-sm tracking-widest uppercase bg-blueberry-purple/10 px-4 py-1.5 rounded-full">
            REVIEWS & STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-chocolate-brown mt-4">
            Stay Sweet, Stay Happy
          </h2>
          <p className="mt-4 text-sm sm:text-base text-chocolate-brown/70 font-normal">
            Hear from our wonderful community of ice cream lovers, dessert critiques, and families.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-white/60 backdrop-blur-md border-2 border-white/60 p-8 sm:p-12 rounded-3xl shadow-xl relative"
            >
              {/* Quote Mark Icon background */}
              <Quote className="absolute right-8 top-8 w-16 h-16 text-chocolate-brown/5 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Reviewer Photo */}
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-strawberry-pink to-cookie-gold rounded-full blur-sm scale-105 opacity-60" />
                  <img
                    src={current.avatar}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white relative z-10"
                  />
                  <span className="absolute bottom-0 right-0 bg-white shadow-md text-base rounded-full w-8 h-8 flex items-center justify-center border border-stone-100 z-15">
                    🍪
                  </span>
                </div>

                {/* Reviewer Text Details */}
                <div className="flex-grow text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start text-yellow-400 mb-3 gap-1">
                    {Array.from({ length: current.stars }).map((_, i) => (
                      <Star key={i} size={16} className="fill-current animate-pulse" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-sm sm:text-base text-chocolate-brown/80 font-normal leading-relaxed italic mb-6">
                    "{current.review}"
                  </p>

                  {/* Name and Role */}
                  <div>
                    <h4 className="font-display font-bold text-lg text-chocolate-brown">{current.name}</h4>
                    <p className="text-xs sm:text-sm text-chocolate-brown/50 font-semibold uppercase tracking-wider">{current.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls overlays */}
          <div className="absolute left-[-20px] sm:left-[-40px] top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 bg-white hover:bg-strawberry-pink border border-chocolate-brown/10 hover:border-strawberry-pink text-chocolate-brown hover:text-white rounded-full shadow-lg transition-all active:scale-90"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute right-[-20px] sm:right-[-40px] top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 bg-white hover:bg-strawberry-pink border border-chocolate-brown/10 hover:border-strawberry-pink text-chocolate-brown hover:text-white rounded-full shadow-lg transition-all active:scale-90"
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Indicators dot bar */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIdx ? 'right' : 'left');
                setActiveIdx(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIdx === idx ? 'w-8 bg-strawberry-pink' : 'w-2.5 bg-chocolate-brown/20 hover:bg-chocolate-brown/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
