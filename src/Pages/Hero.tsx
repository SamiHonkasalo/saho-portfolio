import { Box, Grid, Typography } from "@mui/material";
import heroImage from "~/assets/hero-image.png";
import { HeaderOffset } from "~/Layout/HeaderOffset";

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
        <Grid item xs={6}>
          <Typography variant="h4">
            Samin portfolio (Work In Progress)
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
