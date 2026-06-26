import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setOrderModalOpen } = useApp();

  const handleExploreClick = () => {
    const element = document.querySelector('#flavors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Decorative floating items configuration
  const floatingItems = [
    { emoji: '🍪', size: 'text-4xl sm:text-5xl', x: '10%', y: '15%', delay: 0, duration: 4 },
    { emoji: '🍓', size: 'text-3xl sm:text-4xl', x: '85%', y: '12%', delay: 0.5, duration: 3.5 },
    { emoji: '🍦', size: 'text-4xl sm:text-5xl', x: '82%', y: '75%', delay: 1, duration: 4.5 },
    { emoji: '🍫', size: 'text-3xl sm:text-4xl', x: '8%', y: '72%', delay: 0.2, duration: 3.8 },
    { emoji: '🍒', size: 'text-2xl sm:text-3xl', x: '45%', y: '85%', delay: 0.7, duration: 3.2 },
    { emoji: '✨', size: 'text-3xl', x: '52%', y: '18%', delay: 1.2, duration: 2.8 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-sky-blue/30 via-cream-white to-cream-white"
    >
      {/* Playful illustrated melting drips at top */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-sky-blue/20 pointer-events-none z-10 flex items-start overflow-visible">
        <svg
          viewBox="0 0 1440 120"
          className="absolute top-0 left-0 w-full text-sky-blue/20 fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,0 L1440,40 C1400,60 1360,30 1320,50 C1280,70 1240,90 1200,60 C1160,30 1120,50 1080,70 C1040,90 1000,70 960,50 C920,30 880,50 840,70 C800,90 760,70 720,50 C680,30 640,50 600,70 C560,90 520,70 480,50 C440,30 400,50 360,70 C320,90 280,70 240,50 C200,30 160,50 120,70 C80,90 40,70 0,40 Z"></path>
        </svg>
      </div>

      {/* Fluffy SVG clouds floating in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated clouds */}
        <motion.div
          animate={{ x: ['-20%', '110%'] }}
          transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
          className="absolute top-[12%] left-0 opacity-40 text-6xl text-white select-none"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: ['110%', '-20%'] }}
          transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
          className="absolute top-[28%] right-0 opacity-35 text-5xl text-white select-none"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: ['-10%', '110%'] }}
          transition={{ repeat: Infinity, duration: 55, ease: 'linear' }}
          className="absolute top-[65%] left-0 opacity-25 text-7xl text-white select-none"
        >
          ☁️
        </motion.div>

        {/* Scattered Illustrated Cookie Crumbs / Sprinkles on the hills */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream-white to-transparent opacity-80" />

        {/* Rolling SVG Hills at the bottom */}
        <svg
          viewBox="0 0 1440 200"
          className="absolute bottom-0 left-0 w-full text-cream-white fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,120 C240,60 480,180 720,120 C960,60 1200,160 1440,100 L1440,200 L0,200 Z"></path>
        </svg>
      </div>

      {/* Floating Animated Elements (bobbing up and down) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {floatingItems.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute hidden md:block select-none ${item.size}`}
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, index % 2 === 0 ? 12 : -12, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Content Side */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-strawberry-pink/10 border border-strawberry-pink/20 px-4 py-1.5 rounded-full text-strawberry-pink font-semibold text-xs sm:text-sm mb-6"
            >
              <Sparkles size={16} className="animate-spin" />
              100% HANDCRAFTED LUXURY ICE CREAM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-chocolate-brown leading-tight tracking-tight"
            >
              Scoop Happiness, <br />
              <span className="text-strawberry-pink relative inline-block">
                One Bite
                <svg
                  className="absolute bottom-[-10px] left-0 w-full h-3 text-cookie-gold"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,10 100,5"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              at a Time.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-chocolate-brown/80 max-w-xl font-normal leading-relaxed"
            >
              Premium handcrafted ice cream made with organic fresh cream, artisanal local cookies, and unforgettable signature flavor swirls. Taste the magic in every bite!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown font-display font-extrabold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative group overflow-hidden"
              >
                Order Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-strawberry-pink/10 border-2 border-chocolate-brown/10 hover:border-strawberry-pink/40 text-chocolate-brown hover:text-strawberry-pink font-display font-extrabold text-base transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                Explore Flavors
              </button>
            </motion.div>

            {/* Quick stats / Features badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-chocolate-brown/5 pt-6 w-full"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <span className="text-sm font-semibold text-chocolate-brown/80">Voted CA’s Best Ice Cream</span>
              </div>
              <div className="h-4 w-px bg-chocolate-brown/15 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🥛</span>
                <span className="text-sm font-semibold text-chocolate-brown/80">100% Organic Farm Milk</span>
              </div>
              <div className="h-4 w-px bg-chocolate-brown/15 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🚚</span>
                <span className="text-sm font-semibold text-chocolate-brown/80">Frozen-Fresh Delivery</span>
              </div>
            </motion.div>
          </div>

          {/* Large Hero Image Side */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-strawberry-pink/15 to-cookie-gold/25 blur-3xl rounded-full scale-75 -z-10 animate-pulse"></div>

            {/* Main Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 15, stiffness: 80, delay: 0.15 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]"
            >
              {/* Product Picture */}
              <img
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800"
                alt="Cookie Premium Loaded Waffle Sundae"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl hover:scale-102 transition-transform duration-500"
              />

              {/* Floating Badge (e.g., Voted Best Ice Cream) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-cookie-gold text-chocolate-brown rounded-2xl px-4 py-3 shadow-xl flex flex-col items-center justify-center border-2 border-white transform rotate-12"
              >
                <span className="text-2xl">🥇</span>
                <span className="font-display font-extrabold text-xs tracking-tight">DOUBLE COOKIE</span>
                <span className="font-sans font-bold text-[10px] uppercase text-chocolate-brown/75">Loaded</span>
              </motion.div>

              {/* Floating mini cone card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-cream-white/95 backdrop-blur-sm border-2 border-white rounded-2xl p-3 shadow-2xl flex items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              >
                <div className="bg-strawberry-pink/10 p-2 rounded-xl text-2xl">🍨</div>
                <div>
                  <h4 className="font-display font-bold text-xs text-chocolate-brown">Summer Cup</h4>
                  <p className="text-[10px] text-chocolate-brown/60 font-semibold">Loaded with double Oreos</p>
                  <div className="flex gap-1 mt-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-yellow-400 text-xs">★</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
