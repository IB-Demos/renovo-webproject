import { Locale } from "../i18n/dictionaries";

export interface DoorProfileSpec {
  id: string;
  code: string;
  name: Record<Locale, string>;
  stileWidthMm: number;
  panelDepthMm: number;
  construction: Record<Locale, string>;
  bestFor: Record<Locale, string>;
  svgType: "shaker" | "slim-shaker" | "slab" | "fluted" | "raised";
}

export interface PigmentSpec {
  id: string;
  code: string;
  brandRef: string;
  name: Record<Locale, string>;
  hex: string;
  lrv: number;
  undertone: Record<Locale, string>;
  application: ("cabinet" | "interior" | "exterior")[];
}

export interface SheenSpec {
  id: string;
  code: string;
  name: Record<Locale, string>;
  glossUnits: string;
  chemicalSystem: Record<Locale, string>;
  reflectionFactor: number;
}

export interface HardwareSpec {
  id: string;
  code: string;
  name: Record<Locale, string>;
  finishHex: string;
  alloy: Record<Locale, string>;
}

export interface BlueprintHotspot {
  id: string;
  code: string;
  xPercent: number;
  yPercent: number;
  title: Record<Locale, string>;
  specMetric: string;
  detail: Record<Locale, string>;
}

export const DOOR_PROFILES: DoorProfileSpec[] = [
  {
    id: "slim-shaker",
    code: "PRF-01 // SLIM-SHAKER",
    name: {
      en: "Architectural Micro-Shaker (22mm)",
      es: "Micro-Shaker Arquitectónico (22mm)",
    },
    stileWidthMm: 22,
    panelDepthMm: 6.5,
    construction: {
      en: "5-piece mortise & tenon frame with MDF/Maple hybrid core to prevent joint hairline cracking.",
      es: "Marco de 5 piezas con ensamble espiga-mortaja y núcleo híbrido Maple/MDF anti-fisuras.",
    },
    bestFor: {
      en: "Contemporary transitional kitchens seeking crisp shadow lines.",
      es: "Cocinas contemporáneas de transición que buscan líneas de sombra definidas.",
    },
    svgType: "slim-shaker",
  },
  {
    id: "classic-shaker",
    code: "PRF-02 // STD-SHAKER",
    name: {
      en: "Heritage 65mm Recessed Shaker",
      es: "Shaker Clásico de 65mm",
    },
    stileWidthMm: 65,
    panelDepthMm: 9.5,
    construction: {
      en: "Solid Hard Maple stiles and rails with 90-degree crisp interior bevel for catalyzed spraying.",
      es: "Largueros y travesaños de Maple Sólido con bisel interior a 90° optimizado para laca catalizada.",
    },
    bestFor: {
      en: "Timeless residential kitchens and high-traffic butler pantries.",
      es: "Cocinas residenciales atemporales y alacenas de alto tráfico.",
    },
    svgType: "shaker",
  },
  {
    id: "monolith-slab",
    code: "PRF-03 // EURO-SLAB",
    name: {
      en: "Monolithic Zero-Edge Slab",
      es: "Slab Monolítico Sin Marco",
    },
    stileWidthMm: 0,
    panelDepthMm: 19,
    construction: {
      en: "19mm calibrated architectural grade core with laser-fused 1mm ABS edgebanding.",
      es: "Tablero calibrado de 19mm de grado arquitectónico con cubrecanto ABS de 1mm termo-fusionado.",
    },
    bestFor: {
      en: "Minimalist European layouts and high-contrast island volumes.",
      es: "Diseños minimalistas europeos y volúmenes de isla de alto contraste.",
    },
    svgType: "slab",
  },
  {
    id: "reeded-fluted",
    code: "PRF-04 // CNC-FLUTED",
    name: {
      en: "CNC Acoustic Fluted Reed",
      es: "Alistonado / Fluted CNC",
    },
    stileWidthMm: 18,
    panelDepthMm: 12,
    construction: {
      en: "14mm pitch CNC-milled vertical channels sealed with 3-coat high-build isolante primer.",
      es: "Canales verticales maquinados por CNC a paso de 14mm sellados con fondo aislante de alto espesor.",
    },
    bestFor: {
      en: "Statement kitchen islands, bar fronts, and architectural focal walls.",
      es: "Islas centrales protagonistas, barras de bar y muros arquitectónicos focales.",
    },
    svgType: "fluted",
  },
];

