"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { RealPortfolioShowcase } from "@/components/workbench/RealPortfolioShowcase";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  CheckCircle,
  Hammer,
  ShieldCheck,
  Compass,
} from "@phosphor-icons/react";

export default function KitchensAndMillworkPage() {
  const { locale, setActiveRoom } = useRenovo();

  React.useEffect(() => {
    setActiveRoom("kitchen");
  }, [setActiveRoom]);

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
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#B85D3B]/10 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT 7 COLS: COMMERCIAL STORYTELLING & VALUE CONVERSION */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410] text-[#FCFAF7] border border-[#C59B27]/40 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
                  <span>01 · {locale === "en" ? "CASA RENOVO CULINARY ATELIER" : "CASA RENOVO · TALLER CULINARIO"}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-[#B85D3B] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs">
                  <ShieldCheck size={14} weight="fill" />
                  <span>{locale === "en" ? "KCMA Chemical Tested · 2K Lacquers" : "Norma KCMA · Lacas 2K Catalizadas"}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-serif text-[#1A1410] tracking-tight leading-[1.08]">
                {locale === "en"
                  ? "Bespoke Luxury Kitchens & Factory 2K Refacing."
                  : "Cocinas de Autor a Medida y Refacing 2K de Fábrica."}
              </h1>

              <p className="text-base sm:text-lg text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "We elevate Arizona residences with furniture-grade solid maple dovetail drawers, custom island waterfall framing, and climate-controlled spray booth 2K lacquers that resist boiling oils, heavy steam, and desert heat without peeling or yellowing."
                  : "Transformamos residencias en Arizona con cajones de arce en cola de milano, islas a medida y lacas de poliuretano 2K aplicadas en cabina profesional, resistentes al calor, vapor y aceite caliente sin descascararse."}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/cotizador"
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto transition-all"
                >
                  <span>{locale === "en" ? "Instant Kitchen Estimator" : "Cotizar Proyecto de Cocina"}</span>
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

              {/* Commercial Proof & Trust Strip */}
              <div className="pt-4 border-t border-[#DFD6C6] grid grid-cols-3 gap-3 text-left">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">10+ {locale === "en" ? "YEARS" : "AÑOS"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Crafting luxury across the Valley" : "Ebanistería fina en Phoenix"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">100K {locale === "en" ? "CYCLES" : "CICLOS"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Blum soft-close concealed hardware" : "Herrajes Blum de cierre suave"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">0% {locale === "en" ? "PEELING" : "DESPRENDIMIENTO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Molecular cross-linked 2K finish" : "Adhesión química molecular 2K"}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: HERO SHOWCASE STAGE CARD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/kitchens/kitchen-14.jpg"
                    alt="Renovo Bespoke Kitchen Showcase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold">
                    Paradise Valley Residence
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-bold text-[#1A1410]">
                    2K Satin Velvet 18%
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#DFD6C6] text-[#1A1410] shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-[#1A1410]">
                      {locale === "en" ? "Dual-Tone Architectural Island" : "Isla Arquitectónica Bicolor"}
                    </span>
                    <span className="font-mono text-[10px] text-[#B85D3B] font-bold">RENOVO 2K</span>
                  </div>
                  <p className="text-[11px] text-[#3D3228] leading-snug">
                    {locale === "en"
                      ? "Midnight Indigo Slate island anchored by perimeter cabinetry in Navajo Alabaster. Solid 5/8\" maple dovetail boxes."
                      : "Isla en Azul Índigo Medianoche y gabinetes en Alabastro Navajo 2K. Cajones de arce macizo con ensamble en cola de milano."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CRAFTSMANSHIP & CONSTRUCTION STANDARDS */}
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

      {/* 3. REAL PHOENIX KITCHEN ARCHIVE */}
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

      {/* 4. CONSULTATION CALL TO ACTION */}
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
