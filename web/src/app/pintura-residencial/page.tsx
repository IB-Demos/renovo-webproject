"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { PaintSimulatorLab } from "@/components/workbench/PaintSimulatorLab";
import { RealPortfolioShowcase } from "@/components/workbench/RealPortfolioShowcase";
import { AtelierVideoReelsShowcase } from "@/components/architectural/AtelierVideoReelsShowcase";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle,
  Sun,
  Drop,
  Compass,
} from "@phosphor-icons/react";

export default function ResidentialPaintingPage() {
  const { locale, setActiveRoom } = useRenovo();

  React.useEffect(() => {
    setActiveRoom("entryway");
  }, [setActiveRoom]);

  const protocols = [
    {
      code: "PREP 01",
      icon: ShieldCheck,
      titleEn: "Festool HEPA Dustless Sanding & Etching",
      titleEs: "Lijado con Extracción HEPA Festool",
      descEn: "We abrade surfaces mechanically to virgin profiles while capturing 99.97% of particulates, ensuring pure adhesion without contaminating your interior living air.",
      descEs: "Lijamos mecánicamente hasta abrir el poro sin levantar polvo gracias al sistema de aspiración cerrada Festool de grado hospitalario.",
    },
    {
      code: "PREP 02",
      icon: Drop,
      titleEn: "Moisture-Testing & High-Expansion Elastomeric Caulk",
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
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT 7 COLS: COMMERCIAL STORYTELLING */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410] text-[#FCFAF7] border border-[#C59B27]/40 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                  <span>{locale === "en" ? "FINE ARCHITECTURAL COATINGS · PHOENIX, AZ" : "PINTURA RESIDENCIAL FINA · PHOENIX, AZ"}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-[#B85D3B] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs">
                  <Sun size={14} weight="fill" />
                  <span>{locale === "en" ? "Desert UV Tested · HEPA Dustless" : "Filtro UV para Arizona · Cero Polvo HEPA"}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-serif text-[#1A1410] tracking-tight leading-[1.08]">
                {locale === "en"
                  ? "Architectural Residential & Desert UV Exterior Coatings."
                  : "Pintura Residencial Fina y Protección UV para Exteriores."}
              </h1>

              <p className="text-base sm:text-lg text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "Hospital-grade HEPA extraction sanding, zero-VOC interior velvet enamels, and heavy-body elastomeric acrylics engineered to withstand 115°F Arizona solar radiation without chalking or fading."
                  : "Lijado con aspiración sellada HEPA, esmaltes aterciopelados 0-VOC para interiores y recubrimientos elastoméricos de alto espesor diseñados para resistir más de 45°C de calor desértico sin decoloración."}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/cotizador"
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto transition-all"
                >
                  <span>{locale === "en" ? "Instant Painting Estimator" : "Cotizar Proyecto de Pintura"}</span>
                  <ArrowRight size={16} weight="bold" />
                </Link>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control min-h-[52px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs transition-colors"
                >
                  <Phone size={16} className="text-[#B85D3B]" />
                  <span>{locale === "en" ? "Call Raul Burgos" : "Llamar a Raul Burgos"}: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#DFD6C6] grid grid-cols-3 gap-3 text-left">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">99.97% {locale === "en" ? "HEPA" : "HEPA"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Hospital-grade dust containment" : "Cero polvo en tu residencia"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">100% {locale === "en" ? "UV REFLECT" : "REFLECTANTE"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Resists 115°F desert oxidation" : "Inmune al sol intenso de Arizona"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">0-VOC {locale === "en" ? "SAFE" : "SEGURO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Odorless family & pet safe" : "Sin olor, seguro para familias"}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: SHOWCASE CARD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/painting-interior/interior-01.jpg"
                    alt="Renovo Architectural Painting Showcase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold">
                    Arcadia Residence
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-bold text-[#1A1410]">
                    Velvet Matte Washable
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#DFD6C6] text-[#1A1410] shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-[#1A1410]">
                      {locale === "en" ? "Interior Velvet Ceiling & Trim" : "Plafones Aterciopelados y Molduras"}
                    </span>
                    <span className="font-mono text-[10px] text-[#B85D3B] font-bold">RENOVO COATINGS</span>
                  </div>
                  <p className="text-[11px] text-[#3D3228] leading-snug">
                    {locale === "en"
                      ? "Seamless light dispersion with zero brush lap marks. High-adhesion urethane enamel on casing and baseboards."
                      : "Dispersión de luz perfecta sin marcas de empalme. Esmaltes de poliuretano de alta resistencia en zoclos y molduras."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CRAFTSMANSHIP & PREPARATION PROTOCOLS */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Surface Protocol" : "Protocolo de Preparación"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "The Science of High-Durability Preparation"
                : "La Ciencia Detrás de una Preparación Duradera"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
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
                  className="p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-md space-y-5 hover:border-[#B85D3B] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] flex items-center justify-center text-[#B85D3B]">
                      <IconComp size={22} />
                    </div>
                    <span className="text-xs font-serif text-[#B85D3B] font-bold">
                      {proto.code}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#261F1A]">
                    {locale === "en" ? proto.titleEn : proto.titleEs}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
                    {locale === "en" ? proto.descEn : proto.descEs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PAINT & FINISH SIMULATOR */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Compass size={14} />
              <span>{locale === "en" ? "Color Simulator" : "Simulador de Color"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Test Pigments on Architectural Substrates"
                : "Experimenta con Pigmentos en Muros y Fachadas"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Evaluate light reflectance, undertones, and velvet sheens across interior and exterior scenarios."
                : "Evalúa reflectancia de luz, subtonos y tersuras en escenarios interiores y exteriores."}
            </p>
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl">
            <PaintSimulatorLab />
          </div>
        </div>
      </section>

      {/* 3B. EXTERIOR FIELD REELS SHOWCASE */}
      <AtelierVideoReelsShowcase initialFilter="exterior" compact />

      {/* 4. REAL PAINTING & FINISHES ARCHIVE */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Portfolio Archive" : "Archivo de Obras"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Completed Coatings Across the Valley"
                : "Proyectos Realizados en el Valle"}
            </h2>
          </div>
          <div className="rounded-3xl p-6 sm:p-8 bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl">
            <RealPortfolioShowcase initialCategory="interior" />
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#EAE2D5] text-[#1A1410] border-t border-[#DFD6C6] text-center relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#1A1410]">
              {locale === "en"
                ? "Schedule an Architectural Color Evaluation"
                : "Agenda una Evaluación de Color y Muros"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "We test moisture, evaluate substrate adhesion, and provide physical oversized color sample cards in your home's natural light."
                : "Revisamos humedad con higrómetro, evaluamos adherencia y aplicamos muestras de color bajo la luz natural de tus espacios."}
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
