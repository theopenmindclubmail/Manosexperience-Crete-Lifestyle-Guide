export type Language = 'el' | 'de' | 'en';
export type Currency = 'EUR' | 'USD' | 'GBP';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; label: string }> = {
  EUR: { symbol: '€', rate: 1.0, label: 'EUR (€)' },
  USD: { symbol: '$', rate: 1.08, label: 'USD ($)' },
  GBP: { symbol: '£', rate: 0.85, label: 'GBP (£)' },
};

export function formatPrice(priceInEuros: number, currency: Currency): string {
  const info = CURRENCY_RATES[currency] || CURRENCY_RATES.EUR;
  const converted = Math.round(priceInEuros * info.rate);
  return `${info.symbol}${converted}`;
}

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export interface AddOn {
  id: string;
  name: Record<Language, string>;
  description?: Record<Language, string>;
  price: number; // in Euros
  unit?: Record<Language, string>;
}

export interface OptionChoice {
  id: string;
  label: Record<Language, string>;
  priceModifier: number;
}

export interface OptionGroup {
  id: string;
  title: Record<Language, string>;
  choices: OptionChoice[];
}

export interface ItineraryStep {
  timeOfDay: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
  iconType?: 'pickup' | 'drive' | 'activity' | 'food' | 'beach' | 'return';
}

export interface Experience {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
  image: string;
  basePrice: number;
  priceNote?: Record<Language, string>;
  duration: Record<Language, string>;
  badges: {
    shuttle: boolean;
    safety: boolean;
    food: boolean;
    beach: boolean;
    vip?: boolean;
  };
  optionGroups?: OptionGroup[];
  availableAddOns: AddOn[];
  included: Record<Language, string[]>;
  itinerary?: ItineraryStep[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: Record<Language, string>;
  avatar: string;
}

export interface WeatherRegion {
  id: string;
  regionName: Record<Language, string>;
  tempC: number;
  tempF: number;
  condition: Record<Language, string>;
  icon: 'sun' | 'cloud-sun' | 'wind' | 'waves';
  humidity: number;
  uvIndex: number;
  waterTempC: number;
  waterTempF: number;
  recommendation: Record<Language, string>;
  bestForExperienceId?: string;
}

export interface MapLandmark {
  id: string;
  name: Record<Language, string>;
  region: 'chania' | 'rethymno' | 'heraklion' | 'lassithi' | 'south';
  category: 'beach' | 'gorge' | 'culture' | 'village';
  xPercent: number; // For SVG map overlay coordinates
  yPercent: number;
  description: Record<Language, string>;
  pickupAvailable: boolean;
  driveTimeFromChania: string;
  driveTimeFromRethymno: string;
  driveTimeFromHeraklion: string;
  associatedExperienceId?: string;
  image: string;
}

export interface FAQItem {
  id: string;
  category: 'transfer' | 'season' | 'custom' | 'safety';
  question: Record<Language, string>;
  answer: Record<Language, string>;
}
