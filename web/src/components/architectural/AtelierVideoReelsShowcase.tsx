"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import { motionTokens } from "@/lib/motionTokens";
import {
  Play,
  Pause,
  SpeakerSimpleHigh,
  SpeakerSimpleSlash,
  FilmStrip,
  Sparkle,
  ArrowRight,
  PushPin,
  Check,
  CornersOut,
  Clock,
  ShieldCheck,
  MapPin,
} from "@phosphor-icons/react";

export interface ReelCaption {
  startSec: number;
  endSec: number;
  textEn: string;
  textEs: string;
  highlightEn: string;
  highlightEs: string;
  keywordCardEn: string;
  keywordCardEs: string;
}

export interface AtelierReelItem {
  id: string;
  code: string;
  category: "millwork" | "exterior";
  videoSrc: string;
  posterSrc: string;
  location: string;
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  specBadge: { en: string; es: string };
  durationLabel: string;
  edlChapters: {
    timeSec: number;
    labelEn: string;
    labelEs: string;
  }[];
  captions: ReelCaption[];
}

export const ATELIER_REELS: AtelierReelItem[] = [
  {
    id: "reel-01-millwork",
    code: "EDL-01 // CUSTOM MILLWORK & BUILT-INS",
    category: "millwork",
    videoSrc: "/assets/blueprints-and-docs/custom-furniture-video-01.mp4",
    posterSrc: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
    location: "Scottsdale, AZ",
    title: {
      en: "Custom Architectural Built-In & Millwork Walkthrough",
      es: "Recorrido en Vivo: Ebanistería Arquitectónica a Medida",
    },
    subtitle: {
      en: "Hand-fitted cabinet reveals, solid hardwood framing, and 2K catalyzed satin finish filmed on site.",
      es: "Holguras calibradas al milímetro, estructura en madera sólida y acabado satinado 2K grabado en obra.",
    },
    specBadge: {
      en: "1/16\" Laser Reveal · 2K Satin",
      es: "Holgura Láser 1/16\" · Laca 2K",
    },
    durationLabel: "0:14",
    edlChapters: [
      { timeSec: 0, labelEn: "01 · Structural Framing", labelEs: "01 · Estructura Sólida" },
      { timeSec: 4, labelEn: "02 · 2K Velvet Surface", labelEs: "02 · Tersura 2K" },
      { timeSec: 8, labelEn: "03 · Precision Joinery", labelEs: "03 · Ajuste Milimétrico" },
    ],
    captions: [
      {
        startSec: 0,
        endSec: 4.5,
        textEn: "Custom floor-to-ceiling millwork tailored to exact drywall tolerances",
        textEs: "Ebanistería de piso a techo ajustada a la geometría exacta del muro",
        highlightEn: "floor-to-ceiling millwork",
        highlightEs: "piso a techo",
        keywordCardEn: "CNC + HAND JOINERY",
        keywordCardEs: "ENSAMBLE DE AUTOR",
      },
      {
        startSec: 4.5,
        endSec: 9.0,
        textEn: "Zero brush marks — sprayed in our pressurized Phoenix 2K booth",
        textEs: "Cero marcas de brocha — aplicado en nuestra cabina presurizada 2K",
        highlightEn: "Zero brush marks",
        highlightEs: "Cero marcas de brocha",
        keywordCardEn: "18% SATIN VELVET",
        keywordCardEs: "TERSURA SATINADA 18%",
      },
      {
        startSec: 9.0,
        endSec: 30,
        textEn: "Concealed Blum soft-close hardware rated for 100,000+ cycles",
        textEs: "Herrajes ocultos Blum de cierre suave para más de 100,000 ciclos",
        highlightEn: "100,000+ cycles",
        highlightEs: "100,000 ciclos",
        keywordCardEn: "BLUM MOVENTO SPEC",
        keywordCardEs: "HERRAJE AUSTRIACO BLUM",
      },
    ],
  },
  {
    id: "reel-02-exterior-prep",
    code: "EDL-02 // SONORAN UV EXTERIOR SHIELD",
    category: "exterior",
    videoSrc: "/assets/painting-exterior/exterior-video-01.mp4",
    posterSrc: "/assets/painting-exterior/exterior-01.jpg",
    location: "Paradise Valley, AZ",
    title: {
      en: "Desert UV Elastomeric Stucco & Trim Application",
      es: "Aplicación Exterior con Blindaje UV para el Desierto",
    },
    subtitle: {
      en: "Full window masking, trench perimeter prep, and high-build elastomeric coating engineered for 115°F+ Arizona sun.",
      es: "Enmascarado hermético de cristales y recubrimiento elastomérico para resistir más de 45°C de sol en Arizona.",
    },
    specBadge: {
      en: "115°F+ UV Shield · Elastomeric",
      es: "Blindaje Solar 45°C+ · Elastomérico",
    },
    durationLabel: "0:16",
    edlChapters: [
      { timeSec: 0, labelEn: "01 · Hermetic Masking", labelEs: "01 · Enmascarado Hermético" },
      { timeSec: 5, labelEn: "02 · Stucco Sealant", labelEs: "02 · Sellado de Estuco" },
      { timeSec: 10, labelEn: "03 · Crisp Fascia Lines", labelEs: "03 · Líneas de Cornisa" },
    ],
    captions: [
      {
        startSec: 0,
        endSec: 5,
        textEn: "Surgical film masking protects every stone, window, and fixture",
        textEs: "Enmascarado quirúrgico que protege cada piedra, domo y ventanal",
        highlightEn: "Surgical film masking",
        highlightEs: "Enmascarado quirúrgico",
        keywordCardEn: "ZERO OVERSPRAY",
        keywordCardEs: "PROTECCIÓN TOTAL",
      },
      {
        startSec: 5,
        endSec: 10,
        textEn: "Cross-linked acrylic barrier reflects extreme Sonoran solar heat",
        textEs: "Barrera acrílica reticulada que refleja la radiación solar intensa",
        highlightEn: "Sonoran solar heat",
        highlightEs: "radiación solar intensa",
        keywordCardEn: "UV SOLAR SHIELD",
        keywordCardEs: "FILTRO UV DESÉRTICO",
      },
      {
        startSec: 10,
        endSec: 30,
        textEn: "10+ year protection against chalking, alkali burn, and thermal cracks",
        textEs: "Más de 10 años sin caleo, decoloración ni fisuras térmicas",
        highlightEn: "10+ year protection",
        highlightEs: "Más de 10 años",
        keywordCardEn: "WARRANTIED FINISH",
        keywordCardEs: "DURABILIDAD GARANTIZADA",
      },
    ],
  },
  {
    id: "reel-03-exterior-elevation",
    code: "EDL-03 // ARCHITECTURAL FACADE TRANSFORMATION",
    category: "exterior",
    videoSrc: "/assets/painting-exterior/exterior-video-02.mp4",
    posterSrc: "/assets/painting-exterior/exterior-02.jpg",
    location: "Arcadia Phoenix, AZ",
    title: {
      en: "Full Residence Exterior Elevation & Fascia Detailing",
      es: "Transformación Integral de Fachada y Detallado de Aleros",
    },
    subtitle: {
      en: "Multi-elevation airless application delivering uniform mill-thickness across rough desert stucco.",
      es: "Aplicación airless de alto espesor logrando cobertura uniforme en estuco texturizado y molduras.",
    },
    specBadge: {
      en: "Airless Uniform Mil · Zero Lap Marks",
      es: "Espesor Uniforme · Cero Empalmes",
    },
    durationLabel: "0:15",
    edlChapters: [
      { timeSec: 0, labelEn: "01 · Elevation Prep", labelEs: "01 · Preparación" },
      { timeSec: 4, labelEn: "02 · High-Build Coat", labelEs: "02 · Capa de Alto Espesor" },
      { timeSec: 9, labelEn: "03 · Architectural Contrast", labelEs: "03 · Contraste Arquitectónico" },
    ],
    captions: [
      {
        startSec: 0,
        endSec: 4.5,
        textEn: "Every hairline stucco crack is bridged with elastomeric urethane",
        textEs: "Cada micro-fisura del estuco se sella con poliuretano elástico",
        highlightEn: "elastomeric urethane",
        highlightEs: "poliuretano elástico",
        keywordCardEn: "THERMAL EXPANSION READY",
        keywordCardEs: "SELLADO ELÁSTICO",
      },
      {
        startSec: 4.5,
        endSec: 9.5,
        textEn: "Back-rolled and cross-sprayed for deep pore saturation",
        textEs: "Aspersión cruzada para saturación profunda del poro mineral",
        highlightEn: "deep pore saturation",
        highlightEs: "saturación profunda",
        keywordCardEn: "MONOLITHIC BOND",
        keywordCardEs: "ANCLAJE MINERAL",
      },
      {
        startSec: 9.5,
        endSec: 30,
        textEn: "Crisp architectural contrast between warm alabaster walls and deep bronze trim",
        textEs: "Contraste limpio entre muros en alabastro cálido y herrería en bronce",
        highlightEn: "architectural contrast",
        highlightEs: "Contraste limpio",
        keywordCardEn: "SONORAN PALETTE",
        keywordCardEs: "PALETA SONORENSE",
      },
    ],
  },
  {
    id: "reel-04-courtyard-detail",
    code: "EDL-04 // COURTYARD & PORTICO FINISH",
    category: "exterior",
    videoSrc: "/assets/painting-exterior/exterior-video-03.mp4",
    posterSrc: "/assets/painting-exterior/exterior-01.jpg",
    location: "North Scottsdale, AZ",
    title: {
      en: "Courtyard Columns, Pergola Beams & Entry Portico",
      es: "Columnas de Patio, Pérgolas y Pórtico Principal",
    },
    subtitle: {
      en: "Precision edge cutting around desert landscaping, stone veneers, and recessed soffit lighting.",
      es: "Recortes de precisión láser junto a cantera, jardines desérticos y plafones iluminados.",
    },
    specBadge: {
      en: "Laser Cut Lines · Moisture Verified",
      es: "Recorte Láser · Humedad <12%",
    },
    durationLabel: "0:14",
    edlChapters: [
      { timeSec: 0, labelEn: "01 · Stone & Paver Shield", labelEs: "01 · Protección de Cantera" },
      { timeSec: 5, labelEn: "02 · Soffit & Beam Coat", labelEs: "02 · Plafones y Vigas" },
      { timeSec: 9, labelEn: "03 · Final Walkthrough", labelEs: "03 · Entrega Impecable" },
    ],
    captions: [
      {
        startSec: 0,
        endSec: 5,
        textEn: "Substrate moisture verified below 12% prior to primer lock",
        textEs: "Humedad del sustrato verificada bajo 12% antes del sellador",
        highlightEn: "below 12%",
        highlightEs: "bajo 12%",
        keywordCardEn: "HYGROMETER VERIFIED",
        keywordCardEs: "MEDICIÓN DIGITAL",
      },
      {
        startSec: 5,
        endSec: 9,
        textEn: "Razor-sharp transitions where stucco meets natural desert stone",
        textEs: "Transiciones milimétricas donde el estuco abraza la piedra natural",
        highlightEn: "Razor-sharp transitions",
        highlightEs: "Transiciones milimétricas",
        keywordCardEn: "LASER CAULK LINES",
        keywordCardEs: "PERFILADO DE PRECISIÓN",
      },
      {
        startSec: 9,
        endSec: 30,
        textEn: "Delivered spotless — zero paint drops on pavers or desert flora",
        textEs: "Entrega impecable — ni una gota en adoquines ni vegetación",
        highlightEn: "Delivered spotless",
        highlightEs: "Entrega impecable",
        keywordCardEn: "WHITE-GLOVE SITE",
        keywordCardEs: "OBRA LIMPIA RENOVO",
      },
    ],
  },
];

