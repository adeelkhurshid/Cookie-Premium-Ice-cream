import React, { useState } from 'react';
import { STORES } from '../data';
import { MapPin, Phone, Clock, ArrowUpRight, Navigation, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export const StoreLocations: React.FC = () => {
  const [selectedStoreId, setSelectedStoreId] = useState(STORES[0].id);

  const selectedStore = STORES.find(s => s.id === selectedStoreId) || STORES[0];

  return (
    <section id="locations" className="py-24 bg-sky-blue/10 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-cream-white pointer-events-none z-10 overflow-visible transform rotate-180">
        <svg viewBox="0 0 1440 120" className="w-full h-full text-cream-white fill-current" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,40 C1400,60 1360,30 1320,50 C1280,70 1240,90 1200,60 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blueberry-purple font-display font-extrabold text-sm tracking-widest uppercase bg-blueberry-purple/10 px-4 py-1.5 rounded-full">
            STORE FINDER
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-chocolate-brown mt-4">
            Visit Our Dessert Parlors
          </h2>
          <p className="mt-4 text-sm sm:text-base text-chocolate-brown/70 font-normal">
            Step into cookie heaven. Experience our loaded custom sundae counters, instagrammable swing seats, and fresh cookie-baking aromas.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* LEFT COLUMN: Locations List cards */}
          <div className="lg:col-span-5 space-y-4 max-h-[550px] overflow-y-auto pr-2">
            {STORES.map((store) => {
              const isSelected = store.id === selectedStoreId;
              return (
                <button
                  key={store.id}
                  onClick={() => setSelectedStoreId(store.id)}
                  className={`w-full text-left p-6 rounded-3xl border-2 transition-all duration-300 relative flex gap-4 ${
                    isSelected
                      ? 'border-strawberry-pink bg-white shadow-xl scale-[1.01]'
                      : 'border-transparent bg-white/65 hover:bg-white/95 text-chocolate-brown'
                  }`}
                >
                  {/* Selected Marker Ribbon */}
                  {isSelected && (
                    <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-strawberry-pink rounded-l-3xl" />
                  )}

                  {/* Icon */}
                  <div className={`p-3.5 rounded-2xl w-14 h-14 flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-strawberry-pink/15 text-strawberry-pink' : 'bg-stone-100 text-stone-500'
                  }`}>
                    <MapPin size={24} className={isSelected ? 'fill-strawberry-pink/10 animate-bounce' : ''} />
                  </div>

                  {/* Description text */}
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-chocolate-brown mb-2">
                      {store.name.split(' - ')[1]}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-chocolate-brown/70 leading-relaxed font-normal mb-3">
                      {store.address}
                    </p>

                    <div className="space-y-1.5 text-xs text-stone-500 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Phone size={12} />
                        <span>{store.phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-chocolate-brown/70">
                        <Clock size={12} />
                        <span>{store.hours}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Interactive Simulated Map Component */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-4 border-chocolate-brown/5 shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[400px]">
            {/* Map Art Background Layer (simulated aesthetic map) */}
            <div className="absolute inset-0 bg-stone-50 -z-10 flex flex-wrap gap-12 p-10 rotate-3 opacity-35 select-none pointer-events-none">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-2xl border border-stone-200/40 relative">
                  {i % 5 === 0 && <div className="absolute inset-x-0 top-6 h-1 bg-stone-200/50" />}
                  {i % 4 === 0 && <div className="absolute top-0 bottom-0 left-6 w-1 bg-stone-200/50" />}
                </div>
              ))}
            </div>

            {/* Map Title indicator */}
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center gap-2">
                <Compass className="text-strawberry-pink animate-spin-slow" size={20} />
                <span className="font-display font-bold text-xs text-chocolate-brown/50 tracking-wider uppercase">VIRTUAL DESSERT GPS</span>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">
                ● parlor online
              </span>
            </div>

            {/* Simulated Live Pointer Map Grid */}
            <div className="flex-grow flex items-center justify-center relative bg-stone-100/50 rounded-2xl border-2 border-stone-100 p-8 mb-6 overflow-hidden min-h-[250px]">
              
              {/* Main focal point pulsing pin representing selected store */}
              <motion.div
                key={selectedStore.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 10 }}
                className="flex flex-col items-center"
              >
                {/* Ping rings */}
                <div className="relative">
                  <div className="absolute top-0 left-0 w-12 h-12 bg-strawberry-pink/30 rounded-full -translate-x-3.5 -translate-y-3.5 animate-ping" />
                  <div className="absolute top-0 left-0 w-8 h-8 bg-cookie-gold/40 rounded-full -translate-x-1.5 -translate-y-1.5 animate-pulse" />
                  
                  {/* Pin Circle */}
                  <div className="bg-chocolate-brown text-cream-white w-10 h-10 rounded-full flex items-center justify-center shadow-xl border-2 border-white relative z-10">
                    <span className="text-xl">🍪</span>
                  </div>
                </div>

                {/* Floating Banner detailing selected parlor */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mt-4 bg-white px-4 py-2.5 rounded-xl border border-stone-100 shadow-xl text-center"
                >
                  <h4 className="font-display font-bold text-xs text-chocolate-brown">{selectedStore.name}</h4>
                  <p className="text-[10px] text-stone-400 font-semibold uppercase mt-0.5">{selectedStore.hours.split(': ')[1]}</p>
                </motion.div>
              </motion.div>

              {/* Scattered background landmarks */}
              <div className="absolute top-12 left-1/4 opacity-40 text-xs font-bold text-chocolate-brown/30 flex items-center gap-1">
                <span>🌳</span> Golden Park
              </div>
              <div className="absolute bottom-16 right-1/4 opacity-40 text-xs font-bold text-chocolate-brown/30 flex items-center gap-1">
                <span>🌊</span> Coast Blvd
              </div>
              <div className="absolute top-20 right-12 opacity-40 text-xs font-bold text-chocolate-brown/30 flex items-center gap-1">
                <span>🛒</span> Fashion Ave
              </div>
            </div>

            {/* Directions Launch Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 border-t border-stone-100 pt-4 mt-auto">
              <div>
                <span className="text-[10px] uppercase font-bold text-chocolate-brown/50 tracking-wider">Currently Focused</span>
                <h3 className="font-display font-bold text-lg text-chocolate-brown">
                  {selectedStore.name.split(' - ')[1]}
                </h3>
              </div>

              <a
                href={selectedStore.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown px-6 py-3.5 rounded-full flex items-center justify-center gap-2 font-display font-extrabold text-sm tracking-wide shadow-md transition-all duration-300 hover:scale-105"
              >
                <Navigation size={16} />
                Get Directions
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
