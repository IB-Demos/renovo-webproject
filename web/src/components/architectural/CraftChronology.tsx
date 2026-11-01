"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import {
  Clock,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Sparkle,
  Wrench,
  Flame,
  Crosshair,
  Drop,
  Stack,
} from "@phosphor-icons/react";

interface Stage {
  step: string;
  day: { en: string; es: string };
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  equipment: string;
  image: string;
  inspectionStandard: { en: string; es: string };
  description: { en: string; es: string };
  craftsmanTip: { en: string; es: string };
}

const CRAFT_STAGES: Stage[] = [
  {
    step: "01",
    day: { en: "Day 1 · Disassembly", es: "Día 1 · Desmontaje" },
    title: {
      en: "Coded Disassembly & Hardware Vault",
      es: "Desmontaje Codificado y Protección de Herrajes",
    },
    subtitle: {
      en: "Every hinge, screw, and door face receives a laser-engraved ID tag.",
      es: "Cada bisagra, tornillo y frente recibe una etiqueta numérica individual.",
    },
    equipment: "Laser Labeler, Padded Transit Racks, Heavy ZipWall Containment",
    image: "/assets/before-after/project-01-before/before-01.jpg",
    inspectionStandard: {
      en: "Zero lost fasteners; full zip-sealed kitchen containment with HEPA air scrubbers.",
      es: "Cero tornillos extraviados; sellado perimetral con presión negativa HEPA.",
    },
    description: {
      en: "Ordinary contractors unscrew doors haphazardly and toss hinges in a bucket. We catalog every single door, drawer front, and Blum hinge with a specific coordinate code. Doors are packed into custom padded transit cradles and transported to our Shangri La Rd facility.",
      es: "Los pintores convencionales retiran las puertas sin orden y echan los tornillos a una cubeta. En Renovo codificamos cada frente y bisagra con coordenadas exactas. Las piezas viajan protegidas en racks acolchados hacia nuestro taller en Shangri La Rd.",
    },
    craftsmanTip: {
      en: "Even identical cabinet openings have minute millimeter variances. Coding ensures every door returns to its exact micro-alignment.",
      es: "Incluso aberturas de apariencia idéntica tienen variaciones milimétricas. La codificación garantiza que cada puerta regrese a su nivel perfecto.",
    },
  },
  {
    step: "02",
    day: { en: "Day 2 · Surface Prep", es: "Día 2 · Preparación" },
    title: {
      en: "Festool HEPA Dustless Orbital Sanding",
      es: "Lijado Orbital con Extracción HEPA Festool",
    },
    subtitle: {
      en: "Eliminating old amber varnish and grease down to raw hardwood pores.",
      es: "Retiro total de barniz viejo y grasas hasta los poros limpios de la madera.",
    },
    equipment: "Festool Rotex Dual-Mode Sanders, CT-MIDI HEPA Dust Extractors",
    image: "/assets/blueprints-and-docs/custom-furniture-03.jpg",
    inspectionStandard: {
      en: "99.97% dust capture at the sandpaper surface; zero airborne residue inside your living room.",
      es: "99.97% de captura de polvo al lijar; cero residuos en el aire de tu residencia.",
    },
    description: {
      en: "We abrade through sequential grits (80 -> 120 -> 180 -> 220). Using Festool direct-suction sanders, old kitchen grease and failing builder lacquer are completely stripped away without creating dust clouds in your home.",
      es: "Lijamos en secuencias progresivas (grano 80 -> 120 -> 180 -> 220). Con lijadoras Festool de succión directa, removemos grasa acumulada y acabados vencidos sin levantar polvo en el interior de tu hogar.",
    },
    craftsmanTip: {
      en: "Paint sprayed over unwashed grease will bubble and peel within 12 months. Mechanical sanding to virgin wood is non-negotiable.",
      es: "La pintura aplicada sobre grasa invisible se desprende en un año. El lijado mecánico hasta el poro virgen no es negociable.",
    },
  },
  {
    step: "03",
    day: { en: "Day 3 · Foundation", es: "Día 3 · Imprimación" },
    title: {
      en: "Tannin-Lock High-Adhesion Primer",
      es: "Sellado Bloqueador de Taninos y Adherencia Química",
    },
    subtitle: {
      en: "Epoxy/alkyd barrier coat preventing Arizona oak bleed-through.",
      es: "Barrera epóxica que bloquea manchas y sangrado de la veta del encino.",
    },
    equipment: "High-Solids Adhesion Resin, Solvent Extraction Booth",
    image: "/assets/painting-interior/interior-03.jpg",
    inspectionStandard: {
      en: "Cross-hatch test rated 5B (ASTM D3359 zero adhesion loss).",
      es: "Prueba de cuadrícula grado 5B (adherencia total bajo norma ASTM D3359).",
    },
    description: {
      en: "Arizona oak cabinets are packed with natural acidic tannins. Water-based house paint causes yellow and brown blotches to seep through. We apply an industrial high-solids primer that chemically cross-links with the wood fibers.",
      es: "Los gabinetes de encino contienen taninos ácidos naturales. La pintura de casa vinílica hace que broten manchas amarillas. Aplicamos un primer de altos sólidos de grado industrial que sella químicamente las fibras.",
    },
    craftsmanTip: {
      en: "The primer is the foundation of your kitchen. If the primer doesn't bond at a molecular level, even the most expensive topcoat will fail.",
      es: "El primer es el cimiento de la cocina. Si la base no ancla a nivel molecular, cualquier acabado costoso terminará desprendiéndose.",
    },
  },
  {
    step: "04",
    day: { en: "Day 3–4 · Micro-Leveling", es: "Día 3–4 · Nivelado" },
    title: {
      en: "Surgical Micro-Contour Leveling",
      es: "Masillado Quirúrgico y Nivelado de Imperfecciones",
    },
    subtitle: {
      en: "Inspected under 1000-lumen raking light to eradicate every pinhole.",
      es: "Inspección con luz rasante para eliminar cada poro y marca de ensamble.",
    },
    equipment: "Catalyzed Glazing Putty, Flexible Japanese Trowels",
    image: "/assets/blueprints-and-docs/custom-furniture-05.jpg",
    inspectionStandard: {
      en: "Glass-smooth tactile touch; zero shadow lines under angled directional lighting.",
      es: "Tacto terso de cristal; cero sombras o desniveles bajo iluminación angular.",
    },
    description: {
      en: "Every open grain seam, nail punch, and micro-dent is hand-filled with two-component catalyzed glaze putty. Once dry, it is block-sanded flat by hand until the surface feels identical to polished porcelain.",
      es: "Cada fisura de veta, orificio de clavo y micro-golpe se rellena a mano con masilla catalizada bicomponente. Al secar, se bloquea a mano con taco plano hasta lograr una tersura idéntica a la porcelana pulida.",
    },
    craftsmanTip: {
      en: "You don't feel quality with your eyes; you feel it when your fingers slide across the cabinet face without finding a single ridge.",
      es: "La calidad no solo se ve con los ojos; se siente cuando deslizas los dedos y no encuentras una sola rugosidad.",
    },
  },
  {
    step: "05",
    day: { en: "Day 4 · Factory Coating", es: "Día 4 · Cabina 2K" },
    title: {
      en: "2K Catalyzed Polyurethane Factory Spray",
      es: "Aspersión de Laca Catalizada 2K en Cabina",
    },
    subtitle: {
      en: "Positive-pressure climate-controlled spray booth at Shangri La Rd.",
      es: "Cabina presurizada con filtración de aire sin partículas en Phoenix.",
    },
    equipment: "Kremlin Air-Assisted Airless Sprayers, Positive Pressure Clean Booth",
    image: "/assets/kitchens/kitchen-14.jpg",
    inspectionStandard: {
      en: "Zero brush marks, zero roller stipple; uniform 4-mil wet film thickness.",
      es: "Cero marcas de brocha o rodillo; espesor homogéneo de 4 milésimas de pulgada.",
    },
    description: {
      en: "In our Phoenix spray booth, cabinet doors are sprayed lying flat under filtered air. We spray premium Italian polyurethane blended with a chemical isocyanate hardener. In your home, the face frames receive the identical coating inside hermetic containment.",
      es: "En nuestra cabina de Phoenix, las puertas se colocan en mesas giratorias horizontales bajo aire filtrado. Aplicamos poliuretano industrial mezclado con endurecedor catalizador. En tu casa, los bastidores fijos reciben el mismo acabado hermético.",
    },
    craftsmanTip: {
      en: "This is not paint from a home improvement store. It is the same catalyzed finish used on Steinway pianos and luxury yachts.",
      es: "Esto no es pintura de ferretería. Es el mismo acabado catalizado utilizado en pianos de concierto y yates de lujo.",
    },
  },
  {
    step: "06",
    day: { en: "Day 5 · Molecular Cure", es: "Día 5 · Curado" },
    title: {
      en: "Molecular Bake & Chemical Cure",
      es: "Curado Molecular y Control de Calidad",
    },
    subtitle: {
      en: "Heat and humidity managed drying creating a rock-hard enamel shell.",
      es: "Secado a temperatura y humedad controlada para una dureza impenetrable.",
    },
    equipment: "Infrared Thermal Curing Array, Digital 60° Gloss Meter",
    image: "/assets/kitchens/kitchen-05.jpg",
    inspectionStandard: {
      en: "Resistant to boiling water, cooking oil, mustard, red wine, and abrasive sponges.",
      es: "Resistencia certificada a grasa caliente, mostaza, vino tinto y calor de cocina.",
    },
    description: {
      en: "While standard latex paint takes 30 days to soft-dry, 2K polyurethane achieves full chemical polymerization within 24 hours. The resulting molecular shell can be wiped down with dish soap and degreaser without ever dulling.",
      es: "Mientras la pintura vinílica tarda semanas en curar, el poliuretano 2K alcanza polimerización química completa en 24 horas. La coraza molecular resultante se limpia con jabón y desengrasante sin perder jamás su tersura.",
    },
    craftsmanTip: {
      en: "A cured 2K finish passes all KCMA (Kitchen Cabinet Manufacturers Association) chemical and impact tests.",
      es: "El acabado 2K supera todas las pruebas de resistencia a químicos y solventes del estándar industrial KCMA.",
    },
  },
  {
    step: "07",
    day: { en: "Day 5–7 · Precision Rehang", es: "Día 5–7 · Instalación" },
    title: {
      en: "Laser Re-Hanging & Blum Calibration",
      es: "Reinstalación con Nivel Láser y Ajuste Blum",
    },
    subtitle: {
      en: "Micro-adjusting every reveal to exactly 1/16\" architectural tolerance.",
      es: "Calibración milimétrica de holguras con holgura visual perfecta de 1/16\".",
    },
    equipment: "Bosch Green Cross-Line Lasers, Blum 3-Way Micro Drivers",
    image: "/assets/kitchens/kitchen-01.jpg",
    inspectionStandard: {
      en: "100% flush face reveals; silent hydraulic soft-close damping on every door.",
      es: "Alineación 100% al ras; cierre amortiguado silencioso en cada puerta y cajón.",
    },
    description: {
      en: "Doors return from the workshop wrapped in furniture blankets. Using green cross-line lasers, Raul and our installation team tune the 3-way adjustment cams on every Blum hinge until shadows between doors are completely uniform.",
      es: "Las puertas regresan del taller envueltas en cobijas de mudanza acolchadas. Con niveles láser de línea verde, Raul y nuestro equipo ajustan las levas de cada bisagra Blum hasta que la separación entre puertas sea uniforme.",
    },
    craftsmanTip: {
      en: "When you shut a cabinet door, you should hear nothing except a whisper of cushioned air. That is the signature of Renovo.",
      es: "Al cerrar una puerta de gabinete, no debes escuchar ningún golpe, solo un suspiro de aire amortiguado. Esa es la firma de Renovo.",
    },
  },
];

