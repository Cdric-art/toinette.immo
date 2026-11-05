import type { ReactNode } from "react";

/** Fond gris des pages secondaires (Honoraires, Mentions légales) */
export function PageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-panel pt-14 pb-20 md:pt-16">
      <div className="container-site">
        <h1 className="display text-[2.9rem] md:text-[3.2rem]">{title}</h1>
        {children}
      </div>
    </div>
  );
}
