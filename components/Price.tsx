/**
 * Affiche un prix dans le style de la maquette : montants en police
 * d'affichage grise, compléments en petit texte.
 * Les segments alternent : [montant, complément, montant, complément…]
 */
export function Price({
  parts,
  className = "",
}: {
  parts: readonly string[];
  className?: string;
}) {
  return (
    <span className={className}>
      {parts.map((part, i) =>
        i % 2 === 0 ? (
          <span key={i} className="display text-[1.05em] text-gris">
            {part}
          </span>
        ) : (
          <span key={i} className="text-[0.75em]">
            {" "}
            {part}{" "}
          </span>
        ),
      )}
    </span>
  );
}
