import { AboutContent } from "@/sections/about/AboutContent";
import {
  AboutPageButtonIcons,
  AboutPageSectionKey,
  AboutPageSectionKeys,
} from "@/sections/about/config";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const TransitionVariants: Variants = {
  cardOff: {
    y: 300,
    rotate: -10,
  },
  cardOn: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const AboutCard = () => {
  const { t } = useTranslation();
  const [activeSectionKey, setActiveSectionKey] =
    React.useState<AboutPageSectionKey>("me");

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        variants={TransitionVariants}
        initial="cardOff"
        whileInView="cardOn"
        viewport={{ once: true }}
      >
        <div className="mt-16 flex w-full max-w-xs flex-row items-center justify-start gap-4">
          {AboutPageSectionKeys.map((s) => {
            const isActive = activeSectionKey === s;
            return (
              <div
                key={s}
                className="flex flex-1 flex-col items-center justify-center p-1"
              >
                <motion.button
                  type="button"
                  aria-describedby={`label-${s}`}
                  className={clsx(
                    "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-800 shadow-xl transition-all",
                    {
                      "scale-150 shadow-2xl [&>*]:stroke-2": isActive,
                      "hover:scale-125": !isActive,
                    },
                  )}
                  onClick={() => setActiveSectionKey(s)}
                >
                  {AboutPageButtonIcons[s]}
                </motion.button>
                <span
                  id={`label-${s}`}
                  className={clsx("mt-3 text-lg", {
                    "font-normal": !isActive,
                    "font-bold": isActive,
                  })}
                >
                  {t(`about.${s}`)}
                </span>
              </div>
            );
          })}
        </div>
        <AboutContent activeSectionKey={activeSectionKey} />
      </motion.div>
    </div>
  );
};
