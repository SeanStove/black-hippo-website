import { HTMLProps, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & HTMLProps<HTMLDivElement>;

export function Container({ children, className }: ContainerProps) {
  return (
    <>
      <div className={`${className} w-full max-w-[1600px] px-8 m-auto`}>
        {children}
      </div>
    </>
  );
}
