import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavigationItems, NavItemType, useNavigationScroll } from "./Header";

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
function MobileNavigationItem({
  to,
  labelKey,
  icon,
}: MobileNavigationItemProps): JSX.Element {
  const { t } = useTranslation("nav");
  const theme = useTheme();
  const location = useLocation();
  const { hash } = location;
  const active = to === hash || (!hash && to === "#home");
  const navigationScroll = useNavigationScroll({ active, labelKey });
  return (
    <BottomNavigationAction
      showLabel={active}
      component={HashLink}
      scroll={navigationScroll}
      to={to}
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
