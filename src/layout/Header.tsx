import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
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
import { useIsMobile } from "~/utils/useIsMobile";

export const Header = (): JSX.Element => {
  const notAtTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 75,
  });
  const isMobile = useIsMobile();

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
          {isMobile ? null : <Grid item xs={2} />}
          <Grid item xs={isMobile ? true : 1}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: (theme) => theme.typography.fontWeightBold,
                fontSize: (theme) => theme.typography.pxToRem(24),
                lineHeight: 1.3,
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              Sami Honkasalo
            </Typography>
          </Grid>
          {isMobile ? null : (
            <Grid item xs container sx={{ ml: 6 }}>
              <NavItems />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export const NavigationItems: NavItemType[] = [
  {
    labelKey: "home",
    to: "#home",
    icon: <HomeIcon />,
  },
  {
    labelKey: "about",
    to: "#about",
    icon: <InfoIcon />,
  },
  {
    labelKey: "technologies",
    to: "#technologies",
    icon: <CodeIcon />,
  },
  {
    labelKey: "contact",
    to: "#contact",
    icon: <ContactMailIcon />,
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

export type NavItemType = {
  labelKey: string;
  to: string;
  icon: JSX.Element;
};

type NavItemDesktopProps = Omit<NavItemType, "icon">;

function NavItem({ labelKey, to }: NavItemDesktopProps): JSX.Element {
  const { t } = useTranslation("nav");
  const theme = useTheme();
  const location = useLocation();
  const { hash } = location;
  const active = to === hash || (!hash && to === "#home");
  const navigationScroll = useNavigationScroll({ labelKey });

  return (
    <Button
      component={HashLink}
      to={to}
      scroll={navigationScroll}
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

type UseNavigationScrollArgs = {
  labelKey: string;
};

type NavigationScroll = (el: HTMLElement) => void;
export function useNavigationScroll({
  labelKey,
}: UseNavigationScrollArgs): NavigationScroll {
  return React.useCallback(
    (el: HTMLElement) => {
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
    [labelKey],
  );
}
