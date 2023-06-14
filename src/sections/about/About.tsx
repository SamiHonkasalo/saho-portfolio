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
        <Title id="about">{t("about.page-title")}</Title>
        <AboutCard />
      </div>
      <hr className="mx-auto my-40 h-0.5 w-4/5 border-0 bg-slate-400" />
    </div>
  );
};
