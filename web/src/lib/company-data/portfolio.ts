import { Locale } from "../i18n/dictionaries";

export const COMPANY_INFO = {
  name: "Renovo Painting Solutions",
  legacyName: "Renovo Painting Solutions",
  director: "Raul Burgos",
  phoneDisplay: "(602) 550-4369",
  phoneHref: "tel:+16025504369",
  emailGeneral: "contact@renovoaz.com",
  emailDirector: "raul@renovoaz.com",
  address: {
    street: "2231 W Shangri La Rd, Ste K-L",
    city: "Phoenix",
    state: "AZ",
    zip: "85029",
    full: "2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029",
  },
  experienceYears: 10,
  logoPath: "/assets/brand/renovo-logo-negro.png",
  wordpressOrigin: "https://cabinetryaz.wordpress.com/",
  googleMapsUrl: "https://maps.google.com/?q=2231+W+Shangri+La+Rd,+Phoenix,+AZ+85029",
};

export interface BeforeAfterPair {
  id: string;
  code: string;
  category: "kitchen" | "entry-door";
  title: Record<Locale, string>;
  beforeImage: string;
  afterImage: string;
  systemUsed: Record<Locale, string>;
  completionDays: number;
}

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "pair-01-kitchen",
    code: "TRN-01 // KITCHEN REFINISHING",
    category: "kitchen",
    title: {
      en: "Full Kitchen Cabinet Conversion: Dark Stained Oak to Catalyzed Alabaster Shaker",
      es: "Conversión Integral de Cocina: Encino Oscuro a Shaker Alabastro Catalizado",
    },
    beforeImage: "/assets/before-after/pair-01-kitchen-before.jpg",
    afterImage: "/assets/before-after/pair-01-kitchen-after.jpg",
    systemUsed: {
      en: "Degreasing + Tannin-Block Isolante Primer + 2K Polyurethane Satin",
      es: "Desengrase Profundo + Primer Bloqueador de Taninos + Poliuretano 2K Satinado",
    },
    completionDays: 6,
  },
  {
    id: "pair-02-double-door",
    code: "TRN-02 // CARVED ENTRY DOOR",
    category: "entry-door",
    title: {
      en: "Sun-Weathered Carved Double Entry Door Restoration",
      es: "Restauración de Puerta Principal Doble Labrada Expuesta al Sol",
    },
    beforeImage: "/assets/before-after/pair-02-double-door-before.jpg",
    afterImage: "/assets/before-after/pair-02-double-door-after.jpg",
    systemUsed: {
      en: "Full Strip & Sanding + Custom Espresso Penetrating Stain + Marine UV Topcoat",
      es: "Lijado Integral + Tinta Espresso Personalizada + Barniz Marino con Filtro UV",
    },
    completionDays: 3,
  },
  {
    id: "pair-03-glass-door",
    code: "TRN-03 // LEADED GLASS ENTRY",
    category: "entry-door",
    title: {
      en: "Stepped Leaded-Glass Entry Door: Golden Oak to Deep Bronze-Anthracite",
      es: "Puerta con Vitral Escalonado: De Encino Dorado a Bronce Antracita Profundo",
    },
    beforeImage: "/assets/before-after/pair-03-glass-door-before.jpg",
    afterImage: "/assets/before-after/pair-03-glass-door-after.jpg",
    systemUsed: {
      en: "Precision Glass Masking + Bonding Primer + Exterior Urethane Alkyd Enamel",
      es: "Enmascarado de Precisión en Vitrales + Primer de Anclaje + Esmalte Uretano Exterior",
    },
    completionDays: 2,
  },
  {
    id: "pair-04-oak-door",
    code: "TRN-04 // 6-PANEL OAK DOOR",
    category: "entry-door",
    title: {
      en: "6-Panel Solid Oak Entry Door: Faded Red Stain to Forged Carbon Satin",
      es: "Puerta Sólida de 6 Paneles: De Tinta Rojiza Desgastada a Negro Carbón Satinado",
    },
    beforeImage: "/assets/before-after/pair-04-oak-door-before.jpg",
    afterImage: "/assets/before-after/pair-04-oak-door-after.jpg",
    systemUsed: {
      en: "Grain-Preserving Prep + 2K Exterior Satin Obsidian Finish",
      es: "Preparación a Veta Abierta + Acabado Exterior 2K Negro Obsidiana Satinado",
    },
    completionDays: 2,
  },
];

export const PROJECT_01_DOCUMENTARY = {
  code: "PRJ-01 // FULL SITE DOCUMENTARY",
  title: {
    en: "Phoenix Residence: Dual-Tone Graphite Island & Perimeter Kitchen Installation",
    es: "Residencia en Phoenix: Instalación de Cocina Perimetral e Isla en Grafito y Latón",
  },
  beforeImages: Array.from({ length: 6 }, (_, i) => `/assets/before-after/project-01-before/before-${String(i + 1).padStart(2, "0")}.jpg`),
  afterImages: Array.from({ length: 14 }, (_, i) => `/assets/before-after/project-01-after/after-${String(i + 1).padStart(2, "0")}.jpg`),
};

