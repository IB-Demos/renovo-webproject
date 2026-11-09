"use client";

import React, { useState, useRef } from "react";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  CheckCircle,
  Phone,
  ArrowRight,
  UploadSimple,
  Camera,
  Trash,
  FilePdf,
  DownloadSimple,
  PaintBrush,
  Wrench,
  Sparkle,
  MapPin,
  Clock,
  WarningCircle,
  Eye,
} from "@phosphor-icons/react";

interface UploadedPhotoPreview {
  file: File;
  previewUrl: string;
}

export function QuoteRequestSystem() {
  const { locale } = useRenovo();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [service, setService] = useState<string>("refacing");
  const [dimensions, setDimensions] = useState<string>("");
  const [doorsEstimate, setDoorsEstimate] = useState<string>("");
  const [drawersEstimate, setDrawersEstimate] = useState<string>("");
  const [desiredColors, setDesiredColors] = useState<string>("");
  const [finishType, setFinishType] = useState<string>("satin-2k");
  const [timeline, setTimeline] = useState<string>("1-2-months");
  const [notes, setNotes] = useState<string>("");

  // Customer Contact State
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cityOrZip, setCityOrZip] = useState<string>("Phoenix / Scottsdale");

  // Photos State
  const [photos, setPhotos] = useState<UploadedPhotoPreview[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    quoteId: string;
    pdfBase64: string;
  } | null>(null);

  const services = [
    {
      id: "refacing",
      titleEn: "Cabinet Refacing / Door Replacement",
      titleEs: "Cabinet Refacing (Cambio de Puertas y Frentes)",
      descEn: "Keep existing structural boxes; install brand-new custom solid wood doors, drawer fronts, and soft-close Blum hardware.",
      descEs: "Conserva las cajas existentes e instala puertas nuevas a medida, frentes de cajón y bisagras Blum de cierre suave.",
      badgeEn: "Most Requested in AZ",
      badgeEs: "El más solicitado en AZ",
      icon: Wrench,
    },
    {
      id: "cabinets-new",
      titleEn: "Custom Kitchen Cabinetry from Scratch",
      titleEs: "Construcción de Cocina Nueva desde Cero",
      descEn: "Complete bespoke cabinetry handmade in White Oak, Hard Maple, or Walnut, measured with digital laser precision.",
      descEs: "Fabricación integral de gabinetes a medida en Roble Blanco, Maple o Nogal con ensambles en cola de milano.",
      badgeEn: "Heirloom Build",
      badgeEs: "Ebanistería Maciza",
      icon: Sparkle,
    },
    {
      id: "paint-cabinets",
      titleEn: "2K Factory Cabinet Refinishing",
      titleEs: "Pintura y Lacado 2K de Gabinetes",
      descEn: "Industrial spray booth coating on your existing doors with Italian catalyzed polyurethane that resists cooking grease and steam.",
      descEs: "Esmaltado en cabina industrial con lacas catalizadas 2K que no se descascarillan ante vapor o grasa caliente.",
      badgeEn: "Zero Brushmarks",
      badgeEs: "Cero Marcas de Brocha",
      icon: PaintBrush,
    },
    {
      id: "paint-house",
      titleEn: "Residential Painting (Interior / Exterior)",
      titleEs: "Pintura Residencial (Interior y Exterior)",
      descEn: "HEPA dustless sanding, fine enamel trims, and desert UV-reflective coatings engineered for intense Arizona sun.",
      descEs: "Lijado HEPA sin polvo, molduras finas y selladores reflectivos UV diseñados para el calor del desierto.",
      badgeEn: "Dustless HEPA Prep",
      badgeEs: "Preparación HEPA sin Polvo",
      icon: PaintBrush,
    },
    {
      id: "custom-builtins",
      titleEn: "Arched Built-Ins & Architectural Millwork",
      titleEs: "Muebles a Medida y Libreros Arqueados",
      descEn: "Arched fireplace bookcases, speakeasy hidden bars, fluted accent walls, and custom range hoods.",
      descEs: "Libreros arqueados de sala, cavas de autor, muros acanalados y campanas arquitectónicas a medida.",
      badgeEn: "Architectural Statement",
      badgeEs: "Piezas Arquitectónicas",
      icon: Wrench,
    },
  ];

  const finishOptions = [
    {
      id: "satin-2k",
      labelEn: "2K Catalyzed Polyurethane Satin (18% Sheen - Recommended)",
      labelEs: "Laca 2K Catalizada Satinada (18% brillo - Recomendada)",
      descEn: "Factory-grade velvety touch, easy to wipe down, zero fingerprint glare.",
      descEs: "Tacto aterciopelado de fábrica, fácil de limpiar, no refleja huellas.",
    },
    {
      id: "matte-velvet",
      labelEn: "2K Ultra-Matte Architectural Finish (5% Sheen)",
      labelEs: "Laca 2K Ultra-Mate Arquitectónica (5% brillo)",
      descEn: "Contemporary flat appearance with full molecular chemical protection.",
      descEs: "Aspecto plano contemporáneo con protección química total.",
    },
    {
      id: "wood-stain",
      labelEn: "Natural Hardwood Clear Coat / Danish Tone (White Oak, Walnut)",
      labelEs: "Tinte y Acabado Transparente para Madera Noble (Roble, Nogal)",
      descEn: "Enriches natural grain depth with non-yellowing UV barrier.",
      descEs: "Realza la veta natural con filtro UV que no se torna amarillo.",
    },
  ];

  const popularColors = [
    "Sherwin-Williams Alabaster (SW 7008)",
    "Sherwin-Williams Pure White (SW 7005)",
    "Sherwin-Williams Iron Ore (SW 7069)",
    "Benjamin Moore Chantilly Lace (OC-65)",
    "Benjamin Moore Hale Navy (HC-154)",
    "Natural Rift-Cut White Oak (Tono Madera)",
    "American Walnut Natural (Nogal)",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoError(null);
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    if (photos.length + selectedFiles.length > 5) {
      setPhotoError(
        locale === "en"
          ? "You can upload a maximum of 5 photos."
          : "Puedes subir un máximo de 5 fotografías."
      );
      return;
    }

    const newPhotos: UploadedPhotoPreview[] = [];
    for (const file of selectedFiles) {
      if (!file.type.startsWith("image/")) {
        setPhotoError(
          locale === "en"
            ? "Only image files (JPG, PNG, WEBP) are supported."
            : "Solo se admiten archivos de imagen (JPG, PNG, WEBP)."
        );
        continue;
      }
      if (file.size > 10 * 1024 * 1024) {
        setPhotoError(
          locale === "en"
            ? `File ${file.name} exceeds the 10MB limit.`
            : `El archivo ${file.name} supera el límite de 10MB.`
        );
        continue;
      }
      newPhotos.push({
        file,
        previewUrl: URL.createObjectURL(file),
      });
    }

    setPhotos((prev) => [...prev, ...newPhotos]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePhoto = (indexToRemove: number) => {
    setPhotos((prev) => {
      const target = prev[indexToRemove];
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((_, idx) => idx !== indexToRemove);
    });
  };

  const selectedServiceObj = services.find((s) => s.id === service) || services[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage(
        locale === "en"
          ? "Please provide your name, phone number, and email address."
          : "Por favor proporciona tu nombre, teléfono y correo electrónico."
      );
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("cityOrZip", cityOrZip);
      formData.append("service", service);
      formData.append(
        "serviceTitle",
        locale === "en" ? selectedServiceObj.titleEn : selectedServiceObj.titleEs
      );

      // Build scope / dimensions text
      let dimensionsSummary = dimensions.trim();
      if (doorsEstimate || drawersEstimate) {
        dimensionsSummary += ` (Aprox: ${doorsEstimate || "0"} puertas, ${drawersEstimate || "0"} cajones)`;
      }
      formData.append("dimensions", dimensionsSummary || "A evaluar en visita");
      formData.append("desiredColors", desiredColors || "A definir con muestras físicas");
      formData.append(
        "finishType",
        finishOptions.find((f) => f.id === finishType)?.labelEs || "Laca 2K Catalizada"
      );
      formData.append("timeline", timeline);
      formData.append("notes", notes);

      // Append photos
      photos.forEach((item) => {
        formData.append("photos", item.file);
      });

      const res = await fetch("/api/cotizacion", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error al enviar la solicitud.");
      }

      setSubmittedData({
        quoteId: data.quoteId,
        pdfBase64: data.pdfBase64,
      });

      // Scroll smoothly to success box
      window.scrollTo({ top: 150, behavior: "smooth" });
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(
        err?.message ||
          (locale === "en"
            ? "Could not submit quote request. Please call Raul directly at (602) 550-4369."
            : "No se pudo enviar la solicitud. Por favor llama directamente a Raul al (602) 550-4369.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPdf = () => {
    if (!submittedData?.pdfBase64) return;
    const linkSource = `data:application/pdf;base64,${submittedData.pdfBase64}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = `Renovo-Solicitud-${submittedData.quoteId}.pdf`;
    downloadLink.click();
  };

  // =========================================================================
  // SUCCESS SCREEN: CORPORATE CONFIRMATION & 1-CLICK PDF DOWNLOAD
  // =========================================================================
  if (submittedData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFAF7] border-2 border-[#C59B27] shadow-2xl text-center space-y-7">
          <div className="w-20 h-20 rounded-full bg-[#EBF3EA] border border-[#B8D8B4] text-[#2E6B4E] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle size={44} weight="fill" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#B85D3B] uppercase">
              {locale === "en" ? "PROPOSAL REQUEST SUBMITTED" : "SOLICITUD REGISTRADA CON ÉXITO"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#1A1410]">
              {locale === "en"
                ? "Your Official Project Proposal is Ready."
                : "Tu Solicitud de Proyecto ha Sido Generada."}
            </h2>
            <p className="text-sm sm:text-base text-[#54463A] max-w-2xl mx-auto leading-relaxed">
              {locale === "en"
                ? "We have generated an executive Renovo PDF proposal and sent a copy directly to Raul Burgos at raul@renovoaz.com. You can download your official client copy right now."
                : "Hemos generado el documento PDF corporativo con tus especificaciones y fotos, y lo enviamos a raul@renovoaz.com. Puedes descargar tu copia oficial ahora mismo."}
            </p>
          </div>

          {/* Folio Box */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6]">
            <span className="text-xs font-serif text-[#615245]">
              {locale === "en" ? "Assigned Tracking Folio:" : "Folio Oficial Asignado:"}
            </span>
            <span className="font-mono text-base font-bold text-[#1A1410] tracking-wider">
              {submittedData.quoteId}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="interactive-control min-h-[52px] px-8 py-3.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-white text-xs font-serif font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-xl w-full sm:w-auto transition-transform hover:scale-[1.02]"
            >
              <DownloadSimple size={18} weight="bold" />
              <span>{locale === "en" ? "Download Corporate PDF" : "Descargar PDF Corporativo"}</span>
            </button>

            <a
              href={COMPANY_INFO.phoneHref}
              className="interactive-control min-h-[52px] px-7 py-3.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs transition-colors"
            >
              <Phone size={17} className="text-[#B85D3B]" />
              <span>{locale === "en" ? "Call Raul Directly" : "Llamar a Raul"}: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#DFD6C6] text-xs text-[#7A6E63] flex flex-wrap items-center justify-center gap-4">
            <span>✓ {locale === "en" ? "PDF sent to raul@renovoaz.com" : "PDF entregado a raul@renovoaz.com"}</span>
            <span>·</span>
            <span>✓ {locale === "en" ? "Laser measurements scheduled on-site" : "Medición láser en sitio sin costo"}</span>
            <span>·</span>
            <span>✓ {locale === "en" ? "24-hour turnaround" : "Respuesta en menos de 24 horas"}</span>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmittedData(null);
                setPhotos([]);
                setDimensions("");
                setNotes("");
              }}
              className="text-xs font-serif text-[#B85D3B] hover:underline"
            >
              {locale === "en" ? "← Submit another project inquiry" : "← Enviar otra solicitud de cotización"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // MAIN FORM: INTUITIVE, HIGH-END PROJECT PROPOSAL REQUEST
  // =========================================================================
  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-4xl mx-auto space-y-10">
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-[#FDE8E8] border border-[#F8B4B4] text-[#9B1C1C] text-sm flex items-center gap-3">
          <WarningCircle size={20} className="shrink-0" weight="fill" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* =====================================================================
          STEP 1: SELECT PROJECT SERVICE
      ===================================================================== */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#B85D3B]">
              {locale === "en" ? "STEP 1 OF 4" : "PASO 1 DE 4"}
            </span>
            <h2 className="text-2xl font-serif font-semibold text-[#1A1410]">
              {locale === "en" ? "¿What do you want to accomplish?" : "¿Qué deseas realizar en tu proyecto?"}
            </h2>
          </div>
          <span className="text-xs font-serif text-[#7A6E63] hidden sm:inline-block">
            {locale === "en" ? "Choose primary discipline" : "Selecciona la especialidad"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {services.map((item) => {
            const isSelected = service === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setService(item.id)}
                className={`interactive-control text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-[#B85D3B] bg-[#F4EFE6] shadow-md ring-1 ring-[#B85D3B]"
                    : "border-[#DFD6C6] bg-[#FCFAF7] hover:border-[#B85D3B]/40 hover:bg-[#F9F6F0]"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-[#B85D3B] text-white"
                          : "bg-[#EAE2D5] text-[#54463A]"
                      }`}
                    >
                      {locale === "en" ? item.badgeEn : item.badgeEs}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? "border-[#B85D3B] bg-[#B85D3B] text-white"
                          : "border-[#DFD6C6] bg-transparent"
                      }`}
                    >
                      {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#1A1410] pt-1">
                    {locale === "en" ? item.titleEn : item.titleEs}
                  </h3>
                  <p className="text-xs text-[#54463A] leading-relaxed">
                    {locale === "en" ? item.descEn : item.descEs}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          STEP 2: DIMENSIONS, SCOPE & COUNTS
      ===================================================================== */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#B85D3B]">
              {locale === "en" ? "STEP 2 OF 4" : "PASO 2 DE 4"}
            </span>
            <h2 className="text-2xl font-serif font-semibold text-[#1A1410]">
              {locale === "en" ? "Space Dimensions & Estimated Scope" : "Medidas y Alcance del Espacio"}
            </h2>
          </div>
          <span className="text-xs font-serif text-[#7A6E63] hidden sm:inline-block">
            {locale === "en" ? "Approximate measurements" : "Medidas aproximadas"}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#3D3228] mb-1.5 font-semibold">
              {locale === "en"
                ? "Describe your space or layout (Dimensions, L-shape, Island, Sq Ft)"
                : "Describe el espacio o distribución (ej. Cocina en L, isla de 8ft, dimensiones)"}
            </label>
            <textarea
              rows={3}
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              placeholder={
                locale === "en"
                  ? "e.g. Kitchen is approx 12x14 feet with an island. Looking to change all doors and paint face frames."
                  : "ej. Cocina de aprox. 12x14 pies con isla central. Queremos cambiar las puertas y pintar los marcos fijos en sitio."
              }
              className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] placeholder-[#948678] focus:outline-none focus:border-[#B85D3B]"
            />
          </div>

          {/* Quick counts if known */}
          {(service === "refacing" || service === "cabinets-new" || service === "paint-cabinets") && (
            <div className="pt-2">
              <span className="text-xs font-serif text-[#54463A] block mb-2 font-medium">
                {locale === "en"
                  ? "Do you know the approximate door/drawer counts? (Optional)"
                  : "¿Conoces la cantidad aproximada de puertas y cajones? (Opcional)"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#7A6E63] uppercase tracking-wider mb-1">
                    {locale === "en" ? "Approx. Cabinet Doors" : "Puertas Aprox."}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={doorsEstimate}
                    onChange={(e) => setDoorsEstimate(e.target.value)}
                    placeholder="ej. 24 puertas"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#7A6E63] uppercase tracking-wider mb-1">
                    {locale === "en" ? "Approx. Drawer Fronts" : "Frentes de Cajón Aprox."}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={drawersEstimate}
                    onChange={(e) => setDrawersEstimate(e.target.value)}
                    placeholder="ej. 8 cajones"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================================
          STEP 3: COLORS, FINISH CHEMISTRY & NOTES
      ===================================================================== */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#B85D3B]">
              {locale === "en" ? "STEP 3 OF 4" : "PASO 3 DE 4"}
            </span>
            <h2 className="text-2xl font-serif font-semibold text-[#1A1410]">
              {locale === "en" ? "Desired Colors & Factory Finish Grade" : "Colores y Acabados Deseados"}
            </h2>
          </div>
          <span className="text-xs font-serif text-[#7A6E63] hidden sm:inline-block">
            {locale === "en" ? "2K Lacquer chemistry" : "Química de taller 2K"}
          </span>
        </div>

        <div className="space-y-6">
          {/* Finish Grade Selector */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#3D3228] mb-2 font-semibold">
              {locale === "en" ? "Finish Grade / Coating Chemistry" : "Tipo de Acabado / Brillo"}
            </label>
            <div className="space-y-2.5">
              {finishOptions.map((f) => (
                <label
                  key={f.id}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                    finishType === f.id
                      ? "border-[#B85D3B] bg-[#F4EFE6]"
                      : "border-[#DFD6C6] bg-[#FCFAF7] hover:bg-[#F9F6F0]"
                  }`}
                >
                  <input
                    type="radio"
                    name="finishType"
                    checked={finishType === f.id}
                    onChange={() => setFinishType(f.id)}
                    className="mt-1 text-[#B85D3B] focus:ring-[#B85D3B]"
                  />
                  <div>
                    <span className="text-xs font-serif font-bold text-[#1A1410] block">
                      {locale === "en" ? f.labelEn : f.labelEs}
                    </span>
                    <span className="text-[11px] text-[#54463A] block">
                      {locale === "en" ? f.descEn : f.descEs}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Color Preference Field */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#3D3228] mb-1.5 font-semibold">
              {locale === "en"
                ? "Desired Color, Paint Code or Wood Tone"
                : "Color, Código de Pintura o Tono de Madera Deseado"}
            </label>
            <input
              type="text"
              value={desiredColors}
              onChange={(e) => setDesiredColors(e.target.value)}
              placeholder={
                locale === "en"
                  ? "e.g. SW Alabaster on perimeters, Natural White Oak on the island"
                  : "ej. Alabaster de Sherwin-Williams en muros, Roble Claro en la isla"
              }
              className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] placeholder-[#948678] focus:outline-none focus:border-[#B85D3B]"
            />
            {/* Quick Suggestions Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-[#7A6E63] uppercase mr-1">
                {locale === "en" ? "Popular in Phoenix:" : "Populares en Phoenix:"}
              </span>
              {popularColors.map((colorName, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setDesiredColors(colorName)}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-[#EAE2D5] hover:bg-[#DFD6C6] text-[#261F1A] font-serif transition-colors"
                >
                  {colorName.split("(")[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#3D3228] mb-1.5 font-semibold">
              {locale === "en"
                ? "Additional Notes or Special Requests (Hardware, Crown, Lighting)"
                : "Notas Adicionales o Detalles Especiales (Herrajes, Molduras, Tiempos)"}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                locale === "en"
                  ? "Tell Raul about any specific deadlines, pet considerations, or hardware preferences."
                  : "Indica cualquier detalle relevante: cambio de jaladeras, fechas específicas o dudas sobre los materiales."
              }
              className="w-full px-4 py-2.5 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-sm text-[#261F1A] placeholder-[#948678] focus:outline-none focus:border-[#B85D3B]"
            />
          </div>
        </div>
      </div>

      {/* =====================================================================
          STEP 4: SITE PHOTOS UPLOAD (DRAG & DROP + THUMBNAILS)
      ===================================================================== */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-[#DFD6C6] pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#B85D3B]">
              {locale === "en" ? "STEP 4 OF 4" : "PASO 4 DE 4"}
            </span>
            <h2 className="text-2xl font-serif font-semibold text-[#1A1410]">
              {locale === "en" ? "Upload Photos of Your Space" : "Sube Fotos de tu Espacio Actual"}
            </h2>
          </div>
          <span className="text-xs font-serif text-[#7A6E63] hidden sm:inline-block">
            {locale === "en" ? "Up to 5 images included in PDF" : "Hasta 5 fotos incluidas en tu PDF"}
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-[#54463A]">
            {locale === "en"
              ? "Photos allow master craftsman Raul Burgos to immediately evaluate your door profiles, corner angles, and box conditions to prepare a firm proposal."
              : "Las fotos permiten a Raul Burgos evaluar perfiles de puertas, condiciones de los marcos y ángulos para entregarte una propuesta rápida y firme."}
          </p>

          {/* Upload Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="p-8 rounded-2xl border-2 border-dashed border-[#DFD6C6] hover:border-[#B85D3B] bg-[#F4EFE6] hover:bg-[#F9F6F0] text-center cursor-pointer transition-colors space-y-3"
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="w-12 h-12 rounded-full bg-[#EAE2D5] text-[#B85D3B] flex items-center justify-center mx-auto">
              <Camera size={24} />
            </div>
            <div>
              <span className="text-xs font-serif font-semibold text-[#1A1410] block">
                {locale === "en" ? "Tap to Take a Photo or Choose from Gallery" : "Toca para Tomar Foto o Subir desde tu Galería"}
              </span>
              <span className="text-[11px] text-[#7A6E63] block mt-0.5">
                PNG, JPG, WEBP (Máx. 5 fotos, 10MB por archivo)
              </span>
            </div>
          </div>

          {photoError && (
            <p className="text-xs text-[#B85D3B] font-medium">{photoError}</p>
          )}

          {/* Photo Previews */}
          {photos.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              {photos.map((item, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden border border-[#DFD6C6] bg-black/5 group shadow-xs"
                >
                  <img
                    src={item.previewUrl}
                    alt={`Preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(idx)}
                    aria-label="Remove photo"
                    className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/70 hover:bg-[#B85D3B] text-white transition-colors"
                  >
                    <Trash size={13} weight="bold" />
                  </button>
                  <span className="absolute bottom-1 left-1.5 text-[9px] font-mono text-white/90 bg-black/60 px-1 rounded">
                    Foto {idx + 1}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* =====================================================================
          CUSTOMER CONTACT & SUBMISSION
      ===================================================================== */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1410] text-[#FCFAF7] border border-[#3A2E26] shadow-xl space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#C59B27]">
            {locale === "en" ? "FINAL STEP: CLIENT CONTACT" : "PASO FINAL: TUS DATOS DE CONTACTO"}
          </span>
          <h2 className="text-2xl font-serif font-semibold text-[#FCFAF7]">
            {locale === "en" ? "Where should we send your Proposal PDF?" : "¿A dónde enviamos tu propuesta formal?"}
          </h2>
          <p className="text-xs text-[#EAE2D5] mt-1">
            {locale === "en"
              ? "Raul Burgos will personally review your scope and provide a direct estimate."
              : "Raul Burgos revisará personalmente tus especificaciones y fotos."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#C59B27] mb-1 font-semibold">
              {locale === "en" ? "Full Name *" : "Nombre Completo *"}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ej. Roberto Mendoza"
              className="w-full px-4 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-sm text-[#FCFAF7] placeholder-[#8A7C70] focus:outline-none focus:border-[#C59B27]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#C59B27] mb-1 font-semibold">
              {locale === "en" ? "Phone Number (Cell) *" : "Teléfono Celular *"}
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(602) 550-..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-sm text-[#FCFAF7] placeholder-[#8A7C70] focus:outline-none focus:border-[#C59B27]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#C59B27] mb-1 font-semibold">
              {locale === "en" ? "Email Address *" : "Correo Electrónico *"}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="cliente@ejemplo.com"
              className="w-full px-4 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-sm text-[#FCFAF7] placeholder-[#8A7C70] focus:outline-none focus:border-[#C59B27]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#C59B27] mb-1 font-semibold">
              {locale === "en" ? "City or ZIP Code (AZ)" : "Ciudad o Código Postal (AZ)"}
            </label>
            <input
              type="text"
              value={cityOrZip}
              onChange={(e) => setCityOrZip(e.target.value)}
              placeholder="Scottsdale, Paradise Valley, 85029..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-sm text-[#FCFAF7] placeholder-[#8A7C70] focus:outline-none focus:border-[#C59B27]"
            />
          </div>
        </div>

        {/* Timeline selector */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#C59B27] mb-2 font-semibold">
            {locale === "en" ? "When would you like to begin?" : "¿Cuándo te gustaría comenzar los trabajos?"}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: "asap", label: locale === "en" ? "Immediately (< 2 wks)" : "Inmediato (< 2 sem)" },
              { id: "1-month", label: locale === "en" ? "In 1 Month" : "En 1 Mes" },
              { id: "1-3-months", label: locale === "en" ? "In 1 to 3 Months" : "En 1 a 3 Meses" },
              { id: "planning", label: locale === "en" ? "Just Planning" : "Solo Presupuestando" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTimeline(t.label)}
                className={`py-2 px-3 rounded-lg text-xs font-serif transition-colors ${
                  timeline === t.label
                    ? "bg-[#C59B27] text-[#1A1410] font-bold"
                    : "bg-[#261E18] text-[#EAE2D5] border border-[#4A3B30] hover:bg-[#322820]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-[#3A2E26]">
          <button
            type="submit"
            disabled={isSubmitting}
            className="interactive-control w-full min-h-[54px] px-8 py-4 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] disabled:opacity-60 text-white text-xs sm:text-sm font-serif font-semibold uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl transition-all"
          >
            {isSubmitting ? (
              <span>{locale === "en" ? "Generating PDF & Transmitting..." : "Generando PDF y Enviando a Raul..."}</span>
            ) : (
              <>
                <FilePdf size={20} weight="fill" />
                <span>
                  {locale === "en"
                    ? "Generate Corporate Proposal & Send to Raul"
                    : "Generar Propuesta Corporativa y Enviar a Raul"}
                </span>
                <ArrowRight size={16} weight="bold" />
              </>
            )}
          </button>
          <p className="text-[11px] text-[#A69B8F] text-center mt-2.5">
            {locale === "en"
              ? "Generates an official Renovo PDF specification with your photos and dispatches a copy directly to raul@renovoaz.com."
              : "Genera el PDF oficial de Renovo con tus fotos adjuntas y envía una copia directamente a raul@renovoaz.com."}
          </p>
        </div>
      </div>
    </form>
  );
}
