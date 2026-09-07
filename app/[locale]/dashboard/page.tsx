import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations("Dashboard");
  const image = "/images/handigital.png";

  return (
    <div>
      <img src={image} alt={t("imageAlt")} />
      <p>{t("placeholder")}</p>
    </div>
  );
}
