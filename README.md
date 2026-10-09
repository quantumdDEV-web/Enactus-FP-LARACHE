# Enactus FPL Larache — Vitrine & archives

Vitrine publique en français pour les projets et les traces historiques d’Enactus FPL Larache. Le site privilégie les sources primaires et les mentions publiques attribuées. Il ne transforme pas des données nationales en impact local et signale explicitement les informations incomplètes.

## Démarrer

```sh
npm install
npm run dev
```

## Modifier les données

Les contenus sont centralisés dans `src/data.ts`, séparés des composants d’affichage. Ajoutez les projets dans `projects`, les événements dans `activities`, puis fournissez toujours une URL de source, une date lorsque disponible et un niveau de vérification (`verified`, `partial` ou `pending`). Les indicateurs publiés vont dans `metrics` et doivent préciser période, unité, périmètre et source. `openResearch` décrit les lacunes connues de chaque année.

`verified` signifie que la source confirme l’affirmation affichée. `partial` signifie que l’existence est documentée mais qu’un aspect important (résultat, réalisation, nom ou mesure) reste à confirmer. Une annonce est conservée comme annonce si son achèvement n’est pas prouvé.

## Construire et déployer

```sh
npm run build
npm run preview
```

Le projet est un site statique Vite, prêt à être importé dans Vercel. Le domaine `enactus-larache.vercel.app` est un exemple et sa disponibilité n’est pas vérifiée. Mettez à jour `public/sitemap.xml` avec le domaine choisi avant publication. Aucun backend, secret ou service payant n’est requis.

## État de la recherche historique

- 2021–2022 et 2022–2023 : aucun enregistrement d’équipe assez étayé trouvé dans les sources publiques consultées.
- 2023–2024 : une mention du centre Innovation Enactus FPL pendant un événement universitaire en mars 2024, sans preuve d’un projet porté par l’équipe ; non comptabilisée comme activité d’équipe.
- 2024–2025 : programme étudiant annoncé en janvier 2025, Tijwal et une initiative de valorisation du sel décrite au SIF 2025. La réalisation complète du programme, le nom du second projet et les mesures de résultats doivent être confirmés.
- Juillet 2026 : les prix « Best Digital Presence » et « Best Project Manager » annoncés par la FPL sont en actualités récentes, hors des cinq années académiques historiques demandées.

Pour compléter l’archive, demander aux anciens membres les bilans de fin d’année 2021–2024, noms et fiches de projets, dates et lieux, comptes rendus d’événements, résultats de compétitions, preuves de réalisation du programme de 2025, identité du projet lié au sel et méthodes de calcul de ses prix. Ne publier des noms, portraits ou coordonnées personnels qu’après accord.

## Sources de départ

- [Larache24 — programme de janvier 2025](https://larache24.net/?p=6477)
- [Morocco World News — SIF 2025](https://www.moroccoworldnews.com/2025/07/228936/enactus-moroccos-sif-2025-youth-driven-innovation-lights-the-way-to-a-greener-future/)
- [FPL — actualités, annonce du 17 juillet 2026](https://fpl.ac.ma/site/category/actualite/page/2/)
- [Page publique Enactus FPLarache sur LinkedIn](https://www.linkedin.com/company/enactus-fplarache/)
- [RADEEL — semaine universitaire de l’eau, mars 2024](https://ae.linkedin.com/posts/radeelofficiel_%D8%A7%D8%AD%D8%AA%D9%81%D8%A7%D9%84%D8%A7-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A-%D9%84%D9%84%D9%85%D9%8A%D8%A7%D9%87-%D8%B1%D8%A7%D8%AF%D9%8A%D9%84-%D8%AA%D8%B4%D8%A7%D8%B1%D9%83-activity-7177349153096683521-02oO)
