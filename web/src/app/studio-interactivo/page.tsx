"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRenovo } from "@/context/RenovoContext";
import { ArchitecturalDraftingTable } from "@/components/architectural/ArchitecturalDraftingTable";
import { DesertLightEngine } from "@/components/architectural/DesertLightEngine";
import { CabinetDecisionMatrix } from "@/components/architectural/CabinetDecisionMatrix";
import { ExplodedCabinetJoinery } from "@/components/architectural/ExplodedCabinetJoinery";
import { CraftChronology } from "@/components/architectural/CraftChronology";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
import { ParametricScopeEstimator } from "@/components/workbench/ParametricScopeEstimator";
import {
  Sparkle,
  PaintBrush,
  Compass,
  Calculator,
  ArrowRight,
  Phone,
  Scales,
  Clock,
  Package,
  Stack,
} from "@phosphor-icons/react";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";

function InteractiveStudioContent() {
  const { locale, t } = useRenovo();
  const searchParams = useSearchParams();
  const initialParam = searchParams.get("tab");
  const initialTab =
    initialParam === "light"
      ? "light"
      : initialParam === "matrix"
      ? "matrix"
      : initialParam === "joinery"
      ? "joinery"
      : initialParam === "chronology"
      ? "chronology"
      : initialParam === "samplebox"
      ? "samplebox"
      : initialParam === "estimator"
      ? "estimator"
      : "drafting";

  const [activeTab, setActiveTab] = useState<
    "drafting" | "light" | "matrix" | "joinery" | "chronology" | "samplebox" | "estimator"
  >(initialTab);

  const tools = [
    {
      id: "drafting" as const,
      icon: Compass,
      titleEn: "Drafting Table",
      titleEs: "Restirador Arquitectónico",
      descEn: "Elevations to reality",
      descEs: "Planos a fotografía real",
    },
    {
      id: "light" as const,
      icon: PaintBrush,
      titleEn: "Desert Light Engine",
      titleEs: "Simulador de Luz",
      descEn: "2700K to 5500K Kelvin",
      descEs: "Colorimetría y sol de AZ",
    },
    {
      id: "matrix" as const,
      icon: Scales,
      titleEn: "Decision Matrix",
      titleEs: "Matriz de Decisión",
      descEn: "Refacing vs. Full Build",
      descEs: "Diagnóstico en 30 seg",
    },
    {
      id: "joinery" as const,
      icon: Stack,
      titleEn: "Exploded Joinery",
      titleEs: "Anatomía de Gabinete",
      descEn: "Dovetails & 3/4\" Plywood",
      descEs: "Capas de construcción",
    },
    {
      id: "chronology" as const,
      icon: Clock,
      titleEn: "Craft Chronology",
      titleEs: "Diario de Taller",
      descEn: "7-stage shop documentary",
      descEs: "Proceso paso a paso",
    },
    {
      id: "samplebox" as const,
      icon: Package,
      titleEn: "Sample Box Concierge",
      titleEs: "Caja de Muestras",
      descEn: "Tactile woods & 2K finish",
      descEs: "Muestras en tu hogar",
    },
    {
      id: "estimator" as const,
      icon: Calculator,
      titleEn: "Scope Estimator",
      titleEs: "Cotizador en Vivo",
      descEn: "Transparent project pricing",
      descEs: "Cálculo paramétrico",
    },
  ];

  return (
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HEADER BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Sparkle size={14} weight="fill" />
              <span>
                {locale === "en"
                  ? "Architectural Studio Suite · Interactive Workbench"
                  : "Estudio Digital Arquitectónico · Mesa de Trabajo"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold font-serif text-[#261F1A] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Experience Your Space Before a Single Board is Cut."
                : "Visualiza tu Espacio Antes de Cortar la Primera Madera."}
            </h1>

            <p className="text-base sm:text-xl text-[#3D3228] font-normal leading-relaxed">
              {locale === "en"
                ? "Our proprietary digital atelier puts custom woodcrafting and industrial 2K finishes at your fingertips. Switch between precision tools below to explore elevations, light simulation, and joinery details."
                : "Nuestro estudio digital pone la ebanistería a medida y los acabados catalizados 2K a tu alcance. Conmuta entre herramientas para explorar planos, luz y detalles de ensamble."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ATELIER TABS NAVIGATION */}
      <section className="py-6 bg-[#F4EFE6]/95 border-b border-[#DFD6C6] sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isSelected = activeTab === tool.id;
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => setActiveTab(tool.id)}
                  className={`interactive-control px-4 py-2.5 rounded-2xl border text-left transition-all shrink-0 flex items-center gap-2.5 min-h-[44px] ${
                    isSelected
                      ? "bg-[#B85D3B] text-[#FCFAF7] border-[#B85D3B] shadow-md font-semibold font-serif"
                      : "bg-[#FCFAF7] text-[#3D3228] border-[#DFD6C6] hover:border-[#261F1A] hover:text-[#261F1A] font-serif shadow-xs"
                  }`}
                >
                  <Icon
                    size={16}
                    weight={isSelected ? "bold" : "regular"}
                    className={isSelected ? "text-[#FCFAF7]" : "text-[#B85D3B]"}
                  />
                  <div className="text-xs">
                    <span>{locale === "en" ? tool.titleEn : tool.titleEs}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ACTIVE TOOL VIEWPORT */}
      <div>
        {activeTab === "drafting" && <ArchitecturalDraftingTable />}
        {activeTab === "light" && <DesertLightEngine />}
        {activeTab === "matrix" && <CabinetDecisionMatrix />}
        {activeTab === "joinery" && <ExplodedCabinetJoinery />}
        {activeTab === "chronology" && <CraftChronology />}
        {activeTab === "samplebox" && <SampleBoxConcierge />}
        {activeTab === "estimator" && (
          <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
              <div className="mb-12 max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
                  <Calculator size={14} />
                  <span>{locale === "en" ? "Parametric Estimator" : "Cotizador Paramétrico"}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
                  {locale === "en" ? "Calculate Your Investment in Seconds" : "Calcula tu Inversión en Segundos"}
                </h2>
                <p className="text-base text-[#3D3228] font-normal">
                  {locale === "en"
                    ? "Select your scope, cabinet count, wood choices, and finish level to generate an immediate estimate range."
                    : "Selecciona el alcance, número de puertas, maderas y nivel de acabado para ver el rango estimado al instante."}
                </p>
              </div>
              <div className="rounded-3xl p-6 sm:p-8 bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl">
                <ParametricScopeEstimator />
              </div>
            </div>
          </section>
        )}
      </div>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#261F1A] text-[#FAF8F5] relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B85D3B]/15 blur-[130px] rounded-full" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-5xl font-serif font-semibold text-[#FAF8F5]">
              {locale === "en" ? "Ready to Bring This Design to Life?" : "¿Listo para Hacer Realidad este Diseño?"}
            </h3>
            <p className="text-base text-[#3D3228] font-normal">
              {locale === "en"
                ? "Save your configuration or schedule an on-site visit with Raul Burgos to verify measurements."
                : "Guarda tu configuración o agenda una visita en sitio con Raul Burgos para verificar medidas."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Book Consultation" : "Agendar Consulta"}</span>
                <ArrowRight size={15} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={15} className="text-[var(--gold)]" />
                <span className="font-serif tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function InteractiveStudioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center bg-[#F4EFE6] text-[#3D3228] font-serif text-sm">
          Loading Renovo Digital Atelier...
        </div>
      }
    >
      <InteractiveStudioContent />
    </Suspense>
  );
}
