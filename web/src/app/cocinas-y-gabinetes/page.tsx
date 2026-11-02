"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { ArchitecturalDraftingTable } from "@/components/architectural/ArchitecturalDraftingTable";
import { ExplodedCabinetJoinery } from "@/components/architectural/ExplodedCabinetJoinery";
import { CabinetDecisionMatrix } from "@/components/architectural/CabinetDecisionMatrix";
import { CraftChronology } from "@/components/architectural/CraftChronology";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
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
  Clock,
  Compass,
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
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/assets/kitchens/kitchen-01.jpg"
            alt="Renovo Bespoke Kitchens Phoenix"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAE2D5] via-[#EAE2D5]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Sparkle size={14} weight="fill" />
              <span>
                {locale === "en"
                  ? "Atelier Cabinetry · Bespoke Kitchens & Refacing"
                  : "Ebanistería Fina · Cocinas de Autor y Refacing"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold font-serif text-[#261F1A] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Bespoke Kitchens Built for a Lifetime of Living."
                : "Cocinas de Autor Diseñadas para Toda la Vida."}
            </h1>

            <p className="text-base sm:text-xl text-[#3D3228] font-normal leading-relaxed">
              {locale === "en"
                ? "From raw hardwood milling to precision factory 2K spray finishing, our Phoenix shop delivers custom kitchen cabinetry and complete refacing that elevate your home beyond builder-grade standards."
                : "Desde el habilitado de maderas nobles hasta el esmaltado 2K de cabina, nuestro taller en Phoenix crea gabinetes a medida y refacing de lujo que superan cualquier estándar comercial."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/cotizador"
                className="interactive-control min-h-[48px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Estimate Your Kitchen Project" : "Cotizar tu Cocina"}</span>
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

      {/* 2. THE ARCHITECTURAL DRAFTING TABLE */}
      <ArchitecturalDraftingTable />

      {/* 3. EXPLODED CABINET JOINERY & ANATOMY */}
      <ExplodedCabinetJoinery />

      {/* 4. THE DECISION MATRIX: REFACING VS FULL BUILD */}
      <CabinetDecisionMatrix />

      {/* 5. CRAFTSMANSHIP & CONSTRUCTION STANDARDS */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Cabinetry Standards" : "Estándares de Fabricación"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Built to Outlast Everyday Living"
                : "Fabricados para Superar el Uso Cotidiano"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Every cabinet is engineered with premium American hardwoods, Blum European hardware, and industrial 2K coatings that withstand desert temperatures and busy family households."
                : "Cada gabinete se construye con maderas nobles, herrajes europeos Blum y lacas industriales 2K capaces de resistir el clima desértico y el ajetreo diario."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-md space-y-4 hover:border-[#B85D3B] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAE2D5] border border-[#DFD6C6] flex items-center justify-center text-[#B85D3B]">
                  <CheckCircle size={20} weight="fill" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#261F1A]">
                  {locale === "en" ? std.titleEn : std.titleEs}
                </h3>
                <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
                  {locale === "en" ? std.descEn : std.descEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE 7-STAGE CRAFT CHRONOLOGY */}
      <CraftChronology />

      {/* 7. REAL PHOENIX KITCHEN ARCHIVE */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Compass size={14} />
              <span>{locale === "en" ? "Photographic Archive" : "Registro Fotográfico de Obras"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Completed Kitchens Across Phoenix"
                : "Cocinas Realizadas en Phoenix y Alrededores"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Browse our authentic portfolio of recent custom kitchen installations and 2K cabinet transformations."
                : "Explora nuestro portafolio auténtico de instalaciones recientes de cocinas a medida y transformaciones con lacas 2K."}
            </p>
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl">
            <RealPortfolioShowcase initialCategory="kitchens" />
          </div>
        </div>
      </section>

      {/* 8. ATELIER SAMPLE BOX CONCIERGE */}
      <SampleBoxConcierge />

      {/* 9. CONSULTATION CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#EAE2D5] text-[#1A1410] border-t border-[#DFD6C6] text-center relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B85D3B]/10 blur-[130px] rounded-full" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#1A1410]">
              {locale === "en"
                ? "Plan Your Custom Kitchen Consultation"
                : "Planea la Transformación de tu Cocina"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Schedule an in-home evaluation with Raul Burgos to review layouts, take laser measurements, and explore physical door samples."
                : "Agenda una visita a domicilio con Raul Burgos para revisar distribución, tomar medidas con láser y explorar muestras de puertas."}
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
