import Link from "next/link";
import { ArrowLeft, ExternalLink, Lock, ChevronRight } from "lucide-react";
import { Section } from "@/app/_components/Section";
import { Spacing } from "@/app/_components/Spacing";
import { BadgeSkills } from "@/app/_components/BadgeSkills";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import type { Project, ArchStage, KeyFigure } from "@/app/_data/projects";

const ArchDiagram = ({ stages }: { stages: ArchStage[] }) => (
  <Card className="p-6 overflow-x-auto">
    <div className="flex items-center justify-center gap-3 flex-wrap min-w-fit py-4">
      {stages.map((stage, stageIndex) => (
        <div key={stageIndex} className="contents">
          {stageIndex > 0 && (
            <ChevronRight className="h-5 w-5 text-muted-foreground/50 shrink-0 max-sm:hidden" />
          )}
          <div className="flex gap-2">
            {stage.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 text-center"
              >
                <p className="font-mono text-base font-semibold text-primary">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export const ProProjectPage = ({ project }: { project: Project }) => {
  return (
    <>
      <Spacing size="sm" />
      <Section classname="flex flex-col gap-8">
        <Link
          href="/#experiences"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Link>

        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <h2 className="font-caption text-3xl text-glow text-white">
              {project.title}
            </h2>
            {project.confidential && (
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground border border-muted-foreground/30 rounded-full px-2.5 py-0.5">
                <Lock className="h-3 w-3" />
                Confidentiel
              </span>
            )}
          </div>
          <p className="text-lg text-muted-foreground">{project.subtitle}</p>
        </div>

        {/* Separator */}
        <div className="h-px bg-linear-to-r from-primary/40 to-transparent" />

        {/* Description block with accent left border */}
        <div className="border-l-2 border-primary/60 bg-card/50 rounded-r-xl pl-5 pr-6 py-5">
          <p className="text-base font-semibold uppercase tracking-widest text-primary mb-2">
            Description
          </p>
          <p className="text-card-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key figures */}
        {project.keyFigures && project.keyFigures.length > 0 && (
          <div className="flex justify-center gap-12 flex-wrap py-2">
            {project.keyFigures.map((figure, index) => (
              <div key={index} className="text-center">
                <p className="font-mono text-5xl font-extrabold text-glow text-white">
                  {figure.value}
                </p>
                <p className="text-base text-muted-foreground mt-1">
                  {figure.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Context block with accent left border */}
        {project.context && (
          <div className="border-l-2 border-primary/60 bg-card/50 rounded-r-xl pl-5 pr-6 py-5">
            <p className="text-base font-semibold uppercase tracking-widest text-primary mb-2">
              Contexte
            </p>
            <p className="text-card-foreground leading-relaxed">
              {project.context}
            </p>
          </div>
        )}

        {/* Grid 2/3 - 1/3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {project.problems && (
              <Card className="p-6">
                <h3 className="text-base font-semibold uppercase tracking-widest text-primary mb-2">
                  Problématique
                </h3>
                <p className="leading-relaxed">{project.problems}</p>
              </Card>
            )}

            {project.role && (
              <Card className="p-6">
                <h3 className="text-base font-semibold uppercase tracking-widest text-primary mb-2">
                  Rôle
                </h3>
                <p className="leading-relaxed">{project.role}</p>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            {project.technologies.length > 0 && (
              <Card className="p-6 h-full">
                <h3 className="text-base font-semibold uppercase tracking-widest text-primary mb-3">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <BadgeSkills key={index}>{tech}</BadgeSkills>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Architecture diagram */}
        {project.architecture && project.architecture.length > 0 && (
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest text-primary mb-5">
              Architecture
            </h3>
            <ArchDiagram stages={project.architecture} />
          </div>
        )}

        {/* Highlights as timeline */}
        {project.highlights.length > 0 && (
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest text-primary mb-5">
              Points clés
            </h3>
            <div className="flex flex-col">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                    {index < project.highlights.length - 1 && (
                      <div className="w-px flex-1 bg-linear-to-b from-primary/30 to-transparent min-h-8" />
                    )}
                  </div>
                  <p className={`text-card-foreground leading-relaxed ${index < project.highlights.length - 1 ? "pb-5" : ""}`}>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-projects */}
        {project.subProjects && project.subProjects.length > 0 && (
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest text-primary mb-5">
              Sous-projets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.subProjects.map((sub, index) => (
                <Card
                  key={index}
                  className="p-5 border-muted hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-white">{sub.title}</h4>
                    {sub.autonomous && (
                      <span className="text-sm text-primary border border-primary/30 bg-primary/10 rounded-full px-2 py-0.5">
                        Autonome
                      </span>
                    )}
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {sub.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Confidentiality footer */}
        {project.confidential && (
          <p className="text-center text-sm text-muted-foreground/60 italic border-t border-border/30 pt-4">
            Projet confidentiel — visuels non diffusables
          </p>
        )}
      </Section>
      <Spacing size="sm" />
    </>
  );
};
