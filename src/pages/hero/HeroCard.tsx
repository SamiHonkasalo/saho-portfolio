import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import avatarImage from "~/assets/avatar-image.png";
import { useIsMobile } from "~/utils/useIsMobile";

const { div: MotionDiv } = motion;

const TransitionVariants: Variants = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
  cardSlideOff: {
    x: -50,
  },
  cardSlideOn: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

export const HeroCard = (): JSX.Element => {
  const isMobile = useIsMobile();
  const cardContent = React.useMemo(
    () => (isMobile ? <HeroCardMobile /> : <HeroCardDesktop />),
    [isMobile],
  );

  return (
    <MotionDiv
      variants={TransitionVariants}
      initial="cardSlideOff"
      whileInView="cardSlideOn"
      viewport={{ once: true }}
      layout
    >
      <Card
        sx={{
          mixBlendMode: "normal",
          backdropFilter: `blur(${10}px)`,
          backgroundColor: "rgba(228, 226, 226, 0.0)",
          p: 4,
          pr: isMobile ? 4 : 1,
        }}
      >
        {cardContent}
      </Card>
    </MotionDiv>
  );
};

function HeroCardDesktop(): JSX.Element {
  return (
    <Grid container>
      {/* Left side container */}
      <Grid item container flexDirection="column" flexWrap="nowrap" xs={7}>
        {/* Upper part */}
        <Grid item xs={12}>
          <HeroCardTitle />
        </Grid>
        {/* Lower part */}
        <Grid item xs={12}>
          <HeroCardText />
        </Grid>
      </Grid>
      {/* Right side container */}
      <Grid item container xs justifyContent="flex-end" sx={{ minWidth: 196 }}>
        <Grid item>
          <HeroCardAvatar />
        </Grid>
      </Grid>
    </Grid>
  );
}

function HeroCardMobile(): JSX.Element {
  return (
    <Grid container flexDirection="column" alignItems="center">
      {/* Top container */}
      <Grid
        item
        container
        xs
        justifyContent="center"
        sx={{ minWidth: 196, mb: 3 }}
      >
        <Grid item>
          <HeroCardAvatar />
        </Grid>
      </Grid>
      {/* Bottom container */}
      <Grid item container xs flexDirection="column" flexWrap="nowrap">
        {/* Upper part */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <HeroCardTitle />
        </Grid>
        {/* Lower part */}
        <Grid item xs={12}>
          <HeroCardText />
        </Grid>
      </Grid>
    </Grid>
  );
}

function HeroCardTitle() {
  const { t } = useTranslation("hero");
  const isMobile = useIsMobile();
  return (
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
  );
}

function HeroCardText() {
  const { t } = useTranslation("hero");
  return (
    <MotionDiv
      variants={TransitionVariants}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true }}
    >
      <Typography variant="body2" whiteSpace="pre-line">
        {t("card-content")}
      </Typography>
    </MotionDiv>
  );
}

function HeroCardAvatar(): JSX.Element {
  return (
    <Box
      sx={{
        width: 196,
        height: 196,
        background: `url(${avatarImage}) no-repeat`,
        backgroundSize: "70% 90%",
        backgroundPosition: "bottom center",
        borderRadius: "50%",
        backgroundColor: "rgba(55, 106, 123, 0.3)",
      }}
    />
  );
}
