"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, ShieldCheck, Gear } from "@phosphor-icons/react";
import { useRenovo } from "@/context/RenovoContext";

const STORAGE_KEY_CONSENT = "renovo_cookie_consent_v1";

interface ConsentSettings {
  essential: boolean;
  preferences: boolean;
  timestamp: string;
}

export function CookieConsentBanner() {
  const { locale } = useRenovo();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferencesEnabled, setPreferencesEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY_CONSENT);
      if (!stored) {
        // Small delay to prevent layout pop
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // storage access restricted
    }
  }, []);

  // Listen for open requests (e.g. from footer button)
  useEffect(() => {
    const handleOpen = () => {
      setVisible(true);
      setIsModalOpen(true);
    };
    window.addEventListener("renovo-open-cookie-banner", handleOpen);
    return () => window.removeEventListener("renovo-open-cookie-banner", handleOpen);
  }, []);

  const saveConsent = (preferences: boolean) => {
    const consent: ConsentSettings = {
      essential: true,
      preferences,
      timestamp: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY_CONSENT, JSON.stringify(consent));
    } catch {
      // Ignore storage errors
    }
    setVisible(false);
    setIsModalOpen(false);
  };

  if (!mounted || !visible) return null;

  const isEs = locale === "es";

  return (
    <>
      {/* Floating Bottom Banner */}
      {!isModalOpen && (
        <aside
          role="dialog"
          aria-label={isEs ? "Consentimiento de cookies" : "Cookie consent banner"}
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-50 bg-[#1A1410] text-[#F4EFE6] border border-[#3E3228] rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 bg-[#B85D3B]/20 text-[#E07A5F] rounded-xl shrink-0 mt-0.5">
              <Cookie size={24} weight="duotone" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-serif text-base sm:text-lg font-medium text-white flex items-center justify-between">
                <span>{isEs ? "Privacidad y Cookies en Renovo" : "Privacy & Cookies at Renovo"}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#DFD6C6] leading-relaxed">
                {isEs
                  ? "Utilizamos únicamente cookies esenciales y de preferencias para recordar tu idioma y guardar tus cotizaciones. Nunca vendemos tus datos ni usamos rastreadores publicitarios intrusivos."
                  : "We only use essential and preference cookies to remember your language and save your estimates. We never sell your data or deploy intrusive third-party ad trackers."}{" "}
                <Link
                  href="/cookies"
                  className="text-[#E07A5F] hover:underline inline-block font-medium"
                >
                  {isEs ? "Leer Política de Cookies" : "Read Cookie Policy"}
                </Link>
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => saveConsent(true)}
                  className="px-4 py-2 bg-[#B85D3B] hover:bg-[#9E4D30] text-white text-xs sm:text-sm font-medium rounded-lg transition-colors focus:ring-2 focus:ring-[#E07A5F] focus:outline-none"
                >
                  {isEs ? "Aceptar Todas" : "Accept All"}
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent(false)}
                  className="px-3.5 py-2 bg-[#2E2620] hover:bg-[#3D332B] text-[#DFD6C6] text-xs sm:text-sm font-medium rounded-lg transition-colors focus:ring-2 focus:ring-[#7A6E63] focus:outline-none"
                >
                  {isEs ? "Solo Necesarias" : "Necessary Only"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-2.5 py-2 text-xs text-[#A89D8F] hover:text-white underline transition-colors flex items-center gap-1 focus:outline-none"
                >
                  <Gear size={14} />
                  <span>{isEs ? "Personalizar" : "Customize"}</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Customization Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
        >
          <div className="bg-[#FCFAF7] border border-[#DFD6C6] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#EAE3D2] pb-4">
              <div className="flex items-center gap-2.5 text-[#B85D3B]">
                <ShieldCheck size={26} weight="duotone" />
                <h2 id="cookie-modal-title" className="font-serif text-xl sm:text-2xl text-[#1A1410]">
                  {isEs ? "Preferencias de Cookies" : "Cookie Preferences"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-[#7A6E63] hover:text-[#1A1410] p-1.5 rounded-lg focus:outline-none"
                aria-label={isEs ? "Cerrar modal" : "Close modal"}
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Category 1: Strictly Necessary */}
              <div className="p-4 bg-white border border-[#DFD6C6] rounded-xl flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#1A1410]">
                      {isEs ? "Cookies Técnicas Esenciales" : "Strictly Necessary Cookies"}
                    </span>
                    <span className="text-[10px] bg-[#EFE8DC] text-[#7A6E63] px-2 py-0.5 rounded font-mono uppercase">
                      {isEs ? "Obligatorias" : "Required"}
                    </span>
                  </div>
                  <p className="mt-1 text-[#52473E] text-xs">
                    {isEs
                      ? "Requeridas para la seguridad del sitio, navegación fluida y funcionamiento del servidor."
                      : "Required for site security, navigation, and core server functionality."}
                  </p>
                </div>
                <div className="shrink-0 text-emerald-600 font-bold text-xs mt-1">
                  ✓ {isEs ? "Activas" : "Active"}
                </div>
              </div>

              {/* Category 2: Preferences */}
              <div className="p-4 bg-white border border-[#DFD6C6] rounded-xl flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#1A1410]">
                      {isEs ? "Preferencias y Borradores" : "Preferences & Project Drafts"}
                    </span>
                  </div>
                  <p className="mt-1 text-[#52473E] text-xs">
                    {isEs
                      ? "Recuerda tu selección de idioma (ES/EN) y conserva las medidas introducidas en el cotizador interactivo."
                      : "Remembers your language choice (EN/ES) and preserves measurements in the quote generator."}
                  </p>
                </div>
                <label className="shrink-0 relative inline-flex items-center cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={preferencesEnabled}
                    onChange={(e) => setPreferencesEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B85D3B]"></div>
                </label>
              </div>

              {/* Zero Marketing Note */}
              <div className="p-3 bg-[#F4EFE6] rounded-lg text-[11px] text-[#7A6E63] border border-[#E3D9C8]">
                {isEs
                  ? "Nota de cumplimiento: Renovo no utiliza cookies de publicidad conductual ni cede perfiles a redes sociales."
                  : "Compliance note: Renovo does not utilize behavioral advertising cookies or share profiles with third-party networks."}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#EAE3D2]">
              <button
                type="button"
                onClick={() => saveConsent(false)}
                className="px-4 py-2 bg-transparent text-[#7A6E63] hover:text-[#1A1410] text-xs sm:text-sm font-medium"
              >
                {isEs ? "Rechazar Opcionales" : "Reject Optional"}
              </button>
              <button
                type="button"
                onClick={() => saveConsent(preferencesEnabled)}
                className="px-5 py-2.5 bg-[#B85D3B] hover:bg-[#9E4D30] text-white text-xs sm:text-sm font-medium rounded-xl transition-colors shadow-sm focus:ring-2 focus:ring-[#B85D3B]"
              >
                {isEs ? "Guardar Mis Preferencias" : "Save Preferences"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
