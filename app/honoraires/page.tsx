import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FeeTable, No, P, Small, TableNote, Yes } from "@/components/FeeTable";
import { PageShell } from "@/components/PageShell";
import { themes, type ThemeName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Honoraires",
  description:
    "Honoraires de Toinette Gestion : packs de conciergerie, gestion locative, démarches et syndic de copropriété. Prix TTC.",
  alternates: { canonical: "/honoraires/" },
};

function ServiceTitle({ theme, children }: { theme: ThemeName; children: ReactNode }) {
  return (
    <h2 className={`display mt-10 mb-8 text-[2.5rem] md:text-[2.9rem] ${themes[theme].text}`}>
      {children}
    </h2>
  );
}

function SubTitle({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="display text-[1.1rem]">{children}</h3>
      {sub && <p className="display mt-1 text-[1rem] text-gris">{sub}</p>}
    </div>
  );
}

const pink = (text: string) => <Small className="text-conciergerie">{text}</Small>;

export default function Honoraires() {
  return (
    <PageShell title="Honoraires">
      {/* ——— Conciergerie ——— */}
      <section aria-labelledby="h-conciergerie" className="mt-2">
        <div id="conciergerie-packs">
          <ServiceTitle theme="conciergerie">
            <span id="h-conciergerie">Conciergerie</span>
          </ServiceTitle>
          <FeeTable
            caption="Packs de conciergerie"
            columns={[
              { title: "Pack de démarrage", price: P("180 €") },
              { title: "Pack Clé en main", price: P("24%", "des revenus *") },
              { title: "Pack Autonomie", price: P("19,2%", "des revenus *") },
            ]}
            rows={[
              ["Conseils personnalisés", Yes, "", ""],
              ["Photos", Yes, "", ""],
              ["Rédaction de l’annonce Airbnb", Yes, "", ""],
              ["État des lieux et inventaire", Yes, "", ""],
              ["Paramétrage du calendrier", Yes, Yes, Yes],
              ["Optimisation des prix", "", Yes, Yes],
              ["Gestion des réservations", "", Yes, Yes],
              ["Fourniture du linge de maison", "", Yes, Yes],
              ["Fourniture des consommables", "", Yes, Yes],
              ["Accueil des voyageurs", "", pink("Remise de clés en mains propres"), pink("Autonome par boîte à clés")],
              ["Assistance aux voyageurs 7j/7", "", Yes, Yes],
              ["Inspections de fin de séjour", "", Yes, Yes],
              ["Ménage de fin de séjour", "", <Small key="m1">Sur devis, à la charge des voyageurs</Small>, <Small key="m2">Sur devis, à la charge des voyageurs</Small>],
              ["Blanchisserie", "", Yes, Yes],
              ["Petite maintenance courante", "", Yes, Yes],
              ["Gestion des sinistres", "", <Small key="s1">Déclaration Aircover Airbnb</Small>, <Small key="s2">Déclaration Aircover Airbnb</Small>],
            ]}
          />
          <TableNote>
            Prix TTC | * Commission calculée sur les revenus bruts générés par
            les nuitées avant frais de service Airbnb - Hors frais de ménage
            refacturés à 100%.
          </TableNote>
        </div>

        <div id="conciergerie-coup-de-pouce" className="mt-12">
          <SubTitle>Coup de pouce ponctuel</SubTitle>
          <FeeTable
            caption="Coup de pouce ponctuel"
            rows={[
              ["Accueil voyageurs ponctuel", P("30 €", "par déplacement *")],
              ["Arrosage de plantes", P("30 €", "par déplacement (dans la limite de 15 minutes sur place) *")],
              ["Relève de courrier", P("30 €", "par déplacement *")],
              ["Présence à domicile travaux", P("30 €", "par déplacement +", "12 €", "/ heure")],
              ["Présence à domicile livraison", P("30 €", "par déplacement +", "12 €", "/ heure")],
            ]}
          />
          <TableNote>
            Prix TTC | * Secteur Puteaux, La Défense, Suresnes, Nanterre,
            Courbevoie, Neuilly-sur-Seine uniquement
          </TableNote>
        </div>
      </section>

      {/* ——— Gestion locative ——— */}
      <section aria-labelledby="h-gestion" className="mt-20">
        <div id="gestion-location">
          <ServiceTitle theme="gestion">
            <span id="h-gestion">Gestion locative</span>
          </ServiceTitle>
          <FeeTable
            caption="Honoraires de gestion locative"
            columns={[
              { title: "Mise en location", price: P("360 €", "+", "9€", "/ m²") },
              { title: "Gestion locative", price: P("6%", "des loyers *") },
              { title: "Gestion locative + garantie", price: P("9%", "des loyers *") },
            ]}
            rows={[
              ["Estimation de loyer", Yes, "", ""],
              ["Photos et rédaction de l’annonce", Yes, "", ""],
              ["Publication de l’annonce", Yes, "", ""],
              ["Visites", Yes, "", ""],
              ["Étude des dossiers locataires", Yes, "", ""],
              ["État des lieux et inventaire", Yes, "", ""],
              ["Rédaction du bail", Yes, "", ""],
              ["Encaissement des loyers", "", Yes, Yes],
              ["Révision annuelle des loyers", "", Yes, Yes],
              ["Relation avec les locataires", "", Yes, Yes],
              ["Compte-rendu de gestion", "", Yes, Yes],
              ["Gestion de sinistre simple", "", Yes, Yes],
              ["Garantie loyers impayés", "", No, Yes],
            ]}
          />
          <TableNote>
            Prix TTC | * Commission calculée sur la totalité des sommes
            encaissées (loyer + charges locatives + provisions pour charges, TVA
            et CRL le cas échéant)
          </TableNote>
        </div>

        <div id="gestion-demarches" className="mt-12">
          <SubTitle>Démarches et représentation</SubTitle>
          <FeeTable
            caption="Démarches et représentation"
            rows={[
              ["Démarche administrative", P("120 €", "par démarche (permis de louer, changement d’usage)")],
              ["Représentation en AG", P("120 €", "par heure")],
              ["Gestion de sinistre complexe", P("120 €", "par sinistre")],
              ["Constitution dossier contentieux", P("120 €", "par dossier")],
            ]}
          />
          <TableNote>Prix TTC</TableNote>
        </div>
      </section>

      {/* ——— Syndic ——— */}
      <section aria-labelledby="h-syndic" className="mt-20">
        <div id="syndic-forfait">
          <ServiceTitle theme="syndic">
            <span id="h-syndic">Syndic de copropriété</span>
          </ServiceTitle>
          <SubTitle sub="Sur devis en fonction du nombre de lots principaux et des caractéristiques de la copropriété">
            Forfait annuel
          </SubTitle>
          <FeeTable
            caption="Forfait annuel de syndic"
            valueColumn="narrow"
            rows={[
              ["Visite et vérification annuelle de la copropriété", Yes],
              ["Assemblée générale annuelle (préparation, convocation, tenue et information)", Yes],
              ["Relations avec le conseil syndical", Yes],
              ["Gestion des opérations financières et comptabilité générale de la copropriété", Yes],
              ["Administration et gestion de la copropriété en conformité avec le règlement de copropriété", Yes],
              ["Assurances et déclaration de sinistre", Yes],
              ["Gestion du personnel", Yes],
            ]}
          />
          <TableNote>
            Contrat-type conforme au décret n° 2015-342 du 26 mars 2015 à
            soumettre pour approbation lors de l’assemblée générale annuelle
          </TableNote>
        </div>

        <div id="syndic-prestations" className="mt-12">
          <SubTitle>Prestations particulières hors forfait annuel</SubTitle>
          <FeeTable
            caption="Prestations particulières hors forfait annuel"
            valueColumn="narrow"
            rows={[
              ["Assemblées générales supplémentaires", P("300 €", "par assemblée")],
              ["Dépassement des plages horaires de référence convenues", P("60 €", "par heure")],
              ["Réunions supplémentaires avec le conseil syndical", P("60 €", "par heure")],
              ["Visites supplémentaires de la copropriété", P("60 €", "par heure")],
              ["Établissement du règlement de copropriété", P("1200 €", "par démarche")],
              ["Modification du règlement de copropriété", <Small key="a">Sur décision de l’assemblée générale</Small>],
              ["Publication de l’état descriptif de division et du règlement de copropriété", <Small key="b">Frais réels de publication</Small>],
              ["Déplacements sur les lieux d’un sinistre", P("60 €", "par heure")],
              ["Prise de mesures conservatoires suite à un sinistre", <Small key="c">Offert</Small>],
              ["Assistance aux mesures d’expertise", P("60 €", "par heure")],
              ["Suivi du dossier auprès de l’assureur", P("120 €", "par sinistre")],
              ["Travaux et études techniques", <Small key="d">Sur décision de l’assemblée générale</Small>],
              ["Mise en demeure par lettre recommandée accusée de réception", P("30 €")],
              ["Constitution dossier contentieux", P("120 €", "par dossier")],
              ["Suivi du dossier transmis à l’avocat", P("60 €", "par heure")],
              ["Préparation des décisions d’acquisition ou de dispositions de parties communes", <Small key="e">Sur décision de l’assemblée générale</Small>],
              ["Reprise de la comptabilité sur exercice(s) antérieur(s) non approuvés ou non réparti(s)", P("600 €", "par exercice")],
              ["Représentation du syndicat aux assemblées d’une structure extérieure", P("60 €", "par heure")],
              ["Constitution et suivi du dossier d’emprunt souscrit au nom du syndicat", P("60 €", "par heure")],
              ["Constitution et suivi d’un dossier de subvention au profit du syndicat", P("60 €", "par heure")],
              ["Immatriculation initiale du syndicat", P("120 €")],
            ]}
          />
          <TableNote>Prix TTC</TableNote>
        </div>

        <div id="syndic-frais-coproprietaires" className="mt-12">
          <SubTitle>Frais et honoraires imputables aux seuls copropriétaires</SubTitle>
          <FeeTable
            caption="Frais et honoraires imputables aux seuls copropriétaires"
            valueColumn="narrow"
            rows={[
              ["Mise en demeure par lettre recommandée avec accusé de réception", P("30 €")],
              ["Relance après mise en demeure", P("30 €")],
              ["Conclusion d’un protocole d’accord", <Small key="a">Offert</Small>],
              ["Frais de constitution d’hypothèque", P("120 €")],
              ["Frais de mainlevée d’hypothèque", P("120 €")],
              ["Dépôt d’une requête en injonction de payer", P("120 €")],
              ["Constitution du dossier transmis à l’auxiliaire de justice", P("120 €")],
              ["Suivi du dossier transmis à l’avocat", P("60 €", "par heure")],
              ["Établissement de l’état daté", P("120 €")],
              ["Opposition sur mutation", P("120 €")],
              ["Délivrance d’une copie du carnet d’entretien", <Small key="b">Offert</Small>],
              ["Délivrance d’une copie des diagnostics techniques", <Small key="c">Offert</Small>],
              ["Délivrance des informations nécessaires à la réalisation d’un DPE individuel", <Small key="d">Offert</Small>],
              ["Délivrance d’une copie ou d’un extrait de PV d’assemblée générale", <Small key="e">Offert</Small>],
              ["Assemblée générale supplémentaire à la demande d’un ou plusieurs copropriétaires", P("300 €", "par assemblée")],
            ]}
          />
          <TableNote>Prix TTC</TableNote>
        </div>
      </section>
    </PageShell>
  );
}
