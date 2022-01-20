import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const TechnologiesTitle = (): JSX.Element => {
  const { t } = useTranslation("technologies");
  return (
    <Paper
      id="technologies"
      sx={{ py: 1, px: 2, width: 212, height: 49, mx: "auto" }}
    >
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
