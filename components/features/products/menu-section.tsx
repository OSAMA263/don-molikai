import SlideLine from "@/components/animations/slide-line";
import ViewPortSection from "@/components/ui/full-view-section";
import { Crown } from "@/components/ui/navbar/logo";
import HeroTextAnimated from "../home/hero-text-sliding-aniamtion";
import ProductAnimatedBG from "./product-animated-bg";
import { PRODUCTS, PRODUCTS_SECTIONS } from "@/data/products";

export default function MenuSection({ ind }: { ind: number }) {
  const { bg, left, right, centerText, yapping_with_crown } =
    PRODUCTS_SECTIONS[ind];

  return (
    <div className="space-y-10">
      {/* menu name and image */}
      <HeroTextAnimated {...{ left, right, centerText }} />
      <ViewPortSection
        src={bg}
        className="lg:w-[70vw]! w-[95%] min-h-[80vh]! h-[80vh]! rounded-2xl overflow-hidden relative! mx-auto"
      />

      {/* a details and yapping */}
      <div className="flex-center gap-6">
        <Crown />
        <SlideLine className="lg:w-[60%] mx-auto font-extrabold! uppercase text-center">
          {yapping_with_crown}
        </SlideLine>
      </div>

      {/* products cards */}
      <div className="flex-center flex-wrap flex-row gap-4">
        {PRODUCTS[ind].menu?.map((product) => (
          <ProductAnimatedBG key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}