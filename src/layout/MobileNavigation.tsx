import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  NavigationItems,
  NavItemType,
  useNavHashListener,
  useNavigationScroll,
} from "./Header";

export const MobileNavigation = (): JSX.Element => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        {NavigationItems.map((n) => (
          <MobileNavigationItem key={n.to} {...n} />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

type MobileNavigationItemProps = NavItemType;
function MobileNavigationItem(props: MobileNavigationItemProps): JSX.Element {
  const { to, labelKey, icon } = props;
  const { t } = useTranslation("nav");
  const theme = useTheme();
  const toHash = `#${to}`;
  const activeHash = useNavHashListener();

  const hashMatch = toHash === activeHash;
  const active = to === "home" ? hashMatch || !activeHash : hashMatch;
  const navigationScroll = useNavigationScroll();
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    navigationScroll(props);
  };
  return (
    <BottomNavigationAction
      showLabel={active}
      href={toHash}
      onClick={handleClick}
      label={t(labelKey)}
      icon={icon}
      sx={{
        color: theme.palette.common.white,
        ".MuiBottomNavigationAction-label": {
          color: theme.palette.common.white,
        },
      }}
    />
  );
}
