import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Check, ShoppingBag, Sparkles, Truck, Clock, ShieldCheck, Ticket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CheckoutModal: React.FC = () => {
  const { cart, isOrderModalOpen, setOrderModalOpen, clearCart, showToast } = useApp();
  
  // Checkout States
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    method: 'delivery', // delivery or pickup
    promo: ''
  });

  const [promoApplied, setPromoApplied] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);

  // Success tracking simulation
  const [deliveryTimer, setDeliveryTimer] = useState(25); // minutes countdown
  const [progressStep, setProgressStep] = useState(0); // 0: scooped, 1: packed, 2: transit, 3: arrived

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  const finalTotal = subtotal - discountAmount;

  // Simulate delivery countdown and progress shifts
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'success') {
      interval = setInterval(() => {
        setDeliveryTimer((t) => (t > 1 ? t - 1 : 1));
        setProgressStep((s) => (s < 3 ? s + 1 : 3));
      }, 15000); // Shift state every 15s for visual simulation
    }
    return () => clearInterval(interval);
  }, [step]);

  const handleApplyPromo = () => {
    if (formData.promo.toUpperCase() === 'SQUAD15') {
      setPromoApplied(true);
      setDiscountPercent(15);
      showToast('15% Sweet Squad discount applied! 🍪', 'success');
    } else {
      showToast('Invalid promo code. Try "SQUAD15"!', 'error');
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || (formData.method === 'delivery' && !formData.address)) {
      showToast('Please fill out all required fields!', 'error');
      return;
    }
    setStep('success');
    showToast('Order received! Scoop scientists are on it! 🧑‍🔬🍦', 'success');
  };

  const handleClose = () => {
    setOrderModalOpen(false);
    // Reset steps if closed on success
    if (step === 'success') {
      clearCart();
      setStep('details');
      setPromoApplied(false);
      setDiscountPercent(0);
      setProgressStep(0);
      setDeliveryTimer(25);
    }
  };

  return (
    <AnimatePresence>
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={handleClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-2xl relative z-10 max-w-2xl w-full max-h-[90vh] flex flex-col justify-between border-4 border-chocolate-brown/5 text-chocolate-brown"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="text-strawberry-pink animate-spin-slow" size={20} />
                <h2 className="font-display font-extrabold text-xl">
                  {step === 'details' ? 'Curbside Checkout Lab' : 'Scoop Tracker Live'}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-stone-50 rounded-full text-chocolate-brown/60 hover:text-chocolate-brown transition-colors"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Step Content scrolling */}
            <div className="p-6 overflow-y-auto flex-grow space-y-6">
              {step === 'details' ? (
                /* STEP 1: Details Entry and Summary */
                <form onSubmit={handleSubmitOrder} className="space-y-6">
                  {/* Cart Summary brief list */}
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 text-left">
                    <h3 className="font-display font-bold text-sm mb-3 text-chocolate-brown/60">ORDER SUMMARY</h3>
                    
                    {cart.length === 0 ? (
                      <p className="text-xs text-stone-400 font-semibold italic">No items in cart yet. Add some flavors first!</p>
                    ) : (
                      <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-chocolate-brown/80 max-w-[280px] truncate">
                              {item.name} <span className="text-stone-400">x{item.quantity}</span>
                            </span>
                            <span className="font-display font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Promo coupon input inline */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-stone-200/60">
                      <div className="flex items-center gap-2 bg-white border border-stone-200 px-3 py-1.5 rounded-full flex-grow text-xs text-chocolate-brown">
                        <Ticket size={14} className="text-stone-400 shrink-0" />
                        <input
                          type="text"
                          placeholder="Promo code (SQUAD15)"
                          value={formData.promo}
                          onChange={(e) => setFormData({ ...formData, promo: e.target.value })}
                          disabled={promoApplied}
                          className="w-full bg-transparent border-none focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        disabled={promoApplied}
                        className="bg-chocolate-brown hover:bg-cookie-gold text-white hover:text-chocolate-brown px-4 py-2 rounded-full text-xs font-display font-bold transition-colors disabled:opacity-45 shrink-0"
                      >
                        {promoApplied ? 'Applied' : 'Apply'}
                      </button>
                    </div>

                    {/* Totals summation */}
                    <div className="mt-4 pt-3 border-t border-stone-200/60 text-xs font-semibold space-y-1 text-stone-500">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {promoApplied && (
                        <div className="flex justify-between text-strawberry-pink">
                          <span>Promo Discount (15%)</span>
                          <span>-${discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-dashed border-stone-200 pt-2 text-sm text-chocolate-brown font-bold">
                        <span className="font-display">Grand Total</span>
                        <span className="font-display font-black text-base text-strawberry-pink">${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Form Delivery/Pickup fields */}
                  <div className="space-y-4 text-left">
                    <h3 className="font-display font-bold text-sm text-chocolate-brown/60 uppercase">DELIVERY PREFERENCE</h3>
                    
                    {/* Method Selector */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, method: 'delivery' })}
                        className={`p-3 rounded-xl border-2 text-xs font-display font-bold flex items-center justify-center gap-2 transition-all ${
                          formData.method === 'delivery'
                            ? 'border-strawberry-pink bg-strawberry-pink/5 text-strawberry-pink'
                            : 'border-stone-100 bg-stone-50/50'
                        }`}
                      >
                        <Truck size={14} /> Home Delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, method: 'pickup' })}
                        className={`p-3 rounded-xl border-2 text-xs font-display font-bold flex items-center justify-center gap-2 transition-all ${
                          formData.method === 'pickup'
                            ? 'border-strawberry-pink bg-strawberry-pink/5 text-strawberry-pink'
                            : 'border-stone-100 bg-stone-50/50'
                        }`}
                      >
                        <Clock size={14} /> Curbside Pickup
                      </button>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5 flex flex-col">
                        <label className="text-xs font-bold text-chocolate-brown/80">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Emily Harrison"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-chocolate-brown focus:border-strawberry-pink focus:outline-none"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5 flex flex-col">
                        <label className="text-xs font-bold text-chocolate-brown/80">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="(310) 555-0192"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-chocolate-brown focus:border-strawberry-pink focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Address (conditional on delivery) */}
                    {formData.method === 'delivery' && (
                      <div className="space-y-1.5 flex flex-col">
                        <label className="text-xs font-bold text-chocolate-brown/80">Delivery Address *</label>
                        <input
                          type="text"
                          required={formData.method === 'delivery'}
                          placeholder="425 Rodeo Drive, Beverly Hills, CA 90210"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-chocolate-brown focus:border-strawberry-pink focus:outline-none"
                        />
                      </div>
                    )}

                    {/* Chef notes */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="text-xs font-bold text-chocolate-brown/80">Special Notes / Allergy details (Optional)</label>
                      <textarea
                        placeholder="Double the fudge drizzle on the custom sundae please!"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-chocolate-brown focus:border-strawberry-pink focus:outline-none h-16 resize-none"
                      />
                    </div>
                  </div>

                  {/* Safety guarantees */}
                  <div className="bg-emerald-50 text-emerald-950 p-3 rounded-xl border border-emerald-100 flex items-center gap-2.5 text-xs font-semibold">
                    <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
                    <span>Payment will be collected securely at pickup or curbside dropoff! Cash, Cards, and Apple Pay accepted.</span>
                  </div>

                  {/* CTA Checkout button */}
                  <button
                    type="submit"
                    disabled={cart.length === 0}
                    className="w-full bg-strawberry-pink hover:bg-cookie-gold text-white hover:text-chocolate-brown py-4 rounded-full font-display font-black text-sm tracking-wide transition-all duration-300 disabled:opacity-45 shadow-lg"
                  >
                    Place My Order (${finalTotal.toFixed(2)})
                  </button>
                </form>
              ) : (
                /* STEP 2: SUCCESS state, with dynamic courier simulation tracker */
                <div className="text-center py-6 space-y-6">
                  {/* Big visual circle confetti */}
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-4xl mx-auto animate-bounce shadow-inner">
                    🎉
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl text-chocolate-brown">Thank you, {formData.name}!</h3>
                    <p className="text-xs text-chocolate-brown/60 mt-1 font-semibold">Your order code is <strong className="text-strawberry-pink uppercase">#CP-{Math.floor(1000 + Math.random() * 9000)}</strong></p>
                  </div>

                  {/* Simulated Countdown */}
                  <div className="bg-stone-50 p-6 rounded-[24px] border border-stone-200/60 max-w-sm mx-auto flex items-center justify-around">
                    <div className="flex items-center gap-3">
                      <Clock size={28} className="text-strawberry-pink animate-pulse" />
                      <div className="text-left">
                        <span className="text-[10px] uppercase font-bold text-stone-400 block leading-none">EST. ARRIVAL</span>
                        <span className="text-2xl font-display font-black mt-1.5 block leading-none">{deliveryTimer} Min</span>
                      </div>
                    </div>
                    <div className="h-10 w-px bg-stone-200" />
                    <div className="text-left">
                      <span className="text-[10px] uppercase font-bold text-stone-400 block leading-none">STATUS</span>
                      <span className="text-xs font-bold text-emerald-600 mt-1.5 block leading-none uppercase">
                        {progressStep === 0 && '🧑‍🔬 Scooping'}
                        {progressStep === 1 && '📦 Cooler Packing'}
                        {progressStep === 2 && '🛵 On Transit'}
                        {progressStep === 3 && '🍦 Arrived!'}
                      </span>
                    </div>
                  </div>

                  {/* Delivery progress dots line representation */}
                  <div className="relative max-w-sm mx-auto py-4">
                    {/* Background line */}
                    <div className="absolute top-[34px] inset-x-8 h-1 bg-stone-200 -z-10 rounded-full" />
                    
                    {/* Active highlighted line */}
                    <div
                      className="absolute top-[34px] left-8 h-1 bg-strawberry-pink -z-10 rounded-full transition-all duration-1000"
                      style={{ width: `${(progressStep / 3) * 80}%` }}
                    />

                    {/* Markers */}
                    <div className="flex justify-between px-6">
                      {[
                        { stepIdx: 0, label: 'Scooping', emoji: '🧑‍🔬' },
                        { stepIdx: 1, label: 'Packing', emoji: '📦' },
                        { stepIdx: 2, label: 'Transit', emoji: '🛵' },
                        { stepIdx: 3, label: 'Arrived', emoji: '🍦' }
                      ].map((marker) => {
                        const isDone = marker.stepIdx <= progressStep;
                        return (
                          <div key={marker.stepIdx} className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md transition-all duration-500 border ${
                              isDone ? 'bg-strawberry-pink text-white border-white' : 'bg-white text-stone-400 border-stone-200'
                            }`}>
                              {isDone ? <Check size={14} strokeWidth={3} /> : marker.emoji}
                            </div>
                            <span className={`text-[9px] uppercase font-bold mt-2 ${
                              isDone ? 'text-chocolate-brown' : 'text-stone-400'
                            }`}>{marker.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <p className="text-xs text-chocolate-brown/70 leading-relaxed max-w-md mx-auto">
                    We’ve packed your order with organic dry-ice cold packs. Our courier driver will text you when they arrive outside at {formData.method === 'delivery' ? formData.address : 'our Curbside pickup point'}!
                  </p>

                  <button
                    onClick={handleClose}
                    className="bg-chocolate-brown hover:bg-cookie-gold text-white hover:text-chocolate-brown px-8 py-3 rounded-full font-display font-extrabold text-sm tracking-wide transition-colors"
                  >
                    Close & Return to Lab
                  </button>
                </div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
