import { Box, useTheme } from "@mui/material";
import { AboutCards } from "./AboutCards";
import { AboutTitle } from "./AboutTitle";

const ABOUT_PAGE_OFFSET = 50;
export const About = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginTop: `-${ABOUT_PAGE_OFFSET}px`,
        backgroundColor: theme.palette.background.default,
        minHeight: 1500,
        clipPath: "ellipse(200% 100% at 50% 100%)",
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
