export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "instagram" | "facebook" | "whatsapp" | "mail";
}

export const site = {
  name: "Mareme Seck",
  firstName: "Mareme",
  lastName: "Seck",
  title: "Cuisinière & Sociologue",
  tagline:
    "Passionnée par la préparation de plats sénégalais et la pâtisserie, je suis une personne motivée, sérieuse et organisée, qui allie rigueur académique et créativité culinaire.",
  position:
    "Titulaire d'une Licence en Sociologie (UCAD) et passionnée de cuisine, je souhaite mettre mes compétences au service d'un restaurant, d'une famille ou d'une structure professionnelle.",
  location: "Dakar, Sénégal",
  email: "www.maremeseck.sn@gmail.com",
  phone: "+221 77 849 75 51",
  phoneHref: "+221778497551",
  // Photo de profil (optionnelle) : déposez une image dans public/images/ et
  // indiquez son chemin ici, ex. "/images/portrait.webp". Laissez à null pour
  // conserver l'illustration par défaut.
  photo: "/images/Profil.jpg",
  photoAlt: "Portrait de Mareme Seck",
  languages: ["Français — Bon niveau", "Wolof — Courant"],
  // Renseignez ici vos liens professionnels réels quand ils existeront.
  // Les liens vides ne sont pas affichés sur le site.
  socials: [] as SocialLink[],
};

export const meta = {
  description:
    "Portfolio de Mareme Seck — Cuisinière & Sociologue à Dakar. Cuisine sénégalaise, pâtisserie, service à la personne et analyse sociologique.",
  ogImage: "/og-image.svg",
  themeColorDark: "#1e1608",
  themeColorLight: "#f5e8cf",
};