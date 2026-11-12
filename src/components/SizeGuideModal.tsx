import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { X, Check } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useCart();
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  if (!isSizeGuideOpen) return null;

  const sizeData = [
    { size: 'XS', chestCm: '94-98', chestIn: '37-38.5', waistCm: '74-78', waistIn: '29-31', hipsCm: '92-96', hipsIn: '36-38', lengthCm: '72', lengthIn: '28.3' },
    { size: 'S', chestCm: '99-104', chestIn: '39-41', waistCm: '79-84', waistIn: '31-33', hipsCm: '97-102', hipsIn: '38-40', lengthCm: '74', lengthIn: '29.1' },
    { size: 'M', chestCm: '105-110', chestIn: '41.5-43.3', waistCm: '85-90', waistIn: '33.5-35.4', hipsCm: '103-108', hipsIn: '40.5-42.5', lengthCm: '76', lengthIn: '29.9' },
    { size: 'L', chestCm: '111-116', chestIn: '43.7-45.7', waistCm: '91-96', waistIn: '35.8-37.8', hipsCm: '109-114', hipsIn: '42.9-44.9', lengthCm: '78', lengthIn: '30.7' },
    { size: 'XL', chestCm: '117-124', chestIn: '46-48.8', waistCm: '97-104', waistIn: '38.2-41', hipsCm: '115-122', hipsIn: '45.3-48', lengthCm: '80', lengthIn: '31.5' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#3A230A]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#F7F5EF] text-[#3A230A] max-w-2xl w-full rounded-lg shadow-2xl border border-[#3A230A]/15 overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-[#3A230A]/10 flex items-center justify-between">
          <div>
            <h3 className="font-editorial text-2xl font-light text-[#3A230A] uppercase tracking-wide">
              {t.sizeGuide.title[language]}
            </h3>
            <span className="text-xs text-[#A4530C] font-mono tracking-widest uppercase">
              Contemporary Unisex Silhouette
            </span>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 text-[#3A230A]/60 hover:text-[#3A230A] rounded-full hover:bg-[#EEE9C1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-xs sm:text-sm text-[#3A230A]/80 font-light leading-relaxed">
            {t.sizeGuide.subtitle[language]}
          </p>

          {/* Unit Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#3A230A]/70">
              Measurement Metric
            </span>
            <div className="flex bg-[#EEE9C1] rounded p-0.5 text-xs">
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 rounded transition-colors font-mono ${
                  unit === 'cm' ? 'bg-[#3A230A] text-[#F7F5EF] font-semibold' : 'text-[#3A230A]'
                }`}
              >
                Centimeters (cm)
              </button>
              <button
                onClick={() => setUnit('in')}
                className={`px-3 py-1 rounded transition-colors font-mono ${
                  unit === 'in' ? 'bg-[#3A230A] text-[#F7F5EF] font-semibold' : 'text-[#3A230A]'
                }`}
              >
                Inches (in)
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-[#3A230A]/10 rounded">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#EEE9C1]/50 border-b border-[#3A230A]/10 text-[#3A230A] font-semibold">
                  <th className="py-2.5 px-3">Size</th>
                  <th className="py-2.5 px-3">Chest</th>
                  <th className="py-2.5 px-3">Waist</th>
                  <th className="py-2.5 px-3">Hips</th>
                  <th className="py-2.5 px-3">Back Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3A230A]/10 font-mono text-[#3A230A]/90">
                {sizeData.map((row) => (
                  <tr key={row.size} className="hover:bg-[#EEE9C1]/30 transition-colors">
                    <td className="py-2.5 px-3 font-sans font-bold text-[#3A230A]">{row.size}</td>
                    <td className="py-2.5 px-3">{unit === 'cm' ? `${row.chestCm} cm` : `${row.chestIn} in`}</td>
                    <td className="py-2.5 px-3">{unit === 'cm' ? `${row.waistCm} cm` : `${row.waistIn} in`}</td>
                    <td className="py-2.5 px-3">{unit === 'cm' ? `${row.hipsCm} cm` : `${row.hipsIn} in`}</td>
                    <td className="py-2.5 px-3">{unit === 'cm' ? `${row.lengthCm} cm` : `${row.lengthIn} in`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fitting Notes */}
          <div className="bg-[#8DA28C]/15 border border-[#8DA28C]/30 rounded p-4 text-xs space-y-1.5 text-[#3A230A]">
            <span className="font-semibold block uppercase tracking-wider text-[11px] text-[#3A230A]">
              Atelier Fit Recommendation:
            </span>
            <div className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#8DA28C] shrink-0 mt-0.5" />
              <span><strong>Tailored Fit:</strong> Select your standard universal size for a refined, sculptured line.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#8DA28C] shrink-0 mt-0.5" />
              <span><strong>Exaggerated Editorial Volume:</strong> Take one size above your usual fit for runway presence.</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#EEE9C1]/30 border-t border-[#3A230A]/10 flex justify-end">
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="px-5 py-2 bg-[#3A230A] text-[#F7F5EF] text-xs uppercase tracking-wider font-medium rounded hover:bg-[#8DA28C] transition-colors"
          >
            {t.sizeGuide.close[language]}
          </button>
        </div>
      </div>
    </div>
  );
};
