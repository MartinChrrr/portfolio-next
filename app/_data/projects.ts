import frContent from "@/content/fr.json";
import enContent from "@/content/en.json";
import type { AppLocale } from "@/i18n/routing";

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
  codeImages?: { src: string; alt: string }[];
  type: "pro" | "ecole";
  confidential: boolean;
  links: { label: string; url: string }[];
  subProjects?: SubProject[];
  architecture?: ArchStage[];
  keyFigures?: KeyFigure[];
};

export type ProjectSummary = {
  url: string;
  icon: "building" | "github" | "eye" | "accessibility";
  title: string;
  description: string;
};

export type Work = {
  url: string;
  image: string;
  title: string;
  description: string;
  date: string;
};

export type Education = {
  url: string;
  image: string;
  title: string;
  school: string;
  date: string;
};

export type SiteContent = {
  status: {
    professionalProjects: ProjectSummary[];
    schoolProjects: ProjectSummary[];
    personalProjects: ProjectSummary[];
    work: Work[];
    education: Education[];
  };
  skills: {
    languages: string[];
    frameworks: string[];
    softSkills: string[];
    tools: string[];
  };
  contact: {
    email: string;
    emailHref: string;
    phone: string;
    phoneHref: string;
    location: string;
    socialLinks: {
      network: "github" | "linkedin";
      label: string;
      href: string;
    }[];
  };
  projects: Project[];
};

const contentByLocale: Record<AppLocale, SiteContent> = {
  fr: frContent as SiteContent,
  en: enContent as SiteContent,
};

export function getSiteContent(locale: AppLocale): SiteContent {
  return contentByLocale[locale];
}

export function getProjects(locale: AppLocale): Project[] {
  return getSiteContent(locale).projects;
}

export function getProjectBySlug(
  locale: AppLocale,
  slug: string,
): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}
