"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import {
  Sun,
  SunHorizon,
  MoonStars,
  Sparkle,
  ArrowRight,
  BookmarkSimple,
  Check,
  Compass,
} from "@phosphor-icons/react";

interface FinishOption {
  id: string;
  name: { en: string; es: string };
  chemistry: { en: string; es: string };
  lrv: number; // Light Reflectance Value
  baseHex: string;
  sheen: { en: string; es: string };
  photoUrl: string;
  photoAlt: string;
  lightingAdvice: {
    morning: { en: string; es: string };
    noon: { en: string; es: string };
    evening: { en: string; es: string };
  };
  recommendedKelvin: string;
}

type LightCondition = "morning" | "noon" | "evening";

export function DesertLightEngine() {
  const { locale, addSample, isInTray } = useRenovo();
  const [activeFinishId, setActiveFinishId] = useState<string>("alabaster");
  const [activeLight, setActiveLight] = useState<LightCondition>("noon");

  const finishes: FinishOption[] = [
    {
      id: "alabaster",
      name: {
        en: "Navajo Alabaster 2K Velvet",
        es: "Alabastro Navajo 2K Terciopelo",
      },
      chemistry: {
        en: "Polyurethane Catalyzed Factory Lacquer",
        es: "Laca de Poliuretano Catalizada 2K de Cabina",
      },
      lrv: 82,
      baseHex: "#ECE6DC",
      sheen: {
        en: "18% Satin Velvet Lustre",
        es: "18% Brillo Satinado Aterciopelado",
      },
      photoUrl: "/assets/kitchens/kitchen-05.jpg",
      photoAlt: "Navajo Alabaster custom kitchen cabinets in Phoenix",
      recommendedKelvin: "3000K Warm Neutral",
      lightingAdvice: {
        morning: {
          en: "Soft east-facing morning light reveals creamy almond undertones without glare, making small kitchens feel twice as expansive.",
          es: "La suave luz matutina de oriente despierta notas almendradas sin reflejos molestos, ampliando visualmente el espacio.",
        },
        noon: {
          en: "Under the intense 5500K Arizona midday sun, our 2K non-yellowing formula stays a crisp, authentic architectural off-white.",
          es: "Bajo el sol cenital de 5500K de Arizona, nuestra fórmula 2K no amarillea y mantiene un blanco arquitectónico sereno.",
        },
        evening: {
          en: "Pairs luxuriously with 2700K to 3000K warm interior LED under-cabinet strips, turning the space into an intimate candlelight haven.",
          es: "Combina a la perfección con iluminación cálida de 2700K bajo gabinete, creando una atmósfera íntima para la cena.",
        },
      },
    },
    {
      id: "white-oak",
      name: {
        en: "Rift-Cut Natural White Oak",
        es: "Roble Blanco Natural Corte Recto",
      },
      chemistry: {
        en: "Waterborne Matte Polyurethane Sealant",
        es: "Sellador Acrílico Mate Base Agua de Alta Resistencia",
      },
      lrv: 48,
      baseHex: "#C5A170",
      sheen: {
        en: "8% Dead-Matte Natural Wood Finish",
        es: "8% Mate Natural a Poro Abierto",
      },
      photoUrl: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
      photoAlt: "Natural white oak custom arched built-in by Renovo",
      recommendedKelvin: "2700K - 3000K Warm",
      lightingAdvice: {
        morning: {
          en: "Morning light grazes across the tight vertical medullary rays of the rift grain, highlighting authentic organic craftsmanship.",
          es: "La luz temprana resalta las vetas lineales del roble corte recto, acentuando el trabajo artesanal de la madera.",
        },
        noon: {
          en: "Our matte protective clear coat eliminates specular glare under bright desert sunlight, keeping the wood looking raw and organic.",
          es: "El sellador mate anula los reflejos del sol desértico, manteniendo el aspecto noble y virgen de la madera.",
        },
        evening: {
          en: "Under 2700K brass picture lighting, the oak radiates warm honey and wheat tones, anchoring the room in timeless comfort.",
          es: "Con apliques de latón a 2700K, el roble proyecta tonos miel y trigo, aportando una calidez acogedora inigualable.",
        },
      },
    },
    {
      id: "midnight-indigo",
      name: {
        en: "Midnight Indigo Slate 2K",
        es: "Azul Medianoche Pizarra 2K",
      },
      chemistry: {
        en: "High-Opacity 2K Saturated Enamel",
        es: "Esmalte Saturado 2K de Alta Densidad",
      },
      lrv: 14,
      baseHex: "#222D38",
      sheen: {
        en: "20% Satin Low-Lustre",
        es: "20% Satinado Suave",
      },
      photoUrl: "/assets/kitchens/kitchen-14.jpg",
      photoAlt: "Midnight indigo island and custom bar in Phoenix residence",
      recommendedKelvin: "3000K Neutral LED",
      lightingAdvice: {
        morning: {
          en: "Appears as a deep, grounded maritime slate blue that contrasts with bright morning desert skies.",
          es: "Se manifiesta como un azul pizarra marítimo profundo que contrasta limpiamente con la luz matutina.",
        },
        noon: {
          en: "Direct sunlight brings out subtle teal and smoky gray undertones without washing out the color depth.",
          es: "La luz directa del mediodía revela sutiles notas humo y petróleo sin perder solidez cromática.",
        },
        evening: {
          en: "At night, it recedes into a moody, velvet charcoal-blue that pairs with unlacquered brass and polished marble.",
          es: "Por la noche adopta un carácter carbón aterciopelado que enaltece herrajes de latón y cubiertas de mármol.",
        },
      },
    },
    {
      id: "desert-sage",
      name: {
        en: "Botanical Desert Sage 2K",
        es: "Verde Salvia del Desierto 2K",
      },
      chemistry: {
        en: "Mineral-Pigmented 2K Polyurethane",
        es: "Poliuretano 2K Pigmentado con Base Mineral",
      },
      lrv: 36,
      baseHex: "#4C5E50",
      sheen: {
        en: "15% Velvet Eggshell",
        es: "15% Brillo Aterciopelado",
      },
      photoUrl: "/assets/painting-interior/interior-03.jpg",
      photoAlt: "Desert sage architectural finish on cabinetry and trim",
      recommendedKelvin: "3000K - 3500K Clean White",
      lightingAdvice: {
        morning: {
          en: "Morning sun warms the botanical eucalyptus undertone, bringing the freshness of the Sonoran desert indoors.",
          es: "El sol matutino despierta notas de eucalipto sonorense, trayendo la frescura del desierto al interior del hogar.",
        },
        noon: {
          en: "Maintains a serene, muted olive-sage tone that soothes the eyes against the bright Arizona outdoor landscape.",
          es: "Mantiene un tono salvia olivo apacible que relaja la vista ante el intenso resplandor exterior de Arizona.",
        },
        evening: {
          en: "Transforms into an earthy, grounding forest tone under evening ambient lighting, adding richness to dinner settings.",
          es: "Se convierte en un verde bosque sereno bajo iluminación nocturna, aportando sofisticación a reuniones y cenas.",
        },
      },
    },
  ];

  const currentFinish =
    finishes.find((f) => f.id === activeFinishId) || finishes[0];

  const lightPresets = [
    {
      id: "morning" as LightCondition,
      label: { en: "Desert Morning", es: "Amanecer del Desierto" },
      kelvin: "2,700K Warm Sunlight",
      icon: SunHorizon,
      description: {
        en: "Soft low-angle golden light streaming through east windows.",
        es: "Luz dorada de ángulo bajo filtrándose por ventanas de oriente.",
      },
      filterStyle: "sepia(0.2) saturate(1.15) brightness(1.02)",
      ambientColor: "rgba(224, 168, 76, 0.15)",
    },
    {
      id: "noon" as LightCondition,
      label: { en: "Arizona High Noon", es: "Mediodía en Phoenix" },
      kelvin: "5,500K Pure Daylight",
      icon: Sun,
      description: {
        en: "Direct high-intensity desert sun. Reveals true non-yellowing undertones.",
        es: "Sol cenital de alta intensidad. Revela la pureza del color sin distorsión.",
      },
      filterStyle: "contrast(1.05) brightness(1.06) saturate(1.02)",
      ambientColor: "rgba(255, 255, 255, 0.12)",
    },
    {
      id: "evening" as LightCondition,
      label: { en: "Evening Ambient", es: "Iluminación Nocturna" },
      kelvin: "3,000K Interior LED",
      icon: MoonStars,
      description: {
        en: "Warm recessed ceiling pots and 2700K under-cabinet illumination.",
        es: "Iluminación cálida interior de acento y luces empotradas bajo gabinete.",
      },
      filterStyle: "sepia(0.35) saturate(1.1) brightness(0.92) contrast(1.05)",
      ambientColor: "rgba(205, 133, 63, 0.2)",
    },
  ];

  const currentLightPreset =
    lightPresets.find((l) => l.id === activeLight) || lightPresets[1];

  const isPinned = isInTray(currentFinish.id);

  const handleTogglePin = () => {
    addSample({
      id: currentFinish.id,
      code: currentFinish.id.toUpperCase(),
      category: "pigment",
      title: currentFinish.name,
      subtitle: `${currentFinish.chemistry[locale]} · LRV ${currentFinish.lrv}`,
      hex: currentFinish.baseHex,
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0F0C0A] text-[#FAF8F5] border-b border-white/8 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        {/* =====================================================================
            1. SECTION HEADER (Architectural Lighting Discipline)
        ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
              <Sun size={14} weight="fill" />
              <span>
                {locale === "en"
                  ? "Arizona Desert Light Simulator"
                  : "Simulador de Luz Desértica de Arizona"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#FAF8F5] tracking-tight">
              {locale === "en"
                ? "How Your Finishes Respond to Arizona Light."
                : "Cómo Responden los Acabados a la Luz de Arizona."}
            </h2>

            <p className="text-base text-[#D4CBBF] font-light leading-relaxed">
              {locale === "en"
                ? "Desert sunlight is unique. A finish that looks warm in the morning can feel stark at high noon. Select an authentic wood or 2K lacquer below and toggle through 3 natural Arizona lighting conditions to see the optical shift."
                : "La luz del desierto es única en el mundo. Un acabado cálido por la mañana puede sentirse rígido al mediodía. Elige una madera o laca 2K y alterna entre 3 horas del día para comprobar cómo reacciona la superficie."}
            </p>
          </div>

          {/* LIGHT CONDITION TABS */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#1A1612] border border-white/10 self-start lg:self-auto">
            {lightPresets.map((preset) => {
              const isSelected = activeLight === preset.id;
              const Icon = preset.icon;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActiveLight(preset.id)}
                  className={`interactive-control min-h-[44px] px-3.5 sm:px-4 py-2 rounded-xl text-xs font-serif transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-[var(--gold)] text-[#0E0C0A] font-semibold shadow-md"
                      : "text-[#B8AEA2] hover:text-white"
                  }`}
                >
                  <Icon size={16} weight={isSelected ? "fill" : "regular"} />
                  <span>{preset.label[locale]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================================
            2. FINISH SELECTION STRIP (Tactile Swatch Buttons)
        ===================================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {finishes.map((f) => {
            const isSelected = activeFinishId === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFinishId(f.id)}
                className={`interactive-control p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3.5 ${
                  isSelected
                    ? "bg-[#1E1914] border-[var(--gold)] shadow-xl"
                    : "bg-[#16120E] border-white/10 hover:border-white/20 text-[#A69B8F]"
                }`}
              >
                {/* Physical Swatch Pill */}
                <span
                  className="w-7 h-7 rounded-full border border-white/25 shrink-0 shadow-sm"
                  style={{ backgroundColor: f.baseHex }}
                />
                <div className="min-w-0">
                  <div className={`text-xs sm:text-sm font-serif font-medium truncate ${isSelected ? "text-white" : "text-[#D8CFBF]"}`}>
                    {f.name[locale]}
                  </div>
                  <div className="text-[10px] text-[#8A7F73] truncate mt-0.5">
                    LRV {f.lrv} · {f.sheen[locale].split(" ")[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            3. MAIN LIGHTING VIEWPORT & ARCHITECTURAL COLORIMETRY CARD
        ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLS: OPTICALLY FILTERED PHOTOGRAPHY VIEWPORT */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-[#181410] border border-white/10 shadow-2xl flex flex-col">
            {/* Viewport Header Bar */}
            <div className="px-5 py-3.5 border-b border-white/8 bg-[#1F1914] flex flex-wrap items-center justify-between gap-3 text-xs text-[#B8AEA2]">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: currentFinish.baseHex }}
                />
                <span className="font-serif italic text-sm text-white">
                  {currentFinish.name[locale]}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-serif text-[var(--gold)]">
                <span>{currentLightPreset.label[locale]}</span>
                <span>·</span>
                <span className="font-mono text-[11px]">{currentLightPreset.kelvin}</span>
              </div>
            </div>

            {/* Main Photography Viewport with Dynamic Optical Kelvin Filter */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#100D0A] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentFinish.id}-${activeLight}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={currentFinish.photoUrl}
                    alt={currentFinish.photoAlt}
                    style={{ filter: currentLightPreset.filterStyle }}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  {/* Subtle ambient lighting bloom overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-700"
                    style={{ backgroundColor: currentLightPreset.ambientColor }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* On-Viewport Floating Telemetry Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-serif text-xs sm:text-sm text-[#FAF8F5]">
                      {currentLightPreset.description[locale]}
                    </span>
                    <span className="hidden sm:inline-block font-mono text-[11px] text-[var(--gold)] bg-black/70 px-3 py-1 rounded-full border border-white/10">
                      {currentLightPreset.kelvin}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Swatch Advice Bar */}
            <div className="p-4 bg-[#1C1814] border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-serif italic text-[#B8AEA2]">
                  {locale === "en" ? "Light Reflectance Value (LRV):" : "Índice de Reflexión Lumínica (LRV):"}
                </span>
                <span className="font-mono text-sm text-[var(--gold)] font-bold">
                  {currentFinish.lrv} / 100
                </span>
                <span className="text-[11px] text-[#8A7F73]">
                  {currentFinish.lrv > 60
                    ? locale === "en"
                      ? "High light distribution"
                      : "Alta distribución de luz"
                    : locale === "en"
                    ? "Deep dramatic grounding"
                    : "Carácter profundo y sobrio"}
                </span>
              </div>

              <button
                type="button"
                onClick={handleTogglePin}
                className={`interactive-control min-h-[36px] px-3.5 py-1.5 rounded-full text-xs font-serif transition-all inline-flex items-center gap-1.5 border self-start sm:self-auto ${
                  isPinned
                    ? "bg-[var(--gold)] text-[#0E0C0A] border-transparent font-semibold shadow-sm"
                    : "border-white/20 text-white hover:border-[var(--gold)]"
                }`}
              >
                {isPinned ? <Check size={14} weight="bold" /> : <BookmarkSimple size={14} />}
                <span>
                  {isPinned
                    ? locale === "en"
                      ? "Pinned to Design Tray"
                      : "Guardado en Muestras"
                    : locale === "en"
                    ? "Pin to Design Tray"
                    : "Guardar Muestra"}
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT 4 COLS: RAUL BURGOS' LIGHTING ADVICE & BULB RECOMMENDATIONS */}
          <div className="lg:col-span-4 rounded-3xl bg-[#181410] border border-white/10 p-6 sm:p-7 shadow-xl space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-serif italic text-[var(--gold)]">
                {locale === "en" ? "Architectural Colorimetry" : "Colorimetría y Diseño Lumínico"}
              </span>
              <h3 className="text-2xl font-serif font-normal text-[#FAF8F5] leading-snug">
                {currentFinish.name[locale]}
              </h3>
              <p className="text-xs text-[#8A7F73] font-mono">
                {currentFinish.chemistry[locale]} · {currentFinish.sheen[locale]}
              </p>
            </div>

            {/* Dynamic Advice for Active Light Condition */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-serif text-[var(--gold)] font-semibold">
                <Sun size={15} weight="fill" />
                <span>
                  {locale === "en"
                    ? `Behavior Under ${currentLightPreset.label.en}:`
                    : `Comportamiento en ${currentLightPreset.label.es}:`}
                </span>
              </div>
              <p className="text-xs text-[#EAE2D5] leading-relaxed">
                {currentFinish.lightingAdvice[activeLight][locale]}
              </p>
            </div>

            {/* Recommended Kelvin Bulb Specification */}
            <div className="p-5 rounded-2xl bg-[#14100D] border border-white/10 space-y-2">
              <span className="text-xs font-serif italic text-[#B8AEA2] block">
                {locale === "en" ? "Raul's Lighting Recommendation:" : "Recomendación Lumínica de Raul:"}
              </span>
              <div className="text-sm font-serif font-medium text-white flex items-center gap-2">
                <Compass size={16} className="text-[var(--gold)]" />
                <span>{currentFinish.recommendedKelvin}</span>
              </div>
              <p className="text-[11px] text-[#8A7F73] leading-relaxed">
                {locale === "en"
                  ? "We formulate our finishes to avoid the dreaded green or pink color-casts common when cheap paints react to high-CRI Arizona LED lighting."
                  : "Formulamos nuestras lacas para evitar reflejos verdosos o rosados indeseados al recibir iluminación LED de alto rendimiento."}
              </p>
            </div>

            {/* Consultation Booking Button */}
            <div className="pt-2">
              <a
                href="/contacto"
                className="interactive-control min-h-[48px] w-full rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#0E0C0A] text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <span>
                  {locale === "en"
                    ? "Order Physical Samples to Your Home"
                    : "Solicitar Muestra Física a Domicilio"}
                </span>
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
