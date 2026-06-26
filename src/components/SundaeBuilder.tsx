import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SUNDAE_INGREDIENTS } from '../data';
import { SundaeIngredient } from '../types';
import { ShoppingBag, Sparkles, Check, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SundaeBuilder: React.FC = () => {
  const { addToCart } = useApp();
  
  // Custom Sundae Configuration States
  const [selectedBase, setSelectedBase] = useState<SundaeIngredient | null>(
    SUNDAE_INGREDIENTS.find(i => i.id === 'b-cookies') || null
  );
  const [selectedSauce, setSelectedSauce] = useState<SundaeIngredient | null>(
    SUNDAE_INGREDIENTS.find(i => i.id === 's-caramel') || null
  );
  const [selectedToppings, setSelectedToppings] = useState<SundaeIngredient[]>(
    [SUNDAE_INGREDIENTS.find(i => i.id === 't-sprinkles'), SUNDAE_INGREDIENTS.find(i => i.id === 't-cherry')].filter(Boolean) as SundaeIngredient[]
  );
  const [selectedCookies, setSelectedCookies] = useState<SundaeIngredient[]>(
    [SUNDAE_INGREDIENTS.find(i => i.id === 'c-oreo')].filter(Boolean) as SundaeIngredient[]
  );
  const [selectedCone, setSelectedCone] = useState<SundaeIngredient | null>(
    SUNDAE_INGREDIENTS.find(i => i.id === 'co-waffle') || null
  );

  const [activeTab, setActiveTab] = useState<'cone' | 'base' | 'sauce' | 'topping' | 'cookie'>('cone');

  // Filter ingredients by category
  const bases = SUNDAE_INGREDIENTS.filter(i => i.type === 'base');
  const sauces = SUNDAE_INGREDIENTS.filter(i => i.type === 'sauce');
  const toppings = SUNDAE_INGREDIENTS.filter(i => i.type === 'topping');
  const cookies = SUNDAE_INGREDIENTS.filter(i => i.type === 'cookie');
  const cones = SUNDAE_INGREDIENTS.filter(i => i.type === 'cone');

  const handleToppingToggle = (topping: SundaeIngredient) => {
    if (selectedToppings.find(t => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter(t => t.id !== topping.id));
    } else {
      if (selectedToppings.length >= 3) return; // Limit to 3 toppings max
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const handleCookieToggle = (cookie: SundaeIngredient) => {
    if (selectedCookies.find(c => c.id === cookie.id)) {
      setSelectedCookies(selectedCookies.filter(c => c.id !== cookie.id));
    } else {
      if (selectedCookies.length >= 2) return; // Limit to 2 cookies max
      setSelectedCookies([...selectedCookies, cookie]);
    }
  };

  const handleReset = () => {
    setSelectedBase(SUNDAE_INGREDIENTS.find(i => i.id === 'b-cookies') || null);
    setSelectedSauce(SUNDAE_INGREDIENTS.find(i => i.id === 's-caramel') || null);
    setSelectedToppings([SUNDAE_INGREDIENTS.find(i => i.id === 't-sprinkles'), SUNDAE_INGREDIENTS.find(i => i.id === 't-cherry')].filter(Boolean) as SundaeIngredient[]);
    setSelectedCookies([SUNDAE_INGREDIENTS.find(i => i.id === 'c-oreo')].filter(Boolean) as SundaeIngredient[]);
    setSelectedCone(SUNDAE_INGREDIENTS.find(i => i.id === 'co-waffle') || null);
  };

  // Calculate Total Price
  const basePrice = 4.50; // Starter sundae base price
  const totalPrice = basePrice +
    (selectedBase?.price ?? 0) +
    (selectedSauce?.price ?? 0) +
    selectedToppings.reduce((sum, t) => sum + t.price, 0) +
    selectedCookies.reduce((sum, c) => sum + c.price, 0) +
    (selectedCone?.price ?? 0);

  // Add Custom Sundae to Cart
  const handleAddToCart = () => {
    const ingredientsDescription = [
      selectedCone?.name,
      selectedBase?.name,
      selectedSauce ? `with ${selectedSauce.name}` : '',
      selectedToppings.length > 0 ? `Toppings: ${selectedToppings.map(t => t.name).join(', ')}` : '',
      selectedCookies.length > 0 ? `Cookies: ${selectedCookies.map(c => c.name).join(', ')}` : '',
    ].filter(Boolean).join(' | ');

    addToCart({
      id: `custom-sundae-${Date.now()}`,
      name: 'Custom Gourmet Sundae',
      price: totalPrice,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600',
      details: ingredientsDescription
    });
  };

  // Get color for sauce representation
  const getSauceColorClass = (sauceId: string) => {
    if (sauceId === 's-fudge') return 'bg-amber-950';
    if (sauceId === 's-caramel') return 'bg-amber-600';
    if (sauceId === 's-berry') return 'bg-rose-600';
    return 'bg-transparent';
  };

  // Get color for base scoop
  const getBaseScoopClass = (baseId: string) => {
    if (baseId === 'b-cookies') return 'bg-stone-100 border-2 border-stone-200';
    if (baseId === 'b-chocolate') return 'bg-amber-900 border-2 border-amber-950';
    if (baseId === 'b-strawberry') return 'bg-pink-300 border-2 border-pink-400';
    if (baseId === 'b-vanilla') return 'bg-yellow-50 border-2 border-yellow-200';
    return 'bg-white';
  };

  return (
    <section id="sundae-builder" className="py-24 bg-sky-blue/10 relative overflow-hidden">
      {/* Decorative vector arches */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-cream-white pointer-events-none z-10 overflow-visible">
        <svg
          viewBox="0 0 1440 120"
          className="absolute top-0 left-0 w-full text-cream-white fill-current transform rotate-180"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,0 L1440,40 C1400,60 1360,30 1320,50 C1280,70 1240,90 1200,60 C1160,30 1120,50 1080,70 C1040,90 1000,70 960,50 C920,30 880,50 840,70 C800,90 760,70 720,50 C680,30 640,50 600,70 C560,90 520,70 480,50 C440,30 400,50 360,70 C320,90 280,70 240,50 C200,30 160,50 120,70 C80,90 40,70 0,40 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blueberry-purple font-display font-extrabold text-sm tracking-widest uppercase bg-blueberry-purple/10 px-4 py-1.5 rounded-full"
          >
            INTERACTIVE EXPERIENCE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-chocolate-brown mt-4"
          >
            Build Your Own Sundae
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-chocolate-brown/70 font-normal leading-relaxed"
          >
            Design your fantasy ice cream cup or cone with our customizable laboratory. Mix, match, stack, drizzle, and cookie-crunch to perfection!
          </motion.p>
        </div>

        {/* Builder Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* LEFT COLUMN: Visual Live Preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 border-4 border-chocolate-brown/5 shadow-2xl relative overflow-hidden">
              {/* Card background swirl */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-blue/5 via-transparent to-transparent -z-10" />

              <div className="flex justify-between items-center mb-6">
                <span className="font-display font-bold text-sm text-chocolate-brown/40">LIVE PREVIEW</span>
                <button
                  onClick={handleReset}
                  className="text-xs text-chocolate-brown/60 hover:text-strawberry-pink flex items-center gap-1 font-semibold transition-colors"
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>

              {/* STAGE CONTAINER: Beautiful CSS construction of sundae scoops */}
              <div className="relative h-72 w-full flex flex-col justify-end items-center mb-6 border-b border-stone-100 pb-8">
                {/* Sprinkles container (absolute backdrop particle simulation) */}
                {selectedToppings.some(t => t.id === 't-sprinkles') && (
                  <div className="absolute inset-x-4 top-10 bottom-24 overflow-hidden pointer-events-none">
                    <div className="absolute top-[30%] left-[25%] w-1.5 h-4 bg-pink-400 rounded-full rotate-45 transform animate-bounce"></div>
                    <div className="absolute top-[25%] left-[65%] w-1.5 h-4 bg-yellow-400 rounded-full -rotate-12 transform animate-pulse"></div>
                    <div className="absolute top-[35%] left-[45%] w-1.5 h-4 bg-blue-400 rounded-full rotate-12 transform animate-ping"></div>
                    <div className="absolute top-[28%] left-[80%] w-1.5 h-4 bg-purple-400 rounded-full rotate-90 transform"></div>
                    <div className="absolute top-[40%] left-[15%] w-1.5 h-4 bg-green-400 rounded-full -rotate-45 transform"></div>
                  </div>
                )}

                {/* Maraschino Cherry bobbing on top */}
                {selectedToppings.some(t => t.id === 't-cherry') && (
                  <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute top-8 z-30 select-none text-4xl"
                  >
                    🍒
                  </motion.div>
                )}

                {/* Toppings layer (representing Almonds/Chips/Sprinkles) */}
                <div className="absolute top-16 z-20 flex gap-2 justify-center w-full pointer-events-none">
                  {selectedToppings.map(t => {
                    if (t.id === 't-cherry' || t.id === 't-sprinkles') return null;
                    return (
                      <motion.div
                        key={t.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-white/90 border border-chocolate-brown/10 shadow-sm px-2.5 py-1 rounded-full text-xs font-bold text-chocolate-brown flex items-center gap-1"
                      >
                        <span>{t.emoji}</span>
                        <span>{t.name.split(' ')[0]}</span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Swirled Cookie inserts ( Oreo, shortbread, brownie ) */}
                <div className="absolute inset-x-8 bottom-28 z-20 pointer-events-none flex justify-between">
                  {selectedCookies.map((c, i) => (
                    <motion.div
                      key={c.id}
                      initial={{ scale: 0, rotate: i === 0 ? -25 : 25 }}
                      animate={{ scale: 1, rotate: i === 0 ? -25 : 25 }}
                      className="text-4xl filter drop-shadow-md select-none transform"
                    >
                      {c.emoji || '🍪'}
                    </motion.div>
                  ))}
                </div>

                {/* Dripping Sauce Layer */}
                {selectedSauce && (
                  <motion.div
                    key={selectedSauce.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '14px' }}
                    className={`absolute bottom-[114px] z-10 w-44 rounded-b-md flex justify-around overflow-visible ${getSauceColorClass(selectedSauce.id)}`}
                  >
                    <div className={`w-3 h-5 rounded-b-full absolute left-[15%] top-1 ${getSauceColorClass(selectedSauce.id)}`} />
                    <div className={`w-4 h-8 rounded-b-full absolute left-[45%] top-1 ${getSauceColorClass(selectedSauce.id)}`} />
                    <div className={`w-3.5 h-6 rounded-b-full absolute left-[75%] top-1 ${getSauceColorClass(selectedSauce.id)}`} />
                  </motion.div>
                )}

                {/* Ice Cream Base Scoop */}
                {selectedBase && (
                  <motion.div
                    key={selectedBase.id}
                    initial={{ scale: 0, y: 40 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 60 }}
                    className={`w-48 h-48 rounded-full flex items-center justify-center -mb-20 shadow-inner overflow-hidden relative ${getBaseScoopClass(selectedBase.id)}`}
                  >
                    {/* Cookie crumb flecks inside cookies & cream scoop */}
                    {selectedBase.id === 'b-cookies' && (
                      <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-stone-900 rounded-full" />
                        <div className="absolute top-[40%] left-[60%] w-3 h-1.5 bg-stone-800 rounded-md rotate-12" />
                        <div className="absolute top-[70%] left-[25%] w-1.5 h-3 bg-stone-950 rounded-sm" />
                        <div className="absolute top-[55%] left-[80%] w-2 h-2 bg-stone-900 rounded-full" />
                        <div className="absolute top-[30%] left-[10%] w-2.5 h-1 bg-stone-800 rounded-md" />
                      </div>
                    )}
                    {/* Chocolate chunk flecks inside chocolate scoop */}
                    {selectedBase.id === 'b-chocolate' && (
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-[25%] left-[25%] w-3 h-3 bg-black rounded-sm" />
                        <div className="absolute top-[60%] left-[70%] w-2.5 h-2.5 bg-black rounded-full" />
                        <div className="absolute top-[45%] left-[40%] w-3.5 h-2 bg-black rounded-md" />
                      </div>
                    )}
                    <span className="text-5xl opacity-40">{selectedBase.emoji}</span>
                  </motion.div>
                )}

                {/* Cone or Bowl Vessel Container at the bottom */}
                {selectedCone && (
                  <motion.div
                    key={selectedCone.id}
                    initial={{ scale: 0, y: 40 }}
                    animate={{ scale: 1, y: 0 }}
                    className="relative z-10 w-44 flex flex-col items-center"
                  >
                    {selectedCone.id === 'co-waffle' && (
                      // Classic brown grid cone
                      <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[100px] border-t-amber-400 relative">
                        <div className="absolute top-[-100px] left-[-60px] w-[120px] h-[100px] bg-gradient-to-br from-amber-500/10 to-transparent flex flex-wrap gap-2 p-3 overflow-hidden select-none">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="w-3 h-3 border border-amber-600/20 rotate-45" />
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedCone.id === 'co-chocolate' && (
                      // Chocolate dipped cone
                      <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[100px] border-t-amber-500 relative">
                        <div className="absolute top-[-102px] left-[-60px] w-[120px] h-[30px] bg-amber-950 rounded-b-xl z-20 border-t-4 border-amber-900" />
                        <div className="absolute top-[-100px] left-[-60px] w-[120px] h-[100px] bg-gradient-to-br from-amber-600/15 to-transparent flex flex-wrap gap-2 p-3 overflow-hidden select-none">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="w-3 h-3 border border-amber-700/25 rotate-45" />
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedCone.id === 'co-bowl' && (
                      // Waffle bowl
                      <div className="w-40 h-16 bg-amber-400 rounded-b-3xl border-t-8 border-amber-500 relative flex overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent flex flex-wrap gap-2 p-2 rotate-12 select-none">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="w-4 h-4 border border-amber-600/20" />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Receipt / Invoice breakdown list */}
              <div className="space-y-2.5 text-xs text-chocolate-brown/80 mb-6 font-semibold">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Sundae Base Price</span>
                  <span>${basePrice.toFixed(2)}</span>
                </div>
                {selectedCone && (
                  <div className="flex justify-between text-stone-500">
                    <span>{selectedCone.name} ({selectedCone.emoji})</span>
                    <span>+${selectedCone.price.toFixed(2)}</span>
                  </div>
                )}
                {selectedBase && (
                  <div className="flex justify-between text-stone-500">
                    <span>{selectedBase.name} ({selectedBase.emoji})</span>
                    <span>+${selectedBase.price.toFixed(2)}</span>
                  </div>
                )}
                {selectedSauce && (
                  <div className="flex justify-between text-stone-500">
                    <span>{selectedSauce.name} ({selectedSauce.emoji})</span>
                    <span>+${selectedSauce.price.toFixed(2)}</span>
                  </div>
                )}
                {selectedToppings.map(t => (
                  <div key={t.id} className="flex justify-between text-stone-500">
                    <span>{t.name} ({t.emoji})</span>
                    <span>+${t.price.toFixed(2)}</span>
                  </div>
                ))}
                {selectedCookies.map(c => (
                  <div key={c.id} className="flex justify-between text-stone-500">
                    <span>{c.name} ({c.emoji})</span>
                    <span>+${c.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Total Row & Add To Cart Button */}
              <div className="flex items-center justify-between border-t border-chocolate-brown/10 pt-5 mt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-chocolate-brown/50 tracking-wider">Total Est. Price</span>
                  <span className="text-2xl font-display font-extrabold text-chocolate-brown text-glow">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="bg-strawberry-pink hover:bg-cookie-gold text-white hover:text-chocolate-brown px-6 py-3.5 rounded-full flex items-center gap-2 font-display font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse"
                >
                  <ShoppingBag size={16} />
                  Add Custom Order
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Controls Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-4 border-chocolate-brown/5 shadow-xl">
            {/* Category selection bar */}
            <div className="flex border-b border-stone-100 overflow-x-auto pb-2 scrollbar-none gap-2">
              {[
                { id: 'cone', label: '1. Vessel', emoji: '🍦' },
                { id: 'base', label: '2. Flavor Scoop', emoji: '🍨' },
                { id: 'sauce', label: '3. Swirl Sauce', emoji: '🫗' },
                { id: 'topping', label: '4. Toppings (Max 3)', emoji: '🌈' },
                { id: 'cookie', label: '5. Cookies (Max 2)', emoji: '🍪' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-4 py-3 rounded-t-2xl font-display font-bold text-xs tracking-wider uppercase border-b-2 transition-all shrink-0 ${
                    activeTab === tab.id
                      ? 'border-strawberry-pink text-strawberry-pink bg-strawberry-pink/5 font-extrabold'
                      : 'border-transparent text-chocolate-brown/50 hover:text-chocolate-brown'
                  }`}
                >
                  <span>{tab.emoji}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* TAB PANELS */}
            <div className="py-8">
              {/* 1. VESSEL (Cone / Cup Selection) */}
              {activeTab === 'cone' && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-lg text-chocolate-brown mb-2">Select Your Sundae Container</h3>
                  <p className="text-xs text-chocolate-brown/60 mb-4 font-semibold">Choose between crispy classic waffle cones or dipped premium waffle bowls.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {cones.map(cone => (
                      <button
                        key={cone.id}
                        onClick={() => setSelectedCone(cone)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all relative ${
                          selectedCone?.id === cone.id
                            ? 'border-strawberry-pink bg-strawberry-pink/5 text-strawberry-pink'
                            : 'border-stone-100 bg-stone-50/50 hover:bg-stone-50 text-chocolate-brown'
                        }`}
                      >
                        {selectedCone?.id === cone.id && (
                          <div className="absolute top-2 right-2 bg-strawberry-pink text-white rounded-full p-1">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                        <span className="text-3xl block mb-2">{cone.emoji}</span>
                        <h4 className="font-display font-bold text-sm">{cone.name}</h4>
                        <span className="text-xs font-semibold text-chocolate-brown/60">+${cone.price.toFixed(2)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. BASE SCOOP */}
              {activeTab === 'base' && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-lg text-chocolate-brown mb-2">Select Your Core Ice Cream Flavor</h3>
                  <p className="text-xs text-chocolate-brown/60 mb-4 font-semibold">The heart of your sundae. Pick your premium churned base scoop.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {bases.map(base => (
                      <button
                        key={base.id}
                        onClick={() => setSelectedBase(base)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all relative flex items-center gap-4 ${
                          selectedBase?.id === base.id
                            ? 'border-strawberry-pink bg-strawberry-pink/5 text-strawberry-pink'
                            : 'border-stone-100 bg-stone-50/50 hover:bg-stone-50 text-chocolate-brown'
                        }`}
                      >
                        {selectedBase?.id === base.id && (
                          <div className="absolute top-2 right-2 bg-strawberry-pink text-white rounded-full p-1">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                        <span className="text-4xl">{base.emoji}</span>
                        <div>
                          <h4 className="font-display font-bold text-sm">{base.name}</h4>
                          <span className="text-xs font-semibold text-chocolate-brown/60">+${base.price.toFixed(2)}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. SAUCE DRIZZLE */}
              {activeTab === 'sauce' && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-lg text-chocolate-brown mb-2">Select a Drizzle Swirl Sauce</h3>
                  <p className="text-xs text-chocolate-brown/60 mb-4 font-semibold">Add a layer of velvety rich ribbons to swirl through your scoops.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {sauces.map(sauce => (
                      <button
                        key={sauce.id}
                        onClick={() => setSelectedSauce(selectedSauce?.id === sauce.id ? null : sauce)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all relative ${
                          selectedSauce?.id === sauce.id
                            ? 'border-strawberry-pink bg-strawberry-pink/5 text-strawberry-pink'
                            : 'border-stone-100 bg-stone-50/50 hover:bg-stone-50 text-chocolate-brown'
                        }`}
                      >
                        {selectedSauce?.id === sauce.id && (
                          <div className="absolute top-2 right-2 bg-strawberry-pink text-white rounded-full p-1">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                        <span className="text-3xl block mb-2">{sauce.emoji}</span>
                        <h4 className="font-display font-bold text-sm">{sauce.name}</h4>
                        <span className="text-xs font-semibold text-chocolate-brown/60">+${sauce.price.toFixed(2)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. CRUNCHY TOPPINGS */}
              {activeTab === 'topping' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-display font-bold text-lg text-chocolate-brown">Choose Toppings (Select up to 3)</h3>
                    <span className="text-xs bg-blueberry-purple/10 text-blueberry-purple px-2.5 py-1 rounded-full font-bold">
                      {selectedToppings.length}/3 Selected
                    </span>
                  </div>
                  <p className="text-xs text-chocolate-brown/60 mb-4 font-semibold">Mix and match roasted almond slices, maraschino cherries, premium cocoa chips or sprinkles.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {toppings.map(topping => {
                      const isSelected = selectedToppings.some(t => t.id === topping.id);
                      return (
                        <button
                          key={topping.id}
                          onClick={() => handleToppingToggle(topping)}
                          disabled={!isSelected && selectedToppings.length >= 3}
                          className={`p-4 rounded-2xl border-2 text-left transition-all relative flex items-center gap-4 ${
                            isSelected
                              ? 'border-strawberry-pink bg-strawberry-pink/5 text-strawberry-pink'
                              : 'border-stone-100 bg-stone-50/50 hover:bg-stone-50 text-chocolate-brown disabled:opacity-45'
                          }`}
                        >
                          {isSelected && (
                            <div className="absolute top-2 right-2 bg-strawberry-pink text-white rounded-full p-1">
                              <Check size={12} strokeWidth={3} />
                            </div>
                          )}
                          <span className="text-3xl">{topping.emoji}</span>
                          <div>
                            <h4 className="font-display font-bold text-sm">{topping.name}</h4>
                            <span className="text-xs font-semibold text-chocolate-brown/60">+${topping.price.toFixed(2)}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 5. GOURMET COOKIES */}
              {activeTab === 'cookie' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-display font-bold text-lg text-chocolate-brown">Select Gourmet Cookies (Select up to 2)</h3>
                    <span className="text-xs bg-cookie-gold/10 text-amber-800 px-2.5 py-1 rounded-full font-bold">
                      {selectedCookies.length}/2 Selected
                    </span>
                  </div>
                  <p className="text-xs text-chocolate-brown/60 mb-4 font-semibold">Our namesake cookies. Loaded double oreos, buttery shortbread layers, or dense fudge brownie bites.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {cookies.map(cookie => {
                      const isSelected = selectedCookies.some(c => c.id === cookie.id);
                      return (
                        <button
                          key={cookie.id}
                          onClick={() => handleCookieToggle(cookie)}
                          disabled={!isSelected && selectedCookies.length >= 2}
                          className={`p-4 rounded-2xl border-2 text-left transition-all relative ${
                            isSelected
                              ? 'border-strawberry-pink bg-strawberry-pink/5 text-strawberry-pink'
                              : 'border-stone-100 bg-stone-50/50 hover:bg-stone-50 text-chocolate-brown disabled:opacity-45'
                          }`}
                        >
                          {isSelected && (
                            <div className="absolute top-2 right-2 bg-strawberry-pink text-white rounded-full p-1">
                              <Check size={12} strokeWidth={3} />
                            </div>
                          )}
                          <span className="text-3xl block mb-2">{cookie.emoji}</span>
                          <h4 className="font-display font-bold text-sm">{cookie.name}</h4>
                          <span className="text-xs font-semibold text-chocolate-brown/60">+${cookie.price.toFixed(2)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Tips / Highlight */}
            <div className="bg-cookie-gold/10 rounded-2xl p-4 flex items-start gap-3 border border-cookie-gold/20">
              <span className="text-xl">💡</span>
              <p className="text-xs text-amber-950 leading-relaxed font-semibold">
                <strong>Chef’s Recommendation:</strong> Try our legendary combination of a <strong>Signature Waffle Cone</strong> with <strong>Cookies & Cream Scoop</strong>, drizzled in <strong>Salted Caramel</strong>, topped with <strong>Fudge Brownie Bites</strong>!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
