import BusinessIcon from "@mui/icons-material/Business";
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { AboutPageSection, ABOUT_CONTENT_HEIGHT } from "./AboutCards";

const { section: MotionSection } = motion;

const Experiences: ExperienceItemProps[] = [
  {
    title: "Software Developer",
    company: "Nodeon Finland Oy",
    from: { month: 1, year: 2021 },
  },
  {
    title: "Software Developer",
    company: "Lorem Ipsum",
    from: { month: 1, year: 2018 },
    to: { month: 1, year: 2021 },
  },
];

type Props = {
  activeSection: AboutPageSection;
};
export const AboutSelectionContent = ({
  activeSection,
}: Props): JSX.Element => {
  const { t } = useTranslation("about");

  const content = React.useMemo(() => {
    switch (activeSection) {
      case "me":
        return <p>me</p>;
      case "experience":
        return (
          <List>
            {Experiences.map((e) => (
              <ExperienceListItem key={e.company} {...e} />
            ))}
          </List>
        );
      case "education":
        return <p>education</p>;

      default:
        return null;
    }
  }, [activeSection]);

  return (
    <Card
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        height: ABOUT_CONTENT_HEIGHT,
        p: 3,
      }}
    >
      <MotionSection>
        <AboutSelectionContentTitle title={t(activeSection)} />
        {content}
      </MotionSection>
    </Card>
  );
};

type AboutSelectionContentTitleProps = {
  title: string;
};
function AboutSelectionContentTitle({
  title,
}: AboutSelectionContentTitleProps) {
  const theme = useTheme();
  return (
    <Typography
      variant="h5"
      sx={{
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.pxToRem(24),
        color: theme.palette.common.black,
      }}
    >
      {title}
    </Typography>
  );
}

type MonthYear = {
  month: number;
  year: number;
};
type AboutTimespan = {
  from: MonthYear;
  to?: MonthYear;
};
type ExperienceItem = {
  title: string;
  company: string;
};

type ExperienceItemProps = ExperienceItem & AboutTimespan;

function ExperienceListItem({
  title,
  company,
  from,
  to,
}: ExperienceItemProps): JSX.Element {
  return (
    <ListItem>
      <ListItemIcon sx={{ color: (theme) => theme.palette.common.black }}>
        <BusinessIcon fontSize="large" />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primaryTypographyProps={{
          color: (theme) => theme.palette.common.black,
          fontWeight: (theme) => theme.typography.fontWeightBold,
        }}
        secondaryTypographyProps={{
          color: (theme) => theme.palette.common.black,
        }}
        primary={
          <Typography
            sx={{
              color: (theme) => theme.palette.common.black,
              fontWeight: (theme) => theme.typography.fontWeightBold,
            }}
          >
            {title}
          </Typography>
        }
        secondary={
          <>
            <Typography
              component="span"
              sx={{
                mr: 2,
                color: (theme) => theme.palette.grey[600],
              }}
            >
              {company}
            </Typography>
            {timespansToComponent(from, to)}
          </>
        }
      />
    </ListItem>
  );
}

function timespansToComponent(from: MonthYear, to?: MonthYear): JSX.Element {
  return (
    <>
      <Typography
        component="span"
        sx={{
          mr: 1,
          color: (theme) => theme.palette.grey[600],
        }}
      >
        {`${from.month}/${from.year}`}
      </Typography>
      <Typography
        component="span"
        sx={{
          color: (theme) => theme.palette.grey[600],
        }}
      >
        {to
          ? `${String.fromCharCode(8211)} ${to.month}/${to.year}`
          : String.fromCharCode(8594)}
      </Typography>
    </>
  );
}
