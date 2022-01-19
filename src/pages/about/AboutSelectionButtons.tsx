import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  AboutPageSectionKey,
  AboutPageSectionKeys,
  AboutPageSections,
  ABOUT_CONTENT_HEIGHT,
} from "./AboutCards";

const { div: MotionDiv } = motion;

type Props = {
  activeSectionKey: AboutPageSectionKey;
  onButtonClick: (clickedSection: AboutPageSectionKey) => void;
};

export const AboutSelectionButtons = ({
  activeSectionKey,
  onButtonClick,
}: Props): JSX.Element => {
  const { t } = useTranslation("about");
  return (
    <Card
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        height: ABOUT_CONTENT_HEIGHT,
        position: "relative",
        overflow: "visible",
        marginTop: 3,
      }}
    >
      <Grid container spacing={3} sx={{ pt: 5 }}>
        {AboutPageSectionKeys.map((section) => (
          <AboutSelectionButton
            key={section}
            section={section}
            label={t(section)}
            active={activeSectionKey === section}
            onClick={onButtonClick}
          />
        ))}
      </Grid>
      <ActiveSelectionIndicator activeSelection={activeSectionKey} />
    </Card>
  );
};

type AboutSelectionButtonProps = {
  label: string;
  section: AboutPageSectionKey;
  active: boolean;
  onClick: (section: AboutPageSectionKey) => void;
};

function AboutSelectionButton({
  label,
  active,
  section,
  onClick,
}: AboutSelectionButtonProps): JSX.Element {
  const theme = useTheme();
  const bgColor = theme.palette.background.default;
  const handleClick = React.useCallback(
    () => onClick(section),
    [section, onClick],
  );
  return (
    <Grid item xs={10} sx={{ mx: "auto" }}>
      <Button
        variant="contained"
        onClick={handleClick}
        fullWidth
        sx={{
          textTransform: "none",
          color: active ? theme.palette.common.black : "#797979",
          fontWeight: active
            ? theme.typography.fontWeightBold
            : theme.typography.fontWeightMedium,
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

export const AboutSelectionButtonsMobile = ({
  activeSectionKey,
  onButtonClick,
}: Props): JSX.Element => {
  const { t } = useTranslation("about");
  return (
    <Grid container spacing={1} sx={{ mb: 2 }} justifyContent="center">
      {AboutPageSectionKeys.map((section) => (
        <AboutSelectionButtonMobile
          key={section}
          section={section}
          label={t(section)}
          active={activeSectionKey === section}
          onClick={onButtonClick}
        />
      ))}
    </Grid>
  );
};

function AboutSelectionButtonMobile({
  label,
  active,
  section,
  onClick,
}: AboutSelectionButtonProps): JSX.Element {
  const handleClick = React.useCallback(
    () => onClick(section),
    [section, onClick],
  );
  const icon = React.useMemo(() => {
    switch (section) {
      case "me":
        return <AccountCircleIcon fontSize="large" />;
      case "experience":
        return <BusinessIcon fontSize="large" />;
      case "education":
        return <SchoolIcon fontSize="large" />;

      default:
        return null;
    }
  }, [section]);

  return (
    <Grid container item xs={4} alignContent="center" flexDirection="column">
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", minWidth: 90 }}
      >
        <Tooltip title={label}>
          <IconButton
            onClick={handleClick}
            sx={{
              transform: `scale(${active ? 1.4 : 1})`,
              transition: `transform 0.3s ease-in-out`,
              color: (theme) => theme.palette.common.black,
            }}
          >
            {icon}
          </IconButton>
        </Tooltip>
      </Grid>
      {active ? (
        <MotionDiv
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
        >
          <Grid item>
            <Typography
              variant="body2"
              textAlign="center"
              sx={{
                color: (theme) => theme.palette.common.black,
                fontWeight: (theme) => theme.typography.fontWeightBold,
              }}
            >
              {label}
            </Typography>
          </Grid>
        </MotionDiv>
      ) : null}
    </Grid>
  );
}

type ActiveSelectionIndicatorProps = {
  activeSelection: AboutPageSectionKey;
};

function ActiveSelectionIndicator({
  activeSelection,
}: ActiveSelectionIndicatorProps): JSX.Element {
  const theme = useTheme();
  const height = 75;
  const width = theme.spacing(3);
  const widthNumber = Number.parseInt(width.replace("px", ""), 10);
  const buttonHeight = 54;
  const buttonSpacing = Number.parseInt(theme.spacing(3).replace("px", ""), 10);
  const heightDiff = height - buttonHeight;
  const transitionDuration = `${0.3}s`;
  const { order } = AboutPageSections[activeSelection];
  const translateY = (order - 1) * (buttonHeight + buttonSpacing);
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.white,
        width,
        height,
        position: "absolute",
        top: `calc(${theme.spacing(3)} + ${theme.spacing(5)} - ${
          heightDiff / 2
        }px)`,
        left: "100%",
        clipPath: `path('${generateClipPath(widthNumber, height)}')`,
        transition: `transform ${transitionDuration} ease-in-out`,
        transform: `translateY(${translateY}px)`,
      }}
    />
  );
}

function generateClipPath(width: number, height: number): string {
  const quart = height / 4;
  return `M0 ${0} C ${width} ${quart}, ${width} ${quart}, ${width} ${
    quart * 2
  }, ${width} ${quart * 3}, ${0} ${quart * 3}, ${0} ${quart * 4}`;
}
