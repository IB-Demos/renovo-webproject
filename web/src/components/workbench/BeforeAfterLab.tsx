"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import { BEFORE_AFTER_PAIRS, PROJECT_01_DOCUMENTARY } from "@/lib/company-data/portfolio";
import { ArrowsLeftRight, PushPin, Check, Images, Sparkle, Clock } from "@phosphor-icons/react";

export function BeforeAfterLab() {
  const { locale, t, addSample, isInTray } = useRenovo();
  const [activePairIdx, setActivePairIdx] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(52);
  const [docMode, setDocMode] = useState<"after" | "before">("after");
  const [docIndex, setDocIndex] = useState<number>(0);

  const activePair = BEFORE_AFTER_PAIRS[activePairIdx] || BEFORE_AFTER_PAIRS[0];
  const sampleId = `transformation-${activePair.id}`;
  const pinned = isInTray(sampleId);

  const docImages =
    docMode === "after"
      ? PROJECT_01_DOCUMENTARY.afterImages
      : PROJECT_01_DOCUMENTARY.beforeImages;
  const activeDocImg = docImages[docIndex] || docImages[0];

  const handlePinTransformation = () => {
    addSample({
      id: sampleId,
      code: activePair.code,
      category: "system",
      title: activePair.title[locale],
      subtitle: activePair.systemUsed[locale],
    });
  };

  return (
    <div className="space-y-12">
      {/* PART 1: INTERACTIVE SPLIT-SCREEN BEFORE / AFTER SLIDER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 bg-[#141210] shadow-2xl text-white">
        {/* Left 7 Columns: Interactive Split Image Viewport */}
        <div className="lg:col-span-7 p-4 sm:p-8 bg-[#100D0B] border-b lg:border-b-0 lg:border-r border-white/8">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/8">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
              {activePair.code}
            </span>
            <span className="font-mono text-[11px] text-[#A69B8F] tabular-nums">
              {locale === "en"
                ? `SLIDE TO COMPARE // ${sliderPos}% BEFORE`
                : `DESLIZA PARA COMPARAR // ${sliderPos}% ANTES`}
            </span>
          </div>

          {/* Split-Screen Image Container (Touch-friendly pan-y) */}
          <div className="relative my-5 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161310] select-none touch-pan-y">
            {/* Base Layer: AFTER Image */}
            <img
              src={activePair.afterImage}
              alt={`After: ${activePair.title[locale]}`}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Clipped Layer: BEFORE Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={activePair.beforeImage}
                alt={`Before: ${activePair.title[locale]}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Badges */}
            <span className="pointer-events-none absolute top-3 left-3 bg-[#161310]/85 border border-white/20 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white rounded-md backdrop-blur-xs">
              {locale === "en" ? "BEFORE" : "ANTES"}
            </span>
            <span className="pointer-events-none absolute top-3 right-3 bg-[#2E6B4E]/90 border border-white/20 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white rounded-md backdrop-blur-xs">
              {locale === "en" ? "AFTER (2K FINISH)" : "DESPUÉS (LACA 2K)"}
            </span>

            {/* Vertical Divider Line & Handle */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-white bg-[var(--gold)] text-[#141210] shadow-xl">
                <ArrowsLeftRight size={18} weight="bold" />
              </div>
            </div>

            {/* Accessible Range Input Covering Viewport */}
            <input
              type="range"
              min={5}
              max={95}
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label={
                locale === "en"
                  ? "Before and After comparison slider"
                  : "Control de comparación antes y después"
              }
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 z-20"
            />
          </div>

          {/* 4 Transformation Selector Cards (Responsive grid / horizontal scroll on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {BEFORE_AFTER_PAIRS.map((pair, idx) => {
              const isSelected = idx === activePairIdx;
              return (
                <button
                  key={pair.id}
                  type="button"
                  onClick={() => {
                    setActivePairIdx(idx);
                    setSliderPos(50);
                  }}
                  className={`interactive-control p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-[var(--gold)] bg-[#1F1B16] text-white shadow-md"
                      : "border-white/10 bg-[#161310] text-[#D8CFBF] hover:border-[var(--gold)]/60"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 mb-1.5 rounded-lg overflow-hidden">
                    <img src={pair.beforeImage} alt="" className="h-10 w-full object-cover" />
                    <img src={pair.afterImage} alt="" className="h-10 w-full object-cover" />
                  </div>
                  <div className={`font-mono text-[10px] uppercase font-bold truncate ${isSelected ? "text-[var(--gold)]" : "text-[#8A7F73]"}`}>
                    0{idx + 1} · {pair.category}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right 5 Columns: Transformation Details & Telemetry */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#161310] text-white flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--gold)] font-bold">
              {locale === "en" ? "VERIFIED TRANSFORMATION" : "CASO DE ÉXITO VERIFICADO"}
            </div>
            <h3 className="mt-3 text-2xl font-normal font-serif text-[#FAF8F5] leading-snug">
              {activePair.title[locale]}
            </h3>

            <div className="mt-6 border-y border-[#2E2822] py-5 space-y-4 text-xs">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A7F73]">
                  {locale === "en" ? "COATING & PREP SYSTEM" : "SISTEMA DE PREPARACIÓN Y ACABADO"}
                </div>
                <div className="mt-1 text-sm text-[#EAE2D5] font-medium leading-relaxed">
                  {activePair.systemUsed[locale]}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#2E2822]">
                <span className="text-[#BFB4A6] flex items-center gap-1.5">
                  <Clock size={15} className="text-[var(--gold)]" />
                  <span>{locale === "en" ? "Turnaround Time" : "Tiempo de Ejecución"}</span>
                </span>
                <span className="font-mono font-bold text-white text-sm tabular-nums">
                  {activePair.completionDays} {locale === "en" ? "Working Days" : "Días Hábiles"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4">
            <button
              type="button"
              onClick={handlePinTransformation}
              className={`interactive-control w-full min-h-[48px] px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                pinned
                  ? "bg-[#2E6B4E] text-white"
                  : "bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#141210] shadow-md"
              }`}
            >
              {pinned ? <Check size={16} weight="bold" /> : <PushPin size={16} />}
              <span>{pinned ? t.hero.savedInTray : t.hero.saveToTray}</span>
            </button>
          </div>
        </div>
      </div>

      {/* PART 2: PROJECT 01 COMPLETE PHOTOGRAPHIC DOCUMENTARY */}
      <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141210] shadow-2xl p-5 sm:p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--gold)]">
              <Images size={16} />
              <span>{PROJECT_01_DOCUMENTARY.code}</span>
            </div>
            <h3 className="mt-1 text-xl sm:text-2xl font-serif font-normal text-white">
              {PROJECT_01_DOCUMENTARY.title[locale]}
            </h3>
          </div>

          {/* Mode Switcher: AFTER vs BEFORE */}
          <div
            className="inline-flex rounded-full bg-[#181512] p-1 border border-white/10"
            role="group"
            aria-label="Documentary mode"
          >
            <button
              type="button"
              onClick={() => {
                setDocMode("after");
                setDocIndex(0);
              }}
              className={`interactive-control px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                docMode === "after"
                  ? "bg-[var(--gold)] text-[#0E0C0A] shadow-xs"
                  : "text-[#B8AEA2] hover:text-white"
              }`}
            >
              {locale === "en" ? "Completed After (14)" : "Terminado Después (14)"}
            </button>
            <button
              type="button"
              onClick={() => {
                setDocMode("before");
                setDocIndex(0);
              }}
              className={`interactive-control px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                docMode === "before"
                  ? "bg-[var(--gold)] text-[#0E0C0A] shadow-xs"
                  : "text-[#B8AEA2] hover:text-white"
              }`}
            >
              {locale === "en" ? "Original Before (6)" : "Original Antes (6)"}
            </button>
          </div>
        </div>

        {/* Featured Big Viewport */}
        <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161310]">
          <img
            src={activeDocImg}
            alt="Renovo Project Documentary Photo"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Responsive Thumbnail Grid (2 cols on phone, 4 on tablet, 7 on desktop) */}
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {docImages.map((imgPath, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setDocIndex(idx)}
              className={`interactive-control aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                docIndex === idx
                  ? "border-[var(--gold)] scale-95 shadow-md"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={imgPath} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
