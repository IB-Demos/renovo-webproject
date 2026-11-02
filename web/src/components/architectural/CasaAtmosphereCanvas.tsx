"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo, CASA_ROOMS, LIGHTING_MODES } from "@/context/RenovoContext";

export function CasaAtmosphereCanvas() {
  const { activeRoom, lightingMode, activeRoomColors } = useRenovo();

  const currentRoom = CASA_ROOMS[activeRoom] || CASA_ROOMS.kitchen;
  const currentLighting = LIGHTING_MODES[lightingMode] || LIGHTING_MODES.noon;
  const currentColorHex = activeRoomColors[activeRoom] || currentRoom.defaultColorHex;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-1000 ease-out"
    >
      {/* ===================================================================
          1. DYNAMIC COLOR PIGMENT RADIAL GLOW
          Gentle ambient architectural tint reflecting the active room's pigment
      =================================================================== */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[80vw] h-[70vh] rounded-full blur-[140px] opacity-25 sm:opacity-30 transition-colors duration-1000"
        style={{
          backgroundColor: currentColorHex,
        }}
      />

      <div
        className="absolute top-[40%] -right-[15%] w-[70vw] h-[60vh] rounded-full blur-[160px] opacity-20 sm:opacity-25 transition-colors duration-1000"
        style={{
          backgroundColor: currentColorHex,
        }}
      />

      {/* ===================================================================
          2. DESERT KELVIN LIGHTING OVERLAY (Dawn, Noon, Sunset, Night)
      =================================================================== */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background:
            lightingMode === "night"
              ? "radial-gradient(ellipse at 50% 20%, rgba(26, 18, 14, 0.45) 0%, rgba(18, 13, 10, 0.75) 100%)"
              : lightingMode === "sunset"
              ? "linear-gradient(135deg, rgba(184, 93, 59, 0.12) 0%, rgba(217, 119, 58, 0.08) 50%, transparent 100%)"
              : lightingMode === "dawn"
              ? "linear-gradient(120deg, rgba(245, 195, 140, 0.14) 0%, rgba(220, 190, 230, 0.06) 60%, transparent 100%)"
              : "radial-gradient(ellipse at 50% 10%, rgba(255, 255, 255, 0.12) 0%, transparent 80%)",
        }}
      />

      {/* ===================================================================
          3. FAINT ARCHITECTURAL ELEVATION SKETCHES (Room Blueprint Linework)
          Rendered at 0.035 to 0.06 opacity so text remains 100% legible
      =================================================================== */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.045] select-none pointer-events-none">
        <AnimatePresence mode="wait">
          {activeRoom === "kitchen" && (
            <motion.svg
              key="kitchen-lines"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="w-[1200px] h-[900px] stroke-[#1A1410]"
              fill="none"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              viewBox="0 0 800 600"
            >
              {/* Kitchen Upper Cabinets */}
              <rect x="50" y="60" width="700" height="140" />
              <line x1="200" y1="60" x2="200" y2="200" />
              <line x1="350" y1="60" x2="350" y2="200" />
              <line x1="500" y1="60" x2="500" y2="200" />
              <line x1="650" y1="60" x2="650" y2="200" />
              {/* Range Hood Arch */}
              <path d="M 320 200 L 350 110 L 450 110 L 480 200" strokeWidth="1.5" strokeDasharray="none" />
              {/* Countertop & Island */}
              <line x1="30" y1="320" x2="770" y2="320" strokeWidth="2" strokeDasharray="none" />
              <rect x="180" y="380" width="440" height="170" rx="6" />
              <line x1="325" y1="380" x2="325" y2="550" />
              <line x1="475" y1="380" x2="475" y2="550" />
              {/* Dovetail Joint symbol */}
              <path d="M 220 440 L 240 435 L 240 455 Z" fill="currentColor" opacity="0.3" />
            </motion.svg>
          )}

          {activeRoom === "living" && (
            <motion.svg
              key="living-lines"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="w-[1200px] h-[900px] stroke-[#1A1410]"
              fill="none"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              viewBox="0 0 800 600"
            >
              {/* Twin Arched Niches */}
              <path
                d="M 100 520 L 100 180 A 130 130 0 0 1 360 180 L 360 520"
                strokeWidth="1.5"
                strokeDasharray="none"
              />
              <path
                d="M 440 520 L 440 180 A 130 130 0 0 1 700 180 L 700 520"
                strokeWidth="1.5"
                strokeDasharray="none"
              />
              {/* Shelves */}
              <line x1="100" y1="260" x2="360" y2="260" />
              <line x1="100" y1="340" x2="360" y2="340" />
              <line x1="100" y1="420" x2="360" y2="420" />
              <line x1="440" y1="260" x2="700" y2="260" />
              <line x1="440" y1="340" x2="700" y2="340" />
              <line x1="440" y1="420" x2="700" y2="420" />
              {/* Center Fireplace Mantle */}
              <rect x="375" y="360" width="50" height="160" />
              <line x1="360" y1="340" x2="440" y2="340" strokeWidth="2" strokeDasharray="none" />
            </motion.svg>
          )}

          {activeRoom === "entryway" && (
            <motion.svg
              key="entryway-lines"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="w-[1200px] h-[900px] stroke-[#1A1410]"
              fill="none"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              viewBox="0 0 800 600"
            >
              {/* Monumental Double Door Frame */}
              <path
                d="M 180 550 L 180 160 A 220 180 0 0 1 620 160 L 620 550"
                strokeWidth="2"
                strokeDasharray="none"
              />
              <line x1="400" y1="160" x2="400" y2="550" strokeWidth="1.5" strokeDasharray="none" />
              {/* Left Door Panels */}
              <rect x="210" y="220" width="165" height="130" />
              <rect x="210" y="375" width="165" height="145" />
              {/* Right Door Panels */}
              <rect x="425" y="220" width="165" height="130" />
              <rect x="425" y="375" width="165" height="145" />
              {/* Portico Keystones */}
              <polygon points="380,80 420,80 410,130 390,130" strokeWidth="1.5" strokeDasharray="none" />
            </motion.svg>
          )}

          {activeRoom === "patio" && (
            <motion.svg
              key="patio-lines"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="w-[1200px] h-[900px] stroke-[#1A1410]"
              fill="none"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              viewBox="0 0 800 600"
            >
              {/* Pergola Rafters & Perspective Ceiling */}
              <line x1="50" y1="120" x2="750" y2="120" strokeWidth="2" strokeDasharray="none" />
              <line x1="80" y1="80" x2="160" y2="520" />
              <line x1="200" y1="80" x2="260" y2="520" />
              <line x1="320" y1="80" x2="360" y2="520" />
              <line x1="440" y1="80" x2="440" y2="520" />
              <line x1="560" y1="80" x2="520" y2="520" />
              <line x1="680" y1="80" x2="620" y2="520" />
              {/* Structural Columns */}
              <rect x="140" y="280" width="40" height="250" />
              <rect x="620" y="280" width="40" height="250" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>

      {/* ===================================================================
          4. SUBTLE PERIMETER GRAIN TEXTURE (Sonoran Mineral Paper)
      =================================================================== */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#1A1410]/[0.03]" />
    </div>
  );
}
