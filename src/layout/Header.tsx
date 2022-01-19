import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Header = (): JSX.Element => {
  const notAtTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 75,
  });

  return (
    <AppBar
      position="fixed"
      elevation={notAtTop ? 3 : 0}
      sx={{
        background: `rgba(0, 0, 0, ${notAtTop ? 0.3 : 0.02})`,
        mixBlendMode: "normal",
        backdropFilter: `blur(${notAtTop ? 20 : 10}px)`,
      }}
    >
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={3} />
          <Grid item xs={1}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: (theme) => theme.typography.fontWeightBold,
                fontSize: (theme) => theme.typography.pxToRem(24),
                lineHeight: 1.3,
              }}
            >
              Sami Honkasalo
            </Typography>
          </Grid>
          <Grid item xs={4} container>
            <NavItems />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const NavigationItems: NavItemType[] = [
  {
    labelKey: "home",
    to: "#home",
  },
  {
    labelKey: "about",
    to: "#about",
  },
  {
    labelKey: "technologies",
    to: "#technologies",
  },
  {
    labelKey: "contact",
    to: "#contact",
  },
];

function NavItems(): JSX.Element {
  return (
    <>
      {React.useMemo(
        () => NavigationItems.map((n) => <NavItem key={n.labelKey} {...n} />),
        [],
      )}
    </>
  );
}

type NavItemType = {
  labelKey: string;
  to: string;
};

type NavItemProps = NavItemType;
function NavItem({ labelKey, to }: NavItemProps): JSX.Element {
  const { t } = useTranslation("nav");
  const theme = useTheme();
  const location = useLocation();
  const { hash } = location;
  const active = to === hash;

  const customScroll = React.useCallback(
    (el: HTMLElement) => {
      if (active) return;
      if (labelKey === "home") {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        return;
      }
      let topOffset = 0;
      switch (labelKey) {
        case "about":
          topOffset = 100;
          break;

        default:
          break;
      }
      const elTop = el.getBoundingClientRect().top;
      const windowTop = window.scrollY;
      window.scroll({
        top: elTop + windowTop - topOffset,
        left: 0,
        behavior: "smooth",
      });
    },
    [labelKey, active],
  );

  return (
    <Button
      component={HashLink}
      to={to}
      scroll={customScroll}
      sx={{
        width: 125,
        textTransform: "none",
        color: active ? theme.palette.common.white : theme.palette.grey[600],
        fontWeight: active
          ? theme.typography.fontWeightBold
          : theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(18),
      }}
    >
      {t(labelKey)}
    </Button>
  );
}
