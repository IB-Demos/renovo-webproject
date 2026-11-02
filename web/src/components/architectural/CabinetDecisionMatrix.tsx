"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import {
  Scales,
  Clock,
  Sparkle,
  ArrowRight,
  CheckCircle,
  Hammer,
  ShieldCheck,
  HouseLine,
} from "@phosphor-icons/react";

type RenovationPath = "refacing" | "custom";

export function CabinetDecisionMatrix() {
  const { locale } = useRenovo();
  const [selectedPath, setSelectedPath] = useState<RenovationPath>("refacing");

  // Interactive diagnostic questions
  const [answers, setAnswers] = useState({
    layoutSatisfied: true, // true = happy with footprint, false = want to move walls/island
    boxCondition: "solid", // 'solid' | 'damaged'
    urgency: "fast", // 'fast' (5-7 days) | 'thorough' (4-6 weeks)
  });

  const handleDiagnosticChange = (key: string, value: any) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    // Smart logic: recommend custom if they want to move layout or boxes are damaged
    if (!updated.layoutSatisfied || updated.boxCondition === "damaged") {
      setSelectedPath("custom");
    } else {
      setSelectedPath("refacing");
    }
  };

  const pathDetails = {
    refacing: {
      tag: {
        en: "Path A · Factory Refacing & 2K Spray",
        es: "Opción A · Refacing y Laca Catalizada 2K",
      },
      title: {
        en: "Preserve Existing Framework with Brand-New Doors",
        es: "Conserva tus Módulos Sólidos con Puertas Nuevas",
      },
      headline: {
        en: "The Smart Architectural Transformation (40% to 50% Lower Investment)",
        es: "La Transformación Inteligente (40% a 50% Menor Inversión)",
      },
      summary: {
        en: "If your cabinet framework is solid hardwood, demolishing it is an unnecessary expense. We manufacture brand new custom Shaker doors, spray your face frames in-home using sealed containment, and bake doors in our shop spray booth.",
        es: "Si la estructura fija de tus gabinetes es de madera maciza, demolerla es un gasto innecesario. Fabricamos puertas Shaker nuevas a medida, esmaltamos los marcos en sitio con sellado hermético y curamos las puertas en cabina de taller.",
      },
      investment: {
        en: "40% to 50% Lower than full replacement",
        es: "40% a 50% menor que una demolición total",
      },
      timeline: {
        en: "5 to 7 Working Days",
        es: "5 a 7 Días Hábiles",
      },
      disruption: {
        en: "Minimal · Kitchen remains functional most of the week",
        es: "Mínima · La cocina permanece funcional casi toda la semana",
      },
      scope: {
        en: "New doors, drawer fronts, Blum soft-close hinges, and complete 2K polyurethane factory finish.",
        es: "Puertas nuevas, frentes de cajón, bisagras Blum de cierre suave y acabado integral en laca 2K de cabina.",
      },
      photo: "/assets/before-after/pair-01-kitchen-after.jpg",
      photoCaption: {
        en: "Phoenix residence: Oak framework preserved, upgraded with 2K Alabaster Shaker doors.",
        es: "Residencia en Phoenix: Bastidor de encino conservado con puertas Shaker nuevas en laca 2K.",
      },
      raulQuote: {
        en: "If your cabinet boxes are structurally square and sound, do not throw away good hardwood. A factory 2K refacing gives you a brand-new luxury look in under a week.",
        es: "Si las cajas de tus gabinetes están a plomo y firmes, no tires madera noble a la basura. Un refacing de fábrica te da una cocina de revista en menos de una semana.",
      },
    },
    custom: {
      tag: {
        en: "Path B · Bespoke Full-Shop Build",
        es: "Opción B · Fabricación a Medida desde Cero",
      },
      title: {
        en: "Complete Architectural Reconfiguration",
        es: "Rediseño y Construcción Integral desde Cero",
      },
      headline: {
        en: "A Clean Slate for Architectural Masterpieces",
        es: "Lienzo en Blanco para una Obra Maestra de Autor",
      },
      summary: {
        en: "Designed from raw North American hardwoods when you want to extend cabinets to the ceiling, reposition appliances, build a monumental waterfall island, or incorporate integrated wine displays.",
        es: "Diseñado desde cero en maderas nobles norteamericanas cuando deseas gabinetes hasta el techo, mover estufa y fregadero, construir una isla monumental o integrar cavas y alacenas de autor.",
      },
      investment: {
        en: "Full Bespoke Architectural Investment",
        es: "Inversión Completa de Ebanistería de Autor",
      },
      timeline: {
        en: "4 to 6 Weeks (Shop build & precision install)",
        es: "4 a 6 Semanas (Fabricación en taller e instalación)",
      },
      disruption: {
        en: "Full Renovation · Involves demolition and trade coordination",
        es: "Obra Completa · Requiere retiro de módulos y coordinación de gremios",
      },
      scope: {
        en: "Custom solid maple boxes, dovetail drawers, ceiling crown moldings, fluted islands, and full interior millwork.",
        es: "Cajas en maple sólido, cajones en cola de milano, molduras de remate a plafón e islas con acanalado.",
      },
      photo: "/assets/kitchens/kitchen-01.jpg",
      photoCaption: {
        en: "Paradise Valley residence: Complete custom build to ceiling with integrated architectural hood.",
        es: "Residencia en Paradise Valley: Fabricación completa a plafón con campana escultórica integrada.",
      },
      raulQuote: {
        en: "When your layout is dysfunctional or you want a massive island with waterfall stone, starting from scratch allows us to engineer every cubic inch to perfection.",
        es: "Cuando la distribución actual no funciona o sueñas con una isla monumental con piedra cascada, construir desde cero nos permite diseñar cada centímetro a la perfección.",
      },
    },
  };

  const currentPath = pathDetails[selectedPath];

  return (
    <section className="py-20 lg:py-28 bg-[#F4EFE6] text-[#261F1A] border-b border-[#DFD6C6] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        {/* =====================================================================
            1. SECTION HEADLINE (Architectural Decision Discipline)
        ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Scales size={15} />
              <span>
                {locale === "en"
                  ? "Architectural Decision Guide: Refacing vs. Custom Build"
                  : "Guía de Decisión: Refacing vs. Fabricación Total"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#261F1A] tracking-tight">
              {locale === "en"
                ? "Should You Reface or Build from Scratch?"
                : "¿Conviene Transformar o Fabricar desde Cero?"}
            </h2>

            <p className="text-base text-[#6B5E52] font-light leading-relaxed">
              {locale === "en"
                ? "Many homeowners spend tens of thousands unnecessarily demolishing sound hardwood cabinetry. Use our 3-question diagnostic below to find the most honest, cost-effective path for your Arizona home."
                : "Muchos propietarios gastan miles de dólares demoliendo madera noble en perfecto estado. Responde estas 3 preguntas para descubrir la opción más honesta y rentable para tu residencia en Arizona."}
            </p>
          </div>

          {/* MANUAL PATH TOGGLE (Refacing vs Full Build) */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] self-start lg:self-auto text-xs shadow-xs">
            <button
              type="button"
              onClick={() => setSelectedPath("refacing")}
              className={`interactive-control min-h-[44px] px-4 py-2 rounded-xl font-serif transition-all flex items-center gap-2 ${
                selectedPath === "refacing"
                  ? "bg-[#B85D3B] text-[#FCFAF7] font-semibold shadow-xs"
                  : "text-[#6B5E52] hover:text-[#261F1A]"
              }`}
            >
              <Sparkle size={15} weight={selectedPath === "refacing" ? "fill" : "regular"} />
              <span>{locale === "en" ? "Path A · 2K Refacing" : "Opción A · Refacing 2K"}</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPath("custom")}
              className={`interactive-control min-h-[44px] px-4 py-2 rounded-xl font-serif transition-all flex items-center gap-2 ${
                selectedPath === "custom"
                  ? "bg-[#B85D3B] text-[#FCFAF7] font-semibold shadow-xs"
                  : "text-[#6B5E52] hover:text-[#261F1A]"
              }`}
            >
              <Hammer size={15} weight={selectedPath === "custom" ? "fill" : "regular"} />
              <span>{locale === "en" ? "Path B · Full Custom Build" : "Opción B · Fabricación Total"}</span>
            </button>
          </div>
        </div>

        {/* =====================================================================
            2. THREE-QUESTION ARCHITECTURAL DIAGNOSTIC (Interactive)
        ===================================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EAE2D5] border border-[#DFD6C6] shadow-lg space-y-6">
          <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-4">
            <span className="text-xs font-serif italic text-[#B85D3B]">
              {locale === "en"
                ? "Interactive Kitchen Diagnostic (30 seconds)"
                : "Diagnóstico Rápido de Cocina (30 segundos)"}
            </span>
            <span className="text-xs text-[#6B5E52]">
              {locale === "en"
                ? "Answer to see our honest recommendation"
                : "Responde para ver la recomendación de nuestro taller"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Question 1: Footprint & Layout */}
            <div className="space-y-3">
              <label className="text-sm font-serif font-medium text-[#261F1A] block">
                {locale === "en" ? "1. Current Kitchen Layout:" : "1. Distribución Actual:"}
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleDiagnosticChange("layoutSatisfied", true)}
                  className={`interactive-control w-full p-3.5 rounded-xl border text-left text-xs font-serif transition-all flex items-start gap-2.5 ${
                    answers.layoutSatisfied
                      ? "bg-[#FCFAF7] border-[#B85D3B] text-[#261F1A] ring-1 ring-[#B85D3B]/30 shadow-xs"
                      : "bg-[#FCFAF7]/75 border-[#DFD6C6] text-[#6B5E52] hover:text-[#261F1A] hover:bg-[#FCFAF7] shadow-xs"
                  }`}
                >
                  <CheckCircle size={16} className={answers.layoutSatisfied ? "text-[#B85D3B] shrink-0 mt-0.5" : "opacity-30 shrink-0 mt-0.5"} weight={answers.layoutSatisfied ? "fill" : "regular"} />
                  <div>
                    <span className="font-semibold block text-[#261F1A]">
                      {locale === "en" ? "Happy with current footprint" : "Satisfecho con la distribución actual"}
                    </span>
                    <span className="text-[11px] text-[#7A6E63]">
                      {locale === "en" ? "Appliances and island stay in place" : "Estufa, tarja e isla se quedan donde están"}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleDiagnosticChange("layoutSatisfied", false)}
                  className={`interactive-control w-full p-3.5 rounded-xl border text-left text-xs font-serif transition-all flex items-start gap-2.5 ${
                    !answers.layoutSatisfied
                      ? "bg-[#FCFAF7] border-[#B85D3B] text-[#261F1A] ring-1 ring-[#B85D3B]/30 shadow-xs"
                      : "bg-[#FCFAF7]/75 border-[#DFD6C6] text-[#6B5E52] hover:text-[#261F1A] hover:bg-[#FCFAF7] shadow-xs"
                  }`}
                >
                  <CheckCircle size={16} className={!answers.layoutSatisfied ? "text-[#B85D3B] shrink-0 mt-0.5" : "opacity-30 shrink-0 mt-0.5"} weight={!answers.layoutSatisfied ? "fill" : "regular"} />
                  <div>
                    <span className="font-semibold block text-[#261F1A]">
                      {locale === "en" ? "Want to reconfigure or expand" : "Deseo reconfigurar o ampliar"}
                    </span>
                    <span className="text-[11px] text-[#7A6E63]">
                      {locale === "en" ? "Moving walls, expanding island, ceiling height" : "Mover muros, agrandar isla o llegar a techo"}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Question 2: Box Condition */}
            <div className="space-y-3">
              <label className="text-sm font-serif font-medium text-[#261F1A] block">
                {locale === "en" ? "2. Existing Cabinet Box Health:" : "2. Estado de las Cajas Estructurales:"}
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleDiagnosticChange("boxCondition", "solid")}
                  className={`interactive-control w-full p-3.5 rounded-xl border text-left text-xs font-serif transition-all flex items-start gap-2.5 ${
                    answers.boxCondition === "solid"
                      ? "bg-[#FCFAF7] border-[#B85D3B] text-[#261F1A] ring-1 ring-[#B85D3B]/30 shadow-xs"
                      : "bg-[#FCFAF7]/75 border-[#DFD6C6] text-[#6B5E52] hover:text-[#261F1A] hover:bg-[#FCFAF7] shadow-xs"
                  }`}
                >
                  <CheckCircle size={16} className={answers.boxCondition === "solid" ? "text-[#B85D3B] shrink-0 mt-0.5" : "opacity-30 shrink-0 mt-0.5"} weight={answers.boxCondition === "solid" ? "fill" : "regular"} />
                  <div>
                    <span className="font-semibold block text-[#261F1A]">
                      {locale === "en" ? "Solid hardwood / structurally sound" : "Madera sólida / estructura firme"}
                    </span>
                    <span className="text-[11px] text-[#7A6E63]">
                      {locale === "en" ? "Boxes are square, finish is just dated" : "Cajas a plomo, solo el acabado está gastado"}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleDiagnosticChange("boxCondition", "damaged")}
                  className={`interactive-control w-full p-3.5 rounded-xl border text-left text-xs font-serif transition-all flex items-start gap-2.5 ${
                    answers.boxCondition === "damaged"
                      ? "bg-[#FCFAF7] border-[#B85D3B] text-[#261F1A] ring-1 ring-[#B85D3B]/30 shadow-xs"
                      : "bg-[#FCFAF7]/75 border-[#DFD6C6] text-[#6B5E52] hover:text-[#261F1A] hover:bg-[#FCFAF7] shadow-xs"
                  }`}
                >
                  <CheckCircle size={16} className={answers.boxCondition === "damaged" ? "text-[#B85D3B] shrink-0 mt-0.5" : "opacity-30 shrink-0 mt-0.5"} weight={answers.boxCondition === "damaged" ? "fill" : "regular"} />
                  <div>
                    <span className="font-semibold block text-[#261F1A]">
                      {locale === "en" ? "Damaged particleboard / sagging" : "Aglomerado dañado / pandeado"}
                    </span>
                    <span className="text-[11px] text-[#7A6E63]">
                      {locale === "en" ? "Water damage, warping or broken frames" : "Daño por agua o marcos desalineados"}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Question 3: Urgency & Lifestyle */}
            <div className="space-y-3">
              <label className="text-sm font-serif font-medium text-[#261F1A] block">
                {locale === "en" ? "3. Desired Timeline & Lifestyle:" : "3. Tiempos y Estilo de Vida:"}
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleDiagnosticChange("urgency", "fast")}
                  className={`interactive-control w-full p-3.5 rounded-xl border text-left text-xs font-serif transition-all flex items-start gap-2.5 ${
                    answers.urgency === "fast"
                      ? "bg-[#FCFAF7] border-[#B85D3B] text-[#261F1A] ring-1 ring-[#B85D3B]/30 shadow-xs"
                      : "bg-[#FCFAF7]/75 border-[#DFD6C6] text-[#6B5E52] hover:text-[#261F1A] hover:bg-[#FCFAF7] shadow-xs"
                  }`}
                >
                  <CheckCircle size={16} className={answers.urgency === "fast" ? "text-[#B85D3B] shrink-0 mt-0.5" : "opacity-30 shrink-0 mt-0.5"} weight={answers.urgency === "fast" ? "fill" : "regular"} />
                  <div>
                    <span className="font-semibold block text-[#261F1A]">
                      {locale === "en" ? "Fast transformation (5 to 7 days)" : "Transformación rápida (5 a 7 días)"}
                    </span>
                    <span className="text-[11px] text-[#7A6E63]">
                      {locale === "en" ? "Need kitchen usable with zero demo" : "Cocina usable casi sin interrupción"}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleDiagnosticChange("urgency", "thorough")}
                  className={`interactive-control w-full p-3.5 rounded-xl border text-left text-xs font-serif transition-all flex items-start gap-2.5 ${
                    answers.urgency === "thorough"
                      ? "bg-[#FCFAF7] border-[#B85D3B] text-[#261F1A] ring-1 ring-[#B85D3B]/30 shadow-xs"
                      : "bg-[#FCFAF7]/75 border-[#DFD6C6] text-[#6B5E52] hover:text-[#261F1A] hover:bg-[#FCFAF7] shadow-xs"
                  }`}
                >
                  <CheckCircle size={16} className={answers.urgency === "thorough" ? "text-[#B85D3B] shrink-0 mt-0.5" : "opacity-30 shrink-0 mt-0.5"} weight={answers.urgency === "thorough" ? "fill" : "regular"} />
                  <div>
                    <span className="font-semibold block text-[#261F1A]">
                      {locale === "en" ? "Ready for a complete renovation" : "Listo para una renovación completa"}
                    </span>
                    <span className="text-[11px] text-[#7A6E63]">
                      {locale === "en" ? "Willing to invest 4 to 6 weeks for dream layout" : "Dispuesto a invertir 4 a 6 semanas"}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            3. DYNAMIC PATH PRESENTATION BOARD (Side-by-Side Reality)
        ===================================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left 7 Columns: Visual Case Study & Technical Comparison */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] shadow-lg flex flex-col">
              {/* Photo Viewport */}
              <div className="relative aspect-[16/10] w-full bg-[#261F1A] overflow-hidden">
                <img
                  src={currentPath.photo}
                  alt={currentPath.title[locale]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-serif text-sm">
                    {currentPath.photoCaption[locale]}
                  </span>
                  <span className="bg-[#B85D3B] text-[#FCFAF7] px-3 py-1 rounded-full font-serif font-semibold text-[11px] shadow-sm">
                    {selectedPath === "refacing" ? "Verified Refacing" : "Full Custom Build"}
                  </span>
                </div>
              </div>

              {/* Technical Comparison Matrix Table */}
              <div className="p-6 sm:p-8 space-y-5 text-[#261F1A]">
                <div className="space-y-1.5">
                  <span className="text-xs font-serif italic text-[#B85D3B]">
                    {currentPath.tag[locale]}
                  </span>
                  <h3 className="text-2xl font-serif font-normal text-[#261F1A]">
                    {currentPath.headline[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed font-light">
                    {currentPath.summary[locale]}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DFD6C6] text-xs">
                  <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-1">
                    <span className="text-[#8A7E72] text-[11px] block font-serif">
                      {locale === "en" ? "Typical Timeline" : "Tiempo de Entrega"}
                    </span>
                    <span className="text-sm font-serif font-semibold text-[#261F1A] flex items-center gap-1.5">
                      <Clock size={15} className="text-[#B85D3B]" />
                      {currentPath.timeline[locale]}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-1">
                    <span className="text-[#8A7E72] text-[11px] block font-serif">
                      {locale === "en" ? "Relative Investment" : "Inversión Relativa"}
                    </span>
                    <span className="text-sm font-serif font-semibold text-[#261F1A] flex items-center gap-1.5">
                      <Sparkle size={15} className="text-[#B85D3B]" weight="fill" />
                      {selectedPath === "refacing" ? "40% - 50% Lower" : "Full Bespoke"}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-1">
                    <span className="text-[#8A7E72] text-[11px] block font-serif">
                      {locale === "en" ? "Home Disruption" : "Nivel de Obra en Casa"}
                    </span>
                    <span className="text-sm font-serif font-semibold text-[#261F1A] flex items-center gap-1.5">
                      <HouseLine size={15} className="text-[#B85D3B]" />
                      {selectedPath === "refacing" ? "Minimal" : "Full Renovation"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Raul's Honest Verdict & Consultation Action */}
            <div className="lg:col-span-5 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] p-6 sm:p-8 shadow-lg space-y-6 text-[#261F1A]">
              <div className="space-y-2">
                <span className="text-xs font-serif italic text-[#B85D3B]">
                  {locale === "en" ? "Master Craftsman's Honest Advice" : "La Opinión Honesta de Raul Burgos"}
                </span>
                <h3 className="text-2xl font-serif font-normal text-[#261F1A] leading-snug">
                  {currentPath.title[locale]}
                </h3>
              </div>

              {/* Quote Card */}
              <div className="p-5 rounded-2xl bg-[#EAE2D5] border-l-4 border-[#B85D3B] border-y border-r border-[#DFD6C6] relative space-y-3 shadow-xs">
                <p className="text-sm font-serif italic text-[#261F1A] leading-relaxed">
                  &ldquo;{currentPath.raulQuote[locale]}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-[#DFD6C6] text-xs">
                  <div className="w-8 h-8 rounded-full bg-[#B85D3B] text-[#FCFAF7] font-bold flex items-center justify-center font-serif text-sm">
                    RB
                  </div>
                  <div>
                    <span className="font-semibold text-[#261F1A] block">Raul Burgos</span>
                    <span className="text-[#8A7E72] text-[11px]">Founder &amp; Master Cabinetmaker</span>
                  </div>
                </div>
              </div>

              {/* What is Included Pill */}
              <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#B85D3B] font-serif font-semibold">
                  <ShieldCheck size={16} />
                  <span>{locale === "en" ? "Scope of Work Included:" : "Alcance del Trabajo Incluido:"}</span>
                </div>
                <p className="text-[#6B5E52] leading-relaxed">
                  {currentPath.scope[locale]}
                </p>
              </div>

              {/* Consultation Action */}
              <div className="pt-2">
                <a
                  href={`/contacto?service=${selectedPath === "refacing" ? "refacing" : "kitchens"}`}
                  className="interactive-control min-h-[48px] w-full rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <span>
                    {locale === "en"
                      ? `Book an In-Home Consultation for ${selectedPath === "refacing" ? "Refacing" : "Custom Build"}`
                      : `Agendar Cita en Sitio para ${selectedPath === "refacing" ? "Refacing" : "Fabricación a Medida"}`}
                  </span>
                  <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
