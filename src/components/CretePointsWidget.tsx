import React, { useState } from 'react';
import { Award, Sparkles, Gift, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface CretePointsWidgetProps {
  points: number;
  currentLang: Language;
}

export const CretePointsWidget: React.FC<CretePointsWidgetProps> = ({
  points,
  currentLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const nextRewardThreshold = 500;
  const progressPercent = Math.min(100, Math.round((points / nextRewardThreshold) * 100));

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-500/10 via-stone-100 to-amber-500/20 hover:from-amber-500/20 hover:to-amber-500/30 text-[#102552] border border-amber-300/60 shadow-2xs transition-all duration-200 group"
        title="Crete Loyalty Points"
      >
        <Award className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-black tracking-wide">{points}</span>
        <span className="text-[10px] uppercase font-extrabold text-amber-800/80">PTS</span>
      </button>

      {/* Popover / Tooltip modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 p-4 rounded-2xl bg-white shadow-2xl border border-stone-200 text-stone-800 z-50 animate-fadeIn space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-title font-bold text-sm text-[#102552]">
                  {currentLang === 'el' && 'Πόντοι Επιβράβευσης Κρήτης'}
                  {currentLang === 'de' && 'Kretische Treuepunkte'}
                  {currentLang === 'en' && 'Crete Loyalty Points'}
                </h4>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase">
                {points} PTS
              </span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'el' && 'Κερδίζετε 150 πόντους με κάθε κράτηση εμπειρίας! Εξαργυρώστε τους σε δώρα, ντόπιο κρασί & VIP αναβαθμίσεις.'}
              {currentLang === 'de' && 'Sammeln Sie 150 Punkte pro Buchung! Lösen Sie diese für kretischen Wein, Souvenirs & VIP-Upgrades ein.'}
              {currentLang === 'en' && 'Earn 150 Crete Points with every experience reservation! Redeem them for fine local wine & VIP vehicle upgrades.'}
            </p>

            {/* Progress to next reward */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-[11px] font-semibold text-stone-600">
                <span>{points} / {nextRewardThreshold} PTS</span>
                <span className="text-amber-600 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-[#C85A32] rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Reward Perks */}
            <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/60 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <Gift className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Next Milestone at 500 PTS:</span>
              </div>
              <div className="flex items-center gap-1 text-stone-700">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Free Bottle of Cretan Organic Wine or Olive Oil souvenir</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
