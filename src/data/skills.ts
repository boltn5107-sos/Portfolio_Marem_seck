export interface SkillGroup {
  category: string;
  skills: { name: string; note?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Cuisine Sénégalaise & Africaine",
    skills: [
      { name: "Plats sénégalais" },
      { name: "Cuisine africaine" },
      { name: "Préparation de repas" },
    ],
  },
  {
    category: "Pâtisserie",
    skills: [{ name: "Pâtisserie & produits alimentaires" }],
  },
  {
    category: "Hygiène & Organisation",
    skills: [
      { name: "Hygiène alimentaire" },
      { name: "Organisation de la cuisine" },
      { name: "Gestion des ingrédients" },
      { name: "Propreté et rigueur" },
    ],
  },
  {
    category: "Sociologie & Analyse",
    skills: [
      { name: "Recherche qualitative" },
      { name: "Analyse sociologique" },
      { name: "Lecture critique" },
    ],
  },
  {
    category: "Bureautique & Gestion",
    skills: [
      { name: "Word" },
      { name: "Excel" },
      { name: "Aide à la gestion des fonds" },
    ],
  },
  {
    category: "Savoir-être",
    skills: [
      { name: "Travail en équipe" },
      { name: "Esprit de service" },
      { name: "Responsabilité" },
      { name: "Ponctualité" },
    ],
  },
];