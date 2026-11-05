import Image from "next/image";
import Link from "next/link";
import { homeAnchors, site, themes, type ThemeName } from "@/lib/site";

const nav: { label: string; href: string; theme: ThemeName }[] = [
  { label: "Conciergerie", href: homeAnchors.conciergerie, theme: "conciergerie" },
  { label: "Gestion locative", href: homeAnchors.gestion, theme: "gestion" },
  { label: "Syndic", href: homeAnchors.syndic, theme: "syndic" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-fond/95 backdrop-blur">
      <div className="mx-auto flex max-w-[60rem] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3 md:flex-nowrap md:py-5">
        <Link href="/" aria-label="Toinette Gestion — accueil" className="shrink-0">
          <Image
            src="/images/logo-toinette.png"
            alt="Toinette"
            width={488}
            height={266}
            priority
            className="h-11 w-auto md:h-16"
          />
        </Link>

        <a
          href={site.espaceClientUrl}
          className="order-2 inline-flex items-center gap-1.5 rounded-xl bg-ink px-3.5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80 md:order-3"
        >
          <span aria-hidden>🔒</span> Espace client
        </a>

        <nav
          aria-label="Activités"
          className="order-3 w-full md:order-2 md:w-auto"
        >
          <ul className="grid grid-cols-3 gap-2 md:flex md:gap-2.5">
            {nav.map(({ label, href, theme }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`display flex h-9 items-center justify-center rounded-[14px] border bg-fond px-1.5 text-[0.9rem] whitespace-nowrap transition-colors md:min-w-[7.6rem] md:px-3 md:text-base ${themes[theme].border} ${themes[theme].text} ${themes[theme].hover}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
