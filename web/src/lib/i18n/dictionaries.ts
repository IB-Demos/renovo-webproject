export type Locale = "en" | "es";

export interface Dictionary {
  meta: {
    edition: string;
    tolerance: string;
    systemStatus: string;
    bilingualNotice: string;
  };
  nav: {
    home: string;
    services: string;
    kitchens: string;
    customFurniture: string;
    painting: string;
    transformations: string;
    studio: string;
    catalog: string;
    estimator: string;
    about: string;
    contact: string;
    sampleTray: string;
    bookConsult: string;
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlineItalic: string;
    headlinePart2: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    saveToTray: string;
    savedInTray: string;
  };
  sampleDrawer: {
    title: string;
    emptyHeadline: string;
    emptyBody: string;
    emptyAction: string;
    clearAll: string;
    sendToEstimator: string;
    closeLabel: string;
    itemAddedToast: string;
  };
  catalogSection: {
    headline: string;
    subhead: string;
    filterAll: string;
    filterCoatings: string;
    filterProfiles: string;
    filterSystems: string;
    addSample: string;
    removeSample: string;
  };
  estimatorSection: {
    headline: string;
    subhead: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    doorsLabel: string;
    drawersLabel: string;
    sqftLabel: string;
    tierEssential: string;
    tierArchitectural: string;
    tierBespoke: string;
    estimatedRangeLabel: string;
    timelineLabel: string;
    daysUnit: string;
    exportSpecCta: string;
  };
  workbench: {
    cabinet: {
      perimeterFinishLabel: string;
      islandFinishLabel: string;
      doorProfileLabel: string;
      hardwareLabel: string;
      sheenLevelLabel: string;
    };
    paint: {
      surfaceModeLabel: string;
      interiorMode: string;
      exteriorMode: string;
      primaryWallLabel: string;
      trimAndFasciaLabel: string;
      accentDoorLabel: string;
      lrvMetricLabel: string;
      vocMetricLabel: string;
    };
    blueprint: {
      toleranceSpec: string;
      hotspotInstruction: string;
    };
  };
  footer: {
    statement: string;
    navigationTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      edition: "PHOENIX, ARIZONA · 2231 W SHANGRI LA RD",
      tolerance: "OVER 10 YEARS OF CRAFTSMANSHIP",
      systemStatus: "CALL (602) 550-4369",
      bilingualNotice: "Switch language",
    },
    nav: {
      home: "Overview",
      services: "Disciplines",
      kitchens: "Kitchens & Cabinetry",
      customFurniture: "Custom Built-Ins",
      painting: "Fine Finishes",
      transformations: "Transformations",
      studio: "Studio & Estimator",
      catalog: "Materials",
      estimator: "Scope Estimator",
      about: "Workshop",
      contact: "Contact",
      sampleTray: "Design Selections",
      bookConsult: "Consultation",
    },
    hero: {
      eyebrow: "PHOENIX, ARIZONA · OVER A DECADE OF LUXURY CABINETRY & ARCHITECTURAL COATINGS",
      headlinePart1: "Bespoke Cabinetry &",
      headlineItalic: "Artisanal Finishes",
      headlinePart2: "Crafted for a Lifetime.",
      subhead:
        "From grain-matched white oak arched built-ins to velvet 2K catalyzed kitchens, Renovo designs, manufactures by hand, and paints luxury spaces across Arizona.",
      primaryCta: "Request a Consultation",
      secondaryCta: "Explore Our Portfolio",
      saveToTray: "Pin to Design Tray",
      savedInTray: "Pinned to Tray",
    },
    sampleDrawer: {
      title: "Your Design Selections",
      emptyHeadline: "Your design tray is currently empty.",
      emptyBody:
        "Explore our kitchens, custom furniture, and paint palettes to pin woods, colors, and profiles for your consultation.",
      emptyAction: "Explore Materials & Woods",
      clearAll: "Clear Tray",
      sendToEstimator: "Apply Selections to Estimator",
      closeLabel: "Close Tray",
      itemAddedToast: "Item saved to your Design Tray",
    },
    catalogSection: {
      headline: "Curated Architectural Finishes & Materials",
      subhead:
        "Physical hardwoods, factory-grade 2K catalyzed lacquers, and hand-patinated hardware. Pin samples to your tray to request an on-site sample kit.",
      filterAll: "All Materials",
      filterCoatings: "2K Lacquers",
      filterProfiles: "Door Profiles",
      filterSystems: "Hardware & Accents",
      addSample: "Pin to Tray",
      removeSample: "Remove",
    },
    estimatorSection: {
      headline: "Transparent Project Investment Estimator",
      subhead:
        "Define your project parameters to calculate realistic investment ranges for custom cabinetry, refacing, and architectural finishing in Phoenix.",
      step1Title: "1. Select Project Discipline",
      step2Title: "2. Define Scope & Dimensions",
      step3Title: "3. Choose Specification Tier",
      doorsLabel: "Cabinet Doors",
      drawersLabel: "Drawer Fronts",
      sqftLabel: "Wall Area (Sq Ft)",
      tierEssential: "Essential Refacing",
      tierArchitectural: "Architectural Precision",
      tierBespoke: "Heirloom Bespoke",
      estimatedRangeLabel: "Estimated Investment Range",
      timelineLabel: "Estimated Turnaround",
      daysUnit: "working days",
      exportSpecCta: "Schedule On-Site Verification",
    },
    workbench: {
      cabinet: {
        perimeterFinishLabel: "Perimeter Cabinet Finish",
        islandFinishLabel: "Kitchen Island Finish",
        doorProfileLabel: "Door Style Profile",
        hardwareLabel: "Hardware Pull Finish",
        sheenLevelLabel: "Catalyzed Sheen Level",
      },
      paint: {
        surfaceModeLabel: "Surface Environment",
        interiorMode: "Interior Living Space",
        exteriorMode: "Desert Exterior",
        primaryWallLabel: "Primary Wall Tone",
        trimAndFasciaLabel: "Trim & Millwork Enamel",
        accentDoorLabel: "Architectural Front Door Accent",
        lrvMetricLabel: "Light Reflectance Value (LRV)",
        vocMetricLabel: "Volatile Organic Compounds (VOC)",
      },
      blueprint: {
        toleranceSpec: "±0.5 mm Phoenix Workshop Precision",
        hotspotInstruction: "Click numbered hotspots to inspect joinery, concealed hardware, and finish specifications.",
      },
    },
    footer: {
      statement: "Handcrafted Custom Cabinetry, Bespoke Built-Ins & Fine Architectural Painting in Phoenix, Arizona.",
      navigationTitle: "Corporate Navigation",
      servicesTitle: "Master Disciplines",
      contactTitle: "Workshop & Contact",
      rights: "Renovo Painting Solutions. All rights reserved.",
    },
  },
  es: {
    meta: {
      edition: "PHOENIX, ARIZONA · 2231 W SHANGRI LA RD",
      tolerance: "MÁS DE 10 AÑOS DE EXPERIENCIA ARTESANAL",
      systemStatus: "LLAMA AL (602) 550-4369",
      bilingualNotice: "Cambiar idioma",
    },
    nav: {
      home: "Inicio",
      services: "Especialidades",
      kitchens: "Cocinas y Gabinetes",
      customFurniture: "Muebles a Medida",
      painting: "Acabados Finos",
      transformations: "Transformaciones",
      studio: "Estudio y Cotizador",
      catalog: "Materiales",
      estimator: "Cotizador",
      about: "Taller",
      contact: "Contacto",
      sampleTray: "Selecciones de Diseño",
      bookConsult: "Consulta",
    },
    hero: {
      eyebrow: "PHOENIX, ARIZONA · MÁS DE UNA DÉCADA EN EBANISTERÍA FINA Y PINTURA RESIDENCIAL",
      headlinePart1: "Ebanistería de Autor y",
      headlineItalic: "Acabados Finos",
      headlinePart2: "Hechos para Toda la Vida.",
      subhead:
        "Desde libreros arqueados en encino blanco hasta cocinas completas en laca catalizada 2K satinada, Renovo diseña, construye a mano e instala espacios únicos en todo Arizona.",
      primaryCta: "Agendar una Cita",
      secondaryCta: "Ver Portafolio de Obras",
      saveToTray: "Guardar en Mesa",
      savedInTray: "En tu Mesa",
    },
    sampleDrawer: {
      title: "Tus Selecciones de Diseño",
      emptyHeadline: "Tu mesa de diseño está vacía.",
      emptyBody:
        "Explora nuestras cocinas, muebles a medida y paletas de color para agregar las maderas y tonos que te enamoren.",
      emptyAction: "Explorar Maderas y Muestras",
      clearAll: "Vaciar Mesa",
      sendToEstimator: "Llevar al Cotizador",
      closeLabel: "Cerrar Mesa",
      itemAddedToast: "Elemento guardado en tu Mesa de Diseño",
    },
    catalogSection: {
      headline: "Maderas Nobles y Acabados de Autor",
      subhead:
        "Maderas reales, lacas poliuretano catalizadas 2K de taller y herrajes patinados a mano. Guarda muestras para solicitar tu kit físico a domicilio.",
      filterAll: "Todos los Materiales",
      filterCoatings: "Lacas 2K",
      filterProfiles: "Perfiles de Puerta",
      filterSystems: "Herrajes y Acentos",
      addSample: "Guardar Muestra",
      removeSample: "Quitar",
    },
    estimatorSection: {
      headline: "Cotizador Transparente de Proyecto",
      subhead:
        "Define los parámetros de tu proyecto para calcular rangos realistas de inversión en ebanistería, refacing y acabados en Phoenix.",
      step1Title: "1. Selecciona la Especialidad",
      step2Title: "2. Define Dimensiones y Alcance",
      step3Title: "3. Nivel de Especificación",
      doorsLabel: "Puertas de Gabinete",
      drawersLabel: "Frentes de Cajón",
      sqftLabel: "Área de Muros (Pies Cuadrados)",
      tierEssential: "Refacing Esencial",
      tierArchitectural: "Precisión Arquitectónica",
      tierBespoke: "Ebanistería de Autor",
      estimatedRangeLabel: "Rango Estimado de Inversión",
      timelineLabel: "Tiempo Estimado de Entrega",
      daysUnit: "días hábiles",
      exportSpecCta: "Agendar Levantamiento en Sitio",
    },
    workbench: {
      cabinet: {
        perimeterFinishLabel: "Acabado de Gabinetes Perimetrales",
        islandFinishLabel: "Acabado de Isla Central",
        doorProfileLabel: "Perfil y Estilo de Puertas",
        hardwareLabel: "Acabado de Jaladeras y Tiradores",
        sheenLevelLabel: "Nivel de Brillo Catalizado",
      },
      paint: {
        surfaceModeLabel: "Entorno de Superficie",
        interiorMode: "Interiores Residenciales",
        exteriorMode: "Exteriores Desérticos",
        primaryWallLabel: "Tono Principal de Muro",
        trimAndFasciaLabel: "Esmalte para Molduras y Zoclos",
        accentDoorLabel: "Color de Acento en Puerta Principal",
        lrvMetricLabel: "Valor de Reflectancia de Luz (LRV)",
        vocMetricLabel: "Compuestos Orgánicos Volátiles (VOC)",
      },
      blueprint: {
        toleranceSpec: "Precisión de ±0.5 mm en Taller Phoenix",
        hotspotInstruction: "Haz clic en los puntos numerados para inspeccionar ensambles, herrajes ocultos y acabados.",
      },
    },
    footer: {
      statement: "Fabricación de Gabinetes a Medida, Ebanistería de Autor y Pintura Residencial Fina en Phoenix, Arizona.",
      navigationTitle: "Navegación Corporativa",
      servicesTitle: "Especialidades",
      contactTitle: "Taller y Contacto",
      rights: "Renovo Painting Solutions. Todos los derechos reservados.",
    },
  },
};
