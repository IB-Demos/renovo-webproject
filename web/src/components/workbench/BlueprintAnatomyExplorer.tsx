"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import { FEATURED_CUSTOM_FURNITURE, ALL_CUSTOM_FURNITURE_IMAGES } from "@/lib/company-data/portfolio";
import { Camera, PushPin, Check } from "@phosphor-icons/react";

export function BlueprintAnatomyExplorer() {
  const { locale, t, addSample, isInTray } = useRenovo();
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [activeHotspotIdx, setActiveHotspotIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"photos" | "archive">("photos");

  const activeProject = FEATURED_CUSTOM_FURNITURE[activeProjectIdx] || FEATURED_CUSTOM_FURNITURE[0];
  const activeHotspot = activeProject.hotspots[activeHotspotIdx] || activeProject.hotspots[0];

  const sampleId = `blueprint-${activeProject.id}`;
  const isPinned = isInTray(sampleId);

  const handlePinSystem = () => {
    addSample({
      id: sampleId,
      code: activeProject.code,
      category: "system",
      title: activeProject.title[locale],
      subtitle: activeProject.materialSpec[locale],
    });
  };

  return (
    <div className="rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#FCFAF7] shadow-xl text-[#261F1A]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left 8 Columns: Photography & Hotspots */}
        <div className="lg:col-span-8 p-4 sm:p-8 bg-[#F4EFE6] border-b lg:border-b-0 lg:border-r border-[#DFD6C6] flex flex-col justify-between">
          {/* Top Bar with Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#DFD6C6]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#B85D3B]">
              <Camera size={18} />
              <span>{t.workbench.blueprint.toleranceSpec}</span>
            </div>

            <div
              className="inline-flex rounded-full bg-[#EAE2D5] p-1 border border-[#DFD6C6]"
              role="group"
              aria-label="Custom furniture display mode"
            >
              <button
                type="button"
                onClick={() => setViewMode("photos")}
                className={`interactive-control px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  viewMode === "photos"
                    ? "bg-[#B85D3B] text-white shadow-xs font-semibold"
                    : "text-[#6B5E52] hover:text-[#261F1A]"
                }`}
              >
                {locale === "en" ? "Hotspot Anatomy" : "Anatomía Interactiva"}
              </button>
              <button
                type="button"
                onClick={() => setViewMode("archive")}
                className={`interactive-control px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  viewMode === "archive"
                    ? "bg-[#B85D3B] text-white shadow-xs font-semibold"
                    : "text-[#6B5E52] hover:text-[#261F1A]"
                }`}
              >
                {locale === "en" ? "Full Archive (19)" : "Archivo Completo (19)"}
              </button>
            </div>
          </div>

          {viewMode === "photos" ? (
            <>
              {/* Interactive Viewport */}
              <div className="relative my-5 aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#DFD6C6] bg-[#EAE2D5]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title[locale]}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="bg-[#261F1A]/85 border border-white/20 px-2.5 py-1 rounded font-mono text-[10px] text-white backdrop-blur-xs">
                    {activeProject.code}
                  </span>
                  <span className="bg-[#261F1A]/85 border border-white/20 px-2.5 py-1 rounded font-mono text-[10px] text-[#FCFAF7] backdrop-blur-xs">
                    {activeProject.dimensionsSpec}
                  </span>
                </div>

                {/* Interactive Hotspot Pins */}
                {activeProject.hotspots.map((spot, idx) => {
                  const isSelected = idx === activeHotspotIdx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveHotspotIdx(idx)}
                      style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
                      aria-label={spot.label[locale]}
                      aria-pressed={isSelected}
                      className={`interactive-control absolute -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full font-mono text-xs font-bold transition-all shadow-lg ${
                        isSelected
                          ? "bg-[#B85D3B] text-white ring-4 ring-[#B85D3B]/40 scale-110"
                          : "bg-[#FCFAF7]/95 text-[#261F1A] border border-[#DFD6C6] hover:border-[#B85D3B]"
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Active Hotspot Detail Card */}
              <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-xs mb-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#B85D3B] font-bold">
                  NODE 0{activeHotspotIdx + 1} · {activeHotspot.label[locale]}
                </div>
                <p className="mt-1 text-xs sm:text-sm text-[#6B5E52] leading-relaxed font-serif">
                  {activeHotspot.detail[locale]}
                </p>
              </div>

              {/* Project Selector Strip */}
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#8A7E72] font-semibold">
                  {t.workbench.blueprint.hotspotInstruction}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {FEATURED_CUSTOM_FURNITURE.map((proj, idx) => {
                    const isSelected = idx === activeProjectIdx;
                    return (
                      <button
                        key={proj.id}
                        type="button"
                        onClick={() => {
                          setActiveProjectIdx(idx);
                          setActiveHotspotIdx(0);
                        }}
                        className={`interactive-control p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                          isSelected
                            ? "border-[#B85D3B] bg-[#FCFAF7] text-[#261F1A] shadow-md ring-1 ring-[#B85D3B]"
                            : "border-[#DFD6C6] bg-[#EAE2D5]/70 text-[#6B5E52] hover:border-[#B85D3B]/50"
                        }`}
                      >
                        <img
                          src={proj.image}
                          alt=""
                          className="h-10 w-10 rounded-lg object-cover shrink-0 border border-black/10"
                        />
                        <div className="min-w-0">
                          <div className={`font-mono text-[9px] uppercase font-bold truncate ${isSelected ? "text-[#B85D3B]" : "text-[#8A7E72]"}`}>
                            0{idx + 1} · {proj.category}
                          </div>
                          <div className="text-xs font-semibold truncate leading-tight mt-0.5 text-[#261F1A]">
                            {proj.title[locale]}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            /* Full Archive Gallery View */
            <div className="py-4 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {ALL_CUSTOM_FURNITURE_IMAGES.map((photo: string, pIdx: number) => (
                  <div key={pIdx} className="aspect-square rounded-xl overflow-hidden border border-[#DFD6C6] bg-[#EAE2D5]">
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right 4 Columns: Architectural Specification */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-[#FCFAF7] text-[#261F1A] flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#B85D3B] font-bold">
              {locale === "en" ? "ARCHITECTURAL JOINERY SPEC" : "ESPECIFICACIÓN DE EBANISTERÍA"}
            </div>
            <h3 className="mt-2 text-2xl font-normal font-serif text-[#261F1A] leading-snug">
              {activeProject.title[locale]}
            </h3>

            <div className="mt-6 border-y border-[#DFD6C6] py-5 space-y-4 text-xs">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A7E72] font-semibold">
                  {locale === "en" ? "PRIMARY WOOD SPECIES" : "MADERA PRINCIPAL"}
                </div>
                <div className="mt-1 text-sm text-[#261F1A] font-medium font-serif">
                  {activeProject.materialSpec[locale]}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A7E72] font-semibold">
                  {locale === "en" ? "DIMENSIONS & TOLERANCE" : "DIMENSIONES Y TOLERANCIA"}
                </div>
                <div className="mt-1 text-sm text-[#261F1A] font-medium font-mono">
                  {activeProject.dimensionsSpec}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A7E72] font-semibold">
                  {locale === "en" ? "WORKSHOP DISCIPLINE" : "DISCIPLINA DE TALLER"}
                </div>
                <div className="mt-1 text-sm text-[#B85D3B] font-semibold uppercase font-mono">
                  {activeProject.category}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4">
            <button
              type="button"
              onClick={handlePinSystem}
              className={`interactive-control w-full min-h-[48px] px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                isPinned
                  ? "bg-[#2E6B4E] text-white"
                  : "bg-[#B85D3B] hover:bg-[#A34E2F] text-white shadow-md"
              }`}
            >
              {isPinned ? <Check size={16} weight="bold" /> : <PushPin size={16} />}
              <span>{isPinned ? t.hero.savedInTray : t.hero.saveToTray}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
