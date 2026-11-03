"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { BeforeAfterLab } from "@/components/workbench/BeforeAfterLab";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  Clock,
  CheckCircle,
  X,
} from "@phosphor-icons/react";

export default function TransformationsPage() {
  const { locale, setActiveRoom } = useRenovo();

  React.useEffect(() => {
    setActiveRoom("entryway");
  }, [setActiveRoom]);

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
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#B85D3B]/10 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT 7 COLS: COMMERCIAL VALUE */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410] text-[#FCFAF7] border border-[#C59B27]/40 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
                  <span>03 · {locale === "en" ? "CASA RENOVO EVIDENCE ARCHIVE" : "CASA RENOVO · CASOS REALES"}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-[#B85D3B] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs">
                  <Clock size={14} weight="fill" />
                  <span>{locale === "en" ? "Completed in 6-8 Days · Zero Demolition" : "En 6 a 8 Días Hábiles · Sin Demolición"}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-serif text-[#1A1410] tracking-tight leading-[1.08]">
                {locale === "en"
                  ? "Proven Factory 2K Transformations Across Arizona."
                  : "Transformaciones Reales 2K en Todo el Valle de Phoenix."}
              </h1>

              <p className="text-base sm:text-lg text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "Explore authentic before-and-after case studies in Paradise Valley, Scottsdale, Arcadia, and Peoria. See how 2K catalyzed spray saves homeowners $30,000 to $50,000 compared to full demolition, delivering superior velvet factory elegance in days."
                  : "Explora estudios de caso reales de antes y después en Paradise Valley, Scottsdale, Arcadia y Peoria. Descubre cómo la laca catalizada 2K ahorra entre $30,000 y $50,000 frente a una demolición total, brindando tersura de fábrica en pocos días."}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/cotizador"
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto transition-all"
                >
                  <span>{locale === "en" ? "Estimate Your Transformation" : "Cotizar mi Transformación"}</span>
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
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">6-8 {locale === "en" ? "DAYS" : "DÍAS"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Typical completion timeline" : "Tiempo habitual de entrega"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">60% {locale === "en" ? "SAVINGS" : "AHORRO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Compared to complete tear-out" : "Comparado con demolición completa"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">10+ {locale === "en" ? "YEARS" : "AÑOS"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Enduring factory finish" : "Durabilidad garantizada de fábrica"}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: SHOWCASE CARD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/kitchens/kitchen-14.jpg"
                    alt="Renovo Transformation Showcase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold">
                    Scottsdale Residence
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-bold text-[#1A1410]">
                    Zero Demolition
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#DFD6C6] text-[#1A1410] shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-[#1A1410]">
                      {locale === "en" ? "Honey Oak to Alabaster & Indigo" : "De Roble Antiguo a Alabastro e Índigo"}
                    </span>
                    <span className="font-mono text-[10px] text-[#B85D3B] font-bold">RENOVO 2K</span>
                  </div>
                  <p className="text-[11px] text-[#3D3228] leading-snug">
                    {locale === "en"
                      ? "Full architectural refacing in 7 working days. Spray-booth precision with zero mess in the living room."
                      : "Refacing arquitectónico completo en 7 días hábiles. Acabado de fábrica sin polvo en la sala."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BEFORE & AFTER INTERACTIVE LAB (All 4 Cases) */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <BeforeAfterLab />
        </div>
      </section>

      {/* 3. 2K CHEMICAL CHEMISTRY COMPARISON */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[#B85D3B] font-serif font-bold">
              {locale === "en" ? "TECHNICAL COMPARISON" : "COMPARATIVA TÉCNICA"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Renovo 2K Factory Coating vs. Standard House Paint"
                : "Laca Catalizada 2K Renovo vs. Pintura Tradicional"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Understand the molecular chemistry that makes our factory spray last 10+ years without chipping, peeling, or fading."
                : "Conoce la ciencia química que permite a nuestras lacas de cabina durar más de 10 años sin desportillarse ni perder brillo."}
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#DFD6C6] bg-[#F4EFE6]">
                    <th className="p-5 sm:p-6 text-xs uppercase tracking-wider font-serif font-bold text-[#3D3228]">
                      {locale === "en" ? "Parameter" : "Parámetro"}
                    </th>
                    <th className="p-5 sm:p-6 text-xs uppercase tracking-wider font-serif font-bold text-[#B85D3B] bg-[#B85D3B]/5 border-x border-[#DFD6C6]">
                      <div className="flex items-center gap-2">
                        <Sparkle size={15} weight="fill" />
                        <span>{locale === "en" ? "Renovo 2K Polyurethane" : "Renovo Poliuretano 2K"}</span>
                      </div>
                    </th>
                    <th className="p-5 sm:p-6 text-xs uppercase tracking-wider font-serif font-bold text-[#3D3228]">
                      {locale === "en" ? "Standard House Latex" : "Látex Tradicional de Muro"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DFD6C6] text-xs sm:text-sm">
                  {comparisonPoints.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F4EFE6]/50 transition-colors">
                      <td className="p-5 sm:p-6 font-serif font-semibold text-[#1A1410] w-1/4">
                        {locale === "en" ? row.featureEn : row.featureEs}
                      </td>
                      <td className="p-5 sm:p-6 text-[#261F1A] font-medium bg-[#B85D3B]/5 border-x border-[#DFD6C6] w-3/8">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle size={18} className="text-[#B85D3B] shrink-0 mt-0.5" weight="fill" />
                          <span>{locale === "en" ? row.renovoEn : row.renovoEs}</span>
                        </div>
                      </td>
                      <td className="p-5 sm:p-6 text-[#5A4D42] w-3/8">
                        <div className="flex items-start gap-2.5">
                          <X size={18} className="text-[#A34E2F] shrink-0 mt-0.5" />
                          <span>{locale === "en" ? row.standardEn : row.standardEs}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                ? "Evaluate Your Cabinets for 2K Transformation"
                : "Evalúa tus Gabinetes para una Transformación 2K"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Send us a few photos of your kitchen or book an in-home inspection. Raul will evaluate your door styles and provide a firm, transparent proposal."
                : "Envíanos fotos de tu cocina o agenda una visita. Raul evaluará tus puertas y te entregará una propuesta firme y transparente."}
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
