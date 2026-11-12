import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { formatIDR } from '../data/translations';
import { Product } from '../types';
import {
  ArrowLeft,
  Ruler,
  Plus,
  Minus,
  Check,
  Truck,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { language, t } = useLanguage();
  const { selectedProductId, navigateTo, addToCart, setIsSizeGuideOpen } = useCart();

  // Find active product
  const product: Product =
    products.find((p) => p.id === selectedProductId) || products[0];

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name[language] || 'Sage Green'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<'materials' | 'details' | 'shipping' | null>(
    'materials'
  );

  // Update active image if product changes
  React.useEffect(() => {
    setActiveImage(product.image);
    setSelectedSize(product.sizes[0] || 'M');
    setSelectedColor(product.colors[0]?.name[language] || 'Classic');
    setQuantity(1);
  }, [product, language]);

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16">
      {/* Back button */}
      <div>
        <button
          onClick={() => navigateTo('collection')}
          className="text-xs uppercase tracking-widest font-semibold text-[#3A230A]/70 hover:text-[#A4530C] transition-colors flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.pdp.backToCollection[language]}</span>
        </button>
      </div>

      {/* Main 2-Column Product Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Product Gallery (Col 1-7) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Display Image */}
          <div className="relative aspect-4/5 overflow-hidden rounded bg-[#EEE9C1]/30 border border-[#3A230A]/10 shadow-sm">
            <img
              src={activeImage}
              alt={product.name[language]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-[#3A230A] text-[#F7F5EF] text-[11px] tracking-widest uppercase px-3 py-1 rounded font-mono font-medium">
                New Arrival
              </span>
            )}
          </div>

          {/* Thumbnails Row */}
          {product.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-24 rounded overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImage === img
                      ? 'border-[#3A230A] ring-1 ring-[#3A230A]'
                      : 'border-[#3A230A]/15 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name[language]} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Model Dimension Note */}
          {product.modelInfo && (
            <div className="text-xs text-[#3A230A]/60 font-light italic pt-2">
              * {product.modelInfo[language]}
            </div>
          )}
        </div>

        {/* Right: Contiguous Purchase Module (Col 8-12) */}
        <div className="lg:col-span-5 space-y-6 sticky top-28 bg-[#F7F5EF] p-6 sm:p-8 rounded-lg border border-[#3A230A]/10 shadow-xs">
          {/* Header */}
          <div className="space-y-1.5 border-b border-[#3A230A]/10 pb-5">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#8DA28C] font-semibold block">
              {product.categoryLabel[language]} · Unisex
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-light text-[#3A230A] uppercase tracking-wide">
              {product.name[language]}
            </h1>
            <div className="pt-1 flex items-baseline justify-between">
              <span className="font-mono text-2xl font-bold text-[#3A230A]">
                {formatIDR(product.price)}
              </span>
              <span className="text-[11px] font-mono text-[#8DA28C] uppercase tracking-wider font-semibold">
                In Stock · Atelier Jakarta
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#3A230A]/85 font-light leading-relaxed">
            {product.description[language]}
          </p>

          {/* Color Selection */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-[#3A230A]">
                {t.pdp.color[language]}:{' '}
                <span className="font-normal text-[#3A230A]/70">{selectedColor}</span>
              </span>
            </div>
            <div className="flex gap-2.5">
              {product.colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setSelectedColor(c.name[language])}
                  className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
                    selectedColor === c.name[language]
                      ? 'border-[#3A230A] ring-2 ring-[#3A230A]/30 scale-110'
                      : 'border-[#3A230A]/20 hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name[language]}
                >
                  {selectedColor === c.name[language] && (
                    <Check
                      className={`w-3.5 h-3.5 ${
                        c.hex === '#F7F5EF' || c.hex === '#EEE9C1' ? 'text-[#3A230A]' : 'text-[#F7F5EF]'
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-[#3A230A]">
                {t.pdp.size[language]}:{' '}
                <span className="font-normal text-[#3A230A]/70">{selectedSize}</span>
              </span>
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(true)}
                className="text-[11px] text-[#A4530C] hover:underline flex items-center gap-1 font-medium cursor-pointer"
              >
                <Ruler className="w-3.5 h-3.5" />
                <span>{t.pdp.sizeGuide[language]}</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-4 py-2 text-xs uppercase font-medium rounded transition-all cursor-pointer ${
                    selectedSize === sz
                      ? 'bg-[#3A230A] text-[#F7F5EF] shadow-sm'
                      : 'bg-[#EEE9C1]/50 text-[#3A230A] hover:bg-[#EEE9C1] border border-[#3A230A]/10'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-3 pt-3">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-[#3A230A]/20 rounded bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-3 text-[#3A230A]/70 hover:text-[#3A230A] hover:bg-[#EEE9C1] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs font-mono font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-3 text-[#3A230A]/70 hover:text-[#3A230A] hover:bg-[#EEE9C1] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 bg-[#3A230A] hover:bg-[#8DA28C] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-semibold rounded transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.pdp.addToBag[language]}</span>
              </button>
            </div>
          </div>

          {/* Trust points */}
          <div className="pt-3 border-t border-[#3A230A]/10 grid grid-cols-2 gap-2 text-[11px] text-[#3A230A]/70">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#8DA28C]" />
              <span>Free Delivery &gt; 1M IDR</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5 text-[#8DA28C]" />
              <span>14-Day Complimentary Exchange</span>
            </div>
          </div>

          {/* Accordion Tabs (Materials, Details, Care) */}
          <div className="pt-4 border-t border-[#3A230A]/10 space-y-2">
            {/* Composition */}
            <div className="border-b border-[#3A230A]/10 pb-2">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === 'materials' ? null : 'materials')
                }
                className="w-full flex justify-between items-center py-1.5 text-xs font-semibold uppercase tracking-wider text-[#3A230A] cursor-pointer"
              >
                <span>{t.pdp.materialsHeading[language]}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    openAccordion === 'materials' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'materials' && (
                <div className="text-xs text-[#3A230A]/80 font-light py-2 leading-relaxed animate-in fade-in">
                  <p>{product.materials[language]}</p>
                </div>
              )}
            </div>

            {/* Garment Details */}
            <div className="border-b border-[#3A230A]/10 pb-2">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === 'details' ? null : 'details')
                }
                className="w-full flex justify-between items-center py-1.5 text-xs font-semibold uppercase tracking-wider text-[#3A230A] cursor-pointer"
              >
                <span>{t.pdp.detailsHeading[language]}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    openAccordion === 'details' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'details' && (
                <div className="text-xs text-[#3A230A]/80 font-light py-2 space-y-1 animate-in fade-in">
                  <ul className="list-disc pl-4 space-y-1">
                    {product.details[language].map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Care & Delivery */}
            <div className="border-b border-[#3A230A]/10 pb-2">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')
                }
                className="w-full flex justify-between items-center py-1.5 text-xs font-semibold uppercase tracking-wider text-[#3A230A] cursor-pointer"
              >
                <span>{t.pdp.careHeading[language]}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    openAccordion === 'shipping' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === 'shipping' && (
                <div className="text-xs text-[#3A230A]/80 font-light py-2 space-y-2 leading-relaxed animate-in fade-in">
                  <p>{t.pdp.careText[language]}</p>
                  <p className="pt-1 text-[#8DA28C] font-mono">{t.pdp.shippingText[language]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products / Complete the Look */}
      <section className="pt-12 border-t border-[#3A230A]/10 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8DA28C] font-semibold block mb-1">
            Styling Pairings
          </span>
          <h2 className="font-editorial text-3xl font-light text-[#3A230A] uppercase tracking-wide">
            {t.pdp.relatedTitle[language]}
          </h2>
          <p className="text-xs text-[#3A230A]/70 max-w-xl font-light mt-1">
            {t.pdp.relatedSubtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <div
              key={rel.id}
              onClick={() => navigateTo('product-detail', rel.id)}
              className="group bg-[#F7F5EF] cursor-pointer space-y-3"
            >
              <div className="aspect-4/5 overflow-hidden rounded bg-[#EEE9C1]/30 border border-[#3A230A]/10">
                <img
                  src={rel.image}
                  alt={rel.name[language]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8DA28C]">
                  {rel.categoryLabel[language]}
                </span>
                <h4 className="text-sm font-semibold text-[#3A230A] group-hover:text-[#A4530C] transition-colors truncate">
                  {rel.name[language]}
                </h4>
                <span className="font-mono text-xs font-semibold text-[#3A230A] block">
                  {formatIDR(rel.price)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
