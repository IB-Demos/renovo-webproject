"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { ParametricScopeEstimator } from "@/components/workbench/ParametricScopeEstimator";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";

export default function EstimatorPage() {
  const { locale, t } = useRenovo();

  const pricingPillars = [
    {
      titleEn: "All-Inclusive Scope",
      titleEs: "Alcance Todo Incluido",
      descEn: "Hardware, Blum soft-close runners, off-site shop spray, and in-home containment are clearly specified upfront.",
      descEs: "Herrajes, correderas de cierre suave Blum, pintura en cabina y sellado de casa se especifican claramente.",
    },
    {
      titleEn: "True 2K Chemistry Included",
      titleEs: "Lacas Catalizadas 2K Reales",
      descEn: "We never quote standard wall latex and upgrade you later. Industrial catalyzed finish is our universal baseline.",
      descEs: "Jamás cotizamos látex tradicional para luego cobrar extras. La laca catalizada industrial es nuestro estándar base.",
    },
    {
      titleEn: "Laser Measure Verification",
      titleEs: "Verificación Láser en Sitio",
      descEn: "Before fabrication starts, Raul Burgos personally takes digital measurements of all floor and wall deviations.",
      descEs: "Antes de fabricar, Raul Burgos mide personalmente con láser cada desnivel de piso y muro en tu residencia.",
    },
  ];

  return (
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "TRANSPARENT PROJECT ESTIMATION" : "COTIZADOR TRANSPARENTE DE PROYECTO"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#FAF8F5] tracking-tight leading-[1.08]">
              {t.estimatorSection.headline}
            </h1>

            <p className="text-base sm:text-xl text-[#B8AEA2] font-light leading-relaxed">
              {t.estimatorSection.subhead}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[48px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                <span>
                  {locale === "en" ? "Speak Directly with Estimator" : "Hablar con un Estimador"}: {COMPANY_INFO.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE INTERACTIVE ESTIMATOR */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "PARAMETRIC CALCULATOR" : "CALCULADORA PARAMÉTRICA"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en" ? "Calculate Your Investment in Seconds" : "Calcula tu Inversión en Segundos"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Select your scope, cabinet count, wood choices, and finish level to generate an immediate estimate range."
                : "Selecciona el alcance, número de puertas, maderas y nivel de acabado para ver el rango estimado al instante."}
            </p>
          </div>

          <ParametricScopeEstimator />
        </div>
      </section>

      {/* 3. TRANSPARENCY PILLARS */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "OUR COMMITMENT" : "NUESTRO COMPROMISO"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en" ? "Why We Estimate Transparently" : "Por Qué Cotizamos con Transparencia"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white/5 border border-white/10 shadow-lg space-y-4 hover:border-[var(--gold)]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)]">
                  <CheckCircle size={22} weight="fill" />
                </div>
                <h3 className="text-lg font-serif font-normal text-[#FAF8F5]">
                  {locale === "en" ? pillar.titleEn : pillar.titleEs}
                </h3>
                <p className="text-xs sm:text-sm text-[#A69B8F] leading-relaxed">
                  {locale === "en" ? pillar.descEn : pillar.descEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GRAND CONSULTATION CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#0E0C0A] text-white text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en" ? "Lock in Your Consultation & Laser Measure" : "Agenda tu Consulta y Medición Láser en Sitio"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Turn this preliminary estimate into a formal itemized contract with Raul Burgos."
                : "Convierte este estimado preliminar en una propuesta formal detallada con Raul Burgos."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Schedule Consultation" : "Agendar Consulta"}</span>
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
