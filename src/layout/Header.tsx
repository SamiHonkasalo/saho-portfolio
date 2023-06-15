import { Nav } from "@/layout/Nav";
import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  isMediumOrLarger: boolean;
};
export const Header = ({ isMediumOrLarger }: Props) => {
  const { i18n } = useTranslation();

  const lng = i18n.resolvedLanguage as string;

  const isScrolled = useIsScrolled(50);

  const nextLng = lng.toLowerCase() === "fi" ? "en" : "fi";

  const handleLanguageChange = () => {
    void i18n.changeLanguage(nextLng);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 z-40 flex h-header w-full  text-gray-100 backdrop-blur-md transition-all",
        { "bg-transparent/50 shadow-2xl": isScrolled },
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-center px-4">
        <h1 className="mr-2 w-min text-2xl font-bold">Sami Honkasalo</h1>
        {isMediumOrLarger ? (
          <div className="hidden h-full md:block">
            <Nav />
          </div>
        ) : null}
        <button
          type="button"
          className="ml-auto flex h-full w-min items-center justify-center rounded-lg px-8 font-bold uppercase text-gray-200 hover:bg-transparent/5"
          onClick={handleLanguageChange}
        >
          {nextLng}
        </button>
      </div>
    </header>
  );
};

function useIsScrolled(threshold: number) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const listener = () => {
      const distance = window.scrollY;
      setIsScrolled(distance > threshold);
    };
    document.addEventListener("scroll", listener);
    listener();
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [threshold]);
  return isScrolled;
}
