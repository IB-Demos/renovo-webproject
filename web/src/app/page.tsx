"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO, BEFORE_AFTER_PAIRS } from "@/lib/company-data/portfolio";
import { ArchitecturalDraftingTable } from "@/components/architectural/ArchitecturalDraftingTable";
import { DesertLightEngine } from "@/components/architectural/DesertLightEngine";
import { CabinetDecisionMatrix } from "@/components/architectural/CabinetDecisionMatrix";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
import { CraftChronology } from "@/components/architectural/CraftChronology";
import { ExplodedCabinetJoinery } from "@/components/architectural/ExplodedCabinetJoinery";
import {
  Sparkle,
  ArrowRight,
  Phone,
  ArrowsLeftRight,
  ShieldCheck,
  CheckCircle,
  MapPin,
  Clock,
  Compass,
  Palette,
  Hammer,
} from "@phosphor-icons/react";

export default function HomePage() {
  const { locale, t } = useRenovo();

  // Hero Quick-Switch Showcase
  const [heroTab, setHeroTab] = useState<"kitchen" | "furniture" | "finish">("kitchen");

  // Spotlight Before/After state
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);
  const [spotlightSliderPos, setSpotlightSliderPos] = useState(50);

  // Interactive Material Preview state
  const [activeFinish, setActiveFinish] = useState<"white-oak" | "alabaster" | "navy" | "sage">("white-oak");

  const heroShowcase = {
    kitchen: {
      image: "/assets/kitchens/kitchen-01.jpg",
      tagEn: "Paradise Valley Residence · Fine Cabinetry",
      tagEs: "Residencia en Paradise Valley · Ebanistería Fina",
      titleEn: "Bespoke Alabaster Kitchen & Center Island",
      titleEs: "Cocina a Medida en Alabastro con Isla Central",
      specEn: "Solid Maple Dovetail Joinery · Blum Soft-Close Runners",
      specEs: "Cajones en Cola de Milano · Herrajes Blum Ocultos",
    },
    furniture: {
      image: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
      tagEn: "Scottsdale Residence · Architectural Millwork",
      tagEs: "Residencia en Scottsdale · Ebanistería Arquitectónica",
      titleEn: "Twin Arched Fireplace Niches & Floating Shelving",
      titleEs: "Nichos Gemelos Arqueados con Repisas Flotantes",
      specEn: "Handcrafted Arched Framing · Integrated Warm 2700K Lighting",
      specEs: "Cabezal Curvo Hecho a Mano · Iluminación Cálida 2700K",
    },
    finish: {
      image: "/assets/painting-interior/interior-01.jpg",
      tagEn: "Arcadia Phoenix · Fine Residential Finishes",
      tagEs: "Arcadia Phoenix · Acabados Finos Residenciales",
      titleEn: "Velvet Ceilings & Factory Sprayed Architectural Trim",
      titleEs: "Plafones Aterciopelados y Molduras de Fábrica",
      specEn: "HEPA Dustless Preparation · High-Adhesion 2K Topcoats",
      specEs: "Preparación HEPA sin Polvo · Acabados 2K de Alta Resistencia",
    },
  };

  const activeSpotlight = BEFORE_AFTER_PAIRS[activeSpotlightIdx] || BEFORE_AFTER_PAIRS[0];

  const finishDetails = {
    "white-oak": {
      nameEn: "Rift-Cut Natural White Oak",
      nameEs: "Roble Blanco Natural Corte Recto",
      undertoneEn: "Warm linear grain with matte waterborne protective clear coat",
      undertoneEs: "Veta lineal cálida protegida con barniz acrílico mate transparente",
      image: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
      sheen: "Matte (8% Sheen)",
      hex: "#C79F67",
    },
    alabaster: {
      nameEn: "Navajo Alabaster 2K Lacquer",
      nameEs: "Laca Alabastro Navajo 2K",
      undertoneEn: "Warm architectural ivory with velvet factory spray finish",
      undertoneEs: "Marfil arquitectónico cálido con tersura de cabina industrial",
      image: "/assets/kitchens/kitchen-05.jpg",
      sheen: "Satin Velvet (18% Sheen)",
      hex: "#EDE7DC",
    },
    navy: {
      nameEn: "Midnight Indigo Slate 2K",
      nameEs: "Laca Azul Medianoche 2K",
      undertoneEn: "Deep grounded navy with rich depth for focal islands and bars",
      undertoneEs: "Azul profundo con gran cuerpo para islas focales y cavas",
      image: "/assets/kitchens/kitchen-14.jpg",
      sheen: "Satin Velvet (20% Sheen)",
      hex: "#22303C",
    },
    sage: {
      nameEn: "Botanical Desert Sage 2K",
      nameEs: "Laca Verde Salvia Botánica 2K",
      undertoneEn: "Organic desert olive-sage inspired by Arizona flora",
      undertoneEs: "Salvia olivo orgánico inspirado en la flora de Arizona",
      image: "/assets/painting-interior/interior-03.jpg",
      sheen: "Low Lustre (15% Sheen)",
      hex: "#3D5A45",
    },
  };

  return (
    <div className="w-full bg-[#F4EFE6] text-[#261F1A] selection:bg-[#B85D3B] selection:text-[#FCFAF7]">
      {/* =====================================================================
          1. CINEMATIC LUXURY HERO (Sonoran Mineral Canvas, Warm Earth & Clay)
      ===================================================================== */}
      <section className="relative min-h-[90vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#EFE8DD] border-b border-[#DFD6C6]">
        {/* Atmospheric Background with soft natural veil */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroTab}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.22, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={heroShowcase[heroTab].image}
                alt="Renovo Craftsmanship"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          {/* Subtle warm architectural wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#EFE8DD] via-[#EFE8DD]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EFE8DD] via-[#EFE8DD]/40 to-transparent" />
        </div>

        {/* Ambient Warm Mineral Sunlight Diffusion */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B85D3B]/10 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left 7 Columns: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Minimalist Heritage Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF7]/90 border border-[#DFD6C6] backdrop-blur-md shadow-xs">
                <Sparkle size={13} className="text-[#B85D3B]" weight="fill" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#6B5E52] font-serif font-medium">
                  {locale === "en"
                    ? "PHOENIX, ARIZONA · BESPOKE ATELIER"
                    : "PHOENIX, ARIZONA · TALLER DE AUTOR"}
                </span>
              </div>

              {/* Main Grand Serif Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-normal leading-[1.06] tracking-[-0.025em] font-serif text-[#261F1A]">
                {t.hero.headlinePart1}{" "}
                <span className="italic text-[#B85D3B] font-normal">
                  {t.hero.headlineItalic}
                </span>{" "}
                {t.hero.headlinePart2}
              </h1>

              {/* Editorial Subhead */}
              <p className="text-base sm:text-xl text-[#6B5E52] leading-relaxed max-w-2xl font-light">
                {locale === "en"
                  ? "From grain-matched rift-cut white oak arched built-ins to factory 2K catalyzed kitchens, Raul Burgos and our dedicated craftsmen design, hand-build, and finish timeless living spaces across Arizona."
                  : "Desde libreros arqueados en encino blanco hasta cocinas completas en laca catalizada 2K, Raul Burgos y nuestro equipo de artesanos diseñan, construyen a mano y transforman residencias en todo Arizona."}
              </p>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
                <Link
                  href="/contacto"
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-sm font-semibold tracking-wide flex items-center justify-center gap-2.5 shadow-md transition-all duration-200 active:scale-98 w-full sm:w-auto"
                >
                  <span>{locale === "en" ? "Schedule In-Home Consultation" : "Agendar Consulta en Sitio"}</span>
                  <ArrowRight size={16} weight="bold" />
                </Link>

                <Link
                  href="/studio-interactivo"
                  className="interactive-control min-h-[52px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#261F1A] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#261F1A] text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-xs w-full sm:w-auto"
                >
                  <Compass size={17} className="text-[#B85D3B]" />
                  <span>{locale === "en" ? "Interactive Design Atelier" : "Estudio Interactivo"}</span>
                </Link>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control hidden sm:inline-flex items-center gap-2 text-sm text-[#6B5E52] hover:text-[#B85D3B] ml-2 transition-colors"
                >
                  <Phone size={16} className="text-[#B85D3B]" />
                  <span className="font-serif tabular-nums font-medium">{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Floating Interactive Showcase Card */}
            <div className="lg:col-span-5">
              <div className="p-3 sm:p-4 rounded-3xl bg-[#FCFAF7]/95 border border-[#DFD6C6] backdrop-blur-xl shadow-xl space-y-3">
                {/* Mode Selector Tabs (Refined Warm Pill Switcher) */}
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] text-center">
                  {(
                    [
                      { id: "kitchen", labelEn: "Kitchens", labelEs: "Cocinas" },
                      { id: "furniture", labelEn: "Built-Ins", labelEs: "Muebles" },
                      { id: "finish", labelEn: "Finishes", labelEs: "Acabados" },
                    ] as const
                  ).map((tab) => {
                    const isSelected = heroTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setHeroTab(tab.id)}
                        className={`interactive-control py-2 px-2 rounded-xl text-xs font-serif transition-all ${
                          isSelected
                            ? "bg-[#B85D3B] text-[#FCFAF7] font-semibold shadow-xs"
                            : "text-[#6B5E52] hover:text-[#261F1A]"
                        }`}
                      >
                        {locale === "en" ? tab.labelEn : tab.labelEs}
                      </button>
                    );
                  })}
                </div>

                {/* Viewport Image */}
                <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#261F1A] border border-[#DFD6C6]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={heroTab}
                      src={heroShowcase[heroTab].image}
                      alt={heroShowcase[heroTab].titleEn}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 space-y-1">
                    <div className="text-[10px] font-serif uppercase tracking-wider text-[#C59B27] font-semibold">
                      {locale === "en" ? heroShowcase[heroTab].tagEn : heroShowcase[heroTab].tagEs}
                    </div>
                    <div className="text-sm sm:text-base font-serif font-normal text-white">
                      {locale === "en" ? heroShowcase[heroTab].titleEn : heroShowcase[heroTab].titleEs}
                    </div>
                  </div>
                </div>

                {/* Spec Note */}
                <div className="px-2 py-1 text-[11px] text-[#6B5E52] flex items-center justify-between">
                  <span>{locale === "en" ? heroShowcase[heroTab].specEn : heroShowcase[heroTab].specEs}</span>
                  <Link
                    href={
                      heroTab === "kitchen"
                        ? "/cocinas-y-gabinetes"
                        : heroTab === "furniture"
                        ? "/muebles-a-medida"
                        : "/pintura-residencial"
                    }
                    className="text-[#B85D3B] hover:underline inline-flex items-center gap-1 shrink-0 font-medium ml-2"
                  >
                    <span>{locale === "en" ? "Explore" : "Ver más"}</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Bottom Credential Bar */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-[#DFD6C6] bg-[#FCFAF7]/90 backdrop-blur-md py-3.5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B5E52]">
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#B85D3B]" weight="fill" />
              <span>{locale === "en" ? "10+ Years Serving Arizona" : "Más de 10 Años en Arizona"}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#B85D3B]" weight="fill" />
              <span>{locale === "en" ? "KCMA & 2K Catalyzed Chemistry" : "Norma KCMA y Lacas Catalizadas 2K"}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Hammer size={15} className="text-[#B85D3B]" weight="fill" />
              <span>{locale === "en" ? "100% Handcrafted in Phoenix" : "Fabricación a Mano en Phoenix"}</span>
            </div>
            <div className="flex items-center gap-2 font-serif text-[12px]">
              <MapPin size={15} className="text-[#B85D3B]" />
              <span>2231 W Shangri La Rd, Phoenix, AZ</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. THE THREE MASTER DISCIPLINES (Warm Sonoran Earth Gallery)
      ===================================================================== */}
      <section className="py-20 lg:py-28 bg-[#EAE2D5] border-b border-[#DFD6C6] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
              {locale === "en" ? "MASTER DISCIPLINES" : "NUESTRAS ESPECIALIDADES"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#261F1A] tracking-tight">
              {locale === "en"
                ? "Every Space Built with Soul, Art & Precision."
                : "Cada Espacio Creado con Alma, Arte y Precisión."}
            </h2>
            <p className="text-base text-[#6B5E52] leading-relaxed font-light">
              {locale === "en"
                ? "We don't do mass-produced boxes. From raw hardwood selection to the final coat of 2K catalyzed finish, every project is handled by our dedicated Phoenix craftsmen."
                : "No hacemos muebles genéricos. Desde la selección de madera noble hasta la última mano de laca catalizada 2K, cada proyecto es ejecutado por nuestros artesanos en Phoenix."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Discipline 01: Kitchens */}
            <article className="group rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#261F1A]">
                  <img
                    src="/assets/kitchens/kitchen-02.jpg"
                    alt="Custom Kitchens by Renovo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#261F1A]/85 backdrop-blur-md text-[11px] font-serif italic text-[#C59B27] border border-white/10 shadow-xs">
                    {locale === "en" ? "01 · Fine Cabinetry" : "01 · Ebanistería Fina"}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-2xl font-serif font-normal text-[#261F1A]">
                    {locale === "en" ? "Custom Kitchens & Cabinetry" : "Cocinas y Gabinetes a Medida"}
                  </h3>
                  <p className="text-sm text-[#6B5E52] leading-relaxed font-light">
                    {locale === "en"
                      ? "Custom-built islands, recessed Shaker door profiles, Blum soft-close concealed hardware, and durable 2K polyurethane finishes resistant to heat and moisture."
                      : "Islas a medida, perfiles de puerta Shaker, herrajes ocultos Blum de cierre suave y acabados catalizados 2K ultra-resistentes al calor y la grasa."}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-[#DFD6C6]">
                <Link
                  href="/cocinas-y-gabinetes"
                  className="interactive-control inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] hover:text-[#261F1A] font-semibold transition-colors"
                >
                  <span>{locale === "en" ? "Explore Kitchens & Atelier" : "Ver Cocinas y Estudio"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Discipline 02: Built-Ins & Millwork */}
            <article className="group rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#261F1A]">
                  <img
                    src="/assets/blueprints-and-docs/custom-furniture-01.jpg"
                    alt="Custom Arched Built-Ins by Renovo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#261F1A]/85 backdrop-blur-md text-[11px] font-serif italic text-[#C59B27] border border-white/10 shadow-xs">
                    {locale === "en" ? "02 · Custom Built-Ins" : "02 · Muebles de Autor"}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-2xl font-serif font-normal text-[#261F1A]">
                    {locale === "en" ? "Architectural Built-Ins & Furniture" : "Muebles de Autor y Built-Ins"}
                  </h3>
                  <p className="text-sm text-[#6B5E52] leading-relaxed font-light">
                    {locale === "en"
                      ? "Arched rift-cut white oak fireplace niches, floating entertainment centers, illuminated stemware credenzas, and custom bathroom vanities."
                      : "Nichos gemelos arqueados en encino blanco, centros de entretenimiento flotantes, cavas de vino iluminadas y muebles de baño de autor."}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-[#DFD6C6]">
                <Link
                  href="/muebles-a-medida"
                  className="interactive-control inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] hover:text-[#261F1A] font-semibold transition-colors"
                >
                  <span>{locale === "en" ? "Explore Custom Furniture" : "Ver Muebles a Medida"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Discipline 03: Painting & Fine Finishes */}
            <article className="group rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#261F1A]">
                  <img
                    src="/assets/painting-interior/interior-01.jpg"
                    alt="Fine Architectural Painting by Renovo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#261F1A]/85 backdrop-blur-md text-[11px] font-serif italic text-[#C59B27] border border-white/10 shadow-xs">
                    {locale === "en" ? "03 · Fine Residential Finishes" : "03 · Acabados Finos"}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-2xl font-serif font-normal text-[#261F1A]">
                    {locale === "en" ? "Residential & Exterior Painting" : "Pintura Residencial y Acabados"}
                  </h3>
                  <p className="text-sm text-[#6B5E52] leading-relaxed font-light">
                    {locale === "en"
                      ? "HEPA dustless surface preparation, velvet interior wall enamels, and UV-shield elastomeric coatings that resist fading under the Arizona sun."
                      : "Lijado HEPA sin polvo, esmaltes aterciopelados para muros interiores y recubrimientos elastoméricos con filtro UV para el sol de Arizona."}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-[#DFD6C6]">
                <Link
                  href="/pintura-residencial"
                  className="interactive-control inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] hover:text-[#261F1A] font-semibold transition-colors"
                >
                  <span>{locale === "en" ? "Explore Painting & Color" : "Ver Pintura y Color"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXCLUSIVE FEATURE 01: THE ARCHITECTURAL DRAFTING TABLE
      ===================================================================== */}
      <ArchitecturalDraftingTable />

      {/* =====================================================================
          3. FEATURED TRANSFORMATION SPOTLIGHT (Seamless Before / After Reveal)
      ===================================================================== */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left 5 Cols: Storytelling & Project Selectors */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
                {locale === "en" ? "TRANSFORMATION SPOTLIGHT" : "CASO DE ÉXITO EN PHOENIX"}
              </div>

              <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#261F1A]">
                {locale === "en"
                  ? "From Dated Stained Oak to Factory Alabaster Elegance."
                  : "De Madera Desgastada a Elegancia de Fábrica."}
              </h2>

              <p className="text-base text-[#6B5E52] font-light leading-relaxed">
                {locale === "en"
                  ? "Witness how our 4-stage preparation and 2K catalyzed factory spraying completely reimagined this Phoenix residence, without replacing the existing cabinet framework."
                  : "Observa cómo nuestro protocolo de 4 etapas y aplicación catalizada 2K transformó esta residencia en Phoenix sin necesidad de demoler los gabinetes."}
              </p>

              {/* Case details pill */}
              <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] space-y-2 text-xs shadow-xs">
                <div className="text-sm font-serif font-semibold text-[#261F1A]">
                  {activeSpotlight.title[locale]}
                </div>
                <div className="text-[#B85D3B] font-serif font-medium">
                  {activeSpotlight.systemUsed[locale]}
                </div>
                <div className="text-[#6B5E52] pt-1 flex items-center gap-1.5">
                  <Clock size={14} className="text-[#B85D3B]" />
                  <span>
                    {locale === "en"
                      ? `Completed in ${activeSpotlight.completionDays} working days in Phoenix, AZ.`
                      : `Terminado en ${activeSpotlight.completionDays} días hábiles en Phoenix, AZ.`}
                  </span>
                </div>
              </div>

              {/* Project Quick-Switch Tabs */}
              <div className="flex flex-wrap gap-2 pt-1">
                {BEFORE_AFTER_PAIRS.map((pair, idx) => (
                  <button
                    key={pair.id}
                    type="button"
                    onClick={() => {
                      setActiveSpotlightIdx(idx);
                      setSpotlightSliderPos(50);
                    }}
                    className={`interactive-control px-3.5 py-1.5 rounded-full text-xs font-serif uppercase tracking-wider transition-all ${
                      idx === activeSpotlightIdx
                        ? "bg-[#B85D3B] text-[#FCFAF7] font-bold shadow-xs"
                        : "bg-[#FCFAF7] border border-[#DFD6C6] text-[#6B5E52] hover:text-[#261F1A] shadow-xs"
                    }`}
                  >
                    Case 0{idx + 1}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/transformaciones"
                  className="interactive-control inline-flex items-center gap-2 text-sm font-semibold text-[#261F1A] hover:text-[#B85D3B] transition-colors"
                >
                  <span>{locale === "en" ? "View Full Documentary & All 4 Cases" : "Ver Documental Completo y Casos"}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Before / After Split Slider */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[#DFD6C6] shadow-xl bg-[#261F1A] select-none touch-pan-y">
                {/* AFTER IMAGE (Base Layer) */}
                <img
                  src={activeSpotlight.afterImage}
                  alt="After Transformation"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* BEFORE IMAGE (Clipped Layer) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - spotlightSliderPos}% 0 0)` }}
                >
                  <img
                    src={activeSpotlight.beforeImage}
                    alt="Before Transformation"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Badges */}
                <span className="pointer-events-none absolute top-3.5 left-3.5 bg-[#261F1A]/85 border border-white/20 px-2.5 py-1 rounded font-serif text-[11px] uppercase tracking-wider text-white backdrop-blur-xs shadow-md">
                  {locale === "en" ? "ORIGINAL BEFORE" : "ORIGINAL ANTES"}
                </span>
                <span className="pointer-events-none absolute top-3.5 right-3.5 bg-[#475845]/90 border border-white/20 px-2.5 py-1 rounded font-serif text-[11px] uppercase tracking-wider text-white backdrop-blur-xs shadow-md">
                  {locale === "en" ? "RENOVO 2K FINISH" : "ACABADO RENOVO 2K"}
                </span>

                {/* Divider Line & Handle */}
                <div
                  className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)]"
                  style={{ left: `${spotlightSliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#B85D3B] text-[#FCFAF7] shadow-2xl">
                    <ArrowsLeftRight size={18} weight="bold" />
                  </div>
                </div>

                {/* Accessible Range Input */}
                <input
                  type="range"
                  min={5}
                  max={95}
                  value={spotlightSliderPos}
                  onChange={(e) => setSpotlightSliderPos(Number(e.target.value))}
                  aria-label="Before and After transformation slider"
                  className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXCLUSIVE FEATURE 06: EXPLODED CABINET ANATOMY & JOINERY
      ===================================================================== */}
      <ExplodedCabinetJoinery />

      {/* =====================================================================
          EXCLUSIVE FEATURE 02: THE ARIZONA DESERT LIGHT ENGINE
      ===================================================================== */}
      <DesertLightEngine />

      {/* =====================================================================
          EXCLUSIVE FEATURE 03: CABINET DECISION MATRIX (Refacing vs. Custom)
      ===================================================================== */}
      <CabinetDecisionMatrix />

      {/* =====================================================================
          EXCLUSIVE FEATURE 05: THE 7-STAGE CRAFT CHRONOLOGY (Shop Documentary)
      ===================================================================== */}
      <CraftChronology />

      {/* =====================================================================
          5. THE RAUL BURGOS STORY & PHOENIX WORKSHOP (Soulful Heritage)
      ===================================================================== */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
                {locale === "en" ? "FOUNDER & HERITAGE" : "HISTORIA Y ARTESANÍA"}
              </div>

              <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#261F1A] leading-[1.12]">
                {locale === "en"
                  ? "Crafting Spaces with Passion, Warmth and Enduring Soul."
                  : "Creando Espacios con Pasión, Calidez y un Alma que Perdura."}
              </h2>

              <div className="space-y-4 text-base text-[#6B5E52] font-light leading-relaxed">
                <p>
                  {locale === "en"
                    ? "Renovo started with an uncompromising standard: treat every kitchen, every arched fireplace bookcase, and every bathroom vanity as an heirloom piece of architectural furniture."
                    : "Renovo nació bajo un estándar inflexible: tratar cada cocina, cada librero arqueado y cada vanitorio como una pieza patrimonial de ebanistería arquitectónica."}
                </p>
                <p>
                  {locale === "en"
                    ? "In our workshop at 2231 W Shangri La Rd in Phoenix, master craftsman Raul Burgos oversees every cut, dovetail joinery, and 2K catalyzed lacquer application in climate-controlled spray booths."
                    : "En nuestro taller en 2231 W Shangri La Rd en Phoenix, el maestro ebanista Raul Burgos supervisa cada ensamble en cola de milano y cada aplicación de laca catalizada 2K en cabinas profesionales."}
                </p>
              </div>

              {/* Founder Quote */}
              <div className="p-6 rounded-2xl bg-[#FCFAF7] border-l-4 border-[#B85D3B] border-y border-r border-[#DFD6C6] text-sm text-[#261F1A] italic font-serif shadow-xs">
                {locale === "en"
                  ? '"When you run your hand across one of our cabinet doors, you feel zero brush marks, zero roller orange-peel, just pure velvet smoothness that lasts for decades."'
                  : '"Cuando pasas la mano por una de nuestras puertas, sientes cero marcas de brocha o rodillo, solo una tersura aterciopelada que perdura por décadas."'}
                <div className="mt-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] font-bold not-italic">
                  Raul Burgos · Founder & Master Craftsman
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/nosotros"
                  className="interactive-control inline-flex items-center gap-2 text-sm font-semibold text-[#261F1A] hover:text-[#B85D3B] transition-colors"
                >
                  <span>{locale === "en" ? "Learn More About Our Journey & Shop" : "Conoce Nuestra Historia y Taller"}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Visual Mosaic of Real Workshop Photos */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-[#DFD6C6] shadow-xl">
                <img
                  src="/assets/kitchens/kitchen-05.jpg"
                  alt="Renovo Kitchen in Paradise Valley"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-[#DFD6C6] shadow-md">
                  <img
                    src="/assets/blueprints-and-docs/custom-furniture-04.jpg"
                    alt="Custom Furniture Detail"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#DFD6C6] shadow-md">
                  <img
                    src="/assets/painting-interior/interior-02.jpg"
                    alt="Interior Paint Detail"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXCLUSIVE FEATURE 04: ATELIER SAMPLE BOX CONCIERGE (Curated Kit)
      ===================================================================== */}
      <SampleBoxConcierge />

      {/* =====================================================================
          6. GRAND CONSULTATION CALL TO ACTION (Deep Roasted Walnut Anchor)
      ===================================================================== */}
      <section className="py-20 lg:py-28 bg-[#261F1A] text-[#FAF8F5] border-t border-[#3D332B] relative overflow-hidden">
        {/* Soft Terracotta Glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B85D3B]/15 blur-[130px] rounded-full" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-serif uppercase tracking-widest text-[#C59B27]">
              <Sparkle size={13} weight="fill" />
              <span>{locale === "en" ? "READY TO BEGIN?" : "¿LISTO PARA COMENZAR?"}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5] tracking-tight">
              {locale === "en"
                ? "Let's Craft Something Extraordinary for Your Home."
                : "Creemos Algo Extraordinario para tu Residencia."}
            </h2>

            <p className="text-base sm:text-lg text-[#D4CBBF] font-light max-w-2xl mx-auto">
              {locale === "en"
                ? "Schedule an in-home evaluation with Raul Burgos or visit our Phoenix workshop on Shangri La Rd to test physical samples and review your architectural vision."
                : "Agenda una evaluación en sitio con Raul Burgos o visita nuestro taller en Shangri La Rd en Phoenix para examinar muestras y planear tu proyecto."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Book an On-Site Consultation" : "Agendar Consulta en Sitio"}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>

              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[52px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[#C59B27]" />
                <span className="font-serif tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
