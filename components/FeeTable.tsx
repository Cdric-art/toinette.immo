import type { ReactNode } from "react";
import { Price } from "@/components/Price";

export const Yes = (
  <span role="img" aria-label="Inclus">
    ✅
  </span>
);
export const No = (
  <span role="img" aria-label="Non inclus">
    ❌
  </span>
);

/** Petit texte (optionnellement coloré) dans une cellule */
export function Small({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`text-[0.75rem] ${className}`}>{children}</span>;
}

/** Montants en police d'affichage + compléments en petit texte */
export function P(...parts: string[]) {
  return <Price parts={parts} className="text-[0.95rem]" />;
}

type Column = { title: string; price: ReactNode };
type Row = [label: string, ...cells: ReactNode[]];

export function FeeTable({
  id,
  columns,
  rows,
  valueColumn = "wide",
  caption,
}: {
  id?: string;
  /** En-têtes des colonnes de valeurs (tableaux comparatifs) */
  columns?: Column[];
  rows: Row[];
  /** Largeur de la colonne de valeur pour les tableaux à 2 colonnes */
  valueColumn?: "wide" | "narrow";
  caption?: string;
}) {
  const comparative = Boolean(columns?.length);

  return (
    <div id={id}>
      {comparative && (
        <p className="mb-2 text-right text-[0.7rem] text-gris md:hidden">
          Faites glisser le tableau pour voir toutes les offres →
        </p>
      )}
      <div className={comparative ? "-mx-5 overflow-x-auto" : ""}>
        <table
          className={`w-full border-collapse text-[0.85rem] ${comparative ? "min-w-[38rem] table-fixed" : ""}`}
        >
          {caption && <caption className="sr-only">{caption}</caption>}
          {comparative && (
            <>
              <colgroup>
                <col className="w-[28%]" />
                {columns!.map((c) => (
                  <col key={c.title} />
                ))}
              </colgroup>
              <thead>
                <tr>
                  <td className="sticky left-0 bg-panel" />
                  {columns!.map((c) => (
                    <th
                      key={c.title}
                      scope="col"
                      className="px-1 pb-3 text-center align-bottom font-normal"
                    >
                      <span className="display block text-[1rem]">
                        {c.title}
                      </span>
                      <span className="mt-1 block">{c.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
            </>
          )}
          <tbody className="border-t border-ink">
            {rows.map(([label, ...cells]) => (
              <tr key={label} className="border-b border-ink">
                <th
                  scope="row"
                  className={`py-1 pr-3 text-left font-normal ${comparative ? "sticky left-0 bg-panel" : ""}`}
                >
                  {label}
                </th>
                {cells.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-1 py-1 text-center leading-tight ${
                      !comparative && valueColumn === "narrow"
                        ? "w-[38%] sm:w-[16rem]"
                        : ""
                    } ${!comparative && valueColumn === "wide" ? "w-[55%] sm:w-[60%]" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TableNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-center text-[0.72rem] text-gris">{children}</p>
  );
}
