import * as rootParams from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale: localeOverride }) => {
  let locale = localeOverride;

  if (!locale) {
    const requestedLocale = await rootParams.locale();

    if (!hasLocale(routing.locales, requestedLocale)) {
      notFound();
    }

    locale = requestedLocale;
  }

  const content = (await import(`../content/${locale}.json`)).default;

  return {
    locale,
    messages: content.messages,
  };
});
