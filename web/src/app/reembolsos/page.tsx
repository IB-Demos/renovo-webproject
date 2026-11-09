"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  CurrencyCircleDollar,
  CheckCircle,
  WarningCircle,
  Clock,
  ArrowLeft,
  FileText,
  Phone,
} from "@phosphor-icons/react";

export default function RefundPolicyPage() {
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
          <span className="font-bold text-[#1A1410]">{locale === "en" ? "Refund Policy" : "Política de Reembolsos"}</span>
        </div>

        {/* Header */}
        <header className="space-y-4 border-b border-[#DFD6C6] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EA] border border-[#2E6B4E]/30 text-[#2E6B4E] text-xs font-mono font-bold uppercase tracking-wider">
            <CurrencyCircleDollar size={16} weight="bold" />
            <span>{locale === "en" ? "Clear & Fair Consumer Terms" : "Términos Claros y Justos al Consumidor"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1410] tracking-tight">
            {locale === "en" ? "Refund & Cancellation Policy" : "Política de Reembolsos y Cancelaciones"}
          </h1>
          <p className="text-sm sm:text-base text-[#615245] leading-relaxed max-w-2xl">
            {locale === "en"
              ? "Effective Date: November 9, 2026 · Renovo Painting Solutions LLC maintains transparent, equitable cancellation and deposit terms."
              : "Fecha de vigencia: 9 de noviembre de 2026 · Renovo Painting Solutions LLC mantiene términos equitativos y transparentes de cancelación y depósitos."}
          </p>
        </header>

        {/* 1. Complimentary Estimates */}
        <section className="p-6 rounded-2xl bg-[#EBF3EA] border border-[#2E6B4E]/30 space-y-3 text-sm sm:text-base text-[#1B4332]">
          <h2 className="text-xl font-serif font-bold flex items-center gap-2 text-[#2E6B4E]">
            <CheckCircle size={22} weight="fill" />
            <span>{locale === "en" ? "1. 100% Free Consultation & Estimates ($0 Fee)" : "1. Consultas y Presupuestos 100% Gratuitos (Costo $0)"}</span>
          </h2>
          <p className="leading-relaxed">
            {locale === "en"
              ? "All initial phone inquiries, workshop consultations, digital PDF proposals, and in-home laser measurements by Raul Burgos are completely free with zero financial obligation. If you decide not to proceed with a project after receiving a proposal, you owe nothing."
              : "Todas las consultas iniciales, propuestas en PDF y visitas de medición láser en sitio realizadas por Raul Burgos son completamente gratuitas y sin compromiso alguno. Si decides no proceder con el proyecto tras recibir la propuesta formal, no debes pagar absolutamente nada."}
          </p>
        </section>

        {/* 2. Custom Cabinetry & Custom Millwork Deposits */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "2. Custom Cabinetry & Milled Woodwork Deposits" : "2. Depósitos para Gabinetes y Ebanistería a Medida"}
          </h2>
          <p>
            {locale === "en"
              ? "Because cabinet refacing doors, drawer fronts, and built-in units are custom manufactured to the exact millimeter specifications of your home, deposit and cancellation terms are structured as follows:"
              : "Dado que las puertas de refacing, frentes de cajón y libreros a medida se fabrican al milímetro con las medidas exactas de tu residencia, las cancelaciones y depósitos operan del siguiente modo:"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-2 text-xs sm:text-sm">
              <strong className="font-serif font-bold text-base text-[#1A1410] block">
                {locale === "en" ? "Prior to Lumber Cutting (100% Refundable):" : "Antes del Corte de Madera (100% Reembolsable):"}
              </strong>
              <p className="text-[#3D3228] leading-relaxed">
                {locale === "en"
                  ? "If you cancel prior to the physical milling or cutting of your specified hardwood lumber in our workshop, your deposit is 100% refunded to your original payment method."
                  : "Si cancelas antes de que comience el corte físico de las maderas nobles en taller, se te reembolsa el 100% del depósito por el mismo método de pago."}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-2 text-xs sm:text-sm">
              <strong className="font-serif font-bold text-base text-[#1A1410] block">
                {locale === "en" ? "After Precision Milling (Material Cost Deduction):" : "Tras el Corte de Piezas (Deducción de Material):"}
              </strong>
              <p className="text-[#3D3228] leading-relaxed">
                {locale === "en"
                  ? "Once raw hardwood slabs have been custom-cut to your home's unique dimensions, those materials cannot be repurposed. In this case, deposits are refunded minus documented direct lumber and hardware procurement costs."
                  : "Una vez cortadas las maderas a las dimensiones únicas de tu cocina, ese material no puede reutilizarse. El depósito se reembolsará deduciendo únicamente el costo directo de adquisición de la madera y herrajes cortados."}
              </p>
            </div>
          </div>
        </section>

        {/* 3. House Painting & Refinishing */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "3. Residential & Commercial Painting Projects" : "3. Proyectos de Pintura Residencial y Comercial"}
          </h2>
          <p>
            {locale === "en"
              ? "For residential interior, exterior stucco, or commercial painting services, scheduled dates may be canceled or rescheduled without penalty up to 7 business days prior to the start date. Within 7 days of the scheduled commencement, deposits are refunded minus any custom paint tints already mixed at the paint distributor."
              : "Para proyectos de pintura interior o exterior, las fechas programadas pueden cancelarse o reagendarse sin penalización hasta 7 días hábiles antes de la fecha pactada. Con menos de 7 días, el depósito se reembolsará deduciendo únicamente las pinturas especiales ya preparadas e igualadas en distribuidora."}
          </p>
        </section>

        {/* 4. How to Request a Cancellation or Refund */}
        <section className="p-6 rounded-2xl bg-[#F4EFE6] border-2 border-[#DFD6C6] space-y-3 text-sm sm:text-base">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1A1410] flex items-center gap-2">
            <Clock size={22} className="text-[#B85D3B]" weight="bold" />
            <span>{locale === "en" ? "4. How to Request a Cancellation or Refund" : "4. Cómo Solicitar una Cancelación o Reembolso"}</span>
          </h2>
          <p className="text-[#261F1A]">
            {locale === "en"
              ? "To request a cancellation or refund, please reach out directly to owner Raul Burgos in writing or by phone. Approved refunds are processed back to your original payment method within 5 to 10 business days."
              : "Para solicitar una cancelación o reembolso, contacta directamente al maestro artesano Raul Burgos por escrito o por teléfono. Los reembolsos aprobados se procesan en un plazo de 5 a 10 días hábiles."}
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#B85D3B]" />
              <a href={COMPANY_INFO.phoneHref} className="font-bold underline text-[#1A1410]">
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Email:</span>
              <a href="mailto:raul@renovoaz.com?subject=Cancellation%20or%20Refund%20Request" className="font-bold underline text-[#B85D3B]">
                raul@renovoaz.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <footer className="pt-8 border-t border-[#DFD6C6] text-xs text-[#615245] space-y-2">
          <p>
            Renovo Painting Solutions LLC · 2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029 · (602) 550-4369
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/privacidad" className="text-[#B85D3B] hover:underline font-bold">
              {locale === "en" ? "Privacy Policy" : "Política de Privacidad"}
            </Link>
            <span>·</span>
            <Link href="/terminos" className="text-[#B85D3B] hover:underline font-bold">
              {locale === "en" ? "Terms & Conditions" : "Términos y Condiciones"}
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
