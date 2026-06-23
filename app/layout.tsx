import type { Metadata } from "next";
import { ScrollToTopOnNavigate } from "../components/ScrollToTopOnNavigate";
import { Cabin, Lora } from "next/font/google";
import "./globals.css";

const display = Cabin({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap"
});

const body = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luceafotografie.it"),
  title: {
    default: "Lucea | Fotografia matrimonio Milano senza pose forzate",
    template: "%s | Lucea Fotografie"
  },
  description:
    "Lucea: fotografia di matrimonio a Milano per coppie che vogliono reportage spontaneo, niente pose forzate, foto e video veri.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Lucea | Fotografia matrimonio Milano",
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
        <ScrollToTopOnNavigate />
        {children}
      </body>
    </html>
  );
}
