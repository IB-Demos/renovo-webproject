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
            hasSavedSamples ? "bottom-[84px]" : "bottom-5 sm:bottom-6"
          }`}
        >
          <Link
            href="/cotizador"
            className="interactive-control group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] border border-[#C59B27]/40 shadow-2xl hover:scale-[1.03] active:scale-98 transition-all"
            title={
              locale === "en"
                ? "Request a Formal Project Proposal (PDF)"
                : "Solicitar Cotización de Proyecto (PDF)"
            }
          >
            <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-xs">
              <FilePdf size={13} weight="fill" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-wider uppercase text-[#C59B27] leading-none hidden sm:block">
                {locale === "en" ? "PDF PROPOSAL" : "PROPUESTA PDF"}
              </span>
              <span className="text-xs sm:text-sm font-serif font-semibold tracking-tight text-[#FCFAF7] leading-tight">
                <span className="sm:hidden">{locale === "en" ? "Quote (PDF)" : "Cotizar (PDF)"}</span>
                <span className="hidden sm:inline">{locale === "en" ? "Request a Quote" : "Cotizar Proyecto"}</span>
              </span>
            </div>

            <ArrowRight
              size={12}
              weight="bold"
              className="text-[#FCFAF7] group-hover:translate-x-0.5 transition-transform shrink-0"
            />
          </Link>
        </motion.div>
      </AnimatePresence>
    </aside>
  );
}
