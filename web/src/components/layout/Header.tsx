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
    <header className="sticky top-0 z-50 w-full bg-[#0E0C0A]/95 backdrop-blur-xl border-b border-white/8 transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* =====================================================================
            1. BRAND LOGO (Clean, high-end atelier proportions)
        ===================================================================== */}
        <Link
          href="/"
          className="interactive-control flex items-center gap-3 group focus-visible:rounded-md py-1 shrink-0"
        >
          <img
            src="/assets/brand/renovo-logo.png"
            alt="Renovo Painting Solutions"
            className="h-8 sm:h-10 w-auto object-contain outline-none drop-shadow-sm"
          />
          <div className="hidden sm:flex flex-col border-l border-white/10 pl-3 leading-tight">
            <span className="text-[10px] tracking-[0.2em] text-[var(--gold)] font-mono font-semibold uppercase">
              Phoenix, AZ
            </span>
            <span className="text-[10px] text-[#8A7F73] tracking-wider uppercase font-mono">
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
              className={`interactive-control py-2 text-sm font-medium tracking-wide inline-flex items-center gap-1.5 transition-colors ${
                pathname?.startsWith("/cocinas") ||
                pathname?.startsWith("/muebles") ||
                pathname?.startsWith("/pintura")
                  ? "text-[var(--gold)] font-semibold"
                  : "text-[#D4CBBF] hover:text-white"
              }`}
            >
              <span>{t.nav.services}</span>
              <CaretDown
                size={12}
                className={`transition-transform duration-200 text-[var(--gold)] ${
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
                  className="absolute top-full left-0 w-80 p-2.5 rounded-2xl bg-[#141210] border border-white/10 shadow-2xl z-50 backdrop-blur-2xl"
                >
                  {disciplines.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDisciplinesOpen(false)}
                      className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-[var(--gold)] transition-colors flex items-center justify-between">
                        <span>{locale === "en" ? item.titleEn : item.titleEs}</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[11px] text-[#8A7F73] mt-0.5 leading-relaxed">
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
            className={`interactive-control py-2 text-sm font-medium tracking-wide transition-colors ${
              pathname?.startsWith("/transformaciones")
                ? "text-[var(--gold)] font-semibold"
                : "text-[#D4CBBF] hover:text-white"
            }`}
          >
            {t.nav.transformations}
          </Link>

          {/* Materials */}
          <Link
            href="/catalogo"
            className={`interactive-control py-2 text-sm font-medium tracking-wide transition-colors ${
              pathname?.startsWith("/catalogo")
                ? "text-[var(--gold)] font-semibold"
                : "text-[#D4CBBF] hover:text-white"
            }`}
          >
            {t.nav.catalog}
          </Link>

          {/* Studio & Estimator */}
          <Link
            href="/studio-interactivo"
            className={`interactive-control py-2 text-sm font-medium tracking-wide transition-colors ${
              pathname?.startsWith("/studio-interactivo") || pathname?.startsWith("/cotizador")
                ? "text-[var(--gold)] font-semibold"
                : "text-[#D4CBBF] hover:text-white"
            }`}
          >
            {t.nav.studio}
          </Link>

          {/* Atelier Heritage */}
          <Link
            href="/nosotros"
            className={`interactive-control py-2 text-sm font-medium tracking-wide transition-colors ${
              pathname?.startsWith("/nosotros")
                ? "text-[var(--gold)] font-semibold"
                : "text-[#D4CBBF] hover:text-white"
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
            className="flex items-center text-xs font-mono tracking-wider text-[#8A7F73]"
          >
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={`interactive-control py-1 transition-colors ${
                locale === "en" ? "text-[var(--gold)] font-semibold" : "hover:text-white"
              }`}
            >
              EN
            </button>
            <span className="mx-1.5 opacity-30">/</span>
            <button
              type="button"
              onClick={() => setLocale("es")}
              aria-pressed={locale === "es"}
              className={`interactive-control py-1 transition-colors ${
                locale === "es" ? "text-[var(--gold)] font-semibold" : "hover:text-white"
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
            className="interactive-control relative p-2 rounded-full text-[#B8AEA2] hover:text-[var(--gold)] hover:bg-white/5 transition-colors"
          >
            <BookmarkSimple
              size={18}
              weight={samples.length > 0 ? "fill" : "regular"}
              className={samples.length > 0 ? "text-[var(--gold)]" : ""}
            />
            {samples.length > 0 && (
              <span className="absolute 0 top-0.5 right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-[var(--gold)] text-[#0E0C0A] text-[9px] font-bold font-mono flex items-center justify-center">
                {samples.length}
              </span>
            )}
          </button>

          {/* Desktop Phone (Visible on 2xl screens) */}
          <a
            href={COMPANY_INFO.phoneHref}
            className="hidden 2xl:inline-flex items-center gap-1.5 text-xs text-[#8A7F73] hover:text-[var(--gold)] font-mono transition-colors"
          >
            <Phone size={13} className="text-[var(--gold)]" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          {/* Refined Consultation CTA */}
          <Link
            href="/contacto"
            className="interactive-control hidden sm:inline-flex items-center justify-center min-h-[38px] px-4 sm:px-5 py-2 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#0E0C0A] text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-98 shadow-sm"
          >
            {t.nav.bookConsult}
          </Link>

          {/* Mobile Menu Trigger (44px tap target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className="interactive-control lg:hidden min-h-[44px] min-w-[44px] rounded-full border border-white/10 bg-white/5 text-white inline-flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* =====================================================================
          4. MOBILE ACCORDION DRAWER (Clean, spacious, high-contrast)
      ===================================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden border-t border-white/8 bg-[#0E0C0A] overflow-hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="px-4 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              {/* Primary Disciplines */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)] px-3 py-1 font-semibold">
                  {locale === "en" ? "MASTER DISCIPLINES" : "ESPECIALIDADES"}
                </div>
                <Link
                  href="/cocinas-y-gabinetes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white font-medium"
                >
                  <span>{locale === "en" ? "Kitchens & Cabinetry" : "Cocinas y Gabinetes"}</span>
                  <ArrowRight size={14} className="text-[var(--gold)]" />
                </Link>
                <Link
                  href="/muebles-a-medida"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white font-medium"
                >
                  <span>{locale === "en" ? "Custom Furniture & Built-Ins" : "Muebles a Medida"}</span>
                  <ArrowRight size={14} className="text-[var(--gold)]" />
                </Link>
                <Link
                  href="/pintura-residencial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white font-medium"
                >
                  <span>{locale === "en" ? "Residential & Exterior Painting" : "Pintura Residencial"}</span>
                  <ArrowRight size={14} className="text-[var(--gold)]" />
                </Link>
              </div>

              {/* Exploration & Tools */}
              <div className="space-y-1 pt-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A7F73] px-3 py-1 font-semibold">
                  {locale === "en" ? "EXPLORE & TOOLS" : "HERRAMIENTAS Y PORTAFOLIO"}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/transformaciones"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#EAE2D5] font-medium"
                  >
                    {t.nav.transformations}
                  </Link>
                  <Link
                    href="/studio-interactivo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#EAE2D5] font-medium"
                  >
                    {t.nav.studio}
                  </Link>
                  <Link
                    href="/catalogo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#EAE2D5] font-medium"
                  >
                    {t.nav.catalog}
                  </Link>
                  <Link
                    href="/cotizador"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#EAE2D5] font-medium"
                  >
                    {t.nav.estimator}
                  </Link>
                </div>
              </div>

              {/* Atelier & Contact */}
              <div className="space-y-1 pt-2">
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/nosotros"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#BFB4A6] text-center font-medium"
                  >
                    {t.nav.about}
                  </Link>
                  <Link
                    href="/contacto"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#BFB4A6] text-center font-medium"
                  >
                    {t.nav.contact}
                  </Link>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="pt-3 space-y-2">
                <Link
                  href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="interactive-control min-h-[48px] w-full rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[#0E0C0A] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <Sparkle size={15} weight="fill" />
                  <span>{t.nav.bookConsult}</span>
                </Link>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="interactive-control min-h-[44px] w-full rounded-xl border border-white/10 bg-white/5 text-white text-xs font-mono flex items-center justify-center gap-2"
                >
                  <Phone size={14} className="text-[var(--gold)]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
