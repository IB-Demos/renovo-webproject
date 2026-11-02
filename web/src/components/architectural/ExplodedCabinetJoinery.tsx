"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import {
  Stack,
  Sparkle,
  ShieldCheck,
  CheckCircle,
  Warning,
  Eye,
  Crosshair,
  ArrowRight,
} from "@phosphor-icons/react";

interface CabinetLayer {
  id: string;
  number: string;
  titleEn: string;
  titleEs: string;
  specEn: string;
  specEs: string;
  builderGradeFailEn: string;
  builderGradeFailEs: string;
  renovoStandardEn: string;
  renovoStandardEs: string;
  image: string;
  svgHighlightCoords: { cx: number; cy: number; r: number };
}

const CABINET_LAYERS: CabinetLayer[] = [
  {
    id: "layer-plywood",
    number: "01",
    titleEn: "3/4\" North American Hardwood Core Plywood",
    titleEs: "Caja Estructural en Plywood de 3/4\" de Grado Mueblería",
    specEn: "7-ply furniture-grade hardwood core with zero hollow voids or formaldehyde resins.",
    specEs: "Núcleo de 7 capas en abedul/maple macizo sin huecos internos ni resinas baratas.",
    builderGradeFailEn: "Builder homes use 1/2\" particleboard (compressed sawdust) that sags under heavy pots and swells permanently when exposed to minor sink leaks.",
    builderGradeFailEs: "Los gabinetes de constructora usan aglomerado de 1/2\" (aserrín prensado) que se vence bajo el peso de ollas y se hincha con una fuga de agua.",
    renovoStandardEn: "Indestructible 3/4\" structural walls that hold stone countertops, iron cookware, and heavy appliances for generations without sagging.",
    renovoStandardEs: "Módulos de 3/4\" con rigidez absoluta capaces de soportar cubiertas de cuarzo macizo y baterías de cocina de hierro sin flexionarse jamás.",
    image: "/assets/blueprints-and-docs/custom-furniture-06.jpg",
    svgHighlightCoords: { cx: 120, cy: 220, r: 45 },
  },
  {
    id: "layer-dovetail",
    number: "02",
    titleEn: "Solid 5/8\" Maple Dovetail Joinery",
    titleEs: "Cajones en Maple Macizo con Cola de Milano",
    specEn: "5/8\" thick solid North American sugar maple sides interlocking at 45-degree angle pins.",
    specEs: "Laterales de 5/8\" en maple macizo ensamblados a mano en cola de milano tradicional.",
    builderGradeFailEn: "Standard cabinets use stapled butt joints or flimsy vinyl-wrapped MDF drawer boxes that pull apart after a couple of years.",
    builderGradeFailEs: "Los gabinetes estándar están engrapados en inglete simple o forrados en vinil plástico, desprendiéndose al cabo de pocos años.",
    renovoStandardEn: "Interlocking wooden pins that physically cannot separate under pulling force, hand-finished with silky rounded top bullnose edges.",
    renovoStandardEs: "Espigas entrelazadas mecánicamente imposibles de separar con el tirón diario, terminadas con bordes superiores boleados a mano.",
    image: "/assets/blueprints-and-docs/custom-furniture-14.jpg",
    svgHighlightCoords: { cx: 310, cy: 300, r: 50 },
  },
  {
    id: "layer-runners",
    number: "03",
    titleEn: "Concealed Blum Undermount Soft-Close Runners",
    titleEs: "Correderas Ocultas Blum con Amortiguación Hidráulica",
    specEn: "Blum Movento / Tandem concealed full-extension runners rated for 100+ lbs capacity.",
    specEs: "Correderas bajo fondo Blum de extracción total certificadas para 45+ kg de carga.",
    builderGradeFailEn: "Cheap side-mounted stamped metal wheels that rattle, stick, collect grease, and slam violently when closed.",
    builderGradeFailEs: "Rieles laterales de lámina con rueditas plásticas que vibran, acumulan grasa y azotan con fuerza al cerrarse.",
    renovoStandardEn: "Completely hidden underneath the drawer box. Glide effortlessly with synchronized four-dimensional adjustment and feather-light soft braking.",
    renovoStandardEs: "Ocultas completamente debajo del cajón. Deslizamiento sincronizado con ajuste en 4 dimensiones y frenado hidráulico suave.",
    image: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
    svgHighlightCoords: { cx: 280, cy: 380, r: 35 },
  },
  {
    id: "layer-faceframe",
    number: "04",
    titleEn: "Solid 1-3/4\" Hardwood Face Frame",
    titleEs: "Bastidor Frontal de Madera Maciza de 1-3/4\"",
    specEn: "Pocket-bored and glued kiln-dried hardwood face frames preventing box racking.",
    specEs: "Marcos frontales ensamblados con espiga interna y madera secada al horno.",
    builderGradeFailEn: "Frameless cabinets without solid face bracing can twist out of square over time, causing cabinet doors to rub together.",
    builderGradeFailEs: "Los módulos comerciales sin bastidor de madera maciza se descuadran con el tiempo, haciendo que las puertas rocen entre sí.",
    renovoStandardEn: "Rigid hardwood perimeter frame that anchors directly into your home's wall studs, ensuring square cabinet reveals for decades.",
    renovoStandardEs: "Marco perimetral sólido anclado directamente a los montantes de la pared, garantizando holguras perfectas de por vida.",
    image: "/assets/kitchens/kitchen-05.jpg",
    svgHighlightCoords: { cx: 480, cy: 200, r: 45 },
  },
  {
    id: "layer-coating",
    number: "05",
    titleEn: "The 4-Tier 2K Factory Coating Stratigraphy",
    titleEs: "La Micro-Estratigrafía del Acabado 2K (4 Capas)",
    specEn: "Substrate prep (220 grit) + Tannin-lock primer + Micro-sand leveler + 2K Catalyzed Polyurethane.",
    specEs: "Lijado 220 + Imprimación selladora + Fondo nivelador + Esmalte de poliuretano catalizado 2K.",
    builderGradeFailEn: "House painters roll latex wall paint or apply one coat of fast-drying rattle-can lacquer that chips around handles within months.",
    builderGradeFailEs: "Pintores comunes usan rodillo y pintura vinílica o laca barata que se descarapela alrededor de las jaladeras en meses.",
    renovoStandardEn: "Hermetic chemical cross-linking that bonds into a velvet ceramic-like shield. Immune to cooking oils, vinegar, steam, and scrub sponges.",
    renovoStandardEs: "Polimerización química cruzada que crea un escudo terso como cerámica, inmune a grasas, vinagre, vapor y lavado diario.",
    image: "/assets/kitchens/kitchen-14.jpg",
    svgHighlightCoords: { cx: 460, cy: 110, r: 40 },
  },
];

