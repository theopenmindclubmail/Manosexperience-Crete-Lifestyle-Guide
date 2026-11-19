import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../data/translations';

interface StickyBottomBarProps {
  currentLang: Language;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ currentLang }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-stone-900/95 backdrop-blur-md border-t border-stone-800 p-3 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href="tel:6934644010"
          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#b04d2a] text-white font-bold text-xs shadow-md transition-all active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span>{UI_STRINGS.callManos[currentLang]}</span>
        </a>

        <a
          href="https://wa.me/306934644010?text=Hello%20Manos!%20I%20am%20viewing%20your%20Digital%20Experience%20Brochure%20and%20would%20like%20to%20book."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

