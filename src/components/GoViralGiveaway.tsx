import React, { useState } from 'react';
import { Gift, Sparkles, Share2, Copy, Check, MessageCircle, Instagram, Send, Trophy, Users, Heart, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface GoViralGiveawayProps {
  currentLang: Language;
}

export const GoViralGiveaway: React.FC<GoViralGiveawayProps> = ({ currentLang }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [entriesSubmitted, setEntriesSubmitted] = useState<boolean>(false);

  const viralTemplates = [
    {
      title: { el: 'Πρότυπο Instagram / Story', de: 'Instagram Story Vorlage', en: 'Instagram Story Template' },
      caption: {
        el: '🇬🇷 Ανυπομονώ για τις διακοπές στην Κρήτη με τον @manosexperience! 🌊 Παραλαβή από το ξενοδοχείο, ασφάλεια & αυθεντικές εμπειρίες! #ManosCreteExperience #VisitCrete #CreteTours',
        de: '🇬🇷 Ich freue mich riesig auf Kreta mit @manosexperience! 🌊 Abholung am Hotel, maximale Sicherheit & echte Gastfreundschaft! #ManosCreteExperience #KretaErlebnisse',
        en: '🇬🇷 Can’t wait for my Crete trip with @manosexperience! 🌊 Door-to-door hotel transfers, safety & authentic Cretan hospitality! #ManosCreteExperience #VisitCrete',
      },
    },
    {
      title: { el: 'Πρότυπο WhatsApp / Community Chat', de: 'WhatsApp Community Nachricht', en: 'WhatsApp Community Template' },
      caption: {
        el: 'Παιδιά! Δείτε τις αυθεντικές εκδρομές του Μάνου στην Κρήτη (Ελαφονήσι, Σαμαριά, Μπάλος, Κρητικό Φαγητό) με δικό του van & παραλαβή! Μπείτε να κερδίσουμε δωρεάν μονοήμερη: https://manosexperience.gr #ManosCreteExperience',
        de: 'Hey Leute! Schaut euch die Touren von Manos auf Kreta an (Elafonisi, Samaria, Balos, Gourmet). Tür-zu-Tür Shuttle & Gewinnspiel: https://manosexperience.gr #ManosCreteExperience',
        en: 'Hey friends! Check out Manos’s authentic Crete excursions (Elafonisi, Samaria, Balos, Food Safari) with private shuttle pickup! Join the free tour giveaway: https://manosexperience.gr #ManosCreteExperience',
      },
    },
  ];

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmitViralTicket = () => {
    const text = `Γεια σου Μάνο! Έκανα share το Go Viral Giveaway Challenge με το hashtag #ManosCreteExperience! Θέλω να δηλώσω συμμετοχή για τη δωρεάν εκδρομή στην Κρήτη! 🎉`;
    window.open(`https://wa.me/306934644010?text=${encodeURIComponent(text)}`, '_blank');
    setEntriesSubmitted(true);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-[#102552] via-[#0C0C0C] to-[#32292F] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-amber-400/30 relative overflow-hidden space-y-8">
      {/* Background glowing accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC72C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C85A32]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-md">
            <Trophy className="w-4 h-4" />
            <span>Community Challenge & Contest</span>
          </div>
          <h2 className="text-2xl sm:text-4xl text-white font-title font-black tracking-tight flex items-center gap-2">
            <span>Go Viral Giveaway Challenge</span>
            <span className="text-[#FFC72C] text-sm animate-bounce">🎁</span>
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm font-light max-w-2xl leading-relaxed">
            {currentLang === 'el' && 'Κληρώνεται μια δωρεάν πολυτελής μονοήμερη εκδρομή στην Κρήτη για εσάς και την παρέα σας! Δημοσιεύστε, κάντε personal tagging και βοηθήστε να μεγαλώσει η παρέα μας.'}
            {currentLang === 'de' && 'Gewinnen Sie einen kostenlosen Tagesausflug auf Kreta für Sie und Ihre Gruppe! Teilen Sie unsere Beiträge und verlinken Sie uns.'}
            {currentLang === 'en' && 'Win a FREE full-day luxury experience in Crete for you & your friends/family! Share, tag @manosexperience, and spread the word.'}
          </p>
        </div>

        {/* Prize Box Badge */}
        <div className="bg-stone-900/90 p-4 rounded-2xl border border-amber-400/50 text-center shrink-0 shadow-lg">
          <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
            {currentLang === 'el' ? '🏆 ΜΕΓΑΛΟ ΔΩΡΟ' : '🏆 GRAND PRIZE'}
          </span>
          <span className="text-sm font-title font-bold text-white block mt-0.5">
            {currentLang === 'el' ? 'Δωρεάν 1-Day Private Tour' : 'Free 1-Day Private Experience'}
          </span>
          <span className="text-[11px] text-stone-400 font-light block">
            {currentLang === 'el' ? 'Επιλογή: Ελαφονήσι, Σαμαριά, Μπάλος ή Food Safari' : 'Choice of Elafonisi, Samaria, Balos, or Food Safari'}
          </span>
        </div>
      </div>

      {/* 3 Step Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
        <div className="bg-stone-900/80 p-5 rounded-2xl border border-stone-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h4 className="text-sm font-bold text-white">
            {currentLang === 'el' ? 'Personal Tagging' : 'Personal Tagging'}
          </h4>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            {currentLang === 'el'
              ? 'Κάντε tag τον λογαριασμό @manosexperience και χρησιμοποιήστε το hashtag #ManosCreteExperience σε IG Stories, TikTok ή Facebook.'
              : 'Tag @manosexperience and use #ManosCreteExperience on Instagram Stories, TikTok or Facebook.'}
          </p>
        </div>

        <div className="bg-stone-900/80 p-5 rounded-2xl border border-stone-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h4 className="text-sm font-bold text-white">
            {currentLang === 'el' ? 'Community Templates' : 'Community Templates'}
          </h4>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            {currentLang === 'el'
              ? 'Αντιγράψτε με 1 κλικ τα έτοιμα κείμενα παρακάτω και μοιραστείτε τα με φίλους & ταξιδιωτικά groups.'
              : 'Copy ready-made viral text templates with 1 click and share with friends & travel communities.'}
          </p>
        </div>

        <div className="bg-stone-900/80 p-5 rounded-2xl border border-stone-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h4 className="text-sm font-bold text-white">
            {currentLang === 'el' ? 'Δήλωση Συμμετοχής' : 'Submit Entry Ticket'}
          </h4>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            {currentLang === 'el'
              ? 'Στείλτε screenshot ή μήνυμα στον Μάνο στο WhatsApp για να λάβετε τον τυχερό λαχνό κλήρωσης!'
              : 'Send a quick message/screenshot to Manos via WhatsApp to confirm your giveaway ticket!'}
          </p>
        </div>
      </div>

      {/* Copyable Viral Templates */}
      <div className="space-y-4 relative z-10">
        <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
          <Share2 className="w-4 h-4" />
          <span>
            {currentLang === 'el' ? 'Έτοιμα Κείμενα Κοινοποίησης (Copy & Paste)' : 'Ready-to-Use Viral Templates'}
          </span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {viralTemplates.map((template, idx) => (
            <div key={idx} className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-stone-300">
                <span>{template.title[currentLang]}</span>
                <button
                  type="button"
                  onClick={() => handleCopyText(template.caption[currentLang], idx)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 transition-colors text-[11px]"
                >
                  {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedIndex === idx ? (currentLang === 'el' ? 'Αντιγράφηκε!' : 'Copied!') : (currentLang === 'el' ? 'Αντιγραφή' : 'Copy')}</span>
                </button>
              </div>
              <p className="text-xs text-stone-300 font-mono bg-stone-900/90 p-3 rounded-xl border border-stone-800/80 leading-relaxed italic select-all">
                "{template.caption[currentLang]}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct WhatsApp Ticket Entry CTA */}
      <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-2 text-xs text-stone-300 font-light">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {currentLang === 'el' ? 'Η κλήρωση πραγματοποιείται κάθε μήνα για όλους τους φίλους της Κρήτης!' : 'Monthly draw for all Crete travellers & community members!'}
          </span>
        </div>

        <button
          type="button"
          onClick={handleSubmitViralTicket}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-[#C85A32] text-stone-950 font-extrabold text-xs sm:text-sm shadow-xl hover:brightness-110 transition-transform hover:scale-105 cursor-pointer"
        >
          <Gift className="w-4 h-4" />
          <span>
            {currentLang === 'el' && '🎁 Καταχώρηση Συμμετοχής στο WhatsApp'}
            {currentLang === 'de' && '🎁 Teilnahme via WhatsApp einreichen'}
            {currentLang === 'en' && '🎁 Submit Giveaway Ticket via WhatsApp'}
          </span>
        </button>
      </div>
    </section>
  );
};
