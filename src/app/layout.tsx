import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://29-black.es";
const SITE_NAME = "29Black";
const SITE_DESCRIPTION =
  "Juega a los juegos de casino y apuesta en deportes en 29Black. Hasta un 200 % de bono en tu primer depósito.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} - Casino en línea y apuestas deportivas`,
  description: SITE_DESCRIPTION,
  icons: [{ url: "/favIcon.svg", type: "image/svg+xml" }],
  openGraph: {
    title: `${SITE_NAME} - Casino en línea y apuestas deportivas`,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    locale: "es_ES",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Casino en línea y apuestas deportivas`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/og-image.jpg`,
    },
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favIcon.svg`,
      image: `${SITE_URL}/og-image.jpg`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
