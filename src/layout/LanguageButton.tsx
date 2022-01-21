import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageButton = (): JSX.Element => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const currentLanguage = language.substring(0, 2);

  const handleClick = React.useCallback(async () => {
    try {
      if (currentLanguage !== "en" && currentLanguage !== "fi")
        await changeLanguage("en");
      if (currentLanguage === "en") await changeLanguage("fi");
      if (currentLanguage === "fi") await changeLanguage("en");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [changeLanguage, currentLanguage]);

  return (
    <Button
      onClick={handleClick}
      sx={{ color: (theme) => theme.palette.common.white, height: "100%" }}
    >
      {currentLanguage}
    </Button>
  );
};
