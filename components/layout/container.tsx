export default function Container({
  children,
  className,
  widthCap = false,
}: {
  children: React.ReactNode;
  className?: string;
  widthCap?: boolean;
}) {
  return (
    <div
      className={`space-y-24 mx-auto ${className ?? ""} ${widthCap ? "2xl:w-[75%] xl:w-[82%] w-[98%]" : ""}`}
    >
      {children}
    </div>
  );
}
