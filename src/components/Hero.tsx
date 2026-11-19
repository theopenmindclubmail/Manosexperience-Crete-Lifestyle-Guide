import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Bus, Award, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  return (
    <section className="relative overflow-hidden bg-[#1C1917] text-white py-16 sm:py-24 lg:py-28">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/crete_hero_banner_1784890287496.jpg"
          alt="Crete Coastal Landscape"
          className="w-full h-full object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/90 via-transparent to-[#1C1917]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Host badge pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/40 backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-4 h-4 text-[#C85A32]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-100">
            {UI_STRINGS.footerRole}
          </span>
        </div>

        {/* Hero headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-4 leading-tight">
          {UI_STRINGS.heroTitle[currentLang]}
        </h1>
        <p className="text-xl sm:text-2xl font-serif italic text-amber-200/90 mb-6">
          {UI_STRINGS.heroHost[currentLang]}
        </p>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-8">
          {UI_STRINGS.heroSubtitle[currentLang]}
        </p>

        {/* Key Feature Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 text-left">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="p-2 rounded-lg bg-[#C85A32]/30 text-[#C85A32] shrink-0">
              <Bus className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-stone-200">
              {UI_STRINGS.shuttleBadge[currentLang]}
            </span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="p-2 rounded-lg bg-[#556B2F]/40 text-[#556B2F] shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-stone-200">
              {UI_STRINGS.safetyBadge[currentLang]}
            </span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="p-2 rounded-lg bg-amber-500/30 text-amber-400 shrink-0">
              <Award className="w-5 h-5 text-amber-300" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-stone-200">
              {UI_STRINGS.hospitalityBadge[currentLang]}
            </span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="p-2 rounded-lg bg-sky-500/30 text-sky-400 shrink-0">
              <Sparkles className="w-5 h-5 text-sky-300" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-stone-200">
              {UI_STRINGS.experienceBadge[currentLang]}
            </span>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/306934644010?text=Hello%20Manos!%20I%20am%20interested%20in%20booking%20an%20authentic%20Crete%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-xl shadow-emerald-900/30 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{UI_STRINGS.bookWhatsApp[currentLang]}</span>
          </a>

          <a
            href="tel:6934644010"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#C85A32] hover:bg-[#b04d2a] text-white font-bold text-base shadow-xl shadow-[#C85A32]/30 transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>{UI_STRINGS.callManos[currentLang]} (6934644010)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
