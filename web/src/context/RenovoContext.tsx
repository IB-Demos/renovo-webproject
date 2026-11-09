"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Locale, Dictionary, dictionaries } from "../lib/i18n/dictionaries";

export type CasaRoomId = "kitchen" | "living" | "entryway" | "patio";
export type LightingMode = "dawn" | "noon" | "sunset" | "night";

export interface ColorSwatchItem {
  id: string;
  name: Record<Locale, string>;
  hex: string;
  chemistry: Record<Locale, string>;
  lrv: number;
}

export interface CasaRoomDefinition {
  id: CasaRoomId;
  number: string;
  tag: Record<Locale, string>;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  description: Record<Locale, string>;
  defaultColorHex: string;
  palette: ColorSwatchItem[];
  associatedRoute: string;
}

export const CASA_ROOMS: Record<CasaRoomId, CasaRoomDefinition> = {
  kitchen: {
    id: "kitchen",
    number: "01",
    tag: {
      en: "Gourmet Kitchen & Island",
      es: "Cocina de Autor e Isla Central",
    },
    title: {
      en: "Custom Kitchens & Cabinetry",
      es: "Cocinas a Medida y Gabinetes",
    },
    subtitle: {
      en: "Factory 2K Lacquers, Solid Maple Dovetail Drawers & Focal Islands",
      es: "Lacas 2K Catalizadas, Cajones en Cola de Milano e Islas a Medida",
    },
    description: {
      en: "High-traffic culinary cabinetry finished with chemical-resistant 2K polyurethane coatings.",
      es: "Gabinetes de cocina protegidos con poliuretano catalizado 2K resistente al vapor y grasa.",
    },
    defaultColorHex: "#ECE6DC",
    associatedRoute: "/cocinas-y-gabinetes",
    palette: [
      {
        id: "k-alabaster",
        name: { en: "Navajo Alabaster 2K", es: "Alabastro Navajo 2K" },
        hex: "#ECE6DC",
        chemistry: { en: "Catalyzed Polyurethane", es: "Poliuretano Catalizado" },
        lrv: 82,
      },
      {
        id: "k-indigo",
        name: { en: "Midnight Indigo Slate", es: "Azul Índigo Medianoche" },
        hex: "#22303C",
        chemistry: { en: "Industrial High-Solids 2K", es: "Laca Industrial de Altos Sólidos" },
        lrv: 11,
      },
      {
        id: "k-sage",
        name: { en: "Sonoran Desert Sage", es: "Salvia del Desierto" },
        hex: "#435446",
        chemistry: { en: "Italian 2K Urethane", es: "Uretano Italiano 2K" },
        lrv: 26,
      },
      {
        id: "k-terracotta",
        name: { en: "Adobe Terracotta Clay", es: "Terracota de Adobe" },
        hex: "#B85D3B",
        chemistry: { en: "Catalyzed Mineral Lacquer", es: "Laca Mineral Catalizada" },
        lrv: 29,
      },
      {
        id: "k-oak",
        name: { en: "Rift White Oak Clear", es: "Roble Blanco Corte Recto" },
        hex: "#C2A379",
        chemistry: { en: "Waterborne Conversion Varnish", es: "Barniz de Conversión al Agua" },
        lrv: 46,
      },
    ],
  },
  living: {
    id: "living",
    number: "02",
    tag: {
      en: "Living Room & Millwork",
      es: "Sala de Estar y Ebanistería Fina",
    },
    title: {
      en: "Arched Built-Ins & Millwork",
      es: "Libreros Arqueados y Mueblería Fina",
    },
    subtitle: {
      en: "Arched Fireplace Bookcases, Floating Credenzas & Concealed LED",
      es: "Libreros Arqueados de Chimenea, Credenzas Flotantes y Canales LED",
    },
    description: {
      en: "Bespoke architectural woodwork measured to the millimeter for your residence.",
      es: "Ebanistería a medida construida al milímetro con ensambles tradicionales en madera noble.",
    },
    defaultColorHex: "#CBB393",
    associatedRoute: "/muebles-a-medida",
    palette: [
      {
        id: "l-oak",
        name: { en: "Natural Rift White Oak", es: "Roble Blanco Natural" },
        hex: "#CBB393",
        chemistry: { en: "Ceramic-Infused Clear 2K", es: "Laca 2K con Microcerámica" },
        lrv: 52,
      },
      {
        id: "l-walnut",
        name: { en: "Smoked Sonoran Walnut", es: "Nogal Ahumado Sonorense" },
        hex: "#422F24",
        chemistry: { en: "Penetrating Solvent Stain", es: "Tinte de Penetración Profunda" },
        lrv: 14,
      },
      {
        id: "l-charcoal",
        name: { en: "Iron Charcoal Black 2K", es: "Negro Carbón de Fragua" },
        hex: "#242526",
        chemistry: { en: "Anti-Fingerprint 2K Matte", es: "Poliuretano Mate Antihuellas" },
        lrv: 7,
      },
      {
        id: "l-alabaster",
        name: { en: "Linen Alabaster Velvet", es: "Alabastro Lino Terciopelo" },
        hex: "#EDE9E1",
        chemistry: { en: "Non-Reflective 2K Enamel", es: "Esmalte 2K No Reflectivo" },
        lrv: 80,
      },
      {
        id: "l-eucalyptus",
        name: { en: "Desert Eucalyptus Green", es: "Verde Eucalipto del Desierto" },
        hex: "#4F6054",
        chemistry: { en: "Catalyzed Satin Enamel", es: "Esmalte Satinado Catalizado" },
        lrv: 23,
      },
    ],
  },
  entryway: {
    id: "entryway",
    number: "03",
    tag: {
      en: "Front Entryway & Portico",
      es: "Pórtico y Entrada Principal",
    },
    title: {
      en: "Custom Front Doors & Entryways",
      es: "Puertas Principales y Entradas",
    },
    subtitle: {
      en: "Solid Wood Double Doors, Portico Ceilings & Heavy Architectural Hardware",
      es: "Puertas Dobles Macizas, Cielos de Pórtico y Herrajes Forjados",
    },
    description: {
      en: "Built to endure Southwest solar UV exposure with marine-grade polyurethanes.",
      es: "Protección contra la radiación solar de Arizona mediante uretanos marinos y selladores elásticos.",
    },
    defaultColorHex: "#A8482A",
    associatedRoute: "/pintura-residencial",
    palette: [
      {
        id: "e-terracotta",
        name: { en: "Sonoran Desert Terracotta", es: "Terracota del Desierto" },
        hex: "#A8482A",
        chemistry: { en: "UV-Absorbing Exterior 2K", es: "Poliuretano Exterior con Filtro UV" },
        lrv: 21,
      },
      {
        id: "e-slate",
        name: { en: "Desert Iron Slate", es: "Pizarra de Hierro del Desierto" },
        hex: "#2F3B43",
        chemistry: { en: "Micro-Textured Exterior Shield", es: "Blindaje Exterior Microtexturizado" },
        lrv: 12,
      },
      {
        id: "e-walnut",
        name: { en: "Heritage Rich Walnut Stain", es: "Nogal Noble Tradicional" },
        hex: "#442A1D",
        chemistry: { en: "UV Marine Oil Stain", es: "Aceite Marino con Filtro UV" },
        lrv: 15,
      },
      {
        id: "e-mineral",
        name: { en: "Sonoran Mineral Alabaster", es: "Blanco Mineral Sonorense" },
        hex: "#ECE8E1",
        chemistry: { en: "Elastomeric Masonry Shield", es: "Escudo Elastomérico para Muros" },
        lrv: 79,
      },
      {
        id: "e-agave",
        name: { en: "Wild Agave Green", es: "Verde Agave Silvestre" },
        hex: "#495A4C",
        chemistry: { en: "Catalyzed Exterior Enamel", es: "Esmalte Exterior Catalizado" },
        lrv: 20,
      },
    ],
  },
  patio: {
    id: "patio",
    number: "04",
    tag: {
      en: "Covered Veranda & Outdoor Living",
      es: "Patio Cubierto y Veranda Exterior",
    },
    title: {
      en: "Outdoor Living & Weathered Woods",
      es: "Pérgolas y Maderas Exteriores",
    },
    subtitle: {
      en: "Tongue-and-Groove Ceilings, Stucco Finishes & Outdoor Kitchen Woodwork",
      es: "Cielos Machihembrados, Acabados de Estuco y Muebles de Terraza",
    },
    description: {
      en: "Treated tongue-and-groove cedar ceilings, architectural columns, and exterior bar cabinetry.",
      es: "Plafones machihembrados de cedro y columnas exteriores protegidas contra el calor extremo.",
    },
    defaultColorHex: "#C6B294",
    associatedRoute: "/contacto",
    palette: [
      {
        id: "p-sand",
        name: { en: "Weathered Dune Sand Stain", es: "Arena de Duna Teñida" },
        hex: "#C6B294",
        chemistry: { en: "Penetrating Mineral Stain", es: "Tinte Mineral Penetrante" },
        lrv: 55,
      },
      {
        id: "p-terracotta",
        name: { en: "Spanish Adobe Clay", es: "Terracota Tradicional de Adobe" },
        hex: "#B85D3B",
        chemistry: { en: "High-Build Elastomeric Coating", es: "Recubrimiento Elastomérico" },
        lrv: 28,
      },
      {
        id: "p-cedar",
        name: { en: "UV-Roasted Western Cedar", es: "Cedro Tostado Protección UV" },
        hex: "#5C3E29",
        chemistry: { en: "Marine Exterior Polyurethane", es: "Poliuretano Marino Exterior" },
        lrv: 18,
      },
      {
        id: "p-olive",
        name: { en: "Desert Olive Verde", es: "Verde Olivo del Valle" },
        hex: "#5B6858",
        chemistry: { en: "Thermal-Reflective Acrylic", es: "Acrílico Termorreflectivo" },
        lrv: 25,
      },
      {
        id: "p-limestone",
        name: { en: "Warm Sedona Limestone", es: "Cantera Caliza de Sedona" },
        hex: "#E0D7C8",
        chemistry: { en: "Silicone-Modified Topcoat", es: "Esmalte Modificado con Silicona" },
        lrv: 74,
      },
    ],
  },
};

