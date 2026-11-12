import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../data/translations';
import { X, CheckCircle, PackageCheck, Printer, ArrowLeft } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    items,
    isCheckoutOpen,
    closeCheckout,
    clearCart,
    subtotal,
    discount,
    total,
    navigateTo,
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: 'Adrienne Hartanto',
    email: 'hartanto.a@luxury.id',
    phone: '+62 812-3456-7890',
    address: 'Jl. Senopati Boulevard No. 18, Apt 12B',
    city: 'Jakarta Selatan',
    postalCode: '12190',
  });

  const [selectedCourier, setSelectedCourier] = useState<'jne' | 'sicepat' | 'instant'>('jne');
  const [selectedPayment, setSelectedPayment] = useState<'bca' | 'qris' | 'cc' | 'cod'>('bca');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const courierPrices = {
    jne: subtotal >= 1000000 ? 0 : 35000,
    sicepat: 25000,
    instant: 45000,
  };

  const finalShipping = courierPrices[selectedCourier];
  const finalTotal = subtotal - discount + finalShipping;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const orderRef = `CS-${randomNum}`;
    setOrderNumber(orderRef);
    setIsSubmitted(true);
    clearCart();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3A230A]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#F7F5EF] text-[#3A230A] max-w-3xl w-full rounded-lg shadow-2xl border border-[#3A230A]/15 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="p-6 border-b border-[#3A230A]/10 flex items-center justify-between bg-[#F7F5EF]">
          <div>
            <span className="font-editorial text-2xl font-light tracking-wider uppercase text-[#3A230A]">
              CASSATAVI
            </span>
            <p className="text-xs text-[#A4530C] font-mono tracking-widest uppercase">
              {t.checkout.title[language]}
            </p>
          </div>
          <button
            onClick={closeCheckout}
            className="p-2 text-[#3A230A]/60 hover:text-[#3A230A] rounded-full hover:bg-[#EEE9C1] transition-colors"
            aria-label="Close Checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Receipt Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#8DA28C]/20 text-[#8DA28C] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-editorial text-3xl font-light text-[#3A230A] uppercase tracking-wide">
                {t.checkout.orderConfirmed[language]}
              </h3>
              <p className="text-sm font-mono text-[#A4530C] font-semibold mt-1">
                {t.checkout.orderNumber[language]}: {orderNumber}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#3A230A]/80 max-w-md mx-auto leading-relaxed font-light">
              {t.checkout.thankYou[language]}
            </p>

            {/* Receipt Summary Card */}
            <div className="bg-[#EEE9C1]/40 border border-[#3A230A]/10 rounded-md p-6 max-w-md mx-auto text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-[#3A230A]/10 pb-2">
                <span className="font-medium text-[#3A230A]">Recipient:</span>
                <span className="font-mono">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-[#3A230A]/10 pb-2">
                <span className="font-medium text-[#3A230A]">Destination:</span>
                <span className="text-right">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between border-b border-[#3A230A]/10 pb-2">
                <span className="font-medium text-[#3A230A]">Courier Service:</span>
                <span className="uppercase font-mono">{selectedCourier} (Dispatched from Jakarta)</span>
              </div>
              <div className="flex justify-between border-b border-[#3A230A]/10 pb-2">
                <span className="font-medium text-[#3A230A]">Payment Method:</span>
                <span className="uppercase font-mono">{selectedPayment}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm text-[#3A230A]">
                <span>Total Amount Paid:</span>
                <span className="font-mono text-[#3A230A]">{formatIDR(finalTotal)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 border border-[#3A230A]/30 text-[#3A230A] hover:bg-[#EEE9C1] rounded text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Receipt</span>
              </button>
              <button
                onClick={() => {
                  closeCheckout();
                  navigateTo('collection');
                }}
                className="px-6 py-2.5 bg-[#3A230A] hover:bg-[#8DA28C] text-[#F7F5EF] rounded text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                {t.checkout.returnToStore[language]}
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-8">
            {/* Step 1: Delivery Information */}
            <div>
              <h3 className="text-sm font-semibold text-[#3A230A] uppercase tracking-wider mb-4 border-b border-[#3A230A]/10 pb-2 flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-[#8DA28C]" />
                <span>{t.checkout.step1[language]}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#3A230A] mb-1">
                    {t.checkout.fullName[language]} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3A230A] mb-1">
                    {t.checkout.email[language]} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3A230A] mb-1">
                    {t.checkout.phone[language]} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3A230A] mb-1">
                    {t.checkout.city[language]} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#3A230A] mb-1">
                    {t.checkout.address[language]} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3A230A] mb-1">
                    {t.checkout.postalCode[language]} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Courier Selection */}
            <div>
              <h3 className="text-sm font-semibold text-[#3A230A] uppercase tracking-wider mb-4 border-b border-[#3A230A]/10 pb-2">
                {t.checkout.step2[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'jne' as const,
                    name: 'JNE Express',
                    eta: '2-3 Days',
                    price: courierPrices.jne,
                  },
                  {
                    id: 'sicepat' as const,
                    name: 'SiCepat BEST',
                    eta: 'Next Day',
                    price: courierPrices.sicepat,
                  },
                  {
                    id: 'instant' as const,
                    name: 'Instant (Jakarta)',
                    eta: 'Same Day 3h',
                    price: courierPrices.instant,
                  },
                ].map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCourier(c.id)}
                    className={`p-3.5 border rounded-md cursor-pointer transition-all ${
                      selectedCourier === c.id
                        ? 'border-[#8DA28C] bg-[#8DA28C]/10 ring-1 ring-[#8DA28C]'
                        : 'border-[#3A230A]/15 hover:border-[#3A230A]/40'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span>{c.name}</span>
                      <span className="font-mono text-[#A4530C]">
                        {c.price === 0 ? 'FREE' : formatIDR(c.price)}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#3A230A]/60 block mt-1">{c.eta}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div>
              <h3 className="text-sm font-semibold text-[#3A230A] uppercase tracking-wider mb-4 border-b border-[#3A230A]/10 pb-2">
                {t.checkout.step3[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'bca' as const, label: 'BCA Virtual Account', desc: 'Auto-verified transfer' },
                  { id: 'qris' as const, label: 'QRIS Universal Instant', desc: 'GoPay, ShopeePay, OVO, Dana' },
                  { id: 'cc' as const, label: 'Credit / Debit Card', desc: 'Visa, Mastercard 3D-Secure' },
                  { id: 'cod' as const, label: 'Cash on Delivery (COD)', desc: 'Pay at parcel inspection' },
                ].map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPayment(p.id)}
                    className={`p-3.5 border rounded-md cursor-pointer transition-all ${
                      selectedPayment === p.id
                        ? 'border-[#8DA28C] bg-[#8DA28C]/10 ring-1 ring-[#8DA28C]'
                        : 'border-[#3A230A]/15 hover:border-[#3A230A]/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <input
                        type="radio"
                        checked={selectedPayment === p.id}
                        onChange={() => setSelectedPayment(p.id)}
                        className="text-[#8DA28C] focus:ring-[#8DA28C]"
                      />
                      <span>{p.label}</span>
                    </div>
                    <span className="text-[11px] text-[#3A230A]/60 block ml-5 mt-0.5">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Review & Submit */}
            <div className="pt-4 border-t border-[#3A230A]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-xs text-[#3A230A]/70 uppercase tracking-wider block">
                  Total Payable Amount
                </span>
                <span className="text-xl font-bold font-mono text-[#3A230A]">
                  {formatIDR(finalTotal)}
                </span>
                <span className="text-[10px] text-[#8DA28C] block">
                  Includes all duties, taxes, and luxury packaging
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={closeCheckout}
                  className="px-4 py-3 border border-[#3A230A]/20 text-[#3A230A] text-xs uppercase tracking-wider rounded hover:bg-[#EEE9C1] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-8 py-3 bg-[#3A230A] hover:bg-[#8DA28C] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-semibold rounded shadow-md transition-colors cursor-pointer"
                >
                  {t.checkout.placeOrder[language]}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
