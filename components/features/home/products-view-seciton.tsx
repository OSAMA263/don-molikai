"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ProductTab from "./product-tab";
import { useProductsTab } from "./useProductsTab";

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
        backgroundColor: selectedProduct?.color,
      }}
    >
      {/* BACKGROUND TEXT */}
      <div className="size-full flex items-center justify-center flex-col absolute -z-1 text-[11rem] font-extrabold leading-none">
        <span>piquillo</span>
        <span>peppers</span>
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
        <ProductImg img={selectedProduct!.img} item={item} />

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

const ProductImg = ({ img, item }: { img: string; item: string }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={item}
        initial={{ x: "100vw" }}
        animate={{ x: "0vw" }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.4 }}
        className="min-h-100"
      >
        <Link
          href=""
          className="hover:[&>img]:-rotate-12 hover:[&>img]:scale-104"
        >
          <Image
            width={400}
            height={100}
            alt={item}
            src={img}
            className="transition-all duration-500"
          />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