export const LIGHTING_MODES: Record<
  LightingMode,
  {
    name: Record<Locale, string>;
    kelvin: string;
    description: Record<Locale, string>;
    tintRgba: string;
    gradientStop: string;
  }
> = {
  dawn: {
    name: { en: "Dawn Light", es: "Amanecer Suave" },
    kelvin: "3000K",
    description: {
      en: "Soft low-angle morning sunlight reveals warm undertones and gentle ambient shadows.",
      es: "Luz matutina rasante que despierta notas almendradas sin reflejos molestos.",
    },
    tintRgba: "rgba(245, 210, 175, 0.16)",
    gradientStop: "rgba(245, 195, 140, 0.22)",
  },
  noon: {
    name: { en: "Desert Midday", es: "Sol Cenital" },
    kelvin: "5500K",
    description: {
      en: "Direct high-noon Arizona light reveals true pigment purity and factory smoothness.",
      es: "Luz solar directa de 5500K que pone a prueba la pureza del color y la ausencia de reflejos.",
    },
    tintRgba: "rgba(255, 255, 255, 0.08)",
    gradientStop: "rgba(240, 235, 220, 0.12)",
  },
  sunset: {
    name: { en: "Golden Sunset", es: "Atardecer Ámbar" },
    kelvin: "3200K",
    description: {
      en: "Fabled Arizona golden hour. Rich amber and terracotta wavelengths illuminate wood grains.",
      es: "La célebre hora dorada de Arizona. Rayos ámbar que hacen vibrar las vetas de la madera.",
    },
    tintRgba: "rgba(215, 120, 60, 0.24)",
    gradientStop: "rgba(184, 93, 59, 0.32)",
  },
  night: {
    name: { en: "Warm Night", es: "Noche Íntima" },
    kelvin: "2400K",
    description: {
      en: "Intimate architectural interior lighting with 2400K warm LED strips and subtle shadows.",
      es: "Iluminación arquitectónica de acento a 2400K, creando una atmósfera nocturna acogedora.",
    },
    tintRgba: "rgba(35, 24, 18, 0.65)",
    gradientStop: "rgba(20, 14, 10, 0.85)",
  },
};

