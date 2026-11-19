import React from 'react';
import { Bus, Shield, HeartHandshake, Clock, MapPin, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../data/translations';

interface SafetyShuttleBannerProps {
  currentLang: Language;
}

export const SafetyShuttleBanner: React.FC<SafetyShuttleBannerProps> = ({ currentLang }) => {
  const points = [
    {
      icon: <Bus className="w-6 h-6 text-[#C85A32]" />,
      title: {
        el: 'Παραλαβή & Επιστροφή στο Κατάλυμα',
        de: 'Tür-zu-Tür Abholung & Rückbringung',
        en: 'Door-to-Door Pick-up & Drop-off',
      },
      desc: {
        el: 'Δεν χρειάζεται να ψάχνετε σταθμούς ή λεωφορεία. Ο Μάνος σας παραλαμβάνει απευθείας από την είσοδο του ξενοδοχείου ή της βίλας σας.',
        de: 'Kein Suchen nach Busverbindungen. Manos holt Sie direkt am Eingang Ihres Hotels oder Ihrer Villa ab.',
        en: 'No hassle with public transport schedules. Manos picks you up directly at your hotel or villa door.',
      },
    },
    {
      icon: <Shield className="w-6 h-6 text-[#556B2F]" />,
      title: {
        el: '100% Ασφαλής Οδήγηση & Σύγχρονο Όχημα',
        de: '100% Sicheres Fahren & Modernes Van',
        en: '100% Safe Driving & Modern Vehicle',
      },
      desc: {
        el: 'Κλιματιζόμενο όχημα υψηλής άνεσης, τακτικά συντηρημένο, με παιδικά καθίσματα κατόπιν αιτήματος και υπεύθυνη οδήγηση στους ορεινούς δρόμους.',
        de: 'Klimatisierter Van mit hohem Komfort, regelmäßiger Wartung, Kindersitzen auf Anfrage und verantwortungsvollem Fahren.',
        en: 'Fully air-conditioned comfortable vehicle, regular maintenance checks, child safety seats on request, and responsible mountain driving.',
      },
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: {
        el: 'Απόλυτη Συνέπεια & Ευελιξία',
        de: 'Absolute Pünktlichkeit & Flexibilität',
        en: 'Punctuality & Flexible Schedule',
      },
      desc: {
        el: 'Ακριβείς ώρες παραλαβής, συντονισμός με τα δρομολόγια των πλοίων (Σαμαριά) και στάσεις όποτε επιθυμείτε για φωτογραφίες.',
        de: 'Pünktliche Abfahrtszeiten, perfekte Koordination mit Fährplänen und spontane Stopps für Fotos.',
        en: 'Punctual departures, tight alignment with ferry schedules (Samaria Gorge), and customized photo stops along the way.',
      },
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#C85A32]" />,
      title: {
        el: 'Αυθεντική Κρητική Φιλοξενία',
        de: 'Echte Kretische Gastfreundschaft',
        en: 'Genuine Cretan Hospitality',
      },
      desc: {
        el: 'Ο Μάνος μιλάει άπταιστα Γερμανικά και Αγγλικά, προσφέροντας τοπικές συμβουλές, μυστικά μέρη και φιλική ατμόσφαιρα.',
        de: 'Manos spricht fließend Deutsch und Englisch und teilt Geheimtipps, lokale Geschichten und echte kretische Herzlichkeit.',
        en: 'Manos speaks fluent German and English, sharing local insider secrets, hidden taverns, and warm Cretan warmth.',
      },
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-y border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#556B2F]/10 text-[#556B2F] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Safety & Shuttle Commitment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1917] mb-3">
            {UI_STRINGS.shuttleDetailsTitle[currentLang]}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            {UI_STRINGS.shuttleDetailsSub[currentLang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                  {p.title[currentLang]}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {p.desc[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
