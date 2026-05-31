"use client";
import { AutoSlider } from "@/components/ui/auto-slider-text";
import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  bg: string;
  color: string;
  id: string;
};

export default function ProductAnimatedBG(product: Props) {
  const { img, bg, color, id } = product;

  return (
    <Link
      href="/home"
      className="w-96 h-120 inline-block rounded-4xl p-20 hover:[&>#bg]:scale-90 hover:[&_#img]:-rotate-12 hover:[&_#img]:scale-105! relative overflow-hidden hover:[&_#auto-slider]:opacity-100 hover:[&_#auto-slider]:scale-110!"
    >
      {/* bg color shrink on hover */}
      <div
        id="bg"
        style={{ backgroundColor: bg, color }}
        className="absolute overflow-hidden flex-center inset-0 rounded-4xl transition-all duration-400"
      >
        <div id="img" className="relative size-[70%] transition-all duration-400 z-40">
          <Image
            src={img}
            alt={id}
            fill
            className="object-contain"
          />
        </div>
        {/* infinte sliding text animation */}
        <AutoSlider />
      </div>
    </Link>
  );
}
