import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Link as LocalizedLink } from "@/i18n/navigation";
import { GithubIcon } from "./icons/GiithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Section } from "./Section";

export const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="bg-background sticky top-0 z-10 py-4">
      <Section classname="flex items-center justify-between gap-4">
        <LocalizedLink
          href="/"
          aria-label={t("homeLabel")}
          className="text-4xl font-bold text-white text-glow max-sm:text-2xl"
        >
          {t("name")}
        </LocalizedLink>
        <div className="flex items-center justify-end gap-2">
          <LocaleSwitcher />
          <ul className="flex">
            <li>
              <Link
                aria-label={t("githubLabel")}
                className={`${buttonVariants({ variant: "outline", size: "icon" })} p-0 mx-1`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MartinChrrr"
              >
                <GithubIcon size={12} className="text-foreground" />
              </Link>
            </li>
            <li>
              <Link
                aria-label={t("linkedinLabel")}
                className={`${buttonVariants({ variant: "outline", size: "icon" })} p-0 mx-1`}
                href="https://www.linkedin.com/in/m-charrier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={12} className="text-foreground" />
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </header>
  );
};
