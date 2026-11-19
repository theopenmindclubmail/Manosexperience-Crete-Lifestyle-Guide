import React, { useState } from 'react';
import { Sun, CloudSun, Wind, Waves, Compass, RefreshCw, Thermometer, Droplets, MapPin, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import { Language } from '../types';
import { WEATHER_DATA } from '../data/extraData';
import { UserProfile } from './GoogleAuthModal';

interface WeatherSummaryProps {
  currentLang: Language;
  user?: UserProfile | null;
  onOpenAuthModal?: () => void;
}

export const WeatherSummary: React.FC<WeatherSummaryProps> = ({ currentLang, user, onOpenAuthModal }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Just now');
  const [selectedRegionId, setSelectedRegionId] = useState<string>('chania');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefreshed('Refreshed just now');
    }, 600);
  };

  const selectedRegion = WEATHER_DATA.find((r) => r.id === selectedRegionId) || WEATHER_DATA[0];

  const getWeatherIcon = (iconType: string) => {
    switch (iconType) {
      case 'sun':
        return <Sun className="w-8 h-8 text-[#FFC72C] animate-spin-slow" />;
      case 'cloud-sun':
        return <CloudSun className="w-8 h-8 text-[#FFC72C]" />;
      case 'wind':
        return <Wind className="w-8 h-8 text-[#99E1D9]" />;
      case 'waves':
        return <Waves className="w-8 h-8 text-[#009BE2]" />;
      default:
        return <Sun className="w-8 h-8 text-[#FFC72C]" />;
    }
  };

  return (
    <section className="py-12 bg-[#0C0C0C] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-800 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-2 opacity-10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-4 opacity-10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#99E1D9]/10 text-[#99E1D9] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-Time Regional Weather</span>
            </div>
            <h2 className="text-2xl sm:text-4xl text-white font-title font-black tracking-tight">
              {currentLang === 'el' && 'Καιρός & Συνθήκες στην Κρήτη'}
              {currentLang === 'de' && 'Wetter & Bedingungen auf Kreta'}
              {currentLang === 'en' && 'Crete Live Regional Weather'}
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-2xl">
              {currentLang === 'el' && 'Παρακολουθήστε ζωντανά τις θερμοκρασίες στις 4 κύριες περιοχές της Κρήτης. Συνδεθείτε δωρεάν για την πλήρη 7-ήμερη πρόγνωση & θερμοκρασίες θάλασσας.'}
              {currentLang === 'de' && 'Aktuelle Temperaturen in den 4 Hauptregionen Kretas. Melden Sie sich an für Wassertemperaturen & Ausflugstipps.'}
              {currentLang === 'en' && 'Monitor live regional temperatures across Crete. Sign in for complete marine forecasts & daily tour recommendations.'}
            </p>
          </div>

          {/* Controls: Unit Toggle & Refresh */}
          <div className="flex items-center gap-3 shrink-0">
            {/* C / F Unit Selector */}
            <div className="inline-flex items-center bg-stone-900 border border-stone-800 rounded-xl p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setIsCelsius(true)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  isCelsius ? 'bg-gradient-1 text-white shadow-md' : 'text-stone-400 hover:text-white'
                }`}
              >
                °C
              </button>
              <button
                type="button"
                onClick={() => setIsCelsius(false)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  !isCelsius ? 'bg-gradient-1 text-white shadow-md' : 'text-stone-400 hover:text-white'
                }`}
              >
                °F
              </button>
            </div>

            {/* Refresh Button */}
            <button
              type="button"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 text-xs font-medium transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#FFC72C] ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">{lastRefreshed}</span>
            </button>
          </div>
        </div>

        {/* Region Quick Badges (Visible for Everyone) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {WEATHER_DATA.map((region) => {
            const isSelected = region.id === selectedRegionId;
            const temp = isCelsius ? `${region.tempC}°C` : `${region.tempF}°F`;

            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedRegionId(region.id)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#102552] via-[#102552]/80 to-[#32292F] border-[#99E1D9] shadow-lg scale-[1.02]'
                    : 'bg-stone-900/80 hover:bg-stone-800/80 border-stone-800 text-stone-300'
                }`}
              >
                {isSelected && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00F0AC] animate-ping" />}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#FFC72C]" />
                    {region.id}
                  </span>
                  {getWeatherIcon(region.icon)}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{region.regionName[currentLang]}</h4>
                  <p className="text-xl font-title font-black text-[#FFC72C] mt-1">{temp}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Weather Card - Gated for Members */}
        {!user ? (
          <div className="p-8 rounded-2xl bg-stone-900/90 border border-dashed border-amber-500/40 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-6 h-6" />
            </div>
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="text-base font-title font-bold text-white">
                {currentLang === 'el' && 'Ξεκλειδώστε την Πλήρη 7-ήμερη Πρόγνωση & Θερμοκρασίες Θάλασσας'}
                {currentLang === 'de' && 'Schalten Sie den vollständigen Wetterbericht frei'}
                {currentLang === 'en' && 'Unlock Complete 7-Day Weather & Sea Conditions'}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                {currentLang === 'el' && 'Γίνετε δωρεάν μέλος μέσω Google για πρόσβαση στις θερμοκρασίες νερού, δείκτη UV, υγρασία και τις καθημερινές συμβουλές εκδρομών του Μάνου!'}
                {currentLang === 'de' && 'Melden Sie sich kostenlos mit Google an für Wassertemperaturen, UV-Index und tägliche Ausflugstipps von Manos.'}
                {currentLang === 'en' && 'Create a free member account via Google for sea water temps, UV index, and Manos’s daily excursion tips.'}
              </p>
            </div>
            {onOpenAuthModal && (
              <button
                type="button"
                onClick={onOpenAuthModal}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
              >
                {currentLang === 'el' ? 'Δημιουργία Δωρεάν Λογαριασμού via Google' : 'Create Free Account via Google'}
              </button>
            )}
          </div>
        ) : (
          /* Logged In Detailed Weather Card */
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Main Temp & Condition */}
            <div className="space-y-3 border-b md:border-b-0 md:border-r border-stone-800 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-stone-800 border border-stone-700">{getWeatherIcon(selectedRegion.icon)}</div>
                <div>
                  <span className="text-xs font-bold text-[#99E1D9] uppercase tracking-wider">Current Status</span>
                  <h3 className="text-xl font-title font-bold text-white">{selectedRegion.regionName[currentLang]}</h3>
                </div>
              </div>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-4xl sm:text-5xl font-title font-black text-white">
                  {isCelsius ? `${selectedRegion.tempC}°C` : `${selectedRegion.tempF}°F`}
                </span>
                <span className="text-sm font-medium text-amber-300">{selectedRegion.condition[currentLang]}</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 border-b md:border-b-0 md:border-r border-stone-800 pb-6 md:pb-0 md:pr-6">
              <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium">
                  <Waves className="w-3.5 h-3.5 text-[#009BE2]" />
                  <span>Sea Water Temp</span>
                </div>
                <p className="text-base font-bold text-white">
                  {isCelsius ? `${selectedRegion.waterTempC}°C` : `${selectedRegion.waterTempF}°F`}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium">
                  <Sun className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>UV Index</span>
                </div>
                <p className="text-base font-bold text-white">{selectedRegion.uvIndex} / 10 (Moderate)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium">
                  <Droplets className="w-3.5 h-3.5 text-[#99E1D9]" />
                  <span>Humidity</span>
                </div>
                <p className="text-base font-bold text-white">{selectedRegion.humidity}%</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium">
                  <Thermometer className="w-3.5 h-3.5 text-[#FF8E39]" />
                  <span>Weather Grade</span>
                </div>
                <p className="text-base font-bold text-[#00F0AC]">Optimal 10/10</p>
              </div>
            </div>

            {/* Recommendation */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Manos's Excursion Tip</span>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                "{selectedRegion.recommendation[currentLang]}"
              </p>
              <a
                href="https://wa.me/306934644010?text=Hello%20Manos!%20I%20saw%20today's%20weather%20and%20want%20to%20book%20a%20shuttle%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-1 hover:opacity-90 text-white font-bold text-xs shadow-md transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Book Ideal Tour for Today</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
