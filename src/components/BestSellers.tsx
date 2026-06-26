import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import { BEST_SELLERS } from '../data';
import { ArrowLeft, ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export const BestSellers: React.FC = () => {
  const { addToCart } = useApp();
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="best-sellers" className="py-24 bg-cream-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-cookie-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center sm:text-left max-w-xl">
            <span className="text-strawberry-pink font-display font-extrabold text-sm tracking-widest uppercase bg-strawberry-pink/10 px-4 py-1.5 rounded-full">
              CUSTOMER FAVORITES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-chocolate-brown mt-4">
              Our Best Sellers
            </h2>
            <p className="mt-4 text-sm sm:text-base text-chocolate-brown/70 font-normal leading-relaxed">
              These are our legendary premium cookie ice cream sandwiches, dipped bowls, and handcrafted boxes. Warning: Highly addictive!
            </p>
          </div>

          {/* Sliding Navigation Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-white border border-chocolate-brown/10 hover:border-strawberry-pink text-chocolate-brown hover:text-strawberry-pink rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Scroll Left"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-white border border-chocolate-brown/10 hover:border-strawberry-pink text-chocolate-brown hover:text-strawberry-pink rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Scroll Right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Layout */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BEST_SELLERS.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] snap-start"
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-stone-100 shadow-lg hover:shadow-2xl overflow-hidden p-4 sm:p-5 h-full flex flex-col justify-between transition-all duration-300"
              >
                {/* Product Image cover */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-stone-100 rounded-full px-3 py-1 flex items-center gap-1 shadow-sm font-bold text-xs text-chocolate-brown">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>

                  {/* Category Promo Tag */}
                  <span className="absolute top-3 right-3 bg-cookie-gold text-chocolate-brown font-display font-extrabold text-[10px] tracking-wider px-3 py-1 rounded-full uppercase shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Card Content body */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-chocolate-brown mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-chocolate-brown/70 leading-relaxed font-normal line-clamp-2 mb-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing and Cart CTA bottom row */}
                  <div className="flex items-center justify-between border-t border-chocolate-brown/5 pt-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-chocolate-brown/50 tracking-wider">Price</span>
                      <span className="text-xl font-display font-extrabold text-chocolate-brown">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        details: product.badge
                      })}
                      className="bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown px-5 py-3 rounded-full flex items-center gap-2 font-display font-extrabold text-xs tracking-wide shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <ShoppingBag size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
