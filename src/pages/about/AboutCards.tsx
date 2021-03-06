import { Box, Grid } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useIsMobile } from "~/utils/useIsMobile";
import {
  AboutSelectionButtons,
  AboutSelectionButtonsMobile,
} from "./AboutSelectionButtons";
import { AboutSelectionContent } from "./AboutSelectionContent";

const { div: MotionDiv } = motion;

export const AboutPageSectionKeys = ["me", "experience", "education"] as const;
export type AboutPageSectionKey = typeof AboutPageSectionKeys[number];
export type AboutPageSection = Record<AboutPageSectionKey, { order: number }>;
export const AboutPageSections: AboutPageSection = {
  me: { order: 1 },
  experience: { order: 2 },
  education: { order: 3 },
};

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
  const [activeSectionKey, setActiveSectionKey] =
    React.useState<AboutPageSectionKey>("me");

  const isMobile = useIsMobile();

  return (
    <Box sx={{ overflow: "hidden", pb: 1 }}>
      <MotionDiv
        variants={TransitionVariants}
        initial="cardOff"
        whileInView="cardOn"
        viewport={{ once: true }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 8 }}>
          {isMobile ? null : (
            <Grid item xl={2} lg={3} md={4} xs={8}>
              <AboutSelectionButtons
                activeSectionKey={activeSectionKey}
                onButtonClick={setActiveSectionKey}
              />
            </Grid>
          )}
          <Grid item xl={4} lg={6} md={7} sm={10} xs={11}>
            {isMobile ? (
              <AboutSelectionButtonsMobile
                activeSectionKey={activeSectionKey}
                onButtonClick={setActiveSectionKey}
              />
            ) : null}
            <AboutSelectionContent activeSectionKey={activeSectionKey} />
          </Grid>
        </Grid>
      </MotionDiv>
    </Box>
  );
};
