"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  MapPin,
  Certificate,
  Wrench,
  ShieldCheck,
  Plant,
} from "@phosphor-icons/react";

export default function AboutPage() {
  const { locale } = useRenovo();

  const milestones = [
    {
      year: "2014",
      titleEn: "Atelier Founded in Phoenix",
      titleEs: "Fundación del Taller en Phoenix",
      descEn: "Raul Burgos established the workshop to bring true European-level furniture joinery and factory finishing to Arizona homeowners.",
      descEs: "Raul Burgos fundó el taller con la visión de traer ebanistería fina de nivel europeo y acabados de fábrica a los hogares de Arizona.",
    },
    {
      year: "2017",
      titleEn: "2K Catalyzed Chemistry Investment",
      titleEs: "Inversión en Química Catalizada 2K",
      descEn: "Pioneered specialized spray booths and industrial two-component polyurethane lacquers, eliminating traditional brush paint failures forever.",
      descEs: "Pioneros en cabinas de aspersión y lacas poliuretano de dos componentes, eliminando para siempre las fallas de la pintura tradicional.",
    },
    {
      year: "2020",
      titleEn: "Expansion to Architectural Millwork",
      titleEs: "Expansión a Muebles Arqueados y Millwork",
      descEn: "Expanded capability into bespoke arched oak built-ins, hidden speakeasy bars, fluted entertainment walls, and custom range hoods.",
      descEs: "Ampliación de capacidades hacia libreros arqueados en roble, cavas ocultas, muros con listones de madera y campanas de diseño.",
    },
    {
      year: "2024+",
      titleEn: "The Premier Luxury Phoenix Studio",
      titleEs: "El Estudio de Referencia en Phoenix",
      descEn: "Operating from our 2231 W Shangri La Rd workshop, serving Paradise Valley, Scottsdale, Arcadia, and the entire Valley of the Sun.",
      descEs: "Operando desde nuestro taller en Shangri La Rd, sirviendo a Paradise Valley, Scottsdale, Arcadia y todo el Valle del Sol.",
    },
  ];

  const pillars = [
    {
      icon: Certificate,
      titleEn: "True Solid Hardwoods",
      titleEs: "Maderas Nobles Auténticas",
      descEn: "We build face frames and structural components from solid Rift-Cut White Oak, Hard Maple, and American Walnut, never flimsy particle board.",
      descEs: "Construimos marcos y componentes con roble blanco seleccionado, maple macizo y nogal americano, nunca aglomerados endebles.",
    },
    {
      icon: ShieldCheck,
      titleEn: "2K Catalyzed Factory Spray",
      titleEs: "Lacas Catalizadas 2K",
      descEn: "Our coatings undergo a molecular cross-linking cure that is completely impervious to boiling water, cooking grease, and harsh cleaning agents.",
      descEs: "Nuestras lacas curan químicamente mediante entrecruzamiento molecular, haciéndolas inmunes al agua caliente, la grasa y limpiadores.",
    },
    {
      icon: Wrench,
      titleEn: "Master Phoenix Craftsmanship",
      titleEs: "Artesanos Locales en Phoenix",
      descEn: "Every cabinet box, dovetail drawer, and curved arch is measured, assembled, and finished under the direct supervision of Raul Burgos.",
      descEs: "Cada gabinete, cajón en cola de milano y arco curvado se mide, ensambla y acaba bajo la supervisión directa de Raul Burgos.",
    },
    {
      icon: Plant,
      titleEn: "Sustainable Low-VOC Practices",
      titleEs: "Acabados Sustentables y Saludables",
      descEn: "We utilize eco-friendly, ultra-low VOC finishing formulations that cure rapidly without releasing harmful odors into your living spaces.",
      descEs: "Utilizamos formulaciones con bajísimo contenido de COV que curan velozmente sin emitir olores nocivos en tu hogar.",
    },
  ];

  const serviceAreas = [
    "Phoenix",
    "Paradise Valley",
    "Scottsdale",
    "Arcadia",
    "Peoria",
    "Glendale",
    "Cave Creek",
    "Carefree",
    "Fountain Hills",
    "Chandler",
    "Gilbert",
    "Mesa",
  ];

  return (
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/assets/blueprints-and-docs/custom-furniture-01.jpg"
            alt="Renovo Craftsmanship Workshop"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A] via-[#0E0C0A]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "HERITAGE & CRAFTSMANSHIP" : "HISTORIA Y ARTESANÍA"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#FAF8F5] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Born in Phoenix. Devoted to High-End Living."
                : "Nacidos en Phoenix. Dedicados al Detalle y el Arte."}
            </h1>

            <p className="text-base sm:text-xl text-[#B8AEA2] font-light leading-relaxed">
              {locale === "en"
                ? "Led by master craftsman Raul Burgos, Renovo Painting Solutions has spent over a decade perfecting the synthesis of fine custom woodworking and flawless factory architectural finishes."
                : "Dirigido por el maestro ebanista Raul Burgos, Renovo ha perfeccionado durante más de una década la unión entre ebanistería fina a medida y acabados arquitectónicos impecables."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contacto"
                className="interactive-control min-h-[48px] px-8 py-3.5 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <span>{locale === "en" ? "Meet with Raul Burgos" : "Reunirte con Raul Burgos"}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control min-h-[48px] px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY OF RAUL BURGOS */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
                {locale === "en" ? "THE FOUNDER'S VISION" : "LA VISIÓN DEL FUNDADOR"}
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5] leading-[1.12]">
                {locale === "en"
                  ? "Crafting Spaces with Passion, Warmth and Enduring Soul."
                  : "Creando Espacios con Pasión, Calidez y un Alma que Perdura."}
              </h2>
              <div className="space-y-4 text-base text-[#B8AEA2] font-light leading-relaxed">
                <p>
                  {locale === "en"
                    ? "Renovo started with a simple observation: homeowners throughout the Phoenix Valley were frustrated by generic cabinet companies that delivered flimsy mass-produced boxes and local house painters whose brush marks chipped within months."
                    : "Renovo nació de una observación simple: las familias de Phoenix estaban cansadas de empresas de gabinetes genéricas que entregaban cajas endebles y de pintores convencionales cuyos acabados se descascaraban a los pocos meses."}
                </p>
                <p>
                  {locale === "en"
                    ? "Raul Burgos built Renovo around an uncompromising standard: treat every kitchen, every arched fireplace bookcase, and every bathroom vanity as a piece of heirloom architectural furniture. That means solid hardwood joinery, hand-fitted doors, and chemical-cured 2K catalyzed lacquers applied in climate-controlled spray booths."
                    : "Raul Burgos construyó Renovo bajo un estándar inflexible: tratar cada cocina, cada librero arqueado y cada vanitorio como una pieza de ebanistería arquitectónica patrimonial. Eso se traduce en ensambles de madera maciza, puertas ajustadas al milímetro y lacas catalizadas 2K aplicadas en cabina profesional."}
                </p>
              </div>

              {/* Verified Quote Callout */}
              <div className="p-6 rounded-3xl bg-white/5 border-l-4 border-[var(--gold)] mt-8">
                <p className="text-base sm:text-lg italic font-serif text-[#FAF8F5]">
                  {locale === "en"
                    ? '"When a client runs their hand along one of our cabinet doors, they immediately feel the difference. There are no brush marks, no rough grain, just pure velvet smoothness that lasts for decades."'
                    : '"Cuando un cliente pasa la mano por una de nuestras puertas, siente la diferencia de inmediato. Cero marcas de brocha, cero grano áspero, solo una tersura aterciopelada que perdura décadas."'}
                </p>
                <div className="mt-3 font-mono text-xs uppercase tracking-wider text-[var(--gold)] font-bold">
                  Raul Burgos · Founder & Master Craftsman
                </div>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/assets/kitchens/kitchen-05.jpg"
                  alt="Renovo Kitchen in Paradise Valley"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md">
                  <img
                    src="/assets/blueprints-and-docs/custom-furniture-04.jpg"
                    alt="Custom Furniture Detail"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md">
                  <img
                    src="/assets/painting-interior/interior-02.jpg"
                    alt="Interior Paint Detail"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS OF CRAFT */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "UNCOMPROMISING QUALITY" : "CALIDAD SIN CONCESIONES"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en" ? "The Four Pillars of Renovo" : "Los Cuatro Pilares de Renovo"}
            </h2>
            <p className="text-base text-[#B8AEA2] font-light">
              {locale === "en"
                ? "Every kitchen, finish, and custom built-in is backed by four distinct commitments."
                : "Cada cocina, acabado y mueble a medida está respaldado por cuatro compromisos innegociables."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-lg space-y-4 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)]">
                    <Icon size={24} weight="fill" />
                  </div>
                  <h3 className="text-xl font-normal font-serif text-[#FAF8F5]">
                    {locale === "en" ? p.titleEn : p.titleEs}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A69B8F] leading-relaxed">
                    {locale === "en" ? p.descEn : p.descEs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMPANY TIMELINE / MILESTONES */}
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "OUR JOURNEY" : "NUESTRO TRAYECTO"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en"
                ? "Over 10 Years of Continuous Craft Evolution"
                : "Más de 10 Años de Evolución y Excelencia"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-[var(--gold)]/40 space-y-3">
                <span className="font-mono text-2xl font-bold text-[var(--gold)] block">
                  {m.year}
                </span>
                <h3 className="text-lg font-serif font-normal text-white">
                  {locale === "en" ? m.titleEn : m.titleEs}
                </h3>
                <p className="text-xs sm:text-sm text-[#A69B8F] leading-relaxed">
                  {locale === "en" ? m.descEn : m.descEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORKSHOP & SERVICE REGION */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--gold)] uppercase tracking-wider">
                <MapPin size={16} />
                <span>{locale === "en" ? "PHOENIX WORKSHOP & SHOWROOM" : "TALLER Y SALA DE MUESTRAS EN PHOENIX"}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
                {COMPANY_INFO.address.street}
              </h2>
              <p className="text-base text-[#B8AEA2] font-light leading-relaxed">
                {locale === "en"
                  ? `Located at ${COMPANY_INFO.address.full}, our dedicated workshop houses our precision woodworking tools, mock-up stations, and industrial spray booths. Homeowners, interior designers, and architects are welcome by appointment.`
                  : `Ubicado en ${COMPANY_INFO.address.full}, nuestro taller alberga herramientas de ebanistería de precisión, estaciones de ensamble y cabinas de pintura industrial. Propietarios, diseñadores y arquitectos son bienvenidos previa cita.`}
              </p>

              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8A7F73] mb-3">
                  {locale === "en" ? "PRIMARY SERVICE AREAS" : "ÁREAS DE SERVICIO PRINCIPALES"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#EAE2D5] font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 shadow-2xl space-y-6 backdrop-blur-xl">
                <h3 className="text-2xl font-serif font-normal text-[#FAF8F5]">
                  {locale === "en" ? "Schedule a Workshop Visit or In-Home Consultation" : "Agenda una Visita al Taller o Consulta a Domicilio"}
                </h3>
                <p className="text-sm text-[#B8AEA2] leading-relaxed">
                  {locale === "en"
                    ? "Discuss your custom kitchen layout, examine full-scale wood and door samples, or inspect our 2K velvet finishes in person."
                    : "Platica sobre la distribución de tu cocina, examina muestras físicas de maderas y puertas, o inspecciona en persona nuestras lacas 2K."}
                </p>
                <div className="space-y-3 pt-2 text-sm">
                  <div className="flex items-center gap-3 text-[#EAE2D5]">
                    <Phone size={18} className="text-[var(--gold)]" />
                    <a href={COMPANY_INFO.phoneHref} className="hover:text-[var(--gold)] font-mono font-semibold">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[#EAE2D5]">
                    <MapPin size={18} className="text-[var(--gold)]" />
                    <span>{COMPANY_INFO.address.full}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contacto"
                    className="interactive-control w-full min-h-[50px] px-6 py-3.5 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <span>{locale === "en" ? "Request an Appointment" : "Solicitar una Cita"}</span>
                    <ArrowRight size={16} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
