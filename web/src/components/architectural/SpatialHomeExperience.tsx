"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { useRenovo, SampleItem } from "@/context/RenovoContext";
import {
  Sun,
  SunHorizon,
  MoonStars,
  Sparkle,
  ArrowRight,
  BookmarkSimple,
  Check,
  Compass,
  Eye,
  SlidersHorizontal,
  Info,
  Palette,
  MapPin,
  CaretRight,
  CaretLeft,
} from "@phosphor-icons/react";

/* -------------------------------------------------------------------------- */
/* Types & Data Models                                                        */
/* -------------------------------------------------------------------------- */

export type LightingMode = "dawn" | "noon" | "sunset" | "night";

export interface ColorFinish {
  id: string;
  name: { en: string; es: string };
  collection: { en: string; es: string };
  chemistry: { en: string; es: string };
  hex: string;
  overlayColor: string;
  overlayOpacity: number;
  overlayBlend: "multiply" | "soft-light" | "overlay" | "color";
  lrv: number;
  sheen: { en: string; es: string };
  architecturalNote: { en: string; es: string };
}

export interface Hotspot {
  id: string;
  top: string; // percentage
  left: string; // percentage
  title: { en: string; es: string };
  spec: { en: string; es: string };
}

export interface RoomSpace {
  id: string;
  number: string;
  tag: { en: string; es: string };
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  description: { en: string; es: string };
  baseImage: string;
  finishes: ColorFinish[];
  hotspots: Hotspot[];
  orientationAdvice: { en: string; es: string };
}

/* -------------------------------------------------------------------------- */
/* Spatial Rooms Data                                                         */
/* -------------------------------------------------------------------------- */

