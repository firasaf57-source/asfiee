import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MessageSquare, Instagram, MapPin, Clock, CheckCircle, Send, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedTicket = `CON-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedTicket);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8DA28C] font-semibold">
          Client Concierge & Atelier
        </span>
        <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-light text-[#3A230A] uppercase tracking-wide leading-tight">
          {t.contact.headline[language]}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#3A230A]/80 font-light leading-relaxed">
          {t.contact.subheadline[language]}
        </p>
      </div>

      {/* Main 2-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Form (Col 1-7) */}
        <div className="lg:col-span-7 bg-[#F7F5EF] p-8 sm:p-10 rounded-lg border border-[#3A230A]/10 shadow-xs">
          <h2 className="font-editorial text-2xl font-light text-[#3A230A] uppercase tracking-wide mb-6">
            {t.contact.formTitle[language]}
          </h2>

          {isSuccess ? (
            <div className="p-8 text-center space-y-4 bg-[#EEE9C1]/40 border border-[#8DA28C]/30 rounded">
              <div className="w-12 h-12 rounded-full bg-[#8DA28C]/20 text-[#8DA28C] flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#3A230A] uppercase">
                Inquiry Logged #{ticketId}
              </h3>
              <p className="text-xs sm:text-sm text-[#3A230A]/80 font-light leading-relaxed max-w-md mx-auto">
                {t.contact.successMessage[language]}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-4 px-6 py-2 bg-[#3A230A] text-[#F7F5EF] text-xs uppercase tracking-wider rounded font-medium hover:bg-[#8DA28C] transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3A230A] mb-1.5">
                  {t.contact.fullName[language]} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t.contact.fullNamePlaceholder[language]}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C] placeholder:text-[#3A230A]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3A230A] mb-1.5">
                  {t.contact.email[language]} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.emailPlaceholder[language]}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C] placeholder:text-[#3A230A]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3A230A] mb-1.5">
                  {t.contact.subject[language]}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.subjectPlaceholder[language]}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C] placeholder:text-[#3A230A]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3A230A] mb-1.5">
                  {t.contact.message[language]} *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder[language]}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#3A230A]/20 rounded bg-white text-[#3A230A] focus:outline-none focus:border-[#8DA28C] placeholder:text-[#3A230A]/40"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#3A230A] hover:bg-[#8DA28C] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>{t.contact.sending[language]}</span>
                ) : (
                  <>
                    <span>{t.contact.sendBtn[language]}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Channels & Atelier Info (Col 8-12) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Concierge Channels */}
          <div className="bg-[#EEE9C1]/50 p-6 sm:p-8 rounded-lg border border-[#3A230A]/10 space-y-6">
            <h3 className="font-editorial text-xl font-light text-[#3A230A] uppercase tracking-wide">
              {t.contact.directContactsTitle[language]}
            </h3>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6280822303200"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3.5 bg-[#F7F5EF] rounded border border-[#3A230A]/10 hover:border-[#8DA28C] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#8DA28C]/20 text-[#8DA28C] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#3A230A]/60 block">
                    {t.contact.whatsappLabel[language]}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#3A230A] group-hover:text-[#A4530C]">
                    +62 808-2230-3200
                  </span>
                  <p className="text-[11px] text-[#3A230A]/60 mt-0.5">
                    Real-time styling advice & order support
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:concierge@cassatavi.com"
                className="flex items-start gap-4 p-3.5 bg-[#F7F5EF] rounded border border-[#3A230A]/10 hover:border-[#8DA28C] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#3A230A]/10 text-[#3A230A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#3A230A]/60 block">
                    {t.contact.emailLabel[language]}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#3A230A] group-hover:text-[#A4530C]">
                    concierge@cassatavi.com
                  </span>
                  <p className="text-[11px] text-[#3A230A]/60 mt-0.5">
                    Bespoke commissions & press inquiries
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3.5 bg-[#F7F5EF] rounded border border-[#3A230A]/10 hover:border-[#8DA28C] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#A4530C]/15 text-[#A4530C] flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#3A230A]/60 block">
                    {t.contact.instagramLabel[language]}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#3A230A] group-hover:text-[#A4530C]">
                    @cassatavi.official
                  </span>
                  <p className="text-[11px] text-[#3A230A]/60 mt-0.5">
                    Editorial releases, runway looks & stories
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Flagship Atelier & Residence */}
          <div className="bg-[#F7F5EF] p-6 sm:p-8 rounded-lg border border-[#3A230A]/10 space-y-4">
            <h3 className="font-editorial text-xl font-light text-[#3A230A] uppercase tracking-wide">
              {t.contact.atelierInfoTitle[language]}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#3A230A]/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8DA28C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#3A230A]">{t.contact.address.line1}</p>
                  <p>{t.contact.address.line2}</p>
                  <p>{t.contact.address.line3}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-[#8DA28C] shrink-0 mt-0.5" />
                <div>
                  <p>{t.contact.hours[language]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
