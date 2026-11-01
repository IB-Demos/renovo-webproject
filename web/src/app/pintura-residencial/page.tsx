"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { DesertLightEngine } from "@/components/architectural/DesertLightEngine";
import { CraftChronology } from "@/components/architectural/CraftChronology";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
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
  Compass,
} from "@phosphor-icons/react";

export default function ResidentialPaintingPage() {
  const { locale, t } = useRenovo();

  const protocols = [
    {
      code: "PREP 01",
      icon: Broom,
      titleEn: "HEPA Dustless Sanding & Clean Air Containment",
      titleEs: "Lijado con Extracción HEPA Sin Polvo",
      descEn: "We treat your home with total respect. Festool HEPA dust extractors capture 99.97% of airborne dust before primers or enamels are applied.",
      descEs: "Cuidamos tu hogar con total respeto. Extractores HEPA capturan el 99.97% del polvo antes de aplicar selladores o esmaltes.",
    },
    {
      code: "PREP 02",
      icon: Drop,
      titleEn: "Digital Moisture Checks & Desert Urethane Sealants",
      titleEs: "Medición de Humedad y Selladores de Alto Rendimiento",
      descEn: "Substrates are electronically verified below 12% moisture. Exterior joints receive elastomeric urethane caulk engineered for Arizona thermal expansion.",
      descEs: "Verificamos electrónicamente la humedad (<12%) y sellamos grietas con poliuretano elástico formulado para la expansión térmica del desierto.",
    },
    {
      code: "PREP 03",
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A] via-[#0E0C0A]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
              <Sparkle size={14} weight="fill" />
              <span>
                {locale === "en"
                  ? "Fine Residential Finishes · Architectural Painting & UV Shielding"
                  : "Acabados Finos Residenciales · Pintura de Autor y Protección UV"}
              </span>
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
                className="interactive-control min-h-[48px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Estimate Painting Project" : "Cotizar Proyecto de Pintura"}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[48px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ARIZONA DESERT LIGHT ENGINE (Simulating 2700K, 5500K, 3000K Lighting) */}
      <DesertLightEngine />

      {/* 3. CRAFTSMANSHIP & PREPARATION PROTOCOLS */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Surface Protocol" : "Protocolo de Preparación"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "The Science of High-Durability Preparation"
                : "La Ciencia Detrás de una Preparación Duradera"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Ninety percent of exterior paint failures in Arizona are caused by improper substrate prep. We inspect, decontaminate, and prime to laboratory standards."
                : "El 90% de las fallas de pintura en Arizona se deben a una mala preparación. Inspeccionamos, descontaminamos y sellamos con estándares de laboratorio."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protocols.map((proto, idx) => {
              const IconComp = proto.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-lg space-y-5 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)]">
                      <IconComp size={22} />
                    </div>
                    <span className="text-xs font-serif text-[var(--gold)] font-bold">
                      {proto.code}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-normal text-[#FAF8F5]">
                    {locale === "en" ? proto.titleEn : proto.titleEs}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A69B8F] leading-relaxed">
                    {locale === "en" ? proto.descEn : proto.descEs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE 7-STAGE CRAFT CHRONOLOGY */}
      <CraftChronology />

      {/* 5. INTERACTIVE PAINT & FINISH SIMULATOR */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#120F0C]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
              <Compass size={14} />
              <span>{locale === "en" ? "Color Simulator" : "Simulador de Color"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Test Pigments on Architectural Substrates"
                : "Experimenta con Pigmentos en Muros y Fachadas"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Evaluate light reflectance, undertones, and velvet sheens across interior and exterior scenarios."
                : "Evalúa reflectancia de luz, subtonos y tersuras en escenarios interiores y exteriores."}
            </p>
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-white/5 border border-white/10 shadow-2xl">
            <PaintSimulatorLab />
          </div>
        </div>
      </section>

      {/* 6. ATELIER SAMPLE BOX CONCIERGE */}
      <SampleBoxConcierge />

      {/* 7. REAL PHOENIX RESIDENTIAL PORTFOLIO */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Verified Portfolio" : "Obras Verificadas en Phoenix"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Recent Interior & Exterior Commissions"
                : "Proyectos Recientes de Pintura Residencial"}
            </h2>
          </div>
          <div className="rounded-3xl p-6 sm:p-8 bg-white/5 border border-white/10 shadow-2xl">
            <RealPortfolioShowcase initialCategory="interior" />
          </div>
        </div>
      </section>

      {/* 8. GRAND CONSULTATION CTA */}
      <section className="py-20 lg:py-28 bg-[#0E0C0A] text-white text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Schedule an Architectural Color Evaluation"
                : "Agenda una Evaluación de Color en Sitio"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Raul Burgos will evaluate your residence in person, conduct moisture testing, and bring physical large-format color boards to test under your home's natural daylight."
                : "Raul Burgos evaluará tu residencia personalmente, realizará pruebas de humedad y llevará muestras de gran formato para analizarlas bajo la luz natural de tus espacios."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Book an On-Site Consultation" : "Agendar Consulta en Sitio"}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
