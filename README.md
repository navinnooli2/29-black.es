# 29-black.es — Casino 29 Black — marché ES (statique)

> Statut au 2026-06-10 — passation Noël. Repo : https://github.com/navinnooli2/29-black.es

## Objectif
Landing/site vitrine du casino **29 Black** pour le marché espagnol. Acquisition SEO + redirection affiliée.

## Stack & déploiement
- **Stack** : HTML/CSS/JS statique (assets + pages localisées `es/`).
- **Hébergement** : Cloudflare Pages (fichier `_headers`).
- **Build / déploiement** : Déploiement du dossier statique tel quel (`npx wrangler pages deploy .`).

## Ce qui a été fait
- Site en production.
- Snippet de **tracking affilié** injecté dans le `<head>` (dernier commit 2026-04-28).
- Pages localisées espagnol, `robots.txt` + `sitemap_index.xml` en place.

## Ce qui reste à faire
- Aucun chantier ouvert connu — site stable en prod. Surveiller les liens affiliés (URL de tracking) si l'offre change.

## Notes de reprise
- Code source poussé sur GitHub (compte `navinnooli2`).
- Voir `/Users/nono/PROJETS-PASSATION.md` pour la vue d'ensemble de tous les projets.
