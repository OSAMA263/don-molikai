import { PRODUCTS } from "@/data/products";
import { useEffect, useState } from "react";

export function useProductsTab() {
  const [productType, setProductType] = useState("jar");
  const [item, setItem] = useState("salmon");

  // changing top tab menu handler
  const handleTopTabClick = (product: string) => {
    const selectedType = PRODUCTS.find((pro) => pro.name === product);
    setProductType(product);
    setItem(selectedType?.menu[0]?.name ?? "");
  };

  // changing bottom tab menu handler
  const handleBottomTabClick = (name: string) => {
    setItem(name);
  };

  // predownload all imgs first, so it doesnt fuck up the aniamtion
  useEffect(() => {
    const images = new Set<string>();

    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // selected product
  const selectedProduct = PRODUCTS.find(
    (pro) => pro.name === productType,
  )?.menu.find((pro) => pro.name == item);

  return {
    selectedProduct,
    PRODUCTS,
    handleTopTabClick,
    handleBottomTabClick,
    productType,
    item,
  };
}
