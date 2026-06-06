import SlideLine from "@/components/animations/slide-line";
import ScrollXOnMouseMove from "@/components/features/history/scrollx-on-mouse-move";
import HeroTextAnimated from "@/components/features/home/hero-text-sliding-aniamtion";
import Container from "@/components/layout/container";
import ViewPortSection from "@/components/ui/full-view-section";
import { HISTORY_DATA } from "@/data/history-data";
import { ALL_PRODUCTS } from "@/data/products";

export default function History() {

  return (
    <Container>
      <ViewPortSection
        className="relative! mb-0!"
        src="/hero/ABOUT_HERO.jpg"
      >
        <HeroTextAnimated
          className="justify-end pb-10 text-white!"
          left="2023"
          right="2026"
          centerText="innovation"
          par="in the heart of tradition"
        />
      </ViewPortSection>

      {/* STICKY SECTIONS */}
      {HISTORY_DATA.map(
        ({ img, bgColor, lines, textColor, ...rest }, i) => (
          <ViewPortSection
            className={`mb-0! ${bgColor ?? ""} ${textColor ?? ""} ${i == HISTORY_DATA.length - 1 ? "min-h- dvh! h-full! relative!" : ""}`}
            src={img}
            overlayOnScroll={i != 0 && true}
            key={"section" + i}
          >
            <Container
              className={`flex-center min-h-dvh justify-center space-y-10!`}
              widthCap
            >
              {bgColor ? (
                <HeroTextAnimated
                  className="h-fit! w-full!"
                  {...{ ...rest }}
                />
              ) : (
                ""
              )}
              <div className="flex-center gap-3">
                {lines?.map((line, j) => (
                  <SlideLine
                    className="text-center font-extrabold leading-none"
                    key={j}
                  >
                    {line}
                  </SlideLine>
                ))}
              </div>
            </Container>
            {i == HISTORY_DATA.length - 1 && (
              <>
                {/* SCROLL X ON MOUSE MOVE */}
                <ScrollXOnMouseMove arr={ALL_PRODUCTS} className="pt-0!" />
              </>
            )}
          </ViewPortSection>
        ),
      )}
    </Container>
  );
}
