import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FLAVORS } from '../data';
import { Heart, ShoppingBag, Star, Search, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Flavors: React.FC = () => {
  const { addToCart, toggleFavorite, isFavorite } = useApp();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Classic' | 'Signature' | 'Seasonal'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ('All' | 'Classic' | 'Signature' | 'Seasonal')[] = [
    'All',
    'Classic',
    'Signature',
    'Seasonal',
  ];

  const filteredFlavors = FLAVORS.filter((flavor) => {
    const matchesCategory = activeCategory === 'All' || flavor.category === activeCategory;
    const matchesSearch = flavor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          flavor.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="flavors" className="py-24 bg-cream-white relative overflow-hidden">
      {/* Decorative decorative elements */}
      <div className="absolute top-10 right-[-5%] w-72 h-72 rounded-full bg-strawberry-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 rounded-full bg-cookie-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-strawberry-pink font-display font-extrabold text-sm tracking-widest uppercase bg-strawberry-pink/10 px-4 py-1.5 rounded-full"
          >
            HANDCRAFTED RECIPES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-chocolate-brown mt-4"
          >
            Our Signature Flavors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-chocolate-brown/70 leading-relaxed font-normal"
          >
            Indulge in our exquisite collection of premium ice creams, slowly churned with fresh dairy and packed full of loaded gourmet cookie pairings.
          </motion.p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-chocolate-brown/5 pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-display font-bold text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-chocolate-brown text-cream-white shadow-md'
                    : 'bg-white hover:bg-strawberry-pink/10 text-chocolate-brown/80 border border-chocolate-brown/10 hover:border-strawberry-pink/20'
                }`}
              >
                {cat === 'All' ? '🍨 View All' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 flex items-center">
            <input
              type="text"
              placeholder="Search flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-chocolate-brown/10 focus:border-strawberry-pink focus:outline-none focus:ring-2 focus:ring-strawberry-pink/20 font-sans text-sm text-chocolate-brown transition-all"
            />
            <Search size={18} className="absolute left-3.5 text-chocolate-brown/40" />
          </div>
        </div>

        {/* Flavors Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredFlavors.map((flavor, index) => {
              const isFav = isFavorite(flavor.id);
              return (
                <motion.div
                  key={flavor.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border-2 border-transparent hover:border-strawberry-pink/20 transition-all duration-300 flex flex-col h-full bg-white ${flavor.bgColor}`}
                >
                  {/* Card Image Cover with controls */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <img
                      src={flavor.image}
                      alt={flavor.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                      {flavor.isBestSeller && (
                        <span className="bg-chocolate-brown text-cream-white text-[10px] font-display font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          🔥 BEST SELLER
                        </span>
                      )}
                      {flavor.isNew && (
                        <span className="bg-strawberry-pink text-white text-[10px] font-display font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          ✨ NEW
                        </span>
                      )}
                    </div>

                    {/* Favorite heart overlay */}
                    <button
                      onClick={() => toggleFavorite(flavor.id)}
                      className="absolute top-3 right-3 p-2 bg-white/95 backdrop-blur-sm hover:bg-rose-50 rounded-full shadow-md text-chocolate-brown hover:text-strawberry-pink active:scale-90 transition-all z-10"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        size={18}
                        className={`transition-colors ${isFav ? 'fill-strawberry-pink text-strawberry-pink' : 'text-chocolate-brown/70'}`}
                      />
                    </button>
                  </div>

                  {/* Card Content body */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Label */}
                    <span className={`inline-self-start text-[10px] font-display font-extrabold px-2.5 py-1 rounded-md mb-3 ${flavor.tagColor}`}>
                      {flavor.category}
                    </span>

                    {/* Rating row */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex text-yellow-400">
                        <Star size={14} className="fill-current" />
                      </div>
                      <span className="text-xs font-bold text-chocolate-brown">{flavor.rating}</span>
                      <span className="text-stone-400 text-[11px]">({flavor.reviewsCount} reviews)</span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-chocolate-brown group-hover:text-strawberry-pink transition-colors line-clamp-1 mb-2">
                      {flavor.name}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-chocolate-brown/70 leading-relaxed font-normal flex-grow line-clamp-3 mb-6">
                      {flavor.description}
                    </p>

                    {/* Price and Cart Button CTA Row */}
                    <div className="flex items-center justify-between border-t border-chocolate-brown/5 pt-4 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-chocolate-brown/50 tracking-wider">Price</span>
                        <span className="text-lg font-display font-extrabold text-chocolate-brown">
                          ${flavor.price.toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => addToCart({
                          id: flavor.id,
                          name: flavor.name,
                          price: flavor.price,
                          image: flavor.image,
                          details: `${flavor.category} Ice Cream`
                        })}
                        className="bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown px-4 py-2.5 rounded-full flex items-center gap-2 font-display font-extrabold text-xs tracking-wide shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <ShoppingBag size={14} />
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredFlavors.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-inner max-w-xl mx-auto border border-dashed border-chocolate-brown/10">
            <span className="text-5xl">🤷‍♀️</span>
            <h3 className="font-display font-bold text-xl text-chocolate-brown mt-4">No Flavors Found</h3>
            <p className="text-sm text-chocolate-brown/60 mt-2">
              We couldn’t find any flavors matching "{searchQuery}". Try selecting another category!
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-6 bg-chocolate-brown text-white hover:bg-cookie-gold hover:text-chocolate-brown font-display font-bold px-6 py-2 rounded-full text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
