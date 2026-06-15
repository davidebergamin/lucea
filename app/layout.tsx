import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap"
});

const body = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luceafotografie.it"),
  title: {
    default: "Lucea | Fotografo matrimonio Milano reportage vero",
    template: "%s | Lucea Fotografie"
  },
  description:
    "Lucea e Andrea Mauri: fotografo matrimonio a Milano per coppie che vogliono reportage spontaneo, niente pose forzate, foto e video veri.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Lucea | Fotografo matrimonio Milano",
    description:
      "Reportage di matrimonio a Milano, Lombardia, Italia ed estero. Momenti veri, niente posato.",
    type: "website",
    locale: "it_IT",
    images: ["/photos/hero-graffiti.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
