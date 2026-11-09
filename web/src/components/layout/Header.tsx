"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  BookmarkSimple,
  List,
  X,
  CaretDown,
  ArrowRight,
} from "@phosphor-icons/react";

export function Header() {
  const { locale, setLocale, t, samples, setIsDrawerOpen } = useRenovo();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [disciplinesOpen, setDisciplinesOpen] = useState(false);

  const disciplines = [
    {
      href: "/cocinas-y-gabinetes",
      titleEn: "Kitchens & Cabinetry",
      titleEs: "Cocinas y Gabinetes",
      descEn: "Custom manufacturing, refacing and 2K factory lacquers",
      descEs: "Fabricación a medida, refacing y lacas catalizadas 2K",
    },
    {
      href: "/muebles-a-medida",
      titleEn: "Custom Furniture & Built-Ins",
      titleEs: "Muebles a Medida y Built-Ins",
      descEn: "Arched oak fireplaces, floating credenzas and wine bars",
      descEs: "Nichos arqueados, centros flotantes y cavas de autor",
    },
    {
      href: "/pintura-residencial",
      titleEn: "Residential & Fine Painting",
      titleEs: "Pintura Residencial y Acabados",
      descEn: "HEPA dustless prep, millwork enamels and desert UV shield",
      descEs: "Lijado HEPA sin polvo, molduras y protección solar UV",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4EFE6]/95 backdrop-blur-xl border-b border-[#E0D7C8] text-[#261F1A] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* =====================================================================
            1. BRAND LOGO (Compact, elegant proportions)
        ===================================================================== */}
        <Link
          href="/"
          className="interactive-control flex items-center gap-2.5 group focus-visible:rounded-md py-1 shrink-0"
        >
          <img
            src={COMPANY_INFO.logoPath}
            alt="Renovo Painting Solutions"
            className="h-10 sm:h-11 w-auto object-contain outline-none drop-shadow-xs"
          />
          <div className="hidden sm:flex flex-col border-l border-[#D6CCBC] pl-2.5 leading-tight">
            <span className="text-[10px] tracking-[0.2em] text-[#B85D3B] font-serif font-bold uppercase">
              Phoenix, AZ
            </span>
            <span className="text-[11px] text-[#3D3228] tracking-wider uppercase font-serif font-semibold">
              Painting Solutions
            </span>
          </div>
        </Link>

        {/* =====================================================================
            2. STREAMLINED DESKTOP NAVIGATION (4 Clean Core Sections)
        ===================================================================== */}
        <nav
          aria-label="Main Corporate Navigation"
          className="hidden lg:flex items-center gap-7 xl:gap-8"
        >
          {/* Disciplines Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDisciplinesOpen(true)}
            onMouseLeave={() => setDisciplinesOpen(false)}
          >
            <button
              type="button"
              className={`interactive-control py-2 text-sm font-serif font-semibold tracking-normal inline-flex items-center gap-1 transition-colors ${
                pathname?.startsWith("/cocinas") ||
                pathname?.startsWith("/muebles") ||
                pathname?.startsWith("/pintura")
                  ? "text-[#B85D3B]"
                  : "text-[#261F1A] hover:text-[#B85D3B]"
              }`}
            >
              <span>{t.nav.services}</span>
              <CaretDown
                size={11}
                className={`transition-transform duration-200 text-[#B85D3B] ${
                  disciplinesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {disciplinesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-80 p-2.5 rounded-2xl bg-[#FCFAF7] border border-[#E0D7C8] shadow-2xl z-50 backdrop-blur-2xl"
                >
                  {disciplines.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDisciplinesOpen(false)}
                      className="block p-3 rounded-xl hover:bg-[#EAE2D5] transition-colors group"
                    >
                      <div className="text-xs font-serif font-semibold text-[#261F1A] group-hover:text-[#B85D3B] transition-colors flex items-center justify-between">
                        <span>{locale === "en" ? item.titleEn : item.titleEs}</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#B85D3B]" />
                      </div>
                      <div className="text-xs text-[#54463A] mt-0.5 leading-relaxed font-serif">
                        {locale === "en" ? item.descEn : item.descEs}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Transformations / Portfolio */}
          <Link
            href="/transformaciones"
            className={`interactive-control py-2 text-sm font-serif font-semibold tracking-normal transition-colors ${
              pathname?.startsWith("/transformaciones")
                ? "text-[#B85D3B]"
                : "text-[#261F1A] hover:text-[#B85D3B]"
            }`}
          >
            {t.nav.transformations}
          </Link>

          {/* Materials Catalog */}
          <Link
            href="/catalogo"
            className={`interactive-control py-2 text-sm font-serif font-semibold tracking-normal transition-colors ${
              pathname?.startsWith("/catalogo")
                ? "text-[#B85D3B]"
                : "text-[#261F1A] hover:text-[#B85D3B]"
            }`}
          >
            {t.nav.catalog}
          </Link>

          {/* Quote Request System */}
          <Link
            href="/cotizador"
            className={`interactive-control py-2 text-sm font-serif font-semibold tracking-normal transition-colors ${
              pathname?.startsWith("/cotizador")
                ? "text-[#B85D3B]"
                : "text-[#261F1A] hover:text-[#B85D3B]"
            }`}
          >
            {t.nav.estimator}
          </Link>

          {/* Interactive Design Studio */}
          <Link
            href="/studio-interactivo"
            className={`interactive-control py-2 text-sm font-serif font-semibold tracking-normal transition-colors ${
              pathname?.startsWith("/studio-interactivo")
                ? "text-[#B85D3B]"
                : "text-[#261F1A] hover:text-[#B85D3B]"
            }`}
          >
            {t.nav.studio}
          </Link>
        </nav>

        {/* =====================================================================
            3. RIGHT ACTIONS (Compact, quiet luxury: selections, lang, CTA)
        ===================================================================== */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Design Selections Pill (Compact, clear & accessible) */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label={`${t.sampleDrawer.title} (${samples.length} items)`}
            title={t.sampleDrawer.title}
            className="interactive-control flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-[#DFD6C6] bg-[#FCFAF7] hover:border-[#B85D3B] hover:bg-[#F4EFE6] text-[#261F1A] transition-all shadow-xs"
          >
            <BookmarkSimple
              size={14}
              weight="fill"
              className={samples.length > 0 ? "text-[#B85D3B]" : "text-[#8C7E70]"}
            />
            <span className="hidden sm:inline text-xs font-serif font-semibold">
              {locale === "en" ? "Selections" : "Selecciones"}
            </span>
            <span
              className={`min-w-[17px] h-[17px] px-1 rounded-full text-[10px] font-mono font-bold flex items-center justify-center transition-colors ${
                samples.length > 0
                  ? "bg-[#B85D3B] text-[#FCFAF7]"
                  : "bg-[#EAE2D5] text-[#54463A]"
              }`}
            >
              {samples.length}
            </span>
          </button>

          {/* Minimalist Language Switcher */}
          <div
            role="group"
            aria-label={t.meta.bilingualNotice}
            className="flex items-center text-xs font-serif tracking-wider text-[#4A3E34]"
          >
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={`interactive-control py-1 px-1 transition-colors ${
                locale === "en" ? "text-[#B85D3B] font-bold" : "hover:text-[#261F1A]"
              }`}
            >
              EN
            </button>
            <span className="opacity-40">/</span>
            <button
              type="button"
              onClick={() => setLocale("es")}
              aria-pressed={locale === "es"}
              className={`interactive-control py-1 px-1 transition-colors ${
                locale === "es" ? "text-[#B85D3B] font-bold" : "hover:text-[#261F1A]"
              }`}
            >
              ES
            </button>
          </div>

          {/* Consultation CTA */}
          <Link
            href="/contacto"
            className="interactive-control hidden md:inline-flex items-center justify-center min-h-[36px] px-4 py-1.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold tracking-wider uppercase transition-all shadow-xs"
          >
            {t.nav.bookConsult}
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className="interactive-control lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[#D6CCBC] bg-[#FCFAF7] text-[#261F1A] hover:bg-[#EAE2D5] transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {/* =====================================================================
          4. MOBILE COMPACT ACCORDION MENU
      ===================================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[#E0D7C8] bg-[#F4EFE6] px-4 py-5 space-y-3.5 shadow-2xl"
          >
            {/* Design Selections Mobile Row */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
              className="interactive-control w-full p-2.5 rounded-xl bg-[#FCFAF7] border border-[#B85D3B]/40 hover:border-[#B85D3B] flex items-center justify-between text-left shadow-xs transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B85D3B]/10 flex items-center justify-center text-[#B85D3B]">
                  <BookmarkSimple size={15} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-serif font-semibold text-[#1A1410]">
                    {locale === "en" ? "Your Design Selections" : "Tus Selecciones de Diseño"}
                  </div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#B85D3B] text-[#FCFAF7] text-[11px] font-mono font-bold">
                {samples.length}
              </span>
            </button>

            {/* Disciplines */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-serif tracking-widest text-[#B85D3B] font-bold px-2 block">
                {t.nav.services}
              </span>
              {disciplines.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-2 rounded-lg hover:bg-[#FCFAF7] text-xs font-serif font-medium text-[#261F1A] transition-colors"
                >
                  {locale === "en" ? item.titleEn : item.titleEs}
                </Link>
              ))}
            </div>

            {/* Core Links */}
            <div className="pt-2 border-t border-[#E0D7C8] space-y-1">
              <Link
                href="/transformaciones"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2.5 py-2 rounded-lg hover:bg-[#FCFAF7] text-xs font-serif font-medium text-[#261F1A] transition-colors"
              >
                {t.nav.transformations}
              </Link>
              <Link
                href="/catalogo"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2.5 py-2 rounded-lg hover:bg-[#FCFAF7] text-xs font-serif font-medium text-[#261F1A] transition-colors"
              >
                {t.nav.catalog}
              </Link>
              <Link
                href="/cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2.5 py-2 rounded-lg bg-[#EAE2D5] font-serif text-xs font-semibold text-[#B85D3B] transition-colors"
              >
                {t.nav.estimator} (PDF)
              </Link>
              <Link
                href="/studio-interactivo"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2.5 py-2 rounded-lg hover:bg-[#FCFAF7] text-xs font-serif font-medium text-[#261F1A] transition-colors"
              >
                {t.nav.studio}
              </Link>
              <Link
                href="/nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2.5 py-2 rounded-lg hover:bg-[#FCFAF7] text-xs font-serif font-medium text-[#261F1A] transition-colors"
              >
                {t.nav.about}
              </Link>
            </div>

            {/* Consultation CTA */}
            <div className="pt-3 border-t border-[#E0D7C8] space-y-2.5">
              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="interactive-control flex items-center justify-center min-h-[42px] w-full rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold tracking-wider uppercase shadow-xs"
              >
                {t.nav.bookConsult}
              </Link>
              <div className="flex items-center justify-center gap-4 pt-1 text-xs text-[#54463A]">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B85D3B] py-1"
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
                  className="inline-flex items-center gap-1.5 hover:text-[#D32323] py-1"
                >
                  <svg className="w-3.5 h-3.5 fill-[#D32323]" viewBox="0 0 24 24">
                    <path d="M12.003 0c-.39 0-.745.242-.892.607l-1.895 4.708a.959.959 0 0 0 .42 1.185l4.382 2.53a.96.96 0 0 0 1.26-.353l2.42-4.47a.958.958 0 0 0-.324-1.218L13.23.473a.965.965 0 0 0-.726-.473h-.5zM8.38 8.65a.96.96 0 0 0-1.23-.448L2.49 10.37a.958.958 0 0 0-.528 1.15l1.045 4.966c.094.446.49.76.945.753a.96.96 0 0 0 .452-.116l4.57-2.17a.959.959 0 0 0 .49-1.157l-1.084-5.146zm8.852.793a.959.959 0 0 0-.877.568l-2.03 4.652a.96.96 0 0 0 .463 1.168l4.49 2.332a.96.96 0 0 0 1.25-.4l2.25-4.557a.958.958 0 0 0-.363-1.206l-4.14-2.274a.966.966 0 0 0-.443-.283h-.6zm-5.717 6.42a.96.96 0 0 0-1.253.376l-2.348 4.507a.958.958 0 0 0 .34 1.213l4.184 2.193c.153.08.322.12.49.12.37 0 .72-.212.877-.56l1.968-4.678a.96.96 0 0 0-.437-1.18l-3.82-1.99z" />
                  </svg>
                  <span>Yelp Reviews</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
