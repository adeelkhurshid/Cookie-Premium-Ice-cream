import React from 'react';
import { Smartphone, Star, Award, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const MobileApp: React.FC = () => {
  return (
    <section id="app" className="py-24 bg-cream-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 right-[-10%] w-96 h-96 rounded-full bg-strawberry-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 rounded-full bg-cookie-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-chocolate-brown to-stone-900 rounded-[40px] p-8 sm:p-12 lg:p-16 text-cream-white shadow-2xl relative overflow-hidden">
          
          {/* Background graphics */}
          <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />
          <div className="absolute top-10 right-10 text-8xl opacity-10 select-none animate-bounce pointer-events-none">
            🍪
          </div>
          <div className="absolute bottom-10 left-10 text-8xl opacity-10 select-none animate-pulse pointer-events-none">
            🍦
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: App details content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-cookie-gold font-display font-extrabold text-sm tracking-widest uppercase bg-cookie-gold/10 px-4 py-1.5 rounded-full"
              >
                SMARTPHONE ORDERING
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mt-4 leading-tight"
              >
                Satisfy Your Cravings <br className="hidden sm:inline" />
                <span className="text-strawberry-pink">With One Tap</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-sm sm:text-base text-cream-white/80 leading-relaxed font-normal"
              >
                Download the Cookie Premium mobile app for real-time order tracking, access to exclusive hidden flavors, custom laboratory sandbox ordering, and sweet loyalty streak awards!
              </motion.p>

              {/* Reward stats columns */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-white/10 py-6 text-center lg:text-left max-w-xl">
                <div>
                  <div className="flex justify-center lg:justify-start text-cookie-gold mb-1 gap-1">
                    <Star className="fill-current" size={16} />
                    <Star className="fill-current" size={16} />
                    <Star className="fill-current" size={16} />
                    <Star className="fill-current" size={16} />
                    <Star className="fill-current" size={16} />
                  </div>
                  <h4 className="font-display font-bold text-lg">4.9 Stars</h4>
                  <p className="text-xs text-cream-white/60 font-semibold">Average App Store Rating</p>
                </div>
                <div>
                  <div className="flex justify-center lg:justify-start text-strawberry-pink mb-1">
                    <Award size={16} />
                  </div>
                  <h4 className="font-display font-bold text-lg">Free Scoop</h4>
                  <p className="text-xs text-cream-white/60 font-semibold">Reward upon download</p>
                </div>
                <div>
                  <div className="flex justify-center lg:justify-start text-sky-blue mb-1">
                    <Zap size={16} />
                  </div>
                  <h4 className="font-display font-bold text-lg">Express</h4>
                  <p className="text-xs text-cream-white/60 font-semibold">Priority curbside checkout</p>
                </div>
              </div>

              {/* Download Badges */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                {/* App Store */}
                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300"
                >
                  <AppleLogo className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold text-cream-white/50 block leading-none">Download on the</span>
                    <span className="text-sm font-sans font-extrabold text-white leading-none mt-1">App Store</span>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300"
                >
                  <GooglePlayLogo className="w-6 h-6" />
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold text-cream-white/50 block leading-none">Get it on</span>
                    <span className="text-sm font-sans font-extrabold text-white leading-none mt-1">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Realistic Styled Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center items-center">
              
              {/* Phone Frame wrapper */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-64 h-[480px] bg-stone-950 border-8 border-stone-800 rounded-[40px] shadow-2xl relative p-3 overflow-hidden"
              >
                {/* Speaker pill */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-stone-800 rounded-full z-30 flex justify-center items-center">
                  <div className="w-6 h-1 bg-stone-900 rounded-full" />
                </div>

                {/* Phone screen inside */}
                <div className="w-full h-full bg-cream-white rounded-[32px] overflow-hidden p-4 relative flex flex-col justify-between text-chocolate-brown z-10 select-none">
                  
                  {/* Status header */}
                  <div className="flex justify-between items-center text-[9px] font-bold text-chocolate-brown/40 mb-3">
                    <span>9:41 AM</span>
                    <div className="flex gap-1 items-center">
                      <span>📶</span>
                      <span>🔋 100%</span>
                    </div>
                  </div>

                  {/* App Navbar */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-display font-extrabold text-xs">Cookie Premium</span>
                    <span className="bg-strawberry-pink text-white text-[9px] px-2 py-0.5 rounded-full font-bold">VIP Gold</span>
                  </div>

                  {/* Body area */}
                  <div className="flex-grow overflow-y-auto space-y-3.5 pr-0.5 scrollbar-none">
                    
                    {/* Welcome banner card */}
                    <div className="bg-gradient-to-r from-strawberry-pink/10 to-cookie-gold/10 p-3 rounded-2xl text-left border border-strawberry-pink/10">
                      <span className="text-[9px] font-bold text-strawberry-pink uppercase">Free Scoop Waiting! 🍧</span>
                      <h4 className="font-display font-extrabold text-xs mt-0.5">Adeel’s Welcome Gift</h4>
                    </div>

                    {/* Flavor quick selection */}
                    <div className="space-y-1.5 text-left">
                      <h5 className="font-display font-bold text-[10px] text-chocolate-brown/50 uppercase">Popular Right Now</h5>
                      
                      {/* Flex rows */}
                      <div className="bg-white rounded-xl p-2 flex items-center justify-between border border-stone-100 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🍪</span>
                          <div>
                            <h6 className="font-display font-bold text-[10px] leading-tight">Cookies & Cream</h6>
                            <p className="text-[8px] text-stone-400 font-semibold">$6.50 • ★4.9</p>
                          </div>
                        </div>
                        <button className="bg-chocolate-brown text-white hover:bg-strawberry-pink px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all">
                          Add
                        </button>
                      </div>

                      <div className="bg-white rounded-xl p-2 flex items-center justify-between border border-stone-100 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🍓</span>
                          <div>
                            <h6 className="font-display font-bold text-[10px] leading-tight">Strawberry Bliss</h6>
                            <p className="text-[8px] text-stone-400 font-semibold">$6.25 • ★4.7</p>
                          </div>
                        </div>
                        <button className="bg-chocolate-brown text-white hover:bg-strawberry-pink px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all">
                          Add
                        </button>
                      </div>
                    </div>

                    {/* Streak card */}
                    <div className="bg-cookie-gold/15 p-2.5 rounded-2xl text-left flex items-center gap-2 border border-cookie-gold/25">
                      <span className="text-xl animate-pulse">🔥</span>
                      <div>
                        <h5 className="font-display font-bold text-[10px] text-amber-950">5-Day Sweet Streak!</h5>
                        <p className="text-[8px] text-amber-900 font-semibold">Order today to win a gourmet fudge bottle.</p>
                      </div>
                    </div>
                  </div>

                  {/* Custom bottom app tab indicators */}
                  <div className="border-t border-stone-100 pt-2 flex justify-around text-center text-[8px] font-bold text-chocolate-brown/50">
                    <div className="text-strawberry-pink">
                      <div className="text-base leading-none">🏠</div>
                      <span className="mt-0.5 block leading-none">Home</span>
                    </div>
                    <div>
                      <div className="text-base leading-none font-normal">🍪</div>
                      <span className="mt-0.5 block leading-none">Lab</span>
                    </div>
                    <div>
                      <div className="text-base leading-none font-normal">📍</div>
                      <span className="mt-0.5 block leading-none">Parlor</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// SVG helper for Apple Logo
const AppleLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94.1.01.21.02.31.02.9 0 2.01-.54 2.5-1.35z"></path>
  </svg>
);

// SVG helper for Google Play Logo
const GooglePlayLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M5.23 2.06c-.19.2-.3.49-.3.85v18.18c0 .36.11.65.3.85l.06.06L15.42 12l-.06-.06L5.29 2l-.06.06zm13.11 7.15l-3.32-1.89-3.12 3.12 3.12 3.12 3.32-1.89c.95-.54 1.58-1.42 1.58-2.46s-.63-1.92-1.58-2.46zM11.5 12.63l-2.61-2.61-3.4 3.4 3.4 3.4 2.61-2.61zM15.03 7.63l-3.32-1.89L5.49 11.23l6.22-6.22 3.32 1.89c.41.23.7.63.7 1.1s-.29.87-.7.13z" fill="#000"></path>
  </svg>
);
