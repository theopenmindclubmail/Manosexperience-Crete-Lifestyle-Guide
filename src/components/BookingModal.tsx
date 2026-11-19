import React, { useState } from 'react';
import { X, MessageCircle, Phone, Calendar, MapPin, Users, FileText, CheckCircle2, Sparkles, Send, Copy, ArrowRight } from 'lucide-react';
import { Experience, Language, AddOn, Currency, formatPrice } from '../types';
import { UI_STRINGS } from '../data/translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: Experience | null;
  selectedAddOns: AddOn[];
  totalCalculatedPrice: number;
  selectedOptionsSummary: string;
  currentLang: Language;
  currentCurrency: Currency;
  onBookingConfirmed?: (pointsEarned: number, experienceTitle: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  experience,
  selectedAddOns,
  totalCalculatedPrice,
  selectedOptionsSummary,
  currentLang,
  currentCurrency,
  onBookingConfirmed,
}) => {
  if (!isOpen || !experience) return null;

  const [pickup, setPickup] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  const formattedPrice = formatPrice(totalCalculatedPrice, currentCurrency);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `MANOS-CR-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomCode);
    setIsSubmitted(true);

    if (onBookingConfirmed && experience) {
      onBookingConfirmed(150, experience.title[currentLang]);
    }
  };

  const handleWhatsAppSend = () => {
    let msg = `Hello Manos!\n`;
    if (bookingRef) {
      msg += `Booking Reference: ${bookingRef}\n`;
    }
    msg += `I would like to book: "${experience.title[currentLang]}"\n`;
    if (selectedOptionsSummary) {
      msg += `Choice: ${selectedOptionsSummary}\n`;
    }
    if (selectedAddOns.length > 0) {
      msg += `Add-ons: ${selectedAddOns.map((a) => a.name[currentLang]).join(', ')}\n`;
    }
    msg += `Estimated Total Price: ${formattedPrice} / person\n`;
    msg += `\n--- Booking Details ---\n`;
    if (pickup) msg += `Pickup Location: ${pickup}\n`;
    if (date) msg += `Preferred Date: ${date}\n`;
    msg += `Number of Guests: ${guests}\n`;
    if (notes) msg += `Notes: ${notes}\n`;

    const url = `https://wa.me/306934644010?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleCopyReference = () => {
    if (bookingRef) {
      navigator.clipboard.writeText(bookingRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel-dark text-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#0C0C0C]/80 border-b border-stone-800 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-lg sm:text-xl font-title font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFC72C]" />
              <span>{UI_STRINGS.modalTitle[currentLang]}</span>
            </h3>
            <p className="text-xs text-[#99E1D9] font-medium mt-0.5 line-clamp-1">
              {experience.title[currentLang]}
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {isSubmitted ? (
          /* Personalized Success Confirmation State */
          <div className="p-6 sm:p-8 space-y-6 text-center overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto ring-8 ring-[#25D366]/10 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFC72C]/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
                Booking Request Sent!
              </span>
              <h4 className="text-2xl font-title font-black text-white">
                {currentLang === 'el' && 'Η Κράτησή σας Καταχωρήθηκε με Επιτυχία!'}
                {currentLang === 'de' && 'Ihre Buchungsanfrage wurde Bestätigt!'}
                {currentLang === 'en' && 'Your Experience Reservation is Ready!'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 font-light">
                {currentLang === 'el' && 'Ο Μάνος Μιχαλίτσης έλαβε τα στοιχεία σας και θα επικοινωνήσει μαζί σας άμεσα για την επιβεβαίωση της παραλαβής.'}
                {currentLang === 'de' && 'Manos Michalitsis hat Ihre Daten erhalten und wird sich in Kürze zur Bestätigung Ihrer Abholung melden.'}
                {currentLang === 'en' && 'Manos Michalitsis has received your shuttle and tour details. Click below to finalize directly on WhatsApp.'}
              </p>
            </div>

            {/* Booking Reference Code Box */}
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-700 space-y-2 text-left">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Booking Reference Number:</span>
                <button
                  onClick={handleCopyReference}
                  className="inline-flex items-center gap-1 text-[#99E1D9] hover:underline font-bold"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedRef ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <div className="text-lg font-title font-black text-[#FFC72C] tracking-wider">
                {bookingRef}
              </div>
              <div className="border-t border-stone-800 pt-2 space-y-1 text-xs text-stone-300">
                <div><strong className="text-white">Tour:</strong> {experience.title[currentLang]}</div>
                {pickup && <div><strong className="text-white">Pickup:</strong> {pickup}</div>}
                {date && <div><strong className="text-white">Date:</strong> {date}</div>}
                <div><strong className="text-white">Guests:</strong> {guests}</div>
                <div><strong className="text-white">Price:</strong> {formattedPrice} / person</div>
              </div>
            </div>

            {/* Success Actions */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppSend}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat with Manos</span>
              </button>

              <button
                onClick={resetAndClose}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold"
              >
                <span>Done & Return to Website</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form Input State */
          <form onSubmit={handleBookingSubmit} className="flex flex-col flex-1 overflow-hidden">
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-stone-200 text-sm flex-1">
              {/* Summary Box */}
              <div className="p-3.5 bg-stone-900/90 border border-stone-700 rounded-2xl text-xs space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>{experience.title[currentLang]}</span>
                  <span className="text-[#FFC72C]">{formattedPrice} / guest</span>
                </div>
                {selectedOptionsSummary && (
                  <p className="text-stone-400">Choice: {selectedOptionsSummary}</p>
                )}
                {selectedAddOns.length > 0 && (
                  <p className="text-stone-400">
                    Add-ons: {selectedAddOns.map((a) => a.name[currentLang]).join(', ')}
                  </p>
                )}
              </div>

              {/* Input 1: Pickup Location */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>{UI_STRINGS.pickupLocation[currentLang]}</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chania Town, Rethymno Hotel or Heraklion Villa"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] text-xs sm:text-sm"
                />
              </div>

              {/* Input 2: Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#99E1D9]" />
                    <span>{UI_STRINGS.preferredDate[currentLang]}</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FFC72C] text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-300 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>{UI_STRINGS.numberOfGuests[currentLang]}</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FFC72C] text-xs sm:text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Group)'].map((num) => (
                      <option key={num} value={num}>
                        {num} {typeof num === 'number' && num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Input 3: Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-stone-400" />
                  <span>{UI_STRINGS.additionalNotes[currentLang]}</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Child seats needed, dietary preferences, or timing requests..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] text-xs sm:text-sm resize-none"
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 sm:p-5 bg-[#0C0C0C]/90 border-t border-stone-800 flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-1 hover:opacity-90 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Submit Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{UI_STRINGS.sendWhatsAppAction[currentLang]}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

