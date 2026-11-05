import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section
      aria-labelledby="contact-title"
      className="bg-fond py-16 text-center md:py-20"
    >
      <div className="container-site">
        <p className="text-[0.95rem] leading-relaxed">
          Vous souhaitez savoir si votre bien est éligible à la location courte
          durée&nbsp;?
          <br />
          Vous hésitez entre location courte durée et location classique&nbsp;?
          <br />
          Vous êtes à la recherche d’un syndic à taille humaine et réactif&nbsp;?
        </p>
        <h2
          id="contact-title"
          className="display mt-6 text-[2.3rem] sm:text-[2.6rem] md:text-[3rem]"
        >
          Discutons de votre bien et de votre copro
        </h2>
        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href={site.phoneHref}
            className="inline-flex min-w-40 items-center justify-center rounded-xl bg-ink px-8 py-2.5 text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-80"
          >
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="inline-flex min-w-52 items-center justify-center rounded-xl bg-ink px-10 py-2.5 text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-80"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
