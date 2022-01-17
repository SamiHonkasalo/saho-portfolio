import { useMediaQuery, useTheme } from "@mui/material";

export function useIsMobile(): boolean {
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down("md"));
  return isMediumOrSmaller;
}