const SPATIAL_ROOMS: RoomSpace[] = [
  {
    id: "kitchen",
    number: "01",
    tag: {
      en: "Gourmet Kitchen & Island",
      es: "Cocina de Autor e Isla Central",
    },
    title: {
      en: "The Culinary Atelier",
      es: "El Taller Culinario",
    },
    subtitle: {
      en: "Custom Cabinetry, 2K Factory Lacquers & Island Focal Points",
      es: "Ebanistería a Medida, Lacas 2K Catalizadas e Islas de Autor",
    },
    description: {
      en: "High-traffic heart of the Arizona residence. Engineered with moisture-proof 2K polyurethane coatings that resist culinary oils, heavy steam, and desert temperature shifts.",
      es: "El epicentro de la residencia. Construida con poliuretanos 2K catalizados inmunes a vapores, aceites de cocina y los cambios de temperatura del desierto de Arizona.",
    },
    baseImage: "/assets/kitchens/kitchen-14.jpg",
    orientationAdvice: {
      en: "Recommended orientation: North / North-East daylight balances cool undertones and warm oak islands.",
      es: "Orientación recomendada: Luz norte o nororiente equilibra tonos fríos y maderas cálidas.",
    },
    hotspots: [
      {
        id: "k-lacquer",
        top: "34%",
        left: "32%",
        title: { en: "2K Catalyzed Satin Lacquer", es: "Laca Catalizada 2K Satinada" },
        spec: { en: "Ultra-durable factory finish with zero brush marks and 18% sheen.", es: "Acabado de cabina industrial con cero marcas y 18% de brillo satinado." },
      },
      {
        id: "k-island",
        top: "62%",
        left: "64%",
        title: { en: "Solid Core Island Framing", es: "Estructura de Isla en Alma Sólida" },
        spec: { en: "Reinforced support for 3cm waterfall quartzite and integrated prep drawers.", es: "Soporte reforzado para cuarcita cascada de 3cm y cajones de servicio." },
      },
      {
        id: "k-joinery",
        top: "78%",
        left: "22%",
        title: { en: "Dovetail Hard Maple Runners", es: "Cajones en Cola de Milano de Arce" },
        spec: { en: "Blum concealed soft-close motion rated for 100,000 continuous cycles.", es: "Correderas ocultas Blum con cierre suave certificadas para 100,000 ciclos." },
      },
    ],
    finishes: [
      {
        id: "k-alabaster",
        name: { en: "Navajo Alabaster 2K", es: "Alabastro Navajo 2K" },
        collection: { en: "Architectural Whites", es: "Blancos Arquitectónicos" },
        chemistry: { en: "Non-Yellowing 2K Catalyzed Polyurethane", es: "Poliuretano Catalizado 2K No Amarilleante" },
        hex: "#ECE6DC",
        overlayColor: "#F4EFEA",
        overlayOpacity: 0.22,
        overlayBlend: "overlay",
        lrv: 82,
        sheen: { en: "18% Satin Velvet", es: "18% Terciopelo Satinado" },
        architecturalNote: {
          en: "Subtle warm alabaster that prevents sterility under high-intensity Arizona sunlight.",
          es: "Blanco arquitectónico cálido que evita la frialdad bajo la intensa luz solar de Arizona.",
        },
      },
      {
        id: "k-indigo",
        name: { en: "Midnight Indigo Slate", es: "Azul Índigo Medianoche" },
        collection: { en: "High-Contrast Accents", es: "Acentos de Alto Contraste" },
        chemistry: { en: "High-Solids 2K Industrial Lacquer", es: "Laca Industrial 2K de Altos Sólidos" },
        hex: "#22303C",
        overlayColor: "#1B2A38",
        overlayOpacity: 0.38,
        overlayBlend: "multiply",
        lrv: 11,
        sheen: { en: "15% Matte Velvet", es: "15% Mate Aterciopelado" },
        architecturalNote: {
          en: "Grounds large open-concept kitchens with architectural depth and bold contrast.",
          es: "Otorga peso visual y dramatismo arquitectónico en cocinas de concepto abierto.",
        },
      },
      {
        id: "k-sage",
        name: { en: "Sonoran Desert Sage", es: "Salvia del Desierto Sonorense" },
        collection: { en: "Botanical Earth", es: "Tierras Botánicas" },
        chemistry: { en: "Italian 2K Urethane Topcoat", es: "Esmalte de Uretano Italiano 2K" },
        hex: "#435446",
        overlayColor: "#3D5242",
        overlayOpacity: 0.32,
        overlayBlend: "multiply",
        lrv: 26,
        sheen: { en: "12% Low Lustre", es: "12% Bajo Brillo" },
        architecturalNote: {
          en: "Soft vegetal undertone that bridges indoor kitchens with adjacent courtyard views.",
          es: "Subtono vegetal sereno que conecta visualmente la cocina con el jardín o patio.",
        },
      },
      {
        id: "k-terracotta",
        name: { en: "Adobe Terracotta Clay", es: "Terracota de Adobe" },
        collection: { en: "Sonoran Heritage", es: "Patrimonio Sonorense" },
        chemistry: { en: "Catalyzed Mineral Lacquer", es: "Laca Mineral Catalizada" },
        hex: "#B85D3B",
        overlayColor: "#B85D3B",
        overlayOpacity: 0.32,
        overlayBlend: "soft-light",
        lrv: 29,
        sheen: { en: "15% Matte Velvet", es: "15% Mate Aterciopelado" },
        architecturalNote: {
          en: "A warm signature earth pigment that radiates natural desert warmth and elegance.",
          es: "Pigmento terroso insignia que aporta calidez nativa y carácter sonorense.",
        },
      },
      {
        id: "k-oak",
        name: { en: "Rift White Oak Clear", es: "Roble Blanco Corte Recto" },
        collection: { en: "Natural Hardwoods", es: "Maderas Nobles" },
        chemistry: { en: "Waterborne Conversion Varnish", es: "Barniz de Conversión al Agua Transparente" },
        hex: "#C2A379",
        overlayColor: "#D6B283",
        overlayOpacity: 0.28,
        overlayBlend: "overlay",
        lrv: 46,
        sheen: { en: "8% Natural Dead Flat", es: "8% Mate Natural" },
        architecturalNote: {
          en: "Preserves the raw tactile texture of oak grain without ambering or yellowing.",
          es: "Conserva la textura táctil del roble blanco sin alterar su tono natural.",
        },
      },
    ],
  },
  {
    id: "living",
    number: "02",
    tag: {
      en: "Living Room & Millwork",
      es: "Sala de Estar y Ebanistería Fina",
    },
    title: {
      en: "The Arched Oak Sanctuary",
      es: "El Santuario de Encino Arqueado",
    },
    subtitle: {
      en: "Twin Arched Fireplace Bookcases, Floating Credenzas & Concealed LED",
      es: "Libreros Gemelos Arqueados, Credenzas Flotantes y LED Integrado",
    },
    description: {
      en: "Sculptural architectural built-ins custom measured to ceiling drywall reveals. Hand-bent radial oak crowns paired with integrated 2700K indirect warm lighting channels.",
      es: "Muebles arquitectónicos de autor construidos al milímetro para flanquear la chimenea. Cabezales arqueados curvados a mano con canales de luz indirecta oculta.",
    },
    baseImage: "/assets/blueprints-and-docs/custom-furniture-01.jpg",
    orientationAdvice: {
      en: "Recommended orientation: South / West exposure enriches deep grain and reveals linear fluting.",
      es: "Orientación sur o poniente resalta el relieve de las vetas y las molduras estriadas.",
    },
    hotspots: [
      {
        id: "l-arch",
        top: "22%",
        left: "48%",
        title: { en: "Hand-Crafted Arched Crown", es: "Cabezal Arqueado Artesanal" },
        spec: { en: "Steam-bent architectural curves custom framed for structural stability.", es: "Curvas radiales hechas en taller con alma reforzada para evitar torceduras." },
      },
      {
        id: "l-shelf",
        top: "46%",
        left: "26%",
        title: { en: "Adjustable 1-1/4\" Thick Shelves", es: "Repisas Gruesas de 1-1/4\" Ajustables" },
        spec: { en: "Solid oak edge-banded cores designed to support heavy art monographs.", es: "Alma de alta densidad con cantos macizos sin deflexión bajo peso de libros." },
      },
      {
        id: "l-led",
        top: "58%",
        left: "72%",
        title: { en: "Concealed 2700K Aluminum Channel", es: "Canal LED 2700K de Aluminio Oculto" },
        spec: { en: "Diffused frosted lens providing uniform warm wash without visible diodes.", es: "Difusor opalino continuo para bañar las repisas con luz suave sin puntos visibles." },
      },
    ],
    finishes: [
      {
        id: "l-oak",
        name: { en: "Natural Rift White Oak", es: "Roble Blanco Natural" },
        collection: { en: "Organic Millwork", es: "Ebanistería Orgánica" },
        chemistry: { en: "Matte Ceramic-Infused Clear 2K", es: "Laca Mate 2K con Microcerámica" },
        hex: "#CBB393",
        overlayColor: "#E2C8A4",
        overlayOpacity: 0.22,
        overlayBlend: "overlay",
        lrv: 52,
        sheen: { en: "5% Natural Dead Flat", es: "5% Mate Ultramate" },
        architecturalNote: {
          en: "Sublime organic presence that highlights hand-carved wood grain and soft shadows.",
          es: "Presencia orgánica refinada que resalta las vetas y la calidez natural de la madera.",
        },
      },
      {
        id: "l-smoked-walnut",
        name: { en: "Smoked Sonoran Walnut", es: "Nogal Ahumado Sonorense" },
        collection: { en: "Heritage Woods", es: "Maderas Patrimoniales" },
        chemistry: { en: "Deep Catalyzed Solvent Stain", es: "Tinte Catalizado de Penetración Profunda" },
        hex: "#422F24",
        overlayColor: "#39251A",
        overlayOpacity: 0.44,
        overlayBlend: "multiply",
        lrv: 14,
        sheen: { en: "12% Low Lustre", es: "12% Bajo Brillo" },
        architecturalNote: {
          en: "Rich espresso tones with amber undertones that anchor cozy library nooks.",
          es: "Tonos café tostado con reflejos ámbar que crean una atmósfera acogedora e íntima.",
        },
      },
      {
        id: "l-charcoal",
        name: { en: "Iron Charcoal Black 2K", es: "Negro Carbón de Fragua 2K" },
        collection: { en: "Modern Monolith", es: "Monolitos Modernos" },
        chemistry: { en: "Anti-Fingerprint 2K Matte Finish", es: "Poliuretano 2K Mate Antihuellas" },
        hex: "#242526",
        overlayColor: "#1A1A1A",
        overlayOpacity: 0.46,
        overlayBlend: "multiply",
        lrv: 7,
        sheen: { en: "6% Deep Matte", es: "6% Mate Profundo" },
        architecturalNote: {
          en: "Bold architectural framing that turns custom shelving into sculptural museum walls.",
          es: "Enmarque escultórico que convierte las repisas en piezas de galería de arte.",
        },
      },
      {
        id: "l-alabaster",
        name: { en: "Linen Alabaster Velvet", es: "Alabastro Lino Terciopelo" },
        collection: { en: "Air & Light", es: "Luz y Espacio" },
        chemistry: { en: "Non-Reflective 2K Enamel", es: "Esmalte 2K No Reflectivo" },
        hex: "#EDE9E1",
        overlayColor: "#F5F2EB",
        overlayOpacity: 0.25,
        overlayBlend: "overlay",
        lrv: 80,
        sheen: { en: "10% Eggshell Silk", es: "10% Seda Aterciopelada" },
        architecturalNote: {
          en: "Blends seamlessly with plaster walls, focusing attention on displayed art objects.",
          es: "Se funde con muros enyesados para destacar esculturas, libros y cerámica.",
        },
      },
      {
        id: "l-eucalyptus",
        name: { en: "Desert Eucalyptus Green", es: "Verde Eucalipto del Desierto" },
        collection: { en: "Botanical Earth", es: "Tierras Botánicas" },
        chemistry: { en: "Catalyzed Satin Enamel", es: "Esmalte Satinado Catalizado" },
        hex: "#4F6054",
        overlayColor: "#455449",
        overlayOpacity: 0.35,
        overlayBlend: "multiply",
        lrv: 23,
        sheen: { en: "15% Satin Velvet", es: "15% Terciopelo Satinado" },
        architecturalNote: {
          en: "Calming botanical backdrop that softens the desert glare entering living rooms.",
          es: "Fondo botánico relajante que amortigua la intensidad de la luz solar en la sala.",
        },
      },
    ],
  },
  {
    id: "entryway",
    number: "03",
    tag: {
      en: "Monumental Entryway & Portico",
      es: "Pórtico y Entrada Monumental",
    },
    title: {
      en: "The Grand Threshold",
      es: "El Gran Umbral de Bienvenida",
    },
    subtitle: {
      en: "Solid Double Doors, Portico Ceilings & High-End Hardware",
      es: "Puertas Dobles Macizas, Cielos de Pórtico y Herrajes Forjados",
    },
    description: {
      en: "The critical first impression. Front entries endure punishing Southwest solar UV radiation. We apply multi-layer elastomeric and UV-inhibited marine polyurethanes that protect without peeling.",
      es: "La primera impresión de tu hogar. Las puertas de entrada sufren la más feroz radiación solar de Arizona. Aplicamos uretanos marinos y selladores UV que no se descarapelan.",
    },
    baseImage: "/assets/before-after/pair-02-double-door-after.jpg",
    orientationAdvice: {
      en: "Recommended protection: West and South facing entries receive double UV-shield topcoats.",
      es: "Protección especial: Puertas con vista al sur o poniente reciben doble capa protectora UV.",
    },
    hotspots: [
      {
        id: "e-doors",
        top: "45%",
        left: "48%",
        title: { en: "UV-Reflective Exterior 2K Armor", es: "Blindaje Exterior 2K con Filtro UV" },
        spec: { en: "Ceramic UV absorbers prevent pigment fading and wood degradation under 115°F heat.", es: "Absorbedores cerámicos evitan la degradación del pigmento y madera a 45°C." },
      },
      {
        id: "e-handle",
        top: "56%",
        left: "37%",
        title: { en: "Architectural Hardware Sealing", es: "Sellado Perimetral de Herrajes" },
        spec: { en: "Precision recessed mortises prevent moisture intrusion around pulls and deadbolts.", es: "Cajas de cerradura selladas al vacío para evitar filtraciones de humedad y polvo." },
      },
      {
        id: "e-frame",
        top: "20%",
        left: "52%",
        title: { en: "Elastomeric Portico Trim", es: "Molduras de Pórtico Elastoméricas" },
        spec: { en: "Expands and contracts with diurnal desert temperature swings without cracking.", es: "Se expande y contrae con el choque térmico día/noche sin fisurarse." },
      },
    ],
    finishes: [
      {
        id: "e-terracotta",
        name: { en: "Sonoran Desert Terracotta", es: "Terracota del Desierto" },
        collection: { en: "Desert Architecture", es: "Arquitectura del Desierto" },
        chemistry: { en: "UV-Absorbing Exterior 2K Urethane", es: "Poliuretano Exterior 2K con Bloqueador UV" },
        hex: "#A8482A",
        overlayColor: "#9C3C20",
        overlayOpacity: 0.35,
        overlayBlend: "multiply",
        lrv: 21,
        sheen: { en: "20% Exterior Satin", es: "20% Satinado Exterior" },
        architecturalNote: {
          en: "An iconic Mediterranean and Spanish Colonial welcome statement that glows in sunset light.",
          es: "Declaración de bienvenida estilo hacienda española que resplandece al atardecer.",
        },
      },
      {
        id: "e-slate",
        name: { en: "Desert Iron Slate", es: "Pizarra de Hierro del Desierto" },
        collection: { en: "Modern Mineral", es: "Mineral Contemporáneo" },
        chemistry: { en: "Micro-Textured Exterior Shield", es: "Blindaje Exterior Microtexturizado" },
        hex: "#2F3B43",
        overlayColor: "#222D35",
        overlayOpacity: 0.45,
        overlayBlend: "multiply",
        lrv: 12,
        sheen: { en: "15% Matte Lustre", es: "15% Lustre Mate" },
        architecturalNote: {
          en: "Commanding dark architectural presence that pairs elegantly with forged iron lanterns.",
          es: "Imponente presencia oscura que combina con herrería forjada y cantera blanca.",
        },
      },
      {
        id: "e-walnut",
        name: { en: "Heritage Rich Walnut Stain", es: "Nogal Noble Tradicional" },
        collection: { en: "Natural Hardwoods", es: "Maderas Nobles" },
        chemistry: { en: "UV Penetrating Marine Oil Stain", es: "Aceite Marino Penetrante con Filtro UV" },
        hex: "#442A1D",
        overlayColor: "#3B2115",
        overlayOpacity: 0.42,
        overlayBlend: "multiply",
        lrv: 15,
        sheen: { en: "18% Satin Glow", es: "18% Satinado Noble" },
        architecturalNote: {
          en: "Restores antique grandeur while sealing the solid wood against desert moisture loss.",
          es: "Restaura la majestuosidad de la madera maciza protegiéndola de la sequedad del desierto.",
        },
      },
      {
        id: "e-mineral",
        name: { en: "Sonoran Mineral Alabaster", es: "Blanco Mineral Sonorense" },
        collection: { en: "Desert Architecture", es: "Arquitectura del Desierto" },
        chemistry: { en: "Elastomeric Masonry & Wood Shield", es: "Escudo Elastomérico para Muro y Madera" },
        hex: "#ECE8E1",
        overlayColor: "#FAF7F2",
        overlayOpacity: 0.24,
        overlayBlend: "overlay",
        lrv: 79,
        sheen: { en: "12% Velvet Flat", es: "12% Mate Aterciopelado" },
        architecturalNote: {
          en: "Maximizes light reflection under deep covered porticoes, banishing gloomy entry halls.",
          es: "Maximiza el reflejo de luz natural en pórticos techados profundos.",
        },
      },
      {
        id: "e-agave",
        name: { en: "Wild Agave Green", es: "Verde Agave Silvestre" },
        collection: { en: "Botanical Earth", es: "Tierras Botánicas" },
        chemistry: { en: "Catalyzed Exterior Enamel", es: "Esmalte Exterior Catalizado" },
        hex: "#495A4C",
        overlayColor: "#3F4F42",
        overlayOpacity: 0.38,
        overlayBlend: "multiply",
        lrv: 20,
        sheen: { en: "16% Satin Velvet", es: "16% Satinado Terciopelo" },
        architecturalNote: {
          en: "Deep botanical green inspired by Sonoran desert flora and weathered olive branches.",
          es: "Verde botánico profundo inspirado en agaves y olivos centenarios de Arizona.",
        },
      },
    ],
  },
  {
    id: "patio",
    number: "04",
    tag: {
      en: "Covered Veranda & Outdoor Living",
      es: "Patio Cubierto y Veranda Exterior",
    },
    title: {
      en: "The Desert Living Pavilion",
      es: "El Pabellón Exterior Sonorense",
    },
    subtitle: {
      en: "Tongue-and-Groove Ceilings, Stucco Restorations & Exterior Bar Finishes",
      es: "Cielos en Machihembrado, Restauración de Estuco y Barra Exterior",
    },
    description: {
      en: "Outdoor living is synonymous with Arizona luxury. We treat exposed tongue-and-groove cedar ceilings, architectural columns, and exterior bar cabinetry with heavy-duty solar guards.",
      es: "El lujo de vivir al exterior en Phoenix. Protegemos plafones machihembrados de cedro, columnas estructurales y barras exteriores con blindajes de alta resistencia térmica.",
    },
    baseImage: "/assets/painting-exterior/exterior-01.jpg",
    orientationAdvice: {
      en: "Thermal performance: High LRV stucco reduces heat transfer into covered living areas.",
      es: "Eficiencia térmica: Estucos de alto LRV reducen la transferencia de calor hacia la terraza.",
    },
    hotspots: [
      {
        id: "p-ceiling",
        top: "22%",
        left: "58%",
        title: { en: "Restored Cedar Tongue-and-Groove", es: "Cielo Machihembrado de Cedro" },
        spec: { en: "Penetrating oil that enriches grain without trapping moisture in ceiling joists.", es: "Aceite protector que nutre la veta sin atrapar humedad en las vigas del techo." },
      },
      {
        id: "p-stucco",
        top: "54%",
        left: "24%",
        title: { en: "100% Acrylic Elastomeric Stucco", es: "Estuco 100% Acrílico Elastomérico" },
        spec: { en: "Bridges hairline thermal cracks and sheds monsoon flash rain effortlessly.", es: "Sella microfisuras térmicas y repele el agua torrencial del monzón sonorense." },
      },
      {
        id: "p-columns",
        top: "70%",
        left: "76%",
        title: { en: "Reinforced Exterior Column Finish", es: "Acabado de Columnas Exteriores" },
        spec: { en: "Resistant to power-washing and desert dust storms without peeling.", es: "Inmune a limpiezas a presión y tolvaneras del desierto sin desprendimientos." },
      },
    ],
    finishes: [
      {
        id: "p-sand",
        name: { en: "Weathered Dune Sand Stain", es: "Arena de Duna Teñida" },
        collection: { en: "Sonoran Desert", es: "Desierto Sonorense" },
        chemistry: { en: "Exterior Penetrating Mineral Stain", es: "Tinte Mineral Penetrante para Exterior" },
        hex: "#C6B294",
        overlayColor: "#D3BF9F",
        overlayOpacity: 0.26,
        overlayBlend: "overlay",
        lrv: 55,
        sheen: { en: "6% Natural Matte", es: "6% Mate Natural" },
        architecturalNote: {
          en: "Mirrors the organic tones of Camelback Mountain and native Sonoran foothills.",
          es: "Armoniza de forma natural con los cerros y la arena del valle de Phoenix.",
        },
      },
      {
        id: "p-terracotta",
        name: { en: "Spanish Adobe Clay", es: "Terracota Tradicional de Adobe" },
        collection: { en: "Spanish Colonial", es: "Hacienda Española" },
        chemistry: { en: "High-Build Elastomeric Coating", es: "Recubrimiento Elastomérico de Alto Espesor" },
        hex: "#B85D3B",
        overlayColor: "#AA4E2D",
        overlayOpacity: 0.36,
        overlayBlend: "multiply",
        lrv: 28,
        sheen: { en: "10% Velvet Flat", es: "10% Mate Aterciopelado" },
        architecturalNote: {
          en: "Classic Southwest hacienda warmth that softens harsh midday light on the terrace.",
          es: "Calidez clásica de hacienda que suaviza el brillo del mediodía en la terraza.",
        },
      },
      {
        id: "p-roasted-cedar",
        name: { en: "UV-Roasted Western Cedar", es: "Cedro Tostado Protección UV" },
        collection: { en: "Exterior Hardwoods", es: "Maderas Exteriores" },
        chemistry: { en: "Marine Exterior Polyurethane", es: "Poliuretano Marino Exterior 2K" },
        hex: "#5C3E29",
        overlayColor: "#4E321E",
        overlayOpacity: 0.42,
        overlayBlend: "multiply",
        lrv: 18,
        sheen: { en: "15% Satin Sheen", es: "15% Brillo Satinado" },
        architecturalNote: {
          en: "Highlights ceiling wood rafters with rich depth, creating a cozy resort atmosphere.",
          es: "Resalta las vigas del techo creando una atmósfera de resort de lujo en casa.",
        },
      },
      {
        id: "p-olive",
        name: { en: "Desert Olive Verde", es: "Verde Olivo del Valle" },
        collection: { en: "Botanical Earth", es: "Tierras Botánicas" },
        chemistry: { en: "Thermal-Reflective Acrylic", es: "Acrílico Termorreflectivo" },
        hex: "#5B6858",
        overlayColor: "#4B5949",
        overlayOpacity: 0.35,
        overlayBlend: "multiply",
        lrv: 25,
        sheen: { en: "12% Flat Velvet", es: "12% Mate Terciopelo" },
        architecturalNote: {
          en: "Cool botanical retreat that visually drops perceived summer temperature by several degrees.",
          es: "Refugio botánico que brinda una reconfortante sensación de frescura visual.",
        },
      },
      {
        id: "p-limestone",
        name: { en: "Warm Sedona Limestone", es: "Cantera Caliza de Sedona" },
        collection: { en: "Mineral Architecture", es: "Arquitectura Mineral" },
        chemistry: { en: "Silicone-Modified Masonry Topcoat", es: "Esmalte de Silicona para Mampostería" },
        hex: "#E0D7C8",
        overlayColor: "#EDE5D8",
        overlayOpacity: 0.28,
        overlayBlend: "overlay",
        lrv: 74,
        sheen: { en: "8% Natural Mineral", es: "8% Mate Mineral" },
        architecturalNote: {
          en: "Brightens shaded verandas while resisting rain streaks and airborne dust accumulation.",
          es: "Ilumina terrazas techadas resistiendo el polvo del desierto y manchas de lluvia.",
        },
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Lighting Presets & Environmental Filter Engine                             */
/* -------------------------------------------------------------------------- */

interface LightingPreset {
  id: LightingMode;
  name: { en: string; es: string };
  kelvin: string;
  icon: typeof Sun;
  timeRange: string;
  filterStyle: {
    filter: string;
    overlayGradient: string;
    lightDescription: { en: string; es: string };
  };
}

const LIGHTING_PRESETS: LightingPreset[] = [
  {
    id: "dawn",
    name: { en: "Dawn Light", es: "Amanecer Suave" },
    kelvin: "3000K",
    icon: SunHorizon,
    timeRange: "06:30 - 08:30 AM",
    filterStyle: {
      filter: "brightness(0.96) contrast(1.02) saturate(1.08) hue-rotate(-3deg)",
      overlayGradient: "linear-gradient(135deg, rgba(245, 197, 145, 0.18) 0%, rgba(200, 180, 220, 0.08) 100%)",
      lightDescription: {
        en: "Soft low-angle morning sunlight reveals warm undertones and gentle ambient shadows.",
        es: "Luz matutina rasante que revela subtonos cálidos y sombras tenues de gran delicadeza.",
      },
    },
  },
  {
    id: "noon",
    name: { en: "Desert Midday", es: "Sol Cenital" },
    kelvin: "5500K",
    icon: Sun,
    timeRange: "11:30 AM - 02:30 PM",
    filterStyle: {
      filter: "brightness(1.05) contrast(1.08) saturate(1.02)",
      overlayGradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(240, 235, 220, 0.04) 100%)",
      lightDescription: {
        en: "Direct high-noon Arizona light tests pigment purity and zero-glare factory smoothness.",
        es: "Luz solar directa de 5500K que pone a prueba la pureza del color y la ausencia de reflejos.",
      },
    },
  },
  {
    id: "sunset",
    name: { en: "Golden Sunset", es: "Atardecer Ámbar" },
    kelvin: "3200K",
    icon: SunHorizon,
    timeRange: "05:30 - 07:15 PM",
    filterStyle: {
      filter: "brightness(0.98) contrast(1.06) saturate(1.22) sepia(0.18)",
      overlayGradient: "linear-gradient(120deg, rgba(217, 119, 58, 0.28) 0%, rgba(135, 52, 28, 0.15) 100%)",
      lightDescription: {
        en: "Fabled Arizona golden hour. Rich amber and terracotta wavelengths illuminate wood grains.",
        es: "La célebre hora dorada de Arizona. Rayos ámbar que hacen vibrar las vetas de la madera.",
      },
    },
  },
  {
    id: "night",
    name: { en: "Warm Night", es: "Noche Íntima" },
    kelvin: "2400K",
    icon: MoonStars,
    timeRange: "08:30 PM - Late",
    filterStyle: {
      filter: "brightness(0.78) contrast(1.16) saturate(1.05) sepia(0.12)",
      overlayGradient: "radial-gradient(ellipse at 50% 40%, rgba(245, 175, 95, 0.24) 0%, rgba(18, 14, 12, 0.72) 100%)",
      lightDescription: {
        en: "Intimate architectural interior lighting with 2400K warm LED strips and subtle shadows.",
        es: "Iluminación arquitectónica de acento a 2400K, creando una atmósfera nocturna acogedora.",
      },
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Main Component                                                             */
/* -------------------------------------------------------------------------- */

export function SpatialHomeExperience() {
  const { locale, addSample, isInTray } = useRenovo();

  // Scroll Container Ref for progress tracking
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Active state per room
  const [activeRoomIdx, setActiveRoomIdx] = useState<number>(0);
  const [selectedFinishes, setSelectedFinishes] = useState<Record<string, string>>({
    kitchen: "k-alabaster",
    living: "l-oak",
    entryway: "e-terracotta",
    patio: "p-sand",
  });
  const [selectedLighting, setSelectedLighting] = useState<Record<string, LightingMode>>({
    kitchen: "noon",
    living: "sunset",
    entryway: "sunset",
    patio: "noon",
  });
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [justAddedTray, setJustAddedTray] = useState<boolean>(false);

  const activeRoom = SPATIAL_ROOMS[activeRoomIdx] || SPATIAL_ROOMS[0];
  const currentFinishId = selectedFinishes[activeRoom.id] || activeRoom.finishes[0].id;
  const currentFinish = activeRoom.finishes.find((f) => f.id === currentFinishId) || activeRoom.finishes[0];
  const currentLightingId = selectedLighting[activeRoom.id] || "noon";
  const currentLighting = LIGHTING_PRESETS.find((l) => l.id === currentLightingId) || LIGHTING_PRESETS[1];

  // Framer motion scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track scroll position to update active room smoothly
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Divide progress into 4 equal segments: [0..0.25), [0.25..0.5), [0.5..0.75), [0.75..1.0]
      const targetIdx = Math.min(
        SPATIAL_ROOMS.length - 1,
        Math.max(0, Math.floor(progress * SPATIAL_ROOMS.length))
      );
      setActiveRoomIdx((prev) => (prev !== targetIdx ? targetIdx : prev));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Handle direct tab click to jump to room
  const handleSelectRoom = (idx: number) => {
    setActiveRoomIdx(idx);
    setActiveHotspotId(null);

    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const roomScrollSegment = containerHeight / SPATIAL_ROOMS.length;
      const targetScroll = containerTop + idx * roomScrollSegment + 40;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // Select color finish for active room
  const handleSelectFinish = (finishId: string) => {
    setSelectedFinishes((prev) => ({
      ...prev,
      [activeRoom.id]: finishId,
    }));
  };

  // Select lighting for active room
  const handleSelectLighting = (mode: LightingMode) => {
    setSelectedLighting((prev) => ({
      ...prev,
      [activeRoom.id]: mode,
    }));
  };

  // Pin current room + color + lighting to sample tray
  const handlePinSample = () => {
    const item: SampleItem = {
      id: `spatial-${activeRoom.id}-${currentFinish.id}-${currentLighting.id}`,
      code: `ESPACIO-${activeRoom.number}`,
      category: "pigment",
      title: {
        en: `${activeRoom.title.en} · ${currentFinish.name.en}`,
        es: `${activeRoom.title.es} · ${currentFinish.name.es}`,
      },
      subtitle: `${currentFinish.chemistry[locale]} · ${currentLighting.name[locale]} (${currentLighting.kelvin})`,
      hex: currentFinish.hex,
    };

    addSample(item);
    setJustAddedTray(true);
    setTimeout(() => setJustAddedTray(false), 2400);
  };

  const isCurrentConfigInTray = isInTray(`spatial-${activeRoom.id}-${currentFinish.id}-${currentLighting.id}`);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#EAE2D5] text-[#261F1A] border-b border-[#DFD6C6] select-none"
      style={{
        // 4 rooms = 400vh scroll depth for butter-smooth pacing
        height: `${SPATIAL_ROOMS.length * 105}vh`,
      }}
    >
      {/* ===================================================================
          STICKY SPATIAL VIEWPORT (Fixed in view as user scrolls)
      =================================================================== */}
      <div
        ref={viewportRef}
        className="sticky top-16 sm:top-20 z-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full flex flex-col justify-between overflow-hidden bg-[#F4EFE6] border-b border-[#DFD6C6]"
      >
        {/* TOP ARCHITECTURAL CONTROL BAR */}
        <header className="w-full bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#DFD6C6] px-4 sm:px-6 lg:px-10 py-3.5 z-30 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          {/* Section Breadcrumb & Title */}
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B85D3B] text-[#FCFAF7] text-xs font-serif font-bold shadow-xs">
              <Compass size={15} weight="bold" />
            </span>
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-serif uppercase tracking-[0.14em] text-[#B85D3B] font-bold">
                <span>{locale === "en" ? "SPATIAL RESIDENTIAL TOUR" : "RECORRIDO ESPACIAL RESIDENCIAL"}</span>
                <span className="text-[#8C7A6B]">·</span>
                <span className="text-[#3D3228] font-semibold">{locale === "en" ? "SCROLL OR SELECT" : "DESLIZA O SELECCIONA"}</span>
              </div>
              <h2 className="text-sm sm:text-base font-serif font-semibold text-[#1A1410] tracking-tight line-clamp-1">
                {locale === "en" ? "Casa Renovo: Room-by-Room Architectural Finishes" : "Casa Renovo: Acabados de Autor Espacio por Espacio"}
              </h2>
            </div>
          </div>

          {/* ROOM SELECTOR TABS (Clickable & Scroll-Synced) */}
          <nav
            aria-label="Room spaces navigation"
            className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scrollbar-none"
          >
            {SPATIAL_ROOMS.map((room, idx) => {
              const isActive = idx === activeRoomIdx;
              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => handleSelectRoom(idx)}
                  className={`interactive-control flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-serif tracking-wide transition-all duration-300 shrink-0 ${
                    isActive
                      ? "bg-[#1A1410] text-[#FCFAF7] font-semibold shadow-md ring-1 ring-[#1A1410]"
                      : "bg-[#FCFAF7] text-[#3D3228] hover:text-[#1A1410] hover:bg-[#EAE2D5] border border-[#DFD6C6]"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] font-bold ${
                      isActive ? "text-[#C59B27]" : "text-[#8C7A6B]"
                    }`}
                  >
                    {room.number}
                  </span>
                  <span>{room.tag[locale]}</span>
                </button>
              );
            })}
          </nav>
        </header>

        {/* MAIN INTERACTIVE STAGE (Split: Left Stage, Right Controls) */}
        <div className="flex-1 w-full max-w-[1500px] mx-auto px-3 sm:px-6 lg:px-10 py-3 sm:py-4 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch overflow-y-auto lg:overflow-hidden">
          {/* ===============================================================
              LEFT 7 COLS: CINEMATIC VISUAL STAGE WITH LIVE LIGHTING & COLOR
          =============================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[340px] sm:min-h-[420px] rounded-3xl overflow-hidden border border-[#DFD6C6] bg-[#1A1410] relative shadow-2xl group">
            {/* BACKGROUND BASE PHOTOGRAPHY WITH FLUID CROSS-FADE */}
            <div className="absolute inset-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeRoom.id}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full"
                >
                  {/* Base Photography */}
                  <img
                    src={activeRoom.baseImage}
                    alt={activeRoom.title[locale]}
                    className="h-full w-full object-cover transition-all duration-700"
                    style={{
                      filter: currentLighting.filterStyle.filter,
                    }}
                  />

                  {/* Dynamic Color Pigment Tint Overlay (Reacts live to Color Switcher) */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-colors duration-700"
                    style={{
                      backgroundColor: currentFinish.overlayColor,
                      opacity: currentFinish.overlayOpacity,
                      mixBlendMode: currentFinish.overlayBlend,
                    }}
                  />

                  {/* Dynamic Desert Light & Kelvin Atmospheric Gradient Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-700"
                    style={{
                      background: currentLighting.filterStyle.overlayGradient,
                    }}
                  />

                  {/* Subtle Vignette for architectural cinematic depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* TOP BADGES & ACTIVE SPECIFICATION PILL */}
            <div className="relative z-10 p-3 sm:p-5 flex flex-wrap items-center justify-between gap-2 pointer-events-auto">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#1A1410]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#C59B27] font-semibold shadow-md">
                  {activeRoom.number} / 04 · {activeRoom.tag[locale]}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCFAF7]/90 backdrop-blur-md border border-[#DFD6C6] text-[11px] font-serif font-medium text-[#1A1410] shadow-sm">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block border border-black/20"
                    style={{ backgroundColor: currentFinish.hex }}
                  />
                  <span>{currentFinish.name[locale]}</span>
                </span>
              </div>

              {/* Lighting Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1410]/80 backdrop-blur-md border border-white/15 text-[11px] font-serif text-[#FCFAF7] shadow-sm">
                <currentLighting.icon size={13} className="text-[#C59B27]" weight="fill" />
                <span>{currentLighting.name[locale]}</span>
                <span className="text-[#C59B27] font-mono text-[10px] font-bold">({currentLighting.kelvin})</span>
              </div>
            </div>

            {/* INTERACTIVE ARCHITECTURAL HOTSPOTS */}
            <div className="absolute inset-0 z-10 pointer-events-auto">
              {activeRoom.hotspots.map((spot) => {
                const isSelected = activeHotspotId === spot.id;
                return (
                  <div
                    key={spot.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: spot.top, left: spot.left }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveHotspotId(isSelected ? null : spot.id)}
                      aria-label={spot.title[locale]}
                      className="group relative flex items-center justify-center p-2 focus:outline-none"
                    >
                      {/* Pulsing beacon ring */}
                      <span className="absolute h-8 w-8 rounded-full bg-[#B85D3B]/40 animate-ping" />
                      <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#B85D3B] text-[#FCFAF7] border-2 border-[#FCFAF7] shadow-lg group-hover:scale-110 transition-transform">
                        <Eye size={12} weight="bold" />
                      </span>
                    </button>

                    {/* Hotspot Floating Tooltip Card */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.94 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.94 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#DFD6C6] text-[#1A1410] shadow-2xl z-30"
                        >
                          <div className="flex items-center justify-between pb-1 border-b border-[#DFD6C6] mb-1.5">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B85D3B] font-bold">
                              {locale === "en" ? "CRAFT DETAIL" : "DETALLE DE AUTOR"}
                            </span>
                            <button
                              type="button"
                              onClick={() => setActiveHotspotId(null)}
                              className="text-[11px] text-[#8C7A6B] hover:text-[#1A1410]"
                            >
                              ✕
                            </button>
                          </div>
                          <h4 className="text-xs font-serif font-semibold text-[#1A1410]">{spot.title[locale]}</h4>
                          <p className="text-[11px] text-[#3D3228] leading-relaxed mt-1">{spot.spec[locale]}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* BOTTOM STAGE OVERLAY: ROOM HEADLINE & ATMOSPHERE */}
            <div className="relative z-10 p-4 sm:p-6 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-[#FCFAF7] tracking-tight">
                    {activeRoom.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E0D7CC] font-normal max-w-xl line-clamp-2">
                    {activeRoom.description[locale]}
                  </p>
                </div>

                {/* Hotspots hint */}
                <div className="shrink-0 text-left sm:text-right">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-serif text-[#C59B27] bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                    <Sparkle size={12} weight="fill" />
                    <span>
                      {locale === "en"
                        ? `${activeRoom.hotspots.length} Craft Hotspots`
                        : `${activeRoom.hotspots.length} Puntos de Maestría`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===============================================================
              RIGHT 5 COLS: DUAL ENGINE (COLOR PALETTE + DESERT LIGHT)
          =============================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full bg-[#FCFAF7] rounded-3xl p-4 sm:p-5 lg:p-6 border border-[#DFD6C6] shadow-xl overflow-y-auto">
            {/* SECTION 1: COLOR PALETTE SWITCHER */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Palette size={16} className="text-[#B85D3B]" weight="bold" />
                  <span className="text-xs font-serif uppercase tracking-[0.14em] text-[#1A1410] font-bold">
                    {locale === "en" ? "1. Architectural Pigment & Finish" : "1. Pigmento y Acabado de Fábrica"}
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium text-[#8C7A6B]">
                  LRV: {currentFinish.lrv}%
                </span>
              </div>

              {/* Swatch Pill Buttons */}
              <div className="grid grid-cols-5 gap-2">
                {activeRoom.finishes.map((finish) => {
                  const isSelected = finish.id === currentFinish.id;
                  return (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => handleSelectFinish(finish.id)}
                      className={`interactive-control group relative flex flex-col items-center p-2 rounded-2xl border transition-all ${
                        isSelected
                          ? "border-[#B85D3B] bg-[#F4EFE6] shadow-sm ring-1 ring-[#B85D3B]"
                          : "border-[#DFD6C6] bg-[#FCFAF7] hover:border-[#1A1410] hover:bg-[#F4EFE6]"
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border border-black/20 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{ backgroundColor: finish.hex }}
                      >
                        {isSelected && <Check size={14} className="text-white drop-shadow-md" weight="bold" />}
                      </div>
                      <span className="text-[10px] font-serif text-[#1A1410] font-medium mt-1.5 text-center leading-tight line-clamp-1">
                        {finish.name[locale].split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Color Formula Details */}
              <div className="p-3.5 rounded-2xl bg-[#F4EFE6] border border-[#DFD6C6] space-y-1.5 text-xs shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="font-serif font-semibold text-[#1A1410] text-sm">
                    {currentFinish.name[locale]}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FCFAF7] border border-[#DFD6C6] text-[#3D3228]">
                    {currentFinish.sheen[locale]}
                  </span>
                </div>
                <div className="text-[11px] text-[#B85D3B] font-mono font-medium">
                  {currentFinish.chemistry[locale]}
                </div>
                <p className="text-[12px] text-[#3D3228] leading-relaxed pt-1 border-t border-[#DFD6C6]/80">
                  {currentFinish.architecturalNote[locale]}
                </p>
              </div>
            </div>

            {/* SECTION 2: DESERT LIGHTING ENGINE (4 KELVIN MODES) */}
            <div className="space-y-3 pt-2 border-t border-[#DFD6C6]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sun size={16} className="text-[#B85D3B]" weight="bold" />
                  <span className="text-xs font-serif uppercase tracking-[0.14em] text-[#1A1410] font-bold">
                    {locale === "en" ? "2. Desert Light & Kelvin Mode" : "2. Luz del Desierto y Temperatura Kelvin"}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#C59B27] font-bold">
                  {currentLighting.kelvin}
                </span>
              </div>

              {/* 4 Time Presets */}
              <div className="grid grid-cols-4 gap-2">
                {LIGHTING_PRESETS.map((light) => {
                  const isSelected = light.id === currentLighting.id;
                  const Icon = light.icon;
                  return (
                    <button
                      key={light.id}
                      type="button"
                      onClick={() => handleSelectLighting(light.id)}
                      className={`interactive-control flex flex-col items-center justify-center p-2 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? "bg-[#1A1410] text-[#FCFAF7] border-[#1A1410] shadow-sm"
                          : "bg-[#FCFAF7] text-[#3D3228] border-[#DFD6C6] hover:border-[#1A1410] hover:bg-[#F4EFE6]"
                      }`}
                    >
                      <Icon
                        size={18}
                        weight={isSelected ? "fill" : "regular"}
                        className={isSelected ? "text-[#C59B27]" : "text-[#8C7A6B]"}
                      />
                      <span className="text-[10px] font-serif font-medium mt-1 line-clamp-1">
                        {light.name[locale]}
                      </span>
                      <span className="text-[9px] font-mono opacity-80">{light.kelvin}</span>
                    </button>
                  );
                })}
              </div>

              {/* Lighting description callout */}
              <div className="p-3 rounded-xl bg-[#FCFAF7] border border-[#DFD6C6] text-[11px] text-[#3D3228] flex items-start gap-2 shadow-xs">
                <Info size={14} className="text-[#B85D3B] shrink-0 mt-0.5" />
                <span className="leading-snug">{currentLighting.filterStyle.lightDescription[locale]}</span>
              </div>
            </div>

            {/* SECTION 3: SPECIFICATION TRAY PIN & CONSULTATION ACTION */}
            <div className="pt-2 border-t border-[#DFD6C6] flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={handlePinSample}
                className={`interactive-control flex-1 w-full sm:w-auto min-h-[46px] px-4 py-2.5 rounded-full text-xs font-serif tracking-wide font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${
                  isCurrentConfigInTray || justAddedTray
                    ? "bg-[#3D5A45] text-[#FCFAF7] border border-[#3D5A45]"
                    : "bg-[#B85D3B] hover:bg-[#A34E2F] text-[#FCFAF7] border border-[#B85D3B]"
                }`}
              >
                {justAddedTray || isCurrentConfigInTray ? (
                  <>
                    <Check size={15} weight="bold" />
                    <span>{locale === "en" ? "Saved to Sample Tray" : "Guardado en Muestrario"}</span>
                  </>
                ) : (
                  <>
                    <BookmarkSimple size={15} weight="bold" />
                    <span>{locale === "en" ? "Pin Finish to Sample Tray" : "Guardar en Muestrario"}</span>
                  </>
                )}
              </button>

              <Link
                href="/contacto"
                className="interactive-control w-full sm:w-auto min-h-[46px] px-4 py-2.5 rounded-full border border-[#DFD6C6] hover:border-[#1A1410] bg-[#FCFAF7] hover:bg-[#F4EFE6] text-[#1A1410] text-xs font-serif font-semibold flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>{locale === "en" ? "Consult on Space" : "Cotizar este Espacio"}</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM STEP PROGRESS TRACK */}
        <footer className="w-full bg-[#FCFAF7] border-t border-[#DFD6C6] px-4 sm:px-6 lg:px-10 py-2.5 flex items-center justify-between text-xs text-[#3D3228] z-30">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-[#1A1410]">
              {activeRoom.number} / 04
            </span>
            <span className="hidden sm:inline text-[#8C7A6B]">·</span>
            <span className="hidden sm:inline font-normal text-[#3D3228]">
              {activeRoom.orientationAdvice[locale]}
            </span>
          </div>

          {/* Stepper Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeRoomIdx === 0}
              onClick={() => handleSelectRoom(Math.max(0, activeRoomIdx - 1))}
              className="p-1.5 rounded-full border border-[#DFD6C6] hover:bg-[#EAE2D5] disabled:opacity-30 disabled:pointer-events-none text-[#1A1410]"
              aria-label="Previous Room"
            >
              <CaretLeft size={14} weight="bold" />
            </button>
            <div className="flex items-center gap-1">
              {SPATIAL_ROOMS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeRoomIdx ? "w-6 bg-[#B85D3B]" : "w-1.5 bg-[#DFD6C6]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              disabled={activeRoomIdx === SPATIAL_ROOMS.length - 1}
              onClick={() => handleSelectRoom(Math.min(SPATIAL_ROOMS.length - 1, activeRoomIdx + 1))}
              className="p-1.5 rounded-full border border-[#DFD6C6] hover:bg-[#EAE2D5] disabled:opacity-30 disabled:pointer-events-none text-[#1A1410]"
              aria-label="Next Room"
            >
              <CaretRight size={14} weight="bold" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
