import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "99Start",
    short_name: "99Start",
    description: "Gestao de estabelecimentos, mesas e comandas com foco em operacao mobile.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111d",
    theme_color: "#07111d",
    orientation: "portrait",
    lang: "pt-BR",
    categories: ["business", "productivity", "food"],
    icons: [
      {
        src: "/icon?size=192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon?size=512",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
