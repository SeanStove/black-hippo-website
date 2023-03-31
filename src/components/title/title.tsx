import { HTMLProps, PropsWithChildren } from "react";

type TitleProps = PropsWithChildren & HTMLProps<HTMLHeadingElement>;

export function Title({ children, className }: TitleProps) {
  return (
    <>
      <h2
        className={`text-5xl lg:text-7xl leading-snug text-secondary ${className}`}
      >
        {children}
      </h2>
    </>
  );
}
