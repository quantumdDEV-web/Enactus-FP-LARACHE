export type Verification = 'verified' | 'partial' | 'pending'
export type Source = { title: string; url: string; publishedAt?: string }
export type AcademicYear = '2021–2022' | '2022–2023' | '2023–2024' | '2024–2025' | '2025–2026'
export type Activity = { id: string; year: AcademicYear; date: string; title: string; kind: 'Programme' | 'Projet' | 'Distinction'; summary: string; location: string; status: Verification; note: string; sources: Source[] }
export type Project = { id: string; name: string; year: AcademicYear; theme: string; stage: string; summary: string; detail: string; status: Verification; sources: Source[] }

export const years: AcademicYear[] = ['2021–2022', '2022–2023', '2023–2024', '2024–2025', '2025–2026']
export const sources = {
  larache24: { title: 'Larache24 · Programme d’accompagnement', url: 'https://larache24.net/?p=6477', publishedAt: '2025-01-21' },
  mwn: { title: 'Morocco World News · SIF 2025', url: 'https://www.moroccoworldnews.com/2025/07/228936/enactus-moroccos-sif-2025-youth-driven-innovation-lights-the-way-to-a-greener-future/', publishedAt: '2025-07-12' },
  fpl: { title: 'FPL · Deux prix nationaux Enactus', url: 'https://fpl.ac.ma/site/category/actualite/page/2/', publishedAt: '2026-07-17' },
  linkedin: { title: 'Enactus FPLarache · Page officielle LinkedIn', url: 'https://www.linkedin.com/company/enactus-fplarache/' },
  radeel: { title: 'RADEEL · Semaine universitaire de l’eau', url: 'https://ae.linkedin.com/posts/radeelofficiel_%D8%A7%D8%AD%D8%AA%D9%81%D8%A7%D9%84%D8%A7-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A-%D9%84%D9%84%D9%85%D9%8A%D8%A7%D9%87-%D8%B1%D8%A7%D8%AF%D9%8A%D9%84-%D8%AA%D8%B4%D8%A7%D8%B1%D9%83-activity-7177349153096683521-02oO' },
}

export const projects: Project[] = [
  { id: 'tijwal', name: 'Tijwal', year: '2024–2025', theme: 'Tourisme rural', stage: 'Présenté au SIF 2025', summary: 'Une plateforme touristique qui donne de la visibilité aux territoires ruraux du Maroc.', detail: 'Morocco World News décrit Tijwal comme une plateforme reliant le Maroc rural à davantage de visibilité et d’opportunités économiques. Des détails opérationnels et des résultats mesurés restent à confirmer par l’équipe.', status: 'partial', sources: [sources.mwn] },
  { id: 'sel', name: 'Valorisation du sel marocain', year: '2024–2025', theme: 'Économie locale', stage: 'Projet présenté · nom à confirmer', summary: 'Une initiative visant à augmenter la valeur marchande de la production de sel et à bénéficier aux artisan·es locaux.', detail: 'Lors du SIF 2025, Morocco World News a rapporté que le projet de FP Larache avait fait passer certains prix du sel de 1 000 MAD/tonne à 2 500 MAD/tonne, et de 2,5 MAD/kg à 92 MAD/kg. L’article ne donne ni le nom du projet ni la méthode de mesure ; ces valeurs sont rapportées par la presse, leur attribution et leur portée restent à confirmer avec l’équipe.', status: 'partial', sources: [sources.mwn] },
]

export const activities: Activity[] = [
  { id: 'programme-idee', year: '2024–2025', date: '2025-01-20', title: 'Programme « De l’idée au projet prêt pour le marché »', kind: 'Programme', summary: 'Programme de quatre semaines annoncé pour accompagner les idées étudiantes par des ateliers, du brainstorming, des retours professionnels et un travail sur le marketing digital et l’accès au marché.', location: 'Faculté Polydisciplinaire de Larache', status: 'verified', note: 'L’article confirme l’annonce et les dates prévues (20 janvier–16 février 2025). La réalisation complète et les résultats ne sont pas documentés dans la source.', sources: [sources.larache24] },
  { id: 'tijwal-sif', year: '2024–2025', date: '2025-07-12', title: 'Tijwal présenté au Sustainable Innovation Fest', kind: 'Projet', summary: 'FP Larache présente Tijwal, une plateforme touristique tournée vers la visibilité des territoires ruraux et les opportunités économiques.', location: 'Casablanca · SIF 2025', status: 'partial', note: 'La couverture confirme la présentation, sans préciser de résultat final ou de classement pour l’équipe.', sources: [sources.mwn] },
  { id: 'sel-sif', year: '2024–2025', date: '2025-07-12', title: 'Initiative de valorisation du sel présentée au SIF', kind: 'Projet', summary: 'Un second projet de FP Larache est décrit comme améliorant la valeur marchande du sel marocain au bénéfice des artisan·es.', location: 'Casablanca · SIF 2025', status: 'partial', note: 'Nom du projet, attribution des prix rapportés et résultats vérifiés à confirmer. Les chiffres cités sont attribués à l’article, pas comptabilisés comme impact mesuré par l’équipe.', sources: [sources.mwn] },
]

export const latest = [
  { date: '17 juillet 2026', title: 'Deux distinctions nationales pour Enactus FPL', summary: 'La FPL annonce les prix « Best Digital Presence » et « Best Project Manager » à la compétition nationale Enactus Morocco 2026.', source: sources.fpl },
  { date: '2026', title: 'Recrutement Enactus FPL', summary: 'La page LinkedIn de l’équipe a publié un appel à rejoindre le club. La campagne est archivée comme annonce, sans supposer que le recrutement est toujours ouvert.', source: sources.linkedin },
]

export const metrics: { label: string; value: string; unit: string; period: string; source?: Source }[] = []

export const openResearch: Record<AcademicYear, string> = {
  '2021–2022': 'Aucun projet ni événement de l’équipe vérifié dans les sources publiques retrouvées.',
  '2022–2023': 'Aucun projet ni événement de l’équipe vérifié dans les sources publiques retrouvées.',
  '2023–2024': 'Une mention publique situe un centre Innovation Enactus FPL lors d’un événement universitaire en mars 2024. Elle ne documente pas de projet porté par l’équipe.',
  '2024–2025': 'Programme étudiant, Tijwal et initiative de valorisation du sel documentés. Résultats et compléments à confirmer.',
  '2025–2026': 'Deux prix nationaux annoncés en juillet 2026, hors de la période de l’archive de cinq ans.',
}
