import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Instagram, ArrowRight, Check } from 'lucide-react';
import { Page } from '../types';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const { navigateTo, setIsSizeGuideOpen } = useCart();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-[#3A230A] text-[#F7F5EF] pt-16 pb-12 border-t border-[#3A230A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F7F5EF]/15">
          {/* Brand Column (Col 1-5) */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="font-editorial text-3xl sm:text-4xl font-light tracking-[0.2em] text-[#F7F5EF] uppercase">
                CASSATAVI
              </span>
              <p className="text-[11px] font-sans tracking-[0.3em] text-[#EEE9C1] uppercase mt-1">
                {t.footer.tagline[language]}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#F7F5EF]/75 font-light leading-relaxed max-w-sm">
              {t.footer.aboutBrand[language]}
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider font-medium text-[#EEE9C1] mb-2">
                {t.newsletter.title[language]}
              </span>
              <form onSubmit={handleSubscribe} className="flex max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder[language]}
                  className="w-full bg-[#F7F5EF]/10 border border-[#F7F5EF]/20 text-[#F7F5EF] text-xs px-3.5 py-2.5 rounded-l focus:outline-none focus:border-[#EEE9C1] placeholder:text-[#F7F5EF]/40"
                />
                <button
                  type="submit"
                  className="bg-[#8DA28C] hover:bg-[#8DA28C]/90 text-[#3A230A] font-semibold text-xs px-4 py-2.5 rounded-r transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                >
                  {isSubscribed ? <Check className="w-4 h-4 text-[#3A230A]" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
              {isSubscribed && (
                <p className="text-[11px] text-[#8DA28C] mt-2 font-light">
                  {t.newsletter.success[language]}
                </p>
              )}
            </div>
          </div>

          {/* Explore Links (Col 6-7) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EEE9C1]">
              {t.footer.explore[language]}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F7F5EF]/80 font-light">
              <li>
                <button
                  onClick={() => navigateTo('collection')}
                  className="hover:text-[#EEE9C1] transition-colors"
                >
                  {t.footer.links.newArrivals[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('collection')}
                  className="hover:text-[#EEE9C1] transition-colors"
                >
                  {t.footer.links.tailoredPieces[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('lookbook')}
                  className="hover:text-[#EEE9C1] transition-colors"
                >
                  {t.footer.links.lookbook[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#EEE9C1] transition-colors"
                >
                  {t.footer.links.atelierStory[language]}
                </button>
              </li>
            </ul>
          </div>

          {/* Information Links (Col 8-9) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EEE9C1]">
              {t.footer.info[language]}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F7F5EF]/80 font-light">
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-[#EEE9C1] transition-colors"
                >
                  {t.footer.links.sizeChart[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#EEE9C1] transition-colors"
                >
                  {t.footer.links.sustainability[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#EEE9C1] transition-colors"
                >
                  {t.nav.contact[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#EEE9C1] transition-colors"
                >
                  {t.footer.links.careGuide[language]}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels & Concierge (Col 10-12) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EEE9C1]">
              {t.footer.socialTitle[language]}
            </h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-xs text-[#F7F5EF]/85 hover:text-[#EEE9C1] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#8DA28C]" />
                <span>Instagram @cassatavi.official</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-xs text-[#F7F5EF]/85 hover:text-[#EEE9C1] transition-colors"
              >
                <span className="w-4 h-4 rounded-full bg-[#8DA28C]/20 flex items-center justify-center text-[10px] font-bold text-[#8DA28C]">
                  f
                </span>
                <span>Facebook /cassatavifashion</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-xs text-[#F7F5EF]/85 hover:text-[#EEE9C1] transition-colors"
              >
                <span className="w-4 h-4 rounded-full bg-[#8DA28C]/20 flex items-center justify-center text-[9px] font-bold text-[#8DA28C]">
                  tt
                </span>
                <span>TikTok @cassatavi</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[#F7F5EF]/60 font-light">
              <p>Jakarta Atelier & Studio</p>
              <p>Senopati Raya 44, Jakarta Selatan</p>
              <p className="text-[#8DA28C] mt-1 font-mono text-[11px]">WA: +62 808-2230-3200</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Exact Copyright Required */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5EF]/60 font-light">
          <p className="tracking-widest uppercase text-[11px]">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>{t.footer.designedIn[language]}</span>
            <span>·</span>
            <span>Unisex Tailoring</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
