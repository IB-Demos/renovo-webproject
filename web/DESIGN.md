# DESIGN.md: Renovo Painting Solutions
**System Name:** Fine Cabinetry & Architectural Color Atelier (`renovo-atelier-v2`)
**Brand Essence:** Artisanal Warmth, Custom Millwork Craftsmanship & Rich Architectural Color
**Standard:** \$10,000+ Luxury Interior Design & Custom Cabinetry Agency Experience (In the league of Architectural Digest, deVOL, Amber Interiors)
**Languages:** Bilingual (`en` Primary / `es` Secondary)

---

## 1. Visual Direction: From Cold Tech to Artisanal Living
Renovo is NOT a software or robotics engineering company. It is a **master cabinetry, custom millwork, and luxury architectural painting company** based in Phoenix, Arizona with 10+ years of handcrafting dreams into reality.

* **Emotional Feeling:** Warm, soulful, bespoke, luminous, textured, tactile, and deeply artistic.
* **Inspiration:** High-end architectural magazines, bespoke British & Scandinavian cabinet ateliers (deVOL, Plain English, Reform), Arizona sun-washed natural materials, rift-cut white oak, rich olive greens, Terracotta clay, deep navy indigo, and artisan warm gold.

---

## 2. Color Palette: The Living Atelier

| Token | Name | Hex | Purpose |
| :--- | :--- | :--- | :--- |
| `--bg` | Warm Linen | `#FBF9F5` | Calming natural linen / warm alabaster canvas. Soft on the eyes, rich in tactile warmth. |
| `--surface` | Milled Chalk & Oat | `#F3EFE8` | Soft organic backdrop for cards, drawers, and moodboard stages. |
| `--surface-card` | Pure Vellum White | `#FFFFFF` | Crisp contrast surface for photos, swatch chips, and active selectors. |
| `--fg` | Espresso Charcoal | `#211C18` | Deep warm espresso charcoal ink. Softer and much richer than sterile digital black. |
| `--muted` | Earth Umber | `#685F56` | Warm architectural earth tone for descriptions, dimensions, and secondary notes. |
| `--border` | Soft Sandline | `rgba(56, 44, 34, 0.12)` | Delicate, organic separation line. |
| `--gold-artisan` | Renovo Warm Gold | `#C59B27` | The official brand accent from the Renovo identity. Warm, radiant, bespoke. |
| `--olive-sage` | Botanical Olive | `#3D5A45` | Deep organic forest/sage tone, drawn straight from Renovo's signature built-ins. |
| `--terracotta` | Kiln Terracotta | `#B85D3B` | Earthy Arizona desert warmth for entryways and focal statements. |
| `--navy-atelier` | Midnight Slate | `#22303C` | Grounded, maritime depth for kitchen islands and dramatic contrast. |
| `--wood-oak` | Honey White Oak | `#C79F67` | Natural grain warmth representing Renovo's custom rift-cut woodwork. |

---

## 3. Typography & Editorial Soul
* **Primary Headlines (`--font-serif`):** `Playfair Display` (Weight 600, Italic & Regular). Expressive, elegant, human, reminiscent of heritage craft and luxury design publications.
* **Secondary & Body (`--font-sans`):** `Plus Jakarta Sans` (Weights 400, 500, 600). Friendly, clean, readable, architectural humanist sans-serif.
* **Details & Dimensions (`--font-mono`):** `JetBrains Mono` with `tabular-nums`, used gently for dimensions, color formulas, and pricing estimates, without ever overpowering the artistry.

---

## 4. Tactile Interactions (Emil Kowalski Physics)
* Smooth, buttery micro-interactions (`cubic-bezier(0.22, 1, 0.36, 1)`).
* Swatches and material cards elevate on hover with warm, diffused shadows (`rgba(56, 44, 34, 0.08)`).
* Tactile `:active` button scale (`scale(0.97)`).
* Rich Before/After transformation slider with tactile brass handle.
