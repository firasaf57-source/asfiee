import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { formatIDR } from '../data/translations';
import { Search, X, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { isSearchOpen, setIsSearchOpen, navigateTo } = useCart();
  const [query, setQuery] = useState('');

  const quickSearches = [
    'Blazer',
    'Trousers',
    'Hoodie',
    'Shirt',
    'Tote Bag',
    'Wool',
    'Sage Green',
  ];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name[language].toLowerCase().includes(q) ||
        p.description[language].toLowerCase().includes(q) ||
        p.materials[language].toLowerCase().includes(q) ||
        p.categoryLabel[language].toLowerCase().includes(q)
    );
  }, [query, language]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#3A230A]/60 backdrop-blur-sm flex flex-col items-center pt-20 px-4 sm:px-6">
      <div
        className="fixed inset-0 -z-10"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="bg-[#F7F5EF] text-[#3A230A] max-w-2xl w-full rounded-lg shadow-2xl border border-[#3A230A]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#3A230A]/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#3A230A]/50" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.shop.searchPlaceholder[language]}
            className="flex-1 text-sm sm:text-base bg-transparent border-none outline-none text-[#3A230A] placeholder:text-[#3A230A]/40"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#3A230A]/40 hover:text-[#3A230A] px-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#3A230A]/60 hover:text-[#3A230A] rounded-full hover:bg-[#EEE9C1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestions */}
        {!query && (
          <div className="p-5 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#3A230A]/60 font-medium block">
              Suggested Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 bg-[#EEE9C1] hover:bg-[#8DA28C]/30 text-xs text-[#3A230A] rounded transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="max-h-96 overflow-y-auto p-4 divide-y divide-[#3A230A]/10">
            {results.length === 0 ? (
              <div className="text-center py-8 text-xs text-[#3A230A]/70">
                {t.shop.noResults[language]}
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigateTo('product-detail', product.id);
                  }}
                  className="py-3 px-2 flex items-center justify-between gap-4 hover:bg-[#EEE9C1]/50 rounded cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name[language]}
                      className="w-12 h-14 object-cover rounded bg-[#EEE9C1]/50"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#3A230A]">
                        {product.name[language]}
                      </h4>
                      <p className="text-[11px] text-[#3A230A]/60">
                        {product.categoryLabel[language]}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-semibold text-[#3A230A] block">
                      {formatIDR(product.price)}
                    </span>
                    <span className="text-[10px] text-[#A4530C] flex items-center gap-1 justify-end">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
