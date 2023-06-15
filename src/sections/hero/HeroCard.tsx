import { Title } from "@/components/Title";
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
  return (
    <motion.div
      variants={TransitionVariants}
      initial="cardSlideOff"
      whileInView="cardSlideOn"
      viewport={{ once: true }}
      layout
    >
      <div className="flex flex-col rounded-md bg-white/5 p-6 text-gray-200 mix-blend-normal shadow-md backdrop-blur-md md:flex-row">
        <div className="hero-avatar col-span-5 m-auto h-48 w-48 shrink-0 grow-0 rounded-full bg-slate-600/20 bg-[size:70%_90%] bg-bottom-center bg-no-repeat md:order-1" />
        <div className="mt-4 flex flex-col items-center md:mr-2 md:mt-0 md:items-start">
          <Title id="home" scrollMargin="999999px">
            {t("hero.card-title")}
          </Title>
          <motion.div
            variants={TransitionVariants}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true }}
          >
            <p className="ml-1 whitespace-pre-line text-center text-lg font-normal md:text-start">
              {t("hero.card-content")}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
