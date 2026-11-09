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
  Info,
  Check,
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
  const [houseScope, setHouseScope] = useState<string>("full-home");
  const [homeSize, setHomeSize] = useState<string>("1500-2500");
  const [desiredColors, setDesiredColors] = useState<string>("");
  const [finishType, setFinishType] = useState<string>("satin-2k");
  const [timelineId, setTimelineId] = useState<string>("1-3-months");
  const [notes, setNotes] = useState<string>("");

  // Customer Contact State
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cityOrZip, setCityOrZip] = useState<string>("");

  // Photos State
  const [photos, setPhotos] = useState<UploadedPhotoPreview[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);

  // Explanatory Modal / Drawer state for Refacing vs Painting vs New
  const [showGuide, setShowGuide] = useState<boolean>(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    quoteId: string;
    pdfBase64: string;
  } | null>(null);

  // =========================================================================
  // SERVICE DEFINITIONS WITH VISUAL PHOTOGRAPHY AIDS
  // =========================================================================
  const services = [
    {
      id: "refacing",
      titleEn: "Cabinet Refacing (New Doors & Drawer Fronts)",
      titleEs: "Cabinet Refacing (Cambio de Puertas y Frentes)",
      descEn: "Keep existing cabinet boxes; install brand-new custom solid wood doors, drawer fronts, and soft-close Blum hinges. 40-50% less than full remodeling.",
      descEs: "Conserva las cajas existentes e instala puertas nuevas a medida, frentes de cajón y bisagras Blum de cierre suave. 40-50% más accesible que una obra completa.",
      badgeEn: "Most Requested in Phoenix",
      badgeEs: "El más solicitado en Phoenix",
      image: "/assets/before-after/pair-01-kitchen-after.jpg",
      tagEn: "New Doors + Preserved Boxes",
      tagEs: "Puertas Nuevas + Cajas Intactas",
    },
    {
      id: "cabinets-new",
      titleEn: "Custom Kitchen Cabinetry from Scratch",
      titleEs: "Construcción de Cocina Nueva desde Cero",
      descEn: "Bespoke cabinetry handmade in White Oak, Hard Maple, or Walnut, with dovetail drawer boxes and digital laser measure verification.",
      descEs: "Fabricación integral de gabinetes a medida en Roble Blanco, Maple o Nogal con cajones en cola de milano y verificación láser en sitio.",
      badgeEn: "Full Custom Build",
      badgeEs: "Ebanistería a Medida",
      image: "/assets/kitchens/kitchen-14.jpg",
      tagEn: "100% Solid Hardwood",
      tagEs: "100% Madera Maciza",
    },
    {
      id: "paint-cabinets",
      titleEn: "2K Factory Cabinet Refinishing (Spray)",
      titleEs: "Pintura y Lacado 2K de Gabinetes",
      descEn: "Keep all your current doors and boxes. Factory spray booth coating with Italian catalyzed polyurethane. Ultra-durable, zero brushmarks.",
      descEs: "Conserva tus puertas y marcos actuales. Esmaltado en cabina industrial con poliuretano italiano catalizado 2K. Ultra liso, cero marcas.",
      badgeEn: "Factory Spray Booth",
      badgeEs: "Cabina de Pintura 2K",
      image: "/assets/kitchens/kitchen-02.jpg",
      tagEn: "Chemical Cross-Link Cure",
      tagEs: "Curado Químico Catalizado",
    },
    {
      id: "paint-house",
      titleEn: "Residential Painting (Interior & Exterior)",
      titleEs: "Pintura Residencial (Interior y Exterior)",
      descEn: "HEPA dustless prep, architectural trim enamels, and UV-reflective coatings engineered for the punishing Sonoran desert sun.",
      descEs: "Lijado HEPA sin polvo, molduras finas y selladores con blindaje UV formulados para el sol implacable del desierto de Arizona.",
      badgeEn: "Dustless HEPA Prep",
      badgeEs: "Preparación HEPA sin Polvo",
      image: "/assets/painting-exterior/exterior-01.jpg",
      tagEn: "Monsoon & UV Shield",
      tagEs: "Protección Solar y Térmica",
    },
    {
      id: "custom-builtins",
      titleEn: "Arched Built-Ins & Architectural Millwork",
      titleEs: "Muebles a Medida y Libreros Arqueados",
      descEn: "Arched fireplace bookcases, concealed speakeasy bars, fluted entertainment walls, and bespoke range hoods crafted in Phoenix.",
      descEs: "Libreros gemelos arqueados, cavas ocultas, muros acanalados y campanas de cocina artesanales fabricadas en nuestro taller de Phoenix.",
      badgeEn: "Master Architectural Craft",
      badgeEs: "Piezas Únicas de Taller",
      image: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
      tagEn: "Hand-Bent Radial Curves",
      tagEs: "Curvas Radiales a Mano",
    },
  ];

  // =========================================================================
  // FINISH OPTIONS WITH VISUAL DESCRIPTIONS
  // =========================================================================
  const finishOptions = [
    {
      id: "satin-2k",
      labelEn: "2K Catalyzed Polyurethane Satin (18% Sheen - Recommended)",
      labelEs: "Laca 2K Catalizada Satinada (18% de brillo - Recomendada)",
      descEn: "Silky velvet touch with soft ambient light reflection. Highly resistant to cooking grease and steam.",
      descEs: "Tacto aterciopelado terso con suave reflejo de luz. Altamente resistente a grasa y vapor caliente.",
      badgeEn: "Most Requested in Phoenix",
      badgeEs: "La más solicitada en Phoenix",
      sheenBadge: "18% Satin",
      image: "/assets/kitchens/kitchen-02.jpg",
    },
    {
      id: "matte-velvet",
      labelEn: "2K Ultra-Matte Architectural Finish (5% Sheen)",
      labelEs: "Laca 2K Ultra-Mate Arquitectónica (5% de brillo)",
      descEn: "Sophisticated flat European appearance with zero glare and complete molecular surface protection.",
      descEs: "Aspecto plano contemporáneo europeo sin reflejos y con sellado molecular impermeable.",
      badgeEn: "Modern European Aesthetic",
      badgeEs: "Estilo Moderno Europeo",
      sheenBadge: "5% Ultra-Matte",
      image: "/assets/kitchens/kitchen-14.jpg",
    },
    {
      id: "wood-stain",
      labelEn: "Natural Hardwood Clear Coat / Wood Stain (White Oak, Walnut)",
      labelEs: "Tinte y Sellador Transparente para Madera Noble (Roble, Nogal)",
      descEn: "Reveals deep natural grain character in solid hardwoods with a non-yellowing industrial UV barrier.",
      descEs: "Realza la veta viva de maderas macizas con filtro UV industrial que previene el amarilleamiento.",
      badgeEn: "Organic Hardwood Character",
      badgeEs: "Carácter de Madera Maciza",
      sheenBadge: "Natural Grain",
      image: "/assets/blueprints-and-docs/custom-furniture-02.jpg",
    },
  ];

  // Popular Color Swatches with Exact Hex Codes
  const colorSwatches = [
    {
      nameEn: "Sherwin-Williams Alabaster (SW 7008)",
      nameEs: "Sherwin-Williams Alabaster (SW 7008)",
      hex: "#EDEAE0",
      labelEn: "Warm White",
      labelEs: "Blanco Cálido",
    },
    {
      nameEn: "Sherwin-Williams Pure White (SW 7005)",
      nameEs: "Sherwin-Williams Pure White (SW 7005)",
      hex: "#F4F2EB",
      labelEn: "Neutral Crisp White",
      labelEs: "Blanco Puro",
    },
    {
      nameEn: "Sherwin-Williams Iron Ore (SW 7069)",
      nameEs: "Sherwin-Williams Iron Ore (SW 7069)",
      hex: "#434342",
      labelEn: "Deep Charcoal",
      labelEs: "Gris Carbón Profundo",
    },
    {
      nameEn: "Benjamin Moore Hale Navy (HC-154)",
      nameEs: "Benjamin Moore Hale Navy (HC-154)",
      hex: "#2C3947",
      labelEn: "Classic Island Navy",
      labelEs: "Azul Marino Clásico",
    },
    {
      nameEn: "Benjamin Moore Chantilly Lace (OC-65)",
      nameEs: "Benjamin Moore Chantilly Lace (OC-65)",
      hex: "#F5F6F2",
      labelEn: "Bright Modern White",
      labelEs: "Blanco Brillante",
    },
    {
      nameEn: "Natural Rift-Cut White Oak",
      nameEs: "Roble Blanco Veta Recta Natural",
      hex: "#C4A47C",
      labelEn: "Natural Wood Tone",
      labelEs: "Tono Madera Natural",
    },
    {
      nameEn: "American Walnut Natural Tone",
      nameEs: "Nogal Americano Tono Natural",
      hex: "#5B4333",
      labelEn: "Dark Rich Wood",
      labelEs: "Madera Nogal Intensa",
    },
  ];

  // Timeline choices strictly localized
  const timelineOptions = [
    {
      id: "asap",
      labelEn: "Immediately (< 2 weeks)",
      labelEs: "Inmediato (menos de 2 semanas)",
    },
    {
      id: "1-month",
      labelEn: "In 1 Month",
      labelEs: "En 1 Mes",
    },
    {
      id: "1-3-months",
      labelEn: "In 1 to 3 Months",
      labelEs: "En 1 a 3 Meses",
    },
    {
      id: "planning",
      labelEn: "Just Planning / Future Project",
      labelEs: "Solo Presupuestando / Proyecto Futuro",
    },
  ];

  // Photo handlers
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
          ? "Please provide your full name, phone number, and email address."
          : "Por favor proporciona tu nombre completo, teléfono y correo electrónico."
      );
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("locale", locale);
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("phone", phone.trim());
      formData.append(
        "cityOrZip",
        cityOrZip.trim() || (locale === "en" ? "Phoenix Metro" : "Valle de Phoenix")
      );
      formData.append("service", service);
      formData.append(
        "serviceTitle",
        locale === "en" ? selectedServiceObj.titleEn : selectedServiceObj.titleEs
      );

      // Localized scope summary
      let dimensionsSummary = dimensions.trim();
      if (service === "paint-house") {
        const scopeLabels: Record<string, { en: string; es: string }> = {
          "exterior-only": { en: "Exterior (Stucco & Trim)", es: "Exterior (Estuco y Fascia)" },
          "interior-only": { en: "Interior (Walls & Ceilings)", es: "Interior (Muros y Techos)" },
          "full-home": { en: "Full Home (In/Out)", es: "Casa Completa (Interior y Exterior)" },
          "specific-rooms": { en: "Specific Rooms", es: "Áreas Específicas" },
        };
        const scopeTxt = scopeLabels[houseScope] ? (locale === "en" ? scopeLabels[houseScope].en : scopeLabels[houseScope].es) : houseScope;
        dimensionsSummary += ` [${locale === "en" ? "Scope" : "Alcance"}: ${scopeTxt}, ${locale === "en" ? "Size" : "Tamaño"}: ${homeSize} sq ft]`;
      } else if (doorsEstimate || drawersEstimate) {
        if (locale === "en") {
          dimensionsSummary += ` (Approx: ${doorsEstimate || "0"} doors, ${drawersEstimate || "0"} drawers)`;
        } else {
          dimensionsSummary += ` (Aprox: ${doorsEstimate || "0"} puertas, ${drawersEstimate || "0"} cajones)`;
        }
      }
      formData.append(
        "dimensions",
        dimensionsSummary ||
          (locale === "en"
            ? "To be verified on-site during inspection"
            : "A evaluar en sitio durante la visita técnica")
      );
      formData.append(
        "desiredColors",
        desiredColors ||
          (locale === "en"
            ? "To be selected from physical workshop samples"
            : "A definir con muestras físicas de taller")
      );

      const selectedFinish = finishOptions.find((f) => f.id === finishType);
      formData.append(
        "finishType",
        locale === "en"
          ? selectedFinish?.labelEn || "2K Catalyzed Industrial Lacquer"
          : selectedFinish?.labelEs || "Laca 2K Catalizada Industrial"
      );
      const selectedTimeline = timelineOptions.find((t) => t.id === timelineId) || timelineOptions[2];
      formData.append(
        "timeline",
        locale === "en" ? selectedTimeline.labelEn : selectedTimeline.labelEs
      );
      formData.append("notes", notes.trim());

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
        throw new Error(data.error || "Failed to submit quote request.");
      }

      setSubmittedData({
        quoteId: data.quoteId,
        pdfBase64: data.pdfBase64,
      });

      window.scrollTo({ top: 120, behavior: "smooth" });
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
    downloadLink.download =
      locale === "en"
        ? `Renovo-Proposal-${submittedData.quoteId}.pdf`
        : `Renovo-Propuesta-${submittedData.quoteId}.pdf`;
    downloadLink.click();
  };

  // =========================================================================
  // SUCCESS SCREEN
  // =========================================================================
  if (submittedData) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="p-6 sm:p-12 rounded-3xl bg-[#FCFAF7] border-2 border-[#C59B27] shadow-2xl text-center space-y-6 sm:space-y-8">
          <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#EBF3EA] border-2 border-[#2E6B4E]/30 text-[#2E6B4E] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle size={44} weight="fill" />
          </div>

          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#9E3E20] uppercase bg-[#B85D3B]/10 px-3.5 py-1.5 rounded-full border border-[#B85D3B]/20 inline-block">
              {locale === "en" ? "PROPOSAL REQUEST SUBMITTED" : "SOLICITUD REGISTRADA CON ÉXITO"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1410] tracking-tight">
              {locale === "en"
                ? "Your Official Project Proposal is Ready."
                : "Tu Propuesta de Proyecto ha Sido Generada."}
            </h2>
            <p className="text-base sm:text-lg text-[#261F1A] max-w-2xl mx-auto leading-relaxed font-normal">
              {locale === "en"
                ? "We compiled your specifications, measurements, and photos into an official Renovo proposal document and dispatched a copy directly to raul@renovoaz.com. You can download your copy below."
                : "Integramos tus especificaciones, medidas y fotos en un documento oficial de propuesta Renovo y enviamos una copia a raul@renovoaz.com. Puedes descargar tu copia oficial aquí mismo."}
            </p>
          </div>

          {/* Folio Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3.5 px-6 py-3.5 rounded-2xl bg-[#F4EFE6] border-2 border-[#DFD6C6] shadow-xs">
            <span className="text-sm font-serif font-bold text-[#2B231D]">
              {locale === "en" ? "Official Tracking Folio:" : "Folio Oficial Asignado:"}
            </span>
            <span className="font-mono text-lg sm:text-xl font-extrabold text-[#1A1410] tracking-wider">
              {submittedData.quoteId}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="interactive-control min-h-[54px] sm:min-h-[56px] px-8 py-4 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-white text-sm sm:text-base font-serif font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-xl w-full sm:w-auto transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <DownloadSimple size={20} weight="bold" />
              <span>{locale === "en" ? "Download Official Proposal" : "Descargar Propuesta Oficial"}</span>
            </button>

            <a
              href={COMPANY_INFO.phoneHref}
              className="interactive-control min-h-[54px] sm:min-h-[56px] px-7 py-4 rounded-full border-2 border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-sm sm:text-base font-serif font-bold inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-xs transition-colors"
            >
              <Phone size={19} weight="bold" className="text-[#B85D3B]" />
              <span>{locale === "en" ? "Call Raul Burgos Directly" : "Llamar a Raul Burgos"}: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="pt-5 border-t border-[#DFD6C6] text-sm sm:text-base text-[#2B231D] flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <strong className="text-[#B85D3B] text-base">✓</strong>
              <span>{locale === "en" ? "Delivered to raul@renovoaz.com" : "Entregado a raul@renovoaz.com"}</span>
            </span>
            <span className="text-[#B85D3B] font-bold">·</span>
            <span className="inline-flex items-center gap-1.5">
              <strong className="text-[#B85D3B] text-base">✓</strong>
              <span>{locale === "en" ? "Laser measurements on site" : "Medición láser en sitio sin costo"}</span>
            </span>
            <span className="text-[#B85D3B] font-bold">·</span>
            <span className="inline-flex items-center gap-1.5">
              <strong className="text-[#B85D3B] text-base">✓</strong>
              <span>{locale === "en" ? "Turnaround within 24 hours" : "Respuesta en menos de 24 horas"}</span>
            </span>
          </div>

          {/* Prominent, readable secondary action button for submitting another inquiry */}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setSubmittedData(null);
                setPhotos([]);
                setDimensions("");
                setNotes("");
              }}
              className="interactive-control inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#DFD6C6] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#8C3B1E] hover:text-[#1A1410] text-sm sm:text-base font-serif font-bold shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{locale === "en" ? "← Submit another proposal inquiry" : "← Enviar otra solicitud de cotización"}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // MAIN FORM
  // =========================================================================
  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-[#FDE8E8] border border-[#F8B4B4] text-[#9B1C1C] text-sm flex items-center gap-3">
          <WarningCircle size={20} className="shrink-0" weight="fill" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* =====================================================================
          STEP 1: SELECT SERVICE WITH VISUAL PHOTOGRAPHY CARDS
      ===================================================================== */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DFD6C6] pb-4 gap-2">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-[#9E3E20]">
              {locale === "en" ? "STEP 1 OF 4 · DISCIPLINE" : "PASO 1 DE 4 · ESPECIALIDAD"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1410] tracking-tight">
              {locale === "en" ? "What would you like to accomplish?" : "¿Qué deseas realizar en tu proyecto?"}
            </h2>
          </div>
          {/* Quick Guide Trigger */}
          <button
            type="button"
            onClick={() => setShowGuide(!showGuide)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-serif font-bold text-[#8C3B1E] hover:underline self-start sm:self-auto py-1"
          >
            <Info size={18} weight="bold" />
            <span>
              {locale === "en"
                ? "Refacing vs. Painting vs. New: What's the difference?"
                : "¿Diferencia entre Refacing, Pintura y Cocina Nueva?"}
            </span>
          </button>
        </div>

        {/* Expandable Visual Guide Box */}
        {showGuide && (
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F4EFE6] border-2 border-[#DFD6C6] space-y-3.5 text-sm leading-relaxed">
            <h4 className="font-serif font-bold text-[#1A1410] uppercase tracking-wider text-xs sm:text-sm text-[#9E3E20]">
              {locale === "en" ? "Quick Workshop Guide for Homeowners:" : "Guía Rápida de Taller para Propietarios:"}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-[#DFD6C6] space-y-1.5 shadow-2xs">
                <span className="font-serif font-bold text-[#1A1410] block text-sm sm:text-base">
                  {locale === "en" ? "1. Cabinet Refacing:" : "1. Cabinet Refacing:"}
                </span>
                <p className="text-sm text-[#261F1A] font-normal leading-relaxed">
                  {locale === "en"
                    ? "Keep your sturdy boxes. We manufacture 100% brand-new custom doors and drawer fronts in solid wood and spray face frames on site."
                    : "Conservas los marcos y cajas que están en buen estado. Fabricamos puertas y frentes de cajón 100% nuevos a medida en madera maciza."}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-[#DFD6C6] space-y-1.5 shadow-2xs">
                <span className="font-serif font-bold text-[#1A1410] block text-sm sm:text-base">
                  {locale === "en" ? "2. 2K Factory Spray:" : "2. Pintura / Lacado 2K:"}
                </span>
                <p className="text-sm text-[#261F1A] font-normal leading-relaxed">
                  {locale === "en"
                    ? "Keep all your current doors. We remove them to our spray booth for Italian catalyzed 2K polyurethane finishing with zero brush marks."
                    : "Conservas tus puertas actuales. Las llevamos a cabina para esmaltarlas con laca 2K catalizada que resiste calor y vapor de por vida."}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-[#DFD6C6] space-y-1.5 shadow-2xs">
                <span className="font-serif font-bold text-[#1A1410] block text-sm sm:text-base">
                  {locale === "en" ? "3. Custom Build from Scratch:" : "3. Cocina Nueva desde Cero:"}
                </span>
                <p className="text-sm text-[#261F1A] font-normal leading-relaxed">
                  {locale === "en"
                    ? "Complete architectural redesign. New custom boxes, pantry pull-outs, range hoods, and island focal points in solid hardwoods."
                    : "Rediseño total. Fabricamos cajas nuevas, islas de autor, alacenas y campanas en Roble Blanco, Maple y Nogal macizo."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile-first Cards Grid with Visual Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((item) => {
            const isSelected = service === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setService(item.id)}
                className={`interactive-control text-left rounded-2xl overflow-hidden border-2 transition-all flex flex-col justify-between group ${
                  isSelected
                    ? "border-[#B85D3B] bg-[#F4EFE6] shadow-md ring-1 ring-[#B85D3B]"
                    : "border-[#DFD6C6] bg-[#FCFAF7] hover:border-[#B85D3B]/50 hover:bg-[#F9F6F0]"
                }`}
              >
                {/* Visual Photography Aid */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/10">
                  <img
                    src={item.image}
                    alt={locale === "en" ? item.titleEn : item.titleEs}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#E5B537] border border-white/15">
                      {locale === "en" ? item.badgeEn : item.badgeEs}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-md transition-colors ${
                        isSelected
                          ? "border-[#B85D3B] bg-[#B85D3B] text-white"
                          : "border-white/60 bg-black/40 text-transparent"
                      }`}
                    >
                      {isSelected && <Check size={14} weight="bold" />}
                    </div>
                  </div>

                  {/* Bottom Tag over image */}
                  <div className="absolute bottom-2.5 left-3 text-xs sm:text-sm font-serif text-white font-bold drop-shadow-md">
                    {locale === "en" ? item.tagEn : item.tagEs}
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1410] leading-snug">
                    {locale === "en" ? item.titleEn : item.titleEs}
                  </h3>
                  <p className="text-sm text-[#261F1A] font-normal leading-relaxed">
                    {locale === "en" ? item.descEn : item.descEs}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          STEP 2: DIMENSIONS & ESTIMATED SCOPE
      ===================================================================== */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DFD6C6] pb-4 gap-1">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-[#9E3E20]">
              {locale === "en" ? "STEP 2 OF 4 · SPACE & SCOPE" : "PASO 2 DE 4 · ESPACIO Y MEDIDAS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1410] tracking-tight">
              {locale === "en" ? "Dimensions and Estimated Measurements" : "Medidas y Alcance del Espacio"}
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-serif font-medium text-[#4A3E34]">
            {locale === "en" ? "Rough estimates are welcome" : "Medidas aproximadas son suficientes"}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#1A1410] mb-2 font-bold">
              {service === "paint-house"
                ? (locale === "en" ? "Describe your home painting project (Interior/Exterior, stucco condition, high ceilings, colors)" : "Describe tu proyecto de pintura (Interior/Exterior, estado del estuco, techos altos, colores)")
                : (locale === "en"
                  ? "Describe your space layout (Dimensions, L-shape, U-shape, Island size, Linear feet)"
                  : "Describe la distribución del espacio (ej. Cocina en L, isla de 8 pies, dimensiones aproximadas)")}
            </label>
            <textarea
              rows={3}
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              placeholder={
                service === "paint-house"
                  ? (locale === "en"
                    ? "e.g. 2,400 sq ft single-story home. Need full exterior painting with stucco crack sealing, plus living room and hallway interiors."
                    : "ej. Casa de 2,400 pies cuadrados. Necesito pintura exterior completa con sellado de grietas de estuco, además de sala y pasillos interiores.")
                  : (locale === "en"
                    ? "e.g. Kitchen is approx 12x14 feet with a center island. Looking to replace all doors and spray fixed frames on site."
                    : "ej. Cocina de aprox. 12x14 pies con isla central. Queremos cambiar las puertas y pintar los marcos fijos en sitio.")
              }
              className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-base font-medium text-[#1A1410] placeholder-[#6E6053] focus:outline-none focus:border-[#B85D3B] focus:ring-1 focus:ring-[#B85D3B]"
            />
          </div>

          {/* Dedicated House Painting Scope & Size Selector */}
          {service === "paint-house" && (
            <div className="pt-2 space-y-4">
              <div>
                <span className="text-xs sm:text-sm font-serif text-[#2B231D] block mb-2 font-bold">
                  {locale === "en" ? "Painting Scope (Select primary area):" : "Alcance de la Pintura (Selecciona el área principal):"}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "exterior-only", labelEn: "Exterior (Stucco & Trim)", labelEs: "Exterior (Estuco y Fascia)" },
                    { id: "interior-only", labelEn: "Interior (Walls & Ceilings)", labelEs: "Interior (Muros y Techos)" },
                    { id: "full-home", labelEn: "Both (Full Home In/Out)", labelEs: "Ambos (Interior y Exterior)" },
                    { id: "specific-rooms", labelEn: "Specific Rooms / Accents", labelEs: "Áreas Específicas / Acentos" },
                  ].map((scope) => (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setHouseScope(scope.id)}
                      className={`p-3 rounded-xl border text-xs font-serif font-bold text-left transition-all cursor-pointer ${
                        houseScope === scope.id
                          ? "border-[#B85D3B] bg-[#FCFAF7] text-[#B85D3B] shadow-xs"
                          : "border-[#DFD6C6] bg-[#F4EFE6] text-[#2B231D] hover:border-[#1A1410]"
                      }`}
                    >
                      {locale === "en" ? scope.labelEn : scope.labelEs}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-serif text-[#2B231D] block mb-2 font-bold">
                  {locale === "en" ? "Approximate Home Size (sq ft):" : "Tamaño Aproximado de la Casa:"}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "under-1500", label: "< 1,500 sq ft" },
                    { id: "1500-2500", label: "1,500 – 2,500 sq ft" },
                    { id: "2500-4000", label: "2,500 – 4,000 sq ft" },
                    { id: "over-4000", label: "4,000+ sq ft" },
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setHomeSize(size.id)}
                      className={`p-2.5 rounded-xl border text-xs font-mono font-bold text-center transition-all cursor-pointer ${
                        homeSize === size.id
                          ? "border-[#B85D3B] bg-[#FCFAF7] text-[#B85D3B] shadow-xs"
                          : "border-[#DFD6C6] bg-[#F4EFE6] text-[#2B231D] hover:border-[#1A1410]"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick Door & Drawer Counts for Cabinetry Work */}
          {(service === "refacing" || service === "cabinets-new" || service === "paint-cabinets") && (
            <div className="pt-2">
              <span className="text-xs sm:text-sm font-serif text-[#2B231D] block mb-2 font-bold">
                {locale === "en"
                  ? "Approximate counts if known (Optional):"
                  : "¿Conoces la cantidad aproximada de puertas y cajones? (Opcional):"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-[#2B231D] uppercase tracking-wider mb-1.5 font-bold">
                    {locale === "en" ? "Approx. Cabinet Doors" : "Puertas de Gabinete Aprox."}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={doorsEstimate}
                    onChange={(e) => setDoorsEstimate(e.target.value)}
                    placeholder={locale === "en" ? "e.g. 24 doors" : "ej. 24 puertas"}
                    className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-base font-medium text-[#1A1410] placeholder-[#6E6053] focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#2B231D] uppercase tracking-wider mb-1.5 font-bold">
                    {locale === "en" ? "Approx. Drawer Fronts" : "Frentes de Cajón Aprox."}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={drawersEstimate}
                    onChange={(e) => setDrawersEstimate(e.target.value)}
                    placeholder={locale === "en" ? "e.g. 8 drawers" : "ej. 8 cajones"}
                    className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-base font-medium text-[#1A1410] placeholder-[#6E6053] focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================================
          STEP 3: COLORS & FINISHES WITH INTERACTIVE VISUAL SWATCHES
      ===================================================================== */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DFD6C6] pb-4 gap-1">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-[#9E3E20]">
              {locale === "en" ? "STEP 3 OF 4 · COLORS & FINISH" : "PASO 3 DE 4 · COLORES Y ACABADOS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1410] tracking-tight">
              {locale === "en" ? "Desired Colors & Chemistry Grade" : "Colores y Acabados Deseados"}
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-serif font-bold text-[#8C3B1E]">
            {service === "paint-house"
              ? (locale === "en" ? "Desert UV & HEPA Dustless Architectural Coatings" : "Blindaje UV Desértico y Acabados 0-VOC HEPA")
              : (locale === "en" ? "Catalyzed 2K Industrial Chemistry" : "Lacas Catalizadas 2K Industriales")}
          </span>
        </div>

        <div className="space-y-6">
          {/* Visual Finish Grade Selector with Photography Cards */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
              <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#1A1410] font-bold">
                {service === "paint-house"
                  ? (locale === "en" ? "Architectural Paint Sheen / Protection Level" : "Grado de Brillo y Nivel de Protección")
                  : (locale === "en" ? "Factory Finish Sheen / Coating Type" : "Tipo de Acabado / Grado de Brillo")}
              </label>
              <span className="text-xs font-serif font-medium text-[#4A3E34]">
                {locale === "en" ? "Touch a finish card to select" : "Toca una tarjeta para elegir acabado"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
              {finishOptions.map((f) => {
                const isSelected = finishType === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFinishType(f.id)}
                    className={`interactive-control text-left rounded-2xl overflow-hidden border-2 transition-all flex flex-col justify-between group ${
                      isSelected
                        ? "border-[#B85D3B] bg-[#F4EFE6] shadow-md ring-1 ring-[#B85D3B]"
                        : "border-[#DFD6C6] bg-[#FCFAF7] hover:border-[#B85D3B]/50 hover:bg-[#F9F6F0]"
                    }`}
                  >
                    {/* Visual Photography Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10">
                      <img
                        src={f.image}
                        alt={locale === "en" ? f.labelEn : f.labelEs}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Sheen Badge & Check Indicator */}
                      <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#E5B537] border border-white/15">
                          {f.sheenBadge}
                        </span>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-md transition-colors ${
                            isSelected
                              ? "border-[#B85D3B] bg-[#B85D3B] text-white"
                              : "border-white/60 bg-black/40 text-transparent"
                          }`}
                        >
                          {isSelected && <Check size={14} weight="bold" />}
                        </div>
                      </div>

                      {/* Bottom Tag over image */}
                      <div className="absolute bottom-2.5 left-3 text-xs sm:text-sm font-serif text-white font-bold drop-shadow-md">
                        {locale === "en" ? f.badgeEn : f.badgeEs}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <h4 className="text-base font-serif font-bold text-[#1A1410] leading-snug">
                          {locale === "en" ? f.labelEn : f.labelEs}
                        </h4>
                        <p className="text-sm text-[#261F1A] font-normal leading-relaxed">
                          {locale === "en" ? f.descEn : f.descEs}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Visual Interactive Color Swatches */}
          <div>
            <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#1A1410] mb-2 font-bold">
              {locale === "en"
                ? "Desired Paint Color or Natural Wood Tone"
                : "Color de Pintura o Tono de Madera Deseado"}
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
              className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-base font-medium text-[#1A1410] placeholder-[#6E6053] focus:outline-none focus:border-[#B85D3B] focus:ring-1 focus:ring-[#B85D3B]"
            />

            {/* Clickable Visual Swatch Pills with Real Colors */}
            <div className="pt-3">
              <span className="text-xs sm:text-sm font-mono text-[#2B231D] uppercase tracking-wider block mb-2 font-bold">
                {locale === "en" ? "Popular Designer Palettes in Phoenix (Tap to Select):" : "Paletas Populares en Phoenix (Toca para Seleccionar):"}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {colorSwatches.map((swatch, idx) => {
                  const activeName = locale === "en" ? swatch.nameEn : swatch.nameEs;
                  const isSelected = desiredColors.includes(activeName);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setDesiredColors(activeName)}
                      className={`interactive-control inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs sm:text-sm font-serif transition-all ${
                        isSelected
                          ? "border-[#B85D3B] bg-[#F4EFE6] font-bold text-[#1A1410] ring-1 ring-[#B85D3B] shadow-xs"
                          : "border-[#DFD6C6] bg-[#FCFAF7] text-[#2B231D] font-medium hover:border-[#B85D3B]/60 hover:bg-[#F9F6F0]"
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/25 shrink-0 shadow-2xs"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span>{locale === "en" ? swatch.nameEn.split("(")[0].trim() : swatch.nameEs.split("(")[0].trim()}</span>
                      <span className="text-xs text-[#54463A] hidden sm:inline font-normal">
                        ({locale === "en" ? swatch.labelEn : swatch.labelEs})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#1A1410] mb-2 font-bold">
              {locale === "en"
                ? "Additional Notes or Preferences (Hardware, Hinges, Deadlines)"
                : "Notas Adicionales o Detalles (Herrajes, Bisagras, Fechas Clave)"}
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                locale === "en"
                  ? "Tell Raul about specific hardware pulls, pet safety, or target completion dates."
                  : "Indica cualquier requerimiento: cambio de jaladeras, cuidado con mascotas o fechas límite."
              }
              className="w-full px-4 py-3 rounded-xl border border-[#DFD6C6] bg-[#F4EFE6] text-base font-medium text-[#1A1410] placeholder-[#6E6053] focus:outline-none focus:border-[#B85D3B] focus:ring-1 focus:ring-[#B85D3B]"
            />
          </div>
        </div>
      </div>

      {/* =====================================================================
          STEP 4: SITE PHOTOS UPLOAD WITH VISUAL TIPS (MOBILE FIRST)
      ===================================================================== */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#DFD6C6] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DFD6C6] pb-4 gap-1">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-[#9E3E20]">
              {locale === "en" ? "STEP 4 OF 4 · SITE PHOTOS" : "PASO 4 DE 4 · FOTOGRAFÍAS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1410] tracking-tight">
              {locale === "en" ? "Upload Photos of Your Space" : "Sube Fotos de tu Espacio Actual"}
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-serif font-bold text-[#8C3B1E]">
            {locale === "en" ? "Embedded directly in your PDF" : "Incrustadas en tu PDF oficial"}
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-sm sm:text-base text-[#261F1A] font-normal leading-relaxed">
            {locale === "en"
              ? "Photos allow master craftsman Raul Burgos to immediately evaluate your door profiles, corner angles, and box conditions to prepare a firm proposal."
              : "Las fotos permiten a Raul Burgos evaluar perfiles de puertas, condiciones de los marcos y ángulos para entregarte una propuesta rápida y firme."}
          </p>

          {/* Photography Tips Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] border-2 border-[#DFD6C6] grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm">
            <div className="flex items-start gap-2.5">
              <span className="text-lg">📸</span>
              <div className="space-y-0.5">
                <strong className="block text-[#1A1410] font-bold">
                  {locale === "en" ? "1. Overall View:" : "1. Vista General:"}
                </strong>
                <span className="text-[#2B231D] font-normal leading-snug">
                  {locale === "en" ? "Capture full room showing upper & lower boxes." : "Muestra la cocina completa con gabinetes altos y bajos."}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-lg">🔍</span>
              <div className="space-y-0.5">
                <strong className="block text-[#1A1410] font-bold">
                  {locale === "en" ? "2. Door Close-Up:" : "2. Detalle de Puerta:"}
                </strong>
                <span className="text-[#2B231D] font-normal leading-snug">
                  {locale === "en" ? "Show current door profiles, grain, and hinges." : "Acércate a un marco o puerta para ver molduras y bisagras."}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-lg">💡</span>
              <div className="space-y-0.5">
                <strong className="block text-[#1A1410] font-bold">
                  {locale === "en" ? "3. Inspiration (Optional):" : "3. Inspiración (Opcional):"}
                </strong>
                <span className="text-[#2B231D] font-normal leading-snug">
                  {locale === "en" ? "Upload dream finishes or colors you like." : "Adjunta fotos de cocinas o tonos que te gusten."}
                </span>
              </div>
            </div>
          </div>

          {/* Upload Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#DFD6C6] hover:border-[#B85D3B] bg-[#F4EFE6] hover:bg-[#F9F6F0] text-center cursor-pointer transition-colors space-y-3"
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="w-14 h-14 rounded-full bg-[#EAE2D5] text-[#B85D3B] flex items-center justify-center mx-auto shadow-xs">
              <Camera size={28} />
            </div>
            <div>
              <span className="text-base sm:text-lg font-serif font-bold text-[#1A1410] block">
                {locale === "en" ? "Tap to Take a Photo or Choose from Gallery" : "Toca para Tomar Foto o Subir desde tu Galería"}
              </span>
              <span className="text-xs sm:text-sm text-[#4A3E34] font-medium block mt-1.5">
                {locale === "en"
                  ? "JPG, PNG, WEBP (Max 5 photos · Up to 10MB each)"
                  : "JPG, PNG, WEBP (Máx. 5 fotos · Hasta 10MB cada una)"}
              </span>
            </div>
          </div>

          {photoError && (
            <p className="text-sm text-[#9E3E20] font-bold">{photoError}</p>
          )}

          {/* Mobile-Friendly Thumbnail Grid */}
          {photos.length > 0 && (
            <div className="space-y-2 pt-1">
              <span className="text-xs sm:text-sm font-mono text-[#2B231D] uppercase tracking-wider block font-bold">
                {locale === "en"
                  ? `Attached Photos (${photos.length}/5):`
                  : `Fotos Adjuntas (${photos.length}/5):`}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {photos.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-xl overflow-hidden border border-[#DFD6C6] bg-black/5 group shadow-xs"
                  >
                    <img
                      src={item.previewUrl}
                      alt={locale === "en" ? `Photo preview ${idx + 1}` : `Vista previa foto ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(idx)}
                      aria-label={locale === "en" ? "Delete photo" : "Eliminar foto"}
                      className="absolute top-1.5 right-1.5 p-1.5 rounded-full bg-black/75 hover:bg-[#B85D3B] text-white transition-colors"
                    >
                      <Trash size={14} weight="bold" />
                    </button>
                    <span className="absolute bottom-1.5 left-1.5 text-xs font-mono text-white/95 bg-black/75 px-2 py-0.5 rounded font-bold">
                      {locale === "en" ? `Photo ${idx + 1}` : `Foto ${idx + 1}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================================
          CUSTOMER CONTACT & PDF GENERATION SUBMIT
      ===================================================================== */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#1A1410] text-[#FCFAF7] border-2 border-[#C59B27]/40 shadow-2xl space-y-7">
        <div className="space-y-1.5">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-[#E5B537]">
            {locale === "en" ? "CLIENT CONTACT & PROPOSAL DELIVERY" : "CONTACTO Y ENVÍO DE PROPUESTA"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FCFAF7] tracking-tight">
            {locale === "en" ? "Where should we deliver your proposal?" : "¿A dónde enviamos tu propuesta formal?"}
          </h2>
          <p className="text-sm sm:text-base text-[#EAE2D5] font-normal leading-relaxed">
            {locale === "en"
              ? "Raul Burgos will review your photos and scope personally within 24 hours."
              : "Raul Burgos revisará personalmente tus fotos y especificaciones en menos de 24 horas."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#E5B537] mb-2 font-bold">
              {locale === "en" ? "Full Name *" : "Nombre Completo *"}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={locale === "en" ? "e.g. Robert Miller" : "ej. Roberto Mendoza"}
              className="w-full px-4 py-3.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-base font-medium text-[#FCFAF7] placeholder-[#A69B8F] focus:outline-none focus:border-[#E5B537] focus:ring-1 focus:ring-[#E5B537]"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#E5B537] mb-2 font-bold">
              {locale === "en" ? "Phone Number (Cell) *" : "Teléfono Celular *"}
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={locale === "en" ? "e.g. (602) 550-4369" : "ej. (602) 550-4369"}
              className="w-full px-4 py-3.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-base font-medium text-[#FCFAF7] placeholder-[#A69B8F] focus:outline-none focus:border-[#E5B537] focus:ring-1 focus:ring-[#E5B537]"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#E5B537] mb-2 font-bold">
              {locale === "en" ? "Email Address *" : "Correo Electrónico *"}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={locale === "en" ? "client@example.com" : "cliente@ejemplo.com"}
              className="w-full px-4 py-3.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-base font-medium text-[#FCFAF7] placeholder-[#A69B8F] focus:outline-none focus:border-[#E5B537] focus:ring-1 focus:ring-[#E5B537]"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#E5B537] mb-2 font-bold">
              {locale === "en" ? "City or ZIP Code (AZ)" : "Ciudad o Código Postal (AZ)"}
            </label>
            <input
              type="text"
              value={cityOrZip}
              onChange={(e) => setCityOrZip(e.target.value)}
              placeholder={locale === "en" ? "Scottsdale, Paradise Valley, 85029..." : "Scottsdale, Paradise Valley, 85029..."}
              className="w-full px-4 py-3.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-base font-medium text-[#FCFAF7] placeholder-[#A69B8F] focus:outline-none focus:border-[#E5B537] focus:ring-1 focus:ring-[#E5B537]"
            />
          </div>
        </div>

        {/* Timeline options strictly localized */}
        <div>
          <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-[#E5B537] mb-2.5 font-bold">
            {locale === "en" ? "Target Start Timeline" : "¿Cuándo te gustaría comenzar los trabajos?"}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {timelineOptions.map((t) => {
              const activeLabel = locale === "en" ? t.labelEn : t.labelEs;
              const isSelected = timelineId === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTimelineId(t.id)}
                  className={`py-3 px-3.5 rounded-xl text-xs sm:text-sm font-serif transition-colors text-center font-bold ${
                    isSelected
                      ? "bg-[#C59B27] text-[#1A1410] shadow-sm ring-2 ring-white/30"
                      : "bg-[#261E18] text-[#FCFAF7] border border-[#4A3B30] hover:bg-[#322820] hover:border-[#C59B27]/40"
                  }`}
                >
                  {activeLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-5 border-t border-[#3A2E26] space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="interactive-control w-full min-h-[58px] sm:min-h-[62px] px-8 py-4 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] disabled:opacity-60 text-white text-base sm:text-lg font-serif font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl transition-all cursor-pointer hover:scale-[1.01]"
          >
            {isSubmitting ? (
              <span>{locale === "en" ? "Compiling Project Proposal & Sending..." : "Compilando Propuesta de Proyecto y Enviando..."}</span>
            ) : (
              <>
                <FilePdf size={22} weight="fill" />
                <span>
                  {locale === "en"
                    ? "Generate Project Proposal & Send to Raul"
                    : "Generar Propuesta de Proyecto y Enviar a Raul"}
                </span>
                <ArrowRight size={18} weight="bold" />
              </>
            )}
          </button>
          <p className="text-xs sm:text-sm text-[#DFD6C6] text-center font-normal leading-relaxed">
            {locale === "en"
              ? "Creates an official Renovo proposal specification with your photos and dispatches a copy directly to raul@renovoaz.com."
              : "Genera la propuesta formal de Renovo con tus fotos adjuntas y envía una copia directamente a raul@renovoaz.com."}
          </p>
        </div>
      </div>
    </form>
  );
}
