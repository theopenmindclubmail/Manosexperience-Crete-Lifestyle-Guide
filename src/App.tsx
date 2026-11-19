import React, { useState, useEffect } from 'react';
import { Language, Currency, Experience, AddOn } from './types';
import { EXPERIENCES } from './data/experiences';
import { UI_STRINGS } from './data/translations';
import { preloadAppImages } from './utils/preloadImages';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TripCountdown } from './components/TripCountdown';
import { ExperienceCard } from './components/ExperienceCard';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';
import { Gallery } from './components/Gallery';
import { ScrollReveal } from './components/ScrollReveal';
import { WeatherSummary } from './components/WeatherSummary';
import { VisualMapSection } from './components/VisualMapSection';
import { CollapsibleFAQ } from './components/CollapsibleFAQ';
import { SafetyShuttleBanner } from './components/SafetyShuttleBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { NewsletterForm } from './components/NewsletterForm';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ToastNotification } from './components/ToastNotification';
import { StickyBottomBar } from './components/StickyBottomBar';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { GoogleAuthModal, UserProfile } from './components/GoogleAuthModal';
import { PersonalJourneyPlanner } from './components/PersonalJourneyPlanner';
import { GoViralGiveaway } from './components/GoViralGiveaway';
import { Compass, Sparkles, Phone, MessageCircle, User, LogOut, Lock } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('el');
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('EUR');
  const [voiceQuery, setVoiceQuery] = useState<string>('');
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // User auth state with persistent guest profile or Google sign-in
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('manos_user_profile');
    return saved ? JSON.parse(saved) : null;
  });

  // Crete Points state with localStorage persistence
  const [cretePoints, setCretePoints] = useState<number>(() => {
    const saved = localStorage.getItem('manos_crete_points');
    return saved ? parseInt(saved, 10) : 100;
  });

  // Toast notification state
  const [toast, setToast] = useState<{
    show: boolean;
    title: string;
    message: string;
    pointsEarned?: number;
  }>({
    show: false,
    title: '',
    message: '',
  });

  const handleBookingConfirmed = (pointsEarned: number, experienceTitle: string) => {
    const newPoints = cretePoints + pointsEarned;
    setCretePoints(newPoints);
    localStorage.setItem('manos_crete_points', newPoints.toString());

    setToast({
      show: true,
      title: currentLang === 'el' ? 'Η Κράτηση Καταχωρήθηκε!' : currentLang === 'de' ? 'Buchung Bestätigt!' : 'Booking Request Confirmed!',
      message: currentLang === 'el'
        ? `Η κράτησή σας για το "${experienceTitle}" στάλθηκε στον Μάνο.`
        : currentLang === 'de'
        ? `Ihre Reservierung für "${experienceTitle}" wurde an Manos gesendet.`
        : `Your reservation for "${experienceTitle}" has been sent to Manos.`,
      pointsEarned,
    });
  };

  // Preload experience card and gallery images on initial render
  useEffect(() => {
    preloadAppImages();
  }, []);

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [modalAddOns, setModalAddOns] = useState<AddOn[]>([]);
  const [modalTotalPrice, setModalTotalPrice] = useState<number>(0);
  const [modalOptionsSummary, setModalOptionsSummary] = useState<string>('');

  const handleOpenBookingModal = (
    experience: Experience,
    selectedAddOns: AddOn[],
    totalCalculatedPrice: number,
    selectedOptionsSummary: string
  ) => {
    setSelectedExperience(experience);
    setModalAddOns(selectedAddOns);
    setModalTotalPrice(totalCalculatedPrice);
    setModalOptionsSummary(selectedOptionsSummary);
    setIsModalOpen(true);
  };

  const handleAutoBookFromVoice = (experience: Experience) => {
    setSelectedExperience(experience);
    setModalAddOns([]);
    setModalTotalPrice(experience.basePrice);
    setModalOptionsSummary('');
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('manos_user_profile');
    setToast({
      show: true,
      title: currentLang === 'el' ? 'Αποσύνδεση' : 'Logged Out',
      message: currentLang === 'el' ? 'Αποσυνδεθήκατε επιτυχώς.' : 'You have logged out successfully.',
    });
  };

  // Filter experiences by voice search query
  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (!voiceQuery) return true;
    const q = voiceQuery.toLowerCase();
    const titleMatch = exp.title[currentLang].toLowerCase().includes(q) || exp.title.en.toLowerCase().includes(q);
    const subtitleMatch = exp.subtitle[currentLang].toLowerCase().includes(q) || exp.subtitle.en.toLowerCase().includes(q);
    const descMatch = exp.description[currentLang].toLowerCase().includes(q);
    return titleMatch || subtitleMatch || descMatch;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] font-sans antialiased flex flex-col selection:bg-[#C85A32] selection:text-white pb-16 lg:pb-0">
      {/* Scroll Progress Bar at top of viewport */}
      <ScrollProgressBar />

      {/* Top Header */}
      <Header
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        currentCurrency={currentCurrency}
        onSelectCurrency={setCurrentCurrency}
        onOpenVoiceModal={() => setIsVoiceModalOpen(true)}
        cretePoints={cretePoints}
      />

      {/* User Auth Banner / Profile Bar */}
      <div className="bg-[#102552] text-white py-2 px-4 border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F0AC] animate-ping" />
            <span className="font-bold text-[#99E1D9]">
              {user ? (
                <>✨ {currentLang === 'el' ? 'Καλώς ήρθες,' : 'Welcome back,'} {user.name}!</>
              ) : (
                <>{currentLang === 'el' ? 'Επισκέπτης (Δωρεάν Προφίλ - Χωρίς Σύνδεση)' : 'Guest Mode (No Login Active)'}</>
              )}
            </span>
          </div>

          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{currentLang === 'el' ? 'Αποσύνδεση' : 'Logout'}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 font-bold shadow-xs hover:brightness-110 transition-all cursor-pointer"
              >
                <User className="w-3.5 h-3.5" />
                <span>{currentLang === 'el' ? 'Σύνδεση με Google' : 'Sign in with Google'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <Hero currentLang={currentLang} />

      {/* Main Experience Cards Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
        {/* Dynamic Trip Countdown Component */}
        <ScrollReveal>
          <TripCountdown currentLang={currentLang} />
        </ScrollReveal>

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102552]/10 text-[#102552] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Curated Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-title font-black text-[#0C0C0C] tracking-tight">
              Explore Crete with Manos
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              {currentLang === 'el'
                ? 'Επιλέξτε την αγαπημένη σας εξόρμηση. Κάθε εκδρομή περιλαμβάνει παραλαβή & επιστροφή με van, ασφάλεια και τοπική καθοδήγηση.'
                : 'Choose your tailored adventure. Every experience includes door-to-door shuttle transfers, safety, and local guidance.'}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {(filteredExperiences.length > 0 ? filteredExperiences : EXPERIENCES).map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              currentLang={currentLang}
              currentCurrency={currentCurrency}
              user={user}
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
              onOpenBookingModal={handleOpenBookingModal}
            />
          ))}
        </div>

        {/* Personal Journey Planner */}
        <ScrollReveal>
          <PersonalJourneyPlanner
            currentLang={currentLang}
            user={user}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        </ScrollReveal>

        {/* Real-time Weather Summary Component */}
        <ScrollReveal>
          <WeatherSummary
            currentLang={currentLang}
            user={user}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        </ScrollReveal>

        {/* Visual Map Section - Photo Collage */}
        <ScrollReveal>
          <VisualMapSection currentLang={currentLang} />
        </ScrollReveal>

        {/* Photo Gallery Component */}
        <ScrollReveal>
          <Gallery currentLang={currentLang} />
        </ScrollReveal>

        {/* Collapsible FAQ Section */}
        <ScrollReveal>
          <CollapsibleFAQ currentLang={currentLang} />
        </ScrollReveal>

        {/* Quick Contact Banner */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0C0C0C] via-[#32292F] to-[#102552] text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
            <div className="space-y-2 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Tailor-Made Requests</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-title font-bold text-white">
                {currentLang === 'el' ? 'Έχετε κάποια ειδική διαδρομή στο μυαλό σας;' : 'Have a custom itinerary in mind?'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-light max-w-xl">
                {currentLang === 'el'
                  ? 'Επικοινωνήστε απευθείας με τον Μάνο για οργάνωση ιδιωτικών περιηγήσεων, οικογενειακών εξορμήσεων ή μεταφορών σε όλη την Κρήτη.'
                  : 'Contact Manos directly to organize personalized private tours, family excursions, or special event transfers across Crete.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 z-10">
              <a
                href="https://wa.me/306934644010?text=Hello%20Manos!%20I%20have%20a%20custom%20tour%20request%20for%20Crete."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Custom Tour</span>
              </a>
              <a
                href="tel:6934644010"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-1 text-white font-bold text-xs sm:text-sm shadow-md transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Call 6934644010</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Go Viral Giveaway Challenge */}
        <ScrollReveal>
          <GoViralGiveaway currentLang={currentLang} />
        </ScrollReveal>
      </main>

      {/* Safety & Shuttle Features Banner */}
      <SafetyShuttleBanner currentLang={currentLang} />

      {/* Traveler Reviews Section */}
      <ReviewsSection currentLang={currentLang} />

      {/* Newsletter Subscription Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <NewsletterForm currentLang={currentLang} />
        </ScrollReveal>
      </div>

      {/* Required Exact Match Footer */}
      <Footer currentLang={currentLang} />

      {/* Mobile Sticky Quick Action Bar */}
      <StickyBottomBar currentLang={currentLang} />

      {/* Google Auth Modal */}
      <GoogleAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentLang={currentLang}
        onLoginSuccess={(prof) => setUser(prof)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedExperience}
        selectedAddOns={modalAddOns}
        totalCalculatedPrice={modalTotalPrice}
        selectedOptionsSummary={modalOptionsSummary}
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onBookingConfirmed={handleBookingConfirmed}
      />

      {/* Floating Toast Notification */}
      <ToastNotification
        show={toast.show}
        title={toast.title}
        message={toast.message}
        pointsEarned={toast.pointsEarned}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      {/* Voice Assistant Modal */}
      <VoiceAssistantModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        currentLang={currentLang}
        onSearchQuery={setVoiceQuery}
        onAutoBookExperience={handleAutoBookFromVoice}
      />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
