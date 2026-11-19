import React from 'react';
import { Phone, MessageCircle, Compass, Mic, Images } from 'lucide-react';
import { Language, Currency } from '../types';
import { UI_STRINGS } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CurrencySwitcher } from './CurrencySwitcher';
import { CretePointsWidget } from './CretePointsWidget';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  currentCurrency: Currency;
  onSelectCurrency: (currency: Currency) => void;
  onOpenVoiceModal: () => void;
  cretePoints: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  currentCurrency,
  onSelectCurrency,
  onOpenVoiceModal,
  cretePoints,
}) => {
  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#C85A32] flex items-center justify-center text-white shadow-md shadow-[#C85A32]/20 shrink-0">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-title font-black text-[#1C1917] leading-tight">
              {UI_STRINGS.heroTitle[currentLang]}
            </h1>
            <p className="text-xs font-medium text-[#556B2F] flex items-center gap-1.5">
              <span>{UI_STRINGS.heroHost[currentLang]}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]"></span>
              <span className="text-stone-500 font-normal">Local Partner</span>
            </p>
          </div>
        </div>

        {/* Center: Language, Currency, Crete Points & Action Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <LanguageSwitcher currentLang={currentLang} onSelectLang={onSelectLang} />
          <CurrencySwitcher currentCurrency={currentCurrency} onSelectCurrency={onSelectCurrency} />
          <CretePointsWidget points={cretePoints} currentLang={currentLang} />

          {/* Discrete Gallery Button */}
          <button
            onClick={scrollToGallery}
            className="p-2.5 rounded-xl bg-stone-100 hover:bg-[#102552] text-stone-700 hover:text-white transition-all border border-stone-200/80 flex items-center gap-1.5 text-xs font-bold shadow-xs group"
            title={currentLang === 'el' ? 'Φωτογραφίες & Άμεση Κράτηση' : 'Photo Gallery & Booking'}
            aria-label="Photo Gallery"
          >
            <Images className="w-4 h-4 text-[#102552] group-hover:text-[#FFC72C] transition-colors" />
            <span className="hidden sm:inline">Gallery</span>
          </button>

          {/* Discrete Voice Assistant Button in Header */}
          <button
            onClick={onOpenVoiceModal}
            className="p-2.5 rounded-xl bg-stone-100 hover:bg-[#102552] text-stone-700 hover:text-white transition-all border border-stone-200/80 flex items-center gap-1.5 text-xs font-bold shadow-xs group"
            title="Voice Search & Booking"
            aria-label="Voice Assistant"
          >
            <Mic className="w-4 h-4 text-[#C85A32] group-hover:text-[#FFC72C] transition-colors animate-pulse" />
            <span className="hidden sm:inline">Voice Assistant</span>
          </button>
        </div>

        {/* Right: Quick Direct Contact Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="tel:6934644010"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#1C1917] font-semibold text-xs transition-colors border border-stone-200"
          >
            <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>6934644010</span>
          </a>
          <a
            href="https://wa.me/306934644010?text=Hello%20Manos,%20I%20would%20like%20to%20inquire%20about%20your%20Crete%20Experiences!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs shadow-sm transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

