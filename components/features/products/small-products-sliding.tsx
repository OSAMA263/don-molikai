"use client";
import { ProductType } from "@/data/products";
import useEmblaCarousel from "embla-carousel-react";
import ProductAnimatedBG from "./product-animated-bg";

export default function Slider({
  arr,
}: {
  arr: ProductType[] | undefined;
}) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {arr?.map((pro) => (
          <div className="min-w-0 flex-[0_0_100%] flex-center" key={pro.id}>
            <ProductAnimatedBG {...pro}/>
          </div>
        ))}
      </div>
    </div>
  );
}
