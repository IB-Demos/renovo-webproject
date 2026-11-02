"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { BeforeAfterLab } from "@/components/workbench/BeforeAfterLab";
import { CabinetDecisionMatrix } from "@/components/architectural/CabinetDecisionMatrix";
import { CraftChronology } from "@/components/architectural/CraftChronology";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
import { COMPANY_INFO, BEFORE_AFTER_PAIRS } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle,
  Clock,
  Scales,
} from "@phosphor-icons/react";

export default function TransformationsPage() {
  const { locale } = useRenovo();

  const comparisonPoints = [
    {
      featureEn: "Coating Technology",
      featureEs: "Tecnología de Recubrimiento",
      renovoEn: "Industrial 2K Catalyzed Polyurethane Lacquer",
      renovoEs: "Laca Catalizada Poliuretano 2K Grado Industrial",
      standardEn: "Consumer Latex / Waterborne Wall Paint",
      standardEs: "Pintura Látex o Vinílica Tradicional de Muro",
    },
    {
      featureEn: "Curing Mechanism",
      featureEs: "Mecanismo de Curado",
      renovoEn: "Chemical molecular cross-linking within 24h",
      renovoEs: "Curado químico por entrecruzamiento en 24h",
      standardEn: "Slow evaporation (takes 30+ days to harden)",
      standardEs: "Evaporación simple (tarda más de 30 días)",
    },
    {
      featureEn: "Surface Texture",
      featureEs: "Textura y Acabado",
      renovoEn: "Factory-smooth velvet spray (zero brush strokes)",
      renovoEs: "Tersura aterciopelada de fábrica (cero brocha o rodillo)",
      standardEn: "Visible brush marks, roller orange-peel stipple",
      standardEs: "Marcas visibles de brocha y textura de piel de naranja",
    },
    {
      featureEn: "Moisture & Grease Resistance",
      featureEs: "Resistencia a Humedad y Grasa",
      renovoEn: "Impervious seal exceeding KCMA kitchen standards",
      renovoEs: "Barrera impermeable que excede norma KCMA de cocinas",
      standardEn: "Softens and peels near sinks, dishwashers, and ovens",
      standardEs: "Se ablanda y despega cerca de tarjas y estufas",
    },
    {
      featureEn: "Service Life",
      featureEs: "Vida Útil Comprobada",
      renovoEn: "10 to 15+ years of daily family performance",
      renovoEs: "10 a 15+ años de durabilidad de uso diario",
      standardEn: "Chips and wears off within 12 to 18 months",
      standardEs: "Se desportilla y desgasta en 12 a 18 meses",
    },
  ];

  return (
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/assets/before-after/pair-01-kitchen-after.jpg"
            alt="Renovo Transformation Showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAE2D5] via-[#EAE2D5]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "Authentic Case Studies" : "Casos de Éxito Reales"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold font-serif text-[#261F1A] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Witness the Power of Factory 2K Transformation."
                : "Comprueba el Poder de una Transformación 2K de Fábrica."}
            </h1>

            <p className="text-base sm:text-xl text-[#3D3228] font-normal leading-relaxed">
              {locale === "en"
                ? "Explore genuine before-and-after projects across Phoenix, Paradise Valley, Scottsdale, and Peoria. Every project featured is 100% completed by Raul Burgos and the Renovo craft team."
                : "Explora proyectos reales de antes y después en Phoenix, Paradise Valley, Scottsdale y Peoria. Cada trabajo mostrado fue ejecutado al 100% por Raul Burgos y el equipo de Renovo."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/cotizador"
                className="interactive-control min-h-[48px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Estimate Your Transformation" : "Cotizar tu Transformación"}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[48px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#261F1A] bg-[#FCFAF7] text-[#261F1A] text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs"
              >
                <Phone size={16} className="text-[#B85D3B]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE BEFORE & AFTER LABORATORY */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Sparkle size={14} />
              <span>{locale === "en" ? "Interactive Split-Viewer" : "Visor Comparativo 50/50"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Compare Original vs. Handcrafted Completion"
                : "Compara el Estado Original con el Acabado de Taller"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Slide horizontally to reveal the dramatic difference made by precision preparation and catalyzed factory coatings."
                : "Desliza horizontalmente para descubrir la diferencia que logran una preparación minuciosa y lacas catalizadas de taller."}
            </p>
          </div>

          <BeforeAfterLab />
        </div>
      </section>

      {/* 3. DECISION MATRIX: REFACING VS. TOTAL BUILD */}
      <CabinetDecisionMatrix />

      {/* 4. THE 7-STAGE CRAFT CHRONOLOGY */}
      <CraftChronology />

      {/* 5. TECHNICAL SPECIFICATIONS COMPARISON */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "The Renovo Standard" : "El Estándar Renovo"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Why Renovo Outlasts Traditional House Painting"
                : "Por Qué Renovo Supera a los Pintores Tradicionales"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Cabinetry is high-contact furniture, not drywall. We treat it with industrial wood lacquer chemistry, specialized spray rigs, and rigorous surface preparation."
                : "Los gabinetes son muebles de alto contacto, no muros de tablaroca. Los tratamos con química industrial para madera, equipos de aspersión fina y preparación profunda."}
            </p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="overflow-hidden rounded-3xl border border-[#DFD6C6] bg-[#FCFAF7] shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DFD6C6] bg-[#EAE2D5]">
                  <th className="py-5 px-6 text-xs font-serif italic text-[#3D3228] w-1/4">
                    {locale === "en" ? "Engineering Factor" : "Factor Técnico"}
                  </th>
                  <th className="py-5 px-6 text-xs font-serif font-bold text-[#B85D3B] bg-[#B85D3B]/5 w-2/5 border-x border-[#DFD6C6]">
                    {locale === "en" ? "Renovo 2K Factory Process" : "Proceso Renovo Catalizado 2K"}
                  </th>
                  <th className="py-5 px-6 text-xs font-serif italic text-[#3D3228] w-1/3">
                    {locale === "en" ? "Typical House Painter" : "Pintor Tradicional de Muros"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFD6C6] text-sm">
                {comparisonPoints.map((pt, idx) => (
                  <tr key={idx} className="hover:bg-[#F4EFE6]/60 transition-colors">
                    <td className="py-5 px-6 font-serif font-semibold text-[#261F1A]">
                      {locale === "en" ? pt.featureEn : pt.featureEs}
                    </td>
                    <td className="py-5 px-6 bg-[#B85D3B]/[0.03] font-serif text-[#261F1A] border-x border-[#DFD6C6]">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle size={18} className="text-[#B85D3B] shrink-0 mt-0.5" weight="fill" />
                        <span>{locale === "en" ? pt.renovoEn : pt.renovoEs}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-[#3D3228] font-serif">
                      <span>{locale === "en" ? pt.standardEn : pt.standardEs}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. ATELIER SAMPLE BOX CONCIERGE */}
      <SampleBoxConcierge />

      {/* 7. GRAND CONSULTATION CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#261F1A] text-[#FAF8F5] text-center relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B85D3B]/15 blur-[130px] rounded-full" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Ready to Transform Your Kitchen or Living Space?"
                : "¿Listo para Transformar tu Cocina o Residencia?"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Schedule an in-home evaluation with Raul Burgos or visit our Phoenix workshop on Shangri La Rd."
                : "Agenda una evaluación a domicilio con Raul Burgos o visita nuestro taller en Shangri La Rd, Phoenix."}
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
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                <span className="font-serif tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
