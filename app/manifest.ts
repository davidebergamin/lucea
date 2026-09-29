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
        src: "/logo/favicon-color-32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/logo/favicon-color-320.png",
        sizes: "320x320",
        type: "image/png"
      },
      {
        src: "/logo/apple-touch-icon-color.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    id: siteUrl
  };
}
