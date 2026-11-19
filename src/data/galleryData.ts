import { Language } from '../types';

export interface GalleryImage {
  id: string;
  url: string;
  title: Record<Language, string>;
  location: Record<Language, string>;
  category: 'beaches' | 'gorges' | 'culture' | 'food' | 'fleet';
  description: Record<Language, string>;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'elafonisi-pink',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    title: {
      el: 'Ροζ Αμμουδιά Ελαφονησίου',
      de: 'Rosa Sandstrand Elafonisi',
      en: 'Elafonisi Pink Sand Lagoon',
    },
    location: {
      el: 'Χανιά, Νοτιοδυτική Κρήτη',
      de: 'Chania, Südwest-Kreta',
      en: 'Chania, Southwest Crete',
    },
    category: 'beaches',
    description: {
      el: 'Τα κρυσταλλικά ρηχά νερά και η μοναδική ροζ άμμος από θρυμματισμένα κοχύλια κάνουν το Ελαφονήσι επίγειο παράδεισο.',
      de: 'Kristallklares, flaches Wasser und einzigartiger rosa Sand aus zerkleinerten Muscheln machen Elafonisi zu einem Paradies.',
      en: 'Crystal-clear shallow turquoise waters and rare pink sand created by crushed seashells make Elafonisi a world wonder.',
    },
  },
  {
    id: 'balos-lagoon',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    title: {
      el: 'Λιμνοθάλασσα Μπάλου & Γραμβούσα',
      de: 'Lagune von Balos & Gramvousa',
      en: 'Balos Lagoon & Gramvousa',
    },
    location: {
      el: 'Κίσσαμος, Χανιά',
      de: 'Kissamos, Chania',
      en: 'Kissamos, Chania',
    },
    category: 'beaches',
    description: {
      el: 'Το εξωτικό τοπίο του Μπάλου με τα τυρκουάζ νερά και την άγρια κρητική φύση.',
      de: 'Die exotische Landschaft von Balos mit türkisblauem Wasser und wilder kretischer Natur.',
      en: 'Exotic scenery featuring breathtaking shades of turquoise and wild Mediterranean coastline.',
    },
  },
  {
    id: 'samaria-gorge',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    title: {
      el: 'Φαράγγι Σαμαριάς - Οι Σιδερόπορτες',
      de: 'Samaria-Schlucht - Die Eiserne Pforte',
      en: 'Samaria Gorge - The Iron Gates',
    },
    location: {
      el: 'Λευκά Όρη, Χανιά',
      de: 'Weiße Berge, Chania',
      en: 'White Mountains, Chania',
    },
    category: 'gorges',
    description: {
      el: 'Το μεγαλύτερο φαράγγι της Ευρώπης (16km) με τους επιβλητικούς κατακόρυφους βράχους.',
      de: 'Europas längste Schlucht (16 km) mit beeindruckenden senkrechten Felswänden.',
      en: 'Europe’s longest gorge hiking trek (16km) featuring towering rock walls and pristine mountain air.',
    },
  },
  {
    id: 'chania-harbor',
    url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    title: {
      el: 'Ενετικό Λιμάνι Χανίων',
      de: 'Venezianischer Hafen Chania',
      en: 'Old Venetian Harbor of Chania',
    },
    location: {
      el: 'Παλιά Πόλη Χανίων',
      de: 'Altstadt Chania',
      en: 'Chania Old Town',
    },
    category: 'culture',
    description: {
      el: 'Ο ιστορικός φάρος και τα γραφικά σοκάκια του ενετικού λιμανιού γεμάτα χρώματα και αρώματα.',
      de: 'Der historische Leuchtturm und malerische Gassen des venezianischen Hafens voller Farben.',
      en: 'The 16th-century Egyptian Lighthouse and romantic cobblestone alleys framed by Venetian mansions.',
    },
  },
  {
    id: 'knossos-palace',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    title: {
      el: 'Μινωικό Ανάκτορο Κνωσού',
      de: 'Minoischer Palast von Knossos',
      en: 'Minoan Palace of Knossos',
    },
    location: {
      el: 'Ηράκλειο',
      de: 'Heraklion',
      en: 'Heraklion',
    },
    category: 'culture',
    description: {
      el: 'Η κοιτίδα του ευρωπαϊκού πολιτισμού και ο μύθος του Λαβύρινθου με τον Μινώταυρο.',
      de: 'Die Wiege der europäischen Zivilisation und die Legende des Labyrinths.',
      en: 'The heart of Bronze Age Europe, birthplace of Minoan civilization and home to the mythical Labyrinth.',
    },
  },
  {
    id: 'cretan-food',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    title: {
      el: 'Αυθεντικό Κρητικό Τραπέζι & Ντάκος',
      de: 'Authentisches Kretisches Essen & Dakos',
      en: 'Authentic Cretan Feast & Olive Oil Tasting',
    },
    location: {
      el: 'Ορεινά Χωριά Χανίων',
      de: 'Bergdörfer Chania',
      en: 'Mountain Taverna, Chania',
    },
    category: 'food',
    description: {
      el: 'Αγνό παρθένο ελαιόλαδο, αντικριστό, ντάκος και φρέσκα τοπικά προϊόντα σε παραδοσιακές ταβέρνες.',
      de: 'Natives Olivenöl extra, Antikristo-Lamm, Dakos und frische lokale Produkte in traditionellen Tavernen.',
      en: 'Wood-fired sourdough, extra virgin olive oil, mountain herbs, and traditional slow-cooked lamb.',
    },
  },
  {
    id: 'shuttle-fleet',
    url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    title: {
      el: 'Πολυτελές Mercedes Van VIP',
      de: 'Luxus Mercedes VIP Shuttle',
      en: 'Mercedes VIP Private Shuttle',
    },
    location: {
      el: 'Πανκρήτια Κάλυψη',
      de: 'Inselweite Abdeckung',
      en: 'Island-wide Pickups',
    },
    category: 'fleet',
    description: {
      el: 'Άνεση, δροσερός κλιματισμός, δωρεάν Wi-Fi και εμφιαλωμένο νερό για όλες τις διαδρομές σας με τον Μάνο.',
      de: 'Komfort, moderne Klimaanlage, kostenloses WLAN und Erfrischungen für alle Fahrten mit Manos.',
      en: 'Climate-controlled comfort, complimentary bottled water, Wi-Fi, and generous luggage space.',
    },
  },
  {
    id: 'loutro-village',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    title: {
      el: 'Γραφικό Λουτρό Σφακίων',
      de: 'Malerisches Dorf Loutro',
      en: 'Picturesque Loutro Village',
    },
    location: {
      el: 'Σφακιά, Νότια Κρήτη',
      de: 'Sfakia, Süd-Kreta',
      en: 'Sfakia, South Crete',
    },
    category: 'culture',
    description: {
      el: 'Ένα παραθαλάσσιο χωριό προσβάσιμο μόνο από τη θάλασσα, χωρίς αυτοκίνητα, γεμάτο γαλήνη.',
      de: 'Ein meeresnahes Dorf ohne Autos, nur per Boot oder zu Fuß erreichbar.',
      en: 'A car-free coastal sanctuary nestled against towering cliffs, accessible only by boat or coastal trail.',
    },
  },
];
