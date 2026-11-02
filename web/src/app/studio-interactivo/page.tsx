"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRenovo } from "@/context/RenovoContext";
import { SpatialHomeExperience } from "@/components/architectural/SpatialHomeExperience";
import { ArchitecturalDraftingTable } from "@/components/architectural/ArchitecturalDraftingTable";
import { DesertLightEngine } from "@/components/architectural/DesertLightEngine";
import { CabinetDecisionMatrix } from "@/components/architectural/CabinetDecisionMatrix";
import { ExplodedCabinetJoinery } from "@/components/architectural/ExplodedCabinetJoinery";
import { CraftChronology } from "@/components/architectural/CraftChronology";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
import { ParametricScopeEstimator } from "@/components/workbench/ParametricScopeEstimator";
import {
  Sparkle,
  Eye,
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
    initialParam === "spatial"
      ? "spatial"
      :
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
    "spatial" | "drafting" | "light" | "matrix" | "joinery" | "chronology" | "samplebox" | "estimator"
  >(initialTab);

  const tools = [
    {
      id: "spatial" as const,
      icon: Eye,
      titleEn: "Spatial Tour",
      titleEs: "Recorrido Espacial",
      descEn: "Room-by-room walkthrough",
      descEs: "Casa Renovo interactiva",
    },

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
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#C59B27]/10 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT 7 COLS: COMMERCIAL ATELIER INTRO */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410] text-[#FCFAF7] border border-[#C59B27]/40 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
                  <span>{locale === "en" ? "DIGITAL ARCHITECTURAL WORKBENCH" : "MESA DE TRABAJO ARQUITECTÓNICA"}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-[#B85D3B] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs">
                  <Sparkle size={14} weight="fill" />
                  <span>{locale === "en" ? "7 Precision Tools" : "7 Herramientas en Vivo"}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-serif text-[#1A1410] tracking-tight leading-[1.08]">
                {locale === "en"
                  ? "Experience Your Space Before a Single Board is Cut."
                  : "Visualiza tu Espacio Antes de Cortar la Primera Madera."}
              </h1>

              <p className="text-base sm:text-lg text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "Our proprietary digital atelier puts custom woodcrafting and industrial 2K finishes at your fingertips. Simulate natural desert light from 2700K to 5500K, review exploded joinery, test colorimetry, and estimate investment with absolute clarity."
                  : "Nuestro estudio digital pone la ebanistería a medida y los acabados catalizados 2K a tu alcance. Simula la luz solar de Arizona de 2700K a 5500K, examina ensambles, prueba pigmentos y calcula tu presupuesto con total claridad."}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("spatial")}
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto transition-all"
                >
                  <span>{locale === "en" ? "Launch Spatial Walkthrough" : "Iniciar Recorrido Espacial"}</span>
                  <ArrowRight size={16} weight="bold" />
                </button>

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
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">2700K-5500K</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Real Arizona diurnal lighting engine" : "Simulador solar diurno de Arizona"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">7 {locale === "en" ? "MODULES" : "MÓDULOS"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Interactive drafting & joinery tools" : "Herramientas de planos y despiece"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">{locale === "en" ? "PHYSICAL" : "FÍSICO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Sample box delivered to your home" : "Muestras táctiles en tu domicilio"}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: SHOWCASE CARD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/blueprints-and-docs/custom-furniture-04.jpg"
                    alt="Renovo Atelier Digital Drafting"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold">
                    Phoenix Digital Atelier
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-bold text-[#1A1410]">
                    Interactive Suite
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#DFD6C6] text-[#1A1410] shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-[#1A1410]">
                      {locale === "en" ? "Interactive Workbench" : "Mesa de Trabajo Digital"}
                    </span>
                    <span className="font-mono text-[10px] text-[#B85D3B] font-bold">RENOVO LAB</span>
                  </div>
                  <p className="text-[11px] text-[#3D3228] leading-snug">
                    {locale === "en"
                      ? "Switch between tabs below to test elevations, joinery details, and light temperatures."
                      : "Usa las pestañas inferiores para alternar entre planos, despieces y simulación de luz."}
                  </p>
                </div>
              </div>
            </div>
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
        {activeTab === "spatial" && <SpatialHomeExperience />}
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
      <section className="py-20 lg:py-28 bg-[#EAE2D5] text-[#1A1410] border-t border-[#DFD6C6] relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B85D3B]/10 blur-[130px] rounded-full" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1A1410]">
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
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={15} className="text-[#B85D3B]" />
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
