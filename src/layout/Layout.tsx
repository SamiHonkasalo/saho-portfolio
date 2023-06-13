import { Header } from "@/layout/Header";
import { MobileNav } from "@/layout/MobileNav";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-100 relative flex min-h-screen flex-col">
      <Header />
      {children}
      <MobileNav />
    </div>
  );
};
