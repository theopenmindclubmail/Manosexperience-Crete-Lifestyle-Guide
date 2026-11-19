import React, { useState } from 'react';
import { Bus, MapPin, Mountain, Utensils, Waves, Home, Clock, ChevronDown, ChevronUp, Sparkles, Navigation } from 'lucide-react';
import { ItineraryStep, Language } from '../types';

interface ItineraryTimelineProps {
  itinerary?: ItineraryStep[];
  currentLang: Language;
  experienceTitle?: string;
  initiallyExpanded?: boolean;
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({
  itinerary,
  currentLang,
  experienceTitle,
  initiallyExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  if (!itinerary || itinerary.length === 0) {
    return null;
  }

  const getStepIcon = (iconType?: string) => {
    switch (iconType) {
      case 'pickup':
        return <Bus className="w-4 h-4 text-amber-600" />;
      case 'drive':
        return <Navigation className="w-4 h-4 text-blue-600" />;
      case 'food':
        return <Utensils className="w-4 h-4 text-[#C85A32]" />;
      case 'beach':
        return <Waves className="w-4 h-4 text-teal-600" />;
      case 'return':
        return <Home className="w-4 h-4 text-emerald-600" />;
      case 'activity':
      default:
        return <Mountain className="w-4 h-4 text-purple-600" />;
    }
  };

  const getStepBadgeColor = (iconType?: string) => {
    switch (iconType) {
      case 'pickup':
        return 'bg-amber-100 border-amber-300 text-amber-800';
      case 'drive':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'food':
        return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'beach':
        return 'bg-teal-100 border-teal-300 text-teal-800';
      case 'return':
        return 'bg-emerald-100 border-emerald-300 text-emerald-800';
      case 'activity':
      default:
        return 'bg-purple-100 border-purple-300 text-purple-800';
    }
  };

  return (
    <div className="mt-4 pt-4 border-t border-stone-200/80">
      {/* Header Toggle */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 rounded-2xl bg-stone-50 hover:bg-stone-100/80 transition-colors border border-stone-200/60 text-left group"
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-xl bg-[#102552] text-[#FFC72C]">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="font-title font-bold text-xs sm:text-sm text-[#102552] block">
              {currentLang === 'el' && '🗺️ Αναλυτικό Πρόγραμμα Εκδρομής (Timeline)'}
              {currentLang === 'de' && '🗺️ Detaillierter Tagesablauf (Timeline)'}
              {currentLang === 'en' && '🗺️ Detailed Itinerary Flow (Timeline)'}
            </span>
            <span className="text-[11px] text-stone-500 font-light">
              {itinerary.length} {currentLang === 'el' ? 'βασικοί σταθμοί διαδρομής' : currentLang === 'de' ? 'Etappen' : 'key timeline steps'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 group-hover:text-[#102552]">
          <span>{isExpanded ? (currentLang === 'el' ? 'Απόκρυψη' : 'Hide') : (currentLang === 'el' ? 'Προβολή' : 'View')}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded Timeline Flow */}
      {isExpanded && (
        <div className="mt-4 pl-2 pr-1 space-y-4 relative before:absolute before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-200/90">
          {itinerary.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-3 group/step">
              {/* Step Icon Node */}
              <div
                className={`relative z-10 w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover/step:scale-105 ${getStepBadgeColor(
                  step.iconType
                )}`}
              >
                {getStepIcon(step.iconType)}
              </div>

              {/* Step Content Card */}
              <div className="flex-1 bg-stone-50/90 p-3 sm:p-3.5 rounded-2xl border border-stone-200/70 hover:border-amber-300/80 transition-all space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="font-title font-bold text-xs text-[#102552]">
                    {step.title[currentLang]}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white border border-stone-200 text-[10px] font-bold text-stone-600 shadow-2xs">
                    {step.timeOfDay[currentLang]}
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {step.description[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
