export interface Experience {
  period: string;
  role: string;
  context: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    period: "Expérience personnelle",
    role: "Cuisinière — Préparation de repas",
    context: "Dakar, Sénégal",
    bullets: [
      "Préparation de différents repas sénégalais et africains.",
      "Organisation des ingrédients et du matériel de cuisine.",
      "Maintien de la propreté de l'espace de travail.",
      "Préparation de pâtisseries et autres produits alimentaires.",
    ],
  },
  {
    period: "2024 — 2026",
    role: "Présidente Adjointe",
    context: "UEEDM2",
    bullets: [
      "Gestion complète de cuisine et coordination du service.",
      "Aide à la gestion collective des fonds et aux calculs.",
    ],
  },
];