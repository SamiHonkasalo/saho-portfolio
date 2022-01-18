import { Card } from "@mui/material";
import { ABOUT_CONTENT_HEIGHT } from "./AboutCards";

export const AboutSelectionContent = (): JSX.Element => {
  return (
    <Card
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        height: ABOUT_CONTENT_HEIGHT,
      }}
    >
      sad
    </Card>
  );
};
