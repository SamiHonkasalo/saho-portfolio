import { PropsWithChildren } from "react";

type TitleProps = {
  id?: string;
};
export const Title = ({ children, id }: PropsWithChildren<TitleProps>) => {
  return (
    <div
      className="mb-10 h-min scroll-m-header rounded-md bg-zinc-800 bg-gradient-to-r from-white/5 via-white/5 to-white/5 px-6 py-2 text-gray-200"
      id={id}
    >
      <h4 className="text-center text-2xl font-bold">{children}</h4>
    </div>
  );
};
