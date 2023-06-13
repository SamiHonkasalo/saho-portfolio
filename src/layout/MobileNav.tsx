import { Nav } from "@/layout/Nav";

export const MobileNav = () => {
  return (
    <div className="sticky bottom-0 z-40 block h-header w-full bg-zinc-800 md:hidden">
      <Nav />
    </div>
  );
};
