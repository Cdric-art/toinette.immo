import Link from "next/link";
import { homeAnchors, routes, site } from "@/lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Toinette Gestion",
    links: [
      { label: "Conciergerie", href: homeAnchors.conciergerie },
      { label: "Gestion locative", href: homeAnchors.gestion },
      { label: "Syndic", href: homeAnchors.syndic },
      { label: "L’agence", href: homeAnchors.agence },
    ],
  },
  {
    title: "Informations légales",
    links: [
      { label: "Mentions légales", href: routes.mentionsLegales },
      { label: "Honoraires", href: routes.honoraires },
      { label: "Médiateur", href: routes.mediateur },
    ],
  },
  {
    title: "Espace client",
    links: [
      { label: "Propriétaire bailleur", href: site.espaceClientUrl, external: true },
      { label: "Locataire", href: site.espaceClientUrl, external: true },
      { label: "Copropriétaire", href: site.espaceClientUrl, external: true },
    ],
  },
];

const linkClass = "transition-colors hover:text-white";


export function Footer() {
  // Année figée au moment du build (site statique)
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-ink py-10 text-white/85">
        <div className="container-site grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="display text-[1.05rem] text-white">{col.title}</h2>
              <ul className="mt-2.5 space-y-0.5 text-[0.82rem]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} className={linkClass}>
                        &gt; {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        &gt; {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="display text-[1.05rem] text-white">Contact</h2>
            <address className="mt-2.5 space-y-0.5 text-[0.82rem] not-italic">
              <p>{site.name}</p>
              <p>
                <a href={site.emailHref} className={linkClass}>
                  {site.email}
                </a>
              </p>
              <p>
                <a href={site.phoneHref} className={linkClass}>
                  {site.phone}
                </a>
              </p>
              <p>
                {site.address.street} | {site.address.city}
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="container-site py-4 text-xs text-gris">
        © {year} {site.name} — Tous droits réservés.
      </div>
    </footer>
  );
}
