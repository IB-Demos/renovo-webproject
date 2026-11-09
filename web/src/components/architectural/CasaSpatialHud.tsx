"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo, CASA_ROOMS, LIGHTING_MODES, CasaRoomId, LightingMode } from "@/context/RenovoContext";
import {
  Compass,
  Sun,
  SunHorizon,
  MoonStars,
  Palette,
  Sparkle,
  ArrowRight,
  CaretUp,
  CaretDown,
  X,
  Check,
} from "@phosphor-icons/react";

export function CasaSpatialHud() {
  const {
    locale,
    activeRoom,
    setActiveRoom,
    lightingMode,
    setLightingMode,
    activeRoomColors,
    setRoomColor,
    isSpatialHudOpen,
    setIsSpatialHudOpen,
  } = useRenovo();

  const currentRoom = CASA_ROOMS[activeRoom] || CASA_ROOMS.kitchen;
  const currentLighting = LIGHTING_MODES[lightingMode] || LIGHTING_MODES.noon;
  const currentColorHex = activeRoomColors[activeRoom] || currentRoom.defaultColorHex;

  const roomKeys: CasaRoomId[] = ["kitchen", "living", "entryway", "patio"];

  return (
    <aside aria-label="Casa Renovo Spatial Controls" className="fixed bottom-5 left-5 z-40 select-none">
      <AnimatePresence mode="wait">
        {!isSpatialHudOpen ? (
          /* ===============================================================
             1. COMPACT DOCK PILL (Minimalist, elegant, non-intrusive)
          =============================================================== */
          <motion.button
            key="compact-hud"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            type="button"
            onClick={() => setIsSpatialHudOpen(true)}
            className="interactive-control group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#1A1410]/95 text-[#FCFAF7] backdrop-blur-md border border-[#C59B27]/40 shadow-2xl hover:border-[#C59B27] hover:scale-[1.02] transition-all"
            title={locale === "en" ? "Explore Casa Renovo Atmosphere" : "Controlar Atmósfera Casa Renovo"}
          >
            {/* Color Dot with crisp outline */}
            <span
              className="relative flex h-3 w-3 rounded-full border border-white/60 shadow-xs"
              style={{ backgroundColor: currentColorHex }}
            />

            {/* Room Identifier */}
            <div className="flex items-center gap-1 sm:gap-1.5 text-xs font-serif">
              <span className="text-[#C59B27] font-bold font-mono text-[10px]">
                {currentRoom.number}
              </span>
              <span className="font-semibold hidden sm:inline">{currentRoom.tag[locale].split(" ")[0]}</span>
              <span className="text-[#8C7A6B] hidden sm:inline">·</span>
              <span className="text-[10px] sm:text-[11px] text-[#E0D7CC] font-mono">{currentLighting.kelvin}</span>
            </div>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[#C59B27] group-hover:bg-[#B85D3B] group-hover:text-white transition-colors">
              <CaretUp size={12} weight="bold" />
            </span>
          </motion.button>
        ) : (
          /* ===============================================================
             2. EXPANDED ARCHITECTURAL CONTROL PANEL
          =============================================================== */
          <motion.div
            key="expanded-hud"
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-[330px] sm:w-[360px] p-4 sm:p-5 rounded-3xl bg-[#FCFAF7]/98 backdrop-blur-xl border border-[#DFD6C6] text-[#1A1410] shadow-[0_20px_60px_-15px_rgba(26,20,16,0.35)]"
          >
            {/* PANEL HEADER */}
            <div className="flex items-center justify-between pb-3 border-b border-[#DFD6C6]">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B85D3B] text-white text-xs font-bold shadow-xs">
                  <Compass size={13} weight="bold" />
                </span>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#B85D3B] font-bold">
                    {locale === "en" ? "DAYLIGHT & FINISH SIMULATOR" : "SIMULADOR DE LUZ Y ACABADOS"}
                  </div>
                  <h3 className="text-xs font-serif font-semibold text-[#1A1410]">
                    {locale === "en" ? "Arizona Natural Daylight" : "Luz Natural de Arizona"}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSpatialHudOpen(false)}
                className="p-1 rounded-full text-[#8C7A6B] hover:text-[#1A1410] hover:bg-[#EAE2D5] transition-colors"
                aria-label="Close"
              >
                <X size={14} weight="bold" />
              </button>
            </div>

            {/* 1. ROOM SPACES SELECTOR */}
            <div className="py-3 border-b border-[#DFD6C6] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-serif font-semibold text-[#3D3228]">
                <span>{locale === "en" ? "Select Residence Area" : "Selecciona Espacio Residencial"}</span>
                <span className="font-mono text-[#8C7A6B] text-[10px]">{currentRoom.number} / 04</span>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {roomKeys.map((key) => {
                  const room = CASA_ROOMS[key];
                  const isActive = key === activeRoom;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveRoom(key)}
                      className={`interactive-control flex flex-col items-center p-2 rounded-xl border text-center transition-all ${
                        isActive
                          ? "bg-[#1A1410] text-[#FCFAF7] border-[#1A1410] shadow-sm font-semibold"
                          : "bg-[#F4EFE6] text-[#3D3228] border-[#DFD6C6] hover:border-[#1A1410]"
                      }`}
                    >
                      <span className="font-mono text-[9px] text-[#C59B27] font-bold">{room.number}</span>
                      <span className="text-[10px] font-serif line-clamp-1 mt-0.5">
                        {room.tag[locale].split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="text-[11px] text-[#3D3228] leading-tight pt-1 italic font-serif">
                {currentRoom.subtitle[locale]}
              </p>
            </div>

            {/* 2. LIVE PIGMENT PALETTE SWITCHER */}
            <div className="py-3 border-b border-[#DFD6C6] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-serif font-semibold text-[#3D3228]">
                <div className="flex items-center gap-1.5">
                  <Palette size={13} className="text-[#B85D3B]" weight="bold" />
                  <span>{locale === "en" ? "Room Finish & Background Tint" : "Acabado y Tono Ambiental"}</span>
                </div>
                <span className="font-mono text-[10px] text-[#8C7A6B]">
                  LRV: {currentRoom.palette.find((p) => p.hex === currentColorHex)?.lrv || 30}%
                </span>
              </div>

              {/* 5 Swatches */}
              <div className="grid grid-cols-5 gap-2">
                {currentRoom.palette.map((swatch) => {
                  const isSelected = currentColorHex.toLowerCase() === swatch.hex.toLowerCase();
                  return (
                    <button
                      key={swatch.id}
                      type="button"
                      onClick={() => setRoomColor(activeRoom, swatch.hex)}
                      className={`interactive-control group relative flex flex-col items-center p-1.5 rounded-xl border transition-all ${
                        isSelected
                          ? "border-[#B85D3B] bg-[#F4EFE6] ring-1 ring-[#B85D3B]"
                          : "border-[#DFD6C6] bg-white hover:border-[#1A1410]"
                      }`}
                      title={`${swatch.name[locale]} (${swatch.hex})`}
                    >
                      <span
                        className="w-7 h-7 rounded-full border border-black/20 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{ backgroundColor: swatch.hex }}
                      >
                        {isSelected && <Check size={12} className="text-white drop-shadow-sm" weight="bold" />}
                      </span>
                      <span className="text-[9px] font-serif text-[#1A1410] mt-1 line-clamp-1 text-center">
                        {swatch.name[locale].split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. DESERT LIGHTING ENGINE (4 KELVIN PRESETS) */}
            <div className="py-3 border-b border-[#DFD6C6] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-serif font-semibold text-[#3D3228]">
                <div className="flex items-center gap-1.5">
                  <Sun size={13} className="text-[#B85D3B]" weight="bold" />
                  <span>{locale === "en" ? "Desert Light Temperature" : "Temperatura de Luz del Desierto"}</span>
                </div>
                <span className="font-mono text-[10px] text-[#C59B27] font-bold">
                  {currentLighting.kelvin}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {(["dawn", "noon", "sunset", "night"] as LightingMode[]).map((mode) => {
                  const isSelected = lightingMode === mode;
                  const item = LIGHTING_MODES[mode];
                  const Icon =
                    mode === "dawn" ? SunHorizon : mode === "noon" ? Sun : mode === "sunset" ? SunHorizon : MoonStars;
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setLightingMode(mode)}
                      className={`interactive-control flex flex-col items-center p-1.5 rounded-xl border text-center transition-all ${
                        isSelected
                          ? "bg-[#1A1410] text-[#FCFAF7] border-[#1A1410] shadow-sm font-semibold"
                          : "bg-[#F4EFE6] text-[#3D3228] border-[#DFD6C6] hover:border-[#1A1410]"
                      }`}
                    >
                      <Icon
                        size={15}
                        weight={isSelected ? "fill" : "regular"}
                        className={isSelected ? "text-[#C59B27]" : "text-[#8C7A6B]"}
                      />
                      <span className="text-[9px] font-serif mt-0.5 line-clamp-1">{item.name[locale]}</span>
                      <span className="text-[8px] font-mono opacity-80">{item.kelvin}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. FOOTER: JUMP TO DISCIPLINE ATELIER */}
            <div className="pt-3 flex items-center justify-between gap-2">
              <Link
                href={currentRoom.associatedRoute}
                onClick={() => setIsSpatialHudOpen(false)}
                className="interactive-control inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-[#B85D3B] hover:text-[#1A1410] transition-colors"
              >
                <span>{locale === "en" ? `Explore ${currentRoom.tag[locale]}` : `Ver ${currentRoom.tag[locale]}`}</span>
                <ArrowRight size={12} weight="bold" />
              </Link>

              <button
                type="button"
                onClick={() => setIsSpatialHudOpen(false)}
                className="px-3 py-1 rounded-full bg-[#EAE2D5] hover:bg-[#DFD6C6] text-[10px] font-serif text-[#1A1410] font-medium"
              >
                {locale === "en" ? "Minimize" : "Minimizar"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
