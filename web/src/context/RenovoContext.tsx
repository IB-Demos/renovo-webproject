"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Locale, Dictionary, dictionaries } from "../lib/i18n/dictionaries";

export interface SampleItem {
  id: string;
  code: string;
  category: "profile" | "pigment" | "sheen" | "hardware" | "configuration" | "system";
  title: Record<Locale, string> | string;
  subtitle: string;
  hex?: string;
}

interface RenovoContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  samples: SampleItem[];
  addSample: (item: SampleItem) => void;
  removeSample: (id: string) => void;
  clearSamples: () => void;
  isSampleInTray: (id: string) => boolean;
  isInTray: (id: string) => boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  toastMessage: string | null;
}

const RenovoContext = createContext<RenovoContextValue | undefined>(undefined);

const STORAGE_KEY_SAMPLES = "renovo_sample_tray_v1";
const STORAGE_KEY_LOCALE = "renovo_locale_v1";

export function RenovoProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [samples, setSamples] = useState<SampleItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedLocale = window.localStorage.getItem(STORAGE_KEY_LOCALE) as Locale | null;
      if (savedLocale === "en" || savedLocale === "es") {
        setLocaleState(savedLocale);
        document.documentElement.lang = savedLocale;
      }
      const savedSamples = window.localStorage.getItem(STORAGE_KEY_SAMPLES);
      if (savedSamples) {
        const parsed = JSON.parse(savedSamples);
        if (Array.isArray(parsed)) {
          setSamples(parsed);
        }
      }
    } catch {
      // Ignore storage access errors in restricted modes
    }
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(STORAGE_KEY_LOCALE, nextLocale);
      document.documentElement.lang = nextLocale;
    } catch {
      // Ignore storage errors
    }
  }, []);

  const triggerToast = useCallback((msg: string) => {
    setToastMessage(msg);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const addSample = useCallback(
    (item: SampleItem) => {
      setSamples((prev) => {
        const exists = prev.some((s) => s.id === item.id);
        const next = exists ? prev.filter((s) => s.id !== item.id) : [...prev, item];
        try {
          window.localStorage.setItem(STORAGE_KEY_SAMPLES, JSON.stringify(next));
        } catch {
          // Ignore
        }
        return next;
      });
      triggerToast(dictionaries[locale].sampleDrawer.itemAddedToast);
    },
    [locale, triggerToast]
  );

  const removeSample = useCallback((id: string) => {
    setSamples((prev) => {
      const next = prev.filter((s) => s.id !== id);
      try {
        window.localStorage.setItem(STORAGE_KEY_SAMPLES, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  }, []);

  const clearSamples = useCallback(() => {
    setSamples([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY_SAMPLES);
    } catch {
      // Ignore
    }
  }, []);

  const isSampleInTray = useCallback(
    (id: string) => samples.some((s) => s.id === id),
    [samples]
  );

  const value: RenovoContextValue = {
    locale,
    setLocale,
    t: dictionaries[locale],
    samples,
    addSample,
    removeSample,
    clearSamples,
    isSampleInTray,
    isInTray: isSampleInTray,
    isDrawerOpen,
    setIsDrawerOpen,
    toastMessage,
  };

  return <RenovoContext.Provider value={value}>{children}</RenovoContext.Provider>;
}

export function useRenovo() {
  const ctx = useContext(RenovoContext);
  if (!ctx) {
    throw new Error("useRenovo must be used inside RenovoProvider");
  }
  return ctx;
}
