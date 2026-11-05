import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100 % statique : `next build` génère le dossier `out/`
  // à déposer tel quel dans public_html sur Hostinger.
  output: "export",
  // /honoraires/ -> out/honoraires/index.html (servi nativement par Apache)
  trailingSlash: true,
  images: {
    // Pas de serveur d'optimisation en export statique : les images de
    // public/images sont déjà redimensionnées et compressées.
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
