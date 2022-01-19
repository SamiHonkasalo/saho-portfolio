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
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "~/utils/useIsMobile";
import {
  AboutPageSectionKey,
  AboutPageSections,
  ABOUT_CONTENT_HEIGHT,
} from "./AboutCards";

const { section: MotionSection } = motion;

const SectionVariants: Variants = {
  offUpper: {
    opacity: 0,
  },
  offLower: {
    opacity: 0,
  },
  on: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

const Experiences: ExperienceItemProps[] = [
  {
    titleTranslationKey: "nodeon",
    company: "Nodeon Finland Oy",
    from: { month: 1, year: 2021 },
  },
  {
    titleTranslationKey: "mock",
    company: "Lorem Ipsum",
    from: { month: 1, year: 2018 },
    to: { month: 1, year: 2021 },
  },
];

type Props = {
  activeSectionKey: AboutPageSectionKey;
};
export const AboutSelectionContent = ({
  activeSectionKey,
}: Props): JSX.Element => {
  const [prevSectionKey, setprevSectionKey] = React.useState(activeSectionKey);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    setprevSectionKey(activeSectionKey);
  }, [activeSectionKey]);

  const content = React.useMemo(() => {
    switch (activeSectionKey) {
      case "me":
        return (
          <MeSectionWrapper
            prevKey={prevSectionKey}
            curKey={activeSectionKey}
            section={<AboutMeText />}
          />
        );
      case "experience":
        return (
          <ExperienceSectionWrapper
            prevKey={prevSectionKey}
            curKey={activeSectionKey}
            section={
              <List>
                {Experiences.map((e) => (
                  <ExperienceListItem key={e.company} {...e} />
                ))}
              </List>
            }
          />
        );
      case "education":
        return (
          <EducationSectionWrapper
            prevKey={prevSectionKey}
            curKey={activeSectionKey}
            section={<AboutMeText />}
          />
        );

      default:
        return null;
    }
  }, [activeSectionKey, prevSectionKey]);

  return (
    <Card
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        height: ABOUT_CONTENT_HEIGHT,
        p: isMobile ? 2 : 3,
      }}
    >
      {content}
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
  titleTranslationKey: string;
  company: string;
};

type ExperienceItemProps = ExperienceItem & AboutTimespan;

function ExperienceListItem({
  titleTranslationKey,
  company,
  from,
  to,
}: ExperienceItemProps): JSX.Element {
  const { t } = useTranslation("experience");
  const isMobile = useIsMobile();
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
          fontSize: (theme) => theme.typography.pxToRem(isMobile ? 14 : 16),
        }}
        secondaryTypographyProps={{
          color: (theme) => theme.palette.common.black,
        }}
        primary={
          <Typography
            sx={{
              color: (theme) => theme.palette.common.black,
              fontWeight: (theme) => theme.typography.fontWeightBold,
              fontSize: (theme) => theme.typography.pxToRem(isMobile ? 14 : 16),
            }}
          >
            {t(titleTranslationKey)}
          </Typography>
        }
        secondary={
          <>
            <Typography
              component={isMobile ? "p" : "span"}
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

function timespansToComponent(
  from: MonthYear,
  to: MonthYear | undefined,
): JSX.Element {
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

type SectionWrapperProps = {
  section: JSX.Element;
  prevKey: AboutPageSectionKey;
  curKey: AboutPageSectionKey;
};
function MeSectionWrapper({
  section,
  prevKey,
  curKey,
}: SectionWrapperProps): JSX.Element {
  const { t } = useTranslation("about");
  return (
    <MotionSection
      variants={SectionVariants}
      initial={
        AboutPageSections[prevKey].order < AboutPageSections[curKey].order
          ? "offUpper"
          : "offLower"
      }
      animate="on"
    >
      <AboutSelectionContentTitle title={t(curKey)} />
      {section}
    </MotionSection>
  );
}
function ExperienceSectionWrapper({
  section,
  prevKey,
  curKey,
}: SectionWrapperProps): JSX.Element {
  const { t } = useTranslation("about");
  return (
    <MotionSection
      variants={SectionVariants}
      initial={
        AboutPageSections[prevKey].order < AboutPageSections[curKey].order
          ? "offUpper"
          : "offLower"
      }
      animate="on"
    >
      <AboutSelectionContentTitle title={t(curKey)} />
      {section}
    </MotionSection>
  );
}
function EducationSectionWrapper({
  section,
  prevKey,
  curKey,
}: SectionWrapperProps): JSX.Element {
  const { t } = useTranslation("about");
  return (
    <MotionSection
      variants={SectionVariants}
      initial={
        AboutPageSections[prevKey].order < AboutPageSections[curKey].order
          ? "offUpper"
          : "offLower"
      }
      animate="on"
    >
      <AboutSelectionContentTitle title={t(curKey)} />
      {section}
    </MotionSection>
  );
}

function AboutMeText(): JSX.Element {
  const { t } = useTranslation("about");
  return (
    <Typography
      variant="body2"
      whiteSpace="pre-line"
      sx={{ color: (theme) => theme.palette.common.black, m: 2 }}
    >
      {t("me-text")}
    </Typography>
  );
}
