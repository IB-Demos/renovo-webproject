"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { ParametricScopeEstimator } from "@/components/workbench/ParametricScopeEstimator";
import { CabinetDecisionMatrix } from "@/components/architectural/CabinetDecisionMatrix";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle,
  Calculator,
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
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Calculator size={14} />
              <span>
                {locale === "en"
                  ? "Transparent Project Scope & Pricing · Phoenix Atelier"
                  : "Cotizador Transparente de Proyecto · Taller Phoenix"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#261F1A] tracking-tight leading-[1.08]">
              {t.estimatorSection.headline}
            </h1>

            <p className="text-base sm:text-xl text-[#6B5E52] font-light leading-relaxed">
              {t.estimatorSection.subhead}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[48px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#261F1A] bg-[#FCFAF7] text-[#261F1A] text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs"
              >
                <Phone size={16} className="text-[#B85D3B]" />
                <span>
                  {locale === "en" ? "Speak Directly with Estimator" : "Hablar con un Estimador"}: {COMPANY_INFO.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE INTERACTIVE ESTIMATOR */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Sparkle size={14} />
              <span>{locale === "en" ? "Parametric Calculator" : "Calculadora Paramétrica"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#261F1A]">
              {locale === "en" ? "Calculate Your Investment in Seconds" : "Calcula tu Inversión en Segundos"}
            </h2>
            <p className="text-base text-[#6B5E52] font-light">
              {locale === "en"
                ? "Select your scope, cabinet count, wood choices, and finish level to generate an immediate estimate range."
                : "Selecciona el alcance, número de puertas, maderas y nivel de acabado para ver el rango estimado al instante."}
            </p>
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl">
            <ParametricScopeEstimator />
          </div>
        </div>
      </section>

      {/* 3. DECISION MATRIX: REFACING VS FULL BUILD */}
      <CabinetDecisionMatrix />

      {/* 4. TRANSPARENCY PILLARS */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Pricing Integrity" : "Transparencia Total"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#261F1A]">
              {locale === "en" ? "No Hidden Costs. No Surprises." : "Precios Claros. Cero Sorpresas."}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-md space-y-4 hover:border-[#B85D3B] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAE2D5] border border-[#DFD6C6] flex items-center justify-center text-[#B85D3B]">
                  <CheckCircle size={20} weight="fill" />
                </div>
                <h3 className="text-xl font-serif font-normal text-[#261F1A]">
                  {locale === "en" ? pillar.titleEn : pillar.titleEs}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed">
                  {locale === "en" ? pillar.descEn : pillar.descEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ATELIER SAMPLE BOX CONCIERGE */}
      <SampleBoxConcierge />

      {/* 6. CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#261F1A] text-[#FAF8F5] text-center relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B85D3B]/15 blur-[130px] rounded-full" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#FAF8F5]">
              {locale === "en" ? "Lock In Your On-Site Consultation" : "Agenda tu Consulta de Medición en Sitio"}
            </h2>
            <p className="text-base text-[#D4CBBF] font-light">
              {locale === "en"
                ? "Turn your calculated estimate into a verified scope. Raul Burgos will inspect existing conditions and confirm final pricing."
                : "Convierte tu cálculo estimado en un presupuesto formal. Raul Burgos verificará las condiciones en tu residencia."}
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
