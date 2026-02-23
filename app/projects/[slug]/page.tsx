import { notFound } from "next/navigation";
import { Header } from "@/app/_components/Header";
import { ProProjectPage } from "@/app/_components/projects/ProProjectPage";
import { EcoleProjectPage } from "@/app/_components/projects/EcoleProjectPage";
import { projects, getProjectBySlug } from "@/app/_data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Martin Charrier`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Header />
      {project.type === "pro" ? (
        <ProProjectPage project={project} />
      ) : (
        <EcoleProjectPage project={project} />
      )}
    </main>
  );
}
