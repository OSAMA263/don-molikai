import Link from "next/link";
import { CSSProperties } from "react";

type PropsType = {
  as?: "a" | "button";
  href?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: CSSProperties;
  blank?: boolean;
};

export default function MainBtn({
  as = "button",
  children,
  className,
  style,
  blank = false,
  ...rest
}: PropsType) {
  const classes = `relative block transition-all duration-300 overflow-hidden hover:[&>.first]:-translate-y-full hover:[&>.sec]:-translate-y-full [&_span]:size-full [&_span]:transition-all [&_span]:duration-500 ${className ?? ""}`;

  if (as === "a") {
    return (
      <Link
        href={rest.href ?? "#"}
        style={style}
        target={blank ? "_blank" : "_parent"}
        rel="noopener noreferrer"
        className={classes}
      >
        <span className="first block">{children}</span>
        <span className="sec absolute left-0">{children}</span>
      </Link>
    );
  }

  const Component = as;
  return (
    <Component {...rest} className={classes}>
      <span className="first block">{children}</span>
      <span className="sec absolute left-0">{children}</span>
    </Component>
  );
}
