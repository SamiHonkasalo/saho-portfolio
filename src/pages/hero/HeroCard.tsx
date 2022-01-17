import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import avatarImage from "~/assets/avatar-image.png";
import { useIsMobile } from "~/utils/useIsMobile";

export const HeroCard = (): JSX.Element => {
  const { t } = useTranslation("hero");
  const isMobile = useIsMobile();
  return (
    <Card
      sx={{
        mixBlendMode: "normal",
        backdropFilter: `blur(${10}px)`,
        backgroundColor: "rgba(228, 226, 226, 0.0)",
      }}
    >
      <Grid container flexDirection={isMobile ? "column" : "row"}>
        <Grid
          container
          item
          xs={isMobile ? 12 : 7}
          direction="column"
          order={isMobile ? 2 : 1}
        >
          <Grid
            item
            xs={isMobile ? 8 : true}
            sx={{
              mt: isMobile ? 1 : 5,
              ml: isMobile ? "auto" : 3,
              mr: isMobile ? "auto" : 0,
              maxWidth: isMobile
                ? `${(8 / 12) * 100}% !important`
                : `${(12 / 12) * 100}% !important`,
            }}
          >
            <Paper sx={{ py: 1, pl: 1, pr: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: (theme) => theme.typography.pxToRem(24),
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                  textAlign: isMobile ? "center" : "unset",
                }}
              >
                {t("card-title")}
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={isMobile ? 10 : 5}
            sx={{
              my: 3,
              ml: 3,
              maxWidth: isMobile
                ? `${(10 / 12) * 100}% !important`
                : `none !important`,
              textAlign: isMobile ? "center" : "unset",
            }}
          >
            <Typography variant="body2" whiteSpace="pre-line">
              {t("card-content")}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs order={isMobile ? 1 : 2}>
          <Grid
            item
            sx={{
              mt: 2,
              mr: isMobile ? "auto" : 3,
              ml: "auto",
              mb: 5,
              flexBasis: 196,
              height: 196,
              width: 196,
              flexGrow: 0,
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: `url(${avatarImage}) no-repeat`,
                backgroundSize: "70% 90%",
                backgroundPosition: "bottom center",
                borderRadius: "50%",
                backgroundColor: "rgba(55, 106, 123, 0.3)",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
