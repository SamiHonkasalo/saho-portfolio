import { Grid } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { AboutSelectionButtons } from "./AboutSelectionButtons";
import { AboutSelectionContent } from "./AboutSelectionContent";

const { div: MotionDiv } = motion;

export const ABOUT_CONTENT_HEIGHT = 450;

const TransitionVariants: Variants = {
  cardOff: {
    y: 300,
    rotate: -10,
  },
  cardOn: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export const AboutCards = (): JSX.Element => {
  return (
    <MotionDiv
      variants={TransitionVariants}
      initial="cardOff"
      whileInView="cardOn"
      viewport={{ once: true }}
    >
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
        <Grid item xl={2} lg={3} md={4} sm={5} xs={8}>
          <AboutSelectionButtons />
        </Grid>
        <Grid item xl={4} lg={5} md={6} sm={6} xs={8}>
          <AboutSelectionContent />
        </Grid>
      </Grid>
    </MotionDiv>
  );
};
