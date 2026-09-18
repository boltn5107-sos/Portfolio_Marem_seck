export interface Service {
  icon: "utensils" | "cake" | "leaf" | "users" | "search" | "pen";
  title: string;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    icon: "utensils",
    title: "Repas à la personne",
    description:
      "Préparation de repas sénégalais et africains pour particuliers, familles ou structures professionnelles.",
    points: [
      "Menus adaptés à vos goûts",
      "Organisation des ingrédients",
      "Service à domicile ou sur place",
    ],
  },
  {
    icon: "cake",
    title: "Pâtisserie sur commande",
    description:
      "Pâtisseries et produits alimentaires faits maison, préparés avec soin pour vos événements.",
    points: ["Commandes ponctuelles", "Présentation soignée", "Recettes appliquées"],
  },
  {
    icon: "users",
    title: "Coordination de cuisine collective",
    description:
      "Organisation et coordination complètes pour une cuisine collective, une structure ou une association.",
    points: [
      "Gestion de la cuisine au quotidien",
      "Coordination du service",
      "Aide à la gestion des fonds",
    ],
  },
  {
    icon: "leaf",
    title: "Intervention ponctuelle",
    description:
      "Appui ponctuel pour un restaurant, une famille ou une structure qui a besoin d'une main sérieuse et organisée.",
    points: ["Hygiène et rigueur garanties", "Disponibilité et ponctualité", "Travail en équipe"],
  },
  {
    icon: "search",
    title: "Analyse sociologique appliquée",
    description:
      "Recherche qualitative et analyse sociologique pour des études, enquêtes ou projets associatifs.",
    points: ["Recueil et lecture des données", "Analyse critique", "Rapports clairs et humains"],
  },
  {
    icon: "pen",
    title: "Accompagnement de projets",
    description:
      "Appui à la gestion et au développement de petits projets entrepreneuriaux, de la conception au suivi.",
    points: ["Gestion collective des fonds", "Calculs et suivi", "Démarche structurée"],
  },
];