export function CraftChronology() {
  const { locale } = useRenovo();
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const activeStage = CRAFT_STAGES[activeStageIdx];

  return (
    <section className="py-20 lg:py-28 bg-[#0E0C09] text-[#FAF8F5] border-b border-white/8 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
              <Clock size={15} />
              <span>
                {locale === "en"
                  ? "The 7-Stage Craft Chronology · Phoenix Shop Process"
                  : "El Diario de Taller en 7 Etapas · Proceso de Taller en Phoenix"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#FAF8F5] tracking-tight">
              {locale === "en"
                ? "What Ordinary House Painters Skip."
                : "Lo que los Pintores Ordinarios se Saltan."}
            </h2>

            <p className="text-base text-[#D4CBBF] font-light leading-relaxed">
              {locale === "en"
                ? "A \$10,000+ kitchen transformation requires cleanroom extraction, molecular primers, and factory spray booths. Walk through our step-by-step chronology at our 2231 W Shangri La Rd workshop."
                : "Una transformación de cocina de \$10,000+ USD exige extracción de polvo, selladores moleculares y cabina de aspersión. Conoce el paso a paso de nuestro taller en 2231 W Shangri La Rd."}
            </p>
          </div>

          <div className="text-xs font-serif text-[#A69B8F] max-w-xs self-start lg:self-auto space-y-1">
            <span className="text-[var(--gold)] font-semibold block">
              {locale === "en" ? "KCMA Certified Factory Standard" : "Estándar de Fábrica KCMA"}
            </span>
            <p className="text-[11px] leading-relaxed">
              {locale === "en"
                ? "Tested for moisture resistance, grease repellency, and decade-long adhesion."
                : "Probado para resistir humedad, vapor, grasa y adherencia por décadas."}
            </p>
          </div>
        </div>

        {/* 7-Step Navigation Tabs (Desktop Stepper & Mobile Swipe) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {CRAFT_STAGES.map((stage, idx) => {
            const isActive = activeStageIdx === idx;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStageIdx(idx)}
                className={`interactive-control p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isActive
                    ? "bg-[#221B14] border-[var(--gold)] shadow-md"
                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-serif text-xs font-bold ${
                      isActive ? "text-[var(--gold)]" : "text-[#8A7F73]"
                    }`}
                  >
                    STEP {stage.step}
                  </span>
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                  )}
                </div>

                <div className="mt-2">
                  <span className="text-[11px] text-[#A69B8F] block font-serif">
                    {stage.day[locale]}
                  </span>
                  <span
                    className={`text-xs font-serif font-semibold block truncate mt-0.5 ${
                      isActive ? "text-white" : "text-[#D4CBBF]"
                    }`}
                  >
                    {locale === "en" ? stage.title.en.split("&")[0] : stage.title.es.split("y")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Display (Photo Left, Deep Technical Narrative Right) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Visual Viewport */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-[#181410] border border-white/10 shadow-2xl relative">
              <div className="aspect-[16/11] w-full overflow-hidden bg-black/60 relative">
                <img
                  src={activeStage.image}
                  alt={activeStage.title[locale]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs font-serif text-[var(--gold)] border border-white/10">
                  {activeStage.day[locale]} · {locale === "en" ? "Phoenix Shop" : "Taller Shangri La"}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-serif italic text-white/90">
                    {activeStage.subtitle[locale]}
                  </span>
                </div>
              </div>

              {/* Equipment Banner */}
              <div className="p-4 bg-[#120F0C] border-t border-white/8 flex items-center justify-between text-xs">
                <span className="text-[#8A7F73] font-serif">
                  {locale === "en" ? "Tooling & Tech:" : "Herramientas:"}
                </span>
                <span className="font-serif text-[#D4CBBF] text-right truncate pl-2">
                  {activeStage.equipment}
                </span>
              </div>
            </div>

            {/* Technical Narrative & Master Craftsman Insight */}
            <div className="lg:col-span-6 rounded-3xl bg-[#181410] border border-white/10 p-6 sm:p-8 shadow-xl space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif text-[var(--gold)] font-bold">
                    STAGE {activeStage.step} OF 07
                  </span>
                  <span className="text-xs text-white/30">/</span>
                  <span className="text-xs font-serif italic text-[#A69B8F]">
                    {activeStage.day[locale]}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white leading-snug">
                  {activeStage.title[locale]}
                </h3>

                <p className="text-sm text-[#D4CBBF] font-light leading-relaxed pt-2">
                  {activeStage.description[locale]}
                </p>
              </div>

              {/* Inspection Standard Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-[var(--gold)] font-serif font-semibold">
                  <ShieldCheck size={16} />
                  <span>
                    {locale === "en" ? "Renovo Inspection Standard:" : "Criterio de Inspección Renovo:"}
                  </span>
                </div>
                <p className="text-[#D8CFBF] leading-relaxed">
                  {activeStage.inspectionStandard[locale]}
                </p>
              </div>

              {/* Craftsman Tip */}
              <div className="p-4 rounded-2xl bg-[#120F0C] border-l-4 border-[var(--gold)] text-xs font-serif italic text-[#D4CBBF] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[var(--gold)] block not-italic tracking-wider">
                  Raul Burgos · Master Cabinetmaker
                </span>
                <p>&ldquo;{activeStage.craftsmanTip[locale]}&rdquo;</p>
              </div>

              {/* Quick Jump Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-white/8 text-xs">
                <button
                  type="button"
                  disabled={activeStageIdx === 0}
                  onClick={() => setActiveStageIdx((prev) => Math.max(0, prev - 1))}
                  className="interactive-control px-4 py-2 rounded-xl text-[#A69B8F] hover:text-white disabled:opacity-30 disabled:hover:text-[#A69B8F] font-serif transition-colors"
                >
                  &larr; {locale === "en" ? "Previous Stage" : "Etapa Anterior"}
                </button>

                <button
                  type="button"
                  disabled={activeStageIdx === CRAFT_STAGES.length - 1}
                  onClick={() => setActiveStageIdx((prev) => Math.min(CRAFT_STAGES.length - 1, prev + 1))}
                  className="interactive-control px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-serif transition-colors flex items-center gap-1.5 disabled:opacity-30"
                >
                  <span>{locale === "en" ? "Next Stage" : "Siguiente Etapa"}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
