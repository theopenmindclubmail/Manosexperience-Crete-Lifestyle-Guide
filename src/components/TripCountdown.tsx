import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Plane, Sparkles, MessageCircle, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface TripCountdownProps {
  currentLang: Language;
}

export const TripCountdown: React.FC<TripCountdownProps> = ({ currentLang }) => {
  // Default target date: 30 days from today
  const getDefaultDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 24);
    return today.toISOString().split('T')[0];
  };

  const [arrivalDateStr, setArrivalDateStr] = useState<string>(() => {
    return localStorage.getItem('manos_trip_arrival_date') || getDefaultDate();
  });

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  // Update localStorage and calculate countdown
  useEffect(() => {
    if (arrivalDateStr) {
      localStorage.setItem('manos_trip_arrival_date', arrivalDateStr);
    }

    const calculateCountdown = () => {
      const targetTime = new Date(`${arrivalDateStr}T00:00:00`).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [arrivalDateStr]);

  // Pre-filled WhatsApp notification to Manos
  const handleNotifyManos = () => {
    const msg = `Hello Manos! I am arriving in Crete on ${arrivalDateStr}. I would like to lock in my shuttle pickup and tour reservations.`;
    const url = `https://wa.me/306934644010?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-[#102552] via-[#32292F] to-[#0C0C0C] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-800 relative overflow-hidden my-8">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-pair opacity-15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-1 opacity-15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-700/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC72C]/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5" />
              <span>Personal Journey Planner</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-title font-black text-white tracking-tight">
              {currentLang === 'el' && 'Αντίστροφη Μέτρηση για την Κρήτη!'}
              {currentLang === 'de' && 'Countdown bis zu Ihrer Kreta-Reise!'}
              {currentLang === 'en' && 'Countdown to Your Crete Adventure!'}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm font-light">
              {currentLang === 'el' && 'Εισάγετε την ημερομηνία άφιξης σας για να προετοιμάσουμε την παραλαβή και το πρόγραμμά σας.'}
              {currentLang === 'de' && 'Geben Sie Ihr Ankunftsdatum ein, damit Manos Ihren Shuttle und Ihre Tour perfekt vorbereiten kann.'}
              {currentLang === 'en' && 'Select your arrival date in Crete to build anticipation and coordinate your private hotel shuttle with Manos.'}
            </p>
          </div>

          {/* Date Picker Control */}
          <div className="bg-stone-900/90 p-4 rounded-2xl border border-stone-700 shadow-inner space-y-1.5 shrink-0">
            <label className="block text-xs font-bold text-[#FFC72C] uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#99E1D9]" />
              <span>
                {currentLang === 'el' && 'Ημερομηνία Άφιξης'}
                {currentLang === 'de' && 'Ankunftsdatum'}
                {currentLang === 'en' && 'Crete Arrival Date'}
              </span>
            </label>
            <input
              type="date"
              value={arrivalDateStr}
              onChange={(e) => setArrivalDateStr(e.target.value)}
              className="bg-stone-800 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-stone-600 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] cursor-pointer"
            />
          </div>
        </div>

        {/* Countdown Timer Display or Arrival Banner */}
        {timeLeft.isPast ? (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-stone-900 border border-emerald-500/40 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Welcome to Crete!</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-title font-bold text-white">
              Your vacation is underway!
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
              Ready for Elafonisi, Samaria Gorge, or an authentic Cretan feast? Contact Manos for immediate door-to-door shuttle.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Days Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-900/80 border border-stone-700/80 text-center space-y-1 shadow-lg relative group">
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FFC72C] animate-ping" />
              <span className="text-3xl sm:text-5xl font-title font-black text-[#FFC72C] tracking-tight block">
                {timeLeft.days}
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-stone-300 uppercase tracking-widest block">
                {currentLang === 'el' && 'Ημέρες'}
                {currentLang === 'de' && 'Tage'}
                {currentLang === 'en' && 'Days'}
              </span>
            </div>

            {/* Hours Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-900/80 border border-stone-700/80 text-center space-y-1 shadow-lg">
              <span className="text-3xl sm:text-5xl font-title font-black text-white tracking-tight block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-stone-300 uppercase tracking-widest block">
                {currentLang === 'el' && 'Ώρες'}
                {currentLang === 'de' && 'Stunden'}
                {currentLang === 'en' && 'Hours'}
              </span>
            </div>

            {/* Minutes Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-900/80 border border-stone-700/80 text-center space-y-1 shadow-lg">
              <span className="text-3xl sm:text-5xl font-title font-black text-[#99E1D9] tracking-tight block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-stone-300 uppercase tracking-widest block">
                {currentLang === 'el' && 'Λεπτά'}
                {currentLang === 'de' && 'Minuten'}
                {currentLang === 'en' && 'Minutes'}
              </span>
            </div>

            {/* Seconds Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-900/80 border border-stone-700/80 text-center space-y-1 shadow-lg">
              <span className="text-3xl sm:text-5xl font-title font-black text-[#FF187C] tracking-tight block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-stone-300 uppercase tracking-widest block">
                {currentLang === 'el' && 'Δευτερόλεπτα'}
                {currentLang === 'de' && 'Sekunden'}
                {currentLang === 'en' && 'Seconds'}
              </span>
            </div>
          </div>
        )}

        {/* Bottom Bar: Action & Host Pickups */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-800">
          <div className="flex items-center gap-2 text-xs text-stone-300 font-medium">
            <MapPin className="w-4 h-4 text-[#99E1D9]" />
            <span>Manos offers direct hotel pickup from Chania, Rethymno & Heraklion.</span>
          </div>

          <button
            onClick={handleNotifyManos}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>
              {currentLang === 'el' && 'Ενημερώστε τον Μάνο για την Ημερομηνία'}
              {currentLang === 'de' && 'Ankunftsdatum an Manos Senden'}
              {currentLang === 'en' && 'Send Arrival Date to Manos'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
