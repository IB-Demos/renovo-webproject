"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { MaterialCatalogGrid } from "@/components/workbench/MaterialCatalogGrid";
import { MaterialOnboardingGuide } from "@/components/workbench/MaterialOnboardingGuide";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  BookmarkSimple,
  ArrowRight,
  Package,
  Phone,
  CheckCircle,
  Question,
} from "@phosphor-icons/react";

export default function CatalogPage() {
  const {  locale, t, samples, setIsDrawerOpen , setActiveRoom } = useRenovo();

  React.useEffect(() => {
    setActiveRoom("living");
  }, [setActiveRoom]);

  return (
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT 7 COLS: COMMERCIAL COPY */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410] text-[#FCFAF7] border border-[#C59B27]/40 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                  <span>{locale === "en" ? "HARDWOODS & 2K LACQUERS · PHOENIX WORKSHOP" : "MADERAS NOBLES Y LACAS 2K · TALLER EN PHOENIX"}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-[#B85D3B] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs">
                  <BookmarkSimple size={14} weight="fill" />
                  <span>{locale === "en" ? "Direct Spec Tray Integration" : "Bandeja de Muestras en Vivo"}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-serif text-[#1A1410] tracking-tight leading-[1.08]">
                {locale === "en"
                  ? "Curated Hardwoods, 2K Lacquers & Forged Hardware."
                  : "Maderas Nobles, Lacas Catalizadas 2K y Herrajes de Autor."}
              </h1>

              <p className="text-base sm:text-lg text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "Every material in our catalog is engineered in our Phoenix spray booths for chemical durability, high tactile smoothness, and authentic desert resilience. Save your favorite finishes to review with Raul during your consultation."
                  : "Cada acabado en nuestro catálogo es formulado en nuestro taller de Phoenix para máxima tersura táctil, resistencia química y durabilidad en el desierto. Guarda tus materiales favoritos para revisarlos con Raul en tu cita."}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(true)}
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto transition-all"
                >
                  <BookmarkSimple size={16} weight="bold" />
                  <span>{locale === "en" ? "View Design Selections" : "Ver Selecciones de Diseño"} ({samples.length})</span>
                </button>

                <a
                  href="#guia-materiales"
                  className="interactive-control min-h-[52px] px-6 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs transition-colors"
                >
                  <Question size={16} className="text-[#B85D3B]" />
                  <span>{locale === "en" ? "How Does This Work?" : "¿Cómo Funciona Esta Sección?"}</span>
                </a>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control min-h-[52px] px-6 py-3.5 rounded-full border border-transparent hover:border-[#DFD6C6] text-[#3D3228] hover:text-[#1A1410] text-xs font-serif font-semibold inline-flex items-center justify-center gap-1.5 w-full sm:w-auto transition-colors"
                >
                  <Phone size={15} className="text-[#B85D3B]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#DFD6C6] grid grid-cols-3 gap-3 text-left">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">20+ {locale === "en" ? "SAMPLES" : "MUESTRAS"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Physical boards ready at workshop" : "Muestras físicas listas en taller"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">5 {locale === "en" ? "SHEENS" : "NIVELES DE BRILLO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "From 5% Dead Flat to 35% Semi" : "Desde 5% mate hasta 35% semibrillo"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">{locale === "en" ? "FREE KIT" : "KIT GRATUITO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Sample box brought to your home" : "Maletín llevado a tu residencia"}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: SHOWCASE CARD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/painting-interior/interior-03.jpg"
                    alt="Renovo Curated Materials"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold">
                    Sonoran Sage 2K Lacquer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-bold text-[#1A1410]">
                    LRV 26% · Satin
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#DFD6C6] text-[#1A1410] shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-[#1A1410]">
                      {locale === "en" ? "Active Design Tray" : "Tu Bandeja de Diseño"}
                    </span>
                    <span className="font-mono text-[10px] text-[#B85D3B] font-bold">{samples.length} ITEMS</span>
                  </div>
                  <p className="text-[11px] text-[#3D3228] leading-snug">
                    {locale === "en"
                      ? "Pin and save wood species, pigments, and Blum runners to request a curated tactile sample box."
                      : "Guarda especies de madera, pigmentos y herrajes para solicitar una caja física de muestras en sitio."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE MATERIAL CATALOG GRID */}
      <section className="py-16 lg:py-24 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          {/* VISUAL ONBOARDING & CURATED PRESET PALETTES */}
          <MaterialOnboardingGuide />

          {/* CATALOG EXPLORATION INTRO & GRID */}
          <div className="pt-6 border-t border-[#DFD6C6]">
            <div className="mb-10 max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
                <Sparkle size={14} />
                <span>{locale === "en" ? "Interactive Swatch Library" : "Biblioteca Interactiva de Acabados"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif text-[#261F1A]">
                {locale === "en" ? "Explore Individual Finishes" : "Explora Acabados Individuales"}
              </h2>
              <p className="text-base text-[#3D3228] font-normal">
                {locale === "en"
                  ? "Every swatch represents a physical material in our Phoenix workshop. Click 'Pin to Tray' to compile your custom specification."
                  : "Cada muestra corresponde a materiales reales en nuestro taller de Phoenix. Haz clic en 'Guardar' para agregarla a tu bandeja."}
              </p>
            </div>

            <MaterialCatalogGrid />
          </div>
        </div>
      </section>

      {/* 3. ATELIER SAMPLE BOX CONCIERGE */}
      <SampleBoxConcierge />

      {/* 4. CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#EAE2D5] text-[#1A1410] border-t border-[#DFD6C6] text-center relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1A1410]">
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
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={15} className="text-[#B85D3B]" />
                <span className="font-serif tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
