"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useRenovo } from "@/context/RenovoContext";
import { motionTokens } from "@/lib/motionTokens";

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
      {/* Polite Live Region Toast */}
      <div
        aria-live="polite"
        className="fixed bottom-5 right-5 z-50 pointer-events-none flex flex-col items-end gap-2"
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
              className="pointer-events-auto bg-[var(--obsidian)] text-white border border-white/15 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <span>{toastMessage}</span>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="interactive-control underline underline-offset-4 text-white/90 hover:text-white ml-2 font-sans font-medium"
              >
                {t.nav.sampleTray} ({samples.length})
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal Slide-Over Sample Tray */}
      <AnimatePresence mode="wait">
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: motionTokens.duration.fast }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
              aria-hidden="true"
            />

            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="sample-drawer-title"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={motionTokens.spring.workbench}
              className="relative z-10 w-full max-w-lg bg-[var(--bg)] text-[var(--fg)] h-full flex flex-col border-l border-[var(--border-strong)] shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-[var(--border)] flex items-center justify-between bg-[var(--surface)]">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] block">
                    SPECIFICATION SCHEDULE // {samples.length} ITEMS
                  </span>
                  <h2 id="sample-drawer-title" className="text-lg font-semibold tracking-tight mt-0.5">
                    {t.sampleDrawer.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label={t.sampleDrawer.closeLabel}
                  className="interactive-control min-h-[44px] min-w-[44px] rounded-lg border border-[var(--border-strong)] bg-[var(--bg)] flex items-center justify-center text-xs font-mono"
                >
                  ESC
                </button>
              </div>

              {/* Drawer Body (With Explicit First-Use Empty State per state-coverage.md & R-27) */}
              <div className="flex-1 overflow-y-auto p-6">
                {samples.length === 0 ? (
                  <div className="h-full flex flex-col items-start justify-center border border-dashed border-[var(--border-strong)] rounded-2xl p-8 bg-[var(--surface)]/40">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--muted)] px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)]">
                      STATE // 00 SAMPLES PINNED
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight mt-4">
                      {t.sampleDrawer.emptyHeadline}
                    </h3>
                    <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
                      {t.sampleDrawer.emptyBody}
                    </p>
                    <Link
                      href="/catalogo"
                      onClick={() => setIsDrawerOpen(false)}
                      className="interactive-control mt-6 min-h-[44px] px-5 py-2.5 rounded-lg bg-[var(--fg)] text-[var(--bg)] text-sm font-medium inline-flex items-center"
                    >
                      {t.sampleDrawer.emptyAction}
                    </Link>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {samples.map((item) => (
                      <li
                        key={item.id}
                        className="p-3.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          {item.hex ? (
                            <span
                              className="w-11 h-11 rounded-lg shrink-0 border border-black/15 shadow-inner"
                              style={{ backgroundColor: item.hex }}
                              aria-hidden="true"
                            />
                          ) : (
                            <span className="w-11 h-11 rounded-lg shrink-0 bg-[var(--surface)] border border-[var(--border-strong)] flex items-center justify-center font-mono text-[11px] font-semibold">
                              CAD
                            </span>
                          )}
                          <div className="min-w-0">
                            <span className="font-mono text-[11px] text-[var(--muted)] tracking-[0.04em] block truncate">
                              {item.code}
                            </span>
                            <p className="font-medium text-sm text-[var(--fg)] truncate">
                              {typeof item.title === "string" ? item.title : item.title[locale]}
                            </p>
                            <p className="font-mono text-xs text-[var(--muted)] truncate">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeSample(item.id)}
                          className="interactive-control min-h-[40px] px-3 rounded-lg border border-[var(--border)] hover:border-[var(--fg)] text-xs font-mono text-[var(--muted)] hover:text-[var(--fg)] shrink-0"
                        >
                          {locale === "en" ? "Remove" : "Quitar"}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Drawer Footer */}
              {samples.length > 0 && (
                <div className="p-6 border-t border-[var(--border)] bg-[var(--surface)] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                    <span>{locale === "en" ? "Total Pinned Specifications:" : "Total de Especificaciones:"}</span>
                    <span className="tabular-nums font-semibold text-[var(--fg)]">{samples.length}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={clearSamples}
                      className="interactive-control min-h-[44px] px-4 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg)] text-xs font-mono uppercase tracking-[0.06em] text-[var(--fg)]"
                    >
                      {t.sampleDrawer.clearAll}
                    </button>
                    <Link
                      href="/cotizador"
                      onClick={() => setIsDrawerOpen(false)}
                      className="interactive-control flex-1 min-h-[44px] px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium flex items-center justify-center text-center"
                    >
                      {t.sampleDrawer.sendToEstimator}
                    </Link>
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
