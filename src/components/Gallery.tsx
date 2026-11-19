import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MapPin, Sparkles, Filter, MessageCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { GALLERY_IMAGES, GalleryImage } from '../data/galleryData';

interface GalleryProps {
  currentLang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const activeImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  // Keyboard controls for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;

      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredImages.length]);

  return (
    <section id="gallery" className="py-12 glass-panel rounded-3xl p-6 sm:p-10 border border-white/60 shadow-xl space-y-8 relative overflow-hidden backdrop-blur-xl">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-gradient-pair opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200/80 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B1221]/10 text-[#8B1221] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl text-[#0C0C0C] font-title font-black tracking-tight">
            {currentLang === 'el' && 'Φωτογραφικό Άλμπουμ Κρήτης'}
            {currentLang === 'de' && 'Fotogalerie von Kreta'}
            {currentLang === 'en' && 'Explore Crete Photo Gallery'}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-light max-w-2xl">
            {currentLang === 'el' && 'Δείτε στιγμιότυπα από τις κορυφαίες παραλίες, τα φαράγγια, τα μνημεία και τον στόλο μεταφοράς του Μάνου.'}
            {currentLang === 'de' && 'Entdecken Sie Schnappschüsse von Kretas Traumstränden, Schluchten, Kulturstätten und dem Shuttle-Service von Manos.'}
            {currentLang === 'en' && 'Browse high-resolution photographs of Crete’s famous lagoons, mountain gorges, historic Venetian ports, and VIP shuttles.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          {[
            { id: 'all', label: { el: 'Όλα', de: 'Alle', en: 'All Photos' } },
            { id: 'beaches', label: { el: 'Παραλίες', de: 'Strände', en: 'Beaches' } },
            { id: 'gorges', label: { el: 'Φαράγγια', de: 'Schluchten', en: 'Gorges' } },
            { id: 'culture', label: { el: 'Πολιτισμός', de: 'Kultur', en: 'Culture' } },
            { id: 'food', label: { el: 'Φαγητό', de: 'Gastronomie', en: 'Food' } },
            { id: 'fleet', label: { el: 'Στόλος VIP', de: 'Flotte', en: 'VIP Fleet' } },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#102552] text-white shadow-md'
                  : 'bg-white/80 hover:bg-white text-stone-700 border border-stone-200'
              }`}
            >
              {cat.label[currentLang]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid / Masonry Photos Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {filteredImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setActiveImageIndex(idx)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl border border-white/60 aspect-[4/3] bg-stone-100 transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={img.url}
              alt={img.title[currentLang]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Expand Icon */}
            <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Title & Location Footer */}
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
              <div className="flex items-center gap-1 text-[10px] font-bold text-[#FFC72C] uppercase tracking-wider">
                <MapPin className="w-3 h-3" />
                <span>{img.location[currentLang]}</span>
              </div>
              <h3 className="text-sm font-title font-bold leading-snug drop-shadow-sm">
                {img.title[currentLang]}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeImage && activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-all z-50 border border-stone-700 shadow-xl"
            title="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex(activeImageIndex > 0 ? activeImageIndex - 1 : filteredImages.length - 1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-[#102552] text-white transition-all z-50 border border-stone-700 shadow-xl hidden sm:flex items-center justify-center"
            title="Previous Image (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex(activeImageIndex < filteredImages.length - 1 ? activeImageIndex + 1 : 0);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-[#102552] text-white transition-all z-50 border border-stone-700 shadow-xl hidden sm:flex items-center justify-center"
            title="Next Image (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-5xl w-full max-h-[90vh] glass-panel-dark rounded-3xl border border-white/20 overflow-hidden flex flex-col lg:flex-row shadow-2xl relative z-40">
            {/* Image Box */}
            <div className="lg:w-2/3 aspect-video lg:aspect-auto relative bg-black flex flex-col items-center justify-center overflow-hidden">
              <img
                src={activeImage.url}
                alt={activeImage.title[currentLang]}
                className="w-full h-full object-contain"
              />

              {/* Thumbnails Navigation Bar */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 max-w-[90%] overflow-x-auto">
                {filteredImages.map((thumb, tIdx) => (
                  <button
                    key={thumb.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(tIdx);
                    }}
                    className={`w-10 h-8 rounded-lg overflow-hidden shrink-0 transition-all border-2 ${
                      tIdx === activeImageIndex
                        ? 'border-[#FFC72C] scale-105 ring-2 ring-[#FFC72C]/40'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-white bg-[#0C0C0C]/90">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC72C]/15 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeImage.location[currentLang]}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-title font-black text-white leading-tight">
                  {activeImage.title[currentLang]}
                </h3>

                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  {activeImage.description[currentLang]}
                </p>
              </div>

              {/* Direct Booking Inquire CTA */}
              <div className="space-y-3 pt-4 border-t border-stone-800">
                <div className="text-xs text-stone-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#99E1D9]" />
                  <span>Door-to-door shuttle pickup available from your hotel.</span>
                </div>

                <a
                  href={`https://wa.me/306934644010?text=Hello%20Manos!%20I%20saw%20the%20photo%20of%20${encodeURIComponent(activeImage.title.en)}%20in%20your%20gallery%20and%20want%20to%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire About Shuttle on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
