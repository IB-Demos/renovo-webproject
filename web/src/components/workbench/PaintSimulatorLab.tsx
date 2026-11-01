"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import { ARCHITECTURAL_PIGMENTS } from "@/lib/catalog-data/specs";

export function PaintSimulatorLab() {
  const { locale, t, addSample, isSampleInTray } = useRenovo();

  const [mode, setMode] = useState<"exterior" | "interior">("exterior");
  const [bodyPigment, setBodyPigment] = useState(ARCHITECTURAL_PIGMENTS[0]);
  const [trimPigment, setTrimPigment] = useState(ARCHITECTURAL_PIGMENTS[2]);
  const [doorPigment, setDoorPigment] = useState(ARCHITECTURAL_PIGMENTS[5]);
  const [solarState, setSolarState] = useState<"noon" | "golden" | "dusk">("noon");

  const solarFilter =
    solarState === "golden"
      ? "sepia(0.18) saturate(1.1) brightness(0.95)"
      : solarState === "dusk"
      ? "brightness(0.78) contrast(1.08)"
      : "none";

  const paintComboId = `paint-${mode}-${bodyPigment.id}-${trimPigment.id}-${doorPigment.id}`;
  const isPinned = isSampleInTray(paintComboId);

  const handlePinPalette = () => {
    addSample({
      id: paintComboId,
      code: `${mode.toUpperCase()} // ${bodyPigment.code}+${trimPigment.code}+${doorPigment.code}`,
      category: "pigment",
      title: {
        en: `${mode === "exterior" ? "Exterior" : "Interior"} Triad: ${bodyPigment.name.en} / ${trimPigment.name.en}`,
        es: `Tríada ${mode === "exterior" ? "Exterior" : "Interior"}: ${bodyPigment.name.es} / ${trimPigment.name.es}`,
      },
      subtitle: `Accent: ${doorPigment.name[locale]} (${doorPigment.brandRef})`,
      hex: bodyPigment.hex,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column: Architectural Envelope Visualizer (7 Cols) */}
      <div className="lg:col-span-7 rounded-2xl bg-[var(--obsidian)] text-white p-4 sm:p-6 border border-white/10 shadow-xl">
        {/* Top Mode & Solar Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div
            role="group"
            aria-label={t.workbench.paint.surfaceModeLabel}
            className="inline-flex rounded-lg bg-white/5 p-1 border border-white/10"
          >
            <button
              type="button"
              onClick={() => setMode("exterior")}
              aria-pressed={mode === "exterior"}
              className={`interactive-control px-3 py-1.5 rounded-md text-xs font-mono min-h-[34px] ${
                mode === "exterior"
                  ? "bg-white text-[var(--obsidian)] font-semibold"
                  : "text-[#A6A8B1] hover:text-white"
              }`}
            >
              {t.workbench.paint.exteriorMode}
            </button>
            <button
              type="button"
              onClick={() => setMode("interior")}
              aria-pressed={mode === "interior"}
              className={`interactive-control px-3 py-1.5 rounded-md text-xs font-mono min-h-[34px] ${
                mode === "interior"
                  ? "bg-white text-[var(--obsidian)] font-semibold"
                  : "text-[#A6A8B1] hover:text-white"
              }`}
            >
              {t.workbench.paint.interiorMode}
            </button>
          </div>

          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 text-xs font-mono">
            {(
              [
                { id: "noon", label: locale === "en" ? "5500K Noon" : "5500K Día" },
                { id: "golden", label: locale === "en" ? "3500K Sunset" : "3500K Tarde" },
                { id: "dusk", label: locale === "en" ? "2700K Dusk" : "2700K Noche" },
              ] as const
            ).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSolarState(s.id)}
                aria-pressed={solarState === s.id}
                className={`interactive-control px-2.5 py-1 rounded text-[11px] min-h-[28px] ${
                  solarState === s.id
                    ? "bg-[var(--accent)] text-white font-semibold"
                    : "text-[#A6A8B1] hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Architectural Facade / Interior Room Stage */}
        <div
          className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-[#181A1F] aspect-[16/10] flex items-center justify-center p-4"
          style={{ filter: solarFilter }}
        >
          {mode === "exterior" ? (
            <svg
              viewBox="0 0 800 480"
              className="w-full h-full max-h-[420px]"
              role="img"
              aria-label="Exterior Residential Elevation Schematic"
            >
              {/* Ground Datum */}
              <line x1="40" y1="420" x2="760" y2="420" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />

              {/* Main Architectural Gable & Siding Volume */}
              <polygon
                points="140,180 400,65 660,180"
                fill={bodyPigment.hex}
                stroke={trimPigment.hex}
                strokeWidth="10"
              />
              <rect
                x="150"
                y="180"
                width="500"
                height="240"
                fill={bodyPigment.hex}
                stroke={trimPigment.hex}
                strokeWidth="8"
              />

              {/* Horizontal Lap Siding CAD Texture Lines */}
              <g stroke="rgba(0,0,0,0.12)" strokeWidth="1">
                {[210, 240, 270, 300, 330, 360, 390].map((y) => (
                  <line key={y} x1="156" y1={y} x2="644" y2={y} />
                ))}
              </g>

              {/* Architectural Windows with Trim & Mullions */}
              {[195, 505].map((wx) => (
                <g key={wx} transform={`translate(${wx}, 215)`}>
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="130"
                    fill="#1E242B"
                    stroke={trimPigment.hex}
                    strokeWidth="8"
                  />
                  <line x1="50" y1="0" x2="50" y2="130" stroke={trimPigment.hex} strokeWidth="4" />
                  <line x1="0" y1="65" x2="100" y2="65" stroke={trimPigment.hex} strokeWidth="4" />
                </g>
              ))}

              {/* Central Portico & Focal Entry Door */}
              <g transform="translate(345, 235)">
                {/* Portico Entablature & Columns */}
                <rect x="-20" y="-18" width="150" height="14" fill={trimPigment.hex} />
                <rect x="-14" y="-4" width="12" height="189" fill={trimPigment.hex} />
                <rect x="112" y="-4" width="12" height="189" fill={trimPigment.hex} />
                {/* Entry Door */}
                <rect
                  x="15"
                  y="10"
                  width="80"
                  height="175"
                  fill={doorPigment.hex}
                  stroke={trimPigment.hex}
                  strokeWidth="6"
                />
                {/* Door Panel Lines & Handle */}
                <rect
                  x="27"
                  y="24"
                  width="56"
                  height="64"
                  fill="none"
                  stroke="rgba(0,0,0,0.28)"
                  strokeWidth="2"
                />
                <rect
                  x="27"
                  y="102"
                  width="56"
                  height="64"
                  fill="none"
                  stroke="rgba(0,0,0,0.28)"
                  strokeWidth="2"
                />
                <circle cx="82" cy="100" r="3.5" fill="#C5A059" />
              </g>

              <text x="60" y="452" fill="#A6A8B1" fontSize="10" fontFamily="monospace">
                EXTERIOR ENVELOPE // SIDING: {bodyPigment.code} · TRIM: {trimPigment.code} · ENTRY: {doorPigment.code}
              </text>
            </svg>
          ) : (
            <svg
              viewBox="0 0 800 480"
              className="w-full h-full max-h-[420px]"
              role="img"
              aria-label="Interior Architectural Wall & Millwork Schematic"
            >
              {/* Primary Interior Wall Plane */}
              <rect x="70" y="40" width="660" height="330" fill={bodyPigment.hex} />

              {/* Crown Molding & Wainscoting Baseboard Trim */}
              <rect x="70" y="40" width="660" height="18" fill={trimPigment.hex} />
              <rect x="70" y="342" width="660" height="28" fill={trimPigment.hex} />

              {/* Architectural Wainscoting Panels */}
              {[105, 285, 535].map((px, idx) => (
                <rect
                  key={idx}
                  x={px}
                  y="225"
                  width="140"
                  height="95"
                  fill="none"
                  stroke={trimPigment.hex}
                  strokeWidth="5"
                />
              ))}

              {/* Interior Architectural Archway / Accent Door */}
              <g transform="translate(360, 95)">
                <rect
                  x="0"
                  y="0"
                  width="135"
                  height="275"
                  fill={doorPigment.hex}
                  stroke={trimPigment.hex}
                  strokeWidth="9"
                />
                <rect
                  x="20"
                  y="22"
                  width="95"
                  height="110"
                  fill="none"
                  stroke="rgba(0,0,0,0.25)"
                  strokeWidth="2"
                />
                <rect
                  x="20"
                  y="148"
                  width="95"
                  height="98"
                  fill="none"
                  stroke="rgba(0,0,0,0.25)"
                  strokeWidth="2"
                />
                <rect x="112" y="135" width="4" height="22" fill="#C5A059" />
              </g>

              {/* White Oak Flooring Plane */}
              <rect x="70" y="370" width="660" height="55" fill="#C9B293" />

              <text x="72" y="452" fill="#A6A8B1" fontSize="10" fontFamily="monospace">
                INTERIOR MILLWORK // WALL: {bodyPigment.code} · CROWN/TRIM: {trimPigment.code} · DOOR: {doorPigment.code}
              </text>
            </svg>
          )}
        </div>

        {/* Bottom Telemetry & Pin Action */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <div>
              <span className="text-[#A6A8B1] block text-[10px]">
                {t.workbench.paint.lrvMetricLabel}
              </span>
              <span className="tabular-nums text-white font-semibold">
                Body {bodyPigment.lrv}% / Trim {trimPigment.lrv}%
              </span>
            </div>
            <div>
              <span className="text-[#A6A8B1] block text-[10px]">
                {t.workbench.paint.vocMetricLabel}
              </span>
              <span className="tabular-nums text-white font-semibold">&lt; 50 g/L Zero-VOC</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePinPalette}
            className={`interactive-control min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-[0.06em] font-semibold ${
              isPinned
                ? "bg-white text-[var(--obsidian)]"
                : "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white"
            }`}
          >
            {isPinned ? t.hero.savedInTray : t.hero.saveToTray}
          </button>
        </div>
      </div>

      {/* Right Column: 3-Zone Architectural Pigment Selectors (5 Cols) */}
      <div className="lg:col-span-5 space-y-5 bg-[var(--surface)] p-5 sm:p-6 rounded-2xl border border-[var(--border)]">
        {/* Zone 1: Primary Wall / Siding */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)] font-semibold">
              01. {t.workbench.paint.primaryWallLabel}
            </span>
            <span className="font-mono text-xs text-[var(--muted)]">{bodyPigment.brandRef}</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {ARCHITECTURAL_PIGMENTS.map((p) => {
              const active = bodyPigment.id === p.id;
              return (
                <button
                  key={`body-${p.id}`}
                  type="button"
                  onClick={() => setBodyPigment(p)}
                  aria-label={`Primary Wall ${p.name[locale]}`}
                  aria-pressed={active}
                  className={`interactive-control h-12 rounded-lg border ${
                    active ? "ring-2 ring-[var(--accent)] ring-offset-2 border-black" : "border-black/20"
                  }`}
                  style={{ backgroundColor: p.hex }}
                />
              );
            })}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">
            <strong className="text-[var(--fg)]">{bodyPigment.name[locale]}:</strong>{" "}
            {bodyPigment.undertone[locale]}
          </p>
        </div>

        {/* Zone 2: Trim, Moulding & Fascia */}
        <div className="pt-4 border-t border-[var(--border)]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)] font-semibold">
              02. {t.workbench.paint.trimAndFasciaLabel}
            </span>
            <span className="font-mono text-xs text-[var(--muted)]">{trimPigment.brandRef}</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {ARCHITECTURAL_PIGMENTS.map((p) => {
              const active = trimPigment.id === p.id;
              return (
                <button
                  key={`trim-${p.id}`}
                  type="button"
                  onClick={() => setTrimPigment(p)}
                  aria-label={`Trim ${p.name[locale]}`}
                  aria-pressed={active}
                  className={`interactive-control h-12 rounded-lg border ${
                    active ? "ring-2 ring-[var(--accent)] ring-offset-2 border-black" : "border-black/20"
                  }`}
                  style={{ backgroundColor: p.hex }}
                />
              );
            })}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">
            <strong className="text-[var(--fg)]">{trimPigment.name[locale]}:</strong>{" "}
            {trimPigment.undertone[locale]}
          </p>
        </div>

        {/* Zone 3: Focal Entry Door / Architectural Accent */}
        <div className="pt-4 border-t border-[var(--border)]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)] font-semibold">
              03. {t.workbench.paint.accentDoorLabel}
            </span>
            <span className="font-mono text-xs text-[var(--muted)]">{doorPigment.brandRef}</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {ARCHITECTURAL_PIGMENTS.map((p) => {
              const active = doorPigment.id === p.id;
              return (
                <button
                  key={`door-${p.id}`}
                  type="button"
                  onClick={() => setDoorPigment(p)}
                  aria-label={`Accent Door ${p.name[locale]}`}
                  aria-pressed={active}
                  className={`interactive-control h-12 rounded-lg border ${
                    active ? "ring-2 ring-[var(--accent)] ring-offset-2 border-black" : "border-black/20"
                  }`}
                  style={{ backgroundColor: p.hex }}
                />
              );
            })}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">
            <strong className="text-[var(--fg)]">{doorPigment.name[locale]}:</strong>{" "}
            {doorPigment.undertone[locale]}
          </p>
        </div>
      </div>
    </div>
  );
}
