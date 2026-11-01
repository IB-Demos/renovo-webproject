"use client";

import React, { useState } from "react";
import { useRenovo } from "@/context/RenovoContext";
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-mono tracking-widest uppercase">
              <Sparkle size={14} weight="fill" />
              <span>{locale === "en" ? "CONSULTATION & INQUIRIES" : "CONSULTAS Y ATENCIÓN DIRECTA"}</span>
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
      <section className="py-20 lg:py-28 border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 5 Cols: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
                  {locale === "en" ? "DIRECT CHANNELS" : "CANALES DIRECTOS"}
                </div>
                <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#FAF8F5]">
                  {locale === "en" ? "Connect with Our Shop" : "Comunícate con Nuestro Taller"}
                </h2>
                <p className="text-sm text-[#B8AEA2] leading-relaxed font-light">
                  {locale === "en"
                    ? "We reply personally to every inquiry. Reach us by phone, email, or schedule a visit to our Phoenix workshop."
                    : "Respondemos de manera personal a cada solicitud. Llámanos, escríbenos por correo o agenda una visita a nuestro taller."}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-lg flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Phone size={22} weight="fill" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#8A7F73]">
                      {locale === "en" ? "Call or Text Directly" : "Llamada o Mensaje Directo"}
                    </div>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-lg font-semibold text-white hover:text-[var(--gold)] transition-colors block mt-0.5 font-mono"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-[#B8AEA2]">
                      {locale === "en" ? "Mon-Fri 7:00 AM - 5:00 PM MST" : "Lun-Vie 7:00 AM - 5:00 PM MST"}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-lg flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <EnvelopeSimple size={22} weight="fill" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#8A7F73]">
                      {locale === "en" ? "Official Company Emails" : "Correos Oficiales"}
                    </div>
                    <div>
                      <a
                        href="mailto:contact@renovoaz.com"
                        className="text-sm font-semibold text-white hover:text-[var(--gold)] transition-colors block font-mono"
                      >
                        contact@renovoaz.com
                      </a>
                      <span className="text-xs text-[#B8AEA2]">
                        {locale === "en" ? "Estimates & General Inquiries" : "Presupuestos y Consultas"}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <a
                        href="mailto:raul@renovoaz.com"
                        className="text-sm font-semibold text-white hover:text-[var(--gold)] transition-colors block font-mono"
                      >
                        raul@renovoaz.com
                      </a>
                      <span className="text-xs text-[#B8AEA2]">
                        {locale === "en" ? "Raul Burgos, Project Director" : "Raul Burgos, Dirección de Proyectos"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Workshop Address */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-lg flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <MapPin size={22} weight="fill" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#8A7F73]">
                      {locale === "en" ? "Workshop & Showroom" : "Taller y Sala de Muestras"}
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {COMPANY_INFO.address.street}
                    </div>
                    <div className="text-xs text-[#B8AEA2]">
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                    </div>
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[var(--gold)] hover:underline font-medium mt-1.5"
                    >
                      <span>{locale === "en" ? "Open in Google Maps" : "Ver en Google Maps"}</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Consultation Booking Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/5 text-[var(--gold)] flex items-center justify-center mx-auto border border-[var(--gold)]/30">
                      <CheckCircle size={36} weight="fill" />
                    </div>
                    <h3 className="text-2xl font-serif font-normal text-white">
                      {locale === "en" ? "Thank You. Consultation Requested!" : "¡Gracias! Tu Solicitud ha Sido Recibida"}
                    </h3>
                    <p className="text-sm text-[#B8AEA2] max-w-md mx-auto leading-relaxed">
                      {locale === "en"
                        ? `Raul Burgos or our senior estimator will review your project details and contact you at ${formData.phone || formData.email || "your provided contact"} within one business day.`
                        : `Raul Burgos o nuestro especialista revisará los detalles de tu proyecto y se comunicará contigo en menos de un día hábil.`}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="interactive-control px-6 py-2.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10"
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
                      <p className="text-xs sm:text-sm text-[#A69B8F]">
                        {locale === "en"
                          ? "Fill in your project details below and we will prepare tailored recommendations before we speak."
                          : "Completa los datos de tu proyecto y prepararemos recomendaciones a medida antes de conversar."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Full Name *" : "Nombre Completo *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={locale === "en" ? "e.g. Eleanor Vance" : "ej. Carlos Mendoza"}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#161310] text-sm text-white focus:outline-none focus:border-[var(--gold)]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Phone Number *" : "Teléfono de Contacto *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(602) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#161310] text-sm text-white focus:outline-none focus:border-[var(--gold)]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Email Address *" : "Correo Electrónico *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#161310] text-sm text-white focus:outline-none focus:border-[var(--gold)]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Primary Service *" : "Servicio de Interés *"}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#161310] text-sm text-white focus:outline-none focus:border-[var(--gold)]"
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
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "City / Neighborhood" : "Ciudad o Zona"}
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Paradise Valley, Scottsdale, Peoria"
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#161310] text-sm text-white focus:outline-none focus:border-[var(--gold)]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D4CBBF] font-semibold">
                          {locale === "en" ? "Estimated Timeline" : "Tiempo Estimado"}
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#161310] text-sm text-white focus:outline-none focus:border-[var(--gold)]"
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
                      <label className="text-xs font-mono uppercase tracking-wider text-[#D4CBBF] font-semibold">
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
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#161310] text-sm text-white focus:outline-none focus:border-[var(--gold)]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="interactive-control w-full min-h-[52px] px-8 py-3.5 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#12100E] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
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

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 border-b border-white/8 bg-[#0B0A08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] font-bold font-mono">
              {locale === "en" ? "CLIENT CLARITY" : "DUDAS FRECUENTES"}
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
                <p className="text-sm text-[#A69B8F] leading-relaxed">
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
