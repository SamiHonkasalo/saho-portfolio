import { HeroCard } from "@/sections/hero/HeroCard";
import "@/sections/hero/hero.css";

export const Hero = () => {
  return (
    <div className="hero-image h-screen max-h-[1400px] min-h-[800px] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="mx-auto mt-header max-w-5xl p-4 pt-16">
        <HeroCard />
      </div>
    </div>
  );
};
