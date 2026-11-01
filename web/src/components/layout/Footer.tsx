"use client";

import React from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import { Phone, EnvelopeSimple, MapPin, Sparkle, Heart } from "@phosphor-icons/react";

export function Footer() {
  const { locale, t } = useRenovo();

  return (
    <footer className="bg-[#1C1714] text-[#F3EFE8] border-t border-[#382F2A]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#382F2A]">
          {/* Official Brand & Phoenix Identity */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="p-2 rounded-xl bg-[#26201B] border border-[#3E342E] shadow-sm inline-block">
                <img
                  src={COMPANY_INFO.logoPath}
                  alt={COMPANY_INFO.name}
                  className="h-10 w-auto object-contain outline-none"
                />
              </div>
            </div>
            <p className="text-sm text-[#BFB5AA] max-w-[46ch] leading-relaxed">
              {locale === "en"
                ? "For over 10 years, Renovo has designed, hand-built, and refinished custom kitchens, arched bookcases, wine credenzas, and luxury residential coatings across Phoenix and Arizona."
                : "Por más de 10 años, Renovo ha diseñado, fabricado a mano y transformado cocinas integrales, libreros arqueados, cavas y acabados residenciales finos en Phoenix y todo Arizona."}
            </p>
            <div className="pt-2 text-xs text-[#E3DDD4] space-y-2.5">
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
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[var(--gold)] font-semibold">
              {locale === "en" ? "Services & Craft" : "Especialidades"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/cocinas-y-gabinetes" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
                  {locale === "en" ? "Kitchens & Cabinetry" : "Cocinas y Gabinetes"}
                </Link>
              </li>
              <li>
                <Link href="/muebles-a-medida" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
                  {locale === "en" ? "Custom Furniture & Built-Ins" : "Muebles a Medida"}
                </Link>
              </li>
              <li>
                <Link href="/pintura-residencial" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
                  {locale === "en" ? "Residential & Exterior Painting" : "Pintura Residencial"}
                </Link>
              </li>
              <li>
                <Link href="/transformaciones" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
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
                <Link href="/studio-interactivo" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
                  {locale === "en" ? "Interactive Design Atelier" : "Estudio Interactivo"}
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
                  {locale === "en" ? "Materials & Finishes Catalog" : "Catálogo de Materiales"}
                </Link>
              </li>
              <li>
                <Link href="/cotizador" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
                  {locale === "en" ? "Project Cost Estimator" : "Cotizador en Línea"}
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
                  {locale === "en" ? "Our Heritage & Workshop" : "Sobre Nosotros y Taller"}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="interactive-control hover:text-[var(--gold)] text-[#D5CDC2] inline-block py-1">
                  {locale === "en" ? "Contact & Showroom Appointment" : "Contacto y Citas"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Craft Stamp & Agency Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9E9386]">
          <div className="space-y-1">
            <p className="flex flex-wrap items-center gap-1.5">
              <span>{t.footer.rights}</span>
              <span>·</span>
              <span>Handcrafted in Phoenix, AZ</span>
            </p>
            <p className="text-[11px] text-[#82776B]">
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
          <div className="flex items-center gap-2 text-xs text-[#BFB5AA]">
            <Sparkle size={14} className="text-[var(--gold)]" weight="fill" />
            <span>Family-Owned &amp; Operated in Phoenix</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
