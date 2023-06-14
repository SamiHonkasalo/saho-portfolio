import { Title } from "@/components/Title";
import { ContactItems } from "@/sections/contact/ContactItems";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="-mt-about bg-zinc-800 pb-80">
      <div className="mt-about" />
      <div className="mx-auto flex max-w-5xl flex-col items-center p-4">
        <Title id="contact">{t("contact.page-title")}</Title>
        <ContactItems />
      </div>
    </div>
  );
};
