export type MonthYear = {
  month: number;
  year: number;
};
export type AboutTimespan = {
  from: MonthYear;
  to?: MonthYear;
};

export type EducationItem = {
  title: string;
  school: string;
};
export type EducationItemProps = EducationItem & AboutTimespan;

export type ExperienceItem = {
  title: string;
  company: string;
  disabled?: boolean;
};
export type ExperienceItemProps = ExperienceItem & AboutTimespan;
