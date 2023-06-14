import { AboutContent } from "@/sections/about/AboutContent";
import {
  AboutPageButtonIcons,
  AboutPageSectionKey,
  AboutPageSectionKeys,
} from "@/sections/about/config";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import React from "react";

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
        <div className="mb-6 mt-16 grid grid-flow-col items-center justify-center gap-8 px-4 md:justify-start">
          {AboutPageSectionKeys.map((s) => {
            return (
              <motion.button
                key={s}
                type="button"
                className={clsx(
                  "flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-zinc-800 shadow-md transition-all",
                  {
                    "scale-150": activeSectionKey === s,
                    "shadow-xl": activeSectionKey === s,
                    // "animate-pulse": activeSectionKey !== s,
                  },
                )}
                onClick={() => setActiveSectionKey(s)}
              >
                {AboutPageButtonIcons[s]}
              </motion.button>
            );
          })}
        </div>
        <AboutContent activeSectionKey={activeSectionKey} />
      </motion.div>
    </div>
  );
};
