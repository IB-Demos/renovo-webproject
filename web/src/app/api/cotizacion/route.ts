import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateQuotePdf, QuotePhotoAttachment } from "@/lib/pdf/generateQuotePdf";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const cityOrZip = (formData.get("cityOrZip") as string)?.trim() || "Phoenix Metro";
    const service = (formData.get("service") as string)?.trim() || "refacing";
    const serviceTitle = (formData.get("serviceTitle") as string)?.trim() || "Cabinet Refacing / Cambio de Puertas";
    const dimensions = (formData.get("dimensions") as string)?.trim() || "";
    const desiredColors = (formData.get("desiredColors") as string)?.trim() || "";
    const finishType = (formData.get("finishType") as string)?.trim() || "Laca 2K Catalizada Industrial";
    const timeline = (formData.get("timeline") as string)?.trim() || "1-2 meses";
    const notes = (formData.get("notes") as string)?.trim() || "";

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Nombre, correo y teléfono son obligatorios para generar la solicitud." },
        { status: 400 }
      );
    }

    // Process photo attachments
    const photoAttachments: QuotePhotoAttachment[] = [];
    const photoFiles = formData.getAll("photos") as File[];

    for (const file of photoFiles) {
      if (file && typeof file.arrayBuffer === "function" && file.size > 0) {
        // Enforce max 10MB per file
        if (file.size <= 10 * 1024 * 1024) {
          const buffer = Buffer.from(await file.arrayBuffer());
          photoAttachments.push({
            filename: file.name,
            buffer,
            mimeType: file.type || "image/jpeg",
          });
        }
      }
    }

    // Generate unique quote folio
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const quoteId = `RNV-PROP-${new Date().getFullYear()}-${randomSuffix}`;
    const createdAt = new Date().toLocaleString("es-MX", {
      timeZone: "America/Phoenix",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Generate publication-grade corporate PDF
    const pdfBytes = await generateQuotePdf({
      quoteId,
      name,
      email,
      phone,
      cityOrZip,
      service,
      serviceTitle,
      dimensions,
      desiredColors,
      finishType,
      timeline,
      notes,
      createdAt,
      photos: photoAttachments,
    });

    const pdfBuffer = Buffer.from(pdfBytes);

    // Send via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const fromAddress =
        process.env.RESEND_FROM_EMAIL || "Renovo Painting Solutions <consultas@haganesoft.com>";
      const toAddress =
        process.env.RESEND_NOTIFICATION_EMAIL || "raul@renovoaz.com";

      // 1. Notification Email to Raul Burgos with PDF Attached
      await resend.emails.send({
        from: fromAddress,
        to: [toAddress],
        replyTo: email,
        subject: `[Nueva Solicitud] ${name} · ${serviceTitle} (${quoteId})`,
        html: `
          <!DOCTYPE html>
          <html>
          <body style="font-family: Georgia, serif; background-color: #F4EFE6; padding: 24px; color: #1A1410;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #FCFAF7; border: 1px solid #DFD6C6; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
              
              <!-- Header Bar -->
              <div style="background-color: #1A1410; padding: 24px; border-bottom: 3px solid #C59B27; text-align: left;">
                <h1 style="color: #FCFAF7; font-size: 20px; margin: 0; font-weight: 600; letter-spacing: 0.5px;">RENOVO PAINTING SOLUTIONS</h1>
                <p style="color: #C59B27; font-size: 11px; margin: 4px 0 0; text-transform: uppercase; font-family: monospace; letter-spacing: 1px;">
                  Solicitud Oficial de Cotización de Proyecto // Taller Phoenix, AZ
                </p>
              </div>

              <!-- Main Content -->
              <div style="padding: 28px;">
                <div style="background-color: #F4EFE6; border: 1px solid #DFD6C6; border-radius: 12px; padding: 14px 18px; margin-bottom: 22px;">
                  <span style="font-size: 11px; font-family: monospace; color: #B85D3B; font-weight: bold; text-transform: uppercase;">FOLIO ASIGNADO:</span>
                  <div style="font-size: 16px; font-weight: bold; color: #1A1410;">${quoteId}</div>
                  <div style="font-size: 11px; color: #615245; margin-top: 2px;">Recibido: ${createdAt} (Hora Phoenix)</div>
                </div>

                <h2 style="font-size: 16px; color: #B85D3B; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-bottom: 1px solid #EAE2D5; padding-bottom: 6px;">
                  1. Datos del Cliente
                </h2>
                <ul style="list-style: none; padding: 0; margin: 0 0 20px; font-size: 14px; line-height: 1.6;">
                  <li><strong>Nombre:</strong> ${name}</li>
                  <li><strong>Teléfono:</strong> <a href="tel:${phone}" style="color: #B85D3B; text-decoration: none; font-weight: bold;">${phone}</a></li>
                  <li><strong>Correo:</strong> <a href="mailto:${email}" style="color: #B85D3B;">${email}</a></li>
                  <li><strong>Ciudad / C.P.:</strong> ${cityOrZip}</li>
                  <li><strong>Cronograma Deseado:</strong> ${timeline}</li>
                </ul>

                <h2 style="font-size: 16px; color: #B85D3B; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-bottom: 1px solid #EAE2D5; padding-bottom: 6px;">
                  2. Alcance & Especificaciones
                </h2>
                <ul style="list-style: none; padding: 0; margin: 0 0 20px; font-size: 14px; line-height: 1.6;">
                  <li><strong>Servicio:</strong> <span style="background-color: #EAE2D5; padding: 2px 8px; border-radius: 6px; font-weight: bold;">${serviceTitle}</span></li>
                  <li><strong>Medidas / Espacio:</strong> ${dimensions || "No indicadas (inspeccionar en sitio)"}</li>
                  <li><strong>Colores / Tonos Deseados:</strong> ${desiredColors || "A definir con muestras físicas"}</li>
                  <li><strong>Acabado:</strong> ${finishType}</li>
                  <li><strong>Notas del Cliente:</strong> ${notes || "Sin comentarios adicionales"}</li>
                  <li><strong>Fotos Adjuntas:</strong> ${photoAttachments.length} archivo(s)</li>
                </ul>

                <!-- PDF Attachment Notice -->
                <div style="background-color: #EBF3EA; border: 1px solid #B8D8B4; border-radius: 12px; padding: 14px; margin-top: 20px; text-align: center;">
                  <strong style="color: #2E6B4E; font-size: 13px;">✓ Documento PDF Corporativo Adjunto</strong>
                  <p style="margin: 4px 0 0; font-size: 12px; color: #3D3228;">
                    Se ha adjuntado el archivo <strong>Renovo-Solicitud-${quoteId}.pdf</strong> listo para imprimir o archivar.
                  </p>
                </div>

                <!-- Action Button for Raul -->
                <div style="margin-top: 28px; text-align: center;">
                  <a href="tel:${phone}" style="display: inline-block; background-color: #B85D3B; color: #FCFAF7; text-decoration: none; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; padding: 14px 28px; border-radius: 50px;">
                    Llamar al Cliente Directamente
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #F4EFE6; padding: 16px; text-align: center; font-size: 11px; color: #7A6E63; border-top: 1px solid #DFD6C6;">
                Renovo Painting Solutions · 2231 W Shangri La Rd, Phoenix, AZ · (602) 550-4369
              </div>
            </div>
          </body>
          </html>
        `,
        attachments: [
          {
            filename: `Renovo-Solicitud-${quoteId}.pdf`,
            content: pdfBuffer,
          },
        ],
      });

      // 2. Courtesy Confirmation Email to Client with the PDF Attached
      try {
        await resend.emails.send({
          from: fromAddress,
          to: [email],
          subject: `Tu Solicitud de Proyecto con Renovo (${quoteId})`,
          html: `
            <!DOCTYPE html>
            <html>
            <body style="font-family: Georgia, serif; background-color: #F4EFE6; padding: 24px; color: #1A1410;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #FCFAF7; border: 1px solid #DFD6C6; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
                <div style="background-color: #1A1410; padding: 24px; border-bottom: 3px solid #C59B27; text-align: left;">
                  <h1 style="color: #FCFAF7; font-size: 20px; margin: 0; font-weight: 600;">RENOVO PAINTING SOLUTIONS</h1>
                  <p style="color: #C59B27; font-size: 11px; margin: 4px 0 0; font-family: monospace; letter-spacing: 1px;">
                    TALLER DE EBANISTERÍA & PINTURA FINA · PHOENIX, AZ
                  </p>
                </div>
                <div style="padding: 28px;">
                  <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
                    Estimado(a) <strong>${name}</strong>,
                  </p>
                  <p style="font-size: 14px; line-height: 1.6; color: #3D3228; margin: 0 0 16px;">
                    Hemos recibido con éxito tu solicitud para <strong>${serviceTitle}</strong> con folio <strong>${quoteId}</strong>.
                  </p>
                  <p style="font-size: 14px; line-height: 1.6; color: #3D3228; margin: 0 0 20px;">
                    Adjunto a este correo encontrarás el documento corporativo en PDF con el resumen completo de tu proyecto. El fundador y maestro ebanista <strong>Raul Burgos</strong> revisará personalmente tus especificaciones y fotos para preparar una propuesta precisa y transparente.
                  </p>
                  <div style="background-color: #F4EFE6; border: 1px solid #DFD6C6; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                    <div style="font-size: 12px; color: #54463A; margin-bottom: 4px;">¿Tienes planos o preguntas inmediatas?</div>
                    <div style="font-size: 15px; font-weight: bold; color: #1A1410;">Llama a Raul Burgos: <a href="tel:+16025504369" style="color: #B85D3B; text-decoration: none;">(602) 550-4369</a></div>
                    <div style="font-size: 12px; color: #615245; margin-top: 4px;">Taller: 2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029</div>
                  </div>
                  <p style="font-size: 13px; color: #54463A; margin: 0;">
                    Atentamente,<br>
                    <strong>Raul Burgos & Equipo Renovo</strong>
                  </p>
                </div>
              </div>
            </body>
            </html>
          `,
          attachments: [
            {
              filename: `Renovo-Solicitud-${quoteId}.pdf`,
              content: pdfBuffer,
            },
          ],
        });
      } catch (clientEmailErr) {
        console.warn("Could not send copy to client email:", clientEmailErr);
      }
    }

    return NextResponse.json({
      success: true,
      quoteId,
      pdfBase64: pdfBuffer.toString("base64"),
      message: "Solicitud generada y enviada a Raul Burgos con éxito.",
    });
  } catch (error: any) {
    console.error("Error in /api/cotizacion:", error);
    return NextResponse.json(
      { error: error?.message || "Ocurrió un error al procesar la solicitud de cotización." },
      { status: 500 }
    );
  }
}
