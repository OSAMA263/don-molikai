"use client";

import { ALL_PRODUCTS } from "@/data/products";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import ProductAnimatedBG from "../products/product-animated-bg";

export default function ScrollXOnMouseMove({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);

  // sliding the div on mouse location
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current!;
    const slider = sliderRef.current!;

    const relative =
      (e.clientX - container.getBoundingClientRect().left) /
      container.offsetWidth;

    const maxScroll = slider.scrollWidth - container.offsetWidth;

    mouseX.set(-relative * maxScroll);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`w-full overflow-hidden h-full z-55 relative py-20 ${className ?? ""}`}
    >
      <motion.div
        style={{ x: mouseX }}
        ref={sliderRef}
        className="relative flex gap-10 w-max transition-all duration-500 ease-linear px-10"
      >
        {ALL_PRODUCTS.map((pro) => (
          <ProductAnimatedBG key={pro.id} {...pro} />
        ))}
      </motion.div>
    </div>
  );
}
