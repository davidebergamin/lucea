import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucea Fotografie",
    short_name: "Lucea",
    description:
      "Fotografia e video di matrimonio a Milano. Reportage spontaneo, zero pose forzate.",
    start_url: "/",
    display: "browser",
    lang: "it",
    background_color: "#ffffff",
    theme_color: "#c6843a",
    icons: [
      {
        src: "/logo/logo-lucea-mono-320.png",
        sizes: "320x320",
        type: "image/png"
      }
    ],
    id: siteUrl
  };
}
