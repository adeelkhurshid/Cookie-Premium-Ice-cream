import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Info, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Notification: React.FC = () => {
  const { toast, hideToast } = useApp();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 15, stiffness: 180 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border-2 border-chocolate-brown/5 overflow-hidden flex"
        >
          {/* Accent border highlight */}
          <div className={`w-2.5 ${
            toast.type === 'success' ? 'bg-strawberry-pink' :
            toast.type === 'error' ? 'bg-rose-500' : 'bg-sky-blue'
          }`} />

          {/* Body Content */}
          <div className="p-4 flex items-center justify-between flex-grow gap-4 text-left">
            <div className="flex items-center gap-3">
              {/* Icon selection */}
              <div className={`p-2 rounded-xl shrink-0 ${
                toast.type === 'success' ? 'bg-strawberry-pink/10 text-strawberry-pink' :
                toast.type === 'error' ? 'bg-rose-100 text-rose-600' : 'bg-sky-blue/15 text-sky-blue'
              }`}>
                {toast.type === 'success' && <Sparkles size={16} />}
                {toast.type === 'error' && <AlertCircle size={16} />}
                {toast.type === 'info' && <Info size={16} />}
              </div>

              {/* Text content */}
              <p className="font-sans text-xs sm:text-sm font-semibold text-chocolate-brown leading-relaxed">
                {toast.message}
              </p>
            </div>

            {/* Close button trigger */}
            <button
              onClick={hideToast}
              className="p-1 hover:bg-stone-50 rounded-lg text-chocolate-brown/40 hover:text-chocolate-brown transition-all"
              aria-label="Dismiss toast"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
