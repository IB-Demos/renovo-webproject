import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateQuotePdf, QuotePhotoAttachment } from "@/lib/pdf/generateQuotePdf";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const locale = (formData.get("locale") as string)?.trim() === "es" ? "es" : "en";
    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const cityOrZip = (formData.get("cityOrZip") as string)?.trim() || (locale === "es" ? "Valle de Phoenix" : "Phoenix Metro");
    const service = (formData.get("service") as string)?.trim() || "refacing";
    const serviceTitle = (formData.get("serviceTitle") as string)?.trim() || (locale === "es" ? "Cabinet Refacing" : "Cabinet Refacing");
    const dimensions = (formData.get("dimensions") as string)?.trim() || "";
    const desiredColors = (formData.get("desiredColors") as string)?.trim() || "";
    const finishType = (formData.get("finishType") as string)?.trim() || (locale === "es" ? "Laca 2K Catalizada Industrial" : "2K Catalyzed Industrial Polyurethane");
    const timeline = (formData.get("timeline") as string)?.trim() || (locale === "es" ? "1-2 meses" : "1-2 months");
    const notes = (formData.get("notes") as string)?.trim() || "";

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          error:
            locale === "es"
              ? "Nombre, correo y teléfono son obligatorios para generar la propuesta."
              : "Name, email, and phone number are required to generate your proposal.",
        },
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
    const createdAt = new Date().toLocaleString(locale === "es" ? "es-MX" : "en-US", {
      timeZone: "America/Phoenix",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Generate publication-grade architectural proposal PDF
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
      locale,
      photos: photoAttachments,
    });

    const pdfBuffer = Buffer.from(pdfBytes);
    const pdfFilename =
      locale === "es"
        ? `Renovo-Propuesta-${quoteId}.pdf`
        : `Renovo-Proposal-${quoteId}.pdf`;

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
        subject:
          locale === "es"
            ? `[Nueva Propuesta de Proyecto] ${name} · ${serviceTitle} (${quoteId})`
            : `[New Project Proposal Request] ${name} · ${serviceTitle} (${quoteId})`,
        html: `
          <!DOCTYPE html>
          <html>
          <body style="font-family: Georgia, serif; background-color: #F4EFE6; padding: 24px; color: #1A1410;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #FCFAF7; border: 1px solid #DFD6C6; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
              
              <!-- Header Bar -->
              <div style="background-color: #1A1410; padding: 24px; border-bottom: 3px solid #C59B27; text-align: left;">
                <h1 style="color: #FCFAF7; font-size: 20px; margin: 0; font-weight: 600; letter-spacing: 0.5px;">RENOVO PAINTING SOLUTIONS</h1>
                <p style="color: #C59B27; font-size: 11px; margin: 4px 0 0; text-transform: uppercase; font-family: monospace; letter-spacing: 1px;">
                  ${locale === "es" ? "Solicitud Formal de Propuesta de Proyecto · Taller Phoenix, AZ" : "Official Project Proposal Request · Phoenix Workshop, AZ"}
                </p>
              </div>

              <!-- Main Content -->
              <div style="padding: 28px;">
                <div style="background-color: #F4EFE6; border: 1px solid #DFD6C6; border-radius: 12px; padding: 14px 18px; margin-bottom: 22px;">
                  <span style="font-size: 11px; font-family: monospace; color: #B85D3B; font-weight: bold; text-transform: uppercase;">FOLIO ASIGNADO / TRACKING:</span>
                  <div style="font-size: 16px; font-weight: bold; color: #1A1410;">${quoteId}</div>
                  <div style="font-size: 11px; color: #615245; margin-top: 2px;">Recibido: ${createdAt} (Hora Phoenix) · Idioma: ${locale.toUpperCase()}</div>
                </div>

                <h2 style="font-size: 16px; color: #B85D3B; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-bottom: 1px solid #EAE2D5; padding-bottom: 6px;">
                  1. ${locale === "es" ? "Datos del Cliente" : "Client Contact Details"}
                </h2>
                <ul style="list-style: none; padding: 0; margin: 0 0 20px; font-size: 14px; line-height: 1.6;">
                  <li><strong>${locale === "es" ? "Nombre" : "Client Name"}:</strong> ${name}</li>
                  <li><strong>${locale === "es" ? "Teléfono" : "Phone"}:</strong> <a href="tel:${phone}" style="color: #B85D3B; text-decoration: none; font-weight: bold;">${phone}</a></li>
                  <li><strong>${locale === "es" ? "Correo" : "Email"}:</strong> <a href="mailto:${email}" style="color: #B85D3B;">${email}</a></li>
                  <li><strong>${locale === "es" ? "Ciudad / C.P." : "City / ZIP"}:</strong> ${cityOrZip}</li>
                  <li><strong>${locale === "es" ? "Cronograma Deseado" : "Target Timeline"}:</strong> ${timeline}</li>
                </ul>

                <h2 style="font-size: 16px; color: #B85D3B; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-bottom: 1px solid #EAE2D5; padding-bottom: 6px;">
                  2. ${locale === "es" ? "Alcance & Especificaciones" : "Scope & Craft Specifications"}
                </h2>
                <ul style="list-style: none; padding: 0; margin: 0 0 20px; font-size: 14px; line-height: 1.6;">
                  <li><strong>${locale === "es" ? "Servicio" : "Service"}:</strong> <span style="background-color: #EAE2D5; padding: 2px 8px; border-radius: 6px; font-weight: bold;">${serviceTitle}</span></li>
                  <li><strong>${locale === "es" ? "Medidas / Espacio" : "Dimensions / Layout"}:</strong> ${dimensions || (locale === "es" ? "Inspeccionar en sitio" : "To verify on site")}</li>
                  <li><strong>${locale === "es" ? "Color / Tono Deseado" : "Specified Color / Wood"}:</strong> ${desiredColors || (locale === "es" ? "A definir con muestras físicas" : "Physical samples review")}</li>
                  <li><strong>${locale === "es" ? "Acabado" : "Finish Sheen"}:</strong> ${finishType}</li>
                  <li><strong>${locale === "es" ? "Notas del Cliente" : "Client Notes"}:</strong> ${notes || (locale === "es" ? "Sin comentarios adicionales" : "None")}</li>
                  <li><strong>${locale === "es" ? "Fotos Adjuntas" : "Attached Photos"}:</strong> ${photoAttachments.length} ${locale === "es" ? "archivo(s)" : "file(s)"}</li>
                </ul>

                <!-- PDF Attachment Notice -->
                <div style="background-color: #EBF3EA; border: 1px solid #B8D8B4; border-radius: 12px; padding: 14px; margin-top: 20px; text-align: center;">
                  <strong style="color: #2E6B4E; font-size: 13px;">✓ ${locale === "es" ? "Propuesta Formal en PDF Adjunta" : "Official Proposal PDF Attached"}</strong>
                  <p style="margin: 4px 0 0; font-size: 12px; color: #3D3228;">
                    ${locale === "es" ? `Se adjuntó el archivo <strong>${pdfFilename}</strong> listo para imprimir o revisar.` : `Attached <strong>${pdfFilename}</strong> ready for printing or review.`}
                  </p>
                </div>

                <!-- Action Button for Raul -->
                <div style="margin-top: 28px; text-align: center;">
                  <a href="tel:${phone}" style="display: inline-block; background-color: #B85D3B; color: #FCFAF7; text-decoration: none; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; padding: 14px 28px; border-radius: 50px;">
                    ${locale === "es" ? "Llamar al Cliente Directamente" : "Call Client Directly"}
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
            filename: pdfFilename,
            content: pdfBuffer,
          },
        ],
      });

      // 2. Courtesy Confirmation Email to Client with the PDF Attached
      try {
        const clientSubject =
          locale === "es"
            ? `Tu Propuesta de Proyecto con Renovo (${quoteId})`
            : `Your Renovo Project Proposal & Specifications (${quoteId})`;

        const clientHtml =
          locale === "es"
            ? `
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
                    Adjunto a este correo encontrarás el documento oficial de tu propuesta en PDF con el resumen completo de tu proyecto. El maestro ebanista y fundador <strong>Raul Burgos</strong> revisará personalmente tus especificaciones y fotos para preparar una cotización precisa y transparente.
                  </p>
                  <div style="background-color: #F4EFE6; border: 1px solid #DFD6C6; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                    <div style="font-size: 12px; color: #54463A; margin-bottom: 4px;">¿Tienes planos o preguntas inmediatas?</div>
                    <div style="font-size: 15px; font-weight: bold; color: #1A1410;">Llama a Raul Burgos: <a href="tel:+16025504369" style="color: #B85D3B; text-decoration: none;">(602) 550-4369</a></div>
                    <div style="font-size: 12px; color: #615245; margin-top: 4px;">Taller Phoenix: 2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029</div>
                  </div>
                  <p style="font-size: 13px; color: #54463A; margin: 0;">
                    Atentamente,<br>
                    <strong>Raul Burgos & Equipo Renovo</strong>
                  </p>
                </div>
              </div>
            </body>
            </html>
          `
            : `
            <!DOCTYPE html>
            <html>
            <body style="font-family: Georgia, serif; background-color: #F4EFE6; padding: 24px; color: #1A1410;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #FCFAF7; border: 1px solid #DFD6C6; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
                <div style="background-color: #1A1410; padding: 24px; border-bottom: 3px solid #C59B27; text-align: left;">
                  <h1 style="color: #FCFAF7; font-size: 20px; margin: 0; font-weight: 600;">RENOVO PAINTING SOLUTIONS</h1>
                  <p style="color: #C59B27; font-size: 11px; margin: 4px 0 0; font-family: monospace; letter-spacing: 1px;">
                    ARCHITECTURAL CABINETRY & FINE FINISHES · PHOENIX, AZ
                  </p>
                </div>
                <div style="padding: 28px;">
                  <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
                    Dear <strong>${name}</strong>,
                  </p>
                  <p style="font-size: 14px; line-height: 1.6; color: #3D3228; margin: 0 0 16px;">
                    We have successfully received your project specifications for <strong>${serviceTitle}</strong> with tracking folio <strong>${quoteId}</strong>.
                  </p>
                  <p style="font-size: 14px; line-height: 1.6; color: #3D3228; margin: 0 0 20px;">
                    Attached to this email you will find your official Renovo Proposal & Specifications PDF document. Master craftsman and owner <strong>Raul Burgos</strong> will personally inspect your measurements and photos to prepare a binding, transparent proposal.
                  </p>
                  <div style="background-color: #F4EFE6; border: 1px solid #DFD6C6; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                    <div style="font-size: 12px; color: #54463A; margin-bottom: 4px;">Direct Workshop Contact:</div>
                    <div style="font-size: 15px; font-weight: bold; color: #1A1410;">Call Raul Burgos: <a href="tel:+16025504369" style="color: #B85D3B; text-decoration: none;">(602) 550-4369</a></div>
                    <div style="font-size: 12px; color: #615245; margin-top: 4px;">Phoenix Workshop: 2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029</div>
                  </div>
                  <p style="font-size: 13px; color: #54463A; margin: 0;">
                    Warm regards,<br>
                    <strong>Raul Burgos & The Renovo Craftsmen</strong>
                  </p>
                </div>
              </div>
            </body>
            </html>
          `;

        await resend.emails.send({
          from: fromAddress,
          to: [email],
          subject: clientSubject,
          html: clientHtml,
          attachments: [
            {
              filename: pdfFilename,
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
      pdfFilename,
      message:
        locale === "es"
          ? "Propuesta generada y enviada a Raul Burgos con éxito."
          : "Proposal generated and dispatched to Raul Burgos successfully.",
    });
  } catch (error: any) {
    console.error("Error in /api/cotizacion:", error);
    return NextResponse.json(
      { error: error?.message || "Ocurrió un error al procesar la solicitud de cotización." },
      { status: 500 }
    );
  }
}
