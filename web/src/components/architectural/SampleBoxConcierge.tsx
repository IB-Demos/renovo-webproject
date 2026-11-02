"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import {
  Package,
  CheckCircle,
  Plus,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  HouseLine,
  MapPin,
  Clock,
  Phone,
  Check,
} from "@phosphor-icons/react";

interface SampleItem {
  id: string;
  type: "wood" | "lacquer";
  nameEn: string;
  nameEs: string;
  subtitleEn: string;
  subtitleEs: string;
  hex: string;
  image: string;
  grainPattern?: string;
  lrv?: number;
}

const WOOD_SAMPLES: SampleItem[] = [
  {
    id: "wood-white-oak",
    type: "wood",
    nameEn: "Rift-Cut White Oak",
    nameEs: "Roble Blanco Corte Recto",
    subtitleEn: "Fine linear vertical grain, natural matte sealer",
    subtitleEs: "Veta lineal continua, sellador mate al agua",
    hex: "#C79F67",
    image: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
  },
  {
    id: "wood-walnut",
    type: "wood",
    nameEn: "American Black Walnut",
    nameEs: "Nogal Americano Macizo",
    subtitleEn: "Deep espresso undertones, natural mineral swirls",
    subtitleEs: "Subtonos espresso profundos y veta marmórea",
    hex: "#5C4033",
    image: "/assets/blueprints-and-docs/custom-furniture-08.jpg",
  },
  {
    id: "wood-maple",
    type: "wood",
    nameEn: "Hard Rock Sugar Maple",
    nameEs: "Maple Duro de Grado Mueblería",
    subtitleEn: "Ultra-dense furniture hardwood for dovetail joinery",
    subtitleEs: "Madera ultra densa para ensambles en cola de milano",
    hex: "#E5CCA5",
    image: "/assets/blueprints-and-docs/custom-furniture-14.jpg",
  },
];

const LACQUER_SAMPLES: SampleItem[] = [
  {
    id: "lacquer-alabaster",
    type: "lacquer",
    nameEn: "Navajo Alabaster 2K Velvet",
    nameEs: "Laca Alabastro Navajo 2K",
    subtitleEn: "Warm architectural ivory with zero brush marks",
    subtitleEs: "Marfil arquitectónico cálido con tersura de fábrica",
    hex: "#EDE7DC",
    image: "/assets/kitchens/kitchen-05.jpg",
    lrv: 82,
  },
  {
    id: "lacquer-midnight",
    type: "lacquer",
    nameEn: "Midnight Indigo Slate 2K",
    nameEs: "Laca Azul Medianoche 2K",
    subtitleEn: "Deep coastal navy with grounded architectural depth",
    subtitleEs: "Azul profundo con gran cuerpo para islas y cavas",
    hex: "#22303C",
    image: "/assets/kitchens/kitchen-14.jpg",
    lrv: 14,
  },
  {
    id: "lacquer-sage",
    type: "lacquer",
    nameEn: "Botanical Desert Sage 2K",
    nameEs: "Laca Verde Salvia Botánica 2K",
    subtitleEn: "Subtle desert organic green with soft velvet sheen",
    subtitleEs: "Verde salvia orgánico inspirado en la flora de Arizona",
    hex: "#4F5848",
    image: "/assets/kitchens/kitchen-07.jpg",
    lrv: 36,
  },
  {
    id: "lacquer-charcoal",
    type: "lacquer",
    nameEn: "Charcoal Obsidian 2K",
    nameEs: "Laca Carbón Obsidiana 2K",
    subtitleEn: "Monolithic deep charcoal for dramatic modern kitchens",
    subtitleEs: "Carbón monolítico mate para cocinas contemporáneas",
    hex: "#242321",
    image: "/assets/kitchens/kitchen-03.jpg",
    lrv: 10,
  },
];

