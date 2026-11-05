export const site = {
  name: "Toinette Gestion",
  url: "https://toinette.immo",
  description:
    "Toinette Gestion gère vos biens en location courte ou longue durée et vos copropriétés à Puteaux, La Défense, Suresnes, Nanterre et Courbevoie. Conciergerie Airbnb, gestion locative et syndic de copropriété.",
  phone: "06 83 98 25 59",
  phoneHref: "tel:+33683982559",
  email: "nina@toinette.immo",
  emailHref: "mailto:nina@toinette.immo",
  address: {
    street: "18 rue des Bas Rogers",
    postalCode: "92800",
    city: "Puteaux",
  },
  espaceClientUrl:
    "https://www.moncompte.immo/login?client=TGOEISN4847671&societe=S1",
} as const;

/** Ancres de la page d'accueil */
export const homeAnchors = {
  conciergerie: "/#conciergerie",
  gestion: "/#gestion-locative",
  syndic: "/#syndic",
  agence: "/#agence",
} as const;

/** Ancres de la page Honoraires */
export const honorairesAnchors = {
  conciergeriePacks: "/honoraires/#conciergerie-packs",
  conciergerieCoupDePouce: "/honoraires/#conciergerie-coup-de-pouce",
  gestionLocation: "/honoraires/#gestion-location",
  gestionDemarches: "/honoraires/#gestion-demarches",
  syndicForfait: "/honoraires/#syndic-forfait",
  syndicPrestations: "/honoraires/#syndic-prestations",
} as const;

export const routes = {
  home: "/",
  honoraires: "/honoraires/",
  mentionsLegales: "/mentions-legales/",
  mediateur: "/mentions-legales/#mediateur",
} as const;

/** Thèmes de couleur par activité (classes Tailwind complètes, pour le JIT) */
export const themes = {
  conciergerie: {
    text: "text-conciergerie",
    bg: "bg-conciergerie",
    tint: "bg-conciergerie-tint",
    border: "border-conciergerie",
    hover: "hover:bg-conciergerie hover:text-white",
    buttonHover: "hover:bg-[#e8325a]",
  },
  gestion: {
    text: "text-gestion",
    bg: "bg-gestion",
    tint: "bg-gestion-tint",
    border: "border-gestion",
    hover: "hover:bg-gestion hover:text-white",
    buttonHover: "hover:bg-[#0085a3]",
  },
  syndic: {
    text: "text-syndic",
    bg: "bg-syndic",
    tint: "bg-syndic-tint",
    border: "border-syndic",
    hover: "hover:bg-syndic hover:text-white",
    buttonHover: "hover:bg-[#e65000]",
  },
} as const;

export type ThemeName = keyof typeof themes;
