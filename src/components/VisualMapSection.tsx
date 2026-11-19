import React, { useState } from 'react';
import { Camera, Clock, MapPin, ShieldCheck, Compass, ArrowRight, Filter, Maximize2, X, Send, Heart } from 'lucide-react';
import { Language } from '../types';

interface VisualMapSectionProps {
  currentLang: Language;
}

export interface LocationPhoto {
  id: string;
  name: Record<Language, string>;
  category: 'exotic' | 'south' | 'east' | 'hidden';
  categoryLabel: Record<Language, string>;
  image: string;
  driveTimeChania: string;
  driveTimeRethymno: string;
  driveTimeHeraklion: string;
  description: Record<Language, string>;
}

export const LOCATION_PHOTOS: LocationPhoto[] = [
  {
    id: 'balos',
    name: { el: 'Μπάλος (Balos Beach & Lagoon)', de: 'Balos Lagune', en: 'Balos Lagoon' },
    category: 'exotic',
    categoryLabel: { el: 'Εξωτικές Λιμνοθάλασσες', de: 'Exotische Lagunen', en: 'Exotic Lagoons' },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '1h 15m',
    driveTimeRethymno: '2h 00m',
    driveTimeHeraklion: '2h 50m',
    description: {
      el: 'Διάσημη εξωτική λιμνοθάλασσα με γαλαζοπράσινα ρηχά νερά, άσπρη-ροζ άμμο και το βενετσιάνικο κάστρο της Γραμβούσας.',
      de: 'Weltberühmte Lagune mit türkisblauem Wasser, rosa-weißem Sand und der venezianischen Festung Gramvousa.',
      en: 'World-famous lagoon with crystal shallow turquoise waters, pink sand, and Gramvousa fortress.',
    },
  },
  {
    id: 'elafonisi',
    name: { el: 'Ελαφονήσι (Elafonisi Pink Beach)', de: 'Elafonisi Rosa Strand', en: 'Elafonisi Pink Beach' },
    category: 'exotic',
    categoryLabel: { el: 'Εξωτικές Λιμνοθάλασσες', de: 'Exotische Lagunen', en: 'Exotic Lagoons' },
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '1h 30m',
    driveTimeRethymno: '2h 15m',
    driveTimeHeraklion: '3h 00m',
    description: {
      el: 'Προστατευόμενη περιοχή Natura 2000 με τη διάσημη ροζ άμμο από θρυμματισμένα κοράλλια και κρυσταλλικά νερά.',
      de: 'Natura 2000 Schutzgebiet mit berühmtem rosa Korallensand und flachem, warmem Wasser.',
      en: 'Protected Natura 2000 paradise boasting iconic pink coral sand and warm shallow seas.',
    },
  },
  {
    id: 'falasarna',
    name: { el: 'Φαλάσαρνα (Falasarna Beach)', de: 'Falasarna Strand', en: 'Falasarna Beach' },
    category: 'exotic',
    categoryLabel: { el: 'Εξωτικές Λιμνοθάλασσες', de: 'Exotische Lagunen', en: 'Exotic Lagoons' },
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '55m',
    driveTimeRethymno: '1h 40m',
    driveTimeHeraklion: '2h 30m',
    description: {
      el: 'Απέραντη χρυσή αμμουδιά με κρυστάλλινα νερά, διάσημη για το ομορφότερο ηλιοβασίλεμα στη δυτική Κρήτη.',
      de: 'Endloser goldener Sandstrand, bekannt für die beeindruckendsten Sonnenuntergänge Westkretas.',
      en: 'Vast golden beach famed for crystal waters and the most breathtaking sunset in Western Crete.',
    },
  },
  {
    id: 'kedrodasos',
    name: { el: 'Κεδρόδασος (Kedrodasos Beach)', de: 'Kedrodasos Wacholderwald', en: 'Kedrodasos Juniper Beach' },
    category: 'hidden',
    categoryLabel: { el: 'Κρυφοί Παράδεισοι', de: 'Versteckte Paradiese', en: 'Hidden Paradises' },
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '1h 35m',
    driveTimeRethymno: '2h 20m',
    driveTimeHeraklion: '3h 10m',
    description: {
      el: 'Παρθένος παράδεισος με αιωνόβιους κέδρους, λεία βράχια και απόλυτη φυσική ηρεμία δίπλα στο Ελαφονήσι.',
      de: 'Unberührtes Paradies mit uralten Wacholderbäumen und glasklarem Wasser nahe Elafonisi.',
      en: 'Untouched sanctuary surrounded by ancient juniper trees and smooth rocks near Elafonisi.',
    },
  },
  {
    id: 'damnoni',
    name: { el: 'Δαμνόνι (Damnoni Beach)', de: 'Damnoni Strand', en: 'Damnoni Beach' },
    category: 'south',
    categoryLabel: { el: 'Νότια Κρήτη & Λιβυκό', de: 'Südkreta & Libysches Meer', en: 'South Crete & Libyan Sea' },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '1h 25m',
    driveTimeRethymno: '35m',
    driveTimeHeraklion: '1h 45m',
    description: {
      el: 'Εντυπωσιακός κόλπος στο Νότο με παχιά άμμο, απόκρημνα βράχια και πεντακάθαρα βαθιά γαλάζια νερά.',
      de: 'Spektakuläre Bucht im Süden mit grobem Sand, steilen Felsen und tiefblauem, klarem Wasser.',
      en: 'Stunning southern bay featuring coarse sand, dramatic cliffs, and deep sapphire Libyan sea waters.',
    },
  },
  {
    id: 'vai',
    name: { el: 'Βάι (Vai Palm Beach)', de: 'Vai Palmenstrand', en: 'Vai Date Palm Beach' },
    category: 'east',
    categoryLabel: { el: 'Ανατολική Κρήτη', de: 'Ostkreta', en: 'Eastern Crete' },
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '3h 40m',
    driveTimeRethymno: '2h 50m',
    driveTimeHeraklion: '2h 10m',
    description: {
      el: 'Το μοναδικό φυσικό φοινικόδασος της Ευρώπης με χιλιάδες φοίνικες Theophrasti δίπλα στην αμμουδιά.',
      de: 'Europas einziger natürlicher Palmenwald mit tausenden kretischen Dattelpalmen direkt am Meer.',
      en: 'Europe’s only natural date palm forest with thousands of palms lining a golden sandy bay.',
    },
  },
  {
    id: 'preveli',
    name: { el: 'Πρέβελη (Preveli Palm Lagoon)', de: 'Preveli Palmenlagune', en: 'Preveli Palm Lagoon' },
    category: 'south',
    categoryLabel: { el: 'Νότια Κρήτη & Λιβυκό', de: 'Südkreta & Libysches Meer', en: 'South Crete & Libyan Sea' },
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '1h 30m',
    driveTimeRethymno: '40m',
    driveTimeHeraklion: '1h 50m',
    description: {
      el: 'Ονειρεμένος συνδυασμός ποταμού, φοινικοδάσους και παραλίας όπου ο Μεγάλος Ποταμός εκβάλλει στο Λιβυκό.',
      de: 'Traumhafte Flussmündung mit Palmenwald und Strand, wo der Megas Potamos ins Libysche Meer fließt.',
      en: 'Magical palm forest river delta meeting the Libyan Sea under dramatic gorge canyons.',
    },
  },
  {
    id: 'istro',
    name: { el: 'Ίστρο / Βούλισμα (Istro Voulisma Beach)', de: 'Istro Voulisma Strand', en: 'Istro Voulisma Beach' },
    category: 'east',
    categoryLabel: { el: 'Ανατολική Κρήτη', de: 'Ostkreta', en: 'Eastern Crete' },
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '2h 45m',
    driveTimeRethymno: '2h 00m',
    driveTimeHeraklion: '1h 05m',
    description: {
      el: 'Ο "Χρυσός Κόλπος" της Αγίου Νικολάου με εξωτικά τιρκουάζ νερά που θυμίζουν Καραϊβική.',
      de: 'Die "Goldene Bucht" bei Agios Nikolaos mit türkisblauem Karibik-Feeling.',
      en: 'The "Golden Bay" near Agios Nikolaos famed for intense Caribbean-turquoise waters.',
    },
  },
  {
    id: 'psaromoura',
    name: { el: 'Ψαρομούρα (Psaromoura Beach Agia Pelagia)', de: 'Psaromoura Bucht', en: 'Psaromoura Bay Agia Pelagia' },
    category: 'hidden',
    categoryLabel: { el: 'Κρυφοί Παράδεισοι', de: 'Versteckte Paradiese', en: 'Hidden Paradises' },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    driveTimeChania: '1h 40m',
    driveTimeRethymno: '50m',
    driveTimeHeraklion: '25m',
    description: {
      el: 'Γραφικός κρυφός απάνεμος όρμος στην Αγία Πελαγία με διάφανα νερά, ιδανικός για snorkeling.',
      de: 'Malerische, windgeschützte Bucht in Agia Pelagia mit kristallklarem Wasser zum Schnorcheln.',
      en: 'Picturesque sheltered cove in Agia Pelagia with crystal clear waters ideal for snorkeling.',
    },
  },
];