export function ExplodedCabinetJoinery() {
  const { locale } = useRenovo();
  const [activeLayerId, setActiveLayerId] = useState("layer-dovetail");

  const currentLayer =
    CABINET_LAYERS.find((l) => l.id === activeLayerId) || CABINET_LAYERS[1];

  return (
    <section className="py-20 lg:py-28 bg-[#F4EFE6] text-[#261F1A] border-b border-[#DFD6C6] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Stack size={15} />
              <span>
                {locale === "en"
                  ? "Architectural Anatomy · Exploded Cabinet Cutaway"
                  : "Anatomía de un Gabinete de Autor · Despiece Arquitectónico"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#261F1A] tracking-tight">
              {locale === "en"
                ? "The Invisible Anatomy of Heirloom Joinery."
                : "La Anatomía Invisible de Nuestra Ebanistería."}
            </h2>

            <p className="text-base text-[#3D3228] font-normal leading-relaxed">
              {locale === "en"
                ? "Anyone can paint a cabinet door. True architectural longevity is engineered into the joints, the structural plywood cores, and the four-tier molecular coating. Explore the cutaway below."
                : "Cualquiera puede pintar una puerta de cocina. La verdadera longevidad arquitectónica se forja en los ensambles, los núcleos de madera maciza y la estratigrafía 2K. Explora el despiece."}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-serif text-[#3D3228] bg-[#EAE2D5] border border-[#DFD6C6] px-4 py-2.5 rounded-2xl self-start lg:self-auto shadow-xs">
            <Sparkle size={15} className="text-[#B85D3B] shrink-0" weight="fill" />
            <span>
              {locale === "en"
                ? "Click any anatomical component to inspect build specs"
                : "Toca cualquier componente para inspeccionar sus especificaciones"}
            </span>
          </div>
        </div>

        {/* Layer Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CABINET_LAYERS.map((layer) => {
            const isSelected = activeLayerId === layer.id;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayerId(layer.id)}
                className={`interactive-control p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#EAE2D5] border-[#B85D3B] ring-1 ring-[#B85D3B]/30 shadow-xs text-[#261F1A]"
                    : "bg-[#FCFAF7] border-[#DFD6C6] hover:border-[#261F1A] text-[#3D3228] shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-serif text-xs font-bold ${
                      isSelected ? "text-[#B85D3B]" : "text-[#54463A]"
                    }`}
                  >
                    PART {layer.number}
                  </span>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-[#B85D3B]" />
                  )}
                </div>

                <span
                  className={`text-xs font-serif font-semibold mt-2 block line-clamp-2 ${
                    isSelected ? "text-[#261F1A]" : "text-[#3D3228]"
                  }`}
                >
                  {locale === "en" ? layer.titleEn : layer.titleEs}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Section: Interactive Architectural Cutaway SVG Left, Deep Comparison Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 6 Columns: Interactive SVG Cutaway Diagram */}
          <div className="lg:col-span-6 rounded-3xl bg-[#EAE2D5] border border-[#DFD6C6] p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-3">
              <span className="text-xs font-serif italic text-[#B85D3B]">
                {locale === "en" ? "Isometric Cabinet Cutaway" : "Corte Isométrico de Gabinete"}
              </span>
              <span className="text-[11px] text-[#3D3228] font-serif">
                {locale === "en" ? "Handcrafted in Phoenix, AZ" : "Taller Shangri La Rd, Phoenix"}
              </span>
            </div>

            {/* Hand-Drafted Architectural Vector Diagram */}
            <div className="relative aspect-[4/3] w-full my-4 flex items-center justify-center">
              <svg
                viewBox="0 0 600 450"
                className="w-full h-full stroke-current"
                fill="none"
              >
                {/* Subtle drafting grid */}
                <pattern
                  id="drafting-subgrid"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.04)"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="600" height="450" fill="url(#drafting-subgrid)" />

                {/* Cabinet Box Outer Walls (3/4" Plywood) */}
                <g
                  className="cursor-pointer transition-opacity"
                  onClick={() => setActiveLayerId("layer-plywood")}
                  style={{
                    opacity:
                      activeLayerId === "layer-plywood" ? 1 : 0.65,
                  }}
                >
                  {/* Left Side Wall */}
                  <polygon
                    points="70,90 120,60 120,400 70,430"
                    fill={activeLayerId === "layer-plywood" ? "#2B2117" : "#1A1714"}
                    stroke={activeLayerId === "layer-plywood" ? "#C79F67" : "#7A7167"}
                    strokeWidth="2"
                  />
                  {/* Back Wall */}
                  <polygon
                    points="120,60 480,60 480,400 120,400"
                    fill="#15120F"
                    stroke="#5A534B"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {/* Bottom Floor */}
                  <polygon
                    points="70,430 120,400 480,400 430,430"
                    fill="#1E1914"
                    stroke="#7A7167"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Solid Face Frame Front */}
                <g
                  className="cursor-pointer"
                  onClick={() => setActiveLayerId("layer-faceframe")}
                  style={{
                    opacity:
                      activeLayerId === "layer-faceframe" ? 1 : 0.65,
                  }}
                >
                  <polygon
                    points="70,90 430,90 430,430 70,430"
                    fill="none"
                    stroke={activeLayerId === "layer-faceframe" ? "#C79F67" : "#8A7E72"}
                    strokeWidth={activeLayerId === "layer-faceframe" ? "3" : "2"}
                  />
                  {/* Intermediate Stiles */}
                  <line
                    x1="70"
                    y1="230"
                    x2="430"
                    y2="230"
                    stroke="#8A7E72"
                    strokeWidth="2"
                  />
                </g>

                {/* Dovetail Drawer Box (Middle pullout) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setActiveLayerId("layer-dovetail")}
                  style={{
                    opacity:
                      activeLayerId === "layer-dovetail" ? 1 : 0.65,
                  }}
                >
                  {/* Drawer Front */}
                  <polygon
                    points="130,245 420,245 420,360 130,360"
                    fill={activeLayerId === "layer-dovetail" ? "#38291B" : "#241D17"}
                    stroke={activeLayerId === "layer-dovetail" ? "#C79F67" : "#8A7E72"}
                    strokeWidth={activeLayerId === "layer-dovetail" ? "2.5" : "1.5"}
                  />
                  {/* Dovetail Interlocking Joints representation */}
                  <path
                    d="M 130,260 L 140,265 L 140,275 L 130,280 M 130,295 L 140,300 L 140,310 L 130,315 M 130,330 L 140,335 L 140,345 L 130,350"
                    stroke={activeLayerId === "layer-dovetail" ? "#C79F67" : "#FAF8F5"}
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Shaker Panel Inset */}
                  <rect
                    x="150"
                    y="260"
                    width="250"
                    height="85"
                    fill="#1A1511"
                    stroke="#5A534B"
                    strokeWidth="1"
                  />
                </g>

                {/* Blum Undermount Runner (Under Drawer) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setActiveLayerId("layer-runners")}
                  style={{
                    opacity:
                      activeLayerId === "layer-runners" ? 1 : 0.65,
                  }}
                >
                  <line
                    x1="130"
                    y1="365"
                    x2="420"
                    y2="365"
                    stroke={activeLayerId === "layer-runners" ? "#C79F67" : "#A69B8F"}
                    strokeWidth={activeLayerId === "layer-runners" ? "3.5" : "2"}
                  />
                  <line
                    x1="140"
                    y1="369"
                    x2="220"
                    y2="369"
                    stroke={activeLayerId === "layer-runners" ? "#C79F67" : "#7A7167"}
                    strokeWidth="2"
                  />
                </g>

                {/* 4-Tier 2K Lacquer Cross-Section (Top Edge) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setActiveLayerId("layer-coating")}
                  style={{
                    opacity:
                      activeLayerId === "layer-coating" ? 1 : 0.65,
                  }}
                >
                  <polygon
                    points="70,90 120,60 480,60 430,90"
                    fill={activeLayerId === "layer-coating" ? "#3D2E1F" : "#241E18"}
                    stroke={activeLayerId === "layer-coating" ? "#C79F67" : "#8A7E72"}
                    strokeWidth="2"
                  />
                  {/* Micro Stratigraphy Lines */}
                  <line x1="120" y1="68" x2="480" y2="68" stroke="#C79F67" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="120" y1="76" x2="480" y2="76" stroke="#C79F67" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="120" y1="84" x2="480" y2="84" stroke="#C79F67" strokeWidth="1.5" />
                </g>

                {/* Pulsing Hotspot on Active Element */}
                <circle
                  cx={currentLayer.svgHighlightCoords.cx}
                  cy={currentLayer.svgHighlightCoords.cy}
                  r={currentLayer.svgHighlightCoords.r}
                  fill="rgba(199, 159, 103, 0.15)"
                  stroke="#C79F67"
                  strokeWidth="1.5"
                  className="animate-pulse"
                />
                <circle
                  cx={currentLayer.svgHighlightCoords.cx}
                  cy={currentLayer.svgHighlightCoords.cy}
                  r="4"
                  fill="#C79F67"
                />
              </svg>
            </div>

            <div className="text-xs text-[#3D3228] font-serif italic text-center pt-2 border-t border-[#DFD6C6]">
              {locale === "en"
                ? "Interactive drafting schematic: Tap layers to inspect joinery tolerances"
                : "Esquema interactivo: Toca las capas para examinar tolerancias de ensamble"}
            </div>
          </div>

          {/* Right 6 Columns: Deep Technical Comparison & Real Spec Photo */}
          <div className="lg:col-span-6 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] p-6 sm:p-8 shadow-lg space-y-6 text-[#261F1A]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-serif text-[#B85D3B] font-bold">
                  SPECIFICATION {currentLayer.number} OF 05
                </span>
                <span className="text-xs text-[#54463A]">/</span>
                <span className="text-xs font-serif italic text-[#3D3228]">
                  Architectural Standard
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#261F1A] leading-snug">
                {locale === "en" ? currentLayer.titleEn : currentLayer.titleEs}
              </h3>

              <p className="text-xs sm:text-sm text-[#3D3228] font-normal leading-relaxed pt-1">
                {locale === "en" ? currentLayer.specEn : currentLayer.specEs}
              </p>
            </div>

            {/* Macro Photo Evidence */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#DFD6C6] relative bg-[#261F1A] shadow-sm">
              <img
                src={currentLayer.image}
                alt={currentLayer.titleEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-xs font-serif text-white/90">
                {locale === "en" ? "Real Renovo Atelier Build" : "Fabricación Real de Renovo"}
              </div>
            </div>

            {/* Side-by-side: Renovo Standard vs Builder Grade Fail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif">
              {/* Renovo Standard */}
              <div className="p-4 rounded-2xl bg-[#EBF3EA] border border-[#B8D8B4] space-y-2">
                <div className="flex items-center gap-1.5 text-[#2E6B4E] font-semibold">
                  <CheckCircle size={16} weight="fill" />
                  <span>{locale === "en" ? "Renovo Standard:" : "Estándar Renovo:"}</span>
                </div>
                <p className="text-[#261F1A] leading-relaxed text-[11px] font-normal">
                  {locale === "en" ? currentLayer.renovoStandardEn : currentLayer.renovoStandardEs}
                </p>
              </div>

              {/* Builder Grade Warning */}
              <div className="p-4 rounded-2xl bg-[#FDF2F2] border border-[#F0C4C4] space-y-2">
                <div className="flex items-center gap-1.5 text-[#A83232] font-semibold">
                  <Warning size={16} weight="fill" />
                  <span>{locale === "en" ? "Why Builder Grade Fails:" : "Por Qué el Estándar Falla:"}</span>
                </div>
                <p className="text-[#4A1D1D] leading-relaxed text-[11px] font-normal">
                  {locale === "en"
                    ? currentLayer.builderGradeFailEn
                    : currentLayer.builderGradeFailEs}
                </p>
              </div>
            </div>

            {/* In-Home Inspection Action */}
            <div className="pt-2">
              <a
                href="/contacto"
                className="interactive-control min-h-[46px] w-full rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <span>
                  {locale === "en"
                    ? "Schedule In-Home Inspection with Raul Burgos"
                    : "Agendar Inspección en Sitio con Raul Burgos"}
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
