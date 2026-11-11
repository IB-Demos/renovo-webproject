"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo, CasaRoomId } from "@/context/RenovoContext";
import { COMPANY_INFO, BEFORE_AFTER_PAIRS } from "@/lib/company-data/portfolio";
import { motionTokens } from "@/lib/motionTokens";
import { AtelierVideoReelsShowcase } from "@/components/architectural/AtelierVideoReelsShowcase";
import { MolecularCoatingMotionGraphic } from "@/components/architectural/MolecularCoatingMotionGraphic";
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
  Hammer,
  Check,
  X,
} from "@phosphor-icons/react";

export default function HomePage() {
  const { locale, t, setActiveRoom } = useRenovo();

  // Scroll-Driven Integral Casa Renovo Observer for ambient lighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const room = entry.target.getAttribute("data-casa-room") as CasaRoomId | null;
            if (room) {
              setActiveRoom(room);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.1,
      }
    );

    const zones = document.querySelectorAll("[data-casa-room]");
    zones.forEach((z) => observer.observe(z));

    return () => observer.disconnect();
  }, [setActiveRoom]);

  // Hero Quick-Switch Showcase (4 Core Services)
  const [heroTab, setHeroTab] = useState<"paintingInterior" | "paintingExterior" | "furniture" | "kitchen">("paintingInterior");

  // Residential Painting Deep-Dive Tab (Interior / Exterior / Entry Doors)
  const [paintingFocusTab, setPaintingFocusTab] = useState<"interior" | "exterior" | "doors">("interior");

  // Spotlight Before/After state (Default to Entry Door Restoration Case 02 or Kitchen Case 01)
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(1);
  const [spotlightSliderPos, setSpotlightSliderPos] = useState(50);

  const heroShowcase = {
    paintingInterior: {
      image: "/assets/painting-interior/interior-01.jpg",
      tagEn: "Arcadia Phoenix · Interior Residential Painting",
      tagEs: "Arcadia Phoenix · Pintura Residencial Interior",
      titleEn: "HEPA Dustless Interior Walls, Velvet Ceilings & Trim",
      titleEs: "Muros, Plafones Aterciopelados y Molduras sin Polvo HEPA",
      specEn: "99.97% Dustless Festool Prep · Zero-VOC Washable Enamels",
      specEs: "Lijado HEPA 99.97% sin Polvo · Esmaltes Lavables 0-VOC",
      href: "/pintura-residencial",
    },
    paintingExterior: {
      image: "/assets/painting-exterior/exterior-01.jpg",
      tagEn: "Scottsdale & Phoenix · Exterior UV Armor",
      tagEs: "Scottsdale y Phoenix · Blindaje Exterior UV",
      titleEn: "Elastomeric Stucco, Pergolas & Monumental Entryways",
      titleEs: "Estuco Elastomérico, Pérgolas y Fachadas contra Sol 115°F+",
      specEn: "100% Acrylic Elastomeric Shield · Thermal Crack Sealing",
      specEs: "Escudo Acrílico Elastomérico · Sellado Térmico de Grietas",
      href: "/pintura-residencial",
    },
    furniture: {
      image: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
      tagEn: "Scottsdale Residence · Architectural Millwork",
      tagEs: "Residencia en Scottsdale · Muebles a Medida",
      titleEn: "Twin Arched Fireplace Niches & Floating Media Walls",
      titleEs: "Libreros Gemelos Arqueados, Muros de TV y Cavas",
      specEn: "Handcrafted Rift White Oak · Integrated Warm 2700K LED",
      specEs: "Encino Blanco Hecho a Mano · Iluminación Cálida 2700K",
      href: "/muebles-a-medida",
    },
    kitchen: {
      image: "/assets/kitchens/kitchen-01.jpg",
      tagEn: "Paradise Valley Residence · Kitchens & 2K Refacing",
      tagEs: "Residencia en Paradise Valley · Cocinas y Lacas 2K",
      titleEn: "Bespoke Alabaster Kitchens & Factory 2K Refinishing",
      titleEs: "Cocinas a Medida y Renovación en Laca Catalizada 2K",
      specEn: "Solid Maple Dovetail Joinery · KCMA 2K Spray Booth Finish",
      specEs: "Cajones en Cola de Milano · Acabado 2K de Cabina KCMA",
      href: "/cocinas-y-gabinetes",
    },
  };

  const paintingDeepDive = {
    interior: {
      badgeEn: "INTERIOR ARCHITECTURAL PAINTING · ZERO DUST",
      badgeEs: "PINTURA RESIDENCIAL INTERIOR · CERO POLVO",
      titleEn: "Impeccable Interior Walls, High Ceilings, Baseboards & Staircases.",
      titleEs: "Muros Interiores, Dobles Alturas, Zoclos y Escaleras con Perfección Láser.",
      descEn:
        "Painting an occupied luxury home requires surgical cleanliness. We seal floors and furniture hermetically, sand walls and trim with hospital-grade Festool HEPA extractors (capturing 99.97% of dust), caulk baseboards with laser-straight reveals, and apply odorless Zero-VOC washable velvet enamels.",
      descEs:
        "Pintar una residencia habitada exige limpieza quirúrgica. Protegemos pisos y mobiliario herméticamente, lijamos muros y molduras con aspiración Festool grado HEPA (capturando el 99.97% del polvo), perfilamos zoclos con cortes láser y aplicamos esmaltes aterciopelados 0-VOC lavables y sin olor.",
      mainImage: "/assets/painting-interior/interior-01.jpg",
      secondaryImage: "/assets/painting-interior/interior-05.jpg",
      CaptionMainEn: "Double-height living spaces & crisp architectural trim in Arcadia",
      CaptionMainEs: "Estancias de doble altura y molduras perfiladas al milímetro en Arcadia",
      specs: [
        {
          labelEn: "Dust Containment",
          labelEs: "Control de Polvo",
          valEn: "99.97% HEPA Extraction + ZipWall Air Locks",
          valEs: "Extracción HEPA 99.97% + Sellado Hermético",
        },
        {
          labelEn: "Wall & Ceiling Chemistry",
          labelEs: "Química para Muros y Plafones",
          valEn: "Zero-VOC Scrubbable Matte & Velvet Enamels",
          valEs: "Esmaltes Mate y Terciopelo 0-VOC Lavables",
        },
        {
          labelEn: "Trim, Doors & Baseboards",
          labelEs: "Zoclos, Puertas y Molduras",
          valEn: "HVLP Fine-Finish Urethane Enamel (Zero Brush Marks)",
          valEs: "Uretano por Aspersión Fina HVLP (Cero Brocha)",
        },
      ],
    },
    exterior: {
      badgeEn: "ARIZONA EXTERIOR & STUCCO SOLAR ARMOR · 115°F+ RATED",
      badgeEs: "PINTURA EXTERIOR Y ESTUCO · BLINDAJE SOLAR 45°C+",
      titleEn: "Engineered to Endure Punishing Sonoran UV Radiation & Monsoon Storms.",
      titleEs: "Diseñada para Resistir el Sol Extremo de Arizona y Tormentas de Monzón.",
      descEn:
        "Ninety percent of exterior paint jobs in Phoenix chalk, fade, or peel prematurely because contractors paint over dusty stucco. We hydro-wash at 3,000 PSI, trench and seal stucco hairline cracks with elastomeric urethane, prime alkali-burned zones, and spray high-build 100% acrylic elastomeric coatings.",
      descEs:
        "El 90% de las pinturas exteriores en Phoenix se decoloran o descarapelan porque pintan sobre estuco polvoso. Hidrolavamos a presión, sellamos grietas térmicas con poliuretano elástico, imprimamos zonas alcalinas y aplicamos recubrimientos 100% acrílicos elastoméricos de alto espesor con bloqueador UV.",
      mainImage: "/assets/painting-exterior/exterior-01.jpg",
      secondaryImage: "/assets/painting-exterior/exterior-02.jpg",
      CaptionMainEn: "Full exterior stucco, stone fascia & pergola armor in Phoenix Metro",
      CaptionMainEs: "Protección integral de fachada en estuco, fascias y pérgolas en Phoenix",
      specs: [
        {
          labelEn: "Substrate Preparation",
          labelEs: "Preparación de Fachada",
          valEn: "Hydro-Wash Decontamination + Elastomeric Trenching",
          valEs: "Hidrolavado Profundo + Sellado Elástico de Grietas",
        },
        {
          labelEn: "Stucco & Masonry Armor",
          labelEs: "Blindaje de Estuco y Muros",
          valEn: "100% Acrylic High-Build UV-Reflective Elastomeric",
          valEs: "Elastomérico 100% Acrílico Termorreflectivo UV",
        },
        {
          labelEn: "Fascias, Eaves & Ironwork",
          labelEs: "Fascias, Aleros y Herrería",
          valEn: "Rust-Inhibitive Primer + Direct-to-Metal Urethane",
          valEs: "Primer Anticorrosivo + Uretano de Alta Adherencia",
        },
      ],
    },
    doors: {
      badgeEn: "MONUMENTAL ENTRY DOORS, PORTICOS & CEDAR CEILINGS",
      badgeEs: "PUERTAS PRINCIPALES, PÓRTICOS Y CIELOS DE MADERA",
      titleEn: "Fine Restoration of Sun-Weathered Hardwood Entry Doors & Pergolas.",
      titleEs: "Restauración Artesanal de Puertas Dobles de Madera, Pórticos y Vigas.",
      descEn:
        "Your front entry door is the handshake of your residence—and the first surface attacked by west-facing desert sun. We strip failing varnish down to raw wood, apply custom hand-rubbed penetrating stains or 2K obsidian enamels, and seal with marine-grade UV-absorber topcoats.",
      descEs:
        "La puerta principal es la carta de presentación de tu casa y la superficie más castigada por el sol poniente. Retiramos barnices quemados hasta la madera virgen, aplicamos tintes penetrantes o esmaltes 2K y blindamos con poliuretanos marinos con filtro UV cerámico.",
      mainImage: "/assets/before-after/pair-02-double-door-after.jpg",
      secondaryImage: "/assets/before-after/pair-04-oak-door-after.jpg",
      CaptionMainEn: "Carved double entry door restored with espresso stain & marine UV shield",
      CaptionMainEs: "Puerta doble labrada restaurada con tinte espresso y barniz marino UV",
      specs: [
        {
          labelEn: "Wood Stripping & Sanding",
          labelEs: "Restauración de Madera",
          valEn: "Full Strip to Virgin Grain + Precision Glass Masking",
          valEs: "Desbaste a Poro Virgen + Enmascarado de Vitrales",
        },
        {
          labelEn: "Stain & Pigment System",
          labelEs: "Sistema de Tintes y Color",
          valEn: "Deep-Penetrating Oil Stains or 2K Exterior Satin",
          valEs: "Tintes de Penetración Profunda o Esmalte Exterior 2K",
        },
        {
          labelEn: "Solar UV Protection",
          labelEs: "Escudo Solar UV",
          valEn: "Multi-Layer Marine Urethane with Ceramic UV Blockers",
          valEs: "Uretano Marino Multicapa con Bloqueador Cerámico UV",
        },
      ],
    },
  };

  const activeSpotlight = BEFORE_AFTER_PAIRS[activeSpotlightIdx] || BEFORE_AFTER_PAIRS[0];

  const spotlightCaseLabels: Record<string, { en: string; es: string }> = {
    "pair-01-kitchen": { en: "01 · Kitchen 2K Conversion", es: "01 · Cocina Alabastro 2K" },
    "pair-02-double-door": { en: "02 · Carved Double Entry Door", es: "02 · Puerta Doble Exterior" },
    "pair-03-glass-door": { en: "03 · Leaded-Glass Entryway", es: "03 · Puerta Vitral Bronce" },
    "pair-04-oak-door": { en: "04 · Solid Oak Entry Door", es: "04 · Puerta Encino Carbón" },
  };

  const chemistryComparisons = [
    {
      featureEn: "Interior House Painting & Prep",
      featureEs: "Pintura Residencial Interior y Preparación",
      renovoEn: "Festool HEPA dustless sanding (99.97% dust capture), laser caulk lines & Zero-VOC washable velvet enamels",
      renovoEs: "Lijado Festool HEPA (99.97% sin polvo), perfilado láser en molduras y esmaltes 0-VOC lavables sin olor",
      standardEn: "Open hand-sanding that fills your home and AC ducts with drywall dust; low-grade flat paint that chalks when wiped",
      standardEs: "Lijado abierto que contamina muebles y ductos de aire; pintura económica que se mancha al intentar limpiarla",
    },
    {
      featureEn: "Exterior Stucco & Desert UV Armor",
      featureEs: "Pintura Exterior, Estuco y Sol de 115°F+",
      renovoEn: "3,000 PSI hydro-wash, elastomeric crack trenching, alkali sealers & 100% acrylic UV-reflective elastomeric coat",
      renovoEs: "Hidrolavado profundo, sellado elástico de grietas térmicas y recubrimiento 100% acrílico elastomérico con filtro UV",
      standardEn: "Spraying thinned latex over dusty stucco; hairline cracks reopen and color fades within 18–24 months",
      standardEs: "Aplicar pintura diluida sobre polvo; las grietas reaparecen y el sol quema el color en menos de dos veranos",
    },
    {
      featureEn: "Entry Doors, Trim & Exterior Woodwork",
      featureEs: "Puertas Principales, Molduras y Pérgolas",
      renovoEn: "Stripped to virgin grain, custom penetrating stains or HVLP urethane enamels + marine UV-blocker topcoats",
      renovoEs: "Desbaste a madera virgen, tintes penetrantes o uretano HVLP + barniz marino con absorbentes UV cerámicos",
      standardEn: "Brushing consumer polyurethane over old flaking varnish; blisters and peels under west-facing sun",
      standardEs: "Brochar barniz comercial sobre barniz viejo; se ampolla y descarapela con el sol poniente",
    },
    {
      featureEn: "Custom Millwork & Kitchen Cabinetry",
      featureEs: "Muebles a Medida y Gabinetes de Cocina",
      renovoEn: "Industrial 2K Catalyzed Polyurethane in positive-pressure spray booths (chemical cross-linking in 24h)",
      renovoEs: "Poliuretano Catalizado 2K en cabina presurizada (reticulación química molecular en 24h, cero brocha)",
      standardEn: "Consumer wall latex applied with rollers or brushes; leaves orange-peel texture and peels near sinks and stoves",
      standardEs: "Pintura de muro aplicada con brocha o rodillo; deja textura de piel de naranja y se desprende con la grasa",
    },
    {
      featureEn: "Proven Arizona Service Life",
      featureEs: "Vida Útil Comprobada en Arizona",
      renovoEn: "10 to 15+ years of structural and aesthetic integrity across interiors, exteriors, and millwork",
      renovoEs: "10 a 15+ años de durabilidad comprobada tanto en fachadas e interiores como en ebanistería fina",
      standardEn: "Requires costly repainting and stripping every 1 to 3 years",
      standardEs: "Requiere repintado y reparaciones costosas cada 1 a 3 años",
    },
  ];

  return (
    <div className="w-full bg-[#F4EFE6] text-[#261F1A] selection:bg-[#B85D3B] selection:text-[#FCFAF7]">
      {/* =====================================================================
          1. CINEMATIC LUXURY HERO (Sonoran Mineral Canvas, Warm Earth & Clay)
      ===================================================================== */}
      <section data-casa-room="kitchen" className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#EFE8DD] border-b border-[#DFD6C6]">
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

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left 7 Columns: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Minimalist Heritage Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF7]/90 border border-[#DFD6C6] shadow-xs">
                <Sparkle size={13} className="text-[#B85D3B]" weight="fill" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
                  {t.hero.eyebrow}
                </span>
              </div>

              {/* Main Grand Serif Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold leading-[1.06] tracking-[-0.02em] font-serif text-[#1A1410]">
                {t.hero.headlinePart1}{" "}
                <span className="italic text-[#B85D3B] font-medium">
                  {t.hero.headlineItalic}
                </span>{" "}
                {t.hero.headlinePart2}
              </h1>

              {/* Editorial Subhead */}
              <p className="text-lg sm:text-xl text-[#2E241D] leading-relaxed max-w-2xl font-normal">
                {t.hero.subhead}
              </p>

              {/* Quick Discipline Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Link
                  href="/pintura-residencial"
                  className="interactive-control px-3.5 py-1.5 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] text-xs font-serif font-semibold text-[#261F1A] inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#B85D3B]" />
                  <span>{locale === "en" ? "Interior & Exterior House Painting" : "Pintura Residencial Interior y Exterior"}</span>
                </Link>
                <Link
                  href="/muebles-a-medida"
                  className="interactive-control px-3.5 py-1.5 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] text-xs font-serif font-semibold text-[#261F1A] inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                  <span>{locale === "en" ? "Custom Built-Ins & Millwork" : "Muebles a Medida y Libreros"}</span>
                </Link>
                <Link
                  href="/cocinas-y-gabinetes"
                  className="interactive-control px-3.5 py-1.5 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] text-xs font-serif font-semibold text-[#261F1A] inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#475845]" />
                  <span>{locale === "en" ? "Custom Kitchens & 2K Refacing" : "Cocinas y Gabinetes 2K"}</span>
                </Link>
              </div>

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
                  <span>{locale === "en" ? "Interactive Design Studio" : "Estudio Interactivo"}</span>
                </Link>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control hidden sm:inline-flex items-center gap-2 text-sm text-[#3D3228] hover:text-[#B85D3B] ml-2 transition-colors"
                >
                  <Phone size={16} className="text-[#B85D3B]" />
                  <span className="font-serif tabular-nums font-medium">{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Floating Interactive Showcase Card */}
            <div className="lg:col-span-5">
              <div className="p-3 sm:p-4 rounded-3xl bg-[#FCFAF7]/95 border border-[#DFD6C6] backdrop-blur-xl shadow-xl space-y-3">
                {/* Mode Selector Tabs (4 Core Disciplines) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] text-center">
                  {(
                    [
                      { id: "paintingInterior", labelEn: "Interiors", labelEs: "Interiores" },
                      { id: "paintingExterior", labelEn: "Exteriors", labelEs: "Exteriores" },
                      { id: "furniture", labelEn: "Built-Ins", labelEs: "Muebles" },
                      { id: "kitchen", labelEn: "Kitchens", labelEs: "Cocinas" },
                    ] as const
                  ).map((tab) => {
                    const isSelected = heroTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setHeroTab(tab.id)}
                        className={`interactive-control relative py-2 px-2 rounded-xl text-xs font-serif transition-colors ${
                          isSelected
                            ? "text-[#FCFAF7] font-semibold"
                            : "text-[#3D3228] hover:text-[#261F1A]"
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="hero-showcase-tab"
                            transition={motionTokens.spring.snappy}
                            className="absolute inset-0 rounded-xl bg-[#B85D3B] shadow-xs"
                          />
                        )}
                        <span className="relative z-10">
                          {locale === "en" ? tab.labelEn : tab.labelEs}
                        </span>
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
                      initial={{ opacity: 0, scale: 1.03, filter: "blur(4px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(2px)" }}
                      transition={{ duration: 0.4, ease: motionTokens.easing.out }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 space-y-1">
                    <div className="text-[10px] font-serif uppercase tracking-wider text-[#C59B27] font-semibold">
                      {locale === "en" ? heroShowcase[heroTab].tagEn : heroShowcase[heroTab].tagEs}
                    </div>
                    <div className="text-sm sm:text-base font-serif font-semibold text-white">
                      {locale === "en" ? heroShowcase[heroTab].titleEn : heroShowcase[heroTab].titleEs}
                    </div>
                  </div>
                </div>

                {/* Spec Note */}
                <div className="px-2 py-1 text-[11px] text-[#3D3228] flex items-center justify-between">
                  <span>{locale === "en" ? heroShowcase[heroTab].specEn : heroShowcase[heroTab].specEs}</span>
                  <Link
                    href={heroShowcase[heroTab].href}
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
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#3D3228]">
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#B85D3B]" weight="fill" />
              <span>{locale === "en" ? "99.97% HEPA Dustless Interior Painting" : "Pintura Interior 99.97% Libre de Polvo HEPA"}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#B85D3B]" weight="fill" />
              <span>{locale === "en" ? "115°F+ UV Exterior Stucco & Door Armor" : "Blindaje Exterior UV 115°F+ y Lacas 2K"}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Hammer size={15} className="text-[#B85D3B]" weight="fill" />
              <span>{locale === "en" ? "Custom Millwork & Kitchens in Phoenix" : "Muebles a Medida y Cocinas en Phoenix"}</span>
            </div>
            <div className="flex items-center gap-2 font-serif text-[12px]">
              <MapPin size={15} className="text-[#B85D3B]" />
              <span>2231 W Shangri La Rd, Phoenix, AZ</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. THE FOUR MASTER DISCIPLINES (Balanced Service Architecture)
      ===================================================================== */}
      <section data-casa-room="kitchen" className="py-20 lg:py-28 bg-[#EAE2D5] border-b border-[#DFD6C6] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
              {locale === "en" ? "ARCHITECTURAL SERVICES & DISCIPLINES" : "NUESTRAS ESPECIALIDADES RESIDENCIALES"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A] tracking-tight">
              {locale === "en"
                ? "Fine Residential Painting, Bespoke Millwork & 2K Kitchens."
                : "Pintura Residencial de Alta Gama, Muebles de Autor y Cocinas 2K."}
            </h2>
            <p className="text-base text-[#3D3228] leading-relaxed font-normal">
              {locale === "en"
                ? "Whether repainting the entire interior and exterior of your residence with zero dust, restoring a sun-weathered front entry door, building an arched white oak bookcase, or refinishing your kitchen in a 2K spray booth—every discipline is executed by our Phoenix craftsmen."
                : "Ya sea pintar el interior y exterior completo de tu residencia sin una partícula de polvo, restaurar tu puerta principal, fabricar un librero arqueado en encino blanco o transformar tu cocina en cabina 2K, nuestro equipo en Phoenix ejecuta cada disciplina con rigor técnico."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Discipline 01: Interior Residential Painting */}
            <article className="group rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#261F1A]">
                  <img
                    src="/assets/painting-interior/interior-01.jpg"
                    alt="Interior Residential Painting by Renovo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#261F1A]/85 backdrop-blur-md text-[11px] font-serif italic text-[#C59B27] border border-white/10 shadow-xs">
                    {locale === "en" ? "01 · Interior Painting" : "01 · Pintura Interior HEPA"}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="text-xl font-serif font-semibold text-[#261F1A]">
                    {locale === "en" ? "Interior House Painting & Trim" : "Pintura Residencial Interior y Molduras"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed font-normal">
                    {locale === "en"
                      ? "Festool HEPA 99.97% dustless sanding, double-height walls, velvet ceilings, laser-caulked baseboards, staircases, and odorless Zero-VOC washable enamels."
                      : "Lijado Festool HEPA 99.97% libre de polvo, muros de doble altura, plafones aterciopelados, zoclos perfilados con láser y esmaltes 0-VOC lavables sin olor."}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#DFD6C6]">
                <Link
                  href="/pintura-residencial"
                  className="interactive-control inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] hover:text-[#261F1A] font-semibold transition-colors"
                >
                  <span>{locale === "en" ? "Explore Interior Painting" : "Ver Pintura Interior"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Discipline 02: Exterior Painting, Stucco & Entry Doors */}
            <article className="group rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#261F1A]">
                  <img
                    src="/assets/painting-exterior/exterior-01.jpg"
                    alt="Exterior Stucco & UV Painting by Renovo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#261F1A]/85 backdrop-blur-md text-[11px] font-serif italic text-[#C59B27] border border-white/10 shadow-xs">
                    {locale === "en" ? "02 · Exterior & UV Armor" : "02 · Fachadas y Exterior UV"}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="text-xl font-serif font-semibold text-[#261F1A]">
                    {locale === "en" ? "Exterior Stucco, Doors & Pergolas" : "Pintura Exterior, Estuco y Puertas"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed font-normal">
                    {locale === "en"
                      ? "100% acrylic elastomeric stucco coatings, thermal crack repair, cedar tongue-and-groove ceilings, and marine UV entry door restorations built for 115°F+ desert sun."
                      : "Recubrimientos elastoméricos 100% acrílicos para estuco, sellado de grietas térmicas, pérgolas de cedro y restauración de puertas principales contra el sol de 115°F+."}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#DFD6C6]">
                <Link
                  href="/pintura-residencial"
                  className="interactive-control inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] hover:text-[#261F1A] font-semibold transition-colors"
                >
                  <span>{locale === "en" ? "Explore Exterior Coatings" : "Ver Pintura Exterior"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Discipline 03: Built-Ins & Millwork */}
            <article className="group rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#261F1A]">
                  <img
                    src="/assets/blueprints-and-docs/custom-furniture-01.jpg"
                    alt="Custom Arched Built-Ins by Renovo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#261F1A]/85 backdrop-blur-md text-[11px] font-serif italic text-[#C59B27] border border-white/10 shadow-xs">
                    {locale === "en" ? "03 · Custom Millwork" : "03 · Muebles de Autor"}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="text-xl font-serif font-semibold text-[#261F1A]">
                    {locale === "en" ? "Arched Built-Ins & Custom Furniture" : "Muebles a Medida y Built-Ins"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed font-normal">
                    {locale === "en"
                      ? "Handcrafted rift-cut white oak fireplace niches, full-wall entertainment centers, illuminated wine credenzas, and fluted floating bathroom vanities."
                      : "Libreros gemelos arqueados en encino blanco, centros de entretenimiento de muro completo, cavas iluminadas a 2700K y vanitorios flotantes."}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#DFD6C6]">
                <Link
                  href="/muebles-a-medida"
                  className="interactive-control inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] hover:text-[#261F1A] font-semibold transition-colors"
                >
                  <span>{locale === "en" ? "Explore Custom Furniture" : "Ver Muebles a Medida"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Discipline 04: Kitchens */}
            <article className="group rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#261F1A]">
                  <img
                    src="/assets/kitchens/kitchen-02.jpg"
                    alt="Custom Kitchens by Renovo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#261F1A]/85 backdrop-blur-md text-[11px] font-serif italic text-[#C59B27] border border-white/10 shadow-xs">
                    {locale === "en" ? "04 · Kitchens & 2K" : "04 · Cocinas y Gabinetes"}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="text-xl font-serif font-semibold text-[#261F1A]">
                    {locale === "en" ? "Custom Kitchens & 2K Refacing" : "Cocinas a Medida y Refacing 2K"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed font-normal">
                    {locale === "en"
                      ? "Custom islands, solid maple dovetail drawers, Blum concealed soft-close runners, and KCMA-certified 2K polyurethane spray booth finishes."
                      : "Islas centrales, cajones en cola de milano, herrajes ocultos Blum y renovación en cabina con laca de poliuretano catalizado 2K."}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#DFD6C6]">
                <Link
                  href="/cocinas-y-gabinetes"
                  className="interactive-control inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] hover:text-[#261F1A] font-semibold transition-colors"
                >
                  <span>{locale === "en" ? "Explore Kitchens & 2K" : "Ver Cocinas y Gabinetes"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2B. ARCHITECTURAL RESIDENTIAL PAINTING SPOTLIGHT (Interior HEPA / Exterior UV / Doors)
      ===================================================================== */}
      <section data-casa-room="entryway" className="py-20 lg:py-28 bg-[#F4EFE6] border-b border-[#DFD6C6] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
                {locale === "en"
                  ? "ARCHITECTURAL RESIDENTIAL PAINTING · INTERIOR & EXTERIOR"
                  : "PINTURA RESIDENCIAL DE ALTA GAMA · INTERIOR Y EXTERIOR"}
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A] tracking-tight">
                {locale === "en"
                  ? "Complete House Painting Engineered for Arizona Living."
                  : "Pintura Residencial Integral Diseñada para el Clima de Arizona."}
              </h2>
              <p className="text-base text-[#3D3228] leading-relaxed font-normal">
                {locale === "en"
                  ? "Renovo is a full-scope residential painting house. From dust-free interior repaints in occupied residences to elastomeric exterior stucco armor and hardwood entry door restorations."
                  : "En Renovo ejecutamos proyectos integrales de pintura residencial: desde interiores completos sin polvo en hogares habitados hasta blindaje elastomérico de fachadas y restauración de puertas monumentales."}
              </p>
            </div>

            {/* Interactive Switcher: Interior / Exterior / Entry Doors */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] self-start lg:self-auto">
              {(
                [
                  { id: "interior", labelEn: "Interior HEPA Painting", labelEs: "Interiores sin Polvo HEPA" },
                  { id: "exterior", labelEn: "Exterior Stucco & UV", labelEs: "Fachadas y Estuco UV" },
                  { id: "doors", labelEn: "Entry Doors & Woodwork", labelEs: "Puertas y Maderas" },
                ] as const
              ).map((tab) => {
                const isSelected = paintingFocusTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setPaintingFocusTab(tab.id)}
                    className={`interactive-control relative px-4 py-2.5 rounded-xl text-xs font-serif transition-colors ${
                      isSelected ? "text-[#FCFAF7] font-semibold" : "text-[#3D3228] hover:text-[#1A1410]"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="home-painting-focus-pill"
                        transition={motionTokens.spring.snappy}
                        className="absolute inset-0 rounded-xl bg-[#B85D3B] shadow-xs"
                      />
                    )}
                    <span className="relative z-10">{locale === "en" ? tab.labelEn : tab.labelEs}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={paintingFocusTab}
              initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
              transition={{ duration: 0.35, ease: motionTokens.easing.out }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl"
            >
              {/* Left 6 Cols: Narrative & Technical Protocol */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D5] border border-[#DFD6C6] text-[11px] font-mono uppercase tracking-wider text-[#B85D3B] font-semibold">
                  <Sparkle size={12} weight="fill" />
                  <span>
                    {locale === "en"
                      ? paintingDeepDive[paintingFocusTab].badgeEn
                      : paintingDeepDive[paintingFocusTab].badgeEs}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-serif font-semibold text-[#1A1410] leading-tight">
                  {locale === "en"
                    ? paintingDeepDive[paintingFocusTab].titleEn
                    : paintingDeepDive[paintingFocusTab].titleEs}
                </h3>

                <p className="text-sm sm:text-base text-[#3D3228] leading-relaxed">
                  {locale === "en"
                    ? paintingDeepDive[paintingFocusTab].descEn
                    : paintingDeepDive[paintingFocusTab].descEs}
                </p>

                {/* 3 Technical Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {paintingDeepDive[paintingFocusTab].specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-1"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#B85D3B] font-bold">
                        {locale === "en" ? spec.labelEn : spec.labelEs}
                      </div>
                      <div className="text-xs font-serif font-semibold text-[#1A1410] leading-snug">
                        {locale === "en" ? spec.valEn : spec.valEs}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/pintura-residencial"
                    className="interactive-control px-6 py-3 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
                  >
                    <span>
                      {locale === "en"
                        ? "Open Interactive Color Simulator & Protocols"
                        : "Abrir Simulador de Color y Protocolos de Pintura"}
                    </span>
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                  <Link
                    href="/cotizador"
                    className="interactive-control text-xs font-serif font-semibold text-[#261F1A] hover:text-[#B85D3B] underline underline-offset-4"
                  >
                    {locale === "en" ? "Estimate Painting Project →" : "Cotizar Proyecto de Pintura →"}
                  </Link>
                </div>
              </div>

              {/* Right 6 Cols: Dual Photo Showcase */}
              <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-8 rounded-2xl overflow-hidden border border-[#DFD6C6] shadow-lg bg-[#1A1410] relative">
                  <img
                    src={paintingDeepDive[paintingFocusTab].mainImage}
                    alt={paintingDeepDive[paintingFocusTab].titleEn}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-[11px] font-serif text-white/95">
                    {locale === "en"
                      ? paintingDeepDive[paintingFocusTab].CaptionMainEn
                      : paintingDeepDive[paintingFocusTab].CaptionMainEs}
                  </div>
                </div>
                <div className="col-span-4 space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-[#DFD6C6] shadow-md bg-[#1A1410]">
                    <img
                      src={paintingDeepDive[paintingFocusTab].secondaryImage}
                      alt="Renovo Surface Detail"
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] text-center space-y-0.5">
                    <div className="text-sm font-mono font-bold text-[#B85D3B]">10+ {locale === "en" ? "YRS" : "AÑOS"}</div>
                    <div className="text-[10px] font-serif text-[#3D3228] leading-tight">
                      {locale === "en" ? "Arizona UV & Adhesion Guarantee" : "Garantía de Adhesión y Sol en AZ"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================================
          3. FEATURED TRANSFORMATION SPOTLIGHT (Doors, Exteriors & Kitchens)
      ===================================================================== */}
      <section data-casa-room="entryway" className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left 5 Cols: Storytelling & Project Selectors */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
                {locale === "en"
                  ? "BEFORE & AFTER CASE STUDIES · DOORS, EXTERIORS & KITCHENS"
                  : "CASOS DE ÉXITO EN PHOENIX · PUERTAS, EXTERIORES Y COCINAS"}
              </div>

              <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
                {activeSpotlight.category === "entry-door"
                  ? locale === "en"
                    ? "Sun-Weathered Entry Doors & Porticos Restored to Grandeur."
                    : "Puertas Principales y Pórticos Restaurados contra el Sol de Arizona."
                  : locale === "en"
                  ? "From Dated Stained Oak to Factory Alabaster Elegance."
                  : "De Madera Desgastada a Elegancia de Cabina 2K."}
              </h2>

              <p className="text-base text-[#3D3228] font-normal leading-relaxed">
                {activeSpotlight.category === "entry-door"
                  ? locale === "en"
                    ? "Slide to compare how we strip sun-bleached exterior hardwood doors down to raw grain, apply deep penetrating stains or 2K urethane enamels, and seal against 115°F+ UV exposure."
                    : "Desliza para comparar cómo restauramos puertas principales quemadas por el sol hasta la veta virgen, aplicamos tintes profundos o uretanos 2K y sellamos con blindaje marino UV."
                  : locale === "en"
                  ? "Witness how our 4-stage preparation and 2K catalyzed factory spraying completely reimagined this Phoenix kitchen without demolition."
                  : "Observa cómo nuestro protocolo de 4 etapas y aplicación catalizada 2K transformó esta cocina en Phoenix sin necesidad de demolición."}
              </p>

              {/* Case details pill */}
              <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] space-y-2 text-xs shadow-xs">
                <div className="text-sm font-serif font-semibold text-[#261F1A]">
                  {activeSpotlight.title[locale]}
                </div>
                <div className="text-[#B85D3B] font-serif font-medium">
                  {activeSpotlight.systemUsed[locale]}
                </div>
                <div className="text-[#3D3228] pt-1 flex items-center gap-1.5">
                  <Clock size={14} className="text-[#B85D3B]" />
                  <span>
                    {locale === "en"
                      ? `Completed in ${activeSpotlight.completionDays} working days in Phoenix, AZ.`
                      : `Terminado en ${activeSpotlight.completionDays} días hábiles en Phoenix, AZ.`}
                  </span>
                </div>
              </div>

              {/* Project Quick-Switch Tabs with Explicit Discipline Names */}
              <div className="flex flex-wrap gap-2 pt-1">
                {BEFORE_AFTER_PAIRS.map((pair, idx) => {
                  const labelObj = spotlightCaseLabels[pair.id] || {
                    en: `Case 0${idx + 1}`,
                    es: `Caso 0${idx + 1}`,
                  };
                  return (
                    <button
                      key={pair.id}
                      type="button"
                      onClick={() => {
                        setActiveSpotlightIdx(idx);
                        setSpotlightSliderPos(50);
                      }}
                      className={`interactive-control px-3.5 py-2 rounded-full text-xs font-serif tracking-wide transition-all ${
                        idx === activeSpotlightIdx
                          ? "bg-[#B85D3B] text-[#FCFAF7] font-bold shadow-xs"
                          : "bg-[#FCFAF7] border border-[#DFD6C6] text-[#3D3228] hover:text-[#261F1A] shadow-xs"
                      }`}
                    >
                      {labelObj[locale]}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="/transformaciones"
                  className="interactive-control inline-flex items-center gap-2 text-sm font-semibold text-[#261F1A] hover:text-[#B85D3B] transition-colors"
                >
                  <span>{locale === "en" ? "Explore All Before & After Case Studies" : "Ver Todos los Casos de Antes y Después"}</span>
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
          3B. ATELIER VIDEO REELS & KINETIC WORKSHOP CINEMA
      ===================================================================== */}
      <AtelierVideoReelsShowcase initialFilter="all" />

      {/* =====================================================================
          4. SURFACE SCIENCE & COATING ENGINEERING (Residential Painting & 2K)
      ===================================================================== */}
      <section data-casa-room="patio" className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
              {locale === "en"
                ? "SURFACE ENGINEERING · INTERIORS, EXTERIORS & 2K MILLWORK"
                : "INGENIERÍA DE RECUBRIMIENTOS · INTERIORES, FACHADAS Y LACAS 2K"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Why Renovo Coatings Outlast Ordinary Painters across Every Surface."
                : "¿Por Qué Nuestros Sistemas Superan a los Pintores Convencionales en Toda tu Casa?"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal leading-relaxed">
              {locale === "en"
                ? "Whether we are painting your interior living room walls with HEPA dust extraction, shielding exterior stucco against 115°F+ desert sun, or spraying cabinet doors in our 2K booth—we engineer each coating system for the exact substrate."
                : "Ya sea pintando los muros interiores de tu sala sin polvo HEPA, blindando el estuco exterior contra el sol de 45°C+ o aplicando poliuretano 2K en ebanistería y cocinas: formulamos el sistema químico exacto para cada superficie."}
            </p>
          </div>

          {/* Interactive 400x Cross-Section Motion Graphic Visualizer */}
          <div className="mb-12">
            <MolecularCoatingMotionGraphic />
          </div>

          <div className="rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#DFD6C6] bg-[#F4EFE6]">
                    <th className="p-5 sm:p-6 text-xs uppercase tracking-wider font-serif font-bold text-[#3D3228]">
                      {locale === "en" ? "Residential Discipline" : "Disciplina Residencial"}
                    </th>
                    <th className="p-5 sm:p-6 text-xs uppercase tracking-wider font-serif font-bold text-[#B85D3B] bg-[#B85D3B]/5 border-x border-[#DFD6C6]">
                      <div className="flex items-center gap-2">
                        <Sparkle size={15} weight="fill" />
                        <span>{locale === "en" ? "Renovo Architectural Protocol" : "Estándar Arquitectónico Renovo"}</span>
                      </div>
                    </th>
                    <th className="p-5 sm:p-6 text-xs uppercase tracking-wider font-serif font-bold text-[#3D3228]">
                      {locale === "en" ? "Conventional Painter / Contractor" : "Pintor o Contratista Convencional"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DFD6C6] text-xs sm:text-sm">
                  {chemistryComparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F4EFE6]/50 transition-colors">
                      <td className="p-5 sm:p-6 font-serif font-semibold text-[#1A1410] w-1/4">
                        {locale === "en" ? row.featureEn : row.featureEs}
                      </td>
                      <td className="p-5 sm:p-6 text-[#261F1A] font-medium bg-[#B85D3B]/5 border-x border-[#DFD6C6] w-3/8">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle size={18} className="text-[#B85D3B] shrink-0 mt-0.5" weight="fill" />
                          <span>{locale === "en" ? row.renovoEn : row.renovoEs}</span>
                        </div>
                      </td>
                      <td className="p-5 sm:p-6 text-[#5A4D42] w-3/8">
                        <div className="flex items-start gap-2.5">
                          <X size={18} className="text-[#A34E2F] shrink-0 mt-0.5" />
                          <span>{locale === "en" ? row.standardEn : row.standardEs}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. THE RAUL BURGOS STORY & PHOENIX WORKSHOP (Soulful Heritage)
      ===================================================================== */}
      <section data-casa-room="patio" className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
                {locale === "en" ? "FOUNDER & HERITAGE" : "HISTORIA Y ARTESANÍA INTEGRAL"}
              </div>

              <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A] leading-[1.12]">
                {locale === "en"
                  ? "One Master Team for Your Walls, Facade, Millwork & Kitchen."
                  : "Un Mismo Estándar Maestro para tus Muros, Fachada, Muebles y Cocina."}
              </h2>

              <div className="space-y-4 text-base text-[#3D3228] font-normal leading-relaxed">
                <p>
                  {locale === "en"
                    ? "Renovo Painting Solutions was founded on a rare dual mastery: architectural residential painting and fine custom woodworking. Homeowners no longer have to coordinate separate painters, cabinetmakers, and wood restorers."
                    : "Renovo Painting Solutions nació de una doble maestría poco común: la pintura residencial arquitectónica de alta precisión y la ebanistería fina a medida. Así, nuestros clientes no tienen que lidiar con contratistas separados para pintar su casa, restaurar sus puertas y fabricar sus muebles o cocinas."}
                </p>
                <p>
                  {locale === "en"
                    ? "From dustless HEPA interior painting and UV-shield exterior stucco coatings in your residence, to custom white oak built-ins and 2K catalyzed cabinetry crafted at our 2231 W Shangri La Rd workshop in Phoenix—master craftsman Raul Burgos personally oversees every detail."
                    : "Desde pintura interior libre de polvo HEPA y blindaje de fachadas en sitio, hasta libreros arqueados en encino blanco y cocinas en laca 2K fabricadas en nuestro taller en 2231 W Shangri La Rd en Phoenix, Raul Burgos supervisa personalmente cada detalle."}
                </p>
              </div>

              {/* Founder Quote */}
              <div className="p-6 rounded-2xl bg-[#FCFAF7] border-l-4 border-[#B85D3B] border-y border-r border-[#DFD6C6] text-sm text-[#261F1A] italic font-serif shadow-xs">
                {locale === "en"
                  ? '"Whether we are cutting a laser-crisp line along your living room ceiling, sealing exterior stucco against the Arizona summer, or spraying a custom oak built-in, our signature is the same: zero shortcuts and enduring beauty."'
                  : '"Ya sea perfilando un muro de doble altura en tu sala, blindando la fachada exterior contra el verano de Arizona o lacando un mueble de autor en cabina, nuestra firma es la misma: cero atajos y belleza que perdura por décadas."'}
                <div className="mt-2 text-xs font-serif uppercase tracking-wider text-[#B85D3B] font-bold not-italic">
                  Raul Burgos · Founder, Master Painter & Cabinetmaker
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/nosotros"
                  className="interactive-control inline-flex items-center gap-2 text-sm font-semibold text-[#261F1A] hover:text-[#B85D3B] transition-colors"
                >
                  <span>{locale === "en" ? "Learn More About Our Journey & Phoenix Shop" : "Conoce Nuestra Historia y Taller en Phoenix"}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Visual Mosaic of Real Workshop & Residential Painting Photos */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] shadow-xl">
                <img
                  src="/assets/painting-interior/interior-02.jpg"
                  alt="Renovo Fine Residential Interior Painting in Phoenix"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3.5 text-[11px] font-serif text-white font-medium">
                  {locale === "en"
                    ? "01 · HEPA Dustless Interior & Exterior Residential Painting"
                    : "01 · Pintura Residencial Interior y Exterior sin Polvo HEPA"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-[#DFD6C6] shadow-md">
                  <img
                    src="/assets/blueprints-and-docs/custom-furniture-19.jpg"
                    alt="Illuminated White Oak Wine & Stemware Hutch by Renovo"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-serif text-white leading-tight">
                    {locale === "en" ? "02 · Bespoke Millwork & Built-Ins" : "02 · Muebles a Medida y Cavas"}
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#DFD6C6] shadow-md">
                  <img
                    src="/assets/kitchens/kitchen-08.jpg"
                    alt="Renovo Kitchen in Paradise Valley"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-serif text-white leading-tight">
                    {locale === "en" ? "03 · Custom Kitchens & 2K Lacquer" : "03 · Cocinas y Lacas 2K de Cabina"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. GRAND CONSULTATION CALL TO ACTION (Warm Terracotta & Ivory Anchor)
      ===================================================================== */}
      <section data-casa-room="patio" className="py-20 lg:py-28 bg-[#EAE2D5] text-[#1A1410] border-t border-[#DFD6C6] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-xs font-serif uppercase tracking-widest text-[#B85D3B] font-bold shadow-xs">
              <Sparkle size={13} weight="fill" />
              <span>{locale === "en" ? "READY TO BEGIN?" : "¿LISTO PARA COMENZAR?"}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#1A1410] tracking-tight">
              {locale === "en"
                ? "Let's Craft Something Extraordinary for Your Home."
                : "Creemos Algo Extraordinario para tu Residencia."}
            </h2>

            <p className="text-base sm:text-lg text-[#3D3228] font-normal max-w-2xl mx-auto">
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
                className="interactive-control min-h-[52px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[#B85D3B]" />
                <span className="font-serif tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
