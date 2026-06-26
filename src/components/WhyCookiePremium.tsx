import React from 'react';
import { Sparkles, Milk, Truck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyCookiePremium: React.FC = () => {
  const cards = [
    {
      id: 'premium-ingredients',
      title: 'Premium Ingredients',
      description: 'We source gourmet single-origin chocolate, organic Madagascar bourbon vanilla, and hand-crushed local cookies.',
      icon: <Sparkles className="w-8 h-8 text-strawberry-pink" />,
      gradient: 'from-pink-500/10 to-rose-500/5',
      emoji: '✨'
    },
    {
      id: 'fresh-dairy',
      title: 'Farm Fresh Dairy',
      description: 'Our grass-fed dairy cream comes fresh daily from local sustainable family farms. No hormones or preservatives ever.',
      icon: <Milk className="w-8 h-8 text-sky-blue" />,
      gradient: 'from-blue-500/10 to-sky-500/5',
      emoji: '🥛'
    },
    {
      id: 'fast-delivery',
      title: 'Fast Delivery',
      description: 'Your sundaes arrive frozen in custom thermal dry-ice drypacks within 30 minutes, or it is completely free.',
      icon: <Truck className="w-8 h-8 text-mint-green" />,
      gradient: 'from-emerald-500/10 to-teal-500/5',
      emoji: '🚚'
    },
    {
      id: 'happiness-guarantee',
      title: '100% Happiness',
      description: 'Do not love your scoop? Let us know, and we will refund you or send a fresh batch instantly. No questions asked.',
      icon: <Heart className="w-8 h-8 text-cookie-gold" />,
      gradient: 'from-amber-500/10 to-yellow-500/5',
      emoji: '❤️'
    }
  ];

  return (
    <section className="py-24 bg-cream-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-strawberry-pink font-display font-extrabold text-sm tracking-widest uppercase bg-strawberry-pink/10 px-4 py-1.5 rounded-full"
          >
            OUR VALUES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-chocolate-brown mt-4"
          >
            Why Choose Cookie Premium?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-chocolate-brown/70 font-normal leading-relaxed"
          >
            We take ice cream very seriously (but with a lot of fun!). Here is what makes our handcrafted scoops so special.
          </motion.p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-white border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              {/* Soft decorative background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              {/* Icon container */}
              <div className="bg-stone-50 group-hover:bg-white rounded-2xl p-4 w-16 h-16 flex items-center justify-center shadow-inner group-hover:shadow-md transition-all mb-6 relative">
                {card.icon}
                <span className="absolute -bottom-1 -right-1 text-base">{card.emoji}</span>
              </div>

              {/* Text content */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-chocolate-brown group-hover:text-strawberry-pink transition-colors mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-chocolate-brown/70 leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
