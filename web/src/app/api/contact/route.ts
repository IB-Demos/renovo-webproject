import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();

    const {
      name,
      email,
      phone,
      service = "kitchens",
      location = "Phoenix Metro",
      timeline = "1-2-months",
      message = "",
      samples = [],
      source = "contact-page",
    } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required fields." },
        { status: 400 }
      );
    }

    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      "Renovo Painting Solutions <contact@renovoaz.com>";

    // Notification target (Raul and Renovo team)
    const toAddress =
      process.env.RESEND_NOTIFICATION_EMAIL || "raul@renovoaz.com";

    // Format human-friendly service names
    const serviceLabels: Record<string, string> = {
      kitchens: "Custom Kitchens & Cabinetry / Cocinas a Medida",
      furniture: "Custom Built-Ins & Millwork / Muebles a Medida",
      refacing: "2K Factory Cabinet Refinishing / Lacas Catalizadas 2K",
      painting: "Residential Painting / Pintura Residencial Integral",
    };

    const serviceDisplay = serviceLabels[service] || service;

    // Build samples list HTML if any samples were attached
    const samplesHtml =
      Array.isArray(samples) && samples.length > 0
        ? `
        <div style="margin-top: 24px; padding: 18px; background-color: #F4EFE6; border: 1px solid #DFD6C6; border-radius: 12px;">
          <h3 style="margin: 0 0 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #B85D3B; font-family: sans-serif;">
            🔖 Acabados Seleccionados por el Cliente (${samples.length} Muestras):
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 13px;">
            <thead>
              <tr style="border-bottom: 1px solid #DFD6C6; text-align: left; color: #54463A;">
                <th style="padding: 6px 0;">Código</th>
                <th style="padding: 6px 0;">Categoría</th>
                <th style="padding: 6px 0;">Acabado</th>
              </tr>
            </thead>
            <tbody>
              ${samples
                .map(
                  (s: any) => `
                <tr style="border-bottom: 1px solid #EAE2D5;">
                  <td style="padding: 8px 0; font-family: monospace; font-weight: bold; color: #1A1410;">${s.code || s.id}</td>
                  <td style="padding: 8px 0; text-transform: capitalize; color: #54463A;">${s.category || "Material"}</td>
                  <td style="padding: 8px 0; font-weight: 500; color: #1A1410;">
                    ${s.hex ? `<span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: ${s.hex}; vertical-align: middle; margin-right: 6px; border: 1px solid #ccc;"></span>` : ""}
                    ${typeof s.title === "object" ? s.title.en || s.title.es : s.title || s.name || ""}
                  </td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `
        : "";

    // 1. Send Internal Workshop Notification Email
    const internalEmail = await resend.emails.send({
      from: fromAddress,
      to: toAddress.split(",").map((s) => s.trim()),
      subject: `[Nueva Consulta Renovo] ${name} - ${serviceDisplay.split("/")[0].trim()} (${location})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <title>Nueva Consulta Renovo</title>
        </head>
        <body style="margin: 0; padding: 24px; font-family: Georgia, serif; background-color: #F4EFE6; color: #1A1410;">
          <div style="max-width: 620px; margin: 0 auto; background-color: #FCFAF7; border: 1px solid #DFD6C6; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
            
            <!-- HEADER -->
            <div style="background-color: #1A1410; padding: 24px 32px; border-bottom: 3px solid #C59B27;">
              <span style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #C59B27; font-family: monospace; display: block; margin-bottom: 6px;">
                RENOVO PAINTING SOLUTIONS · ARCHITECTURAL INQUIRY
              </span>
              <h1 style="margin: 0; color: #FCFAF7; font-size: 24px; font-weight: normal; font-family: Georgia, serif;">
                Nueva Solicitud de Consulta en Sitio
              </h1>
            </div>

            <!-- CONTENT -->
            <div style="padding: 32px;">
              <p style="font-size: 15px; line-height: 1.6; color: #3D3228; margin: 0 0 24px;">
                Se ha recibido una nueva solicitud a través del sitio web para el taller de Phoenix. A continuación los detalles del cliente:
              </p>

              <!-- CLIENT CARD -->
              <div style="background-color: #F4EFE6; border: 1px solid #DFD6C6; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px;">
                  <tr>
                    <td style="padding: 6px 0; color: #54463A; width: 140px; font-weight: bold;">Cliente:</td>
                    <td style="padding: 6px 0; color: #1A1410; font-weight: bold; font-size: 16px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #54463A; font-weight: bold;">Teléfono:</td>
                    <td style="padding: 6px 0;">
                      <a href="tel:${phone}" style="color: #B85D3B; text-decoration: none; font-weight: bold;">${phone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #54463A; font-weight: bold;">Correo:</td>
                    <td style="padding: 6px 0;">
                      <a href="mailto:${email}" style="color: #B85D3B; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #54463A; font-weight: bold;">Ciudad / Zona:</td>
                    <td style="padding: 6px 0; color: #1A1410;">${location}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #54463A; font-weight: bold;">Servicio:</td>
                    <td style="padding: 6px 0; color: #1A1410; font-weight: 600;">${serviceDisplay}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #54463A; font-weight: bold;">Tiempo Estimado:</td>
                    <td style="padding: 6px 0; color: #1A1410;">${timeline}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #54463A; font-weight: bold;">Origen:</td>
                    <td style="padding: 6px 0; color: #7A6B5D; font-size: 12px;">${source}</td>
                  </tr>
                </table>
              </div>

              <!-- MESSAGE -->
              ${
                message
                  ? `
                <div style="margin-bottom: 24px;">
                  <h3 style="font-size: 13px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #54463A; margin: 0 0 8px;">
                    Mensaje / Visión del Proyecto:
                  </h3>
                  <div style="padding: 16px; background-color: #FFF; border-left: 3px solid #B85D3B; border-radius: 4px; font-style: italic; color: #261F1A; font-size: 14px; line-height: 1.6;">
                    "${message}"
                  </div>
                </div>
              `
                  : ""
              }

              <!-- SAMPLES LIST -->
              ${samplesHtml}

              <!-- ACTIONS -->
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #DFD6C6; text-align: center;">
                <a href="tel:${phone}" style="display: inline-block; padding: 12px 28px; background-color: #B85D3B; color: #FCFAF7; text-decoration: none; border-radius: 50px; font-family: sans-serif; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-right: 12px;">
                  Llamar a ${name}
                </a>
                <a href="mailto:${email}" style="display: inline-block; padding: 12px 28px; background-color: #1A1410; color: #FCFAF7; text-decoration: none; border-radius: 50px; font-family: sans-serif; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                  Responder por Correo
                </a>
              </div>
            </div>

            <!-- FOOTER -->
            <div style="background-color: #EAE2D5; padding: 16px 32px; font-size: 12px; color: #54463A; text-align: center; border-top: 1px solid #DFD6C6; font-family: sans-serif;">
              Renovo Painting Solutions · 2231 W Shangri La Rd, Phoenix, AZ 85029 · (602) 550-4369
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // 2. Also send Client Confirmation Email
    try {
      await resend.emails.send({
        from: fromAddress,
        to: email,
        subject: `Your Renovo Consultation Request has been Received / Solicitud Recibida`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8" />
            <title>Renovo Consultation Request</title>
          </head>
          <body style="margin: 0; padding: 24px; font-family: Georgia, serif; background-color: #F4EFE6; color: #1A1410;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #FCFAF7; border: 1px solid #DFD6C6; border-radius: 16px; overflow: hidden;">
              <div style="background-color: #1A1410; padding: 28px 32px; text-align: center; border-bottom: 3px solid #C59B27;">
                <h1 style="margin: 0; color: #FCFAF7; font-size: 22px; font-weight: normal; letter-spacing: 1px;">
                  RENOVO PAINTING SOLUTIONS
                </h1>
                <p style="margin: 6px 0 0; font-size: 11px; color: #C59B27; font-family: monospace; letter-spacing: 2px;">
                  PHOENIX, ARIZONA · LUXURY FINISHES & CABINETRY
                </p>
              </div>

              <div style="padding: 32px; line-height: 1.6; color: #3D3228;">
                <h2 style="font-size: 20px; color: #1A1410; margin-top: 0;">
                  Thank you, ${name}.
                </h2>
                <p style="font-size: 15px;">
                  We have successfully received your inquiry for <strong>${serviceDisplay.split("/")[0].trim()}</strong> in ${location}.
                </p>
                <p style="font-size: 14px; color: #54463A;">
                  Master craftsman Raul Burgos or our senior project estimator will review your specifications and contact you at <strong>${phone}</strong> within one business day to discuss project details and schedule your on-site consultation.
                </p>
                <div style="margin: 24px 0; padding: 16px; background-color: #F4EFE6; border-radius: 8px; font-size: 13px; color: #54463A; font-family: sans-serif;">
                  <strong>Need immediate assistance?</strong><br />
                  Call Raul directly at <a href="tel:6025504369" style="color: #B85D3B; text-decoration: none; font-weight: bold;">(602) 550-4369</a> or visit our workshop at 2231 W Shangri La Rd, Phoenix, AZ.
                </div>
                <p style="font-size: 13px; color: #7A6B5D; margin-bottom: 0;">
                  Warm regards,<br />
                  <strong style="color: #1A1410;">The Renovo Team</strong>
                </p>
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #DFD6C6; font-size: 11px; color: #7A6E63; line-height: 1.5; font-family: sans-serif;">
                  <p style="margin: 0 0 6px;">Renovo Painting Solutions LLC · 2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029 · ROC Licensed & Insured</p>
                  <p style="margin: 0;">
                    To manage your communication preferences or request total data deletion, visit our <a href="https://www.renovoaz.com/privacidad#baja-comunicaciones" style="color: #B85D3B; text-decoration: underline;">Privacy Policy</a> or reply to this email with "Unsubscribe".
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    } catch (clientEmailErr) {
      // Don't fail the submission if customer confirmation email has issues
      console.warn("Client confirmation email could not be sent:", clientEmailErr);
    }

    return NextResponse.json({
      success: true,
      messageId: internalEmail.data?.id,
    });
  } catch (err: any) {
    console.error("Error sending contact email via Resend:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
