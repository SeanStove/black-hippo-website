import { HTMLProps, PropsWithChildren } from "react";

type TextProps = PropsWithChildren & HTMLProps<HTMLParagraphElement>;

export function Text({ children, className }: TextProps) {
  return (
    <>
      <p className={`${className} text-base text-text leading-loose`}>
        {children}
      </p>
    </>
  );
}
