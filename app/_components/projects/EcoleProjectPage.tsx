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
      <Section classname="flex flex-col gap-6">
        <Link
          href="/#experiences"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Link>

        <div>
          <h2 className="font-caption text-3xl text-glow text-white">
            {project.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {project.context && (
              <Card className="p-6">
                <h3 className="text-lg text-primary">Contexte</h3>
                <p>{project.context}</p>
              </Card>
            )}

            {project.problems && (
              <Card className="p-6">
                <h3 className="text-lg text-primary">Problématique</h3>
                <p>{project.problems}</p>
              </Card>
            )}
          </div>

          {project.technologies.length > 0 && (
            <div className="lg:col-span-1">
              <Card className="p-6">
                <h3 className="text-lg text-primary">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <BadgeSkills key={index}>{tech}</BadgeSkills>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>

        {project.images.length > 0 && (
          <Card className="p-6">
            <h3 className="text-lg text-primary mb-4">Screenshots</h3>
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
        )}

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
