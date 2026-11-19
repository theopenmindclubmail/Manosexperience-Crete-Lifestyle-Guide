import React, { useState, useEffect } from 'react';
import { Bus, ShieldCheck, Utensils, Waves, Star, Info, Plus, Phone, MessageCircle, Volume2, VolumeX, QrCode, Share2, Check, Lock, Sparkles, X, Copy, Facebook, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Experience, Language, AddOn, Currency, formatPrice } from '../types';
import { UI_STRINGS } from '../data/translations';
import { QRCodeModal } from './QRCodeModal';
import { ItineraryTimeline } from './ItineraryTimeline';
import { UserProfile } from './GoogleAuthModal';

interface ExperienceCardProps {
  experience: Experience;
  currentLang: Language;
  currentCurrency: Currency;
  user?: UserProfile | null;
  onOpenAuthModal?: () => void;
  onOpenBookingModal: (
    experience: Experience,
    selectedAddOns: AddOn[],
    totalCalculatedPrice: number,
    selectedOptionsSummary: string
  ) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  currentLang,
  currentCurrency,
  user,
  onOpenAuthModal,
  onOpenBookingModal,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Toggle Audio TTS Guide
  const handleToggleTTS = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();

    const langCodeMap: Record<Language, string> = {
      el: 'el-GR',
      de: 'de-DE',
      en: 'en-US',
    };

