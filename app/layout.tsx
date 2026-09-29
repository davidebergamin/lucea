import type { Metadata, Viewport } from "next";
import { ScrollToTopOnNavigate } from "../components/ScrollToTopOnNavigate";
import { Cabin, Lora } from "next/font/google";
import { siteUrl } from "../lib/site-content";
import { seoOgImage } from "../lib/seo";
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
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

const defaultTitle = "Fotografo matrimonio Milano | Lucea — storie vere, zero pose";
const defaultDescription =
  "Lucea è fotografia e video di matrimonio a Milano: reportage spontaneo, niente pose forzate. Andrea Mauri, base a Milano, trasferte in Italia e all'estero.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Lucea Fotografie"
  },
  description: defaultDescription,
  applicationName: "Lucea Fotografie",
  authors: [{ name: "Andrea Mauri", url: `${siteUrl}/chi-sono` }],
  creator: "Andrea Mauri",
  publisher: "Lucea Fotografie",
  category: "Fotografia di matrimonio",
  keywords: [
    "fotografo matrimonio Milano",
    "fotografo reportage matrimonio Milano",
    "fotografo documentario matrimonio Milano",
    "fotografo matrimonio spontaneo Milano",
    "fotografo matrimonio non in posa Milano",
    "Lucea fotografie matrimonio",
    "Andrea Mauri fotografo"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/logo/favicon-color-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-color-48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo/favicon-color-320.png", sizes: "320x320", type: "image/png" }
    ],
    apple: [{ url: "/logo/apple-touch-icon-color.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Lucea Fotografie",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: seoOgImage,
        width: 2000,
        height: 1334,
        alt: "Sposi sotto un arco di lightsaber, fotografia di matrimonio Lucea a Milano"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [seoOgImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  other: {
    "geo.region": "IT-MI",
    "geo.placename": "Milano"
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