export interface CustomFurnitureSpec {
  id: string;
  code: string;
  image: string;
  category: "entertainment" | "wet-bar" | "vanity" | "millwork";
  title: Record<Locale, string>;
  materialSpec: Record<Locale, string>;
  dimensionsSpec: string;
  hotspots: {
    xPercent: number;
    yPercent: number;
    label: Record<Locale, string>;
    detail: Record<Locale, string>;
  }[];
}

export const FEATURED_CUSTOM_FURNITURE: CustomFurnitureSpec[] = [
  {
    id: "custom-arch-oak",
    code: "CSM-01 // ARCHED WHITE OAK BUILT-INS",
    image: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
    category: "entertainment",
    title: {
      en: "Twin Arched White Oak Fireplace Built-Ins with Brass Picture Lighting",
      es: "Nichos Gemelos Arqueados en Encino Blanco con Iluminación en Latón",
    },
    materialSpec: {
      en: "Rift-Cut White Oak Veneer & Solid Stiles + Natural Matte Clear Coat",
      es: "Encino Blanco Natural Seleccionado + Barniz Acrílico Mate Natural",
    },
    dimensionsSpec: "38mm Thick Shelving // Custom Radius Arch",
    hotspots: [
      {
        xPercent: 18,
        yPercent: 40,
        label: {
          en: "CNC Radiused Solid White Oak Arch",
          es: "Arco Superior en Encino Blanco Maquinado CNC",
        },
        detail: {
          en: "Grain-matched curved upper casing with integrated wiring channel for brass picture lights.",
          es: "Cabezal curvo con veta continua y canal oculto para iluminación decorativa en latón.",
        },
      },
      {
        xPercent: 18,
        yPercent: 58,
        label: {
          en: "38mm Floating Adjustable Display Shelves",
          es: "Repisas de 38mm con Perforación Milimétrica",
        },
        detail: {
          en: "Heavy-duty concealed shelf pins engineered to prevent sag under art and book loads.",
          es: "Soportes ocultos de alta carga en costados perforados con precisión CNC.",
        },
      },
      {
        xPercent: 18,
        yPercent: 78,
        label: {
          en: "Recessed Shaker Base Doors with Bookmatched Grain",
          es: "Puertas Inferiores Shaker con Veta Continua",
        },
        detail: {
          en: "Concealed soft-close Blum hinges with 3mm architectural reveals.",
          es: "Bisagras ocultas de cierre suave calibradas a 3mm de entrecalle.",
        },
      },
    ],
  },
  {
    id: "custom-white-entertainment",
    code: "CSM-02 // SHIPLAP MEDIA WALL",
    image: "/assets/blueprints-and-docs/custom-furniture-07.jpg",
    category: "entertainment",
    title: {
      en: "Full-Wall Shaker Entertainment Center with Vertical Shiplap TV Niche",
      es: "Centro de Entretenimiento Shaker de Muro Completo con Respaldo Alistonado",
    },
    materialSpec: {
      en: "Hard Maple Frame + MDF Center Panels + 2K Gallery Alabaster Lacquer",
      es: "Marco en Maple Sólido + Paneles MDF + Laca Catalizada 2K Alabastro",
    },
    dimensionsSpec: "10-Drawer Lower Bank + Acoustic Perforated Doors",
    hotspots: [
      {
        xPercent: 50,
        yPercent: 45,
        label: {
          en: "Vertical V-Groove Millwork TV Backpanel",
          es: "Panel Posterior Alistonado Vertical con Salida Multimedia",
        },
        detail: {
          en: "Recessed power and low-voltage conduit box centered for flush wall-mount displays.",
          es: "Registros eléctricos y de datos integrados al centro para pantallas empotradas.",
        },
      },
      {
        xPercent: 78,
        yPercent: 38,
        label: {
          en: "Diamond-Pattern CNC Acoustic Ventilation Cutouts",
          es: "Perforación CNC en Patrón Diamante para Ventilación de Audio/Video",
        },
        detail: {
          en: "Allows airflow and IR signal transmission for concealed amplifiers and media consoles.",
          es: "Permite disipación térmica de equipos de audio y video sin abrir las puertas.",
        },
      },
      {
        xPercent: 78,
        yPercent: 80,
        label: {
          en: "Double-Bevel Shaker Drawers with Solid Brass Pulls",
          es: "Cajoneras Shaker con Herrajes en Latón Cepillado",
        },
        detail: {
          en: "Full-extension undermount slides rated for 100 lbs per drawer box.",
          es: "Correderas ocultas de extensión total con capacidad de 100 lb por cajón.",
        },
      },
    ],
  },
  {
    id: "custom-oak-wine-bar",
    code: "CSM-03 // ILLUMINATED WINE & BEVERAGE CREDENZA",
    image: "/assets/blueprints-and-docs/custom-furniture-19.jpg",
    category: "wet-bar",
    title: {
      en: "Custom White Oak Wine & Beverage Bar with Illuminated Glass Display",
      es: "Cava y Barra de Bebidas en Encino con Vitrina Superior Iluminada",
    },
    materialSpec: {
      en: "Cerused White Oak + Tempered Glass Shelves + Dual Undercounter Coolers",
      es: "Encino Blanco + Repisas de Cristal Templado + Doble Enfriador Empotrado",
    },
    dimensionsSpec: "4-Door Upper Hutch + Quartz Countertop",
    hotspots: [
      {
        xPercent: 35,
        yPercent: 30,
        label: {
          en: "2700K Warm LED Interior Cabinet Illumination",
          es: "Iluminación Interior LED Cálida 2700K en Vitrina",
        },
        detail: {
          en: "Concealed aluminum LED channels routed into the cabinet stiles for glare-free stemware display.",
          es: "Perfiles difusores LED empotrados en los costados para iluminar cristalería sin deslumbramiento.",
        },
      },
      {
        xPercent: 35,
        yPercent: 80,
        label: {
          en: "Dual Built-In Wine & Beverage Refrigerator Alcoves",
          es: "Doble Nicho Acondicionado para Cavas Refrigeradas",
        },
        detail: {
          en: "Custom-fitted ventilation clearances with matching Shaker drawer stack on the right.",
          es: "Holguras de ventilación precisas con módulo lateral de cajones a juego.",
        },
      },
    ],
  },
  {
    id: "custom-espresso-led-bar",
    code: "CSM-04 // FLOATING ESPRESSO LED NICHE",
    image: "/assets/blueprints-and-docs/custom-furniture-16.jpg",
    category: "wet-bar",
    title: {
      en: "Recessed Espresso Wood Bar Shelving with Integrated Linear & Puck LED",
      es: "Estantería de Bar en Madera Espresso con Iluminación Lineal y Spot LED",
    },
    materialSpec: {
      en: "Quarter-Sawn Oak Veneer + Espresso Stain + Concealed Aluminum LED Channels",
      es: "Chapa de Encino Corte Recto + Tinta Espresso + Perfiles LED Ocultos",
    },
    dimensionsSpec: "50mm Thick Floating Shelves // 2700K Warm LED",
    hotspots: [
      {
        xPercent: 52,
        yPercent: 28,
        label: {
          en: " flush-Mounted Upper Soffit Downlight",
          es: "Cabezal Superior con Spot LED Empotrado",
        },
        detail: {
          en: "Mitered top valance concealing transformers and wiring behind the wood backpanel.",
          es: "Cabezal a inglete que oculta drivers y cableado detrás del respaldo de madera.",
        },
      },
      {
        xPercent: 48,
        yPercent: 56,
        label: {
          en: "Routed Under-Shelf Diffused LED Strips",
          es: "Tiras LED Difusas Maquinadas Bajo Cada Repisa",
        },
        detail: {
          en: "Continuous warm wash across the vertical wood grain backpanel.",
          es: "Baño de luz continuo que resalta la veta vertical del respaldo.",
        },
      },
    ],
  },
];

