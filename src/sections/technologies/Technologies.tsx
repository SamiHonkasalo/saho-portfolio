import { Title } from "@/components/Title";
import "@/sections/technologies/technologies.css";
import { TechnologiesCards } from "@/sections/technologies/TechnologiesCards";
import { useTranslation } from "react-i18next";

export const Technologies = () => {
  const { t } = useTranslation();
  return (
    <div className="technologies-section bg-slate-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center bg-slate-300 p-4">
        <Title id="technologies">{t("technologies.page-title")}</Title>
        <TechnologiesCards />
      </div>
    </div>
  );
};
