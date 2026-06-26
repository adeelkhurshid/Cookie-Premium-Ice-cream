import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { cart, favorites, setCartOpen, setOrderModalOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartQty = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Flavors', href: '#flavors' },
    { name: 'Sundae Builder', href: '#sundae-builder' },
    { name: 'Best Sellers', href: '#best-sellers' },
    { name: 'Locations', href: '#locations' },
    { name: 'Mobile App', href: '#app' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-white/80 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <span className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-chocolate-brown group-hover:text-strawberry-pink transition-colors">
              Cookie<span className="text-strawberry-pink group-hover:text-cookie-gold transition-colors"> Premium</span>
            </span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="text-2xl"
            >
              🍪
            </motion.span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-sans font-semibold text-chocolate-brown/80 hover:text-strawberry-pink transition-colors text-sm uppercase tracking-wider relative group"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-strawberry-pink transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Icon */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-chocolate-brown hover:text-strawberry-pink hover:bg-chocolate-brown/5 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    className="absolute right-0 top-12 bg-white p-2 rounded-xl shadow-xl border border-stone-100 flex items-center gap-2 w-64 sm:w-80"
                  >
                    <input
                      type="text"
                      placeholder="Search flavors, cookies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg text-sm bg-stone-50 border-none focus:outline-none focus:ring-2 focus:ring-strawberry-pink text-chocolate-brown"
                    />
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        const element = document.querySelector('#flavors');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-chocolate-brown hover:bg-cookie-gold text-cream-white text-xs px-3 py-1.5 rounded-lg transition-colors font-bold"
                    >
                      Go
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Favorites Icon Button */}
            <a
              href="#flavors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#flavors');
              }}
              className="p-2 text-chocolate-brown hover:text-strawberry-pink hover:bg-chocolate-brown/5 rounded-full transition-colors relative"
              aria-label="Favorites"
            >
              <Heart size={20} className={favorites.length > 0 ? 'fill-strawberry-pink text-strawberry-pink' : ''} />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 bg-strawberry-pink text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {favorites.length}
                </span>
              )}
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="p-2 text-chocolate-brown hover:text-strawberry-pink hover:bg-chocolate-brown/5 rounded-full transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} />
              {totalCartQty > 0 && (
                <span className="absolute top-1 right-1 bg-strawberry-pink text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalCartQty}
                </span>
              )}
            </button>

            {/* Order Now Button */}
            <button
              onClick={() => setOrderModalOpen(true)}
              className="hidden sm:inline-block bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown font-display font-bold px-5 py-2.5 rounded-full text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Order Now
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-chocolate-brown hover:bg-chocolate-brown/5 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-cream-white border-b border-stone-100 shadow-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="font-sans font-bold text-chocolate-brown/90 hover:text-strawberry-pink py-2 text-base tracking-wide"
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setOrderModalOpen(true);
                  }}
                  className="w-full mt-3 bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown font-display font-bold py-3 rounded-full text-center shadow-md transition-colors"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
