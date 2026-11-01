"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import {
  KITCHEN_GALLERY_IMAGES,
  ALL_CUSTOM_FURNITURE_IMAGES,
  INTERIOR_PAINTING_IMAGES,
  EXTERIOR_PAINTING_IMAGES,
  EXTERIOR_PAINTING_VIDEOS,
  CUSTOM_FURNITURE_VIDEO,
} from "@/lib/company-data/portfolio";
import { PlayCircle, Images } from "@phosphor-icons/react";

type PortfolioCategory = "kitchens" | "custom" | "interior" | "exterior";

export function RealPortfolioShowcase({
  initialCategory = "kitchens",
}: {
  initialCategory?: PortfolioCategory;
}) {
  const { locale } = useRenovo();
  const [category, setCategory] = useState<PortfolioCategory>(initialCategory);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const getActiveImages = () => {
    switch (category) {
      case "kitchens":
        return KITCHEN_GALLERY_IMAGES;
      case "custom":
        return ALL_CUSTOM_FURNITURE_IMAGES;
      case "interior":
        return INTERIOR_PAINTING_IMAGES;
      case "exterior":
        return EXTERIOR_PAINTING_IMAGES;
    }
  };

  const activeImages = getActiveImages();
  const currentImg = activeImages[selectedIdx] || activeImages[0];

  return (
    <div className="border border-[#121316]/15 bg-[#EAEAE5] p-6 sm:p-8">
      {/* Category Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#121316]/15">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#121316]">
          <Images size={17} className="text-[#C84B31]" />
          <span>
            {locale === "en"
              ? "PHOENIX, AZ REAL PROJECT ARCHIVE"
              : "ARCHIVO REAL DE OBRAS EN PHOENIX, AZ"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Portfolio category">
          {(
            [
              {
                id: "kitchens",
                label:
                  locale === "en"
                    ? `Kitchens (${KITCHEN_GALLERY_IMAGES.length})`
                    : `Cocinas (${KITCHEN_GALLERY_IMAGES.length})`,
              },
              {
                id: "custom",
                label:
                  locale === "en"
                    ? `Custom Furniture (${ALL_CUSTOM_FURNITURE_IMAGES.length})`
                    : `Muebles Custom (${ALL_CUSTOM_FURNITURE_IMAGES.length})`,
              },
              {
                id: "interior",
                label:
                  locale === "en"
                    ? `Interior Painting (${INTERIOR_PAINTING_IMAGES.length})`
                    : `Pintura Interior (${INTERIOR_PAINTING_IMAGES.length})`,
              },
              {
                id: "exterior",
                label:
                  locale === "en"
                    ? `Exterior & Videos (${EXTERIOR_PAINTING_IMAGES.length + EXTERIOR_PAINTING_VIDEOS.length})`
                    : `Exterior y Videos (${EXTERIOR_PAINTING_IMAGES.length + EXTERIOR_PAINTING_VIDEOS.length})`,
              },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setCategory(tab.id);
                setSelectedIdx(0);
              }}
              className={`interactive-control border px-3.5 py-2 font-mono text-xs uppercase tracking-wider tabular-nums ${
                category === tab.id
                  ? "border-[#121316] bg-[#121316] text-[#F4F4F1] font-semibold"
                  : "border-[#121316]/20 bg-[#F4F4F1] text-[#121316] hover:border-[#121316]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewer + Thumbnails */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 aspect-[16/11] border border-[#121316]/20 bg-[#121316] overflow-hidden relative">
          <img
            src={currentImg}
            alt={`Renovo ${category} project ${selectedIdx + 1}`}
            className="h-full w-full object-contain"
          />
          <div className="absolute bottom-3 left-3 bg-[#121316]/90 border border-white/15 px-3 py-1 font-mono text-[11px] text-[#F4F4F1] tabular-nums">
            PLATE {String(selectedIdx + 1).padStart(2, "0")} /{" "}
            {String(activeImages.length).padStart(2, "0")} // {category.toUpperCase()}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#52565E] mb-3">
              {locale === "en"
                ? "SELECT PHOTOGRAPH TO INSPECT"
                : "SELECCIONA UNA FOTOGRAFÍA PARA INSPECCIONAR"}
            </div>
            <div className="grid grid-cols-5 gap-2 max-h-[300px] overflow-y-auto p-1">
              {activeImages.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`interactive-control aspect-square overflow-hidden border-2 ${
                    selectedIdx === idx
                      ? "border-[#C84B31] scale-105"
                      : "border-transparent opacity-75 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Real Videos Strip when in Exterior or Custom */}
          {(category === "exterior" || category === "custom") && (
            <div className="border-t border-[#121316]/15 pt-4">
              <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#C84B31] mb-2.5">
                <PlayCircle size={16} />
                <span>
                  {locale === "en" ? "SITE VIDEO DOCUMENTATION" : "VIDEOS REALES DE OBRA"}
                </span>
              </div>
              {category === "exterior" ? (
                <div className="grid grid-cols-2 gap-2.5">
                  {EXTERIOR_PAINTING_VIDEOS.slice(0, 2).map((vid) => (
                    <video
                      key={vid}
                      src={vid}
                      controls
                      preload="metadata"
                      className="w-full h-32 object-cover border border-[#121316]/20 bg-black"
                    />
                  ))}
                </div>
              ) : (
                <video
                  src={CUSTOM_FURNITURE_VIDEO}
                  controls
                  preload="metadata"
                  className="w-full h-36 object-cover border border-[#121316]/20 bg-black"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
