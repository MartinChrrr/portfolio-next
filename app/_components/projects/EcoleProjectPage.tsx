"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Section } from "@/app/_components/Section";
import { Spacing } from "@/app/_components/Spacing";
import { BadgeSkills } from "@/app/_components/BadgeSkills";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import type { Project } from "@/app/_data/projects";

export const EcoleProjectPage = ({ project }: { project: Project }) => {
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
          <h2 className="font-caption text-3xl text-glow text-white">
            {project.title}
          </h2>
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

        {/* Screenshots carousel */}
        {project.images.length > 0 && (
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest text-primary mb-5">
              Screenshots
            </h3>
            <Card className="p-6">
              <Carousel opts={{ loop: true }} className="mx-12">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg w-full object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </Card>
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
      </Section>
      <Spacing size="sm" />
    </>
  );
};
