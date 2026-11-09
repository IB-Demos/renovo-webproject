import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RenovoProvider } from "@/context/RenovoContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SampleTrayDrawer } from "@/components/layout/SampleTrayDrawer";
import { CasaAtmosphereCanvas } from "@/components/architectural/CasaAtmosphereCanvas";
import { CasaSpatialHud } from "@/components/architectural/CasaSpatialHud";
import { FloatingQuoteButton } from "@/components/layout/FloatingQuoteButton";
import { RenovoChatbot } from "@/components/chat/RenovoChatbot";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Renovo Painting Solutions | Custom Cabinet Manufacturing & Architectural Coatings",
    template: "%s | Renovo Painting Solutions",
  },
  description:
    "Bespoke kitchen cabinet manufacturing, CNC millwork, catalyzed 2K cabinet refinishing, and residential interior and exterior architectural painting.",
  keywords: [
    "Custom Kitchen Cabinets",
    "Cabinet Manufacturing",
    "2K Catalyzed Cabinet Refinishing",
    "Interior Architectural Painting",
    "Exterior House Painting",
    "Renovo Painting Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Renovo Painting Solutions",
    alternateName: "Renovo Painting Solutions",
    telephone: "+1-602-550-4369",
    email: "contact@renovoaz.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2231 W Shangri La Rd, Ste K-L",
      addressLocality: "Phoenix",
      addressRegion: "AZ",
      postalCode: "85029",
      addressCountry: "US",
    },
    description:
      "Custom kitchen and cabinet manufacturing, custom entertainment centers, catalyzed 2K millwork refinishing, and interior/exterior residential painting in Phoenix, Arizona.",
    knowsAbout: [
      "Custom Cabinet Manufacturing",
      "Custom Entertainment Centers & Built-Ins",
      "Kitchen Remodeling & Refacing",
      "2K Polyurethane Catalyzed Coatings",
      "Interior Residential Painting",
      "Exterior House Painting",
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <RenovoProvider>
          <CasaAtmosphereCanvas />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <SampleTrayDrawer />
          <CasaSpatialHud />
          <FloatingQuoteButton />
          <RenovoChatbot />
        </RenovoProvider>
      </body>
    </html>
  );
}
