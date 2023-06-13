import { Nav } from "@/layout/Nav";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { i18n } = useTranslation();

  const lng = i18n.resolvedLanguage as string;

  const handleLanguageChange = () => {
    void i18n.changeLanguage(lng.toLowerCase() === "fi" ? "en" : "fi");
  };

  return (
    <header className="sticky top-0 z-40 flex h-header w-full text-gray-100 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-center px-4">
        <h1 className="mr-2 w-min text-2xl font-bold">Sami Honkasalo</h1>
        <div className="hidden h-full md:block">
          <Nav />
        </div>
        <button
          type="button"
          className="ml-auto flex h-full w-min items-center justify-center rounded-lg px-8 font-bold uppercase text-gray-200 hover:bg-transparent/5"
          onClick={handleLanguageChange}
        >
          {lng}
        </button>
      </div>
    </header>
  );
};
