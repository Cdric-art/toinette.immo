import { honorairesAnchors as h } from "@/lib/site";
import type { Service } from "./ServiceSection";

const zone = "Puteaux, La Défense, Suresnes, Nanterre ou Courbevoie";

export const services: Service[] = [
  {
    id: "conciergerie",
    theme: "conciergerie",
    title: "Conciergerie",
    logo: {
      src: "/images/logo-conciergerie.png",
      width: 489,
      height: 382,
      alt: "Toinette Conciergerie — On gère vos biens quand vous êtes loin",
    },
    intro:
      "Vous êtes propriétaire d’un appartement ou d’une maison et vous souhaitez rentabiliser vos périodes d’absence ? Confiez à Toinette Conciergerie la gestion de votre bien en location courte durée.",
    steps: [
      {
        title: "Étude personnalisée",
        text: "Visite de votre bien, conseils d’aménagement, vérifications légales et règlementaires, estimation de revenus.",
      },
      {
        title: "Mise en route",
        text: "Démarches administratives, création de l’annonce, état des lieux et inventaire complet, préparation du logement.",
      },
      {
        title: "Accueils et ménages",
        text: "Accueil des voyageurs, assistance 7j/7, ménage professionnel et inspection du logement entre chaque séjour.",
      },
      {
        title: "Pas de frais cachés",
        text: "La fourniture du linge de lit, du linge de toilette et des consommables de base est incluse !",
      },
    ],
    reasonsTitle: "Quand louer en location courte durée ?",
    reasons: [
      {
        emoji: "🧳",
        title: "Pendant vos déplacements",
        text: "Vous êtes souvent en déplacement professionnel ? Optimisez vos absences en louant votre bien.",
      },
      {
        emoji: "🌴",
        title: "Pendant vos voyages",
        text: "Et si vos prochaines vacances se finançaient toutes seules grâce à la location courte durée ?",
      },
      {
        emoji: "🏡",
        title: "Pendant vos séjours dans votre résidence secondaire",
        text: "Proposez votre résidence principale en location courte durée.",
      },
    ],
    offersTitle: "Nos packs",
    offers: [
      {
        title: "Pack de démarrage",
        price: ["180 €"],
        items: [
          "Visite du bien",
          "Conseils personnalisés",
          "Inventaire et état des lieux",
          "Photos",
          "Rédaction de l’annonce",
        ],
        cta: { label: "Pack de démarrage", href: h.conciergeriePacks },
      },
      {
        title: "Pack Clé en main",
        price: ["24%", "des revenus *"],
        items: [
          "!Accueil physique",
          "Assistance 7j/7",
          "Linge et consommables",
          "Ménage et blanchisserie",
          "Inspections régulières",
        ],
        cta: { label: "Pack Clé en main", href: h.conciergeriePacks },
      },
      {
        title: "Pack Autonomie",
        price: ["19,2%", "des revenus *"],
        items: [
          "!Accueil autonome",
          "Assistance 7j/7",
          "Linge et consommables",
          "Ménage et blanchisserie",
          "Inspections régulières",
        ],
        cta: { label: "Pack Autonomie", href: h.conciergeriePacks },
      },
      {
        title: "Coup de pouce ponctuel",
        price: ["30 €", "par déplacement"],
        items: [
          "Remise de clés",
          "Arrosage",
          "Suivi de chantier",
          "Relève de courrier",
          "Livraison",
        ],
        cta: { label: "Déplacement ponctuel", href: h.conciergerieCoupDePouce },
      },
    ],
    note: "Prix TTC | * Commission calculée sur les revenus bruts générés par les nuitées avant frais de service Airbnb - Hors frais de ménage refacturés à 100%.",
  },
  {
    id: "gestion-locative",
    theme: "gestion",
    title: "Gestion locative",
    logo: {
      src: "/images/logo-gestion-locative.png",
      width: 500,
      height: 388,
      alt: "Toinette Gestion locative — On encaisse les galères, vous encaissez les loyers",
    },
    intro: `Vous êtes propriétaire d’un appartement ou d’une maison à ${zone} ? Confiez la location de votre bien à Toinette Gestion pour vous assurer des revenus locatifs sans tracas.`,
    steps: [
      {
        title: "Mise en location",
        text: "Estimation de loyer, publication de l’annonce, visites, étude des dossiers locataires",
      },
      {
        title: "Entrée du locataire",
        text: "Rédaction et signature du bail, accompagnement aux démarches d’installation, état des lieux et inventaire",
      },
      {
        title: "Suivi et entretien",
        text: "Relations avec le locataire, gestion des petites réparations et des sinistres",
      },
      {
        title: "Comptabilité",
        text: "Appels de loyers, quittances, régularisation des charges, compte-rendu de gestion mensuel détaillé",
      },
    ],
    reasonsTitle: "Pourquoi confier la gestion locative de son bien ?",
    reasons: [
      {
        emoji: "🏃",
        title: "Gain de temps",
        text: "Vous êtes déjà débordé·e et vous n’avez ni le temps ni l’envie de gérer les sollicitations de vos locataires.",
      },
      {
        emoji: "⚖️",
        title: "Fiabilité juridique",
        text: "Vous souhaitez sécuriser les relations avec vos locataires dans le respect des lois et des procédures.",
      },
      {
        emoji: "🗺️",
        title: "Proximité",
        text: "Vous vivez dans une autre région ou à l’étranger et vous cherchez un interlocuteur fiable sur place.",
      },
    ],
    offersTitle: "Nos honoraires",
    offers: [
      {
        title: "Mise en location",
        price: ["360 €", "+", "9€", "/ m²"],
        items: [
          "Estimation de loyer",
          "Photos et annonce",
          "Visites et étude des dossiers",
          "Rédaction du bail",
          "État des lieux et inventaire",
        ],
        cta: { label: "Mise en location", href: h.gestionLocation },
      },
      {
        title: "Gestion locative",
        price: ["6%", "des loyers *"],
        items: [
          "Encaissement des loyers",
          "Quittances et révision",
          "Relation locataires",
          "Compte-rendu de gestion",
          "Gestion de sinistres",
        ],
        cta: { label: "Gestion complète", href: h.gestionLocation },
      },
      {
        title: "Gestion locative + garantie",
        price: ["9%", "des loyers *"],
        items: ["Pack gestion locative", "Garantie loyers impayés"],
        cta: { label: "Gestion + GLI", href: h.gestionLocation },
      },
      {
        title: "Démarches",
        price: ["120 €", "par démarche"],
        items: [
          "Permis de louer",
          "Changement d’usage",
          "Représentation en AG",
          "Sinistre complexe",
          "Dossier contentieux",
        ],
        cta: { label: "Démarches", href: h.gestionDemarches },
      },
    ],
    note: "Prix TTC | * Commission calculée sur la totalité des sommes encaissées (loyer + charges locatives + provisions pour charges, TVA et CRL le cas échéant)",
  },
  {
    id: "syndic",
    theme: "syndic",
    title: "Syndic de copropriété",
    logo: {
      src: "/images/logo-syndic.png",
      width: 490,
      height: 385,
      alt: "Toinette Syndic de copropriété — Le syndic qui ne fuit pas quand ça fuit",
    },
    intro: `Vous êtes propriétaire au sein d’une petite copropriété de 2 à 30 lots à ${zone} ? Choisissez Toinette Gestion lors de votre prochaine assemblée générale pour gagner en transparence et en réactivité.`,
    steps: [
      {
        title: "Prise de contact",
        text: "Nous étudions ensemble les caractéristiques de votre copropriété et vos attentes.",
      },
      {
        title: "Vote en AG",
        text: "Vous soumettez le contrat de syndic de Toinette Gestion en assemblée générale.",
      },
      {
        title: "Reprise de gestion",
        text: "Toinette Gestion devient votre nouveau syndic et assure la transition avec votre ancien syndic et vos fournisseurs.",
      },
      {
        title: "Des échanges fluides",
        text: "Une interlocutrice unique, réactive et pédagogue, pour des échanges constructifs et transparents.",
      },
    ],
    reasonsTitle: "Pourquoi désigner Toinette Gestion comme syndic ?",
    reasons: [
      {
        emoji: "💰",
        title: "Tarifs compétitifs",
        text: "Les honoraires de syndic pèsent souvent lourd dans le budget des petites copropriétés.",
      },
      {
        emoji: "⚡️",
        title: "Dynamisme",
        text: "Une gestionnaire joignable et à l’écoute, des travaux et sinistres gérés en toute transparence.",
      },
      {
        emoji: "💪",
        title: "Bras droit du Conseil syndical",
        text: "Projets de travaux, problématiques juridiques : Toinette Gestion accompagne le Conseil syndical",
      },
    ],
    offersTitle: "Nos honoraires",
    offers: [
      {
        title: "Forfait annuel",
        subtitle: "Sur devis",
        items: [
          "AG annuelle",
          "Visite annuelle",
          "Comptabilité",
          "Gestion courante",
          "Gestion du personnel",
        ],
        cta: { label: "Forfait annuel", href: h.syndicForfait },
      },
      {
        title: "Prestations particulières",
        items: [
          "AG extraordinaires",
          "Visites supplémentaires",
          "Modification du règlement de copropriété",
          "Litiges et contentieux",
        ],
        cta: { label: "Prestations hors forfait", href: h.syndicPrestations },
      },
    ],
    note: "Contrat-type conforme au décret n° 2015-342 du 26 mars 2015 à soumettre pour approbation lors de l’assemblée générale annuelle",
  },
];