export const ARCHITECTURAL_PIGMENTS: PigmentSpec[] = [
  {
    id: "gesso-alabaster",
    code: "RNV-01",
    brandRef: "SW 7008 // Alabaster Equiv.",
    name: {
      en: "Gallery Alabaster",
      es: "Alabastro de Galería",
    },
    hex: "#F2EFE9",
    lrv: 82,
    undertone: {
      en: "Balanced warm chalk without yellow drift under 3000K LED",
      es: "Tiza cálida balanceada sin viraje amarillo bajo luz LED 3000K",
    },
    application: ["cabinet", "interior", "exterior"],
  },
  {
    id: "limestone-putty",
    code: "RNV-02",
    brandRef: "F&B No. 2008 // Dimity Equiv.",
    name: {
      en: "Milled Limestone",
      es: "Piedra Caliza Molida",
    },
    hex: "#DEDAD2",
    lrv: 68,
    undertone: {
      en: "Architectural stone neutral; bridges Carrara marble and white oak",
      es: "Neutro pétreo arquitectónico; conecta mármol Carrara y encino blanco",
    },
    application: ["cabinet", "interior", "exterior"],
  },
  {
    id: "cast-iron-obsidian",
    code: "RNV-03",
    brandRef: "SW 7069 // Iron Ore Equiv.",
    name: {
      en: "Forged Anthracite",
      es: "Antracita Forjado",
    },
    hex: "#2B2D2F",
    lrv: 6,
    undertone: {
      en: "Deep carbon slate with subtle graphite mineral reflection",
      es: "Pizarra carbón profunda con sutil reflexión mineral de grafito",
    },
    application: ["cabinet", "interior", "exterior"],
  },
  {
    id: "cobalt-atelier",
    code: "RNV-04",
    brandRef: "BM HC-154 // Hale Navy Equiv.",
    name: {
      en: "Naval Atelier Blue",
      es: "Azul Naval de Taller",
    },
    hex: "#26323F",
    lrv: 8,
    undertone: {
      en: "Grounded maritime indigo-slate; eliminates purple cast in daylight",
      es: "Azul pizarra marítimo profundo; elimina subtonos violetas bajo luz solar",
    },
    application: ["cabinet", "interior", "exterior"],
  },
  {
    id: "cypress-mineral",
    code: "RNV-05",
    brandRef: "SW 6208 // Pewter Green Equiv.",
    name: {
      en: "Weathered Cypress",
      es: "Ciprés Mineral",
    },
    hex: "#4A554E",
    lrv: 14,
    undertone: {
      en: "Muted botanical sage-slate tailored for islands and exterior siding",
      es: "Verde salvia mineralizado ideal para islas centrales y fachadas exteriores",
    },
    application: ["cabinet", "interior", "exterior"],
  },
  {
    id: "oxide-terracotta",
    code: "RNV-06",
    brandRef: "RNV BESPOKE // Oxide 06",
    name: {
      en: "Kiln Oxide Terracotta",
      es: "Óxido Terracota de Horno",
    },
    hex: "#A84A32",
    lrv: 19,
    undertone: {
      en: "Earthy architectural iron oxide for front entry doors and statement millwork",
      es: "Óxido de hierro arquitectónico para puertas principales y carpintería de autor",
    },
    application: ["cabinet", "interior", "exterior"],
  },
];

export const SHEEN_SPECS: SheenSpec[] = [
  {
    id: "dead-flat-10",
    code: "SHN-10 // 10° MATTE",
    name: {
      en: "10° Architectural Matte (2K)",
      es: "Mate Arquitectónico 10° (2K)",
    },
    glossUnits: "10 GU @ 60°",
    chemicalSystem: {
      en: "2-Component Catalyzed Polyurethane (Anti-Fingerprint)",
      es: "Poliuretano Catalizado de 2 Componentes (Anti-Huella)",
    },
    reflectionFactor: 0.08,
  },
  {
    id: "factory-satin-25",
    code: "SHN-25 // 25° SATIN",
    name: {
      en: "25° KCMA Factory Satin",
      es: "Satinado de Fábrica 25° KCMA",
    },
    glossUnits: "25 GU @ 60°",
    chemicalSystem: {
      en: "Cross-Linked Acrylic Polyurethane (Maximum Washability)",
      es: "Poliuretano Acrílico Reticulado (Máxima Lavabilidad)",
    },
    reflectionFactor: 0.22,
  },
  {
    id: " architectural-semigloss-45",
    code: "SHN-45 // 45° SEMI-GLOSS",
    name: {
      en: "45° Exterior & Trim Enamel",
      es: "Semibrillo Estructural 45° (Molduras y Exterior)",
    },
    glossUnits: "45 GU @ 60°",
    chemicalSystem: {
      en: "UV-Stabilized Urethane Alkyd Enamel",
      es: "Esmalte Uretano Alquidal con Estabilizador UV",
    },
    reflectionFactor: 0.42,
  },
];

