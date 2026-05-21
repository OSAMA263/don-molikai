export default function BackgroundImg({
  src,
  children,
  className,
}: {
  src: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={`bg-cover bg-no-repeat bg-center min-h-dvh ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
