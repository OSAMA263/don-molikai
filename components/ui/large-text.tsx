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
      className={`2xl:text-[11rem] xl:text-9xl ${className ?? ""}`}
      {...rest}
    />
  );
}
