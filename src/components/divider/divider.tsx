type DividerProps = {
  text?: string;
};

export function Divider({ text }: DividerProps) {
  return (
    <div className="relative flex items-center max-w-[540px]">
      <div className="uppercase text-secondary text-base whitespace-nowrap font-light">
        {text}
      </div>
      <div className="ml-2 bg-primary h-[1px] w-full"></div>
    </div>
  );
}
