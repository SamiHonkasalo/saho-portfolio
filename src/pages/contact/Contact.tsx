import { Box, useTheme } from "@mui/material";
import { ContactItems } from "./ContactItems";
import { ContactTitle } from "./ContactTitle";

const CONTACT_PAGE_OFFSET = 50;
export const Contact = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pb: 20,
        marginTop: `-${CONTACT_PAGE_OFFSET}px`,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <ContactSpacer />
      <ContactTitle />
      <ContactItems />
    </Box>
  );
};

function ContactSpacer(): JSX.Element {
  return <Box sx={{ height: `${CONTACT_PAGE_OFFSET * 2}px`, width: "100%" }} />;
}
