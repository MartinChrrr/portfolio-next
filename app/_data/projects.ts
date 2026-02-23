export type SubProject = {
  title: string;
  description: string;
  autonomous: boolean;
};

export type ArchStage = { label: string; sub: string }[];

export type KeyFigure = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problems: string;
  context: string;
  role: string;
  highlights: string[];
  technologies: string[];
  images: { src: string; alt: string }[];
  type: "pro" | "ecole";
  confidential: boolean;
  links: { label: string; url: string }[];
  subProjects?: SubProject[];
  architecture?: ArchStage[];
  keyFigures?: KeyFigure[];
};

export const projects: Project[] = [
  {
    slug: "makeprops",
    title: "MakeProps",
    subtitle: "Développeur Fullstack",
    description:
      "Développement en autonomie d'API REST et d'applications front-end pour un client grand compte du secteur énergie.",
    problems:
      "Le client avait besoin d'applications performantes avec un bon référencement, ce qui a orienté le choix vers du rendu côté serveur. La modélisation des données nécessitait une base graphe pour certains cas d'usage où le relationnel classique atteignait ses limites.",
    context:
      "Développement d'applications web complètes en autonomie à 90%, avec vérifications ponctuelles du tuteur. Intervention sur l'ensemble de la chaîne technique : back-end, bases de données, front-end et déploiement en production.",
    role: "Seul développeur sur la majorité des tâches",
    highlights: [
      "Travail sur deux stacks back-end (PHP et Node.js) selon les besoins du projet",
      "Mise en place du SSR avec React Router pour répondre aux besoins de SEO et de performance",
      "Utilisation de Neo4j (base graphe) en complément de PostgreSQL selon les cas d'usage",
      "Participation à la conception et à la modélisation des bases de données",
      "Déploiement en environnement de production",
    ],
    technologies: [
      "TypeScript",
      "React",
      "React Router",
      "Node.js",
      "Express",
      "PHP",
      "PostgreSQL",
      "Neo4j",
      "Docker",
    ],
    images: [],
    type: "pro",
    confidential: true,
    links: [],
    architecture: [
      [{ label: "React SSR", sub: "Front-end" }],
      [{ label: "Node / PHP", sub: "API REST" }],
      [
        { label: "PostgreSQL", sub: "Relationnel" },
        { label: "Neo4j", sub: "Graphe" },
      ],
    ],
    keyFigures: [
      { value: "90%", label: "Autonomie" },
      { value: "2", label: "Stacks back-end" },
      { value: "2", label: "Types de BDD" },
    ],
  },
  {
    slug: "hyperfiction",
    title: "Hyperfiction",
    subtitle: "Développeur C# / Unity",
    description:
      "Conception et développement de 3 applications XR éducatives (PC/VR) en C#/Unity pour les métiers du BTP et de l'industrie, dont 2 en totale autonomie.",
    problems:
      "Les organismes de formation faisaient face à des contraintes matérielles concrètes : peu d'accès à des véhicules réels pour les TP mécaniciens, besoin de promouvoir une formation sur des salons de manière ludique, nécessité de former aux normes BTP sans risques terrain. La VR apportait une solution technique à chacun de ces problèmes.",
    context:
      "Studio spécialisé en expériences immersives basé à Annecy. Développement de 3 applications XR éducatives et d'un outil interne d'automatisation de tests d'importation de modèles CAO.",
    role: "Développeur principal — 2 applications sur 3 développées en totale autonomie de la conception au déploiement",
    highlights: [
      "Adaptation des applications aux retours utilisateurs et aux contraintes terrain spécifiques à chaque projet",
      "Réponse à des contraintes terrain avec des solutions techniques (pas de véhicules → simulation VR)",
      "Développement crossplatform (PC + VR) sur un même projet",
      "Création d'un outil interne d'automatisation de tests d'importation de modèles CAO",
    ],
    technologies: ["C#", "Unity", "VR", "Miro", "ClickUp", "Meta Quest", "MetaSDK", "Pico"],
    images: [],
    type: "pro",
    confidential: true,
    links: [
      { label: "Site Hyperfiction", url: "https://www.hyperfiction.fr/" },
    ],
    architecture: [
      [{ label: "C# / Unity", sub: "Développement" }],
      [{ label: "Build", sub: "Compilation" }],
      [
        { label: "PC", sub: "Desktop" },
        { label: "VR", sub: "Casque" },
      ],
    ],
    keyFigures: [
      { value: "3", label: "Applications livrées" },
      { value: "2", label: "En autonomie" },
      { value: "2", label: "Plateformes" },
    ],
    subProjects: [
      {
        title: "Promotion formation hydrogène",
        description:
          "Application VR interactive destinée à promouvoir une formation aux normes hydrogène sur des salons professionnels. L'objectif était de rendre la formation attractive via une approche ludique.",
        autonomous: true,
      },
      {
        title: "TP mécanicien",
        description:
          "Module de travaux pratiques en VR pour une école de formation mécanique qui avait peu d'accès à des véhicules réels. La VR permettait de simuler des exercices pratiques impossibles à réaliser en conditions réelles.",
        autonomous: true,
      },
      {
        title: "Métiers du BTP",
        description:
          "Application crossplatform (PC et VR) éducative pour apprendre les métiers du BTP (électricien), les normes et la lecture de plans.",
        autonomous: false,
      },
    ],
  },
  {
    slug: "storysparkle",
    title: "StorySparkle",
    subtitle: "Générateur d'histoires par IA",
    description:
      "Application qui génère des histoires uniques à partir d'une image uploadée par l'utilisateur.",
    problems:
      "Les parents n'ont pas toujours l'imagination nécessaire pour créer des histoires captivantes pour leurs enfants. L'idée était d'utiliser l'IA pour transformer n'importe quelle image en point de départ d'une histoire personnalisée.",
    context:
      "Projet réalisé dans le cadre de la formation Développeur Web et Web Mobile. L'utilisateur uploade une image, l'IA l'analyse et génère une histoire originale. Les histoires sont sauvegardées et consultables dans un catalogue.",
    role: "Développeur unique",
    highlights: [
      "Intégration de l'API OpenAI pour la génération de texte à partir d'images",
      "Architecture back-end en Flask avec base PostgreSQL",
      "Conteneurisation avec Docker pour le déploiement",
    ],
    technologies: ["Python", "Flask", "OpenAI API", "Docker", "PostgreSQL"],
    images: [
      {
        src: "/images/StorySparkle/LandingPage.png",
        alt: "Page d'accueil de StorySparkle",
      },
      {
        src: "/images/StorySparkle/Catalog.png",
        alt: "Catalogue des histoires générées",
      },
      {
        src: "/images/StorySparkle/details.png",
        alt: "Détail d'une histoire générée",
      },
    ],
    type: "ecole",
    confidential: false,
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
    subtitle: "Réseau social pour gamers",
    description:
      "Plateforme de mise en relation pour gamers souhaitant trouver des coéquipiers partageant les mêmes intérêts.",
    problems:
      "Les gamers ont souvent du mal à trouver des coéquipiers compatibles avec leurs jeux, horaires et niveau. Les plateformes existantes ne permettent pas de filtrer finement ces critères.",
    context:
      "Projet réalisé dans le cadre de la formation Développeur Web et Web Mobile. Site complet avec inscription, profils utilisateurs, et système de mise en relation.",
    role: "Développeur unique",
    highlights: [
      "Développement fullstack en PHP natif avec base MySQL",
      "Système d'authentification et gestion de profils utilisateurs",
      "Interface de recherche et de mise en relation",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    images: [
      {
        src: "/images/Gamesync/inscription.png",
        alt: "Page d'inscription de GameSync",
      },
      {
        src: "/images/Gamesync/inscriptioncode.png",
        alt: "Code de la page d'inscription",
      },
      {
        src: "/images/Gamesync/profil.png",
        alt: "Page de profil utilisateur",
      },
      {
        src: "/images/Gamesync/modifier.png",
        alt: "Page de modification du profil",
      },
    ],
    type: "ecole",
    confidential: false,
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
    subtitle: "Jeu de survie en navigateur",
    description: "Jeu de survie jouable directement dans le navigateur.",
    problems:
      "Projet exploratoire pour apprendre la logique de jeu (boucle de jeu, gestion d'états, collisions) avec uniquement du JavaScript vanilla.",
    context:
      "Projet personnel développé pour approfondir JavaScript et comprendre les mécaniques de jeu sans moteur dédié.",
    role: "Développeur unique",
    highlights: [
      "Boucle de jeu et gestion d'états en JavaScript vanilla",
      "Pas de framework ni moteur de jeu — tout à la main",
    ],
    technologies: ["JavaScript"],
    images: [],
    type: "ecole",
    confidential: false,
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