export interface SampleItem {
  id: string;
  code: string;
  category: "profile" | "pigment" | "sheen" | "hardware" | "configuration" | "system";
  title: Record<Locale, string> | string;
  subtitle: string;
  hex?: string;
}

interface RenovoContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  samples: SampleItem[];
  addSample: (item: SampleItem) => void;
  removeSample: (id: string) => void;
  clearSamples: () => void;
  isSampleInTray: (id: string) => boolean;
  isInTray: (id: string) => boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  toastMessage: string | null;

  // Casa Renovo Spatial Engine
  activeRoom: CasaRoomId;
  setActiveRoom: (room: CasaRoomId) => void;
  lightingMode: LightingMode;
  setLightingMode: (mode: LightingMode) => void;
  activeRoomColors: Record<CasaRoomId, string>;
  setRoomColor: (room: CasaRoomId, colorHex: string) => void;
  isSpatialHudOpen: boolean;
  setIsSpatialHudOpen: (open: boolean) => void;
}

const RenovoContext = createContext<RenovoContextValue | undefined>(undefined);

const STORAGE_KEY_SAMPLES = "renovo_sample_tray_v1";
const STORAGE_KEY_LOCALE = "renovo_locale_v1";
const STORAGE_KEY_LIGHTING = "renovo_casa_lighting_v1";

