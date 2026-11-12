import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Globe, Search, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { Page } from '../types';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { totalItemsCount, openCart, currentPage, navigateTo, setIsSearchOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navLinks: { key: Page; label: string }[] = [
    { key: 'home', label: t.nav.home[language] },
    { key: 'collection', label: t.nav.collection[language] },
    { key: 'about', label: t.nav.about[language] },
    { key: 'lookbook', label: t.nav.lookbook[language] },
    { key: 'contact', label: t.nav.contact[language] },
  ];

  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#3A230A]/10 transition-colors">
      {/* Editorial Announcement Bar */}
      <div className="bg-[#EEE9C1] border-b border-[#3A230A]/10 text-[#3A230A] text-[11px] tracking-widest uppercase font-medium py-1.5 px-4 text-center">
        <span>{t.nav.announcement[language]}</span>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8DA28C]"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-light tracking-[0.18em] text-[#3A230A] uppercase transition-colors group-hover:text-[#8DA28C]">
              CASSATAVI
            </span>
            <span className="block text-[8px] tracking-[0.3em] font-sans text-[#A4530C] font-semibold uppercase -mt-0.5">
              BEYOND THE ORDINARY
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-[#3A230A]/80">
          {navLinks.map((item) => {
            const isActive = currentPage === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`transition-all duration-200 relative py-1 focus:outline-none hover:text-[#3A230A] ${
                  isActive
                    ? 'text-[#3A230A] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#A4530C]'
                    : 'text-[#3A230A]/70 hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[1px] hover:after:bg-[#8DA28C]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions & Utilities */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-medium text-[#3A230A] hover:text-[#8DA28C] transition-colors py-1.5 px-2 rounded-md hover:bg-[#EEE9C1]/50 focus:outline-none"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#3A230A]" />
              <span className="tracking-wider uppercase">{language}</span>
              <ChevronDown className={`w-3 h-3 text-[#3A230A]/60 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-1.5 w-36 bg-[#F7F5EF] border border-[#3A230A]/15 rounded-md shadow-lg py-1 z-20 overflow-hidden text-xs">
                  <button
                    onClick={() => {
                      setLanguage('EN');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-[#EEE9C1] transition-colors ${
                      language === 'EN' ? 'font-semibold text-[#3A230A] bg-[#EEE9C1]/50' : 'text-[#3A230A]/80'
                    }`}
                  >
                    <span>English (EN)</span>
                    {language === 'EN' && <span className="w-1.5 h-1.5 rounded-full bg-[#A4530C]" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ID');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-[#EEE9C1] transition-colors ${
                      language === 'ID' ? 'font-semibold text-[#3A230A] bg-[#EEE9C1]/50' : 'text-[#3A230A]/80'
                    }`}
                  >
                    <span>Bahasa (ID)</span>
                    {language === 'ID' && <span className="w-1.5 h-1.5 rounded-full bg-[#A4530C]" />}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-[#3A230A] hover:text-[#8DA28C] transition-colors rounded-full hover:bg-[#EEE9C1]/50 focus:outline-none"
            aria-label="Open Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Shopping Bag Trigger with Counter */}
          <button
            onClick={openCart}
            className="relative p-2 text-[#3A230A] hover:text-[#8DA28C] transition-colors rounded-full hover:bg-[#EEE9C1]/50 focus:outline-none flex items-center"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-[#A4530C] text-[#F7F5EF] text-[10px] font-bold flex items-center justify-center font-mono">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#3A230A] hover:text-[#8DA28C] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F7F5EF] border-b border-[#3A230A]/15 px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`text-left text-base tracking-wider uppercase py-2 transition-colors border-b border-[#3A230A]/5 ${
                  currentPage === item.key
                    ? 'font-bold text-[#A4530C]'
                    : 'text-[#3A230A]/80 hover:text-[#3A230A]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#3A230A]/10 flex items-center justify-between text-xs text-[#3A230A]/70">
            <span>Language Preference:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2.5 py-1 rounded text-xs uppercase font-medium ${
                  language === 'EN' ? 'bg-[#3A230A] text-[#F7F5EF]' : 'bg-[#EEE9C1] text-[#3A230A]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ID')}
                className={`px-2.5 py-1 rounded text-xs uppercase font-medium ${
                  language === 'ID' ? 'bg-[#3A230A] text-[#F7F5EF]' : 'bg-[#EEE9C1] text-[#3A230A]'
                }`}
              >
                Indonesia
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
