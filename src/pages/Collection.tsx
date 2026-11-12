import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { formatIDR } from '../data/translations';
import { ProductCategory } from '../types';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export const Collection: React.FC = () => {
  const { language, t } = useLanguage();
  const { navigateTo, addToCart } = useCart();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'newest'>('featured');

  const categories: { key: string; label: string }[] = [
    { key: 'all', label: t.shop.all[language] },
    { key: 'outerwear', label: t.shop.categories.outerwear[language] },
    { key: 'tops', label: t.shop.categories.tops[language] },
    { key: 'trousers', label: t.shop.categories.trousers[language] },
    { key: 'essentials', label: t.shop.categories.essentials[language] },
    { key: 'accessories', label: t.shop.categories.accessories[language] },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          activeCategory === 'all' || product.category === (activeCategory as ProductCategory);
        const matchesSearch =
          !searchQuery.trim() ||
          product.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.materials[language].toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'priceAsc') return a.price - b.price;
        if (sortBy === 'priceDesc') return b.price - a.price;
        if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [activeCategory, searchQuery, sortBy, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-3 border-b border-[#3A230A]/10 pb-8">
        <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8DA28C] font-semibold">
          Ready-To-Wear
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl font-light text-[#3A230A] uppercase tracking-wide">
          {t.shop.title[language]}
        </h1>
        <p className="text-xs sm:text-sm text-[#3A230A]/70 max-w-2xl font-light leading-relaxed">
          {t.shop.subtitle[language]}
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="space-y-4">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#3A230A] text-[#F7F5EF] shadow-sm'
                  : 'bg-[#EEE9C1]/50 text-[#3A230A] hover:bg-[#EEE9C1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#3A230A]/40 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.shop.searchPlaceholder[language]}
              className="w-full pl-9 pr-4 py-2 text-xs border border-[#3A230A]/20 rounded bg-white text-[#3A230A] placeholder:text-[#3A230A]/40 focus:outline-none focus:border-[#8DA28C]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-[#3A230A]/40 hover:text-[#3A230A]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs text-[#3A230A]/60 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>{t.shop.sortBy[language]}:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs py-2 px-3 border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C] cursor-pointer"
            >
              <option value="featured">{t.shop.sortOptions.featured[language]}</option>
              <option value="priceAsc">{t.shop.sortOptions.priceAsc[language]}</option>
              <option value="priceDesc">{t.shop.sortOptions.priceDesc[language]}</option>
              <option value="newest">{t.shop.sortOptions.newest[language]}</option>
            </select>
          </div>
        </div>

        {/* Counter and Active Filter Info */}
        <div className="flex justify-between items-center text-xs text-[#3A230A]/60 font-mono pt-1">
          <span>
            {filteredProducts.length} {t.shop.itemCount[language]}
          </span>
          {(activeCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-[#A4530C] hover:underline"
            >
              {t.shop.resetFilters[language]}
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center space-y-4 bg-[#EEE9C1]/20 rounded border border-[#3A230A]/10">
          <p className="text-sm text-[#3A230A]/70 font-light">
            {t.shop.noResults[language]}
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 bg-[#3A230A] text-[#F7F5EF] text-xs uppercase tracking-widest font-medium rounded hover:bg-[#8DA28C] transition-colors"
          >
            {t.shop.resetFilters[language]}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-[#F7F5EF] rounded-sm transition-all duration-300"
            >
              {/* Product Image Frame */}
              <div
                onClick={() => navigateTo('product-detail', product.id)}
                className="relative aspect-4/5 overflow-hidden bg-[#EEE9C1]/30 rounded cursor-pointer border border-[#3A230A]/10"
              >
                <img
                  src={product.image}
                  alt={product.name[language]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                />

                {/* Subtle Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="bg-[#3A230A] text-[#F7F5EF] text-[10px] tracking-widest uppercase px-2 py-0.5 rounded font-mono font-medium">
                      New
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="bg-[#8DA28C] text-[#3A230A] text-[10px] tracking-widest uppercase px-2 py-0.5 rounded font-mono font-bold">
                      Signature
                    </span>
                  )}
                </div>

                {/* Quick Add Overlay Button on Hover */}
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, product.sizes[0], product.colors[0].name[language], 1);
                    }}
                    className="w-full py-2.5 bg-[#F7F5EF]/95 backdrop-blur-md text-[#3A230A] hover:bg-[#3A230A] hover:text-[#F7F5EF] text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-md rounded cursor-pointer"
                  >
                    + {t.shop.addToBag[language]}
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-4 pb-2 space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#8DA28C]">
                    {product.categoryLabel[language]}
                  </span>
                  <div className="flex items-center gap-1">
                    {product.colors.map((c) => (
                      <span
                        key={c.hex}
                        title={c.name[language]}
                        className="w-2.5 h-2.5 rounded-full border border-[#3A230A]/20"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>

                <h3
                  onClick={() => navigateTo('product-detail', product.id)}
                  className="text-base font-semibold text-[#3A230A] group-hover:text-[#A4530C] transition-colors cursor-pointer"
                >
                  {product.name[language]}
                </h3>

                <p className="text-xs text-[#3A230A]/70 line-clamp-2 font-light">
                  {product.description[language]}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-sm font-semibold text-[#3A230A]">
                    {formatIDR(product.price)}
                  </span>
                  <button
                    onClick={() => navigateTo('product-detail', product.id)}
                    className="text-xs text-[#A4530C] hover:underline font-medium"
                  >
                    {t.shop.viewDetails[language]} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
