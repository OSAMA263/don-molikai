type PropsType = {
  as?: "a" | "button";
  href?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function MainBtn({
  as: Component = "button",
  children,
  className,
  ...rest
}: PropsType) {
  return (
    <Component
      {...rest}
      
      className={`relative transition-all duration-300 overflow-hidden hover:[&>#first]:-translate-y-full hover:[&>#sec]:-translate-y-full [&_span]:size-full [&_span]:transition-all [&_span]:duration-500 ${className ?? ""}`}
    >
      <span id="first" className="block">{children}</span>
      <span id="sec" className="absolute left-0">
        {children}
      </span>
    </Component>
  );
}
