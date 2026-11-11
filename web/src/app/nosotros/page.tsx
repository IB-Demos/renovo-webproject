"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { CraftChronology } from "@/components/architectural/CraftChronology";
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
  const {  locale , setActiveRoom } = useRenovo();

  React.useEffect(() => {
    setActiveRoom("patio");
  }, [setActiveRoom]);

  const milestones = [
    {
      year: "2014",
      titleEn: "Workshop Founded in Phoenix",
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
      titleEn: "Independent Phoenix Cabinetry & Millwork Workshop",
      titleEs: "Taller Independiente de Ebanistería y Lacas en Phoenix",
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
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT 7 COLS: FOUNDER STORY */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF7] text-[#1A1410] border border-[#DFD6C6] text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                  <span>{locale === "en" ? "CRAFTED IN PHOENIX · OVER 10 YEARS" : "EBANISTERÍA EN PHOENIX · MÁS DE 10 AÑOS"}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-[#B85D3B] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs">
                  <Certificate size={14} weight="fill" />
                  <span>{locale === "en" ? "Master Craftsman Raul Burgos" : "Maestro Ebanista Raul Burgos"}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-serif text-[#1A1410] tracking-tight leading-[1.08]">
                {locale === "en"
                  ? "Rooted in Passion, Precision and Enduring Arizona Craft."
                  : "Pasión por la Madera, Precisión y Artesanía que Perdura."}
              </h1>

              <p className="text-base sm:text-lg text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "Founded by master craftsman Raul Burgos, Renovo Painting Solutions was built on an uncompromising standard: treat every residential kitchen, arched bookcase, and entrance portico as an heirloom architectural commission. Operating from our Phoenix workshop on Shangri La Rd."
                  : "Fundada por el maestro ebanista Raul Burgos, Renovo Painting Solutions nació con un principio inquebrantable: tratar cada cocina, librero arqueado y pórtico de entrada como una obra patrimonial de autor. Operamos desde nuestro taller en Shangri La Rd en Phoenix."}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/contacto"
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto transition-all"
                >
                  <span>{locale === "en" ? "Meet with Raul Burgos" : "Reunirte con Raul Burgos"}</span>
                  <ArrowRight size={16} weight="bold" />
                </Link>

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
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">10+ {locale === "en" ? "YEARS" : "AÑOS"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Independent family shop in Phoenix" : "Taller familiar independiente"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">2231 W</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Shangri La Rd workshop & spray booth" : "Shangri La Rd, Phoenix taller propio"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">100% {locale === "en" ? "DIRECT" : "DIRECTO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Direct founder oversight on all work" : "Supervisión personal de Raul"}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: SHOWCASE CARD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/kitchens/kitchen-08.jpg"
                    alt="Master Craftsman Raul Burgos at Renovo Workshop"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold">
                    Master Craftsman
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-bold text-[#1A1410]">
                    Raul Burgos
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#DFD6C6] text-[#1A1410] shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-[#1A1410]">
                      {locale === "en" ? "The Renovo Philosophy" : "La Filosofía Renovo"}
                    </span>
                    <span className="font-mono text-[10px] text-[#B85D3B] font-bold">CALIDAD TOTAL</span>
                  </div>
                  <p className="text-[11px] text-[#3D3228] leading-snug italic font-serif">
                    {locale === "en"
                      ? '"When you touch our cabinetry, you feel zero brush marks, zero roller orange-peel, just pure velvet smoothness that lasts for decades."'
                      : '"Cuando tocas nuestros gabinetes, sientes cero marcas de brocha, cero piel de naranja, solo una tersura de terciopelo que dura por décadas."'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY OF RAUL BURGOS */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/25 text-[#B85D3B] text-xs font-serif italic">
                <span>{locale === "en" ? "The Founder's Vision" : "La Visión del Fundador"}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A] leading-[1.12]">
                {locale === "en"
                  ? "Crafting Spaces with Passion, Warmth and Enduring Soul."
                  : "Creando Espacios con Pasión, Calidez y un Alma que Perdura."}
              </h2>
              <div className="space-y-4 text-base text-[#3D3228] font-normal leading-relaxed">
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
              <div className="p-6 rounded-3xl bg-[#FCFAF7] border-l-4 border-[#B85D3B] shadow-sm mt-8 border border-[#DFD6C6]">
                <p className="text-base sm:text-lg italic font-serif text-[#261F1A]">
                  {locale === "en"
                    ? '"When a client runs their hand along one of our cabinet doors, they immediately feel the difference. There are no brush marks, no rough grain, just pure velvet smoothness that lasts for decades."'
                    : '"Cuando un cliente pasa la mano por una de nuestras puertas, siente la diferencia de inmediato. Cero marcas de brocha, cero grano áspero, solo una tersura aterciopelada que perdura décadas."'}
                </p>
                <div className="mt-3 font-serif text-xs uppercase tracking-wider text-[#B85D3B] font-bold">
                  Raul Burgos · Founder & Master Craftsman
                </div>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-[#DFD6C6] shadow-xl">
                <img
                  src="/assets/kitchens/kitchen-03.jpg"
                  alt="Renovo Kitchen in Paradise Valley"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-[#DFD6C6] shadow-sm">
                  <img
                    src="/assets/blueprints-and-docs/custom-furniture-19.jpg"
                    alt="Illuminated White Oak Wine & Stemware Hutch by Renovo"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#DFD6C6] shadow-sm">
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

      {/* 3. THE 7-STAGE CRAFT CHRONOLOGY */}
      <CraftChronology />

      {/* 4. FOUR PILLARS OF CRAFT */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/25 text-[#B85D3B] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Uncompromising Quality" : "Calidad sin Concesiones"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en" ? "The Four Pillars of Renovo" : "Los Cuatro Pilares de Renovo"}
            </h2>
            <p className="text-base text-[#3D3228] font-normal">
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
                  className="p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-4 hover:border-[#B85D3B]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#B85D3B]/10 border border-[#B85D3B]/20 flex items-center justify-center text-[#B85D3B]">
                    <Icon size={24} weight="fill" />
                  </div>
                  <h3 className="text-xl font-semibold font-serif text-[#261F1A]">
                    {locale === "en" ? p.titleEn : p.titleEs}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
                    {locale === "en" ? p.descEn : p.descEs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COMPANY TIMELINE / MILESTONES */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/25 text-[#B85D3B] text-xs font-serif italic">
              <Sparkle size={14} />
              <span>{locale === "en" ? "Our Journey" : "Nuestro Trayecto"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en"
                ? "Over 10 Years of Continuous Craft Evolution"
                : "Más de 10 Años de Evolución y Excelencia"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-[#B85D3B]/40 space-y-3">
                <span className="font-serif text-2xl font-bold text-[#B85D3B] block">
                  {m.year}
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#261F1A]">
                  {locale === "en" ? m.titleEn : m.titleEs}
                </h3>
                <p className="text-xs sm:text-sm text-[#3D3228] leading-relaxed">
                  {locale === "en" ? m.descEn : m.descEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WORKSHOP & SERVICE REGION */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-serif text-[#B85D3B] uppercase tracking-wider font-semibold">
                <MapPin size={16} />
                <span>{locale === "en" ? "PHOENIX WORKSHOP & SHOWROOM" : "TALLER Y SALA DE MUESTRAS EN PHOENIX"}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
                {COMPANY_INFO.address.street}
              </h2>
              <p className="text-base text-[#3D3228] font-normal leading-relaxed">
                {locale === "en"
                  ? `Located at ${COMPANY_INFO.address.full}, our dedicated workshop houses our precision woodworking tools, mock-up stations, and industrial spray booths. Homeowners, interior designers, and architects are welcome by appointment.`
                  : `Ubicado en ${COMPANY_INFO.address.full}, nuestro taller alberga herramientas de ebanistería de precisión, estaciones de ensamble y cabinas de pintura industrial. Propietarios, diseñadores y arquitectos son bienvenidos previa cita.`}
              </p>

              <div className="pt-2">
                <div className="text-xs font-serif uppercase tracking-wider text-[#54463A] mb-3 font-semibold">
                  {locale === "en" ? "PRIMARY SERVICE AREAS" : "ÁREAS DE SERVICIO PRINCIPALES"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-xs text-[#261F1A] font-serif"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-[#261F1A]">
                  {locale === "en" ? "Schedule a Workshop Visit or In-Home Consultation" : "Agenda una Visita al Taller o Consulta a Domicilio"}
                </h3>
                <p className="text-sm text-[#3D3228] leading-relaxed">
                  {locale === "en"
                    ? "Discuss your custom kitchen layout, examine full-scale wood and door samples, or inspect our 2K velvet finishes in person."
                    : "Platica sobre la distribución de tu cocina, examina muestras físicas de maderas y puertas, o inspecciona en persona nuestras lacas 2K."}
                </p>
                <div className="space-y-3 pt-2 text-sm">
                  <div className="flex items-center gap-3 text-[#261F1A]">
                    <Phone size={18} className="text-[#B85D3B]" />
                    <a href={COMPANY_INFO.phoneHref} className="hover:text-[#B85D3B] font-serif font-semibold">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[#261F1A]">
                    <MapPin size={18} className="text-[#B85D3B]" />
                    <span>{COMPANY_INFO.address.full}</span>
                  </div>
                  <div className="pt-2 flex items-center gap-4 text-xs font-serif text-[#3D3228]">
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#B85D3B] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      <span>Instagram</span>
                    </a>
                    <span>·</span>
                    <a
                      href={COMPANY_INFO.yelpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#D32323] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-[#D32323]" viewBox="0 0 24 24">
                        <path d="M12.003 0c-.39 0-.745.242-.892.607l-1.895 4.708a.959.959 0 0 0 .42 1.185l4.382 2.53a.96.96 0 0 0 1.26-.353l2.42-4.47a.958.958 0 0 0-.324-1.218L13.23.473a.965.965 0 0 0-.726-.473h-.5zM8.38 8.65a.96.96 0 0 0-1.23-.448L2.49 10.37a.958.958 0 0 0-.528 1.15l1.045 4.966c.094.446.49.76.945.753a.96.96 0 0 0 .452-.116l4.57-2.17a.959.959 0 0 0 .49-1.157l-1.084-5.146zm8.852.793a.959.959 0 0 0-.877.568l-2.03 4.652a.96.96 0 0 0 .463 1.168l4.49 2.332a.96.96 0 0 0 1.25-.4l2.25-4.557a.958.958 0 0 0-.363-1.206l-4.14-2.274a.966.966 0 0 0-.443-.283h-.6zm-5.717 6.42a.96.96 0 0 0-1.253.376l-2.348 4.507a.958.958 0 0 0 .34 1.213l4.184 2.193c.153.08.322.12.49.12.37 0 .72-.212.877-.56l1.968-4.678a.96.96 0 0 0-.437-1.18l-3.82-1.99z" />
                      </svg>
                      <span>Yelp Reviews</span>
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contacto"
                    className="interactive-control w-full min-h-[50px] px-6 py-3.5 rounded-xl bg-[#B85D3B] hover:bg-[#A34E2F] text-white text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
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
