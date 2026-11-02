"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { MaterialCatalogGrid } from "@/components/workbench/MaterialCatalogGrid";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
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
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
                <Sparkle size={14} weight="fill" />
                <span>
                  {locale === "en"
                    ? "Material & Finish Specification · Phoenix Atelier"
                    : "Especificación de Materiales y Acabados"}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-semibold font-serif text-[#261F1A] tracking-tight leading-[1.08]">
                {t.catalogSection.headline}
              </h1>

              <p className="text-base sm:text-xl text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {t.catalogSection.subhead}
              </p>
            </div>

            {/* Design Tray Trigger Badge */}
            <div className="p-6 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] space-y-3 shrink-0 max-w-sm shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs uppercase tracking-wider text-[#B85D3B] font-bold">
                  {locale === "en" ? "YOUR DESIGN TRAY" : "TU BANDEJA DE MUESTRAS"}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#B85D3B] text-[#FCFAF7] text-xs font-bold font-serif">
                  {samples.length}
                </span>
              </div>
              <p className="text-xs text-[#3D3228] leading-relaxed">
                {locale === "en"
                  ? "Save your preferred wood species, paint shades, and hardware to review with Raul during your consultation."
                  : "Guarda tus maderas, colores y jaladeras favoritas para revisarlas con Raul durante tu cita."}
              </p>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="interactive-control w-full min-h-[42px] px-4 py-2 rounded-xl bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <BookmarkSimple size={15} weight="bold" />
                <span>{locale === "en" ? "Review Sample Tray" : "Ver Bandeja de Muestras"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE MATERIAL CATALOG GRID */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Sparkle size={14} />
              <span>{locale === "en" ? "Curated Finishes" : "Paletas y Muestras de Taller"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en" ? "Architectural Palette" : "Selección de Ebanistería y Color"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Every swatch represents a physical material in our Phoenix workshop. Click 'Pin to Tray' to compile your palette."
                : "Cada muestra corresponde a materiales reales en nuestro taller de Phoenix. Haz clic en 'Guardar' para armar tu paleta."}
            </p>
          </div>

          <MaterialCatalogGrid />
        </div>
      </section>

      {/* 3. ATELIER SAMPLE BOX CONCIERGE */}
      <SampleBoxConcierge />

      {/* 4. CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#261F1A] text-[#FAF8F5] text-center relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B85D3B]/15 blur-[130px] rounded-full" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#FAF8F5]">
              {locale === "en" ? "Request Physical Samples to Your Door" : "Recibe Muestras Físicas en tu Residencia"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Experience the authentic 2K velvet feel and natural wood grains in the natural daylight of your own residence."
                : "Comprueba la tersura de las lacas 2K y la textura de la madera bajo la luz natural de tus propios espacios."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Book an On-Site Consultation" : "Agendar Consulta en Sitio"}</span>
                <ArrowRight size={15} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={15} className="text-[var(--gold)]" />
                <span className="font-serif tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
