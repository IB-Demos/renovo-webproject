/**
 * Robust Language Detection Engine for Renovo Concierge & Forms
 * Dynamically switches between Spanish ('es') and English ('en') based on
 * natural language token analysis, structural words, and orthography.
 */

export function detectLanguage(text: string, fallbackLocale: "en" | "es" = "en"): "en" | "es" {
  if (!text || typeof text !== "string") return fallbackLocale;
  const trimmed = text.trim();
  if (!trimmed) return fallbackLocale;

  const lower = trimmed.toLowerCase();

  // Spanish strong indicators (patterns, keywords, unique characters)
  const spanishMarkers: RegExp[] = [
    /\b(hola|buenos?\s*d[ií]as?|buenas?\s*tardes?|buenas?\s*noches?)\b/i,
    /\b(cotiz\w*|presupuesto\w*|precio\w*|cu[aá]nto\s*cuesta|costo\w*)\b/i,
    /\b(hablar|llamar|ll[aá]mame|marcar|marqueme|tel[eé]fono|n[uú]mero|celular)\b/i,
    /\b(cocina\w*|gabinete\w*|mueble\w*|puerta\w*|estuco|muro\w*|pared\w*|techo\w*|fachada\w*)\b/i,
    /\b(pintar|pintura|esmaltado|acabado\w*|madera\w*|remodela\w*)\b/i,
    /\b(quiero|necesito|quisiera|me\s*interesa|me\s*gustar[ií]a|gracias|por\s*favor|ayuda)\b/i,
    /\b(donde|d[oó]nde|taller|direcci[oó]n|cu[aá]l|qui[eé]n|c[oó]mo)\b/i,
    /\b(con|para|por|los?|las?|un[ao]s?|del|al|este|esta|estos|estas|casa|casas)\b/i,
    /[¿¡áéíóúüñ]/i, // Unique Spanish punctuation and accented letters
  ];

  // English strong indicators (patterns, keywords, auxiliary verbs, contractions)
  const englishMarkers: RegExp[] = [
    /\b(hello|hi|hey|good\s*morning|good\s*afternoon|good\s*evening)\b/i,
    /\b(quote|quotes|estimate|estimates|pricing|price|how\s*much|cost|costs)\b/i,
    /\b(call|talk|speak|phone|number|reach|contact)\b/i,
    /\b(kitchen\w*|cabinet\w*|furniture|door\w*|stucco|wall\w*|ceiling\w*|fascia)\b/i,
    /\b(paint|painting|painter\w*|finish\w*|wood\w*|refacing|refinish\w*|remodel\w*)\b/i,
    /\b(want|need|would\s*like|interested|looking\s*for|thanks|thank\s*you|please|help)\b/i,
    /\b(where|address|location|workshop|what\s*is|who\s*is|how\s*to)\b/i,
    /\b(with|for|the|an?|some|from|to|at|in|on|of|this|that|these|those|house|home)\b/i,
    /\b(can\s*you|do\s*you|could\s*you|i'm|i\s*am|i'd|i\s*would|don't|does\s*it|is\s*it|are\s*you)\b/i,
  ];

  let esScore = 0;
  let enScore = 0;

  for (const regex of spanishMarkers) {
    if (regex.test(lower)) esScore += 1;
  }

  for (const regex of englishMarkers) {
    if (regex.test(lower)) enScore += 1;
  }

  if (esScore > enScore) return "es";
  if (enScore > esScore) return "en";

  // Tie-breaker 1: English function words
  if (/\b(the|is|are|you|your|we|our|can|i|my|do|have|what|how|where|when|why|would|could|should|about|and|or)\b/i.test(lower)) {
    return "en";
  }

  // Tie-breaker 2: Spanish function words
  if (/\b(el|la|los|las|un|una|es|son|tu|su|mi|que|de|en|como|donde|cuando|por|para|y|o)\b/i.test(lower)) {
    return "es";
  }

  return fallbackLocale;
}