export const HARDWARE_SPECS: HardwareSpec[] = [
  {
    id: "knurled-brass",
    code: "HDW-01 // BRASS",
    name: {
      en: "Unlacquered Brushed Brass",
      es: "Latón Cepillado Sólido",
    },
    finishHex: "#C5A059",
    alloy: {
      en: "Solid C36000 Machined Brass Bar",
      es: "Barra de Latón Sólido Maquinado C36000",
    },
  },
  {
    id: "anodized-carbon",
    code: "HDW-02 // CARBON",
    name: {
      en: "Matte Anodized Black",
      es: "Negro Anodizado Mate",
    },
    finishHex: "#1F2022",
    alloy: {
      en: "Bead-Blasted 6061 Aircraft Aluminum",
      es: "Aluminio 6061 Micro-Granallado",
    },
  },
  {
    id: "brushed-stainless",
    code: "HDW-03 // INOX",
    name: {
      en: "316 Architectural Stainless",
      es: "Acero Inoxidable 316 Cepillado",
    },
    finishHex: "#B8BDC2",
    alloy: {
      en: "Marine-Grade 316 Brushed Steel",
      es: "Acero Grado Marino 316 Cepillado",
    },
  },
];

export const BLUEPRINT_HOTSPOTS: BlueprintHotspot[] = [
  {
    id: "carcass-core",
    code: "NODE 01 // CARCASS",
    xPercent: 22,
    yPercent: 32,
    title: {
      en: "19mm (3/4\") Baltic Birch Plywood Box",
      es: "Estructura en Plywood de Abedul 19mm (3/4\")",
    },
    specMetric: "13-Ply Void-Free Core",
    detail: {
      en: "Zero particleboard. Every cabinet carcass is CNC-nested from furniture-grade 3/4\" plywood with blind dado joinery.",
      es: "Cero aglomerado. Cada módulo se corta en CNC sobre triplay de 3/4\" grado ebanistería con ensambles ocultos.",
    },
  },
  {
    id: "coating-chemistry",
    code: "NODE 02 // 2K FINISH",
    xPercent: 54,
    yPercent: 44,
    title: {
      en: "4-Stage Catalyzed 2K Polyurethane Coating",
      es: "Sistema de Poliuretano Catalizado 2K en 4 Etapas",
    },
    specMetric: "4.2 Mil Dry Film Thickness (DFT)",
    detail: {
      en: "Chemical tannin-blocking primer followed by two high-build sanding sealers and a catalyzed topcoat that resists household acids, steam, and abrasion.",
      es: "Primer bloqueador de taninos seguido de dos manos de fondo de alto sólido y acabado catalizado resistente a vapor, grasa y abrasión.",
    },
  },
  {
    id: "blum-motion",
    code: "NODE 03 // HARDWARE",
    xPercent: 76,
    yPercent: 62,
    title: {
      en: "Blum Blumotion 110° Concealed Hinges & Undermount Slides",
      es: "Bisagras Ocultas Blum 110° y Correderas de Extensión Total",
    },
    specMetric: "100 lb Dynamic Load Rating",
    detail: {
      en: "6-way micro-adjustment concealed hardware calibrated to maintain uniform 3mm architectural reveals across all doors and drawers.",
      es: "Herrajes ocultos con micro-ajuste en 6 ejes calibrados para mantener entrecalles uniformes de 3mm en toda la cocina.",
    },
  },
  {
    id: "exterior-envelope",
    code: "NODE 04 // EXTERIOR PREP",
    xPercent: 35,
    yPercent: 74,
    title: {
      en: "HEPA Festool Extraction & Elastomeric Perimeter Sealing",
      es: "Lijado con Extracción HEPA Festool y Sellado Elastomérico",
    },
    specMetric: "99.97% Dust Capture // 0-VOC Interior",
    detail: {
      en: "For residential interior and exterior painting, all substrates undergo mechanical HEPA sanding, moisture meter verification (<12% MC), and elastomeric caulking.",
      es: "En pintura residencial interior y exterior, medimos humedad del sustrato (<12%), lijamos con extracción HEPA sin polvo y sellamos juntas con uretano.",
    },
  },
];