export function SampleBoxConcierge() {
  const { locale } = useRenovo();

  // State: up to 2 woods and 2 lacquers
  const [selectedWoods, setSelectedWoods] = useState<string[]>(["wood-white-oak"]);
  const [selectedLacquers, setSelectedLacquers] = useState<string[]>([
    "lacquer-alabaster",
    "lacquer-midnight",
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCity, setClientCity] = useState("Phoenix / Scottsdale / Paradise Valley");

  const toggleWood = (id: string) => {
    if (selectedWoods.includes(id)) {
      if (selectedWoods.length > 1) {
        setSelectedWoods(selectedWoods.filter((item) => item !== id));
      }
    } else {
      if (selectedWoods.length < 2) {
        setSelectedWoods([...selectedWoods, id]);
      } else {
        setSelectedWoods([selectedWoods[1], id]);
      }
    }
  };

  const toggleLacquer = (id: string) => {
    if (selectedLacquers.includes(id)) {
      if (selectedLacquers.length > 1) {
        setSelectedLacquers(selectedLacquers.filter((item) => item !== id));
      }
    } else {
      if (selectedLacquers.length < 2) {
        setSelectedLacquers([...selectedLacquers, id]);
      } else {
        setSelectedLacquers([selectedLacquers[1], id]);
      }
    }
  };

  const totalSelected = selectedWoods.length + selectedLacquers.length;

  const currentWoodItems = WOOD_SAMPLES.filter((w) => selectedWoods.includes(w.id));
  const currentLacquerItems = LACQUER_SAMPLES.filter((l) => selectedLacquers.includes(l.id));

  return (
    <section className="py-20 lg:py-28 bg-[#F4EFE6] text-[#261F1A] border-b border-[#DFD6C6] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] text-xs font-serif italic">
              <Package size={15} />
              <span>
                {locale === "en"
                  ? "Atelier Sample Box Concierge · Physical Materials at Your Door"
                  : "Caja de Muestras Físicas de Taller · En tu Residencia"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#261F1A] tracking-tight">
              {locale === "en"
                ? "Feel the Velvet Finish Before You Invest."
                : "Siente la Tersura de Fábrica Antes de Decidir."}
            </h2>

            <p className="text-base text-[#6B5E52] font-light leading-relaxed">
              {locale === "en"
                ? "A high-end kitchen is a tactile commitment. Curate up to two solid hardwoods and two factory 2K catalyzed lacquer blocks. Raul Burgos will bring this custom presentation box directly to your in-home consultation."
                : "Una cocina de alta gama se decide con las manos. Selecciona hasta dos maderas nobles y dos bloques con laca catalizada 2K curada en cabina. Raul Burgos llevará esta caja de muestras a tu cita de valoración."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] text-xs font-serif text-[#6B5E52] space-y-1.5 self-start lg:self-auto max-w-sm shadow-xs">
            <div className="flex items-center gap-2 text-[#B85D3B] font-semibold">
              <ShieldCheck size={16} />
              <span>
                {locale === "en"
                  ? "Complimentary for Valley Homeowners"
                  : "Cortesía para Propietarios en el Valle"}
              </span>
            </div>
            <p className="text-[11px] text-[#7A6E63] leading-relaxed">
              {locale === "en"
                ? "Handcrafted in our Phoenix shop with authentic catalyzed coatings and hand-milled lumber."
                : "Elaborado en nuestro taller de Phoenix con acabados catalizados reales y cortes a inglete."}
            </p>
          </div>
        </div>

        {/* Main Grid: Selectors Left, Box Preview Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Material Pickers */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section A: Hardwoods (Pick up to 2) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-lg space-y-4 text-[#261F1A]">
              <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-serif italic text-[#B85D3B]">
                    {locale === "en" ? "Curated Hardwoods" : "Maderas Nobles Seleccionadas"}
                  </span>
                  <h3 className="text-lg font-serif font-normal text-[#261F1A]">
                    {locale === "en"
                      ? "1. Select Hardwood Samples (Choose 1 or 2)"
                      : "1. Selecciona Muestras de Madera (Elige 1 o 2)"}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#EAE2D5] text-[#6B5E52] border border-[#DFD6C6] font-serif">
                  {selectedWoods.length} / 2
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {WOOD_SAMPLES.map((wood) => {
                  const isSelected = selectedWoods.includes(wood.id);
                  return (
                    <button
                      key={wood.id}
                      type="button"
                      onClick={() => toggleWood(wood.id)}
                      className={`interactive-control rounded-2xl p-3.5 text-left transition-all border flex flex-col justify-between h-full ${
                        isSelected
                          ? "bg-[#EAE2D5] border-[#B85D3B] ring-1 ring-[#B85D3B]/30 shadow-xs text-[#261F1A]"
                          : "bg-[#FCFAF7] border-[#DFD6C6] hover:border-[#261F1A] text-[#6B5E52] shadow-xs"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-[#DFD6C6] bg-[#261F1A]">
                          <img
                            src={wood.image}
                            alt={wood.nameEn}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            {isSelected ? (
                              <div className="w-6 h-6 rounded-full bg-[#B85D3B] text-[#FCFAF7] flex items-center justify-center shadow-md">
                                <Check size={14} weight="bold" />
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-white/80 text-[#261F1A] border border-[#DFD6C6] flex items-center justify-center shadow-xs">
                                <Plus size={12} />
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <span className="text-sm font-serif font-semibold text-[#261F1A] block">
                            {locale === "en" ? wood.nameEn : wood.nameEs}
                          </span>
                          <span className="text-[11px] text-[#7A6E63] leading-tight block mt-1 font-light">
                            {locale === "en" ? wood.subtitleEn : wood.subtitleEs}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section B: 2K Catalyzed Lacquers (Pick up to 2) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-lg space-y-4 text-[#261F1A]">
              <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-serif italic text-[#B85D3B]">
                    {locale === "en" ? "Cabinetry Coatings" : "Acabados Catalizados 2K"}
                  </span>
                  <h3 className="text-lg font-serif font-normal text-[#261F1A]">
                    {locale === "en"
                      ? "2. Select Factory Lacquer Finishes (Choose 1 or 2)"
                      : "2. Selecciona Acabados en Laca (Elige 1 o 2)"}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#EAE2D5] text-[#6B5E52] border border-[#DFD6C6] font-serif">
                  {selectedLacquers.length} / 2
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {WOOD_SAMPLES.map((wood) => {
                  const isSelected = selectedWoods.includes(wood.id);
                  return (
                    <button
                      key={wood.id}
                      type="button"
                      onClick={() => toggleWood(wood.id)}
                      className={`interactive-control rounded-2xl p-3.5 text-left transition-all border flex flex-col justify-between h-full ${
                        isSelected
                          ? "bg-[#F5F0E6] border-[var(--gold)] ring-1 ring-[var(--gold)]/40 shadow-xs text-[#1F1A16]"
                          : "bg-white border-[#E7E0D5] hover:border-[#D5CABE] text-[#5E554B] shadow-xs"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-[#E7E0D5] bg-[#1F1A16]">
                          <img
                            src={wood.image}
                            alt={wood.nameEn}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            {isSelected ? (
                              <div className="w-6 h-6 rounded-full bg-[var(--gold)] text-[#1F1A16] flex items-center justify-center shadow-md">
                                <Check size={14} weight="bold" />
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-white/80 text-[#1F1A16] border border-[#E7E0D5] flex items-center justify-center shadow-xs">
                                <Plus size={12} />
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <span className="text-sm font-serif font-semibold text-[#1F1A16] block">
                            {locale === "en" ? wood.nameEn : wood.nameEs}
                          </span>
                          <span className="text-[11px] text-[#7A6E63] leading-tight block mt-1 font-light">
                            {locale === "en" ? wood.subtitleEn : wood.subtitleEs}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section B: 2K Catalyzed Lacquers (Pick up to 2) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7E0D5] shadow-lg space-y-4 text-[#1F1A16]">
              <div className="flex items-center justify-between border-b border-[#E7E0D5] pb-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-serif italic text-[var(--gold-dark)]">
                    {locale === "en" ? "Cabinetry Coatings" : "Acabados Catalizados 2K"}
                  </span>
                  <h3 className="text-lg font-serif font-normal text-[#1F1A16]">
                    {locale === "en"
                      ? "2. Select Factory Lacquer Finishes (Choose 1 or 2)"
                      : "2. Selecciona Acabados en Laca (Elige 1 o 2)"}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#EFEAE1] text-[#5E554B] border border-[#E0D8CB] font-serif">
                  {selectedLacquers.length} / 2
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {LACQUER_SAMPLES.map((lacquer) => {
                  const isSelected = selectedLacquers.includes(lacquer.id);
                  return (
                    <button
                      key={lacquer.id}
                      type="button"
                      onClick={() => toggleLacquer(lacquer.id)}
                      className={`interactive-control rounded-2xl p-4 text-left transition-all border flex items-center gap-3.5 ${
                        isSelected
                          ? "bg-[#EAE2D5] border-[#B85D3B] ring-1 ring-[#B85D3B]/30 shadow-xs text-[#261F1A]"
                          : "bg-[#FCFAF7] border-[#DFD6C6] hover:border-[#261F1A] text-[#6B5E52] shadow-xs"
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-xl shrink-0 border border-black/10 shadow-xs relative overflow-hidden"
                        style={{ backgroundColor: lacquer.hex }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/30" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-serif font-semibold text-[#261F1A] truncate">
                            {locale === "en" ? lacquer.nameEn : lacquer.nameEs}
                          </span>
                          {lacquer.lrv && (
                            <span className="text-[10px] text-[#7A6E63] shrink-0 font-serif">
                              LRV {lacquer.lrv}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-[#6B5E52] line-clamp-1 mt-0.5 font-light">
                          {locale === "en" ? lacquer.subtitleEn : lacquer.subtitleEs}
                        </span>
                      </div>

                      <div className="shrink-0">
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full bg-[#B85D3B] text-[#FCFAF7] flex items-center justify-center shadow-xs">
                            <Check size={12} weight="bold" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-[#EAE2D5] text-[#6B5E52] border border-[#DFD6C6] flex items-center justify-center">
                            <Plus size={10} />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: The Physical Box Rendering & Concierge Order */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl relative overflow-hidden space-y-6 text-[#261F1A]">
              {/* Subtle Atelier Box Glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 bg-[#B85D3B]/10 blur-[80px] rounded-full" />

              <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-4">
                <div>
                  <span className="text-xs font-serif italic text-[#B85D3B] block">
                    {locale === "en" ? "Custom Handcrafted Kit" : "Kit Personalizado Hecho a Mano"}
                  </span>
                  <h3 className="text-xl font-serif font-normal text-[#261F1A]">
                    {locale === "en" ? "Your Renovo Sample Box" : "Tu Caja de Muestras Renovo"}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/30 text-[#B85D3B] flex items-center justify-center">
                  <Package size={20} />
                </div>
              </div>

              {/* Physical Presentation Box Simulation (Tactile wooden tray with 4 slots) */}
              <div className="p-4 rounded-2xl bg-[#EAE2D5] border-2 border-[#DFD6C6] shadow-inner space-y-3">
                <div className="flex items-center justify-between text-[11px] text-[#7A6E63] font-serif border-b border-[#DFD6C6] pb-2">
                  <span>ATELIER SPECIMEN TRAY</span>
                  <span>PHOENIX, AZ · 4 SLOTS</span>
                </div>

                <div className="grid grid-cols-2 gap-3 min-h-[170px]">
                  {/* Selected Woods */}
                  {currentWoodItems.map((wood) => (
                    <motion.div
                      key={wood.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-3 rounded-xl bg-[#FCFAF7] border border-[#DFD6C6] flex flex-col justify-between shadow-sm relative overflow-hidden"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-serif text-[#B85D3B] block tracking-wider font-semibold">
                          {locale === "en" ? "Hardwood" : "Madera"}
                        </span>
                        <span className="text-xs font-serif font-semibold text-[#261F1A] block">
                          {locale === "en" ? wood.nameEn : wood.nameEs}
                        </span>
                      </div>
                      <div className="mt-3 aspect-[3/1] rounded-lg overflow-hidden border border-[#DFD6C6]">
                        <img
                          src={wood.image}
                          alt={wood.nameEn}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Selected Lacquers */}
                  {currentLacquerItems.map((lacquer) => (
                    <motion.div
                      key={lacquer.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-3 rounded-xl bg-[#FCFAF7] border border-[#DFD6C6] flex flex-col justify-between shadow-sm relative overflow-hidden"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-serif text-[#B85D3B] block tracking-wider font-semibold">
                          {locale === "en" ? "2K Lacquer" : "Laca 2K"}
                        </span>
                        <span className="text-xs font-serif font-semibold text-[#261F1A] block truncate">
                          {locale === "en" ? lacquer.nameEn : lacquer.nameEs}
                        </span>
                      </div>
                      <div
                        className="mt-3 aspect-[3/1] rounded-lg border border-black/10 shadow-inner"
                        style={{ backgroundColor: lacquer.hex }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Box Certificate Ribbon */}
                <div className="pt-2 text-[10px] text-[#7A6E63] font-serif italic text-center border-t border-[#DFD6C6]">
                  {locale === "en"
                    ? "Inspected & sealed at 2231 W Shangri La Rd, Phoenix, AZ"
                    : "Inspeccionado y sellado en 2231 W Shangri La Rd, Phoenix, AZ"}
                </div>
              </div>

              {/* Order Form or Success Confirmation */}
              {!isSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                  className="space-y-3.5"
                >
                  <div className="space-y-1">
                    <label className="text-xs font-serif text-[#6B5E52] block">
                      {locale === "en" ? "Your Name:" : "Tu Nombre:"}
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder={locale === "en" ? "e.g., Katherine Miller" : "Ej. Alejandro Garza"}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#DFD6C6] text-[#261F1A] text-xs font-serif placeholder:text-[#8A7E72] focus:outline-none focus:border-[#B85D3B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-serif text-[#6B5E52] block">
                        {locale === "en" ? "Phone Number:" : "Teléfono de Contacto:"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="(602) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#DFD6C6] text-[#261F1A] text-xs font-serif placeholder:text-[#8A7E72] focus:outline-none focus:border-[#B85D3B]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-serif text-[#6B5E52] block">
                        {locale === "en" ? "Arizona City:" : "Ciudad en Arizona:"}
                      </label>
                      <select
                        value={clientCity}
                        onChange={(e) => setClientCity(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#F4EFE6] border border-[#DFD6C6] text-[#261F1A] text-xs font-serif focus:outline-none focus:border-[#B85D3B]"
                      >
                        <option value="Paradise Valley">Paradise Valley</option>
                        <option value="Scottsdale">Scottsdale</option>
                        <option value="Arcadia / Phoenix">Arcadia / Phoenix</option>
                        <option value="Cave Creek / Carefree">Cave Creek / Carefree</option>
                        <option value="Chandler / Gilbert">Chandler / Gilbert</option>
                        <option value="Other Maricopa County">Other Valley Area</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="interactive-control min-h-[48px] w-full rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 mt-2"
                  >
                    <span>
                      {locale === "en"
                        ? "Request Sample Box for In-Home Consultation"
                        : "Solicitar Caja de Muestras para Cita en Sitio"}
                    </span>
                    <ArrowRight size={14} weight="bold" />
                  </button>
                </form>
              ) : (
                <div className="p-5 rounded-2xl bg-[#EBF3EA] border border-[#B8D8B4] text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#2E6B4E] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle size={22} weight="fill" />
                  </div>
                  <h4 className="text-base font-serif font-normal text-[#261F1A]">
                    {locale === "en" ? "Sample Box Reserved!" : "¡Caja de Muestras Reservada!"}
                  </h4>
                  <p className="text-xs text-[#261F1A] leading-relaxed">
                    {locale === "en"
                      ? `Thank you, ${clientName || "Valued Homeowner"}. Raul Burgos has received your custom material selection for ${clientCity}. We will call ${clientPhone || "you"} to confirm your appointment.`
                      : `Gracias, ${clientName || "Estimado Propietario"}. Raul Burgos ha recibido tu selección de muestras para ${clientCity}. Nos comunicaremos al ${clientPhone || "teléfono indicado"} para confirmar la visita.`}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#B85D3B] hover:underline pt-1 inline-block font-serif font-semibold"
                  >
                    {locale === "en" ? "Customize another sample set" : "Configurar otra selección"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
