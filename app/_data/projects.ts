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
      "Développement en autonomie d'API REST et d'applications front-end pour différents projets clients, avec des besoins techniques variés allant du rendu côté serveur à la modélisation de données en base graphe. ",
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
      "Projet réalisé dans le cadre de la formation. L'utilisateur uploade une image, l'IA l'analyse et génère une histoire originale. Les histoires sont sauvegardées et consultables dans un catalogue.",
    role: "Développeur unique",
    highlights: [
      "Intégration de l'API OpenAI pour la génération de texte à partir d'images",
      "Architecture back-end en Flask avec base PostgreSQL",
      "Conteneurisation avec Docker pour le déploiement",
    ],
    technologies: ["Python", "Flask", "OpenROOTER API", "Docker", "PostgreSQL"],
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
  slug: "rgaaudit",
  title: "RGAAudit",
  subtitle: "Créateur & Développeur Fullstack",
  description:
    "Outil open-source d'aide à l'audit d'accessibilité web selon le référentiel RGAA 4.1 français. Il automatise les vérifications automatisables (~30-50% des critères) et fournit à l'auditeur humain des données structurées pour traiter efficacement les critères manuels restants.",
  problems:
    "En France, les audits RGAA sont réalisés manuellement par des cabinets spécialisés, coûteux et longs. Aucun outil open-source n'existait pour générer un pré-rapport structuré selon la grille RGAA, rendre le mapping RGAA ↔ WCAG ↔ moteur d'audit transparent et auditable, et fournir les annexes nécessaires à la vérification manuelle.",
  context:
    "Projet personnel né d'un besoin réel identifié dans l'écosystème de l'accessibilité numérique français. Conçu local-first (aucune donnée ne quitte la machine) et open-source, avec une architecture pensée pour accueillir à terme une distribution desktop via Tauri.",
  role: "Concepteur et développeur unique — de la spécification technique au développement",
  highlights: [
    "Architecture monorepo npm workspaces (core / server / web / cli) prévue pour la compatibilité Tauri",
    "Moteur d'audit axe-core découplé via adapter pattern — remplaçable sans toucher au reste de l'application",
    "Mapping RGAA ↔ WCAG ↔ axe-core transparent et auditable, stocké dans un fichier JSON versionné",
    "Crawl automatique via sitemap.xml et crawl récursif, avec validation et édition manuelle de la liste de pages",
    "Progression en temps réel via Server-Sent Events (SSE)",
    "Génération de rapport HTML interactif avec annexes structurées pour l'auditeur humain",
    "Détection des overlays d'accessibilité tiers (accessiBe, UserWay, AudioEye…)",
  ],
  technologies: [
    "Node.js",
    "Playwright",
    "axe-core",
    "Express",
    "React",
    "Vite",
    "Tailwind CSS",
    "TypeScript",
  ],
  images: [
    {
    src: "/images/rgaaudit/1.png",
    alt: "Page d'accueil de RGAAudit",
  },
  {
    src: "/images/rgaaudit/2.png",
    alt: "Page de configuration du crawl",
  },
  {
    src: "/images/rgaaudit/3.png",
    alt: "Page de rapport d'audit",
  },
  {
    src: "/images/rgaaudit/4.png",
    alt: "Page de détail du rapport",
  },
  {
    src: "/images/rgaaudit/5.png",
    alt: "Exemple d'annexe de rapport",
  },
  {
    src: "/images/rgaaudit/6.png",
    alt: "Exemple de mapping RGAA ↔ WCAG ↔ axe-core",
  },
  {
    src: "/images/rgaaudit/7.png",
    alt: "Exemple de détection d'overlay d'accessibilité tiers",
  },
  {
    src: "/images/rgaaudit/8.png",
    alt: "Exemple de progression en temps réel via SSE",
  }
],
  type: "pro",
  confidential: false,
  links: [
    {
      label: "GitHub",
      url: "https://github.com/MartinChrrr/RGAAudit",
    },
  ],
  architecture: [
    [{ label: "React + Vite", sub: "Frontend" }],
    [{ label: "Express + SSE", sub: "API & temps réel" }],
    [{ label: "Playwright + axe-core", sub: "Crawl & audit" }],
    [{ label: "RGAA 4.1 JSON", sub: "Mapping transparent" }],
  ],
  keyFigures: [
    { value: "4", label: "Packages monorepo" },
    { value: "~50%", label: "Critères automatisés" },
    { value: "106", label: "Critères RGAA couverts (roadmap)" },
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
  },{
  slug: "spoony",
  title: "Spoony",
  subtitle: "Application mobile de gestion du quotidien basée sur la théorie des cuillères",
  description:
    "Application mobile de gestion du quotidien basée sur la spoon theory, conçue pour les personnes vivant avec de la fatigue chronique. L'app aide à prendre des décisions adaptées à l'énergie réelle du jour, sans culpabilité.",
  problems:
    "Les outils de productivité existants sont conçus pour optimiser le rendement, ce qui les rend inadaptés — voire culpabilisants — pour les personnes en situation de handicap ou atteintes de maladies chroniques. L'énergie quotidienne y est traitée comme une constante, alors qu'elle est fluctuante et limitée.",
  context:
    "Projet personnel conçu de A à Z : product design, wireframes (23 écrans, WCAG AA), architecture backend hexagonale et application React Native. L'état zéro énergie (0🥄) est un concept de premier ordre — pas un cas limite — et déclenche des comportements métier dédiés.",
  role: "Concepteur unique — product design, architecture, développement backend et frontend",
  highlights: [
    "Architecture hexagonale (ports & adapters) : domaine métier totalement découplé de Spring Boot",
    "22 endpoints REST (format JSend), JWT avec refresh tokens et vérification email stricte",
    "État 0🥄 en concept de premier ordre : déclenche un bulk postpone automatique de toutes les tâches du jour",
    "Moteur de suggestions adaptatif basé sur le budget cuillères restant et l'importance des tâches",
    "Internationalisation via clés de traduction côté backend + react-i18next côté frontend — aucun redéploiement pour les mises à jour de contenu",
    "Conformité RGPD : endpoint de suppression de compte avec cascade complète",
    "TDD comme documentation vivante — les tests définissent le comportement avant l'implémentation",
  ],
  technologies: [
    "React Native",
    "NativeWind",
    "TypeScript",
    "Java 21",
    "Spring Boot",
    "PostgreSQL",
    "Flyway",
    "Docker",
    "JWT",
    "SpringDoc OpenAPI",
  ],
  images: [
    
  ],
  type: "pro",
  confidential: false,
  links: [
      {
        label: "GitHub backend",
        url: "https://github.com/MartinChrrr/Spoony-back",
      },
      //       {
      //   label: "GitHub backend",
      //   url: "https://github.com/MartinChrrr/Spoony-back",
      // },
  ],
  architecture: [
    [{ label: "React Native + NativeWind", sub: "Mobile (iOS / Android)" }],
    [{ label: "Spring Boot 3 — API REST", sub: "22 endpoints · JSend · JWT" }],
    [
      { label: "Domain (Hexagonal)", sub: "Ports & Adapters" },
      { label: "Flyway", sub: "Migrations" },
    ],
    [{ label: "PostgreSQL 16", sub: "Base de données" }],
  ],
  keyFigures: [
    { value: "22", label: "Endpoints API" },
    { value: "23", label: "Écrans designés" },
    { value: "0🥄", label: "État premier ordre" },
  ],
},
{
  slug: "application gestion-devis-factures",
  title: "Application de Gestion Devis & Factures",
  subtitle: "API REST Django — Outil de facturation pour auto-entrepreneurs",
  description: "Application de gestion de devis et factures pour auto-entrepreneurs, développée en équipe dans le cadre de la formation. Back-end Django REST Framework avec authentification JWT, export PDF et tests unitaires. Front React développé en parallèle comme base de travail pour l'équipe.",
  problems: "Les auto-entrepreneurs n'ont pas toujours accès à des outils de facturation simples et autonomes. L'enjeu technique était de livrer une API robuste avec gestion des droits, export de documents conformes et une base front utilisable par des développeurs juniors.",
  context: "Projet réalisé en équipe de 3 dans le cadre de la formation CDA. Avec une grande disparité de niveaux dans l'équipe, j'ai assuré le rôle de tech lead informel : architecture du projet, organisation en sprints, développement des modules principaux et accompagnement des coéquipiers.",
  role: "Tech lead informel — architecture, modélisation BDD, Docker, authentification JWT, module clients, module devis (export PDF), écriture des tests, bases du front React, pair programming avec les coéquipiers en difficulté",
  highlights: [
    "Architecture du projet et modélisation de la base de données avec les contraintes Django ORM",
    "Authentification JWT complète (register, login, refresh, logout, profil)",
    "Module devis avec export PDF via WeasyPrint",
    "Écriture des tests unitaires sur les modules développés",
    "Configuration Docker Compose pour l'environnement de développement",
    "Base du front React posée (architecture, routing React Router, appels API avec React Query) pour reprise par l'équipe",
    "Accompagnement des coéquipiers : pair programming, initiation à Postman et au fonctionnement des API REST, bases React pour la montée en compétences",
  ],
  technologies: [
    "Python", "Django", "Django REST Framework",
    "PostgreSQL", "JWT", "WeasyPrint",
    "Docker", "React", "React Router", "React Query", "TypeScript"
  ],
  images: [],
  type: "ecole",
  confidential: false,
  links: [
    { label: "GitHub Back-end", url: "" },
    { label: "GitHub Front-end", url: "" },
  ],
  architecture: [
    [{ label: "React + React Router + React Query", sub: "Front-end" }],
    [{ label: "Django REST Framework + JWT", sub: "API REST" }],
    [
      { label: "Django ORM + Serializers", sub: "Modélisation" },
      { label: "WeasyPrint", sub: "Export PDF" },
    ],
    [{ label: "PostgreSQL 15", sub: "Base de données" }],
  ],
  keyFigures: [
    { value: "48", label: "Endpoints API" },
    { value: "6", label: "Modules" },
    { value: "PDF", label: "Export devis" },
    { value: "4", label: "Sprints" },
  ],
}
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}