import { NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";

export const runtime = "nodejs";

// Comprehensive knowledge base for fallback engine & prompt grounding
const RENOVO_KNOWLEDGE = {
  phone: "(602) 550-4369",
  phoneHref: "tel:+16025504369",
  address: "2231 W Shangri La Rd, Ste K-L, Phoenix, AZ 85029",
  founder: "Raul Burgos",
  services: {
    residentialExterior: {
      en: "Desert UV Exterior Home Painting: Engineered specifically for the harsh Arizona climate (115°F+ sun and monsoon rains). Includes heavy-duty power washing, electronic moisture testing, deep elastomeric urethane caulking for stucco expansion cracks, masonry conditioner primer (Sherwin-Williams Loxon), and 100% acrylic elastomeric UV-shield topcoats that resist chalking, blistering, and fading. We also coat wood fascia, eaves, architectural porticos, and garage doors.",
      es: "Pintura Exterior de Casas y Protección UV: Diseñada específicamente para el clima extremo de Arizona (más de 46°C de sol y lluvias monzónicas). Incluye lavado a presión industrial, sellado de grietas de estuco con poliuretano elastomérico de alta expansión térmica, primario acondicionador de mampostería (Sherwin-Williams Loxon) y dos capas de acrílico elastomérico con filtro UV que no se decolora, agrieta ni descascara. Pintamos también fascia de madera, aleros, puertas de cochera y pórticos.",
    },
    residentialInterior: {
      en: "Fine Interior Architectural Painting: Premium dustless residential painting utilizing hospital-grade Festool HEPA extraction sanding (99.97% containment so your living spaces, furniture, and AC ducts stay completely clean). Includes full surface prep, drywall repairs, settling crack restoration, texture matching (orange peel, knockdown, smooth Level 5), laser-sharp caulk lines on baseboards and crown moldings, and zero-VOC / low-odor washable velvet enamels (Sherwin-Williams Emerald, Cashmere, Benjamin Moore Regal Select).",
      es: "Pintura Residencial Interior Fina (Cero Polvo): Pintura arquitectónica interior de alta gama con sistema de aspiración cerrada Festool grado HEPA (99.97% libre de polvo para proteger muebles y ductos de aire acondicionado). Incluye preparación profunda, reparación de grietas y parches de drywall con igualación de textura (orange peel, knockdown o liso nivel 5), líneas láser nítidas en rodapiés (baseboards) y molduras, y esmaltes lavables aterciopelados 0-VOC sin olor molesto (Sherwin-Williams Emerald y Cashmere).",
    },
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
      "casa", "casas", "pared", "paredes", "muro", "muros", "estuco", "techo", "techos",
      "exterior", "interiores", "interior", "fachada", "gracias", "favor", "quiero",
      "necesito", "interesa", "prefiero", "visita"
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
          ? `¡Excelente! He registrado tus datos de contacto${extractedPhone ? ` (Teléfono: **${extractedPhone}**)` : ""}${extractedEmail ? ` (Correo: **${extractedEmail}**)` : ""} y se los acabo de enviar directamente a **Raul Burgos**.\n\nRaul se comunicará contigo a la brevedad para coordinar tu asesoría y medición en sitio sin costo con muestras físicas y catálogo de colores.\n\n¿Hay algún detalle específico de tu casa (exterior, interior, techos, estuco o gabinetes) que te gustaría que tenga en cuenta?`
          : `Fantastic! I have securely recorded your contact details${extractedPhone ? ` (Phone: **${extractedPhone}**)` : ""}${extractedEmail ? ` (Email: **${extractedEmail}**)` : ""} and dispatched them directly to **Raul Burgos**.\n\nRaul will reach out to you shortly to coordinate your complimentary in-home consultation with physical finish samples and color swatches.\n\nIs there any specific detail about your home (interior, exterior stucco, high ceilings, or cabinetry) you would like him to have ready?`;

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

    // A. EXTERIOR HOUSE PAINTING & DESERT UV PROTECTION
    const isExteriorQuery =
      lowerMsg.includes("exterior") ||
      lowerMsg.includes("estuco") ||
      lowerMsg.includes("stucco") ||
      lowerMsg.includes("fascia") ||
      lowerMsg.includes("aleros") ||
      lowerMsg.includes("afuera") ||
      lowerMsg.includes("fachada") ||
      lowerMsg.includes("monsoon") ||
      lowerMsg.includes("calor") ||
      (lowerMsg.includes("pintar") && lowerMsg.includes("fuera"));

    // B. INTERIOR HOUSE PAINTING & DUSTLESS RESIDENTIAL
    const isInteriorQuery =
      lowerMsg.includes("interior") ||
      lowerMsg.includes("pared") ||
      lowerMsg.includes("paredes") ||
      lowerMsg.includes("techo") ||
      lowerMsg.includes("techos") ||
      lowerMsg.includes("ceiling") ||
      lowerMsg.includes("drywall") ||
      lowerMsg.includes("yeso") ||
      lowerMsg.includes("cuarto") ||
      lowerMsg.includes("recamara") ||
      lowerMsg.includes("recámara") ||
      lowerMsg.includes("sala") ||
      lowerMsg.includes("rodapie") ||
      lowerMsg.includes("rodapié") ||
      lowerMsg.includes("baseboard") ||
      lowerMsg.includes("polvo") ||
      lowerMsg.includes("dustless");

    // C. WHOLE HOUSE / GENERAL RESIDENTIAL PAINTING
    const isHousePaintingGeneral =
      lowerMsg.includes("pintar casa") ||
      lowerMsg.includes("pintar mi casa") ||
      lowerMsg.includes("pintura de casa") ||
      lowerMsg.includes("pintar toda la casa") ||
      lowerMsg.includes("house paint") ||
      lowerMsg.includes("paint my house") ||
      lowerMsg.includes("residential paint") ||
      lowerMsg.includes("home painting");

    if (isExteriorQuery) {
      reply =
        activeLocale === "es"
          ? `**Pintura Exterior de Casas y Protección UV en Arizona:**\n\n${RENOVO_KNOWLEDGE.services.residentialExterior.es}\n\n• **Sellado de Grietas:** Tratamos el estuco con uretano elastomérico que absorbe las contracciones por calor extremo.\n• **Filtro Solar UV:** Utilizamos recubrimientos acrílicos 100% elastoméricos de alto espesor (Sherwin-Williams Loxon/Duration) que soportan más de 46°C sin decolorarse ni agrietarse.\n• **Detalles:** Pintura de molduras, fascia, aleros de madera y portones de cochera.\n\nPuedes conocer nuestro protocolo en [Pintura Residencial](/pintura-residencial) o solicitar una cotización con Raul Burgos en el [Cotizador Oficial](/cotizador).`
          : `**Desert UV Exterior Home Painting in Arizona:**\n\n${RENOVO_KNOWLEDGE.services.residentialExterior.en}\n\n• **Stucco Crack Restoration:** High-expansion elastomeric urethane sealing engineered for severe thermal expansion.\n• **UV Shield Chemistry:** 100% elastomeric coatings (Sherwin-Williams Loxon/Duration) that won't chalk or fade under 115°F+ sun.\n• **Full Architectural Trim:** Fascia boards, eaves, porticos, and garage doors.\n\nExplore our complete system in [Residential Painting](/pintura-residencial) or request an estimate on our [Official Quote System](/cotizador).`;
    } else if (isInteriorQuery) {
      reply =
        activeLocale === "es"
          ? `**Pintura Interior Residencial Fina (Lijado Cero Polvo HEPA):**\n\n${RENOVO_KNOWLEDGE.services.residentialInterior.es}\n\n• **Aspiración Sellada HEPA:** Con equipo Festool retenemos el 99.97% del polvo; tus muebles, pisos y ductos de A/C permanecen impecables.\n• **Reparación de Drywall:** Reparamos hoyos, grietas de asentamiento y nivelamos texturas (orange peel, knockdown o liso nivel 5).\n• **Líneas Láser:** Sellado perimetral nítido en rodapiés (baseboards) y molduras de techo.\n• **Pinturas 0-VOC:** Esmaltes aterciopelados lavables y sin olores tóxicos (Sherwin-Williams Emerald y Cashmere).\n\nConoce fotos reales en [Pintura Residencial](/pintura-residencial) o solicita una cotización en el [Cotizador Oficial](/cotizador).`
          : `**Fine Interior Architectural Painting (HEPA Dustless):**\n\n${RENOVO_KNOWLEDGE.services.residentialInterior.en}\n\n• **Hospital-Grade Dustless Prep:** Festool HEPA extraction sanders capture 99.97% of dust to protect your furniture and air quality.\n• **Drywall & Texture Mastery:** Complete patch repairs, settling crack restoration, and texture matching.\n• **Laser Caulk Lines:** Razor-sharp transitions on baseboards and crown moldings.\n• **Zero-VOC Washable Enamels:** Velvet, low-odor finishes (Sherwin-Williams Emerald & Cashmere).\n\nView details in [Residential Painting](/pintura-residencial) or generate an estimate in our [Official Quote System](/cotizador).`;
    } else if (isHousePaintingGeneral) {
      reply =
        activeLocale === "es"
          ? `**Servicio Integral de Pintura de Casas (Interior y Exterior):**\n\nEn Renovo Painting Solutions atendemos residencias en todo el Valle de Phoenix (Scottsdale, Paradise Valley, Arcadia, Peoria, Chandler):\n\n1. **Pintura Exterior:** Sellado profundo de estuco con uretano elástico y acrílicos elastoméricos resistentes al sol de más de 45°C y monzones.\n2. **Pintura Interior:** Lijado cerrado sin polvo HEPA Festool, reparación de drywall/texturas y esmaltes 0-VOC lavables.\n3. **Gabinetes y Puertas:** Posibilidad de coordinar la pintura de tu casa junto con el esmaltado 2K o refacing de tu cocina.\n\n¿Deseas calcular un presupuesto formal en nuestro [Cotizador Oficial](/cotizador) o prefieres que Raul Burgos te llame para una asesoría en persona?`
          : `**Complete Residential Painting Services (Interior & Exterior):**\n\nRenovo Painting Solutions provides master architectural painting across the Phoenix Valley (Scottsdale, Paradise Valley, Arcadia, Peoria, Chandler):\n\n1. **Exterior Coatings:** Stucco crack restoration with elastomeric urethane and heavy-build UV coatings that withstand 115°F+ sun.\n2. **Interior Painting:** Festool HEPA dustless sanding, drywall repair, and zero-VOC washable velvet enamels.\n3. **Full Coordination:** We can paint your whole home and refinish or reface your kitchen cabinets simultaneously.\n\nWould you like to build an estimate in our [Official Quote System](/cotizador) or have Raul Burgos call you for an in-home evaluation?`;
    } else if (
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
      lowerMsg.includes("spray") ||
      lowerMsg.includes("esmaltado") ||
      (lowerMsg.includes("pintar") && (lowerMsg.includes("gabinete") || lowerMsg.includes("cocina")))
    ) {
      reply =
        activeLocale === "es"
          ? `**Acabado Industrial de Fábrica con Laca Catalizada 2K:**\n\n${RENOVO_KNOWLEDGE.services.paint2k.es}\n\nNo usamos pintura de muro tradicional en gabinetes. Nuestro recubrimiento cura químicamente creando un escudo suave al tacto (disponible en 18% Satinado o 5% Ultra-Mate) resistente a la grasa y vapor.\n\nPuedes ver fotos reales de este acabado en nuestro [Catálogo de Gabinetes](/cocinas-y-gabinetes).`
          : `**2K Industrial Factory Polyurethane Spray:**\n\n${RENOVO_KNOWLEDGE.services.paint2k.en}\n\nWe never use standard wall latex on cabinetry. Catalyzed 2K chemistry cures with a hardening agent to produce a silky, non-porous finish in 18% Satin or 5% Ultra-Matte that resists heavy culinary grease and steam.\n\nExplore real Phoenix transformations in our [Cabinetry Portfolio](/cocinas-y-gabinetes).`;
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
          ? `**Precios y Cotizaciones Transparentes:**\n\nEn Renovo tratas directamente con el dueño y artesano Raul Burgos—cero comisiones de intermediarios. Cada proyecto incluye medición láser en sitio sin costo y muestras físicas de acabado y color.\n\nPuedes generar tu presupuesto inmediato en nuestro [Cotizador en Línea](/cotizador), o simplemente déjame aquí tu nombre y teléfono y Raul se pondrá en contacto contigo.`
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
          ? `**Taller y Cobertura en Arizona:**\n\n📍 **Taller y Cabina:** ${RENOVO_KNOWLEDGE.address}\n📞 **Teléfono directo:** [${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})\n\nAtendemos todo el Valle de Phoenix: Scottsdale, Paradise Valley, Peoria, Glendale, Arcadia, Cave Creek, Chandler y Gilbert. Para pintura de casas realizamos todo el trabajo en sitio con preparación HEPA y sellado de estuco; para gabinetes retiramos puertas y frentes a nuestra cabina de pintura.`
          : `**Phoenix Workshop & Service Coverage:**\n\n📍 **Address:** ${RENOVO_KNOWLEDGE.address}\n📞 **Direct Line:** [${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})\n\nWe serve the entire Phoenix Metro area including Scottsdale, Paradise Valley, Peoria, Glendale, Arcadia, and Chandler. For home painting, we execute all on-site work with HEPA dustless protection and elastomeric stucco prep; for cabinetry, doors are removed to our off-site spray booth.`;
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
          ? `Puedes contactar a **Raul Burgos** directamente al teléfono **[${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})** o por correo en **contact@renovoaz.com**.\n\nSi prefieres, déjame tu **nombre**, **teléfono** y qué deseas realizar (pintura de casa, estuco, o gabinetes) aquí mismo en el chat, y le enviaré tus datos a Raul de inmediato.`
          : `You can reach master craftsman **Raul Burgos** directly at **[${RENOVO_KNOWLEDGE.phone}](${RENOVO_KNOWLEDGE.phoneHref})** or via email at **contact@renovoaz.com**.\n\nIf you'd like, write your **name**, **phone number**, and what project you have in mind (home painting, stucco, or cabinetry) right here, and I'll send it straight to Raul!`;
    } else {
      reply =
        activeLocale === "es"
          ? `¡Hola! Soy el asistente de **Renovo Painting Solutions** en Phoenix, AZ.\n\nTe puedo asesorar con:\n• **Pintura Residencial (Interior y Exterior):** Protección UV para estuco y pintura interior libre de polvo con extracción HEPA.\n• **Cabinet Refacing:** Renovación de puertas y frentes en maderas nobles.\n• **Laca 2K Catalizada:** Esmaltado de gabinetes de fábrica sin marcas de brocha.\n• **Presupuestos:** Cotización inmediata y medición en sitio sin costo.\n\n¿Te interesa pintar el interior o exterior de tu casa, o renovar tus gabinetes?`
          : `Hello! I'm the workshop concierge for **Renovo Painting Solutions** in Phoenix, AZ.\n\nI can help you with:\n• **Residential Painting (Interior & Exterior):** Desert UV stucco protection & hospital-grade HEPA dustless interior painting.\n• **Cabinet Refacing:** Custom solid wood door & drawer replacements.\n• **2K Catalyzed Spray:** Factory-grade spray finishing with zero brush marks.\n• **Proposals & Estimates:** Itemized estimates and complimentary in-home evaluations.\n\nAre you looking to paint your home (interior/exterior) or transform your cabinetry?`;
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