export const VisualMapSection: React.FC<VisualMapSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalPhoto, setActiveModalPhoto] = useState<LocationPhoto | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? LOCATION_PHOTOS
    : LOCATION_PHOTOS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-12 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200 relative overflow-hidden space-y-8">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#102552]/10 via-[#99E1D9]/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102552]/10 text-[#102552] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Top Destinations Visual Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl text-[#0C0C0C] font-title font-black tracking-tight">
            {currentLang === 'el' && 'Κορυφαίοι Παράδεισοι της Κρήτης'}
            {currentLang === 'de' && 'Kretas Schönste Reiseziele im Überblick'}
            {currentLang === 'en' && 'Crete Iconic Destinations Showcase'}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-light max-w-2xl">
            {currentLang === 'el' && 'Ανακαλύψτε τις 9 διασημότερες παραλίες και κρυφούς όρμους της Κρήτης. Ο Μάνος αναλαμβάνει την ασφαλή παραλαβή & μεταφορά σας με κλιματιζόμενο van.'}
            {currentLang === 'de' && 'Entdecken Sie die 9 schönsten Strände und Buchten Kretas mit bequemer Tür-zu-Tür Abholung durch Manos.'}
            {currentLang === 'en' && 'Explore Crete’s 9 most iconic beaches, palm lagoons, and hidden coves with door-to-door shuttle transfers by Manos.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {[
            { id: 'all', label: { el: 'Όλοι οι Προορισμοί (9)', de: 'Alle (9)', en: 'All Locations (9)' } },
            { id: 'exotic', label: { el: 'Εξωτικές Λιμνοθάλασσες', de: 'Exotisch', en: 'Exotic Lagoons' } },
            { id: 'south', label: { el: 'Νότια Κρήτη', de: 'Südkreta', en: 'South Coast' } },
            { id: 'east', label: { el: 'Ανατολική Κρήτη', de: 'Ostkreta', en: 'Eastern Crete' } },
            { id: 'hidden', label: { el: 'Κρυφοί Όρμοι', de: 'Versteckt', en: 'Hidden Coves' } },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#102552] text-white shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat.label[currentLang]}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Collage Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image Box */}
            <div className="relative h-56 overflow-hidden bg-stone-200">
              <img
                src={photo.image}
                alt={photo.name[currentLang]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 bg-[#102552]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                {photo.categoryLabel[currentLang]}
              </div>

              {/* Zoom Button */}
              <button
                type="button"
                onClick={() => setActiveModalPhoto(photo)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                title={currentLang === 'el' ? 'Προβολή' : 'View'}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-base font-title font-bold leading-tight drop-shadow-sm">
                  {photo.name[currentLang]}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-2">
                {photo.description[currentLang]}
              </p>

              {/* Drive Times Row */}
              <div className="pt-2 border-t border-stone-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#102552]">
                  <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>{currentLang === 'el' ? 'Χρόνος μεταφοράς με van:' : 'Shuttle drive time:'}</span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[10px] text-center font-medium">
                  <span className="bg-stone-200/80 p-1 rounded text-stone-800">Chania: {photo.driveTimeChania}</span>
                  <span className="bg-stone-200/80 p-1 rounded text-stone-800">Rethymno: {photo.driveTimeRethymno}</span>
                  <span className="bg-stone-200/80 p-1 rounded text-stone-800">Heraklion: {photo.driveTimeHeraklion}</span>
                </div>
              </div>

              {/* WhatsApp Quick Request */}
              <a
                href={`https://wa.me/306934644010?text=Γεια%20σου%20Μάνο!%20Ενδιαφέρομαι%20για%20μεταφορά%20στο%20${encodeURIComponent(photo.name.el)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-[#102552] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer mt-2"
              >
                <Send className="w-3.5 h-3.5 text-[#FFC72C]" />
                <span>{currentLang === 'el' ? 'Ερώτηση για Εκδρομή' : 'Inquire Shuttle'}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Preview Modal */}
      {activeModalPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-stone-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-stone-700 space-y-4 p-6 my-auto">
            <button
              onClick={() => setActiveModalPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-stone-950">
              <img src={activeModalPhoto.image} alt={activeModalPhoto.name[currentLang]} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-title font-bold text-white">{activeModalPhoto.name[currentLang]}</h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">{activeModalPhoto.description[currentLang]}</p>
            </div>

            <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700 flex items-center justify-between text-xs">
              <span className="text-amber-300 font-medium">✨ {currentLang === 'el' ? 'Παραλαβή από το κατάλυμά σας περιλαμβάνεται' : 'Complimentary hotel pickup included'}</span>
              <a
                href={`https://wa.me/306934644010?text=Γεια%20σου%20Μάνο!%20Θέλω%20να%20κλείσω%20εκδρομή%20στο%20${encodeURIComponent(activeModalPhoto.name.el)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
