export interface Certification {
  title: string;
  organization: string;
  year: string;
  status?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: "Licence en Sociologie",
    organization: "Université Cheikh Anta Diop de Dakar (UCAD)",
    year: "2024 — 2026",
    status: "En cours",
  },
  {
    title: "Formation Bureautique",
    organization: "Université Cheikh Anta Diop de Dakar (UCAD)",
    year: "2024",
  },
  {
    title: "Baccalauréat — Mention Assez Bien",
    organization: "Lycée de Mbacké",
    year: "2023",
  },
  {
    title: "BFEM",
    organization: "CEM de Darou Minam",
    year: "2020",
  },
];