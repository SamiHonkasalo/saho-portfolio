import { Button, Card, Grid, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  AboutPageSectionKey,
  AboutPageSectionKeys,
  ABOUT_CONTENT_HEIGHT,
} from "./AboutCards";

type Props = {
  activeSectionKey: AboutPageSectionKey;
  onButtonClick: (clickedSection: AboutPageSectionKey) => void;
};

export const AboutSelectionButtons = ({
  activeSectionKey,
  onButtonClick,
}: Props): JSX.Element => {
  const { t } = useTranslation("about");
  return (
    <Card
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        height: ABOUT_CONTENT_HEIGHT,
      }}
    >
      <Grid container spacing={3} sx={{ pt: 5 }}>
        {AboutPageSectionKeys.map((section) => (
          <AboutSelectionButton
            key={section}
            section={section}
            label={t(section)}
            active={activeSectionKey === section}
            onClick={onButtonClick}
          />
        ))}
      </Grid>
    </Card>
  );
};

type AboutSelectionButtonProps = {
  label: string;
  section: AboutPageSectionKey;
  active: boolean;
  onClick: (section: AboutPageSectionKey) => void;
};

function AboutSelectionButton({
  label,
  active,
  section,
  onClick,
}: AboutSelectionButtonProps): JSX.Element {
  const theme = useTheme();
  const bgColor = theme.palette.background.default;
  const handleClick = React.useCallback(
    () => onClick(section),
    [section, onClick],
  );
  return (
    <Grid item xs={10} sx={{ mx: "auto" }}>
      <Button
        variant="contained"
        onClick={handleClick}
        fullWidth
        sx={{
          textTransform: "none",
          color: active ? theme.palette.common.black : "#797979",
          fontWeight: active
            ? theme.typography.fontWeightBold
            : theme.typography.fontWeightMedium,
          fontSize: theme.typography.pxToRem(24),
          borderRadius: "10px",
          backgroundColor: bgColor,
          "&:hover": {
            backgroundColor: bgColor,
          },
          "&:active": {
            backgroundColor: bgColor,
          },
        }}
      >
        {label}
      </Button>
    </Grid>
  );
}
