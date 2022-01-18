import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const AboutTitle = (): JSX.Element => {
  const { t } = useTranslation("about");
  return (
    <Paper sx={{ py: 1, pl: 1, pr: 3, width: 212, height: 49, mx: "auto" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: (theme) => theme.typography.pxToRem(24),
          fontWeight: (theme) => theme.typography.fontWeightBold,
          textAlign: "center",
        }}
      >
        {t("page-title")}
      </Typography>
    </Paper>
  );
};
