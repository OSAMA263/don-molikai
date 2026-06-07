import SlideChar from "../animations/slide-letters";

export default function LargeText({
  children,
  className,
  ...rest
}: {
  children?: string;
  className?: string;
} & Record<string, unknown>) {
  return (
    <SlideChar
      line={children ?? ""}
      className={`2xl:text-[10rem] md:text-8xl sm:text-6xl text-5xl ${className ?? ""}`}
      {...rest}
    />
  );
}
