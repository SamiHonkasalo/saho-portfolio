import { Box } from "@mui/material";
import { AboutTitle } from "./AboutTitle";

const ABOUT_PAGE_OFFSET = 50;
export const About = (): JSX.Element => {
  return (
    <Box
      sx={{
        marginTop: `-${ABOUT_PAGE_OFFSET}px`,
        backgroundColor: (theme) => theme.palette.background.default,
        minHeight: 800,
        clipPath: "ellipse(200% 100% at 50% 100%)",
      }}
    >
      <AboutSpacer />
      <AboutTitle />
    </Box>
  );
};

function AboutSpacer(): JSX.Element {
  return <Box sx={{ height: `${ABOUT_PAGE_OFFSET}px`, width: "100%" }} />;
}
