import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="container-site py-24 text-center">
      <h1 className="display text-[2.9rem]">Page introuvable</h1>
      <p className="mt-4">Cette page n’existe pas ou a été déplacée.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-ink px-8 py-2.5 font-semibold text-white hover:opacity-80"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
