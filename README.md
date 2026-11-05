# toinette.immo

Site vitrine de **Toinette Gestion** (conciergerie, gestion locative, syndic) — Next.js 16, export statique.

## Pages

| Route                | Ancres                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `/`                  | `#conciergerie`, `#gestion-locative`, `#syndic`, `#agence`                                                                      |
| `/honoraires/`       | `#conciergerie-packs`, `#conciergerie-coup-de-pouce`, `#gestion-location`, `#gestion-demarches`, `#syndic-forfait`, `#syndic-prestations` |
| `/mentions-legales/` | `#mediateur`                                                                                                                    |

## Où modifier quoi

- Coordonnées, URL de l'espace client, ancres : `lib/site.ts`
- Couleurs et polices : `app/globals.css` (bloc `@theme`) et `app/layout.tsx`
- Contenu des sections de l'accueil : `components/home/services.ts`
- Grilles tarifaires : `app/honoraires/page.tsx`
- Images : `public/images/`

## Développement

```bash
bun install
bun dev        # http://localhost:3000
```

## Mise en ligne sur Hostinger

```bash
bun run build  # génère le dossier out/
```

Envoyer **le contenu** du dossier `out/` (y compris le fichier caché `.htaccess`)
dans `public_html/` du domaine toinette.immo, via le gestionnaire de fichiers
hPanel ou en SFTP, par exemple :

```bash
rsync -avz --delete out/ UTILISATEUR@HOTE:domains/toinette.immo/public_html/ -e "ssh -p 65002"
```

Dans hPanel, activer le SSL et « Forcer HTTPS » pour le domaine.
