import { Box, useTheme } from "@mui/material";

export const HeaderOffset = (): JSX.Element => {
  const theme = useTheme();
  return <Box sx={{ ...theme.mixins.toolbar }} />;
};
