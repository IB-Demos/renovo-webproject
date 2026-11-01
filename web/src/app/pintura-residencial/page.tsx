"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { PaintSimulatorLab } from "@/components/workbench/PaintSimulatorLab";
import { RealPortfolioShowcase } from "@/components/workbench/RealPortfolioShowcase";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  ShieldCheck,
  Drop,
  CheckCircle,
  Sun,
  Broom,
} from "@phosphor-icons/react";

export default function ResidentialPaintingPage() {
  const { locale, t } = useRenovo();

  const protocols = [
    {
      code: "PREP-01",
      icon: Broom,
      titleEn: "HEPA Dustless Sanding & Clean Air Containment",
      titleEs: "Lijado con Extracción HEPA Sin Polvo",
      descEn: "We treat your home with total respect. Festool HEPA dust extractors capture 99.97% of airborne dust before primers or enamels are applied.",
      descEs: "Cuidamos tu hogar con total respeto. Extractores HEPA capturan el 99.97% del polvo antes de aplicar selladores o esmaltes.",
    },
    {
      code: "PREP-02",
      icon: Drop,
      titleEn: "Digital Moisture Checks & Desert Urethane Sealants",
      titleEs: "Medición de Humedad y Selladores de Alto Rendimiento",
      descEn: "Substrates are electronically verified below 12% moisture. Exterior joints receive elastomeric urethane caulk engineered for Arizona thermal expansion.",
      descEs: "Verificamos electrónicamente la humedad (<12%) y sellamos grietas con poliuretano elástico formulado para la expansión térmica del desierto.",
    },
    {
      code: "PREP-03",
      icon: Sun,
      titleEn: "UV-Shield Exterior & Zero-VOC Washable Interiors",
      titleEs: "Protección UV Exterior y Acabados 0-VOC Lavables",
      descEn: "Non-fading cross-linked acrylics on exterior stucco and millwork; low-odor, scrubbable velvet finishes on interior walls and ceilings.",
      descEs: "Acrílicos reticulados resistentes al sol intenso en exteriores; acabados aterciopelados lavables y sin olor para recámaras y estancias.",
    },
  ];

  return (
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/assets/painting-interior/interior-01.jpg"
            alt="Renovo Architectural Painting Phoenix"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A] via-[#0E0C0A]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "DISCIPLINE 03 · RESIDENTIAL & EXTERIOR PAINTING" : "ESPECIALIDAD 03 · PINTURA RESIDENCIAL"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#FAF8F5] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Architectural Pigment, Velvet Walls & Desert Durability."
                : "Color Arquitectónico, Acabados Aterciopelados y Protección."}
            </h1>

            <p className="text-base sm:text-xl text-[#B8AEA2] font-light leading-relaxed">
              {locale === "en"
                ? "From coffered living room ceilings to front entry door revitalization, Renovo combines meticulous surface preparation with industrial spray precision for finishes that never peel or chalk under Arizona sun."
                : "Desde plafones de gran formato hasta la restauración de puertas principales, Renovo combina preparación milimétrica y aspersión fina para acabados que no se descascaran."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/cotizador"
                className="interactive-control min-h-[48px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Estimate Painting Project" : "Cotizar Proyecto de Pintura"}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[48px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE LIGHT & COLOR LAB */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
                {locale === "en" ? "LIGHT & PIGMENT LABORATORY" : "SIMULADOR DE LUZ Y COLOR"}
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
                {locale === "en"
                  ? "Test Wall & Trim Colors in True Lighting"
                  : "Prueba Colores de Muros y Molduras"}
              </h2>
              <p className="text-base text-[#B8AEA2] font-light">
                {locale === "en"
                  ? "Explore how desert sunlight, warm morning daylight, and evening lamplight interact with curated tones."
                  : "Comprueba cómo interactúan la luz solar del desierto y la iluminación cálida con nuestra paleta curada."}
              </p>
            </div>
            <Link
              href="/cotizador"
              className="interactive-control px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>{locale === "en" ? "Proceed to Estimator" : "Ir al Cotizador"}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-4 sm:p-8">
            <PaintSimulatorLab />
          </div>
        </div>
      </section>

      {/* 3. CLEAN PREPARATION PROTOCOLS */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "CLEAN HOME ASSURANCE" : "COMPROMISO DE PREPARACIÓN LIMPIA"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Our 3-Stage Clean Prep Protocol"
                : "Protocolo de Preparación en 3 Etapas"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "The secret to an enduring paint job is not the paint itself; it is the exhaustive preparation of the substrate."
                : "El verdadero secreto de un acabado impecable no es la pintura en sí, sino la preparación exhaustiva de cada superficie."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protocols.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white/5 border border-white/10 shadow-lg space-y-4 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
                      {p.code}
                    </span>
                    <Icon size={22} className="text-[var(--gold)]" weight="fill" />
                  </div>
                  <h3 className="text-lg font-serif font-normal text-[#FAF8F5]">
                    {locale === "en" ? p.titleEn : p.titleEs}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A69B8F] leading-relaxed">
                    {locale === "en" ? p.descEn : p.descEs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. REAL PAINTING PORTFOLIO */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "AUTHENTIC WORK ARCHIVE" : "REGISTRO DE PROYECTOS"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Interior Spaces & Exterior Craftsmanship"
                : "Espacios Interiores y Exteriores"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "High-resolution documentation of completed luxury residences across the Valley."
                : "Documentación fotográfica de residencias terminadas en todo el Valle de Phoenix."}
            </p>
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-white/5 border border-white/10 shadow-2xl">
            <RealPortfolioShowcase initialCategory="interior" />
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#0E0C0A] text-white text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Schedule an In-Home Color & Painting Consultation"
                : "Agenda una Evaluación de Pintura y Color en tu Residencia"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Raul Burgos will evaluate your walls, trim, and exterior surfaces, offering expert color guidance and an itemized transparent proposal."
                : "Raul Burgos evaluará tus muros, molduras y exteriores, ofreciendo asesoría en color y un presupuesto transparente."}
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
