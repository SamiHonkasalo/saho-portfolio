import { Box, Grid } from "@mui/material";
import heroImage from "~/assets/hero-image.png";
import { HeaderOffset } from "~/Layout/HeaderOffset";
import { HeroCard } from "~/pages/hero/HeroCard";

export const Hero = (): JSX.Element => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: `url(${heroImage}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <HeaderOffset />
        </Grid>
        <Grid item xs={11} sm={10} md={9} lg={8} xl={6} sx={{ mt: 4 }}>
          <HeroCard />
        </Grid>
      </Grid>
    </Box>
  );
};
