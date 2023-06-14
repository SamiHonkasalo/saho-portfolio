import {
  EducationItemProps,
  ExperienceItemProps,
  MonthYear,
} from "@/sections/about/about.types";
import {
  AboutPageButtonIcons,
  AboutPageSectionKey,
} from "@/sections/about/config";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const SectionVariants: Variants = {
  off: {
    opacity: 0,
  },
  on: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

type Props = {
  activeSectionKey: AboutPageSectionKey;
};

export const AboutContent = ({ activeSectionKey }: Props) => {
  const { t } = useTranslation();

  const Experiences: ExperienceItemProps[] = React.useMemo(
    () => [
      {
        title: t("experience.nodeon"),
        company: "Nodeon Finland Oy",
        from: { month: 1, year: 2021 },
      },
      {
        title: t("experience.jamk"),
        company: "JAMK",
        from: { month: 8, year: 2019 },
        to: { month: 7, year: 2022 },
      },
      {
        title: t("experience.devecto"),
        company: "Devecto Oy",
        from: { month: 12, year: 2019 },
        to: { month: 12, year: 2020 },
      },
      {
        title: t("experience.previous"),
        company: "",
        from: { month: 9, year: 2017 },
        to: { month: 12, year: 2019 },
        disabled: true,
      },
    ],
    [t],
  );

  const Educations: EducationItemProps[] = React.useMemo(
    () => [
      {
        title: t("education.it"),
        school: "JAMK",
        from: { month: 9, year: 2019 },
        to: { month: 9, year: 2020 },
      },
      {
        title: t("education.automation"),
        school: "JAMK",
        from: { month: 8, year: 2014 },
        to: { month: 1, year: 2018 },
      },
    ],
    [t],
  );

  const getContent = (key: AboutPageSectionKey) => {
    switch (key) {
      case "me":
        return (
          <p className="whitespace-pre-line text-zinc-800">
            {t("about.me-text")}
          </p>
        );
      case "experience":
        return (
          <ul>
            {Experiences.map((e) => (
              <AboutListItem
                icon={AboutPageButtonIcons[key]}
                primary={e.title}
                secondary={e.company}
                ternary={renderTimespan(e.from, e.to)}
                key={e.title}
              />
            ))}
          </ul>
        );
      case "education":
      default:
        return (
          <ul>
            {Educations.map((e) => (
              <AboutListItem
                icon={AboutPageButtonIcons[key]}
                primary={e.title}
                secondary={e.school}
                ternary={renderTimespan(e.from, e.to)}
                key={e.title}
              />
            ))}
          </ul>
        );
    }
  };
  return (
    <motion.section
      variants={SectionVariants}
      initial="off"
      animate="on"
      className="min-h-[700px] w-full rounded-lg bg-white p-8 pb-2 shadow-lg md:min-h-[500px] lg:min-h-[300px]"
    >
      <h5 className="mb-4 text-lg font-bold">
        {t(`about.${activeSectionKey}`)}
      </h5>
      {getContent(activeSectionKey)}
    </motion.section>
  );
};

type AboutListItemProps = {
  icon: React.ReactNode;
  primary: string;
  secondary: string;
  ternary: React.ReactNode;
  disabled?: boolean;
};

function AboutListItem({
  icon,
  primary,
  secondary,
  ternary,
  disabled,
}: AboutListItemProps) {
  return (
    <li className={clsx({ "text-current/30": disabled })}>
      {icon}
      <h6>{primary}</h6>
      <p>{secondary}</p>
      <p>{ternary}</p>
    </li>
  );
}

function renderTimespan(
  from: MonthYear,
  to: MonthYear | undefined,
): JSX.Element {
  return (
    <>
      <span className="mr-2 text-zinc-600">{`${from.month}/${from.year}`}</span>
      <span className="text-zinc-600">
        {to
          ? `${String.fromCharCode(8211)} ${to.month}/${to.year}`
          : String.fromCharCode(8594)}
      </span>
    </>
  );
}
