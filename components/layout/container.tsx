export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-20 ${className ?? ""}`}>
      {children}
    </div>
  );
}