    const textToSpeak = `${experience.title[currentLang]}. ${experience.subtitle[currentLang]}. ${experience.description[currentLang]}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = langCodeMap[currentLang] || 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Option selection state
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    if (experience.optionGroups) {
      experience.optionGroups.forEach((group) => {
        if (group.choices.length > 0) {
          initial[group.id] = group.choices[0].id;
        }
      });
    }
    return initial;
  });

  // Selected add-ons state
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [showFullDetails, setShowFullDetails] = useState<boolean>(false);

  // Calculate option price modifiers
  let optionsPriceModifier = 0;
  let optionsSummaryText = '';

  if (experience.optionGroups) {
    experience.optionGroups.forEach((group) => {
      const selectedChoiceId = selectedOptions[group.id];
      const choice = group.choices.find((c) => c.id === selectedChoiceId);
      if (choice) {
        optionsPriceModifier += choice.priceModifier;
        if (optionsSummaryText) optionsSummaryText += ' | ';
        optionsSummaryText += choice.label[currentLang];
      }
    });
  }

  // Calculate selected add-ons price
  const selectedAddOns = experience.availableAddOns.filter((addOn) =>
    selectedAddOnIds.includes(addOn.id)
  );

  const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

  // Total price
  const totalCalculatedPrice = experience.basePrice + optionsPriceModifier + addOnsTotal;

  // Toggle add-on checkbox
  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Generate WhatsApp pre-filled message
  const generateWhatsAppUrl = () => {
    const title = experience.title[currentLang];
    let msg = `Hello Manos! I am interested in booking: "${title}".\n`;
    if (optionsSummaryText) {
      msg += `Selection: ${optionsSummaryText}\n`;
    }
    if (selectedAddOns.length > 0) {
      msg += `Add-ons requested:\n`;
      selectedAddOns.forEach((a) => {
        msg += `- ${a.name[currentLang]}\n`;
      });
    }
    msg += `Estimated Total: ${totalCalculatedPrice}€ per person.\n`;
    msg += `Please let me know availability and details!`;

    return `https://wa.me/306934644010?text=${encodeURIComponent(msg)}`;
  };

  const currentUrl = window.location.href;
  const shareTitle = experience.title[currentLang];
  const shareText = `Check out "${shareTitle}" with Manos in Crete! Hotel transfers & local guidance included:`;

  const copyShareLink = () => {
    navigator.clipboard.writeText(`${shareText} ${currentUrl}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '120px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group bg-white rounded-3xl border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Card Header Image with Overlay & Badges */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
        <img
          src={experience.image}
          alt={experience.title[currentLang]}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
          {/* Badge List */}
          <div className="flex flex-wrap items-center gap-1.5">
            {experience.badges.shuttle && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1C1917]/80 backdrop-blur-md text-amber-200 text-xs font-semibold border border-amber-500/30">
                <Bus className="w-3.5 h-3.5 text-amber-400" />
                <span>🚐 Shuttle</span>
              </span>
            )}
            {experience.badges.safety && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#556B2F]/90 backdrop-blur-md text-emerald-100 text-xs font-semibold border border-emerald-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>🛡️ Safety</span>
              </span>
            )}
            {experience.badges.food && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C85A32]/90 backdrop-blur-md text-amber-100 text-xs font-semibold border border-orange-400/30">
                <Utensils className="w-3.5 h-3.5 text-amber-200" />
                <span>🍽️ Food</span>
              </span>
            )}
            {experience.badges.beach && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-900/80 backdrop-blur-md text-sky-200 text-xs font-semibold border border-sky-400/30">
                <Waves className="w-3.5 h-3.5 text-sky-300" />
                <span>🏖️ Beach</span>
              </span>
            )}
            {experience.badges.vip && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-900/80 backdrop-blur-md text-purple-200 text-xs font-semibold border border-purple-400/30">
                <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>VIP</span>
              </span>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setShowQRModal(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all backdrop-blur-md shadow-md bg-black/60 hover:bg-black/80 text-white border border-white/20 cursor-pointer"
              title="Show QR code for mobile scanning"
            >
              <QrCode className="w-3.5 h-3.5 text-[#FFC72C]" />
              <span className="hidden sm:inline">QR</span>
            </button>

            <button
              onClick={() => setShowShareModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all backdrop-blur-md shadow-md bg-black/60 hover:bg-black/80 text-white border border-white/20 cursor-pointer"
              title="Share tour details"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-300" />
              <span>Share</span>
            </button>

            <button
              onClick={handleToggleTTS}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all backdrop-blur-md shadow-md cursor-pointer ${
                isPlayingAudio
                  ? 'bg-[#C85A32] text-white ring-2 ring-amber-300 animate-pulse'
                  : 'bg-black/60 hover:bg-black/80 text-white border border-white/20'
              }`}
              title="Listen to audio tour description"
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-amber-200" />
                  <span>Stop</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>Listen</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Title & Subtitle in Image Header */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-0.5">
            {experience.subtitle[currentLang]}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-extrabold leading-tight text-white drop-shadow-md">
            {experience.title[currentLang]}
          </h3>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Main Description */}
          <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-5">
            {experience.description[currentLang]}
          </p>

          {/* Option Selection Groups */}
          {experience.optionGroups && experience.optionGroups.length > 0 && (
            <div className="space-y-4 mb-5 p-4 bg-stone-50 rounded-2xl border border-stone-200/80">
              {experience.optionGroups.map((group) => (
                <div key={group.id} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                    {group.title[currentLang]}
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {group.choices.map((choice) => {
                      const isSelected = selectedOptions[group.id] === choice.id;
                      return (
                        <button
                          key={choice.id}
                          type="button"
                          onClick={() =>
                            setSelectedOptions((prev) => ({
                              ...prev,
                              [group.id]: choice.id,
                            }))
                          }
                          className={`text-left p-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                              : 'bg-white text-stone-700 border-stone-300 hover:border-amber-400'
                          }`}
                        >
                          <span>{choice.label[currentLang]}</span>
                          {choice.priceModifier > 0 && (
                            <span className={`font-bold ml-2 ${isSelected ? 'text-amber-100' : 'text-[#C85A32]'}`}>
                              +{formatPrice(choice.priceModifier, currentCurrency)}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add-Ons */}
          {experience.availableAddOns.length > 0 && (
            <div className="space-y-2.5 mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Plus className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{UI_STRINGS.addOnsTitle[currentLang]}</span>
              </h4>
              <div className="space-y-2">
                {experience.availableAddOns.map((addOn) => {
                  const isChecked = selectedAddOnIds.includes(addOn.id);
                  return (
                    <label
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`flex items-start gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-amber-50/90 border-[#C85A32] shadow-2xs'
                          : 'bg-stone-50/60 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-[#C85A32] focus:ring-[#C85A32] border-stone-300"
                      />
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between font-bold text-stone-900">
                          <span>{addOn.name[currentLang]}</span>
                          <span className="text-[#C85A32] font-semibold">
                            +{formatPrice(addOn.price, currentCurrency)}
                          </span>
                        </div>
                        {addOn.description && (
                          <p className="text-stone-500 mt-0.5 leading-tight">
                            {addOn.description[currentLang]}
                          </p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Itinerary Timeline */}
          {experience.itinerary && (
            <ItineraryTimeline
              itinerary={experience.itinerary}
              currentLang={currentLang}
              experienceTitle={experience.title[currentLang]}
            />
          )}

          {/* Toggle Full Details */}
          <div className="mb-4">
            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="text-xs font-bold text-[#556B2F] hover:text-[#3f5022] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              <span>
                {showFullDetails
                  ? UI_STRINGS.hideDetails[currentLang]
                  : UI_STRINGS.viewDetails[currentLang]}
              </span>
            </button>

            {showFullDetails && (
              <div className="mt-3 p-3.5 bg-stone-100 rounded-2xl text-xs space-y-1.5 animate-fadeIn">
                <p className="font-bold text-stone-800 mb-1">
                  {UI_STRINGS.includedTitle[currentLang]}
                </p>
                <ul className="list-disc list-inside space-y-1 text-stone-600">
                  {experience.included[currentLang].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Summary & Action Buttons */}
        <div className="pt-4 border-t border-stone-200/80 space-y-4">
          {/* Member Price Gating */}
          {!user ? (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-300 text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#C85A32]">
                <Lock className="w-4 h-4" />
                <span>
                  {currentLang === 'el' ? 'Τιμή Διαθέσιμη για Μέλη' : 'Price Visible for Members'}
                </span>
              </div>
              <p className="text-[11px] text-stone-600 font-light">
                {currentLang === 'el'
                  ? 'Συνδεθείτε δωρεάν με Google για να ξεκλειδώσετε τις τιμές & το Personal Journey Planner.'
                  : 'Sign in with Google to reveal prices & custom travel planner.'}
              </p>
              {onOpenAuthModal && (
                <button
                  type="button"
                  onClick={onOpenAuthModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 font-extrabold text-xs shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  🔒 {currentLang === 'el' ? 'Σύνδεση με Google' : 'Sign in with Google'}
                </button>
              )}
            </div>
          ) : (
            /* Logged-In Unlocked Price */
            <div className="flex items-baseline justify-between bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200">
              <div>
                <span className="text-[11px] text-emerald-800 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{currentLang === 'el' ? 'Ξεκλειδωμένη Τιμή Μέλους' : 'Member Unlocked Price'}</span>
                </span>
                <span className="text-xs text-stone-500 font-light block">
                  {experience.priceNote ? experience.priceNote[currentLang] : ''}
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-serif font-extrabold text-[#C85A32]">
                  {formatPrice(totalCalculatedPrice, currentCurrency)}
                </span>
                <span className="text-xs text-stone-500 block font-medium">
                  {UI_STRINGS.perPerson[currentLang]}
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons: WhatsApp & Call & Custom Modal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{UI_STRINGS.bookWhatsApp[currentLang]}</span>
            </a>

            <button
              type="button"
              onClick={() =>
                onOpenBookingModal(
                  experience,
                  selectedAddOns,
                  totalCalculatedPrice,
                  optionsSummaryText
                )
              }
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#C85A32] hover:bg-[#b04d2a] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{UI_STRINGS.quickInquiry[currentLang]}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-stone-200 text-stone-900 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h4 className="text-sm font-title font-bold text-[#102552] flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#C85A32]" />
                <span>{currentLang === 'el' ? 'Κοινοποίηση Εκδρομής' : 'Share Experience'}</span>
              </h4>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="p-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-600 font-light">
              "{experience.title[currentLang]}"
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#1877F2] text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <Facebook className="w-4 h-4 fill-current" />
                <span>Facebook</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>X / Twitter</span>
              </a>

              <button
                type="button"
                onClick={copyShareLink}
                className="p-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{isCopied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      {showQRModal && (
        <QRCodeModal
          experience={experience}
          currentLang={currentLang}
          onClose={() => setShowQRModal(false)}
        />
      )}
    </motion.div>
  );
};
