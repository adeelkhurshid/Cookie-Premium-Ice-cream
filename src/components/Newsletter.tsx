import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Newsletter: React.FC = () => {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address 🍦', 'error');
      return;
    }
    setIsSubscribed(true);
    showToast('Yay! Welcome to our Sweet Squad! 🍪🎉', 'success');
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cream-white to-sky-blue/20 relative overflow-hidden">
      {/* Decorative floating items */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        className="absolute top-12 left-[12%] text-5xl opacity-20 pointer-events-none select-none hidden md:block"
      >
        🍪
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -180, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        className="absolute bottom-12 right-[12%] text-4xl opacity-15 pointer-events-none select-none hidden md:block"
      >
        🍪
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-2/3 left-[75%] text-4xl opacity-20 pointer-events-none select-none hidden md:block"
      >
        ✨
      </motion.div>

      {/* Illustrated wavy curves */}
      <div className="absolute bottom-0 left-0 right-0 h-10 text-cream-white fill-current pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-full transform scale-y-[-1]" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,40 C1400,60 1360,30 1320,50 C1280,70 1240,90 1200,60 Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 sm:p-12 border-4 border-chocolate-brown/5 shadow-xl text-center">
          
          <div className="w-14 h-14 bg-strawberry-pink/15 rounded-2xl flex items-center justify-center text-strawberry-pink text-3xl mx-auto mb-6">
            📬
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate-brown">
            Stay Sweet with Cookie Premium
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-chocolate-brown/70 max-w-xl mx-auto font-normal">
            Join the **Sweet Squad** newsletter list. Get 15% off your first online order, priority access to seasonal flavor releases, and chef tips!
          </p>

          <AnimatePresence mode="wait">
            {!isSubscribed ? (
              <motion.form
                key="subscription-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubscribe}
                className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3 bg-stone-50 border border-stone-200/60 p-2 rounded-full shadow-inner"
              >
                <div className="flex items-center gap-2 pl-4 w-full text-chocolate-brown">
                  <Mail size={16} className="text-chocolate-brown/40 shrink-0" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs bg-transparent border-none focus:outline-none py-2 text-chocolate-brown"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown font-display font-extrabold text-xs tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 shrink-0 shadow-md"
                >
                  Subscribe
                  <ArrowRight size={14} />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="subscription-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 bg-emerald-50 border border-emerald-200 p-6 rounded-2xl max-w-md mx-auto text-emerald-950 flex flex-col items-center"
              >
                <div className="text-3xl mb-2 animate-bounce">🎉</div>
                <h4 className="font-display font-bold text-base">You’re on the VIP List!</h4>
                <p className="text-xs text-emerald-800 mt-1">Check your inbox for your <strong>15% off promo code</strong>. Stay sweet!</p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="mt-4 text-xs font-semibold text-emerald-600 underline hover:text-emerald-800"
                >
                  Subscribe another email
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick legal / privacy pledge */}
          <p className="text-[10px] text-stone-400 mt-6 font-semibold uppercase tracking-wider">
            🔒 NO SPAM. SECURE PLEDGE. UNSUBSCRIBE ANY TIME.
          </p>

        </div>
      </div>
    </section>
  );
};
