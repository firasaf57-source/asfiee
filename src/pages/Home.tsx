import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { formatIDR } from '../data/translations';
import { ArrowRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const { navigateTo, addToCart } = useCart();

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#F7F5EF]">
        {/* Large Editorial Hero Image with male and female models */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_editorial_duo_1794479387597.jpg"
            alt="CASSATAVI Editorial Campaign featuring male and female models"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02]"
          />
          {/* Subtle warm luxury scrim for readable typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A230A]/85 via-[#3A230A]/35 to-transparent" />
          <div className="absolute inset-0 bg-[#F7F5EF]/10 mix-blend-multiply" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F7F5EF] space-y-6 pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F5EF]/15 backdrop-blur-md rounded-full text-[11px] uppercase tracking-[0.25em] text-[#EEE9C1] font-medium border border-[#F7F5EF]/20">
            <Sparkles className="w-3 h-3 text-[#EEE9C1]" />
            <span>{t.hero.unisexPledge[language]}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.14em] uppercase text-[#F7F5EF] drop-shadow-sm leading-[1.08] text-balance">
            {t.hero.tagline[language]}
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#F7F5EF]/90 font-light leading-relaxed tracking-wide text-balance">
            {t.hero.subheadline[language]}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => navigateTo('collection')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F7F5EF] text-[#3A230A] hover:bg-[#EEE9C1] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{t.hero.ctaExplore[language]}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#A4530C]" />
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#F7F5EF]/60 hover:border-[#F7F5EF] text-[#F7F5EF] hover:bg-[#F7F5EF]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-200 backdrop-blur-xs cursor-pointer"
            >
              <span>{t.hero.ctaStory[language]}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. BRAND PHILOSOPHY BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEE9C1]/50 border border-[#3A230A]/10 rounded-lg p-8 sm:p-14 text-center space-y-4 relative overflow-hidden">
          <div className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#A4530C] font-semibold">
            Brand Manifesto
          </div>
          <h2 className="font-editorial text-2xl sm:text-4xl font-light tracking-wider text-[#3A230A] uppercase max-w-2xl mx-auto">
            "{t.home.philosophyTitle[language]}"
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#3A230A]/80 font-light leading-relaxed max-w-3xl mx-auto">
            {t.home.philosophyBody[language]}
          </p>
          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#3A230A]/70 uppercase tracking-widest font-mono">
            <span>Fluid Proportions</span>
            <span>·</span>
            <span>Noble Fibers</span>
            <span>·</span>
            <span>Unisex Tailoring</span>
          </div>
        </div>
      </section>

      {/* 3. NEW ARRIVALS & FEATURED COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A230A]/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8DA28C] font-semibold block mb-1">
              Curated Selection
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-light tracking-wide text-[#3A230A] uppercase">
              {t.home.newArrivals[language]}
            </h2>
          </div>
          <button
            onClick={() => navigateTo('collection')}
            className="text-xs uppercase tracking-widest font-semibold text-[#A4530C] hover:text-[#3A230A] transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>{t.home.viewAllProducts[language]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
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
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                />

                {/* Subtle Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="bg-[#3A230A] text-[#F7F5EF] text-[10px] tracking-widest uppercase px-2 py-0.5 rounded font-mono font-medium">
                      New
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
              <div className="pt-3.5 pb-1 space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#8DA28C] block">
                  {product.categoryLabel[language]}
                </span>
                <h3
                  onClick={() => navigateTo('product-detail', product.id)}
                  className="text-sm font-semibold text-[#3A230A] group-hover:text-[#A4530C] transition-colors cursor-pointer truncate"
                >
                  {product.name[language]}
                </h3>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-xs font-semibold text-[#3A230A]">
                    {formatIDR(product.price)}
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EDITORIAL CAMPAIGN HIGHLIGHT (LOOKBOOK PREVIEW) */}
      <section className="bg-[#EEE9C1]/30 border-y border-[#3A230A]/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Left (Col 1-7) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-3/4 overflow-hidden rounded shadow-sm border border-[#3A230A]/10">
                  <img
                    src="/src/assets/images/lookbook_urban_elegance_1794479411346.jpg"
                    alt="Urban Elegance Lookbook Campaign"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-[#F7F5EF] border border-[#3A230A]/10 rounded text-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8DA28C] block">
                    Campaign Chapter 02
                  </span>
                  <span className="text-xs font-medium text-[#3A230A]">URBAN ELEGANCE</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="aspect-3/4 overflow-hidden rounded shadow-sm border border-[#3A230A]/10">
                  <img
                    src="/src/assets/images/lookbook_campaign_blazer_1794479387996.jpg"
                    alt="The New Form Campaign"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-[#F7F5EF] border border-[#3A230A]/10 rounded text-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8DA28C] block">
                    Campaign Chapter 01
                  </span>
                  <span className="text-xs font-medium text-[#3A230A]">THE NEW FORM</span>
                </div>
              </div>
            </div>

            {/* Copy Right (Col 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#A4530C] font-semibold">
                  Editorial Retrospective
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#3A230A] uppercase leading-tight">
                  {t.home.editorialCampaign[language]}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#3A230A]/80 font-light leading-relaxed">
                {t.home.editorialSubtitle[language]} Capturing the tension between structured architectural silhouettes and fluid unisex movement.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#3A230A]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DA28C]" />
                  <span>Chapter 01: THE NEW FORM</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#3A230A]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DA28C]" />
                  <span>Chapter 02: URBAN ELEGANCE</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#3A230A]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DA28C]" />
                  <span>Chapter 03: BEYOND BOUNDARIES</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#3A230A]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DA28C]" />
                  <span>Chapter 04: MODERN IDENTITY</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('lookbook')}
                  className="px-6 py-3 bg-[#3A230A] text-[#F7F5EF] hover:bg-[#8DA28C] text-xs uppercase tracking-[0.2em] font-semibold rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.home.discoverLookbook[language]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ATELIER & CRAFTSMANSHIP SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F5EF] border border-[#3A230A]/10 rounded-lg overflow-hidden">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8DA28C] font-semibold">
              {t.home.atelierBadge[language]}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#3A230A] uppercase">
              {t.home.atelierTitle[language]}
            </h2>
            <p className="text-xs sm:text-sm text-[#3A230A]/80 font-light leading-relaxed">
              {t.home.atelierDesc[language]}
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="text-xs uppercase tracking-widest font-semibold text-[#A4530C] hover:text-[#3A230A] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{t.home.readStory[language]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 sm:h-96">
            <img
              src="/src/assets/images/about_atelier_story_1794479390259.jpg"
              alt="CASSATAVI Design Atelier in Paris & Jakarta"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
