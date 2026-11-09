import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

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
  photos?: QuotePhotoAttachment[];
}

export async function generateQuotePdf(data: QuoteRequestData): Promise<Uint8Array> {
  const doc = await PDFDocument.create();

  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  // Palette colors
  const cCharcoal = rgb(0.10, 0.08, 0.06);     // #1A1410
  const cTerraCotta = rgb(0.72, 0.36, 0.23);    // #B85D3B
  const cGold = rgb(0.77, 0.61, 0.15);          // #C59B27
  const cBgCard = rgb(0.97, 0.96, 0.93);        // #F8F5EE
  const cBorder = rgb(0.87, 0.84, 0.78);        // #DFD6C6
  const cTextDark = rgb(0.15, 0.12, 0.10);      // #261F1A
  const cTextMuted = rgb(0.38, 0.32, 0.27);     // #615245
  const cWhite = rgb(1, 1, 1);

  // =========================================================================
  // PAGE 1: EXECUTIVE PROJECT PROPOSAL SPECIFICATION
  // =========================================================================
  const page1 = doc.addPage([612, 792]); // US Letter
  const { width, height } = page1.getSize();

  // 1. TOP HEADER BANNER
  page1.drawRectangle({
    x: 0,
    y: height - 85,
    width: width,
    height: 85,
    color: cCharcoal,
  });

  // Gold accent line under header
  page1.drawRectangle({
    x: 0,
    y: height - 88,
    width: width,
    height: 3,
    color: cGold,
  });

  // Brand Name
  page1.drawText("RENOVO PAINTING SOLUTIONS", {
    x: 40,
    y: height - 38,
    size: 15,
    font: fontBold,
    color: rgb(0.98, 0.97, 0.95),
  });

  page1.drawText("ARCHITECTURAL WOODWORK & FINE 2K COATINGS · PHOENIX, AZ", {
    x: 40,
    y: height - 54,
    size: 7.5,
    font: fontRegular,
    color: cGold,
  });

  page1.drawText("2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029 · (602) 550-4369", {
    x: 40,
    y: height - 68,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.85, 0.80, 0.74),
  });

  // Header Right: Document Folio Badge
  page1.drawRectangle({
    x: width - 210,
    y: height - 72,
    width: 170,
    height: 54,
    color: rgb(0.18, 0.14, 0.11),
    borderColor: cGold,
    borderWidth: 1,
  });

  page1.drawText("SOLICITUD DE COTIZACIÓN", {
    x: width - 200,
    y: height - 32,
    size: 8,
    font: fontBold,
    color: cGold,
  });

  page1.drawText(`FOLIO: ${data.quoteId}`, {
    x: width - 200,
    y: height - 47,
    size: 9,
    font: fontBold,
    color: cWhite,
  });

  page1.drawText(`FECHA: ${data.createdAt}`, {
    x: width - 200,
    y: height - 62,
    size: 7,
    font: fontRegular,
    color: rgb(0.80, 0.75, 0.70),
  });

  let currentY = height - 110;

  // 2. CLIENT INFORMATION SECTION
  page1.drawText("1. INFORMACIÓN DEL CLIENTE & CONTACTO", {
    x: 40,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: cTerraCotta,
  });

  currentY -= 12;

  // Client Box
  const clientBoxHeight = 72;
  page1.drawRectangle({
    x: 40,
    y: currentY - clientBoxHeight,
    width: width - 80,
    height: clientBoxHeight,
    color: cBgCard,
    borderColor: cBorder,
    borderWidth: 1,
  });

  // Left column client
  page1.drawText("Nombre / Contacto:", { x: 55, y: currentY - 20, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText(data.name || "No especificado", { x: 150, y: currentY - 20, size: 9, font: fontBold, color: cTextDark });

  page1.drawText("Teléfono:", { x: 55, y: currentY - 38, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText(data.phone || "No especificado", { x: 150, y: currentY - 38, size: 9, font: fontRegular, color: cTextDark });

  page1.drawText("Correo Electrónico:", { x: 55, y: currentY - 56, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText(data.email || "No especificado", { x: 150, y: currentY - 56, size: 9, font: fontRegular, color: cTextDark });

  // Right column client
  page1.drawText("Ciudad o C.P.:", { x: 330, y: currentY - 20, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText(data.cityOrZip || "Valle de Phoenix", { x: 420, y: currentY - 20, size: 9, font: fontRegular, color: cTextDark });

  page1.drawText("Cronograma Deseado:", { x: 330, y: currentY - 38, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText(data.timeline || "Flexible", { x: 420, y: currentY - 38, size: 8.5, font: fontRegular, color: cTextDark });

  page1.drawText("Canal de Envío:", { x: 330, y: currentY - 56, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText("Portal Web Oficial Renovo", { x: 420, y: currentY - 56, size: 8, font: fontOblique, color: cTextMuted });

  currentY -= (clientBoxHeight + 22);

  // 3. PROJECT SPECIFICATIONS SECTION
  page1.drawText("2. ALCANCE Y ESPECIFICACIONES DEL PROYECTO", {
    x: 40,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: cTerraCotta,
  });

  currentY -= 12;

  const specBoxHeight = 175;
  page1.drawRectangle({
    x: 40,
    y: currentY - specBoxHeight,
    width: width - 80,
    height: specBoxHeight,
    color: cBgCard,
    borderColor: cBorder,
    borderWidth: 1,
  });

  // Service Badge Box inside spec
  page1.drawRectangle({
    x: 55,
    y: currentY - 36,
    width: width - 110,
    height: 24,
    color: rgb(0.93, 0.88, 0.83),
    borderColor: cTerraCotta,
    borderWidth: 1,
  });

  page1.drawText("SERVICIO SOLICITADO:", { x: 65, y: currentY - 26, size: 7.5, font: fontBold, color: cTerraCotta });
  page1.drawText(data.serviceTitle.toUpperCase(), { x: 175, y: currentY - 26, size: 8.5, font: fontBold, color: cCharcoal });

  // Field: Dimensions / Scope
  page1.drawText("Medidas y Alcance:", { x: 55, y: currentY - 54, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText(data.dimensions || "A evaluar en sitio durante la visita técnica", {
    x: 170,
    y: currentY - 54,
    size: 8.5,
    font: fontRegular,
    color: cTextDark,
  });

  // Field: Desired Colors
  page1.drawText("Colores o Tonos:", { x: 55, y: currentY - 74, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText(data.desiredColors || "A definir con muestras físicas de taller", {
    x: 170,
    y: currentY - 74,
    size: 8.5,
    font: fontRegular,
    color: cTextDark,
  });

  // Field: Finish Type
  page1.drawText("Tipo de Acabado:", { x: 55, y: currentY - 94, size: 8, font: fontBold, color: cTextMuted });
  page1.drawText(data.finishType || "Laca de Poliuretano 2K Catalizada Industrial (Estándar Renovo)", {
    x: 170,
    y: currentY - 94,
    size: 8.5,
    font: fontRegular,
    color: cTextDark,
  });

  // Field: Notes
  page1.drawText("Notas Adicionales:", { x: 55, y: currentY - 116, size: 8, font: fontBold, color: cTextMuted });
  const notesText = data.notes && data.notes.trim().length > 0 ? data.notes.trim() : "Sin notas especiales agregadas por el cliente.";
  page1.drawText(notesText.slice(0, 180), {
    x: 55,
    y: currentY - 132,
    size: 8,
    font: fontRegular,
    color: cTextDark,
  });

  // Subtext in spec card
  const photosCount = data.photos ? data.photos.length : 0;
  page1.drawText(`Fotografías adjuntas por el cliente: ${photosCount} ${photosCount === 1 ? "foto" : "fotos"} (ver anexo visual)`, {
    x: 55,
    y: currentY - 162,
    size: 7.5,
    font: fontOblique,
    color: cTerraCotta,
  });

  currentY -= (specBoxHeight + 22);

  // 4. PROTOCOL & QUALITY COMMITMENT CARD
  page1.drawText("3. PROTOCOLO DE EVALUACIÓN & COMPROMISOS TÉCNICOS RENOVO", {
    x: 40,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: cTerraCotta,
  });

  currentY -= 12;

  const protocolBoxHeight = 110;
  page1.drawRectangle({
    x: 40,
    y: currentY - protocolBoxHeight,
    width: width - 80,
    height: protocolBoxHeight,
    color: cCharcoal,
  });

  page1.drawText("ESTÁNDAR DE EBANISTERÍA Y PINTURA FINA EN ARIZONA", {
    x: 55,
    y: currentY - 22,
    size: 8,
    font: fontBold,
    color: cGold,
  });

  const commitments = [
    "• Inspección en Sitio con Medición Láser: Raul Burgos verifica plomos y escuadras sin costo.",
    "• Acabados Catalizados 2K Industriales: Curado químico ultra liso inmune a grasa, vapor y calor.",
    "• Ebanistería Maciza: Fabricación en Roble Blanco, Hard Maple y Nogal. Cero aglomerado comercial.",
    "• Contención Limpia HEPA: Aislamiento hermético de áreas habitadas y extracción de polvo al 99.97%.",
  ];

  commitments.forEach((c, idx) => {
    page1.drawText(c, {
      x: 55,
      y: currentY - 40 - idx * 15,
      size: 7.5,
      font: fontRegular,
      color: rgb(0.92, 0.88, 0.84),
    });
  });

  currentY -= (protocolBoxHeight + 24);

  // 5. SIGNATURE & WORKSHOP STAMP
  page1.drawRectangle({
    x: 40,
    y: currentY - 50,
    width: 250,
    height: 50,
    color: cBgCard,
    borderColor: cBorder,
    borderWidth: 1,
  });

  page1.drawText("REVISIÓN TÉCNICA ASIGNADA A:", { x: 50, y: currentY - 18, size: 7, font: fontBold, color: cTextMuted });
  page1.drawText("Raul Burgos · Maestro Ebanista y Fundador", { x: 50, y: currentY - 32, size: 8, font: fontBold, color: cTextDark });
  page1.drawText("Tel. Directo: (602) 550-4369 · raul@renovoaz.com", { x: 50, y: currentY - 44, size: 7, font: fontRegular, color: cTerraCotta });

  page1.drawRectangle({
    x: width - 290,
    y: currentY - 50,
    width: 250,
    height: 50,
    color: cBgCard,
    borderColor: cBorder,
    borderWidth: 1,
  });

  page1.drawText("OFICINAS Y TALLER DE FABRICACIÓN:", { x: width - 280, y: currentY - 18, size: 7, font: fontBold, color: cTextMuted });
  page1.drawText("2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029", { x: width - 280, y: currentY - 32, size: 7.5, font: fontRegular, color: cTextDark });
  page1.drawText("Taller independiente sirviendo a todo el Valle del Sol", { x: width - 280, y: currentY - 44, size: 7, font: fontOblique, color: cTextMuted });

  // 6. PAGE 1 BOTTOM FOOTER BAR
  page1.drawRectangle({
    x: 0,
    y: 0,
    width: width,
    height: 24,
    color: cCharcoal,
  });

  page1.drawText("Renovo Painting Solutions LLC · Solicitud Oficial de Cotización · www.renovoaz.com", {
    x: 40,
    y: 8,
    size: 7,
    font: fontRegular,
    color: rgb(0.75, 0.70, 0.65),
  });

  page1.drawText(photosCount > 0 ? "Página 1 de 2" : "Página 1 de 1", {
    x: width - 90,
    y: 8,
    size: 7,
    font: fontBold,
    color: cGold,
  });

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

    page2.drawText("ANEXO FOTOGRÁFICO // FOTOGRAFÍAS DEL ESPACIO ACTUAL", {
      x: 40,
      y: height - 32,
      size: 11,
      font: fontBold,
      color: cWhite,
    });

    page2.drawText(`FOLIO DE SOLICITUD: ${data.quoteId} · CLIENTE: ${data.name.toUpperCase()}`, {
      x: 40,
      y: height - 48,
      size: 7.5,
      font: fontRegular,
      color: cGold,
    });

    page2.drawText("Imágenes capturadas por el cliente para la evaluación dimensional y cotización del taller.", {
      x: 40,
      y: height - 85,
      size: 8,
      font: fontOblique,
      color: cTextMuted,
    });

    // Embed up to 4 photos in a 2x2 grid
    const photoSlots = [
      { x: 40, y: height - 340, w: 250, h: 220 },
      { x: 320, y: height - 340, w: 250, h: 220 },
      { x: 40, y: height - 590, w: 250, h: 220 },
      { x: 320, y: height - 590, w: 250, h: 220 },
    ];

    for (let i = 0; i < Math.min(data.photos.length, 4); i++) {
      const photo = data.photos[i];
      const slot = photoSlots[i];

      try {
        let embeddedImage;
        if (photo.mimeType === "image/png" || photo.filename.toLowerCase().endsWith(".png")) {
          embeddedImage = await doc.embedPng(photo.buffer);
        } else {
          // Default to JPG
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
        const drawY = slot.y + 25 + (maxImgH - drawH) / 2;

        page2.drawImage(embeddedImage, {
          x: drawX,
          y: drawY,
          width: drawW,
          height: drawH,
        });

        // Caption
        page2.drawText(`Foto ${i + 1}: ${photo.filename.slice(0, 32)}`, {
          x: slot.x + 8,
          y: slot.y + 10,
          size: 7,
          font: fontBold,
          color: cTextDark,
        });
      } catch (embedError) {
        // Fallback placeholder if image format is unsupported
        page2.drawRectangle({
          x: slot.x,
          y: slot.y,
          width: slot.w,
          height: slot.h,
          color: cBgCard,
          borderColor: cBorder,
          borderWidth: 1,
        });
        page2.drawText(`[Foto ${i + 1}: Formato no soportado en vista previa]`, {
          x: slot.x + 15,
          y: slot.y + 100,
          size: 8,
          font: fontOblique,
          color: cTextMuted,
        });
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

    page2.drawText("Renovo Painting Solutions LLC · Anexo Fotográfico Oficial · Phoenix, Arizona", {
      x: 40,
      y: 8,
      size: 7,
      font: fontRegular,
      color: rgb(0.75, 0.70, 0.65),
    });

    page2.drawText("Página 2 de 2", {
      x: width - 90,
      y: 8,
      size: 7,
      font: fontBold,
      color: cGold,
    });
  }

  return await doc.save();
}
