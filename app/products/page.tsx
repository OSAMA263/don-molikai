import SlideLine from "@/components/animations/slide-line";
import HeroTextAnimated from "@/components/features/home/hero-text-sliding-aniamtion";
import MenuSection from "@/components/features/products/menu-section";
import Container from "@/components/layout/container";
import ViewPortSection from "@/components/ui/full-view-section";
import Crown from "@/components/ui/navbar/crown";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Products",
  description:
    "Browse our range of premium food products, made with carefully selected ingredients to deliver exceptional taste and quality.",
};

export default function Products() {
  return (
    <Container>
      {/* HERO SECTION */}
      <ViewPortSection
        src="/hero/HERO_PRODUCTS.jpg"
        className="relative!"
      >
        <HeroTextAnimated
          className="sm:justify-end text-white pb-20"
          centerText="we"
          left="since 1987"
          right="new tradition"
          par="have a lot to offer"
          stagger
        />
      </ViewPortSection>

      <div className="flex-center uppercase font-extrabold">
        <Crown />
        <SlideLine>try the flavor of the new tradition</SlideLine>

        {/* menus products section + cards */}
      </div>
      <div className="space-y-40!">
        {PRODUCTS.map((cat, i) => (
          <MenuSection key={cat.name} ind={i} />
        ))}
      </div>
    </Container>
  );
}
