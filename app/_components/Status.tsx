import {
  AccessibilityIcon,
  Building,
  EyeIcon,
  GithubIcon,
  type LucideIcon,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import {
  getSiteContent,
  type ProjectSummary,
} from "@/app/_data/projects";
import { EducationRow } from "./EducationRow";
import { ProjectRow } from "./ProjectRow";
import { Section } from "./Section";
import { WorkRow } from "./WorkRow";

const projectIcons: Record<ProjectSummary["icon"], LucideIcon> = {
  accessibility: AccessibilityIcon,
  building: Building,
  eye: EyeIcon,
  github: GithubIcon,
};

export const Status = () => {
  const locale = useLocale();
  const t = useTranslations("Home.status");
  const { status } = getSiteContent(locale);
  const projectGroups = [
    { title: t("professionalProjects"), projects: status.professionalProjects },
    { title: t("schoolProjects"), projects: status.schoolProjects },
    { title: t("personalProjects"), projects: status.personalProjects },
  ];

  return (
    <Section classname="scroll-mt-20" id="experiences">
      <h2 className="font-caption text-3xl text-glow mb-6 text-white">
        {t("title")}
      </h2>
      <div className="flex max-lg:flex-col items-start gap-4">
        <div className="flex-[2] w-full flex flex-col h-full gap-4">
          <Card className="p-4 flex-1">
            <h3 className="text-lg text-primary">{t("work")}</h3>
            <div className="flex flex-col gap-4">
              {status.work.map((work) => (
                <WorkRow key={`${work.title}-${work.date}`} {...work} />
              ))}
            </div>
          </Card>
          <Card className="p-4 flex-1">
            <h3 className="text-lg text-primary">{t("education")}</h3>
            <div className="flex flex-col gap-4">
              {status.education.map((education) => (
                <EducationRow
                  key={`${education.title}-${education.date}`}
                  {...education}
                />
              ))}
            </div>
          </Card>
        </div>
        <div className="flex-[3] w-full flex flex-col gap-4">
          {projectGroups.map((group) => (
            <Card
              className="w-full p-4 flex flex-col gap-2"
              key={group.title}
            >
              <h3 className="text-lg text-primary">{group.title}</h3>
              <div className="flex flex-col gap-4">
                {group.projects.map((project) => (
                  <ProjectRow
                    key={project.url}
                    url={project.url}
                    logo={projectIcons[project.icon]}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
