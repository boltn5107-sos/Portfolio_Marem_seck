export interface Project {
  name: string;
  category: "cuisine" | "patisserie" | "organisation" | "entreprenariat";
  summary: string;
  context: string;
  approach: string[];
  tags: string[];
  link?: { label: string; url: string };
  // Image du projet (optionnelle) : déposez un fichier dans public/images/ et
  // indiquez son chemin ici, ex. "/images/miouf.webp". Recommendation :
  // ratio 16/10, format webp/jpg, taille max ~1200px de large.
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    name: "Repas sénégalais & africains",
    category: "cuisine",
    summary:
      "Préparation de repas complets, du choix des ingrédients au dressage, pour des particuliers, familles ou structures.",
    context:
      "Le besoin : des repas authentiques, sains et bien présentés, adaptés au rythme et aux goûts de chaque foyer.",
    approach: [
      "Choix et organisation des ingrédients selon les recettes",
      "Préparation et cuisson des plats sénégalais et africains",
      "Maintien de la propreté et de l'hygiène de l'espace de travail",
      "Dressage et présentation soignée avant le service",
    ],
    tags: ["Cuisine sénégalaise", "Cuisine africaine", "Service", "Hygiène"],
  },
  {
    name: "Pâtisserie & produits alimentaires",
    category: "patisserie",
    summary:
      "Confection de pâtisseries et de produits alimentaires pour des occasions, commandes ou consommation courante.",
    context:
      "Le besoin : des préparations sucrées et produits faits maison, propres et soignés, pour des moments de partage.",
    approach: [
      "Réalisation de pâtisseries de façon régulière et appliquée",
      "Respect des recettes et des quantités",
      "Soin du détail et de la présentation finale",
    ],
    tags: ["Pâtisserie", "Faits maison", "Créativité", "Application"],
  },
  {
    name: "Coordination de cuisine — UEEDM2",
    category: "organisation",
    summary:
      "Gestion complète de la cuisine et coordination du service en tant que Présidente Adjointe de l'UEEDM2.",
    context:
      "Le besoin : organiser une cuisine collective, synchroniser l'équipe et garantir un service structuré.",
    approach: [
      "Gestion complète de la cuisine au quotidien",
      "Coordination du service et répartition des rôles",
      "Aide à la gestion collective des fonds et aux calculs",
    ],
    tags: ["Organisation", "Coordination", "Gestion de fonds", "Travail en équipe"],
  },
  {
    name: "Projets entrepreneuriaux",
    category: "entreprenariat",
    summary:
      "Formations et activités autour de l'entrepreneuriat, en particulier la gestion de projets comme l'élevage de poulet.",
    context:
      "Le besoin : acquérir une culture entrepreneuriale et savoir gérer un petit projet de bout en bout.",
    approach: [
      "Formations en gestion et développement de projets entrepreneuriaux",
      "Aide à la gestion collective des fonds",
      "Portage de projets personnels (ex. élevage de poulet)",
    ],
    tags: ["Entrepreneuriat", "Gestion de projet", "Élevage", "Autonomie"],
  },
];