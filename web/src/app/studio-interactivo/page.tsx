"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRenovo } from "@/context/RenovoContext";
import { KitchenCabinetStudio } from "@/components/workbench/KitchenCabinetStudio";
import { PaintSimulatorLab } from "@/components/workbench/PaintSimulatorLab";
import { BlueprintAnatomyExplorer } from "@/components/workbench/BlueprintAnatomyExplorer";
import { ParametricScopeEstimator } from "@/components/workbench/ParametricScopeEstimator";
import {
  Sparkle,
  PaintBrush,
  Compass,
  Calculator,
  ArrowRight,
  Phone,
} from "@phosphor-icons/react";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";

function InteractiveStudioContent() {
  const { locale, t } = useRenovo();
  const searchParams = useSearchParams();
  const initialParam = searchParams.get("tab");
  const initialTab =
    initialParam === "paint"
      ? "paint"
      : initialParam === "blueprint"
      ? "blueprint"
      : initialParam === "estimator"
      ? "estimator"
      : "cabinet";

  const [activeTab, setActiveTab] = useState<"cabinet" | "paint" | "blueprint" | "estimator">(
    initialTab
  );

  const tabs = [
    {
      id: "cabinet" as const,
      icon: Sparkle,
      titleEn: "Kitchen Cabinet Atelier",
      titleEs: "Estudio de Gabinetes",
      descEn: "Doors, species & finishes",
      descEs: "Puertas, maderas y lacas",
    },
    {
      id: "paint" as const,
      icon: PaintBrush,
      titleEn: "Light & Color Simulator",
      titleEs: "Simulador de Luz y Color",
      descEn: "Wall tones in daylight",
      descEs: "Luz solar y paletas",
    },
    {
      id: "blueprint" as const,
      icon: Compass,
      titleEn: "Custom Furniture Explorer",
      titleEs: "Anatomía de Ebanistería",
      descEn: "Arches, media walls & bars",
      descEs: "Nichos, cavas y centros TV",
    },
    {
      id: "estimator" as const,
      icon: Calculator,
      titleEn: "Project Cost Estimator",
      titleEs: "Cotizador Transparente",
      descEn: "Real-time investment tiers",
      descEs: "Cálculo en tiempo real",
    },
  ];

  return (
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HEADER BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "INTERACTIVE DESIGN ATELIER" : "ESTUDIO DIGITAL INTERACTIVO"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#FAF8F5] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Experience Your Space Before a Single Board is Cut."
                : "Visualiza tu Espacio Antes de Cortar la Primera Madera."}
            </h1>

            <p className="text-base sm:text-xl text-[#B8AEA2] font-light leading-relaxed">
              {locale === "en"
                ? "Our proprietary digital atelier puts custom woodcrafting and industrial 2K finishes at your fingertips. Customize doors, test architectural colors, and inspect construction details."
                : "Nuestro estudio digital pone la ebanistería a medida y los acabados catalizados 2K a tu alcance. Personaliza puertas, simula iluminación y analiza ensambles."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ATELIER TABS & WORKSPACE */}
      <section className="py-16 lg:py-24 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Tab Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`interactive-control p-5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "bg-white/10 text-white border-[var(--gold)] shadow-xl"
                      : "bg-white/5 text-[#D4CBBF] border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon
                      size={22}
                      className={isSelected ? "text-[var(--gold)]" : "text-[#8A7F73]"}
                      weight={isSelected ? "fill" : "regular"}
                    />
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                    )}
                  </div>
                  <div className="text-base font-serif font-normal text-white">
                    {locale === "en" ? tab.titleEn : tab.titleEs}
                  </div>
                  <div className={`text-xs mt-0.5 ${isSelected ? "text-[#D8CFBF]" : "text-[#8A7F73]"}`}>
                    {locale === "en" ? tab.descEn : tab.descEs}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tool Viewport */}
          <div>
            {activeTab === "cabinet" && <KitchenCabinetStudio />}
            {activeTab === "paint" && <PaintSimulatorLab />}
            {activeTab === "blueprint" && <BlueprintAnatomyExplorer />}
            {activeTab === "estimator" && <ParametricScopeEstimator />}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#0E0C0A] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-5xl font-serif font-normal text-[#FAF8F5]">
              {locale === "en" ? "Ready to Bring This Design to Life?" : "¿Listo para Hacer Realidad este Diseño?"}
            </h3>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Save your configuration or schedule an on-site visit with Raul Burgos to verify measurements."
                : "Guarda tu configuración o agenda una visita en sitio con Raul Burgos para verificar medidas."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[50px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Book Consultation" : "Agendar Consulta"}</span>
                <ArrowRight size={15} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[50px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={15} className="text-[var(--gold)]" />
                <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
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
        <div className="min-h-[60vh] flex items-center justify-center bg-[#0E0C0A] text-[#B8AEA2] font-mono text-xs uppercase tracking-wider">
          Loading Renovo Digital Atelier...
        </div>
      }
    >
      <InteractiveStudioContent />
    </Suspense>
  );
}
