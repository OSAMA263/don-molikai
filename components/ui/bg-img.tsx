"use client";
import { motion } from "framer-motion";

export default function BackgroundImg({
  src,
  children,
  className,
  delayScale,
}: {
  src: string;
  children: React.ReactNode;
  className?: string;
  delayScale?: number;
}) {
  return (
    <div
      className={`overflow-hidden relative min-h-full ${className ?? ""}`}
    >
      {children}
      <motion.img
        initial={{ scale: 1.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, delay: delayScale ?? 0 }}
        viewport={{ once: true }}
        src={src}
        alt={"bg iamge"}
        className="size-full absolute -z-1 inset-0 object-cover"
      />
    </div>
  );
}
