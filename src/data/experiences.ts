import { Experience, Review } from '../types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'samaria-gorge',
    title: {
      el: 'Θετική εμπειρία στο φαράγγι της Σαμαριάς',
      de: 'Positives Erlebnis in der Samaria-Schlucht',
      en: 'Positive Experience at Samaria Gorge',
    },
    subtitle: {
      el: 'Πλήρης διαχείριση προγράμματος, εισιτηρίων, πλοίου & ασφαλούς επιστροφής',
      de: 'Komplettes Fahrplanmanagement, Fähre, Sicherheit & Rücktransfer',
      en: 'Full schedule management, ferry logistics, safety guidance & seamless transfer',
    },
    description: {
      el: 'Διασχίστε το πιο διάσημο φαράγγι της Ευρώπης με απόλυτη ασφάλεια και σιγουριά. Ο Μάνος αναλαμβάνει όλο το χρονοδιάγραμμα, την παραλαβή από το κατάλυμά σας, τον συντονισμό των εισιτηρίων του πλοίου από την Αγία Ρουμέλη και την άνετη επιστροφή σας.',
      de: 'Durchqueren Sie die berühmteste Schlucht Europas mit absoluter Sicherheit. Manos kümmert sich um den gesamten Zeitplan, die Abholung von Ihrer Unterkunft, die Koordinierung der Fährtickets ab Agia Roumeli und Ihre entspannte Rückkehr.',
      en: 'Conquer Europe\'s most famous canyon with total peace of mind. Manos handles all timetable logistics, early hotel pick-up, ferry ticket coordination from Agia Roumeli, and safe door-to-door return transfer.',
    },
    highlights: {
      el: [
        'Πρωινή παραλαβή απευθείας από το κατάλυμά σας',
        'Συντονισμός εισιτηρίων πλοίου & είσοδος στο φαράγγι',
        'Παρακολούθηση ασφαλούς ολοκλήρωσης πεζοπορίας',
        'Άνετη επιστροφή με κλιματιζόμενο όχημα'
      ],
      de: [
        'Frühe Abholung direkt von Ihrer Unterkunft',
        'Koordination der Fährtickets & Schluchteintritt',
        'Sicherheitsüberwachung bis zur Agia Roumeli',
        'Bequeme Rückfahrt im klimatisierten Fahrzeug'
      ],
      en: [
        'Early pick-up directly from your accommodation',
        'Ferry ticket coordination & gorge entry support',
        'Safety monitoring until Agia Roumeli harbor',
        'Comfortable air-conditioned return transport'
      ],
    },
    image: '/src/assets/images/samaria_gorge_thumb_1784890301073.jpg',
    basePrice: 85,
    priceNote: {
      el: 'Ανά άτομο (Περιλαμβάνει μεταφορές & συντονισμό)',
      de: 'Pro Person (Inkl. Transfers & Koordination)',
      en: 'Per person (Includes transfers & coordination)',
    },
    duration: {
      el: '10 - 12 Ώρες',
      de: '10 - 12 Stunden',
      en: '10 - 12 Hours',
    },
    badges: {
      shuttle: true,
      safety: true,
      food: false,
      beach: true,
      vip: false,
    },
    availableAddOns: [
      {
        id: 'samaria-food',
        price: 50,
        name: {
          el: '+50€ Αυθεντικό Γεύμα στην Αγία Ρουμέλη',
          de: '+50€ Authentisches Essen in Agia Roumeli',
          en: '+50€ Authentic Cretan Meal at Agia Roumeli',
        },
        description: {
          el: 'Πλήρες κρητικό γεύμα σε παραδοσιακή ταβέρνα δίπλα στο κύμα μετά την πεζοπορία.',
          de: 'Kretisches Menü in einer traditionellen Taverne am Meer nach der Wanderung.',
          en: 'Full Cretan meal with wine and refreshers in a seaside tavern after your hike.',
        },
      },
      {
        id: 'samaria-vip-transport',
        price: 170,
        name: {
          el: '+170€ Ιδιωτική VIP Μεταφορά (Mercedes Van)',
          de: '+170€ Private VIP-Fahrzeugnutzung (Mercedes Van)',
          en: '+170€ Private VIP Vehicle Upgrade (Mercedes Van)',
        },
        description: {
          el: 'Αποκλειστικό όχημα για την παρέα σας χωρίς άλλους επιβάτες, με ευέλικτα ωράρια.',
          de: 'Exklusives Fahrzeug nur für Ihre Gruppe mit flexiblen Abfahrtszeiten.',
          en: 'Exclusive private vehicle for your party with flexible customized timing.',
        },
      },
    ],
    included: {
      el: [
        'Μεταφορά από/προς το κατάλυμα',
        'Οδηγίες ασφαλείας & χάρτης φαραγγιού',
        'Συντονισμός εισιτηρίων πλοίου & λεωφορείου',
        'Ψυγείο με δροσερό νερό στο όχημα'
      ],
      de: [
        'Transfer von/zu Ihrer Unterkunft',
        'Sicherheitseinweisung & Schluchtkarte',
        'Koordination der Fähr- und Busanbindungen',
        'Kühles Mineralwasser im Fahrzeug'
      ],
      en: [
        'Door-to-door accommodation pick-up & drop-off',
        'Safety briefing & gorge route orientation',
        'Ferry & shuttle ticket reservation assistance',
        'Chilled bottled water onboard'
      ],
    },
    itinerary: [
      {
        timeOfDay: { el: '06:15 - 07:00', de: '06:15 - 07:00', en: '06:15 - 07:00' },
        title: { el: 'Πρωινή Παραλαβή από Κατάλυμα', de: 'Frühe Abholung an der Unterkunft', en: 'Hotel Pickup & Briefing' },
        description: { el: 'Επιβίβαση στο κλιματιζόμενο van και διαδρομή προς το οροπέδιο Ομαλού.', de: 'Einsteigen in den klimatisierten Van und Fahrt zur Omalos-Hochebene.', en: 'Board air-conditioned van and scenic drive up to the Omalos plateau.' },
        iconType: 'pickup',
      },
      {
        timeOfDay: { el: '07:30 - 14:00', de: '07:30 - 14:00', en: '07:30 - 14:00' },
        title: { el: 'Είσοδος & Πεζοπορία στη Σαμαριά', de: 'Eintritt & Wanderung durch die Schlucht', en: 'Gorge Entry & Guided Hike' },
        description: { el: 'Κατάβαση στο Ξυλόσκαλο, πέρασμα από τις Σιδηρόπορτες και άφιξη στην Αγία Ρουμέλη.', de: 'Abstieg am Xyloskalo, Passage der "Eisernen Tore" bis Agia Roumeli.', en: 'Descend Xyloskalo, cross the Iron Gates ("Sidiroportes") down to Agia Roumeli harbor.' },
        iconType: 'activity',
      },
      {
        timeOfDay: { el: '14:30 - 17:00', de: '14:30 - 17:00', en: '14:30 - 17:00' },
        title: { el: 'Μπάνιο στο Λιβυκό & Φαγητό', de: 'Schwimmen im Libyschen Meer & Essen', en: 'Libyan Sea Swim & Traditional Meal' },
        description: { el: 'Χαλάρωση στην παραλία της Αγίας Ρουμέλης και προαιρετικό γεύμα σε παραθαλάσσια ταβέρνα.', de: 'Entspannung am Strand und kretisches Mittagessen in einer Strandtaverne.', en: 'Unwind on Agia Roumeli beach with optional Cretan lunch at a seaside tavern.' },
        iconType: 'food',
      },
      {
        timeOfDay: { el: '17:30 - 20:00', de: '17:30 - 20:00', en: '17:30 - 20:00' },
        title: { el: 'Πλοίο & Επιστροφή στο Κατάλυμα', de: 'Fähre & Rückfahrt zur Unterkunft', en: 'Ferry & Safe Return Transfer' },
        description: { el: 'Επιβίβαση στο πλοίο για Σφακιά/Σούγια και άνετη επιστροφή στο ξενοδοχείο σας.', de: 'Fährüberfahrt nach Sfakia/Sougia und bequeme Rückfahrt im Van.', en: 'Scenic coastal ferry cruise to Sfakia/Sougia followed by private van drop-off.' },
        iconType: 'return',
      },
    ],
  },
  {
    id: 'exotic-beaches',
    title: {
      el: 'Εξωτικές Παραλίες της Κρήτης',
      de: 'Exotischer Strandtag – Traumstrände',
      en: 'Long Beach Day – Exotic Experience',
    },
    subtitle: {
      el: 'Επιλογή 1 ή 2 παραλιών: Ελαφονήσι, Φαλάσαρνα, Πρέβελη, Μπάλος, Μάταλα',
      de: 'Wahl zwischen 1 oder 2 Stränden: Elafonisi, Falasarna, Preveli, Balos, Matala',
      en: 'Single or Dual beach choice: Elafonisi, Falasarna, Preveli, Balos, Matala',
    },
    description: {
      el: 'Χαλαρώστε στις πιο εντυπωσιακές παραλίες της Μεσογείου με ροζ άμμο και γαλαζοπράσινα νερά. Επιλέξτε είτε μονοήμερη εστίαση σε 1 εξωτική παραλία είτε συνδυασμό 2 παραλιών την ίδια μέρα.',
      de: 'Entspannen Sie an den schönsten Stränden des Mittelmeers mit rosa Sand und türkisblauem Wasser. Wählen Sie 1 Traumstrand oder eine Kombination aus 2 Stränden an einem Tag.',
      en: 'Unwind at the most stunning beaches in the Mediterranean with pink sand and crystal-clear turquoise waters. Choose between a dedicated single-beach relaxation or a dual-beach combo.',
    },
    highlights: {
      el: [
        'Ευέλικτο πρόγραμμα & στάσεις για φωτογραφίες',
        'Επιλογή 1 ή 2 παραλιών',
        'Ομπρέλες & εξοπλισμός παραλίας διαθέσιμος',
        'Στάση για ηλιοβασίλεμα & τοπικό μεζέ'
      ],
      de: [
        'Flexibler Zeitplan & Fotostopps',
        'Wahlweise 1 oder 2 Strände an einem Tag',
        'Sonnenschirme & Strandausrüstung verfügbar',
        'Sonnenuntergangsstopp mit kretischem Meze'
      ],
      en: [
        'Flexible schedule & scenic panoramic photos',
        'Choice of Single or Dual Beach experience',
        'Beach umbrellas & comfort gear onboard',
        'Sunset view stop with local snacks'
      ],
    },
    image: '/src/assets/images/elafonisi_beach_thumb_1784890313230.jpg',
    basePrice: 90,
    priceNote: {
      el: 'Βασική τιμή για 1 παραλία / άτομο',
      de: 'Basispreis für 1 Strand / Person',
      en: 'Base price for Single Beach choice / person',
    },
    duration: {
      el: '8 - 10 Ώρες',
      de: '8 - 10 Stunden',
      en: '8 - 10 Hours',
    },
    badges: {
      shuttle: true,
      safety: true,
      food: true,
      beach: true,
      vip: true,
    },
    optionGroups: [
      {
        id: 'beach-count',
        title: {
          el: 'Επιλογή Επιτιθέμενου Προγράμματος Παραλίας:',
          de: 'Wahl des Strandprogramms:',
          en: 'Select Beach Combination:',
        },
        choices: [
          {
            id: 'single-beach',
            label: {
              el: '1 Παραλία (π.χ. Ελαφονήσι ή Φαλάσαρνα)',
              de: '1 Strand (z.B. Elafonisi oder Falasarna)',
              en: 'Single Beach (e.g., Elafonisi OR Falasarna)',
            },
            priceModifier: 0,
          },
          {
            id: 'dual-beach',
            label: {
              el: '2 Παραλίες (+40€ συνδυασμός π.χ. Ελαφονήσι + Φαλάσαρνα)',
              de: '2 Strände (+40€ Kombination z.B. Elafonisi + Falasarna)',
              en: 'Dual Beach (+40€ Combo e.g. Elafonisi + Falasarna)',
            },
            priceModifier: 40,
          },
        ],
      },
    ],
    availableAddOns: [
      {
        id: 'beach-sunbed-reservation',
        price: 35,
        name: {
          el: '+35€ Κράτηση Ξαπλώστρας & Ομπρέλας',
          de: '+35€ Liegestuhl- & Sonnenschirmreservierung',
          en: '+35€ Sunbed & Umbrella Reservation',
        },
        description: {
          el: 'Εξασφαλισμένες θέσεις στην πρώτη σειρά της παραλίας χωρίς αναμονή.',
          de: 'Garantierte Plätze in der ersten Reihe am Strand ohne Wartezeit.',
          en: 'Guaranteed front-row sunbeds and umbrella reserved ahead of arrival.',
        },
      },
      {
        id: 'beach-sunset-meze',
        price: 50,
        name: {
          el: '+50€ Sunset Cretan Meze & Τοπικό Κρασί',
          de: '+50€ Sonnenuntergangs-Meze & Lokaler Wein',
          en: '+50€ Sunset Cretan Meze & Local Wine/Raki',
        },
        description: {
          el: 'Απολαύστε το ηλιοβασίλεμα με φρέσκους κρητικούς μεζέδες και παγωμένο ντόπιο κρασί.',
          de: 'Genießen Sie den Sonnenuntergang mit frischen Mezedes und gekühltem kretischen Wein.',
          en: 'Enjoy the golden hour with artisanal Cretan appetizers and chilled local wine.',
        },
      },
    ],
    included: {
      el: [
        'Μεταφορά με κλιματισμό & Wi-Fi',
        'Ομπρέλες θαλάσσης για την παρέα',
        'Φορητό ψυγείο με παγωμένα νερά & αναψυκτικά',
        'Τοπικές συμβουλές για τις καλύτερες ταβέρνες'
      ],
      de: [
        'Klimatisierter Transfer & Wi-Fi',
        'Sonnenschirme für Ihre Gruppe',
        'Kühlbox mit kaltem Wasser & Erfrischungen',
        'Geheimtipps für die besten Tavernen vor Ort'
      ],
      en: [
        'Air-conditioned van transfer & Wi-Fi',
        'Complimentary beach umbrellas for the group',
        'Cooler box with chilled mineral water & snacks',
        'Insider tips for authentic coastal dining'
      ],
    },
    itinerary: [
      {
        timeOfDay: { el: '08:30 - 09:15', de: '08:30 - 09:15', en: '08:30 - 09:15' },
        title: { el: 'Παραλαβή & Δροσερό Καλωσόρισμα', de: 'Abholung & Begrüßung', en: 'Accommodation Pick-up' },
        description: { el: 'Παραλαβή με κλιματιζόμενο όχημα και παγωμένα νερά/αναψυκτικά.', de: 'Abholung im klimatisierten Van mit gekühltem Mineralwasser.', en: 'Door-to-door pick-up in executive van equipped with cold drinks & Wi-Fi.' },
        iconType: 'pickup',
      },
      {
        timeOfDay: { el: '10:30 - 14:00', de: '10:30 - 14:00', en: '10:30 - 14:00' },
        title: { el: '1η Εξωτική Παραλία (π.χ. Ελαφονήσι)', de: '1. Traumstrand (z.B. Elafonisi)', en: '1st Exotic Beach Stop (e.g., Elafonisi)' },
        description: { el: 'Χαλάρωση στη ροζ άμμο, κολύμπι στα ρηχά γαλαζοπράσινα νερά & ομπρέλες.', de: 'Entspannung am rosa Sandstrand mit kristallklarem Flachwasser.', en: 'Bask on the iconic pink sand beach with turquoise shallow waters and gear.' },
        iconType: 'beach',
      },
      {
        timeOfDay: { el: '14:30 - 16:00', de: '14:30 - 16:00', en: '14:30 - 16:00' },
        title: { el: 'Παραδοσιακό Γεύμα ή 2η Παραλία', de: 'Mittagessen oder 2. Strand', en: 'Seaside Lunch or 2nd Beach Combo' },
        description: { el: 'Στάση για φρέσκο ψάρι & μεζέδες ή μετάβαση στη 2η παραλία (Φαλάσαρνα).', de: 'Mittagspause in einer Fischtaverne oder Weiterfahrt nach Falasarna.', en: 'Enjoy fresh coastal gastronomy or proceed to the 2nd beach location (Falasarna).' },
        iconType: 'food',
      },
      {
        timeOfDay: { el: '17:00 - 18:30', de: '17:00 - 18:30', en: '17:00 - 18:30' },
        title: { el: 'Ηλιοβασίλεμα & Επιστροφή', de: 'Sonnenuntergang & Rückfahrt', en: 'Golden Hour Sunset & Drop-off' },
        description: { el: 'Φωτογραφίες στο ηλιοβασίλεμα και ξεκούραστη επιστροφή στο κατάλυμά σας.', de: 'Fotostopp beim Sonnenuntergang und entspannte Rückfahrt.', en: 'Capture golden hour memories over the sea and enjoy smooth hotel drop-off.' },
        iconType: 'return',
      },
    ],
  },
  {
    id: 'mountain-villages',
    title: {
      el: 'Ορεινά Χωριά & Τοπικές Γεύσεις',
      de: 'Bergdörfer & Lokale Kulinarik',
      en: 'Mountain Villages & Local Flavors',
    },
    subtitle: {
      el: 'Βάμος, Σπήλι, Μαργαρίτες, Αρχάνες – Ψώνια, Κεραμική & Γεύμα σε Καφενείο',
      de: 'Vamos, Spili, Margarites, Archanes – Shopping, Keramik & Kafeneio-Essen',
      en: 'Vamos, Spili, Margarites, Archanes – Artisan Crafts, Kafeneio & Tasting',
    },
    description: {
      el: 'Ανακαλύψτε την ψυχή της αυθεντικής Κρήτης μακριά από τον τουρισμό. Περιηγηθείτε σε γραφικά ορεινά χωριά, αγοράστε αγνό ελαιόλαδο και χειροποίητα κεραμικά, και απολαύστε αυθεντικό φαγητό σε παραδοσιακό καφενείο.',
      de: 'Entdecken Sie die Seele des echten Kretas fernab vom Massentourismus. Schlendern Sie durch malerische Bergdörfer, kaufen Sie reines Olivenöl und handgemachte Keramik und genießen Sie hausgemachte Speisen im Kafeneio.',
      en: 'Discover the heart and soul of authentic hinterland Crete. Wander through picturesque stone villages, shop for pure cold-pressed olive oil & ceramics, and relish home-cooked regional dishes at a historic Kafeneio.',
    },
    highlights: {
      el: [
        'Επίσκεψη στο χωριό κεραμικής Μαργαρίτες',
        'Δοκιμή αγνού κρητικού ελαιολάδου & ρακής',
        'Παραδοσιακό γεύμα σε αυθεντικό καφενείο',
        'Αγορές τοπικών προϊόντων απευθείας από παραγωγούς'
      ],
      de: [
        'Besuch des Töpferdorfes Margarites',
        'Verkostung von reinem kretischem Olivenöl & Raki',
        'Traditionelles Essen in einem kretischen Kafeneio',
        'Einkauf lokaler Produkte direkt von Erzeugern'
      ],
      en: [
        'Visit to Margarites traditional pottery village',
        'Tasting of pure Cretan olive oil & artisanal raki',
        'Traditional feast at a historic village Kafeneio',
        'Direct shopping for honey, herbs & olive oil from locals'
      ],
    },
    image: '/src/assets/images/mountain_village_thumb_1784890326293.jpg',
    basePrice: 95,
    priceNote: {
      el: 'Ανά άτομο (Περιλαμβάνει γεύμα & δοκιμή ελαιολάδου)',
      de: 'Pro Person (Inkl. Essen & Olivenölverkostung)',
      en: 'Per person (Includes meal & oil tasting)',
    },
    duration: {
      el: '7 - 9 Ώρες',
      de: '7 - 9 Stunden',
      en: '7 - 9 Hours',
    },
    badges: {
      shuttle: true,
      safety: true,
      food: true,
      beach: false,
      vip: false,
    },
    availableAddOns: [
      {
        id: 'pottery-workshop',
        price: 40,
        name: {
          el: '+40€ Εργαστήριο Κεραμικής με Τροχό',
          de: '+40€ Töpfer-Workshop an der Scheibe',
          en: '+40€ Hands-on Pottery Wheel Workshop',
        },
        description: {
          el: 'Δημιουργήστε το δικό σας κεραμικό ενθύμιο με τη βοήθεια ντόπιου τεχνίτη.',
          de: 'Kreieren Sie Ihr eigenes Keramik-Souvenir unter Anleitung eines Töpfermeisters.',
          en: 'Craft your own clay souvenir under the guidance of a master artisan.',
        },
      },
      {
        id: 'wine-masterclass',
        price: 60,
        name: {
          el: '+60€ Masterclass Βιολογικού Κρασιού & Ελαιολάδου',
          de: '+60€ Bio-Wein & Olivenöl Masterclass',
          en: '+60€ Organic Wine & Olive Oil Masterclass',
        },
        description: {
          el: 'Ξενάγηση σε βιολογικό αμπελώνα με δοκιμή 5 σπάνιων κρητικών ποικιλιών κρασιού.',
          de: 'Führung durch einen Bio-Weinberg mit Verkostung von 5 einheimischen Rebsorten.',
          en: 'Guided organic vineyard tour tasting 5 indigenous Cretan grape varieties.',
        },
      },
    ],
    included: {
      el: [
        'Πλήρης μεταφορά με παραλαβή από το κατάλυμα',
        'Γεύμα με τοπικά πιάτα & ρακή στο καφενείο',
        'Δοκιμή ελαιολάδου & μελιού',
        'Ξενάγηση στα γραφικά σοκάκια των χωριών'
      ],
      de: [
        'Gesamter Transfer ab Ihrer Unterkunft',
        'Traditionelles Menü & Raki im Kafeneio',
        'Olivenöl- & Honigverkostung',
        'Spaziergang durch malerische Dorfstraßen'
      ],
      en: [
        'Complete transport from your accommodation',
        'Full traditional Kafeneio meal with local raki',
        'Artisanal honey & extra virgin olive oil tasting',
        'Guided walks through charming historic alleys'
      ],
    },
  },
  {
    id: 'city-vibe-shopping',
    title: {
      el: 'City Vibe, Shopping & Chilling',
      de: 'City Vibe, Shopping & Entspannen',
      en: 'City Vibe Shopping & Chilling',
    },
    subtitle: {
      el: 'Συνδυασμός 2 Πόλεων: Χανιά, Ρέθυμνο, Ηράκλειο ή Άγιος Νικόλαος',
      de: '2-Städte-Kombination: Chania, Rethymno, Heraklion oder Agios Nikolaos',
      en: '2-City Combo Selector: Chania, Rethymno, Heraklion or Agios Nikolaos',
    },
    description: {
      el: 'Ζήστε τον κοσμοπολίτικο αέρα των κρητικών πόλεων. Κάντε αγορές σε παραδοσιακές αγορές και μπουτίκ, περπατήστε στα βενετσάνικα λιμάνια και απολαύστε καφέ ή φαγητό δίπλα στη θάλασσα.',
      de: 'Erleben Sie das erstklassige Flair der kretischen Städte. Shoppen Sie in bunten Boutiquen, flanieren Sie an venezianischen Häfen und genießen Sie Kaffee oder Abendessen direkt am Wasser.',
      en: 'Experience the cosmopolitan atmosphere of Crete\'s coastal cities. Browse boutique shops and artisan markets, stroll Venetian harbors, and relax over seaside coffee and fine dining.',
    },
    highlights: {
      el: [
        'Επιλογή συνδυασμού 2 πόλεων',
        'Περίπατος στα βενετσιάνικα σοκάκια & λιμάνια',
        'Ελεύθερος χρόνος για ψώνια & μπουτίκ',
        'Προτάσεις για τα καλύτερα εστιατόρια & κοκτέιλ μπαρ'
      ],
      de: [
        'Auswahl einer Kombination aus 2 Städten',
        'Spaziergang durch venezianische Altstädte & Häfen',
        'Freizeit zum Shoppen in lokalen Boutiquen',
        'Empfehlungen für die besten Restaurants & Cocktailbars'
      ],
      en: [
        'Customizable 2-city combination',
        'Guided orientation in Venetian harbors & alleys',
        'Leisure time for boutique shopping & souvenirs',
        'Curated insider recommendations for dining & cocktails'
      ],
    },
    image: '/src/assets/images/chania_city_thumb_1784890339408.jpg',
    basePrice: 80,
    priceNote: {
      el: 'Ανά άτομο (Περιλαμβάνει μεταφορά 2 πόλεων)',
      de: 'Pro Person (Inkl. Transfer für 2 Städte)',
      en: 'Per person (Includes 2-city transfers)',
    },
    duration: {
      el: '6 - 8 Ώρες',
      de: '6 - 8 Stunden',
      en: '6 - 8 Hours',
    },
    badges: {
      shuttle: true,
      safety: true,
      food: false,
      beach: false,
      vip: true,
    },
    optionGroups: [
      {
        id: 'city-combo',
        title: {
          el: 'Επιλέξτε Συνδυασμό 2 Πόλεων:',
          de: 'Wählen Sie die 2-Städte-Kombination:',
          en: 'Select Your 2-City Combination:',
        },
        choices: [
          {
            id: 'chania-rethymno',
            label: {
              el: 'Χανιά (Παλιά Πόλη) + Ρέθυμνο (Ενετικό Λιμάνι)',
              de: 'Chania (Altstadt) + Rethymno (Venezianischer Hafen)',
              en: 'Chania (Old Town) + Rethymno (Venetian Harbor)',
            },
            priceModifier: 0,
          },
          {
            id: 'heraklion-agiosnikolaos',
            label: {
              el: 'Ηράκλειο (Αγορά) + Άγιος Νικόλαος (Λίμνη Βουλισμένη)',
              de: 'Heraklion (Zentrum) + Agios Nikolaos (Voulismeni-See)',
              en: 'Heraklion (Market) + Agios Nikolaos (Voulismeni Lake)',
            },
            priceModifier: 15,
          },
          {
            id: 'chania-kissamos',
            label: {
              el: 'Χανιά + Κίσσαμος (Παραλιακή Χαλάρωση)',
              de: 'Chania + Kissamos (Küsten-Entspannung)',
              en: 'Chania + Kissamos (Coastal Vibe)',
            },
            priceModifier: 0,
          },
        ],
      },
    ],
    availableAddOns: [
      {
        id: 'city-food-tour',
        price: 45,
        name: {
          el: '+45€ Gastronomy & Street Food Walking Tour',
          de: '+45€ Kulinarische Altstadt-Führung mit Kostproben',
          en: '+45€ Old Town Gastronomy & Street Food Tour',
        },
        description: {
          el: 'Δοκιμάστε μπουγάτσα, καλτσούνια, ντάκο και παραδοσιακή γραβιέρα με ντόπιο ξεναγό.',
          de: 'Probieren Sie Bougatsa, Kaltsounia, Dakos und kretischen Käse mit einem Guide.',
          en: 'Taste fresh Bougatsa, Kaltsounia pastries, Dakos, and aged cheeses with a guide.',
        },
      },
      {
        id: 'nightlife-extension',
        price: 100,
        name: {
          el: '+100€ Nightlife Extension (Βραδινή Επιστροφή)',
          de: '+100€ Abendentwicklung & Späte Rückfahrt',
          en: '+100€ Evening & Nightlife Return Extension',
        },
        description: {
          el: 'Παρατείνατε την παραμονή σας για βραδινό κοκτέιλ και δείπνο με επιστροφή αργά το βράδυ.',
          de: 'Verlängern Sie Ihren Aufenthalt für Drinks & Abendessen mit harter Rückfahrt.',
          en: 'Extend your city trip for late-night cocktails & dining with midnight return transport.',
        },
      },
    ],
    included: {
      el: [
        'Μεταφορά από/προς το κατάλυμά σας',
        'Χάρτης πόλης & προσωπικές προτάσεις αγορών',
        'Φύλαξη των αγορών σας στο όχημα',
        'Δωρεάν εμφιαλωμένο νερό & Wi-Fi'
      ],
      de: [
        'Transfer von/zu Ihrer Unterkunft',
        'Stadtplan & persönliche Shoppingtipps',
        'Sichere Aufbewahrung Ihrer Einkäufe im Fahrzeug',
        'Kostenloses Wasser & Wi-Fi im Fahrzeug'
      ],
      en: [
        'Pick-up & drop-off at your door',
        'Customized city map & local shopping recommendations',
        'Secure storage of your shopping bags in the van',
        'Chilled bottled water & onboard Wi-Fi'
      ],
    },
  },
  {
    id: 'food-tour-cretan',
    title: {
      el: 'Αυθεντικό & Custom Cretan Food Tour',
      de: 'Authentische & Individuelle Kulinarische Tour',
      en: 'Authentic & Custom Cretan Food Tour',
    },
    subtitle: {
      el: 'Αυθεντικό πρόγραμμα 5 στάσεων γεύσης ή Πλήρως Custom επιλογή από εσάς',
      de: '5-Stopp-Kulturtour oder vollkommen individuell zusammengestellt',
      en: '5-Stop authentic culinary journey OR custom designed by you',
    },
    description: {
      el: 'Στο "Αυθεντικό Food Tour" ξεκινάμε με παραδοσιακό πρωινό (μπουγάτσα/καλτσούνια), προχωράμε σε 1-2 spots στη συνέχεια για τυροκομικά & ελαιόλαδο, και ακόμα 2 spots για τη συνέχεια των γευμάτων (μεζέδες, παραδοσιακά πιάτα & γλυκό - προσαρμόζεται πλήρως στον πελάτη). Στο "Custom Food Tour", σας δίνουμε όλες τις διαθέσιμες επιλογές και εσείς κάνετε την επιλογή και τον καθορισμό του δικού σας Food Tour!',
      de: 'Bei der "Authentischen Food Tour" starten wir mit Frühstück, gefolgt von 1-2 Spots für Käse & Öl und weiteren 2 Spots für Hauptspeisen (vollständig anpassbar). Bei der "Custom Food Tour" wählen Sie Ihre Favoriten selbst!',
      en: 'On the "Authentic Food Tour" we start with traditional breakfast, proceed to 1-2 spots for artisanal cheeses & oil, plus 2 more stops for full meals & dessert (fully adaptable). On the "Custom Food Tour", we give you all available options and you build your custom Food Tour!',
    },
    highlights: {
      el: [
        'Ξεκίνημα με αυθεντικό κρητικό πρωινό (μπουγάτσα & καλτσούνια)',
        '1-2 spots για δοκιμή τυριών, αλλαντικών & έξτρα παρθένου ελαιολάδου',
        '2 επιπλέον spots για συνέχεια γευμάτων, παραδοσιακούς μεζέδες & επιδόρπιο',
        'Πλήρης προσαρμογή στον πελάτη ή επιλογή Custom Food Tour'
      ],
      de: [
        'Start mit traditionellem kretischen Frühstück',
        '1-2 Verkostungsstopps für Käse, Wurstwaren & Olivenöl',
        '2 weitere Stopps für Hauptgerichte, Meze & Nachspeisen',
        'Vollständige Anpassung an Ihre Wünsche oder Custom Food Tour'
      ],
      en: [
        'Kick-off with authentic Cretan breakfast (Bougatsa & pastries)',
        '1-2 spots for artisan cheeses, charcuterie & extra virgin olive oil',
        '2 additional spots for hearty traditional meal courses & dessert',
        'Tailored to your preferences or custom Food Tour itinerary'
      ],
    },
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=80',
    basePrice: 95,
    priceNote: {
      el: 'Ανά άτομο (Περιλαμβάνει όλες τις γεύσεις & μεταφορά)',
      de: 'Pro Person (Inkl. aller Verkostungen & Transfer)',
      en: 'Per person (Includes all food tastings & transport)',
    },
    duration: {
      el: '6 - 8 Ώρες',
      de: '6 - 8 Stunden',
      en: '6 - 8 Hours',
    },
    badges: {
      shuttle: true,
      safety: true,
      food: true,
      beach: false,
      vip: true,
    },
    optionGroups: [
      {
        id: 'food-tour-selection',
        title: {
          el: 'Επιλογή Τύπου Food Tour:',
          de: 'Wählen Sie den Food Tour Typ:',
          en: 'Select Food Tour Option:',
        },
        choices: [
          {
            id: 'authentic-food-tour',
            label: {
              el: 'Αυθεντικό Food Tour (Πρωινό ➔ 1-2 spots ➔ 2 spots γευμάτων - Προσαρμόσιμο)',
              de: 'Authentische Food Tour (Frühstück ➔ 1-2 Spots ➔ 2 Essens-Spots)',
              en: 'Authentic Food Tour (Breakfast ➔ 1-2 tasting spots ➔ 2 meal stops)',
            },
            priceModifier: 0,
          },
          {
            id: 'custom-food-tour',
            label: {
              el: 'Custom Food Tour (+20€ - Επιλογή & καθορισμός στάσεων από τον πελάτη)',
              de: 'Custom Food Tour (+20€ - Ihre eigene Wahl & Zuteilung der Stopps)',
              en: 'Custom Food Tour (+20€ - Choose & define your own tasting spots)',
            },
            priceModifier: 20,
          },
        ],
      },
    ],
    availableAddOns: [
      {
        id: 'wine-pairing-add',
        price: 30,
        name: {
          el: '+30€ Wine & Raki Tasting Upgrade',
          de: '+30€ Wein- & Raki-Verkostungs-Upgrade',
          en: '+30€ Wine & Artisanal Raki Tasting Upgrade',
        },
        description: {
          el: 'Συνοδέψτε κάθε στάση με επιλεγμένα κρητικά κρασιά και τοπική τσικουδιά.',
          de: 'Begleiten Sie jeden Stopp mit ausgewählten kretischen Weinen und Tsikoudia.',
          en: 'Pair every food stop with boutique Cretan wines and single-estate tsikoudia.',
        },
      },
    ],
    included: {
      el: [
        'Μεταφορά από/προς το κατάλυμά σας',
        'Όλα τα γεύματα, πρωινό, δοκιμές & επιδόρπια',
        'Εμφιαλωμένο νερό & δροσιστικά αναψυκτικά στο van',
        'Προσωπικός οδηγός & γαστρονομικός συνοδός'
      ],
      de: [
        'Transfer von/zu Ihrer Unterkunft',
        'Alle Speisen, Frühstück, Verkostungen & Desserts',
        'Kühles Wasser & Erfrischungen im Van',
        'Persönlicher Fahrer & kulinarischer Begleiter'
      ],
      en: [
        'Door-to-door hotel transfers in air-conditioned van',
        'All breakfast items, tasting stops, full meals & desserts',
        'Chilled bottled water & refreshments onboard',
        'Personal local driver & culinary host'
      ],
    },
    itinerary: [
      {
        timeOfDay: { el: '09:00 - 10:00', de: '09:00 - 10:00', en: '09:00 - 10:00' },
        title: { el: 'Στάση 1: Αυθεντικό Κρητικό Πρωινό', de: 'Stopp 1: Kretisches Frühstück', en: 'Stop 1: Authentic Cretan Breakfast' },
        description: { el: 'Ζεστή μπουγάτσα Χανίων, καλτσούνια με μυζήθρα & ελληνικός καφές στη χόβολη.', de: 'Warme Bougatsa, Kaltsounia-Gebäck und kretischer Kaffee.', en: 'Fresh artisanal Bougatsa pastry, sweet cheese Kaltsounia & Greek coffee.' },
        iconType: 'food',
      },
      {
        timeOfDay: { el: '10:30 - 12:00', de: '10:30 - 12:00', en: '10:30 - 12:00' },
        title: { el: 'Στάσεις 2-3: Τυροκομεία & Ελαιόλαδο', de: 'Stopps 2-3: Käse & Olivenöl', en: 'Stops 2-3: Artisan Cheese & Olive Oil' },
        description: { el: 'Δοκιμή παλαιωμένης γραβιέρας, αλλαντικών (απάκι) & έξτρα παρθένου ελαιολάδου.', de: 'Verkostung von Graviera-Käse, Apaki-Schinken und nativem Olivenöl.', en: 'Tasting of award-winning Graviera, cured Apaki pork & EVOO olive oil.' },
        iconType: 'activity',
      },
      {
        timeOfDay: { el: '12:30 - 14:30', de: '12:30 - 14:30', en: '12:30 - 14:30' },
        title: { el: 'Στάσεις 4-5: Κύριο Γεύμα & Επιδόρπιο', de: 'Stopps 4-5: Hauptspeisen & Dessert', en: 'Stops 4-5: Feast Meal & Dessert' },
        description: { el: 'Παραδοσιακά πιάτα (αντικριστό, ντάκος), τσικουδιά & σπιτικοί λουκουμάδες.', de: 'Traditionelle Hauptgerichte, Tsikoudia und frische Loukoumades.', en: 'Feast of Cretan specialties, slow-cooked meats, raki toasts & honey loukoumades.' },
        iconType: 'food',
      },
      {
        timeOfDay: { el: '15:00 - 16:00', de: '15:00 - 16:00', en: '15:00 - 16:00' },
        title: { el: 'Επιστροφή στο Κατάλυμα', de: 'Rückfahrt zur Unterkunft', en: 'Drop-off & Culinary Gift' },
        description: { el: 'Άνετη επιστροφή με το van και αναμνηστικό δώρο τοπικής γεύσης.', de: 'Bequemer Rücktransfer und kleines kulinarisches Souvenir.', en: 'Relaxed return transport with a complimentary local delicacy gift.' },
        iconType: 'return',
      },
    ],
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Markus & Elena S.',
    location: 'München, Germany 🇩🇪',
    rating: 5,
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    comment: {
      el: 'Ο Μάνος ήταν εκπληκτικός! Μιλάει άπταιστα Γερμανικά και μας έκανε να νιώσουμε σαν οικογένεια. Η εκδρομή στη Σαμαριά ήταν τέλεια οργανωμένη χωρίς κανένα άγχος.',
      de: 'Manos war absolut großartig! Er spricht fließend Deutsch und gab uns das Gefühl, wie Familie behandelt zu werden. Die Samaria-Tour war perfekt organisiert!',
      en: 'Manos was exceptional! He speaks fluent German and treated us like family. The Samaria Gorge trip was organized flawlessly without any stress!',
    },
  },
  {
    id: '2',
    author: 'David & Sarah W.',
    location: 'London, UK 🇬🇧',
    rating: 5,
    date: 'July 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    comment: {
      el: 'Το Ελαφονήσι με τον Μάνο ήταν η καλύτερη μέρα των διακοπών μας! Το όχημα ήταν πεντακάθαρο, οι μεζέδες στο ηλιοβασίλεμα φανταστικοί και η οδήγησή του απόλυτα ασφαλής.',
      de: 'Der Strandtag in Elafonisi mit Manos war der Höhepunkt unseres Urlaubs! Das Fahrzeug war makellos, die Mezedes fantastisch und die Fahrt sehr sicher.',
      en: 'Elafonisi beach day with Manos was the absolute highlight of our holiday! The vehicle was pristine, sunset snacks delicious, and driving super safe.',
    },
  },
  {
    id: '3',
    author: 'Γιώργος & Μαρία Κ.',
    location: 'Αθήνα, Ελλάδα 🇬🇷',
    rating: 5,
    date: 'July 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    comment: {
      el: 'Αυθεντική κρητική φιλοξενία! Ο Μάνος μας πήγε σε ορεινά χωριά που δεν θα βρίσκαμε μόνοι μας. Το φαγητό στο καφενείο ήταν μοναδικό. Συνιστάται ανεπιφύλακτα!',
      de: 'Echte kretische Gastfreundschaft! Manos zeigte uns Bergdörfer, die wir alleine nie gefunden hätten. Das Essen im Kafeneio war unvergesslich.',
      en: 'Authentic Cretan hospitality! Manos took us to mountain villages we would never have found on our own. The Kafeneio meal was unforgettable!',
    },
  },
];
