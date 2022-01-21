import { Box, useTheme } from "@mui/material";
import { useClipPathAmount } from "~/utils/useClipPathAmount";
import { TechnologiesCards } from "./TechnologiesCards";
import { TechnologiesTitle } from "./TechnologiesTitle";

export const Technologies = (): JSX.Element => {
  const theme = useTheme();
  const clipNumber = useClipPathAmount();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        clipPath: `ellipse(${clipNumber}% 100% at 50% 0%)`,
        pb: 20,
      }}
    >
      <TechnologiesTitle />
      <TechnologiesCards />
    </Box>
  );
};