export function AtelierVideoReelsShowcase({
  initialFilter = "all",
  compact = false,
}: {
  initialFilter?: "all" | "millwork" | "exterior";
  compact?: boolean;
}) {
  const { locale, addSample, isInTray } = useRenovo();
  const [filter, setFilter] = useState<"all" | "millwork" | "exterior">(initialFilter);
  const [activeReelIdx, setActiveReelIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(14);
  const [showKineticOverlay, setShowKineticOverlay] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const filteredReels =
    filter === "all"
      ? ATELIER_REELS
      : ATELIER_REELS.filter((r) => r.category === filter);

  const activeReel = filteredReels[activeReelIdx] || filteredReels[0] || ATELIER_REELS[0];

  // Reset and play when switching reel
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    setCurrentTime(0);
    vid.currentTime = 0;
    if (isPlaying) {
      vid.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [activeReel.id]);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const seekTo = (sec: number) => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.currentTime = sec;
    setCurrentTime(sec);
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const activeCaption =
    activeReel.captions.find(
      (c) => currentTime >= c.startSec && currentTime <= c.endSec
    ) || activeReel.captions[0];

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
  const sampleId = `reel-${activeReel.id}`;
  const pinned = isInTray(sampleId);

  const handlePinReel = () => {
    addSample({
      id: sampleId,
      code: activeReel.code,
      category: "system",
      title: activeReel.title[locale],
      subtitle: `${activeReel.specBadge[locale]} · ${activeReel.location}`,
    });
  };

  // Helper to highlight keyword inside kinetic subtitle
  const renderHighlightedCaption = (fullText: string, highlight: string) => {
    if (!highlight || !fullText.toLowerCase().includes(highlight.toLowerCase())) {
      return <span>{fullText}</span>;
    }
    const idx = fullText.toLowerCase().indexOf(highlight.toLowerCase());
    const before = fullText.slice(0, idx);
    const match = fullText.slice(idx, idx + highlight.length);
    const after = fullText.slice(idx + highlight.length);
    return (
      <>
        <span>{before}</span>
        <span className="px-1.5 py-0.5 mx-0.5 rounded-md bg-[#B85D3B] text-[#FCFAF7] font-semibold shadow-xs">
          {match}
        </span>
        <span>{after}</span>
      </>
    );
  };

  return (
    <div className="rounded-3xl border border-[#DFD6C6] bg-[#FCFAF7] p-5 sm:p-8 lg:p-10 shadow-xl text-[#261F1A]">
      {/* Top Editorial Header & Category Filter */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DFD6C6]">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1410] text-[#FCFAF7] border border-[#C59B27]/40 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
            <FilmStrip size={15} className="text-[#C59B27]" weight="fill" />
            <span>
              {locale === "en"
                ? "ATELIER CINEMA · REAL SITE & WORKSHOP REELS"
                : "CINEMA DE TALLER · REELS REALES DE OBRA EN VIVO"}
            </span>
          </div>
          <h2 className={`${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-5xl"} font-serif font-semibold text-[#1A1410] tracking-tight`}>
            {locale === "en"
              ? "Craftsmanship in Motion: Unfiltered Site Reels."
              : "Artesanía en Movimiento: Evidencia Real en Video."}
          </h2>
          <p className="text-sm sm:text-base text-[#3D3228] leading-relaxed">
            {locale === "en"
              ? "Watch Raul Burgos and our Phoenix team execute custom millwork installations, hermetic masking, and elastomeric desert coatings in real residences across the Valley."
              : "Observa a Raul Burgos y nuestro equipo en Phoenix ejecutando instalaciones de ebanistería a medida, enmascarado quirúrgico y recubrimientos de alta resistencia en residencias reales."}
          </p>
        </div>

        {/* Category Filter Pills with Shared Layout Spring */}
        <div
          className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#EAE2D5] border border-[#DFD6C6] self-start lg:self-auto"
          role="group"
          aria-label="Video reel category filter"
        >
          {(
            [
              {
                id: "all",
                labelEn: `All Reels (${ATELIER_REELS.length})`,
                labelEs: `Todos (${ATELIER_REELS.length})`,
              },
              {
                id: "millwork",
                labelEn: "Custom Millwork",
                labelEs: "Ebanistería Custom",
              },
              {
                id: "exterior",
                labelEn: "Exterior Coatings",
                labelEs: "Recubrimientos Exteriores",
              },
            ] as const
          ).map((tab) => {
            const isSelected = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setFilter(tab.id);
                  setActiveReelIdx(0);
                }}
                className={`interactive-control relative px-4 py-2 rounded-xl text-xs font-serif transition-colors ${
                  isSelected
                    ? "text-[#FCFAF7] font-semibold"
                    : "text-[#3D3228] hover:text-[#1A1410]"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="reel-filter-pill"
                    transition={motionTokens.spring.snappy}
                    className="absolute inset-0 rounded-xl bg-[#B85D3B] shadow-xs"
                  />
                )}
                <span className="relative z-10">
                  {locale === "en" ? tab.labelEn : tab.labelEs}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Director Stage: Left 7 Cols Video Viewport, Right 5 Cols EDL Controls & Playlist */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT 7 COLS: KINETIC REEL VIEWPORT */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[9/14] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden bg-[#16120E] border border-[#DFD6C6] shadow-2xl select-none group">
            {/* Ambient Blurred Backdrop so vertical/horizontal videos fill frame luxuriously */}
            <img
              src={activeReel.posterSrc}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-35 pointer-events-none"
            />

            {/* Main HTML5 Video Element */}
            <video
              ref={videoRef}
              key={activeReel.videoSrc}
              src={activeReel.videoSrc}
              poster={activeReel.posterSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              onLoadedMetadata={(e) => {
                if (e.currentTarget.duration && !Number.isNaN(e.currentTarget.duration)) {
                  setDuration(e.currentTarget.duration);
                }
              }}
              className="relative z-10 w-full h-full object-contain cursor-pointer"
            />

            {/* Subtle Top & Bottom Cinematic Vignette */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-transparent to-black/45" />

            {/* TOP HUD BAR (Safe Zone Conscious) */}
            <div className="absolute top-4 left-4 right-4 z-30 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#C59B27] font-semibold tracking-wider uppercase">
                  {activeReel.code}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md text-[10px] font-serif font-semibold text-[#1A1410]">
                  <MapPin size={11} className="text-[#B85D3B]" weight="fill" />
                  <span>{activeReel.location}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowKineticOverlay((prev) => !prev)}
                  className={`interactive-control min-h-[36px] px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border backdrop-blur-md ${
                    showKineticOverlay
                      ? "bg-[#B85D3B]/90 text-white border-white/20"
                      : "bg-[#1A1410]/75 text-white/70 border-white/15"
                  }`}
                >
                  {locale === "en" ? "CC Kinetic" : "Subtítulos"}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="interactive-control min-h-[36px] min-w-[36px] p-2 rounded-full bg-[#1A1410]/85 hover:bg-[#B85D3B] text-white border border-white/15 backdrop-blur-md flex items-center justify-center"
                >
                  {isMuted ? <SpeakerSimpleSlash size={16} /> : <SpeakerSimpleHigh size={16} />}
                </button>
              </div>
            </div>

            {/* KINETIC KEYWORD CARD & SUBTITLES (Video Editor Architect + Motion Architect Safe Zone) */}
            <AnimatePresence mode="wait">
              {showKineticOverlay && activeCaption && (
                <motion.div
                  key={`${activeReel.id}-${activeCaption.startSec}`}
                  initial={{ opacity: 0, y: 14, scale: 0.96, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, scale: 0.98, filter: "blur(2px)" }}
                  transition={{
                    duration: motionTokens.duration.normal,
                    ease: motionTokens.easing.out,
                  }}
                  className="pointer-events-none absolute bottom-16 inset-x-4 sm:inset-x-8 z-30 flex flex-col items-start gap-2"
                >
                  {/* Keyword Callout Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#C59B27] text-[#1A1410] font-mono text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    <Sparkle size={12} weight="fill" />
                    <span>
                      {locale === "en"
                        ? activeCaption.keywordCardEn
                        : activeCaption.keywordCardEs}
                    </span>
                  </div>

                  {/* Kinetic Subtitle Box */}
                  <div className="px-4 py-2.5 rounded-2xl bg-[#1A1410]/90 backdrop-blur-md border border-white/15 text-[#FCFAF7] text-xs sm:text-sm font-serif leading-snug shadow-xl max-w-xl">
                    {renderHighlightedCaption(
                      locale === "en" ? activeCaption.textEn : activeCaption.textEs,
                      locale === "en" ? activeCaption.highlightEn : activeCaption.highlightEs
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTTOM TRANSPORT & SCRUBBER BAR */}
            <div className="absolute bottom-0 inset-x-0 z-30 p-3.5 sm:px-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause reel" : "Play reel"}
                className="interactive-control min-h-[38px] min-w-[38px] h-9 w-9 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-white flex items-center justify-center shrink-0 shadow-md"
              >
                {isPlaying ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" />}
              </button>

              {/* Interactive Timeline Progress Bar */}
              <div className="flex-1 flex flex-col gap-1">
                <input
                  type="range"
                  min={0}
                  max={duration || 14}
                  step={0.1}
                  value={currentTime}
                  onChange={(e) => seekTo(Number(e.target.value))}
                  aria-label="Video timeline scrubber"
                  className="w-full h-1.5 bg-white/25 rounded-lg appearance-none cursor-pointer accent-[#C59B27]"
                />
                <div className="flex items-center justify-between text-[10px] font-mono text-white/80 tabular-nums">
                  <span>
                    0:{String(Math.floor(currentTime)).padStart(2, "0")} / {activeReel.durationLabel}
                  </span>
                  <span className="text-[#C59B27] font-semibold">
                    {activeReel.specBadge[locale]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* EDL Chapter Cut Buttons (Video Editor Architect Checkpoints) */}
          <div className="grid grid-cols-3 gap-2.5">
            {activeReel.edlChapters.map((chap, cIdx) => {
              const nextChapTime =
                activeReel.edlChapters[cIdx + 1]?.timeSec ?? duration + 10;
              const isCurrentChap =
                currentTime >= chap.timeSec && currentTime < nextChapTime;

              return (
                <button
                  key={cIdx}
                  type="button"
                  onClick={() => seekTo(chap.timeSec)}
                  className={`interactive-control p-2.5 sm:p-3 rounded-2xl border text-left transition-colors ${
                    isCurrentChap
                      ? "bg-[#1A1410] text-[#FCFAF7] border-[#B85D3B] shadow-md"
                      : "bg-[#F4EFE6] text-[#3D3228] border-[#DFD6C6] hover:border-[#1A1410]"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase">
                    <span className={isCurrentChap ? "text-[#C59B27] font-bold" : "text-[#B85D3B]"}>
                      0:{String(chap.timeSec).padStart(2, "0")}s
                    </span>
                    {isCurrentChap && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                    )}
                  </div>
                  <div className="text-xs font-serif font-semibold mt-0.5 truncate">
                    {locale === "en" ? chap.labelEn : chap.labelEs}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT 5 COLS: REEL EDITORIAL STORY, TELEMETRY & PLAYLIST */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Active Reel Info Card */}
          <div className="p-6 rounded-3xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B85D3B] font-bold">
                {activeReel.code}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-[#3D3228] tabular-nums">
                <Clock size={13} className="text-[#B85D3B]" />
                {activeReel.durationLabel}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1A1410] leading-snug">
              {activeReel.title[locale]}
            </h3>

            <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
              {activeReel.subtitle[locale]}
            </p>

            <div className="pt-3 border-t border-[#DFD6C6] flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handlePinReel}
                className={`interactive-control flex-1 min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 ${
                  pinned
                    ? "bg-[#3D5A45] text-white"
                    : "bg-[#B85D3B] hover:bg-[#A34E2F] text-white shadow-sm"
                }`}
              >
                {pinned ? <Check size={15} weight="bold" /> : <PushPin size={15} />}
                <span>
                  {pinned
                    ? locale === "en"
                      ? "Saved in Design Tray"
                      : "Guardado en Bandeja"
                    : locale === "en"
                    ? "Pin System to Tray"
                    : "Guardar en Bandeja"}
                </span>
              </button>

              <Link
                href="/cotizador"
                className="interactive-control min-h-[44px] px-4 py-2.5 rounded-xl border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] text-[#1A1410] text-xs font-serif font-semibold inline-flex items-center justify-center gap-1.5"
              >
                <span>{locale === "en" ? "Quote This Scope" : "Cotizar"}</span>
                <ArrowRight size={13} weight="bold" />
              </Link>
            </div>
          </div>

          {/* Playlist Selector */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#54463A] font-semibold px-1">
              <span>
                {locale === "en"
                  ? "SELECT SITE REEL TO INSPECT"
                  : "SELECCIONA UN REEL DE OBRA"}
              </span>
              <span className="tabular-nums">
                0{activeReelIdx + 1} / 0{filteredReels.length}
              </span>
            </div>

            <div className="space-y-2.5">
              {filteredReels.map((reel, idx) => {
                const isSelected = reel.id === activeReel.id;
                return (
                  <button
                    key={reel.id}
                    type="button"
                    onClick={() => setActiveReelIdx(idx)}
                    className={`interactive-control w-full p-3 rounded-2xl border text-left flex items-center gap-3.5 transition-colors ${
                      isSelected
                        ? "bg-[#1A1410] text-[#FCFAF7] border-[#B85D3B] shadow-md"
                        : "bg-[#F4EFE6]/80 hover:bg-[#EAE2D5] text-[#261F1A] border-[#DFD6C6]"
                    }`}
                  >
                    <div className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0 bg-[#261F1A] border border-white/10">
                      <img
                        src={reel.posterSrc}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                        <Play
                          size={14}
                          weight="fill"
                          className={isSelected ? "text-[#C59B27]" : "text-white"}
                        />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 text-[10px] font-mono uppercase">
                        <span className={isSelected ? "text-[#C59B27] font-bold" : "text-[#B85D3B] font-semibold"}>
                          {reel.location}
                        </span>
                        <span className="opacity-75 tabular-nums">{reel.durationLabel}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-serif font-semibold truncate mt-0.5">
                        {reel.title[locale]}
                      </div>
                      <div className={`text-[11px] truncate ${isSelected ? "text-white/75" : "text-[#54463A]"}`}>
                        {reel.specBadge[locale]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
