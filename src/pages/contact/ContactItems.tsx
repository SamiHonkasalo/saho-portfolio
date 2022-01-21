import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Grid, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export type ContactType = {
  icon: JSX.Element;
  text: string;
  textTranslationKey?: string;
  to: string;
};

export const Contacts: ContactType[] = [
  {
    text: "Email",
    textTranslationKey: "email",
    to: "mailto:honkasalo.sami@gmail.com",
    icon: <EmailIcon />,
  },
  {
    text: "GitHub",
    to: "https://github.com/SamiHonkasalo",
    icon: <GitHubIcon />,
  },
  {
    text: "LinkedIn",
    to: "https://www.linkedin.com/in/sami-honkasalo/",
    icon: <LinkedInIcon />,
  },
];

export const ContactItems = (): JSX.Element => {
  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        xl={6}
        lg={7}
        md={8}
        sm={9}
        xs={12}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {Contacts.map((c) => (
          <ContactItem key={c.text} {...c} />
        ))}
      </Grid>
    </Box>
  );
};

function ContactItem({
  textTranslationKey,
  text,
  icon,
  to,
}: ContactType): JSX.Element {
  const { t } = useTranslation("contact");
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;
  return (
    <Grid item xs={8} sm={7} md={6} lg={4}>
      <Button
        variant="contained"
        href={to}
        rel="noopener noreferrer"
        target="_blank"
        startIcon={icon}
        fullWidth
        sx={{
          textTransform: "none",
          color: theme.palette.common.black,
          fontWeight: theme.typography.fontWeightMedium,
          fontSize: theme.typography.pxToRem(24),
          borderRadius: "10px",
          backgroundColor,
          "&:hover": {
            backgroundColor,
          },
          "&:active": {
            backgroundColor,
          },
        }}
      >
        {textTranslationKey ? t(textTranslationKey) : text}
      </Button>
    </Grid>
  );
}