export const ALL_CUSTOM_FURNITURE_IMAGES = Array.from(
  { length: 19 },
  (_, i) => `/assets/blueprints-and-docs/custom-furniture-${String(i + 1).padStart(2, "0")}.jpg`
);

export const CUSTOM_FURNITURE_VIDEO = "/assets/blueprints-and-docs/custom-furniture-video-01.mp4";

export const KITCHEN_GALLERY_IMAGES = Array.from(
  { length: 16 },
  (_, i) => `/assets/kitchens/kitchen-${String(i + 1).padStart(2, "0")}.jpg`
);

export const INTERIOR_PAINTING_IMAGES = Array.from(
  { length: 25 },
  (_, i) => `/assets/painting-interior/interior-${String(i + 1).padStart(2, "0")}.jpg`
);

export const EXTERIOR_PAINTING_IMAGES = [
  "/assets/painting-exterior/exterior-01.jpg",
  "/assets/painting-exterior/exterior-02.jpg",
];

export const EXTERIOR_PAINTING_VIDEOS = [
  "/assets/painting-exterior/exterior-video-01.mp4",
  "/assets/painting-exterior/exterior-video-02.mp4",
  "/assets/painting-exterior/exterior-video-03.mp4",
  "/assets/painting-exterior/exterior-video-04.mp4",
];
