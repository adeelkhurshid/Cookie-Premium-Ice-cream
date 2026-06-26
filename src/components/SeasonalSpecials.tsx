import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ShoppingBag, Flame } from 'lucide-react';
import { motion } from 'motion/react';

export const SeasonalSpecials: React.FC = () => {
  const { addToCart } = useApp();

  const handleBuySummerPack = () => {
    addToCart({
      id: 'summer-party-pack',
      name: 'Summer Scoop Party Pack (4-Pack)',
      price: 24.50,
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=600',
      details: 'Limited Edition Pack: 2x Strawberry Bliss, 2x Mango Cookie Magic'
    });
  };

  return (
    <section className="py-24 bg-gradient-to-r from-strawberry-pink/15 via-rose-50 to-cookie-gold/15 relative overflow-hidden">
      {/* Decorative SVG background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-strawberry-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cookie-gold/10 blur-3xl pointer-events-none" />

      {/* Melting top drip */}
      <div className="absolute top-0 left-0 right-0 h-8 text-cream-white fill-current overflow-visible pointer-events-none transform rotate-180">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,40 C1400,60 1360,30 1320,50 C1280,70 1240,90 1200,60 C1160,30 1120,50 1080,70 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-strawberry-pink text-white px-4 py-1.5 rounded-full font-display font-extrabold text-xs uppercase tracking-wider mb-6 shadow-md"
            >
              <Flame size={14} className="animate-pulse" />
              LIMITED SUMMER EDITION
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-display font-extrabold text-chocolate-brown leading-tight"
            >
              The Summer <br className="hidden sm:inline" />
              <span className="text-strawberry-pink">Scoop Fiesta</span> is Here!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base sm:text-lg text-chocolate-brown/80 leading-relaxed font-normal"
            >
              Beat the heat with our tropical collection featuring sweet <strong>Mango Cookie Magic</strong> and freshly plucked organic <strong>Strawberry Bliss</strong>! Combined into an exclusive designer cooler pack.
            </motion.p>

            {/* Feature lists */}
            <div className="mt-8 space-y-3 flex flex-col items-center lg:items-start font-semibold text-chocolate-brown/70 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="text-lg">📦</span>
                <span>Includes 100% Biodegradable Eco-Cooler Box</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🍪</span>
                <span>Freshly baked premium waffle cones included (4-Pack)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <span>Exclusive seasonal recipe cards</span>
              </div>
            </div>

            {/* CTA Try Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleBuySummerPack}
                className="bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown px-8 py-4 rounded-full font-display font-extrabold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <ShoppingBag size={18} />
                Try Now (Buy Pack - $24.50)
              </button>
              
              <button
                onClick={() => {
                  const el = document.querySelector('#flavors');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/80 backdrop-blur-sm border-2 border-chocolate-brown/10 hover:border-strawberry-pink text-chocolate-brown hover:text-strawberry-pink px-8 py-4 rounded-full font-display font-extrabold text-base transition-all duration-300 hover:scale-105"
              >
                View Seasonal Scoops
              </button>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Visual background circles */}
            <div className="absolute w-80 h-80 rounded-full bg-cookie-gold/20 -z-10 blur-2xl animate-pulse" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 15 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800"
                alt="Limited Edition Summer Collection"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-3xl border-8 border-white shadow-2xl"
              />

              {/* Float pricing tag */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-cookie-gold text-chocolate-brown rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl border-4 border-white transform rotate-6"
              >
                <span className="text-[10px] uppercase font-bold text-chocolate-brown/70 leading-none">Only</span>
                <span className="text-xl font-display font-black leading-none mt-1">$24.50</span>
                <span className="text-[9px] uppercase font-bold text-strawberry-pink line-through mt-0.5">$32.00</span>
              </motion.div>

              {/* Float details badge */}
              <div className="absolute -top-4 -left-4 bg-white border border-stone-100 rounded-2xl p-3.5 shadow-xl flex items-center gap-2 transform -rotate-6">
                <span className="text-2xl">🥭</span>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-chocolate-brown">Mango Cookie</h4>
                  <p className="text-[10px] text-emerald-600 font-bold">100% Real Fruit Swirl</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
