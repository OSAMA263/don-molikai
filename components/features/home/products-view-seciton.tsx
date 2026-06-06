"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ProductTab from "./product-tab";
import { useProductsTab } from "./useProductsTab";
import SlideLine from "@/components/animations/slide-line";

export default function ProductsViewSection() {
  const {
    selectedProduct,
    PRODUCTS,
    handleTopTabClick,
    handleBottomTabClick,
    productType,
    item,
  } = useProductsTab();

  return (
    <div
      className="h-dvh overflow-x-hidden **:uppercase sticky top-0 transition-all duration-500"
      style={{
        backgroundColor: selectedProduct?.bg,
      }}
    >
      {/* BACKGROUND TEXT */}
      <div className="size-full flex items-center justify-center flex-col absolute -z-1 text-[12rem] font-extrabold leading-none">
        <SlideLine>piquillo</SlideLine>
        <SlideLine>peppers</SlideLine>
      </div>

      {/* TABS */}
      <div className="flex flex-col items-center justify-evenly h-full">
        {/* TOP TABS BUTTONS */}
        <ProductTab
          arr={PRODUCTS}
          handleClick={handleTopTabClick}
          productType={productType}
        />

        {/* ITEM IMAGE */}
        <ProductImg
          img={selectedProduct!.img}
          link={selectedProduct!.id}
          item={item}
        />

        {/* BOTTOM TABS BUTTONS */}
        <ProductTab
          arr={
            PRODUCTS.find((pro) => pro.name === productType)?.menu ??
            []
          }
          handleClick={handleBottomTabClick}
          item={item}
        />
      </div>
    </div>
  );
}

const ProductImg = ({
  img,
  item,
  link,
}: {
  img: string;
  item: string;
  link: string;
}) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={item}
        initial={{ x: "100vw" }}
        animate={{ x: "0vw" }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.4 }}
        className="min-h-130"
      >
        <Link
          href={"/products/" + link}
          className="hover:[&>img]:-rotate-8 hover:[&>img]:scale-109"
        >
          <Image
            width={500}
            height={100}
            alt={item}
            src={img}
            className="transition-all duration-500 h-130 w-auto"
          />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
