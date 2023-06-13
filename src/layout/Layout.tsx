import { Header } from "@/layout/Header";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-100 relative grid min-h-screen grid-cols-12">
      <Header />
      {children}
    </div>
  );
};
