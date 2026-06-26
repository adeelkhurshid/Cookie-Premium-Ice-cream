import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types';

interface AppContextType {
  cart: CartItem[];
  favorites: string[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleFavorite: (flavorId: string) => void;
  isFavorite: (flavorId: string) => boolean;
  toast: { message: string; type: 'success' | 'info' | 'error' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  hideToast: () => void;
  isOrderModalOpen: boolean;
  setOrderModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  // Load cart and favorites from localStorage on start
  useEffect(() => {
    const storedCart = localStorage.getItem('cookie_premium_cart');
    const storedFavs = localStorage.getItem('cookie_premium_favs');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (e) {
        console.error(e);
      }
    }
    if (storedFavs) {
      try {
        setFavorites(JSON.parse(storedFavs));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Sync to localStorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('cookie_premium_cart', JSON.stringify(newCart));
  };

  const saveFavorites = (newFavs: string[]) => {
    setFavorites(newFavs);
    localStorage.setItem('cookie_premium_favs', JSON.stringify(newFavs));
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  // Auto hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const qty = item.quantity ?? 1;
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      const updated = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
      );
      saveCart(updated);
    } else {
      saveCart([...cart, { ...item, quantity: qty }]);
    }
    showToast(`Added ${item.name} to your cart! 🍦`, 'success');
  };

  const removeFromCart = (id: string) => {
    const item = cart.find((i) => i.id === id);
    const updated = cart.filter((i) => i.id !== id);
    saveCart(updated);
    if (item) {
      showToast(`Removed ${item.name} from cart`, 'info');
    }
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    const updated = cart.map((i) => (i.id === id ? { ...i, quantity: qty } : i));
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const toggleFavorite = (flavorId: string) => {
    let updated: string[];
    if (favorites.includes(flavorId)) {
      updated = favorites.filter((id) => id !== flavorId);
      showToast('Removed from your favorites ❤️', 'info');
    } else {
      updated = [...favorites, flavorId];
      showToast('Added to your favorites! ❤️', 'success');
    }
    saveFavorites(updated);
  };

  const isFavorite = (flavorId: string) => favorites.includes(flavorId);

  return (
    <AppContext.Provider
      value={{
        cart,
        favorites,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleFavorite,
        isFavorite,
        toast,
        showToast,
        hideToast,
        isOrderModalOpen,
        setOrderModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
