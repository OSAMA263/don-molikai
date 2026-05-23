"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({
  link,
  img,
  className,
  ...rest
}: {
  link: string;
  img: string;
  className?: string;
}) {
  return (
    <motion.div
      transition={{ duration: 0.6, delay: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      {...rest}
      className={`w-fit absolute h-[60dvh] rounded-4xl overflow-hidden  ${className ?? ""}`}
    >
      <Link
        className="size-full inline-block"
        href={link}
        aria-label="products link"
      >
        <Image
          src={img}
          width={380}
          height={200}
          className="object-cover size-full"
          alt={link}
        />
      </Link>
    </motion.div>
  );
}
