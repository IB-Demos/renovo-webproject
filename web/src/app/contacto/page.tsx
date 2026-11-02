"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
import { SampleBoxConcierge } from "@/components/architectural/SampleBoxConcierge";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Sparkle,
  ArrowRight,
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  CheckCircle,
  PaperPlaneTilt,
  ShieldCheck,
} from "@phosphor-icons/react";

export default function ContactPage() {
  const {  locale , setActiveRoom } = useRenovo();

  React.useEffect(() => {
    setActiveRoom("patio");
  }, [setActiveRoom]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "kitchens",
    location: "Phoenix",
    timeline: "1-2-months",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      qEn: "How long does a complete kitchen transformation typically take?",
      qEs: "¿Cuánto tiempo toma una transformación completa de cocina?",
      aEn: "Most residential kitchens take between 5 to 8 working days. Doors and drawer fronts are removed and taken to our Shangri La Rd spray booth for factory spraying, while cabinet face frames are prepped and sprayed in your home using sealed negative-air containment.",
      aEs: "La mayoría de las cocinas residenciales toman de 5 a 8 días hábiles. Retiramos puertas y frentes de cajón a nuestra cabina de taller en Shangri La Rd, mientras los marcos fijos se preparan y esmaltan en sitio bajo sellado hermético y presión negativa.",
    },
    {
      qEn: "What is the difference between 2K catalyzed finish and standard latex paint?",
      qEs: "¿Cuál es la diferencia entre laca catalizada 2K y pintura látex?",
      aEn: "Standard latex is decorative wall paint that dries by simple water evaporation and remains soft and prone to peeling. 2K polyurethane/acrylic cures chemically through a hardening catalyst, creating a glass-smooth, non-porous shield that resists cooking grease, boiling water, and fingernail scratches.",
      aEs: "El látex tradicional es pintura de muro que seca por evaporación y queda blanda, propensa a despegarse. El poliuretano 2K cura químicamente con endurecedor catalizador, formando una capa ultra tersa no porosa que resiste grasa caliente, vapor y rayones.",
    },
    {
      qEn: "Can you build custom islands, range hoods, or arched bookcases from scratch?",
      qEs: "¿Pueden fabricar islas, campanas a medida o libreros arqueados desde cero?",
      aEn: "Yes. In addition to our factory finishing, our Phoenix workshop builds complete custom cabinetry, architectural range hoods, and arched living room built-ins from raw Rift-Cut White Oak, Walnut, and Maple.",
      aEs: "Sí. Además del acabado de fábrica, nuestro taller en Phoenix fabrica cocinas completas a medida, campanas arquitectónicas y libreros arqueados en roble blanco, nogal y maple.",
    },
    {
      qEn: "What areas of Arizona do you serve?",
      qEs: "¿Qué zonas de Arizona atienden?",
      aEn: "We serve the entire Valley of the Sun, including Phoenix, Paradise Valley, Scottsdale, Peoria, Glendale, Arcadia, Cave Creek, Carefree, Chandler, and Gilbert.",
      aEs: "Atendemos todo el Valle del Sol: Phoenix, Paradise Valley, Scottsdale, Peoria, Glendale, Arcadia, Cave Creek, Carefree, Chandler y Gilbert.",
    },
  ];

  return (
    <div className="w-full bg-[#F4EFE6] text-[#261F1A]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#B85D3B]/10 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT 7 COLS: COMMERCIAL CONSULTATION HOOK */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410] text-[#FCFAF7] border border-[#C59B27]/40 text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
                  <span>04 · {locale === "en" ? "CASA RENOVO PRIVATE CONSULTATION" : "CASA RENOVO · CONSULTA EN SITIO"}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#DFD6C6] text-[#B85D3B] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs">
                  <Clock size={14} weight="fill" />
                  <span>{locale === "en" ? "Fast Response < 2 Hours" : "Respuesta Rápida en < 2 Horas"}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-serif text-[#1A1410] tracking-tight leading-[1.08]">
                {locale === "en"
                  ? "Book an On-Site Evaluation with Master Craftsman Raul Burgos."
                  : "Agenda una Evaluación en Sitio con el Maestro Raul Burgos."}
              </h1>

              <p className="text-base sm:text-lg text-[#3D3228] font-normal leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "Meet directly with founder Raul Burgos at your residence in Paradise Valley, Scottsdale, Phoenix, or visit our Shangri La Rd workshop to inspect physical wood samples, dovetail joinery, and 2K finish swatches."
                  : "Reúnete directamente con el fundador Raul Burgos en tu residencia en Paradise Valley, Scottsdale, Phoenix, o visítanos en nuestro taller de Shangri La Rd para examinar muestras de madera, ensambles y acabados 2K."}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href="#contact-form-section"
                  className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto transition-all"
                >
                  <span>{locale === "en" ? "Send Project Details Below" : "Enviar Detalles de tu Proyecto"}</span>
                  <ArrowRight size={16} weight="bold" />
                </a>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control min-h-[52px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs transition-colors"
                >
                  <Phone size={16} className="text-[#B85D3B]" />
                  <span>{locale === "en" ? "Direct Line" : "Línea Directa"}: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#DFD6C6] grid grid-cols-3 gap-3 text-left">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">&lt; 2 {locale === "en" ? "HOURS" : "HORAS"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Rapid consultation turnaround" : "Respuesta rápida garantizada"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">{locale === "en" ? "IN-HOME" : "EN SITIO"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Physical sample kit brought to you" : "Maletín de muestras en tu hogar"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#B85D3B]">0 {locale === "en" ? "PRESSURE" : "PRESIÓN"}</div>
                  <div className="text-[11px] font-serif text-[#3D3228] leading-tight">
                    {locale === "en" ? "Transparent architectural advice" : "Asesoría honesta sin compromiso"}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: SHOWCASE CARD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/painting-exterior/exterior-01.jpg"
                    alt="Renovo Phoenix Consultation and Atelier"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold">
                    Phoenix Workshop
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-bold text-[#1A1410]">
                    2231 W Shangri La Rd
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#DFD6C6] text-[#1A1410] shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-[#1A1410]">
                      {locale === "en" ? "On-Site & Workshop Appointments" : "Citas en Sitio o en Taller"}
                    </span>
                    <span className="font-mono text-[10px] text-[#B85D3B] font-bold">AGENDA ABIERTA</span>
                  </div>
                  <p className="text-[11px] text-[#3D3228] leading-snug">
                    {locale === "en"
                      ? "Serving Paradise Valley, Scottsdale, Arcadia, Phoenix, Peoria, and Cave Creek."
                      : "Atendemos Paradise Valley, Scottsdale, Arcadia, Phoenix, Peoria y Cave Creek."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT INFO + FORM */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#F4EFE6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 5 Cols: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/25 text-[#B85D3B] text-xs font-serif italic">
                  <span>{locale === "en" ? "Direct Channels" : "Canales Directos"}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold font-serif text-[#261F1A]">
                  {locale === "en" ? "Connect with Our Shop" : "Comunícate con Nuestro Taller"}
                </h2>
                <p className="text-sm text-[#3D3228] leading-relaxed">
                  {locale === "en"
                    ? "Speak with master craftsman Raul Burgos directly regarding your architectural plans or to schedule an on-site visit."
                    : "Habla directamente con el maestro ebanista Raul Burgos sobre tus planos o para agendar una visita en sitio."}
                </p>
              </div>

              <div className="space-y-4 text-sm font-serif">
                {/* Phone */}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control p-5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B]/50 flex items-center gap-4 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#B85D3B]/10 border border-[#B85D3B]/20 flex items-center justify-center text-[#B85D3B] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-[#54463A] block uppercase tracking-wider font-semibold">
                      {locale === "en" ? "Phone & Direct Line" : "Teléfono Directo"}
                    </span>
                    <span className="text-base font-semibold text-[#261F1A]">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.emailGeneral}`}
                  className="interactive-control p-5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B]/50 flex items-center gap-4 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#B85D3B]/10 border border-[#B85D3B]/20 flex items-center justify-center text-[#B85D3B] shrink-0">
                    <EnvelopeSimple size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-[#54463A] block uppercase tracking-wider font-semibold">
                      {locale === "en" ? "Email Address" : "Correo Electrónico"}
                    </span>
                    <span className="text-base font-semibold text-[#261F1A]">
                      {COMPANY_INFO.emailGeneral}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#B85D3B]/10 border border-[#B85D3B]/20 flex items-center justify-center text-[#B85D3B] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-[#54463A] block uppercase tracking-wider font-semibold">
                      {locale === "en" ? "Phoenix Workshop" : "Taller en Phoenix"}
                    </span>
                    <span className="text-sm font-medium text-[#261F1A] leading-snug block">
                      {COMPANY_INFO.address.full}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#B85D3B]/10 border border-[#B85D3B]/20 flex items-center justify-center text-[#B85D3B] shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-[#54463A] block uppercase tracking-wider font-semibold">
                      {locale === "en" ? "Hours of Operation" : "Horario de Atención"}
                    </span>
                    <span className="text-sm font-medium text-[#261F1A] block">
                      {locale === "en" ? "Mon – Sat: 7:00 AM – 6:00 PM" : "Lun – Sáb: 7:00 AM – 6:00 PM"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#B85D3B]/15 border border-[#B85D3B] text-[#B85D3B] flex items-center justify-center mx-auto">
                      <CheckCircle size={36} weight="fill" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#261F1A]">
                      {locale === "en" ? "Thank You. Consultation Requested!" : "¡Gracias! Tu Solicitud ha Sido Recibida"}
                    </h3>
                    <p className="text-sm text-[#3D3228] max-w-md mx-auto leading-relaxed font-serif">
                      {locale === "en"
                        ? `Raul Burgos or our senior estimator will review your project details and contact you at ${formData.phone || formData.email || "your provided contact"} within one business day.`
                        : `Raul Burgos o nuestro especialista revisará los detalles de tu proyecto y se comunicará contigo en menos de un día hábil.`}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="interactive-control px-6 py-2.5 rounded-full border border-[#DFD6C6] text-xs font-serif font-semibold uppercase tracking-wider text-[#261F1A] hover:bg-[#EAE2D5] transition-colors"
                    >
                      {locale === "en" ? "Send Another Message" : "Enviar Otra Consulta"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-semibold text-[#261F1A]">
                        {locale === "en" ? "Request an On-Site Consultation" : "Solicita una Evaluación en Sitio"}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#3D3228] font-serif">
                        {locale === "en"
                          ? "Fill in your project details below and we will prepare tailored recommendations before we speak."
                          : "Completa los datos de tu proyecto y prepararemos recomendaciones a medida antes de conversar."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#3D3228] font-semibold">
                          {locale === "en" ? "Full Name *" : "Nombre Completo *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={locale === "en" ? "e.g. Eleanor Vance" : "ej. Carlos Mendoza"}
                          className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B] font-serif placeholder-[#948678]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#3D3228] font-semibold">
                          {locale === "en" ? "Phone Number *" : "Teléfono de Contacto *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(602) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B] font-serif placeholder-[#948678]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#3D3228] font-semibold">
                          {locale === "en" ? "Email Address *" : "Correo Electrónico *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B] font-serif placeholder-[#948678]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#3D3228] font-semibold">
                          {locale === "en" ? "Primary Service *" : "Servicio de Interés *"}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B] font-serif"
                        >
                          <option value="kitchens">
                            {locale === "en" ? "Custom Kitchens & Cabinetry" : "Cocinas a Medida y Gabinetes"}
                          </option>
                          <option value="furniture">
                            {locale === "en" ? "Custom Built-Ins & Millwork" : "Muebles a Medida y Built-Ins"}
                          </option>
                          <option value="refacing">
                            {locale === "en" ? "2K Factory Cabinet Refinishing" : "Lacas Catalizadas 2K para Gabinetes"}
                          </option>
                          <option value="painting">
                            {locale === "en" ? "Full Residential Interior/Exterior" : "Pintura Residencial Integral"}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#3D3228] font-semibold">
                          {locale === "en" ? "City / Neighborhood" : "Ciudad o Zona"}
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Paradise Valley, Scottsdale, Peoria"
                          className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B] font-serif placeholder-[#948678]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#3D3228] font-semibold">
                          {locale === "en" ? "Estimated Timeline" : "Tiempo Estimado"}
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B] font-serif"
                        >
                          <option value="immediate">
                            {locale === "en" ? "Immediate (Next 1-2 Weeks)" : "Inmediato (Próximas 1-2 semanas)"}
                          </option>
                          <option value="1-2-months">
                            {locale === "en" ? "Within 1 to 2 Months" : "En los próximos 1 a 2 meses"}
                          </option>
                          <option value="planning">
                            {locale === "en" ? "Early Planning / Architectural Phase" : "Fase de Planeación y Diseño"}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-serif uppercase tracking-wider text-[#3D3228] font-semibold">
                        {locale === "en" ? "Project Vision & Details" : "Detalles del Proyecto"}
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={
                          locale === "en"
                            ? "Tell us about your kitchen, square footage, wood preferences (White Oak, Walnut), or color inspirations..."
                            : "Cuéntanos sobre tu cocina, medidas aproximadas, maderas de interés (Roble, Nogal) o paleta de colores..."
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B] font-serif placeholder-[#948678]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="interactive-control w-full min-h-[52px] px-8 py-3.5 rounded-xl bg-[#B85D3B] hover:bg-[#A34E2F] text-white text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
                    >
                      <PaperPlaneTilt size={18} weight="fill" />
                      <span>{locale === "en" ? "Submit Consultation Request" : "Enviar Solicitud de Consulta"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ATELIER SAMPLE BOX CONCIERGE */}
      <SampleBoxConcierge />

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 border-b border-[#DFD6C6] bg-[#EAE2D5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D3B]/10 border border-[#B85D3B]/25 text-[#B85D3B] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Client Clarity" : "Dudas Frecuentes"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif text-[#261F1A]">
              {locale === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-3"
              >
                <h3 className="text-lg font-serif font-semibold text-[#261F1A]">
                  {locale === "en" ? faq.qEn : faq.qEs}
                </h3>
                <p className="text-sm text-[#3D3228] leading-relaxed font-serif">
                  {locale === "en" ? faq.aEn : faq.aEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
