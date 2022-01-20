import { Box, useTheme } from "@mui/material";
import { TechnologiesTitle } from "./TechnologiesTitle";

export const Technologies = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <TechnologiesTitle />
    </Box>
  );
};
