import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../data/translations';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    items,
    isCartOpen,
    closeCart,
    openCheckout,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    discount,
    appliedPromo,
    applyPromo,
    removePromo,
    total,
    navigateTo,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(false);
    const success = applyPromo(promoInput);
    if (!success) {
      setPromoError(true);
    } else {
      setPromoInput('');
    }
  };

  const freeShippingThreshold = 1000000;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#3A230A]/40 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F5EF] text-[#3A230A] shadow-2xl flex flex-col border-l border-[#3A230A]/10 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#3A230A]/10 flex items-center justify-between bg-[#F7F5EF]">
            <div>
              <h2 className="font-editorial text-2xl font-light tracking-wider uppercase text-[#3A230A]">
                {t.cart.title[language]}
              </h2>
              <span className="text-xs text-[#3A230A]/60 font-mono">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} {items.length === 1 ? 'item' : 'items'})
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-[#3A230A]/70 hover:text-[#3A230A] rounded-full hover:bg-[#EEE9C1] transition-colors focus:outline-none"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Tracker */}
          <div className="bg-[#EEE9C1]/50 px-6 py-3 border-b border-[#3A230A]/10 text-xs">
            <div className="flex justify-between items-center mb-1.5 font-medium">
              <span>
                {subtotal >= freeShippingThreshold
                  ? t.cart.freeShippingNotice[language]
                  : t.cart.awayFromFreeShipping[language](formatIDR(remainingForFreeShipping))}
              </span>
              <span className="font-mono text-[11px] text-[#A4530C]">
                {progressToFreeShipping}%
              </span>
            </div>
            <div className="w-full bg-[#F7F5EF] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#8DA28C] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <p className="text-sm text-[#3A230A]/70 font-light">
                  {t.cart.empty[language]}
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    navigateTo('collection');
                  }}
                  className="px-6 py-2.5 bg-[#3A230A] text-[#F7F5EF] text-xs uppercase tracking-widest font-medium hover:bg-[#8DA28C] transition-colors"
                >
                  {t.cart.continueShopping[language]}
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                  className="flex gap-4 pb-6 border-b border-[#3A230A]/10 items-start"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name[language]}
                    className="w-20 h-24 object-cover rounded bg-[#EEE9C1]/40 border border-[#3A230A]/10 shrink-0 cursor-pointer"
                    onClick={() => {
                      closeCart();
                      navigateTo('product-detail', item.product.id);
                    }}
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        onClick={() => {
                          closeCart();
                          navigateTo('product-detail', item.product.id);
                        }}
                        className="text-xs sm:text-sm font-semibold text-[#3A230A] truncate cursor-pointer hover:text-[#A4530C] transition-colors"
                      >
                        {item.product.name[language]}
                      </h4>
                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.selectedSize, item.selectedColor)
                        }
                        className="text-[#3A230A]/40 hover:text-[#A4530C] transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-[#3A230A]/70 font-light">
                      <span>{item.selectedSize}</span> · <span>{item.selectedColor}</span>
                    </p>

                    <div className="text-xs font-semibold text-[#3A230A] font-mono pt-1">
                      {formatIDR(item.product.price)}
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex items-center border border-[#3A230A]/20 rounded bg-[#F7F5EF]">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)
                          }
                          className="px-2 py-1 text-[#3A230A]/70 hover:text-[#3A230A] hover:bg-[#EEE9C1] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-medium">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)
                          }
                          className="px-2 py-1 text-[#3A230A]/70 hover:text-[#3A230A] hover:bg-[#EEE9C1] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-[11px] text-[#3A230A]/60 font-mono">
                        Sub: {formatIDR(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#3A230A]/10 bg-[#F7F5EF] space-y-4">
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-[#3A230A]/40" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => {
                        setPromoInput(e.target.value);
                        setPromoError(false);
                      }}
                      placeholder="Promo: ORDINARY10"
                      className="w-full pl-8 pr-3 py-2 text-xs border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C] uppercase tracking-wider"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#EEE9C1] hover:bg-[#8DA28C]/30 text-[#3A230A] text-xs font-medium rounded transition-colors"
                  >
                    {t.checkout.apply[language]}
                  </button>
                </div>
                {appliedPromo && (
                  <div className="flex items-center justify-between text-xs text-[#8DA28C] pt-1">
                    <span>{t.checkout.promoApplied[language]} (-10%)</span>
                    <button
                      type="button"
                      onClick={removePromo}
                      className="text-[#A4530C] hover:underline text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {promoError && (
                  <p className="text-[11px] text-[#A4530C]">
                    {t.checkout.promoInvalid[language]}
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#3A230A]/80 pt-2 border-t border-[#3A230A]/10">
                <div className="flex justify-between">
                  <span>{t.cart.subtotal[language]}</span>
                  <span className="font-mono text-[#3A230A]">{formatIDR(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#8DA28C]">
                    <span>Privilege Discount (10%)</span>
                    <span className="font-mono">-{formatIDR(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>{t.cart.shipping[language]}</span>
                  <span className="font-mono text-[#3A230A]">
                    {shipping === 0 ? 'COMPLIMENTARY' : formatIDR(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#3A230A] pt-2 border-t border-[#3A230A]/15">
                  <span>{t.cart.total[language]}</span>
                  <span className="font-mono text-base text-[#3A230A]">{formatIDR(total)}</span>
                </div>
              </div>

              {/* Primary Checkout Button */}
              <button
                onClick={openCheckout}
                className="w-full py-3.5 bg-[#3A230A] hover:bg-[#8DA28C] text-[#F7F5EF] text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
              >
                <span>{t.cart.checkoutBtn[language]}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#3A230A]/60 font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8DA28C]" />
                <span>Indonesian atelier delivery · Authentic luxury guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
