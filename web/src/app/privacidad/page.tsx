"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  ShieldCheck,
  LockKey,
  Trash,
  CheckCircle,
  WarningCircle,
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  FileText,
} from "@phosphor-icons/react";

export default function PrivacyPolicyPage() {
  const { locale } = useRenovo();

  // Data Erasure Request Form State
  const [erasureName, setErasureName] = useState("");
  const [erasureEmail, setErasureEmail] = useState("");
  const [erasurePhone, setErasurePhone] = useState("");
  const [erasureNotes, setErasureNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [erasureSuccess, setErasureSuccess] = useState(false);
  const [erasureError, setErasureError] = useState<string | null>(null);

  const handleErasureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErasureError(null);

    if (!erasureEmail && !erasurePhone) {
      setErasureError(
        locale === "en"
          ? "Please provide an email or phone number to identify the records to delete."
          : "Por favor proporciona un correo o teléfono para identificar los registros a eliminar."
      );
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: erasureName || "Data Deletion Request",
          email: erasureEmail || "no-email@request.com",
          phone: erasurePhone || "Not provided",
          subject: "DATA_ERASURE_REQUEST",
          message: `[DATA ERASURE / PRIVACY RIGHTS REQUEST]\nName: ${erasureName}\nEmail: ${erasureEmail}\nPhone: ${erasurePhone}\nClient Notes: ${erasureNotes}`,
          locale,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setErasureSuccess(true);
    } catch {
      setErasureError(
        locale === "en"
          ? "Could not submit your request automatically. Please email raul@renovoaz.com or call (602) 550-4369."
          : "No se pudo enviar la solicitud automáticamente. Por favor escribe a raul@renovoaz.com o llama al (602) 550-4369."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1A1410] pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-serif text-[#615245]">
          <Link href="/" className="hover:text-[#B85D3B] inline-flex items-center gap-1 transition-colors">
            <ArrowLeft size={14} />
            <span>{locale === "en" ? "Home" : "Inicio"}</span>
          </Link>
          <span>/</span>
          <span className="font-bold text-[#1A1410]">{locale === "en" ? "Privacy Policy" : "Política de Privacidad"}</span>
        </div>

        {/* Header */}
        <header className="space-y-4 border-b border-[#DFD6C6] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EA] border border-[#2E6B4E]/30 text-[#2E6B4E] text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck size={16} weight="bold" />
            <span>{locale === "en" ? "Data Protection & Privacy" : "Protección de Datos y Privacidad"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1410] tracking-tight">
            {locale === "en" ? "Privacy Policy & Data Rights" : "Política de Privacidad y Derechos de Datos"}
          </h1>
          <p className="text-sm sm:text-base text-[#615245] leading-relaxed max-w-2xl">
            {locale === "en"
              ? "Effective Date: November 9, 2026 · Renovo Painting Solutions LLC is committed to uncompromising privacy, data minimization, and total transparency."
              : "Fecha de vigencia: 9 de noviembre de 2026 · Renovo Painting Solutions LLC está comprometida con la privacidad rigurosa, minimización de datos y total transparencia."}
          </p>
        </header>

        {/* Business Identification Disclosure */}
        <section className="p-6 rounded-2xl bg-[#F4EFE6] border-2 border-[#DFD6C6] space-y-4 text-sm">
          <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1410] flex items-center gap-2">
            <LockKey size={20} className="text-[#B85D3B]" weight="bold" />
            <span>{locale === "en" ? "1. Legal Entity & Data Controller" : "1. Identidad Legal y Responsable del Tratamiento"}</span>
          </h2>
          <p className="text-[#261F1A] leading-relaxed">
            {locale === "en"
              ? "This website is operated by Renovo Painting Solutions LLC, a licensed and insured contracting company registered in the State of Arizona. Master craftsman Raul Burgos acts as the direct data controller for all project inquiries."
              : "Este sitio web es operado por Renovo Painting Solutions LLC, empresa contratista con licencia y seguro registrada en el Estado de Arizona. El maestro artesano Raul Burgos actúa como responsable directo del tratamiento de datos para todas las solicitudes de proyecto."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#2B231D]">
            <div><strong>{locale === "en" ? "Company:" : "Razón Social:"}</strong> Renovo Painting Solutions LLC</div>
            <div><strong>{locale === "en" ? "Owner / Craftsman:" : "Director / Maestro:"}</strong> {COMPANY_INFO.director}</div>
            <div><strong>{locale === "en" ? "Physical Workshop:" : "Taller Físico:"}</strong> {COMPANY_INFO.address.full}</div>
            <div><strong>{locale === "en" ? "Direct Phone:" : "Teléfono Directo:"}</strong> {COMPANY_INFO.phoneDisplay}</div>
            <div><strong>{locale === "en" ? "Direct Email:" : "Correo Oficial:"}</strong> raul@renovoaz.com</div>
            <div><strong>{locale === "en" ? "Licensing:" : "Licencia:"}</strong> ROC Licensed & Fully Insured (Arizona)</div>
          </div>
        </section>

        {/* Data Minimization */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "2. Data Minimization: What We Collect & Why" : "2. Minimización de Datos: Qué Recolectamos y Para Qué"}
          </h2>
          <p>
            {locale === "en"
              ? "We adhere strictly to the principle of data minimization: we only collect information strictly required to coordinate custom cabinet measurements, generate official proposals, and contact you directly."
              : "Nos apegamos estrictamente al principio de minimización de datos: solo recolectamos la información estrictamente necesaria para coordinar mediciones de gabinetes, generar propuestas oficiales y contactarte directamente."}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>{locale === "en" ? "Name & Contact Information:" : "Nombre y Datos de Contacto:"}</strong> {locale === "en" ? "Full name, phone/cellular number, and email address to send your PDF proposal and coordinate on-site laser measurements." : "Nombre completo, teléfono/celular y correo electrónico para enviarte la propuesta en PDF y coordinar visitas técnicas con medición láser."}
            </li>
            <li>
              <strong>{locale === "en" ? "Project Location (City / ZIP Code):" : "Ubicación del Proyecto (Ciudad / Código Postal):"}</strong> {locale === "en" ? "Used solely to confirm you are within our service territory in the Greater Phoenix Valley." : "Utilizado exclusivamente para confirmar que tu domicilio se encuentra dentro de nuestra zona de cobertura en el Valle de Phoenix."}
            </li>
            <li>
              <strong>{locale === "en" ? "Project Scope & Dimensions:" : "Alcance y Medidas del Proyecto:"}</strong> {locale === "en" ? "Square footage, cabinet door counts, chosen finish grades, and colors to draft precise estimates." : "Metraje aproximado, número de puertas, acabados deseados y colores para estructurar la cotización formal."}
            </li>
            <li>
              <strong>{locale === "en" ? "Site Photographs (Optional):" : "Fotografías del Espacio (Opcional):"}</strong> {locale === "en" ? "Images you voluntarily upload to allow Raul Burgos to inspect existing cabinet face frames, angles, and surface condition prior to the in-home visit." : "Fotografías que adjuntas voluntariamente para permitir a Raul Burgos evaluar marcos, perfiles y estado actual de superficies antes de la visita técnica."}
            </li>
          </ul>
          <div className="p-4 rounded-xl bg-[#EBF3EA] border border-[#2E6B4E]/30 text-[#1B4332] text-sm font-medium">
            🔒 <strong>{locale === "en" ? "No Unnecessary Data:" : "Cero Datos Innecesarios:"}</strong> {locale === "en" ? "We never collect social security numbers, banking credentials, credit card details through forms, biometric information, or location tracking." : "Nunca solicitamos números de seguro social, datos bancarios, tarjetas de crédito en formularios, biometría ni rastreo de ubicación geográfica en tiempo real."}
          </div>
        </section>

        {/* Third-Party SDK Audit */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "3. Third-Party Services & Technical Audit" : "3. Servicios de Terceros y Auditoría Técnica"}
          </h2>
          <p>
            {locale === "en"
              ? "We do not sell, rent, or trade your personal information with data brokers or advertising networks. We use only essential infrastructure providers to operate the website securely:"
              : "No vendemos, rentamos ni comercializamos tu información personal con intermediarios ni redes publicitarias. Solo utilizamos proveedores de infraestructura esenciales:"}
          </p>
          <div className="border border-[#DFD6C6] rounded-2xl overflow-hidden bg-[#FCFAF7]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F4EFE6] text-[#1A1410] font-serif border-b border-[#DFD6C6]">
                <tr>
                  <th className="p-3 sm:p-4">{locale === "en" ? "Provider / Service" : "Proveedor / Servicio"}</th>
                  <th className="p-3 sm:p-4">{locale === "en" ? "Purpose" : "Finalidad"}</th>
                  <th className="p-3 sm:p-4">{locale === "en" ? "Data Processed" : "Datos Procesados"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFD6C6]">
                <tr>
                  <td className="p-3 sm:p-4 font-bold">Resend</td>
                  <td className="p-3 sm:p-4">{locale === "en" ? "Transactional email delivery of official PDF proposals." : "Entrega de correos transaccionales con la propuesta formal en PDF."}</td>
                  <td className="p-3 sm:p-4">{locale === "en" ? "Email address, client name, attached PDF proposal." : "Correo electrónico, nombre del cliente, PDF adjunto."}</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-bold">Make.com</td>
                  <td className="p-3 sm:p-4">{locale === "en" ? "Workshop concierge webhook to answer customer queries." : "Webhook de asistencia para resolver dudas técnicas del taller."}</td>
                  <td className="p-3 sm:p-4">{locale === "en" ? "Chat message text and optional contact number if provided." : "Texto de consulta en el chat y teléfono si se proporciona."}</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-bold">Vercel / Cloud Infrastructure</td>
                  <td className="p-3 sm:p-4">{locale === "en" ? "Secure HTTPS web hosting and edge routing." : "Alojamiento web seguro mediante HTTPS y distribución de contenido."}</td>
                  <td className="p-3 sm:p-4">{locale === "en" ? "Standard server access logs (IP address, browser type for security)." : "Registros estándar de servidor (IP y navegador con fines de seguridad)."}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-[#615245]">
            {locale === "en"
              ? "Notice: No advertising pixels (Facebook Pixel, TikTok Pixel, Google Remarketing) or invasive screen recorders (Hotjar, Clarity) are deployed on this website."
              : "Nota: Este sitio web no tiene instalados píxeles publicitarios de retargeting (Facebook Pixel, TikTok Pixel) ni grabadores invasivos de pantalla (Hotjar, Clarity)."}
          </p>
        </section>

        {/* Parental Consent (Minors) */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "4. Protection of Minors (COPPA & Parental Consent)" : "4. Protección de Menores (COPPA y Consentimiento Parental)"}
          </h2>
          <p>
            {locale === "en"
              ? "Our website and remodeling services are directed strictly to homeowners and adults aged 18 and older. In compliance with the Children's Online Privacy Protection Act (COPPA), we do not knowingly solicit, collect, or retain personal information from children under 13 (or minors under 18)."
              : "Nuestro sitio web y servicios de ebanistería y pintura están dirigidos exclusivamente a propietarios de vivienda y adultos mayores de 18 años. En cumplimiento con la ley COPPA, no solicitamos, recolectamos ni retenemos a sabiendas información personal de menores de 13 años (ni menores de 18 años)."}
          </p>
          <p>
            {locale === "en"
              ? "If you are a parent or legal guardian and believe your minor child has submitted personal data through our quote forms without your consent, please contact us immediately. We will promptly purge all such information from our systems."
              : "Si eres padre, madre o tutor legal y crees que un menor bajo tu custodia proporcionó datos a través de nuestros formularios sin tu consentimiento, contáctanos de inmediato y eliminaremos sus registros de forma definitiva."}
          </p>
        </section>

        {/* Your Rights (CCPA / GDPR / Data Erasure) */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-[#261F1A]">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1410]">
            {locale === "en" ? "5. Your Privacy Rights (Access, Correction & Deletion)" : "5. Tus Derechos de Privacidad (Acceso, Rectificación y Eliminación)"}
          </h2>
          <p>
            {locale === "en"
              ? "Under applicable privacy laws (including CCPA/CPRA for Arizona/California residents and GDPR principles), you have the right to:"
              : "Bajo las legislaciones de privacidad aplicables (incluyendo CCPA/CPRA y principios internacionales), tienes derecho a:"}
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
            <li><strong>{locale === "en" ? "Access:" : "Acceso:"}</strong> {locale === "en" ? "Request a copy of any personal data we hold about you." : "Solicitar una copia de cualquier información que conservemos sobre ti."}</li>
            <li><strong>{locale === "en" ? "Correction:" : "Rectificación:"}</strong> {locale === "en" ? "Update or correct inaccurate contact information." : "Actualizar o corregir información errónea de contacto."}</li>
            <li><strong>{locale === "en" ? "Deletion (Right to be Forgotten):" : "Eliminación (Derecho al Olvido):"}</strong> {locale === "en" ? "Request complete erasure of your contact details, photos, and proposals." : "Solicitar la eliminación total y definitiva de tus datos, fotos y propuestas."}</li>
            <li><strong>{locale === "en" ? "Opt-Out of Communications:" : "Baja de Comunicaciones:"}</strong> {locale === "en" ? "Unsubscribe from project follow-ups with a single click." : "Darte de baja de cualquier seguimiento de proyecto con un solo clic."}</li>
          </ul>
        </section>

        {/* Interactive Data Erasure Request Form */}
        <section id="solicitar-eliminacion" className="p-6 sm:p-8 rounded-3xl bg-[#1A1410] text-[#FCFAF7] border-2 border-[#C59B27]/40 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5B537]">
              {locale === "en" ? "AUTOMATED PRIVACY FORM" : "FORMULARIO AUTOMATIZADO DE PRIVACIDAD"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FCFAF7] flex items-center gap-2.5">
              <Trash size={26} className="text-[#B85D3B]" weight="bold" />
              <span>{locale === "en" ? "Request Data Erasure or Account Purge" : "Solicitud de Eliminación de Datos"}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#DFD6C6] leading-relaxed">
              {locale === "en"
                ? "Enter the email or phone number you used when requesting a quote. Raul Burgos will permanently purge your records within 30 business days."
                : "Ingresa el correo o teléfono que utilizaste al cotizar. Raul Burgos purgará permanentemente tus registros en un plazo máximo de 30 días hábiles."}
            </p>
          </div>

          {erasureSuccess ? (
            <div className="p-5 rounded-2xl bg-[#EBF3EA] border border-[#2E6B4E] text-[#1B4332] space-y-2 text-center">
              <CheckCircle size={36} className="mx-auto text-[#2E6B4E]" weight="fill" />
              <h4 className="font-serif font-bold text-base">
                {locale === "en" ? "Erasure Request Received" : "Solicitud de Eliminación Recibida"}
              </h4>
              <p className="text-xs sm:text-sm">
                {locale === "en"
                  ? "We dispatched your request directly to Raul Burgos. Your files and records will be deleted, and a confirmation will be sent to you."
                  : "Tu solicitud fue enviada directamente a Raul Burgos. Se purgarán tus datos y fotos y recibirás confirmación a la brevedad."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleErasureSubmit} className="space-y-4 text-left">
              {erasureError && (
                <div className="p-3.5 rounded-xl bg-[#FDE8E8] border border-[#F8B4B4] text-[#9B1C1C] text-xs sm:text-sm flex items-center gap-2">
                  <WarningCircle size={18} weight="fill" />
                  <span>{erasureError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#E5B537] mb-1 font-bold">
                    {locale === "en" ? "Your Name (Optional)" : "Tu Nombre (Opcional)"}
                  </label>
                  <input
                    type="text"
                    value={erasureName}
                    onChange={(e) => setErasureName(e.target.value)}
                    placeholder={locale === "en" ? "e.g. Robert Miller" : "ej. Roberto Mendoza"}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-[#FCFAF7] text-sm focus:outline-none focus:border-[#E5B537]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#E5B537] mb-1 font-bold">
                    {locale === "en" ? "Registered Email *" : "Correo Registrado *"}
                  </label>
                  <input
                    type="email"
                    value={erasureEmail}
                    onChange={(e) => setErasureEmail(e.target.value)}
                    placeholder="client@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-[#FCFAF7] text-sm focus:outline-none focus:border-[#E5B537]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#E5B537] mb-1 font-bold">
                  {locale === "en" ? "Registered Phone Number" : "Teléfono Registrado"}
                </label>
                <input
                  type="tel"
                  value={erasurePhone}
                  onChange={(e) => setErasurePhone(e.target.value)}
                  placeholder="(602) 550-4369"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-[#FCFAF7] text-sm focus:outline-none focus:border-[#E5B537]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#E5B537] mb-1 font-bold">
                  {locale === "en" ? "Additional Details (Optional)" : "Detalles Adicionales (Opcional)"}
                </label>
                <textarea
                  rows={2}
                  value={erasureNotes}
                  onChange={(e) => setErasureNotes(e.target.value)}
                  placeholder={
                    locale === "en"
                      ? "e.g. Please purge my submitted kitchen photos and quote record."
                      : "ej. Favor de borrar las fotos adjuntas y la propuesta generada."
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-[#FCFAF7] text-sm focus:outline-none focus:border-[#E5B537]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="interactive-control px-6 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-white font-serif font-bold text-xs sm:text-sm uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting
                  ? (locale === "en" ? "Submitting Purge Request..." : "Enviando Solicitud...")
                  : (locale === "en" ? "Submit Data Erasure Request" : "Solicitar Eliminación Definitiva de Datos")}
              </button>
            </form>
          )}
        </section>

        {/* Unsubscribe Notice */}
        <section id="baja-comunicaciones" className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-3 text-sm">
          <h3 className="font-serif font-bold text-base text-[#1A1410] flex items-center gap-2">
            <EnvelopeSimple size={20} className="text-[#B85D3B]" />
            <span>{locale === "en" ? "6. Unsubscribe from Project Communications" : "6. Baja de Comunicaciones y Seguimientos"}</span>
          </h3>
          <p className="text-[#261F1A]">
            {locale === "en"
              ? "Renovo sends transactional project proposals requested directly by you. We never send automated marketing spam. If you wish to halt follow-ups regarding an active quote, simply click reply with 'Unsubscribe' or write directly to "
              : "Renovo únicamente envía propuestas técnicas solicitadas expresamente por ti. Nunca enviamos publicidad masiva. Si deseas cancelar el seguimiento de una cotización, puedes responder al correo con la palabra 'Baja' o escribir a "}
            <a href="mailto:raul@renovoaz.com?subject=Unsubscribe" className="text-[#B85D3B] font-bold underline">
              raul@renovoaz.com
            </a>.
          </p>
        </section>

        {/* Contact info footer */}
        <footer className="pt-6 border-t border-[#DFD6C6] text-xs text-[#615245] space-y-2">
          <p>
            Renovo Painting Solutions LLC · 2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029 · Direct: (602) 550-4369
          </p>
          <p>
            {locale === "en"
              ? "For urgent privacy inquiries, you can reach owner Raul Burgos directly at raul@renovoaz.com."
              : "Para consultas urgentes de privacidad, puedes contactar al titular Raul Burgos directamente en raul@renovoaz.com."}
          </p>
        </footer>
      </div>
    </div>
  );
}
