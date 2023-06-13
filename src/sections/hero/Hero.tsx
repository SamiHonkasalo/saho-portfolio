import { HeroCard } from "@/sections/hero/HeroCard";

export const Hero = () => {
  return (
    <div className="-mt-header h-screen min-h-[800px] bg-hero-image bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="mx-auto mt-header max-w-5xl p-4 pt-16">
        <HeroCard />
      </div>
    </div>
  );
};
