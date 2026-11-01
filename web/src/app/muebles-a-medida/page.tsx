"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { BlueprintAnatomyExplorer } from "@/components/workbench/BlueprintAnatomyExplorer";
import { RealPortfolioShowcase } from "@/components/workbench/RealPortfolioShowcase";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import { ArrowRight, Sparkle, Phone } from "@phosphor-icons/react";

export default function CustomFurniturePage() {
  const { locale } = useRenovo();

  return (
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/assets/blueprints-and-docs/custom-furniture-01.jpg"
            alt="Renovo Custom Furniture Phoenix"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A] via-[#0E0C0A]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
              <Sparkle size={14} weight="fill" />
              <span>
                {locale === "en"
                  ? "DISCIPLINE 02 · ARCHITECTURAL BUILT-INS & FURNITURE"
                  : "ESPECIALIDAD 02 · MUEBLES DE AUTOR Y BUILT-INS"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-normal font-serif leading-[1.08] tracking-[-0.02em]">
              {locale === "en"
                ? "Arched Fireplaces, Media Walls & Handcrafted Wine Bars."
                : "Libreros Arqueados, Muros de TV y Cavas Hechas a Mano."}
            </h1>

            <p className="text-base sm:text-xl text-[#B8AEA2] leading-relaxed font-light">
              {locale === "en"
                ? "Custom-built in our Phoenix workshop from premium rift-cut white oak, hard maple, and acoustic paneling with concealed soft-close hardware."
                : "Fabricados a mano en nuestro taller de Phoenix con encino blanco de corte recto, maple sólido y herrajes ocultos de la más alta calidad."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/cotizador"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2.5 shadow-lg w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Commission a Custom Piece" : "Cotizar Mueble a Medida"}</span>
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

      {/* 2. INTERACTIVE ANATOMY EXPLORER */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "INTERACTIVE ANATOMY" : "ANATOMÍA INTERACTIVA"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Inspect Joinery, Woods & Integrated Lighting"
                : "Inspecciona Ensambles, Maderas e Iluminación"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Click on the numbered pins across our 4 signature builds to explore craft details, or toggle to the full 19-photo archive with workshop video."
                : "Haz clic en los nodos de nuestras 4 obras de autor para explorar detalles constructivos, o abre el archivo completo de 19 fotos con video."}
            </p>
          </div>

          <BlueprintAnatomyExplorer />
        </div>
      </section>

      {/* 3. FULL ARCHIVE PORTFOLIO */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "COMPLETE REPERTOIRE" : "REPERTORIO COMPLETO"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en" ? "Custom Furniture Archive" : "Archivo de Muebles a Medida"}
            </h2>
          </div>
          <div className="rounded-3xl p-6 sm:p-8 bg-white/5 border border-white/10 shadow-2xl">
            <RealPortfolioShowcase initialCategory="custom" />
          </div>
        </div>
      </section>

      {/* 4. GRAND CONSULTATION CTA */}
      <section className="py-20 lg:py-28 bg-[#0E0C0A] text-white text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Commission an Architectural Centerpiece"
                : "Comisiona una Obra Arquitectónica a Medida"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Bring your architectural drawings, Pinterest boards, or napkin sketches to Raul Burgos. We translate your vision into heirloom-quality reality."
                : "Trae tus planos, referencias o bocetos iniciales a Raul Burgos. Convertimos tu idea en una pieza de arte para tu hogar."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Book an On-Site Consultation" : "Agendar Consulta en Sitio"}</span>
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
