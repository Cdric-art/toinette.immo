import Image from "next/image";
import Link from "next/link";
import { ServiceSection } from "@/components/home/ServiceSection";
import { services } from "@/components/home/services";
import { homeAnchors, themes, type ThemeName } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const tiles: { emoji: string; label: string; href: string; theme: ThemeName }[] = [
  { emoji: "🛎️", label: "Conciergerie", href: homeAnchors.conciergerie, theme: "conciergerie" },
  { emoji: "🔑", label: "Gestion locative", href: homeAnchors.gestion, theme: "gestion" },
  { emoji: "🏢", label: "Syndic de copropriété", href: homeAnchors.syndic, theme: "syndic" },
];

export default function Home() {
  return (
    <>
      {/* Accroche */}
      <section className="container-site pt-14 pb-20 text-center md:pt-20 md:pb-24">
        <h1 className="display text-[3rem] md:text-[3.5rem]">Toinette Gestion</h1>
        <p className="mx-auto mt-5 max-w-[34rem] text-[0.95rem] leading-relaxed">
          Toinette Gestion gère vos biens en location courte ou longue durée et
          vos copropriétés à Puteaux, La Défense, Suresnes, Nanterre et
          Courbevoie.
          <br />
          Une interlocutrice unique, réactive, et un accompagnement de
          proximité.
        </p>
        <ul className="mx-auto mt-14 grid max-w-[41rem] gap-4 sm:grid-cols-3 sm:gap-11">
          {tiles.map((tile) => (
            <li key={tile.href}>
              <Link
                href={tile.href}
                className={`flex h-[4.3rem] flex-col items-center justify-center rounded-2xl text-[0.9rem] font-semibold transition-transform hover:-translate-y-0.5 ${themes[tile.theme].tint}`}
              >
                <span aria-hidden className="text-2xl leading-none">
                  {tile.emoji}
                </span>
                <span className="mt-1.5">{tile.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}

      {/* L'agence */}
      <section
        id="agence"
        aria-labelledby="agence-title"
        className="container-site grid gap-8 pt-16 md:grid-cols-[10.7rem_1fr] md:gap-24 md:pt-16"
      >
        <Image
          src="/images/nina.webp"
          alt="Nina, fondatrice de Toinette Gestion"
          width={640}
          height={640}
          className="mx-auto size-40 rounded-full object-cover md:mx-0 md:size-[10.7rem]"
        />
        <div className="text-[0.95rem] leading-relaxed">
          <h2 id="agence-title" className="display text-[2.9rem]">
            L’agence
          </h2>
          <p className="mt-6">
            Enchantée, moi c’est Nina ! J’ai imaginé Toinette Gestion, une
            petite agence immobilière indépendante spécialisée dans la gestion
            locative et gestion de copropriété.
          </p>
          <p className="mt-5">
            L’agence est située à Puteaux, ville que je connais comme ma poche,
            et je tiens à conserver un périmètre d’action de proximité afin de
            garantir à toutes et tous une bonne connaissance du marché ainsi
            qu’une grande réactivité et disponibilité.
          </p>
          <p className="mt-5">
            Grâce à mon sens de l’écoute et du détail, vous pouvez compter sur
            moi pour m’occuper de votre bien ou de votre immeuble comme si
            c’était le mien. J’aurai à cœur d’en maîtriser les moindres détails
            pour vous assurer une gestion efficace et transparente.
          </p>
        </div>
      </section>
    </>
  );
}
