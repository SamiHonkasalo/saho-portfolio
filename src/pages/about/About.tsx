import { Box, useMediaQuery, useTheme } from "@mui/material";
import { AboutCards } from "./AboutCards";
import { AboutTitle } from "./AboutTitle";

const ABOUT_PAGE_OFFSET = 50;
export const About = (): JSX.Element => {
  const theme = useTheme();
  let clipNumber = 200;
  const isMedium = useMediaQuery(theme.breakpoints.only("md"));
  if (isMedium) clipNumber = 250;
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
  if (isSmall) clipNumber = 300;
  const isExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));
  if (isExtraSmall) clipNumber = 350;
  return (
    <Box
      sx={{
        marginTop: `-${ABOUT_PAGE_OFFSET}px`,
        backgroundColor: theme.palette.background.default,
        clipPath: `ellipse(${clipNumber}% 100% at 50% 100%)`,
        mb: 15,
      }}
    >
      <AboutSpacer />
      <AboutTitle />
      <AboutCards />
    </Box>
  );
};

function AboutSpacer(): JSX.Element {
  return <Box sx={{ height: `${ABOUT_PAGE_OFFSET}px`, width: "100%" }} />;
}
