import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getSiteContent } from "@/app/_data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
};

export const Contact = () => {
  const locale = useLocale();
  const t = useTranslations("Home.contact");
  const { contact } = getSiteContent(locale);

  return (
    <Section
      classname="flex w-full flex-col items-start gap-4"
      id="contact"
    >
      <h2 className="font-caption text-3xl text-glow mb-6 text-white">
        {t("title")}
      </h2>
      <div className="flex w-full gap-4 max-lg:flex-col">
        <Card className="flex-1 glass p-8">
          <h3 className="text-lg text-primary mb-6">{t("information")}</h3>
          <div className="space-y-6">
            <Link
              href={contact.emailHref}
              className="flex items-start gap-4 hover:text-primary transition-colors group"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail />
              </span>
              <span>
                <span className="block font-semibold text-base text-muted-foreground">
                  {t("email")}
                </span>
                <span>{contact.email}</span>
              </span>
            </Link>
            <Link
              href={contact.phoneHref}
              className="flex items-start gap-4 hover:text-primary transition-colors group"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone />
              </span>
              <span>
                <span className="block font-semibold text-base text-muted-foreground">
                  {t("phone")}
                </span>
                <span>{contact.phone}</span>
              </span>
            </Link>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin />
              </span>
              <span>
                <span className="block font-semibold text-base text-muted-foreground">
                  {t("location")}
                </span>
                <span>{contact.location}</span>
              </span>
            </div>
          </div>
        </Card>
        <Card className="flex-1 glass p-8">
          <h3 className="text-lg text-primary mb-6">
            {t("socialNetworks")}
          </h3>
          <p className="text-muted-foreground mb-6">{t("socialIntro")}</p>
          <div className="flex gap-3 mb-8">
            {contact.socialLinks.map((social) => {
              const Icon = socialIcons[social.network];
              return (
                <a
                  key={social.network}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-primary/20 hover:bg-primary/30 transition-all"
                  >
                    <Icon className="h-5 w-5 mr-2 group-hover:text-primary" />
                    <span className="group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </Button>
                </a>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
};
