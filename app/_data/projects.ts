export type Project = {
  slug: string;
  title: string;
  description: string;
  problems: string;
  context: string;
  technologies: string[];
  images: { src: string; alt: string }[];
  type: "pro" | "ecole";
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "hyperfiction",
    title: "Hyperfiction",
    description:
      "Conception et développement de 3 applications XR éducatives (PC/VR) pour les métiers du BTP, dont 2 en autonomie.",
    problems: "",
    context:
      "Projet confidentiel — visuels non diffusables. Développement d'applications XR éducatives en C#/Unity pour les métiers du BTP, incluant un outil interne d'automatisation de tests d'importation de modèles CAO.",
    type: "pro",
    technologies: ["C#", "Unity", "VR"],
    images: [],
    links: [
      { label: "Site Hyperfiction", url: "https://www.hyperfiction.fr/" },
    ],
  },
  {
    slug: "makeprops",
    title: "MakeProps",
    description:
      "Développement d'API REST et d'applications front-end pour un client grand compte du secteur énergie.",
    problems: "",
    context:
      "Développement en autonomie d'API REST en PHP et Node.js et d'applications front-end en React (SSR) pour améliorer performance et SEO. Conception et exploitation de bases de données PostgreSQL et Neo4j.",
    type: "pro",
    technologies: [
      "PHP",
      "Node.js",
      "React",
      "React Router",
      "PostgreSQL",
      "Neo4j",
    ],
    images: [],
    links: [],
  },
  {
    slug: "storysparkle",
    title: "StorySparkle",
    description: "Crée une histoire unique à partir de ton image.",
    problems: "Les parents  n'ont pas toujours l'imagination nécessaire pour créer des histoires captivantes pour leurs enfants.",
    context:
      "Application utilisant l'IA pour générer des histoires à partir d'images uploadées par l'utilisateur.",
    type: "ecole",
    technologies: ["Python", "Flask", "OpenAI API", "Docker", "PostgreSQL"],
    images: [],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MartinChrrr/story_maker",
      },
    ],
  },
  {
    slug: "gamesync",
    title: "GameSync",
    description: "Réseau social pour les gamers.",
    problems: "Difficulté pour les gamers de trouver des coéquipiers partageant les mêmes intérêts.",
    context:
      "Réseau social permettant aux gamers de se connecter et partager.",
    type: "ecole",
    technologies: ["PHP", "MySQL", "JavaScript"],
    images: [
      { src: "/images/Gamesync/inscription.png", alt: "Page d'inscription de GameSync" },
      { src: "/images/Gamesync/inscriptioncode.png", alt: "Code de la page d'inscription" },
      { src: "/images/Gamesync/profil.png", alt: "Page de profil utilisateur" },
      { src: "/images/Gamesync/modifier.png", alt: "Page de modification du profil" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MartinChrrr/GameSync",
      },
    ],
  },
  {
    slug: "survive",
    title: "Survive",
    description: "Jeu de survie.",
    problems: "",
    context: "Jeu de survie développé en projet personnel.",
    type: "ecole",
    technologies: ["Javascript"],
    images: [],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MartinChrrr/survive",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
