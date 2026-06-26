import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Flavors } from './components/Flavors';
import { SundaeBuilder } from './components/SundaeBuilder';
import { WhyCookiePremium } from './components/WhyCookiePremium';
import { SeasonalSpecials } from './components/SeasonalSpecials';
import { BestSellers } from './components/BestSellers';
import { Testimonials } from './components/Testimonials';
import { InstagramGallery } from './components/InstagramGallery';
import { StoreLocations } from './components/StoreLocations';
import { MobileApp } from './components/MobileApp';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Notification } from './components/Notification';

const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cream-white text-chocolate-brown overflow-x-hidden selection:bg-strawberry-pink/20 selection:text-strawberry-pink">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Flow Sections */}
      <main>
        <Hero />
        <Flavors />
        <SundaeBuilder />
        <WhyCookiePremium />
        <SeasonalSpecials />
        <BestSellers />
        <Testimonials />
        <InstagramGallery />
        <StoreLocations />
        <MobileApp />
        <Newsletter />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Interactive overlay widgets */}
      <CartDrawer />
      <CheckoutModal />
      <Notification />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
      <Analytics />
    </AppProvider>
  );
}
