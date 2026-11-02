"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import {
  PencilSimpleLine,
  Camera,
  CheckCircle,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  ArrowsLeftRight,
} from "@phosphor-icons/react";

interface ArchitecturalFeature {
  id: string;
  shortLabel: { en: string; es: string };
  fullTitle: { en: string; es: string };
  category: { en: string; es: string };
  renovoStandard: { en: string; es: string };
  commercialStandard: { en: string; es: string };
  highlightBox: { x: number; y: number; width: number; height: number };
}

interface ProjectPresentation {
  id: string;
  title: { en: string; es: string };
  location: { en: string; es: string };
  summary: { en: string; es: string };
  dimensions: { en: string; es: string };
  photoUrl: string;
  photoAlt: string;
  features: ArchitecturalFeature[];
}

export function ArchitecturalDraftingTable() {
  const { locale } = useRenovo();
  const [activeProjectId, setActiveProjectId] = useState<string>("kitchen");
  const [activeFeatureId, setActiveFeatureId] = useState<string>("dovetail");
  const [sliderPos, setSliderPos] = useState<number>(50); // Split slider: 0 to 100%

  const projects: ProjectPresentation[] = [
    {
      id: "kitchen",
      title: {
        en: "Paradise Valley Custom Kitchen & Range Canopy",
        es: "Cocina a Medida y Campana de Autor en Paradise Valley",
      },
      location: {
        en: "Paradise Valley, Arizona · 2K Navajo Alabaster & Solid Maple",
        es: "Paradise Valley, Arizona · Laca Alabastro 2K y Maple Sólido",
      },
      summary: {
        en: "A bespoke full-height kitchen wall featuring our signature custom range hood canopy, 45-degree recessed Shaker doors, solid maple dovetail drawer banks, and concealed Blum Movento soft-close hardware.",
        es: "Muro de cocina a toda altura con campana arquitectónica a medida, puertas Shaker con bisel de 45 grados, cajones de maple en cola de milano y herrajes austriacos Blum de cierre suave.",
      },
      dimensions: {
        en: "16 ft (4.88 m) Wide × 9 ft (2.74 m) Ceiling Height",
        es: "4.88 m de Ancho × 2.74 m de Altura hasta Plafón",
      },
      photoUrl: "/assets/kitchens/kitchen-01.jpg",
      photoAlt: "Completed custom luxury kitchen by Renovo in Paradise Valley",
      features: [
        {
          id: "dovetail",
          shortLabel: {
            en: "Dovetail Drawers",
            es: "Cajones en Cola de Milano",
          },
          fullTitle: {
            en: "5/8-inch Solid Maple Interlocking Dovetail Drawers",
            es: "Cajones de 5/8\" en Maple Sólido con Cola de Milano",
          },
          category: {
            en: "Drawer Box Joinery",
            es: "Ebanistería de Cajón",
          },
          renovoStandard: {
            en: "Solid North American hard maple interlocking dovetails with a 3/8-inch captive birch bottom. Hand dry-fitted and clamped with waterproof resin to hold up to 125 lbs with zero deflection.",
            es: "Maple duro macizo con colas de milano talladas y fondo de abedul de 3/8\" encastrado. Ajustado a mano para soportar hasta 55 kg sin deformarse jamás.",
          },
          commercialStandard: {
            en: "Ordinary commercial cabinets use 1/2-inch stapled particleboard boxes that blow out at the corners within 3 to 5 years.",
            es: "Los gabinetes comerciales comunes usan cajones de aglomerado engrapados de 1/2\" que se desarman a los 3 años de uso diario.",
          },
          highlightBox: { x: 100, y: 352, width: 160, height: 98 },
        },
        {
          id: "faceframe",
          shortLabel: {
            en: "Solid Hardwood Frame",
            es: "Marco en Madera Sólida",
          },
          fullTitle: {
            en: "1-3/4-inch Solid Hard Maple Face-Frame Structure",
            es: "Bastidor Frontal en Maple Macizo de 1-3/4\"",
          },
          category: {
            en: "Cabinet Box Integrity",
            es: "Estructura del Módulo",
          },
          renovoStandard: {
            en: "Solid hardwood face frames joined with pocket screws and mortise alignment. Provides square rigidity that easily supports heavy quartz and marble slabs without sagging.",
            es: "Bastidores de madera sólida unidos con tornillo oculto y espiga. Proporcionan rigidez milimétrica para soportar encimeras pesadas de cuarzo o piedra natural sin pandeos.",
          },
          commercialStandard: {
            en: "Frameless particleboard cabinets warp over time, especially under heavy stone countertops or when the house settles.",
            es: "Muebles de aglomerado sin marco que se flexionan con el peso de la piedra y provocan que las puertas se desalineen.",
          },
          highlightBox: { x: 80, y: 75, width: 740, height: 380 },
        },
        {
          id: "finish",
          shortLabel: {
            en: "2K Factory Coating",
            es: "Laca Catalizada 2K",
          },
          fullTitle: {
            en: "4-Stage Factory Cured 2K Polyurethane Coating",
            es: "Curado de Fábrica en Laca de Poliuretano 2K",
          },
          category: {
            en: "Surface Protection",
            es: "Protección de Superficie",
          },
          renovoStandard: {
            en: "Applied in our Phoenix pressurized spray booth. Forms a molecularly bonded barrier completely impervious to cooking oils, boiling steam, household cleaners, and the Arizona desert heat.",
            es: "Aplicada en cabina presurizada en Phoenix. Crea un escudo molecular impenetrable por grasa caliente, vapor de agua, alcohol y el calor seco del desierto.",
          },
          commercialStandard: {
            en: "Standard latex house paint applied with rollers softens from grease, chips easily, and turns yellow around stovetops and sinks.",
            es: "Pintura vinílica o látex aplicada a brocha que se reblandece con la grasa, se desprende con la humedad y se amarillea.",
          },
          highlightBox: { x: 220, y: 75, width: 110, height: 210 },
        },
        {
          id: "blum",
          shortLabel: {
            en: "Concealed Blum Runners",
            es: "Rieles Ocultos Blum",
          },
          fullTitle: {
            en: "Austrian Blum Movento Concealed Soft-Close Slides",
            es: "Correderas Austriacas Blum Ocultas de Cierre Suave",
          },
          category: {
            en: "Hardware Mechanics",
            es: "Mecanismos y Herrajes",
          },
          renovoStandard: {
            en: "Concealed undermount runners hidden beneath the drawer box, rated for over 100,000 smooth cycles with 4D tool-free alignment for permanent 2mm reveal consistency.",
            es: "Rieles montados bajo fondo que quedan totalmente invisibles. Calibración 4D sin herramientas que mantiene holguras uniformes de por vida.",
          },
          commercialStandard: {
            en: "Visible side-mount ball-bearing slides that collect grease and desert dust, grinding and jamming after a few seasons.",
            es: "Rieles laterales de balines a la vista que acumulan grasa y polvo, rechinando y trabándose al poco tiempo.",
          },
          highlightBox: { x: 640, y: 352, width: 160, height: 98 },
        },
        {
          id: "hood",
          shortLabel: {
            en: "Architectural Range Hood",
            es: "Campana Escultórica",
          },
          fullTitle: {
            en: "Custom Range Hood Canopy with Matching Crown Molding",
            es: "Campana Arquitectónica con Remate en Corona a Medida",
          },
          category: {
            en: "Focal Architectural Feature",
            es: "Pieza Central de Diseño",
          },
          renovoStandard: {
            en: "Handcrafted canopy tailored specifically to your ceiling height with removable inspection access, designed to serve as the sculptural crown of the kitchen run.",
            es: "Campana artesanal fabricada a la medida exacta de tu techo con panel registrable oculto, convirtiéndose en el remate visual principal del espacio.",
          },
          commercialStandard: {
            en: "Prefabricated tin hood inserts or microwave combos that interrupt the cabinet run and look like an afterthought.",
            es: "Campanas genéricas de chapa o microondas colgantes que rompen la elegancia y armonía de la cocina.",
          },
          highlightBox: { x: 340, y: 75, width: 220, height: 120 },
        },
      ],
    },
    {
      id: "builtin",
      title: {
        en: "Scottsdale Arched Fireplace Built-In Niches",
        es: "Nichos Gemelos Arqueados en Roble en Scottsdale",
      },
      location: {
        en: "Scottsdale, Arizona · Rift-Cut White Oak & Warm LED Lighting",
        es: "Scottsdale, Arizona · Roble Blanco Natural e Iluminación Cálida",
      },
      summary: {
        en: "Custom architectural bookcases flanking a linear stone fireplace. Crafted from authentic rift-cut white oak with continuous arched casings, 38mm anti-sag floating shelves, and lower media credenzas.",
        es: "Libreros de autor a ambos lados de una chimenea de piedra. Fabricados en roble blanco con arcos continuos, repisas gruesas de 38 mm anti-pandeo y credenzas bajas para equipos de sonido.",
      },
      dimensions: {
        en: "14 ft (4.27 m) Wide × 9.5 ft (2.90 m) Ceiling Height",
        es: "4.27 m de Ancho × 2.90 m de Altura hasta Plafón",
      },
      photoUrl: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
      photoAlt: "Completed custom arched built-ins by Renovo in Scottsdale",
      features: [
        {
          id: "arch",
          shortLabel: {
            en: "Solid Radius Arch",
            es: "Arco Superior Sólido",
          },
          fullTitle: {
            en: "Solid White Oak CNC-Machined Curved Headers",
            es: "Arco Superior Maquinado en Roble Blanco Macizo",
          },
          category: {
            en: "Curved Millwork",
            es: "Geometría Arquitectónica",
          },
          renovoStandard: {
            en: "Machined from solid rift-cut white oak with grain-matched miters and internal concealed channels for brass art picture lights with zero exposed cords.",
            es: "Tallado en roble blanco con veta continua y canalización oculta interna para iluminar cuadros y arte sin cables a la vista.",
          },
          commercialStandard: {
            en: "Cheap flexible MDF arches that crack at the seams and show unsightly joint lines after paint.",
            es: "Arcos de cartón o MDF flexible que se cuartean en las uniones y se pandean con la temperatura.",
          },
          highlightBox: { x: 100, y: 140, width: 220, height: 120 },
        },
        {
          id: "shelving",
          shortLabel: {
            en: "38mm Floating Shelves",
            es: "Repisas Flotantes de 38mm",
          },
          fullTitle: {
            en: "38mm Thick Anti-Sag Display Shelving",
            es: "Repisas de 38mm Diseñadas contra Pandeo",
          },
          category: {
            en: "Load Integrity",
            es: "Capacidad de Carga",
          },
          renovoStandard: {
            en: "Solid oak edge-banded engineered core with concealed heavy-duty steel support pins. Engineered to hold heavy art books and stone sculptures across 48-inch spans without deflection.",
            es: "Cuerpo reforzado con cantos en roble sólido y soportes de acero ocultos. Soporta libros de arte y esculturas pesadas sin doblarse jamás.",
          },
          commercialStandard: {
            en: "Standard 3/4-inch particleboard shelves that bow downward under the weight of books within a year.",
            es: "Repisas delgadas de melamina de 3/4\" que se arquean hacia abajo en pocos meses de uso.",
          },
          highlightBox: { x: 105, y: 210, width: 210, height: 130 },
        },
        {
          id: "basecredenza",
          shortLabel: {
            en: "Media Base Credenza",
            es: "Credenza Baja Ventilada",
          },
          fullTitle: {
            en: "Ventilated Lower Media Credenzas with Concealed Wireways",
            es: "Credenzas Bajas Ventiladas con Veta Continua",
          },
          category: {
            en: "Media Integration",
            es: "Integración Multimedia",
          },
          renovoStandard: {
            en: "Bookmatched oak doors concealing electronics with passive rear ventilation and infrared passthroughs, allowing remotes to operate with closed doors.",
            es: "Puertas con veta continuada que ocultan equipos con ventilación pasiva y paso infrarrojo para usar controles remotos con puertas cerradas.",
          },
          commercialStandard: {
            en: "Enclosed cabinet boxes with no ventilation that trap heat and overheat gaming consoles and audio receivers.",
            es: "Muebles cerrados sin ventilación que sobrecalientan consolas y aparatos electrónicos.",
          },
          highlightBox: { x: 100, y: 370, width: 220, height: 90 },
        },
      ],
    },
    {
      id: "vanity",
      title: {
        en: "Arcadia Fluted Oak Primary Suite Floating Vanity",
        es: "Mueble de Baño Flotante en Roble Acanalado en Arcadia",
      },
      location: {
        en: "Arcadia Phoenix · Dual Sink Fluted Oak & Concealed U-Drawers",
        es: "Arcadia Phoenix · Roble Acanalado y Cajones en U para Desagüe",
      },
      summary: {
        en: "A modern floating bathroom vanity with custom-fluted drawer faces, quartz countertop, dual undermount sinks, and custom dovetail U-drawers that maximize storage around plumbing pipes.",
        es: "Mueble suspendido de baño con frentes acanalados, encimera de cuarzo y cajones especiales en U en cola de milano que recuperan el espacio de almacenamiento alrededor de las tuberías.",
      },
      dimensions: {
        en: "7 ft (2.13 m) Wide × 34 in (86 cm) Height",
        es: "2.13 m de Ancho × 86 cm de Altura",
      },
      photoUrl: "/assets/blueprints-and-docs/custom-furniture-07.jpg",
      photoAlt: "Completed custom floating bathroom vanity by Renovo in Arcadia",
      features: [
        {
          id: "udrawer",
          shortLabel: {
            en: "U-Shaped Dovetail Drawers",
            es: "Cajones en U para Desagüe",
          },
          fullTitle: {
            en: "Custom Notched Dovetail Drawers Around Plumbing Traps",
            es: "Cajones en U en Cola de Milano que Rodean la Fontanería",
          },
          category: {
            en: "Space Optimization",
            es: "Aprovechamiento de Espacio",
          },
          renovoStandard: {
            en: "Solid maple dovetail drawers custom-notched in a U-shape to clear sink P-traps, converting 85% of typically wasted under-sink space into functional, organized storage.",
            es: "Cajones de maple macizo con escotadura en U para salvar las tuberías, recuperando el 85% del espacio que los muebles comerciales pierden.",
          },
          commercialStandard: {
            en: "Fake dummy panels that do not open, or raw particleboard sloppily cut on site that swells up from minor leaks.",
            es: "Cajones falsos sellados que no abren o aglomerado cortado toscamente en obra que se pudre con la humedad.",
          },
          highlightBox: { x: 120, y: 220, width: 310, height: 85 },
        },
        {
          id: "fluted",
          shortLabel: {
            en: "Solid Wood Fluting",
            es: "Acanalado en Madera",
          },
          fullTitle: {
            en: "Solid Hardwood CNC-Fluted Texture with Waterproof Seal",
            es: "Paneles Acanalados en Madera Maciza con Sello Antihumedad",
          },
          category: {
            en: "Tactile Finish",
            es: "Textura y Acabado",
          },
          renovoStandard: {
            en: "Uniform 12mm flutes carved from solid hardwood, hand-sanded with contour blocks and sealed with 2K waterproof polyurethane to withstand hot shower steam.",
            es: "Acanalado de 12mm tallado en madera maciza, lijado a mano y protegido con laca 2K marina resistente al vapor de regadera.",
          },
          commercialStandard: {
            en: "Plastic or paper foil laminates that bubble, peel, and delaminate within six months of bathroom humidity.",
            es: "Plástico o papel vinílico imitación madera que se despega y hace burbujas con el vapor del baño.",
          },
          highlightBox: { x: 470, y: 220, width: 310, height: 85 },
        },
        {
          id: "cantilever",
          shortLabel: {
            en: "Structural Steel Cleat",
            es: "Anclaje de Acero al Muro",
          },
          fullTitle: {
            en: "Internal Cold-Rolled Steel Wall-Mount Cleat System",
            es: "Estructura de Acero Oculta Anclada a Postes de Pared",
          },
          category: {
            en: "Wall Cantilever",
            es: "Fijación Volada",
          },
          renovoStandard: {
            en: "Heavy-gauge structural steel support bracket anchored directly into 2x6 wall studs, supporting over 500 lbs of heavy quartz and filled sinks with zero sag.",
            es: "Estructura de acero oculta fijada directamente a los postes estructurales de la casa. Soporta más de 220 kg de cuarzo y lavabos llenos de agua sin vencerse.",
          },
          commercialStandard: {
            en: "Cheap small corner brackets screwed directly into drywall that tear out of the wall under the weight of stone.",
            es: "Escuadras pequeñas atornilladas a tablaroca que se desprenden con el peso de la encimera de piedra.",
          },
          highlightBox: { x: 100, y: 204, width: 700, height: 210 },
        },
      ],
    },
  ];

  const currentProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  const currentFeature =
    currentProject.features.find((f) => f.id === activeFeatureId) ||
    currentProject.features[0];

  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId);
    const p = projects.find((item) => item.id === projectId) || projects[0];
    setActiveFeatureId(p.features[0].id);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1F1A16] border-b border-[#E5DFD5] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        {/* =====================================================================
            1. REFINED ARCHITECTURAL HEADLINE & PRESET BUTTONS
        ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold-dark)] text-xs font-serif italic">
              <Sparkle size={14} weight="fill" />
              <span>
                {locale === "en"
                  ? "Architectural Presentation & Craftsmanship Anatomy"
                  : "Presentación Arquitectónica y Anatomía de Taller"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#1F1A16] tracking-tight">
              {locale === "en"
                ? "From Architectural Sketch to Living Home."
                : "Del Boceto Arquitectónico a tu Hogar."}
            </h2>

            <p className="text-base text-[#665C52] font-light leading-relaxed">
              {locale === "en"
                ? "Every Renovo project starts as a scaled millwork drawing before our craftsmen cut the first piece of hardwood. Drag the slider across the plan to witness how technical drafting transforms into handcrafted luxury."
                : "Cada proyecto de Renovo comienza como un plano a escala milimétrica antes de cortar la primera tabla. Desliza el control interactivo sobre el plano para ver cómo el trazo técnico se convierte en madera noble y acabados de cabina."}
            </p>
          </div>

          {/* QUICK SLIDER PRESET SWITCHERS */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#F3EFEA] border border-[#E5DFD5] self-start lg:self-auto text-xs shadow-xs">
            <button
              type="button"
              onClick={() => setSliderPos(100)}
              className={`interactive-control px-3.5 py-2 rounded-xl font-serif transition-all flex items-center gap-1.5 ${
                sliderPos === 100
                  ? "bg-[var(--gold)] text-[#1F1A16] font-semibold shadow-xs"
                  : "text-[#665C52] hover:text-[#1F1A16]"
              }`}
            >
              <PencilSimpleLine size={15} />
              <span>{locale === "en" ? "Sketch" : "Boceto"}</span>
            </button>

            <button
              type="button"
              onClick={() => setSliderPos(50)}
              className={`interactive-control px-3.5 py-2 rounded-xl font-serif transition-all flex items-center gap-1.5 ${
                sliderPos === 50
                  ? "bg-[var(--gold)] text-[#1F1A16] font-semibold shadow-xs"
                  : "text-[#665C52] hover:text-[#1F1A16]"
              }`}
            >
              <ArrowsLeftRight size={15} />
              <span>{locale === "en" ? "Split 50/50" : "Comparar"}</span>
            </button>

            <button
              type="button"
              onClick={() => setSliderPos(0)}
              className={`interactive-control px-3.5 py-2 rounded-xl font-serif transition-all flex items-center gap-1.5 ${
                sliderPos === 0
                  ? "bg-[var(--gold)] text-[#1F1A16] font-semibold shadow-xs"
                  : "text-[#665C52] hover:text-[#1F1A16]"
              }`}
            >
              <Camera size={15} />
              <span>{locale === "en" ? "Photo" : "Foto Real"}</span>
            </button>
          </div>
        </div>

        {/* =====================================================================
            2. THREE RESIDENTIAL PROJECT SELECTOR CARDS
        ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {projects.map((proj, idx) => {
            const isSelected = activeProjectId === proj.id;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => handleSelectProject(proj.id)}
                className={`interactive-control p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between gap-3 ${
                  isSelected
                    ? "bg-[#F3EFEA] border-[var(--gold)] ring-1 ring-[var(--gold)]/30 shadow-sm text-[#1F1A16]"
                    : "bg-white border-[#E5DFD5] hover:border-[var(--gold)] text-[#665C52] shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-serif italic text-[var(--gold-dark)]">
                      Project 0{idx + 1}
                    </span>
                    {isSelected && (
                      <CheckCircle size={16} className="text-[var(--gold-dark)]" weight="fill" />
                    )}
                  </div>
                  <h3 className={`text-base font-serif font-medium leading-snug ${isSelected ? "text-[#1F1A16]" : "text-[#665C52]"}`}>
                    {locale === "en" ? proj.title.en : proj.title.es}
                  </h3>
                </div>

                <div className="text-xs text-[#9E9386] pt-2 border-t border-[#E5DFD5] truncate">
                  {locale === "en" ? proj.dimensions.en : proj.dimensions.es}
                </div>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            3. MAIN PRESENTATION CANVAS & SPLIT-REVEAL SLIDER
        ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLUMNS: INTERACTIVE SPLIT CANVAS */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-[#F3EFEA] border border-[#E5DFD5] shadow-lg flex flex-col">
            {/* Canvas Header Bar */}
            <div className="px-5 py-3.5 border-b border-[#E5DFD5] bg-[#F3EFEA] flex flex-wrap items-center justify-between gap-3 text-xs text-[#665C52]">
              <span className="font-serif italic text-sm text-[#1F1A16]">
                {locale === "en" ? currentProject.title.en : currentProject.title.es}
              </span>
              <span className="text-[var(--gold-dark)] font-serif text-[12px] font-semibold">
                {locale === "en" ? currentProject.dimensions.en : currentProject.dimensions.es}
              </span>
            </div>

            {/* Split Reveal Viewport (Drafting Sketch vs Completed Photography) */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#FAF7F0] flex items-center justify-center overflow-hidden touch-pan-y select-none">
              {/* BASE LAYER: REAL COMPLETED PHOTOGRAPHY */}
              <div className="absolute inset-0">
                <img
                  src={currentProject.photoUrl}
                  alt={currentProject.photoAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="pointer-events-none absolute bottom-4 right-4 bg-[#261F1A]/85 border border-[#FAF8F5]/20 px-3 py-1 rounded-full font-serif text-xs text-white backdrop-blur-md shadow-md">
                  {locale === "en" ? "Real Residence Photography" : "Obra Real Entregada"}
                </span>
              </div>

              {/* CLIPPED LAYER: ARCHITECTURAL SKETCH ELEVATION ON WARM VELLUM */}
              <div
                className="absolute inset-0 overflow-hidden bg-[#FAF7F0]"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                {/* Blueprint grid effect subtle parchment overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(#1F1A16 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative w-full h-full p-4 sm:p-8 flex items-center justify-center bg-[#FAF7F0]">
                  {/* SVG Drawing for Kitchen */}
                  {currentProject.id === "kitchen" && (
                    <svg
                      viewBox="0 0 900 520"
                      className="w-full h-full text-[#3D352E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      {/* Crown Molding */}
                      <path
                        d="M 80 60 L 820 60 L 810 75 L 90 75 Z"
                        fill="rgba(197, 155, 39, 0.15)"
                        stroke="var(--gold-dark)"
                        strokeWidth="2"
                      />
                      <text x="95" y="71" fill="var(--gold-dark)" fontSize="11" fontFamily="serif" fontStyle="italic">
                        Architectural Crown Molding
                      </text>

                      {/* Canopy Hood */}
                      <path
                        d="M 360 75 L 540 75 L 560 170 L 340 170 Z"
                        fill={currentFeature.id === "hood" ? "rgba(197, 155, 39, 0.25)" : "rgba(31, 26, 22, 0.04)"}
                        stroke={currentFeature.id === "hood" ? "var(--gold-dark)" : "currentColor"}
                        strokeWidth={currentFeature.id === "hood" ? "2.5" : "1.6"}
                      />
                      <rect x="330" y="170" width="240" height="24" rx="3" fill="rgba(197, 155, 39, 0.18)" stroke="var(--gold-dark)" />
                      <text x="450" y="186" textAnchor="middle" fill="#1F1A16" fontSize="12" fontFamily="serif" fontWeight="500">
                        Custom Range Hood Canopy
                      </text>

                      {/* Upper Wall Cabinets */}
                      <rect x="100" y="75" width="110" height="210" fill="rgba(31, 26, 22, 0.02)" stroke="currentColor" />
                      <rect x="110" y="85" width="90" height="190" strokeDasharray="3 3" opacity="0.5" />
                      <rect
                        x="220"
                        y="75"
                        width="110"
                        height="210"
                        fill={currentFeature.id === "finish" ? "rgba(197, 155, 39, 0.25)" : "rgba(31, 26, 22, 0.02)"}
                        stroke={currentFeature.id === "finish" ? "var(--gold-dark)" : "currentColor"}
                        strokeWidth={currentFeature.id === "finish" ? "2.5" : "1.6"}
                      />
                      <rect x="230" y="85" width="90" height="190" strokeDasharray="3 3" opacity="0.5" />
                      <rect x="580" y="75" width="110" height="210" fill="rgba(31, 26, 22, 0.02)" stroke="currentColor" />
                      <rect x="700" y="75" width="110" height="210" fill="rgba(31, 26, 22, 0.02)" stroke="currentColor" />

                      {/* Mitered Slab Countertop */}
                      <rect x="80" y="330" width="740" height="18" fill="rgba(31, 26, 22, 0.07)" stroke="#1F1A16" strokeWidth="2" />
                      <text x="450" y="343" textAnchor="middle" fill="#1F1A16" fontSize="11" fontFamily="serif" fontStyle="italic">
                        60mm Mitered Quartz Countertop
                      </text>

                      {/* Lower Drawers Left */}
                      <rect
                        x="100"
                        y="352"
                        width="160"
                        height="98"
                        fill={currentFeature.id === "dovetail" ? "rgba(197, 155, 39, 0.25)" : "rgba(31, 26, 22, 0.02)"}
                        stroke={currentFeature.id === "dovetail" ? "var(--gold-dark)" : "currentColor"}
                        strokeWidth={currentFeature.id === "dovetail" ? "2.5" : "1.6"}
                      />
                      <rect x="110" y="358" width="140" height="24" stroke="var(--gold-dark)" />
                      <rect x="110" y="388" width="140" height="26" stroke="currentColor" />
                      <rect x="110" y="420" width="140" height="26" stroke="currentColor" />

                      {/* Center Range Opening */}
                      <rect x="290" y="352" width="320" height="98" fill="rgba(31, 26, 22, 0.06)" strokeDasharray="3 3" stroke="currentColor" />
                      <text x="450" y="405" textAnchor="middle" fill="#5E554B" fontSize="12" fontFamily="serif">
                        36-inch Professional Range
                      </text>

                      {/* Lower Drawers Right */}
                      <rect
                        x="640"
                        y="352"
                        width="160"
                        height="98"
                        fill={currentFeature.id === "blum" ? "rgba(197, 155, 39, 0.25)" : "rgba(31, 26, 22, 0.02)"}
                        stroke={currentFeature.id === "blum" ? "var(--gold-dark)" : "currentColor"}
                        strokeWidth={currentFeature.id === "blum" ? "2.5" : "1.6"}
                      />
                      <rect x="650" y="358" width="140" height="24" stroke="var(--gold-dark)" />
                      <rect x="650" y="388" width="140" height="26" stroke="currentColor" />
                      <rect x="650" y="420" width="140" height="26" stroke="currentColor" />
                    </svg>
                  )}

                  {/* SVG Drawing for Scottsdale Built-in */}
                  {currentProject.id === "builtin" && (
                    <svg
                      viewBox="0 0 900 520"
                      className="w-full h-full text-[#3D352E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      {/* Central Fireplace */}
                      <rect x="360" y="150" width="180" height="310" fill="rgba(31, 26, 22, 0.05)" stroke="currentColor" strokeWidth="2" />
                      <rect x="380" y="300" width="140" height="150" fill="rgba(31, 26, 22, 0.08)" strokeDasharray="3 3" />
                      <text x="450" y="380" textAnchor="middle" fill="#5E554B" fontSize="12" fontFamily="serif">
                        Linear Fireplace & Stone Hearth
                      </text>

                      {/* Left Arched Built-in */}
                      <g stroke="currentColor" strokeWidth="1.6">
                        <path
                          d="M 100 150 A 110 110 0 0 1 320 150 L 320 460 L 100 460 Z"
                          fill="rgba(31, 26, 22, 0.02)"
                        />
                        <path
                          d="M 115 155 A 95 95 0 0 1 305 155"
                          stroke="var(--gold-dark)"
                          strokeWidth={currentFeature.id === "arch" ? "3" : "2"}
                        />
                        <circle cx="210" cy="105" r="8" fill="var(--gold-dark)" />
                        <line x1="200" y1="115" x2="220" y2="115" stroke="var(--gold-dark)" strokeWidth="3" />

                        {/* 38mm Shelves */}
                        <rect
                          x="105"
                          y="205"
                          width="210"
                          height="12"
                          fill="rgba(197, 155, 39, 0.22)"
                          stroke="var(--gold-dark)"
                          strokeWidth={currentFeature.id === "shelving" ? "2.5" : "1.2"}
                        />
                        <rect
                          x="105"
                          y="265"
                          width="210"
                          height="12"
                          fill="rgba(197, 155, 39, 0.22)"
                          stroke="var(--gold-dark)"
                          strokeWidth={currentFeature.id === "shelving" ? "2.5" : "1.2"}
                        />
                        <rect
                          x="105"
                          y="325"
                          width="210"
                          height="12"
                          fill="rgba(197, 155, 39, 0.22)"
                          stroke="var(--gold-dark)"
                          strokeWidth={currentFeature.id === "shelving" ? "2.5" : "1.2"}
                        />

                        {/* Lower Credenza */}
                        <rect
                          x="100"
                          y="370"
                          width="220"
                          height="90"
                          fill={currentFeature.id === "basecredenza" ? "rgba(197, 155, 39, 0.25)" : "rgba(31, 26, 22, 0.04)"}
                          stroke={currentFeature.id === "basecredenza" ? "var(--gold-dark)" : "currentColor"}
                          strokeWidth={currentFeature.id === "basecredenza" ? "2.5" : "1.6"}
                        />
                        <line x1="210" y1="370" x2="210" y2="460" stroke="currentColor" />
                      </g>

                      {/* Right Arched Built-in */}
                      <g stroke="currentColor" strokeWidth="1.6">
                        <path
                          d="M 580 150 A 110 110 0 0 1 800 150 L 800 460 L 580 460 Z"
                          fill="rgba(31, 26, 22, 0.02)"
                        />
                        <path d="M 595 155 A 95 95 0 0 1 785 155" stroke="var(--gold-dark)" strokeWidth="2" />
                        <circle cx="690" cy="105" r="8" fill="var(--gold-dark)" />
                        <line x1="680" y1="115" x2="700" y2="115" stroke="var(--gold-dark)" strokeWidth="3" />

                        <rect x="585" y="205" width="210" height="12" fill="rgba(197, 155, 39, 0.22)" stroke="var(--gold-dark)" />
                        <rect x="585" y="265" width="210" height="12" fill="rgba(197, 155, 39, 0.22)" stroke="var(--gold-dark)" />
                        <rect x="585" y="325" width="210" height="12" fill="rgba(197, 155, 39, 0.22)" stroke="var(--gold-dark)" />

                        <rect x="580" y="370" width="220" height="90" fill="rgba(31, 26, 22, 0.04)" stroke="currentColor" />
                        <line x1="690" y1="370" x2="690" y2="460" stroke="currentColor" />
                      </g>
                    </svg>
                  )}

                  {/* SVG Drawing for Arcadia Vanity */}
                  {currentProject.id === "vanity" && (
                    <svg
                      viewBox="0 0 900 520"
                      className="w-full h-full text-[#3D352E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <line x1="60" y1="460" x2="840" y2="460" stroke="#1F1A16" strokeWidth="2" />
                      <text x="450" y="485" textAnchor="middle" fill="#5E554B" fontSize="12" fontFamily="serif">
                        12-inch Floating Floor Clearance with Ambient LED Wash
                      </text>

                      {/* Dual Sinks */}
                      <rect x="100" y="180" width="700" height="24" fill="rgba(31, 26, 22, 0.08)" stroke="#1F1A16" strokeWidth="2" />
                      <rect x="180" y="160" width="160" height="20" rx="3" stroke="currentColor" />
                      <rect x="560" y="160" width="160" height="20" rx="3" stroke="currentColor" />
                      <text x="260" y="174" textAnchor="middle" fill="#1F1A16" fontSize="11" fontFamily="serif">Under-Mount Sink Left</text>
                      <text x="640" y="174" textAnchor="middle" fill="#1F1A16" fontSize="11" fontFamily="serif">Under-Mount Sink Right</text>

                      {/* Vanity Cabinet Body */}
                      <rect
                        x="100"
                        y="204"
                        width="700"
                        height="210"
                        fill="rgba(31, 26, 22, 0.03)"
                        stroke={currentFeature.id === "cantilever" ? "var(--gold-dark)" : "currentColor"}
                        strokeWidth={currentFeature.id === "cantilever" ? "2.5" : "1.6"}
                      />

                      {/* Left U-Drawer */}
                      <rect
                        x="120"
                        y="220"
                        width="310"
                        height="85"
                        fill={currentFeature.id === "udrawer" ? "rgba(197, 155, 39, 0.25)" : "transparent"}
                        stroke={currentFeature.id === "udrawer" ? "var(--gold-dark)" : "currentColor"}
                        strokeWidth={currentFeature.id === "udrawer" ? "2.5" : "1.6"}
                      />
                      <text x="275" y="265" textAnchor="middle" fill="var(--gold-dark)" fontSize="12" fontFamily="serif">
                        U-Drawer Around Plumbing P-Trap
                      </text>
                      <rect x="120" y="315" width="310" height="85" stroke="currentColor" />

                      {/* Right Fluted Drawers */}
                      <rect
                        x="470"
                        y="220"
                        width="310"
                        height="85"
                        fill={currentFeature.id === "fluted" ? "rgba(197, 155, 39, 0.25)" : "transparent"}
                        stroke={currentFeature.id === "fluted" ? "var(--gold-dark)" : "currentColor"}
                        strokeWidth={currentFeature.id === "fluted" ? "2.5" : "1.6"}
                      />
                      <rect x="470" y="315" width="310" height="85" stroke="currentColor" />
                      {Array.from({ length: 14 }).map((_, i) => (
                        <line
                          key={i}
                          x1={485 + i * 20}
                          y1="225"
                          x2={485 + i * 20}
                          y2="300"
                          stroke="var(--gold-dark)"
                          strokeWidth="1.2"
                          opacity="0.6"
                        />
                      ))}
                    </svg>
                  )}

                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-[#1F1A16]/85 border border-[#FAF8F5]/20 px-3 py-1.5 rounded-full text-xs text-white backdrop-blur-md shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                    <span>{locale === "en" ? "Scale Architectural Elevation" : "Elevación de Taller en Tinta"}</span>
                  </div>
                </div>
              </div>

              {/* SPLIT SLIDER DIVIDER LINE & DRAGGABLE HANDLE */}
              <div
                className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-[#1F1A16] shadow-[0_0_10px_rgba(0,0,0,0.3)] z-30"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[var(--gold)] text-[#1F1A16] shadow-xl">
                  <ArrowsLeftRight size={18} weight="bold" />
                </div>
              </div>

              {/* ACCESSIBLE TOUCH / MOUSE SLIDER INPUT */}
              <input
                type="range"
                min={0}
                max={100}
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Slide to compare architectural sketch and completed residence photo"
                className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 z-40"
              />
            </div>

            {/* Quick Feature Selection Bar (Large, Accessible Touch Targets) */}
            <div className="p-4 bg-[#F3EFEA] border-t border-[#E5DFD5] space-y-2">
              <span className="text-xs font-serif italic text-[#665C52] block">
                {locale === "en" ? "Tap a feature to inspect craftsmanship:" : "Toca una característica para inspeccionar el detalle:"}
              </span>
              <div className="flex flex-wrap gap-2">
                {currentProject.features.map((feat) => {
                  const isSelected = activeFeatureId === feat.id;
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => setActiveFeatureId(feat.id)}
                      className={`interactive-control min-h-[44px] px-4 py-2 rounded-xl text-xs font-serif transition-all flex items-center gap-2 ${
                        isSelected
                          ? "bg-[var(--gold)] text-[#1F1A16] font-semibold shadow-xs"
                          : "bg-white text-[#665C52] hover:text-[#1F1A16] hover:bg-[#F3EFEA] border border-[#E5DFD5] shadow-xs"
                      }`}
                    >
                      <span>{locale === "en" ? feat.shortLabel.en : feat.shortLabel.es}</span>
                      {isSelected && <CheckCircle size={14} weight="fill" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: THE ARTISANAL SPECIFICATION CARD */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-[#E5DFD5] p-6 sm:p-7 shadow-lg space-y-6 text-[#1F1A16]">
            <div className="space-y-1.5">
              <span className="text-xs font-serif italic text-[var(--gold-dark)]">
                {locale === "en" ? currentFeature.category.en : currentFeature.category.es}
              </span>
              <h3 className="text-2xl font-serif font-normal text-[#1F1A16] leading-snug">
                {locale === "en" ? currentFeature.fullTitle.en : currentFeature.fullTitle.es}
              </h3>
            </div>

            {/* Renovo Craftsmanship Guarantee */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-serif text-[var(--gold-dark)] font-semibold">
                <CheckCircle size={16} weight="fill" />
                <span>
                  {locale === "en"
                    ? "The Renovo Atelier Standard"
                    : "El Estándar de Taller Renovo"}
                </span>
              </div>
              <p className="text-xs text-[#1F1A16] leading-relaxed">
                {locale === "en"
                  ? currentFeature.renovoStandard.en
                  : currentFeature.renovoStandard.es}
              </p>
            </div>

            {/* Commercial Comparison */}
            <div className="p-5 rounded-2xl bg-[#F3EFEA] border border-[#E5DFD5] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-serif text-[#665C52] font-semibold">
                <ShieldCheck size={16} />
                <span>
                  {locale === "en"
                    ? "Standard Contractor Alternative"
                    : "Lo que Hacen los Gabinetes Comerciales"}
                </span>
              </div>
              <p className="text-xs text-[#665C52] leading-relaxed">
                {locale === "en"
                  ? currentFeature.commercialStandard.en
                  : currentFeature.commercialStandard.es}
              </p>
            </div>

            {/* Inquire CTA */}
            <div className="pt-2">
              <a
                href="/contacto"
                className="interactive-control min-h-[48px] w-full rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#1F1A16] text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <span>
                  {locale === "en"
                    ? "Request Consultation for This Design"
                    : "Solicitar Consulta para Este Diseño"}
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
