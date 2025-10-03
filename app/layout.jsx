import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://www.mva-avocats.fr'),
  title: "MVA AVOCATS - Cabinet d'avocats à Paris | Droit des affaires spécialisé",
  description: "Cabinet d'avocats au Barreau de Paris depuis trois décennies. Expertise en droit des affaires, sociétés, procédures collectives et concurrence. Situé à proximité de la Place de l'Étoile.",
  keywords: "avocat Paris, droit des affaires, droit des sociétés, procédures collectives, droit concurrence, cabinet avocat expert",
  authors: [{ name: "MVA AVOCATS" }],
  openGraph: {
    title: "MVA AVOCATS - Votre Partenaire Stratégique en Droit des Affaires",
    description: "Depuis trois décennies, notre cabinet accompagne les entreprises dans toutes les étapes de leur développement juridique.",
    url: "https://www.mva-avocats.fr",
    siteName: "MVA AVOCATS",
    images: [
      {
        url: "/images/vue-horizontale-arc-triomphe.jpg",
        width: 1200,
        height: 630,
        alt: "Cabinet MVA AVOCATS à Paris",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVA AVOCATS - Cabinet d'avocats à Paris",
    description: "Expertise en droit des affaires depuis trois décennies",
    image: "/images/vue-horizontale-arc-triomphe.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
