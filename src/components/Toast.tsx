import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, openCart } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#3A230A] text-[#F7F5EF] px-5 py-3.5 rounded-lg shadow-2xl border border-[#EEE9C1]/20 flex items-center gap-4 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-[#8DA28C]/30 text-[#EEE9C1] flex items-center justify-center shrink-0">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-[#F7F5EF] truncate">
            {toastMessage}
          </p>
          <button
            onClick={openCart}
            className="text-[11px] text-[#EEE9C1] hover:underline font-semibold flex items-center gap-1 mt-0.5"
          >
            <span>View Shopping Bag</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
