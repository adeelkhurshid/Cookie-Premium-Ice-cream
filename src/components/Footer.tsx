import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, Instagram, Facebook, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setOrderModalOpen } = useApp();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chocolate-brown text-cream-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 bg-radial-gradient from-white/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl sm:text-3xl font-display font-black tracking-tight text-cream-white">
                Cookie<span className="text-strawberry-pink"> Premium</span>
              </span>
              <span className="text-2xl">🍪</span>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-cream-white/70 leading-relaxed font-normal max-w-sm">
              Crafting premium handcrafted ice creams in California since 2018. Slowly churned with fresh organic farm dairy and loaded with gourmet custom cookie combinations.
            </p>

            {/* Social Media icons */}
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={18} />, href: 'https://instagram.com' },
                { icon: <Facebook size={18} />, href: 'https://facebook.com' },
                { icon: <Twitter size={18} />, href: 'https://twitter.com' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 hover:bg-strawberry-pink text-cream-white hover:text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="font-display font-bold text-base tracking-wider uppercase text-cookie-gold">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream-white/75 font-semibold">
              {[
                { name: 'Home Base', href: '#home' },
                { name: 'Signature Flavors', href: '#flavors' },
                { name: 'Custom Sundae Lab', href: '#sundae-builder' },
                { name: 'Best Sellers', href: '#best-sellers' },
                { name: 'Locations & Map', href: '#locations' },
                { name: 'Smartphone Ordering', href: '#app' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-strawberry-pink transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Help (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="font-display font-bold text-base tracking-wider uppercase text-cookie-gold">Contact Us</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-cream-white/75 font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-strawberry-pink shrink-0 mt-0.5" />
                <span>84 Prince Street, SoHo New York, NY 10012</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-strawberry-pink shrink-0" />
                <span>(212) 555-0143</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-strawberry-pink shrink-0" />
                <a href="mailto:hello@cookiepremium.com" className="hover:text-strawberry-pink transition-colors">
                  hello@cookiepremium.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours / Franchise (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-bold text-base tracking-wider uppercase text-cookie-gold">Operating Hours</h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-cream-white/75 font-semibold">
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-strawberry-pink shrink-0" />
                <div>
                  <p className="font-bold">Mon - Sun Parlors</p>
                  <p className="text-xs text-cream-white/60 font-medium">11:00 AM - Midnight (EST)</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setOrderModalOpen(true)}
                className="bg-strawberry-pink hover:bg-cookie-gold text-white hover:text-chocolate-brown font-display font-black text-xs uppercase tracking-wide px-5 py-3 rounded-full transition-all duration-300 w-full text-center shadow-lg hover:shadow-xl hover:scale-103"
              >
                Launch Curbside Checkout
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Signoff bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-cream-white/50 font-semibold uppercase tracking-wider">
          <p>© {currentYear} Cookie Premium Inc. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={10} className="text-strawberry-pink fill-strawberry-pink" />
            <span>by Cookie Premium Squad</span>
          </div>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-cream-white">Privacy</a>
            <a href="#home" className="hover:text-cream-white">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
