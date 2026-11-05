import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales, médiateur de la consommation et politique de confidentialité de Toinette Gestion.",
  alternates: { canonical: "/mentions-legales/" },
};

function Block({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-9">
      <h2 className="display mb-4 text-[1.2rem] text-gris">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

const link = "underline decoration-black/30 underline-offset-2 hover:decoration-black";

export default function MentionsLegales() {
  return (
    <PageShell title="Mentions légales">
      <div className="text-[0.88rem] leading-snug">
        <Block title="Éditeur">
          <p>
            <strong className="font-semibold">Toinette Gestion</strong>
            <br />
            Société par actions simplifiée unipersonnelle au capital de 2 000,00 €
            <br />
            Siège social : 18 rue des Bas Rogers | 92800 Puteaux
            <br />
            RCS Nanterre : 985 178 318 | SIRET : 98517831800020
            <br />
            TVA intracommunautaire : FR62985178318
            <br />
            Carte professionnelle n°CPI92012025000000137 délivrée par la CCI
            Île-de-France pour les activités de transaction, gestion et syndic
            <br />
            Caisse de garantie financière : Galian-SMABTP | 89, rue la Boétie,
            75008 Paris | pour un montant de 120 000 €
            <br />
            Assurance responsabilité civile professionnelle : Galian-SMABTP |
            89, rue la Boétie, 75008 Paris | Contrat RCP_01_174903M
          </p>
        </Block>

        <Block title="Honoraires">
          <p>
            Conformément à l’arrêté du 10 janvier 2017 relatif à l’information
            des consommateurs par les professionnels intervenant dans une
            transaction immobilière, vous pouvez consulter les honoraires de
            Toinette Gestion sur la page{" "}
            <Link href={routes.honoraires} className={link}>
              Honoraires
            </Link>
            .
          </p>
        </Block>

        <Block id="mediateur" title="Médiateur de la consommation">
          <p>
            En cas de litige non résolu avec Toinette Gestion, le client pourra
            recourir gratuitement au médiateur de la consommation désigné
            ci-dessous conformément à la législation en vigueur :
            <br />
            <strong className="font-semibold">Immomédiateurs</strong>
            <br />
            55 avenue Marceau, 75116 Paris
            <br />
            <a href="tel:+33147207321" className={link}>
              01 47 20 73 21
            </a>
            <br />
            <a
              href="https://conso.immomediateurs.com"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              conso.immomediateurs.com
            </a>
          </p>
        </Block>

        <Block title="Site web">
          <p>
            <strong className="font-semibold">Réalisation</strong>
            <br />
            Site web réalisé avec patience et amour par Cdric_Art
            <br />
            <a
              href="https://www.cdric-art.fr"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              www.cdric-art.fr
            </a>
          </p>
          <p>
            <strong className="font-semibold">Hébergement</strong>
            <br />
            Hostinger International Ltd
            <br />
            61 Lordou Vironos Street, 6023 Larnaca, Chypre
            <br />
            <a
              href="https://www.hostinger.fr"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              www.hostinger.fr
            </a>
          </p>
          <p>
            <strong className="font-semibold">Direction de la publication</strong>
            <br />
            Nina Bettega
            <br />
            <a href={site.phoneHref} className={link}>
              {site.phone}
            </a>
            <br />
            <a href={site.emailHref} className={link}>
              {site.email}
            </a>
          </p>
        </Block>

        <Block title="Propriété intellectuelle">
          <p>
            Tous droits réservés. La reproduction, représentation, modification,
            publication, adaptation de tout ou partie des éléments du site, quel
            que soit le moyen ou le procédé utilisé, est formellement interdite.
          </p>
        </Block>

        <Block title="RGPD — Loi Informatique et Libertés">
          <p>
            Lors de votre utilisation du site web et plus particulièrement lors
            de votre utilisation du formulaire de contact, des données
            personnelles sont recueillies et font l’objet d’un traitement
            informatique.
          </p>
          <div>
            <p>Les données collectées sont :</p>
            <ul>
              <li>- Nom</li>
              <li>- Prénom</li>
              <li>- Adresse mail</li>
              <li>- Numéro de téléphone</li>
            </ul>
          </div>
          <p>
            Ces données sont notamment susceptibles d’être utilisées dans le
            cadre d’une relation commerciale entre Toinette Gestion et vous,
            ainsi que dans le cadre des obligations légales ou déontologiques
            qui s’imposent aux professionnels de l’immobilier.
          </p>
          <p>
            Elles seront conservées durant toute la durée de la relation
            commerciale et pendant une durée maximale de 5 ans à compter de la
            fin de la relation commerciale conformément à l’article 2224 du code
            civil et à l’article L561-12 du code monétaire et financier relatif
            à l’obligation de conservation des informations des clients dans le
            cadre de la lutte contre le blanchiment de capitaux et le
            financement du terrorisme.
          </p>
          <p>
            La responsable du traitement des données personnelles est Nina
            Bettega, représentante légale de Toinette Gestion.
          </p>
          <p>
            Conformément à la loi informatique et libertés du 6 janvier 1978,
            renforcée et complétée par le Règlement Général sur la Protection
            des Données entré en vigueur le 25 mai 2018, vous disposez, à tout
            moment, d’un droit d’accès, de rectification, d’opposition,
            d’effacement et de portabilité de l’ensemble de vos données
            personnelles sur simple demande à l’adresse{" "}
            <a href={site.emailHref} className={link}>
              {site.email}
            </a>
            .
          </p>
        </Block>
      </div>
    </PageShell>
  );
}
