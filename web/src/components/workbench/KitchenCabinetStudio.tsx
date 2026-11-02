"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import {
  DOOR_PROFILES,
  ARCHITECTURAL_PIGMENTS,
  SHEEN_SPECS,
  HARDWARE_SPECS,
} from "@/lib/catalog-data/specs";
import { PushPin, Check, Sun } from "@phosphor-icons/react";

export function KitchenCabinetStudio() {
  const { locale, t, addSample, isSampleInTray } = useRenovo();

  const [selectedProfile, setSelectedProfile] = useState(DOOR_PROFILES[0]);
  const [perimeterPigment, setPerimeterPigment] = useState(ARCHITECTURAL_PIGMENTS[0]);
  const [islandPigment, setIslandPigment] = useState(ARCHITECTURAL_PIGMENTS[3]);
  const [selectedSheen, setSelectedSheen] = useState(SHEEN_SPECS[1]);
  const [selectedHardware, setSelectedHardware] = useState(HARDWARE_SPECS[0]);
  const [kelvinMode, setKelvinMode] = useState<"2700K" | "4000K" | "5500K">("2700K");

  const kelvinFilter =
    kelvinMode === "2700K"
      ? "sepia(0.08) brightness(1.02) contrast(1.01)"
      : kelvinMode === "5500K"
      ? "saturate(1.06) brightness(1.04)"
      : "none";

  const currentComboId = `combo-${selectedProfile.id}-${perimeterPigment.id}-${islandPigment.id}`;
  const isPinned = isSampleInTray(currentComboId);

  const handlePinConfiguration = () => {
    addSample({
      id: currentComboId,
      code: `KITCHEN // ${selectedProfile.name[locale]}`,
      category: "configuration",
      title: {
        en: `${selectedProfile.name.en} in ${perimeterPigment.name.en} with ${islandPigment.name.en} Island`,
        es: `${selectedProfile.name.es} en ${perimeterPigment.name.es} con Isla ${islandPigment.name.es}`,
      },
      subtitle: `${selectedSheen.name[locale]} · ${selectedHardware.name[locale]}`,
      hex: islandPigment.hex,
    });
  };

  return (
    <div className="p-4 sm:p-6 bg-transparent text-[#261F1A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Handcrafted Kitchen Elevation Viewport (7 Cols) */}
        <div className="lg:col-span-7 bg-[#FCFAF7] rounded-3xl p-5 sm:p-7 border border-[#DFD6C6] shadow-xl">
          {/* Top Canvas Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DFD6C6] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B85D3B]" />
              <span className="font-semibold text-[#261F1A] uppercase tracking-wider font-mono text-[11px]">
                {locale === "en" ? "Elevation Design Preview" : "Vista Previa de Alzado"}
              </span>
              <span className="text-[#8A7E72]">· {selectedProfile.name[locale]}</span>
            </div>

            {/* Ambient Lighting Warmth Selector */}
            <div className="flex items-center gap-1.5 bg-[#EAE2D5] px-2 py-1 rounded-full border border-[#DFD6C6] shadow-2xs">
              <Sun size={13} className="text-[#B85D3B]" />
              <span className="text-[11px] font-medium text-[#6B5E52] mr-1 hidden sm:inline">
                {locale === "en" ? "Sunlight:" : "Luz:"}
              </span>
              {(["2700K", "4000K", "5500K"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setKelvinMode(k)}
                  aria-pressed={kelvinMode === k}
                  className={`interactive-control px-2 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                    kelvinMode === k
                      ? "bg-[#B85D3B] text-white font-bold shadow-2xs"
                      : "text-[#6B5E52] hover:text-[#261F1A]"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive SVG Elevation with Warm Architectural Shading */}
          <div
            className="relative mt-5 rounded-2xl overflow-hidden border border-[#DFD6C6] bg-[#EAE2D5] aspect-[16/10] flex items-center justify-center p-4 shadow-inner"
            style={{ filter: kelvinFilter }}
          >
            {/* Ambient Warm Glow */}
            <div
              className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, rgba(255,248,235,${selectedSheen.reflectionFactor * 0.9}) 0%, rgba(255,255,255,0) 50%, rgba(255,245,225,${
                  selectedSheen.reflectionFactor * 0.3
                }) 100%)`,
              }}
            />

            <svg
              viewBox="0 0 800 480"
              className="w-full h-full max-h-[420px]"
              role="img"
              aria-label="Interactive Kitchen Elevation Schematic"
            >
              {/* Soft Wall Backdrop & Flooring */}
              <rect x="0" y="0" width="800" height="420" fill="#FBF9F5" />
              <rect x="0" y="420" width="800" height="60" fill="#E6DFD5" />
              {/* Floor Plank Lines */}
              <line x1="0" y1="440" x2="800" y2="440" stroke="rgba(56,44,34,0.08)" strokeWidth="1" />
              <line x1="0" y1="460" x2="800" y2="460" stroke="rgba(56,44,34,0.08)" strokeWidth="1" />

              {/* Upper Perimeter Cabinets */}
              {[80, 210, 470, 600].map((xPos, idx) => (
                <g key={`upper-${idx}`} transform={`translate(${xPos}, 50)`}>
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="145"
                    rx="3"
                    fill={perimeterPigment.hex}
                    stroke="#26201B"
                    strokeWidth="1.5"
                  />
                  {selectedProfile.svgType === "shaker" && (
                    <rect
                      x="14"
                      y="14"
                      width="92"
                      height="117"
                      fill="none"
                      stroke="rgba(0,0,0,0.18)"
                      strokeWidth="1.5"
                    />
                  )}
                  {selectedProfile.svgType === "slim-shaker" && (
                    <rect
                      x="6"
                      y="6"
                      width="108"
                      height="133"
                      fill="none"
                      stroke="rgba(0,0,0,0.18)"
                      strokeWidth="1.2"
                    />
                  )}
                  {selectedProfile.svgType === "fluted" && (
                    <g stroke="rgba(0,0,0,0.15)" strokeWidth="1.5">
                      {[15, 30, 45, 60, 75, 90, 105].map((lx) => (
                        <line key={lx} x1={lx} y1="4" x2={lx} y2="141" />
                      ))}
                    </g>
                  )}
                  <rect
                    x={idx % 2 === 0 ? "102" : "12"}
                    y="108"
                    width="4"
                    height="26"
                    rx="1.5"
                    fill={selectedHardware.finishHex}
                  />
                </g>
              ))}

              {/* Center Handcrafted Range Hood Feature Box */}
              <g transform="translate(340, 45)">
                <rect
                  x="0"
                  y="0"
                  width="120"
                  height="135"
                  rx="3"
                  fill={perimeterPigment.hex}
                  stroke="#26201B"
                  strokeWidth="1.5"
                />
                <line x1="8" y1="112" x2="112" y2="112" stroke={selectedHardware.finishHex} strokeWidth="3" />
              </g>

              {/* Marble / Quartz Backsplash & Slab Datum */}
              <rect x="80" y="195" width="640" height="65" fill="#EDE9E3" opacity="0.95" />
              <rect x="76" y="258" width="648" height="10" fill="#FFFFFF" stroke="#D1CAC0" strokeWidth="0.5" />

              {/* Lower Perimeter Base Cabinets */}
              {[80, 600].map((xPos, idx) => (
                <g key={`base-${idx}`} transform={`translate(${xPos}, 268)`}>
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="152"
                    rx="3"
                    fill={perimeterPigment.hex}
                    stroke="#26201B"
                    strokeWidth="1.5"
                  />
                  {selectedProfile.svgType !== "slab" && (
                    <rect
                      x={selectedProfile.svgType === "slim-shaker" ? "6" : "14"}
                      y={selectedProfile.svgType === "slim-shaker" ? "6" : "14"}
                      width={selectedProfile.svgType === "slim-shaker" ? "108" : "92"}
                      height={selectedProfile.svgType === "slim-shaker" ? "140" : "124"}
                      fill="none"
                      stroke="rgba(0,0,0,0.18)"
                      strokeWidth="1.5"
                    />
                  )}
                  <rect
                    x="44"
                    y="14"
                    width="32"
                    height="4"
                    rx="1.5"
                    fill={selectedHardware.finishHex}
                  />
                </g>
              ))}

              {/* Foreground Center Island Volume */}
              <g transform="translate(175, 276)">
                {/* Waterfall Countertop Slab */}
                <rect x="-8" y="-12" width="466" height="14" rx="2" fill="#FFFFFF" stroke="#D1CAC0" strokeWidth="0.75" />
                {/* Island Cabinets */}
                {[0, 150, 300].map((ix, i) => (
                  <g key={`island-mod-${i}`} transform={`translate(${ix}, 2)`}>
                    <rect
                      x="0"
                      y="0"
                      width="150"
                      height="148"
                      rx="3"
                      fill={islandPigment.hex}
                      stroke="#1A1512"
                      strokeWidth="2"
                    />
                    <line x1="0" y1="42" x2="150" y2="42" stroke="#1A1512" strokeWidth="1.5" />
                    {selectedProfile.svgType === "shaker" && (
                      <>
                        <rect
                          x="12"
                          y="8"
                          width="126"
                          height="26"
                          fill="none"
                          stroke="rgba(255,255,255,0.22)"
                          strokeWidth="1.2"
                        />
                        <rect
                          x="12"
                          y="52"
                          width="126"
                          height="84"
                          fill="none"
                          stroke="rgba(255,255,255,0.22)"
                          strokeWidth="1.2"
                        />
                      </>
                    )}
                    {selectedProfile.svgType === "slim-shaker" && (
                      <>
                        <rect
                          x="6"
                          y="6"
                          width="138"
                          height="30"
                          fill="none"
                          stroke="rgba(255,255,255,0.24)"
                          strokeWidth="1"
                        />
                        <rect
                          x="6"
                          y="48"
                          width="138"
                          height="94"
                          fill="none"
                          stroke="rgba(255,255,255,0.24)"
                          strokeWidth="1"
                        />
                      </>
                    )}
                    {selectedProfile.svgType === "fluted" && (
                      <g stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
                        {[18, 36, 54, 72, 90, 108, 126].map((fx) => (
                          <line key={fx} x1={fx} y1="46" x2={fx} y2="144" />
                        ))}
                      </g>
                    )}
                    <rect
                      x="55"
                      y="19"
                      width="40"
                      height="4"
                      rx="1.5"
                      fill={selectedHardware.finishHex}
                    />
                    <rect
                      x="55"
                      y="60"
                      width="40"
                      height="4"
                      rx="1.5"
                      fill={selectedHardware.finishHex}
                    />
                  </g>
                ))}
              </g>

              {/* Refined Caption Stamp */}
              <text x="82" y="32" fill="#756A5E" fontSize="11" fontFamily="sans-serif" fontWeight="500">
                Perimeter: {perimeterPigment.name[locale]} ({perimeterPigment.brandRef})
              </text>
              <text x="178" y="456" fill="#756A5E" fontSize="11" fontFamily="sans-serif" fontWeight="500">
                Island: {islandPigment.name[locale]} · {selectedProfile.name[locale]}
              </text>
            </svg>
          </div>

          {/* Bottom Specification Bar */}
          <div className="mt-5 pt-4 border-t border-[#DFD6C6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#6B5E52]">
              <div>
                <span className="block text-[11px] text-[#8A7E72]">{locale === "en" ? "Door Profile" : "Perfil"}</span>
                <span className="font-semibold text-[#261F1A]">{selectedProfile.name[locale]}</span>
              </div>
              <div>
                <span className="block text-[11px] text-[#8A7E72]">{locale === "en" ? "Finish Sheen" : "Brillo"}</span>
                <span className="font-semibold text-[#261F1A]">{selectedSheen.name[locale]}</span>
              </div>
              <div>
                <span className="block text-[11px] text-[#8A7E72]">{locale === "en" ? "Hardware" : "Herraje"}</span>
                <span className="font-semibold text-[#261F1A]">{selectedHardware.name[locale]}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePinConfiguration}
              className={`interactive-control min-h-[44px] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0 shadow-md inline-flex items-center gap-2 transition-colors ${
                isPinned
                  ? "bg-[#2E6B4E] text-white"
                  : "bg-[#B85D3B] hover:bg-[#A34E2F] text-white"
              }`}
            >
              {isPinned ? <Check size={15} weight="bold" /> : <PushPin size={15} />}
              <span>{isPinned ? t.hero.savedInTray : t.hero.saveToTray}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Tactile Swatches & Selections (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* 1. Door Profile Cards */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#261F1A] font-bold block mb-2.5 font-mono">
              {t.workbench.cabinet.doorProfileLabel}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {DOOR_PROFILES.map((profile) => {
                const active = selectedProfile.id === profile.id;
                return (
                  <button
                    key={profile.id}
                    type="button"
                    onClick={() => setSelectedProfile(profile)}
                    aria-pressed={active}
                    className={`interactive-control text-left p-3.5 rounded-2xl border min-h-[70px] flex flex-col justify-between transition-all ${
                      active
                        ? "bg-[#FCFAF7] text-[#261F1A] border-[#B85D3B] shadow-md ring-1 ring-[#B85D3B]"
                        : "bg-[#FCFAF7] text-[#6B5E52] border-[#DFD6C6] hover:border-[#B85D3B]/50"
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider text-[#8A7E72] font-mono">
                      {profile.stileWidthMm > 0 ? `${profile.stileWidthMm}mm Stile` : "Zero-Edge"}
                    </span>
                    <span className="text-xs font-semibold leading-snug">{profile.name[locale]}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-[#6B5E52] mt-2 leading-relaxed">
              {selectedProfile.construction[locale]}
            </p>
          </div>

          {/* 2. Perimeter Cabinet Pigment */}
          <div className="pt-4 border-t border-[#DFD6C6]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-[#261F1A] font-bold font-mono">
                {t.workbench.cabinet.perimeterFinishLabel}
              </span>
              <span className="text-xs font-medium text-[#6B5E52]">
                {perimeterPigment.name[locale]}
              </span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {ARCHITECTURAL_PIGMENTS.map((pigment) => {
                const active = perimeterPigment.id === pigment.id;
                return (
                  <button
                    key={`perim-${pigment.id}`}
                    type="button"
                    onClick={() => setPerimeterPigment(pigment)}
                    aria-label={`Perimeter ${pigment.name[locale]}`}
                    aria-pressed={active}
                    className={`interactive-control h-12 rounded-xl border-2 shadow-xs transition-transform ${
                      active
                        ? "border-[#261F1A] scale-110 ring-2 ring-[#B85D3B]"
                        : "border-[#DFD6C6] hover:scale-105"
                    }`}
                    style={{ backgroundColor: pigment.hex }}
                  />
                );
              })}
            </div>
          </div>

          {/* 3. Center Island Statement Tone */}
          <div className="pt-4 border-t border-[#DFD6C6]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-[#261F1A] font-bold font-mono">
                {t.workbench.cabinet.islandFinishLabel}
              </span>
              <span className="text-xs font-medium text-[#6B5E52]">
                {islandPigment.name[locale]}
              </span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {ARCHITECTURAL_PIGMENTS.map((pigment) => {
                const active = islandPigment.id === pigment.id;
                return (
                  <button
                    key={`island-${pigment.id}`}
                    type="button"
                    onClick={() => setIslandPigment(pigment)}
                    aria-label={`Island ${pigment.name[locale]}`}
                    aria-pressed={active}
                    className={`interactive-control h-12 rounded-xl border-2 shadow-xs transition-transform ${
                      active
                        ? "border-[#261F1A] scale-110 ring-2 ring-[#B85D3B]"
                        : "border-[#DFD6C6] hover:scale-105"
                    }`}
                    style={{ backgroundColor: pigment.hex }}
                  />
                );
              })}
            </div>
          </div>

          {/* 4. Sheen Spec */}
          <div className="pt-4 border-t border-[#DFD6C6]">
            <span className="text-xs uppercase tracking-wider text-[#261F1A] font-bold block mb-2 font-mono">
              {t.workbench.cabinet.sheenLevelLabel}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {SHEEN_SPECS.map((sheen) => {
                const active = selectedSheen.id === sheen.id;
                return (
                  <button
                    key={sheen.id}
                    type="button"
                    onClick={() => setSelectedSheen(sheen)}
                    aria-pressed={active}
                    className={`interactive-control p-2.5 rounded-xl border text-left min-h-[52px] transition-all ${
                      active
                        ? "bg-[#261F1A] text-white border-[#261F1A]"
                        : "bg-[#FCFAF7] text-[#261F1A] border-[#DFD6C6] hover:border-[#B85D3B]/50"
                    }`}
                  >
                    <span className="text-[10px] block opacity-75">{sheen.glossUnits}</span>
                    <span className="text-xs font-semibold block mt-0.5">{sheen.name[locale]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Hardware Accent */}
          <div className="pt-4 border-t border-[#DFD6C6]">
            <span className="text-xs uppercase tracking-wider text-[#261F1A] font-bold block mb-2 font-mono">
              {t.workbench.cabinet.hardwareLabel}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {HARDWARE_SPECS.map((hw) => {
                const active = selectedHardware.id === hw.id;
                return (
                  <button
                    key={hw.id}
                    type="button"
                    onClick={() => setSelectedHardware(hw)}
                    aria-pressed={active}
                    className={`interactive-control p-2.5 rounded-xl border text-left flex items-center gap-2 min-h-[48px] transition-all ${
                      active
                        ? "bg-[#261F1A] text-white border-[#261F1A]"
                        : "bg-[#FCFAF7] text-[#261F1A] border-[#DFD6C6] hover:border-[#B85D3B]/50"
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full shrink-0 border border-black/20"
                      style={{ backgroundColor: hw.finishHex }}
                    />
                    <span className="text-xs font-medium leading-tight">{hw.name[locale]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
