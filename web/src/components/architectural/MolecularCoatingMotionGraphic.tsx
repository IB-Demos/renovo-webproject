"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import { motionTokens } from "@/lib/motionTokens";
import {
  Sparkle,
  ShieldCheck,
  Flame,
  Drop,
  Stack,
  CheckCircle,
  X,
  Warning,
} from "@phosphor-icons/react";

type StressMode = "molecular" | "steam" | "surface";

export function MolecularCoatingMotionGraphic() {
  const { locale } = useRenovo();
  const [stressMode, setStressMode] = useState<StressMode>("molecular");
  const [compareSide, setCompareSide] = useState<"renovo2k" | "latex">("renovo2k");

  const stressModes = [
    {
      id: "molecular" as const,
      icon: Stack,
      titleEn: "01 · Molecular Cross-Linking",
      titleEs: "01 · Reticulación Molecular 2K",
      metricRenovo: "100% Covalent Bond (24h Cure)",
      metricLatex: "Evaporative Film (30d Soft Dry)",
      descEn:
        "Two-component isocyanate hardener chemically locks with polyurethane resin into an impervious 4-mil ceramic-like lattice.",
      descEs:
        "El catalizador isocianato se entrelaza químicamente con la resina de poliuretano formando una coraza molecular impenetrable en 24 horas.",
    },
    {
      id: "steam" as const,
      icon: Flame,
      titleEn: "02 · 212°F Steam & Grease Barrier",
      titleEs: "02 · Barrera contra Vapor y Grasa",
      metricRenovo: "KCMA Impervious (0% Swell)",
      metricLatex: "Softens & Peels Near Ovens",
      descEn:
        "Boiling culinary steam, cooking oils, coffee, and red wine bead off the cross-linked surface without penetrating wood pores.",
      descEs:
        "El vapor hirviendo de estufas, aceites calientes, café y agentes de limpieza rebotan sobre el escudo 2K sin penetrar el poro.",
    },
    {
      id: "surface" as const,
      icon: Drop,
      titleEn: "03 · 18% Velvet Spray Optical Flatness",
      titleEs: "03 · Nivelación Óptica sin Brocha",
      metricRenovo: "0.0mm Ridges · Booth Atomized",
      metricLatex: "Visible Brush & Roller Stipple",
      descEn:
        "Atomized at high pressure in our filtered Phoenix spray booth for a glass-smooth tactile feel with zero roller orange-peel.",
      descEs:
        "Atomizado fino en cabina presurizada en Phoenix logrando tersura de piano sin marcas de brocha ni piel de naranja.",
    },
  ];

  const activeSpec =
    stressModes.find((m) => m.id === stressMode) || stressModes[0];

  return (
    <div className="rounded-3xl border border-[#DFD6C6] bg-[#FCFAF7] p-5 sm:p-8 lg:p-10 shadow-xl text-[#261F1A] space-y-8">
      {/* Top Controls: Stress Test Mode Switcher + Coating System Toggle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#DFD6C6]">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Laboratory stress test">
          {stressModes.map((mode) => {
            const Icon = mode.icon;
            const isSelected = stressMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setStressMode(mode.id)}
                className={`interactive-control relative px-4 py-2.5 rounded-2xl text-xs font-serif flex items-center gap-2 border transition-colors ${
                  isSelected
                    ? "text-[#FCFAF7] border-[#B85D3B] font-semibold"
                    : "bg-[#F4EFE6] text-[#3D3228] border-[#DFD6C6] hover:border-[#1A1410]"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="chemistry-mode-pill"
                    transition={motionTokens.spring.snappy}
                    className="absolute inset-0 rounded-2xl bg-[#B85D3B] shadow-sm"
                  />
                )}
                <Icon
                  size={15}
                  weight={isSelected ? "fill" : "regular"}
                  className="relative z-10"
                />
                <span className="relative z-10">
                  {locale === "en" ? mode.titleEn : mode.titleEs}
                </span>
              </button>
            );
          })}
        </div>

        {/* Side-by-Side System Switcher */}
        <div
          className="inline-flex rounded-2xl bg-[#EAE2D5] p-1.5 border border-[#DFD6C6] self-start lg:self-auto"
          role="group"
          aria-label="Coating system comparison"
        >
          <button
            type="button"
            onClick={() => setCompareSide("renovo2k")}
            className={`interactive-control relative px-4 py-2 rounded-xl text-xs font-serif transition-colors flex items-center gap-1.5 ${
              compareSide === "renovo2k"
                ? "text-[#FCFAF7] font-semibold"
                : "text-[#3D3228] hover:text-[#1A1410]"
            }`}
          >
            {compareSide === "renovo2k" && (
              <motion.span
                layoutId="chemistry-side-pill"
                transition={motionTokens.spring.snappy}
                className="absolute inset-0 rounded-xl bg-[#1A1410] shadow-xs"
              />
            )}
            <Sparkle size={13} weight="fill" className="relative z-10 text-[#C59B27]" />
            <span className="relative z-10">
              {locale === "en" ? "Renovo 2K Polyurethane" : "Poliuretano 2K Renovo"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCompareSide("latex")}
            className={`interactive-control relative px-4 py-2 rounded-xl text-xs font-serif transition-colors flex items-center gap-1.5 ${
              compareSide === "latex"
                ? "text-[#FCFAF7] font-semibold"
                : "text-[#3D3228] hover:text-[#1A1410]"
            }`}
          >
            {compareSide === "latex" && (
              <motion.span
                layoutId="chemistry-side-pill"
                transition={motionTokens.spring.snappy}
                className="absolute inset-0 rounded-xl bg-[#A34E2F] shadow-xs"
              />
            )}
            <Warning size={13} weight="fill" className="relative z-10" />
            <span className="relative z-10">
              {locale === "en" ? "Standard House Latex" : "Pintura Látex Común"}
            </span>
          </button>
        </div>
      </div>

      {/* Interactive Motion Graphics Vector Canvas + Live Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 7 Cols: Animated SVG Cross-Section Microscope */}
        <div className="lg:col-span-7 rounded-3xl bg-[#16120E] border border-[#3A2E26] p-5 sm:p-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#E0D7CC] pb-3 border-b border-white/10">
            <span className="text-[#C59B27] font-bold uppercase tracking-wider">
              {compareSide === "renovo2k"
                ? locale === "en"
                  ? "MICRO-STRATIGRAPHY // RENOVO 2K CROSS-LINKED"
                  : "MICRO-ESTRATIGRAFÍA // RENOVO 2K CATALIZADO"
                : locale === "en"
                ? "MICRO-STRATIGRAPHY // STANDARD BRUSH LATEX"
                : "MICRO-ESTRATIGRAFÍA // LÁTEX DE BROCHA COMÚN"}
            </span>
            <span className="tabular-nums opacity-80">400x CROSS-SECTION</span>
          </div>

          <div className="relative aspect-[16/9] w-full my-3">
            <AnimatePresence mode="wait">
              <motion.svg
                key={`${stressMode}-${compareSide}`}
                viewBox="0 0 680 360"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: motionTokens.duration.normal,
                  ease: motionTokens.easing.out,
                }}
                className="w-full h-full"
                fill="none"
              >
                {/* Background Microscope Grid */}
                <defs>
                  <pattern
                    id="micro-grid"
                    width="34"
                    height="34"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 34 0 L 0 0 0 34"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1"
                    />
                  </pattern>
                  <linearGradient id="oak-substrate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B6843" />
                    <stop offset="100%" stopColor="#4A3520" />
                  </linearGradient>
                  <linearGradient id="primer-lock" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#C59B27" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#E6C565" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#C59B27" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="renovo-topcoat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FCFAF7" />
                    <stop offset="100%" stopColor="#DFD6C6" />
                  </linearGradient>
                </defs>

                <rect width="680" height="360" fill="url(#micro-grid)" />

                {/* LAYER 1: HARDWOOD SUBSTRATE (Bottom 250..340) */}
                <rect
                  x="40"
                  y="255"
                  width="600"
                  height="80"
                  rx="8"
                  fill="url(#oak-substrate)"
                  stroke="#C79F67"
                  strokeWidth="1.5"
                />
                {/* Wood Grain Fibers */}
                <path
                  d="M 60 280 Q 180 270, 340 282 T 620 278 M 60 308 Q 220 318, 400 302 T 620 312"
                  stroke="rgba(26,20,16,0.35)"
                  strokeWidth="2"
                />
                <text
                  x="60"
                  y="325"
                  fill="#FCFAF7"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {locale === "en"
                    ? "SUBSTRATE: KILN-DRIED HARD MAPLE / RIFT WHITE OAK"
                    : "SUSTRATO: MADERA SÓLIDA DE ARCE / ROBLE BLANCO"}
                </text>

                {compareSide === "renovo2k" ? (
                  <>
                    {/* LAYER 2: TANNIN-LOCK ISOLANTE PRIMER (215..255) */}
                    <motion.rect
                      x="40"
                      y="215"
                      width="600"
                      height="38"
                      rx="4"
                      fill="url(#primer-lock)"
                      initial={{ scaleX: 0.92, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: motionTokens.easing.out }}
                    />
                    {/* Molecular Root Anchors into Wood Pores */}
                    {[100, 180, 260, 340, 420, 500, 580].map((xPos, i) => (
                      <motion.line
                        key={i}
                        x1={xPos}
                        y1={235}
                        x2={xPos}
                        y2={275}
                        stroke="#C59B27"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                      />
                    ))}
                    <text
                      x="60"
                      y="239"
                      fill="#1A1410"
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {locale === "en"
                        ? "TANNIN-LOCK PRIMER // ASTM D3359 5B ADHESION"
                        : "PRIMER BLOQUEADOR DE TANINOS // ANCLAJE 5B"}
                    </text>

                    {/* LAYER 3: 2K CATALYZED POLYURETHANE MATRIX (135..212) */}
                    <motion.rect
                      x="40"
                      y="135"
                      width="600"
                      height="76"
                      rx="6"
                      fill="url(#renovo-topcoat)"
                      stroke="#C59B27"
                      strokeWidth="2"
                      initial={{ y: -12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.45, ease: motionTokens.easing.out }}
                    />

                    {/* Hexagonal Cross-Linked Polymer Lattice */}
                    <g stroke="#B85D3B" strokeWidth="1.8" opacity="0.85">
                      {[90, 175, 260, 345, 430, 515, 590].map((cx, idx) => (
                        <g key={idx}>
                          <motion.circle
                            cx={cx}
                            cy={173}
                            r="16"
                            fill="rgba(184, 93, 59, 0.14)"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: [0.95, 1.04, 0.95] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: idx * 0.15,
                            }}
                          />
                          {idx < 6 && (
                            <line x1={cx + 16} y1={173} x2={cx + 69} y2={173} />
                          )}
                        </g>
                      ))}
                    </g>

                    <text
                      x="60"
                      y="154"
                      fill="#1A1410"
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {locale === "en"
                        ? "2K CROSS-LINKED POLYURETHANE SHIELD (4.0 MIL)"
                        : "ESCUDO POLIURETANO CATALIZADO 2K (4.0 MIL)"}
                    </text>

                    {/* TOP DEFLECTION VECTORS (Heat, Steam, Laser Flatness) */}
                    {[130, 270, 410, 550].map((xRay, rIdx) => (
                      <g key={rIdx}>
                        <motion.path
                          d={`M ${xRay - 30} 35 L ${xRay} 128 L ${xRay + 35} 40`}
                          stroke={stressMode === "steam" ? "#68B0AB" : "#C59B27"}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            duration: 0.7,
                            delay: rIdx * 0.1,
                            ease: motionTokens.easing.out,
                          }}
                        />
                        <circle cx={xRay} cy={128} r="4" fill="#B85D3B" />
                      </g>
                    ))}

                    <rect
                      x="45"
                      y="20"
                      width="350"
                      height="28"
                      rx="6"
                      fill="rgba(61, 90, 69, 0.9)"
                    />
                    <text
                      x="58"
                      y="38"
                      fill="#FCFAF7"
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {stressMode === "steam"
                        ? locale === "en"
                          ? "✓ STEAM, OILS & ACIDS DEFLECTED 100%"
                          : "✓ VAPOR, GRASA Y ÁCIDOS RECHAZADOS AL 100%"
                        : stressMode === "surface"
                        ? locale === "en"
                          ? "✓ 18% SATIN VELVET // ZERO BRUSH RIDGES"
                          : "✓ TERSURA SATINADA 18% // CERO MARCAS DE BROCHA"
                        : locale === "en"
                        ? "✓ COVALENT ISOCYANATE-POLYOL LATTICE LOCKED"
                        : "✓ RETICULACIÓN MOLECULAR COVALENTE SELLADA"}
                    </text>
                  </>
                ) : (
                  <>
                    {/* STANDARD LATEX FAILURE VISUALIZATION */}
                    {/* Tannin bleed blotches rising from wood */}
                    {[140, 310, 490].map((bx, bIdx) => (
                      <motion.ellipse
                        key={bIdx}
                        cx={bx}
                        cy={225}
                        rx="48"
                        ry="24"
                        fill="rgba(163, 78, 47, 0.55)"
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.4, 0.85, 0.4] }}
                        transition={{ duration: 2.4, repeat: Infinity }}
                      />
                    ))}

                    {/* Wavy, Bubbling, Peeling Latex Layer with Brush Ridges */}
                    <motion.path
                      d="M 40 205 Q 95 160, 150 198 T 270 165 T 390 202 T 510 158 T 640 195 L 640 250 L 40 250 Z"
                      fill="#D8CFC2"
                      stroke="#A34E2F"
                      strokeWidth="2.5"
                      initial={{ y: 6, opacity: 0 }}
                      animate={{ y: 0, opacity: 0.92 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Penetration Arrows piercing into soft latex */}
                    {[150, 320, 480].map((px, pIdx) => (
                      <motion.line
                        key={pIdx}
                        x1={px}
                        y1={35}
                        x2={px}
                        y2={245}
                        stroke="#A34E2F"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: pIdx * 0.1 }}
                      />
                    ))}

                    <rect
                      x="45"
                      y="20"
                      width="420"
                      height="28"
                      rx="6"
                      fill="rgba(163, 78, 47, 0.95)"
                    />
                    <text
                      x="58"
                      y="38"
                      fill="#FCFAF7"
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {locale === "en"
                        ? "✕ FAILURE: BRUSH RIDGES, TANNIN BLEED & DELAMINATION"
                        : "✕ FALLA: MARCAS DE BROCHA, SANGRADO DE TANINOS Y DESPRENDIMIENTO"}
                    </text>
                  </>
                )}
              </motion.svg>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-[11px] font-mono text-[#E0D7CC]">
            <span>
              {locale === "en" ? "RENOVO SPEC:" : "NORMA RENOVO:"}{" "}
              <strong className="text-[#C59B27]">{activeSpec.metricRenovo}</strong>
            </span>
            <span>
              {locale === "en" ? "HOUSE LATEX:" : "LÁTEX COMÚN:"}{" "}
              <strong className="text-[#E07A5F]">{activeSpec.metricLatex}</strong>
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Active Stress Explanation & Quick Telemetry */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 rounded-3xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B85D3B] font-bold">
              <ShieldCheck size={16} weight="fill" />
              <span>
                {locale === "en" ? "LABORATORY VERIFIED" : "VERIFICACIÓN DE TALLER"}
              </span>
            </div>

            <h3 className="text-2xl font-serif font-semibold text-[#1A1410]">
              {locale === "en" ? activeSpec.titleEn : activeSpec.titleEs}
            </h3>

            <p className="text-sm text-[#3D3228] leading-relaxed">
              {locale === "en" ? activeSpec.descEn : activeSpec.descEs}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#B85D3B]/40 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#3D5A45] uppercase">
                  <CheckCircle size={14} weight="fill" />
                  <span>{locale === "en" ? "Renovo 2K System" : "Sistema Renovo 2K"}</span>
                </div>
                <div className="text-xs font-serif font-semibold text-[#1A1410]">
                  {activeSpec.metricRenovo}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#A34E2F] uppercase">
                  <X size={14} weight="bold" />
                  <span>{locale === "en" ? "Standard Painter" : "Pintor Tradicional"}</span>
                </div>
                <div className="text-xs font-serif font-semibold text-[#54463A]">
                  {activeSpec.metricLatex}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
