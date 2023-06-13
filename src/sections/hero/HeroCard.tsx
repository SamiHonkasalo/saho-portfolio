import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const TransitionVariants: Variants = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
  cardSlideOff: {
    x: -50,
  },
  cardSlideOn: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

export const HeroCard = () => {
  const { t } = useTranslation();
  const dob = new Date(1994, 10, 3);
  const diffMs = Date.now() - dob.getTime();
  const ageDate = new Date(diffMs);
  const age = Math.abs(ageDate.getFullYear() - 1970);
  return (
    <motion.div
      variants={TransitionVariants}
      initial="cardSlideOff"
      whileInView="cardSlideOn"
      viewport={{ once: true }}
      layout
    >
      <div className="grid grid-cols-12 rounded-md bg-white/5 p-6 text-gray-200 mix-blend-normal shadow-md backdrop-blur-md">
        <div className="col-span-7">
          <div className="mb-10 h-min rounded-md bg-zinc-800 p-2" id="home">
            <h4 className="text-2xl font-bold">{t("hero.card-title")}</h4>
          </div>
          <motion.div
            variants={TransitionVariants}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true }}
          >
            <p className="ml-1 whitespace-pre-line text-lg font-normal">
              {t("hero.card-content", { age })}
            </p>
          </motion.div>
        </div>
        <div className="col-span-5 m-auto h-48 w-48 rounded-full bg-slate-600/20 bg-hero-avatar bg-[size:70%_90%] bg-bottom-center bg-no-repeat" />
      </div>
    </motion.div>
  );
};
