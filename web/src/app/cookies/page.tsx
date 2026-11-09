import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, ArrowLeft, CheckCircle, Info } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Política de Cookies | Cookie Policy — Renovo Painting Solutions",
  description:
    "Conoce cómo Renovo Painting Solutions utiliza cookies esenciales y de preferencias de navegación. Cero rastreadores de publicidad de terceros.",
};

export default function CookiesPage() {
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
            <Cookie size={14} weight="bold" />
            <span>Transparencia Digital / Digital Transparency</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1410] font-normal tracking-tight">
            Política de Cookies / Cookie Policy
          </h1>
          <p className="mt-2 text-sm text-[#7A6E63]">
            Última actualización: Noviembre 2026 • Renovo Painting Solutions LLC • Phoenix, AZ
          </p>
        </header>

        {/* Spanish Version */}
        <section className="space-y-8 bg-white border border-[#DFD6C6] rounded-2xl p-6 sm:p-10 mb-12 shadow-sm">
          <div className="border-b border-[#EAE3D2] pb-4">
            <h2 className="font-serif text-2xl text-[#1A1410]">1. ¿Qué son las Cookies?</h2>
            <p className="mt-2 text-sm sm:text-base text-[#52473E] leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan de manera local y segura en tu navegador cuando visitas sitios web. Nos permiten recordar preferencias indispensables para que el sitio funcione sin fallas (como tu idioma de preferencia o tus medidas en el cotizador interactivo).
            </p>
          </div>

          <div className="border-b border-[#EAE3D2] pb-6">
            <h2 className="font-serif text-2xl text-[#1A1410]">2. Filosofía de Renovo: Cero Rastreadores Invasivos</h2>
            <div className="mt-3 bg-[#F4EFE6] border border-[#DFD6C6] rounded-xl p-4 text-sm text-[#1A1410] space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#B85D3B] shrink-0 mt-0.5" weight="fill" />
                <p><strong>Cero píxeles de retargeting:</strong> No instalamos Meta Pixel, TikTok Pixel ni Google Ads Remarketing en tu navegador.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#B85D3B] shrink-0 mt-0.5" weight="fill" />
                <p><strong>Cero venta de perfiles:</strong> No monetizamos datos de navegación ni compartimos telemetría con intermediarios publicitarios.</p>
              </div>
            </div>
          </div>

          <div className="border-b border-[#EAE3D2] pb-6">
            <h2 className="font-serif text-2xl text-[#1A1410] mb-4">3. Tipos de Cookies que Utilizamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#EFE8DC] text-[#1A1410]">
                    <th className="p-3 border border-[#DFD6C6] font-semibold">Cookie / Almacenamiento</th>
                    <th className="p-3 border border-[#DFD6C6] font-semibold">Propósito</th>
                    <th className="p-3 border border-[#DFD6C6] font-semibold">Tipo</th>
                    <th className="p-3 border border-[#DFD6C6] font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody className="text-[#52473E]">
                  <tr>
                    <td className="p-3 border border-[#DFD6C6] font-mono text-xs">renovo_locale</td>
                    <td className="p-3 border border-[#DFD6C6]">Recuerda tu selección de idioma (Español o Inglés).</td>
                    <td className="p-3 border border-[#DFD6C6]">Preferencia</td>
                    <td className="p-3 border border-[#DFD6C6]">1 año</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#DFD6C6] font-mono text-xs">renovo_cookie_consent</td>
                    <td className="p-3 border border-[#DFD6C6]">Almacena si aceptaste o personalizaste la configuración de cookies.</td>
                    <td className="p-3 border border-[#DFD6C6]">Técnica Esencial</td>
                    <td className="p-3 border border-[#DFD6C6]">1 año</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#DFD6C6] font-mono text-xs">renovo_quote_draft</td>
                    <td className="p-3 border border-[#DFD6C6]">Conserva temporalmente el cálculo de tu cotización en el navegador para que no pierdas tus medidas al navegar entre páginas.</td>
                    <td className="p-3 border border-[#DFD6C6]">Funcional</td>
                    <td className="p-3 border border-[#DFD6C6]">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#1A1410]">4. Cómo Administrar o Desactivar tus Cookies</h2>
            <p className="mt-2 text-sm sm:text-base text-[#52473E] leading-relaxed">
              Puedes modificar o eliminar las cookies en cualquier momento desde la configuración de tu navegador (Chrome, Safari, Firefox o Edge). También puedes restablecer tu consentimiento haciendo clic en el enlace <strong>"Configuración de Cookies"</strong> ubicado en el pie de página de nuestro sitio web.
            </p>
          </div>
        </section>

        {/* English Version */}
        <section className="space-y-8 bg-white border border-[#DFD6C6] rounded-2xl p-6 sm:p-10 mb-12 shadow-sm">
          <div className="border-b border-[#EAE3D2] pb-4">
            <h2 className="font-serif text-2xl text-[#1A1410]">Cookie Policy (English)</h2>
            <p className="mt-2 text-sm sm:text-base text-[#52473E] leading-relaxed">
              Renovo Painting Solutions LLC prioritizes user privacy. We only use strictly necessary and preference-based cookies to remember your language selection and preserve your project specifications inside our interactive quote generator. We do not use third-party behavioral advertising or retargeting tracking pixels.
            </p>
          </div>

          <div className="bg-[#FAF7F0] border border-[#E3D9C8] rounded-xl p-5 text-xs sm:text-sm text-[#52473E]">
            <p className="flex items-center gap-2 font-medium text-[#1A1410] mb-2">
              <Info size={16} className="text-[#B85D3B]" />
              Direct Craftsman Contact / Contacto Directo:
            </p>
            <p>
              If you have any questions regarding our cookie practices, please contact Raul Burgos directly at{" "}
              <a href="mailto:contact@renovoaz.com" className="text-[#B85D3B] underline font-medium">contact@renovoaz.com</a> or call{" "}
              <a href="tel:+16025504369" className="text-[#B85D3B] underline font-medium">(602) 550-4369</a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
