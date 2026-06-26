import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CartDrawer: React.FC = () => {
  const { cart, cartOpen, setCartOpen, updateQuantity, removeFromCart, setOrderModalOpen } = useApp();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop blur click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          />

          {/* Drawer Slide Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-white text-chocolate-brown flex flex-col justify-between shadow-2xl rounded-l-[32px] border-l-4 border-chocolate-brown/5"
            >
              {/* Header */}
              <div className="p-6 border-b border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag size={20} className="text-strawberry-pink" />
                  <h2 className="font-display font-extrabold text-xl">Your Sweet Cart</h2>
                  <span className="bg-strawberry-pink/10 text-strawberry-pink text-xs px-2.5 py-0.5 rounded-full font-bold">
                    {cart.reduce((t, i) => t + i.quantity, 0)} Items
                  </span>
                </div>
                
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 hover:bg-stone-50 rounded-full text-chocolate-brown/60 hover:text-chocolate-brown transition-colors"
                  aria-label="Close Cart"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body Items list */}
              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <span className="text-5xl animate-bounce">🍦</span>
                    <h3 className="font-display font-bold text-lg">Your cart is empty!</h3>
                    <p className="text-xs text-chocolate-brown/60 max-w-xs leading-relaxed">
                      Looks like you haven't scoped out any happiness yet. Fill it with our signature cookie scoops or build your custom sundae!
                    </p>
                    <button
                      onClick={() => {
                        setCartOpen(false);
                        const el = document.querySelector('#flavors');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown font-display font-bold text-xs px-5 py-2.5 rounded-full transition-all"
                    >
                      Start Scooping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex items-center gap-4 bg-stone-50/50 p-3 rounded-2xl border border-stone-100 relative group"
                    >
                      {/* Product small image cover */}
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-cover rounded-xl border border-stone-200"
                      />

                      {/* Content details */}
                      <div className="flex-grow text-left">
                        <h4 className="font-display font-bold text-sm text-chocolate-brown line-clamp-1">{item.name}</h4>
                        {item.details && (
                          <p className="text-[10px] text-stone-400 font-semibold line-clamp-1 mt-0.5">{item.details}</p>
                        )}
                        <span className="text-xs font-display font-extrabold text-chocolate-brown block mt-1.5">
                          ${item.price.toFixed(2)} Each
                        </span>
                      </div>

                      {/* Quantity & Actions controllers */}
                      <div className="flex flex-col items-end justify-between h-full gap-2 shrink-0">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>

                        <div className="flex items-center gap-2 bg-white rounded-lg border border-stone-200/60 p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-stone-50 rounded text-chocolate-brown/60"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-stone-50 rounded text-chocolate-brown/60"
                            aria-label="Increase quantity"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Subtotal, Tax & Checkout area at the bottom */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-stone-100 bg-stone-50/50 space-y-4 rounded-b-2xl">
                  {/* Totals Breakdown */}
                  <div className="space-y-2 text-xs font-semibold">
                    <div className="flex justify-between text-stone-500">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-stone-500">
                      <span>Standard Cold-Pack Shipping</span>
                      <span className="text-emerald-600">FREE</span>
                    </div>
                    <div className="flex justify-between border-t border-stone-200/60 pt-3 text-sm text-chocolate-brown font-bold">
                      <span className="font-display">Total Est. Price</span>
                      <span className="font-display font-black text-base text-glow text-strawberry-pink">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Actions CTA */}
                  <button
                    onClick={() => {
                      setCartOpen(false);
                      setOrderModalOpen(true);
                    }}
                    className="w-full bg-chocolate-brown hover:bg-cookie-gold text-cream-white hover:text-chocolate-brown py-4 rounded-full font-display font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:scale-103 shadow-lg hover:shadow-xl"
                  >
                    Proceed to Curbside Checkout
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[9px] text-center text-stone-400 font-bold uppercase tracking-wider">
                    🍦 Delivered frozen-fresh in eco dry-ice thermal coolers.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
