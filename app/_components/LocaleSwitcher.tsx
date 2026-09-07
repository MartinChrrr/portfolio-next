"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const locales: AppLocale[] = ["fr", "en"];

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: AppLocale) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      className="inline-flex rounded-md border border-input bg-background p-0.5"
      role="group"
      aria-label={t("languageLabel")}
    >
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => changeLocale(item)}
          disabled={isPending}
          aria-pressed={locale === item}
          aria-label={item === "fr" ? t("french") : t("english")}
          className={`rounded-sm px-2 py-1 text-sm font-semibold uppercase transition-colors disabled:opacity-60 ${
            locale === item
              ? "bg-primary/20 text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
