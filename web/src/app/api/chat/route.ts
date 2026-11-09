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
    const activeLocale = locale === "es" ? "es" : "en";

    // 1. LEAD DISPATCH VIA RESEND (Guaranteed direct notification to Raul whenever contact info is provided)
    let leadCaptured = false;
    if (leadInfo && (leadInfo.phone || leadInfo.email)) {
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
            replyTo: leadInfo.email || undefined,
            subject: `[Nuevo Lead desde Chatbot] ${leadInfo.name || "Cliente Interesado"} (${leadInfo.phone || "Sin Teléfono"})`,
            html: `
              <div style="font-family: Georgia, serif; padding: 20px; background-color: #F4EFE6; color: #1A1410;">
                <div style="max-width: 550px; margin: 0 auto; background-color: #FCFAF7; border: 1px solid #DFD6C6; border-radius: 12px; padding: 24px;">
                  <h2 style="color: #B85D3B; margin-top: 0;">Nuevo Contacto Recibido en Chatbot Renovo</h2>
                  <p>Un cliente ha solicitado información o visita a través del asistente virtual de la web:</p>
                  <ul style="line-height: 1.8;">
                    <li><strong>Nombre:</strong> ${leadInfo.name || "No especificado"}</li>
                    <li><strong>Teléfono:</strong> <a href="tel:${leadInfo.phone}">${leadInfo.phone || "No especificado"}</a></li>
                    <li><strong>Correo:</strong> ${leadInfo.email || "No especificado"}</li>
                    <li><strong>Detalles de la Consulta:</strong> ${leadInfo.notes || trimmedMsg || "Consulta general"}</li>
                    <li><strong>Idioma del usuario:</strong> ${activeLocale.toUpperCase()}</li>
                  </ul>
                  <p style="font-size: 12px; color: #7A6E63; margin-top: 20px; border-top: 1px solid #DFD6C6; padding-top: 10px;">
                    Enviado desde el Asistente Concierge de Renovo (Shangri La Rd Workshop).
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

    // 2. IF MAKE.COM WEBHOOK IS CONFIGURED, CALL MAKE.COM
    const makeWebhookUrl = process.env.MAKE_CHATBOT_WEBHOOK_URL;
    if (makeWebhookUrl && makeWebhookUrl.startsWith("http")) {
      try {
        const makeRes = await fetch(makeWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: trimmedMsg,
            history,
            locale: activeLocale,
            language: activeLocale === "es" ? "Spanish" : "English",
            languageCode: activeLocale === "es" ? "es-MX" : "en-US",
            leadInfo: leadInfo || {
              name: "",
              phone: "",
              email: "",
              notes: "",
            },
            timestamp: new Date().toISOString(),
          }),
        });

        if (makeRes.ok) {
          const makeData = await makeRes.json().catch(() => null);
          if (makeData && (makeData.reply || makeData.message)) {
            return NextResponse.json({
              reply: makeData.reply || makeData.message,
              leadCaptured: leadCaptured || Boolean(makeData.leadCaptured),
              source: "make.com",
            });
          }
        }
      } catch (makeErr) {
        console.warn("Make.com webhook error, falling back to local engine:", makeErr);
      }
    }

    // 3. INTELLIGENT BUILT-IN KNOWLEDGE ENGINE
    const lower = trimmedMsg.toLowerCase();
    let reply = "";

    if (leadCaptured) {
      reply =
        activeLocale === "es"
          ? "¡Excelente! He recibido tus datos y se los he enviado directamente a **Raul Burgos**. Te llamará o enviará un mensaje en menos de 24 horas para coordinar tu asesoría en sitio con muestras reales de acabados. ¿Hay algún detalle adicional que te gustaría compartir sobre tu cocina o espacio?"
          : "Fantastic! I have securely recorded your contact details and dispatched them directly to **Raul Burgos**. He will follow up within 24 hours to schedule your free in-home consultation with physical finish samples. Is there anything else about your space or timeline you'd like to share?";
    } else if (
      lower.includes("refacing") ||
      lower.includes("cambiar puertas") ||
      lower.includes("frentes")
    ) {
      reply =
        activeLocale === "es"
          ? `**Cabinet Refacing (Renovación de Puertas):**\n\n${RENOVO_KNOWLEDGE.services.refacing.es}\n\nEs ideal si la estructura de tus gabinetes está sólida y solo quieres modernizar el estilo a puertas shaker, planas europeas o de madera maciza.\n\n¿Te gustaría calcular un presupuesto formal con tus medidas en nuestro [Cotizador Oficial](/cotizador)?`
          : `**Cabinet Refacing (Door Replacement):**\n\n${RENOVO_KNOWLEDGE.services.refacing.en}\n\nIt's the most cost-effective choice if your cabinet layout and boxes are in good condition.\n\nWould you like to build an itemized estimate in our [Official Proposal Generator](/cotizador)?`;
    } else if (
      lower.includes("2k") ||
      lower.includes("laca") ||
      lower.includes("pintar") ||
      lower.includes("spray") ||
      lower.includes("paint")
    ) {
      reply =
        activeLocale === "es"
          ? `**Acabado Industrial de Fábrica con Laca Catalizada 2K:**\n\n${RENOVO_KNOWLEDGE.services.paint2k.es}\n\nNo usamos pintura de muro tradicional. Nuestro recubrimiento cura químicamente creando un escudo suave al tacto (disponible en 18% Satinado o 5% Ultra-Mate) que no se descascara.\n\nPuedes ver fotos reales de este acabado en nuestro [Catálogo de Gabinetes](/cocinas-y-gabinetes).`
          : `**2K Industrial Factory Polyurethane Spray:**\n\n${RENOVO_KNOWLEDGE.services.paint2k.en}\n\nWe never use standard wall latex. Catalyzed 2K chemistry cures with a hardening agent to produce a silky, non-porous finish in 18% Satin or 5% Ultra-Matte that resists heavy culinary use.\n\nExplore real Phoenix transformations in our [Cabinetry Portfolio](/cocinas-y-gabinetes).`;
    } else if (
      lower.includes("cost") ||
      lower.includes("precio") ||
      lower.includes("cotiz") ||
      lower.includes("quote") ||
      lower.includes("cuanto") ||
      lower.includes("how much")
    ) {
      reply =
        activeLocale === "es"
          ? `**Precios y Cotizaciones Transparentes:**\n\nEn Renovo no manejamos precios inflados con comisiones de vendedores. Cada proyecto incluye medición láser digital en sitio sin costo y muestras físicas de acabado.\n\nPara darte un número exacto y generar tu PDF corporativo al momento, llena tus datos en nuestro [Cotizador en Línea](/cotizador) o déjame aquí tu nombre y teléfono para que Raul te llame.`
          : `**Transparent Direct Craftsman Pricing:**\n\nYou deal directly with owner Raul Burgos—zero middleman markups or sales commissions. Every estimate includes a complimentary in-home laser measure and physical finish samples.\n\nYou can generate an immediate proposal in our [Online Quote System](/cotizador), or simply leave your name and phone number here and Raul will reach out!`;
    } else if (
      lower.includes("taller") ||
      lower.includes("donde") ||
      lower.includes("ubicac") ||
      lower.includes("address") ||
      lower.includes("workshop") ||
      lower.includes("location")
    ) {
      reply =
        activeLocale === "es"
          ? `**Taller y Cabina de Pintura:**\n\n📍 **Dirección:** ${RENOVO_KNOWLEDGE.address}\n📞 **Teléfono directo:** [${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})\n\nAtendemos todo el Valle de Phoenix: Scottsdale, Paradise Valley, Peoria, Glendale, Arcadia, Cave Creek, Chandler y Gilbert. Retiramos las piezas a taller para esmaltado y preparamos los marcos en sitio con contención sellada sin polvo.`
          : `**Phoenix Workshop & Spray Booth:**\n\n📍 **Address:** ${RENOVO_KNOWLEDGE.address}\n📞 **Direct Line:** [${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})\n\nWe serve the entire Phoenix Metro area including Scottsdale, Paradise Valley, Peoria, Glendale, Arcadia, and Chandler. We handle off-site booth spraying and on-site sealed containment with zero dust mess in your home.`;
    } else if (
      lower.includes("contacto") ||
      lower.includes("telefono") ||
      lower.includes("phone") ||
      lower.includes("call") ||
      lower.includes("llamar") ||
      lower.includes("raul")
    ) {
      reply =
        activeLocale === "es"
          ? `Puedes contactar a **Raul Burgos** directamente al teléfono **[${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})** o por correo en **contact@renovoaz.com**.\n\nSi prefieres, déjame tu **nombre**, **teléfono** y qué deseas remodelar aquí en el chat, y le enviaré tus datos a Raul de inmediato.`
          : `You can reach master craftsman **Raul Burgos** directly at **[${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})** or via email at **contact@renovoaz.com**.\n\nIf you'd like, write your **name**, **phone number**, and what project you have in mind right here, and I'll send it straight to Raul!`;
    } else {
      reply =
        activeLocale === "es"
          ? `¡Hola! Soy el asistente del taller de **Renovo Painting Solutions** en Phoenix, AZ.\n\nTe puedo ayudar con información sobre:\n• **Cabinet Refacing:** Renovación completa de puertas y frentes en madera maciza.\n• **Laca 2K Catalizada:** Esmaltado de gabinetes en cabina industrial de taller.\n• **Cocinas Nuevas:** Fabricación a medida desde cero.\n• **Presupuestos:** Generación de propuesta en PDF y visitas en sitio.\n\n¿Qué tipo de proyecto te gustaría realizar o qué duda tienes?`
          : `Hello! I'm the workshop concierge for **Renovo Painting Solutions** in Phoenix, AZ.\n\nI can help you with:\n• **Cabinet Refacing:** Full door & drawer replacement in custom hardwoods.\n• **2K Catalyzed Spray:** Factory-booth spray finishing with zero brush marks.\n• **Custom Kitchens:** Bespoke cabinetry and architectural islands from scratch.\n• **Proposals & Quotes:** Instant PDF proposals and in-home evaluations.\n\nWhat kind of transformation are you planning for your home?`;
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
          "Lo siento, ocurrió un error temporal. Puedes llamar a Raul Burgos directamente al (602) 550-4369.",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}
