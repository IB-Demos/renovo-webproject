"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import {
  DOOR_PROFILES,
  ARCHITECTURAL_PIGMENTS,
  SHEEN_SPECS,
} from "@/lib/catalog-data/specs";
import { PushPin, Check, Sparkle } from "@phosphor-icons/react";

type FilterCategory = "all" | "profiles" | "coatings" | "systems";

export function MaterialCatalogGrid() {
  const { locale, t, addSample, removeSample, isInTray } = useRenovo();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const toggleItem = (item: {
    id: string;
    code: string;
    category: "profile" | "pigment" | "sheen" | "system";
    title: string;
    subtitle: string;
    hex?: string;
  }) => {
    if (isInTray(item.id)) {
      removeSample(item.id);
    } else {
      addSample(item);
    }
  };

  return (
    <div className="space-y-12 text-[#261F1A]">
      {/* Category Pills Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DFD6C6] pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B85D3B] font-mono">
          <Sparkle size={15} weight="fill" />
          <span>
            {locale === "en" ? "FILTER DESIGN ELEMENTS" : "FILTRAR POR CATEGORÍA"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Catalog category filter">
          {(
            [
              { id: "all", label: t.catalogSection.filterAll },
              { id: "profiles", label: t.catalogSection.filterProfiles },
              { id: "coatings", label: t.catalogSection.filterCoatings },
              { id: "systems", label: t.catalogSection.filterSystems },
            ] as const
          ).map((tab) => {
            const active = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`interactive-control px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  active
                    ? "bg-[#B85D3B] text-white shadow-md font-bold"
                    : "bg-[#FCFAF7] border border-[#DFD6C6] text-[#6B5E52] hover:text-[#261F1A] hover:border-[#B85D3B]/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. Door Profiles Section */}
      {(activeFilter === "all" || activeFilter === "profiles") && (
        <section className="space-y-5">
          <div className="flex items-baseline justify-between border-b border-[#DFD6C6] pb-3">
            <h3 className="text-xl font-normal font-serif text-[#261F1A]">
              {locale === "en" ? "Cabinet Door Profiles & Joinery" : "Perfiles de Puerta y Ebanistería"}
            </h3>
            <span className="text-xs font-mono text-[#B85D3B] font-semibold">
              {DOOR_PROFILES.length} {locale === "en" ? "Architectural Profiles" : "Perfiles"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DOOR_PROFILES.map((profile) => {
              const pinned = isInTray(profile.id);
              return (
                <div
                  key={profile.id}
                  className="rounded-2xl p-5 bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B]/50 transition-all flex flex-col justify-between shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] text-[#B85D3B] font-bold uppercase tracking-wider">
                        {profile.code}
                      </span>
                      <span className="text-[11px] text-[#8A7E72] font-mono">
                        {profile.stileWidthMm > 0 ? `${profile.stileWidthMm}mm` : "Zero-Edge"}
                      </span>
                    </div>

                    {/* SVG Door Profile Illustration */}
                    <div className="aspect-[4/3] w-full rounded-xl bg-[#EAE2D5] border border-[#DFD6C6] p-4 flex items-center justify-center">
                      <svg viewBox="0 0 120 120" className="w-20 h-20" role="img" aria-label={profile.name[locale]}>
                        <rect x="10" y="10" width="100" height="100" fill="#FCFAF7" stroke="#261F1A" strokeWidth="1.5" />
                        {profile.svgType === "shaker" && (
                          <rect x="22" y="22" width="76" height="76" fill="#F4EFE6" stroke="#261F1A" strokeWidth="1.2" />
                        )}
                        {profile.svgType === "slim-shaker" && (
                          <rect x="16" y="16" width="88" height="88" fill="#F4EFE6" stroke="#261F1A" strokeWidth="1" />
                        )}
                        {profile.svgType === "fluted" && (
                          <g stroke="#261F1A" strokeWidth="1.2">
                            {[24, 38, 52, 66, 80, 94].map((lx) => (
                              <line key={lx} x1={lx} y1="12" x2={lx} y2="108" />
                            ))}
                          </g>
                        )}
                        {profile.svgType === "slab" && (
                          <line x1="20" y1="10" x2="20" y2="110" stroke="#8A7E72" strokeWidth="1" strokeDasharray="3 3" />
                        )}
                      </svg>
                    </div>

                    <h4 className="text-base font-serif font-normal text-[#261F1A]">
                      {profile.name[locale]}
                    </h4>
                    <p className="text-xs text-[#6B5E52] leading-relaxed font-serif">
                      {profile.bestFor[locale]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFD6C6] mt-4">
                    <button
                      type="button"
                      onClick={() =>
                        toggleItem({
                          id: profile.id,
                          code: profile.code,
                          category: "profile",
                          title: profile.name[locale],
                          subtitle: profile.bestFor[locale],
                        })
                      }
                      className={`interactive-control w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                        pinned
                          ? "bg-[#2E6B4E] text-white"
                          : "bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#261F1A] border border-[#DFD6C6]"
                      }`}
                    >
                      {pinned ? <Check size={14} weight="bold" /> : <PushPin size={14} />}
                      <span>{pinned ? t.catalogSection.removeSample : t.catalogSection.addSample}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. Architectural 2K Catalyzed Coatings Section */}
      {(activeFilter === "all" || activeFilter === "coatings") && (
        <section className="space-y-5">
          <div className="flex items-baseline justify-between border-b border-[#DFD6C6] pb-3">
            <h3 className="text-xl font-normal font-serif text-[#261F1A]">
              {locale === "en" ? "2K Catalyzed Velvet Lacquers" : "Lacas Catalizadas 2K Satinadas"}
            </h3>
            <span className="text-xs font-mono text-[#B85D3B] font-semibold">
              {ARCHITECTURAL_PIGMENTS.length} {locale === "en" ? "Formulations" : "Formulaciones"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARCHITECTURAL_PIGMENTS.map((pigment) => {
              const pinned = isInTray(pigment.id);
              return (
                <div
                  key={pigment.id}
                  className="rounded-2xl p-5 bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B]/50 transition-all flex flex-col justify-between shadow-md"
                >
                  <div className="space-y-3">
                    {/* Swatch Pill & Color Block */}
                    <div
                      className="aspect-[16/9] w-full rounded-xl border border-[#DFD6C6] shadow-inner relative flex items-end p-3"
                      style={{ backgroundColor: pigment.hex }}
                    >
                      <span className="px-2.5 py-1 rounded-md bg-[#261F1A]/85 backdrop-blur-md text-[10px] font-mono text-white font-bold">
                        LRV {pigment.lrv}%
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] text-[#B85D3B] font-bold uppercase tracking-wider">
                        {pigment.code}
                      </span>
                      <span className="text-[11px] text-[#8A7E72] font-mono">
                        {pigment.brandRef}
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-normal text-[#261F1A]">
                      {pigment.name[locale]}
                    </h4>
                    <p className="text-xs text-[#6B5E52] leading-relaxed font-serif">
                      {pigment.undertone[locale]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFD6C6] mt-4">
                    <button
                      type="button"
                      onClick={() =>
                        toggleItem({
                          id: pigment.id,
                          code: pigment.code,
                          category: "pigment",
                          title: pigment.name[locale],
                          subtitle: `${pigment.brandRef} · LRV ${pigment.lrv}%`,
                          hex: pigment.hex,
                        })
                      }
                      className={`interactive-control w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                        pinned
                          ? "bg-[#2E6B4E] text-white"
                          : "bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#261F1A] border border-[#DFD6C6]"
                      }`}
                    >
                      {pinned ? <Check size={14} weight="bold" /> : <PushPin size={14} />}
                      <span>{pinned ? t.catalogSection.removeSample : t.catalogSection.addSample}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. Sheen Specs & Systems */}
      {(activeFilter === "all" || activeFilter === "systems") && (
        <section className="space-y-5">
          <div className="flex items-baseline justify-between border-b border-[#DFD6C6] pb-3">
            <h3 className="text-xl font-normal font-serif text-[#261F1A]">
              {locale === "en" ? "Factory Catalyzed Sheen Levels" : "Niveles de Brillo Catalizado"}
            </h3>
            <span className="text-xs font-mono text-[#B85D3B] font-semibold">
              {SHEEN_SPECS.length} {locale === "en" ? "KCMA Standards" : "Niveles KCMA"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SHEEN_SPECS.map((sheen) => {
              const pinned = isInTray(sheen.id);
              return (
                <div
                  key={sheen.id}
                  className="rounded-2xl p-5 bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B]/50 transition-all flex flex-col justify-between shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] text-[#B85D3B] font-bold uppercase tracking-wider">
                        {sheen.code}
                      </span>
                      <span className="text-[11px] text-[#8A7E72] font-mono font-semibold">
                        {sheen.glossUnits} GLOSS
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-normal text-[#261F1A]">
                      {sheen.name[locale]}
                    </h4>
                    <p className="text-xs text-[#6B5E52] leading-relaxed font-serif">
                      {sheen.chemicalSystem[locale]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFD6C6] mt-4">
                    <button
                      type="button"
                      onClick={() =>
                        toggleItem({
                          id: sheen.id,
                          code: sheen.code,
                          category: "sheen",
                          title: sheen.name[locale],
                          subtitle: sheen.chemicalSystem[locale],
                        })
                      }
                      className={`interactive-control w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                        pinned
                          ? "bg-[#2E6B4E] text-white"
                          : "bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#261F1A] border border-[#DFD6C6]"
                      }`}
                    >
                      {pinned ? <Check size={14} weight="bold" /> : <PushPin size={14} />}
                      <span>{pinned ? t.catalogSection.removeSample : t.catalogSection.addSample}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
