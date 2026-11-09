import type { Metadata } from "next";
import Link from "next/link";
import { Certificate, ShieldCheck, ArrowLeft, Code, Camera, Sparkle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Licencias y Atribución Legal | Licenses & Attribution — Renovo",
  description:
    "Transparencia legal sobre licencias de software de código abierto, fuentes tipográficas, iconos y derechos de autor fotográficos de Renovo Painting Solutions.",
};

export default function LicenciasPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F4] text-[#1A1410] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7A6E63] hover:text-[#B85D3B] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Volver al inicio / Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="border-b border-[#DFD6C6] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE8DC] text-[#B85D3B] text-xs font-semibold uppercase tracking-wider mb-4">
            <Certificate size={14} weight="bold" />
            <span>Integridad de Propiedad Intelectual</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1410] font-normal tracking-tight">
            Licencias y Atribución / Licenses & Credits
          </h1>
          <p className="mt-2 text-sm text-[#7A6E63]">
            Renovo Painting Solutions LLC • Phoenix, Arizona • Cumplimiento de Derechos de Autor
          </p>
        </header>

        {/* Photography & Real Craftsman Imagery */}
        <section className="bg-white border border-[#DFD6C6] rounded-2xl p-6 sm:p-10 mb-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-[#B85D3B]">
            <Camera size={24} weight="duotone" />
            <h2 className="font-serif text-2xl text-[#1A1410]">1. Fotografía y Material Audiovisual de Proyectos</h2>
          </div>
          <p className="text-sm sm:text-base text-[#52473E] leading-relaxed">
            Todas las fotografías de cocinas, alacenas, gabinetes terminados, procesos de estuco exterior, aplicaciones de laca 2K en cabina y muestras de madera noble exhibidas en este sitio web corresponden a <strong>obras genuinas realizadas por el artesano Raul Burgos y el equipo de Renovo Painting Solutions LLC en Arizona</strong>.
          </p>
          <div className="bg-[#FAF7F0] border-l-4 border-[#B85D3B] p-4 text-xs sm:text-sm text-[#52473E]">
            <p className="font-semibold text-[#1A1410]">Aviso de Derechos de Autor © 2024–2026 Renovo Painting Solutions LLC.</p>
            <p className="mt-1">
              Queda estrictamente prohibida la reproducción, duplicación, descarga con fines comerciales o utilización de nuestras imágenes para atribuirse trabajos no ejecutados por terceros sin consentimiento previo por escrito de Raul Burgos.
            </p>
          </div>
        </section>

        {/* Fonts & Typography */}
        <section className="bg-white border border-[#DFD6C6] rounded-2xl p-6 sm:p-10 mb-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-[#B85D3B]">
            <Sparkle size={24} weight="duotone" />
            <h2 className="font-serif text-2xl text-[#1A1410]">2. Tipografías / Fonts (SIL Open Font License)</h2>
          </div>
          <p className="text-sm sm:text-base text-[#52473E] leading-relaxed">
            Las fuentes tipográficas utilizadas en esta plataforma digital están licenciadas de manera legítima y auto-alojadas localmente para preservar la privacidad del usuario sin llamadas externas a servidores de terceros:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-[#52473E]">
            <li>
              <strong>Cinzel & Newsreader:</strong> Diseñadas para titulares y estética artesanal. Licenciadas bajo la <em>SIL Open Font License, Version 1.1 (OFL)</em>.
            </li>
            <li>
              <strong>Inter & Plus Jakarta Sans:</strong> Optimizadas para legibilidad, formularios y cotizaciones. Licenciadas bajo la <em>SIL Open Font License, Version 1.1</em>.
            </li>
          </ul>
        </section>

        {/* Open Source Software & Icons */}
        <section className="bg-white border border-[#DFD6C6] rounded-2xl p-6 sm:p-10 mb-12 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-[#B85D3B]">
            <Code size={24} weight="duotone" />
            <h2 className="font-serif text-2xl text-[#1A1410]">3. Librerías de Código Abierto (MIT License)</h2>
          </div>
          <p className="text-sm sm:text-base text-[#52473E] leading-relaxed">
            Reconocemos y agradecemos el trabajo de las comunidades de software de código abierto que impulsan la tecnología de este sitio:
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-[#52473E]">
            <div className="p-3 bg-[#F4EFE6] rounded-lg">
              <p className="font-semibold text-[#1A1410]">Phosphor Icons (MIT License)</p>
              <p>Copyright © 2026 Phosphor Icons. Permite uso libre, modificación y distribución comercial y privada.</p>
            </div>
            <div className="p-3 bg-[#F4EFE6] rounded-lg">
              <p className="font-semibold text-[#1A1410]">Next.js & React (MIT License)</p>
              <p>Copyright © 2026 Vercel, Inc. & Meta Platforms, Inc.</p>
            </div>
            <div className="p-3 bg-[#F4EFE6] rounded-lg">
              <p className="font-semibold text-[#1A1410]">PDF-Lib (MIT License)</p>
              <p>Motor de generación de presupuestos oficiales en PDF directamente en el cliente. Copyright © Andrew Dillon.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
