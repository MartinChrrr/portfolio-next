import { useLocale, useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { getSiteContent } from "@/app/_data/projects";
import { BadgeSkills } from "./BadgeSkills";
import { Section } from "./Section";

export const Skills = () => {
  const locale = useLocale();
  const t = useTranslations("Home.skills");
  const { skills } = getSiteContent(locale);
  const categories = [
    { title: t("languages"), items: skills.languages },
    { title: t("frameworks"), items: skills.frameworks },
    { title: t("softSkills"), items: skills.softSkills },
    { title: t("tools"), items: skills.tools },
  ];

  return (
    <Section
      classname="flex w-full flex-col items-start gap-4 scroll-mt-20"
      id="skills"
    >
      <h2 className="pb-2 font-caption text-3xl text-glow tracking-tight first:mt-0 text-white">
        {t("title")}
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {categories.map((category) => (
          <Card className="p-6 flex flex-col" key={category.title}>
            <h3 className="text-lg text-primary">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <BadgeSkills key={item}>{item}</BadgeSkills>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
