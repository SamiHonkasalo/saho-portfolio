import { Header } from "@/layout/Header";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-screen grid min-h-screen w-screen grid-cols-12 overflow-x-hidden">
      <Header />
      {children}
    </div>
  );
};
