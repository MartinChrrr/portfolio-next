import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import GradientMesh from "@/app/_components/GradientMesh";
import { Header } from "@/app/_components/Header";
import { EcoleProjectPage } from "@/app/_components/projects/EcoleProjectPage";
import { ProProjectPage } from "@/app/_components/projects/ProProjectPage";
import { getProjectBySlug, getProjects } from "@/app/_data/projects";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getProjects(routing.defaultLocale).map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const project = getProjectBySlug(locale, slug);
  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("projectTitle", { project: project.title }),
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <GradientMesh />
      <Header />
      {project.type === "pro" ? (
        <ProProjectPage project={project} />
      ) : (
        <EcoleProjectPage project={project} />
      )}
    </main>
  );
}
