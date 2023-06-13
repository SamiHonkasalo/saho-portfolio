import { HeroCard } from "@/sections/hero/HeroCard";

export const Hero = () => {
  return (
    <div className="col-span-full -mt-header grid h-screen min-h-[800px] grid-cols-12 bg-hero-image bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="col-span-6 col-start-4 mt-header pt-20">
        <HeroCard />
      </div>
    </div>
  );
};
