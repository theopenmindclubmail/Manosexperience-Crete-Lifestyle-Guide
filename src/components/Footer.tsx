import React from 'react';
import { Phone, Mail, Instagram, Languages, MapPin, Compass } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  return (
    <footer className="bg-[#1C1917] text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About & Host Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C85A32] flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Μάνος Μιχαλίτσης
                </h3>
                <p className="text-xs font-semibold text-[#556B2F]">
                  Local Experience Partner – Κρήτη
                </p>
              </div>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
              {UI_STRINGS.heroSubtitle[currentLang]}
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200/90 mb-2">
              {UI_STRINGS.footerAboutHeader[currentLang]}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-stone-300">
                <Phone className="w-4 h-4 text-[#C85A32]" />
                <span className="font-semibold">{UI_STRINGS.footerPhoneLabel[currentLang]}</span>
                <a
                  href="tel:6934644010"
                  className="text-white hover:text-[#C85A32] font-bold underline transition-colors"
                >
                  6934644010
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-stone-300">
                <Mail className="w-4 h-4 text-[#C85A32]" />
                <span className="font-semibold">{UI_STRINGS.footerEmailLabel[currentLang]}</span>
                <a
                  href="mailto:manosexperience@gmail.com"
                  className="text-white hover:text-[#C85A32] font-medium transition-colors"
                >
                  manosexperience@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-stone-300">
                <Instagram className="w-4 h-4 text-[#C85A32]" />
                <span className="font-semibold">{UI_STRINGS.footerInstagramLabel[currentLang]}</span>
                <a
                  href="https://instagram.com/theluteman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 font-semibold transition-colors"
                >
                  @theluteman
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Languages Spoken (Exact required text) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200/90 mb-2">
              {UI_STRINGS.footerLanguagesLabel[currentLang]}
            </h4>
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <Languages className="w-4 h-4" />
                <span>Multilingual Host</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-200 font-medium leading-relaxed">
                {UI_STRINGS.footerLanguagesValue}
              </p>
            </div>
          </div>

          {/* Column 4: Pickup & Regional Service */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200/90 mb-2">
              Service Areas
            </h4>
            <div className="flex items-start gap-2 text-stone-300 text-xs leading-relaxed">
              <MapPin className="w-4 h-4 text-[#556B2F] shrink-0 mt-0.5" />
              <span>
                Chania, Rethymno, Heraklion, Kissamos, Agia Marina, Platanias, Georgioupolis, Elounda & all Crete locations.
              </span>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/306934644010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>{UI_STRINGS.footerCopyright[currentLang]}</p>
          <p className="font-serif italic text-amber-200/60">
            Crafted for Authentic Crete Travel • Μάνος Μιχαλίτσης
          </p>
        </div>
      </div>
    </footer>
  );
};
