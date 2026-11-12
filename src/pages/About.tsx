import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Sparkles, Compass, ShieldCheck, Heart, Lightbulb, UserCheck, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const { language, t } = useLanguage();
  const { navigateTo } = useCart();

  const valueIcons = [
    Lightbulb, // Creativity
    Heart, // Inclusivity
    ShieldCheck, // Quality
    Sparkles, // Innovation
    UserCheck, // Individuality
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. EDITORIAL HEADER */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-[#EEE9C1]/30 border-b border-[#3A230A]/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8DA28C] font-semibold">
            Brand Manifesto & Ethos
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#3A230A] uppercase tracking-wide leading-tight">
            {t.about.heroTitle[language]}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#3A230A]/80 font-light leading-relaxed">
            {t.about.heroSubtitle[language]}
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & ATELIER PHOTOGRAPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Atelier Image */}
          <div className="lg:col-span-6 space-y-3">
            <div className="aspect-4/3 overflow-hidden rounded-lg border border-[#3A230A]/10 shadow-sm bg-[#EEE9C1]/40">
              <img
                src="/src/assets/images/about_atelier_story_1794479390259.jpg"
                alt="Inside the CASSATAVI Atelier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] font-mono text-[#3A230A]/60 block text-center">
              The CASSATAVI Atelier — Meticulous pattern drafting & noble textile curation.
            </span>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#A4530C] font-semibold">
              The Genesis
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#3A230A] uppercase">
              {t.about.storyTitle[language]}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#3A230A]/85 font-light leading-relaxed">
              <p>{t.about.storyParagraph1[language]}</p>
              <p>{t.about.storyParagraph2[language]}</p>
            </div>
            <div className="pt-2">
              <blockquote className="border-l-2 border-[#8DA28C] pl-4 italic text-sm text-[#3A230A]/90 font-editorial">
                "We don't design for gender categories. We sculpt for human posture, confidence, and enduring poise."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="bg-[#F7F5EF] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-[#EEE9C1]/50 border border-[#3A230A]/10 rounded-lg p-8 sm:p-10 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#8DA28C]/20 text-[#8DA28C] flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#8DA28C]" />
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#3A230A] uppercase">
              {t.about.visionTitle[language]}
            </h3>
            <p className="text-xs sm:text-sm text-[#3A230A]/85 font-light leading-relaxed">
              {t.about.visionText[language]}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#EEE9C1]/50 border border-[#3A230A]/10 rounded-lg p-8 sm:p-10 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#A4530C]/20 text-[#A4530C] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#A4530C]" />
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#3A230A] uppercase">
              {t.about.missionTitle[language]}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3A230A]/85 font-light">
              {t.about.missionList.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#8DA28C] font-bold text-xs mt-0.5">0{idx + 1}.</span>
                  <span>{m[language]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8DA28C] font-semibold">
            Guiding Principles
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#3A230A] uppercase">
            {t.about.valuesTitle[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.about.values.map((v, idx) => {
            const Icon = valueIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-[#F7F5EF] p-6 rounded-lg border border-[#3A230A]/10 space-y-3 hover:border-[#8DA28C] transition-colors"
              >
                <div className="w-9 h-9 rounded bg-[#EEE9C1] flex items-center justify-center text-[#3A230A]">
                  <Icon className="w-4 h-4 text-[#A4530C]" />
                </div>
                <h4 className="font-editorial text-lg font-normal text-[#3A230A] uppercase tracking-wide">
                  {v.name[language]}
                </h4>
                <p className="text-xs text-[#3A230A]/75 font-light leading-relaxed">
                  {v.desc[language]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CTA TO EXPLORE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="bg-[#3A230A] text-[#F7F5EF] p-10 sm:p-14 rounded-lg space-y-5">
          <h3 className="font-editorial text-3xl sm:text-4xl font-light uppercase tracking-wide text-[#F7F5EF]">
            Experience The Silhouette
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F5EF]/80 font-light max-w-md mx-auto">
            Explore our latest unisex pieces engineered in our atelier with deliberate proportion.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('collection')}
              className="px-8 py-3.5 bg-[#8DA28C] hover:bg-[#8DA28C]/90 text-[#3A230A] text-xs uppercase tracking-[0.2em] font-semibold rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
