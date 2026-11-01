"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { BeforeAfterLab } from "@/components/workbench/BeforeAfterLab";
import { COMPANY_INFO, BEFORE_AFTER_PAIRS } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle,
  Clock,
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
      featureEs: "Resistencia a Grasa y Humedad",
      renovoEn: "Meets & exceeds KCMA standards (hot grease & water tight)",
      renovoEs: "Cumple norma KCMA (inmune a grasa caliente y vapor)",
      standardEn: "Softens, bubbles, and peels around sinks and stoves",
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
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/assets/before-after/pair-01-kitchen-after.jpg"
            alt="Renovo Transformation Showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "AUTHENTIC CASE STUDIES" : "CASOS DE ÉXITO REALES"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#FAF8F5] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Witness the Power of Factory 2K Transformation."
                : "Comprueba el Poder de una Transformación 2K de Fábrica."}
            </h1>

            <p className="text-base sm:text-xl text-[#B8AEA2] font-light leading-relaxed">
              {locale === "en"
                ? "Explore genuine before-and-after projects across Phoenix, Paradise Valley, Scottsdale, and Peoria. Every project featured is 100% completed by Raul Burgos and the Renovo craft team."
                : "Explora proyectos reales de antes y después en Phoenix, Paradise Valley, Scottsdale y Peoria. Cada trabajo mostrado fue ejecutado al 100% por Raul Burgos y el equipo de Renovo."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/cotizador"
                className="interactive-control min-h-[48px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Estimate Your Transformation" : "Cotizar tu Transformación"}</span>
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

      {/* 2. INTERACTIVE BEFORE & AFTER LABORATORY */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "INTERACTIVE SPLIT-VIEWER" : "VISOR INTERACTIVO COMPARATIVO"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Compare Original vs. Handcrafted Completion"
                : "Compara el Estado Original con el Acabado de Taller"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Slide horizontally to reveal the dramatic difference made by precision preparation and catalyzed factory coatings."
                : "Desliza horizontalmente para descubrir la diferencia que logran una preparación minuciosa y lacas catalizadas de taller."}
            </p>
          </div>

          <BeforeAfterLab />
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS COMPARISON */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "THE RENOVO STANDARD" : "EL ESTÁNDAR RENOVO"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Why Renovo Outlasts Traditional House Painting"
                : "Por Qué Renovo Supera a los Pintores Tradicionales"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Cabinetry is high-contact furniture, not drywall. We treat it with industrial wood lacquer chemistry, specialized spray rigs, and rigorous surface preparation."
                : "Los gabinetes son muebles de alto contacto, no muros de tablaroca. Los tratamos con química industrial para madera, equipos de aspersión fina y preparación profunda."}
            </p>
          </div>

          {/* Mobile Comparison Cards (< 768px) */}
          <div className="md:hidden space-y-4">
            {comparisonPoints.map((pt, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-lg space-y-3">
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--gold)] font-bold">
                  {locale === "en" ? pt.featureEn : pt.featureEs}
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-[var(--gold)]/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--gold)] font-bold">
                    <CheckCircle size={15} weight="fill" />
                    <span>{locale === "en" ? "Renovo 2K Process" : "Proceso Renovo 2K"}</span>
                  </div>
                  <div className="text-sm font-medium text-white">
                    {locale === "en" ? pt.renovoEn : pt.renovoEs}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8A7F73] font-semibold">
                    {locale === "en" ? "Traditional House Painter" : "Pintor Tradicional"}
                  </div>
                  <div className="text-sm text-[#A69B8F]">
                    {locale === "en" ? pt.standardEn : pt.standardEs}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Comparison Table (md+) */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-[#8A7F73] font-semibold w-1/4">
                    {locale === "en" ? "Engineering Factor" : "Factor Técnico"}
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-[var(--gold)] font-bold bg-white/5 w-2/5 border-x border-white/10">
                    {locale === "en" ? "Renovo 2K Factory Process" : "Proceso Renovo Catalizado 2K"}
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-[#A69B8F] font-semibold w-1/3">
                    {locale === "en" ? "Typical House Painter" : "Pintor Tradicional de Muros"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8 text-sm">
                {comparisonPoints.map((pt, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      {locale === "en" ? pt.featureEn : pt.featureEs}
                    </td>
                    <td className="py-5 px-6 bg-white/[0.03] font-medium text-white border-x border-white/10">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle size={18} className="text-[var(--gold)] shrink-0 mt-0.5" weight="fill" />
                        <span>{locale === "en" ? pt.renovoEn : pt.renovoEs}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-[#A69B8F]">
                      <span>{locale === "en" ? pt.standardEn : pt.standardEs}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. GRAND CONSULTATION CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#0E0C0A] text-white text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Ready to Transform Your Kitchen or Living Space?"
                : "¿Listo para Transformar tu Cocina o Residencia?"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Schedule an in-home evaluation with Raul Burgos or visit our Phoenix workshop on Shangri La Rd."
                : "Agenda una evaluación a domicilio con Raul Burgos o visita nuestro taller en Shangri La Rd, Phoenix."}
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
