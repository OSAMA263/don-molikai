"use client";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa6";

export default function ProductsTabs() {
  const [productType, setProductType] = useState("jar");
  const [item, setItem] = useState("salmon");

  // changing products handler click
  const handleClick = (product: string) => {
    const selectedType = PRODUCTS.find((pro) => pro.name === product);
    setProductType(product);
    setItem(selectedType?.menu[0]?.name ?? "");
  };

  // selected product
  const selectedProduct = PRODUCTS.find(
    (pro) => pro.name === productType,
  )?.menu.find((pro) => pro.name == item);

  return (
    <div
      className="h-dvh **:uppercase sticky top-0 transition-all duration-500"
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
        {/* PRODUTS TYPES */}
        <div className="flex items-center gap-10">
          {PRODUCTS.map(({ name }, i) => (
            <Fragment key={name}>
              <button
                onClick={() => handleClick(name)}
                className={productType == name ? "underline" : ""}
              >
                {name}
              </button>
              {i == 1 && <Crown />}
            </Fragment>
          ))}
        </div>

        {/* ITEM IMAGE */}
        <Image
          width={200}
          height={100}
          alt={item}
          src={"/"+selectedProduct!.img}
        />
        {/* MENU */}
        <div className="flex items-center gap-10">
          {PRODUCTS.find((pro) => pro.name === productType)?.menu.map(
            ({ name }) => (
              <button key={name} onClick={() => setItem(name)}>
                {name}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function Crown({ className }: { className?: string }) {
  return (
    <FaCrown
      className={`flex justify-self-center text-red text-3xl mb-4 ${className ?? ""}`}
    />
  );
}
