"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import { Phone, EnvelopeSimple, MapPin, Sparkle, Heart } from "@phosphor-icons/react";

export function Footer() {
  const { locale, t } = useRenovo();

  return (
    <footer className="bg-[#1A1410] text-[#F3EFE8] border-t border-[#3A2E26]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3A2E26]">
          {/* Official Brand & Phoenix Identity */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm inline-block">
                <img
                  src={COMPANY_INFO.logoPath}
                  alt={COMPANY_INFO.name}
                  className="h-14 sm:h-16 w-auto object-contain outline-none"
                />
              </div>
            </div>
            <p className="text-sm text-[#E0D7CC] max-w-[46ch] font-normal leading-relaxed">
              {locale === "en"
                ? "For over 10 years, Renovo has designed, hand-built, and refinished custom kitchens, arched bookcases, wine credenzas, and luxury residential coatings across Phoenix and Arizona."
                : "Por más de 10 años, Renovo ha diseñado, fabricado a mano y transformado cocinas integrales, libreros arqueados, cavas y acabados residenciales finos en Phoenix y todo Arizona."}
            </p>
            <div className="pt-2 text-sm text-[#FCFAF7] space-y-3 font-normal">
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-[var(--gold)] shrink-0" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[var(--gold)] shrink-0" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-[var(--gold)] underline underline-offset-4 font-semibold"
                >
                  {COMPANY_INFO.phoneDisplay} · {COMPANY_INFO.director}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1">
                <span className="inline-flex items-center gap-2">
                  <EnvelopeSimple size={16} className="text-[var(--gold)] shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.emailGeneral}`}
                    className="hover:text-[var(--gold)] underline underline-offset-4"
                  >
                    {COMPANY_INFO.emailGeneral}
                  </a>
                </span>
                <span className="text-white/20">|</span>
                <a
                  href={`mailto:${COMPANY_INFO.emailDirector}`}
                  className="hover:text-[var(--gold)] underline underline-offset-4"
                >
                  {COMPANY_INFO.emailDirector}
                </a>
              </div>

              {/* Social Channels & Yelp Reviews */}
              <div className="pt-3 flex flex-wrap items-center gap-2.5">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Renovo Painting on Instagram"
                  className="interactive-control inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#261E18] hover:bg-[#322820] border border-[#4A3B30] text-xs text-[#EAE2D5] hover:text-[var(--gold)] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="font-mono text-[11px] font-semibold">{COMPANY_INFO.instagramHandle}</span>
                </a>

                <a
                  href={COMPANY_INFO.yelpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Renovo Painting on Yelp"
                  className="interactive-control inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#261E18] hover:bg-[#322820] border border-[#4A3B30] text-xs text-[#EAE2D5] hover:text-[#B85D3B] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-[#D32323]" viewBox="0 0 24 24">
                    <path d="M12.003 0c-.39 0-.745.242-.892.607l-1.895 4.708a.959.959 0 0 0 .42 1.185l4.382 2.53a.96.96 0 0 0 1.26-.353l2.42-4.47a.958.958 0 0 0-.324-1.218L13.23.473a.965.965 0 0 0-.726-.473h-.5zM8.38 8.65a.96.96 0 0 0-1.23-.448L2.49 10.37a.958.958 0 0 0-.528 1.15l1.045 4.966c.094.446.49.76.945.753a.96.96 0 0 0 .452-.116l4.57-2.17a.959.959 0 0 0 .49-1.157l-1.084-5.146zm8.852.793a.959.959 0 0 0-.877.568l-2.03 4.652a.96.96 0 0 0 .463 1.168l4.49 2.332a.96.96 0 0 0 1.25-.4l2.25-4.557a.958.958 0 0 0-.363-1.206l-4.14-2.274a.966.966 0 0 0-.443-.283h-.6zm-5.717 6.42a.96.96 0 0 0-1.253.376l-2.348 4.507a.958.958 0 0 0 .34 1.213l4.184 2.193c.153.08.322.12.49.12.37 0 .72-.212.877-.56l1.968-4.678a.96.96 0 0 0-.437-1.18l-3.82-1.99z" />
                  </svg>
                  <span className="font-serif text-[11px] font-semibold">{locale === "en" ? "Reviews on Yelp" : "Reseñas en Yelp"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[var(--gold)] font-semibold">
              {locale === "en" ? "Services & Craft" : "Especialidades"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/cocinas-y-gabinetes" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Kitchens & Cabinetry" : "Cocinas y Gabinetes"}
                </Link>
              </li>
              <li>
                <Link href="/muebles-a-medida" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Custom Furniture & Built-Ins" : "Muebles a Medida"}
                </Link>
              </li>
              <li>
                <Link href="/pintura-residencial" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Residential & Exterior Painting" : "Pintura Residencial"}
                </Link>
              </li>
              <li>
                <Link href="/transformaciones" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Before & After Transformations" : "Transformaciones Antes y Después"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[var(--gold)] font-semibold">
              {locale === "en" ? "Corporate & Tools" : "Corporativo y Herramientas"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/studio-interactivo" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Interactive Design Studio" : "Estudio Interactivo"}
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Materials & Finishes Catalog" : "Catálogo de Materiales"}
                </Link>
              </li>
              <li>
                <Link href="/cotizador" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Project Proposal & Estimate" : "Propuesta de Proyecto y Estimación"}
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Our Heritage & Workshop" : "Sobre Nosotros y Taller"}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="interactive-control hover:text-[var(--gold)] text-[#E8E1D5] inline-block py-1">
                  {locale === "en" ? "Contact & Showroom Appointment" : "Contacto y Citas"}
                </Link>
              </li>
              <li className="pt-2 border-t border-[#3A2E26] flex items-center gap-3">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-control hover:text-[var(--gold)] text-[#C9BFB2] inline-flex items-center gap-1.5 py-1 text-xs"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={COMPANY_INFO.yelpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-control hover:text-[#B85D3B] text-[#C9BFB2] inline-flex items-center gap-1.5 py-1 text-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-[#D32323]" viewBox="0 0 24 24">
                    <path d="M12.003 0c-.39 0-.745.242-.892.607l-1.895 4.708a.959.959 0 0 0 .42 1.185l4.382 2.53a.96.96 0 0 0 1.26-.353l2.42-4.47a.958.958 0 0 0-.324-1.218L13.23.473a.965.965 0 0 0-.726-.473h-.5zM8.38 8.65a.96.96 0 0 0-1.23-.448L2.49 10.37a.958.958 0 0 0-.528 1.15l1.045 4.966c.094.446.49.76.945.753a.96.96 0 0 0 .452-.116l4.57-2.17a.959.959 0 0 0 .49-1.157l-1.084-5.146zm8.852.793a.959.959 0 0 0-.877.568l-2.03 4.652a.96.96 0 0 0 .463 1.168l4.49 2.332a.96.96 0 0 0 1.25-.4l2.25-4.557a.958.958 0 0 0-.363-1.206l-4.14-2.274a.966.966 0 0 0-.443-.283h-.6zm-5.717 6.42a.96.96 0 0 0-1.253.376l-2.348 4.507a.958.958 0 0 0 .34 1.213l4.184 2.193c.153.08.322.12.49.12.37 0 .72-.212.877-.56l1.968-4.678a.96.96 0 0 0-.437-1.18l-3.82-1.99z" />
                  </svg>
                  <span>Yelp (5★)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Craft Stamp & Agency Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#B8AEA2]">
          <div className="space-y-1">
            <p className="flex flex-wrap items-center gap-1.5">
              <span>{t.footer.rights}</span>
              <span>·</span>
              <span>Handcrafted in Phoenix, AZ</span>
            </p>
            <p className="text-[11px] text-[#A69B8F]">
              {locale === "en" ? "Developed and built by " : "Desarrollado y construido por "}
              <a
                href="https://haganesoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold)] hover:underline font-medium"
              >
                Hagane Softworks
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#E8E1D5]">
            <Sparkle size={14} className="text-[var(--gold)]" weight="fill" />
            <span>Family-Owned &amp; Operated in Phoenix</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
