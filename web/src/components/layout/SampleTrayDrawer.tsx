"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import { motionTokens } from "@/lib/motionTokens";
import {
  BookmarkSimple,
  X,
  Trash,
  Calculator,
  ArrowRight,
  Sparkle,
  CheckCircle,
} from "@phosphor-icons/react";

export function SampleTrayDrawer() {
  const {
    locale,
    t,
    samples,
    removeSample,
    clearSamples,
    isDrawerOpen,
    setIsDrawerOpen,
    toastMessage,
  } = useRenovo();

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    }
    if (isDrawerOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen, setIsDrawerOpen]);

  return (
    <>
      {/* =====================================================================
          1. PERSISTENT FLOATING QUICK-ACCESS DOCK (Visible When Samples Pinned)
      ===================================================================== */}
      <AnimatePresence>
        {samples.length > 0 && !isDrawerOpen && (
          <motion.button
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label={`${t.sampleDrawer.title} (${samples.length} items saved)`}
            className="interactive-control fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 rounded-full bg-[#1A1410] text-[#FCFAF7] border-2 border-[#B85D3B] shadow-2xl hover:bg-[#261F1A] hover:scale-105 active:scale-98 transition-all group"
          >
            <div className="w-7 h-7 rounded-full bg-[#B85D3B] flex items-center justify-center text-white shadow-xs shrink-0">
              <BookmarkSimple size={15} weight="fill" />
            </div>
            <div className="text-left font-serif">
              <span className="text-xs font-semibold block leading-tight text-[#FCFAF7] group-hover:text-[#C59B27] transition-colors">
                {locale === "en" ? "Design Selections" : "Selecciones de Diseño"}
              </span>
              <span className="text-[10px] text-[#C59B27] font-mono font-medium block">
                {samples.length}{" "}
                {locale === "en"
                  ? samples.length === 1
                    ? "finish saved"
                    : "finishes saved"
                  : samples.length === 1
                  ? "material guardado"
                  : "materiales guardados"}
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* =====================================================================
          2. TOAST NOTIFICATION ON SAMPLE ADD/REMOVE
      ===================================================================== */}
      <div
        aria-live="polite"
        className="fixed bottom-20 right-6 z-50 pointer-events-none flex flex-col items-end gap-2"
      >
        <AnimatePresence mode="wait">
          {toastMessage && (
            <motion.div
              key={toastMessage}
              role="status"
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.out }}
              className="pointer-events-auto bg-[#1A1410] text-[#FCFAF7] border border-[#B85D3B]/40 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-serif"
            >
              <CheckCircle size={18} className="text-[#B85D3B]" weight="fill" />
              <span className="font-medium">{toastMessage}</span>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="interactive-control underline underline-offset-4 text-[#C59B27] hover:text-white ml-2 font-mono text-[11px] font-bold"
              >
                {locale === "en" ? "View Selections" : "Ver Selecciones"} ({samples.length})
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =====================================================================
          3. MODAL SLIDE-OVER DESIGN SELECTIONS TRAY
      ===================================================================== */}
      <AnimatePresence mode="wait">
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Slide-over panel */}
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="sample-drawer-title"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-lg bg-[#FCFAF7] text-[#1A1410] h-full flex flex-col border-l border-[#DFD6C6] shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-[#DFD6C6] flex items-center justify-between bg-[#EFE8DD]">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#B85D3B] font-bold">
                    <Sparkle size={13} weight="fill" />
                    <span>
                      {locale === "en"
                        ? `SPECIFICATION TRAY · ${samples.length} ITEMS`
                        : `MESA DE ESPECIFICACIÓN · ${samples.length} MUESTRAS`}
                    </span>
                  </div>
                  <h2 id="sample-drawer-title" className="text-xl font-serif font-semibold text-[#1A1410]">
                    {locale === "en" ? "Your Design Selections" : "Tus Selecciones de Diseño"}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label={t.sampleDrawer.closeLabel}
                  className="interactive-control w-10 h-10 rounded-full border border-[#DFD6C6] bg-[#FCFAF7] hover:bg-[#EAE2D5] flex items-center justify-center text-[#1A1410] transition-colors"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {samples.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center border-2 border-dashed border-[#DFD6C6] rounded-3xl p-8 bg-[#EAE2D5]/40 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#EAE2D5] border border-[#DFD6C6] flex items-center justify-center text-[#B85D3B]">
                      <BookmarkSimple size={26} weight="duotone" />
                    </div>
                    <div className="space-y-2 max-w-sm">
                      <h3 className="text-xl font-serif font-semibold text-[#1A1410]">
                        {t.sampleDrawer.emptyHeadline}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#54463A] leading-relaxed font-serif">
                        {t.sampleDrawer.emptyBody}
                      </p>
                    </div>

                    <Link
                      href="/catalogo"
                      onClick={() => setIsDrawerOpen(false)}
                      className="interactive-control mt-4 min-h-[46px] px-6 py-2.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
                    >
                      <span>{t.sampleDrawer.emptyAction}</span>
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-xs font-serif text-[#54463A]">
                      {locale === "en"
                        ? "These materials and door profiles will be brought to your in-home consultation with Raul Burgos:"
                        : "Estos acabados y perfiles se incluirán en tu consulta física con Raul Burgos:"}
                    </div>

                    <ul className="space-y-2.5">
                      {samples.map((item) => (
                        <li
                          key={item.id}
                          className="p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] hover:border-[#B85D3B]/40 transition-all flex items-center justify-between gap-3 shadow-xs"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            {item.hex ? (
                              <span
                                className="w-11 h-11 rounded-xl shrink-0 border border-black/15 shadow-inner"
                                style={{ backgroundColor: item.hex }}
                                aria-hidden="true"
                              />
                            ) : (
                              <span className="w-11 h-11 rounded-xl shrink-0 bg-[#EAE2D5] border border-[#DFD6C6] flex items-center justify-center font-mono text-[11px] font-bold text-[#B85D3B]">
                                CAD
                              </span>
                            )}
                            <div className="min-w-0">
                              <span className="font-mono text-[10px] text-[#B85D3B] font-bold uppercase tracking-wider block truncate">
                                {item.code}
                              </span>
                              <p className="font-serif font-semibold text-sm text-[#1A1410] truncate">
                                {typeof item.title === "string" ? item.title : item.title[locale]}
                              </p>
                              <p className="text-xs text-[#54463A] font-serif truncate">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeSample(item.id)}
                            aria-label={`Remove ${item.title}`}
                            className="interactive-control w-8 h-8 rounded-full border border-[#DFD6C6] hover:border-[#A34E2F] hover:bg-[#F4EFE6] text-[#7A6D5E] hover:text-[#A34E2F] flex items-center justify-center shrink-0 transition-colors"
                          >
                            <Trash size={14} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Drawer Footer Actions */}
              {samples.length > 0 && (
                <div className="p-6 border-t border-[#DFD6C6] bg-[#EFE8DD] space-y-3.5">
                  <div className="flex items-center justify-between text-xs font-serif text-[#3D3228]">
                    <span>{locale === "en" ? "Pinned Specifications:" : "Materiales Seleccionados:"}</span>
                    <span className="font-mono font-bold text-sm text-[#B85D3B]">
                      {samples.length} {locale === "en" ? "Items" : "Muestras"}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <Link
                      href="/cotizador"
                      onClick={() => setIsDrawerOpen(false)}
                      className="interactive-control min-h-[48px] px-6 py-3 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] text-xs font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <Calculator size={16} weight="bold" />
                      <span>{t.sampleDrawer.sendToEstimator}</span>
                      <ArrowRight size={14} weight="bold" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <Link
                        href="/contacto"
                        onClick={() => setIsDrawerOpen(false)}
                        className="interactive-control flex-1 min-h-[44px] px-4 py-2.5 rounded-full border border-[#DFD6C6] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-xs font-serif font-semibold text-[#1A1410] flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{locale === "en" ? "Request With Consultation" : "Pedir en mi Cita"}</span>
                      </Link>

                      <button
                        type="button"
                        onClick={clearSamples}
                        className="interactive-control min-h-[44px] px-4 py-2.5 rounded-full border border-[#DFD6C6] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-xs font-serif text-[#7A6D5E] hover:text-[#A34E2F] transition-colors"
                      >
                        {t.sampleDrawer.clearAll}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
