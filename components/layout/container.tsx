export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-20 min-h-dvh ${className ?? ""}`}>
      {children}
    </div>
  );
}
