"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import {
  Calculator,
  CheckCircle,
  WarningCircle,
  ArrowRight,
  Plus,
  Minus,
  Sparkle,
  Clock,
  ShieldCheck,
  Package,
} from "@phosphor-icons/react";

type Discipline = "cabinetry" | "painting";
type GradeTier = "essential" | "architectural" | "bespoke";

export function ParametricScopeEstimator() {
  const { locale, t, samples, setIsDrawerOpen } = useRenovo();

  const [discipline, setDiscipline] = useState<Discipline>("cabinetry");
  const [doorsCount, setDoorsCount] = useState<number>(24);
  const [drawersCount, setDrawersCount] = useState<number>(10);
  const [paintSqFt, setPaintSqFt] = useState<number>(1800);
  const [grade, setGrade] = useState<GradeTier>("architectural");

  // Form state for locking specification
  const [projectName, setProjectName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; zip?: boolean }>({});
  const [submittedSpecCode, setSubmittedSpecCode] = useState<string | null>(null);

  // Parametric calculation engine
  const computeEstimate = () => {
    if (discipline === "cabinetry") {
      const unitRate =
        grade === "essential" ? 135 : grade === "architectural" ? 265 : 540;
      const drawerRate =
        grade === "essential" ? 95 : grade === "architectural" ? 185 : 390;
      const base = doorsCount * unitRate + drawersCount * drawerRate;
      const low = Math.round(base * 0.92);
      const high = Math.round(base * 1.12);
      const days =
        grade === "essential"
          ? Math.max(5, Math.round((doorsCount + drawersCount) * 0.22))
          : grade === "architectural"
          ? Math.max(8, Math.round((doorsCount + drawersCount) * 0.32))
          : Math.max(18, Math.round((doorsCount + drawersCount) * 0.65));
      return { low, high, days };
    } else {
      const sqFtRate =
        grade === "essential" ? 3.4 : grade === "architectural" ? 5.2 : 7.8;
      const base = paintSqFt * sqFtRate;
      const low = Math.round(base * 0.9);
      const high = Math.round(base * 1.12);
      const days = Math.max(4, Math.round(paintSqFt / 320));
      return { low, high, days };
    }
  };

  const { low, high, days } = computeEstimate();

  const isNameValid = projectName.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail.trim());
  const isZipValid = postalCode.trim().length >= 4;

  const handleLockSpec = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, zip: true });
    if (!isNameValid || !isEmailValid || !isZipValid) {
      return;
    }
    const code = `RNV-${discipline === "cabinetry" ? "CAB" : "PNT"}-${doorsCount}${drawersCount}-${grade.slice(0, 3).toUpperCase()}`;
    setSubmittedSpecCode(code);
  };

  const scrollToForm = () => {
    const el = document.getElementById("spec-lock-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* MAIN ESTIMATOR GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 bg-[#141210] shadow-2xl text-white">
        {/* Left 7 Columns: 3-Step Interactive Mobile-First Controls */}
        <div className="lg:col-span-7 p-5 sm:p-8 space-y-8 bg-[#100D0B] border-b lg:border-b-0 lg:border-r border-white/8">
          {/* STEP 1: SERVICE DISCIPLINE */}
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono mb-3">
              {t.estimatorSection.step1Title}
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              role="radiogroup"
              aria-label={t.estimatorSection.step1Title}
            >
              <button
                type="button"
                role="radio"
                aria-checked={discipline === "cabinetry"}
                onClick={() => {
                  setDiscipline("cabinetry");
                  setSubmittedSpecCode(null);
                }}
                className={`interactive-control p-4 rounded-2xl border text-left transition-all ${
                  discipline === "cabinetry"
                    ? "border-[var(--gold)] bg-[#1F1B16] text-white shadow-md"
                    : "border-white/10 bg-[#161310] text-[#D8CFBF] hover:border-[var(--gold)]/60"
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--gold)] font-semibold">
                  DIVISION 06 · CABINETRY & FINISHES
                </div>
                <div className="mt-1 text-sm font-semibold">
                  {locale === "en" ? "Kitchens, Cabinets & Built-Ins" : "Cocinas, Gabinetes y Built-Ins"}
                </div>
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={discipline === "painting"}
                onClick={() => {
                  setDiscipline("painting");
                  setSubmittedSpecCode(null);
                }}
                className={`interactive-control p-4 rounded-2xl border text-left transition-all ${
                  discipline === "painting"
                    ? "border-[var(--gold)] bg-[#1F1B16] text-white shadow-md"
                    : "border-white/10 bg-[#161310] text-[#D8CFBF] hover:border-[var(--gold)]/60"
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--gold)] font-semibold">
                  DIVISION 09 · ARCHITECTURAL COATINGS
                </div>
                <div className="mt-1 text-sm font-semibold">
                  {locale === "en" ? "Residential Interior & Exterior Painting" : "Pintura Residencial Interior y Exterior"}
                </div>
              </button>
            </div>
          </div>

          {/* STEP 2: ARCHITECTURAL DIMENSIONS & STEPPERS */}
          <div className="border-t border-white/8 pt-6">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono mb-4">
              {t.estimatorSection.step2Title}
            </div>

            {discipline === "cabinetry" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Cabinet Doors Stepper */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A69B8F] font-semibold">
                      {t.estimatorSection.doorsLabel}
                    </span>
                    <span className="text-xl font-serif font-bold text-white tabular-nums">
                      {doorsCount}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={4}
                    max={64}
                    step={1}
                    value={doorsCount}
                    onChange={(e) => setDoorsCount(Number(e.target.value))}
                    aria-label={t.estimatorSection.doorsLabel}
                    className="w-full accent-[var(--gold)] cursor-pointer h-2 bg-white/10 rounded-lg"
                  />

                  {/* Mobile Stepper Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setDoorsCount(Math.max(4, doorsCount - 1))}
                      aria-label="Decrease doors"
                      className="interactive-control w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 active:scale-95"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-[11px] text-[#8A7F73]">Tap +/- or slide</span>
                    <button
                      type="button"
                      onClick={() => setDoorsCount(Math.min(64, doorsCount + 1))}
                      aria-label="Increase doors"
                      className="interactive-control w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 active:scale-95"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Drawer Fronts Stepper */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A69B8F] font-semibold">
                      {t.estimatorSection.drawersLabel}
                    </span>
                    <span className="text-xl font-serif font-bold text-white tabular-nums">
                      {drawersCount}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={36}
                    step={1}
                    value={drawersCount}
                    onChange={(e) => setDrawersCount(Number(e.target.value))}
                    aria-label={t.estimatorSection.drawersLabel}
                    className="w-full accent-[var(--gold)] cursor-pointer h-2 bg-white/10 rounded-lg"
                  />

                  {/* Mobile Stepper Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setDrawersCount(Math.max(0, drawersCount - 1))}
                      aria-label="Decrease drawers"
                      className="interactive-control w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 active:scale-95"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-[11px] text-[#8A7F73]">Tap +/- or slide</span>
                    <button
                      type="button"
                      onClick={() => setDrawersCount(Math.min(36, drawersCount + 1))}
                      aria-label="Increase drawers"
                      className="interactive-control w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 active:scale-95"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Painting SqFt Stepper */
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A69B8F] font-semibold">
                    {t.estimatorSection.sqftLabel}
                  </span>
                  <span className="text-xl font-serif font-bold text-white tabular-nums">
                    {paintSqFt.toLocaleString()} sq ft
                  </span>
                </div>

                <input
                  type="range"
                  min={400}
                  max={6500}
                  step={100}
                  value={paintSqFt}
                  onChange={(e) => setPaintSqFt(Number(e.target.value))}
                  aria-label={t.estimatorSection.sqftLabel}
                  className="w-full accent-[var(--gold)] cursor-pointer h-2 bg-white/10 rounded-lg"
                />

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setPaintSqFt(Math.max(400, paintSqFt - 200))}
                    aria-label="Decrease square footage"
                    className="interactive-control w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 active:scale-95"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-[11px] text-[#8A7F73]">Tap +/- or slide</span>
                  <button
                    type="button"
                    onClick={() => setPaintSqFt(Math.min(6500, paintSqFt + 200))}
                    aria-label="Increase square footage"
                    className="interactive-control w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 active:scale-95"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* STEP 3: SPECIFICATION TIER SELECTION */}
          <div className="border-t border-white/8 pt-6">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono mb-4">
              {t.estimatorSection.step3Title}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(
                [
                  {
                    id: "essential",
                    title: t.estimatorSection.tierEssential,
                    descEn: "2K Catalyzed Refacing & On-Site Containment",
                    descEs: "Refacing Catalizado 2K y Sellado en Sitio",
                  },
                  {
                    id: "architectural",
                    title: t.estimatorSection.tierArchitectural,
                    descEn: "Solid Maple Doors + Blum Soft-Close Runners",
                    descEs: "Puertas en Maple + Rieles Ocultos Blum",
                  },
                  {
                    id: "bespoke",
                    title: t.estimatorSection.tierBespoke,
                    descEn: "Rift-Cut White Oak + Dovetails + Full Shop Build",
                    descEs: "Roble Blanco + Colas de Milano + Taller Completo",
                  },
                ] as const
              ).map((tier) => {
                const isSelected = grade === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setGrade(tier.id)}
                    className={`interactive-control p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "border-[var(--gold)] bg-[#1F1B16] text-white shadow-md"
                        : "border-white/10 bg-[#161310] text-[#D8CFBF] hover:border-[var(--gold)]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono uppercase font-bold ${isSelected ? "text-[var(--gold)]" : "text-[#8A7F73]"}`}>
                        TIER {tier.id === "essential" ? "01" : tier.id === "architectural" ? "02" : "03"}
                      </span>
                      {isSelected && <CheckCircle size={16} className="text-[var(--gold)]" weight="fill" />}
                    </div>
                    <div className="text-sm font-semibold">{tier.title}</div>
                    <div className={`text-xs mt-1 leading-snug ${isSelected ? "text-[#D8CFBF]" : "text-[#8A7F73]"}`}>
                      {locale === "en" ? tier.descEn : tier.descEs}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Live Investment Telemetry & Consultation Lock */}
        <div id="spec-lock-form" className="lg:col-span-5 bg-[#161310] text-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#2E2822] pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--gold)] font-bold">
                {t.estimatorSection.estimatedRangeLabel}
              </span>
              <Calculator size={20} className="text-[var(--gold)]" />
            </div>

            {/* Investment Range Readout */}
            <div className="mt-6 space-y-2">
              <div className="text-3xl sm:text-4xl font-normal font-serif text-[#FAF8F5] tracking-tight tabular-nums">
                ${low.toLocaleString("en-US")} – ${high.toLocaleString("en-US")}
                <span className="ml-2 text-xs font-mono font-normal text-[#BFB4A6]">USD</span>
              </div>
              <p className="text-xs text-[#BFB4A6] leading-relaxed">
                {locale === "en"
                  ? "Reflects full industrial 2K catalyzed materials, Festool HEPA dust extraction, shop spray booths, and turn-key installation."
                  : "Incluye materiales catalizados 2K, extracción HEPA sin polvo, cabinas de taller e instalación garantizada."}
              </p>
            </div>

            {/* Turnaround & Warranty Badge */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[#2E2822] py-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A7F73]">
                  {t.estimatorSection.timelineLabel}
                </div>
                <div className="mt-1 font-serif text-lg font-normal text-[#FAF8F5] tabular-nums">
                  {days} – {days + 3} {t.estimatorSection.daysUnit}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A7F73]">
                  {locale === "en" ? "STANDARDS" : "ESTÁNDAR"}
                </div>
                <div className="mt-1 font-mono text-xs font-semibold text-[#2E6B4E] flex items-center gap-1">
                  <ShieldCheck size={16} weight="fill" />
                  <span>KCMA / 2K CURED</span>
                </div>
              </div>
            </div>

            {/* Lock / Consultation Form */}
            {submittedSpecCode ? (
              <div className="mt-6 p-6 rounded-2xl bg-[#1C1814] border border-[#2E6B4E]/60 text-center space-y-3">
                <CheckCircle size={32} className="text-[#2E6B4E] mx-auto" weight="fill" />
                <div className="text-sm font-semibold text-white">
                  {locale === "en" ? "Estimate Locked Successfully!" : "¡Presupuesto Registrado!"}
                </div>
                <div className="font-mono text-xs text-[var(--gold)] font-bold">
                  CODE: {submittedSpecCode}
                </div>
                <p className="text-xs text-[#BFB4A6]">
                  {locale === "en"
                    ? "Raul Burgos will review your dimensions and reach out within 1 business day."
                    : "Raul Burgos revisará tus medidas y te contactará en menos de 1 día hábil."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleLockSpec} noValidate className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#D4CBBF] mb-1.5 font-semibold">
                    {locale === "en" ? "Your Name or Project Reference *" : "Nombre o Referencia de Obra *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={projectName}
                    onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder={locale === "en" ? "e.g. Phoenix Residence" : "ej. Residencia Phoenix"}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#3E352B] bg-[#1E1A16] text-sm text-white placeholder-[#73685C] focus:outline-none focus:border-[var(--gold)]"
                  />
                  {touched.name && !isNameValid && (
                    <p className="text-[11px] text-[#E06D53] mt-1">Please provide a valid reference name.</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D4CBBF] mb-1.5 font-semibold">
                      {locale === "en" ? "Email Address *" : "Correo Electrónico *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="client@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#3E352B] bg-[#1E1A16] text-sm text-white placeholder-[#73685C] focus:outline-none focus:border-[var(--gold)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D4CBBF] mb-1.5 font-semibold">
                      {locale === "en" ? "Phone or ZIP Code *" : "Teléfono o Código Postal *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={postalCode}
                      onBlur={() => setTouched((prev) => ({ ...prev, zip: true }))}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="85029 or (602)..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#3E352B] bg-[#1E1A16] text-sm text-white placeholder-[#73685C] focus:outline-none focus:border-[var(--gold)]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="interactive-control w-full min-h-[48px] px-6 py-3 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#141210] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Sparkle size={16} weight="fill" />
                  <span>{t.estimatorSection.exportSpecCta}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* STICKY FLOATING ESTIMATE SUMMARY BAR FOR MOBILE */}
      <div className="lg:hidden sticky bottom-0 inset-x-0 bg-[#161310] border-t border-[#3E352B] p-3.5 z-30 shadow-2xl flex items-center justify-between gap-3 mt-4">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)]">
            {locale === "en" ? "ESTIMATED RANGE" : "INVERSIÓN ESTIMADA"}
          </div>
          <div className="text-lg font-serif font-bold text-white tabular-nums">
            ${low.toLocaleString()} – ${high.toLocaleString()}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToForm}
          className="interactive-control min-h-[42px] px-5 py-2 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#141210] text-xs font-semibold inline-flex items-center gap-1.5 shrink-0 shadow-sm"
        >
          <span>{locale === "en" ? "Book Measure" : "Agendar Cita"}</span>
          <ArrowRight size={14} weight="bold" />
        </button>
      </div>
    </div>
  );
}
