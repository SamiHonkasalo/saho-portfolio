import { useMediaQuery, useTheme } from "@mui/material";

export function useClipPathAmount(): number {
  const theme = useTheme();
  let clipNumber = 200;
  const isMedium = useMediaQuery(theme.breakpoints.only("md"));
  if (isMedium) clipNumber = 250;
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
  if (isSmall) clipNumber = 300;
  const isExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));
  if (isExtraSmall) clipNumber = 350;
  return clipNumber;
}
