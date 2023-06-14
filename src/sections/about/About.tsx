import { Title } from "@/components/Title";
import { AboutCard } from "@/sections/about/AboutCard";
import "@/sections/about/about.css";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about-section clip-path-about col-span-full -mt-about bg-slate-300">
      <div className="h-about w-full" />
      <div className="mx-auto flex max-w-5xl flex-col items-center p-4">
        <Title>{t("about.page-title")}</Title>
        <AboutCard />
      </div>
    </div>
  );
};
