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
  const { locale } = useRenovo();
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
    <div className="w-full bg-[#0E0C0A] text-[#FAF8F5]">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-white/8 bg-[#0A0908]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "Consultation & Direct Shop Inquiries" : "Consultas y Atención Directa"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#FAF8F5] tracking-tight leading-[1.08]">
              {locale === "en"
                ? "Let's Craft Something Extraordinary Together."
                : "Creemos Juntos un Espacio Extraordinario."}
            </h1>

            <p className="text-base sm:text-xl text-[#B8AEA2] font-light leading-relaxed">
              {locale === "en"
                ? "Reach out directly to Raul Burgos and our craftsmanship team. We welcome in-home design consultations throughout Phoenix and private workshop walkthroughs by appointment."
                : "Comunícate directamente con Raul Burgos y nuestro equipo de ebanistería. Ofrecemos visitas de diseño a domicilio en todo Phoenix y recorridos de taller previa cita."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT INFO + FORM */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#120F0C]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 5 Cols: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
                  <span>{locale === "en" ? "Direct Channels" : "Canales Directos"}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#FAF8F5]">
                  {locale === "en" ? "Connect with Our Shop" : "Comunícate con Nuestro Taller"}
                </h2>
                <p className="text-sm text-[#A69B8F] leading-relaxed">
                  {locale === "en"
                    ? "Speak with master craftsman Raul Burgos directly regarding your architectural plans or to schedule an on-site visit."
                    : "Habla directamente con el maestro ebanista Raul Burgos sobre tus planos o para agendar una visita en sitio."}
                </p>
              </div>

              <div className="space-y-4 text-sm font-serif">
                {/* Phone */}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--gold)]/40 flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A7F73] block uppercase tracking-wider">
                      {locale === "en" ? "Phone & Direct Line" : "Teléfono Directo"}
                    </span>
                    <span className="text-base font-semibold text-white">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.emailGeneral}`}
                  className="interactive-control p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--gold)]/40 flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <EnvelopeSimple size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A7F73] block uppercase tracking-wider">
                      {locale === "en" ? "Email Address" : "Correo Electrónico"}
                    </span>
                    <span className="text-base font-semibold text-white">
                      {COMPANY_INFO.emailGeneral}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A7F73] block uppercase tracking-wider">
                      {locale === "en" ? "Phoenix Workshop" : "Taller en Phoenix"}
                    </span>
                    <span className="text-sm font-medium text-white leading-snug block">
                      {COMPANY_INFO.address.full}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A7F73] block uppercase tracking-wider">
                      {locale === "en" ? "Hours of Operation" : "Horario de Atención"}
                    </span>
                    <span className="text-sm font-medium text-white block">
                      {locale === "en" ? "Mon – Sat: 7:00 AM – 6:00 PM" : "Lun – Sáb: 7:00 AM – 6:00 PM"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#181410] border border-white/10 shadow-2xl backdrop-blur-xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)] text-[var(--gold)] flex items-center justify-center mx-auto">
                      <CheckCircle size={36} weight="fill" />
                    </div>
                    <h3 className="text-2xl font-serif font-normal text-white">
                      {locale === "en" ? "Thank You. Consultation Requested!" : "¡Gracias! Tu Solicitud ha Sido Recibida"}
                    </h3>
                    <p className="text-sm text-[#B8AEA2] max-w-md mx-auto leading-relaxed font-serif">
                      {locale === "en"
                        ? `Raul Burgos or our senior estimator will review your project details and contact you at ${formData.phone || formData.email || "your provided contact"} within one business day.`
                        : `Raul Burgos o nuestro especialista revisará los detalles de tu proyecto y se comunicará contigo en menos de un día hábil.`}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="interactive-control px-6 py-2.5 rounded-full border border-white/20 text-xs font-serif font-semibold uppercase tracking-wider text-white hover:bg-white/10"
                    >
                      {locale === "en" ? "Send Another Message" : "Enviar Otra Consulta"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-normal text-white">
                        {locale === "en" ? "Request an On-Site Consultation" : "Solicita una Evaluación en Sitio"}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A69B8F] font-serif">
                        {locale === "en"
                          ? "Fill in your project details below and we will prepare tailored recommendations before we speak."
                          : "Completa los datos de tu proyecto y prepararemos recomendaciones a medida antes de conversar."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Full Name *" : "Nombre Completo *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={locale === "en" ? "e.g. Eleanor Vance" : "ej. Carlos Mendoza"}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#14100D] text-sm text-white focus:outline-none focus:border-[var(--gold)] font-serif"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Phone Number *" : "Teléfono de Contacto *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(602) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#14100D] text-sm text-white focus:outline-none focus:border-[var(--gold)] font-serif"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Email Address *" : "Correo Electrónico *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#14100D] text-sm text-white focus:outline-none focus:border-[var(--gold)] font-serif"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Primary Service *" : "Servicio de Interés *"}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#14100D] text-sm text-white focus:outline-none focus:border-[var(--gold)] font-serif"
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
                        <label className="text-xs font-serif uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "City / Neighborhood" : "Ciudad o Zona"}
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Paradise Valley, Scottsdale, Peoria"
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#14100D] text-sm text-white focus:outline-none focus:border-[var(--gold)] font-serif"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-serif uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Estimated Timeline" : "Tiempo Estimado"}
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#14100D] text-sm text-white focus:outline-none focus:border-[var(--gold)] font-serif"
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
                      <label className="text-xs font-serif uppercase tracking-wider text-[#D4CBBF] font-semibold">
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
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#14100D] text-sm text-white focus:outline-none focus:border-[var(--gold)] font-serif"
                      />
                    </div>

                    <button
                      type="submit"
                      className="interactive-control w-full min-h-[52px] px-8 py-3.5 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
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
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-serif italic">
              <ShieldCheck size={14} />
              <span>{locale === "en" ? "Client Clarity" : "Dudas Frecuentes"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#FAF8F5]">
              {locale === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-lg space-y-3"
              >
                <h3 className="text-lg font-serif font-normal text-white">
                  {locale === "en" ? faq.qEn : faq.qEs}
                </h3>
                <p className="text-sm text-[#A69B8F] leading-relaxed font-serif">
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
