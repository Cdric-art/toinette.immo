import type { Metadata, Viewport } from "next";
import { Antonio, Barlow } from "next/font/google";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Police des titres. La maquette utilise « Lemon SemiBold » (non libre) ;
// Antonio Bold est l'équivalent libre le plus proche. Pour utiliser la vraie
// police, la remplacer par next/font/local en gardant la même variable CSS.
const displayFace = Antonio({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Toinette Gestion — Conciergerie, gestion locative et syndic à Puteaux",
    template: "%s | Toinette Gestion",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: "Toinette Gestion — Conciergerie, gestion locative et syndic",
    description: site.description,
    images: [{ url: "/images/nina.webp", width: 640, height: 640 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f6f6",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: "+33683982559",
  image: `${site.url}/images/nina.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: "FR",
  },
  areaServed: ["Puteaux", "La Défense", "Suresnes", "Nanterre", "Courbevoie"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${barlow.variable} ${displayFace.variable} antialiased`}
    >
      <body className="flex min-h-svh flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <ContactCta />
        <Footer />
      </body>
    </html>
  );
}
