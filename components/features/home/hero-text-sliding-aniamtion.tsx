import SlideChar from "../../animations/slide-letters";

type propsTpypes = {
  centerText?: string;
  left?: string;
  right?: string;
  par?: string;
  stagger?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function HeroTextAnimated(props: propsTpypes) {
  const {
    centerText,
    left,
    right,
    par,
    stagger = false,
    className,
    children,
  } = props;

  return (
    <div
      className={`font-extrabold w-[90%] justify-center text-center mx-auto flex size-full flex-col text-[11rem] leading-none items-center uppercase ${className ?? ""}`}
    >
      {/* CUSTOM TEXT LAYOUT */}
      {children ? (
        children
      ) : (
        <>
          <div className="flex items-center gap-10">
            <div className="text-2xl!">
              <SlideChar
                delay={stagger ? 1.6 : 0}
                line={left ?? ""}
                slide={false}
                className="flex-col"
              />
            </div>

            <SlideChar line={centerText ?? ""} />

            <div className="text-2xl!">
              <SlideChar
                delay={stagger ? 1.6 : 0}
                line={right ?? ""}
                slide={false}
                className="flex-col"
              />
            </div>
          </div>
          <SlideChar delay={stagger ? 0.6 : 0} line={par ?? ""} />
        </>
      )}
    </div>
  );
}
