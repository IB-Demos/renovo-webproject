import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

export interface QuotePhotoAttachment {
  filename: string;
  buffer: Buffer;
  mimeType: string;
}

export interface QuoteRequestData {
  quoteId: string;
  name: string;
  email: string;
  phone: string;
  cityOrZip: string;
  service: string;
  serviceTitle: string;
  dimensions: string;
  desiredColors: string;
  finishType: string;
  timeline: string;
  notes?: string;
  createdAt: string;
  locale?: "en" | "es";
  photos?: QuotePhotoAttachment[];
}

export async function generateQuotePdf(data: QuoteRequestData): Promise<Uint8Array> {
  const doc = await PDFDocument.create();

  const isEn = data.locale !== "es";

  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  // Palette colors (Sonoran Heritage)
  const cCharcoal = rgb(0.10, 0.08, 0.06);     // #1A1410
  const cCharcoalLight = rgb(0.18, 0.14, 0.11);
  const cTerraCotta = rgb(0.72, 0.36, 0.23);    // #B85D3B
  const cGold = rgb(0.77, 0.61, 0.15);          // #C59B27
  const cBgCard = rgb(0.97, 0.96, 0.93);        // #F8F5EE
  const cBorder = rgb(0.87, 0.84, 0.78);        // #DFD6C6
  const cTextDark = rgb(0.15, 0.12, 0.10);      // #261F1A
  const cTextMuted = rgb(0.38, 0.32, 0.27);     // #615245
  const cWhite = rgb(1, 1, 1);
  const cGreenBg = rgb(0.92, 0.96, 0.92);
  const cGreenText = rgb(0.18, 0.42, 0.28);

  // Try embedding logo
  let embeddedLogo: any = null;
  try {
    const logoPath = path.join(process.cwd(), "public", "assets", "brand", "renovo-logo.png");
    if (fs.existsSync(logoPath)) {
      const logoBuffer = fs.readFileSync(logoPath);
      embeddedLogo = await doc.embedPng(logoBuffer);
    }
  } catch (err) {
    console.warn("Could not embed Renovo logo in PDF:", err);
  }

  // =========================================================================
  // PAGE 1: PROJECT ESTIMATE & SPECIFICATIONS
  // =========================================================================
  const page1 = doc.addPage([612, 792]); // US Letter
  const { width, height } = page1.getSize();

  // 1. TOP HEADER BANNER (Architectural Charcoal with Gold Accent)
  const headerHeight = 92;
  page1.drawRectangle({
    x: 0,
    y: height - headerHeight,
    width: width,
    height: headerHeight,
    color: cCharcoal,
  });

  page1.drawRectangle({
    x: 0,
    y: height - headerHeight - 3,
    width: width,
    height: 3,
    color: cGold,
  });

  // Logo or Fallback Brand Name
  if (embeddedLogo) {
    // 2172 x 724 is 3:1 ratio
    const logoW = 126;
    const logoH = 42;
    page1.drawImage(embeddedLogo, {
      x: 38,
      y: height - 58,
      width: logoW,
      height: logoH,
    });

    page1.drawText(
      isEn
        ? "ARCHITECTURAL CABINETRY & FACTORY 2K COATINGS"
        : "EBANISTERÍA ARQUITECTÓNICA & PINTURA FINA 2K",
      {
        x: 38,
        y: height - 72,
        size: 7,
        font: fontBold,
        color: cGold,
      }
    );

    page1.drawText("2231 W Shangri La Rd, Phoenix, AZ 85029 · (602) 550-4369", {
      x: 38,
      y: height - 83,
      size: 6.8,
      font: fontRegular,
      color: rgb(0.85, 0.80, 0.74),
    });
  } else {
    page1.drawText("RENOVO PAINTING SOLUTIONS", {
      x: 38,
      y: height - 40,
      size: 15,
      font: fontBold,
      color: cWhite,
    });
    page1.drawText(
      isEn
        ? "ARCHITECTURAL CABINETRY & FACTORY 2K COATINGS · PHOENIX, AZ"
        : "EBANISTERÍA ARQUITECTÓNICA & PINTURA FINA 2K · PHOENIX, AZ",
      {
        x: 38,
        y: height - 56,
        size: 7.5,
        font: fontRegular,
        color: cGold,
      }
    );
    page1.drawText("2231 W Shangri La Rd, Phoenix, AZ 85029 · (602) 550-4369", {
      x: 38,
      y: height - 70,
      size: 7.5,
      font: fontRegular,
      color: rgb(0.85, 0.80, 0.74),
    });
  }

  // Header Right: Document Folio Badge
  const badgeW = 186;
  const badgeH = 58;
  page1.drawRectangle({
    x: width - badgeW - 36,
    y: height - 76,
    width: badgeW,
    height: badgeH,
    color: cCharcoalLight,
    borderColor: cGold,
    borderWidth: 1,
  });

  page1.drawText(
    isEn ? "PROJECT ESTIMATE & SPECS" : "PROPUESTA & ESPECIFICACIONES",
    {
      x: width - badgeW - 24,
      y: height - 33,
      size: 8,
      font: fontBold,
      color: cGold,
    }
  );

  page1.drawText(`FOLIO: ${data.quoteId}`, {
    x: width - badgeW - 24,
    y: height - 49,
    size: 9.5,
    font: fontBold,
    color: cWhite,
  });

  page1.drawText(
    isEn ? `DATE: ${data.createdAt}` : `FECHA: ${data.createdAt}`,
    {
      x: width - badgeW - 24,
      y: height - 64,
      size: 7,
      font: fontRegular,
      color: rgb(0.85, 0.80, 0.74),
    }
  );

  let currentY = height - 114;

  // =========================================================================
  // 1. CLIENT INFORMATION SECTION
  // =========================================================================
  page1.drawText(
    isEn ? "1. CLIENT & RESIDENCE DETAILS" : "1. DATOS DEL CLIENTE Y RESIDENCIA",
    {
      x: 38,
      y: currentY,
      size: 9.5,
      font: fontBold,
      color: cTerraCotta,
    }
  );

  currentY -= 12;

  const clientBoxHeight = 68;
  page1.drawRectangle({
    x: 38,
    y: currentY - clientBoxHeight,
    width: width - 76,
    height: clientBoxHeight,
    color: cBgCard,
    borderColor: cBorder,
    borderWidth: 1,
  });

  // Left column client
  page1.drawText(
    isEn ? "Client Name:" : "Nombre del Cliente:",
    { x: 52, y: currentY - 18, size: 8, font: fontBold, color: cTextMuted }
  );
  page1.drawText(
    data.name || (isEn ? "Not specified" : "No especificado"),
    { x: 140, y: currentY - 18, size: 9, font: fontBold, color: cTextDark }
  );

  page1.drawText(
    isEn ? "Direct Phone:" : "Teléfono Directo:",
    { x: 52, y: currentY - 35, size: 8, font: fontBold, color: cTextMuted }
  );
  page1.drawText(
    data.phone || (isEn ? "Not specified" : "No especificado"),
    { x: 140, y: currentY - 35, size: 9, font: fontRegular, color: cTextDark }
  );

  page1.drawText(
    isEn ? "Email Address:" : "Correo Electrónico:",
    { x: 52, y: currentY - 52, size: 8, font: fontBold, color: cTextMuted }
  );
  page1.drawText(
    data.email || (isEn ? "Not specified" : "No especificado"),
    { x: 140, y: currentY - 52, size: 9, font: fontRegular, color: cTextDark }
  );

  // Right column client
  page1.drawText(
    isEn ? "City / ZIP (AZ):" : "Ciudad / C.P. (AZ):",
    { x: 330, y: currentY - 18, size: 8, font: fontBold, color: cTextMuted }
  );
  page1.drawText(
    data.cityOrZip || "Phoenix Metro",
    { x: 420, y: currentY - 18, size: 9, font: fontRegular, color: cTextDark }
  );

  page1.drawText(
    isEn ? "Target Timeline:" : "Cronograma Deseado:",
    { x: 330, y: currentY - 35, size: 8, font: fontBold, color: cTextMuted }
  );
  page1.drawText(
    data.timeline || (isEn ? "Flexible" : "Flexible"),
    { x: 420, y: currentY - 35, size: 8.5, font: fontRegular, color: cTextDark }
  );

  page1.drawText(
    isEn ? "Submission Origin:" : "Canal de Origen:",
    { x: 330, y: currentY - 52, size: 8, font: fontBold, color: cTextMuted }
  );
  page1.drawText(
    isEn ? "Renovo Client Portal (Online)" : "Portal Web Oficial Renovo",
    { x: 420, y: currentY - 52, size: 8, font: fontOblique, color: cTextMuted }
  );

  currentY -= (clientBoxHeight + 18);

  // =========================================================================
  // 2. PROJECT SPECIFICATIONS SECTION
  // =========================================================================
  page1.drawText(
    isEn ? "2. CRAFT DISCIPLINE & WORK SCOPE" : "2. ALCANCE Y DISCIPLINA DEL PROYECTO",
    {
      x: 38,
      y: currentY,
      size: 9.5,
      font: fontBold,
      color: cTerraCotta,
    }
  );

  currentY -= 12;

  const specBoxHeight = 168;
  page1.drawRectangle({
    x: 38,
    y: currentY - specBoxHeight,
    width: width - 76,
    height: specBoxHeight,
    color: cBgCard,
    borderColor: cBorder,
    borderWidth: 1,
  });

  // Selected Service Badge inside spec
  page1.drawRectangle({
    x: 52,
    y: currentY - 34,
    width: width - 104,
    height: 24,
    color: rgb(0.92, 0.88, 0.82),
    borderColor: cGold,
    borderWidth: 0.8,
  });

  page1.drawText(
    isEn ? "REQUESTED DISCIPLINE:" : "ESPECIALIDAD SOLICITADA:",
    {
      x: 62,
      y: currentY - 24,
      size: 7.5,
      font: fontBold,
      color: cTerraCotta,
    }
  );

  page1.drawText(
    data.serviceTitle || data.service,
    {
      x: 185,
      y: currentY - 24,
      size: 8.5,
      font: fontBold,
      color: cTextDark,
    }
  );

  // Dimensions & Room Scope
  page1.drawText(
    isEn ? "Dimensions & Layout:" : "Dimensiones y Distribución:",
    {
      x: 52,
      y: currentY - 52,
      size: 8,
      font: fontBold,
      color: cTextMuted,
    }
  );

  const dimText = data.dimensions || (
    isEn
      ? "To be verified on site during digital laser measure"
      : "A evaluar en sitio durante la visita técnica"
  );
  
  // Wrap dimensions into 2 lines max
  const dimLine1 = dimText.slice(0, 80);
  const dimLine2 = dimText.length > 80 ? dimText.slice(80, 160) : "";
  page1.drawText(dimLine1, { x: 52, y: currentY - 66, size: 8.5, font: fontRegular, color: cTextDark });
  if (dimLine2) {
    page1.drawText(dimLine2, { x: 52, y: currentY - 78, size: 8.5, font: fontRegular, color: cTextDark });
  }

  // Divider
  page1.drawLine({
    start: { x: 52, y: currentY - 88 },
    end: { x: width - 52, y: currentY - 88 },
    thickness: 0.5,
    color: cBorder,
  });

  // Specified Coating Grade & Color
  page1.drawText(
    isEn ? "Coating Grade & Sheen:" : "Tipo de Acabado y Brillo:",
    {
      x: 52,
      y: currentY - 104,
      size: 8,
      font: fontBold,
      color: cTextMuted,
    }
  );
  page1.drawText(
    data.finishType || (isEn ? "2K Catalyzed Polyurethane" : "Laca 2K Catalizada"),
    {
      x: 175,
      y: currentY - 104,
      size: 8.5,
      font: fontBold,
      color: cTextDark,
    }
  );

  page1.drawText(
    isEn ? "Specified Palette / Tone:" : "Color o Tono de Madera:",
    {
      x: 52,
      y: currentY - 122,
      size: 8,
      font: fontBold,
      color: cTextMuted,
    }
  );
  page1.drawText(
    data.desiredColors || (isEn ? "To be selected from physical workshop samples" : "A definir con muestras físicas"),
    {
      x: 175,
      y: currentY - 122,
      size: 8.5,
      font: fontRegular,
      color: cTextDark,
    }
  );

  page1.drawText(
    isEn ? "Homeowner Requests:" : "Notas Adicionales:",
    {
      x: 52,
      y: currentY - 140,
      size: 8,
      font: fontBold,
      color: cTextMuted,
    }
  );
  const notesText = data.notes || (isEn ? "None specified" : "Sin notas adicionales");
  page1.drawText(notesText.slice(0, 75), {
    x: 175,
    y: currentY - 140,
    size: 8,
    font: fontOblique,
    color: cTextDark,
  });

  // Chemistry Guarantee Pill inside Section 2
  page1.drawRectangle({
    x: 52,
    y: currentY - 162,
    width: width - 104,
    height: 16,
    color: cGreenBg,
    borderColor: rgb(0.72, 0.85, 0.72),
    borderWidth: 0.5,
  });
  page1.drawText(
    isEn
      ? "2K Catalyzed Chemistry Included: Chemical cross-link protection against cooking grease & boiling steam."
      : "Laca 2K Catalizada Incluida: Resistencia química garantizada contra vapor hirviendo y grasa caliente.",
    {
      x: 58,
      y: currentY - 158,
      size: 6.8,
      font: fontBold,
      color: cGreenText,
    }
  );

  currentY -= (specBoxHeight + 18);

  // =========================================================================
  // 3. MASTER CRAFT WORKFLOW & NEXT STEPS
  // =========================================================================
  page1.drawText(
    isEn ? "3. THE RENOVO CRAFT PROCESS & NEXT STEPS" : "3. PROCESO DE TALLER Y SIGUIENTES PASOS",
    {
      x: 38,
      y: currentY,
      size: 9.5,
      font: fontBold,
      color: cTerraCotta,
    }
  );

  currentY -= 12;

  const stepsBoxHeight = 100;
  page1.drawRectangle({
    x: 38,
    y: currentY - stepsBoxHeight,
    width: width - 76,
    height: stepsBoxHeight,
    color: cBgCard,
    borderColor: cBorder,
    borderWidth: 1,
  });

  const steps = isEn
    ? [
        {
          num: "01",
          title: "In-Home Laser Verification & Spatial Audit",
          desc: "Raul Burgos personally visits your residence to take digital laser measurements of all floor and wall deviations.",
        },
        {
          num: "02",
          title: "Physical Material Samples & Sheen Review",
          desc: "Touch real 2K sprayed sample blocks and solid hardwood boards directly in your home's natural light.",
        },
        {
          num: "03",
          title: "Binding Fixed-Price Investment Proposal",
          desc: "Complete hardware, Blum soft-close runners, off-site spray booth, and containment are finalized with zero hidden fees.",
        },
      ]
    : [
        {
          num: "01",
          title: "Medición Láser y Verificación en Sitio",
          desc: "Raul Burgos visita tu residencia para medir personalmente con láser cada desnivel de muros, pisos y techos.",
        },
        {
          num: "02",
          title: "Revisión de Muestras Físicas y Acabado",
          desc: "Revisa en mano muestras de laca 2K y maderas macizas bajo la iluminación real de tu hogar.",
        },
        {
          num: "03",
          title: "Propuesta Vinculante de Precio Fijo",
          desc: "Herrajes Blum de cierre suave, cabina industrial y sellado de casa se especifican con cero cargos sorpresa.",
        },
      ];

  let stepY = currentY - 22;
  steps.forEach((st) => {
    // Number badge
    page1.drawRectangle({
      x: 52,
      y: stepY - 3,
      width: 18,
      height: 14,
      color: cCharcoal,
    });
    page1.drawText(st.num, {
      x: 55,
      y: stepY + 1,
      size: 7,
      font: fontBold,
      color: cGold,
    });

    page1.drawText(st.title, {
      x: 76,
      y: stepY + 1,
      size: 8,
      font: fontBold,
      color: cTextDark,
    });

    page1.drawText(st.desc, {
      x: 76,
      y: stepY - 11,
      size: 7,
      font: fontRegular,
      color: cTextMuted,
    });

    stepY -= 28;
  });

  currentY -= (stepsBoxHeight + 18);

  // =========================================================================
  // 4. CRAFTSMAN SIGNATURE & COMMITMENT
  // =========================================================================
  const sigBoxHeight = 50;
  page1.drawRectangle({
    x: 38,
    y: currentY - sigBoxHeight,
    width: width - 76,
    height: sigBoxHeight,
    color: rgb(0.95, 0.93, 0.89),
    borderColor: cGold,
    borderWidth: 0.8,
  });

  page1.drawText(
    isEn
      ? "\"At Renovo, we treat cabinetry as generational furniture. You work directly with me from day one.\" - Raul Burgos"
      : "\"En Renovo tratamos los gabinetes como muebles para toda la vida. Tratas directamente conmigo desde el día uno.\" - Raul Burgos",
    {
      x: 50,
      y: currentY - 18,
      size: 7.5,
      font: fontOblique,
      color: cTextDark,
    }
  );

  page1.drawText(
    isEn
      ? "Master Craftsman & Owner · Renovo Painting Solutions LLC · ROC Licensed & Fully Insured · Phoenix, Arizona"
      : "Maestro Artesano y Fundador · Renovo Painting Solutions LLC · Con Licencia ROC y Asegurado · Phoenix, Arizona",
    {
      x: 50,
      y: currentY - 34,
      size: 7,
      font: fontBold,
      color: cTerraCotta,
    }
  );

  // BOTTOM FOOTER PAGE 1
  page1.drawRectangle({
    x: 0,
    y: 0,
    width: width,
    height: 24,
    color: cCharcoal,
  });

  const photosCount = data.photos?.length || 0;
  page1.drawText(
    isEn
      ? "Renovo Painting Solutions LLC · 2231 W Shangri La Rd, Phoenix, AZ · Direct: (602) 550-4369"
      : "Renovo Painting Solutions LLC · 2231 W Shangri La Rd, Phoenix, AZ · Directo: (602) 550-4369",
    {
      x: 38,
      y: 8,
      size: 7,
      font: fontRegular,
      color: rgb(0.75, 0.70, 0.65),
    }
  );

  page1.drawText(
    photosCount > 0
      ? (isEn ? "Page 1 of 2 (Photos Attached)" : "Página 1 de 2 (Fotos Adjuntas)")
      : (isEn ? "Page 1 of 1" : "Página 1 de 1"),
    {
      x: width - 150,
      y: 8,
      size: 7,
      font: fontBold,
      color: cGold,
    }
  );

  // =========================================================================
  // PAGE 2: PHOTO ANNEX (If customer attached photos)
  // =========================================================================
  if (data.photos && data.photos.length > 0) {
    const page2 = doc.addPage([612, 792]);

    // Top Header Banner
    page2.drawRectangle({
      x: 0,
      y: height - 60,
      width: width,
      height: 60,
      color: cCharcoal,
    });

    page2.drawRectangle({
      x: 0,
      y: height - 62,
      width: width,
      height: 2,
      color: cGold,
    });

    page2.drawText(
      isEn
        ? "PROJECT SITE INSPECTION ANNEX // CLIENT-PROVIDED PHOTOGRAPHY"
        : "ANEXO DE INSPECCIÓN FOTOGRÁFICA // FOTOS DEL ESPACIO ACTUAL",
      {
        x: 38,
        y: height - 32,
        size: 10.5,
        font: fontBold,
        color: cWhite,
      }
    );

    page2.drawText(
      isEn
        ? `PROPOSAL FOLIO: ${data.quoteId} · CLIENT: ${data.name.toUpperCase()}`
        : `FOLIO DE SOLICITUD: ${data.quoteId} · CLIENTE: ${data.name.toUpperCase()}`,
      {
        x: 38,
        y: height - 48,
        size: 7.5,
        font: fontRegular,
        color: cGold,
      }
    );

    page2.drawText(
      isEn
        ? "Visual inspection references uploaded by client for preliminary dimensional evaluation and workshop preparation."
        : "Imágenes de inspección visual adjuntadas por el cliente para la evaluación dimensional y cotización del taller.",
      {
        x: 38,
        y: height - 85,
        size: 8,
        font: fontOblique,
        color: cTextMuted,
      }
    );

    // Embed up to 4 photos in a 2x2 grid
    const photoSlots = [
      { x: 38, y: height - 340, w: 255, h: 220 },
      { x: 318, y: height - 340, w: 255, h: 220 },
      { x: 38, y: height - 590, w: 255, h: 220 },
      { x: 318, y: height - 590, w: 255, h: 220 },
    ];

    for (let i = 0; i < Math.min(data.photos.length, 4); i++) {
      const photo = data.photos[i];
      const slot = photoSlots[i];

      try {
        let embeddedImage;
        if (photo.mimeType === "image/png" || photo.filename.toLowerCase().endsWith(".png")) {
          embeddedImage = await doc.embedPng(photo.buffer);
        } else {
          embeddedImage = await doc.embedJpg(photo.buffer);
        }

        // Draw photo background card
        page2.drawRectangle({
          x: slot.x,
          y: slot.y,
          width: slot.w,
          height: slot.h,
          color: cBgCard,
          borderColor: cBorder,
          borderWidth: 1,
        });

        // Compute aspect ratio fit
        const imgDims = embeddedImage.scale(1);
        const maxImgW = slot.w - 16;
        const maxImgH = slot.h - 35;
        const scale = Math.min(maxImgW / imgDims.width, maxImgH / imgDims.height);
        const drawW = imgDims.width * scale;
        const drawH = imgDims.height * scale;
        const drawX = slot.x + (slot.w - drawW) / 2;
        const drawY = slot.y + 24 + (maxImgH - drawH) / 2;

        page2.drawImage(embeddedImage, {
          x: drawX,
          y: drawY,
          width: drawW,
          height: drawH,
        });

        // Caption
        page2.drawText(
          isEn
            ? `Site Photo ${i + 1}: ${photo.filename.slice(0, 30)}`
            : `Fotografía ${i + 1}: ${photo.filename.slice(0, 30)}`,
          {
            x: slot.x + 8,
            y: slot.y + 9,
            size: 7,
            font: fontBold,
            color: cTextDark,
          }
        );
      } catch (embedError) {
        page2.drawRectangle({
          x: slot.x,
          y: slot.y,
          width: slot.w,
          height: slot.h,
          color: cBgCard,
          borderColor: cBorder,
          borderWidth: 1,
        });
        page2.drawText(
          isEn
            ? `[Site Photo ${i + 1}: Unsupported format in preview]`
            : `[Fotografía ${i + 1}: Formato no soportado en vista previa]`,
          {
            x: slot.x + 15,
            y: slot.y + 100,
            size: 8,
            font: fontOblique,
            color: cTextMuted,
          }
        );
      }
    }

    // Bottom Footer Page 2
    page2.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: 24,
      color: cCharcoal,
    });

    page2.drawText(
      isEn
        ? "Renovo Painting Solutions LLC · Official Photographic Annex · Phoenix, Arizona"
        : "Renovo Painting Solutions LLC · Anexo Fotográfico Oficial · Phoenix, Arizona",
      {
        x: 38,
        y: 8,
        size: 7,
        font: fontRegular,
        color: rgb(0.75, 0.70, 0.65),
      }
    );

    page2.drawText(
      isEn ? "Page 2 of 2" : "Página 2 de 2",
      {
        x: width - 90,
        y: 8,
        size: 7,
        font: fontBold,
        color: cGold,
      }
    );
  }

  return await doc.save();
}
