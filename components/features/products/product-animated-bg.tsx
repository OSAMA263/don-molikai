"use client";
import { AutoSlider } from "@/components/ui/auto-slider-text";
import { ProductType } from "@/data/products";
import Image from "next/image";
import Link from "next/link";



export default function ProductAnimatedBG(product:ProductType) {
  const { img, bg, color, id } = product;

  return (
    <Link
      href={`/products/${id}`}
      className={`inline-block rounded-4xl p-[12vw] hover:[&>#bg]:scale-90 hover:[&_#img]:-rotate-12 hover:[&_#img]:scale-105! relative overflow-hidden hover:[&_#auto-slider]:opacity-100 hover:[&_#auto-slider]:scale-110!`}
    >
      {/* bg color shrink on hover */}
      <div
        id="bg"
        style={{ backgroundColor: bg, color }}
        className="absolute overflow-hidden flex-center inset-0 rounded-4xl transition-all duration-400"
      >
        <div
          id="img"
          className="relative size-[70%] transition-all duration-400 z-40"
        >
          <Image
            src={img}
            alt={id}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </div>
        {/* infinte sliding text animation */}
        <AutoSlider />
      </div>
    </Link>
  );
}
