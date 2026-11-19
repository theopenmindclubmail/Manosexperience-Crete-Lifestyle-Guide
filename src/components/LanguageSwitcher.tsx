import React from 'react';
import { Language } from '../types';
import { LANGUAGES } from '../data/translations';

interface LanguageSwitcherProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onSelectLang,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center p-1 rounded-xl bg-stone-100/90 border border-stone-200/90 shadow-2xs ${className}`}>
      {LANGUAGES.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
            <div key={lang.code} className="relative group">
              <button
                type="button"
                onClick={() => onSelectLang(lang.code)}
                aria-label={`Switch language to ${lang.nativeName}`}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#102552] shadow-xs border border-stone-200/80 font-bold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
                title={`Switch language to ${lang.nativeName}`}
              >
                <span className="text-sm leading-none">{lang.flag}</span>
                <span className="uppercase text-[11px] tracking-wide font-sans">{lang.code}</span>
              </button>
              {/* Subtle hover tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 hidden group-hover:block px-2 py-1 rounded-md bg-stone-900 text-white text-[10px] font-medium whitespace-nowrap shadow-lg pointer-events-none z-50 animate-fadeIn">
                {lang.nativeName}
              </div>
            </div>
        );
      })}
    </div>
  );
};

