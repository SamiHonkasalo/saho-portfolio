import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import {
  AppBar,
  Button,
  debounce,
  Grid,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "~/utils/useIsMobile";
import { LanguageButton } from "./LanguageButton";

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
            <Grid item xs="auto" container sx={{ ml: 6 }}>
              <NavItems />
            </Grid>
          )}
          <Grid item xs="auto">
            <LanguageButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export const NavigationItems: NavItemType[] = [
  {
    labelKey: "home",
    to: "home",
    icon: <HomeIcon />,
    offset: "top",
  },
  {
    labelKey: "about",
    to: "about",
    icon: <InfoIcon />,
    offset: 100,
  },
  {
    labelKey: "technologies",
    to: "technologies",
    icon: <CodeIcon />,
    offset: 100,
  },
  {
    labelKey: "contact",
    to: "contact",
    icon: <ContactMailIcon />,
    offset: 100,
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
  offset: "top" | number;
};

type NavItemDesktopProps = NavItemType;

function NavItem(props: NavItemDesktopProps): JSX.Element {
  const { labelKey, to } = props;
  const { t } = useTranslation("nav");
  const theme = useTheme();
  const activeHash = useNavHashListener();

  const toHash = `#${to}`;
  const active = toHash === activeHash;
  const navigationScroll = useNavigationScroll();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    navigationScroll(props);
  };

  return (
    <Button
      href={toHash}
      onClick={handleClick}
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

export function useNavigationScroll(): (item: NavItemType) => void {
  return React.useCallback(({ offset, to }: NavItemType) => {
    const el = document.getElementById(to);
    if (!el) return;
    if (offset === "top") {
      window.scroll({ top: 0, behavior: "smooth" });
      return;
    }
    const elTop = el.getBoundingClientRect().top;
    const windowTop = window.scrollY;
    window.scroll({
      top: elTop + windowTop - offset,
      left: 0,
      behavior: "smooth",
    });
  }, []);
}

export function useNavHashListener(): string {
  const [activeHash, setActiveHash] = React.useState(window.location.hash);
  React.useEffect(() => {
    const listener = () => {
      if (activeHash !== window.location.hash)
        setActiveHash(window.location.hash);
    };
    const debouncedListener = debounce(listener, 100);
    document.addEventListener("scroll", debouncedListener);
    return () => {
      document.removeEventListener("scroll", debouncedListener);
    };
  }, [activeHash]);
  return activeHash;
}
