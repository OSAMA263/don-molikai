"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({
  img,
  className,
  ...rest
}: {
  img: string;
  className?: string;
}) {
  return (
    <motion.div
      transition={{ duration: 0.6, delay: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      {...rest}
      className={`w-fit absolute h-[60dvh] rounded-4xl overflow-hidden  ${className ?? ""}`}
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
          className="object-cover size-full"
          alt={"product card"}
        />
      </Link>
    </motion.div>
  );
}
