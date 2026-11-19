import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send, Gift, Shield } from 'lucide-react';
import { Language } from '../types';

interface NewsletterFormProps {
  currentLang: Language;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ currentLang }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@')) {
      setErrorMessage(
        currentLang === 'el'
          ? 'Παρακαλούμε εισάγετε μια έγκυρη διεύθυνση email.'
          : currentLang === 'de'
          ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
          : 'Please enter a valid email address.'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 700);
  };

  return (
    <div className="bg-[#32292F] text-white rounded-3xl p-6 sm:p-10 border border-stone-700 shadow-xl relative overflow-hidden my-8">
      {/* Ambient gradient highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-1 opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Copy & Value Proposition */}
        <div className="space-y-3 text-center lg:text-left lg:max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC72C]/15 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'el' && 'Ενημερώσεις Ταξιδίου & Προσφορές'}
              {currentLang === 'de' && 'Insider Reise-Updates'}
              {currentLang === 'en' && 'Insider Travel Updates'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl text-white font-title font-black tracking-tight">
            {currentLang === 'el' && 'Εγγραφείτε για Εποχιακές Προσφορές & Οδηγούς'}
            {currentLang === 'de' && 'Saisonale Angebote & Insider-Tipps Erhalten'}
            {currentLang === 'en' && 'Get Seasonal Travel Updates & Private Offers'}
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
            {currentLang === 'el' && 'Λάβετε μυστικούς προορισμούς της Κρήτης, ειδοποιήσεις για νέες εκδρομές και αποκλειστική έκπτωση 10% για την πρώτη σας κράτηση.'}
            {currentLang === 'de' && 'Erhalten Sie Kretas Geheimtipps, Ankündigungen für neue Touren und 10% Rabatt auf Ihre erste Buchung bei Manos.'}
            {currentLang === 'en' && 'Receive curated insider guides, seasonal schedule updates, and an exclusive 10% discount code for your private Crete tour.'}
          </p>
        </div>

        {/* Right Form or Success Message */}
        <div className="w-full lg:max-w-md">
          {isSubscribed ? (
            <div className="p-6 rounded-2xl bg-stone-900/90 border border-[#99E1D9]/40 text-center space-y-3 animate-fade-in shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#99E1D9]/20 text-[#99E1D9] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-title font-bold text-white">
                {currentLang === 'el' && 'Καλώς ήρθατε στην παρέα μας!'}
                {currentLang === 'de' && 'Willkommen in der Community!'}
                {currentLang === 'en' && "You're Successfully Subscribed!"}
              </h4>
              <p className="text-xs text-stone-300 font-light">
                {currentLang === 'el' && 'Σας στείλαμε τον δωρεάν οδηγό Κρήτης & τον κωδικό έκπτωσης 10% (MANOS10).'}
                {currentLang === 'de' && 'Wir haben Ihnen den Kreta-Reiseführer & Ihren 10% Rabattcode (MANOS10) gesendet.'}
                {currentLang === 'en' && "Check your inbox for Manos's Crete Insider Guide and your 10% discount promo code: "}
                <span className="font-bold text-[#FFC72C] underline ml-1">MANOS10</span>
              </p>
              <button
                onClick={() => {
                  setIsSubscribed(false);
                  setEmail('');
                  setName('');
                }}
                className="text-xs text-stone-400 hover:text-white underline pt-1 cursor-pointer"
              >
                {currentLang === 'el' ? 'Εγγραφή άλλου email' : 'Subscribe another email'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={
                    currentLang === 'el'
                      ? 'Όνομα (προαιρετικό)'
                      : currentLang === 'de'
                      ? 'Name (optional)'
                      : 'Your Name (optional)'
                  }
                  className="px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] w-full sm:w-1/3"
                />
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      currentLang === 'el'
                        ? 'Εισάγετε το email σας...'
                        : currentLang === 'de'
                        ? 'Ihre E-Mail-Adresse...'
                        : 'Enter your email address...'
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-[#FF187C] font-semibold">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-1 hover:opacity-90 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>
                      {currentLang === 'el' && 'Εγγραφή & Λήψη Οδηγού'}
                      {currentLang === 'de' && 'Anmelden & 10% Rabatt Sichern'}
                      {currentLang === 'en' && 'Subscribe & Claim 10% Off'}
                    </span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-[#99E1D9]" />
                <span>
                  {currentLang === 'el'
                    ? 'Χωρίς ανεπιθύμητα μηνύματα. Μόνο άμεσες ενημερώσεις από τον Μάνο Μιχαλίτση.'
                    : 'Zero spam. Direct emails from Manos Michalitsis only.'}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
