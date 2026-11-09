"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  CurrencyCircleDollar,
  Wrench,
  ArrowLeft,
  Sparkle,
} from "@phosphor-icons/react";

export default function TermsAndConditionsPage() {
  const { locale } = useRenovo();

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1A1410] pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-serif text-[#615245]">
          <Link href="/" className="hover:text-[#B85D3B] inline-flex items-center gap-1 transition-colors">
            <ArrowLeft size={14} />
            <span>{locale === "en" ? "Home" : "Inicio"}</span>
          </Link>
          <span>/</span>
          <span className="font-bold text-[#1A1410]">{locale === "en" ? "Terms & Conditions" : "Términos y Condiciones"}</span>
        </div>

        {/* Header */}
        <header className="space-y-4 border-b border-[#DFD6C6] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#DFD6C6] text-[#8C3B1E] text-xs font-mono font-bold uppercase tracking-wider">
            <FileText size={16} weight="bold" />
            <span>{locale === "en" ? "Service Agreement & Craft Standards" : "Acuerdo de Servicio y Estándares de Taller"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1410] tracking-tight">
            {locale === "en" ? "Terms & Conditions" : "Términos y Condiciones"}
          </h1>
          <p className="text-sm sm:text-base text-[#615245] leading-relaxed max-w-2xl">
            {locale === "en"
              ? "Effective Date: November 9, 2026 · Renovo Painting Solutions LLC operates with total transparency, clear craftsman pricing, and strict adherence to Arizona ROC standards."
              : "Fecha de vigencia: 9 de noviembre de 2026 · Renovo Painting Solutions LLC opera con transparencia total, precios de artesano claros y estricto apego a los estándares ROC de Arizona."}
          </p>
        </header>

        {/* 1. Identification */}
        <section className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-3 text-sm">
          <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "1. Contracting Party & Licensing" : "1. Parte Contratante y Licencias"}
          </h2>
          <p className="text-[#261F1A] leading-relaxed">
            {locale === "en"
              ? "All proposals, agreements, and craft execution are contracted directly with Renovo Painting Solutions LLC (owner & master craftsman Raul Burgos), operating out of our workshop at 2231 W Shangri La Rd, Phoenix, AZ 85029. We are ROC licensed and fully insured in Arizona."
              : "Todas las propuestas, contratos y trabajos son suscritos directamente con Renovo Painting Solutions LLC (titular y maestro artesano Raul Burgos), con taller en 2231 W Shangri La Rd, Phoenix, AZ 85029. Contamos con licencia ROC y seguro de responsabilidad civil vigente en Arizona."}
          </p>
        </section>

        {/* 2. Estimates vs Binding Proposal */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "2. Estimates, Proposals & Digital Laser Measure" : "2. Estimaciones, Propuestas y Medición Láser en Sitio"}
          </h2>
          <p>
            {locale === "en"
              ? "Estimates generated online through our portal or concierge are non-binding budgetary baselines based on client-provided square footage and door counts. Final binding contract proposals are established solely after master craftsman Raul Burgos conducts an in-home digital laser audit to measure floor, ceiling, and wall plumb deviations."
              : "Las estimaciones generadas en línea a través de nuestro cotizador o asistente son cálculos presupuestarios preliminares no vinculantes basados en las dimensiones provistas por el cliente. Las propuestas contractuales vinculantes definitivas se formalizan únicamente tras la auditoría técnica en sitio realizada personalmente por Raul Burgos con medición digital láser."}
          </p>
        </section>

        {/* 3. Transparent Pricing & Zero Hidden Charges */}
        <section className="p-6 rounded-2xl bg-[#EBF3EA] border border-[#2E6B4E]/30 space-y-3 text-sm sm:text-base text-[#1B4332]">
          <h2 className="text-xl font-serif font-bold flex items-center gap-2">
            <CurrencyCircleDollar size={24} weight="bold" className="text-[#2E6B4E]" />
            <span>{locale === "en" ? "3. Transparent Pricing Commitment (Zero Hidden Fees)" : "3. Compromiso de Precios Transparentes (Cero Cobros Ocultos)"}</span>
          </h2>
          <p className="leading-relaxed">
            {locale === "en"
              ? "Our binding proposals provide a transparent, all-inclusive price. Every kitchen refacing, custom millwork, or painting contract clearly covers:"
              : "Nuestras propuestas vinculantes presentan un precio íntegro y transparente. Cada contrato de refacing de gabinetes, ebanistería o pintura desglosa con exactitud:"}
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>{locale === "en" ? "Complimentary on-site laser measurements and digital layout plan." : "Medición láser en sitio y levantamiento digital sin costo."}</li>
            <li>{locale === "en" ? "All specified solid hardwoods, plywood boxes, and soft-close Blum hardware." : "Maderas macizas seleccionadas, cajas y bisagras/correderas Blum de cierre suave."}</li>
            <li>{locale === "en" ? "Factory spray booth coating with Italian 2K catalyzed polyurethane." : "Esmaltado en cabina industrial con poliuretano catalizado 2K italiano."}</li>
            <li>{locale === "en" ? "Full clean-room plastic containment and floor masking in your home." : "Encintado hermético y sellado con plásticos de grado quirófano en tu residencia."}</li>
            <li>{locale === "en" ? "Final site cleanup, hardware adjustment, and debris haul-away." : "Ajuste milimétrico final de puertas, limpieza profunda y retiro de residuos."}</li>
          </ul>
          <p className="text-xs sm:text-sm font-semibold">
            {locale === "en"
              ? "✓ Zero franchise royalties, zero middleman sales commissions, and zero surprise travel surcharges within the Greater Phoenix Valley."
              : "✓ Cero regalías de franquicia, cero comisiones de vendedores intermediarios y cero cargos sorpresa de traslado en el Valle de Phoenix."}
          </p>
        </section>

        {/* 4. Natural Wood Character & Client Approvals */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "4. Natural Hardwood Characteristics & Finish Approvals" : "4. Características de la Madera Maciza y Aprobación de Muestras"}
          </h2>
          <p>
            {locale === "en"
              ? "Solid hardwoods (White Oak, Hard Maple, American Walnut) are organic materials. Natural variations in grain, subtle mineral marks, and growth rings are inherent signatures of genuine wood, not structural defects. Before spraying full kitchen sets or milling custom units, clients approve physical sample boards in their home's natural light."
              : "Las maderas nobles macizas (Roble Blanco, Maple, Nogal Americano) son materiales vivos y orgánicos. Variaciones de veta, marcas minerales sutiles y cambios de tonalidad son características intrínsecas de la madera auténtica, no defectos. Antes de pintar gabinetes o ensamblar cocinas, el cliente revisa y aprueba muestras físicas reales bajo la iluminación natural de su hogar."}
          </p>
        </section>

        {/* 5. Warranty & Guarantee */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "5. Workmanship & Coating Warranty" : "5. Garantía de Mano de Obra y Recubrimientos"}
          </h2>
          <p>
            {locale === "en"
              ? "Renovo guarantees its 2K catalyzed polyurethane spray finishes against peeling, flaking, or delamination for 3 years under normal residential care. Hardware (Blum hinges and drawer runners) is backed by the manufacturer's lifetime mechanical replacement warranty. Full warranty terms and recommended pH-neutral cleaning protocols are provided upon project completion."
              : "Renovo garantiza sus acabados de laca 2K catalizada industrial contra desprendimientos, ampollas o descascarillado por 3 años bajo uso residencial normal. Las bisagras y correderas Blum cuentan con garantía mecánica de por vida del fabricante. La póliza de garantía y protocolos de cuidado con jabones de pH neutro se entregan formalmente al concluir la obra."}
          </p>
        </section>

        {/* 6. Jurisdiction & Governing Law */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "6. Governing Law & Dispute Resolution" : "6. Legislación Aplicable y Jurisdicción"}
          </h2>
          <p>
            {locale === "en"
              ? "These terms and all contracting agreements are governed by the laws of the State of Arizona. Any legal dispute or claim arising from work conducted shall be resolved in the competent courts of Maricopa County, Arizona."
              : "Estos términos y cualquier contrato de obra se rigen por las leyes del Estado de Arizona. Cualquier controversia será resuelta de buena fe y, en su caso, en los tribunales competentes del Condado de Maricopa, Arizona."}
          </p>
        </section>

        {/* Direct Contact Footer */}
        <footer className="pt-8 border-t border-[#DFD6C6] text-xs text-[#615245] space-y-2">
          <p>
            Renovo Painting Solutions LLC · 2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029 · Direct: (602) 550-4369 · raul@renovoaz.com
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/privacidad" className="text-[#B85D3B] hover:underline font-bold">
              {locale === "en" ? "Privacy Policy" : "Política de Privacidad"}
            </Link>
            <span>·</span>
            <Link href="/reembolsos" className="text-[#B85D3B] hover:underline font-bold">
              {locale === "en" ? "Refund Policy" : "Política de Reembolsos"}
            </Link>
            <span>·</span>
            <Link href="/cookies" className="text-[#B85D3B] hover:underline font-bold">
              {locale === "en" ? "Cookie Policy" : "Política de Cookies"}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
