"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ProductTab from "./product-tab";
import { useProductsTab } from "./useProductsTab";
import LargeText from "@/components/ui/large-text";

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
      <div className="size-full flex items-center justify-center flex-col absolute -z-1 font-extrabold leading-none">
        <LargeText>piquillo</LargeText>
        <LargeText>peppers</LargeText>
      </div>

      {/* TABS */}
      <div className="flex flex-col items-center lg:justify-evenly justify-center max-lg:gap-10 h-full">
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
        className="xl:h-100 md:h-80 h-40"
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
            className="transition-all duration-500 h-full w-auto"
          />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
