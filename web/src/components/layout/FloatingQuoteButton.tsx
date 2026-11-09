"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRenovo } from "@/context/RenovoContext";
import { FilePdf, ArrowRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingQuoteButton() {
  const { locale, samples } = useRenovo();
  const pathname = usePathname();

  // Hide when the user is already on the cotizador page
  if (pathname === "/cotizador") {
    return null;
  }

  const hasSavedSamples = samples.length > 0;

  return (
    <aside aria-label="Quick Quote Request" className="select-none">
      <AnimatePresence>
        <motion.div
          key="floating-quote-btn"
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.94 }}
          transition={{ duration: 0.25 }}
          className={`fixed right-4 sm:right-6 z-40 transition-all duration-300 ${
            hasSavedSamples ? "bottom-[142px]" : "bottom-[80px] sm:bottom-[86px]"
          }`}
        >
          <Link
            href="/cotizador"
            className="interactive-control group flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4.5 py-2.5 sm:py-3 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] border-2 border-[#C59B27]/60 shadow-2xl hover:scale-[1.03] active:scale-98 transition-all"
            title={
              locale === "en"
                ? "Request a Formal Project Proposal"
                : "Solicitar Cotización de Proyecto"
            }
          >
            <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-xs">
              <FilePdf size={16} weight="fill" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#FCD34D] leading-none hidden sm:block">
                {locale === "en" ? "OFFICIAL ESTIMATE" : "PRESUPUESTO FORMAL"}
              </span>
              <span className="text-xs sm:text-sm font-serif font-bold tracking-normal text-[#FCFAF7] leading-tight">
                <span className="sm:hidden">{locale === "en" ? "Quote" : "Cotizar"}</span>
                <span className="hidden sm:inline">{locale === "en" ? "Request a Quote" : "Cotizar Proyecto"}</span>
              </span>
            </div>

            <ArrowRight
              size={14}
              weight="bold"
              className="text-[#FCFAF7] group-hover:translate-x-0.5 transition-transform shrink-0"
            />
          </Link>
        </motion.div>
      </AnimatePresence>
    </aside>
  );
}
