"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({
  img,
  i,
  className,
  ...rest
}: {
  i: number;
  img: string;
  className?: string;
}) {
  return (
    <motion.div
      transition={{ duration: 0.6, delay: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      {...rest}
      className={`xl:w-fit md:w-[40%] lg:absolute lg:h-[60dvh] rounded-4xl overflow-hidden ${i == 0 ? "lg:-translate-x-1/2" : "lg:translate-x-1/2"} ${i !== 1 ? "max-lg:hidden" : ""} ${className ?? ""}`}
    >
      <Link
        className="size-full inline-block"
        href={"/products"}
        aria-label="products link"
      >
        <Image
          src={img}
          width={380}
          height={200}
          className="object-cover size-auto"
          alt={"product card"}
        />
      </Link>
    </motion.div>
  );
}
