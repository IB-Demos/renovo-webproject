"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import {
  Sparkle,
  BookmarkSimple,
  ArrowRight,
  CheckCircle,
  Package,
  Eye,
  SlidersHorizontal,
  HandPointing,
  Palette,
  ShieldCheck,
  HouseLine,
} from "@phosphor-icons/react";

interface PresetPalette {
  id: string;
  name: { en: string; es: string };
  style: { en: string; es: string };
  bestFor: { en: string; es: string };
  description: { en: string; es: string };
  items: Array<{
    id: string;
    code: string;
    category: "profile" | "pigment" | "sheen" | "system";
    title: { en: string; es: string };
    subtitle: { en: string; es: string };
    hex?: string;
  }>;
}

const PRESET_PALETTES: PresetPalette[] = [
  {
    id: "preset-sonoran-classic",
    name: {
      en: "Warm Sonoran Classic",
      es: "Clásico Sonorense Cálido",
    },
    style: {
      en: "Transitional & Timeless",
      es: "Transicional y Atemporal",
    },
    bestFor: {
      en: "Gourmet kitchens, perimeter cabinetry, and walk-in pantries",
      es: "Cocinas de autor, alacenas principales y gabinetes perimetrales",
    },
    description: {
      en: "Warm ivory catalyzed lacquer paired with solid Rift White Oak stiles. Calms bright desert sunlight while keeping interiors inviting.",
      es: "Marfil cálido catalizado en contraste con Roble Blanco en corte recto. Suaviza la intensa luz del desierto con un ambiente acogedor.",
    },
    items: [
      {
        id: "classic-shaker",
        code: "PRF-02 // STD-SHAKER",
        category: "profile",
        title: {
          en: "Heritage 65mm Recessed Shaker",
          es: "Shaker Clásico de 65mm",
        },
        subtitle: {
          en: "Solid Maple Mortise & Tenon Frame",
          es: "Marco de Maple Sólido con Espiga y Mortaja",
        },
      },
      {
        id: "pig-01-alabaster",
        code: "PIG-01 // ALABASTER",
        category: "pigment",
        title: {
          en: "Navajo Alabaster 2K Polyurethane",
          es: "Alabastro Navajo 2K Poliuretano",
        },
        subtitle: {
          en: "Sherwin-Williams SW 7008 Reference · LRV 82%",
          es: "Referencia SW 7008 · LRV 82% · Libre de Amarillamiento",
        },
        hex: "#ECE6DC",
      },
      {
        id: "wood-white-oak",
        code: "WOOD-01 // OAK-RIFT",
        category: "pigment",
        title: {
          en: "Natural Rift-Cut White Oak",
          es: "Roble Blanco Americano Corte Recto",
        },
        subtitle: {
          en: "Linear Vertical Grain · 10% Matte Conversion Clear",
          es: "Veta Lineal Continua · Acabado Mate al Agua",
        },
        hex: "#C79F67",
      },
      {
        id: "sheen-satin",
        code: "SHN-02 // SATIN-15",
        category: "sheen",
        title: {
          en: "15 GU Satin Italian Polyurethane",
          es: "Satinado Suave 15 GU Poliuretano Italiano",
        },
        subtitle: {
          en: "Velvety tactile touch with high grease resistance",
          es: "Tacto aterciopelado con alta resistencia a grasas",
        },
        hex: "#E0D7C8",
      },
    ],
  },
  {
    id: "preset-desert-sage",
    name: {
      en: "Desert Sage & Natural Oak",
      es: "Salvia del Desierto y Roble Natural",
    },
    style: {
      en: "Organic Modern & Coastal Southwest",
      es: "Moderno Orgánico y Contemporáneo Suroeste",
    },
    bestFor: {
      en: "Kitchen focal islands, floating bathroom vanities, and wine credenzas",
      es: "Islas centrales de cocina, tocadores flotantes y credenzas de vino",
    },
    description: {
      en: "Architectural fluted wood profiles with botanical sage lacquer. Introduces deep acoustic dampening and serene botanical shadows.",
      es: "Perfiles estriados con laca botánica salvia y roble natural. Aporta textura visual táctil y un ambiente sereno.",
    },
    items: [
      {
        id: "fluted-slab",
        code: "PRF-04 // REED-FLUTE",
        category: "profile",
        title: {
          en: "Architectural Fluted Reed Profile",
          es: "Perfil Estriado Acanalado de Autor",
        },
        subtitle: {
          en: "Precision CNC Solid Oak Reed Details",
          es: "Ranurado CNC de Alta Precisión en Roble Sólido",
        },
      },
      {
        id: "pig-04-sage",
        code: "PIG-04 // SAGE-DESERT",
        category: "pigment",
        title: {
          en: "Sonoran Desert Sage 2K",
          es: "Salvia del Desierto de Sonora 2K",
        },
        subtitle: {
          en: "Earthy Botanical Green · LRV 26% Matte",
          es: "Verde Botánico Orgánico · LRV 26% Acabado Mate",
        },
        hex: "#435446",
      },
      {
        id: "wood-white-oak",
        code: "WOOD-01 // OAK-RIFT",
        category: "pigment",
        title: {
          en: "Natural Rift-Cut White Oak",
          es: "Roble Blanco Americano Corte Recto",
        },
        subtitle: {
          en: "Linear Vertical Grain · 10% Matte Conversion Clear",
          es: "Veta Lineal Continua · Acabado Mate al Agua",
        },
        hex: "#C79F67",
      },
      {
        id: "sheen-matte",
        code: "SHN-01 // ULTRA-MATTE-5",
        category: "sheen",
        title: {
          en: "5 GU Dead-Flat Ceramic Lacquer",
          es: "Mate Absoluto 5 GU con Cerámica",
        },
        subtitle: {
          en: "Zero specular glare under intense direct light",
          es: "Cero reflejos bajo luz directa cenital",
        },
        hex: "#D0C8B8",
      },
    ],
  },
  {
    id: "preset-midnight-walnut",
    name: {
      en: "Midnight Drama & Smoked Walnut",
      es: "Índigo Medianoche y Nogal Ahumado",
    },
    style: {
      en: "Moody Contemporary & Bar Millwork",
      es: "Contemporáneo Sofisticado y Bares de Autor",
    },
    bestFor: {
      en: "Executive library credenzas, wet bars, and master suites",
      es: "Bares residenciales, libreros arquitectónicos y suites principales",
    },
    description: {
      en: "Deep oceanic blue-slate 2K enamel combined with dark American walnut and micro-shaker borders. Imparts grounded luxury and architectural depth.",
      es: "Azul índigo pizarra combinado con nogal americano tostado y bordes micro-shaker. Brinda una elegancia profunda y distinguida.",
    },
    items: [
      {
        id: "slim-shaker",
        code: "PRF-01 // SLIM-SHAKER",
        category: "profile",
        title: {
          en: "Architectural Micro-Shaker (22mm)",
          es: "Micro-Shaker Arquitectónico (22mm)",
        },
        subtitle: {
          en: "Ultra-slim 22mm border with tight crisp reveal",
          es: "Borde ultra delgado de 22mm con ensamble a inglete",
        },
      },
      {
        id: "pig-03-midnight",
        code: "PIG-03 // MIDNIGHT-SLATE",
        category: "pigment",
        title: {
          en: "Midnight Indigo Slate 2K",
          es: "Azul Índigo Medianoche 2K",
        },
        subtitle: {
          en: "Deep Architectural Charcoal Navy · LRV 11%",
          es: "Azul Pizarra de Alta Densidad · LRV 11%",
        },
        hex: "#22303C",
      },
      {
        id: "wood-walnut",
        code: "WOOD-02 // WALNUT-DARK",
        category: "pigment",
        title: {
          en: "American Black Walnut Hardwood",
          es: "Nogal Americano Macizo Tostado",
        },
        subtitle: {
          en: "Espresso Mineral Swirls · Hand-Rubbed Oil Look",
          es: "Vetas Minerales Espresso · Acabado al Aceite",
        },
        hex: "#422F24",
      },
      {
        id: "sheen-eggshell",
        code: "SHN-03 // EGGSHELL-20",
        category: "sheen",
        title: {
          en: "20 GU Low-Lustre Enamel",
          es: "Lustre Suave 20 GU Esmalte 2K",
        },
        subtitle: {
          en: "Subtle architectural glow on dark pigments",
          es: "Brillo sutil que resalta la profundidad del pigmento",
        },
        hex: "#8A949E",
      },
    ],
  },
];