export function RenovoProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [samples, setSamples] = useState<SampleItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Casa Renovo Spatial State
  const [activeRoom, setActiveRoomState] = useState<CasaRoomId>("kitchen");
  const [lightingMode, setLightingModeState] = useState<LightingMode>("noon");
  const [activeRoomColors, setActiveRoomColors] = useState<Record<CasaRoomId, string>>({
    kitchen: CASA_ROOMS.kitchen.defaultColorHex,
    living: CASA_ROOMS.living.defaultColorHex,
    entryway: CASA_ROOMS.entryway.defaultColorHex,
    patio: CASA_ROOMS.patio.defaultColorHex,
  });
  const [isSpatialHudOpen, setIsSpatialHudOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedLocale = window.localStorage.getItem(STORAGE_KEY_LOCALE) as Locale | null;
      if (savedLocale === "en" || savedLocale === "es") {
        setLocaleState(savedLocale);
        document.documentElement.lang = savedLocale;
      }
      const savedSamples = window.localStorage.getItem(STORAGE_KEY_SAMPLES);
      if (savedSamples) {
        const parsed = JSON.parse(savedSamples);
        if (Array.isArray(parsed)) {
          setSamples(parsed);
        }
      }
      const savedLighting = window.localStorage.getItem(STORAGE_KEY_LIGHTING) as LightingMode | null;
      if (savedLighting && ["dawn", "noon", "sunset", "night"].includes(savedLighting)) {
        setLightingModeState(savedLighting);
      }
    } catch {
      // Ignore storage access errors in restricted modes
    }
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(STORAGE_KEY_LOCALE, nextLocale);
      document.documentElement.lang = nextLocale;
    } catch {
      // Ignore
    }
  }, []);

  const setLightingMode = useCallback((mode: LightingMode) => {
    setLightingModeState(mode);
    try {
      window.localStorage.setItem(STORAGE_KEY_LIGHTING, mode);
    } catch {
      // Ignore
    }
  }, []);

  const setActiveRoom = useCallback((room: CasaRoomId) => {
    setActiveRoomState(room);
  }, []);

  const setRoomColor = useCallback((room: CasaRoomId, hex: string) => {
    setActiveRoomColors((prev) => ({
      ...prev,
      [room]: hex,
    }));
  }, []);

  const triggerToast = useCallback((msg: string) => {
    setToastMessage(msg);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const addSample = useCallback(
    (item: SampleItem) => {
      setSamples((prev) => {
        const exists = prev.some((s) => s.id === item.id);
        const next = exists ? prev.filter((s) => s.id !== item.id) : [...prev, item];
        try {
          window.localStorage.setItem(STORAGE_KEY_SAMPLES, JSON.stringify(next));
        } catch {
          // Ignore
        }
        return next;
      });
      triggerToast(dictionaries[locale].sampleDrawer.itemAddedToast);
    },
    [locale, triggerToast]
  );

  const removeSample = useCallback((id: string) => {
    setSamples((prev) => {
      const next = prev.filter((s) => s.id !== id);
      try {
        window.localStorage.setItem(STORAGE_KEY_SAMPLES, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  }, []);

  const clearSamples = useCallback(() => {
    setSamples([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY_SAMPLES);
    } catch {
      // Ignore
    }
  }, []);

  const isSampleInTray = useCallback(
    (id: string) => samples.some((s) => s.id === id),
    [samples]
  );

  const value: RenovoContextValue = {
    locale,
    setLocale,
    t: dictionaries[locale],
    samples,
    addSample,
    removeSample,
    clearSamples,
    isSampleInTray,
    isInTray: isSampleInTray,
    isDrawerOpen,
    setIsDrawerOpen,
    toastMessage,

    // Casa Renovo Spatial Engine
    activeRoom,
    setActiveRoom,
    lightingMode,
    setLightingMode,
    activeRoomColors,
    setRoomColor,
    isSpatialHudOpen,
    setIsSpatialHudOpen,
  };

  return <RenovoContext.Provider value={value}>{children}</RenovoContext.Provider>;
}

export function useRenovo() {
  const ctx = useContext(RenovoContext);
  if (!ctx) {
    throw new Error("useRenovo must be used inside RenovoProvider");
  }
  return ctx;
}
