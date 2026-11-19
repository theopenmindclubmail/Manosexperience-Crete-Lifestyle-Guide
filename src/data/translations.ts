import { Language, LanguageOption } from '../types';

export const LANGUAGES: LanguageOption[] = [
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
];

export const UI_STRINGS = {
  heroTitle: {
    el: 'Αυθεντικές Εμπειρίες Κρήτης',
    de: 'Authentische Kreta-Erlebnisse',
    en: 'Authentic Crete Experiences',
  },
  heroHost: {
    el: 'με τον Μάνο Μιχαλίτση',
    de: 'mit Manos Michalitsis',
    en: 'by Manos Michalitsis',
  },
  heroSubtitle: {
    el: 'Προσωπικός συνεργάτης τοπικών εμπειριών στην Κρήτη. Παραλαβή & επιστροφή από το κατάλυμά σας με ασφάλεια, άνεση και αυθεντική κρητική φιλοξενία.',
    de: 'Ihr persönlicher lokaler Erlebnis-Partner auf Kreta. Sichere & komfortable Abholung und Rückbringung von Ihrer Unterkunft mit echter kretischer Gastfreundschaft.',
    en: 'Your personal local experience partner in Crete. Door-to-door pick-up & drop-off with safety, comfort, and genuine Cretan hospitality.',
  },
  shuttleBadge: {
    el: 'Παραλαβή & Επιστροφή',
    de: 'Abholung & Transfer',
    en: 'Pick-up & Drop-off',
  },
  safetyBadge: {
    el: '100% Ασφάλεια & Συνέπεια',
    de: '100% Sicherheit & Pünktlichkeit',
    en: '100% Safety & Reliability',
  },
  hospitalityBadge: {
    el: 'Αυθεντική Φιλοξενία',
    de: 'Echte Gastfreundschaft',
    en: 'Authentic Hospitality',
  },
  experienceBadge: {
    el: 'Τοπικός Οδηγός & Συνοδός',
    de: 'Lokaler Guide & Fahrer',
    en: 'Local Guide & Driver',
  },
  basePriceFrom: {
    el: 'Από',
    de: 'Ab',
    en: 'From',
  },
  perPerson: {
    el: '/ άτομο',
    de: '/ Person',
    en: '/ person',
  },
  perGroup: {
    el: '/ ομάδα',
    de: '/ Gruppe',
    en: '/ group',
  },
  customizeExperience: {
    el: 'Προσαρμογή Εμπειρίας & Επιλογές',
    de: 'Erlebnis Anpassen & Optionen',
    en: 'Customize Experience & Options',
  },
  addOnsTitle: {
    el: 'Επιπλέον Παροχές (Add-ons):',
    de: 'Zusatzoptionen (Add-ons):',
    en: 'Available Add-ons:',
  },
  includedTitle: {
    el: 'Τι περιλαμβάνεται:',
    de: 'Was enthalten ist:',
    en: 'What is included:',
  },
  calculatedTotal: {
    el: 'Συνολικό Κόστος:',
    de: 'Gesamtsumme:',
    en: 'Estimated Total:',
  },
  bookWhatsApp: {
    el: 'Κράτηση μέσω WhatsApp',
    de: 'Buchen via WhatsApp',
    en: 'Book via WhatsApp',
  },
  callManos: {
    el: 'Κλήση στον Μάνο',
    de: 'Manos anrufen',
    en: 'Call Manos',
  },
  quickInquiry: {
    el: 'Άμεση Επικοινωνία',
    de: 'Direktanfrage',
    en: 'Quick Inquiry',
  },
  selectLanguage: {
    el: 'Γλώσσα / Sprache / Language:',
    de: 'Sprache / Language / Γλώσσα:',
    en: 'Language / Sprache / Γλώσσα:',
  },
  footerAboutHeader: {
    el: 'Σχετικά με τον Host',
    de: 'Über den Gastgeber',
    en: 'About the Host',
  },
  footerName: 'Μάνος Μιχαλίτσης',
  footerRole: 'Local Experience Partner – Κρήτη',
  footerPhoneLabel: {
    el: 'Τηλέφωνο:',
    de: 'Telefon:',
    en: 'Phone:',
  },
  footerEmailLabel: {
    el: 'Email:',
    de: 'E-Mail:',
    en: 'Email:',
  },
  footerInstagramLabel: {
    el: 'Instagram:',
    de: 'Instagram:',
    en: 'Instagram:',
  },
  footerLanguagesLabel: {
    el: 'Γλώσσες Επικοινωνίας:',
    de: 'Sprachen:',
    en: 'Languages Spoken:',
  },
  footerLanguagesValue: 'Ελληνικά | Γερμανικά (άπταιστα) | Αγγλικά (απλά)',
  footerCopyright: {
    el: '© 2026 Αυθεντικές Εμπειρίες Κρήτης – Μάνος Μιχαλίτσης. Όλα τα δικαιώματα διατηρούνται.',
    de: '© 2026 Authentische Kreta-Erlebnisse – Manos Michalitsis. Alle Rechte vorbehalten.',
    en: '© 2026 Authentic Crete Experiences – Manos Michalitsis. All rights reserved.',
  },
  modalTitle: {
    el: 'Κράτηση & Ερώτηση Εμπειρίας',
    de: 'Buchung & Anfrage',
    en: 'Experience Inquiry & Booking',
  },
  pickupLocation: {
    el: 'Περιοχή / Ξενοδοχείο Παραλαβής:',
    de: 'Abholort / Hotel:',
    en: 'Pickup Location / Hotel:',
  },
  preferredDate: {
    el: 'Επιθυμητή Ημερομηνία:',
    de: 'Wunschdatum:',
    en: 'Preferred Date:',
  },
  numberOfGuests: {
    el: 'Αριθμός Ατόμων:',
    de: 'Anzahl der Personen:',
    en: 'Number of Guests:',
  },
  additionalNotes: {
    el: 'Επιπλέον Σχόλια / Ειδικές Απαιτήσεις:',
    de: 'Anmerkungen / Wünsche:',
    en: 'Additional Notes / Special Requests:',
  },
  sendWhatsAppAction: {
    el: 'Αποστολή Μηνύματος στο WhatsApp',
    de: 'WhatsApp Nachrichten Senden',
    en: 'Send WhatsApp Message',
  },
  closeModal: {
    el: 'Κλείσιμο',
    de: 'Schließen',
    en: 'Close',
  },
  shuttleDetailsTitle: {
    el: 'Γιατί να επιλέξετε τον Μάνο;',
    de: 'Warum mit Manos reisen?',
    en: 'Why Travel with Manos?',
  },
  shuttleDetailsSub: {
    el: 'Χωρίς άγχος οδήγησης, χωρίς καθυστερήσεις. Απολαύστε την Κρήτη με ντόπιο συνοδό.',
    de: 'Kein Stress beim Fahren, keine Verzögerungen. Genießen Sie Kreta mit einem Einheimischen.',
    en: 'Stress-free travel, punctual coordination, and genuine local insider knowledge.',
  },
  reviewsHeader: {
    el: 'Τι λέγουν οι ταξιδιώτες',
    de: 'Was Gäste sagen',
    en: 'What Travelers Say',
  },
  viewDetails: {
    el: 'Δείτε Λεπτομέρειες',
    de: 'Details Anzeigen',
    en: 'View Details',
  },
  hideDetails: {
    el: 'Απόκρυψη Λεπτομερειών',
    de: 'Details Ausblenden',
    en: 'Hide Details',
  }
};
