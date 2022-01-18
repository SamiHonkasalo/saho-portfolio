import { Grid } from "@mui/material";
import { AboutSelectionButtons } from "./AboutSelectionButtons";
import { AboutSelectionContent } from "./AboutSelectionContent";

export const ABOUT_CONTENT_HEIGHT = 450;
export const AboutCards = (): JSX.Element => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
      <Grid item xl={2} lg={3} md={4} sm={5} xs={8}>
        <AboutSelectionButtons />
      </Grid>
      <Grid item xl={4} lg={5} md={6} sm={6} xs={8}>
        <AboutSelectionContent />
      </Grid>
    </Grid>
  );
};