export function MaterialOnboardingGuide() {
  const { locale, addSample, isInTray, setIsDrawerOpen, samples } = useRenovo();
  const [activeTab, setActiveTab] = useState<"how-it-works" | "curated-palettes">("how-it-works");
  const [loadedPresetId, setLoadedPresetId] = useState<string | null>(null);

  const handleLoadPalette = (palette: PresetPalette) => {
    palette.items.forEach((item) => {
      addSample({
        id: item.id,
        code: item.code,
        category: item.category,
        title: item.title[locale],
        subtitle: item.subtitle[locale],
        hex: item.hex,
      });
    });
    setLoadedPresetId(palette.id);
    setTimeout(() => {
      setIsDrawerOpen(true);
    }, 250);
  };

  const isPresetFullyLoaded = (palette: PresetPalette) => {
    return palette.items.every((it) => isInTray(it.id));
  };

  return (
    <div id="guia-materiales" className="w-full space-y-10 scroll-mt-28">
      {/* SECTION HEADER WITH INTRO */}
      <div className="bg-[#FCFAF7] border border-[#DFD6C6] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#DFD6C6]">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Sparkle size={14} weight="fill" />
              <span>
                {locale === "en" ? "Interactive Specifier Guide" : "Guía Rápida de Especificación"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#1A1410] tracking-tight">
              {locale === "en"
                ? "How Does This Materials Catalog Work?"
                : "¿Cómo funciona este Catálogo de Materiales?"}
            </h2>
            <p className="text-sm sm:text-base text-[#3D3228] leading-relaxed">
              {locale === "en"
                ? "This is not an ordinary online shop. It is an architectural design table where you can pin hardwoods, 2K factory lacquers, and cabinet door profiles. Raul Burgos will then bring physical finished samples right to your home in Phoenix or Scottsdale during your free consultation."
                : "Esta no es una tienda en línea común. Es una mesa de especificación arquitectónica donde seleccionas maderas nobles, lacas catalizadas 2K y perfiles de puertas. Luego, Raul Burgos llevará un maletín con muestras físicas reales directamente a tu hogar durante tu consulta gratuita."}
            </p>
          </div>

          {/* VIEW SWITCH TABS */}
          <div className="flex sm:inline-flex p-1 bg-[#EAE2D5] rounded-2xl border border-[#DFD6C6] shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("how-it-works")}
              className={`interactive-control flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-serif font-semibold uppercase tracking-wider transition-all ${
                activeTab === "how-it-works"
                  ? "bg-[#1A1410] text-[#FCFAF7] shadow-sm"
                  : "text-[#3D3228] hover:text-[#1A1410]"
              }`}
            >
              {locale === "en" ? "1. How It Works (3 Steps)" : "1. Cómo Usarlo (3 Pasos)"}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("curated-palettes")}
              className={`interactive-control flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-serif font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "curated-palettes"
                  ? "bg-[#B85D3B] text-[#FCFAF7] shadow-sm"
                  : "text-[#3D3228] hover:text-[#1A1410]"
              }`}
            >
              <Palette size={14} weight="fill" />
              <span>{locale === "en" ? "2. Ready Combinations" : "2. Combinaciones Listas"}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 3-STEP EXPLANATION */}
        {activeTab === "how-it-works" && (
          <div className="pt-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* STEP 1 */}
              <div className="relative rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] p-6 space-y-4 hover:border-[#B85D3B]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#1A1410] text-[#C59B27] font-mono text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D3B] font-semibold">
                    {locale === "en" ? "STEP ONE" : "PASO UNO"}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-serif font-semibold text-[#1A1410]">
                    {locale === "en" ? "Explore & Pin Finishes" : "Explora y Guarda Muestras"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
                    {locale === "en"
                      ? "Browse door profiles, catalyzed pigments, and hardwoods in the grid below. Click 'Pin to Tray' on any item you love."
                      : "Explora perfiles de puertas, lacas 2K y maderas en el catálogo abajo. Haz clic en 'Guardar' en cada acabado que te guste."}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-serif text-[#7A6B5D] flex items-center gap-1.5">
                  <HandPointing size={14} className="text-[#B85D3B]" />
                  <span>
                    {locale === "en"
                      ? "Or load a complete palette with 1 click in Tab 2"
                      : "O carga una combinación lista con 1 clic en la Pestaña 2"}
                  </span>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] p-6 space-y-4 hover:border-[#B85D3B]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#1A1410] text-[#C59B27] font-mono text-xs font-bold flex items-center justify-center">
                    02
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D3B] font-semibold">
                    {locale === "en" ? "STEP TWO" : "PASO DOS"}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-serif font-semibold text-[#1A1410]">
                    {locale === "en" ? "Review in Your Design Tray" : "Revisa tu Bandeja en Vivo"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
                    {locale === "en"
                      ? "Your items appear in your persistent 'Design Selections' drawer (floating at the bottom right). See codes, sheens, and contrasts side by side."
                      : "Tus piezas se guardan en tu 'Bandeja de Selecciones' (botón flotante abajo a la derecha). Compara códigos de taller y contrastes."}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-serif text-[#7A6B5D] flex items-center gap-1.5">
                  <BookmarkSimple size={14} className="text-[#B85D3B]" weight="fill" />
                  <span>
                    {locale === "en"
                      ? `Currently active: ${samples.length} items pinned`
                      : `Actualmente: ${samples.length} muestras guardadas`}
                  </span>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] p-6 space-y-4 hover:border-[#B85D3B]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#1A1410] text-[#C59B27] font-mono text-xs font-bold flex items-center justify-center">
                    03
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D3B] font-semibold">
                    {locale === "en" ? "STEP THREE" : "PASO TRES"}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-serif font-semibold text-[#1A1410]">
                    {locale === "en" ? "Physical In-Home Sample Kit" : "Muestras Físicas en tu Hogar"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
                    {locale === "en"
                      ? "When booking your consultation, Raul Burgos brings physical wood blocks and spray boards to test them under your kitchen's true Arizona sunlight."
                      : "Al agendar tu consulta, Raul Burgos lleva a tu casa muestras reales de madera y tablas lacadas para verlas con la luz natural de tus espacios."}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-serif text-[#7A6B5D] flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#B85D3B]" weight="fill" />
                  <span>
                    {locale === "en"
                      ? "100% complimentary in Phoenix & Scottsdale"
                      : "100% gratuito en Phoenix, Scottsdale y Paradise Valley"}
                  </span>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION HELPER */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B85D3B]/15 text-[#B85D3B] flex items-center justify-center shrink-0">
                  <Palette size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#1A1410]">
                    {locale === "en"
                      ? "Not sure where to start? Try our 3 Designer Palettes"
                      : "¿No sabes qué acabados combinan mejor? Prueba nuestras 3 Paletas de Diseñador"}
                  </h4>
                  <p className="text-xs text-[#54463A]">
                    {locale === "en"
                      ? "Load a cohesive combination of cabinet profile, 2K pigment, and natural hardwood with a single click."
                      : "Carga una combinación armoniosa de perfil, laca 2K y madera noble con un solo clic."}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab("curated-palettes")}
                className="interactive-control px-6 py-2.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-xs transition-colors"
              >
                <span>{locale === "en" ? "View 3 Preset Palettes" : "Ver 3 Paletas Listas"}</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: 3 CURATED PRESET PALETTES */}
        {activeTab === "curated-palettes" && (
          <div className="pt-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PRESET_PALETTES.map((palette) => {
                const isLoaded = isPresetFullyLoaded(palette);

                return (
                  <div
                    key={palette.id}
                    className={`rounded-2xl border transition-all flex flex-col justify-between p-6 space-y-5 bg-[#F4EFE6] ${
                      isLoaded
                        ? "border-[#B85D3B] ring-2 ring-[#B85D3B]/20 shadow-md"
                        : "border-[#DFD6C6] hover:border-[#B85D3B]/40"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#B85D3B] font-bold">
                            {palette.style[locale]}
                          </span>
                          <h3 className="text-xl font-serif font-semibold text-[#1A1410]">
                            {palette.name[locale]}
                          </h3>
                        </div>
                        {isLoaded && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#B85D3B] text-white text-[10px] font-mono font-bold uppercase shrink-0">
                            <CheckCircle size={12} weight="fill" />
                            <span>{locale === "en" ? "Loaded" : "Cargada"}</span>
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#3D3228] leading-relaxed">
                        {palette.description[locale]}
                      </p>

                      <div className="text-[11px] font-serif text-[#54463A] bg-[#EAE2D5] p-2.5 rounded-xl border border-[#DFD6C6]/60">
                        <strong className="text-[#1A1410]">
                          {locale === "en" ? "Ideal For: " : "Ideal para: "}
                        </strong>
                        {palette.bestFor[locale]}
                      </div>

                      {/* PALETTE SWATCH PILLS */}
                      <div className="pt-2 space-y-2">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A6B5D] font-bold">
                          {locale === "en" ? "INCLUDED IN THIS SPEC:" : "ELEMENTOS INCLUIDOS:"}
                        </div>
                        <div className="space-y-1.5">
                          {palette.items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#FCFAF7] border border-[#DFD6C6]/70"
                            >
                              <div className="flex items-center gap-2 overflow-hidden">
                                {item.hex ? (
                                  <span
                                    className="w-4 h-4 rounded-full border border-black/15 shrink-0 shadow-2xs"
                                    style={{ backgroundColor: item.hex }}
                                  />
                                ) : (
                                  <span className="w-4 h-4 rounded-full bg-[#1A1410] text-[#C59B27] flex items-center justify-center shrink-0 text-[9px] font-mono">
                                    ✦
                                  </span>
                                )}
                                <span className="font-serif font-medium text-[#1A1410] truncate">
                                  {item.title[locale]}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-[#7A6B5D] shrink-0 ml-2">
                                {item.category}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ACTION BUTTON */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleLoadPalette(palette)}
                        className={`interactive-control w-full py-3 px-4 rounded-xl text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                          isLoaded
                            ? "bg-[#1A1410] text-[#FCFAF7] hover:bg-[#261F1A]"
                            : "bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] shadow-sm"
                        }`}
                      >
                        {isLoaded ? (
                          <>
                            <CheckCircle size={15} weight="fill" className="text-[#C59B27]" />
                            <span>
                              {locale === "en" ? "Palette Active (Open Tray)" : "Paleta Activa (Ver Bandeja)"}
                            </span>
                          </>
                        ) : (
                          <>
                            <Palette size={15} weight="fill" />
                            <span>
                              {locale === "en"
                                ? "Load This 4-Piece Combination"
                                : "Cargar esta Combinación de 4 Piezas"}
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RETURN BUTTON */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("how-it-works")}
                className="text-xs font-serif font-semibold text-[#B85D3B] hover:underline inline-flex items-center gap-1.5"
              >
                <span>{locale === "en" ? "← Back to How It Works Guide" : "← Volver a la Explicación de 3 Pasos"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
