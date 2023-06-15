import { Header } from "@/layout/Header";
import { MobileNav } from "@/layout/MobileNav";
import { PropsWithChildren } from "react";
import { useMediaQuery } from "react-responsive";

export const Layout = ({ children }: PropsWithChildren) => {
  const isMediumOrLarger = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="w-100 relative flex min-h-screen flex-col">
      <Header isMediumOrLarger={isMediumOrLarger} />
      {children}
      {isMediumOrLarger ? null : <MobileNav />}
    </div>
  );
};
