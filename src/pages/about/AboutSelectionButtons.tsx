import { Button, Card, Grid, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ABOUT_CONTENT_HEIGHT } from "./AboutCards";

export const AboutSelectionButtons = (): JSX.Element => {
  const { t } = useTranslation("about");
  return (
    <Card
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        height: ABOUT_CONTENT_HEIGHT,
      }}
    >
      <Grid container spacing={3} sx={{ pt: 5 }}>
        <AboutSelectionButton label={t("me")} active />
        <AboutSelectionButton label={t("experience")} active={false} />
        <AboutSelectionButton label={t("education")} active={false} />
      </Grid>
    </Card>
  );
};

type AboutSelectionButtonProps = {
  label: string;
  active: boolean;
};

function AboutSelectionButton({
  label,
  active,
}: AboutSelectionButtonProps): JSX.Element {
  const theme = useTheme();
  const bgColor = theme.palette.background.default;
  return (
    <Grid item xs={10} sx={{ mx: "auto" }}>
      <Button
        variant="contained"
        fullWidth
        sx={{
          textTransform: "none",
          color: active ? theme.palette.common.black : "#797979",
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
