import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { lookbookItems } from '../data/lookbook';
import { LookbookItem, CampaignName } from '../types';
import { X, ArrowRight, Eye, Sparkles } from 'lucide-react';

export const Lookbook: React.FC = () => {
  const { language, t } = useLanguage();
  const { navigateTo } = useCart();

  const [activeCampaign, setActiveCampaign] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<LookbookItem | null>(null);

  const campaigns: { key: string; label: string }[] = [
    { key: 'all', label: t.lookbook.filterAll[language] },
    { key: 'THE NEW FORM', label: 'THE NEW FORM' },
    { key: 'URBAN ELEGANCE', label: 'URBAN ELEGANCE' },
    { key: 'BEYOND BOUNDARIES', label: 'BEYOND BOUNDARIES' },
    { key: 'MODERN IDENTITY', label: 'MODERN IDENTITY' },
  ];

  const filteredItems = lookbookItems.filter(
    (item) => activeCampaign === 'all' || item.campaign === activeCampaign
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8DA28C] font-semibold">
          Visual Anthology
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl font-light text-[#3A230A] uppercase tracking-wide">
          {t.lookbook.title[language]}
        </h1>
        <p className="text-xs sm:text-sm text-[#3A230A]/75 font-light leading-relaxed">
          {t.lookbook.subtitle[language]}
        </p>
      </div>

      {/* Campaign Filter Bar */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {campaigns.map((camp) => (
          <button
            key={camp.key}
            onClick={() => setActiveCampaign(camp.key)}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeCampaign === camp.key
                ? 'bg-[#3A230A] text-[#F7F5EF] shadow-sm'
                : 'bg-[#EEE9C1]/50 text-[#3A230A] hover:bg-[#EEE9C1]'
            }`}
          >
            {camp.label}
          </button>
        ))}
      </div>

      {/* Editorial Masonry / Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className={`group bg-[#F7F5EF] rounded-sm overflow-hidden cursor-pointer border border-[#3A230A]/10 shadow-xs flex flex-col transition-all duration-300 hover:shadow-lg ${
              item.aspect === 'landscape' ? 'md:col-span-2' : ''
            }`}
          >
            {/* Visual Frame */}
            <div
              className={`relative overflow-hidden bg-[#EEE9C1]/30 ${
                item.aspect === 'tall'
                  ? 'aspect-2/3'
                  : item.aspect === 'landscape'
                  ? 'aspect-16/10'
                  : 'aspect-3/4'
              }`}
            >
              <img
                src={item.image}
                alt={item.title[language]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Campaign Stamp Overlay */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#3A230A]/85 backdrop-blur-xs text-[#F7F5EF] text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded">
                  {item.campaign}
                </span>
              </div>

              {/* View Lightbox Indicator */}
              <div className="absolute inset-0 bg-[#3A230A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-[#F7F5EF] text-[#3A230A] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                  <Eye className="w-3.5 h-3.5 text-[#A4530C]" />
                  <span>View Editorial</span>
                </div>
              </div>
            </div>

            {/* Editorial Caption Bar */}
            <div className="p-5 space-y-2 bg-[#F7F5EF] flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-xl sm:text-2xl font-light text-[#3A230A] uppercase group-hover:text-[#A4530C] transition-colors">
                  {item.title[language]}
                </h3>
                <p className="text-xs text-[#3A230A]/75 font-light leading-relaxed mt-1">
                  {item.subtitle[language]}
                </p>
              </div>

              {item.featuredProductName && (
                <div className="pt-3 border-t border-[#3A230A]/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#8DA28C] truncate max-w-[200px]">
                    Featured: {item.featuredProductName[language]}
                  </span>
                  <span className="text-xs text-[#A4530C] font-semibold flex items-center gap-1">
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal for Editorial Lookbook */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-[#3A230A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setActiveModalItem(null)}
          />

          <div className="bg-[#F7F5EF] text-[#3A230A] max-w-4xl w-full rounded-lg shadow-2xl border border-[#3A230A]/15 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#3A230A]/10 flex items-center justify-between bg-[#F7F5EF]">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8DA28C] block">
                  Campaign: {activeModalItem.campaign}
                </span>
                <h3 className="font-editorial text-2xl font-light text-[#3A230A] uppercase tracking-wide">
                  {activeModalItem.title[language]}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-[#3A230A]/60 hover:text-[#3A230A] rounded-full hover:bg-[#EEE9C1] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
              {/* Image Frame (Col 1-7) */}
              <div className="md:col-span-7 rounded overflow-hidden bg-[#EEE9C1]/30 border border-[#3A230A]/10">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title[language]}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
              </div>

              {/* Narrative & Action (Col 8-12) */}
              <div className="md:col-span-5 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#A4530C] font-semibold block mb-1">
                      {t.lookbook.campaignNotes[language]}
                    </span>
                    <p className="text-xs sm:text-sm text-[#3A230A]/85 font-light leading-relaxed">
                      {activeModalItem.notes[language]}
                    </p>
                  </div>

                  {activeModalItem.featuredProductName && (
                    <div className="bg-[#EEE9C1]/50 p-4 rounded border border-[#3A230A]/10 space-y-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#3A230A]/70 block font-semibold">
                        Garment Featured In Frame:
                      </span>
                      <p className="text-xs font-semibold text-[#3A230A]">
                        {activeModalItem.featuredProductName[language]}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#3A230A]/10 space-y-3">
                  {activeModalItem.featuredProductId && (
                    <button
                      onClick={() => {
                        const pid = activeModalItem.featuredProductId;
                        setActiveModalItem(null);
                        navigateTo('product-detail', pid);
                      }}
                      className="w-full py-3 bg-[#3A230A] hover:bg-[#8DA28C] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{t.lookbook.shopLook[language]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="w-full py-2.5 border border-[#3A230A]/20 text-[#3A230A] hover:bg-[#EEE9C1] text-xs uppercase tracking-wider rounded transition-colors"
                  >
                    {t.lookbook.closeModal[language]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
