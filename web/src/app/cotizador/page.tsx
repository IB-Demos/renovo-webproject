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
  Calculator,
} from "@phosphor-icons/react";

export default function EstimatorPage() {
  const { locale, setActiveRoom } = useRenovo();

  React.useEffect(() => {
    setActiveRoom("kitchen");
  }, [setActiveRoom]);

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
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#B85D3B]/10 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT 7 COLS: COMMERCIAL INTRO */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410] text-[#FCFAF7] border border-[#C59B27]/40 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
                  <span>04 · {locale === "en" ? "CASA RENOVO INVESTMENT CALCULATOR" : "CASA RENOVO · ESTIMADOR DE INVERSIÓN"}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-[#B85D3B] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs">
                  <Calculator size={14} weight="fill" />
                  <span>{locale === "en" ? "Real Market Pricing · Transparent Scope" : "Precios Reales del Valle · Sin Sorpresas"}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-serif text-[#1A1410] tracking-tight leading-[1.08]">
                {locale === "en"
                  ? "Parametric Scope Estimator & Pricing Transparency."
                  : "Estimador de Alcance Paramétrico y Precios Transparentes."}
              </h1>

              <p className="text-base sm:text-lg text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "Calculate your investment with complete honesty. Choose your room dimensions, cabinetry door counts, wood species, and finish grades to see realistic, itemized Phoenix market cost ranges."
                  : "Calcula tu inversión con total honestidad. Selecciona dimensiones, número de puertas, especies de madera y tipo de acabado para obtener rangos reales de costo en el mercado de Phoenix."}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href="#calculator-section"
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto transition-all"
                >
                  <span>{locale === "en" ? "Configure Scope Below" : "Configurar Proyecto Abajo"}</span>
                  <ArrowRight size={16} weight="bold" />
                </a>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control min-h-[52px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs transition-colors"
                >
                  <Phone size={16} className="text-[#B85D3B]" />
                  <span>{locale === "en" ? "Direct Line" : "Línea Directa"}: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#DFD6C6] grid grid-cols-3 gap-3 text-left">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">100% {locale === "en" ? "HONEST" : "HONESTO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Zero surprise hidden fees" : "Cero cargos ocultos imprevistos"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">24H {locale === "en" ? "QUOTE" : "COTIZACIÓN"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Formal quote after in-home visit" : "Propuesta formal en 24 horas"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">2K {locale === "en" ? "INCLUDED" : "INCLUIDO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Industrial coating always standard" : "Laca 2K de fábrica por defecto"}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: SHOWCASE CARD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/kitchens/kitchen-05.jpg"
                    alt="Renovo Pricing Transparency"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold">
                    Phoenix Atelier
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-bold text-[#1A1410]">
                    Direct From Craftsman
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#DFD6C6] text-[#1A1410] shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-[#1A1410]">
                      {locale === "en" ? "No Middlemen, No Sales Commissions" : "Sin Intermediarios ni Comisiones"}
                    </span>
                    <span className="font-mono text-[10px] text-[#B85D3B] font-bold">RENOVO PRICING</span>
                  </div>
                  <p className="text-[11px] text-[#3D3228] leading-snug">
                    {locale === "en"
                      ? "You work directly with Raul Burgos from initial consultation to final installation, ensuring maximum value."
                      : "Tratas directamente con Raul Burgos desde el primer día hasta la instalación final, asegurando máxima calidad e inversión."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARAMETRIC SCOPE ESTIMATOR ENGINE */}
      <section id="calculator-section" className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <ParametricScopeEstimator />
        </div>
      </section>

      {/* 3. PRICING PILLARS */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Clear Commitments" : "Compromisos Claros"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Our Fixed-Price Transparency Commitment"
                : "Nuestro Compromiso de Precios Transparentes"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Every dollar in your quote goes directly to premium American materials, European precision hardware, and master craft labor."
                : "Cada dólar de tu cotización va directo a materiales certificados, herrajes de precisión europea y mano de obra experta."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-md space-y-4 hover:border-[#B85D3B] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAE2D5] border border-[#DFD6C6] flex items-center justify-center text-[#B85D3B]">
                  <CheckCircle size={20} weight="fill" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#261F1A]">
                  {locale === "en" ? p.titleEn : p.titleEs}
                </h3>
                <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
                  {locale === "en" ? p.descEn : p.descEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#EAE2D5] text-[#1A1410] border-t border-[#DFD6C6] text-center relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B85D3B]/10 blur-[130px] rounded-full" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#1A1410]">
              {locale === "en"
                ? "Book Your In-Home Evaluation"
                : "Agenda tu Evaluación en Sitio"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Get a verified, binding proposal with physical material samples, laser measurements, and timeline commitments."
                : "Obtén una propuesta formal y vinculante con muestras físicas de material, mediciones láser y cronograma exacto."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Book an On-Site Consultation" : "Agendar Consulta en Sitio"}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[#B85D3B]" />
                <span className="font-serif tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
