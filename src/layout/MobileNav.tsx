import { Nav } from "@/layout/Nav";

export const MobileNav = () => {
  return (
    <div className="fixed bottom-0 z-40 block h-header w-full bg-zinc-800 shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),_0px_3px_4px_0px_rgba(0,0,0,0.14),_0px_1px_8px_0px_rgba(0,0,0,0.12)] md:hidden">
      <Nav />
    </div>
  );
};
