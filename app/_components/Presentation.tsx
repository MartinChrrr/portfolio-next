import { useTranslations } from "next-intl";
import { Section } from "./Section";

export const Presentation = () => {
  const t = useTranslations("Home.presentation");

  return (
    <Section
      classname="flex max-lg:flex-col items-start gap-4 scroll-mt-20"
      id="about"
    >
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-3xl text-glow text-white">
          {t("title")}
        </h2>
        <p className="text-justify">
          {t("intro")}
          <br />
          {t("stack")}
        </p>
      </div>

      <div className="flex-[2]">
        <img
          src="/images/CHARRIER_Martin.jpg"
          className="w-1/2 m-auto h-auto max-w-sm rounded-full"
          alt={t("portraitAlt")}
        />
      </div>
    </Section>
  );
};
