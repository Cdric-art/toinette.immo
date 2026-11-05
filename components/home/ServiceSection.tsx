import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components/Price";
import { themes, type ThemeName } from "@/lib/site";

export type Step = { title: string; text: string };
export type Reason = { emoji: string; title: string; text: string };
export type Offer = {
  title: string;
  /** Deuxième ligne de titre en gris (ex. « Sur devis ») */
  subtitle?: string;
  price?: readonly string[];
  /** Éléments de liste ; ceux préfixés par « ! » sont mis en couleur */
  items: string[];
  cta: { label: string; href: string };
};

export type Service = {
  id: string;
  theme: ThemeName;
  title: string;
  logo: { src: string; width: number; height: number; alt: string };
  intro: string;
  steps: Step[];
  reasonsTitle: string;
  reasons: Reason[];
  offersTitle: string;
  offers: Offer[];
  note: string;
};

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="display mb-4 text-[1.15rem] text-gris">{children}</h3>
  );
}

export function ServiceSection({ service }: { service: Service }) {
  const t = themes[service.theme];

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className={`${t.tint} pt-12 pb-16 md:pt-12 md:pb-20`}
    >
      {/* En-tête : logo en cartouche collé au bord gauche + présentation */}
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-7">
        <div className="mr-5 flex justify-end rounded-r-2xl bg-fond py-5 pr-8 pl-5 md:mr-0 md:w-[max(21.5rem,calc((100vw-54rem)/2+16rem))] md:shrink-0 md:py-5 md:pr-11">
          <Image
            src={service.logo.src}
            alt={service.logo.alt}
            width={service.logo.width}
            height={service.logo.height}
            className="h-36 w-auto md:h-[10.5rem]"
          />
        </div>
        <div className="px-5 md:max-w-[31.5rem] md:px-0 md:pr-5">
          <h2
            id={`${service.id}-title`}
            className={`display text-[2.5rem] md:text-[2.9rem] ${t.text}`}
          >
            {service.title}
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed">{service.intro}</p>
        </div>
      </div>

      <div className="container-site">
        {/* Comment ça marche */}
        <div className="mt-12">
          <SubTitle>Comment ça marche ?</SubTitle>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl bg-fond p-5 shadow-card"
              >
                <span
                  aria-hidden
                  className={`flex size-7 items-center justify-center rounded-full text-sm font-semibold text-white ${t.bg}`}
                >
                  {i + 1}
                </span>
                <h4 className="mt-4 text-[0.95rem] font-semibold">
                  {step.title}
                </h4>
                <p className="mt-2 text-[0.78rem] leading-snug">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Pourquoi */}
        <div className="mt-10">
          <SubTitle>{service.reasonsTitle}</SubTitle>
          <ul className="grid gap-4 sm:grid-cols-3">
            {service.reasons.map((r) => (
              <li
                key={r.title}
                className={`rounded-2xl border-b-4 bg-fond px-5 pt-5 pb-6 text-center shadow-card ${t.border}`}
              >
                <span aria-hidden className="text-3xl leading-none">
                  {r.emoji}
                </span>
                <h4 className="mt-3 text-[0.95rem] font-semibold">{r.title}</h4>
                <p className="mx-auto mt-1.5 max-w-[15rem] text-[0.78rem] leading-snug">
                  {r.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Offres */}
        <div className="mt-10">
          <SubTitle>{service.offersTitle}</SubTitle>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.offers.map((offer) => (
              <li
                key={offer.title}
                className="flex flex-col rounded-2xl bg-fond p-5 shadow-card"
              >
                <div className="min-h-[3.1rem]">
                  <h4 className="display text-[1.1rem]">{offer.title}</h4>
                  {offer.subtitle && (
                    <p className="display text-[1.1rem] text-gris">
                      {offer.subtitle}
                    </p>
                  )}
                  {offer.price && (
                    <Price parts={offer.price} className="mt-0.5 block text-base" />
                  )}
                </div>
                <ul className="mt-5 mb-6 space-y-0.5 text-[0.8rem]">
                  {offer.items.map((item) => {
                    const highlight = item.startsWith("!");
                    const label = highlight ? item.slice(1) : item;
                    return (
                      <li key={label} className={highlight ? t.text : ""}>
                        <span aria-hidden className={t.text}>
                          &gt;{" "}
                        </span>
                        {label}
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href={offer.cta.href}
                  className={`mt-auto flex min-h-10 items-center justify-center rounded-xl px-2 py-2 text-center text-[0.9rem] text-white transition-colors ${t.bg} ${t.buttonHover}`}
                >
                  {offer.cta.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-[0.72rem] text-gris">
            {service.note}
          </p>
        </div>
      </div>
    </section>
  );
}
