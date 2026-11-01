"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { KitchenCabinetStudio } from "@/components/workbench/KitchenCabinetStudio";
import { RealPortfolioShowcase } from "@/components/workbench/RealPortfolioShowcase";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  CheckCircle,
  Hammer,
  ShieldCheck,
  Package,
} from "@phosphor-icons/react";

export default function KitchensAndMillworkPage() {
  const { locale, t } = useRenovo();

  const standards = [
    {
      titleEn: "Solid Maple Face Frames & Doors",
      titleEs: "Marcos y Puertas en Madera Maciza",
      descEn: "Milled from kiln-dried hard maple or rift-cut white oak. Built for structural rigidity that never sags under stone or quartz countertops.",
      descEs: "Fabricados con maple duro o roble blanco seleccionado. Rigidez estructural que soporta encimeras de cuarzo o piedra sin ceder jamás.",
    },
    {
      titleEn: "5/8\" Solid Dovetail Drawers",
      titleEs: "Cajones Ensamblados en Cola de Milano",
      descEn: "Traditional English dovetail corners crafted from solid maple, paired with Blum Movento concealed undermount soft-close glides.",
      descEs: "Ensambles clásicos en cola de milano en maple macizo, equipados con rieles ocultos Blum Movento de cierre suave.",
    },
    {
      titleEn: "2K Catalyzed Chemical Finish",
      titleEs: "Lacas Catalizadas 2K en Cabina",
      descEn: "Applied in our climate-controlled spray booths. Meets KCMA standards for chemical, moisture, and cooking grease resistance.",
      descEs: "Aplicadas en cabina de aspersión con temperatura controlada. Cumple norma KCMA de resistencia a humedad, vapor y grasa caliente.",
    },
    {
      titleEn: "Custom Architectural Fit",
      titleEs: "Ajuste Arquitectónico a Medida",
      descEn: "Ceiling-height crown moldings, scribe moldings, and recessed toe kicks tailored to the exact millimeters of your home's walls and floor.",
      descEs: "Molduras a techo, zoclos remetidos y ajustes milimétricos adaptados a la geometría exacta de tus muros y pisos.",
    },
  ];

  return (
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/assets/kitchens/kitchen-06.jpg"
            alt="Renovo Bespoke Kitchens Phoenix"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A] via-[#0E0C0A]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "DISCIPLINE 01 · KITCHENS & CABINETRY" : "ESPECIALIDAD 01 · COCINAS Y GABINETES"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#FAF8F5] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Bespoke Kitchens Built for a Lifetime of Living."
                : "Cocinas de Autor Diseñadas para Toda la Vida."}
            </h1>

            <p className="text-base sm:text-xl text-[#B8AEA2] font-light leading-relaxed">
              {locale === "en"
                ? "From raw hardwood milling to precision factory 2K spray finishing, our Phoenix shop delivers custom kitchen cabinetry and complete refacing that elevate your home beyond builder-grade standards."
                : "Desde el habilitado de maderas nobles hasta el esmaltado 2K de cabina, nuestro taller en Phoenix crea gabinetes a medida y refacing de lujo que superan cualquier estándar comercial."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/cotizador"
                className="interactive-control min-h-[48px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Estimate Your Kitchen Project" : "Cotizar tu Cocina"}</span>
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

      {/* 2. THE INTERACTIVE CABINET ATELIER */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
                {locale === "en" ? "CONFIGURATOR ATELIER" : "ESTUDIO DE CONFIGURACIÓN"}
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
                {locale === "en"
                  ? "Explore Styles, Wood Species & Finishes"
                  : "Explora Estilos, Maderas y Acabados"}
              </h2>
              <p className="text-base text-[#B8AEA2] font-light">
                {locale === "en"
                  ? "Experiment with door profiles, two-tone island accents, and curated finishes in real-time."
                  : "Experimenta con perfiles de puertas, acentos en islas y acabados de cabina en tiempo real."}
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
            <KitchenCabinetStudio />
          </div>
        </div>
      </section>

      {/* 3. CRAFTSMANSHIP & CONSTRUCTION STANDARDS */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "CABINETRY ANATOMY" : "ANATOMÍA DE FABRICACIÓN"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Built to Outlast Everyday Living"
                : "Fabricados para Superar el Uso Cotidiano"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Every cabinet is engineered with premium American hardwoods, Blum European hardware, and industrial 2K coatings that withstand desert temperatures and busy family households."
                : "Cada gabinete se construye con maderas nobles, herrajes europeos Blum y lacas industriales 2K capaces de resistir el clima desértico y el ajetreo diario."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white/5 border border-white/10 shadow-lg space-y-4 hover:border-[var(--gold)]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)]">
                  <CheckCircle size={20} weight="fill" />
                </div>
                <h3 className="text-lg font-serif font-normal text-[#FAF8F5]">
                  {locale === "en" ? std.titleEn : std.titleEs}
                </h3>
                <p className="text-xs sm:text-sm text-[#A69B8F] leading-relaxed">
                  {locale === "en" ? std.descEn : std.descEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL PHOENIX KITCHEN ARCHIVE */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "PHOTOGRAPHIC ARCHIVE" : "REGISTRO FOTOGRÁFICO"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Completed Kitchens Across Phoenix"
                : "Cocinas Realizadas en Phoenix y Alrededores"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Browse our authentic portfolio of recent custom kitchen installations and 2K cabinet transformations."
                : "Explora nuestro portafolio auténtico de instalaciones recientes de cocinas a medida y transformaciones con lacas 2K."}
            </p>
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-white/5 border border-white/10 shadow-2xl">
            <RealPortfolioShowcase initialCategory="kitchens" />
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#0E0C0A] text-white text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Plan Your Custom Kitchen Consultation"
                : "Planea la Transformación de tu Cocina"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Schedule an in-home evaluation with Raul Burgos to review layouts, take laser measurements, and explore physical door samples."
                : "Agenda una visita a domicilio con Raul Burgos para revisar distribución, tomar medidas con láser y explorar muestras de puertas."}
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
