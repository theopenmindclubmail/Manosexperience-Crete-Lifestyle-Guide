import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, CheckCircle2, Lock, Gift, Compass, CloudSun, LogIn } from 'lucide-react';
import { Language } from '../types';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  provider: 'google';
}

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onLoginSuccess: (user: UserProfile) => void;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onLoginSuccess,
}) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  if (!isOpen) return null;

  const handleSimulatedGoogleAuth = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      const mockUser: UserProfile = {
        name: 'Μάνος Μιχαλίτσης (Μέλος)',
        email: 'manosexperience@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        provider: 'google',
      };
      setIsAuthenticating(false);
      onLoginSuccess(mockUser);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto p-6 sm:p-8 space-y-6 text-[#1C1917]">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#102552] to-[#C85A32] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-[#FFC72C]" />
            </div>
            <div>
              <h3 className="text-base font-title font-bold text-[#102552]">
                {currentLang === 'el' && 'Δωρεάν Λογαριασμός Μέλους'}
                {currentLang === 'de' && 'Kostenloses Mitglieder-Konto'}
                {currentLang === 'en' && 'Free Member Account'}
              </h3>
              <p className="text-xs text-stone-500 font-light">
                {currentLang === 'el' && 'Σύνδεση με 1-κλικ via Google'}
                {currentLang === 'de' && '1-Klick Anmeldung via Google'}
                {currentLang === 'en' && '1-Click Sign In via Google'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Perks Checklist */}
        <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200/80 text-xs text-stone-700">
          <span className="font-bold text-[#102552] text-sm block mb-1">
            {currentLang === 'el' && '🎁 Τι ξεκλειδώνετε με τη σύνδεση:'}
            {currentLang === 'de' && '🎁 Ihre Vorteile als Mitglied:'}
            {currentLang === 'en' && '🎁 What you unlock with a free account:'}
          </span>
          <ul className="space-y-2 text-stone-600 font-light">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>{currentLang === 'el' ? 'Πλήρεις Τιμές Εκδρομών:' : currentLang === 'de' ? 'Vollständige Preise:' : 'Full Tour Prices:'}</strong>{' '}
                {currentLang === 'el' ? 'Πρόσβαση σε όλες τις τιμές & εκπτώσεις' : currentLang === 'de' ? 'Zugang zu allen Tourpreisen' : 'Access to all tour pricing & discounts'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>{currentLang === 'el' ? 'Προσωπικός Σχεδιαστής Ταξιδιού:' : currentLang === 'de' ? 'Persönlicher Reiseplaner:' : 'Personal Journey Planner:'}</strong>{' '}
                {currentLang === 'el' ? 'Δημιουργήστε το δικό σας 1-7 ημερών πρόγραμμα' : currentLang === 'de' ? 'Erstellen Sie Ihren individuellen Reiseplan' : 'Build your custom multi-day Crete itinerary'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>{currentLang === 'el' ? '7-ήμερη Πρόγνωση Καιρού:' : currentLang === 'de' ? '7-Tage Wetterbericht:' : '7-Day Detailed Weather:'}</strong>{' '}
                {currentLang === 'el' ? 'Θερμοκρασίες θάλασσας & συμβουλές Μάνου' : currentLang === 'de' ? 'Wassertemperaturen & Ausflugstipps' : 'Sea water temps & daily tour recommendations'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>{currentLang === 'el' ? 'Go Viral Giveaway Challenge:' : currentLang === 'de' ? 'Go Viral Gewinnspiel:' : 'Go Viral Giveaway:'}</strong>{' '}
                {currentLang === 'el' ? 'Δικαίωμα συμμετοχής για δωρεάν εκδρομή' : currentLang === 'de' ? 'Chance auf einen kostenlosen Tagesausflug' : 'Eligible for win-a-free-tour giveaway'}
              </span>
            </li>
          </ul>
        </div>

        {/* Google Sign In Primary Button */}
        <button
          type="button"
          onClick={handleSimulatedGoogleAuth}
          disabled={isAuthenticating}
          className="w-full py-3.5 px-4 rounded-2xl bg-white border-2 border-stone-300 hover:border-[#4285F4] hover:bg-stone-50 transition-all flex items-center justify-center gap-3 shadow-md group cursor-pointer"
        >
          {isAuthenticating ? (
            <div className="w-5 h-5 border-2 border-[#4285F4] border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          )}
          <span className="font-bold text-stone-800 text-sm group-hover:text-[#4285F4]">
            {isAuthenticating
              ? (currentLang === 'el' ? 'Σύνδεση via Google...' : 'Signing in with Google...')
              : (currentLang === 'el' ? 'Σύνδεση μέσω Google Account' : currentLang === 'de' ? 'Anmelden mit Google-Konto' : 'Sign in with Google Account')}
          </span>
        </button>

        {/* Security Footer Note */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>
            {currentLang === 'el' && '100% Ασφαλής σύνδεση. Δεν κοινοποιούμε τα στοιχεία σας.'}
            {currentLang === 'de' && '100% Sichere Anmeldung. Keine Weitergabe Ihrer Daten.'}
            {currentLang === 'en' && '100% Secure authentication. We never share your data.'}
          </span>
        </div>
      </div>
    </div>
  );
};
