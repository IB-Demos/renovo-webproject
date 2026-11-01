"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { MaterialCatalogGrid } from "@/components/workbench/MaterialCatalogGrid";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  BookmarkSimple,
  ArrowRight,
  Package,
  Phone,
  CheckCircle,
} from "@phosphor-icons/react";

export default function CatalogPage() {
  const { locale, t, samples, setIsDrawerOpen } = useRenovo();

  return (
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
                <Sparkle size={14} weight="fill" />
                <span>{locale === "en" ? "MATERIAL & FINISH SPECIFICATION" : "CATÁLOGO DE MATERIALES Y ACABADOS"}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#FAF8F5] tracking-tight leading-[1.08]">
                {t.catalogSection.headline}
              </h1>

              <p className="text-base sm:text-xl text-[#B8AEA2] font-light leading-relaxed max-w-2xl">
                {t.catalogSection.subhead}
              </p>
            </div>

            {/* Design Tray Trigger Badge */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 shrink-0 max-w-sm shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--gold)] font-bold">
                  {locale === "en" ? "YOUR DESIGN TRAY" : "TU BANDEJA DE MUESTRAS"}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--gold)] text-[#12100E] text-xs font-bold font-mono">
                  {samples.length}
                </span>
              </div>
              <p className="text-xs text-[#B8AEA2] leading-relaxed">
                {locale === "en"
                  ? "Save your preferred wood species, paint shades, and hardware to request a physical sample box."
                  : "Guarda tus maderas, colores y jaladeras favoritas para solicitar un kit de muestras físicas."}
              </p>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="interactive-control w-full min-h-[42px] px-4 py-2 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <BookmarkSimple size={15} weight="bold" />
                <span>{locale === "en" ? "Review Sample Tray" : "Ver Bandeja de Muestras"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE MATERIAL CATALOG GRID */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "CURATED FINISHES" : "PALETAS Y MUESTRAS"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en" ? "Architectural Palette" : "Selección de Ebanistería y Color"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Every swatch represents a physical material in our Phoenix workshop. Click 'Pin to Tray' to compile your palette."
                : "Cada muestra corresponde a materiales reales en nuestro taller de Phoenix. Haz clic en 'Guardar' para armar tu paleta."}
            </p>
          </div>

          <MaterialCatalogGrid />
        </div>
      </section>

      {/* 3. PHYSICAL SAMPLE BOX ASSURANCE */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--gold)] font-bold uppercase tracking-wider">
                <Package size={16} />
                <span>{locale === "en" ? "PHYSICAL TACTILE BOX" : "KIT DE MUESTRAS FÍSICAS"}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
                {locale === "en"
                  ? "Touch and Feel True Factory 2K Finishes in Your Home"
                  : "Toca y Siente Nuestras Lacas 2K en tu Hogar"}
              </h2>
              <p className="text-base text-[#B8AEA2] font-light leading-relaxed">
                {locale === "en"
                  ? "Digital screens never tell the full story. We prepare custom sample blocks on real hard maple and rift-cut white oak with our catalyzed lacquers so you can test them against your home's natural light and countertops."
                  : "Las pantallas no muestran la textura real. Preparamos bloques de madera auténtica en maple y roble con lacas catalizadas para que los evalúes bajo la luz natural de tu residencia."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#D4CBBF]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} className="text-[var(--gold)]" weight="fill" />
                  <span>{locale === "en" ? "Real Hardwood Blocks" : "Bloques de Madera Real"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} className="text-[var(--gold)]" weight="fill" />
                  <span>{locale === "en" ? "Velvet 2K Sheens" : "Lacas 2K Aterciopeladas"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} className="text-[var(--gold)]" weight="fill" />
                  <span>{locale === "en" ? "Solid Brass Hardware" : "Herrajes de Latón Macizo"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl space-y-4">
                <h3 className="text-xl font-serif font-normal text-white">
                  {locale === "en" ? "Request Your Curated Sample Kit" : "Solicita tu Kit de Muestras"}
                </h3>
                <p className="text-xs sm:text-sm text-[#A69B8F] leading-relaxed">
                  {locale === "en"
                    ? "Schedule a visit to our Phoenix workshop or have Raul Burgos bring the sample box directly to your initial consultation."
                    : "Visita nuestro taller en Phoenix o pide que Raul Burgos lleve el kit de muestras directamente a tu consulta a domicilio."}
                </p>
                <div className="pt-2">
                  <Link
                    href="/contacto"
                    className="interactive-control w-full min-h-[48px] px-6 py-3 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <span>{locale === "en" ? "Request Sample Kit" : "Solicitar Muestras"}</span>
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#0E0C0A] text-white text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Have a Specific Custom Finish in Mind?"
                : "¿Tienes un Acabado Específico en Mente?"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "We formulate custom 2K paint matches to any Benjamin Moore, Sherwin-Williams, or Farrow & Ball color code."
                : "Igualamos colores en formulación 2K catalizada para cualquier código de Benjamin Moore, Sherwin-Williams o Farrow & Ball."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Request Custom Color Match" : "Solicitar Muestra de Color"}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
