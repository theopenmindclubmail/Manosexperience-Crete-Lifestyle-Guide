import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Filter, Compass, MessageCircle, Phone, Sparkles, Video } from 'lucide-react';
import { Language } from '../types';
import { FAQ_ITEMS } from '../data/extraData';

interface CollapsibleFAQProps {
  currentLang: Language;
}

export const CollapsibleFAQ: React.FC<CollapsibleFAQProps> = ({ currentLang }) => {
  const [openIds, setOpenIds] = useState<string[]>(['pickup-coverage', 'languages-spoken']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'transfer' | 'season' | 'custom' | 'safety'>('all');

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const q = faq.question[currentLang].toLowerCase();
    const a = faq.answer[currentLang].toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || q.includes(query) || a.includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md space-y-8 relative overflow-hidden">
      {/* Decorative Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-3 opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B1221]/10 text-[#8B1221] text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Traveler Assistance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl text-[#0C0C0C] font-title font-black tracking-tight">
          {currentLang === 'el' && 'Συχνές Ερωτήσεις & Συμβουλές Ταξιδίου'}
          {currentLang === 'de' && 'Häufig gestellte Fragen & Reisetipps'}
          {currentLang === 'en' && 'Frequently Asked Travel Questions'}
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
          {currentLang === 'el' && 'Όλα όσα πρέπει να γνωρίζετε για τις μεταφορές, την παραλαβή από το κατάλυμα, τον καιρό και την εξυπηρέτηση. Ο Μάνος μπορεί επίσης να επικοινωνήσει μαζί σας μέσω βιντεοκλήσης για την καλύτερη εμπειρία συνεννόησης & εξυπηρέτησης.'}
          {currentLang === 'de' && 'Alles über Transfers, Abholung an der Unterkunft, Wetter und Service. Manos kann Sie auch per Videoanruf kontaktieren, um Details persönlich zu besprechen.'}
          {currentLang === 'en' && 'Everything about transport tips, hotel pickup logistics, weather, and custom tour planning. Manos can also connect with you via video call for a personalized consultation.'}
        </p>
      </div>

      {/* Video Call Consultation Badge */}
      <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 shadow-xs flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-[#C85A32] text-white shrink-0 shadow-sm">
          <Video className="w-5 h-5 animate-pulse" />
        </div>
        <div className="text-xs text-stone-800 space-y-0.5">
          <h4 className="font-bold text-[#102552]">
            {currentLang === 'el' && 'Προσωπική Επικοινωνία μέσω Βιντεοκλήσης με τον Μάνο'}
            {currentLang === 'de' && 'Persönliche Videoberatung mit Manos'}
            {currentLang === 'en' && 'Personalized Video Call Consultation with Manos'}
          </h4>
          <p className="text-stone-600 font-light leading-snug">
            {currentLang === 'el' && 'Ο Μάνος μπορεί να επικοινωνήσει μαζί σας μέσω βιντεοκλήσης (WhatsApp/Viber) για την καλύτερη εμπειρία συνεννόησης, αποριών και εξυπηρέτησης πριν την κράτηση!'}
            {currentLang === 'de' && 'Manos kann Sie per Videoanruf kontaktieren, um Fragen zu klären und Ihre Route perfekt zu planen.'}
            {currentLang === 'en' && 'Manos can join a quick video call with you to answer questions and customize your itinerary face-to-face.'}
          </p>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              currentLang === 'el'
                ? 'Αναζήτηση στις συχνές ερωτήσεις (π.χ. παραλαβή, αποσκευές)...'
                : currentLang === 'de'
                ? 'FAQ durchsuchen (z.B. Abholung, Gepäck)...'
                : 'Search FAQ keywords (e.g., pickup, luggage, weather)...'
            }
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C85A32] shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: { el: 'Όλες οι Ερωτήσεις', de: 'Alle Fragen', en: 'All Questions' } },
            { id: 'transfer', label: { el: 'Μεταφορές & Van', de: 'Transfers & Bus', en: 'Shuttle & Transfer' } },
            { id: 'custom', label: { el: 'Προσαρμοσμένες Διαδρομές', de: 'Individuelle Touren', en: 'Custom Tours' } },
            { id: 'season', label: { el: 'Εποχή & Καιρός', de: 'Saison & Wetter', en: 'Season & Weather' } },
            { id: 'safety', label: { el: 'Ασφάλεια & Οικογένειες', de: 'Sicherheit & Familie', en: 'Safety & Kids' } },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#102552] text-white shadow-sm'
                  : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
              }`}
            >
              {cat.label[currentLang]}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center text-stone-500 text-xs">
            {currentLang === 'el' ? 'Δεν βρέθηκαν αποτελέσματα για την αναζήτησή σας.' : 'No matching questions found.'}
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/80 transition-colors"
                >
                  <span className="font-title font-bold text-sm sm:text-base text-stone-900 leading-snug">
                    {faq.question[currentLang]}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-stone-100 text-[#102552] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#102552] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3 bg-stone-50/50">
                    {faq.answer[currentLang]}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#102552] to-[#32292F] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-title font-bold text-white">
            {currentLang === 'el' && 'Έχετε κάποια συγκεκριμένη ερώτηση που δεν αναφέρεται εδώ;'}
            {currentLang === 'de' && 'Haben Sie eine bestimmte Frage, die hier nicht aufgeführt ist?'}
            {currentLang === 'en' && 'Have a specific question not listed here?'}
          </h4>
          <p className="text-stone-300 text-xs font-light">
            {currentLang === 'el' && 'Ρωτήστε τον Μάνο απευθείας στο WhatsApp για άμεση τοπική καθοδήγηση.'}
            {currentLang === 'de' && 'Fragen Sie Manos direkt per WhatsApp für schnelle lokale Beratung.'}
            {currentLang === 'en' && 'Ask Manos directly on WhatsApp for immediate local guidance.'}
          </p>
        </div>

        <a
          href="https://wa.me/306934644010?text=Hello%20Manos!%20I%20have%20a%20question%20about%20my%20trip%20to%20Crete."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFC72C] hover:bg-amber-400 text-[#0C0C0C] font-bold text-xs shadow-md transition-all shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>
            {currentLang === 'el' && 'Ρωτήστε τον Μάνο στο WhatsApp'}
            {currentLang === 'de' && 'Manos auf WhatsApp fragen'}
            {currentLang === 'en' && 'Ask Manos on WhatsApp'}
          </span>
        </a>
      </div>
    </section>
  );
};
