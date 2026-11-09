import { NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";

export const runtime = "nodejs";

// Comprehensive knowledge base for fallback engine
const RENOVO_KNOWLEDGE = {
  phone: "(602) 550-4369",
  phoneHref: "tel:+16025504369",
  address: "2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029",
  founder: "Raul Burgos",
  services: {
    refacing: {
      en: "Cabinet Refacing: We preserve your existing solid cabinet boxes and replace all doors and drawer fronts with custom-milled solid hardwoods (White Oak, Walnut, Maple). Face frames are spray-coated on site with catalyzed 2K polyurethane. It saves 40-50% vs a full tear-out.",
      es: "Cabinet Refacing: Conservamos los marcos y cajas existentes que están en buen estado y reemplazamos todas las puertas y frentes de cajón con piezas nuevas a medida en madera maciza (Roble Blanco, Nogal, Maple). Los marcos se esmaltan en sitio con laca 2K. Ahorra 40-50% respecto a demoler todo.",
    },
    paint2k: {
      en: "2K Factory Spray Refinishing: Doors and drawer fronts are removed and transported to our Shangri La Rd spray booth for factory-grade 2K catalyzed polyurethane application. Zero brush marks, heat-resistant, grease-resistant, and won't peel or chip.",
      es: "Esmaltado de Fábrica con Laca 2K: Retiramos puertas y cajones a nuestra cabina de pintura en Shangri La Rd para aplicar poliuretano industrial catalizado 2K. Acabado ultra terso de fábrica, sin marcas de brocha, resistente al calor, vapor y grasa caliente.",
    },
    custom: {
      en: "Custom Kitchens & Architectural Millwork: Complete custom manufacturing from scratch. Solid hardwood boxes, dovetail drawer construction, soft-close Blum hardware, range hoods, and custom islands tailored to your floor plan.",
      es: "Cocinas a Medida y Carpintería de Autor: Fabricación completa desde cero. Cajas en madera maciza, ensamble cola de milano, herrajes europeos Blum de cierre suave, campanas arquitectónicas e islas centrales personalizadas.",
    },
    residential: {
      en: "Fine Residential Painting: Full interior and exterior architectural painting with dustless sanding, sharp laser caulk lines, and premium zero-VOC primers.",
      es: "Pintura Residencial Fina: Pintura arquitectónica interior y exterior de alta gama con lijado libre de polvo, sellado perimetral impecable y primarios premium.",
    },
  },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      message = "",
      history = [],
      locale = "en",
      leadInfo = null,
    } = body;

    const trimmedMsg = String(message).trim();
    const lowerMsg = trimmedMsg.toLowerCase();

    // 0. INTELLIGENT BILINGUAL DETECTION (User's input language takes absolute priority)
    const spanishSignals = [
      "hola", "buen", "dia", "dias", "días", "tarde", "tardes", "noche", "noches",
      "cotiz", "presupuesto", "precio", "cuanto", "cuánto", "costo",
      "hablen", "llamen", "llamar", "marcar", "llamada", "telefono", "teléfono",
      "numero", "número", "correo", "madera", "puerta", "puertas",
      "cocina", "cocinas", "gabinete", "gabinetes", "refacing", "laca", "pintar",
      "gracias", "favor", "quiero", "necesito", "interesa", "prefiero", "visita"
    ];

    const isSpanish = spanishSignals.some((sig) => lowerMsg.includes(sig));
    const activeLocale = isSpanish ? "es" : (locale === "es" ? "es" : "en");

    // 1. AUTOMATIC EXTRACTION OF PHONE & EMAIL FROM FREE-TEXT MESSAGE
    const phoneRegex = /(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/;
    const phoneMatch = trimmedMsg.match(phoneRegex);

    const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    const emailMatch = trimmedMsg.match(emailRegex);

    const extractedPhone = leadInfo?.phone || (phoneMatch ? phoneMatch[0] : "");
    const extractedEmail = leadInfo?.email || (emailMatch ? emailMatch[0] : "");
    const extractedName = leadInfo?.name || "";

    // 2. LEAD DISPATCH VIA RESEND (Guaranteed direct notification to Raul whenever contact info is present)
    let leadCaptured = false;
    if (extractedPhone || extractedEmail) {
      try {
        const apiKey = process.env.RESEND_API_KEY;
        if (apiKey) {
          const resend = new Resend(apiKey);
          const fromAddress =
            process.env.RESEND_FROM_EMAIL || "Renovo Painting Solutions <contact@renovoaz.com>";
          const toAddress =
            process.env.RESEND_NOTIFICATION_EMAIL || "raul@renovoaz.com";

          await resend.emails.send({
            from: fromAddress,
            to: [toAddress],
            replyTo: extractedEmail || undefined,
            subject: `[Lead Chatbot Renovo] ${extractedName || "Cliente Interesado"} - ${extractedPhone || extractedEmail}`,
            html: `
              <div style="font-family: Georgia, serif; padding: 20px; background-color: #F4EFE6; color: #1A1410;">
                <div style="max-width: 550px; margin: 0 auto; background-color: #FCFAF7; border: 1px solid #DFD6C6; border-radius: 12px; padding: 24px;">
                  <h2 style="color: #B85D3B; margin-top: 0;">Nuevo Contacto Recibido en Chatbot Renovo</h2>
                  <p>Un cliente ha solicitado información o contacto a través del asistente virtual de la web:</p>
                  <ul style="line-height: 1.8;">
                    <li><strong>Nombre:</strong> ${extractedName || "No especificado"}</li>
                    <li><strong>Teléfono:</strong> <a href="tel:${extractedPhone}">${extractedPhone || "No especificado"}</a></li>
                    <li><strong>Correo:</strong> ${extractedEmail ? `<a href="mailto:${extractedEmail}">${extractedEmail}</a>` : "No especificado"}</li>
                    <li><strong>Mensaje / Solicitud:</strong> ${trimmedMsg || leadInfo?.notes || "Consulta general"}</li>
                    <li><strong>Idioma del usuario:</strong> ${activeLocale.toUpperCase()}</li>
                    <li><strong>Fecha:</strong> ${new Date().toLocaleString("es-MX", { timeZone: "America/Phoenix" })} (Phoenix, AZ)</li>
                  </ul>
                  <p style="font-size: 12px; color: #7A6E63; margin-top: 20px; border-top: 1px solid #DFD6C6; padding-top: 10px;">
                    Enviado desde el Asistente Concierge de Renovo (2231 W Shangri La Rd, Phoenix, AZ).
                  </p>
                </div>
              </div>
            `,
          });
          leadCaptured = true;
        }
      } catch (emailErr) {
        console.warn("Could not dispatch chatbot lead email via Resend:", emailErr);
      }
    }

    // If contact details were captured, return immediate confirmation confirming the details!
    if (leadCaptured) {
      const reply =
        activeLocale === "es"
          ? `¡Excelente! He registrado tus datos de contacto${extractedPhone ? ` (Teléfono: **${extractedPhone}**)` : ""}${extractedEmail ? ` (Correo: **${extractedEmail}**)` : ""} y se los acabo de enviar directamente a **Raul Burgos**.\n\nRaul se comunicará contigo a la brevedad para coordinar tu asesoría y medición láser en sitio sin costo con muestras físicas de acabados.\n\n¿Hay algún detalle específico de tu cocina o gabinetes que te gustaría que tenga en cuenta?`
          : `Fantastic! I have securely recorded your contact details${extractedPhone ? ` (Phone: **${extractedPhone}**)` : ""}${extractedEmail ? ` (Email: **${extractedEmail}**)` : ""} and dispatched them directly to **Raul Burgos**.\n\nRaul will reach out to you shortly to coordinate your complimentary in-home laser measurement with physical finish samples.\n\nIs there any specific detail about your cabinetry or timeline you would like him to have ready?`;

      return NextResponse.json({
        reply,
        leadCaptured: true,
        source: "resend-direct",
      });
    }

    // 3. IF MAKE.COM WEBHOOK IS CONFIGURED, CALL MAKE.COM (With bounded 6s timeout)
    const makeWebhookUrl = process.env.MAKE_CHATBOT_WEBHOOK_URL;
    if (makeWebhookUrl && makeWebhookUrl.startsWith("http")) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const makeRes = await fetch(makeWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            message: trimmedMsg,
            history,
            locale: activeLocale,
            language: activeLocale === "es" ? "Spanish" : "English",
            languageCode: activeLocale === "es" ? "es-MX" : "en-US",
            leadInfo: {
              name: extractedName,
              phone: extractedPhone,
              email: extractedEmail,
              notes: leadInfo?.notes || "",
            },
            timestamp: new Date().toISOString(),
          }),
        });

        clearTimeout(timeoutId);

        if (makeRes.ok) {
          const makeData = await makeRes.json().catch(() => null);
          if (makeData && (makeData.reply || makeData.message)) {
            return NextResponse.json({
              reply: makeData.reply || makeData.message,
              leadCaptured: Boolean(makeData.leadCaptured),
              source: "make.com",
            });
          }
        }
      } catch (makeErr) {
        console.warn("Make.com webhook failed or timed out, falling back to local engine:", makeErr);
      }
    }

    // 4. INTELLIGENT BUILT-IN CRAFTSMAN KNOWLEDGE ENGINE
    let reply = "";

    if (
      lowerMsg.includes("refacing") ||
      lowerMsg.includes("cambiar puertas") ||
      lowerMsg.includes("frentes") ||
      lowerMsg.includes("reemplazar puertas")
    ) {
      reply =
        activeLocale === "es"
          ? `**Cabinet Refacing (Renovación de Puertas):**\n\n${RENOVO_KNOWLEDGE.services.refacing.es}\n\nEs ideal si la estructura de tus gabinetes está sólida y solo quieres modernizar el estilo a puertas shaker, planas europeas o de madera maciza.\n\n¿Te gustaría calcular un presupuesto formal con tus medidas en nuestro [Cotizador Oficial](/cotizador)?`
          : `**Cabinet Refacing (Door Replacement):**\n\n${RENOVO_KNOWLEDGE.services.refacing.en}\n\nIt's the most cost-effective choice if your cabinet layout and boxes are in good condition.\n\nWould you like to build an itemized estimate in our [Official Proposal Generator](/cotizador)?`;
    } else if (
      lowerMsg.includes("2k") ||
      lowerMsg.includes("laca") ||
      lowerMsg.includes("pintar") ||
      lowerMsg.includes("spray") ||
      lowerMsg.includes("paint") ||
      lowerMsg.includes("esmaltado") ||
      lowerMsg.includes("acabado")
    ) {
      reply =
        activeLocale === "es"
          ? `**Acabado Industrial de Fábrica con Laca Catalizada 2K:**\n\n${RENOVO_KNOWLEDGE.services.paint2k.es}\n\nNo usamos pintura de muro tradicional. Nuestro recubrimiento cura químicamente creando un escudo suave al tacto (disponible en 18% Satinado o 5% Ultra-Mate) que no se descascara.\n\nPuedes ver fotos reales de este acabado en nuestro [Catálogo de Gabinetes](/cocinas-y-gabinetes).`
          : `**2K Industrial Factory Polyurethane Spray:**\n\n${RENOVO_KNOWLEDGE.services.paint2k.en}\n\nWe never use standard wall latex. Catalyzed 2K chemistry cures with a hardening agent to produce a silky, non-porous finish in 18% Satin or 5% Ultra-Matte that resists heavy culinary use.\n\nExplore real Phoenix transformations in our [Cabinetry Portfolio](/cocinas-y-gabinetes).`;
    } else if (
      lowerMsg.includes("cost") ||
      lowerMsg.includes("precio") ||
      lowerMsg.includes("cotiz") ||
      lowerMsg.includes("quote") ||
      lowerMsg.includes("cuanto") ||
      lowerMsg.includes("cuánto") ||
      lowerMsg.includes("how much") ||
      lowerMsg.includes("presupuesto")
    ) {
      reply =
        activeLocale === "es"
          ? `**Precios y Cotizaciones Transparentes:**\n\nEn Renovo tratas directamente con el dueño y artesano Raul Burgos—cero comisiones de intermediarios. Cada proyecto incluye medición láser en sitio sin costo y muestras físicas de acabado.\n\nPuedes generar tu presupuesto inmediato en nuestro [Cotizador en Línea](/cotizador), o simplemente déjame aquí tu nombre y teléfono y Raul se pondrá en contacto contigo.`
          : `**Transparent Direct Craftsman Pricing:**\n\nYou deal directly with owner Raul Burgos—zero middleman markups or sales commissions. Every estimate includes a complimentary in-home laser measure and physical finish samples.\n\nYou can generate an immediate proposal in our [Online Quote System](/cotizador), or simply leave your name and phone number here and Raul will reach out!`;
    } else if (
      lowerMsg.includes("taller") ||
      lowerMsg.includes("donde") ||
      lowerMsg.includes("dónde") ||
      lowerMsg.includes("ubicac") ||
      lowerMsg.includes("address") ||
      lowerMsg.includes("workshop") ||
      lowerMsg.includes("location")
    ) {
      reply =
        activeLocale === "es"
          ? `**Taller y Cabina de Pintura:**\n\n📍 **Dirección:** ${RENOVO_KNOWLEDGE.address}\n📞 **Teléfono directo:** [${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})\n\nAtendemos todo el Valle de Phoenix: Scottsdale, Paradise Valley, Peoria, Glendale, Arcadia, Cave Creek, Chandler y Gilbert. Retiramos las piezas a taller para esmaltado y preparamos los marcos en sitio con contención sellada sin polvo.`
          : `**Phoenix Workshop & Spray Booth:**\n\n📍 **Address:** ${RENOVO_KNOWLEDGE.address}\n📞 **Direct Line:** [${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})\n\nWe serve the entire Phoenix Metro area including Scottsdale, Paradise Valley, Peoria, Glendale, Arcadia, and Chandler. We handle off-site booth spraying and on-site sealed containment with zero dust mess in your home.`;
    } else if (
      lowerMsg.includes("contacto") ||
      lowerMsg.includes("telefono") ||
      lowerMsg.includes("teléfono") ||
      lowerMsg.includes("phone") ||
      lowerMsg.includes("call") ||
      lowerMsg.includes("llamar") ||
      lowerMsg.includes("hablen") ||
      lowerMsg.includes("llamen") ||
      lowerMsg.includes("marcar") ||
      lowerMsg.includes("raul")
    ) {
      reply =
        activeLocale === "es"
          ? `Puedes contactar a **Raul Burgos** directamente al teléfono **[${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})** o por correo en **contact@renovoaz.com**.\n\nSi prefieres, déjame tu **nombre**, **teléfono** y qué deseas remodelar aquí mismo en el chat, y le enviaré tus datos a Raul de inmediato.`
          : `You can reach master craftsman **Raul Burgos** directly at **[${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})** or via email at **contact@renovoaz.com**.\n\nIf you'd like, write your **name**, **phone number**, and what project you have in mind right here, and I'll send it straight to Raul!`;
    } else {
      reply =
        activeLocale === "es"
          ? `¡Hola! Soy el asistente del taller de **Renovo Painting Solutions** en Phoenix, AZ.\n\nTe puedo asesorar con:\n• **Cabinet Refacing:** Renovación completa de puertas y frentes en madera maciza.\n• **Laca 2K Catalizada:** Esmaltado de gabinetes en cabina industrial de taller.\n• **Cocinas Nuevas:** Fabricación a medida desde cero.\n• **Presupuestos:** Propuesta formal detallada y asesoría en sitio sin costo.\n\n¿Qué tipo de transformación te gustaría realizar en tus gabinetes o cocina?`
          : `Hello! I'm the workshop concierge for **Renovo Painting Solutions** in Phoenix, AZ.\n\nI can help you with:\n• **Cabinet Refacing:** Full door & drawer replacement in custom hardwoods.\n• **2K Catalyzed Spray:** Factory-booth spray finishing with zero brush marks.\n• **Custom Kitchens:** Bespoke cabinetry and architectural islands from scratch.\n• **Proposals & Quotes:** Formal itemized proposals and in-home evaluations.\n\nWhat kind of transformation are you planning for your home?`;
    }

    return NextResponse.json({
      reply,
      leadCaptured,
      source: "local-engine",
    });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json(
      {
        reply:
          "Ocurrió un error temporal de conexión. Puedes llamar a Raul Burgos directamente al (602) 550-4369.",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}
