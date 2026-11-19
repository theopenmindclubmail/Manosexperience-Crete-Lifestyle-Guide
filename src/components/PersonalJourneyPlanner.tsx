import React, { useState } from 'react';
import { Compass, Calendar, MapPin, Sparkles, Send, Check, Heart, ShieldCheck, ArrowRight, Lock, Sun, Umbrella, Utensils, Mountain } from 'lucide-react';
import { Language } from '../types';
import { UserProfile } from './GoogleAuthModal';

interface PersonalJourneyPlannerProps {
  currentLang: Language;
  user: UserProfile | null;
  onOpenAuthModal: () => void;
}

export const PersonalJourneyPlanner: React.FC<PersonalJourneyPlannerProps> = ({
  currentLang,
  user,
  onOpenAuthModal,
}) => {
  const [daysCount, setDaysCount] = useState<number>(3);
  const [selectedHub, setSelectedHub] = useState<'chania' | 'rethymno' | 'heraklion'>('chania');
  const [selectedStyle, setSelectedStyle] = useState<'beaches' | 'adventure' | 'gourmet' | 'culture'>('beaches');
  const [savedPlan, setSavedPlan] = useState(false);

  const hubs = [
    { id: 'chania', name: { el: 'Χανιά & Δυτική Κρήτη', de: 'Chania & Westkreta', en: 'Chania & West Crete' } },
    { id: 'rethymno', name: { el: 'Ρέθυμνο & Κεντρική Κρήτη', de: 'Rethymno & Zentralkreta', en: 'Rethymno & Central Crete' } },
    { id: 'heraklion', name: { el: 'Ηράκλειο & Ανατολική Κρήτη', de: 'Heraklion & Ostkreta', en: 'Heraklion & East Crete' } },
  ];

  const styles = [
    {
      id: 'beaches',
      title: { el: 'Εξωτικές Παραλίες & Χαλάρωση', de: 'Traumstrände & Erholung', en: 'Exotic Beaches & Relax' },
      icon: <Umbrella className="w-4 h-4 text-teal-600" />,
      color: 'bg-teal-50 border-teal-200 text-teal-800',
    },
    {
      id: 'adventure',
      title: { el: 'Πεζοπορία & Φαράγγια', de: 'Wandern & Schluchten', en: 'Hiking & Gorges' },
      icon: <Mountain className="w-4 h-4 text-purple-600" />,
      color: 'bg-purple-50 border-purple-200 text-purple-800',
    },
    {
      id: 'gourmet',
      title: { el: 'Κρητική Γαστρονομία & Κρασί', de: 'Kulinarik & Wein', en: 'Gastronomy & Wine' },
      icon: <Utensils className="w-4 h-4 text-orange-600" />,
      color: 'bg-orange-50 border-orange-200 text-orange-800',
    },
    {
      id: 'culture',
      title: { el: 'Πολιτισμός & Μινωικά Ανάκτορα', de: 'Kultur & Geschichte', en: 'Culture & Palaces' },
      icon: <Compass className="w-4 h-4 text-amber-600" />,
      color: 'bg-amber-50 border-amber-200 text-amber-800',
    },
  ];

  // Dynamic itinerary sample generation
  const getItineraryPreview = () => {
    if (selectedStyle === 'beaches') {
      return [
        { day: 1, title: { el: 'Ημέρα 1: Ελαφονήσι & Ροζ Άμμος', de: 'Tag 1: Elafonisi & Rosa Sand', en: 'Day 1: Elafonisi Pink Beach' }, desc: { el: 'Παραλαβή από το κατάλυμά σας, στάση στα Τοπόλια & 4 ώρες μπάνιο στη ροζ άμμο.', de: 'Abholung an Ihrer Unterkunft, Stopp in Topolia & Schwimmen in Elafonisi.', en: 'Private pickup, scenic gorge stop & shallow turquoise sea relaxation.' } },
        { day: 2, title: { el: 'Ημέρα 2: Λιμνοθάλασσα Μπάλου & Γραμβούσα', de: 'Tag 2: Balos Lagune & Gramvousa', en: 'Day 2: Balos Lagoon & Gramvousa' }, desc: { el: 'Πρωινή μεταφορά στο λιμάνι Κισσάμου & κρουαζιέρα στον εξωτικό Μπάλο.', de: 'Morgendlicher Transfer zum Hafen Kissamos & Schifffahrt nach Balos.', en: 'Morning transfer to Kissamos port & boat cruise to breathtaking Balos.' } },
        { day: 3, title: { el: 'Ημέρα 3: Φαλάσαρνα & Ηλιοβασίλεμα', de: 'Tag 3: Falasarna & Sonnenuntergang', en: 'Day 3: Falasarna & Golden Sunset' }, desc: { el: 'Χαλάρωση στη χρυσή αμμουδιά της Φαλάσαρνας & φρέσκο ψάρι δίπλα στο κύμα.', de: 'Entspannung am goldenen Strand von Falasarna & frischer Fisch.', en: 'Golden sand beach lounging & sunset coastal seafood dining.' } },
      ];
    } else if (selectedStyle === 'adventure') {
      return [
        { day: 1, title: { el: 'Ημέρα 1: Διασχίζοντας τη Σαμαριά', de: 'Tag 1: Durchquerung der Samaria-Schlucht', en: 'Day 1: Crossing Samaria Gorge' }, desc: { el: 'Πρωινή κατάβαση στο Ξυλόσκαλο, πεζοπορία στις Σιδηρόπορτες & μπάνιο στην Αγία Ρουμέλη.', de: 'Frühe Abholung nach Omalos, Wanderung durch die Schlucht & Schwimmen.', en: 'Early Omalos transfer, Iron Gates hike & refreshing Libyan Sea swim.' } },
        { day: 2, title: { el: 'Ημέρα 2: Φαράγγι Αγίας Ειρήνης & Σούγια', de: 'Tag 2: Agia Irini Schlucht & Sougia', en: 'Day 2: Agia Irini Gorge & Sougia' }, desc: { el: 'Πιο ήπια καταπράσινη διαδρομή στο φαράγγι & γεύμα σε τοπική ταβέρνα στη Σούγια.', de: 'Grüne Wanderung durch Agia Irini & Mittagessen in Sougia.', en: 'Serene tree-shaded gorge walk followed by seaside lunch in Sougia.' } },
      ];
    } else if (selectedStyle === 'gourmet') {
      return [
        { day: 1, title: { el: 'Ημέρα 1: Cretan Food & Wine Tour', de: 'Tag 1: Kretische Gourmet & Wein Tour', en: 'Day 1: Cretan Food & Wine Safari' }, desc: { el: 'Επίσκεψη σε 5 αυθεντικούς γαστρονομικούς σταθμούς: μπουγάτσα, γραβιέρα, αντικριστό & τσικουδιά.', de: 'Besuch von 5 kulinarischen Stopps: Bougatsa, Käse, Antikristo & Raki.', en: '5 authentic food stops: bougatsa, artisan graviera cheese, raki & roast lamb.' } },
        { day: 2, title: { el: 'Ημέρα 2: Οινοποιεία & Ελαιώνας Βάμου', de: 'Tag 2: Weingüter & Olivenhaine in Vamos', en: 'Day 2: Wineries & Ancient Olive Estates' }, desc: { el: 'Ξενάγηση σε βιολογικό οινοποιείο & δοκιμή έξτρα παρθένου ελαιολάδου 3000 ετών.', de: 'Führung im Bio-Weingut & Olivenölverkostung.', en: 'Organic winery tour & tasting of award-winning Cretan olive oils.' } },
      ];
    } else {
      return [
        { day: 1, title: { el: 'Ημέρα 1: Μινωικό Ανάκτορο Κνωσού', de: 'Tag 1: Palast von Knossos', en: 'Day 1: Knossos Palace & Heraklion' }, desc: { el: 'Ξενάγηση στο λίκνο του Μινωικού πολιτισμού & Αρχαιολογικό Μουσείο.', de: 'Führung durch den minoischen Palast & Archäologisches Museum.', en: 'Guided walk through Minoan civilization cradle & Archeological Museum.' } },
        { day: 2, title: { el: 'Ημέρα 2: Παλιά Πόλη Χανίων & Φρούριο Φιρκά', de: 'Tag 2: Altstadt von Chania & Firkas', en: 'Day 2: Chania Old Town & Firkas Fortress' }, desc: { el: 'Περίπατος στα ενετικά στενά, Ενετικός Φάρος & παραδοσιακό γεύμα στο λιμάνι.', de: 'Spaziergang durch die venezianischen Gassen & Hafen.', en: 'Stroll through romantic Venetian alleyways, Lighthouse & harbor dining.' } },
      ];
    }
  };

  const itinerarySteps = getItineraryPreview().slice(0, daysCount);

  const handleSendToWhatsApp = () => {
    const hubName = hubs.find((h) => h.id === selectedHub)?.name[currentLang] || selectedHub;
    const styleTitle = styles.find((s) => s.id === selectedStyle)?.title[currentLang] || selectedStyle;
    const message = `Γεια σου Μάνο! Έφτιαξα το δικό μου Προσωπικό Πλάνο Ταξιδιού (Personal Journey Planner):\n- Διάρκεια: ${daysCount} Ημέρες\n- Βάση: ${hubName}\n- Στυλ: ${styleTitle}\n\nΘέλω να συζητήσουμε τις διαθέσιμες ημερομηνίες και την παραλαβή!`;
    window.open(`https://wa.me/306934644010?text=${encodeURIComponent(message)}`, '_blank');
    setSavedPlan(true);
  };

  return (
    <section className="py-12 bg-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-800 relative overflow-hidden space-y-8">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#C85A32]/20 via-[#FFC72C]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC72C]/10 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-[#FFC72C]/20">
            <Compass className="w-3.5 h-3.5" />
            <span>AI & Custom Tour Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl text-white font-title font-black tracking-tight flex items-center gap-2">
            <span>
              {currentLang === 'el' && 'Προσωπικός Σχεδιαστής Ταξιδιού'}
              {currentLang === 'de' && 'Persönlicher Reiseplaner'}
              {currentLang === 'en' && 'Personal Journey Planner'}
            </span>
            <span className="text-[#99E1D9] text-xs px-2.5 py-0.5 rounded-full bg-[#99E1D9]/10 border border-[#99E1D9]/30 font-sans">
              Pro
            </span>
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-2xl">
            {currentLang === 'el' && 'Δημιουργήστε το δικό σας εξατομικευμένο πρόγραμμα εκδρομών στην Κρήτη με βάση τις ημέρες διαμονής, την περιοχή σας και τα ενδιαφέροντά σας.'}
            {currentLang === 'de' && 'Erstellen Sie Ihren individuellen Kreta-Reiseplan basierend auf Reisedauer, Standort und Interessen.'}
            {currentLang === 'en' && 'Customize your tailor-made multi-day Crete experience based on stay length, preferred stay hub, and travel style.'}
          </p>
        </div>

        {/* User Account State Indicator */}
        <div className="shrink-0">
          {user ? (
            <div className="flex items-center gap-3 bg-stone-800 p-2.5 rounded-2xl border border-stone-700">
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-amber-400" />
              <div className="text-xs">
                <span className="font-bold text-amber-300 block">{user.name}</span>
                <span className="text-stone-400 text-[10px]">{currentLang === 'el' ? 'Συνδεδεμένο Μέλος' : 'Verified Member'}</span>
              </div>
            </div>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold text-xs shadow-md hover:brightness-110 transition-all cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>
                {currentLang === 'el' && '🔒 Σύνδεση με Google για Πλήρη Πρόσβαση'}
                {currentLang === 'de' && '🔒 Anmelden für vollen Reiseplaner-Zugriff'}
                {currentLang === 'en' && '🔒 Sign in with Google to Build Plan'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Step 1: Duration */}
        <div className="bg-stone-950/80 p-5 rounded-2xl border border-stone-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-amber-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>1. {currentLang === 'el' ? 'Διάρκεια Διαμονής' : currentLang === 'de' ? 'Reisedauer' : 'Trip Duration'}</span>
            </span>
            <span className="text-white bg-stone-800 px-2.5 py-0.5 rounded-full">{daysCount} {currentLang === 'el' ? 'Ημέρες' : 'Days'}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-1">
            {[1, 2, 3, 5].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDaysCount(d)}
                className={`py-2 rounded-xl text-xs font-bold transition-all ${
                  daysCount === d
                    ? 'bg-[#C85A32] text-white shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {d} {currentLang === 'el' ? 'ημ.' : 'd'}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Preferred Hub */}
        <div className="bg-stone-950/80 p-5 rounded-2xl border border-stone-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-amber-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>2. {currentLang === 'el' ? 'Βάση Διαμονής' : currentLang === 'de' ? 'Unterkunft-Region' : 'Stay Location'}</span>
            </span>
          </div>
          <select
            value={selectedHub}
            onChange={(e) => setSelectedHub(e.target.value as any)}
            className="w-full bg-stone-800 text-white text-xs font-medium rounded-xl p-2.5 border border-stone-700 focus:outline-none focus:border-amber-400"
          >
            {hubs.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name[currentLang]}
              </option>
            ))}
          </select>
        </div>

        {/* Step 3: Travel Style */}
        <div className="bg-stone-950/80 p-5 rounded-2xl border border-stone-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-amber-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>3. {currentLang === 'el' ? 'Στυλ Εκδρομών' : currentLang === 'de' ? 'Reisestil' : 'Travel Style'}</span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {styles.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedStyle(s.id as any)}
                className={`p-2 rounded-xl text-[11px] font-bold transition-all text-left flex items-center gap-1.5 border ${
                  selectedStyle === s.id
                    ? 'bg-amber-400 text-stone-950 border-amber-300 font-extrabold shadow-md'
                    : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
                }`}
              >
                {s.icon}
                <span className="line-clamp-1">{s.title[currentLang]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Generated Itinerary Preview */}
      <div className="relative z-10 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-6">
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div>
            <span className="text-xs font-bold text-[#99E1D9] uppercase tracking-wider block">
              {currentLang === 'el' && 'Προτεινόμενο Πρόγραμμα (Itinerary Flow)'}
              {currentLang === 'de' && 'Vorgeschlagener Tagesablauf'}
              {currentLang === 'en' && 'Generated Custom Itinerary'}
            </span>
            <h3 className="text-lg font-title font-bold text-white mt-0.5">
              {daysCount} {currentLang === 'el' ? 'Ημέρες στην Κρήτη' : 'Days in Crete'} – {hubs.find((h) => h.id === selectedHub)?.name[currentLang]}
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-bold">
            {styles.find((s) => s.id === selectedStyle)?.title[currentLang]}
          </span>
        </div>

        {/* Non-LoggedIn Teaser Overlay */}
        {!user ? (
          <div className="relative rounded-2xl overflow-hidden p-8 border border-dashed border-amber-500/40 bg-stone-900/90 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-6 h-6" />
            </div>
            <div className="max-w-md mx-auto space-y-1">
              <h4 className="text-base font-title font-bold text-white">
                {currentLang === 'el' && 'Ξεκλειδώστε το Προσωπικό Πλάνο Ταξιδιού'}
                {currentLang === 'de' && 'Schalten Sie Ihren Reiseplan frei'}
                {currentLang === 'en' && 'Unlock Your Custom Journey Plan'}
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                {currentLang === 'el' && 'Συνδεθείτε δωρεάν μέσω Google για να εμφανίσετε το πλήρες καθημερινό πρόγραμμα, τους χρόνους μεταφοράς και να το στείλετε απευθείας στον Μάνο!'}
                {currentLang === 'de' && 'Melden Sie sich kostenlos mit Google an, um den vollständigen Tagesplan zu sehen und direkt an Manos zu senden.'}
                {currentLang === 'en' && 'Sign in for free with Google to view the complete day-by-day plan, drive times, and send it directly to Manos.'}
              </p>
            </div>
            <button
              onClick={onOpenAuthModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
            >
              {currentLang === 'el' ? 'Δημιουργία Δωρεάν Λογαριασμού via Google' : 'Create Free Account via Google'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {itinerarySteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3.5 hover:border-amber-400/50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow">
                    D{step.day}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-amber-200">{step.title[currentLang]}</h4>
                    <p className="text-xs text-stone-300 font-light leading-relaxed">{step.desc[currentLang]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Save & Direct Contact CTA */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>{currentLang === 'el' ? 'Περιλαμβάνεται δωρεάν παραλαβή από το κατάλυμά σας' : 'Includes complimentary hotel pickup & drop-off'}</span>
              </div>

              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>
                  {currentLang === 'el' && 'Στείλτε το Πλάνο στον Μάνο (WhatsApp)'}
                  {currentLang === 'de' && 'Reiseplan an Manos senden (WhatsApp)'}
                  {currentLang === 'en' && 'Send Custom Plan to Manos (WhatsApp)'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
