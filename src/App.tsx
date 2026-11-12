/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { Toast } from './components/Toast';

// Pages
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Lookbook } from './pages/Lookbook';
import { Contact } from './pages/Contact';

const MainContent: React.FC = () => {
  const { currentPage } = useCart();

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#3A230A]">
      <Navbar />

      <div className="flex-1">
        {currentPage === 'home' && <Home />}
        {currentPage === 'collection' && <Collection />}
        {currentPage === 'product-detail' && <ProductDetail />}
        {currentPage === 'about' && <About />}
        {currentPage === 'lookbook' && <Lookbook />}
        {currentPage === 'contact' && <Contact />}
      </div>

      <Footer />

      {/* Global Interactive Drawers & Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <SearchModal />
      <SizeGuideModal />
      <Toast />
    </main>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </LanguageProvider>
  );
}
