import meIcon from "../assets/me-icon.svg?raw";
import experienceIcon from "../assets/experience-icon.svg?raw";
import educationIcon from "../assets/education-icon.svg?raw";
import reactIcon from "../assets/react-icon.svg?raw";
import typescriptIcon from "../assets/typescript-icon.svg?raw";
import dotnetIcon from "../assets/dotnet-icon.svg?raw";
import nextjsIcon from "../assets/nextjs-icon.svg?raw";
import muiIcon from "../assets/mui-icon.svg?raw";
import tailwindIcon from "../assets/tailwind-icon.svg?raw";
import azureIcon from "../assets/azure-icon.svg?raw";
import dockerIcon from "../assets/docker-icon.svg?raw";
import kubernetesIcon from "../assets/kubernetes-icon.svg?raw";

export const AboutPageSectionKeys = ["me", "experience", "education"] as const;
export type AboutPageSectionKey = (typeof AboutPageSectionKeys)[number];
export type AboutPageSection = Record<AboutPageSectionKey, { order: number }>;

export type TechnologyType = {
  name: string;
  icon: JSX.Element;
};

export const AboutPageButtonIcons: Record<AboutPageSectionKey, string> = {
  me: meIcon,
  experience: experienceIcon,
  education: educationIcon,
};

export const Technologies: TechnologyType[] = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "TypeScript",
    icon: typescriptIcon,
  },
  {
    name: "C#/.NET",
    icon: dotnetIcon,
  },
  {
    name: "Next.js",
    icon: nextjsIcon,
  },
  {
    name: "MUI",
    icon: muiIcon,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
  {
    name: "Azure",
    icon: azureIcon,
  },
  {
    name: "Docker",
    icon: dockerIcon,
  },
  {
    name: "Kubernetes",
    icon: kubernetesIcon,
  },
];
