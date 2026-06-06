import ViewPortSection from "@/components/ui/full-view-section";
import ProductCard from "@/components/features/home/product-card";
import ProductsViewSection from "@/components/features/home/products-view-seciton";
import Container from "@/components/layout/container";
import SlideLine from "@/components/animations/slide-line";
import { PRODUCTS_3_CARDS } from "@/data/homepage-products-3-cards";
import HeroTextAnimated from "@/components/features/home/hero-text-sliding-aniamtion";
import SlideChar from "@/components/animations/slide-letters";
import { Crown } from "@/components/ui/navbar/logo";

export default function Home() {
  return (
    <Container>
      {/* HERO SECTION */}
      <ViewPortSection
        delayScale={0.5}
        src="/hero/HERO_HOME.jpg"
        className="relative!"
      >
        <HeroTextAnimated
          className="justify-end text-white pb-20"
          centerText="from"
          left="since 1987"
          right="new tradition"
          par="navarra to all of spain"
          stagger
        />
      </ViewPortSection>

      {/* PRODUCTS 3 CARDS */}
      <section
        className="space-y-20 w-[60%] mx-auto"
        id="products-cards"
      >
        <div className="gap-10 flex text-xl flex-col uppercase items-center justify-center text-center font-extrabold">
          <span className="flex-col items-center text-center">
            <Crown />
            <SlideLine>the importance of pepper</SlideLine>
          </span>
          <div>
            <SlideLine>
              at bom milicia we are back. renewed. and we do it while
              preserving tradition and flavor. from navarra to the
              world
            </SlideLine>
            <SlideLine>
              we come to offer you the best stuffed piquillo peppers
              you have ever tasted. because we do not have grandma,
              but we have her recipe.
            </SlideLine>
          </div>
        </div>

        {/* 3 CARDS */}
        <div className="min-h-[80vh] relative flex items-center justify-center">
          {PRODUCTS_3_CARDS.map(({ img, ...rest }, i) => (
            <ProductCard
              key={img}
              className={
                i == 0 ? "-translate-x-1/2" : "translate-x-1/2"
              }
              {...rest}
              img={img}
            />
          ))}
        </div>
      </section>

      {/* TEXT HERO SECTION 2 */}
      <section id="new-tradition">
        <HeroTextAnimated
          centerText="try"
          className="w-[70%]!"
          left="since 1987"
          right="new tradition"
          par="the flavor of the new tradition"
          stagger
        />
      </section>
      {/*  */}
      <div className="font-extrabold text-xl text-center">
        <Crown />
        <SlideLine>
          come try our stuffed piquillo peppers and discover the best
          flavor.
        </SlideLine>
        <SlideLine>
          a range of delicious products ready to eat. do not miss the
          chance to lick your fingers clean.
        </SlideLine>
      </div>

      {/* BG IMAGE SECTION 2 */}
      <ViewPortSection src="/hero/HOME_MAIN_2.jpg">
        <div className="font-extrabold text-white flex size-full flex-col text-8xl leading-none items-center justify-center uppercase">
          <HeroTextAnimated>
            <SlideChar
              className="flex-col text-8xl"
              line="new tradition"
            />
            <Crown className="mt-10 mb-10 text-white text-6xl" />
            <SlideChar
              className="flex-col text-8xl"
              line="for snacking"
            />
          </HeroTextAnimated>
        </div>
      </ViewPortSection>
      {/* products tabs */}
      <ViewPortSection overlayOnScroll className="relative!">
        <ProductsViewSection />
      </ViewPortSection>
    </Container>
  );
}
