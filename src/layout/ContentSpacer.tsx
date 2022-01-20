import { Box, useTheme } from "@mui/material";

export const ContentSpacer = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "80%",
        height: 2,
        backgroundColor: theme.palette.grey[400],
        mx: "auto",
        my: 20,
      }}
    />
  );
};
