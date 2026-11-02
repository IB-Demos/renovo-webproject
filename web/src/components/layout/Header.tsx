"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  Phone,
  BookmarkSimple,
  List,
  X,
  CaretDown,
  ArrowRight,
  Sparkle,
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
    <header className="sticky top-0 z-50 w-full bg-[#F4EFE6]/92 backdrop-blur-xl border-b border-[#E0D7C8] text-[#261F1A] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-20 sm:h-24 flex items-center justify-between gap-4">
        {/* =====================================================================
            1. BRAND LOGO (Clean, high-end atelier proportions)
        ===================================================================== */}
        <Link
          href="/"
          className="interactive-control flex items-center gap-3 group focus-visible:rounded-md py-1 shrink-0"
        >
          <img
            src={COMPANY_INFO.logoPath}
            alt="Renovo Painting Solutions"
            className="h-14 sm:h-16 w-auto object-contain outline-none drop-shadow-sm"
          />
          <div className="hidden sm:flex flex-col border-l border-[#D6CCBC] pl-3 leading-tight">
            <span className="text-xs tracking-[0.2em] text-[#B85D3B] font-serif font-bold uppercase">
              Phoenix, AZ
            </span>
            <span className="text-xs text-[#3D3228] tracking-wider uppercase font-serif font-semibold">
              {locale === "en" ? "Cabinetry & Finishes" : "Ebanistería y Pintura"}
            </span>
          </div>
        </Link>

        {/* =====================================================================
            2. DESKTOP CURATED NAVIGATION (Streamlined to 5 single-line links)
        ===================================================================== */}
        <nav
          aria-label="Main Corporate Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {/* Disciplines Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDisciplinesOpen(true)}
            onMouseLeave={() => setDisciplinesOpen(false)}
          >
            <button
              type="button"
              className={`interactive-control py-2 text-[15px] font-semibold tracking-normal inline-flex items-center gap-1.5 transition-colors font-serif ${
                pathname?.startsWith("/cocinas") ||
                pathname?.startsWith("/muebles") ||
                pathname?.startsWith("/pintura")
                  ? "text-[#B85D3B] font-semibold"
                  : "text-[#261F1A] hover:text-[#B85D3B]"
              }`}
            >
              <span>{t.nav.services}</span>
              <CaretDown
                size={12}
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

          {/* Transformations */}
          <Link
            href="/transformaciones"
            className={`interactive-control py-2 text-[15px] font-semibold tracking-normal transition-colors font-serif ${
              pathname?.startsWith("/transformaciones")
                ? "text-[#B85D3B] font-semibold"
                : "text-[#261F1A] hover:text-[#B85D3B]"
            }`}
          >
            {t.nav.transformations}
          </Link>

          {/* Materials */}
          <Link
            href="/catalogo"
            className={`interactive-control py-2 text-[15px] font-semibold tracking-normal transition-colors font-serif ${
              pathname?.startsWith("/catalogo")
                ? "text-[#B85D3B] font-semibold"
                : "text-[#261F1A] hover:text-[#B85D3B]"
            }`}
          >
            {t.nav.catalog}
          </Link>

          {/* Studio & Estimator */}
          <Link
            href="/studio-interactivo"
            className={`interactive-control py-2 text-[15px] font-semibold tracking-normal transition-colors font-serif ${
              pathname?.startsWith("/studio-interactivo") || pathname?.startsWith("/cotizador")
                ? "text-[#B85D3B] font-semibold"
                : "text-[#261F1A] hover:text-[#B85D3B]"
            }`}
          >
            {t.nav.studio}
          </Link>

          {/* Atelier Heritage */}
          <Link
            href="/nosotros"
            className={`interactive-control py-2 text-[15px] font-semibold tracking-normal transition-colors font-serif ${
              pathname?.startsWith("/nosotros")
                ? "text-[#B85D3B] font-semibold"
                : "text-[#261F1A] hover:text-[#B85D3B]"
            }`}
          >
            {t.nav.about}
          </Link>
        </nav>

        {/* =====================================================================
            3. RIGHT ACTIONS (Refined, quiet luxury: language, tray, CTA)
        ===================================================================== */}
        <div className="flex items-center gap-3 sm:gap-4">
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
              className={`interactive-control py-1 transition-colors ${
                locale === "en" ? "text-[#B85D3B] font-bold" : "hover:text-[#261F1A]"
              }`}
            >
              EN
            </button>
            <span className="mx-1.5 opacity-40">/</span>
            <button
              type="button"
              onClick={() => setLocale("es")}
              aria-pressed={locale === "es"}
              className={`interactive-control py-1 transition-colors ${
                locale === "es" ? "text-[#B85D3B] font-bold" : "hover:text-[#261F1A]"
              }`}
            >
              ES
            </button>
          </div>

          {/* Design Tray Bookmark Trigger (Icon-only with luxury badge count) */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label={`${t.sampleDrawer.title} (${samples.length} items)`}
            title={t.sampleDrawer.title}
            className="interactive-control relative p-2 rounded-full text-[#3D3228] hover:text-[#B85D3B] hover:bg-[#EAE2D5] transition-colors"
          >
            <BookmarkSimple
              size={18}
              weight={samples.length > 0 ? "fill" : "regular"}
              className={samples.length > 0 ? "text-[#B85D3B]" : ""}
            />
            {samples.length > 0 && (
              <span className="absolute top-0.5 right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-[#B85D3B] text-white text-[9px] font-bold font-serif flex items-center justify-center">
                {samples.length}
              </span>
            )}
          </button>

          {/* Desktop Phone */}
          <a
            href={COMPANY_INFO.phoneHref}
            className="hidden 2xl:inline-flex items-center gap-1.5 text-xs text-[#4A3E34] hover:text-[#B85D3B] font-serif transition-colors"
          >
            <Phone size={13} className="text-[#B85D3B]" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          {/* Refined Consultation CTA in Terracotta */}
          <Link
            href="/contacto"
            className="interactive-control hidden sm:inline-flex items-center justify-center min-h-[38px] px-4 sm:px-5 py-2 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold tracking-wider uppercase transition-all duration-200 active:scale-98 shadow-sm"
          >
            {t.nav.bookConsult}
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className="interactive-control lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-[#D6CCBC] bg-[#FCFAF7] text-[#261F1A] hover:bg-[#EAE2D5] transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* =====================================================================
          4. MOBILE CURATED ACCORDION MENU
      ===================================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[#E0D7C8] bg-[#F4EFE6] px-4 py-6 space-y-4 shadow-2xl"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-serif tracking-widest text-[#B85D3B] font-bold px-3 block">
                {t.nav.services}
              </span>
              {disciplines.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl hover:bg-[#FCFAF7] text-sm font-serif font-medium text-[#261F1A] transition-colors"
                >
                  {locale === "en" ? item.titleEn : item.titleEs}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E0D7C8] space-y-1">
              <Link
                href="/transformaciones"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-[#FCFAF7] text-sm font-serif font-medium text-[#261F1A] transition-colors"
              >
                {t.nav.transformations}
              </Link>
              <Link
                href="/catalogo"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-white text-sm font-serif font-medium text-[#1F1A16] transition-colors"
              >
                {t.nav.catalog}
              </Link>
              <Link
                href="/studio-interactivo"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-white text-sm font-serif font-medium text-[#1F1A16] transition-colors"
              >
                {t.nav.studio}
              </Link>
              <Link
                href="/nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-white text-sm font-serif font-medium text-[#1F1A16] transition-colors"
              >
                {t.nav.about}
              </Link>
            </div>

            <div className="pt-4 border-t border-[#E7E0D5] flex flex-col gap-3">
              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="interactive-control flex items-center justify-center min-h-[46px] w-full rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-white text-xs font-serif font-semibold tracking-wider uppercase shadow-sm"
              >
                {t.nav.bookConsult}
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="interactive-control flex items-center justify-center gap-2 min-h-[44px] w-full rounded-full border border-[#DDD6C9] bg-white text-xs font-serif text-[#1F1A16]"
              >
                <Phone size={14} className="text-[var(--gold)]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
